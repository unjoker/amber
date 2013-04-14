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
	gameContext currentMonster attackTo: aCell inContext: gameContext
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

checkForNextTurn: aMonster
	self subclassResponsibility
!

monster: aMonster attackTo: aCell inContext: gameContext
	self subclassResponsibility
!

monster: aMonster moveTo: aCell inContext: gameContext
	self monster: aMonster moveTo: aCell inContext: gameContext callback: []
!

select: aMonster inContext: gameContext
	self subclassResponsibility
!

showActiveMonster: aMonster
	aMonster parent addSelectorColored: 'white'
! !

!CWMonsterState methodsFor: 'private'!

changeStateAfterMoving: aMonster
	self subclassResponsibility
!

monster: aMonster animationMoveFrom: cell1 to: cellLast callback: callback
	"To refactor"
	
	| path moveNumber |
	
	path := self pathFrom: cell1 to: cellLast.
	moveNumber := path size - 1.

	cell1 root removeSelection.

	1 to: moveNumber do: [ :j |
		[ (path at: path size - j) monster: aMonster.
        (path at: path size - j) changeState: CWHasMonster.
        (path at: path size + 1 - j) removeMonster.
		 (path at: path size + 1 - j) changeState: CWFree.
        cell1 root updateMonstersAndGOTs ] valueWithTimeout: 300 * j ].

	aMonster currentMove: aMonster currentMove - moveNumber.
	callback valueWithTimeout: 300 * moveNumber
!

monster: aMonster attackNeighbour: anotherMonster inContext: gameContext
	
	self changeStateAfterAttacking: aMonster.
    aMonster root removeSelection.

	aMonster rollDicesCallBack: [ :diceRes |
		anotherMonster removeHP: diceRes kills.
        aMonster select: gameContext.
		aMonster checkForNextTurn.
		aMonster updateMonstersAndGOTs ]
!

monster: aMonster moveTo: aCell inContext: gameContext callback: callback
	"triggers the animation for the monster move"
	
	"should stop the events here"

	"animation"
	self monster: aMonster animationMoveFrom: gameContext currentCell to: aCell callback:[	
		self changeStateAfterMoving: aMonster.
		aMonster select: gameContext.
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

checkForNextTurn: aMonster
	"do nothing for now"
!

monster: aMonster attackTo: aCell inContext: gameContext
	| toMoveCell |
	(aCell neighbours includes: aMonster parent) 
		ifFalse: [ 
			toMoveCell := (aCell neighbours select: [:each | each state = CWFreeSelected default ]) asArray atRandom.
			self monster: aMonster moveTo: toMoveCell inContext: gameContext callback: [
			aMonster attackTo: aCell inContext: gameContext.
			aMonster updateMonstersAndGOTs ] ] 
		ifTrue: [ self monster: aMonster attackNeighbour: aCell monster inContext: gameContext ]
!

select: aMonster inContext: gameContext
	aMonster parent selectableNeighboursMoveCycle: aMonster currentMove attackCycle: aMonster range fromSide: aMonster side.
	gameContext currentMonster: aMonster
! !

!CWActive methodsFor: 'private'!

changeStateAfterAttacking: aMonster
	aMonster changeState: CWHasAttacked
!

changeStateAfterMoving: aMonster
	aMonster currentMove = 0 
		ifTrue: [ aMonster changeState: CWHasMoved ]
! !

CWMonsterState subclass: #CWHasAttacked
	instanceVariableNames: ''
	package: 'Easnoth-States'!
!CWHasAttacked commentStamp!
Monster can only move!

!CWHasAttacked methodsFor: 'monster state API'!

checkForNextTurn: aMonster
	"do nothing for now"
!

select: aMonster inContext: gameContext
	aMonster parent movableNeighboursCycle: aMonster currentMove.
	gameContext currentMonster: aMonster
! !

!CWHasAttacked methodsFor: 'private'!

changeStateAfterAttacking: aMonster
	self error: 'should not happen'
!

changeStateAfterMoving: aMonster
	aMonster currentMove = 0 
		ifTrue: [ aMonster changeState: CWInactive ]
! !

CWMonsterState subclass: #CWHasMoved
	instanceVariableNames: ''
	package: 'Easnoth-States'!
!CWHasMoved commentStamp!
The monster has moved its full moved there. (currentMove = 0)!

!CWHasMoved methodsFor: 'monster state public API'!

checkForNextTurn: aMonster
	| col |
	col := 	aMonster parent attackableNeighboursCycle: aMonster range fromSide: aMonster side.
	col ifEmpty: [ aMonster announce: CWNextTurnEvent new ]
!

monster: aMonster attackTo: aCell inContext: gameContext
	self monster: aMonster attackNeighbour: aCell monster inContext: gameContext
!

monster: aMonster moveTo: aCell inContext: gameContext
	self error: 'should not happen'.
!

select: aMonster inContext: gameContext
	aMonster parent attackableNeighboursCycle: aMonster range fromSide: aMonster side.
	gameContext currentMonster: aMonster
! !

!CWHasMoved methodsFor: 'private'!

changeStateAfterAttacking: aMonster
	aMonster changeState: CWInactive
!

changeStateAfterMoving: aMonster
	self error: 'should not happen'
! !

CWMonsterState subclass: #CWInactive
	instanceVariableNames: ''
	package: 'Easnoth-States'!
!CWInactive commentStamp!
Monster cannot do anything :)!

!CWInactive methodsFor: 'monster state API'!

checkForNextTurn: aMonster
	aMonster announce: CWNextTurnEvent new
!

monster: aMonster moveTo: aCell inContext: gameContext
	self error: 'should not happen'.
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

!CWInactive methodsFor: 'private'!

changeStateAfterAttacking: aMonster
	self error: 'should not happen'.
!

changeStateAfterMoving: aMonster
	self error: 'shouldNotHappen'.
! !

CWMonsterState subclass: #CWToPick
	instanceVariableNames: ''
	package: 'Easnoth-States'!
!CWToPick commentStamp!
The player has to choice one of the toPick monster to activate them!

!CWToPick methodsFor: 'monster state public API'!

checkForNextTurn: aMonster
	self error: 'should not happen'
!

monster: aMonster moveTo: aCell inContext: gameContext
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

!CWToPick methodsFor: 'private'!

changeStateAfterAttacking: aMonster
	self error: 'should not happen'.
!

changeStateAfterMoving: aMonster
	self error: 'should not happen'
! !

