Smalltalk current createPackage: 'Easnoth-MapModel'!
Object subclass: #CWComponent
	instanceVariableNames: 'parent'
	package: 'Easnoth-MapModel'!
!CWComponent commentStamp!
I represent a business object of the game. The business objects are managed in a tree : you have a root object that has children (and children can also have children).

Game logic is implemented in my subclasses. For Displaying, look at CWDrawer.!

!CWComponent methodsFor: 'accessing'!

announcer
	^ CWEasnothAnnouncer current
!

children
	self subclassResponsibility
!

parent
	^ parent
!

parent: object
	parent := object
!

root
	^ self parent root
! !

!CWComponent methodsFor: 'event'!

announce: anEvent
	self announcer announce: anEvent
! !

!CWComponent methodsFor: 'rendering'!

updateGOTs
	self root updateGOTs
!

updateMap
	self root updateMap
!

updateMonstersAndGOTs
	self root updateMonstersAndGOTs
! !

!CWComponent methodsFor: 'selection'!

desactivateMonsters
	self children do: [ :child |
		child desactivateMonsters ]
!

lighten
	self children do: [ :child |
		child lighten ]
!

removeSelection
	self children do: [ :child |
		child removeSelection ]
!

showActiveMonsters
	self children do: [ :child |
		child showActiveMonsters ]
!

unmark
	self children do: [ :child |
		child unmark ]
! !

!CWComponent methodsFor: 'visiting'!

accept: aVisitor
	self subclassResponsibility
! !

CWComponent subclass: #CWComposite
	instanceVariableNames: ''
	package: 'Easnoth-MapModel'!

!CWComposite methodsFor: 'accessing'!

children
	self subclassResponsibility
! !

!CWComposite methodsFor: 'children management'!

childAt: index 
	^ self children at: index
!

childAt: index ifPresent: aBlock
	^ self children at: index ifPresent: aBlock
! !

!CWComposite methodsFor: 'factory'!

newChild: aClass
	^ aClass new parent: self
! !

!CWComposite methodsFor: 'visiting'!

accept: aVisitor
	self subclassResponsibility
! !

CWComposite subclass: #CWCell
	instanceVariableNames: 'neighboursCache background gameOverTile monster state prevCell mark'
	package: 'Easnoth-MapModel'!
!CWCell commentStamp!
I represent an hexagon cell in the map.!

!CWCell methodsFor: 'accessing'!

background
	^ background ifNil: [ self error: 'should be initialized' ]
!

backgroundAdd: aBackground
	^ self background add: aBackground
!

backgroundAddAll: aCol
	^ self background addAll: aCol
!

children
	| children | 
	children := Array new.
	self monster ifNotNil: [ :var |
		children add: var ].
	self gameOverTile ifNotNil: [ :var2 |
		children add: var2 ].
	^ children
		addAll: self background;
		yourself
!

gameOverTile
	^ gameOverTile
!

gameOverTile: aGOT
	gameOverTile := aGOT
!

monster
	^ monster
!

monster: aMonster
	monster := aMonster
!

side
	^ self monster side
! !

!CWCell methodsFor: 'accessing - pathfinding'!

isMarked
	^ mark
!

mark
	mark := true
!

prevCell
	^ prevCell
!

prevCell: aCell 
	prevCell := aCell
!

unmark
	mark := false
! !

!CWCell methodsFor: 'factory'!

gameOverTileClass
	^ CWGameOverTile
!

newGreenGOT
	 ^ self gameOverTileClass green
!

newOverTile
	 ^ self newChild: self overTileClass
!

newRedGOT
	 ^ self gameOverTileClass red
!

newTile
	 ^ self newChild: self tileClass
!

newWhiteGOT
	 ^ self gameOverTileClass white
!

overTileClass
	^ CWOverTile
!

tileClass
	^ CWTile
! !

!CWCell methodsFor: 'initialize-release'!

free
	"used to initialize State, so should not rely on state. see isFree"
	^ self monster isNil
!

initialize
	super initialize.
	mark := false
!

initializeFromJson: aJsonCell
    | elements ots |
    
    elements := aJsonCell keys.
    background := Array new.
	
	(elements includes: 'tile') 
    	ifTrue: [ self backgroundAdd: (self newTile initializeFromKey: aJsonCell tile) ].
	"replace match: with beginsWith: later ..."
	ots := aJsonCell keys select: [ :each | each match: 'overtile' ].
	ots do: [ :each |
		self backgroundAdd: (self newOverTile initializeFromKey: (aJsonCell at: each) ) ].
! !

!CWCell methodsFor: 'neighbourhood'!

attackableNeighboursConsideringMoveForMonster: aMonster
	"for AI. Answers the collection of attackable ennemies considering the move of the monster"
	
	| selectableCells |
	selectableCells := self selectableNeighboursForMonster: aMonster.
	^ selectableCells select: [ :each | each hasMonster ]
!

attackableNeighboursForMonster: aMonster
	
	| attackableCells tempCells |
	
	attackableCells := Set new.
	tempCells := self movableNeighboursCycle: aMonster range - 1.
	
	tempCells do: [ :each |
		attackableCells addAll: (each attackableNeighboursFrom: aMonster side) ].

	^ attackableCells
!

attackableNeighboursFrom: side
	|attackableCells|
	attackableCells := self neighbours select: [ :each | 
					each canBeAttackedBy: side ].
	^ attackableCells
!

movableNeighbours
	|movableCells|

	movableCells := self neighbours select: [:each | each isFree & each isMarked not ].
	
	"this add a track for pathfinding"
	movableCells do: [ :each |
			each prevCell: self.
			each mark].
			
	^ movableCells
!

movableNeighboursCycle: cycleNumber
	| movableCells tempSet |
	
	self root unmark.
	
	movableCells := { self } asSet.
	1 to: cycleNumber do: [ :i |
		tempSet := Set new.
		movableCells do: [ :each | tempSet addAll: each movableNeighbours ].
		movableCells addAll: tempSet].
	
	^ movableCells
!

neighbours
	^ neighboursCache ifNil: [ neighboursCache := self parent neighboursOf: self ]
!

selectableNeighboursForMonster: aMonster
	| selectableCells tempSet |

	selectableCells := self movableNeighboursCycle: aMonster currentMove.

	 tempSet := Set new.
	 selectableCells do: [ :each | tempSet addAll: (each attackableNeighboursForMonster: aMonster) ].
	 selectableCells addAll: tempSet.
	 ^ selectableCells remove: self
! !

!CWCell methodsFor: 'pathfinding'!

cellToMoveBeforeAttack: cellLast context: gameContext
	"Assumes that a monster is at self and want to attack cellLast's monster, which is not a neighbour.
	Answers the closest cell from cell1 that the current monster can reach to attack cellLast's monster"

	| possibleCells closestCell shortestPath |
	self monster isRanged ifTrue: [ ^ self cellToMoveBeforeRangeAttack: cellLast ].
	(gameContext relatedCell isMarked ) ifTrue: [ ^ gameContext relatedCell ]. 
	(cellLast neighbours includes: self) ifTrue: [ ^ self ].
	possibleCells := cellLast neighbours select: [:each | each isMarked ].
	shortestPath := 9999.
	possibleCells do: [ :each | 
		| pathSize |
		pathSize := (self pathTo: each) size.
		pathSize < shortestPath 
			ifTrue: [ 
				shortestPath := pathSize.
				closestCell := each ] ].
	^ closestCell
!

cellToMoveBeforeRangeAttack: cellLast
	| possibleCells closestCell shortestPath |
	"hacky for now ..."
	self movableNeighboursCycle: self monster range + self monster currentMove. "create fake tracks to ennemy"
	possibleCells := cellLast neighbours select: [:each | each isMarked ].
	shortestPath := 9999.
	possibleCells do: [ :each | 
		| pathSize |
		pathSize := (self pathTo: each) size.
		pathSize < shortestPath 
			ifTrue: [ 
				shortestPath := pathSize.
				closestCell := each ] ].
	
	shortestPath := self pathTo: closestCell. "shortest fake track to ennemy"
	shortestPath size < self monster range ifTrue: [ ^ self ]. "for AI move calculs only"
	^ shortestPath at: self monster range. "in fake track, get furthest from ennemy cell where you can attack him"
!

pathTo: cellLast
	"Assumes that some cells are selected and that the player clicked on a selected cell.
	Answers the shortest path from the current cell to the cell clicked"

	| path |
	path := Array with: cellLast.
	[ self = path last ] whileFalse: [ path add: path last prevCell ].
	^ path
! !

!CWCell methodsFor: 'printing'!

printOn: aStream
	"to debug only"

	| rowNumber row cellIndex |
	row := self parent.
	cellIndex := row cells indexOf: self.
	rowNumber := row parent rows indexOf: row.
	aStream << 'a Cell(' << rowNumber printString << '-' << cellIndex printString << ')'
! !

!CWCell methodsFor: 'selection'!

addGreenSelector
	self gameOverTile: self newGreenGOT
!

addRedSelector
	self gameOverTile: self newRedGOT
!

addSelectorColored: aColor
	self gameOverTile: (self newGameOverTile initializeFromKey: aColor)
!

addWhiteSelector
	self gameOverTile: self newWhiteGOT
!

darken
	gameOverTile ifNotNil: [ :got |
		got darken ]
!

lighten
	"should delegate to state but I'm lazy"
 	self isFree ifTrue: [
		gameOverTile ifNotNil: [ :got |
			got lighten ] ]
!

removeGameOverTile
	self gameOverTile: nil
! !

!CWCell methodsFor: 'state delegation'!

addMonster: aMonster
	self state cell: self addMonster: aMonster
!

addSelector
	self state addSelector: self
!

canBeAttackedBy: side
	^ self state cell: self canBeAttackedBy: side
!

hasMonster
	^ self isFree not
!

isFree
	"Answers true if cell free or freeselected"
	^ self state isFree
!

mouseClick: gameContext
	self state mouseClick: self context: gameContext.
!

mouseMove: gameContext
	self state mouseMove: self context: gameContext.
!

removeMonster
	self state removeMonster: self
!

removeSelection
	self state removeSelector: self
!

showActiveMonsters
	self state showActiveMonster: self.
! !

!CWCell methodsFor: 'state machine'!

changeState: stateClass
	self state: stateClass default
!

initializeState
	CWCellState initializeStateFor: self
!

state
	state ifNil: [self initializeState].
	^state
!

state: aState
	state := aState
! !

!CWCell methodsFor: 'visiting'!

accept: aVisitor
	^ aVisitor visitCell: self
! !

CWComposite subclass: #CWOneChildClass
	instanceVariableNames: ''
	package: 'Easnoth-MapModel'!
!CWOneChildClass commentStamp!
I am a standard composite except that all my children have the same class.!

!CWOneChildClass methodsFor: 'children management'!

addChild: object
	^ self children add: object
!

childAt: index put: object
	^ self children at: index put: object
!

removeChild: object
	^ self children remove: object
! !

!CWOneChildClass methodsFor: 'factory'!

childBasicClass
	self subclassResponsibility
!

newChild
	^ self newChild: self childBasicClass
! !

!CWOneChildClass methodsFor: 'visiting'!

accept: aVisitor
	self subclassResponsibility
! !

CWOneChildClass subclass: #CWMap
	instanceVariableNames: 'rows drawer'
	package: 'Easnoth-MapModel'!
!CWMap commentStamp!
I represent the whole map in the game.!

!CWMap methodsFor: 'accessing'!

children
	^ self rows
!

drawer
	^ drawer
!

root
	^ self
!

rows
	^ rows
! !

!CWMap methodsFor: 'factory'!

childBasicClass
	^ CWRow
! !

!CWMap methodsFor: 'initialize-release'!

initializeDrawer
	drawer := CWMapDrawer new initializeForMap: self
!

initializeFromJson: jsonMap
	"initialize the rows of the map, 
	the announcement is in case everything was already cached (page refresh for example)"
	
	| child rows1 |
	
	self announce: CWWaitForObject new.
	
	rows1 := jsonMap row.
	rows := Array new: rows1 size.

	rows1 withIndexDo: [:row :i |
		child := self newChild.
		self childAt: i put: child.
		child initializeFromJson: row ].
		
	self announce: CWObjectLoaded new.
! !

!CWMap methodsFor: 'neighbours'!

neighboursOf: row cellIndex: cellIndex
	| rowIndex neighbours |
	rowIndex :=  self rows indexOf: row.
	neighbours := Array new.
	rowIndex = 1 
		ifFalse: [ neighbours addAll: ((self childAt: rowIndex - 1) cellsNextToI: rowIndex j: cellIndex) ].
	rowIndex = self rows size 
		ifFalse: [ neighbours addAll: ((self childAt: rowIndex + 1) cellsNextToI: rowIndex j: cellIndex) ].
	^ neighbours
! !

!CWMap methodsFor: 'printing'!

printOn: aStream
	aStream
		nextPutAll: 'a Map (';
		nextPutAll: rows size printString;
		nextPutAll: ' rows)'
! !

!CWMap methodsFor: 'rendering'!

clean
	drawer clean
!

updateGOTs
	drawer updateGOTs
!

updateMap
	drawer updateMap
!

updateMonstersAndGOTs
	drawer updateMonstersAndGOTs
! !

!CWMap methodsFor: 'selection'!

showActiveMonsters
	self removeSelection.
	super showActiveMonsters
! !

!CWMap methodsFor: 'visiting'!

accept: aVisitor
	^ aVisitor visitMap: self
! !

!CWMap class methodsFor: 'instance creation'!

newWithMapIndex: aMapIndex
	| map |
	
	map := self new.
    jQuery 
		getJSON: 'ressources/json/maps/map', aMapIndex, '.json' 
		onSuccess: [:data | 
			map initializeFromJson: data].

	^ map
! !

CWOneChildClass subclass: #CWRow
	instanceVariableNames: 'cells'
	package: 'Easnoth-MapModel'!
!CWRow commentStamp!
I represent a row of cells in the map.!

!CWRow methodsFor: 'accessing'!

cells
	^ cells
!

children
	^ self cells
! !

!CWRow methodsFor: 'factory'!

childBasicClass
	^ CWCell
! !

!CWRow methodsFor: 'initialize'!

initializeFromJson: jsonRow
	| cells1 child |

	cells1 := jsonRow cells.
	cells := Array new: cells1 size.
	
	cells1 withIndexDo: [:cell :i |
		child :=  self newChild.
		child initializeFromJson: cell. 
		self childAt: i put: child ].
! !

!CWRow methodsFor: 'neighbours'!

cellsNextToI: i j: j 
	| neighbours |
	neighbours := Array new.
	self childAt: j  ifPresent: [ :child | neighbours add: child ] .
	i \\ 2 = 0 ifFalse: [
		j < self cells size ifTrue: [ self childAt: j + 1 ifPresent: [ :child | neighbours add: child ] ].
	] ifTrue: [
		j > 1 ifTrue: [ self childAt: j - 1 ifPresent: [ :child | neighbours add: child ] ].
	].
	^ neighbours
!

neighboursOf: aCell
	"Here we give a Set to simplify game logic later (no twice the cell in the set)"

	| cellIndex neighbours |
	neighbours := Set new.
	cellIndex := self cells indexOf: aCell.
	cellIndex = 1 
		ifFalse: [ self childAt: cellIndex - 1 ifPresent: [ :child | neighbours add: child ] ].
	cellIndex = self cells size 
		ifFalse: [ self childAt: cellIndex + 1  ifPresent: [ :child | neighbours add: child ] ].
	neighbours addAll: (self parent neighboursOf: self cellIndex: cellIndex).
	^ neighbours
! !

!CWRow methodsFor: 'printing'!

printString
	^ 'a Row (', cells size, ' cells)'
! !

!CWRow methodsFor: 'visiting'!

accept: aVisitor
	^ aVisitor visitRow: self
! !

CWComponent subclass: #CWLeaf
	instanceVariableNames: ''
	package: 'Easnoth-MapModel'!

!CWLeaf methodsFor: 'accessing'!

children
	^ #()
! !

!CWLeaf methodsFor: 'visiting'!

accept: aVisitor
	self subclassResponsibility
! !

CWLeaf subclass: #CWImageLeaf
	instanceVariableNames: 'image'
	package: 'Easnoth-MapModel'!
!CWImageLeaf commentStamp!
I represent a leaf of the business objects tree that has an image. Usually only my instances are rendered when the CWDrawer visits the business object graph.!

!CWImageLeaf methodsFor: 'accessing'!

image
	^ image
!

image: anImage
	image := anImage
! !

!CWImageLeaf methodsFor: 'initialize-release'!

initializeFromKey: aKey
	image := self class imageCacheAt: aKey
! !

!CWImageLeaf methodsFor: 'testing'!

isLeaf
	^ true
! !

!CWImageLeaf methodsFor: 'visiting'!

accept: aVisitor
	self shouldNotImplement
! !

CWImageLeaf class instanceVariableNames: 'imageCache'!

!CWImageLeaf class methodsFor: 'accessing'!

folderName
	self subclassResponsibility
! !

!CWImageLeaf class methodsFor: 'caching'!

imageCache
	^ imageCache ifNil: [ imageCache := Dictionary new ]
!

imageCacheAt: aKey
	^ self imageCache at: aKey ifAbsentPut: [ self newImageFrom: aKey ]
!

newImageFrom: aKey
	"Create a new image and cache it. Announce start and end of asynchronous task"
	
	| announcer image |
	
	announcer := CWEasnothAnnouncer current.
	image := NativeFunction constructor: 'Image'.
	self imageCache at: aKey put: image.
	announcer announce: CWWaitForObject new.
	image at: 'onload' put: [ announcer announce: CWObjectLoaded new ].
    image at: 'src' put:  'ressources/images/', self folderName, '/', aKey, '.png'.
	
	^ image
! !

CWImageLeaf subclass: #CWBackground
	instanceVariableNames: ''
	package: 'Easnoth-MapModel'!
!CWBackground commentStamp!
I represent an element of the background (tiles, overtiles, ...).!

!CWBackground methodsFor: 'visiting'!

accept: aVisitor
	self shouldNotImplement
! !

!CWBackground class methodsFor: 'accessing'!

folderName
	^ 'back'
! !

CWBackground subclass: #CWOverTile
	instanceVariableNames: ''
	package: 'Easnoth-MapModel'!

!CWOverTile methodsFor: 'visiting'!

accept: aVisitor
	^ aVisitor visitOverTile: self
! !

!CWOverTile class methodsFor: 'accessing'!

folderName
	^ 'overtiles'
! !

CWOverTile subclass: #CWGameOverTile
	instanceVariableNames: ''
	package: 'Easnoth-MapModel'!
!CWGameOverTile commentStamp!
class side I have an image array to crete got faster as they are the most created / gc objects!

!CWGameOverTile methodsFor: 'coloring'!

darken
	self image: (self class imageArray at: self class darkGreenIndex)
!

lighten
	self image: (self class imageArray at: self class greenIndex)
! !

!CWGameOverTile methodsFor: 'visiting'!

accept: aVisitor
	^ aVisitor visitGameOverTile: self
! !

CWGameOverTile class instanceVariableNames: 'imageArray'!

!CWGameOverTile class methodsFor: 'array'!

createImageArray
	imageArray := Array new: 5.
	imageArray 
		at: self greenIndex put: (self imageCacheAt: 'green');
		at: self darkGreenIndex put: (self imageCacheAt: 'darkGreen');
		at: self redIndex put: (self imageCacheAt: 'red');
		at: self whiteIndex put: (self imageCacheAt: 'white');
		at: self invisIndex put: (self imageCacheAt: 'invis').
	^ imageArray
!

imageArray
	^ imageArray ifNil: [ self createImageArray ]
! !

!CWGameOverTile class methodsFor: 'index'!

darkGreenIndex
	^ 5
!

greenIndex
	^ 1
!

invisIndex
	^ 4
!

redIndex
	^ 2
!

whiteIndex
	^ 3
! !

!CWGameOverTile class methodsFor: 'instance creation'!

green
	^ self new image: (self imageArray at: self greenIndex)
!

invis
	^ self new image: (self imageArray at: self invisIndex)
!

red
	^ self new image: (self imageArray at: self redIndex)
!

white
	^ self new image: (self imageArray at: self whiteIndex)
! !

CWBackground subclass: #CWTile
	instanceVariableNames: ''
	package: 'Easnoth-MapModel'!

!CWTile methodsFor: 'testing'!

isWall
	^ false
! !

!CWTile methodsFor: 'visiting'!

accept: aVisitor
	^ aVisitor visitTile: self
! !

!CWTile class methodsFor: 'accessing'!

folderName
	^ 'tiles'
! !

CWTile subclass: #CWWall
	instanceVariableNames: ''
	package: 'Easnoth-MapModel'!

!CWWall methodsFor: 'testing'!

isWall
	^ true
! !

!CWWall methodsFor: 'visiting'!

accept: aVisitor
	^ aVisitor visitWall: self
! !

CWImageLeaf subclass: #CWMonster
	instanceVariableNames: 'currentMove move attack dices hp range state player special strategy typeStrategy'
	package: 'Easnoth-MapModel'!
!CWMonster commentStamp!
I represent people on the map. My instances variables are the stats of the guy I represent.!

!CWMonster methodsFor: 'accessing'!

attack
	^ attack
!

attack: int
	attack := int
!

attackPotential
	"Answers the power of attack of the monster"
	^ attack * dices
!

attackPotentialFor: target
	"Answers the power of attack of the monster considering target weakness and strength"
	| adv |
	adv := typeStrategy bonusVS: target.
	^ (attack + 10 * adv) * (dices + adv)
!

bonusVSCavalry
	^ typeStrategy bonusVSCavalry
!

bonusVSRange
	^ typeStrategy bonusVSRange
!

bonusVSTroop
	^ typeStrategy bonusVSTroop
!

currentMove
	^ currentMove
!

currentMove: int
	currentMove := int.
	self announce: CWMonsterUpdateEvent new
!

defaultState
	"When map is initialized the monster will get this state by default"
	^ CWInactive
!

defensePotential
	"Answers the power of defense of the monster"
	^ hp * 100
!

dices
	^ dices
!

dices: int
	dices := int
!

hp
	^ hp
!

hp: int
	hp := int
!

move
	^ move
!

move: int
	move := int
!

player
	^ player
!

player: aPlayer
	player := aPlayer
!

range
	^ range
!

range: int
	range := int
!

side
	^ player side
!

special
	^ special
!

special: aString
	special := aString
! !

!CWMonster methodsFor: 'animation'!

animationMoveFrom: cell1 to: cellLast callback: callback
	
	| path moveNumber |
	
	path := cell1 pathTo: cellLast.
	moveNumber := path size - 1.
 
	cell1 root removeSelection.
	cell1 updateGOTs.

	1 to: moveNumber do: [ :j |
		[ (path at: path size - j) addMonster: self.
        (path at: path size + 1 - j) removeMonster.
		cell1 root updateMonstersAndGOTs.
		self currentMove: self currentMove - 1.
		self announceUpdate ] valueWithTimeout: 300 * j ].
	
	callback valueWithTimeout: 300 * moveNumber
!

announceUpdate
	self announce: (CWMonsterUpdateEvent new monster: self)
!

moveTo: aCell inContext: gameContext callback: callback
	"triggers the animation for the monster move"
	
	self animationMoveFrom: gameContext currentCell to: aCell callback: [	
		self state changeStateAfterMoving: self.
		self selectInContext: gameContext.
		self checkForNextTurn.
		callback value.
	].
! !

!CWMonster methodsFor: 'fighting'!

attack: anotherMonster inContext: gameContext
	"Dispatch to type strategy for advantages of attacks and goes to attack:InContext:bonus:"
	
	^ typeStrategy monster: self attackNeighbour: anotherMonster inContext: gameContext
!

attack: anotherMonster inContext: gameContext bonus: int
	"int is for now -1 0 or 1 and represents the advantages / disadvantages of attacks"
	"Support is now commented, uncomment the big thing to put it back. But it needs some refactorings .."
	
	| ennemySupport ennemyHerosSupport ennemyUnitSupport support herosSupport unitSupport bonusDices bonusAttack |
	
	"ennemySupport := self support.
	ennemySupport := ennemySupport remove: anotherMonster parent ifAbsent: [""range attack""].
	ennemyHerosSupport := ( ennemySupport select: [ :each | each monster isHeros ] ) size.
	ennemyUnitSupport := ennemySupport size - ennemyHerosSupport.
	
	support := anotherMonster support.
	support := support remove: self parent ifAbsent: [""range attack""].
	herosSupport := ( support select: [ :each | each monster isHeros ] ) size.
	unitSupport := support size - herosSupport.
	
	bonusDices := int + herosSupport - ennemyHerosSupport.
	bonusAttack := ( int + unitSupport - ennemyUnitSupport ) * 10."
	
	bonusDices := int.
	bonusAttack := int * 10.
	
	bonusDices + self dices < 1 ifTrue: [ bonusDices := (self dices - 1) negated "1 dice min" ]. 
	
	self resolveAttack: anotherMonster inContext: gameContext bonusDices: bonusDices bonusAttack: bonusAttack
!

die
	self parent removeMonster.
	self player removeMonster: self.
!

isAttackedByCavalry: aMonster inContext: gameContext
	^ typeStrategy monster: self isAttackedByCavalry: aMonster inContext: gameContext
!

isAttackedByRange: aMonster inContext: gameContext
	^ typeStrategy monster: self isAttackedByRange: aMonster inContext: gameContext
!

isAttackedByTroop: aMonster inContext: gameContext
	^ typeStrategy monster: self isAttackedByTroop: aMonster inContext: gameContext
!

removeHP: anInt
     self hp: self hp - anInt.
     self hp < 1 ifTrue: [
           self die ].
!

resolveAttack: anotherMonster inContext: gameContext bonusDices: bonusDices bonusAttack: bonusAttack

	self state changeStateAfterAttacking: self.
    self root removeSelection.
	self updateGOTs.

	self rollDicesCallBack: [ :diceRes |
		anotherMonster removeHP: diceRes kills.
        self selectInContext: gameContext.
		self checkForNextTurn.
		self updateMonstersAndGOTs ] bonusDices: bonusDices bonusAttack: bonusAttack
!

rollDicesCallBack: aBlock bonusDices: bonusDices bonusAttack: bonusAttack
	"roll the dices to attack an ennemy"
	
	| kill dicesRolledEvent |
	
	kill := (1 to: self dices + bonusDices) inject: 0 into: [ :acc :index | 
		100 atRandom < (self attack + bonusAttack)
			ifTrue: [ acc + 1 ] 
			ifFalse: [ acc ] ]. 
	dicesRolledEvent := CWDicesRolledEvent new
		kills: kill;
		dices: self dices + bonusDices;
		callback: aBlock;
		yourself.
	self announce: dicesRolledEvent
!

support	
	^ self parent attackableNeighboursFrom: self side
! !

!CWMonster methodsFor: 'initialize-release'!

initialize
	super initialize.
	self currentMove: 0.
	self initializeState
!

initializeWithStat: jsonStat army: army player: aPlayer heros: strat type: aType
	self player: aPlayer.
	strategy := strat default.
	typeStrategy := aType default.
	self stats: jsonStat.
	super initializeFromKey: army, '/', self key.
!

stats: jsonStats
	self move: jsonStats move.
	self range: jsonStats range.
	self attack: jsonStats attack.
	self dices: jsonStats dices.
	self special: jsonStats special.
	self hp: self defaultHp.
! !

!CWMonster methodsFor: 'printing'!

printOn: aStream
	aStream nextPutAll: 'a Monster('.
	aStream nextPutAll: self parent printString.
	aStream nextPutAll: ')'.
! !

!CWMonster methodsFor: 'selection'!

addSelectorsTo: cells
	
	self root removeSelection.
	cells do: [:each | each addSelector ].
	
	"HACKY, to recalcul prevCell, need true pathfinding for this to be fine"
	self parent movableNeighboursCycle: self currentMove.
	
	^ cells
!

attackableTargets
	"Answers the list of monsters this monster can attack, including the ones he needs to move before attack"
	^ self parent attackableNeighboursConsideringMoveForMonster: self.
!

selectActionCells
	^ self addSelectorsTo: (self parent selectableNeighboursForMonster: self).
!

selectAttackableCells
	^ self addSelectorsTo: (self parent attackableNeighboursForMonster: self)
!

selectMovableCells
	^ self addSelectorsTo: ((self parent movableNeighboursCycle: self currentMove) remove: self parent; yourself )
! !

!CWMonster methodsFor: 'state delegation'!

activate
	self state activate: self
!

attackTo: aCell inContext: gameContext
	self state monster: self attackTo: aCell inContext: gameContext
!

checkForNextTurn
	self currentMove > 0 ifTrue: [ ^ self ].
	self state checkForNextTurn: self
!

desactivateMonsters
	self state desactivate: self
!

isInactive
	^ self state isInactive
!

moveTo: aCell inContext: gameContext
	self state monster: self moveTo: aCell inContext: gameContext
!

readyToBePicked
	self state readyToPick: self
!

selectInContext: gameContext
	self announceUpdate.
	^ self state select: self inContext: gameContext
!

showActiveMonster
	self state showActiveMonster: self
! !

!CWMonster methodsFor: 'state machine'!

changeState: stateClass
	self state: stateClass default
!

initializeState
	self changeState: self defaultState
!

state
	^ state
!

state: aState
	state := aState
! !

!CWMonster methodsFor: 'strategy delegation'!

accept: aVisitor
	^ strategy accept: aVisitor for: self
!

defaultHp
	^ strategy defaultHP
!

isHeros
	^ strategy isHeros
!

isRanged
	^ typeStrategy isRanged
!

isUnit
	^ self isHeros not
!

key
	^ typeStrategy key, strategy key
! !

CWMonster class instanceVariableNames: 'jsonStatCache'!

!CWMonster class methodsFor: 'accessing'!

folderName
	^ 'monsters'
! !

!CWMonster class methodsFor: 'instance creation'!

emptyMonster
	"Answers a fake instance of a monster with empty stats.
	Displayed by the menu when no monster is selected"
	
	| fakeImage |
	fakeImage := NativeFunction constructor: 'Image'.
	fakeImage at: 'src' put:'ressources/images/interro.png'.
	^ self new
		image: fakeImage;
		hp: 0;
		move: 0;
		range: 0;
		dices: 0;
		attack: 0;
		special:'none'.
! !

!JSObjectProxy methodsFor: '*Easnoth-MapModel'!

keys
	| col |
    col := Array new.
	self keysDo: [:key |
    	col add: key ].
       ^ col
!

keysDo: aBlock
	<
    	var o = self['@jsObject'];
    	for(var i in o) {
			aBlock(i);
		}
    >
! !

