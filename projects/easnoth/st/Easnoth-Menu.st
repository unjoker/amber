Smalltalk current createPackage: 'Easnoth-Menu'!
Widget subclass: #CWWidget
	instanceVariableNames: 'parent'
	package: 'Easnoth-Menu'!

!CWWidget methodsFor: 'testing'!

isRoot
	^ false
! !

CWWidget subclass: #CWActionMenu
	instanceVariableNames: 'components'
	package: 'Easnoth-Menu'!

!CWActionMenu methodsFor: 'children management'!

addComponent: aComponent
	self components add: aComponent.
	aComponent parent: self
!

components
	^ components
! !

!CWActionMenu methodsFor: 'initialize-release'!

initialize
	self components: Array new
! !

!CWActionMenu methodsFor: 'rendering'!

renderOn: html
	self components do: [:each |
		each renderOn: html ].
! !

!CWActionMenu methodsFor: 'testing'!

isRoot
	^ true
! !

CWActionMenu subclass: #CWFightMenu
	instanceVariableNames: ''
	package: 'Easnoth-Menu'!

!CWFightMenu methodsFor: 'accessing'!

menuClass
	^ '.menuEditor'
! !

!CWFightMenu methodsFor: 'initialize-release'!

initialize
	super initialize.
	self addComponent: CWMonsterWatcher new.
	self addComponent: CWDices new.
	self addComponent: CWTileWatcher new.
	self addComponent: CWMapControls new.
	self addComponent: CWTurnWatcher new.
	self appendToJQuery: self menuClass asJQuery.
! !

CWWidget subclass: #CWActionMenuComponent
	instanceVariableNames: ''
	package: 'Easnoth-Menu'!

