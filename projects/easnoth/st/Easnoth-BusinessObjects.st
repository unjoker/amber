Smalltalk current createPackage: 'Easnoth-BusinessObjects'!
Object subclass: #CWComponent
	instanceVariableNames: 'parent'
	package: 'Easnoth-BusinessObjects'!
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
	self isRoot ifTrue: [ ^ self ].
	^ self parent root
! !

!CWComponent methodsFor: 'event'!

announce: anEvent
	self announcer announce: anEvent
!

updateGOTs
	self announce: CWGOTDrawingEvent new.
!

updateMap
	self announce: CWGlobalDrawingEvent new.
!

updateMonstersAndGOTs
	self announce: CWMonsterAndGOTDrawingEvent new.
! !

!CWComponent methodsFor: 'selection'!

monstersFromSide: aSide
	| col |
	col := Array new.
	self children collect: [ :child |
		col addAll: (child monstersFromSide: aSide) ].
	^ col
!

removeSelection
	self children do: [ :child |
		child removeSelection ]
!

showActiveMonsters
	self children do: [ :child |
		child showActiveMonsters ]
! !

!CWComponent methodsFor: 'testing'!

isLeaf
	^ false
!

isRoot
	^ false
! !

!CWComponent methodsFor: 'visiting'!

accept: aVisitor
	self subclassResponsibility
! !

CWComponent subclass: #CWComposite
	instanceVariableNames: ''
	package: 'Easnoth-BusinessObjects'!

!CWComposite methodsFor: 'accessing'!

children
	self subclassResponsibility
! !

!CWComposite methodsFor: 'children management'!

childAt: index 
	^ self children at: index
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
	instanceVariableNames: 'neighboursCache background gameOverTile monster state prevCell'
	package: 'Easnoth-BusinessObjects'!
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

mapCoods
	^ mapCoods
!

mapCoods: aPoint
	mapCoods := aPoint.
!

monster
	^ monster
!

monster: aMonster
	monster := aMonster
!

prevCell
	^ prevCell
!

prevCell: aCell
	prevCell := aCell
!

removeMonster
	self monster: nil
!

side
	^ self monster side
! !

!CWCell methodsFor: 'factory'!

gameOverTileClass
	^ CWGameOverTile
!

herosClass
	^ CWHeros
!

newGameOverTile
	 ^ self newChild: self gameOverTileClass
!

newHeros
	 ^ self newChild: self herosClass
!

newOverTile
	 ^ self newChild: self overTileClass
!

newTile
	 ^ self newChild: self tileClass
!

newTroop
	 ^ self newChild: self troopClass
!

overTileClass
	^ CWOverTile
!

tileClass
	^ CWTile
!

troopClass
	^ CWTroop
! !

!CWCell methodsFor: 'initialize-release'!

initializeFromJson: aJsonCell
    | elements |
    
    elements := aJsonCell keys.
    background := Array new.
	
    elements first = 'tile'
    	ifTrue: [ self backgroundAdd: (self newTile initializeFromKey: aJsonCell tile) ].
    (elements includes: 'overtiles') 
    	ifTrue: [ self backgroundAddAll: (aJsonCell overtiles collect: [:each | 
			self newOverTile initializeFromKey: each overtile] ) ].
    elements last = 'heros'
    	ifTrue: [ self monster: (self newHeros initializeFromJson: aJsonCell heros) ].
    elements last = 'troop'
    	ifTrue: [ self monster: (self newTroop initializeFromJson: aJsonCell troop) ].
! !

!CWCell methodsFor: 'neighbourhood'!

attackableNeighboursCycle: cycleNumber fromSide: side
	"no range attack for now"
	
	self root removeSelection.
	
	^ self attackableNeighboursFrom: side
!

attackableNeighboursFrom: side
	|attackableCells|
	attackableCells := self neighbours select: [ :each | 
					each canBeAttackedBy: side ].
	attackableCells do: [ :each |
			each addSelector ].
	^ attackableCells
!

movableNeighbours
	|movableCells|
	movableCells := self neighbours select: [ :each | 
			each canMoveTo ].
	movableCells do: [ :each |
			each addSelector.
			each prevCell: self ].
			
	^ movableCells
!

movableNeighboursCycle: cycleNumber
	| movableCells tempSet |
	
	self root removeSelection.
	
	movableCells := self movableNeighbours.
	1 to: (cycleNumber - 1) do: [ :i |
		tempSet := Set new.
		movableCells do: [ :each | tempSet addAll: each movableNeighbours ].
		movableCells addAll: tempSet].
	
	^ movableCells
!

neighbours
	^ neighboursCache ifNil: [ neighboursCache := self parent neighboursOf: self ]
!

selectableNeighboursMoveCycle: cycleNumber attackCycle: cycleNumber2 fromSide: side
	| selectableCells |

	"movable cells"
	selectableCells := self movableNeighboursCycle: cycleNumber.

	"all attackable cells from any movable cell"
	 selectableCells do: [ :each | selectableCells addAll: (each attackableNeighboursFrom: side) ].

	"cells attackable from departure"
	selectableCells addAll: (self attackableNeighboursFrom: side ).

	^selectableCells
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

addSelectorColored: aColor
	self gameOverTile: (self newGameOverTile initializeFromKey: aColor)
!

removeGameOverTile
	self gameOverTile: nil
! !

!CWCell methodsFor: 'state delegation'!

addSelector
	self state addSelector: self
!

canBeAttackedBy: side
	^ self state cell: self canBeAttackedBy: side
!

canMoveTo
	^ self state canMoveTo: self
!

mouseClick: gameContext
	self state mouseClick: self context: gameContext.
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

!CWCell methodsFor: 'testing'!

free
	^ self monster isNil
! !

!CWCell methodsFor: 'visiting'!

accept: aVisitor
	^ aVisitor visitCell: self
! !

CWComposite subclass: #CWOneChildClass
	instanceVariableNames: ''
	package: 'Easnoth-BusinessObjects'!
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
	instanceVariableNames: 'rows'
	package: 'Easnoth-BusinessObjects'!
!CWMap commentStamp!
I represent the whole map in the game.!

!CWMap methodsFor: 'accessing'!

children
	^ self rows
!

rows
	^ rows
! !

!CWMap methodsFor: 'factory'!

childBasicClass
	^ CWRow
! !

!CWMap methodsFor: 'initialize-release'!

initialize
	super initialize.
	self initializeEventHandling.
!

initializeEventHandling
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

printString
	^ 'a Map (', rows size, ' rows)'
! !

!CWMap methodsFor: 'testing'!

isRoot
	^ true
! !

!CWMap methodsFor: 'visiting'!

accept: aVisitor
	^ aVisitor visitMap: self
! !

CWMap class instanceVariableNames: 'default'!

!CWMap class methodsFor: 'instance creation'!

default
	^ default ifNil: [ default := self new ]
!

newWithMapIndex: aMapIndex
	| map |
	
	map := self default.
    jQuery 
		getJSON: 'ressources/json/maps/map', aMapIndex, '.json' 
		onSuccess: [:data | 
			map initializeFromJson: data].

	^ map
! !

CWOneChildClass subclass: #CWRow
	instanceVariableNames: 'cells'
	package: 'Easnoth-BusinessObjects'!
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
	neighbours add: (self childAt: j).
	i \\ 2 = 0 ifFalse: [
		j < self cells size ifTrue: [neighbours add: (self childAt: j + 1)].
	] ifTrue: [
		j > 1 ifTrue: [neighbours add: (self childAt: j - 1)].
	].
	^ neighbours
!

neighboursOf: aCell
	"Here we give a Set to simply game logic later (no twice the cell in the set)"

	| cellIndex neighbours |
	neighbours := Set new.
	cellIndex := self cells indexOf: aCell.
	cellIndex = 1 
		ifFalse: [ neighbours add: (self childAt: cellIndex - 1) ].
	cellIndex = self cells size 
		ifFalse: [ neighbours add: (self childAt: cellIndex + 1) ].
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
	package: 'Easnoth-BusinessObjects'!

!CWLeaf methodsFor: 'accessing'!

children
	^ #()
! !

!CWLeaf methodsFor: 'testing'!

isLeaf
	^ true
! !

!CWLeaf methodsFor: 'visiting'!

accept: aVisitor
	self subclassResponsibility
! !

CWLeaf subclass: #CWImageLeaf
	instanceVariableNames: 'image'
	package: 'Easnoth-BusinessObjects'!
!CWImageLeaf commentStamp!
I represent a leaf of the business objects tree that has an image. Usually only my instances are rendered when the CWDrawer visits the business object graph.!

!CWImageLeaf methodsFor: 'accessing'!

image
	^ image
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
	package: 'Easnoth-BusinessObjects'!
!CWBackground commentStamp!
I represent an element of the background (tiles, overtiles, ...).!

!CWBackground methodsFor: 'visiting'!

accept: aVisitor
	self shouldNotImplement
! !

CWBackground subclass: #CWOverTile
	instanceVariableNames: ''
	package: 'Easnoth-BusinessObjects'!

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
	package: 'Easnoth-BusinessObjects'!

!CWGameOverTile methodsFor: 'visiting'!

accept: aVisitor
	^ aVisitor visitGameOverTile: self
! !

CWBackground subclass: #CWTile
	instanceVariableNames: ''
	package: 'Easnoth-BusinessObjects'!

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
	package: 'Easnoth-BusinessObjects'!

!CWWall methodsFor: 'testing'!

isWall
	^ true
! !

!CWWall methodsFor: 'visiting'!

accept: aVisitor
	^ aVisitor visitWall: self
! !

CWImageLeaf subclass: #CWMonster
	instanceVariableNames: 'side currentMove move attack dices hp range state'
	package: 'Easnoth-BusinessObjects'!
!CWMonster commentStamp!
I represent people on the map. My instances variables are the stats of the guy I represent.!

!CWMonster methodsFor: 'accessing'!

attack
	^ attack
!

attack: int
	attack := int
!

currentMove
	^ currentMove
!

currentMove: int
	currentMove := int
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

range
	^ range
!

range: int
	range := int
!

side
	^ side
!

side: int
	side := int
! !

!CWMonster methodsFor: 'initialize-release'!

addStats: aKey
	| keySuccess |
	
	keySuccess := aKey,'success'.
	
	self announce: CWWaitForObject new.
	
    self class 
		jsonStatCacheAt: keySuccess 
		put: [:statsNew | 
			self class jsonStatCacheAt: aKey put: statsNew.
       		self stats: statsNew ].

	jQuery 
		getJSON: 'ressources/json/monsters/', aKey, '.json' 
		onSuccess: [:data | 
			(self class jsonStatCacheAt: keySuccess) value: data.
			self announce: CWObjectLoaded new]
!

defaultHp
	self subclassResponsibility
!

initializeFromJson: aJson
	super initializeFromKey: aJson name.
	self side: aJson side.
	self loadStats: aJson name.
!

loadStats: aJson
	(self class jsonStatCache includesKey: aJson,'success') 
		ifTrue: [ self updateStats: aJson ] 
		ifFalse: [ self addStats: aJson ].
!

stats: jsonStats
	self move: jsonStats move.
	self range: jsonStats range.
	self attack: jsonStats attack.
	"self knockback: jsonStats knockback."
	self dices: jsonStats dices.
	"self special: jsonStats special."
	self hp: self defaultHp.
!

updateStats: aKey 
	|keySuccess oldCallBack|

	keySuccess := aKey,'success'.
	oldCallBack := self class jsonStatCacheAt: keySuccess.
	self class jsonStatCacheAt: keySuccess put: [:statsNew | 
			self stats: statsNew. 
			oldCallBack value: statsNew ].
			
	"Case where the json file finished loading during the execution of this method but before the new call back was set up"
	(self class jsonStatCache includesKey: aKey) 
		ifTrue: [self stats: (self class jsonStatCacheAt: aKey)].
! !

!CWMonster methodsFor: 'selection'!

monstersFromSide: aSide
	^ self side = aSide 
		ifTrue: [ { self } ]
		ifFalse: [ #() ]
! !

!CWMonster methodsFor: 'state delegation'!

checkForNextTurn
	self currentMove > 0 ifTrue: [ ^ self ].
	self state checkForNextTurn
!

moveTo: aCell inContext: gameContext
	self state monster: self moveTo: aCell inContext: gameContext
!

select: gameContext
	self state select: self inContext: gameContext
!

showActiveMonster
	self state showActiveMonster: self
! !

!CWMonster methodsFor: 'state machine'!

changeState: stateClass
	self state: stateClass default
!

initializeState
	CWMonsterState initializeStateFor: self
!

state
	state ifNil: [self initializeState].
	^state
!

state: aState
	state := aState
! !

!CWMonster methodsFor: 'visiting'!

accept: aVisitor
	self shouldNotImplement
! !

CWMonster class instanceVariableNames: 'jsonStatCache'!

!CWMonster class methodsFor: 'accessing'!

folderName
	^ 'monsters'
! !

!CWMonster class methodsFor: 'caching'!

jsonStatCache
	^ jsonStatCache ifNil: [ jsonStatCache := Dictionary new ]
!

jsonStatCacheAt: aKey
	^ self jsonStatCache at: aKey
!

jsonStatCacheAt: aKey ifAbsent: aBlock
	^ self jsonStatCache at: aKey ifAbsent: aBlock
!

jsonStatCacheAt: aKey put: aJson
	^ self jsonStatCache at: aKey put: aJson
! !

CWMonster subclass: #CWHeros
	instanceVariableNames: ''
	package: 'Easnoth-BusinessObjects'!

!CWHeros methodsFor: 'initialize-release'!

defaultHp
	^ 2
! !

!CWHeros methodsFor: 'visiting'!

accept: aVisitor
	^ aVisitor visitHeros: self
! !

CWMonster subclass: #CWTroop
	instanceVariableNames: ''
	package: 'Easnoth-BusinessObjects'!

!CWTroop methodsFor: 'initialize-release'!

defaultHp
	^ 4
! !

!CWTroop methodsFor: 'visiting'!

accept: aVisitor
	^ aVisitor visitTroop: self
! !

