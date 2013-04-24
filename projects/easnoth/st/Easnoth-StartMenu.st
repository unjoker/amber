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
		CWGameOverTile newImageFrom: key ].
	CWBackground newImageFrom: 'back'.
! !

!CWBootstrapper class methodsFor: 'instance creation'!

bootstrap: gameSettings
	^ self new
		bootstrap: gameSettings
! !

Widget subclass: #CWGameSettings
	instanceVariableNames: 'players mapNumber'
	package: 'Easnoth-StartMenu'!
!CWGameSettings commentStamp!
I represent the game settings. My instance variables are set before the game, in the start menus. Then, the CWBootstrapper handles my data to launch corectly the game.!

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

defaultPlayer
	^ CWHuman new team: 'elves'
!

startingMenuDict
	^ Dictionary new
		at: 'Tutorial' put: [window alert: 'for future use, click on custom game' ];
		at: 'Campaign' put: [window alert: 'for future use, click on custom game' ];
		at: 'Custom game' put: [ self choosePlayers ];
		at: 'Network game' put: [window alert: 'for future use, click on custom game' ];
		at: 'Map Editor' put: [window alert: 'for future use, click on custom game' ];
		at: 'Credits' put: [ self credits ];
		yourself
! !

!CWStartMenu methodsFor: 'game settings'!

choosePlayers
	gameSettings addPlayer: self defaultPlayer.
	gameSettings addPlayer: self defaultPlayer.
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

armySelectBox: playerNumber on: html
	| selectBox |
	selectBox := html select.
	selectBox
		onChange: [ (gameSettings players at: playerNumber) team: selectBox asJQuery val ];
		with: [
			html option with: 'elves'.
			html option with: 'humans'.
			html option with: 'merfolks'.
			html option with: 'trolls' ].
!

credits
	box contents: [ :html | 
				html h1 with: 'Easnoth : Battle Arena'.
				html ul 
					class: 'menu';
					with: [
						html li with: [
							html span with: 'Core developer : '.
							html a 
								with: 'Clément Béra';
								href: 'http://clementbera.wordpress.com/' ].
						html li with: [
							html span with: 'Graphics : '.
							html a
								with: 'Battle for Wesnoth';
								href: 'http://www.wesnoth.org/' ].
						html li with: 'Thanks to :'.
						html li with: [
							html a
								with: 'Amber web framework';
								href: 'http://amber-lang.net/' ].
						html li with: [
							html a
								with: 'Nicolas Petton (Amber core developer)';
								href: 'www.nicolas-petton.fr/' ].
						html li with: [
							html button
								with: '> back <';
								onClick: [ self choosePlayers ] ] ] ]
!

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
						html li with: 'Humans or elves are recommended for AI'.
						1 to: 2 do: [ :n |
							self playerSelection: n on: html ].
						html li with: [
							html button
								with: 'start';
								onClick: [ self startBeta ] ] ] ]
!

playerSelectBox: playerNumber on: html
	| selectBox |
	selectBox := html select. 
	selectBox 
		onChange: [ 
			| oldTeam |
			oldTeam := (gameSettings players at: playerNumber) team.
			gameSettings players at: playerNumber put: (Smalltalk current at: selectBox asJQuery val) new.
			(gameSettings players at: playerNumber) team: oldTeam ];
		with: [
			html option 
				with: 'human';
				value: 'CWHuman'.
			html option 
				with: 'AI type 1';
				value: 'CWAggressWeakestAI'].
!

playerSelection: playerNumber on: html
	html li with: 'Player ', playerNumber.
	html li with: [
		self playerSelectBox: playerNumber on: html.
		self armySelectBox: playerNumber on: html ].
!

renderOn: html
	box := self menuOn: html with: self startingMenuDict.
! !

!CWStartMenu class methodsFor: 'not yet classified'!

start
	^ self new appendToJQuery: 'body' asJQuery
! !

