Smalltalk current createPackage: 'Easnoth-BootStrap' properties: #{}!
Dictionary subclass: #ImageDictionary
	instanceVariableNames: 'onload'
	package: 'Easnoth-BootStrap'!

!ImageDictionary methodsFor: 'accessing'!

isLoaded
	|loaded|

	loaded := true.
	self collect:[ :each|
				loaded := loaded & (each at: 'complete')].
	loaded ifTrue:[self onload value].
!

onload
	^onload
!

onload: aBlock
	onload := aBlock
! !

Object subclass: #LibraryInfos
	instanceVariableNames: 'index path srcArray onload'
	package: 'Easnoth-BootStrap'!

!LibraryInfos methodsFor: 'accessing'!

index
	^index
!

index: anInteger
	index := anInteger
!

onload
	^onload
!

onload: aBlock
	onload := aBlock
!

path
	^path
!

path: aString
	path := aString
!

srcArray
	^srcArray
!

srcArray: anArray
	srcArray := anArray
! !

!LibraryInfos methodsFor: 'loading'!

load: anArray
	anArray loadLibrary: self.
! !

Object subclass: #Resource
	instanceVariableNames: 'world mapArray tileImg overTileImg monsterImg buildingImg'
	package: 'Easnoth-BootStrap'!

!Resource methodsFor: 'accessing'!

buildingImg
	^buildingImg
!

buildingImg: anArray
	buildingImg := anArray
!

mapArray
	^mapArray
!

mapArray: aMapArray
	mapArray := aMapArray
!

monsterImg
	^monsterImg
!

monsterImg: anArray
	monsterImg := anArray
!

overTileImg
	^overTileImg
!

overTileImg: anArray
	overTileImg := anArray
!

tileImg
	^tileImg
!

tileImg: anArray
	tileImg := anArray
!

world
	^world
!

world: aWorld
	world := aWorld
! !

!Resource methodsFor: 'initialize-release'!

initialize
	super initialize.

	self tileImg: (Array new: self numberOfBackgroundLibraries).
	self overTileImg: (Array new: self numberOfBackgroundLibraries).
	self buildingImg: (Array new: self numberOfBackgroundLibraries).
	self monsterImg: (Array new: self numberOfMonsterLibraries).
	
	Tile arrayImg: tileImg.
	OverTile arrayImg: overTileImg.
	Building arrayImg: buildingImg.
	Monster arrayImg: monsterImg.
!

initializeWithLibrairies: libsIndexes map: aMapIndex
	"method where all images array and map array loads"

	|backgroundLibsIndexes monsterLibsIndexes|
	
	self mapArray: (Array parseMapXML:  'ressources/xml/maps/map',aMapIndex,'.xml').
	
	"get srcArray here"

	backgroundLibsIndexes := libsIndexes at: 1.
	monsterLibsIndexes := libsIndexes at: 2.

	self loadBackgroundLibrairies: backgroundLibsIndexes.
	
	self loadMonsterLibrairies: monsterLibsIndexes.
!

loadBackgroundLibrairies: backgroundLibsIndexes

	backgroundLibsIndexes do: [ :libIndex |
		LibraryInfos new
			index: libIndex;
			path: 'ressources/images/tiles/';
			srcArray: #('road.png' 'dirt.png');
			onload: [self onload];
			load: tileImg.
		
		LibraryInfos new
			index: libIndex;
			path: 'ressources/images/overtiles/';
			srcArray: #('road-n.png' 'road-ne.png');
			onload: [self onload];
			load: overTileImg.
		
		LibraryInfos new
			index: libIndex;
			path: 'ressources/images/buildings/';
			srcArray: #('house.png');
			onload: [self onload];
			load: buildingImg.
	]
!

loadMonsterLibrairies: monsterLibsIndexes

	monsterLibsIndexes do: [ :libIndex |
		LibraryInfos new
			index: libIndex;
			path: 'ressources/images/monsters/';
			srcArray: #('paladin.png' 'shyde.png');
			onload: [self onload];
			load: monsterImg.
	].
!

numberOfBackgroundLibraries
	^5
!

numberOfMonsterLibraries
	^5
!

onload
	self world increaseLoadingProcess.
! !

!Resource class methodsFor: 'instance creation'!

newWithLibrairies: libsIndexes map: aMapIndex world: aWorld
	^self new
		world: aWorld;
		initializeWithLibrairies: libsIndexes map: aMapIndex;
		yourself.
! !

Object subclass: #World
	instanceVariableNames: 'resource map eventManager loaded totalToLoad'
	package: 'Easnoth-BootStrap'!

!World methodsFor: 'accessing'!

eventManager
	^eventManager
!

eventManager: anEventManager
	eventManager := anEventManager
!

loaded
	^loaded
!

loaded: aString
	loaded := aString
!

map
	^map
!

map: aMap
	map := aMap
!

resource
	^resource
!

resource: aRes
	resource := aRes.
!

totalToLoad
	^totalToLoad
!

totalToLoad: aNumber
	totalToLoad := aNumber
! !

!World methodsFor: 'game process'!

startGame
	"this should be launch when all librairies loads"

	"TODO put smth else hehe"
	self map update.
! !

!World methodsFor: 'initialize-release'!

increaseLoadingProcess
	self loaded: self loaded + 1.
	(self loaded = self totalToLoad) ifTrue: [self initializeMap].
!

initializeMap
	"self map: (Map newWithMapArray: #(#(#(#(1 1))#(#(1 1)))#(#(#(1 1))#(#(1 1)))))."
	"self map: (Map newWithMapArray: self resource mapArray)."
	self startGame.
!

initializeWithLibrairies: libsIndexes map: aMapIndex

	self loaded: 0.
	self totalToLoad:  (libsIndexes at: 1) size + (libsIndexes at: 2) size.

	self eventManager: MapEditorEventManager new.
	self resource: (Resource newWithLibrairies: libsIndexes map: aMapIndex world: self).
	self map: (Map newWithMapArray: #(#(#(#(1 1))#(#(1 1)))#(#(#(1 1))#(#(1 1))))).
	"self map: (Map newWithMapArray: self resource mapArray)."
! !

!World class methodsFor: 'instance creation'!

newMapEditorWorldWithLibrairies: libsIndexes map: aMapIndex
	"newMapEditorWorldWithLibrairies: #(#(1 3 5) #(2 6)) map: 2"
	^self new
		initializeWithLibrairies: libsIndexes map: aMapIndex;
		yourself.
! !

Object subclass: #XMLhttpRequestProxy
	instanceVariableNames: 'xmlhttpRequest'
	package: 'Easnoth-BootStrap'!

!XMLhttpRequestProxy methodsFor: 'accessing'!

xmlhttpRequest
	^xmlhttpRequest
!

xmlhttpRequest: anObject
	xmlhttpRequest := anObject
! !

!XMLhttpRequestProxy methodsFor: 'initialize-release'!

initialize
	|xmlhttpRequestTemp|
	super initialize.
	xmlhttpRequestTemp := <new XMLHttpRequest()>. "if IE new ActiveXObject('Microsoft.XMLHTTP')"
	self xmlhttpRequest: xmlhttpRequestTemp.
!

loadXML: fileName

	self xmlhttpRequest open: 'GET'
					fileName: fileName
					arg: false;
					send.
	^self xmlhttpRequest responseText
! !

!Array methodsFor: '*Easnoth-BootStrap'!

atIndex: anIndex
	^self atLibrary: (anIndex at: 1) atIndex: (anIndex at: 2)
!

atIndex: anIndex put: anImage
	^self atLibrary: (anIndex at: 1) atIndex: (anIndex at: 2) put: anImage
!

atLibrary: aLibIndex
	^self at: aLibIndex
!

atLibrary: aLibIndex atIndex: anIndex
	^(self at: aLibIndex) at: anIndex
!

atLibrary: aLibIndex atIndex: anIndex put: anImage
	^(self at: aLibIndex) at: anIndex put: anImage
!

loadLibrary: aLibrary
	"load library from Class Easnoth-BootStrap >> LibraryInfo; then execute onload from LibraryInfo instance"

	|tempImg loaded|

	loaded := 1.
	self at: aLibrary index put: (Array new: aLibrary srcArray size).

	aLibrary srcArray withIndexDo: [ :src :i |
		tempImg := <new Image()>.
		(self at: aLibrary index) at: i put: tempImg.
		((self at: aLibrary index) at: i) at: 'onload' put: [
			loaded := loaded + 1. 
			aLibrary srcArray size = loaded ifTrue:[aLibrary onload value] 
		].
		((self at: aLibrary index) at: i) at: 'src' put: aLibrary path,src. 
	].
! !

!Array class methodsFor: '*Easnoth-BootStrap'!

parseMapXML: aPath
	"get an xml map and parse it"
	" nodes are map>>row>>cell>>tile>>text"

	|xmlDoc mapArray rowArray cellArray|
	xmlDoc := XMLhttpRequestProxy new loadXML: aPath.
	rowArray := xmlDoc getElementsByTagName: 'row'.
	mapArray := self new: rowArray length.
	
	"fonctionne !!!! attention les index commencent a 0 ici"
	"Transcript cr;
		show: 'result : ';
		show: (((((xmlDoc getElementsByTagName: 'row') at: 0) childNodes at: 1) childNodes at: 1) childNodes at: 0) nodeValue;
		cr;
		show: 'row : ';
		show: ((xmlDoc getElementsByTagName: 'row') at: 2) nodeName;
		cr;
		show: 'cell : ';
		show: (((xmlDoc getElementsByTagName: 'row') at: 2) childNodes at: 1) nodeName;
		cr;
		show: 'tile : ';
		show: ((((xmlDoc getElementsByTagName: 'row') at: 0) childNodes at: 1) childNodes at: 1) nodeName;
		cr;	
		show: 'text : ';
		show: (((((xmlDoc getElementsByTagName: 'row') at: 0) childNodes at: 1) childNodes at: 1) childNodes at: 0) nodeName;
		cr;
		show: (xmlDoc getElementsByTagName: 'row') length."
	
	0 to: (rowArray length - 1) do: [ :i |
		cellArray := (rowArray at: i) getElementsByTagName: 'cell'.
		mapArray at: (i+1) put: (self new: cellArray length).
		
		0 to: (cellArray length - 1) do: [ :j |
			(mapArray at: (i+1)) at: (j+1) put: (self new: 8).

			((mapArray at: (i+1)) at: (j+1)) at: 1 put: (Array setupIndex: (((cellArray at: j) getElementsByTagName: 'tile') at: 0)) .
			"other arrays"
		].
	].

	^mapArray
!

setupIndex: aXMLDocument
	|rowSplit array|
	rowSplit := (aXMLDocument childNodes at: 0) nodeValue.
	rowSplit := rowSplit tokenize: ','.
	array := self new: 2.
	array at: 1 put: (rowSplit at: 1).
	array at: 2 put: (rowSplit at: 2).
	^array
! !

!Array methodsFor: '*Easnoth-BootStrap'!

atIndex: anIndex
	^self atLibrary: (anIndex at: 1) atIndex: (anIndex at: 2)
!

atIndex: anIndex put: anImage
	^self atLibrary: (anIndex at: 1) atIndex: (anIndex at: 2) put: anImage
!

atLibrary: aLibIndex
	^self at: aLibIndex
!

atLibrary: aLibIndex atIndex: anIndex
	^(self at: aLibIndex) at: anIndex
!

atLibrary: aLibIndex atIndex: anIndex put: anImage
	^(self at: aLibIndex) at: anIndex put: anImage
!

loadLibrary: aLibrary
	"load library from Class Easnoth-BootStrap >> LibraryInfo; then execute onload from LibraryInfo instance"

	|tempImg loaded|

	loaded := 1.
	self at: aLibrary index put: (Array new: aLibrary srcArray size).

	aLibrary srcArray withIndexDo: [ :src :i |
		tempImg := <new Image()>.
		(self at: aLibrary index) at: i put: tempImg.
		((self at: aLibrary index) at: i) at: 'onload' put: [
			loaded := loaded + 1. 
			aLibrary srcArray size = loaded ifTrue:[aLibrary onload value] 
		].
		((self at: aLibrary index) at: i) at: 'src' put: aLibrary path,src. 
	].
! !

!Array class methodsFor: '*Easnoth-BootStrap'!

parseMapXML: aPath
	"get an xml map and parse it"
	" nodes are map>>row>>cell>>tile>>text"

	|xmlDoc mapArray rowArray cellArray|
	xmlDoc := XMLhttpRequestProxy new loadXML: aPath.
	rowArray := xmlDoc getElementsByTagName: 'row'.
	mapArray := self new: rowArray length.
	
	"fonctionne !!!! attention les index commencent a 0 ici"
	"Transcript cr;
		show: 'result : ';
		show: (((((xmlDoc getElementsByTagName: 'row') at: 0) childNodes at: 1) childNodes at: 1) childNodes at: 0) nodeValue;
		cr;
		show: 'row : ';
		show: ((xmlDoc getElementsByTagName: 'row') at: 2) nodeName;
		cr;
		show: 'cell : ';
		show: (((xmlDoc getElementsByTagName: 'row') at: 2) childNodes at: 1) nodeName;
		cr;
		show: 'tile : ';
		show: ((((xmlDoc getElementsByTagName: 'row') at: 0) childNodes at: 1) childNodes at: 1) nodeName;
		cr;	
		show: 'text : ';
		show: (((((xmlDoc getElementsByTagName: 'row') at: 0) childNodes at: 1) childNodes at: 1) childNodes at: 0) nodeName;
		cr;
		show: (xmlDoc getElementsByTagName: 'row') length."
	
	0 to: (rowArray length - 1) do: [ :i |
		cellArray := (rowArray at: i) getElementsByTagName: 'cell'.
		mapArray at: (i+1) put: (self new: cellArray length).
		
		0 to: (cellArray length - 1) do: [ :j |
			(mapArray at: (i+1)) at: (j+1) put: (self new: 8).

			((mapArray at: (i+1)) at: (j+1)) at: 1 put: (Array setupIndex: (((cellArray at: j) getElementsByTagName: 'tile') at: 0)) .
			"other arrays"
		].
	].

	^mapArray
!

setupIndex: aXMLDocument
	|rowSplit array|
	rowSplit := (aXMLDocument childNodes at: 0) nodeValue.
	rowSplit := rowSplit tokenize: ','.
	array := self new: 2.
	array at: 1 put: (rowSplit at: 1).
	array at: 2 put: (rowSplit at: 2).
	^array
! !

