Smalltalk current createPackage: 'Easnoth-Game'!
Object subclass: #CWBootstrapper
	instanceVariableNames: 'objectToLoad objectLoaded'
	package: 'Easnoth-Game'!

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

bootstrap: mapIndex
	CWGame newWithMapIndex: mapIndex
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

bootstrap: mapIndex
	^ self new
		bootstrap: mapIndex
! !

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
	
	"hack for now"
	self announcer announce: CWMonsterAndGOTDrawingEvent new.
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

initializeForMap: aMap drawer: drawer game: aGame
	game := aGame.
	map := aMap.
	padding := drawer padding.
	self initializeEventHandling.
! !

Object subclass: #CWGame
	instanceVariableNames: 'map context'
	package: 'Easnoth-Game'!

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

	armyPlaying := map monstersFromSide: self gameContext currentPlayer.

	(armyPlaying size = 0) 
		ifTrue: [ window alert: 'Someone just won. Guess who ? winner : ' , self gameContext currentPlayer negated ] 
		ifFalse: [ self pickMonster ]
!

firstTurn
	self activateMonsters.
!

nextTurn
	map desactivateMonsters.
	map removeSelection.
	self gameContext nextTurn.
	self activateMonsters.
	map updateMonstersAndGOTs.
!

pickMonster
	map readyToPickMonsters: self gameContext currentPlayer.
	map showActiveMonsters.
	self announce: CWGOTDrawingEvent new.
!

startGame
	| drawer |
	self removeLoadingBar.
	drawer := CWMapDrawer new initializeForMap: map.
	CWEventDispatcher new initializeForMap: map drawer: drawer game: self.
	self announce: CWGlobalDrawingEvent new.
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

initializeMapWithIndex: index
	map := CWMap newWithMapIndex: index.
	self initializeEventHandling.
!

removeLoadingBar
	'.loading' asJQuery animate: #{ 'top' -> '-60%'} duration: 2500.
! !

!CWGame class methodsFor: 'instance creation'!

newWithMapIndex: index
	^ self new initializeMapWithIndex: index
! !

Object subclass: #CWGameContext
	instanceVariableNames: 'currentPlayer currentCell'
	package: 'Easnoth-Game'!

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
! !

!CWGameContext methodsFor: 'game logic'!

nextTurn
	currentPlayer := currentPlayer negated.
	currentCell := nil.
! !

!CWGameContext methodsFor: 'initialize-release'!

initialize
	super initialize.
	currentPlayer := 2 atRandom - 1.5 * 2
! !

