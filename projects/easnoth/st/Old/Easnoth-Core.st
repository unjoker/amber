Smalltalk current createPackage: 'Easnoth-Core' properties: #{}!
Object subclass: #Cell
	instanceVariableNames: 'drawedObjects x y'
	package: 'Easnoth-Core'!
!Cell commentStamp!
"implementation of an hexagonal isometric cell"!

!Cell methodsFor: 'accessing'!

drawedObjects
	^drawedObjects
!

drawedObjects: value
	drawedObjects := value.
!

monster
	^drawedObjects at: 7
!

monster: aMonster
	drawedObjects at: 7 put: aMonster
!

overTiles
	^drawedObjects select:[:each | each class = OverTile ].
!

overTiles: aCollection
	(aCollection size < 7) ifTrue: [
		(1 to: aCollection size) do: [:i | drawedObjects at: i+1 put: (aCollection at: i)]
	] ifFalse: [
		^self error: 'too many overtiles in cell in json object'
	]
!

tile
	^drawedObjects at: 1
!

tile: aTile
	drawedObjects at: 1 put: aTile.
!

x
	^x
!

x: value
	x := value truncated.
!

y
	^y
!

y: value
	y := value truncated.
! !

!Cell methodsFor: 'displaying'!

draw
	drawedObjects do: [ :drawedObject |
		drawedObject ifNotNil: [drawedObject drawX: self x y: self y]
	].
!

updateCoods: coods
	self x: (coods at: 1).
	self y: (coods at: 2)
! !

!Cell class methodsFor: 'instance creation'!

newWithContext: aContext jsoncell: aJsonCell coods: coods
	^self new
		drawedObjects: (Array new: 8);
		x: (coods at: 1);
		y: (coods at: 2);
		tile: (Tile newWithContext: aContext jsonTile: aJsonCell tile);
		overTiles: (aJsonCell overtiles collect: [:each | OverTile newWithContext: aContext jsonOverTile: each overtile]);
		monster: (Monster newWithContext: aContext jsonMonster: aJsonCell monster);
		yourself.
! !

Object subclass: #DrawedObject
	instanceVariableNames: 'image context'
	package: 'Easnoth-Core'!
!DrawedObject commentStamp!
"abstract implementation of a drawedObject, Tile, overtile, Building or Monster"!

!DrawedObject methodsFor: 'accessing'!

context
	^context
!

context: aCtx
	context := aCtx
!

image
	^image
!

image: anImage
	image := anImage
! !

!DrawedObject methodsFor: 'displaying'!

displayX: aX y: aY
	self context drawImage: self image
						x: aX
						y: aY.
!

drawX: aX y: aY
	self subclassResponsibility
! !

!DrawedObject methodsFor: 'initializing'!

folderName
	self subclassResponsibility
!

initializeContext: aCtx imageKey: aKey
	self context: aCtx.
	ImageCache getSingleton putImageWithKey: aKey inDrawedObject: self
! !

DrawedObject subclass: #Ground
	instanceVariableNames: ''
	package: 'Easnoth-Core'!
!Ground commentStamp!
"abstract implementation of drawedObject Overtile and Tile. Drawed through isometric transformation"!

!Ground methodsFor: 'displaying'!

drawX: aX y: aY
	"draw through isometric transformation"

	|ctx|
	ctx := self context.
	ctx save;
		translate: aX + 45 y: aY-7;
		scale: 1 y: 0.5;
		rotate: Number pi / 4 ;
		scale: 1.4 y: 1.23.
	self displayX: 0 y: 0.
	ctx restore.
! !

Ground subclass: #OverTile
	instanceVariableNames: ''
	package: 'Easnoth-Core'!

!OverTile methodsFor: 'initializing'!

folderName
	^'overtiles'
! !

!OverTile class methodsFor: 'instance creation'!

newWithContext: aContext jsonOverTile: aJsonOverTile
	^self new
		initializeContext: aContext imageKey: aJsonOverTile;
		yourself.
! !

Ground subclass: #Tile
	instanceVariableNames: 'isWall'
	package: 'Easnoth-Core'!

!Tile methodsFor: 'accessing'!

isWall
	^isWall
!

isWall: aBoolean
	isWall := aBoolean
! !

!Tile methodsFor: 'initializing'!

folderName
	^'tiles'
! !

!Tile class methodsFor: 'instance creation'!

newWithContext: aContext jsonTile: aJsonTile
	^self new
		initializeContext: aContext imageKey: aJsonTile;
		isWall: false;
		yourself.
! !

DrawedObject subclass: #OverGround
	instanceVariableNames: 'hp'
	package: 'Easnoth-Core'!
!OverGround commentStamp!
"abstract implementation of drawedObject Building and monster. Share some instance variables"!

!OverGround methodsFor: 'accessing'!

hp
	^hp
!

hp: aNumber
	hp := aNumber
! !

OverGround subclass: #Building
	instanceVariableNames: ''
	package: 'Easnoth-Core'!

!Building methodsFor: 'initializing'!

folderName
	^'buildings'
! !

OverGround subclass: #Monster
	instanceVariableNames: 'move attack knockback range heros special'
	package: 'Easnoth-Core'!

!Monster methodsFor: 'accessing'!

attack
	^attack
!

attack: somePercent
	attack := somePercent
!

heros
	^heros
!

heros: aBoolean
	heros := aBoolean
!

knockback
	^knockback
!

knockback: somePercent
	knockback := somePercent
!

move
	^move
!

move: aNumberOfCell
	move := aNumberOfCell
!

range
	^range
!

range: aNumberOfCell
	range := aNumberOfCell
!

special
	^special
!

special: something
	special := something
! !

!Monster methodsFor: 'displaying'!

drawAsHeroX: aX y: aY
	"if player 2
	self context save;
		translate: aX y: 0.
		scale: -1 y: 1.
	self displayX: 0 - 15 y: aY - 28.
	ctx restore."
	self displayX: aX + 15 y: aY - 28.
!

drawX: aX y: aY
	"drawAsHero ou drawAsUnit"
	self drawAsHeroX: aX y: aY
! !

!Monster methodsFor: 'initializing'!

folderName
	^'monsters'
!

initializeStats: aJsonMonster
	MonsterCache getSingleton putStatsWithKey: aJsonMonster inMonster: self
!

stats: jsonStats
	self move: jsonStats move.
	self attack: jsonStats attack.
	self knockback: jsonStats knockback.
	self heros: jsonStats heros.
	self special: jsonStats special.
	"self heros ifTrue: [self hp: 2] ifFalse: [self hp: 4]."
! !

!Monster class methodsFor: 'instance creation'!

newWithContext: aContext jsonMonster: aJsonMonster
	^self new
		initializeContext: aContext imageKey: aJsonMonster;
		initializeStats: aJsonMonster;
		yourself.
! !

Object subclass: #Map
	instanceVariableNames: 'mapX mapY cells canvas'
	package: 'Easnoth-Core'!
!Map commentStamp!
"singleton Map, represents all the map drawed in the canvas"!

!Map methodsFor: 'accessing'!

canvas
	^canvas
!

canvas: aCanvas
	canvas := aCanvas
!

cells
	^cells
!

cells: anArray
	cells := anArray.
!

mapX
	^mapX
!

mapX: aLength
	mapX := aLength.
	self cells ifNotNil: [self updateCellsCoods].
!

mapY
	^mapY
!

mapY: aLength
	mapY := aLength.
	self cells ifNotNil: [self updateCellsCoods].
! !

!Map methodsFor: 'displaying'!

update
	Transcript show: 'banana'.
	(self canvas element getContext: '2d') clearRect: 0 y: 0 width: 1366 height: 768.
	self cells do: [:row |
		row do: [ :cell |
			cell draw.
		]
	]
!

updateCellsCoods
	self cells withIndexDo: [:row :i |
		row withIndexDo: [ :cell :j |
			cell updateCoods: (self calculX: i y: j).
		]
	]
! !

!Map methodsFor: 'initialize-release'!

calculX: i y: j
	|xpos ypos temp cood sin45 sin15 sin135 sin75|

	sin45 := 0.707106781. "Pi/4"
	sin15 := 0.258819045. "Pi/12"
	sin135 := 0.233445364. "???->I used Approximation"
	sin75 := 0.965925826. "5*Pi/12"

	temp := (j + ((i + 1)/2)) truncated.
	xpos := (i * (sin45 + sin75) - (temp* (sin15 + sin75))) * self tileUnit + self mapX.
	ypos := (temp * (sin15 + sin75) / 2 + (i * sin135)) * self tileUnit + self mapY.
	cood := Array with: xpos with: ypos.
	
	^cood
!

canvasId
	^'#main'
!

canvasPadding
	^40
!

initialize
	super initialize.

	"set html5 canvas to map canvas"
	self canvas: (TagBrush fromJQuery: self canvasId asJQuery canvas: (HTMLCanvas onJQuery: 'body' asJQuery)).

	self mapX: self canvasPadding.
	self mapY: self canvasPadding.
!

initializeCellsFromJson: jsonObject
	|cood|

	self cells: (Array new: (jsonObject row size)).
	jsonObject row withIndexDo: [:row :i |
		self cells at: i put: (Array new: (row cells size)).
		row cells withIndexDo: [ :cell :j |
			cood := self calculX: i y: j.
			(self cells at: i) at: j put: (Cell newWithContext: (self canvas element getContext: '2d') jsoncell: cell coods: cood).
		]
	].
!

tileUnit
	^50
! !

Map class instanceVariableNames: 'map'!

!Map class methodsFor: 'instance creation'!

getSingleton
	^map ifNil:[map := self new.]
!

newWithMapIndex: aMapIndex
	|jsonObject map|
	
	map := self getSingleton.
	jsonObject := JSON parse: (XMLhttpRequestProxy getSingleton loadJSON:  'ressources/json/maps/map',aMapIndex,'.json').
	
	"mapX adjustment according to mapSize"
	map mapX: map mapX + ((jsonObject row at:1) cells size * map tileUnit * 1.17).

	"cache initializing"
	ImageCache getSingleton onload: [map update].
	'window' asJQuery resize: [map update.].

	"cells initializing"
	map initializeCellsFromJson: jsonObject.

	^map
! !

