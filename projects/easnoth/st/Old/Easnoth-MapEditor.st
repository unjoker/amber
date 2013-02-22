Smalltalk current createPackage: 'Easnoth-MapEditor' properties: #{}!
EventManager subclass: #MapEditorEventManager
	instanceVariableNames: 'drawedObjectType'
	package: 'Easnoth-MapEditor'!
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

mouseClick
	"TO DO"
	"Test it delete the cell"
	[self hexMouse cell drawedObjects:  (Array withAll: #(nil nil nil nil nil nil nil nil))] on: Error do:["out of map"].
	self map update.
!

radioDrawedObjectEvent: radioButtonValue

	self drawedObjectType: radioButtonValue.
	('.imageEdited' asJQuery at:0) at: 'src' put: 'ressources/images/monsters/shyde.png'.
! !

!MapEditorEventManager methodsFor: 'initialize-eventHandling'!

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

handleMenuEvents
	self handleDrawedObjectRadioButtonEvent.
	self handleDrawedObjectNextEvent.
	self handleDrawedObjectPreviousEvent
! !

!MapEditorEventManager methodsFor: 'initialize-release'!

menuToInstantiate
	^MenuEditor
! !

