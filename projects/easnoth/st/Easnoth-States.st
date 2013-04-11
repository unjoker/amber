Smalltalk current createPackage: 'Easnoth-States'!
Object subclass: #CWState
	instanceVariableNames: ''
	package: 'Easnoth-States'!

CWState class instanceVariableNames: 'default'!

!CWState class methodsFor: 'instance creation'!

default
	^ default ifNil: [ default := self new ]
!

initializeStateFor: aCell
	self subclassResponsbility
! !

CWState subclass: #CWCellState
	instanceVariableNames: ''
	package: 'Easnoth-States'!

!CWCellState methodsFor: 'cell state API'!

addSelector: aCell
	self subclassResponsibility
!

canMoveTo: cell
	^ false
!

cell: aCell canBeAttackedBy: side
	^ false
!

mouseClick: aCell context: gameContext
	self subClassResponsbility
!

removeSelector: aCell
	aCell removeGameOverTile
!

showActiveMonster: aCell
	self subclassResponsibility
! !

!CWCellState class methodsFor: 'instance creation'!

initializeStateFor: aCell
	aCell free 
		ifTrue: [ aCell changeState: CWFree ] 
		ifFalse: [ aCell changeState: CWHasMonster ]
! !

CWCellState subclass: #CWFree
	instanceVariableNames: ''
	package: 'Easnoth-States'!
!CWFree commentStamp!
I am the state of a cell that has no monsters on it and that has no game selector on it.!

!CWFree methodsFor: 'cell state API'!

addSelector: aCell
	aCell addSelectorColored: 'green'.
	aCell changeState: CWFreeSelected
!

canMoveTo: aCell
	"should dispatch but as it is not used..."
	"^ aCell tile isWall not"
	^ true
!

mouseClick: aCell context: gameContext
	aCell root 
		removeSelection;
		showActiveMonsters
!

showActiveMonster: aCell
! !

CWCellState subclass: #CWFreeSelected
	instanceVariableNames: ''
	package: 'Easnoth-States'!
!CWFreeSelected commentStamp!
I am the state of a cell that has no monsters on it, that has a game selector on it.
The cell cannot be a wall.!

!CWFreeSelected methodsFor: 'cell state API'!

addSelector: aCell
	self error: 'should not happen'.
!

mouseClick: aCell context: gameContext
	gameContext currentMonster moveTo: aCell inContext: gameContext
!

removeSelector: aCell
	super removeSelector: aCell.
	aCell changeState: CWFree
!

showActiveMonster: aCell
	self error: 'should not happen'.
! !

CWCellState subclass: #CWHasMonster
	instanceVariableNames: ''
	package: 'Easnoth-States'!
!CWHasMonster commentStamp!
I am the state of a cell that has some monsters on it and that has no game selector on it.!

!CWHasMonster methodsFor: 'cell state API'!

addSelector: aCell
	aCell addSelectorColored: 'red'.
	aCell changeState: CWHasMonsterSelected
!

cell: aCell canBeAttackedBy: side
	^ (aCell side = side) not
!

mouseClick: aCell context: gameContext
	aCell monster select: gameContext
!

showActiveMonster: aCell
	aCell monster showActiveMonster.
! !

CWCellState subclass: #CWHasMonsterSelected
	instanceVariableNames: ''
	package: 'Easnoth-States'!
!CWHasMonsterSelected commentStamp!
I am the state of a cell that has a monsters on it and a game selector.
The monster has to be on the opposite side of the current playing monster.!

!CWHasMonsterSelected methodsFor: 'cell state API'!

addSelector: aCell
	self error: 'should not happen'.
!

mouseClick: aCell context: gameContext
	gameContext currentMonster attackTo: aCell.
!

removeSelector: aCell
	super removeSelector: aCell.
	aCell changeState: CWHasMonster
!

showActiveMonster: aCell
	self error: 'should not happen'.
! !

CWState subclass: #CWMonsterState
	instanceVariableNames: ''
	package: 'Easnoth-States'!

!CWMonsterState methodsFor: 'monster state API'!

checkForNextTurn
	self subclassResponsibility
!

select: aMonster inContext: gameContext
	self subclassResponsibility
!

showActiveMonster: aMonster
	aMonster parent addSelectorColored: 'white'
! !

!CWMonsterState methodsFor: 'private'!

monster: aMonster animationMoveFrom: cell1 to: cellLast callback: callback
	| path |
	
	path := self pathFrom: cell1 to: cellLast .

	cell1 root removeSelection.

	1 to: path size - 1 do: [ :j |
		[ (path at: path size - j) monster: aMonster.
        (path at: path size + 1 - j) removeMonster.
        cell1 root updateMonstersAndGOTs ] valueWithTimeout: 300 * j ].

	callback valueWithTimeout: 300 * (path size - 1)
!

monster: aMonster moveTo: aCell inContext: gameContext callback: callback
	"triggers the animation for the monster move"
	
	"should stop the events here"

	"animation"
	self monster: aMonster animationMoveFrom: gameContext currentCell to: aCell callback:[	
        gameContext currentCell changeState: CWFree.
        aCell changeState: CWHasMonster.
		aCell root updateMonstersAndGOTs.
		aMonster checkForNextTurn.
		callback value.
		"should restart the events here"
	].
!

pathFrom: cell1 to: cellLast
	| path |
	path := Array with: cellLast.
	[cell1 = path last] whileFalse: [path add: path last prevCell].
	^ path
! !

!CWMonsterState class methodsFor: 'instance creation'!

initializeStateFor: aMonster
	aMonster changeState: CWInactive
! !

CWMonsterState subclass: #CWActive
	instanceVariableNames: ''
	package: 'Easnoth-States'!
!CWActive commentStamp!
Monster can move and attack!

!CWActive methodsFor: 'monster state API'!

checkForNextTurn
	"do nothing"
!

monster: aMonster moveTo: aCell inContext: gameContext
	self monster: aMonster moveTo: aCell inContext: gameContext callback: []
!

select: aMonster inContext: gameContext
	aMonster parent selectableNeighboursMoveCycle: aMonster currentMove attackCycle: aMonster range fromSide: aMonster side.
	gameContext currentMonster: aMonster
! !

CWMonsterState subclass: #CWHasAttacked
	instanceVariableNames: ''
	package: 'Easnoth-States'!
!CWHasAttacked commentStamp!
Monster can only move!

!CWHasAttacked methodsFor: 'monster state API'!

checkForNextTurn
	"do nothing"
!

select: aMonster inContext: gameContext
	aMonster parent movableNeighboursCycle: aMonster currentMove.
	gameContext currentMonster: aMonster
! !

CWMonsterState subclass: #CWInactive
	instanceVariableNames: ''
	package: 'Easnoth-States'!
!CWInactive commentStamp!
Monster cannot do anything :)!

!CWInactive methodsFor: 'monster state API'!

checkForNextTurn
	"CALL THE NEXT TURN TO IMPLEMENT"
!

select: aMonster inContext: gameContext
	aMonster root 
		removeSelection;
		showActiveMonsters.
	gameContext currentMonster: aMonster.
!

showActiveMonster: aMonster
	"Just do nothing, this monster is not actve"
! !

CWMonsterState subclass: #CWToPick
	instanceVariableNames: ''
	package: 'Easnoth-States'!
!CWToPick commentStamp!
The player has to choice one of the toPick monster to activate them!

!CWToPick methodsFor: 'not yet classified'!

checkForNextTurn
	self error: 'should not happen'
!

select: aMonster inContext: gameContext
	aMonster root removeSelection.
	(aMonster root monstersFromSide: aMonster side) do: [ :each |
		each changeState: CWInactive ].
	aMonster changeState: CWActive.
	aMonster currentMove: aMonster move.
	aMonster select: gameContext
! !

