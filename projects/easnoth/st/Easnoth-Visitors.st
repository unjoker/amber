Smalltalk current createPackage: 'Easnoth-Visitors'!
Object subclass: #CWVisitor
	instanceVariableNames: ''
	package: 'Easnoth-Visitors'!
!CWVisitor commentStamp!
I am an abstract visitor that can visit the whole tree of business objects.!

!CWVisitor methodsFor: 'visiting'!

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

!CWVisitor methodsFor: 'visiting tree'!

visitChildTrees: aBusinessObject
	aBusinessObject children do: [:each |
		self visitTree: each ]
!

visitTree: aBusinessObject
	aBusinessObject accept: self.
	self visitChildTrees: aBusinessObject
! !

CWVisitor class instanceVariableNames: 'singleton'!

CWVisitor subclass: #CWDrawer
	instanceVariableNames: 'canvas mapCoods currentPoint'
	package: 'Easnoth-Visitors'!
!CWDrawer commentStamp!
I am a drawer that can draw the business objects through a visit of its tree.!

!CWDrawer methodsFor: 'accessing'!

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

!CWDrawer methodsFor: 'calculs'!

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

!CWDrawer methodsFor: 'constant'!

canvasId
	"id of the main canvas for the css"

	^ '#background'
!

canvasPadding
	"padding between the border of the web page and the map (left and top)"

	^ 40
!

tileUnit
	"scale of the images"

	^ 50
! !

!CWDrawer methodsFor: 'initialize-release'!

initialize
	super initialize. 
	self canvas: (TagBrush fromJQuery: self canvasId asJQuery canvas: (HTMLCanvas onJQuery: 'body' asJQuery)).
	self mapCoods: (self canvasPadding @ self canvasPadding).
! !

!CWDrawer methodsFor: 'public'!

cleanCanvas
	| elem |
	elem := self canvas element.
	(elem getContext: '2d') clearRect: 0 y: 0 width: elem width height: elem height.
!

draw: aMap
	self cleanCanvas.
	"The following line should be put somewhere else"
	self mapCoods x: self canvasPadding + ((aMap children at:1) children size * self tileUnit * 1.17).
	self visitTree: aMap.
! !

!CWDrawer methodsFor: 'rendering'!

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
! !

!CWDrawer methodsFor: 'visiting'!

visitCell: aCell
	currentPoint := (self calculCanvasCoods: aCell mapCoods).
!

visitGameOverTile: got
	self drawIsometric: got.
!

visitHeros: heros
	"87 = 72 (width image + 15"
	
	(heros side negative) ifTrue: [
		self context save;
			translate: currentPoint x + 87 y: 0;
			scale: -1 y: 1.
		self display: heros X: 0 y: currentPoint y - 28.
		self context restore.
	] ifFalse: [
		self display: heros X: currentPoint x + 15 y: currentPoint y - 28.
	]
!

visitMap: aMap
!

visitOverTile: ot
	self drawIsometric: ot.
!

visitRow: aRow
!

visitTile: aTile
	self drawIsometric: aTile.
!

visitTroop: aTroop
	|xArray yArray|

	xArray := #(17 37 -11 9).
	yArray := #(33 23 26 15).

	(1 to: aTroop hp) do: [ :i |
		(aTroop side negative) ifTrue: [
				self context save;
					translate: currentPoint x + 72 + (xArray at: i) y: 0;
					scale: -1 y: 1.
				self display: aTroop X: 0 y: currentPoint y - (yArray at: i).
				self context restore.
			] ifFalse: [
				self display: aTroop X: currentPoint x + (xArray at: i) y: currentPoint y - (yArray at: i)
			]
	]
! !

