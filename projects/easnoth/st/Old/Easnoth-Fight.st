Smalltalk current createPackage: 'Easnoth-Fight' properties: #{}!
State subclass: #CellState
	instanceVariableNames: ''
	package: 'Easnoth-Fight'!

!CellState methodsFor: 'eventHandling'!

addSelector
	self subclassResponsibility
!

canAttack: aSidePlayed
	self subclassResponsibility
!

canBeSelected: aSide
	self subclassResponsibility
!

canMoveTo
	self subclassResponsibility
!

mouseClick
	self subclassResponsibility
!

removeSelector
	self subclassResponsibility
! !

!CellState class methodsFor: 'instance creation'!

initializeStateFor: aCell
	aCell free ifTrue: [
		aCell state: (Free newFor: aCell)
	] ifFalse: [
		aCell state: (HasMonster newFor: aCell)
	]
! !

CellState subclass: #Free
	instanceVariableNames: ''
	package: 'Easnoth-Fight'!
!Free commentStamp!
"no monster on it"!

!Free methodsFor: 'eventHandling'!

addSelector
	self object addSelectorColored: 'green'.
	self object changeState: (FreeSelected newFor: self object).
!

canAttack: aSidePlayed
	^false
!

canBeSelected: aSide
	^self object tile isWall not
!

canMoveTo
	^self object tile isWall not
!

mouseClick
	self object map removeSelection.
	self object map showActiveMonsters
!

removeSelector
	"for white selector"
	self object overTiles do: [:overTile | 
		overTile selector ifTrue: [self object drawedObjects remove: overTile]
	].
! !

CellState subclass: #FreeSelected
	instanceVariableNames: ''
	package: 'Easnoth-Fight'!
!FreeSelected commentStamp!
"free not wall selected"!

!FreeSelected methodsFor: 'eventHandling'!

addSelector
	self error: 'shouldnt be possible to add selector on this cell'
!

canAttack: aSidePlayed
	^false
!

canBeSelected: aSide
	^false
!

canMoveTo
	^false
!

mouseClick
	|actionCell|
	actionCell := Turn getSingleton actionCell.
	actionCell monster state moveTo: self object.
!

removeSelector
	self object overTiles do: [:overTile | 
		overTile selector ifTrue: [self object drawedObjects remove: overTile]
	].
	self object changeState: (Free newFor: self object)
! !

CellState subclass: #HasMonster
	instanceVariableNames: ''
	package: 'Easnoth-Fight'!
!HasMonster commentStamp!
"monster on it"!

!HasMonster methodsFor: 'eventHandling'!

addSelector
	|sidePlaying|
	sidePlaying := Turn getSingleton side.
	(self object monster side = sidePlaying) ifTrue: [
		self error: 'shouldnt be able to select because friendly monster'
	] ifFalse: [
		self object addSelectorColored: 'red'.
		self object changeState: (HasMonsterSelected newFor: self object).
	].
!

canAttack: aSidePlayed
	^(Turn getSingleton side = self object monster side) not
!

canBeSelected: aSide
	^(Turn getSingleton side = self object monster side) not
!

canMoveTo
	^false
!

mouseClick
	self object map removeSelection.
	self object monster state selectMonsterOn: self object.
!

removeSelector
	"for white selector"
	self object overTiles do: [:overTile | 
		overTile selector ifTrue: [self object drawedObjects remove: overTile]
	].
! !

CellState subclass: #HasMonsterSelected
	instanceVariableNames: ''
	package: 'Easnoth-Fight'!
!HasMonsterSelected commentStamp!
"ennemy selected"!

!HasMonsterSelected methodsFor: 'eventHandling'!

addSelector
	self error: 'shouldnt be possible to add selector on this cell'
!

canAttack: aSidePlayed
	^false
!

canBeSelected: aSide
	^false
!

canMoveTo
	^false
!

mouseClick
	"attack him.."
	"somewhere map removeselection"
!

removeSelector
	self object overTiles do: [:overTile | 
		overTile selector ifTrue: [self object drawedObjects remove: overTile]
	].
	self object changeState: (HasMonster newFor: self object)
! !

ActionMenu subclass: #FightMenu
	instanceVariableNames: 'actionCell'
	package: 'Easnoth-Fight'!

!FightMenu methodsFor: 'accessing'!

actionCell
	^actionCell
!

actionCell: aCell
	actionCell := aCell
! !

!FightMenu methodsFor: 'initialize-release'!

initialize
! !

State subclass: #MonsterState
	instanceVariableNames: ''
	package: 'Easnoth-Fight'!

!MonsterState methodsFor: 'eventHandling'!

moveTo: aCell
	|actionCell monster|
	
	"add animation here"
	actionCell := Turn getSingleton actionCell.
	monster := actionCell monster.
	actionCell removeMonster.
	aCell monster: monster.
	
	actionCell changeState: (Free newFor: actionCell).
	monster changeState: (HasMoved newFor: monster).
	self object cell map removeSelection.
	monster state selectMonsterOn: aCell.
!

selectMonsterOn: aCell
	self subclassResponsibility
! !

MonsterState subclass: #Active
	instanceVariableNames: ''
	package: 'Easnoth-Fight'!
!Active commentStamp!
"Monster can move and attack"!

!Active methodsFor: 'eventHandling'!

moveTo: aCell
	super moveTo: aCell
!

selectMonsterOn: aCell
	|map turn|
	map := self object cell map.
	turn := Turn getSingleton.
	turn actionCell: aCell.
	map addSelection: (aCell selectableNeighboursSide: turn side).
	((map actionMenu components at: 1) monster: aCell monster) update
! !

MonsterState subclass: #HasAttacked
	instanceVariableNames: ''
	package: 'Easnoth-Fight'!
!HasAttacked commentStamp!
"Monster can only move"!

!HasAttacked methodsFor: 'eventHandling'!

moveTo: aCell
	super moveTo: aCell
!

selectMonsterOn: aCell
	|map turn|
	map := self object cell map.
	turn := Turn getSingleton.
	turn actionCell: aCell.
	map addSelection: (aCell movableNeighbours)
! !

MonsterState subclass: #HasMoved
	instanceVariableNames: ''
	package: 'Easnoth-Fight'!
!HasMoved commentStamp!
"Monster can only attack"!

!HasMoved methodsFor: 'not yet classified'!

moveTo: aCell
	self error:'has already moved'
!

selectMonsterOn: aCell
	|map turn|
	map := self object cell map.
	turn := Turn getSingleton.
	turn actionCell: aCell.
	map addSelection: (aCell attackableNeighboursSide: turn side)
! !

MonsterState subclass: #Inactive
	instanceVariableNames: ''
	package: 'Easnoth-Fight'!
!Inactive commentStamp!
"monster can't move or attack"!

!Inactive methodsFor: 'eventHandling'!

moveTo: aCell
	self error:'inactive'
!

selectMonsterOn: aCell
	"nothing for now"
! !

Object subclass: #Turn
	instanceVariableNames: 'actionCell side'
	package: 'Easnoth-Fight'!

!Turn methodsFor: 'accessing'!

actionCell
	^actionCell
!

actionCell: aCell
	actionCell := aCell
!

side
	^side
!

side: anInt
	side := anInt
! !

!Turn methodsFor: 'gaming'!

activateTwoMonsters
	|armyPlaying randomMonster|

	"activate 1 monster"
	armyPlaying := Map getSingleton monstersFromSide: self side.
	randomMonster := armyPlaying atRandom.
	randomMonster state: (Active newFor: randomMonster)
!

initialize
	('.nextTurn' asJQuery at: 0) at: 'onclick' put: [self nextTurn].
	self side: 2 * 2 atRandom - 3.
	self activateTwoMonsters.
	Map getSingleton showActiveMonsters
!

nextTurn
	self side: self side negated.
	Map getSingleton removeSelection.
	Map getSingleton monsters do:[:each | each changeState: (Inactive newFor: each)].
	self activateTwoMonsters.
	Map getSingleton showActiveMonsters
! !

Turn class instanceVariableNames: 'turn'!

!Turn class methodsFor: 'instance-creation'!

getSingleton
	^turn ifNil:[turn := self new]
! !

