Smalltalk current createPackage: 'Easnoth-Bootstrap'!
Object subclass: #CWBootstrapper
	instanceVariableNames: 'objectToLoad objectLoaded loadingBar hasStarted sidePanels'
	package: 'Easnoth-Bootstrap'!
!CWBootstrapper commentStamp!
Bootstrap the system. Currently work only for games, not for the map editor!

!CWBootstrapper methodsFor: 'accessing'!

announcer
	^ CWEasnothAnnouncer current
!

imagesToPreload
	^ (Array new: 5)
		at: 1 put: 'red';
		at: 2 put: 'green';
		at: 3 put: 'white';
		at: 4 put: 'invis';
		at: 5 put: 'darkGreen';
		yourself
! !

!CWBootstrapper methodsFor: 'events'!

checkIfReady
	objectToLoad = objectLoaded & hasStarted not
		ifTrue: [ self startGame ]
!

startGame
	hasStarted := true.
	loadingBar hide.
	self announcer announce: CWGameStart new.
! !

!CWBootstrapper methodsFor: 'initialize-release'!

bootstrap: gameSettings
	loadingBar := CWLoadingBar new appendToJQuery: '#global' asJQuery.
	CWGame new initializeWithSettings: gameSettings.
	hasStarted := false.
!

initialize
	super initialize.
	hasStarted := true.
	objectToLoad := 0.
	objectLoaded := 0.
	self initializeSidePanels.
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
	self announcer
		on: CWMapMoveEvent
		do: [ self updateSidePanels ].
	self onWindowResize: [ self updateSidePanels ].
!

initializeSidePanels
	| html global |
	html := HTMLCanvas onJQuery: 'body' asJQuery.
	global := '#global' asJQuery.
	sidePanels := Array new.
	sidePanels add: (html div class: 'sidePanel').
	sidePanels add: (html div class: 'sidePanel').
	sidePanels add: (html div class: 'sidePanel').
	sidePanels add: (html div class: 'sidePanel').
	self updateSidePanels.
!

onWindowResize: aBlock
	<jQuery(window).resize(aBlock)>
!

preloadImages
	self imagesToPreload do: [ :key |
		CWGameOverTile newImageFrom: key ].
	CWBackground newImageFrom: 'back'.
!

updateSidePanels
	| global |
	global := '#global' asJQuery.
	global css: 'margin-top' put: ((window innerHeight - 640) / 2) asString, 'px'.
	(sidePanels at: 1)
		style: 'position: absolute; top: 0; left: 0; height: ', window innerHeight, 'px; width:', (global css: 'margin-left').
	(sidePanels at: 2)
		style: 'position: absolute; top: 0; right: 0; height: ', window innerHeight, 'px; width:', (global css: 'margin-right').
	(sidePanels at: 3)
		style: 'position: absolute; top: 0; left: 0; height: ', (global css: 'margin-top'), '; width:', window innerWidth, 'px'.
	(sidePanels at: 4)
		style: 'position: absolute; bottom: 0; left: 0; height: ', (global css: 'margin-bottom'), '; width:', window innerWidth, 'px'.
! !

!CWBootstrapper class methodsFor: 'instance creation'!

bootstrap: gameSettings
	^ self new
		bootstrap: gameSettings
! !

Object subclass: #CWGameSettings
	instanceVariableNames: 'players mapNumber'
	package: 'Easnoth-Bootstrap'!
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

Widget subclass: #CWLoadingBar
	instanceVariableNames: 'box'
	package: 'Easnoth-Bootstrap'!

!CWLoadingBar methodsFor: 'rendering'!

hide
	box hidden
!

renderOn: html
	box := html img
		class: 'loadBar';
		src: 'ressources/images/loading.png'.
! !

Widget subclass: #CWStartMenu
	instanceVariableNames: 'box subBox gameSettings'
	package: 'Easnoth-Bootstrap'!
!CWStartMenu commentStamp!
Should implement the menu with multiplayer and stuff here!

!CWStartMenu methodsFor: 'accessing'!

defaultPlayer
	^ CWHuman new team: 'elves'
!

selectBoxClasses
	^ (Array new: 2)
		at: 1 put: 'styledSelectGreen';
		at: 2 put: 'styledSelectRed';
		yourself
!

startingMenuDict
	^ Dictionary new
		at: 'Tutorial' put: [ self tutorial ];
		at: 'Campaign' put: [window alert: 'for future use, click on custom game' ];
		at: 'Custom game' put: [ self choosePlayers ];
		"at: 'Network game' put: [window alert: 'for future use, click on custom game' ];
		at: 'Map Editor' put: [window alert: 'for future use, click on custom game' ];"
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
	gameSettings mapNumber: 8.
	CWBootstrapper bootstrap: gameSettings
! !

!CWStartMenu methodsFor: 'initalize-release'!

initialize
	super initialize. 
	gameSettings := CWGameSettings new.
	CWBootstrapper new. "setUp side panels ..."
! !

!CWStartMenu methodsFor: 'rendering'!

armySelectBox: playerNumber on: html
	| selectBox |
	selectBox := html select.
	selectBox
		class:  (self selectBoxClasses at: playerNumber);
		onChange: [ (gameSettings players at: playerNumber) team: selectBox asJQuery val ];
		with: [
			html option with: 'elves'.
			html option with: 'kingdom'.
			html option with: 'merfolks'.
			html option with: 'dwarves'.
			html option with: 'outlaws' ].
!

credits
	subBox 
		contents: [ :html | 
				html ul 
					class: 'menu';
					style: 'font-size: 16px;
					margin-top: -0.5%';
					with: [
						html li with: [
							html strong with: 'Development : '.
							html br.
							html a 
								with: 'Clément Béra';
								href: 'http://clementbera.wordpress.com/' ].
						html li with: [
							html strong with: 'Graphics : '.
							html br.
							html a
								with: 'Lusy Dolia';
								href: 'https://www.facebook.com/lusy.dolya'.
							html br.
							html a
								with: 'Battle for Wesnoth';
								href: 'http://www.wesnoth.org/' ].
						html li with: [
							html strong with: 'Thanks to : '.
							html br.
							html a
								with: 'Amber web framework';
								href: 'http://amber-lang.net/'.
							html br.
							html a
								with: 'Nicolas Petton (Amber core developer)';
								href: 'http://www.nicolas-petton.fr/' ].
						html li with: [
							html button
								with: '> back <';
								onClick: [ self menuOn: html with: self startingMenuDict. ] ] ] ]
!

menuOn: html with: dict
	^ subBox
				contents: [
					html ul 
						class: 'menu';
						style: 'margin-top: 5%';
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
	subBox contents: [ :html | 
				html ul 
					class: 'menu';
					with: [
						1 to: 2 do: [ :n |
							self playerSelection: n on: html ] ].
				html button
								class: 'startButton';
								onClick: [ self startBeta ] ]
!

playerSelectBox: playerNumber on: html
	| selectBox |
		selectBox := html select. 
		selectBox 
			class: (self selectBoxClasses at: playerNumber);
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
	box := html div
		class: 'intro';
		with: [ subBox := html div class: 'introMenu' ].
	self menuOn: html with: self startingMenuDict
!

tutorial
	box asJQuery css: 'background-image' value: 'url(ressources/images/coverempty.jpg)'.
	subBox 
		contents: [ :html | 
				html ul 
					class: 'menu';
					style: 'font-size: 16px;
					margin-top: -0.5%';
					with: [
							html button
								with: '> back <';
								onClick: [ 
								box asJQuery css: 'background-image' value: 'url(ressources/images/covergame.jpg)'.
								self menuOn: html with: self startingMenuDict. ] ] ]
! !

!CWStartMenu class methodsFor: 'not yet classified'!

start
	^ self new appendToJQuery: '#global' asJQuery
! !
