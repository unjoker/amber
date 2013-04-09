Smalltalk current createPackage: 'Easnoth-Events'!
Object subclass: #CWBootstrapper
	instanceVariableNames: 'objectToLoad objectLoaded'
	package: 'Easnoth-Events'!

!CWBootstrapper methodsFor: 'accessing'!

announcer
	^ CWEasnothAnnouncer current
! !

!CWBootstrapper methodsFor: 'events'!

checkIfReady
	objectToLoad = objectLoaded
		ifTrue: [ self announcer announce: CWGameStart new]
! !

!CWBootstrapper methodsFor: 'initialize-release'!

bootstrap: mapIndex
	CWGameBoard newWithMapIndex: mapIndex
!

initialize
	super initialize.
	objectToLoad := 0.
	objectLoaded := 0.
	self initializeEventHandling.
!

initializeEventHandling
	self announcer 
		on: CWWaitForObject 
		do: [ objectToLoad := objectToLoad + 1 ].
	self announcer 
		on: CWObjectLoaded 
			do: [ objectLoaded := objectLoaded + 1.
				self checkIfReady].
! !

!CWBootstrapper class methodsFor: 'instance creation'!

bootstrap: mapIndex
	^ self new
		bootstrap: mapIndex
! !

SystemAnnouncement subclass: #CWEasnothAnnouncement
	instanceVariableNames: ''
	package: 'Easnoth-Events'!

!CWEasnothAnnouncement methodsFor: 'concurrency'!

accept: aVisitor
	aVisitor announceSafely: self
!

requiresSuspension
	^ false
! !

CWEasnothAnnouncement subclass: #CWBootstrapEvent
	instanceVariableNames: ''
	package: 'Easnoth-Events'!

CWBootstrapEvent subclass: #CWGameStart
	instanceVariableNames: ''
	package: 'Easnoth-Events'!

CWBootstrapEvent subclass: #CWObjectLoaded
	instanceVariableNames: ''
	package: 'Easnoth-Events'!

CWBootstrapEvent subclass: #CWWaitForObject
	instanceVariableNames: ''
	package: 'Easnoth-Events'!

CWEasnothAnnouncement subclass: #CWDrawingEvent
	instanceVariableNames: ''
	package: 'Easnoth-Events'!

CWDrawingEvent subclass: #CWGOTDrawingEvent
	instanceVariableNames: ''
	package: 'Easnoth-Events'!

CWDrawingEvent subclass: #CWGlobalDrawingEvent
	instanceVariableNames: ''
	package: 'Easnoth-Events'!

CWDrawingEvent subclass: #CWMonsterAndGOTDrawingEvent
	instanceVariableNames: ''
	package: 'Easnoth-Events'!

CWEasnothAnnouncement subclass: #CWUserAnnouncement
	instanceVariableNames: ''
	package: 'Easnoth-Events'!

!CWUserAnnouncement methodsFor: 'concurrency'!

accept: aVisitor
	aVisitor isSuspended ifFalse: [
		aVisitor announceSafely: self ]
!

requiresSuspension
	^ true
! !

SystemAnnouncer subclass: #CWEasnothAnnouncer
	instanceVariableNames: 'suspended'
	package: 'Easnoth-Events'!

!CWEasnothAnnouncer methodsFor: 'events'!

announce: anAnnouncement
	anAnnouncement accept: self
!

announceSafely: anAnnouncement
	suspended := anAnnouncement requiresSuspension.
	super announce: anAnnouncement
!

reactivate
	suspended := false.
! !

!CWEasnothAnnouncer methodsFor: 'initialize-release'!

initialize
	super initialize.
	suspended := false.
! !

!CWEasnothAnnouncer methodsFor: 'testing'!

isSuspended
	^ suspended
! !

Object subclass: #CWEventDispatcher
	instanceVariableNames: 'canvas cells'
	package: 'Easnoth-Events'!
!CWEventDispatcher commentStamp!
I dispatch event from eventManager canvas to cells. 
Cells is a bidimentional Array.

I SHOULD HAVE DIRECTLY THE MAP NOT CELLS I COULD DISPATCH TO ROW OR MAP. IN FACT DISPATCH TO CELL MEANS 
dispatchToCell: i j
(map children at i) children at: j!

!CWEventDispatcher methodsFor: 'accessing'!

announcer
	^ CWEasnothAnnouncer current
!

canvas
	^ canvas
!

canvas: aCanvas
	canvas := aCanvas
! !

!CWEventDispatcher methodsFor: 'initialize-release'!

canvasId
	^ '#eventManager'
!

initialize
	super initialize. 
	self canvas: (TagBrush fromJQuery: self canvasId asJQuery canvas: (HTMLCanvas onJQuery: 'body' asJQuery)).
	"self canvas onMouseUp: [:e | self announcer announce: CWEasnothAnnouncement new ].
	self announcer 
		on: CWEasnothAnnouncement
		do: [window alert: 'foo']."
! !

Object subclass: #CWGameBoard
	instanceVariableNames: 'map menu eventManager'
	package: 'Easnoth-Events'!

!CWGameBoard methodsFor: 'accessing'!

announcer
	^ CWEasnothAnnouncer current
! !

!CWGameBoard methodsFor: 'event'!

announce: event
	self announcer announce: event
! !

!CWGameBoard methodsFor: 'game logic'!

firstTurn
!

startGame
	"add some game logic here ..."
	'.loading' asJQuery animate: #{ 'top' -> '-60%'} duration: 2500.
	CWMapDrawer new initializeForMap: map.
	self announce: CWGlobalDrawingEvent new
! !

!CWGameBoard methodsFor: 'initialize-release'!

initialize
	super initialize.
	menu := FightMenu newFor: self.
	eventManager := CWEventDispatcher new.
!

initializeEventHandling
	self announcer
		on: CWGameStart
		do: [ self startGame ]
!

initializeMapWithIndex: index
	map := CWMap newWithMapIndex: index.
	self initializeEventHandling.
! !

!CWGameBoard class methodsFor: 'examples'!

examples
	"To remove when model ok"
	CWMap newWithMapIndex: 5.
	CWMap default update.
	CWMap default updateGOTs.
	CWMap default updateMonstersAndGOTs.
	CWEasnothAnnouncer current.
! !

!CWGameBoard class methodsFor: 'instance creation'!

newWithMapIndex: index
	^ self new initializeMapWithIndex: index
! !

