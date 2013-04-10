Smalltalk current createPackage: 'Easnoth-Visitors'!
Object subclass: #CWMapVisitorContext
	instanceVariableNames: 'rowIndex cellIndex'
	package: 'Easnoth-Visitors'!
!CWMapVisitorContext commentStamp!
general context just to know the coods in the map of cells!

!CWMapVisitorContext methodsFor: 'context alteration'!

nextCell
	cellIndex := cellIndex + 1.
!

nextRow
	rowIndex := rowIndex + 1.
	cellIndex := 0
! !

!CWMapVisitorContext methodsFor: 'initialize-release'!

reset
	rowIndex := 0.
	cellIndex := 0
! !

CWMapVisitorContext class instanceVariableNames: 'default'!

!CWMapVisitorContext class methodsFor: 'instance creation'!

default
	^ default ifNil: [ default := self new ]
! !

CWMapVisitorContext subclass: #CWGlobalDrawingContext
	instanceVariableNames: 'currentPointCache drawer'
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
	super nextCell.
	currentPointCache := nil.
! !

!CWGlobalDrawingContext methodsFor: 'initialize-release'!

reset: aDrawer
	super reset.
	currentPointCache := nil.
	drawer ifNil: [ drawer := aDrawer ]
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
	instanceVariableNames: 'layers padding executionContext map'
	package: 'Easnoth-Visitors'!
!CWMapDrawer commentStamp!
I am a drawer that can draw the business objects through a visit of its tree.
I am an implementation of the interpreter design pattern so I have a context of execution as instance variable.!

!CWMapDrawer methodsFor: 'accessing'!

announcer
	^ CWEasnothAnnouncer current
!

backgroundCanvas
	^ layers at: 1
!

backgroundContext
	^ self contextForCanvas: self backgroundCanvas
!

contextForCanvas: canvas
	^ canvas element getContext: '2d'
!

currentPoint
	^ self executionContext currentPoint
!

executionContext
	^ executionContext
!

gameCanvas
	^ layers at: 2
!

gameContext
	^ self contextForCanvas: self gameCanvas
!

monsterCanvas
	^ layers at: 3
!

monsterContext
	^ self contextForCanvas: self monsterCanvas
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

canvasForId: id
	"Answers amber canvas from a html id"

	^ TagBrush fromJQuery: id asJQuery canvas: (HTMLCanvas onJQuery: 'body' asJQuery)
!

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
	self initializeLayers.
	self padding: (self canvasPadding @ self canvasPadding).
	self initializeEventHandling.
!

initializeEventHandling
	self announcer
		on: CWGlobalDrawingEvent
		do: [ self updateMap ].
	self announcer
		on: CWGOTDrawingEvent
		do: [ self updateGOTs ].
	self announcer
		on: CWMonsterAndGOTDrawingEvent
		do: [ self updateMonstersAndGOTs ].
!

initializeForMap: aMap
	map := aMap.
	self padding x: self canvasPadding + ((map children at: 1) children size * self tileUnit * 1.17).
!

initializeLayers
	layers := Array new
		at: 1 put: (self canvasForId: self backgroundCanvasId);
		at: 2 put: (self canvasForId: self gameCanvasId);
		at: 3 put: (self canvasForId: self monsterCanvasId);
		yourself
! !

!CWMapDrawer methodsFor: 'private'!

cleanCanvas
	"should be delegated to context"
	
	layers do: [:each |
		self cleanCanvas: each ]
!

cleanCanvas: aCanvas
	"shoudl be called by context method"
	
	| elem |
	elem := aCanvas element.
	(elem getContext: '2d') clearRect: 0 y: 0 width: elem width height: elem height.
! !

!CWMapDrawer methodsFor: 'public'!

updateGOTs
	self cleanCanvas: self gameCanvas.
	executionContext := self newGOTDrawingContext.
	self visitTree: map.
!

updateMap
	self cleanCanvas.
	executionContext := self newGlobalDrawingContext.
	self visitTree: map.
!

updateMonstersAndGOTs
	self cleanCanvas: self gameCanvas.
	self cleanCanvas: self monsterCanvas.
	executionContext := self newMonsterAndGOTDrawingContext.
	self visitTree: map.
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

