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

Object subclass: #CWExtendedCell
	instanceVariableNames: 'cell prevCell'
	package: 'Easnoth-Game'!

Object subclass: #CWGame
	instanceVariableNames: 'map context playerPool'
	package: 'Easnoth-Game'!
!CWGame commentStamp!
Represent the game. Includes the god game logic (turn system)!

!CWGame methodsFor: 'accessing'!

announcer
	^ CWEasnothAnnouncer current
!

currentPlayer
	^ self gameContext currentPlayer
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

firstTurn
	self gameContext nextTurn: (playerPool at: 2 atRandom).
	self currentPlayer startTurn: map.
!

nextPlayer
	| index |
	index := playerPool indexOf: self currentPlayer.
	^ playerPool at: index + 1 ifAbsent: [ playerPool at: 1 ]
!

nextTurn
	self currentPlayer endTurn: map.
	self gameContext nextTurn: self nextPlayer.
	self currentPlayer startTurn: map
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

initializePlayerMonsters
	playerPool do: [ :player |
		player addMonstersToMap: map ].
!

initializePlayers
	"To check and refactor"

	playerPool withIndexDo: [ :player :i |
		player side: i - 1.5 * 2. "works only for 2 players. Enough for now"
		player initializeWithMap: map.
		(player isKindOf: CWAI) ifTrue: [ player gameContext: self gameContext ] ]
!

initializeWithSettings: gameSettings
	map := CWMap newWithMapIndex: gameSettings mapNumber.
	playerPool := gameSettings players.
	self initializePlayers.
	self initializeEventHandling.
!

startGame
	self initializePlayerMonsters.
	map initializeDrawer.
	CWEventDispatcher new initializeForMap: map game: self.
	map updateMap.
	self firstTurn.
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

Object subclass: #CWPathFinder
	instanceVariableNames: 'studiedList listToStudy'
	package: 'Easnoth-Game'!

!CWPathFinder methodsFor: 'pathfinding'!

pathFrom: cellStart to: cellEnd
	"Answers the shortest path from the current cell to the cell clicked"

	| path tempArray |
	self resetList.
	listToStudy add: cellStart.
	tempArray := Array new.
	listToStudy do: [ :cell |
		cell neighbours do: [ :each |
			(studiedList values includes: each) ifFalse: [ tempArray add: each ] ] ]
	"freeNeighbours.
	path := Array with: cellLast.
	[ self = path last ] whileFalse: [ path add: path last prevCell ].
	^ path"
! !

!CWPathFinder methodsFor: 'private'!

resetList
	studiedList := Set new.
	listToStudy := Set new.
! !

!CWPathFinder methodsFor: 'selection'!

selectableTilesFor: aMonster
! !

Object subclass: #CWPlayer
	instanceVariableNames: 'side team'
	package: 'Easnoth-Game'!
!CWPlayer commentStamp!
I represent a player playing Easnoth.!

!CWPlayer methodsFor: 'accessing'!

monstersPositionArray
	"hack for now. should be stored in database"
	
	^ self side = 1
		ifTrue: [ { 1@4 . 1@6 . 2@6. 3@6 . 4@6 . 1@3 } ]
		ifFalse: [ { 7@1 . 8@1 . 9@1. 6@1 . 9@3 . 9@4} ]
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

!CWPlayer methodsFor: 'events'!

announce: event
	self announcer announce: event
!

announcer
	^ CWEasnothAnnouncer current
!

endGame
	"To change... "

	window alert: 'Someone just won. Guess who ? loser : ' , self printString
! !

!CWPlayer methodsFor: 'factory'!

newCavalry: jsonStat
		^ self newMonster: jsonStat heros: CWUnitStrategy type: CWCavalryStrategy
!

newCavalryHeros: jsonStat
		^ self newMonster: jsonStat heros: CWHerosStrategy type: CWCavalryStrategy
!

newMonster: jsonStat heros: strat type: aType
		"creates a new monster with self as player"
		^ CWMonster new initializeWithStat: jsonStat army: self team player: self heros: strat type: aType
!

newRange: jsonStat
		^ self newMonster: jsonStat heros: CWUnitStrategy type: CWRangeStrategy
!

newRangeHeros: jsonStat
		^ self newMonster: jsonStat heros: CWHerosStrategy type: CWRangeStrategy
!

newTroop: jsonStat
		^ self newMonster: jsonStat heros: CWUnitStrategy type: CWTroopStrategy
!

newTroopHeros: jsonStat
		^ self newMonster: jsonStat heros: CWHerosStrategy type: CWTroopStrategy
! !

!CWPlayer methodsFor: 'game logic'!

endTurn: map
	map desactivateMonsters.
	map removeSelection.
!

removeMonster: aMonster
	self team remove: aMonster.
	aMonster player: nil.
	self team isEmpty 
		ifTrue: [ self endGame ]
!

startTurn: map
	self team isEmpty ifTrue: [ ^ self endGame ].
	self team do: [ :each |
		each readyToBePicked.
		each parent showActiveMonsters ].
	map updateGOTs.
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
		"initialize the monsters of the player. Assumes the team instance variable is the string from the gameSettings and change it to the monsters of the player"
		| monsters |
		monsters := Array new.
		monsters at: 1 put: (self newTroop: data troop).
		monsters at: 2 put: (self newTroopHeros: data troopHeros).
		monsters at: 3 put: (self newRange: data troop).
		monsters at: 4 put: (self newCavalry: data cavalry).
		monsters at: 5 put: (self newCavalryHeros: data cavalryHeros).
		monsters at: 6 put: (self newRangeHeros: data troopHeros).
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
	instanceVariableNames: 'gameContext'
	package: 'Easnoth-Game'!

!CWAI methodsFor: 'accessing'!

gameContext
	^ gameContext
!

gameContext: aCtx
	gameContext := aCtx
! !

CWAI subclass: #CWAggressWeakestAI
	instanceVariableNames: 'monsterToPlay cellToTarget'
	package: 'Easnoth-Game'!
!CWAggressWeakestAI commentStamp!
For each move, I calcul a score which correspond to :
- how many damage the attacking monster will do (depends on number of dices + attack percentage )
- how many hp left have the foe ( I try to attack the weakest foe)
 Then I execute the move that has the highest score.
 
 If I cannot attack, I just do some random move.!

!CWAggressWeakestAI methodsFor: 'accessing'!

time
	"time for user to see what AI is doing"
	^ 500
! !

!CWAggressWeakestAI methodsFor: 'game logic'!

calculBestMove
	"Calcul the best move for the AI player. see class comment for details" 

	| score bestScore |
	bestScore := 9999 negated.
	self team do: [ :monster |
		monster currentMove: monster move.
		monster attackableTargets do: [ :target |
			score := monster attackPotential - target monster defensePotential. 
			score > bestScore ifTrue: [ 
				bestScore := score.
				monsterToPlay := monster.
				cellToTarget := target ] ].
		monster currentMove: 0. ]
!

checkForNextTurn: monster
	"After the monster has played, either the game has automatically triggered the next turn event (and then set the current monster to inactive state), or the AI player needs to do it manually"

	monster isInactive 
		ifFalse: [ self announce: CWNextTurnEvent new ]
!

executeAttack
	| relatedTargetCell duration |
	relatedTargetCell := monsterToPlay parent cellToMoveBeforeAttack: cellToTarget.
	duration := (monsterToPlay parent pathTo: relatedTargetCell) size - 1 * 300.
	cellToTarget mouseClick: self gameContext. 
	[ self checkForNextTurn: monsterToPlay ] valueWithTimeout: duration + 2000 + self time.
!

executeBestMove
	"Assumes that the bestMove instance variable is now set to an Array(a Monster to play . aCell to move / attack). Executes this best move"

	| duration relatedTargetCell hasAttack |
	monsterToPlay parent mouseClick: self gameContext.
	[ cellToTarget hasMonster 
			ifTrue: [ self executeAttack ]
			ifFalse: [ self executeMove ].
	] valueWithTimeout: self time.
!

executeMove
	| duration |
	duration := (monsterToPlay parent pathTo: cellToTarget) size - 1 * 300.
	cellToTarget mouseClick: self gameContext. 
	[ self checkForNextTurn: monsterToPlay ] valueWithTimeout: duration + self time.
!

randomMove
	"Assumes that no monster can attack. Set bestMove to some random move of some random monster"
	| cellsToGo |
	monsterToPlay := self team at: self team size atRandom.
	"hack for the selected cells for pathfinding ..."
	monsterToPlay root removeSelection.
	"end hack"
	cellsToGo := (monsterToPlay parent movableNeighboursCycle: monsterToPlay move) remove: monsterToPlay parent.
	cellsToGo ifEmpty: [ ^ self checkForNextTurn: monsterToPlay ]. "Case where the monster cannot move (surrounded by allies)"
	cellToTarget := cellsToGo asArray atRandom.
!

reinitialize
	monsterToPlay := nil.
	cellToTarget := nil.
!

startTurn: map
	self team isEmpty ifTrue: [^ self].
	super startTurn: map.
	[
	self reinitialize.
	self calculBestMove.
	monsterToPlay ifNil: [ self randomMove ].
	self executeBestMove
	] valueWithTimeout: self time
! !

CWPlayer subclass: #CWHuman
	instanceVariableNames: ''
	package: 'Easnoth-Game'!

!SequenceableCollection methodsFor: '*Easnoth-Game'!

at: index ifPresent: aBlock ifAbsent: anotherBlock

	^(index <= self size and: [ index > 0 ])
		ifTrue: [ aBlock value: (self at: index) ]
		ifFalse: [ anotherBlock value ]
! !

