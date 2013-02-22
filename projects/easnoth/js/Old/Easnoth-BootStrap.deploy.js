smalltalk.addPackage('Easnoth-BootStrap', {});
smalltalk.addClass('ImageDictionary', smalltalk.Dictionary, ['onload'], 'Easnoth-BootStrap');
smalltalk.addMethod(
"_isLoaded",
smalltalk.method({
selector: "isLoaded",
fn: function () {
    var self = this;
    var loaded = nil;
    loaded = true;
    smalltalk.send(self, "_collect_", [function (each) {return loaded = smalltalk.send(loaded, "_&", [smalltalk.send(each, "_at_", ["complete"])]);}]);
    ($receiver = loaded).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(smalltalk.send(self, "_onload", []), "_value", []);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return smalltalk.send(smalltalk.send(self, "_onload", []), "_value", []);}]);
    return self;
}
}),
smalltalk.ImageDictionary);

smalltalk.addMethod(
"_onload",
smalltalk.method({
selector: "onload",
fn: function () {
    var self = this;
    return self['@onload'];
    return self;
}
}),
smalltalk.ImageDictionary);

smalltalk.addMethod(
"_onload_",
smalltalk.method({
selector: "onload:",
fn: function (aBlock) {
    var self = this;
    self['@onload'] = aBlock;
    return self;
}
}),
smalltalk.ImageDictionary);



smalltalk.addClass('LibraryInfos', smalltalk.Object, ['index', 'path', 'srcArray', 'onload'], 'Easnoth-BootStrap');
smalltalk.addMethod(
"_index",
smalltalk.method({
selector: "index",
fn: function () {
    var self = this;
    return self['@index'];
    return self;
}
}),
smalltalk.LibraryInfos);

smalltalk.addMethod(
"_index_",
smalltalk.method({
selector: "index:",
fn: function (anInteger) {
    var self = this;
    self['@index'] = anInteger;
    return self;
}
}),
smalltalk.LibraryInfos);

smalltalk.addMethod(
"_load_",
smalltalk.method({
selector: "load:",
fn: function (anArray) {
    var self = this;
    smalltalk.send(anArray, "_loadLibrary_", [self]);
    return self;
}
}),
smalltalk.LibraryInfos);

smalltalk.addMethod(
"_onload",
smalltalk.method({
selector: "onload",
fn: function () {
    var self = this;
    return self['@onload'];
    return self;
}
}),
smalltalk.LibraryInfos);

smalltalk.addMethod(
"_onload_",
smalltalk.method({
selector: "onload:",
fn: function (aBlock) {
    var self = this;
    self['@onload'] = aBlock;
    return self;
}
}),
smalltalk.LibraryInfos);

smalltalk.addMethod(
"_path",
smalltalk.method({
selector: "path",
fn: function () {
    var self = this;
    return self['@path'];
    return self;
}
}),
smalltalk.LibraryInfos);

smalltalk.addMethod(
"_path_",
smalltalk.method({
selector: "path:",
fn: function (aString) {
    var self = this;
    self['@path'] = aString;
    return self;
}
}),
smalltalk.LibraryInfos);

smalltalk.addMethod(
"_srcArray",
smalltalk.method({
selector: "srcArray",
fn: function () {
    var self = this;
    return self['@srcArray'];
    return self;
}
}),
smalltalk.LibraryInfos);

smalltalk.addMethod(
"_srcArray_",
smalltalk.method({
selector: "srcArray:",
fn: function (anArray) {
    var self = this;
    self['@srcArray'] = anArray;
    return self;
}
}),
smalltalk.LibraryInfos);



smalltalk.addClass('Resource', smalltalk.Object, ['world', 'mapArray', 'tileImg', 'overTileImg', 'monsterImg', 'buildingImg'], 'Easnoth-BootStrap');
smalltalk.addMethod(
"_buildingImg",
smalltalk.method({
selector: "buildingImg",
fn: function () {
    var self = this;
    return self['@buildingImg'];
    return self;
}
}),
smalltalk.Resource);

smalltalk.addMethod(
"_buildingImg_",
smalltalk.method({
selector: "buildingImg:",
fn: function (anArray) {
    var self = this;
    self['@buildingImg'] = anArray;
    return self;
}
}),
smalltalk.Resource);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
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
}
}),
smalltalk.Resource);

smalltalk.addMethod(
"_initializeWithLibrairies_map_",
smalltalk.method({
selector: "initializeWithLibrairies:map:",
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
}
}),
smalltalk.Resource);

smalltalk.addMethod(
"_loadBackgroundLibrairies_",
smalltalk.method({
selector: "loadBackgroundLibrairies:",
fn: function (backgroundLibsIndexes) {
    var self = this;
    smalltalk.send(backgroundLibsIndexes, "_do_", [function (libIndex) {(function ($rec) {smalltalk.send($rec, "_index_", [libIndex]);smalltalk.send($rec, "_path_", ["ressources/images/tiles/"]);smalltalk.send($rec, "_srcArray_", [["road.png", "dirt.png"]]);smalltalk.send($rec, "_onload_", [function () {return smalltalk.send(self, "_onload", []);}]);return smalltalk.send($rec, "_load_", [self['@tileImg']]);}(smalltalk.send(smalltalk.LibraryInfos || LibraryInfos, "_new", [])));(function ($rec) {smalltalk.send($rec, "_index_", [libIndex]);smalltalk.send($rec, "_path_", ["ressources/images/overtiles/"]);smalltalk.send($rec, "_srcArray_", [["road-n.png", "road-ne.png"]]);smalltalk.send($rec, "_onload_", [function () {return smalltalk.send(self, "_onload", []);}]);return smalltalk.send($rec, "_load_", [self['@overTileImg']]);}(smalltalk.send(smalltalk.LibraryInfos || LibraryInfos, "_new", [])));return function ($rec) {smalltalk.send($rec, "_index_", [libIndex]);smalltalk.send($rec, "_path_", ["ressources/images/buildings/"]);smalltalk.send($rec, "_srcArray_", [["house.png"]]);smalltalk.send($rec, "_onload_", [function () {return smalltalk.send(self, "_onload", []);}]);return smalltalk.send($rec, "_load_", [self['@buildingImg']]);}(smalltalk.send(smalltalk.LibraryInfos || LibraryInfos, "_new", []));}]);
    return self;
}
}),
smalltalk.Resource);

smalltalk.addMethod(
"_loadMonsterLibrairies_",
smalltalk.method({
selector: "loadMonsterLibrairies:",
fn: function (monsterLibsIndexes) {
    var self = this;
    smalltalk.send(monsterLibsIndexes, "_do_", [function (libIndex) {return function ($rec) {smalltalk.send($rec, "_index_", [libIndex]);smalltalk.send($rec, "_path_", ["ressources/images/monsters/"]);smalltalk.send($rec, "_srcArray_", [["paladin.png", "shyde.png"]]);smalltalk.send($rec, "_onload_", [function () {return smalltalk.send(self, "_onload", []);}]);return smalltalk.send($rec, "_load_", [self['@monsterImg']]);}(smalltalk.send(smalltalk.LibraryInfos || LibraryInfos, "_new", []));}]);
    return self;
}
}),
smalltalk.Resource);

smalltalk.addMethod(
"_mapArray",
smalltalk.method({
selector: "mapArray",
fn: function () {
    var self = this;
    return self['@mapArray'];
    return self;
}
}),
smalltalk.Resource);

smalltalk.addMethod(
"_mapArray_",
smalltalk.method({
selector: "mapArray:",
fn: function (aMapArray) {
    var self = this;
    self['@mapArray'] = aMapArray;
    return self;
}
}),
smalltalk.Resource);

smalltalk.addMethod(
"_monsterImg",
smalltalk.method({
selector: "monsterImg",
fn: function () {
    var self = this;
    return self['@monsterImg'];
    return self;
}
}),
smalltalk.Resource);

smalltalk.addMethod(
"_monsterImg_",
smalltalk.method({
selector: "monsterImg:",
fn: function (anArray) {
    var self = this;
    self['@monsterImg'] = anArray;
    return self;
}
}),
smalltalk.Resource);

smalltalk.addMethod(
"_numberOfBackgroundLibraries",
smalltalk.method({
selector: "numberOfBackgroundLibraries",
fn: function () {
    var self = this;
    return 5;
    return self;
}
}),
smalltalk.Resource);

smalltalk.addMethod(
"_numberOfMonsterLibraries",
smalltalk.method({
selector: "numberOfMonsterLibraries",
fn: function () {
    var self = this;
    return 5;
    return self;
}
}),
smalltalk.Resource);

smalltalk.addMethod(
"_onload",
smalltalk.method({
selector: "onload",
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_world", []), "_increaseLoadingProcess", []);
    return self;
}
}),
smalltalk.Resource);

smalltalk.addMethod(
"_overTileImg",
smalltalk.method({
selector: "overTileImg",
fn: function () {
    var self = this;
    return self['@overTileImg'];
    return self;
}
}),
smalltalk.Resource);

smalltalk.addMethod(
"_overTileImg_",
smalltalk.method({
selector: "overTileImg:",
fn: function (anArray) {
    var self = this;
    self['@overTileImg'] = anArray;
    return self;
}
}),
smalltalk.Resource);

smalltalk.addMethod(
"_tileImg",
smalltalk.method({
selector: "tileImg",
fn: function () {
    var self = this;
    return self['@tileImg'];
    return self;
}
}),
smalltalk.Resource);

smalltalk.addMethod(
"_tileImg_",
smalltalk.method({
selector: "tileImg:",
fn: function (anArray) {
    var self = this;
    self['@tileImg'] = anArray;
    return self;
}
}),
smalltalk.Resource);

smalltalk.addMethod(
"_world",
smalltalk.method({
selector: "world",
fn: function () {
    var self = this;
    return self['@world'];
    return self;
}
}),
smalltalk.Resource);

smalltalk.addMethod(
"_world_",
smalltalk.method({
selector: "world:",
fn: function (aWorld) {
    var self = this;
    self['@world'] = aWorld;
    return self;
}
}),
smalltalk.Resource);


smalltalk.addMethod(
"_newWithLibrairies_map_world_",
smalltalk.method({
selector: "newWithLibrairies:map:world:",
fn: function (libsIndexes, aMapIndex, aWorld) {
    var self = this;
    return function ($rec) {smalltalk.send($rec, "_world_", [aWorld]);smalltalk.send($rec, "_initializeWithLibrairies_map_", [libsIndexes, aMapIndex]);return smalltalk.send($rec, "_yourself", []);}(smalltalk.send(self, "_new", []));
    return self;
}
}),
smalltalk.Resource.klass);


smalltalk.addClass('World', smalltalk.Object, ['resource', 'map', 'eventManager', 'loaded', 'totalToLoad'], 'Easnoth-BootStrap');
smalltalk.addMethod(
"_eventManager",
smalltalk.method({
selector: "eventManager",
fn: function () {
    var self = this;
    return self['@eventManager'];
    return self;
}
}),
smalltalk.World);

smalltalk.addMethod(
"_eventManager_",
smalltalk.method({
selector: "eventManager:",
fn: function (anEventManager) {
    var self = this;
    self['@eventManager'] = anEventManager;
    return self;
}
}),
smalltalk.World);

smalltalk.addMethod(
"_increaseLoadingProcess",
smalltalk.method({
selector: "increaseLoadingProcess",
fn: function () {
    var self = this;
    smalltalk.send(self, "_loaded_", [($receiver = smalltalk.send(self, "_loaded", [])).klass === smalltalk.Number ? $receiver + 1 : smalltalk.send($receiver, "__plus", [1])]);
    ($receiver = smalltalk.send(smalltalk.send(self, "_loaded", []), "__eq", [smalltalk.send(self, "_totalToLoad", [])])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(self, "_initializeMap", []);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return smalltalk.send(self, "_initializeMap", []);}]);
    return self;
}
}),
smalltalk.World);

smalltalk.addMethod(
"_initializeMap",
smalltalk.method({
selector: "initializeMap",
fn: function () {
    var self = this;
    smalltalk.send(self, "_startGame", []);
    return self;
}
}),
smalltalk.World);

smalltalk.addMethod(
"_initializeWithLibrairies_map_",
smalltalk.method({
selector: "initializeWithLibrairies:map:",
fn: function (libsIndexes, aMapIndex) {
    var self = this;
    smalltalk.send(self, "_loaded_", [0]);
    smalltalk.send(self, "_totalToLoad_", [($receiver = smalltalk.send(smalltalk.send(libsIndexes, "_at_", [1]), "_size", [])).klass === smalltalk.Number ? $receiver + smalltalk.send(smalltalk.send(libsIndexes, "_at_", [2]), "_size", []) : smalltalk.send($receiver, "__plus", [smalltalk.send(smalltalk.send(libsIndexes, "_at_", [2]), "_size", [])])]);
    smalltalk.send(self, "_eventManager_", [smalltalk.send(smalltalk.MapEditorEventManager || MapEditorEventManager, "_new", [])]);
    smalltalk.send(self, "_resource_", [smalltalk.send(smalltalk.Resource || Resource, "_newWithLibrairies_map_world_", [libsIndexes, aMapIndex, self])]);
    smalltalk.send(self, "_map_", [smalltalk.send(smalltalk.Map || Map, "_newWithMapArray_", [[[[[1, 1]], [[1, 1]]], [[[1, 1]], [[1, 1]]]]])]);
    return self;
}
}),
smalltalk.World);

smalltalk.addMethod(
"_loaded",
smalltalk.method({
selector: "loaded",
fn: function () {
    var self = this;
    return self['@loaded'];
    return self;
}
}),
smalltalk.World);

smalltalk.addMethod(
"_loaded_",
smalltalk.method({
selector: "loaded:",
fn: function (aString) {
    var self = this;
    self['@loaded'] = aString;
    return self;
}
}),
smalltalk.World);

smalltalk.addMethod(
"_map",
smalltalk.method({
selector: "map",
fn: function () {
    var self = this;
    return self['@map'];
    return self;
}
}),
smalltalk.World);

smalltalk.addMethod(
"_map_",
smalltalk.method({
selector: "map:",
fn: function (aMap) {
    var self = this;
    self['@map'] = aMap;
    return self;
}
}),
smalltalk.World);

smalltalk.addMethod(
"_resource",
smalltalk.method({
selector: "resource",
fn: function () {
    var self = this;
    return self['@resource'];
    return self;
}
}),
smalltalk.World);

smalltalk.addMethod(
"_resource_",
smalltalk.method({
selector: "resource:",
fn: function (aRes) {
    var self = this;
    self['@resource'] = aRes;
    return self;
}
}),
smalltalk.World);

smalltalk.addMethod(
"_startGame",
smalltalk.method({
selector: "startGame",
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_map", []), "_update", []);
    return self;
}
}),
smalltalk.World);

smalltalk.addMethod(
"_totalToLoad",
smalltalk.method({
selector: "totalToLoad",
fn: function () {
    var self = this;
    return self['@totalToLoad'];
    return self;
}
}),
smalltalk.World);

smalltalk.addMethod(
"_totalToLoad_",
smalltalk.method({
selector: "totalToLoad:",
fn: function (aNumber) {
    var self = this;
    self['@totalToLoad'] = aNumber;
    return self;
}
}),
smalltalk.World);


smalltalk.addMethod(
"_newMapEditorWorldWithLibrairies_map_",
smalltalk.method({
selector: "newMapEditorWorldWithLibrairies:map:",
fn: function (libsIndexes, aMapIndex) {
    var self = this;
    return function ($rec) {smalltalk.send($rec, "_initializeWithLibrairies_map_", [libsIndexes, aMapIndex]);return smalltalk.send($rec, "_yourself", []);}(smalltalk.send(self, "_new", []));
    return self;
}
}),
smalltalk.World.klass);


smalltalk.addClass('XMLhttpRequestProxy', smalltalk.Object, ['xmlhttpRequest'], 'Easnoth-BootStrap');
smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function () {
    var self = this;
    var xmlhttpRequestTemp = nil;
    smalltalk.send(self, "_initialize", [], smalltalk.XMLhttpRequestProxy.superclass || nil);
    xmlhttpRequestTemp = new XMLHttpRequest;
    smalltalk.send(self, "_xmlhttpRequest_", [xmlhttpRequestTemp]);
    return self;
}
}),
smalltalk.XMLhttpRequestProxy);

smalltalk.addMethod(
"_loadXML_",
smalltalk.method({
selector: "loadXML:",
fn: function (fileName) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_open_fileName_arg_", ["GET", fileName, false]);return smalltalk.send($rec, "_send", []);}(smalltalk.send(self, "_xmlhttpRequest", [])));
    return smalltalk.send(smalltalk.send(self, "_xmlhttpRequest", []), "_responseText", []);
    return self;
}
}),
smalltalk.XMLhttpRequestProxy);

smalltalk.addMethod(
"_xmlhttpRequest",
smalltalk.method({
selector: "xmlhttpRequest",
fn: function () {
    var self = this;
    return self['@xmlhttpRequest'];
    return self;
}
}),
smalltalk.XMLhttpRequestProxy);

smalltalk.addMethod(
"_xmlhttpRequest_",
smalltalk.method({
selector: "xmlhttpRequest:",
fn: function (anObject) {
    var self = this;
    self['@xmlhttpRequest'] = anObject;
    return self;
}
}),
smalltalk.XMLhttpRequestProxy);



smalltalk.addMethod(
"_atIndex_",
smalltalk.method({
selector: "atIndex:",
fn: function (anIndex) {
    var self = this;
    return smalltalk.send(self, "_atLibrary_atIndex_", [smalltalk.send(anIndex, "_at_", [1]), smalltalk.send(anIndex, "_at_", [2])]);
    return self;
}
}),
smalltalk.Array);

smalltalk.addMethod(
"_atIndex_put_",
smalltalk.method({
selector: "atIndex:put:",
fn: function (anIndex, anImage) {
    var self = this;
    return smalltalk.send(self, "_atLibrary_atIndex_put_", [smalltalk.send(anIndex, "_at_", [1]), smalltalk.send(anIndex, "_at_", [2]), anImage]);
    return self;
}
}),
smalltalk.Array);

smalltalk.addMethod(
"_atLibrary_",
smalltalk.method({
selector: "atLibrary:",
fn: function (aLibIndex) {
    var self = this;
    return smalltalk.send(self, "_at_", [aLibIndex]);
    return self;
}
}),
smalltalk.Array);

smalltalk.addMethod(
"_atLibrary_atIndex_",
smalltalk.method({
selector: "atLibrary:atIndex:",
fn: function (aLibIndex, anIndex) {
    var self = this;
    return smalltalk.send(smalltalk.send(self, "_at_", [aLibIndex]), "_at_", [anIndex]);
    return self;
}
}),
smalltalk.Array);

smalltalk.addMethod(
"_atLibrary_atIndex_put_",
smalltalk.method({
selector: "atLibrary:atIndex:put:",
fn: function (aLibIndex, anIndex, anImage) {
    var self = this;
    return smalltalk.send(smalltalk.send(self, "_at_", [aLibIndex]), "_at_put_", [anIndex, anImage]);
    return self;
}
}),
smalltalk.Array);

smalltalk.addMethod(
"_loadLibrary_",
smalltalk.method({
selector: "loadLibrary:",
fn: function (aLibrary) {
    var self = this;
    var tempImg = nil;
    var loaded = nil;
    loaded = 1;
    smalltalk.send(self, "_at_put_", [smalltalk.send(aLibrary, "_index", []), smalltalk.send(smalltalk.Array || Array, "_new_", [smalltalk.send(smalltalk.send(aLibrary, "_srcArray", []), "_size", [])])]);
    smalltalk.send(smalltalk.send(aLibrary, "_srcArray", []), "_withIndexDo_", [function (src, i) {tempImg = new Image;smalltalk.send(smalltalk.send(self, "_at_", [smalltalk.send(aLibrary, "_index", [])]), "_at_put_", [i, tempImg]);smalltalk.send(smalltalk.send(smalltalk.send(self, "_at_", [smalltalk.send(aLibrary, "_index", [])]), "_at_", [i]), "_at_put_", ["onload", function () {loaded = ($receiver = loaded).klass === smalltalk.Number ? $receiver + 1 : smalltalk.send($receiver, "__plus", [1]);return ($receiver = smalltalk.send(smalltalk.send(smalltalk.send(aLibrary, "_srcArray", []), "_size", []), "__eq", [loaded])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(smalltalk.send(aLibrary, "_onload", []), "_value", []);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return smalltalk.send(smalltalk.send(aLibrary, "_onload", []), "_value", []);}]);}]);return smalltalk.send(smalltalk.send(smalltalk.send(self, "_at_", [smalltalk.send(aLibrary, "_index", [])]), "_at_", [i]), "_at_put_", ["src", smalltalk.send(smalltalk.send(aLibrary, "_path", []), "__comma", [src])]);}]);
    return self;
}
}),
smalltalk.Array);

smalltalk.addMethod(
"_parseMapXML_",
smalltalk.method({
selector: "parseMapXML:",
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
}
}),
smalltalk.Array.klass);

smalltalk.addMethod(
"_setupIndex_",
smalltalk.method({
selector: "setupIndex:",
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
}
}),
smalltalk.Array.klass);

smalltalk.addMethod(
"_atIndex_",
smalltalk.method({
selector: "atIndex:",
fn: function (anIndex) {
    var self = this;
    return smalltalk.send(self, "_atLibrary_atIndex_", [smalltalk.send(anIndex, "_at_", [1]), smalltalk.send(anIndex, "_at_", [2])]);
    return self;
}
}),
smalltalk.Array);

smalltalk.addMethod(
"_atIndex_put_",
smalltalk.method({
selector: "atIndex:put:",
fn: function (anIndex, anImage) {
    var self = this;
    return smalltalk.send(self, "_atLibrary_atIndex_put_", [smalltalk.send(anIndex, "_at_", [1]), smalltalk.send(anIndex, "_at_", [2]), anImage]);
    return self;
}
}),
smalltalk.Array);

smalltalk.addMethod(
"_atLibrary_",
smalltalk.method({
selector: "atLibrary:",
fn: function (aLibIndex) {
    var self = this;
    return smalltalk.send(self, "_at_", [aLibIndex]);
    return self;
}
}),
smalltalk.Array);

smalltalk.addMethod(
"_atLibrary_atIndex_",
smalltalk.method({
selector: "atLibrary:atIndex:",
fn: function (aLibIndex, anIndex) {
    var self = this;
    return smalltalk.send(smalltalk.send(self, "_at_", [aLibIndex]), "_at_", [anIndex]);
    return self;
}
}),
smalltalk.Array);

smalltalk.addMethod(
"_atLibrary_atIndex_put_",
smalltalk.method({
selector: "atLibrary:atIndex:put:",
fn: function (aLibIndex, anIndex, anImage) {
    var self = this;
    return smalltalk.send(smalltalk.send(self, "_at_", [aLibIndex]), "_at_put_", [anIndex, anImage]);
    return self;
}
}),
smalltalk.Array);

smalltalk.addMethod(
"_loadLibrary_",
smalltalk.method({
selector: "loadLibrary:",
fn: function (aLibrary) {
    var self = this;
    var tempImg = nil;
    var loaded = nil;
    loaded = 1;
    smalltalk.send(self, "_at_put_", [smalltalk.send(aLibrary, "_index", []), smalltalk.send(smalltalk.Array || Array, "_new_", [smalltalk.send(smalltalk.send(aLibrary, "_srcArray", []), "_size", [])])]);
    smalltalk.send(smalltalk.send(aLibrary, "_srcArray", []), "_withIndexDo_", [function (src, i) {tempImg = new Image;smalltalk.send(smalltalk.send(self, "_at_", [smalltalk.send(aLibrary, "_index", [])]), "_at_put_", [i, tempImg]);smalltalk.send(smalltalk.send(smalltalk.send(self, "_at_", [smalltalk.send(aLibrary, "_index", [])]), "_at_", [i]), "_at_put_", ["onload", function () {loaded = ($receiver = loaded).klass === smalltalk.Number ? $receiver + 1 : smalltalk.send($receiver, "__plus", [1]);return ($receiver = smalltalk.send(smalltalk.send(smalltalk.send(aLibrary, "_srcArray", []), "_size", []), "__eq", [loaded])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(smalltalk.send(aLibrary, "_onload", []), "_value", []);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return smalltalk.send(smalltalk.send(aLibrary, "_onload", []), "_value", []);}]);}]);return smalltalk.send(smalltalk.send(smalltalk.send(self, "_at_", [smalltalk.send(aLibrary, "_index", [])]), "_at_", [i]), "_at_put_", ["src", smalltalk.send(smalltalk.send(aLibrary, "_path", []), "__comma", [src])]);}]);
    return self;
}
}),
smalltalk.Array);

smalltalk.addMethod(
"_parseMapXML_",
smalltalk.method({
selector: "parseMapXML:",
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
}
}),
smalltalk.Array.klass);

smalltalk.addMethod(
"_setupIndex_",
smalltalk.method({
selector: "setupIndex:",
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
}
}),
smalltalk.Array.klass);

