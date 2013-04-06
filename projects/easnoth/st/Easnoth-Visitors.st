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
	instanceVariableNames: 'backgroundCanvas monsterCanvas gameCanvas padding currentPoint'
	package: 'Easnoth-Visitors'!
!CWDrawer commentStamp!
I am a drawer that can draw the business objects through a visit of its tree.!

!CWDrawer methodsFor: 'accessing'!

backgroundCanvas
	^ backgroundCanvas
!

backgroundCanvas: aCanvas
	backgroundCanvas := aCanvas
!

backgroundContext
	^ self backgroundCanvas element getContext: '2d'
!

gameCanvas
	^ gameCanvas
!

gameCanvas: aCanvas
	gameCanvas := aCanvas
!

gameContext
	^ self gameCanvas element getContext: '2d'
!

monsterCanvas
	^ monsterCanvas
!

monsterCanvas: aCanvas
	monsterCanvas := aCanvas
!

monsterContext
	^ self monsterCanvas element getContext: '2d'
!

padding
	^ padding
!

padding: aPoint
	padding := aPoint
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
	xpos := (i * (sin45 + sin75) - (temp)) * self tileUnit + self padding x.
	ypos := (temp / 2 + (i * sin135)) * self tileUnit + self padding y.
	
	^ xpos rounded @ ypos rounded.
! !

!CWDrawer methodsFor: 'constant'!

backgroundCanvasId
	"id of the background canvas for the css"

	^ '#background'
!

canvasPadding
	"padding between the border of the web page and the map (left and top)"

	^ 40
!

gameCanvasId
	"id of the game canvas for the css"

	^ '#game'
!

monsterCanvasId
	"id of the monster canvas for the css"

	^ '#monster'
!

tileUnit
	"scale of the images"

	^ 50
! !

!CWDrawer methodsFor: 'initialize-release'!

initialize
	super initialize. 
	self backgroundCanvas: (TagBrush fromJQuery: self backgroundCanvasId asJQuery canvas: (HTMLCanvas onJQuery: 'body' asJQuery)).
	self gameCanvas: (TagBrush fromJQuery: self gameCanvasId asJQuery canvas: (HTMLCanvas onJQuery: 'body' asJQuery)).
	self monsterCanvas: (TagBrush fromJQuery: self monsterCanvasId asJQuery canvas: (HTMLCanvas onJQuery: 'body' asJQuery)).
	self padding: (self canvasPadding @ self canvasPadding).
! !

!CWDrawer methodsFor: 'public'!

cleanCanvas
	self cleanCanvas: self backgroundCanvas.
	self cleanCanvas: self gameCanvas.
	self cleanCanvas: self monsterCanvas.
!

cleanCanvas: aCanvas
	| elem |
	elem := aCanvas element.
	(elem getContext: '2d') clearRect: 0 y: 0 width: elem width height: elem height.
!

draw: aMap
	self cleanCanvas.
	"The following line should be put somewhere else"
	self padding x: self canvasPadding + ((aMap children at:1) children size * self tileUnit * 1.17).
	self visitTree: aMap.
! !

!CWDrawer methodsFor: 'rendering'!

display: object inContext: ctx
	self display: object inContext: ctx X: 0 y: 0
!

display: object inContext: ctx X: x y: y
	ctx
		drawImage: object image
		x: x
		y: y.
!

drawIsometric: object inContext: ctx
	"draw through isometric transformation"

	[ ctx save;
		translate: currentPoint x + 45 y: currentPoint y - 7;
		scale: 1 y: 0.5;
		rotate: Number pi / 4 ;
		scale: 1.4 y: 1.33.
	self display: object inContext: ctx ]
		ensure: [ ctx restore ]
! !

!CWDrawer methodsFor: 'visiting'!

visitCell: aCell
	currentPoint := (self calculCanvasCoods: aCell mapCoods).
!

visitGameOverTile: got
	self drawIsometric: got inContext: self gameContext
!

visitHeros: heros
	"87 = 72 (width image + 15"
	
	| ctx |
	ctx := self monsterContext.
	(heros side negative) ifTrue: [
		[ ctx save;
			translate: currentPoint x + 87 y: 0;
			scale: -1 y: 1.
		self display: heros inContext: ctx X: 0 y: currentPoint y - 28 ]
			ensure: [ ctx restore ]
	] ifFalse: [
		self display: heros inContext: ctx  X: currentPoint x + 15 y: currentPoint y - 28.
	]
!

visitMap: aMap
		"Nothing to draw"
!

visitOverTile: ot
	self drawIsometric: ot inContext: self backgroundContext.
!

visitRow: aRow
	"Nothing to draw"
!

visitTile: aTile
	self drawIsometric: aTile inContext: self backgroundContext.
!

visitTroop: aTroop
	| xArray yArray ctx |

	xArray := #(17 37 -11 9).
	yArray := #(33 23 26 15).

	ctx := self monsterContext.
	(1 to: aTroop hp) do: [ :i |
		(aTroop side negative) ifTrue: [
				[ ctx save;
					translate: currentPoint x + 72 + (xArray at: i) y: 0;
					scale: -1 y: 1.
				self display: aTroop inContext: ctx X: 0 y: currentPoint y - (yArray at: i) ] 
					ensure: [ ctx restore ]
			] ifFalse: [
				self display: aTroop inContext: ctx X: currentPoint x + (xArray at: i) y: currentPoint y - (yArray at: i)
			]
	]
! !

