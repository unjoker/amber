Smalltalk current createPackage: 'Easnoth-StartMenu'!
Object subclass: #CWBootstrapper
	instanceVariableNames: 'objectToLoad objectLoaded'
	package: 'Easnoth-StartMenu'!
!CWBootstrapper commentStamp!
Bootstrap the system. Currently work only for games, not for the map editor!

!CWBootstrapper methodsFor: 'accessing'!

announcer
	^ CWEasnothAnnouncer current
!

imagesToPreload
	^ Array new
		add: 'red';
		add: 'green';
		add: 'white';
		yourself
! !

!CWBootstrapper methodsFor: 'events'!

checkIfReady
	objectToLoad = objectLoaded
		ifTrue: [ self announcer announce: CWGameStart new]
! !

!CWBootstrapper methodsFor: 'initialize-release'!

bootstrap: gameSettings
	"Transcript show: gameSettings; cr."
	CWGame new initializeWithSettings: gameSettings
!

initialize
	super initialize.
	objectToLoad := 0.
	objectLoaded := 0.
	self initializeEventHandling.
	self preloadImages
!

initializeEventHandling
	self announcer 
		on: CWWaitForObject 
		do: [ objectToLoad := objectToLoad + 1 ].
	self announcer 
		on: CWObjectLoaded 
			do: [ objectLoaded := objectLoaded + 1.
				self checkIfReady].
!

preloadImages
	self imagesToPreload do: [ :key |
		CWGameOverTile newImageFrom: key ]
! !

!CWBootstrapper class methodsFor: 'instance creation'!

bootstrap: gameSettings
	^ self new
		bootstrap: gameSettings
! !

Widget subclass: #CWGameSettings
	instanceVariableNames: 'players mapNumber'
	package: 'Easnoth-StartMenu'!

!CWGameSettings methodsFor: 'accessing'!

addPlayer: aPlayer
	players add: aPlayer
!

mapNumber
	^ mapNumber
!

mapNumber: int
	mapNumber := int
!

players
	^ players
! !

!CWGameSettings methodsFor: 'intialize-release'!

initialize
	super initialize.
	players := Array new
!

printOn: aStream
	aStream 
		nextPutAll: 'settings(map n.';
		nextPutAll: mapNumber printString;
		nextPutAll: '; '.
	players do: [ :each |
		each printOn: aStream ].
	aStream nextPutAll: ')'.
! !

Widget subclass: #CWStartMenu
	instanceVariableNames: 'box gameSettings'
	package: 'Easnoth-StartMenu'!
!CWStartMenu commentStamp!
Should implement the menu with multiplayer and stuff here!

!CWStartMenu methodsFor: 'accessing'!

startingMenuDict
	| dict1 |
	dict1 := Dictionary new.
	dict1 at: 'Tutorial' put: [window alert: 'for future use' ].
	dict1 at: 'Campaign' put: [window alert: 'for future use' ].
	dict1 at: 'Custom game' put: [ self choosePlayers ].
	dict1 at: 'Network game' put: [window alert: 'for future use' ].
	dict1 at: 'Map Editor' put: [window alert: 'for future use' ].
	dict1 at: 'Credits' put: [window alert: 'for future use' ].
	^ dict1
! !

!CWStartMenu methodsFor: 'game settings'!

choosePlayers
	gameSettings addPlayer: CWHuman new.
	gameSettings addPlayer: CWHuman new.
	self playerMenu
!

startBeta
	box hidden.
	gameSettings mapNumber: 7.
	CWBootstrapper bootstrap: gameSettings
! !

!CWStartMenu methodsFor: 'initalize-release'!

initialize
	super initialize.
	gameSettings := CWGameSettings new
! !

!CWStartMenu methodsFor: 'rendering'!

menuOn: html with: dict
	^ html div
		class: 'intro';
		with: [
			html h1
				with: 'Easnoth : Battle Arena'.
			html ul 
				class: 'menu';
				with: [
					dict keysAndValuesDo: [ :key :value |
					html li
						with: [ html a 
							href: '#';
							with: key; 
							onClick: value ] ] ] ];
		yourself
!

playerMenu
	| selectBox |
	box contents: [ :html | 
				html h1 with: 'Easnoth : Battle Arena'.
				html ul 
					class: 'menu';
					with: [
						html li with: 'Player 1'.
						html li with: [
							selectBox := html select. 
							selectBox onChange: [ gameSettings players at: 1 put: (Smalltalk current at: selectBox asJQuery val) new ];
								with: [
									html option 
										with: 'human';
										value: 'CWHuman'.
									html option 
										with: 'AI type 1';
										value: 'CWAggressWeakestAI'].
							html select 
								onChange: [];
								with: [
									html option with: 'elves'.
									html option with: 'humans'.
									html option with: 'merfolks'.
									html option with: 'trolls'. ] ].
						html li with: 'Player 2'.
						html li with: [
							html select 
								onChange: [];
								with: [
									html option with: 'human'.
									html option with: 'AI type 1' ].
							html select 
								onChange: [];
								with: [
									html option with: 'army 2' ] ].
						html li with: [
							html button
								with: 'start';
								onClick: [ self startBeta ] ] ] ]
!

renderOn: html
	box := self menuOn: html with: self startingMenuDict.
! !

!CWStartMenu class methodsFor: 'not yet classified'!

example
	CWStartMenu new appendToJQuery: 'body' asJQuery
!

start
	^ self new appendToJQuery: 'body' asJQuery
! !

