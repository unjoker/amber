Smalltalk current createPackage: 'Easnoth-Visitors'!
Object subclass: #CWLayer
	instanceVariableNames: ''
	package: 'Easnoth-Visitors'!

CWLayer subclass: #CWCanvasLayer
	instanceVariableNames: ''
	package: 'Easnoth-Visitors'!

CWLayer subclass: #CWImageLayer
	instanceVariableNames: ''
	package: 'Easnoth-Visitors'!

Object subclass: #CWMapInterpreterContext
	instanceVariableNames: 'rowIndex cellIndex'
	package: 'Easnoth-Visitors'!
!CWMapInterpreterContext commentStamp!
general context just to know the coods in the map of cells!

!CWMapInterpreterContext methodsFor: 'accessing'!

currentCoods
	^ rowIndex @ cellIndex
! !

!CWMapInterpreterContext methodsFor: 'context alteration'!

nextCell
	cellIndex := cellIndex + 1.
!

nextRow
	rowIndex := rowIndex + 1.
	cellIndex := 0
! !

!CWMapInterpreterContext methodsFor: 'initialize-release'!

reset
	rowIndex := 0.
	cellIndex := 0
! !

CWMapInterpreterContext class instanceVariableNames: 'default'!

!CWMapInterpreterContext class methodsFor: 'instance creation'!

default
	^ default ifNil: [ default := self new ]
! !

CWMapInterpreterContext subclass: #CWGlobalDrawingContext
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
	drawer drawGOT: got
!

visitHeros: heros
	drawer drawHeros: heros
!

visitOverTile: ot
	drawer drawBackground: ot
!

visitTile: aTile
	drawer drawBackTile.
	drawer drawBackground: aTile
!

visitUnit: aUnit
	drawer drawUnit: aUnit
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

visitUnit: aUnit
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

visitUnit: aUnit
	self subclassResponsibility
! !

!CWVisitor methodsFor: 'visiting - public'!

visitChildTrees: aBusinessObject
	aBusinessObject children do: [ :each |
		self visitTree: each ]
!

visitChildren: aBusinessObject
	aBusinessObject children do: [ :each |
		each accept: self ]
!

visitTree: aComponent
	aComponent accept: self.
	self visitChildTrees: aComponent.
! !

CWVisitor class instanceVariableNames: 'singleton'!

CWVisitor subclass: #CWJsonWriter
	instanceVariableNames: 'stream indentLevel otNumber'
	package: 'Easnoth-Visitors'!

!CWJsonWriter methodsFor: 'helper'!

extractKeyFrom: url
	| imageName |
	imageName := (url tokenize: '/') last.
	^ (imageName tokenize: '.') first
! !

!CWJsonWriter methodsFor: 'initialize-release'!

initialize
	super initialize.
	stream := StringStream on: ''.
	indentLevel := 0.
! !

!CWJsonWriter methodsFor: 'public'!

exportMap: aMap
	"returns the string to write down in the json file"

	aMap removeSelection.
	self visitMap: aMap.
	^ stream collection asString
! !

!CWJsonWriter methodsFor: 'stream API'!

cr
	stream cr.
	1 to: indentLevel do: [ :each | stream tab ]
!

crIndentDecr
	self decreaseIndent.
	self cr.
!

crIndentIncr
	self increaseIndent.
	self cr.
!

decreaseIndent
	indentLevel := indentLevel - 1.
	indentLevel < 0 ifTrue: [ self error: 'indentation problem' ]
!

increaseIndent
	indentLevel := indentLevel + 1
!

nextPutAll: aString
	stream nextPutAll: aString
!

space
	stream space
! !

!CWJsonWriter methodsFor: 'stream HL API'!

commaCr
	self 
		nextPutAll: ',';
		cr
!

endArray
	self 
		crIndentDecr;
		nextPutAll: ']'
!

endObject
	self 
		crIndentDecr;
		nextPutAll: '}'.
!

objectFieldName: aName intValue: anInt
	" ""aName"": anInt "

	self 
		nextPutAll: '"';
		nextPutAll: aName;
		nextPutAll: '": ';
		nextPutAll: anInt printString
!

objectFieldName: aName stringValue: aString
	" ""aName"": ""aString"" "

	self 
		nextPutAll: '"';
		nextPutAll: aName;
		nextPutAll: '": "';
		nextPutAll: aString;
		nextPutAll: '"'
!

startArrayNamed: aString
	self 
		nextPutAll: '"';
		nextPutAll: aString;
		nextPutAll: '": [';
		crIndentIncr
!

startObject
	self 
		nextPutAll: '{';
		crIndentIncr
!

startObjectNamed: aName
	self 
		nextPutAll: '"';
		nextPutAll: aName;
		nextPutAll: '": ';
		startObject
! !

!CWJsonWriter methodsFor: 'visiting'!

visitCell: aCell
	otNumber := 0.
	self 
		startObject;
		visitChildren: aCell;
		endObject.
!

visitChildren: aBusinessObject
	aBusinessObject children withIndexDo: [ :child :i |
			child accept: self.
			i = aBusinessObject children size 
				ifFalse: [ self commaCr ] ].
!

visitGameOverTile: aGameOverTile
	self error: 'gameOverTile should have been removed before exportation'
!

visitHeros: aHeros
	self
		startObjectNamed: 'heros';
		visitMonster: aHeros
!

visitMap: aMap
	self 
		startObject;
		objectFieldName: 'name' stringValue: 'foo';
		commaCr;
		startArrayNamed: 'row';
		visitChildren: aMap;
		endArray;
		endObject.
!

visitMonster: aMonster
	self
		objectFieldName: 'name' stringValue: (self extractKeyFrom: aMonster image src);
		commaCr;
		objectFieldName: 'side' intValue: aMonster side;
		endObject
!

visitOverTile: anOverTile
	otNumber := otNumber + 1.
	self objectFieldName: 'overtile', otNumber stringValue: (self extractKeyFrom: anOverTile image src).
!

visitRow: aRow
	self 
		startObject;
		startArrayNamed: 'cells';
		visitChildren: aRow;
		endArray;
		endObject.
!

visitTile: aTile
	self objectFieldName: 'tile' stringValue: (self extractKeyFrom: aTile image src)
!

visitUnit: aUnit
	self
		startObjectNamed: 'unit';
		visitMonster: aUnit
! !

CWVisitor subclass: #CWMapInterpreter
	instanceVariableNames: 'executionContext'
	package: 'Easnoth-Visitors'!
!CWMapInterpreter commentStamp!
While visiting the map, I modify my execution context which is kind of CWMapInterpreterContext. This way my context knows the coordinates of the leaf I am visiting.!

!CWMapInterpreter methodsFor: 'accessing'!

executionContext
	^ executionContext
! !

CWMapInterpreter subclass: #CWMapDrawer
	instanceVariableNames: 'layers padding map'
	package: 'Easnoth-Visitors'!
!CWMapDrawer commentStamp!
I am a drawer that can draw the business objects through a visit of its tree.
I am an implementation of the interpreter design pattern so I have a context of execution as instance variable.!

!CWMapDrawer methodsFor: 'accessing'!

announcer
	^ CWEasnothAnnouncer current
!

backTileImage
	^ CWBackground imageCacheAt: 'back'
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
		on: CWMapMoveEvent
		do: [ :event | self perform: event directionMethod ]
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

!CWMapDrawer methodsFor: 'map move'!

down
	padding := padding + (0 @ self moveIncrement).
	self updateMap
!

left
	padding := padding + (self moveIncrement negated @ 0).
	self updateMap
!

moveIncrement
	^ 50
!

right
	padding := padding + (self moveIncrement @ 0).
	self updateMap
!

up
	padding := padding + (0 @ self moveIncrement negated).
	self updateMap
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

drawBackTile
	| ctx |
	ctx := self backgroundContext.
	self safeDraw: [ ctx drawImage: self backTileImage x: self currentPoint x - 4 y: self currentPoint y + 20 ] inContext: ctx
!

drawBackground: object
	self drawIsometric: object inContext: self backgroundContext
!

drawGOT: got
	self safeDraw: [ :context | self display: got inContext: context X: self currentPoint x - 15 y: self currentPoint y - 10 ] inContext: self gameContext
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

	self safeDraw: [ :context |
		context 
			translate: self currentPoint x + 45 y: self currentPoint y - 7;
			scale: 1 y: 0.5;
			rotate: Number pi / 4 ;
			scale: 1.4 y: 1.33.
	self display: object inContext: context ]
		inContext: ctx
!

drawUnit: aUnit
	| xArray yArray ctx |

	xArray := #(17 37 -11 9).
	yArray := #(33 23 26 15).

	ctx := self monsterContext.
	(1 to: aUnit hp) do: [ :i |
		(aUnit side negative) ifTrue: [
				self reverseDisplay: aUnit inContext: ctx xPad: 72 + (xArray at: i) yPad: (yArray at: i)
			] ifFalse: [
				self display: aUnit inContext: ctx X: self currentPoint x + (xArray at: i) y: self currentPoint y - (yArray at: i)
			]
	]
!

reverseDisplay: heros inContext: ctx xPad: aX yPad: aY
	"87 = 72 (width image + 15"

	self safeDraw: [ :context |
		context
			translate: self currentPoint x + aX y: 0;
			scale: -1 y: 1.
		self display: heros inContext: context X: 0 y: self currentPoint y - aY ]
		inContext: ctx
!

safeDraw: aBlock inContext: ctx
	"ensure that the drawing context will be restored"

	[ ctx save.
	aBlock value: ctx ]
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

visitUnit: aUnit
	self executionContext visitUnit: aUnit
! !

