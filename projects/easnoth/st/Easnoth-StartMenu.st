Smalltalk current createPackage: 'Easnoth-StartMenu'!
Widget subclass: #CWStartMenu
	instanceVariableNames: 'box'
	package: 'Easnoth-StartMenu'!
!CWStartMenu commentStamp!
Should implement the menu with multiplayer and stuff here!

!CWStartMenu methodsFor: 'rendering'!

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
							with: 'tutorial'; 
							onClick: [window alert: 'for future use' ] 
					].
					html li
						with: [ html a 
							href: '#';
							with: 'run beta'; 
							onClick: [self startBeta ] 
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

