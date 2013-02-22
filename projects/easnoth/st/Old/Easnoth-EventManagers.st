Smalltalk current createPackage: 'Easnoth-EventManagers' properties: #{}!
Object subclass: #EventManager
	instanceVariableNames: 'map hexMouse'
	package: 'Easnoth-EventManagers'!
!EventManager commentStamp!
"abstract EventHandler"!

!EventManager methodsFor: 'accessing'!

hexMouse
	^hexMouse
!

hexMouse: aMouse
	hexMouse := aMouse
!

map
	^map
!

map: aMap
	map := aMap
! !

!EventManager methodsFor: 'initialize-release'!

initialize
	self hexMouse: HexMouse getSingleton
!

initializeEventManagement
	"has not to belong to initialize directly because need map to be set before "
	self subclassResponsibility
!

menuToInstantiate
	self subClassResponsibility
! !

EventManager class instanceVariableNames: 'eventManager'!

!EventManager class methodsFor: 'initialize-release'!

getSingleton
	^eventManager ifNil:[eventManager := self new.]
!

newWithMapIndex: aMapIndex
	^self getSingleton
		map: (Map newWithMapIndex: aMapIndex);
		initializeEventManagement;
		yourself.
! !

EventManager subclass: #FightEventManager
	instanceVariableNames: ''
	package: 'Easnoth-EventManagers'!

FightEventManager subclass: #MultiPlayerFightEventManager
	instanceVariableNames: ''
	package: 'Easnoth-EventManagers'!

FightEventManager subclass: #SinglePlayerFightEventManager
	instanceVariableNames: ''
	package: 'Easnoth-EventManagers'!

EventManager subclass: #MapEditorEventManager
	instanceVariableNames: 'drawedObjectType'
	package: 'Easnoth-EventManagers'!
!MapEditorEventManager commentStamp!
"EventHandler that permits to edit a map"!

!MapEditorEventManager methodsFor: 'accessing'!

drawedObjectType
	^drawedObjectType
!

drawedObjectType: aType
	drawedObjectType := aType
! !

!MapEditorEventManager methodsFor: 'eventHandling'!

drawedObjectNextEvent
!

drawedObjectPreviousEvent
!

mapDownEvent
	self map mapY: self map mapY + 10.
	self map update
!

mapLeftEvent
	self map mapX: self map mapX - 10.
	self map update
!

mapRightEvent
	self map mapX: self map mapX + 10.
	self map update
!

mapUpEvent
	self map mapY: self map mapY - 10.
	self map update
!

mouseClick
	"TO DO"
	"Test it delete the cell"
	"plz test if cell selected in array before doing that"
	[((self map cells at: self hexMouse xCell) at: self hexMouse yCell) drawedObjects:  (Array withAll: #(nil nil nil nil nil nil nil nil))] on: Error do:[].
	self map update.
!

mouseMove: anEvent
	self hexMouse updateCoods: anEvent inMap: self map
!

radioDrawedObjectEvent: radioButtonValue

	self drawedObjectType: radioButtonValue.
	('.imageEdited' asJQuery at:0) at: 'src' put: 'ressources/images/monsters/shyde.png'.
! !

!MapEditorEventManager methodsFor: 'initialize-eventHandling'!

handleCanvasEvents
	self map canvas onClick: [self mouseClick].
	self map canvas onMouseMove: [:e | self mouseMove: e].
!

handleDrawedObjectNextEvent
	('.next' asJQuery at: 0) at: 'onclick' put: [self drawedObjectNextEvent]
!

handleDrawedObjectPreviousEvent
	('.previous' asJQuery at: 0) at: 'onclick' put: [self drawedObjectPreviousEvent]
!

handleDrawedObjectRadioButtonEvent
	|drawedObjectRadioButton|
	drawedObjectRadioButton := '.radioDrawedObjectType' asJQuery.

	(0 to: 3) do: [:i |
		(drawedObjectRadioButton at: i) at: 'onclick' put: [
			self radioDrawedObjectEvent: ((drawedObjectRadioButton at: i) at: 'value')
		]
	]
!

handleMapEvent
	('.up' asJQuery at: 0) at: 'onclick' put: [self mapUpEvent].
	('.left' asJQuery at: 0) at: 'onclick' put: [self mapLeftEvent].
	('.right' asJQuery at: 0) at: 'onclick' put: [self mapRightEvent].
	('.down' asJQuery at: 0) at: 'onclick' put: [self mapDownEvent].
!

handleMenuEvents
	self handleDrawedObjectRadioButtonEvent.
	self handleMapEvent.
	self handleDrawedObjectNextEvent.
	self handleDrawedObjectPreviousEvent
! !

!MapEditorEventManager methodsFor: 'initialize-release'!

initializeEventManagement
	self handleCanvasEvents.
	self handleMenuEvents.
!

menuToInstantiate
	^MenuEditor
! !

