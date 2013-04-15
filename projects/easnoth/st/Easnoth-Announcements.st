Smalltalk current createPackage: 'Easnoth-Announcements'!
SystemAnnouncement subclass: #CWEasnothAnnouncement
	instanceVariableNames: ''
	package: 'Easnoth-Announcements'!

CWEasnothAnnouncement subclass: #CWBootstrapEvent
	instanceVariableNames: ''
	package: 'Easnoth-Announcements'!

CWBootstrapEvent subclass: #CWGameStart
	instanceVariableNames: ''
	package: 'Easnoth-Announcements'!

CWBootstrapEvent subclass: #CWObjectLoaded
	instanceVariableNames: ''
	package: 'Easnoth-Announcements'!

CWBootstrapEvent subclass: #CWWaitForObject
	instanceVariableNames: ''
	package: 'Easnoth-Announcements'!

CWEasnothAnnouncement subclass: #CWDrawingEvent
	instanceVariableNames: ''
	package: 'Easnoth-Announcements'!

CWDrawingEvent subclass: #CWGOTDrawingEvent
	instanceVariableNames: ''
	package: 'Easnoth-Announcements'!

CWDrawingEvent subclass: #CWGlobalDrawingEvent
	instanceVariableNames: ''
	package: 'Easnoth-Announcements'!

CWDrawingEvent subclass: #CWMonsterAndGOTDrawingEvent
	instanceVariableNames: ''
	package: 'Easnoth-Announcements'!

CWEasnothAnnouncement subclass: #CWMenuUpdateEvent
	instanceVariableNames: ''
	package: 'Easnoth-Announcements'!

CWMenuUpdateEvent subclass: #CWDicesRolledEvent
	instanceVariableNames: 'dices kills callback'
	package: 'Easnoth-Announcements'!

!CWDicesRolledEvent methodsFor: 'accessing'!

callback
	^ callback
!

callback: aBlock
	callback := aBlock
!

dices
	^ dices
!

dices: int
	dices := int
!

kills
	^ kills
!

kills: int
	kills := int
! !

CWMenuUpdateEvent subclass: #CWMonsterUpdateEvent
	instanceVariableNames: 'monster'
	package: 'Easnoth-Announcements'!

!CWMonsterUpdateEvent methodsFor: 'accessing'!

monster
	^ monster
!

monster: aMonster
	monster := aMonster
! !

CWEasnothAnnouncement subclass: #CWNextTurnEvent
	instanceVariableNames: ''
	package: 'Easnoth-Announcements'!

SystemAnnouncer subclass: #CWEasnothAnnouncer
	instanceVariableNames: 'suspended'
	package: 'Easnoth-Announcements'!

