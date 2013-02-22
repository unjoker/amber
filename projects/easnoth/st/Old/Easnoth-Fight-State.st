Smalltalk current createPackage: 'Easnoth-Fight-State' properties: #{}!
Object subclass: #State
	instanceVariableNames: 'object'
	package: 'Easnoth-Fight-State'!

!State methodsFor: 'accessing'!

object
	^object
!

object: anObject
	object := anObject
! !

!State methodsFor: 'initialize-release'!

newState: aState for: anObject
	|newState|

	newState := aState newFor: anObject.
	anObject state tearDown.
	anObject state: newState.
	newState setUp.
!

setUp
!

tearDown
! !

!State class methodsFor: 'instance creation'!

newFor: anObject
	^self new
		object: anObject;
		yourself.
! !

State subclass: #CellState
	instanceVariableNames: ''
	package: 'Easnoth-Fight-State'!

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
	package: 'Easnoth-Fight-State'!
!Free commentStamp!
"no monster on it"!

!Free methodsFor: 'eventHandling'!

addSelector
	self object addSelectorColored: 'green'.
	self object changeState: FreeSelected.
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
	Map getSingleton selectActiveMonster
!

removeSelector
! !

CellState subclass: #FreeSelected
	instanceVariableNames: ''
	package: 'Easnoth-Fight-State'!
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
	self object changeState: Free
! !

CellState subclass: #HasMonster
	instanceVariableNames: ''
	package: 'Easnoth-Fight-State'!
!HasMonster commentStamp!
"monster on it"!

!HasMonster methodsFor: 'eventHandling'!

addSelector
	|sidePlaying|
	sidePlaying := Turn getSingleton side.
	(self object monster side = sidePlaying) ifFalse: [
		self error: 'shouldnt be able to select because friendly monster'
	] ifTrue: [
		self object addSelectorColored: 'red'.
		self object changeState: HasMonsterSelected.
	].
!

canAttack: aSidePlayed
	"if aSidePlayed !!= monster side ok else not"
!

canBeSelected: aSide
	"actionCell side !!= aSide"
	^true
!

canMoveTo
	^false
!

mouseClick
	self object monster state selectMonsterOn: self object.
!

removeSelector
! !

CellState subclass: #HasMonsterSelected
	instanceVariableNames: ''
	package: 'Easnoth-Fight-State'!
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
!

removeSelector
	self object overTiles do: [:overTile | 
		overTile selector ifTrue: [self object drawedObjects remove: overTile]
	].
	self object changeState: HasMonster
! !

State subclass: #MonsterState
	instanceVariableNames: ''
	package: 'Easnoth-Fight-State'!

!MonsterState methodsFor: 'eventHandling'!

moveTo: aCell
	self subclassResponsibility
!

selectMonsterOn: aCell
	self subclassResponsibility
! !

MonsterState subclass: #Active
	instanceVariableNames: ''
	package: 'Easnoth-Fight-State'!
!Active commentStamp!
"Monster can move and attack"!

!Active methodsFor: 'eventHandling'!

moveTo: aCell
	|actionCell monster|

	"add animation here"
	actionCell := Turn getSingleton actionCell.
	monster := actionCell monster.
	actionCell removeMonster.
	aCell monster: monster
!

selectMonsterOn: aCell
	|map turn|
	map := Map getSingleton.
	turn := Turn getSingleton.
	turn actionCell: aCell.
	map addSelection: (aCell selectableNeighboursInMap: map side: turn side)
! !

MonsterState subclass: #HasAttacked
	instanceVariableNames: ''
	package: 'Easnoth-Fight-State'!
!HasAttacked commentStamp!
"Monster can only move"!

!HasAttacked methodsFor: 'eventHandling'!

moveTo: aCell
	|actionCell monster|

	"add animation here"
	actionCell := Turn getSingleton actionCell.
	monster := actionCell monster.
	actionCell removeMonster.
	aCell monster: monster
!

selectMonsterOn: aCell
	|map turn|
	map := Map getSingleton.
	turn := Turn getSingleton.
	turn actionCell: aCell.
	map addSelection: (aCell attackableNeighboursInMap: map side: turn side)
! !

MonsterState subclass: #HasMoved
	instanceVariableNames: ''
	package: 'Easnoth-Fight-State'!
!HasMoved commentStamp!
"Monster can only attack"!

!HasMoved methodsFor: 'not yet classified'!

moveTo: aCell
	self error:'has already moved'
!

selectMonsterOn: aCell
	|map turn|
	map := Map getSingleton.
	turn := Turn getSingleton.
	turn actionCell: aCell.
	map addSelection: (aCell movableNeighboursInMap: map side: turn side)
! !

MonsterState subclass: #Inactive
	instanceVariableNames: ''
	package: 'Easnoth-Fight-State'!
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
	package: 'Easnoth-Fight-State'!

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
	self side: 2 * 1 atRandom - 1.
	self activateTwoMonsters.
!

nextTurn
	self side: self side negated.
	self activateTwoMonsters.
! !

Turn class instanceVariableNames: 'turn'!

!Turn class methodsFor: 'instance-creation'!

getSingleton
	^turn ifNil:[turn := self new]
! !

