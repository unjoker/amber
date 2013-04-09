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
	instanceVariableNames: 'neighboursCache background gameOverTile monster'
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

neighbours
	^ neighboursCache ifNil: [ neighboursCache := self parent neighboursOf: self ]
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
    	ifTrue: [ self backgroundAdd: (self newTile initializeFromJson: aJsonCell tile) ].
    (elements includes: 'overtiles') 
    	ifTrue: [ self backgroundAddAll: (aJsonCell overtiles collect: [:each | 
			self newOverTile initializeFromJson: each overtile] ) ].
    elements last = 'heros'
    	ifTrue: [ self monster: (self newHeros initializeFromJson: aJsonCell heros) ].
    elements last = 'troop'
    	ifTrue: [ self monster: (self newTroop initializeFromJson: aJsonCell troop) ].
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

neighboursOf: aCell
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
!

keyFor: aJson
	^ aJson
! !

!CWImageLeaf methodsFor: 'initialize-release'!

folderName
	self subclassResponsibility
!

initializeFromJson: aJson
	image := self class 
		imageCacheAt: aJson
		ifAbsent: [ self newImageFrom: aJson ]
!

newImageFrom: aJson
	"Create a new image and cache it"
	
	image := NativeFunction constructor: 'Image'.
	self class imageCache at: aJson put: image.
	self announce: CWWaitForObject new.
	image at: 'onload' put: [ self announce: CWObjectLoaded new ].
    image at: 'src' put:  'ressources/images/', self folderName, '/', aJson, '.png'.
	
	^ image
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

!CWImageLeaf class methodsFor: 'caching'!

imageCache
	^ imageCache ifNil: [ imageCache := Dictionary new ]
!

imageCacheAt: aKey ifAbsent: aBlock
	^ self imageCache at: aKey ifAbsent: aBlock
!

imageCacheAt: aKey put: anImage
	^ self imageCache at: aKey put: anImage
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

!CWOverTile methodsFor: 'initialize-release'!

folderName
	^ 'overtiles'
! !

!CWOverTile methodsFor: 'visiting'!

accept: aVisitor
	^ aVisitor visitOverTile: self
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

!CWTile methodsFor: 'initalize-release'!

folderName
	^ 'tiles'
! !

!CWTile methodsFor: 'visiting'!

accept: aVisitor
	^ aVisitor visitTile: self
! !

CWTile subclass: #CWWall
	instanceVariableNames: ''
	package: 'Easnoth-BusinessObjects'!

!CWWall methodsFor: 'visiting'!

accept: aVisitor
	^ aVisitor visitWall: self
! !

CWImageLeaf subclass: #CWMonster
	instanceVariableNames: 'side move attack dices hp'
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

keyFor: aJson
	^ aJson name
!

move
	^ move
!

move: int
	move := int
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

folderName
	^ 'monsters'
!

initializeFromJson: aJson
	super initializeFromJson: aJson name.
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
	"self range: jsonStats range."
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

!CWMonster methodsFor: 'visiting'!

accept: aVisitor
	self shouldNotImplement
! !

CWMonster class instanceVariableNames: 'jsonStatCache'!

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

