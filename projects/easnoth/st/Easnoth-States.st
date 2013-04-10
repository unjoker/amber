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
	self subclassResponsibility
!

cell: aCell canBeAttackedBy: side
	self subclassResponsibility
!

mouseClick: aCell context: gameContext
	self subClassResponsbility
!

removeSelector: aCell
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

mouseClick: aCell context: gameContext
	aCell root showActiveMonsters
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
	gameContext currentMonster moveTo: aCell
!

removeSelector: aCell
	aCell removeGameOverTile.
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
	aCell removeGameOverTile.
	aCell changeState: CWHasMonster
!

showActiveMonster: aCell
	self error: 'should not happen'.
! !

CWState subclass: #CWMonsterState
	instanceVariableNames: ''
	package: 'Easnoth-States'!

!CWMonsterState methodsFor: 'monster state API'!

select: aMonster inContext: gameContext
	self subclassResponsibility
!

showActiveMonster: aMonster
	aMonster parent addSelectorColored: 'white'
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

CWMonsterState subclass: #CWHasAttacked
	instanceVariableNames: ''
	package: 'Easnoth-States'!
!CWHasAttacked commentStamp!
Monster can only move!

CWMonsterState subclass: #CWInactive
	instanceVariableNames: ''
	package: 'Easnoth-States'!
!CWInactive commentStamp!
Monster cannot do anything :)!

!CWInactive methodsFor: 'monster state API'!

select: aMonster inContext: gameContext
	aMonster root showActiveMonsters.
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

select: aMonster inContext: gameContext
	(aMonster root monstersFromSide: aMonster side) do: [ :each |
		each changeState: CWInactive ].
	aMonster changeState: CWActive.
	aMonster select: gameContext
! !

