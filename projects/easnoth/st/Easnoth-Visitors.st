Smalltalk current createPackage: 'Easnoth-Visitors'!
Object subclass: #MapVisitor
	instanceVariableNames: ''
	package: 'Easnoth-Visitors'!

!MapVisitor methodsFor: 'visiting'!

visitCell: aCell
	self subclassResponsibility
!

visitGameOverTile: aGameOverTile
	self subclassResponsibility
!

visitHeros: aHeros
	self subclassResponsibility
!

visitMap: aMap
	self subclassResponsibility
!

visitOverTile: anOverTile
	self subclassResponsibility
!

visitRow: aRow
	self subclassResponsibility
!

visitTile: aTile
	self subclassResponsibility
!

visitTroop: aTroop
	self subclassResponsibility
! !

!MapVisitor methodsFor: 'visiting helper'!

visitChildren: aNode
	aNode children do: [ :each |
		each accept: self ]
! !

MapVisitor class instanceVariableNames: 'singleton'!

!MapVisitor class methodsFor: 'visiting'!

singleton
	^singleton ifNil: [singleton := self new]
! !

MapVisitor subclass: #MapDrawer
	instanceVariableNames: 'canvas mapCoods currentPoint'
	package: 'Easnoth-Visitors'!

!MapDrawer methodsFor: 'accessing'!

canvas
	^ canvas
!

canvas: aCanvas
	canvas := aCanvas
!

context
	^ canvas element getContext: '2d'
!

mapCoods
	^ mapCoods
!

mapCoods: aPoint
	mapCoods := aPoint
! !

!MapDrawer methodsFor: 'calculs'!

calculCanvasCoods: coods
	"Takes the coods of the cell in the map and answers the absolute coods of the cell image in the web page"

	| xpos ypos temp sin45 sin15 sin135 sin75 i j |
	
	i := coods x.
	j := coods y.
	
	sin45 := 0.707106781. "Pi/4"
	sin15 := 0.258819045. "Pi/12"
	sin135 := 0.233445364. "???->I used Approximation"
	sin75 := 0.965925826. "5*Pi/12"

	temp := ((j + ((i + 1)/2)) truncated) * (sin15 + sin75).
	xpos := (i * (sin45 + sin75) - (temp)) * self tileUnit + self mapCoods x.
	ypos := (temp / 2 + (i * sin135)) * self tileUnit + self mapCoods y.
	
	^ xpos rounded @ ypos rounded.
! !

!MapDrawer methodsFor: 'constant'!

canvasId
	"id of the main canvas for the css"

	^ '#main'
!

canvasPadding
	"padding between the border of the web page and the map (left and top)"

	^ 40
!

tileUnit
	"scale of the images"

	^ 50
! !

!MapDrawer methodsFor: 'initialize-release'!

initialize
	super initialize.
	canvas := (TagBrush fromJQuery: self canvasId asJQuery canvas: (HTMLCanvas onJQuery: 'body' asJQuery)).
	mapCoods := (self canvasPadding @ self canvasPadding).
! !

!MapDrawer methodsFor: 'public'!

cleanMap
	"to change"
	
	| elem |
	elem := self canvas element.
	(elem getContext: '2d') clearRect: 0 y: 0 width: elem width height: elem height.
!

drawMap: aMap
	self cleanMap.
	self mapCoods x: self canvasPadding + ((aMap children at:1) children size * self tileUnit * 1.17).
	self visitMap: aMap.
! !

!MapDrawer methodsFor: 'rendering'!

display: object
	self display: object X: 0 y: 0
!

display: object X: x y: y
	self context 
		drawImage: object image
		x: x
		y: y.
!

drawIsometric: object
	"draw through isometric transformation"

	|ctx|
	ctx := self context.
	ctx save;
		translate: currentPoint x + 45 y: currentPoint y - 7;
		scale: 1 y: 0.5;
		rotate: Number pi / 4 ;
		scale: 1.4 y: 1.33.
	self display: object.
	ctx restore.
!

imageOf: object
	"I cannot remove this method ... "
! !

!MapDrawer methodsFor: 'visiting'!

visitCell: aCell
	currentPoint := (self calculCanvasCoods: aCell mapCoods).
 	self visitChildren: aCell
!

visitGameOverTile: got
	self drawIsometric: got.
!

visitHeros: heros
	self display: heros X: currentPoint x + 15 y: currentPoint y - 28.
!

visitMap: aMap
 	self visitChildren: aMap
!

visitOverTile: ot
	self drawIsometric: ot.
!

visitRow: aRow
 	self visitChildren: aRow
!

visitTile: aTile
	self drawIsometric: aTile.
!

visitTroop: aTile
! !

