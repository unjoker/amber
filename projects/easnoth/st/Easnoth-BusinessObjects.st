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

parent: aCoreWidget
	parent := aCoreWidget
! !

!CWBusinessObject methodsFor: 'factory'!

newChild
	^ self newChild: self childBasicClass
!

newChild: aClass
	^ aClass new parent: self
! !

!CWBusinessObject methodsFor: 'nodes'!

addChild: aCoreWidget
	^ children add: aCoreWidget
!

addChildren: aCollection
	^ children addAll: aCollection
!

childAt: index 
	^ children at: index
!

childAt: index put: aCoreWidget
	^ children at: index put: aCoreWidget
!

childBasicClass
	self subclassResponsibility
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
	instanceVariableNames: 'canvasCoods mapCoods'
	package: 'Easnoth-BusinessObjects'!

!CWCell methodsFor: 'accessing'!

canvasCoods
	^ canvasCoods
!

canvasCoods: aPoint
	canvasCoods := aPoint
!

mapCoods
	^ mapCoods
!

mapCoods: aPoint
	mapCoods := aPoint
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
			self newOverTile initializeFromJson: each] ) ].
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

keyFor: aJson
	^ aJson
! !

!CWImageLeaf methodsFor: 'initialize-release'!

folderName
	self subclassResponsibility
!

initializeFromJson: aJson
		| imageNew |
		imageNew := NativeFunction constructor: 'Image'.
       "imageNew at: 'onload' put: []."
        imageNew at: 'src' put:  'ressources/images/', self folderName, '/', (self keyFor: aJson), '.png'.
! !

!CWImageLeaf methodsFor: 'visiting'!

accept: aVisitor
	self shouldNotImplement
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
	instanceVariableNames: 'canvasCoods'
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

initialize
	super initialize.
	canvasCoods := (self canvasPadding @ self canvasPadding).
!

initializeChildrenFromJson: jsonMap
	"initialize the children of the map (the rows)"
	
	| child rows |
	rows := jsonMap row.
	self children: (Array new: rows size).
	rows withIndexDo: [:row :i |
		child := self newChild.
		child rowIndex: i.
		child initializeFromJson: row.
		self childAt: i put: child ]
!

initializeFromJson: jsonMap

	"mapX adjustment according to mapSize"
	self canvasCoods x: self canvasCoods x + ((jsonMap row at:1) cells size * self tileUnit * 1.17).
	
	self initializeChildrenFromJson: jsonMap
! !

!CWMap methodsFor: 'nodes'!

childBasicClass
	^ CWRow
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
		onSuccess: [:data | map initializeFromJson: data].

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

Object subclass: #CWGameBoard
	instanceVariableNames: 'map drawer menu cache'
	package: 'Easnoth-BusinessObjects'!

