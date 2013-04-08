Smalltalk current createPackage: 'Easnoth-Events'!
SystemAnnouncement subclass: #CWEasnothAnnouncement
	instanceVariableNames: ''
	package: 'Easnoth-Events'!

SystemAnnouncer subclass: #CWEasnothAnnouncer
	instanceVariableNames: ''
	package: 'Easnoth-Events'!

Object subclass: #CWEventManager
	instanceVariableNames: 'canvas'
	package: 'Easnoth-Events'!

!CWEventManager methodsFor: 'accessing'!

announcer
	^ CWEasnothAnnouncer current
!

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
	self canvas onMouseUp: [:e | self announcer announce: CWEasnothAnnouncement new ].
	self announcer 
		on: CWEasnothAnnouncement
		do: [window alert: 'foo'].
! !

Object subclass: #CWGameBoard
	instanceVariableNames: 'map menu eventManager'
	package: 'Easnoth-Events'!

!CWGameBoard methodsFor: 'initialize-release'!

initialize
	super initialize.
	menu := FightMenu newFor: self.
	eventManager := CWEventManager new
!

initializeMapWithIndex: index
	map := CWMap newWithMapIndex: index.
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

