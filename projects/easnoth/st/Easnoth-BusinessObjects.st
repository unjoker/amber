Smalltalk current createPackage: 'Easnoth-BusinessObjects'!
Object subclass: #CWNode
	instanceVariableNames: 'parent children'
	package: 'Easnoth-BusinessObjects'!
!CWNode commentStamp!
I represent a business object of the game. The business objects are managed in a tree : you have a root object that has children (and children can also have children).

Game logic is implemented in my subclasses. For Displaying, look at CWDrawer.!

!CWNode methodsFor: 'accessing'!

children
	^ children
!

children: aCollection
	children := aCollection
!

parent
	^ parent
!

parent: object
	parent := object
! !

!CWNode methodsFor: 'factory'!

newChild
	^ self newChild: self childBasicClass
!

newChild: aClass
	^ aClass new parent: self
! !

!CWNode methodsFor: 'nodes'!

addChild: object
	^ children add: object
!

addChildren: aCollection
	^ children addAll: aCollection
!

childAt: index 
	^ children at: index
!

childAt: index put: object
	^ children at: index put: object
!

childBasicClass
	self subclassResponsibility
!

removeChild: object
	^ children remove: object
! !

!CWNode methodsFor: 'testing'!

initialize
	super initialize.
	children := Array new
!

isLeaf
	^ children isEmpty
!

isRoot
	^ parent isNil
! !

!CWNode methodsFor: 'visiting'!

accept: aVisitor
	self subclassResponsibility
! !

CWNode subclass: #CWCell
	instanceVariableNames: 'mapCoods'
	package: 'Easnoth-BusinessObjects'!
!CWCell commentStamp!
I represent an hexagon cell in the map.!

!CWCell methodsFor: 'accessing'!

mapCoods
	^ mapCoods
!

mapCoods: aPoint
	mapCoods := aPoint.
! !

!CWCell methodsFor: 'factory'!

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
! !

!CWCell methodsFor: 'initialize-release'!

initializeFromJson: aJsonCell
    | elements |
    
    elements := aJsonCell keys.
    
    elements first = 'tile'
    	ifTrue: [ self addChild: (self newTile initializeFromJson: aJsonCell tile) ].
    (elements includes: 'overtiles') 
    	ifTrue: [ self addChildren: (aJsonCell overtiles collect: [:each | 
			self newOverTile initializeFromJson: each overtile] ) ].
    elements last = 'heros'
    	ifTrue: [ self addChild: (self newHeros initializeFromJson: aJsonCell heros) ].
    elements last = 'troop'
    	ifTrue: [ self addChild: (self newTroop initializeFromJson: aJsonCell troop) ].
! !

!CWCell methodsFor: 'nodes'!

gameOverTileClass
	^ CWGameOverTile
!

herosClass
	^ CWHeros
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

!CWCell methodsFor: 'visiting'!

accept: aVisitor
	^ aVisitor visitCell: self
! !

CWNode subclass: #CWImageLeaf
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
	
    self class 
		jsonStatCacheAt: keySuccess 
		put: [:statsNew | 
			self class jsonStatCacheAt: aKey put: statsNew.
       		self stats: statsNew ].

	jQuery 
		getJSON: 'ressources/json/monsters/', aKey, '.json' 
		onSuccess: [:data | (self class jsonStatCacheAt: keySuccess) value: data]
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

CWNode subclass: #CWMap
	instanceVariableNames: ''
	package: 'Easnoth-BusinessObjects'!
!CWMap commentStamp!
I represent the whole map in the game.!

!CWMap methodsFor: 'accessing'!

canvasCoods
	^ canvasCoods
!

canvasCoods: aPoint
	canvasCoods := aPoint
! !

!CWMap methodsFor: 'constant'!

canvasPadding
	"Answers the basic distance between the window border and my top left cell"

	^ 40
!

tileUnit
	"Answers the scale of cells. Change if you take bigger pictures"

	^ 50
! !

!CWMap methodsFor: 'initialize-release'!

initializeFromJson: jsonMap
	"initialize the children of the map (the rows)"
	
	| child rows |
	rows := jsonMap row.
	self children: (Array new: rows size).
	rows withIndexDo: [:row :i |
		child := self newChild.
		self childAt: i put: child.
		child rowIndex: i.
		child initializeFromJson: row ]
! !

!CWMap methodsFor: 'nodes'!

childBasicClass
	^ CWRow
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

CWNode subclass: #CWRow
	instanceVariableNames: 'rowIndex'
	package: 'Easnoth-BusinessObjects'!
!CWRow commentStamp!
I represent a row of cells in the map.!

!CWRow methodsFor: 'accessing'!

rowIndex
	^ rowIndex
!

rowIndex: aNumber
	rowIndex := aNumber
! !

!CWRow methodsFor: 'initialize'!

initializeFromJson: jsonRow
	| cells child |

	cells := jsonRow cells.
	self children: (Array new: cells size).
	
	cells withIndexDo: [:cell :i |
		child :=  self newChild.
		child mapCoods: self rowIndex @ i.
		child initializeFromJson: cell. 
		self childAt: i put: child ].
! !

!CWRow methodsFor: 'nodes'!

childBasicClass
	^ CWCell
! !

!CWRow methodsFor: 'visiting'!

accept: aVisitor
	^ aVisitor visitRow: self
! !

