Smalltalk current createPackage: 'Easnoth-MapUI'!
Object subclass: #CWEventDispatcher
	instanceVariableNames: 'canvas map drawer game suspended currentCell'
	package: 'Easnoth-MapUI'!
!CWEventDispatcher commentStamp!
I dispatch event from eventManager canvas to cells.!

!CWEventDispatcher methodsFor: 'accessing'!

announcer
	^ CWEasnothAnnouncer current
!

canvas
	^ canvas
!

cellAt: i y: j
	^ (self rowAt: i) childAt: j
!

cellAt: i y: j ifAbsent: aBlock
	"need to change the implementation"
	^ [(self rowAt: i) childAt: j] on: Error do: [ aBlock value ]
!

eventManagerLayerId
	^ '#eventManager'
!

padding
	^ drawer padding
!

rowAt: index
	^ map childAt: index
! !

!CWEventDispatcher methodsFor: 'calculs'!

currentCell: anEvent
	|x y cood|
	
	((jQuery at: #browser) at: #mozilla) notNil
		ifTrue: [
			x := anEvent clientX - anEvent target offsetLeft - anEvent target offsetParent offsetLeft.
			y := anEvent clientY - anEvent target offsetTop - anEvent target offsetParent offsetTop ]
		ifFalse: [
			x := anEvent offsetX.
			y := anEvent offsetY ].
		
     cood := self mouseCoodToHexCoodX: x y: y.
	
	"if out of map then nil"
	^ self cellAt: cood x y: cood y ifAbsent: [ nil ]
!

mouseCoodToHexCoodX: x y: y
	"function that take mouse cood in pixel and return the coods of the tile selected"
	
	"algo is in javascript"

	| xHex yHex array mapDisplayX mapDisplayY|
                
	mapDisplayX := self padding x.
	mapDisplayY := self padding y.

	array:= self mouseCoodToHexCoodX: x y: y mapX: mapDisplayX mapY: mapDisplayY.
    
    xHex := array at: 1.
    yHex := array at: 2.
    
	^xHex @ yHex.
!

mouseCoodToHexCoodX: x y: y mapX: mapDisplayX mapY: mapDisplayY
	"function that take mouse cood in pixel and return the coods of the tile selected"

		<function mod(n, mod) {
			return ((mod+(n%mod))%mod);
		}

		var cosmaingridx = 0.882947593;
		var sinmaingridx = 0.469471563;
		var cosmaingridy = -0.130526192;
		var sinmaingridy = 0.991444861;
		
		var cosothergridx = 0.4539905;
		var sinothergridx = 0.891006524;
		var cosothergridy = -0.882947593;
		var sinothergridy = 0.469471563;
		
		var nb = Math.floor(((y-(cosmaingridx/sinmaingridx)*x-(mapDisplayY+0)+(cosmaingridx/sinmaingridx)*(mapDisplayX+320))/(55*cosmaingridx)));
		var nb2 = Math.floor(((y-(cosmaingridy/sinmaingridy)*x-(mapDisplayY+480)+(cosmaingridy/sinmaingridy)*(mapDisplayX+206))/(173.2*cosmaingridy)));
		
		var xConstante = 9 + (mod(nb,3));
		var yConstante = 20 + (mod(nb2,2));
		if (nb2%2 == 0) {yConstante += mod(nb+1,2);}
		
		xHex = Math.floor(((xConstante-nb)/6)+((yConstante-nb2)/2));
		yHex = Math.floor(((nb-xConstante)/4)+((yConstante-nb2)/4));
		
		if (mod(nb,6)==1 && nb2%2==0){
			xHex++;
			if (nb2%4==0 && mod(nb,12)!!=7){yHex++;}
			if (mod(nb2,4)==2 && mod(nb,12)==7){yHex++;}
		}
		
		if (nb%3==0) {		
			if ((nb2%2==0 && nb%6==0) || (mod(nb2,2)==1 && mod(nb,6)==3)) {
				var nb3 = Math.floor(((y-(cosothergridx/sinothergridx)*x-(mapDisplayY+0)+(cosothergridx/sinothergridx)*(mapDisplayX+301))/(68*cosothergridx)));
				var nbCheck = 3+2*yHex+(xHex%2);
				if (nb3 == nbCheck) {yHex--;}
			}
			else {
				var nb4 = Math.floor(((y-(cosothergridy/sinothergridy)*x-(mapDisplayY+480)+(cosothergridy/sinothergridy)*(mapDisplayX+212.5))/(95.75*cosothergridy)));
				var nbCheck = 7-Math.floor(3*xHex/2)+yHex;
				if (nb4 == nbCheck) {
					if (xHex%2 == 0) {yHex--;}
					xHex++;
				}
			}
		}
        var a = new Array(2);
        a[0] = xHex;
        a[1] = yHex;
        return a>
! !

!CWEventDispatcher methodsFor: 'events'!

dispatchMouseClick: event
	suspended ifFalse: [
		currentCell ifNotNil: [ 
			currentCell mouseClick: game gameContext ] ]
!

dispatchMouseMove: event
	| lastCell |
	suspended ifFalse: [
		lastCell := currentCell.
		currentCell := self currentCell: event.
		lastCell == currentCell ifFalse: [
			currentCell ifNotNil: [ 
				game gameContext relatedCell: lastCell.
				currentCell mouseMove: game gameContext ] ] ]
! !

!CWEventDispatcher methodsFor: 'initialize-release'!

endGameEvent
	self announcer 
		on: CWEndGameEvent
		do: [ 
			"reinitialize eventHandling for new game"
			self canvas element asJQuery off: 'mousemove'.
			map := nil.
			drawer := nil.
			game := nil.
			currentCell := nil.
			canvas := nil ]
!

initialize
	super initialize. 
	suspended := false.
	canvas := (TagBrush fromJQuery: self eventManagerLayerId asJQuery canvas: (HTMLCanvas onJQuery: 'body' asJQuery)).
!

initializeEventHandling
	self canvas onClick: [:e | 
		self dispatchMouseClick: e].
	self canvas onMouseMove: [:e | 
		self dispatchMouseMove: e].
	self endGameEvent.
!

initializeForMap: aMap game: aGame
	game := aGame.
	map := aMap.
	drawer := aMap drawer.
	self initializeEventHandling.
! !

!CWEventDispatcher methodsFor: 'suspending'!

resume
	suspended := false
!

suspend
	suspended := true
! !

Widget subclass: #CWLayer
	instanceVariableNames: ''
	package: 'Easnoth-MapUI'!
!CWLayer commentStamp!
I represent a layer in the map where yu can draw things.!

!CWLayer methodsFor: 'not yet classified'!

down: incr
!

left: incr
!

right: incr
!

up: incr
! !

CWLayer subclass: #CWArrayLayer
	instanceVariableNames: 'array'
	package: 'Easnoth-MapUI'!
!CWArrayLayer commentStamp!
I represent a layer that is implemented as a 2 dimentianal array of images, canvas or anything.

This is faster than the canvas one (40% faster), but cannot permit isometric transformation or stuff like that. On the other hand it permits to have JQuery animation.!

!CWArrayLayer methodsFor: 'accessing'!

id
	self subclassResponsibility
!

leafHeight	
	self subclassResponsibility
!

leafWidth
	self subclassResponsibility
!

xShift
	self subclassResponsibility
!

yShift
	self subclassResponsibility
! !

!CWArrayLayer methodsFor: 'factory'!

newLeaf: html
	self subclassResponsibility
!

newLeaf: html point: point
		^ (self newLeaf: html)
				width: self leafWidth;
				height: self leafHeight;
				style: 'position: absolute; top: ', (point y + self yShift), 'px; left: ', (point x + self xShift), 'px;'.
! !

!CWArrayLayer methodsFor: 'initialize-release'!

initializeForMap: aMap
	array := CWTwoDimArray new: aMap children size @ (aMap childAt: 1) children size.
	self appendToJQuery: self id asJQuery
! !

!CWArrayLayer methodsFor: 'map move'!

down: incr
	self vertical: incr
!

horizontal: incr
	self move: incr way: 'left'
!

left: incr
	self horizontal: incr
!

move: incr way: way
	| t px |
	array do: [ :each |
		t := each asJQuery css: way. 
		px := (t tokenize: 'px') first.
		each asJQuery css: way value: (px asNumber + incr) asString , 'px' ]
!

right: incr
	self horizontal: incr
!

up: incr
	self vertical: incr
!

vertical: incr
	self move: incr way: 'top'
! !

!CWArrayLayer methodsFor: 'rendering'!

clean
	self subclassResponsibility
!

renderOn: html
	| tempContext tempImage |
	tempContext := CWGlobalDrawingContext default reset.
	array rowsWithIndexDo: [ :row :i |
		tempContext nextRow.
		row withIndexDo: [ :cell :j |
			tempContext nextCell.
			tempImage := self newLeaf: html point: tempContext currentPoint.
			array i: i j: j put: tempImage ] ].
! !

CWArrayLayer subclass: #CWImageLayer
	instanceVariableNames: ''
	package: 'Easnoth-MapUI'!

!CWImageLayer methodsFor: 'factory'!

newLeaf: html 
	^ html img
! !

CWImageLayer subclass: #CWGOTLayer
	instanceVariableNames: 'invis'
	package: 'Easnoth-MapUI'!
!CWGOTLayer commentStamp!
This layer is specific to GOTs!

!CWGOTLayer methodsFor: 'accessing'!

id
	^ '#got'
!

leafHeight
	^ 84
!

leafWidth
	^ 126
!

xShift
	^ 14 negated
!

yShift
	^ 9 negated
! !

!CWGOTLayer methodsFor: 'initialize-release'!

initialize
	super initialize.
	invis := CWGameOverTile invis image
! !

!CWGOTLayer methodsFor: 'rendering'!

clean
	"do nothing"
!

drawGOT: got point: point
	| image |
	image := array i: point x j: point y.
	image src: got image src
! !

CWArrayLayer subclass: #CWMonsterLayer
	instanceVariableNames: ''
	package: 'Easnoth-MapUI'!

!CWMonsterLayer methodsFor: 'accessing'!

contextForPoint: point
	| canvas |
	canvas := array i: point x j: point y.
	^ canvas element getContext: '2d'.
!

id
	^ '#monster'
!

leafHeight
	^ 150
!

leafWidth
	^ 150
!

xShift
	^ 4 negated
!

yShift
	^ 50 negated
! !

!CWMonsterLayer methodsFor: 'factory'!

newLeaf: html
	^ html canvas
! !

!CWMonsterLayer methodsFor: 'rendering'!

clean
		array do: [:each | | elem |
			elem := each element.
			(elem getContext: '2d') clearRect: 0 y: 0 width: elem width height: elem height. ]
!

display: monster cood: aPoint context: ctx
	ctx
		drawImage: monster image
		x: aPoint x
		y: aPoint y.
!

drawHeros: heros point: point
	| ctx |
	ctx := self contextForPoint: point.
	(heros side negative) 
		ifTrue: [ self reverseDisplay: heros cood: 87@28 context: ctx ] 
		ifFalse: [ self display: heros cood: 15@28 context: ctx ]
!

drawUnit: aUnit point: point
	| xArray yArray ctx |
	
	ctx := self contextForPoint: point.
	xArray := #(9 37 -11 17).
	yArray := #(15 23 26 33).

	(1 to: aUnit hp) do: [ :i |
		(aUnit side negative) 
			ifTrue: [ self reverseDisplay: aUnit cood: 72 + (xArray at: i)@(yArray at: i) context: ctx ] 
			ifFalse: [ self display: aUnit cood: (xArray at: i)@(yArray at: i) context: ctx ]
	]
!

reverseDisplay: monster cood: cood context: ctx
	[ctx
			translate: cood x y: 0;
			scale: -1 y: 1.
	self display: monster cood: 0@(cood y) context: ctx ]
	ensure: ["faster than save and restore"
	ctx
		scale: -1 y: 1;
		translate: cood x negated y: 0]
! !

CWLayer subclass: #CWCanvasLayer
	instanceVariableNames: 'canvas'
	package: 'Easnoth-MapUI'!
!CWCanvasLayer commentStamp!
I represent a layer which is implement as a unique canvas!

!CWCanvasLayer methodsFor: 'accessing'!

context
	^ canvas element getContext: '2d'
! !

!CWCanvasLayer methodsFor: 'factory'!

canvasForId: id
	"Answers amber canvas from a html id"

	^ TagBrush fromJQuery: id asJQuery canvas: (HTMLCanvas onJQuery: 'body' asJQuery)
! !

!CWCanvasLayer methodsFor: 'initialize-release'!

initializeWithId: id
	canvas := self canvasForId: id
! !

!CWCanvasLayer methodsFor: 'rendering'!

clean
	| elem |
	elem := canvas element.
	(elem getContext: '2d') clearRect: 0 y: 0 width: elem width height: elem height.
!

display: object
	self display: object cood: 0@0
!

display: object cood: aPoint
	self context
		drawImage: object image
		x: aPoint x
		y: aPoint y.
!

drawImage: img x: x y: y
	self context drawImage: img x: x y: y
!

drawIsometric: object point: point

	self safeDraw: [ :context |
		context 
			translate: point x + 45 y: point y - 7;
			scale: 1 y: 0.5;
			rotate: Number pi / 4 ;
			scale: 1.4 y: 1.33.
	self display: object ]
!

reverseDisplay: monster point: point xPad: aX yPad: aY

	[self context
			translate: point x + aX y: 0;
			scale: -1 y: 1.
	self display: monster cood: 0@(point y - aY) ]
	ensure: ["faster than save and restore"
	self context
		scale: -1 y: 1;
		translate: (point x + aX) negated y: 0]
!

safeDraw: aBlock
	"ensure that the drawing context will be restored"

	[ self context save.
	aBlock value: self context ]
		ensure: [ self context restore ]
! !

CWVisitor subclass: #CWMapDrawer
	instanceVariableNames: 'executionContext layers padding map menus'
	package: 'Easnoth-MapUI'!
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

backgroundLayer
	^ layers at: 1
!

currentCoods
	^ self executionContext currentCoods
!

currentPoint
	^ self executionContext currentPoint
!

executionContext
	^ executionContext
!

gotLayer
	^ layers at: 2
!

monsterLayer
	^ layers at: 3
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

	^ 50
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

canvasLayerForId: id
	"Answers a CWLayer from a html id"

	^ CWCanvasLayer new initializeWithId: id
!

newGOTDrawingContext
	^ CWGOTDrawingContext default reset: self
!

newGOTLayer
	^ CWGOTLayer new initializeForMap: map
!

newGlobalDrawingContext
	^ CWGlobalDrawingContext default reset: self
!

newMonsterAndGOTDrawingContext
	^ CWMonsterAndGOTDrawingContext default reset: self
!

newMonsterLayer
	^ CWMonsterLayer new initializeForMap: map
! !

!CWMapDrawer methodsFor: 'initialize-release'!

initialize
	super initialize. 
	self initializeCanvasLayers.
	self padding: (self canvasPadding @ 0).
	self initializeEventHandling.
!

initializeCanvasLayers
	layers := Array new
		at: 1 put: (self canvasLayerForId: self backgroundCanvasId);
		yourself.
!

initializeEventHandling
	self announcer
		on: CWMapMoveEvent
		do: [ :event | self perform: event directionMethod ]
!

initializeForMap: aMap
	map := aMap.
	self padding x: self canvasPadding + ((map children at: 1) children size * self tileUnit * 1.17).
	self initializeImageLayers.
	self initializeMenus.
!

initializeImageLayers
	CWGlobalDrawingContext default reset: self. "hack for render on of CWImageLayer"

	layers at: 2 put: self newGOTLayer.
	layers at: 3 put: self newMonsterLayer.
!

initializeMenus
	"CWDices new appendToJQuery: 'body' asJQuery."
! !

!CWMapDrawer methodsFor: 'map move'!

down
	padding := padding + (0 @ self moveIncrement).
	layers do: [ :each |
		each down: self moveIncrement ].
	self updateMap
!

left
	padding := padding + (self moveIncrement negated @ 0).
	layers do: [ :each |
		each left: self moveIncrement negated ].
	self updateMap
!

moveIncrement
	^ 50
!

right
	padding := padding + (self moveIncrement @ 0).
	layers do: [ :each |
		each right: self moveIncrement ].
	self updateMap
!

up
	padding := padding + (0 @ self moveIncrement negated).
	layers do: [ :each |
		each up: self moveIncrement negated ].
	self updateMap
! !

!CWMapDrawer methodsFor: 'public'!

clean
	layers do: [ :each | each clean ].
!

updateGOTs
	self gotLayer clean.
	executionContext := self newGOTDrawingContext.
	self visitTree: map.
!

updateMap
	self clean.
	executionContext := self newGlobalDrawingContext.
	self visitTree: map.
!

updateMonstersAndGOTs
	self gotLayer clean.
	self monsterLayer clean.
	executionContext := self newMonsterAndGOTDrawingContext.
	self visitTree: map.
! !

!CWMapDrawer methodsFor: 'rendering'!

drawBackTile
	self backgroundLayer drawImage: self backTileImage x: self currentPoint x - 4 y: self currentPoint y + 20
!

drawBackground: object
	self backgroundLayer drawIsometric: object point: self currentPoint
!

drawGOT: got
	self gotLayer drawGOT: got point: self currentCoods
	"self gotLayer safeDraw: [ :context | self gotLayer display: got cood: (self currentPoint x - 15)@(self currentPoint y - 10) ]"
!

drawHeros: heros
	self monsterLayer drawHeros: heros point: self currentCoods
	"(heros side negative) 
		ifTrue: [ self monsterLayer reverseDisplay: heros point: self currentPoint xPad: 87 yPad: 28 ] 
		ifFalse: [ self monsterLayer display: heros cood: (self currentPoint x + 15) @ (self currentPoint y - 28) ]"
!

drawUnit: aUnit
	self monsterLayer drawUnit: aUnit point: self currentCoods
	"| xArray yArray |

	xArray := #(17 37 -11 9).
	yArray := #(33 23 26 15).

	(1 to: aUnit hp) do: [ :i |
		(aUnit side negative) 
			ifTrue: [ self monsterLayer reverseDisplay: aUnit point: self currentPoint xPad: 72 + (xArray at: i) yPad: (yArray at: i) ] 
			ifFalse: [ self monsterLayer display: aUnit cood: (self currentPoint x + (xArray at: i))@(self currentPoint y - (yArray at: i)) ]
	]"
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

Object subclass: #CWMapInterpreterContext
	instanceVariableNames: 'rowIndex cellIndex'
	package: 'Easnoth-MapUI'!
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
	package: 'Easnoth-MapUI'!
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
	drawer := aDrawer
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
	package: 'Easnoth-MapUI'!
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
	package: 'Easnoth-MapUI'!
!CWGOTDrawingContext commentStamp!
With this context, the CWMap drawer will redraw only game over tiles.!

!CWGOTDrawingContext methodsFor: 'visiting'!

visitHeros: heros
	"do nothing"
!

visitUnit: aUnit
	"do nothing"
! !

Object subclass: #CWTwoDimArray
	instanceVariableNames: 'array'
	package: 'Easnoth-MapUI'!
!CWTwoDimArray commentStamp!
I am an Array with two dimension.

I can be created through new: aPoint, aPoint being my x and y dimensions.

Basic API :
i:j: -> Answers element at (i,j)
i:j:put: -> Put element at (i,j)!

!CWTwoDimArray methodsFor: 'accessing'!

i: i j: j
	^ (array at: i) at: j
!

i: i j: j put: value
	^ (array at: i) at: j put: value
! !

!CWTwoDimArray methodsFor: 'enumerating'!

do: aBlock
	array do: [ :subArray |
		subArray do: [ :each |
			aBlock value: each ] ]
!

rowsDo: aBlock
	array do: aBlock
!

rowsWithIndexDo: aBlock
	array withIndexDo: aBlock
! !

!CWTwoDimArray methodsFor: 'initialize - release'!

initializeWithSize: aPoint
	array := Array new: aPoint x.
	1 to: aPoint x do: [ :index |
		array at: index put: (Array new: aPoint y) ]
! !

!CWTwoDimArray class methodsFor: 'instance creation'!

new
	self shouldNotImplement
!

new: aPoint
	^ self basicNew
		initialize;
		initializeWithSize: aPoint;
		yourself
! !

