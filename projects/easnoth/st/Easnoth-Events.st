Smalltalk current createPackage: 'Easnoth-Events'!
Object subclass: #CWEventManager
	instanceVariableNames: 'canvas'
	package: 'Easnoth-Events'!

!CWEventManager methodsFor: 'accessing'!

canvas
	^ canvas
!

canvas: aCanvas
	canvas := aCanvas
! !

!CWEventManager methodsFor: 'initialize-release'!

canvasId
	^ '#eventManager'
!

initialize
	super initialize. 
	self canvas: (TagBrush fromJQuery: self canvasId asJQuery canvas: (HTMLCanvas onJQuery: 'body' asJQuery)).
! !

Object subclass: #CWGameBoard
	instanceVariableNames: 'map drawer menu'
	package: 'Easnoth-Events'!

!CWGameBoard methodsFor: 'initialize-release'!

initialize
	super initialize.
	drawer := CWDrawer new.
	menu := FightMenu newFor: self
!

initializeMapWithIndex: index
	map := CWMap newWithMapIndex: index.
! !

!CWGameBoard class methodsFor: 'instance creation'!

newWithMapIndex: index
	^ self new initializeMapWithIndex: index
! !

