Smalltalk current createPackage: 'Easnoth-Game'!
Object subclass: #CWEventDispatcher
	instanceVariableNames: 'canvas map padding game'
	package: 'Easnoth-Game'!
!CWEventDispatcher commentStamp!
I dispatch event from eventManager canvas to cells.!

!CWEventDispatcher methodsFor: 'accessing'!

announcer
	^ CWEasnothAnnouncer current
!

canvas
	^ canvas
!

cellAt: i y: j
	^ (self rowAt: i) childAt: j
!

cellAt: i y: j ifAbsent: aBlock
	"need to change the implementation"
	^ [(self rowAt: i) childAt: j] on: Error do: [ aBlock value ]
!

eventManagerLayerId
	^ '#eventManager'
!

rowAt: index
	^ map childAt: index
! !

!CWEventDispatcher methodsFor: 'calculs'!

currentCell: anEvent
	|x y cood|
	
        x := anEvent pageX - self canvas element offsetLeft.
        y := anEvent pageY - self canvas element offsetTop.

        cood := self mouseCoodToHexCoodX: x y: y.
	
	"if out of map then nil"
	^ self cellAt: cood x y: cood y ifAbsent: [ nil ]
!

mouseCoodToHexCoodX: x y: y
	"function that take mouse cood in pixel and return the coods of the tile selected"
	
	"algo is in javascript"

	| xHex yHex array mapDisplayX mapDisplayY|
                
	mapDisplayX := padding x.
	mapDisplayY := padding y.

	array:= self mouseCoodToHexCoodX: x y: y mapX: mapDisplayX mapY: mapDisplayY.
    
    xHex := array at: 1.
    yHex := array at: 2.
    
	^xHex @ yHex.
!

mouseCoodToHexCoodX: x y: y mapX: mapDisplayX mapY: mapDisplayY
	"function that take mouse cood in pixel and return the coods of the tile selected"

		<function mod(n, mod) {
			return ((mod+(n%mod))%mod);
		}

		var cosmaingridx = 0.882947593;
		var sinmaingridx = 0.469471563;
		var cosmaingridy = -0.130526192;
		var sinmaingridy = 0.991444861;
		
		var cosothergridx = 0.4539905;
		var sinothergridx = 0.891006524;
		var cosothergridy = -0.882947593;
		var sinothergridy = 0.469471563;
		
		var nb = Math.floor(((y-(cosmaingridx/sinmaingridx)*x-(mapDisplayY+0)+(cosmaingridx/sinmaingridx)*(mapDisplayX+320))/(55*cosmaingridx)));
		var nb2 = Math.floor(((y-(cosmaingridy/sinmaingridy)*x-(mapDisplayY+480)+(cosmaingridy/sinmaingridy)*(mapDisplayX+206))/(173.2*cosmaingridy)));
		
		var xConstante = 9 + (mod(nb,3));
		var yConstante = 20 + (mod(nb2,2));
		if (nb2%2 == 0) {yConstante += mod(nb+1,2);}
		
		xHex = Math.floor(((xConstante-nb)/6)+((yConstante-nb2)/2));
		yHex = Math.floor(((nb-xConstante)/4)+((yConstante-nb2)/4));
		
		if (mod(nb,6)==1 && nb2%2==0){
			xHex++;
			if (nb2%4==0 && mod(nb,12)!!=7){yHex++;}
			if (mod(nb2,4)==2 && mod(nb,12)==7){yHex++;}
		}
		
		if (nb%3==0) {		
			if ((nb2%2==0 && nb%6==0) || (mod(nb2,2)==1 && mod(nb,6)==3)) {
				var nb3 = Math.floor(((y-(cosothergridx/sinothergridx)*x-(mapDisplayY+0)+(cosothergridx/sinothergridx)*(mapDisplayX+301))/(68*cosothergridx)));
				var nbCheck = 3+2*yHex+(xHex%2);
				if (nb3 == nbCheck) {yHex--;}
			}
			else {
				var nb4 = Math.floor(((y-(cosothergridy/sinothergridy)*x-(mapDisplayY+480)+(cosothergridy/sinothergridy)*(mapDisplayX+212.5))/(95.75*cosothergridy)));
				var nbCheck = 7-Math.floor(3*xHex/2)+yHex;
				if (nb4 == nbCheck) {
					if (xHex%2 == 0) {yHex--;}
					xHex++;
				}
			}
		}
        var a = new Array(2);
        a[0] = xHex;
        a[1] = yHex;
        return a>
! !

!CWEventDispatcher methodsFor: 'events'!

dispatchMouseClick: event
	| cc |
	cc := self currentCell: event.
	cc ifNotNil: [ 
		cc mouseClick: game gameContext ].
! !

!CWEventDispatcher methodsFor: 'initialize-release'!

initialize
	super initialize. 
	canvas := (TagBrush fromJQuery: self eventManagerLayerId asJQuery canvas: (HTMLCanvas onJQuery: 'body' asJQuery)).
!

initializeEventHandling
	self canvas onMouseUp: [:e | 
		self dispatchMouseClick: e].
!

initializeForMap: aMap game: aGame
	game := aGame.
	map := aMap.
	padding := aMap drawer padding.
	self initializeEventHandling.
! !

Object subclass: #CWGame
	instanceVariableNames: 'map context playerPool'
	package: 'Easnoth-Game'!
!CWGame commentStamp!
Represent the game. Includes the god game logic (turn system)!

!CWGame methodsFor: 'accessing'!

announcer
	^ CWEasnothAnnouncer current
!

eventManagerLayerId
	^ '#eventManager'
!

gameContext
	^ context
! !

!CWGame methodsFor: 'event'!

announce: event
	self announcer announce: event
! !

!CWGame methodsFor: 'game logic'!

activateMonsters
	| armyPlaying monster1 |
	armyPlaying := map monstersFromSide: self gameContext currentPlayerSide.
	(armyPlaying size = 0) 
		ifTrue: [ window alert: 'Someone just won. Guess who ? loser : ' , self gameContext currentPlayer ] 
		ifFalse: [ self pickMonster ]
!

firstTurn
	self gameContext nextTurn: (playerPool at: 1).
	self activateMonsters.
!

nextPlayer
	| currentPlayer index |
	currentPlayer := self gameContext currentPlayer. 
	index := playerPool indexOf: currentPlayer.
	^ playerPool at: index + 1 ifAbsent: [ playerPool at: 1 ]
!

nextTurn
	map desactivateMonsters.
	map removeSelection.
	self gameContext nextTurn: self nextPlayer.
	self activateMonsters.
!

pickMonster
	map readyToPickMonsters: self gameContext currentPlayerSide.
	map showActiveMonsters.
	map updateGOTs.
!

startGame
	playerPool do: [ :player |
		player addMonstersToMap: map ].
	self removeLoadingBar.
	map initializeDrawer.
	CWEventDispatcher new initializeForMap: map game: self.
	map updateMap.
	self firstTurn.
! !

!CWGame methodsFor: 'initialize-release'!

initialize
	super initialize.
	CWFightMenu new.
	context := CWGameContext new.
!

initializeEventHandling
	self announcer
		on: CWGameStart
		do: [ self startGame ].
	self announcer
		on: CWNextTurnEvent
		do: [ self nextTurn ]
!

initializePlayerSides
	playerPool withIndexDo: [ :player :i |
		player side: i - 1.5 * 2 ].
!

initializePlayerTeams
	playerPool do: [ :player |
		map ifNil: [ Transcript show: #foo ].
		player initializeWithMap: map ]
!

initializeWithSettings: gameSettings
	map := CWMap newWithMapIndex: gameSettings mapNumber.
	playerPool := gameSettings players.
	self initializePlayerSides.
	self initializePlayerTeams.
	self initializeEventHandling.
!

removeLoadingBar
	'.loading' asJQuery animate: #{ 'top' -> '-60%'} duration: 2500.
! !

Object subclass: #CWGameContext
	instanceVariableNames: 'currentPlayer currentCell'
	package: 'Easnoth-Game'!
!CWGameContext commentStamp!
Represents the current context of the game, typcally, which player is playing and what monster is currently about to attack / move!

!CWGameContext methodsFor: 'accessing'!

currentCell
	^ currentCell
!

currentCell: aCurrentCell 
	currentCell := aCurrentCell
!

currentMonster
	^ currentCell monster
!

currentMonster: aMonster
	currentCell := aMonster parent
!

currentPlayer
	^ currentPlayer
!

currentPlayerSide
	^ currentPlayer side
! !

!CWGameContext methodsFor: 'game logic'!

nextTurn: nextPlayer
	currentPlayer := nextPlayer.
	currentCell := nil
! !

Object subclass: #CWPlayer
	instanceVariableNames: 'side team'
	package: 'Easnoth-Game'!
!CWPlayer commentStamp!
I represent a player playing Easnoth.!

!CWPlayer methodsFor: 'accessing'!

announce: event
	self announcer announce: event
!

announcer
	^ CWEasnothAnnouncer current
!

monstersPositionArray
	"hack for now. should be stored in database"
	
	^ self side = 1
		ifTrue: [ { 1@4 . 1@6 . 2@6. 3@6 . 4@6 } ]
		ifFalse: [ { 7@1 . 8@1 . 9@1. 6@1 . 9@3 } ]
!

side
	^ side
!

side: int
	side := int
!

team
	^ team
!

team: aTeam
	team := aTeam
! !

!CWPlayer methodsFor: 'factory'!

newHeros: key army: army
		^ self newMonster: key army: army class: CWHeros
!

newMonster: key army: army class: aClass
		"creates a new monster with self as player"
		^ aClass new initializeFromKey: key army: army player: self
!

newTroop: key army: army
		^ self newMonster: key army: army class: CWTroop
! !

!CWPlayer methodsFor: 'game logic'!

startTurn
! !

!CWPlayer methodsFor: 'initialize-release'!

addMonstersToMap: aMap
	"hack for now"
	
	| positions |
	positions := self monstersPositionArray.
	positions withIndexDo: [ :point :n |
		((aMap childAt: point x) childAt: point y) addMonster: (team at: n) ].
!

initializeWithMap: aMap
	"get the monsters of the player and put them in the map. Assumes the team instance variable is the string from the gameSettings and change it to the monsters of the players"
	
	self announce: CWWaitForObject new.
	
	jQuery 
		getJSON: 'ressources/json/armies/', self team, '.json' 
		onSuccess: [:data |
			self initializeWithMap: aMap army: data.
			self announce: CWObjectLoaded new]
!

initializeWithMap: aMap army: data
		"initialize the monsters of the player and put them in the map. Assumes the team instance variable is the string from the gameSettings and change it to the monsters of the player"
		| monsters |
		monsters := Array new.
		1 to: 5 by: 2 do: [:n |
			monsters at: n put: (self newTroop: data warrior army: team) ].
		2 to: 4 by: 2 do: [:n |
			monsters at: n put: (self newHeros: data heros army: team) ].
		team := monsters.
! !

!CWPlayer methodsFor: 'printing'!

printOn: aStream
	aStream 
		nextPutAll: self class name;
		nextPutAll: '(';
		nextPutAll: side printString;
		nextPutAll: '-';
		nextPutAll: team printString;
		nextPutAll: ')'
! !

CWPlayer subclass: #CWAI
	instanceVariableNames: ''
	package: 'Easnoth-Game'!

CWAI subclass: #CWAggressWeakestAI
	instanceVariableNames: ''
	package: 'Easnoth-Game'!

CWPlayer subclass: #CWHuman
	instanceVariableNames: ''
	package: 'Easnoth-Game'!

