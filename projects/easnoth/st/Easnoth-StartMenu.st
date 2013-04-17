Smalltalk current createPackage: 'Easnoth-StartMenu'!
Widget subclass: #CWGameSettings
	instanceVariableNames: 'players mapNumber'
	package: 'Easnoth-StartMenu'!

Widget subclass: #CWStartMenu
	instanceVariableNames: 'box gameSettings'
	package: 'Easnoth-StartMenu'!
!CWStartMenu commentStamp!
Should implement the menu with multiplayer and stuff here!

!CWStartMenu methodsFor: 'rendering'!

initialize
	super initialize.
	gameSettings := CWGameSettings new
!

renderOn: html
	box := html div
		class: 'intro';
		with: [
			html h1
				with: 'Easnoth : Battle Arena'.
			html ul 
				class: 'menu';
				with: [
					html li
						with: [ html a 
							href: '#';
							style: 'color: #aaa';
							with: 'Tutorial'; 
							onClick: [window alert: 'for future use' ] 
					].
					html li
						with: [ html a 
							href: '#';
							style: 'color: #aaa';
							with: 'Campaign'; 
							onClick: [window alert: 'for future use' ] 
					].
					html li
						with: [ html a 
							href: '#';
							with: 'Custom game'; 
							onClick: [self startBeta ] 
					].
					html li
						with: [ html a 
							href: '#';
							with: 'Network game'; 
							style: 'color: #aaa';
							onClick: [ window alert: 'for future use'  ] 
					].
					html li
						with: [ html a 
							href: '#';
							with: 'Credits'; 
							style: 'color: #aaa';
							onClick: [ window alert: 'for future use'  ] 
					].
			]
		];
		yourself
!

startBeta
	"'body' asJQuery remove: box."
	box hidden.
	CWBootstrapper bootstrap: 7
! !

!CWStartMenu class methodsFor: 'not yet classified'!

example
	CWStartMenu new appendToJQuery: 'body' asJQuery
!

start
	^ self new appendToJQuery: 'body' asJQuery
! !

