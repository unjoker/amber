Smalltalk current createPackage: 'Easnoth-BusinessObjects'!
Object subclass: #CWBusinessObject
	instanceVariableNames: 'parent children'
	package: 'Easnoth-BusinessObjects'!

!CWBusinessObject methodsFor: 'accessing'!

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

!CWBusinessObject methodsFor: 'factory'!

newChild
	^ self newChild: self childBasicClass
!

newChild: aClass
	^ aClass new parent: self
! !

!CWBusinessObject methodsFor: 'nodes'!

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

!CWBusinessObject methodsFor: 'testing'!

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

!CWBusinessObject methodsFor: 'visiting'!

accept: aVisitor
	self subclassResponsibility
! !

CWBusinessObject subclass: #CWCell
	instanceVariableNames: 'mapCoods'
	package: 'Easnoth-BusinessObjects'!
!CWCell commentStamp!
canvasCoods is a cache not to recalcul it each time!

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
    elements last = 'monster'
    	ifTrue: [ self addChild: (self newHeros initializeFromJson: aJsonCell monster) ].
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

CWBusinessObject subclass: #CWImageLeaf
	instanceVariableNames: 'image'
	package: 'Easnoth-BusinessObjects'!

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
	image := self class imageCacheAt: (self keyFor: aJson) ifAbsent: [ self newImageFrom: aJson ]
!

newImageFrom: aJson
	"Create a new image and cache it"
	
	| key |
	
	key := self keyFor: aJson.
	image := NativeFunction constructor: 'Image'.
	
	self class imageCache at: key put: image.
	
    image at: 'onload' put: [
		"This should be managed differently later"
		MapDrawer new drawMap: self parent parent parent].
    image at: 'src' put:  'ressources/images/', self folderName, '/', key, '.png'.
	
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

CWImageLeaf subclass: #CWMonster
	instanceVariableNames: ''
	package: 'Easnoth-BusinessObjects'!

!CWMonster methodsFor: 'accessing'!

keyFor: aJson
	^ aJson name
! !

!CWMonster methodsFor: 'initialize-release'!

folderName
	^ 'monsters'
! !

!CWMonster methodsFor: 'visiting'!

accept: aVisitor
	self shouldNotImplement
! !

CWMonster class instanceVariableNames: 'jsonStatCache'!

CWMonster subclass: #CWHeros
	instanceVariableNames: ''
	package: 'Easnoth-BusinessObjects'!

!CWHeros methodsFor: 'visiting'!

accept: aVisitor
	^ aVisitor visitHeros: self
! !

CWMonster subclass: #CWTroop
	instanceVariableNames: ''
	package: 'Easnoth-BusinessObjects'!

!CWTroop methodsFor: 'visiting'!

accept: aVisitor
	^ aVisitor visitTroop: self
! !

CWBusinessObject subclass: #CWMap
	instanceVariableNames: ''
	package: 'Easnoth-BusinessObjects'!

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

CWBusinessObject subclass: #CWRow
	instanceVariableNames: 'rowIndex'
	package: 'Easnoth-BusinessObjects'!

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

