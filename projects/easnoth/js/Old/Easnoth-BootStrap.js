smalltalk.addPackage('Easnoth-BootStrap', {});
smalltalk.addClass('ImageDictionary', smalltalk.Dictionary, ['onload'], 'Easnoth-BootStrap');
smalltalk.addMethod(
"_isLoaded",
smalltalk.method({
selector: "isLoaded",
category: 'accessing',
fn: function () {
    var self = this;
    var loaded = nil;
    loaded = true;
    smalltalk.send(self, "_collect_", [function (each) {return loaded = smalltalk.send(loaded, "_&", [smalltalk.send(each, "_at_", ["complete"])]);}]);
    ($receiver = loaded).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(smalltalk.send(self, "_onload", []), "_value", []);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return smalltalk.send(smalltalk.send(self, "_onload", []), "_value", []);}]);
    return self;
},
args: [],
source: "isLoaded\x0a\x09|loaded|\x0a\x0a\x09loaded := true.\x0a\x09self collect:[ :each|\x0a\x09\x09\x09\x09loaded := loaded & (each at: 'complete')].\x0a\x09loaded ifTrue:[self onload value].",
messageSends: ["collect:", "&", "at:", "ifTrue:", "value", "onload"],
referencedClasses: []
}),
smalltalk.ImageDictionary);

smalltalk.addMethod(
"_onload",
smalltalk.method({
selector: "onload",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@onload'];
    return self;
},
args: [],
source: "onload\x0a\x09^onload",
messageSends: [],
referencedClasses: []
}),
smalltalk.ImageDictionary);

smalltalk.addMethod(
"_onload_",
smalltalk.method({
selector: "onload:",
category: 'accessing',
fn: function (aBlock) {
    var self = this;
    self['@onload'] = aBlock;
    return self;
},
args: ["aBlock"],
source: "onload: aBlock\x0a\x09onload := aBlock",
messageSends: [],
referencedClasses: []
}),
smalltalk.ImageDictionary);



smalltalk.addClass('LibraryInfos', smalltalk.Object, ['index', 'path', 'srcArray', 'onload'], 'Easnoth-BootStrap');
smalltalk.addMethod(
"_index",
smalltalk.method({
selector: "index",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@index'];
    return self;
},
args: [],
source: "index\x0a\x09^index",
messageSends: [],
referencedClasses: []
}),
smalltalk.LibraryInfos);

smalltalk.addMethod(
"_index_",
smalltalk.method({
selector: "index:",
category: 'accessing',
fn: function (anInteger) {
    var self = this;
    self['@index'] = anInteger;
    return self;
},
args: ["anInteger"],
source: "index: anInteger\x0a\x09index := anInteger",
messageSends: [],
referencedClasses: []
}),
smalltalk.LibraryInfos);

smalltalk.addMethod(
"_load_",
smalltalk.method({
selector: "load:",
category: 'loading',
fn: function (anArray) {
    var self = this;
    smalltalk.send(anArray, "_loadLibrary_", [self]);
    return self;
},
args: ["anArray"],
source: "load: anArray\x0a\x09anArray loadLibrary: self.\x0a\x09",
messageSends: ["loadLibrary:"],
referencedClasses: []
}),
smalltalk.LibraryInfos);

smalltalk.addMethod(
"_onload",
smalltalk.method({
selector: "onload",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@onload'];
    return self;
},
args: [],
source: "onload\x0a\x09^onload",
messageSends: [],
referencedClasses: []
}),
smalltalk.LibraryInfos);

smalltalk.addMethod(
"_onload_",
smalltalk.method({
selector: "onload:",
category: 'accessing',
fn: function (aBlock) {
    var self = this;
    self['@onload'] = aBlock;
    return self;
},
args: ["aBlock"],
source: "onload: aBlock\x0a\x09onload := aBlock",
messageSends: [],
referencedClasses: []
}),
smalltalk.LibraryInfos);

smalltalk.addMethod(
"_path",
smalltalk.method({
selector: "path",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@path'];
    return self;
},
args: [],
source: "path\x0a\x09^path",
messageSends: [],
referencedClasses: []
}),
smalltalk.LibraryInfos);

smalltalk.addMethod(
"_path_",
smalltalk.method({
selector: "path:",
category: 'accessing',
fn: function (aString) {
    var self = this;
    self['@path'] = aString;
    return self;
},
args: ["aString"],
source: "path: aString\x0a\x09path := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.LibraryInfos);

smalltalk.addMethod(
"_srcArray",
smalltalk.method({
selector: "srcArray",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@srcArray'];
    return self;
},
args: [],
source: "srcArray\x0a\x09^srcArray",
messageSends: [],
referencedClasses: []
}),
smalltalk.LibraryInfos);

smalltalk.addMethod(
"_srcArray_",
smalltalk.method({
selector: "srcArray:",
category: 'accessing',
fn: function (anArray) {
    var self = this;
    self['@srcArray'] = anArray;
    return self;
},
args: ["anArray"],
source: "srcArray: anArray\x0a\x09srcArray := anArray",
messageSends: [],
referencedClasses: []
}),
smalltalk.LibraryInfos);



smalltalk.addClass('Resource', smalltalk.Object, ['world', 'mapArray', 'tileImg', 'overTileImg', 'monsterImg', 'buildingImg'], 'Easnoth-BootStrap');
smalltalk.addMethod(
"_buildingImg",
smalltalk.method({
selector: "buildingImg",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@buildingImg'];
    return self;
},
args: [],
source: "buildingImg\x0a\x09^buildingImg",
messageSends: [],
referencedClasses: []
}),
smalltalk.Resource);

smalltalk.addMethod(
"_buildingImg_",
smalltalk.method({
selector: "buildingImg:",
category: 'accessing',
fn: function (anArray) {
    var self = this;
    self['@buildingImg'] = anArray;
    return self;
},
args: ["anArray"],
source: "buildingImg: anArray\x0a\x09buildingImg := anArray",
messageSends: [],
referencedClasses: []
}),
smalltalk.Resource);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function () {
    var self = this;
    smalltalk.send(self, "_initialize", [], smalltalk.Resource.superclass || nil);
    smalltalk.send(self, "_tileImg_", [smalltalk.send(smalltalk.Array || Array, "_new_", [smalltalk.send(self, "_numberOfBackgroundLibraries", [])])]);
    smalltalk.send(self, "_overTileImg_", [smalltalk.send(smalltalk.Array || Array, "_new_", [smalltalk.send(self, "_numberOfBackgroundLibraries", [])])]);
    smalltalk.send(self, "_buildingImg_", [smalltalk.send(smalltalk.Array || Array, "_new_", [smalltalk.send(self, "_numberOfBackgroundLibraries", [])])]);
    smalltalk.send(self, "_monsterImg_", [smalltalk.send(smalltalk.Array || Array, "_new_", [smalltalk.send(self, "_numberOfMonsterLibraries", [])])]);
    smalltalk.send(smalltalk.Tile || Tile, "_arrayImg_", [self['@tileImg']]);
    smalltalk.send(smalltalk.OverTile || OverTile, "_arrayImg_", [self['@overTileImg']]);
    smalltalk.send(smalltalk.Building || Building, "_arrayImg_", [self['@buildingImg']]);
    smalltalk.send(smalltalk.Monster || Monster, "_arrayImg_", [self['@monsterImg']]);
    return self;
},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x0a\x09self tileImg: (Array new: self numberOfBackgroundLibraries).\x0a\x09self overTileImg: (Array new: self numberOfBackgroundLibraries).\x0a\x09self buildingImg: (Array new: self numberOfBackgroundLibraries).\x0a\x09self monsterImg: (Array new: self numberOfMonsterLibraries).\x0a\x09\x0a\x09Tile arrayImg: tileImg.\x0a\x09OverTile arrayImg: overTileImg.\x0a\x09Building arrayImg: buildingImg.\x0a\x09Monster arrayImg: monsterImg.",
messageSends: ["initialize", "tileImg:", "new:", "numberOfBackgroundLibraries", "overTileImg:", "buildingImg:", "monsterImg:", "numberOfMonsterLibraries", "arrayImg:"],
referencedClasses: ["Array", "Tile", "OverTile", "Building", "Monster"]
}),
smalltalk.Resource);

smalltalk.addMethod(
"_initializeWithLibrairies_map_",
smalltalk.method({
selector: "initializeWithLibrairies:map:",
category: 'initialize-release',
fn: function (libsIndexes, aMapIndex) {
    var self = this;
    var backgroundLibsIndexes = nil;
    var monsterLibsIndexes = nil;
    smalltalk.send(self, "_mapArray_", [smalltalk.send(smalltalk.Array || Array, "_parseMapXML_", [smalltalk.send(smalltalk.send("ressources/xml/maps/map", "__comma", [aMapIndex]), "__comma", [".xml"])])]);
    backgroundLibsIndexes = smalltalk.send(libsIndexes, "_at_", [1]);
    monsterLibsIndexes = smalltalk.send(libsIndexes, "_at_", [2]);
    smalltalk.send(self, "_loadBackgroundLibrairies_", [backgroundLibsIndexes]);
    smalltalk.send(self, "_loadMonsterLibrairies_", [monsterLibsIndexes]);
    return self;
},
args: ["libsIndexes", "aMapIndex"],
source: "initializeWithLibrairies: libsIndexes map: aMapIndex\x0a\x09\x22method where all images array and map array loads\x22\x0a\x0a\x09|backgroundLibsIndexes monsterLibsIndexes|\x0a\x09\x0a\x09self mapArray: (Array parseMapXML:  'ressources/xml/maps/map',aMapIndex,'.xml').\x0a\x09\x0a\x09\x22get srcArray here\x22\x0a\x0a\x09backgroundLibsIndexes := libsIndexes at: 1.\x0a\x09monsterLibsIndexes := libsIndexes at: 2.\x0a\x0a\x09self loadBackgroundLibrairies: backgroundLibsIndexes.\x0a\x09\x0a\x09self loadMonsterLibrairies: monsterLibsIndexes.",
messageSends: ["mapArray:", "parseMapXML:", ",", "at:", "loadBackgroundLibrairies:", "loadMonsterLibrairies:"],
referencedClasses: ["Array"]
}),
smalltalk.Resource);

smalltalk.addMethod(
"_loadBackgroundLibrairies_",
smalltalk.method({
selector: "loadBackgroundLibrairies:",
category: 'initialize-release',
fn: function (backgroundLibsIndexes) {
    var self = this;
    smalltalk.send(backgroundLibsIndexes, "_do_", [function (libIndex) {(function ($rec) {smalltalk.send($rec, "_index_", [libIndex]);smalltalk.send($rec, "_path_", ["ressources/images/tiles/"]);smalltalk.send($rec, "_srcArray_", [["road.png", "dirt.png"]]);smalltalk.send($rec, "_onload_", [function () {return smalltalk.send(self, "_onload", []);}]);return smalltalk.send($rec, "_load_", [self['@tileImg']]);}(smalltalk.send(smalltalk.LibraryInfos || LibraryInfos, "_new", [])));(function ($rec) {smalltalk.send($rec, "_index_", [libIndex]);smalltalk.send($rec, "_path_", ["ressources/images/overtiles/"]);smalltalk.send($rec, "_srcArray_", [["road-n.png", "road-ne.png"]]);smalltalk.send($rec, "_onload_", [function () {return smalltalk.send(self, "_onload", []);}]);return smalltalk.send($rec, "_load_", [self['@overTileImg']]);}(smalltalk.send(smalltalk.LibraryInfos || LibraryInfos, "_new", [])));return function ($rec) {smalltalk.send($rec, "_index_", [libIndex]);smalltalk.send($rec, "_path_", ["ressources/images/buildings/"]);smalltalk.send($rec, "_srcArray_", [["house.png"]]);smalltalk.send($rec, "_onload_", [function () {return smalltalk.send(self, "_onload", []);}]);return smalltalk.send($rec, "_load_", [self['@buildingImg']]);}(smalltalk.send(smalltalk.LibraryInfos || LibraryInfos, "_new", []));}]);
    return self;
},
args: ["backgroundLibsIndexes"],
source: "loadBackgroundLibrairies: backgroundLibsIndexes\x0a\x0a\x09backgroundLibsIndexes do: [ :libIndex |\x0a\x09\x09LibraryInfos new\x0a\x09\x09\x09index: libIndex;\x0a\x09\x09\x09path: 'ressources/images/tiles/';\x0a\x09\x09\x09srcArray: #('road.png' 'dirt.png');\x0a\x09\x09\x09onload: [self onload];\x0a\x09\x09\x09load: tileImg.\x0a\x09\x09\x0a\x09\x09LibraryInfos new\x0a\x09\x09\x09index: libIndex;\x0a\x09\x09\x09path: 'ressources/images/overtiles/';\x0a\x09\x09\x09srcArray: #('road-n.png' 'road-ne.png');\x0a\x09\x09\x09onload: [self onload];\x0a\x09\x09\x09load: overTileImg.\x0a\x09\x09\x0a\x09\x09LibraryInfos new\x0a\x09\x09\x09index: libIndex;\x0a\x09\x09\x09path: 'ressources/images/buildings/';\x0a\x09\x09\x09srcArray: #('house.png');\x0a\x09\x09\x09onload: [self onload];\x0a\x09\x09\x09load: buildingImg.\x0a\x09]",
messageSends: ["do:", "index:", "path:", "srcArray:", "onload:", "onload", "load:", "new"],
referencedClasses: ["LibraryInfos"]
}),
smalltalk.Resource);

smalltalk.addMethod(
"_loadMonsterLibrairies_",
smalltalk.method({
selector: "loadMonsterLibrairies:",
category: 'initialize-release',
fn: function (monsterLibsIndexes) {
    var self = this;
    smalltalk.send(monsterLibsIndexes, "_do_", [function (libIndex) {return function ($rec) {smalltalk.send($rec, "_index_", [libIndex]);smalltalk.send($rec, "_path_", ["ressources/images/monsters/"]);smalltalk.send($rec, "_srcArray_", [["paladin.png", "shyde.png"]]);smalltalk.send($rec, "_onload_", [function () {return smalltalk.send(self, "_onload", []);}]);return smalltalk.send($rec, "_load_", [self['@monsterImg']]);}(smalltalk.send(smalltalk.LibraryInfos || LibraryInfos, "_new", []));}]);
    return self;
},
args: ["monsterLibsIndexes"],
source: "loadMonsterLibrairies: monsterLibsIndexes\x0a\x0a\x09monsterLibsIndexes do: [ :libIndex |\x0a\x09\x09LibraryInfos new\x0a\x09\x09\x09index: libIndex;\x0a\x09\x09\x09path: 'ressources/images/monsters/';\x0a\x09\x09\x09srcArray: #('paladin.png' 'shyde.png');\x0a\x09\x09\x09onload: [self onload];\x0a\x09\x09\x09load: monsterImg.\x0a\x09].",
messageSends: ["do:", "index:", "path:", "srcArray:", "onload:", "onload", "load:", "new"],
referencedClasses: ["LibraryInfos"]
}),
smalltalk.Resource);

smalltalk.addMethod(
"_mapArray",
smalltalk.method({
selector: "mapArray",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@mapArray'];
    return self;
},
args: [],
source: "mapArray\x0a\x09^mapArray",
messageSends: [],
referencedClasses: []
}),
smalltalk.Resource);

smalltalk.addMethod(
"_mapArray_",
smalltalk.method({
selector: "mapArray:",
category: 'accessing',
fn: function (aMapArray) {
    var self = this;
    self['@mapArray'] = aMapArray;
    return self;
},
args: ["aMapArray"],
source: "mapArray: aMapArray\x0a\x09mapArray := aMapArray",
messageSends: [],
referencedClasses: []
}),
smalltalk.Resource);

smalltalk.addMethod(
"_monsterImg",
smalltalk.method({
selector: "monsterImg",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@monsterImg'];
    return self;
},
args: [],
source: "monsterImg\x0a\x09^monsterImg",
messageSends: [],
referencedClasses: []
}),
smalltalk.Resource);

smalltalk.addMethod(
"_monsterImg_",
smalltalk.method({
selector: "monsterImg:",
category: 'accessing',
fn: function (anArray) {
    var self = this;
    self['@monsterImg'] = anArray;
    return self;
},
args: ["anArray"],
source: "monsterImg: anArray\x0a\x09monsterImg := anArray",
messageSends: [],
referencedClasses: []
}),
smalltalk.Resource);

smalltalk.addMethod(
"_numberOfBackgroundLibraries",
smalltalk.method({
selector: "numberOfBackgroundLibraries",
category: 'initialize-release',
fn: function () {
    var self = this;
    return 5;
    return self;
},
args: [],
source: "numberOfBackgroundLibraries\x0a\x09^5",
messageSends: [],
referencedClasses: []
}),
smalltalk.Resource);

smalltalk.addMethod(
"_numberOfMonsterLibraries",
smalltalk.method({
selector: "numberOfMonsterLibraries",
category: 'initialize-release',
fn: function () {
    var self = this;
    return 5;
    return self;
},
args: [],
source: "numberOfMonsterLibraries\x0a\x09^5",
messageSends: [],
referencedClasses: []
}),
smalltalk.Resource);

smalltalk.addMethod(
"_onload",
smalltalk.method({
selector: "onload",
category: 'initialize-release',
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_world", []), "_increaseLoadingProcess", []);
    return self;
},
args: [],
source: "onload\x0a\x09self world increaseLoadingProcess.",
messageSends: ["increaseLoadingProcess", "world"],
referencedClasses: []
}),
smalltalk.Resource);

smalltalk.addMethod(
"_overTileImg",
smalltalk.method({
selector: "overTileImg",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@overTileImg'];
    return self;
},
args: [],
source: "overTileImg\x0a\x09^overTileImg",
messageSends: [],
referencedClasses: []
}),
smalltalk.Resource);

smalltalk.addMethod(
"_overTileImg_",
smalltalk.method({
selector: "overTileImg:",
category: 'accessing',
fn: function (anArray) {
    var self = this;
    self['@overTileImg'] = anArray;
    return self;
},
args: ["anArray"],
source: "overTileImg: anArray\x0a\x09overTileImg := anArray",
messageSends: [],
referencedClasses: []
}),
smalltalk.Resource);

smalltalk.addMethod(
"_tileImg",
smalltalk.method({
selector: "tileImg",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@tileImg'];
    return self;
},
args: [],
source: "tileImg\x0a\x09^tileImg",
messageSends: [],
referencedClasses: []
}),
smalltalk.Resource);

smalltalk.addMethod(
"_tileImg_",
smalltalk.method({
selector: "tileImg:",
category: 'accessing',
fn: function (anArray) {
    var self = this;
    self['@tileImg'] = anArray;
    return self;
},
args: ["anArray"],
source: "tileImg: anArray\x0a\x09tileImg := anArray",
messageSends: [],
referencedClasses: []
}),
smalltalk.Resource);

smalltalk.addMethod(
"_world",
smalltalk.method({
selector: "world",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@world'];
    return self;
},
args: [],
source: "world\x0a\x09^world",
messageSends: [],
referencedClasses: []
}),
smalltalk.Resource);

smalltalk.addMethod(
"_world_",
smalltalk.method({
selector: "world:",
category: 'accessing',
fn: function (aWorld) {
    var self = this;
    self['@world'] = aWorld;
    return self;
},
args: ["aWorld"],
source: "world: aWorld\x0a\x09world := aWorld",
messageSends: [],
referencedClasses: []
}),
smalltalk.Resource);


smalltalk.addMethod(
"_newWithLibrairies_map_world_",
smalltalk.method({
selector: "newWithLibrairies:map:world:",
category: 'instance creation',
fn: function (libsIndexes, aMapIndex, aWorld) {
    var self = this;
    return function ($rec) {smalltalk.send($rec, "_world_", [aWorld]);smalltalk.send($rec, "_initializeWithLibrairies_map_", [libsIndexes, aMapIndex]);return smalltalk.send($rec, "_yourself", []);}(smalltalk.send(self, "_new", []));
    return self;
},
args: ["libsIndexes", "aMapIndex", "aWorld"],
source: "newWithLibrairies: libsIndexes map: aMapIndex world: aWorld\x0a\x09^self new\x0a\x09\x09world: aWorld;\x0a\x09\x09initializeWithLibrairies: libsIndexes map: aMapIndex;\x0a\x09\x09yourself.",
messageSends: ["world:", "initializeWithLibrairies:map:", "yourself", "new"],
referencedClasses: []
}),
smalltalk.Resource.klass);


smalltalk.addClass('World', smalltalk.Object, ['resource', 'map', 'eventManager', 'loaded', 'totalToLoad'], 'Easnoth-BootStrap');
smalltalk.addMethod(
"_eventManager",
smalltalk.method({
selector: "eventManager",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@eventManager'];
    return self;
},
args: [],
source: "eventManager\x0a\x09^eventManager",
messageSends: [],
referencedClasses: []
}),
smalltalk.World);

smalltalk.addMethod(
"_eventManager_",
smalltalk.method({
selector: "eventManager:",
category: 'accessing',
fn: function (anEventManager) {
    var self = this;
    self['@eventManager'] = anEventManager;
    return self;
},
args: ["anEventManager"],
source: "eventManager: anEventManager\x0a\x09eventManager := anEventManager",
messageSends: [],
referencedClasses: []
}),
smalltalk.World);

smalltalk.addMethod(
"_increaseLoadingProcess",
smalltalk.method({
selector: "increaseLoadingProcess",
category: 'initialize-release',
fn: function () {
    var self = this;
    smalltalk.send(self, "_loaded_", [($receiver = smalltalk.send(self, "_loaded", [])).klass === smalltalk.Number ? $receiver + 1 : smalltalk.send($receiver, "__plus", [1])]);
    ($receiver = smalltalk.send(smalltalk.send(self, "_loaded", []), "__eq", [smalltalk.send(self, "_totalToLoad", [])])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(self, "_initializeMap", []);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return smalltalk.send(self, "_initializeMap", []);}]);
    return self;
},
args: [],
source: "increaseLoadingProcess\x0a\x09self loaded: self loaded + 1.\x0a\x09(self loaded = self totalToLoad) ifTrue: [self initializeMap].\x0a",
messageSends: ["loaded:", "+", "loaded", "ifTrue:", "=", "totalToLoad", "initializeMap"],
referencedClasses: []
}),
smalltalk.World);

smalltalk.addMethod(
"_initializeMap",
smalltalk.method({
selector: "initializeMap",
category: 'initialize-release',
fn: function () {
    var self = this;
    smalltalk.send(self, "_startGame", []);
    return self;
},
args: [],
source: "initializeMap\x0a\x09\x22self map: (Map newWithMapArray: #(#(#(#(1 1))#(#(1 1)))#(#(#(1 1))#(#(1 1))))).\x22\x0a\x09\x22self map: (Map newWithMapArray: self resource mapArray).\x22\x0a\x09self startGame.",
messageSends: ["startGame"],
referencedClasses: []
}),
smalltalk.World);

smalltalk.addMethod(
"_initializeWithLibrairies_map_",
smalltalk.method({
selector: "initializeWithLibrairies:map:",
category: 'initialize-release',
fn: function (libsIndexes, aMapIndex) {
    var self = this;
    smalltalk.send(self, "_loaded_", [0]);
    smalltalk.send(self, "_totalToLoad_", [($receiver = smalltalk.send(smalltalk.send(libsIndexes, "_at_", [1]), "_size", [])).klass === smalltalk.Number ? $receiver + smalltalk.send(smalltalk.send(libsIndexes, "_at_", [2]), "_size", []) : smalltalk.send($receiver, "__plus", [smalltalk.send(smalltalk.send(libsIndexes, "_at_", [2]), "_size", [])])]);
    smalltalk.send(self, "_eventManager_", [smalltalk.send(smalltalk.MapEditorEventManager || MapEditorEventManager, "_new", [])]);
    smalltalk.send(self, "_resource_", [smalltalk.send(smalltalk.Resource || Resource, "_newWithLibrairies_map_world_", [libsIndexes, aMapIndex, self])]);
    smalltalk.send(self, "_map_", [smalltalk.send(smalltalk.Map || Map, "_newWithMapArray_", [[[[[1, 1]], [[1, 1]]], [[[1, 1]], [[1, 1]]]]])]);
    return self;
},
args: ["libsIndexes", "aMapIndex"],
source: "initializeWithLibrairies: libsIndexes map: aMapIndex\x0a\x0a\x09self loaded: 0.\x0a\x09self totalToLoad:  (libsIndexes at: 1) size + (libsIndexes at: 2) size.\x0a\x0a\x09self eventManager: MapEditorEventManager new.\x0a\x09self resource: (Resource newWithLibrairies: libsIndexes map: aMapIndex world: self).\x0a\x09self map: (Map newWithMapArray: #(#(#(#(1 1))#(#(1 1)))#(#(#(1 1))#(#(1 1))))).\x0a\x09\x22self map: (Map newWithMapArray: self resource mapArray).\x22",
messageSends: ["loaded:", "totalToLoad:", "+", "size", "at:", "eventManager:", "new", "resource:", "newWithLibrairies:map:world:", "map:", "newWithMapArray:"],
referencedClasses: ["MapEditorEventManager", "Resource", "Map"]
}),
smalltalk.World);

smalltalk.addMethod(
"_loaded",
smalltalk.method({
selector: "loaded",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@loaded'];
    return self;
},
args: [],
source: "loaded\x0a\x09^loaded",
messageSends: [],
referencedClasses: []
}),
smalltalk.World);

smalltalk.addMethod(
"_loaded_",
smalltalk.method({
selector: "loaded:",
category: 'accessing',
fn: function (aString) {
    var self = this;
    self['@loaded'] = aString;
    return self;
},
args: ["aString"],
source: "loaded: aString\x0a\x09loaded := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.World);

smalltalk.addMethod(
"_map",
smalltalk.method({
selector: "map",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@map'];
    return self;
},
args: [],
source: "map\x0a\x09^map",
messageSends: [],
referencedClasses: []
}),
smalltalk.World);

smalltalk.addMethod(
"_map_",
smalltalk.method({
selector: "map:",
category: 'accessing',
fn: function (aMap) {
    var self = this;
    self['@map'] = aMap;
    return self;
},
args: ["aMap"],
source: "map: aMap\x0a\x09map := aMap",
messageSends: [],
referencedClasses: []
}),
smalltalk.World);

smalltalk.addMethod(
"_resource",
smalltalk.method({
selector: "resource",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@resource'];
    return self;
},
args: [],
source: "resource\x0a\x09^resource",
messageSends: [],
referencedClasses: []
}),
smalltalk.World);

smalltalk.addMethod(
"_resource_",
smalltalk.method({
selector: "resource:",
category: 'accessing',
fn: function (aRes) {
    var self = this;
    self['@resource'] = aRes;
    return self;
},
args: ["aRes"],
source: "resource: aRes\x0a\x09resource := aRes.",
messageSends: [],
referencedClasses: []
}),
smalltalk.World);

smalltalk.addMethod(
"_startGame",
smalltalk.method({
selector: "startGame",
category: 'game process',
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_map", []), "_update", []);
    return self;
},
args: [],
source: "startGame\x0a\x09\x22this should be launch when all librairies loads\x22\x0a\x0a\x09\x22TODO put smth else hehe\x22\x0a\x09self map update.\x0a\x09",
messageSends: ["update", "map"],
referencedClasses: []
}),
smalltalk.World);

smalltalk.addMethod(
"_totalToLoad",
smalltalk.method({
selector: "totalToLoad",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@totalToLoad'];
    return self;
},
args: [],
source: "totalToLoad\x0a\x09^totalToLoad",
messageSends: [],
referencedClasses: []
}),
smalltalk.World);

smalltalk.addMethod(
"_totalToLoad_",
smalltalk.method({
selector: "totalToLoad:",
category: 'accessing',
fn: function (aNumber) {
    var self = this;
    self['@totalToLoad'] = aNumber;
    return self;
},
args: ["aNumber"],
source: "totalToLoad: aNumber\x0a\x09totalToLoad := aNumber",
messageSends: [],
referencedClasses: []
}),
smalltalk.World);


smalltalk.addMethod(
"_newMapEditorWorldWithLibrairies_map_",
smalltalk.method({
selector: "newMapEditorWorldWithLibrairies:map:",
category: 'instance creation',
fn: function (libsIndexes, aMapIndex) {
    var self = this;
    return function ($rec) {smalltalk.send($rec, "_initializeWithLibrairies_map_", [libsIndexes, aMapIndex]);return smalltalk.send($rec, "_yourself", []);}(smalltalk.send(self, "_new", []));
    return self;
},
args: ["libsIndexes", "aMapIndex"],
source: "newMapEditorWorldWithLibrairies: libsIndexes map: aMapIndex\x0a\x09\x22newMapEditorWorldWithLibrairies: #(#(1 3 5) #(2 6)) map: 2\x22\x0a\x09^self new\x0a\x09\x09initializeWithLibrairies: libsIndexes map: aMapIndex;\x0a\x09\x09yourself.",
messageSends: ["initializeWithLibrairies:map:", "yourself", "new"],
referencedClasses: []
}),
smalltalk.World.klass);


smalltalk.addClass('XMLhttpRequestProxy', smalltalk.Object, ['xmlhttpRequest'], 'Easnoth-BootStrap');
smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function () {
    var self = this;
    var xmlhttpRequestTemp = nil;
    smalltalk.send(self, "_initialize", [], smalltalk.XMLhttpRequestProxy.superclass || nil);
    xmlhttpRequestTemp = new XMLHttpRequest;
    smalltalk.send(self, "_xmlhttpRequest_", [xmlhttpRequestTemp]);
    return self;
},
args: [],
source: "initialize\x0a\x09|xmlhttpRequestTemp|\x0a\x09super initialize.\x0a\x09xmlhttpRequestTemp := <new XMLHttpRequest()>. \x22if IE new ActiveXObject('Microsoft.XMLHTTP')\x22\x0a\x09self xmlhttpRequest: xmlhttpRequestTemp.",
messageSends: ["initialize", "xmlhttpRequest:"],
referencedClasses: []
}),
smalltalk.XMLhttpRequestProxy);

smalltalk.addMethod(
"_loadXML_",
smalltalk.method({
selector: "loadXML:",
category: 'initialize-release',
fn: function (fileName) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_open_fileName_arg_", ["GET", fileName, false]);return smalltalk.send($rec, "_send", []);}(smalltalk.send(self, "_xmlhttpRequest", [])));
    return smalltalk.send(smalltalk.send(self, "_xmlhttpRequest", []), "_responseText", []);
    return self;
},
args: ["fileName"],
source: "loadXML: fileName\x0a\x0a\x09self xmlhttpRequest open: 'GET'\x0a\x09\x09\x09\x09\x09fileName: fileName\x0a\x09\x09\x09\x09\x09arg: false;\x0a\x09\x09\x09\x09\x09send.\x0a\x09^self xmlhttpRequest responseText",
messageSends: ["open:fileName:arg:", "send", "xmlhttpRequest", "responseText"],
referencedClasses: []
}),
smalltalk.XMLhttpRequestProxy);

smalltalk.addMethod(
"_xmlhttpRequest",
smalltalk.method({
selector: "xmlhttpRequest",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@xmlhttpRequest'];
    return self;
},
args: [],
source: "xmlhttpRequest\x0a\x09^xmlhttpRequest",
messageSends: [],
referencedClasses: []
}),
smalltalk.XMLhttpRequestProxy);

smalltalk.addMethod(
"_xmlhttpRequest_",
smalltalk.method({
selector: "xmlhttpRequest:",
category: 'accessing',
fn: function (anObject) {
    var self = this;
    self['@xmlhttpRequest'] = anObject;
    return self;
},
args: ["anObject"],
source: "xmlhttpRequest: anObject\x0a\x09xmlhttpRequest := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.XMLhttpRequestProxy);



smalltalk.addMethod(
"_atIndex_",
smalltalk.method({
selector: "atIndex:",
category: '*Easnoth-BootStrap',
fn: function (anIndex) {
    var self = this;
    return smalltalk.send(self, "_atLibrary_atIndex_", [smalltalk.send(anIndex, "_at_", [1]), smalltalk.send(anIndex, "_at_", [2])]);
    return self;
},
args: ["anIndex"],
source: "atIndex: anIndex\x0a\x09^self atLibrary: (anIndex at: 1) atIndex: (anIndex at: 2) ",
messageSends: ["atLibrary:atIndex:", "at:"],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
"_atIndex_put_",
smalltalk.method({
selector: "atIndex:put:",
category: '*Easnoth-BootStrap',
fn: function (anIndex, anImage) {
    var self = this;
    return smalltalk.send(self, "_atLibrary_atIndex_put_", [smalltalk.send(anIndex, "_at_", [1]), smalltalk.send(anIndex, "_at_", [2]), anImage]);
    return self;
},
args: ["anIndex", "anImage"],
source: "atIndex: anIndex put: anImage\x0a\x09^self atLibrary: (anIndex at: 1) atIndex: (anIndex at: 2) put: anImage",
messageSends: ["atLibrary:atIndex:put:", "at:"],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
"_atLibrary_",
smalltalk.method({
selector: "atLibrary:",
category: '*Easnoth-BootStrap',
fn: function (aLibIndex) {
    var self = this;
    return smalltalk.send(self, "_at_", [aLibIndex]);
    return self;
},
args: ["aLibIndex"],
source: "atLibrary: aLibIndex\x0a\x09^self at: aLibIndex",
messageSends: ["at:"],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
"_atLibrary_atIndex_",
smalltalk.method({
selector: "atLibrary:atIndex:",
category: '*Easnoth-BootStrap',
fn: function (aLibIndex, anIndex) {
    var self = this;
    return smalltalk.send(smalltalk.send(self, "_at_", [aLibIndex]), "_at_", [anIndex]);
    return self;
},
args: ["aLibIndex", "anIndex"],
source: "atLibrary: aLibIndex atIndex: anIndex\x0a\x09^(self at: aLibIndex) at: anIndex",
messageSends: ["at:"],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
"_atLibrary_atIndex_put_",
smalltalk.method({
selector: "atLibrary:atIndex:put:",
category: '*Easnoth-BootStrap',
fn: function (aLibIndex, anIndex, anImage) {
    var self = this;
    return smalltalk.send(smalltalk.send(self, "_at_", [aLibIndex]), "_at_put_", [anIndex, anImage]);
    return self;
},
args: ["aLibIndex", "anIndex", "anImage"],
source: "atLibrary: aLibIndex atIndex: anIndex put: anImage\x0a\x09^(self at: aLibIndex) at: anIndex put: anImage",
messageSends: ["at:put:", "at:"],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
"_loadLibrary_",
smalltalk.method({
selector: "loadLibrary:",
category: '*Easnoth-BootStrap',
fn: function (aLibrary) {
    var self = this;
    var tempImg = nil;
    var loaded = nil;
    loaded = 1;
    smalltalk.send(self, "_at_put_", [smalltalk.send(aLibrary, "_index", []), smalltalk.send(smalltalk.Array || Array, "_new_", [smalltalk.send(smalltalk.send(aLibrary, "_srcArray", []), "_size", [])])]);
    smalltalk.send(smalltalk.send(aLibrary, "_srcArray", []), "_withIndexDo_", [function (src, i) {tempImg = new Image;smalltalk.send(smalltalk.send(self, "_at_", [smalltalk.send(aLibrary, "_index", [])]), "_at_put_", [i, tempImg]);smalltalk.send(smalltalk.send(smalltalk.send(self, "_at_", [smalltalk.send(aLibrary, "_index", [])]), "_at_", [i]), "_at_put_", ["onload", function () {loaded = ($receiver = loaded).klass === smalltalk.Number ? $receiver + 1 : smalltalk.send($receiver, "__plus", [1]);return ($receiver = smalltalk.send(smalltalk.send(smalltalk.send(aLibrary, "_srcArray", []), "_size", []), "__eq", [loaded])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(smalltalk.send(aLibrary, "_onload", []), "_value", []);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return smalltalk.send(smalltalk.send(aLibrary, "_onload", []), "_value", []);}]);}]);return smalltalk.send(smalltalk.send(smalltalk.send(self, "_at_", [smalltalk.send(aLibrary, "_index", [])]), "_at_", [i]), "_at_put_", ["src", smalltalk.send(smalltalk.send(aLibrary, "_path", []), "__comma", [src])]);}]);
    return self;
},
args: ["aLibrary"],
source: "loadLibrary: aLibrary\x0a\x09\x22load library from Class Easnoth-BootStrap >> LibraryInfo; then execute onload from LibraryInfo instance\x22\x0a\x0a\x09|tempImg loaded|\x0a\x0a\x09loaded := 1.\x0a\x09self at: aLibrary index put: (Array new: aLibrary srcArray size).\x0a\x0a\x09aLibrary srcArray withIndexDo: [ :src :i |\x0a\x09\x09tempImg := <new Image()>.\x0a\x09\x09(self at: aLibrary index) at: i put: tempImg.\x0a\x09\x09((self at: aLibrary index) at: i) at: 'onload' put: [\x0a\x09\x09\x09loaded := loaded + 1. \x0a\x09\x09\x09aLibrary srcArray size = loaded ifTrue:[aLibrary onload value] \x0a\x09\x09].\x0a\x09\x09((self at: aLibrary index) at: i) at: 'src' put: aLibrary path,src. \x0a\x09].",
messageSends: ["at:put:", "index", "new:", "size", "srcArray", "withIndexDo:", "at:", "+", "ifTrue:", "=", "value", "onload", ",", "path"],
referencedClasses: ["Array"]
}),
smalltalk.Array);

smalltalk.addMethod(
"_parseMapXML_",
smalltalk.method({
selector: "parseMapXML:",
category: '*Easnoth-BootStrap',
fn: function (aPath) {
    var self = this;
    var xmlDoc = nil;
    var mapArray = nil;
    var rowArray = nil;
    var cellArray = nil;
    xmlDoc = smalltalk.send(smalltalk.send(smalltalk.XMLhttpRequestProxy || XMLhttpRequestProxy, "_new", []), "_loadXML_", [aPath]);
    rowArray = smalltalk.send(xmlDoc, "_getElementsByTagName_", ["row"]);
    mapArray = smalltalk.send(self, "_new_", [smalltalk.send(rowArray, "_length", [])]);
    smalltalk.send(0, "_to_do_", [($receiver = smalltalk.send(rowArray, "_length", [])).klass === smalltalk.Number ? $receiver - 1 : smalltalk.send($receiver, "__minus", [1]), function (i) {cellArray = smalltalk.send(smalltalk.send(rowArray, "_at_", [i]), "_getElementsByTagName_", ["cell"]);smalltalk.send(mapArray, "_at_put_", [($receiver = i).klass === smalltalk.Number ? $receiver + 1 : smalltalk.send($receiver, "__plus", [1]), smalltalk.send(self, "_new_", [smalltalk.send(cellArray, "_length", [])])]);return smalltalk.send(0, "_to_do_", [($receiver = smalltalk.send(cellArray, "_length", [])).klass === smalltalk.Number ? $receiver - 1 : smalltalk.send($receiver, "__minus", [1]), function (j) {smalltalk.send(smalltalk.send(mapArray, "_at_", [($receiver = i).klass === smalltalk.Number ? $receiver + 1 : smalltalk.send($receiver, "__plus", [1])]), "_at_put_", [($receiver = j).klass === smalltalk.Number ? $receiver + 1 : smalltalk.send($receiver, "__plus", [1]), smalltalk.send(self, "_new_", [8])]);return smalltalk.send(smalltalk.send(smalltalk.send(mapArray, "_at_", [($receiver = i).klass === smalltalk.Number ? $receiver + 1 : smalltalk.send($receiver, "__plus", [1])]), "_at_", [($receiver = j).klass === smalltalk.Number ? $receiver + 1 : smalltalk.send($receiver, "__plus", [1])]), "_at_put_", [1, smalltalk.send(smalltalk.Array || Array, "_setupIndex_", [smalltalk.send(smalltalk.send(smalltalk.send(cellArray, "_at_", [j]), "_getElementsByTagName_", ["tile"]), "_at_", [0])])]);}]);}]);
    return mapArray;
    return self;
},
args: ["aPath"],
source: "parseMapXML: aPath\x0a\x09\x22get an xml map and parse it\x22\x0a\x09\x22 nodes are map>>row>>cell>>tile>>text\x22\x0a\x0a\x09|xmlDoc mapArray rowArray cellArray|\x0a\x09xmlDoc := XMLhttpRequestProxy new loadXML: aPath.\x0a\x09rowArray := xmlDoc getElementsByTagName: 'row'.\x0a\x09mapArray := self new: rowArray length.\x0a\x09\x0a\x09\x22fonctionne !! attention les index commencent a 0 ici\x22\x0a\x09\x22Transcript cr;\x0a\x09\x09show: 'result : ';\x0a\x09\x09show: (((((xmlDoc getElementsByTagName: 'row') at: 0) childNodes at: 1) childNodes at: 1) childNodes at: 0) nodeValue;\x0a\x09\x09cr;\x0a\x09\x09show: 'row : ';\x0a\x09\x09show: ((xmlDoc getElementsByTagName: 'row') at: 2) nodeName;\x0a\x09\x09cr;\x0a\x09\x09show: 'cell : ';\x0a\x09\x09show: (((xmlDoc getElementsByTagName: 'row') at: 2) childNodes at: 1) nodeName;\x0a\x09\x09cr;\x0a\x09\x09show: 'tile : ';\x0a\x09\x09show: ((((xmlDoc getElementsByTagName: 'row') at: 0) childNodes at: 1) childNodes at: 1) nodeName;\x0a\x09\x09cr;\x09\x0a\x09\x09show: 'text : ';\x0a\x09\x09show: (((((xmlDoc getElementsByTagName: 'row') at: 0) childNodes at: 1) childNodes at: 1) childNodes at: 0) nodeName;\x0a\x09\x09cr;\x0a\x09\x09show: (xmlDoc getElementsByTagName: 'row') length.\x22\x0a\x09\x0a\x090 to: (rowArray length - 1) do: [ :i |\x0a\x09\x09cellArray := (rowArray at: i) getElementsByTagName: 'cell'.\x0a\x09\x09mapArray at: (i+1) put: (self new: cellArray length).\x0a\x09\x09\x0a\x09\x090 to: (cellArray length - 1) do: [ :j |\x0a\x09\x09\x09(mapArray at: (i+1)) at: (j+1) put: (self new: 8).\x0a\x0a\x09\x09\x09((mapArray at: (i+1)) at: (j+1)) at: 1 put: (Array setupIndex: (((cellArray at: j) getElementsByTagName: 'tile') at: 0)) .\x0a\x09\x09\x09\x22other arrays\x22\x0a\x09\x09].\x0a\x09].\x0a\x0a\x09^mapArray",
messageSends: ["loadXML:", "new", "getElementsByTagName:", "new:", "length", "to:do:", "-", "at:", "at:put:", "+", "setupIndex:"],
referencedClasses: ["XMLhttpRequestProxy", "Array"]
}),
smalltalk.Array.klass);

smalltalk.addMethod(
"_setupIndex_",
smalltalk.method({
selector: "setupIndex:",
category: '*Easnoth-BootStrap',
fn: function (aXMLDocument) {
    var self = this;
    var rowSplit = nil;
    var array = nil;
    rowSplit = smalltalk.send(smalltalk.send(smalltalk.send(aXMLDocument, "_childNodes", []), "_at_", [0]), "_nodeValue", []);
    rowSplit = smalltalk.send(rowSplit, "_tokenize_", [","]);
    array = smalltalk.send(self, "_new_", [2]);
    smalltalk.send(array, "_at_put_", [1, smalltalk.send(rowSplit, "_at_", [1])]);
    smalltalk.send(array, "_at_put_", [2, smalltalk.send(rowSplit, "_at_", [2])]);
    return array;
    return self;
},
args: ["aXMLDocument"],
source: "setupIndex: aXMLDocument\x0a\x09|rowSplit array|\x0a\x09rowSplit := (aXMLDocument childNodes at: 0) nodeValue.\x0a\x09rowSplit := rowSplit tokenize: ','.\x0a\x09array := self new: 2.\x0a\x09array at: 1 put: (rowSplit at: 1).\x0a\x09array at: 2 put: (rowSplit at: 2).\x0a\x09^array",
messageSends: ["nodeValue", "at:", "childNodes", "tokenize:", "new:", "at:put:"],
referencedClasses: []
}),
smalltalk.Array.klass);

smalltalk.addMethod(
"_atIndex_",
smalltalk.method({
selector: "atIndex:",
category: '*Easnoth-BootStrap',
fn: function (anIndex) {
    var self = this;
    return smalltalk.send(self, "_atLibrary_atIndex_", [smalltalk.send(anIndex, "_at_", [1]), smalltalk.send(anIndex, "_at_", [2])]);
    return self;
},
args: ["anIndex"],
source: "atIndex: anIndex\x0a\x09^self atLibrary: (anIndex at: 1) atIndex: (anIndex at: 2) ",
messageSends: ["atLibrary:atIndex:", "at:"],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
"_atIndex_put_",
smalltalk.method({
selector: "atIndex:put:",
category: '*Easnoth-BootStrap',
fn: function (anIndex, anImage) {
    var self = this;
    return smalltalk.send(self, "_atLibrary_atIndex_put_", [smalltalk.send(anIndex, "_at_", [1]), smalltalk.send(anIndex, "_at_", [2]), anImage]);
    return self;
},
args: ["anIndex", "anImage"],
source: "atIndex: anIndex put: anImage\x0a\x09^self atLibrary: (anIndex at: 1) atIndex: (anIndex at: 2) put: anImage",
messageSends: ["atLibrary:atIndex:put:", "at:"],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
"_atLibrary_",
smalltalk.method({
selector: "atLibrary:",
category: '*Easnoth-BootStrap',
fn: function (aLibIndex) {
    var self = this;
    return smalltalk.send(self, "_at_", [aLibIndex]);
    return self;
},
args: ["aLibIndex"],
source: "atLibrary: aLibIndex\x0a\x09^self at: aLibIndex",
messageSends: ["at:"],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
"_atLibrary_atIndex_",
smalltalk.method({
selector: "atLibrary:atIndex:",
category: '*Easnoth-BootStrap',
fn: function (aLibIndex, anIndex) {
    var self = this;
    return smalltalk.send(smalltalk.send(self, "_at_", [aLibIndex]), "_at_", [anIndex]);
    return self;
},
args: ["aLibIndex", "anIndex"],
source: "atLibrary: aLibIndex atIndex: anIndex\x0a\x09^(self at: aLibIndex) at: anIndex",
messageSends: ["at:"],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
"_atLibrary_atIndex_put_",
smalltalk.method({
selector: "atLibrary:atIndex:put:",
category: '*Easnoth-BootStrap',
fn: function (aLibIndex, anIndex, anImage) {
    var self = this;
    return smalltalk.send(smalltalk.send(self, "_at_", [aLibIndex]), "_at_put_", [anIndex, anImage]);
    return self;
},
args: ["aLibIndex", "anIndex", "anImage"],
source: "atLibrary: aLibIndex atIndex: anIndex put: anImage\x0a\x09^(self at: aLibIndex) at: anIndex put: anImage",
messageSends: ["at:put:", "at:"],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
"_loadLibrary_",
smalltalk.method({
selector: "loadLibrary:",
category: '*Easnoth-BootStrap',
fn: function (aLibrary) {
    var self = this;
    var tempImg = nil;
    var loaded = nil;
    loaded = 1;
    smalltalk.send(self, "_at_put_", [smalltalk.send(aLibrary, "_index", []), smalltalk.send(smalltalk.Array || Array, "_new_", [smalltalk.send(smalltalk.send(aLibrary, "_srcArray", []), "_size", [])])]);
    smalltalk.send(smalltalk.send(aLibrary, "_srcArray", []), "_withIndexDo_", [function (src, i) {tempImg = new Image;smalltalk.send(smalltalk.send(self, "_at_", [smalltalk.send(aLibrary, "_index", [])]), "_at_put_", [i, tempImg]);smalltalk.send(smalltalk.send(smalltalk.send(self, "_at_", [smalltalk.send(aLibrary, "_index", [])]), "_at_", [i]), "_at_put_", ["onload", function () {loaded = ($receiver = loaded).klass === smalltalk.Number ? $receiver + 1 : smalltalk.send($receiver, "__plus", [1]);return ($receiver = smalltalk.send(smalltalk.send(smalltalk.send(aLibrary, "_srcArray", []), "_size", []), "__eq", [loaded])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(smalltalk.send(aLibrary, "_onload", []), "_value", []);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return smalltalk.send(smalltalk.send(aLibrary, "_onload", []), "_value", []);}]);}]);return smalltalk.send(smalltalk.send(smalltalk.send(self, "_at_", [smalltalk.send(aLibrary, "_index", [])]), "_at_", [i]), "_at_put_", ["src", smalltalk.send(smalltalk.send(aLibrary, "_path", []), "__comma", [src])]);}]);
    return self;
},
args: ["aLibrary"],
source: "loadLibrary: aLibrary\x0a\x09\x22load library from Class Easnoth-BootStrap >> LibraryInfo; then execute onload from LibraryInfo instance\x22\x0a\x0a\x09|tempImg loaded|\x0a\x0a\x09loaded := 1.\x0a\x09self at: aLibrary index put: (Array new: aLibrary srcArray size).\x0a\x0a\x09aLibrary srcArray withIndexDo: [ :src :i |\x0a\x09\x09tempImg := <new Image()>.\x0a\x09\x09(self at: aLibrary index) at: i put: tempImg.\x0a\x09\x09((self at: aLibrary index) at: i) at: 'onload' put: [\x0a\x09\x09\x09loaded := loaded + 1. \x0a\x09\x09\x09aLibrary srcArray size = loaded ifTrue:[aLibrary onload value] \x0a\x09\x09].\x0a\x09\x09((self at: aLibrary index) at: i) at: 'src' put: aLibrary path,src. \x0a\x09].",
messageSends: ["at:put:", "index", "new:", "size", "srcArray", "withIndexDo:", "at:", "+", "ifTrue:", "=", "value", "onload", ",", "path"],
referencedClasses: ["Array"]
}),
smalltalk.Array);

smalltalk.addMethod(
"_parseMapXML_",
smalltalk.method({
selector: "parseMapXML:",
category: '*Easnoth-BootStrap',
fn: function (aPath) {
    var self = this;
    var xmlDoc = nil;
    var mapArray = nil;
    var rowArray = nil;
    var cellArray = nil;
    xmlDoc = smalltalk.send(smalltalk.send(smalltalk.XMLhttpRequestProxy || XMLhttpRequestProxy, "_new", []), "_loadXML_", [aPath]);
    rowArray = smalltalk.send(xmlDoc, "_getElementsByTagName_", ["row"]);
    mapArray = smalltalk.send(self, "_new_", [smalltalk.send(rowArray, "_length", [])]);
    smalltalk.send(0, "_to_do_", [($receiver = smalltalk.send(rowArray, "_length", [])).klass === smalltalk.Number ? $receiver - 1 : smalltalk.send($receiver, "__minus", [1]), function (i) {cellArray = smalltalk.send(smalltalk.send(rowArray, "_at_", [i]), "_getElementsByTagName_", ["cell"]);smalltalk.send(mapArray, "_at_put_", [($receiver = i).klass === smalltalk.Number ? $receiver + 1 : smalltalk.send($receiver, "__plus", [1]), smalltalk.send(self, "_new_", [smalltalk.send(cellArray, "_length", [])])]);return smalltalk.send(0, "_to_do_", [($receiver = smalltalk.send(cellArray, "_length", [])).klass === smalltalk.Number ? $receiver - 1 : smalltalk.send($receiver, "__minus", [1]), function (j) {smalltalk.send(smalltalk.send(mapArray, "_at_", [($receiver = i).klass === smalltalk.Number ? $receiver + 1 : smalltalk.send($receiver, "__plus", [1])]), "_at_put_", [($receiver = j).klass === smalltalk.Number ? $receiver + 1 : smalltalk.send($receiver, "__plus", [1]), smalltalk.send(self, "_new_", [8])]);return smalltalk.send(smalltalk.send(smalltalk.send(mapArray, "_at_", [($receiver = i).klass === smalltalk.Number ? $receiver + 1 : smalltalk.send($receiver, "__plus", [1])]), "_at_", [($receiver = j).klass === smalltalk.Number ? $receiver + 1 : smalltalk.send($receiver, "__plus", [1])]), "_at_put_", [1, smalltalk.send(smalltalk.Array || Array, "_setupIndex_", [smalltalk.send(smalltalk.send(smalltalk.send(cellArray, "_at_", [j]), "_getElementsByTagName_", ["tile"]), "_at_", [0])])]);}]);}]);
    return mapArray;
    return self;
},
args: ["aPath"],
source: "parseMapXML: aPath\x0a\x09\x22get an xml map and parse it\x22\x0a\x09\x22 nodes are map>>row>>cell>>tile>>text\x22\x0a\x0a\x09|xmlDoc mapArray rowArray cellArray|\x0a\x09xmlDoc := XMLhttpRequestProxy new loadXML: aPath.\x0a\x09rowArray := xmlDoc getElementsByTagName: 'row'.\x0a\x09mapArray := self new: rowArray length.\x0a\x09\x0a\x09\x22fonctionne !! attention les index commencent a 0 ici\x22\x0a\x09\x22Transcript cr;\x0a\x09\x09show: 'result : ';\x0a\x09\x09show: (((((xmlDoc getElementsByTagName: 'row') at: 0) childNodes at: 1) childNodes at: 1) childNodes at: 0) nodeValue;\x0a\x09\x09cr;\x0a\x09\x09show: 'row : ';\x0a\x09\x09show: ((xmlDoc getElementsByTagName: 'row') at: 2) nodeName;\x0a\x09\x09cr;\x0a\x09\x09show: 'cell : ';\x0a\x09\x09show: (((xmlDoc getElementsByTagName: 'row') at: 2) childNodes at: 1) nodeName;\x0a\x09\x09cr;\x0a\x09\x09show: 'tile : ';\x0a\x09\x09show: ((((xmlDoc getElementsByTagName: 'row') at: 0) childNodes at: 1) childNodes at: 1) nodeName;\x0a\x09\x09cr;\x09\x0a\x09\x09show: 'text : ';\x0a\x09\x09show: (((((xmlDoc getElementsByTagName: 'row') at: 0) childNodes at: 1) childNodes at: 1) childNodes at: 0) nodeName;\x0a\x09\x09cr;\x0a\x09\x09show: (xmlDoc getElementsByTagName: 'row') length.\x22\x0a\x09\x0a\x090 to: (rowArray length - 1) do: [ :i |\x0a\x09\x09cellArray := (rowArray at: i) getElementsByTagName: 'cell'.\x0a\x09\x09mapArray at: (i+1) put: (self new: cellArray length).\x0a\x09\x09\x0a\x09\x090 to: (cellArray length - 1) do: [ :j |\x0a\x09\x09\x09(mapArray at: (i+1)) at: (j+1) put: (self new: 8).\x0a\x0a\x09\x09\x09((mapArray at: (i+1)) at: (j+1)) at: 1 put: (Array setupIndex: (((cellArray at: j) getElementsByTagName: 'tile') at: 0)) .\x0a\x09\x09\x09\x22other arrays\x22\x0a\x09\x09].\x0a\x09].\x0a\x0a\x09^mapArray",
messageSends: ["loadXML:", "new", "getElementsByTagName:", "new:", "length", "to:do:", "-", "at:", "at:put:", "+", "setupIndex:"],
referencedClasses: ["XMLhttpRequestProxy", "Array"]
}),
smalltalk.Array.klass);

smalltalk.addMethod(
"_setupIndex_",
smalltalk.method({
selector: "setupIndex:",
category: '*Easnoth-BootStrap',
fn: function (aXMLDocument) {
    var self = this;
    var rowSplit = nil;
    var array = nil;
    rowSplit = smalltalk.send(smalltalk.send(smalltalk.send(aXMLDocument, "_childNodes", []), "_at_", [0]), "_nodeValue", []);
    rowSplit = smalltalk.send(rowSplit, "_tokenize_", [","]);
    array = smalltalk.send(self, "_new_", [2]);
    smalltalk.send(array, "_at_put_", [1, smalltalk.send(rowSplit, "_at_", [1])]);
    smalltalk.send(array, "_at_put_", [2, smalltalk.send(rowSplit, "_at_", [2])]);
    return array;
    return self;
},
args: ["aXMLDocument"],
source: "setupIndex: aXMLDocument\x0a\x09|rowSplit array|\x0a\x09rowSplit := (aXMLDocument childNodes at: 0) nodeValue.\x0a\x09rowSplit := rowSplit tokenize: ','.\x0a\x09array := self new: 2.\x0a\x09array at: 1 put: (rowSplit at: 1).\x0a\x09array at: 2 put: (rowSplit at: 2).\x0a\x09^array",
messageSends: ["nodeValue", "at:", "childNodes", "tokenize:", "new:", "at:put:"],
referencedClasses: []
}),
smalltalk.Array.klass);

