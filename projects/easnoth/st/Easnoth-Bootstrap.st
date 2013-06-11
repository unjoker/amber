Smalltalk current createPackage: 'Easnoth-Bootstrap'!
Object subclass: #CWBootstrapper
	instanceVariableNames: 'objectToLoad objectLoaded loadingBar hasStarted'
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
	loadingBar := CWLoadingBar new.
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
!

initializeSidePanels
	| html global sidePanels |
	self class sidePanels ifNotNil: [ ^ self ].
	html := HTMLCanvas onJQuery: 'body' asJQuery.
	global := '#global' asJQuery.
	self class sidePanels: Array new.
	4 timesRepeat: [ self class sidePanels add: (html div class: 'sidePanel') ].
	self onWindowResize: [ self updateSidePanels ].
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
	| global height width sidePanels |
	
	global := '#global' asJQuery.
	height := window asJQuery height.
	width := window asJQuery width.
	sidePanels := self class sidePanels.
	
	height > 640 ifTrue: [
		global css: 'margin-top' put: ((height - 640) / 2) asString, 'px' ].
		
	(sidePanels at: 1)
		style: 'position: absolute; top: 0; left: 0; height: ', height, 'px; width:', (global css: 'margin-left').
	(sidePanels at: 2)
		style: 'position: absolute; top: 0; right: 0; height: ', height, 'px; width:', (global css: 'margin-right').
	(sidePanels at: 3)
		style: 'position: absolute; top: 0; left: 0; height: ', (global css: 'margin-top'), '; width:', width, 'px'.
	(sidePanels at: 4)
		style: 'position: absolute; bottom: 0; left: 0; height: ', (global css: 'margin-bottom'), '; width:', width, 'px'.
! !

CWBootstrapper class instanceVariableNames: 'sidePanels'!

!CWBootstrapper class methodsFor: 'accessing'!

sidePanels
	^ sidePanels
!

sidePanels: object
	sidePanels := object
! !

!CWBootstrapper class methodsFor: 'instance creation'!

bootstrap: gameSettings
	^ self new bootstrap: gameSettings
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
!

resetPlayers
	^ players := Array new.
! !

!CWGameSettings methodsFor: 'intialize-release'!

initialize
	super initialize.
	self resetPlayers.
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
	box asJQuery hide
!

initialize
	self appendToJQuery: '#global' asJQuery.
!

renderOn: html
	box := html img
		class: 'loadBar';
		src: 'ressources/images/start/loading.png'.
!

show
	box asJQuery show
! !

CWLoadingBar class instanceVariableNames: 'default'!

!CWLoadingBar class methodsFor: 'not yet classified'!

new
	default ifNil: [ ^ default := super new].
	default show.
	^ default
! !

Widget subclass: #CWStartMenu
	instanceVariableNames: 'box subBox frontImages backButton history gameSettings'
	package: 'Easnoth-Bootstrap'!
!CWStartMenu commentStamp!
Should implement the menu with multiplayer and stuff here!

!CWStartMenu methodsFor: 'accessing'!

defaultPlayer
	^ CWHuman new team: 'elves'
!

ressourcesFolder
	^ 'ressources/images/start/'
!

selectBoxClasses
	^ (Array new: 2)
		at: 1 put: 'styledSelectGreen';
		at: 2 put: 'styledSelectRed';
		yourself
!

startingBlock
	^ [ self menuWith: self startingMenuDict ]
!

startingMenuDict
	^ Dictionary new
		at: 'Tutorial' put: [ history add: self startingBlock. self tutorial. ];
		at: 'Campaign' put: [window alert: 'for future use, click on custom game' ];
		at: 'Custom game' put: [ history add: self startingBlock. self choosePlayers ];
		"at: 'Map Editor' put: [window alert: 'for future use, click on custom game' ];"
		at: 'Credits' put: [ history add: self startingBlock. self credits ];
		yourself
!

toggle
	box asJQuery toggle
! !

!CWStartMenu methodsFor: 'game settings'!

choosePlayers
	gameSettings resetPlayers.
	gameSettings addPlayer: self defaultPlayer.
	gameSettings addPlayer: self defaultPlayer.
	self playerMenu
!

startBeta
	self toggle.
	gameSettings mapNumber: 8.
	CWBootstrapper bootstrap: gameSettings
! !

!CWStartMenu methodsFor: 'initalize-release'!

initialize
	super initialize. 
	self reset.
	CWBootstrapper new. "setUp side panels ..."
!

reset
	gameSettings := CWGameSettings new.
	history :=  Array new.
! !

!CWStartMenu methodsFor: 'rendering'!

addFrontImages
	frontImages := Array new: 3.
	"frontImages at: 1 put:" 
	box append: [ :html2 | html2 div
		style: 'height: 100%; width: 100%; position: relative';
		with: [
			frontImages at: 1 put: (html2 img 
				src: self ressourcesFolder, 'fey.png';
				style: 'position: absolute; bottom: 1px; left: 121px').
			frontImages at: 2 put: (html2 img 
				src: self ressourcesFolder, 'monster.png';
				style: 'position: absolute; top: 1px; right: 121px').
			frontImages at: 3 put: (html2 img 
				src: self ressourcesFolder, 'battle_text.png';
				style: 'position: absolute; bottom: 65px; right: 150px').
		] ].
!

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

back
	| last |
	last := history last.
	history remove: last.
	last value
!

backButton
	history isEmpty ifTrue: [ ^ backButton asJQuery hide ].
	backButton asJQuery show.
!

credits
	subBox 
		contents: [ :html | 
				self renderBackButtonOn: html.
				html ul 
					class: 'menu';
					style: 'font-size: 16px;
					margin-top: 2%';
					with: [
						html li with: [
							html strong with: 'Development '.
							html br.
							html a 
								class: 'creditLink';
								with: 'Clément Béra';
								target: '_blank';
								href: 'http://clementbera.wordpress.com/' ].
						html li with: [
							html strong with: 'Graphics '.
							html br.
							html a
								class: 'creditLink';
								with: 'Lusy Dolia';
								target: '_blank';
								href: 'https://www.facebook.com/lusy.dolya'.
							html br.
							html a
								class: 'creditLink';
								with: 'Battle for Wesnoth';
								target: '_blank';
								href: 'http://www.wesnoth.org/' ].
						html li with: [
							html strong with: 'Thanks to '.
							html br.
							html a
								class: 'creditLink';
								with: 'Amber web framework';
								target: '_blank';
								href: 'http://amber-lang.net/'.
							html br.
							html a
								class: 'creditLink';
								with: 'Nicolas Petton (Amber core developer)';
								target: '_blank';
								href: 'http://www.nicolas-petton.fr/' ] ] ]
!

menuWith: dict
	^ subBox
				contents: [ :html |
					self renderBackButtonOn: html.
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
				self renderBackButtonOn: html.
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

renderBackButtonOn: html
		backButton := html button 
				class: 'backButton';
				onClick: [ self back ].
		self backButton.
!

renderOn: html
	box := html div
		class: 'intro'.
	self addFrontImages.
	box append: [ subBox := html div class: 'introMenu' ].
	self menuWith: self startingMenuDict.
!

toggleFrontImages
	frontImages do: [ :each | each asJQuery toggle]
!

tutorial
	self toggleFrontImages.
	subBox 
		style: 'font-size: 18px';
		contents: [ :html | 
		backButton := html button 
			class: 'backButton';
			onClick: [ 
				self toggleFrontImages.
				subBox style: 'font-size: 20px'.
				self back ].
		self backButton.
		html div
			style: 'margin-top: 6%; margin-left: 26%; width: 100%';
			with: [
			html h3 style: 'text-align: center; font-size: 25px'; with: 'GOAL : kill all your ennemy army'.
			html h4  style: 'text-align: center; color: #f9e6d6; font-size: 20px; text-decoration: none; margin: 0'; with: 'Basics'.
			html div 
				style: 'height: 50px';
				with: [
				(html img: self ressourcesFolder, 'tuto1.png') style: 'height: 84px; width: auto; float: left; margin-right: 6px; border: 3px solid gray'.
				html p 
					style: 'padding-top: 10px';
					with: 'When you start your turn, all your activable creatures are surrounded by a white halo. 
						Click on one of them to activate it. You can activate only one creature per turn.'. ].
			html div 
				style: 'height: 105px';
				with: [
				(html img: self ressourcesFolder, 'tuto2.png') style: 'height: 100px; width: auto; float: right; margin-left: 6px; border: 3px solid gray'.
				html p
					style: 'padding-top: 25px';
					with: 'When a creature is activated, a bunch of tiles become colored, 
						these are the tiles you can click on. Creatures will move to green tiles and attack ennemies on red tiles.'. ].
				html p with: 'When the creature has moved its full move and attacked (or is not able to attack), it is the other player turn. 
					If you have remaining move but you want to finish your turn, please click on the next turn button.'.
			html h4 style: 'text-align: center; color: #f9e6d6; font-size: 20px; text-decoration: none; margin: 0'; with: 'Advanced'.
			html div 
				style: 'height: 145px';
				with: [
					(html img: self ressourcesFolder, 'tuto3.png') style: 'height: 140px; width: auto; float: left; margin-right: 6px;'.
					html p 
						with: 'When you click on a creature, you can see on the top left its capabilities. 
							For example a creature can roll from 1 to 6 dices to attack, each dices having from 30% to 70% chances of hitting.'.
					html p 
						with: 'Lastly, fast or cavalry creatures are better against range creatures, 
							which are better against foot creatures, which are then better against fast or cavalry ones.'. ] ] ]
! !

CWStartMenu class instanceVariableNames: 'default'!

!CWStartMenu class methodsFor: 'not yet classified'!

start
	default ifNil: [ ^ default := self new appendToJQuery: '#global' asJQuery ].
	^ default 
		reset;
		menuWith: default startingMenuDict;
		toggle
! !

