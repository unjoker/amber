Smalltalk current createPackage: 'Easnoth-Announcements'!
SystemAnnouncement subclass: #CWEasnothAnnouncement
	instanceVariableNames: ''
	package: 'Easnoth-Announcements'!

!CWEasnothAnnouncement methodsFor: 'concurrency'!

accept: aVisitor
	aVisitor announceSafely: self
!

requiresSuspension
	^ false
! !

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

CWEasnothAnnouncement subclass: #CWUserAnnouncement
	instanceVariableNames: ''
	package: 'Easnoth-Announcements'!

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
	package: 'Easnoth-Announcements'!

!CWEasnothAnnouncer methodsFor: 'events'!

announce: anAnnouncement
	"Transcript 
		show: '[';
		show: Date now minutes; 
		show: 'min '; 
		show: Date now seconds; 
		show: 'sec] '.
	Transcript 
		show: anAnnouncement class; 
		cr."
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

