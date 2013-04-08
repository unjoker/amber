Smalltalk current createPackage: 'Easnoth-Visitors'!
Object subclass: #CWGlobalDrawingContext
	instanceVariableNames: 'rowIndex cellIndex currentPointCache drawer'
	package: 'Easnoth-Visitors'!
!CWGlobalDrawingContext commentStamp!
I represent the execution context of the CWMapDrawer.
With this context, the CWMap drawer will redraw the whole map.!

!CWGlobalDrawingContext methodsFor: 'accessing'!

currentPoint
	^ currentPointCache ifNil: [ currentPointCache := self calculCanvasCoods ]
! !

!CWGlobalDrawingContext methodsFor: 'calculs'!

calculCanvasCoods
	"Takes the coods of the cell in the map and answers the absolute coods of the cell image in the web page"

	| xpos ypos temp sin45 sin15 sin135 sin75 padding tileUnit |
	
	padding := drawer padding.
	tileUnit := drawer tileUnit.
	
	sin45 := 0.707106781. "Pi/4"
	sin15 := 0.258819045. "Pi/12"
	sin135 := 0.233445364. "???->I used Approximation"
	sin75 := 0.965925826. "5*Pi/12"

	temp := ((cellIndex + ((rowIndex + 1)/2)) truncated) * (sin15 + sin75).
	xpos := (rowIndex * (sin45 + sin75) - (temp)) * tileUnit + padding x.
	ypos := (temp / 2 + (rowIndex * sin135)) * tileUnit + padding y.
	
	^ xpos rounded @ ypos rounded
! !

!CWGlobalDrawingContext methodsFor: 'context alteration'!

nextCell
	cellIndex := cellIndex + 1.
	currentPointCache := nil.
!

nextRow
	rowIndex := rowIndex + 1.
	cellIndex := 0
! !

!CWGlobalDrawingContext methodsFor: 'initialize-release'!

reset: aDrawer
	rowIndex := 0.
	cellIndex := 0.
	currentPointCache := nil.
	drawer := aDrawer
	"put back next thing when current system ok"
	"drawer ifNil: [ drawer := aDrawer ]"
! !

!CWGlobalDrawingContext methodsFor: 'visiting'!

visitGameOverTile: got
	drawer drawIsometric: got inContext: drawer gameContext
!

visitHeros: heros
	drawer drawHeros: heros
!

visitOverTile: ot
	drawer drawIsometric: ot inContext: drawer backgroundContext.
!

visitTile: aTile
	drawer drawIsometric: aTile inContext: drawer backgroundContext.
!

visitTroop: aTroop
	drawer drawTroop: aTroop
! !

CWGlobalDrawingContext class instanceVariableNames: 'default'!

!CWGlobalDrawingContext class methodsFor: 'instance creation'!

default
	^ default ifNil: [ default := self new ]
! !

CWGlobalDrawingContext subclass: #CWMonsterAndGOTDrawingContext
	instanceVariableNames: ''
	package: 'Easnoth-Visitors'!
!CWMonsterAndGOTDrawingContext commentStamp!
With this context, the CWMap drawer will redraw only monsters and game over tiles.!

!CWMonsterAndGOTDrawingContext methodsFor: 'visiting'!

visitOverTile: ot
	"do nothing"
!

visitTile: aTile
	"do nothing"
! !

CWMonsterAndGOTDrawingContext subclass: #CWGOTDrawingContext
	instanceVariableNames: ''
	package: 'Easnoth-Visitors'!
!CWGOTDrawingContext commentStamp!
With this context, the CWMap drawer will redraw only game over tiles.!

!CWGOTDrawingContext methodsFor: 'visiting'!

visitHeros: heros
	"do nothing"
!

visitTroop: aTroop
	"do nothing"
! !

Object subclass: #CWVisitor
	instanceVariableNames: ''
	package: 'Easnoth-Visitors'!
!CWVisitor commentStamp!
I am an abstract visitor that can visit the whole tree of business objects.!

!CWVisitor methodsFor: 'visiting'!

visitCell: aCell
	self subclassResponsibility
!

visitChildTrees: aBusinessObject
	aBusinessObject children do: [ :each |
		self visitTree: each ]
!

visitChildren: aBusinessObject
	aBusinessObject children do: [ :each |
		each accept: self ]
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

visitTree: aComponent
	aComponent accept: self.
	self visitChildTrees: aComponent.
!

visitTroop: aTroop
	self subclassResponsibility
! !

CWVisitor class instanceVariableNames: 'singleton'!

CWVisitor subclass: #CWJsonWriter
	instanceVariableNames: ''
	package: 'Easnoth-Visitors'!

CWVisitor subclass: #CWLeafSelector
	instanceVariableNames: ''
	package: 'Easnoth-Visitors'!

CWVisitor subclass: #CWMapDrawer
	instanceVariableNames: 'backgroundCanvas monsterCanvas gameCanvas padding executionContext'
	package: 'Easnoth-Visitors'!
!CWMapDrawer commentStamp!
I am a drawer that can draw the business objects through a visit of its tree.
I am an implementation of the interpreter design pattern so I have a context of execution as instance variable.!

!CWMapDrawer methodsFor: 'accessing'!

backgroundCanvas
	^ backgroundCanvas
!

backgroundCanvas: aCanvas
	backgroundCanvas := aCanvas
!

backgroundContext
	^ self backgroundCanvas element getContext: '2d'
!

currentPoint
	^ self executionContext currentPoint
!

executionContext
	^ executionContext
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

!CWMapDrawer methodsFor: 'constant'!

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

!CWMapDrawer methodsFor: 'factory'!

newGOTDrawingContext
	^ CWGOTDrawingContext default reset: self
!

newGlobalDrawingContext
	^ CWGlobalDrawingContext default reset: self
!

newMonsterAndGOTDrawingContext
	^ CWMonsterAndGOTDrawingContext default reset: self
! !

!CWMapDrawer methodsFor: 'initialize-release'!

initialize
	super initialize. 
	self backgroundCanvas: (TagBrush fromJQuery: self backgroundCanvasId asJQuery canvas: (HTMLCanvas onJQuery: 'body' asJQuery)).
	self gameCanvas: (TagBrush fromJQuery: self gameCanvasId asJQuery canvas: (HTMLCanvas onJQuery: 'body' asJQuery)).
	self monsterCanvas: (TagBrush fromJQuery: self monsterCanvasId asJQuery canvas: (HTMLCanvas onJQuery: 'body' asJQuery)).
	self padding: (self canvasPadding @ self canvasPadding).
!

initializeForMap: aMap
	self padding x: self canvasPadding + ((aMap children at:1) children size * self tileUnit * 1.17).
! !

!CWMapDrawer methodsFor: 'public'!

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

drawGOTs: aMap
	self cleanCanvas.
	"hacky"
	self initializeForMap: aMap.
	"end hacky"
	executionContext := self newGOTDrawingContext.
	self visitTree: aMap.
!

drawMap: aMap
	self cleanCanvas.
	"hacky"
	self initializeForMap: aMap.
	"end hacky"
	executionContext := self newGlobalDrawingContext.
	self visitTree: aMap.
!

drawMonstersAndGOTs: aMap
	self cleanCanvas.
	"hacky"
	self initializeForMap: aMap.
	"end hacky"
	executionContext := self newMonsterAndGOTDrawingContext.
	self visitTree: aMap.
! !

!CWMapDrawer methodsFor: 'rendering'!

display: object inContext: ctx
	self display: object inContext: ctx X: 0 y: 0
!

display: object inContext: ctx X: x y: y
	ctx
		drawImage: object image
		x: x
		y: y.
!

drawHeros: heros
	"87 = 72 (width image + 15"
	
	| ctx |
	ctx := self monsterContext.
	(heros side negative) ifTrue: [
		self reverseDisplay: heros inContext: ctx xPad: 87 yPad: 28
	] ifFalse: [
		self display: heros inContext: ctx  X: self currentPoint x + 15 y: self currentPoint y - 28
	]
!

drawIsometric: object inContext: ctx
	"draw through isometric transformation"

	self safeDraw: [ ctx 
		translate: self currentPoint x + 45 y: self currentPoint y - 7;
		scale: 1 y: 0.5;
		rotate: Number pi / 4 ;
		scale: 1.4 y: 1.33.
	self display: object inContext: ctx ]
		inContext: ctx
!

drawTroop: aTroop
	| xArray yArray ctx |

	xArray := #(17 37 -11 9).
	yArray := #(33 23 26 15).

	ctx := self monsterContext.
	(1 to: aTroop hp) do: [ :i |
		(aTroop side negative) ifTrue: [
				self reverseDisplay: aTroop inContext: ctx xPad: 72 + (xArray at: i) yPad: (yArray at: i)
			] ifFalse: [
				self display: aTroop inContext: ctx X: self currentPoint x + (xArray at: i) y: self currentPoint y - (yArray at: i)
			]
	]
!

reverseDisplay: heros inContext: ctx xPad: aX yPad: aY
	"87 = 72 (width image + 15"

	self safeDraw: [ ctx
		translate: self currentPoint x + aX y: 0;
		scale: -1 y: 1.
	self display: heros inContext: ctx X: 0 y: self currentPoint y - aY ]
		inContext: ctx
!

safeDraw: aBlock inContext: ctx
	"ensure that the drawing context will be restored"

	[ ctx save.
	aBlock value ]
		ensure: [ ctx restore ]
! !

!CWMapDrawer methodsFor: 'visiting'!

visitCell: aCell
	self executionContext nextCell.
!

visitGameOverTile: got
	self executionContext visitGameOverTile: got
!

visitHeros: heros
	self executionContext visitHeros: heros
!

visitMap: aMap
	"nothing to do here"
!

visitOverTile: ot
	self executionContext visitOverTile: ot
!

visitRow: aRow
	self executionContext nextRow.
!

visitTile: aTile
	self executionContext visitTile: aTile
!

visitTroop: aTroop
	self executionContext visitTroop: aTroop
! !

