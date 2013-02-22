smalltalk.addPackage('Easnoth-Core-Display', {});
smalltalk.addClass('Cell', smalltalk.Object, ['drawedObjects', 'x', 'y', 'state'], 'Easnoth-Core-Display');
smalltalk.Cell.comment="\x22implementation of an hexagonal isometric cell\x22"
smalltalk.addMethod(
"_addSelector",
smalltalk.method({
selector: "addSelector",
category: 'selection',
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_state", []), "_addSelector", []);
    return self;
},
args: [],
source: "addSelector\x0a\x09self state addSelector\x0a\x09\x09\x22self addSelectorColored: 'green'\x22\x0a",
messageSends: ["addSelector", "state"],
referencedClasses: []
}),
smalltalk.Cell);

smalltalk.addMethod(
"_addSelectorColored_",
smalltalk.method({
selector: "addSelectorColored:",
category: 'selection',
fn: function (aSelector) {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_drawedObjects", []), "_add_", [smalltalk.send(smalltalk.OverTile || OverTile, "_newWithContext_jsonOverTile_selector_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.Map || Map, "_getSingleton", []), "_canvas", []), "_element", []), "_getContext_", ["2d"]), aSelector, true])]);
    smalltalk.send(self, "_reorderDrawedObjects", []);
    return self;
},
args: ["aSelector"],
source: "addSelectorColored: aSelector\x0a\x09self drawedObjects add: (OverTile newWithContext: (Map getSingleton canvas element getContext: '2d') jsonOverTile: aSelector selector: true).\x0a\x09self reorderDrawedObjects",
messageSends: ["add:", "drawedObjects", "newWithContext:jsonOverTile:selector:", "getContext:", "element", "canvas", "getSingleton", "reorderDrawedObjects"],
referencedClasses: ["OverTile", "Map"]
}),
smalltalk.Cell);

smalltalk.addMethod(
"_attackableNeighboursInMap_side_",
smalltalk.method({
selector: "attackableNeighboursInMap:side:",
category: 'map-delegation',
fn: function (aMap, aSide) {
    var self = this;
    return smalltalk.send(aMap, "_attackableCellsNextTo_side_", [self, aSide]);
    return self;
},
args: ["aMap", "aSide"],
source: "attackableNeighboursInMap: aMap side: aSide\x0a\x09^aMap attackableCellsNextTo: self side: aSide",
messageSends: ["attackableCellsNextTo:side:"],
referencedClasses: []
}),
smalltalk.Cell);

smalltalk.addMethod(
"_canAttack_",
smalltalk.method({
selector: "canAttack:",
category: 'state-delegation',
fn: function (aSide) {
    var self = this;
    return smalltalk.send(smalltalk.send(self, "_state", []), "_canAttack_", [aSide]);
    return self;
},
args: ["aSide"],
source: "canAttack: aSide\x0a\x09^self state canAttack: aSide",
messageSends: ["canAttack:", "state"],
referencedClasses: []
}),
smalltalk.Cell);

smalltalk.addMethod(
"_canBeSelected_",
smalltalk.method({
selector: "canBeSelected:",
category: 'state-delegation',
fn: function (sidePlayed) {
    var self = this;
    return smalltalk.send(smalltalk.send(self, "_state", []), "_canBeSelected_", [sidePlayed]);
    return self;
},
args: ["sidePlayed"],
source: "canBeSelected: sidePlayed\x0a\x09^self state canBeSelected: sidePlayed",
messageSends: ["canBeSelected:", "state"],
referencedClasses: []
}),
smalltalk.Cell);

smalltalk.addMethod(
"_canMoveTo",
smalltalk.method({
selector: "canMoveTo",
category: 'state-delegation',
fn: function () {
    var self = this;
    return smalltalk.send(smalltalk.send(self, "_state", []), "_canMoveTo", []);
    return self;
},
args: [],
source: "canMoveTo\x0a\x09^self state canMoveTo",
messageSends: ["canMoveTo", "state"],
referencedClasses: []
}),
smalltalk.Cell);

smalltalk.addMethod(
"_changeState_",
smalltalk.method({
selector: "changeState:",
category: 'state-delegation',
fn: function (aState) {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_state", []), "_newState_for_", [aState, self]);
    return self;
},
args: ["aState"],
source: "changeState: aState\x0a\x09self state newState: aState for: self",
messageSends: ["newState:for:", "state"],
referencedClasses: []
}),
smalltalk.Cell);

smalltalk.addMethod(
"_coodsInMap_",
smalltalk.method({
selector: "coodsInMap:",
category: 'map-delegation',
fn: function (aMap) {
    var self = this;
    return smalltalk.send(aMap, "_coodsOf_", [self]);
    return self;
},
args: ["aMap"],
source: "coodsInMap: aMap\x0a\x09^aMap coodsOf: self",
messageSends: ["coodsOf:"],
referencedClasses: []
}),
smalltalk.Cell);

smalltalk.addMethod(
"_draw",
smalltalk.method({
selector: "draw",
category: 'displaying',
fn: function () {
    var self = this;
    smalltalk.send(self['@drawedObjects'], "_do_", [function (drawedObject) {return ($receiver = drawedObject) != nil && $receiver != undefined ? function () {return smalltalk.send(drawedObject, "_drawX_y_", [smalltalk.send(self, "_x", []), smalltalk.send(self, "_y", [])]);}() : nil;}]);
    return self;
},
args: [],
source: "draw\x0a\x09drawedObjects do: [ :drawedObject |\x0a\x09\x09drawedObject ifNotNil: [drawedObject drawX: self x y: self y]\x0a\x09].",
messageSends: ["do:", "ifNotNil:", "drawX:y:", "x", "y"],
referencedClasses: []
}),
smalltalk.Cell);

smalltalk.addMethod(
"_drawedObjects",
smalltalk.method({
selector: "drawedObjects",
category: 'accessing-direct',
fn: function () {
    var self = this;
    return self['@drawedObjects'];
    return self;
},
args: [],
source: "drawedObjects\x0a\x09^drawedObjects",
messageSends: [],
referencedClasses: []
}),
smalltalk.Cell);

smalltalk.addMethod(
"_drawedObjects_",
smalltalk.method({
selector: "drawedObjects:",
category: 'accessing-direct',
fn: function (value) {
    var self = this;
    self['@drawedObjects'] = value;
    return self;
},
args: ["value"],
source: "drawedObjects: value\x0a\x09drawedObjects := value.",
messageSends: [],
referencedClasses: []
}),
smalltalk.Cell);

smalltalk.addMethod(
"_free",
smalltalk.method({
selector: "free",
category: 'testing',
fn: function () {
    var self = this;
    return smalltalk.send(smalltalk.send(self, "_hasMonster", []), "_not", []);
    return self;
},
args: [],
source: "free\x0a\x09^self hasMonster not",
messageSends: ["not", "hasMonster"],
referencedClasses: []
}),
smalltalk.Cell);

smalltalk.addMethod(
"_hasMonster",
smalltalk.method({
selector: "hasMonster",
category: 'testing',
fn: function () {
    var self = this;
    return smalltalk.send(smalltalk.send(self, "_monster", []), "_notNil", []);
    return self;
},
args: [],
source: "hasMonster\x0a\x09^self monster notNil",
messageSends: ["notNil", "monster"],
referencedClasses: []
}),
smalltalk.Cell);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function () {
    var self = this;
    smalltalk.send(self, "_initialize", [], smalltalk.Cell.superclass || nil);
    smalltalk.send(self, "_drawedObjects_", [smalltalk.send(smalltalk.Array || Array, "_new", [])]);
    return self;
},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self drawedObjects: Array new.",
messageSends: ["initialize", "drawedObjects:", "new"],
referencedClasses: ["Array"]
}),
smalltalk.Cell);

smalltalk.addMethod(
"_initializeState",
smalltalk.method({
selector: "initializeState",
category: 'initialize-release',
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.CellState || CellState, "_initializeStateFor_", [self]);
    return self;
},
args: [],
source: "initializeState\x0a\x09CellState initializeStateFor: self",
messageSends: ["initializeStateFor:"],
referencedClasses: ["CellState"]
}),
smalltalk.Cell);

smalltalk.addMethod(
"_monster",
smalltalk.method({
selector: "monster",
category: 'accessing',
fn: function () {
    var self = this;
    return smalltalk.send(self, "_specificDrawedObject_", [smalltalk.Monster || Monster]);
    return self;
},
args: [],
source: "monster\x0a\x09^self specificDrawedObject: Monster",
messageSends: ["specificDrawedObject:"],
referencedClasses: ["Monster"]
}),
smalltalk.Cell);

smalltalk.addMethod(
"_monster_",
smalltalk.method({
selector: "monster:",
category: 'accessing',
fn: function (aMonster) {
    var self = this;
    ($receiver = smalltalk.send(self, "_monster", [])) == nil ||
        $receiver == undefined ? function () {return smalltalk.send(smalltalk.send(self, "_drawedObjects", []), "_add_", [aMonster]);}() : function () {return smalltalk.send(self, "_error_", ["This cell has already a Monster"]);}();
    return self;
},
args: ["aMonster"],
source: "monster: aMonster\x0a\x09self monster ifNil: [self drawedObjects add: aMonster] ifNotNil:[self error: 'This cell has already a Monster'].",
messageSends: ["ifNil:ifNotNil:", "monster", "add:", "drawedObjects", "error:"],
referencedClasses: []
}),
smalltalk.Cell);

smalltalk.addMethod(
"_movableNeighboursInMap_",
smalltalk.method({
selector: "movableNeighboursInMap:",
category: 'map-delegation',
fn: function (aMap) {
    var self = this;
    return smalltalk.send(aMap, "_movableCellsNextTo_", [self]);
    return self;
},
args: ["aMap"],
source: "movableNeighboursInMap: aMap\x0a\x09^aMap movableCellsNextTo: self",
messageSends: ["movableCellsNextTo:"],
referencedClasses: []
}),
smalltalk.Cell);

smalltalk.addMethod(
"_neighboursInMap_",
smalltalk.method({
selector: "neighboursInMap:",
category: 'map-delegation',
fn: function (aMap) {
    var self = this;
    return smalltalk.send(aMap, "_cellsNextTo_", [self]);
    return self;
},
args: ["aMap"],
source: "neighboursInMap: aMap\x0a\x09^aMap cellsNextTo: self",
messageSends: ["cellsNextTo:"],
referencedClasses: []
}),
smalltalk.Cell);

smalltalk.addMethod(
"_overTiles",
smalltalk.method({
selector: "overTiles",
category: 'accessing',
fn: function () {
    var self = this;
    return smalltalk.send(self, "_specificDrawedObjects_", [smalltalk.OverTile || OverTile]);
    return self;
},
args: [],
source: "overTiles\x0a\x09^self specificDrawedObjects: OverTile.",
messageSends: ["specificDrawedObjects:"],
referencedClasses: ["OverTile"]
}),
smalltalk.Cell);

smalltalk.addMethod(
"_overTiles_",
smalltalk.method({
selector: "overTiles:",
category: 'accessing',
fn: function (aCollection) {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_drawedObjects", []), "_addAll_", [aCollection]);
    return self;
},
args: ["aCollection"],
source: "overTiles: aCollection\x0a\x09self drawedObjects addAll: aCollection.",
messageSends: ["addAll:", "drawedObjects"],
referencedClasses: []
}),
smalltalk.Cell);

smalltalk.addMethod(
"_parseJSONCell_withContext_",
smalltalk.method({
selector: "parseJSONCell:withContext:",
category: 'initialize-release',
fn: function (aJsonCell, aContext) {
    var self = this;
    smalltalk.send(function () {return smalltalk.send(self, "_tile_", [smalltalk.send(smalltalk.Tile || Tile, "_newWithContext_jsonTile_", [aContext, smalltalk.send(aJsonCell, "_tile", [])])]);}, "_on_do_", [smalltalk.Error || Error, function () {return nil;}]);
    smalltalk.send(function () {return smalltalk.send(self, "_overTiles_", [smalltalk.send(smalltalk.send(aJsonCell, "_overtiles", []), "_collect_", [function (each) {return smalltalk.send(smalltalk.OverTile || OverTile, "_newWithContext_jsonOverTile_", [aContext, smalltalk.send(each, "_overtile", [])]);}])]);}, "_on_do_", [smalltalk.Error || Error, function () {return nil;}]);
    smalltalk.send(function () {return smalltalk.send(self, "_monster_", [smalltalk.send(smalltalk.Monster || Monster, "_newWithContext_jsonMonster_", [aContext, smalltalk.send(aJsonCell, "_monster", [])])]);}, "_on_do_", [smalltalk.Error || Error, function () {return nil;}]);
    return self;
},
args: ["aJsonCell", "aContext"],
source: "parseJSONCell: aJsonCell withContext: aContext\x0a\x09\x22the order is important, other way add Cell>>reorderDrawedObjects at the end\x22\x0a\x09[self tile: (Tile newWithContext: aContext jsonTile: aJsonCell tile)]on: Error do: [\x22no tile in this cell on json\x22].\x0a\x09[self overTiles: (aJsonCell overtiles collect: [:each | OverTile newWithContext: aContext jsonOverTile: each overtile])] on: Error do: [\x22no overtile in this cell on json\x22].\x0a\x09[self monster: (Monster newWithContext: aContext jsonMonster: aJsonCell monster)] on: Error do: [\x22no monster in this cell on json\x22]",
messageSends: ["on:do:", "tile:", "newWithContext:jsonTile:", "tile", "overTiles:", "collect:", "overtiles", "newWithContext:jsonOverTile:", "overtile", "monster:", "newWithContext:jsonMonster:", "monster"],
referencedClasses: ["Tile", "Error", "OverTile", "Monster"]
}),
smalltalk.Cell);

smalltalk.addMethod(
"_removeMonster",
smalltalk.method({
selector: "removeMonster",
category: 'accessing',
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_drawedObjects", []), "_remove_", [smalltalk.send(self, "_monster", [])]);
    return self;
},
args: [],
source: "removeMonster\x0a\x09self drawedObjects remove: self monster",
messageSends: ["remove:", "drawedObjects", "monster"],
referencedClasses: []
}),
smalltalk.Cell);

smalltalk.addMethod(
"_removeSelector",
smalltalk.method({
selector: "removeSelector",
category: 'selection',
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_state", []), "_removeSelector", []);
    return self;
},
args: [],
source: "removeSelector\x0a\x09self state removeSelector",
messageSends: ["removeSelector", "state"],
referencedClasses: []
}),
smalltalk.Cell);

smalltalk.addMethod(
"_removeTile",
smalltalk.method({
selector: "removeTile",
category: 'accessing',
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_drawedObjects", []), "_remove_", [smalltalk.send(self, "_tile", [])]);
    return self;
},
args: [],
source: "removeTile\x0a\x09self drawedObjects remove: self tile",
messageSends: ["remove:", "drawedObjects", "tile"],
referencedClasses: []
}),
smalltalk.Cell);

smalltalk.addMethod(
"_reorderDrawedObjects",
smalltalk.method({
selector: "reorderDrawedObjects",
category: 'displaying',
fn: function () {
    var self = this;
    var orderedDrawedObjects = nil;
    orderedDrawedObjects = smalltalk.send(smalltalk.Array || Array, "_with_", [smalltalk.send(self, "_tile", [])]);
    smalltalk.send(orderedDrawedObjects, "_addAll_", [smalltalk.send(self, "_overTiles", [])]);
    smalltalk.send(orderedDrawedObjects, "_add_", [smalltalk.send(self, "_monster", [])]);
    smalltalk.send(self, "_drawedObjects_", [orderedDrawedObjects]);
    return self;
},
args: [],
source: "reorderDrawedObjects\x0a\x09|orderedDrawedObjects|\x0a\x09\x0a\x09\x22reorderDrawedObjects for display :  Tile, overTiles, monster then building\x22\x0a\x09orderedDrawedObjects := Array with: self tile.\x0a\x09orderedDrawedObjects addAll: self overTiles.\x0a\x09orderedDrawedObjects add: self monster.\x0a\x09\x0a\x09self drawedObjects: orderedDrawedObjects",
messageSends: ["with:", "tile", "addAll:", "overTiles", "add:", "monster", "drawedObjects:"],
referencedClasses: ["Array"]
}),
smalltalk.Cell);

smalltalk.addMethod(
"_selectableNeighboursInMap_side_",
smalltalk.method({
selector: "selectableNeighboursInMap:side:",
category: 'map-delegation',
fn: function (aMap, aSide) {
    var self = this;
    return smalltalk.send(aMap, "_selectableCellsNextTo_side_", [self, aSide]);
    return self;
},
args: ["aMap", "aSide"],
source: "selectableNeighboursInMap: aMap side: aSide\x0a\x09^aMap selectableCellsNextTo: self side: aSide",
messageSends: ["selectableCellsNextTo:side:"],
referencedClasses: []
}),
smalltalk.Cell);

smalltalk.addMethod(
"_specificDrawedObject_",
smalltalk.method({
selector: "specificDrawedObject:",
category: 'accessing',
fn: function (aClass) {
    var self = this;
    var $early = {};
    try {
        var objectsFound = nil;
        objectsFound = smalltalk.send(self, "_specificDrawedObjects_", [aClass]);
        smalltalk.send(objectsFound, "_ifEmpty_", [function () {return function () {throw $early = [nil];}();}]);
        return smalltalk.send(objectsFound, "_at_", [1]);
        return self;
    } catch (e) {
        if (e === $early) {
            return e[0];
        }
        throw e;
    }
},
args: ["aClass"],
source: "specificDrawedObject: aClass\x0a\x09|objectsFound|\x0a\x0a  \x09objectsFound := self specificDrawedObjects: aClass.\x0a\x09objectsFound ifEmpty:[^nil].\x0a\x09^objectsFound at: 1",
messageSends: ["specificDrawedObjects:", "ifEmpty:", "at:"],
referencedClasses: []
}),
smalltalk.Cell);

smalltalk.addMethod(
"_specificDrawedObjects_",
smalltalk.method({
selector: "specificDrawedObjects:",
category: 'accessing',
fn: function (aClass) {
    var self = this;
    return smalltalk.send(smalltalk.send(self, "_drawedObjects", []), "_select_", [function (each) {return smalltalk.send(each, "_isKindOf_", [aClass]);}]);
    return self;
},
args: ["aClass"],
source: "specificDrawedObjects: aClass\x0a\x09^self drawedObjects select:[:each | each isKindOf: aClass]",
messageSends: ["select:", "drawedObjects", "isKindOf:"],
referencedClasses: []
}),
smalltalk.Cell);

smalltalk.addMethod(
"_state",
smalltalk.method({
selector: "state",
category: 'accessing-direct',
fn: function () {
    var self = this;
    ($receiver = self['@state']) == nil || $receiver == undefined ? function () {return smalltalk.send(self, "_initializeState", []);}() : $receiver;
    return self['@state'];
    return self;
},
args: [],
source: "state\x0a\x09state ifNil: [self initializeState].\x0a\x09^state",
messageSends: ["ifNil:", "initializeState"],
referencedClasses: []
}),
smalltalk.Cell);

smalltalk.addMethod(
"_state_",
smalltalk.method({
selector: "state:",
category: 'accessing-direct',
fn: function (aState) {
    var self = this;
    self['@state'] = aState;
    return self;
},
args: ["aState"],
source: "state: aState\x0a\x09state := aState",
messageSends: [],
referencedClasses: []
}),
smalltalk.Cell);

smalltalk.addMethod(
"_tile",
smalltalk.method({
selector: "tile",
category: 'accessing',
fn: function () {
    var self = this;
    return smalltalk.send(self, "_specificDrawedObject_", [smalltalk.Tile || Tile]);
    return self;
},
args: [],
source: "tile\x0a\x09^self specificDrawedObject: Tile",
messageSends: ["specificDrawedObject:"],
referencedClasses: ["Tile"]
}),
smalltalk.Cell);

smalltalk.addMethod(
"_tile_",
smalltalk.method({
selector: "tile:",
category: 'accessing',
fn: function (aTile) {
    var self = this;
    ($receiver = smalltalk.send(self, "_tile", [])) == nil ||
        $receiver == undefined ? function () {return smalltalk.send(smalltalk.send(self, "_drawedObjects", []), "_add_", [aTile]);}() : function () {return smalltalk.send(self, "_error_", ["This cell has already a Tile"]);}();
    return self;
},
args: ["aTile"],
source: "tile: aTile\x0a\x09self tile ifNil: [self drawedObjects add: aTile] ifNotNil:[self error: 'This cell has already a Tile'].",
messageSends: ["ifNil:ifNotNil:", "tile", "add:", "drawedObjects", "error:"],
referencedClasses: []
}),
smalltalk.Cell);

smalltalk.addMethod(
"_updateCoods_",
smalltalk.method({
selector: "updateCoods:",
category: 'displaying',
fn: function (coods) {
    var self = this;
    smalltalk.send(self, "_x_", [smalltalk.send(coods, "_at_", [1])]);
    smalltalk.send(self, "_y_", [smalltalk.send(coods, "_at_", [2])]);
    return self;
},
args: ["coods"],
source: "updateCoods: coods\x0a\x09self x: (coods at: 1).\x0a\x09self y: (coods at: 2)",
messageSends: ["x:", "at:", "y:"],
referencedClasses: []
}),
smalltalk.Cell);

smalltalk.addMethod(
"_x",
smalltalk.method({
selector: "x",
category: 'accessing-direct',
fn: function () {
    var self = this;
    return self['@x'];
    return self;
},
args: [],
source: "x\x0a\x09^x",
messageSends: [],
referencedClasses: []
}),
smalltalk.Cell);

smalltalk.addMethod(
"_x_",
smalltalk.method({
selector: "x:",
category: 'accessing-direct',
fn: function (value) {
    var self = this;
    self['@x'] = smalltalk.send(value, "_truncated", []);
    return self;
},
args: ["value"],
source: "x: value\x0a\x09x := value truncated.",
messageSends: ["truncated"],
referencedClasses: []
}),
smalltalk.Cell);

smalltalk.addMethod(
"_y",
smalltalk.method({
selector: "y",
category: 'accessing-direct',
fn: function () {
    var self = this;
    return self['@y'];
    return self;
},
args: [],
source: "y\x0a\x09^y",
messageSends: [],
referencedClasses: []
}),
smalltalk.Cell);

smalltalk.addMethod(
"_y_",
smalltalk.method({
selector: "y:",
category: 'accessing-direct',
fn: function (value) {
    var self = this;
    self['@y'] = smalltalk.send(value, "_truncated", []);
    return self;
},
args: ["value"],
source: "y: value\x0a\x09y := value truncated.",
messageSends: ["truncated"],
referencedClasses: []
}),
smalltalk.Cell);


smalltalk.addMethod(
"_newWithContext_jsoncell_coods_",
smalltalk.method({
selector: "newWithContext:jsoncell:coods:",
category: 'instance creation',
fn: function (aContext, aJsonCell, coods) {
    var self = this;
    return function ($rec) {smalltalk.send($rec, "_updateCoods_", [coods]);smalltalk.send($rec, "_parseJSONCell_withContext_", [aJsonCell, aContext]);return smalltalk.send($rec, "_yourself", []);}(smalltalk.send(self, "_new", []));
    return self;
},
args: ["aContext", "aJsonCell", "coods"],
source: "newWithContext: aContext jsoncell: aJsonCell coods: coods\x0a\x09^self new\x0a\x09\x09updateCoods: coods;\x0a\x09\x09parseJSONCell: aJsonCell withContext: aContext;\x0a\x09\x09yourself.",
messageSends: ["updateCoods:", "parseJSONCell:withContext:", "yourself", "new"],
referencedClasses: []
}),
smalltalk.Cell.klass);


smalltalk.addClass('DrawedObject', smalltalk.Object, ['image', 'context'], 'Easnoth-Core-Display');
smalltalk.DrawedObject.comment="\x22abstract implementation of a drawedObject, Tile, overtile, Building or Monster\x22"
smalltalk.addMethod(
"_context",
smalltalk.method({
selector: "context",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@context'];
    return self;
},
args: [],
source: "context\x0a\x09^context",
messageSends: [],
referencedClasses: []
}),
smalltalk.DrawedObject);

smalltalk.addMethod(
"_context_",
smalltalk.method({
selector: "context:",
category: 'accessing',
fn: function (aCtx) {
    var self = this;
    self['@context'] = aCtx;
    return self;
},
args: ["aCtx"],
source: "context: aCtx\x0a\x09context := aCtx",
messageSends: [],
referencedClasses: []
}),
smalltalk.DrawedObject);

smalltalk.addMethod(
"_displayX_y_",
smalltalk.method({
selector: "displayX:y:",
category: 'displaying',
fn: function (aX, aY) {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_context", []), "_drawImage_x_y_", [smalltalk.send(self, "_image", []), aX, aY]);
    return self;
},
args: ["aX", "aY"],
source: "displayX: aX y: aY\x0a\x09self context drawImage: self image\x0a\x09\x09\x09\x09\x09\x09x: aX\x0a\x09\x09\x09\x09\x09\x09y: aY.",
messageSends: ["drawImage:x:y:", "context", "image"],
referencedClasses: []
}),
smalltalk.DrawedObject);

smalltalk.addMethod(
"_drawX_y_",
smalltalk.method({
selector: "drawX:y:",
category: 'displaying',
fn: function (aX, aY) {
    var self = this;
    smalltalk.send(self, "_subclassResponsibility", []);
    return self;
},
args: ["aX", "aY"],
source: "drawX: aX y: aY\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.DrawedObject);

smalltalk.addMethod(
"_folderName",
smalltalk.method({
selector: "folderName",
category: 'initializing',
fn: function () {
    var self = this;
    smalltalk.send(self, "_subclassResponsibility", []);
    return self;
},
args: [],
source: "folderName\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.DrawedObject);

smalltalk.addMethod(
"_image",
smalltalk.method({
selector: "image",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@image'];
    return self;
},
args: [],
source: "image\x0a\x09^image",
messageSends: [],
referencedClasses: []
}),
smalltalk.DrawedObject);

smalltalk.addMethod(
"_image_",
smalltalk.method({
selector: "image:",
category: 'accessing',
fn: function (anImage) {
    var self = this;
    self['@image'] = anImage;
    return self;
},
args: ["anImage"],
source: "image: anImage\x0a\x09image := anImage",
messageSends: [],
referencedClasses: []
}),
smalltalk.DrawedObject);

smalltalk.addMethod(
"_initializeContext_imageKey_",
smalltalk.method({
selector: "initializeContext:imageKey:",
category: 'initializing',
fn: function (aCtx, aKey) {
    var self = this;
    smalltalk.send(self, "_context_", [aCtx]);
    smalltalk.send(smalltalk.send(smalltalk.ImageCache || ImageCache, "_getSingleton", []), "_putImageWithKey_inDrawedObject_", [aKey, self]);
    return self;
},
args: ["aCtx", "aKey"],
source: "initializeContext: aCtx imageKey: aKey\x0a\x09self context: aCtx.\x0a\x09ImageCache getSingleton putImageWithKey: aKey inDrawedObject: self",
messageSends: ["context:", "putImageWithKey:inDrawedObject:", "getSingleton"],
referencedClasses: ["ImageCache"]
}),
smalltalk.DrawedObject);



smalltalk.addClass('Ground', smalltalk.DrawedObject, [], 'Easnoth-Core-Display');
smalltalk.Ground.comment="\x22abstract implementation of drawedObject Overtile and Tile. Drawed through isometric transformation\x22"
smalltalk.addMethod(
"_drawX_y_",
smalltalk.method({
selector: "drawX:y:",
category: 'displaying',
fn: function (aX, aY) {
    var self = this;
    var ctx = nil;
    ctx = smalltalk.send(self, "_context", []);
    (function ($rec) {smalltalk.send($rec, "_save", []);smalltalk.send($rec, "_translate_y_", [($receiver = aX).klass === smalltalk.Number ? $receiver + 45 : smalltalk.send($receiver, "__plus", [45]), ($receiver = aY).klass === smalltalk.Number ? $receiver - 7 : smalltalk.send($receiver, "__minus", [7])]);smalltalk.send($rec, "_scale_y_", [1, 0.5]);smalltalk.send($rec, "_rotate_", [($receiver = smalltalk.send(smalltalk.Number || Number, "_pi", [])).klass === smalltalk.Number ? $receiver / 4 : smalltalk.send($receiver, "__slash", [4])]);return smalltalk.send($rec, "_scale_y_", [1.4, 1.23]);}(ctx));
    smalltalk.send(self, "_displayX_y_", [0, 0]);
    smalltalk.send(ctx, "_restore", []);
    return self;
},
args: ["aX", "aY"],
source: "drawX: aX y: aY\x0a\x09\x22draw through isometric transformation\x22\x0a\x0a\x09|ctx|\x0a\x09ctx := self context.\x0a\x09ctx save;\x0a\x09\x09translate: aX + 45 y: aY-7;\x0a\x09\x09scale: 1 y: 0.5;\x0a\x09\x09rotate: Number pi / 4 ;\x0a\x09\x09scale: 1.4 y: 1.23.\x0a\x09self displayX: 0 y: 0.\x0a\x09ctx restore.",
messageSends: ["context", "save", "translate:y:", "+", "-", "scale:y:", "rotate:", "/", "pi", "displayX:y:", "restore"],
referencedClasses: ["Number"]
}),
smalltalk.Ground);



smalltalk.addClass('OverTile', smalltalk.Ground, ['selector'], 'Easnoth-Core-Display');
smalltalk.addMethod(
"_folderName",
smalltalk.method({
selector: "folderName",
category: 'initializing',
fn: function () {
    var self = this;
    return "overtiles";
    return self;
},
args: [],
source: "folderName\x0a\x09^'overtiles'",
messageSends: [],
referencedClasses: []
}),
smalltalk.OverTile);

smalltalk.addMethod(
"_selector",
smalltalk.method({
selector: "selector",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@selector'];
    return self;
},
args: [],
source: "selector\x0a\x09^selector",
messageSends: [],
referencedClasses: []
}),
smalltalk.OverTile);

smalltalk.addMethod(
"_selector_",
smalltalk.method({
selector: "selector:",
category: 'accessing',
fn: function (aBool) {
    var self = this;
    self['@selector'] = aBool;
    return self;
},
args: ["aBool"],
source: "selector: aBool\x0a\x09selector := aBool",
messageSends: [],
referencedClasses: []
}),
smalltalk.OverTile);


smalltalk.addMethod(
"_newWithContext_jsonOverTile_",
smalltalk.method({
selector: "newWithContext:jsonOverTile:",
category: 'instance creation',
fn: function (aContext, aJsonOverTile) {
    var self = this;
    return smalltalk.send(self, "_newWithContext_jsonOverTile_selector_", [aContext, aJsonOverTile, false]);
    return self;
},
args: ["aContext", "aJsonOverTile"],
source: "newWithContext: aContext jsonOverTile: aJsonOverTile\x0a\x09^self newWithContext: aContext jsonOverTile: aJsonOverTile selector: false\x0a",
messageSends: ["newWithContext:jsonOverTile:selector:"],
referencedClasses: []
}),
smalltalk.OverTile.klass);

smalltalk.addMethod(
"_newWithContext_jsonOverTile_selector_",
smalltalk.method({
selector: "newWithContext:jsonOverTile:selector:",
category: 'instance creation',
fn: function (aContext, aJsonOverTile, aBool) {
    var self = this;
    return function ($rec) {smalltalk.send($rec, "_initializeContext_imageKey_", [aContext, aJsonOverTile]);smalltalk.send($rec, "_selector_", [aBool]);return smalltalk.send($rec, "_yourself", []);}(smalltalk.send(self, "_new", []));
    return self;
},
args: ["aContext", "aJsonOverTile", "aBool"],
source: "newWithContext: aContext jsonOverTile: aJsonOverTile selector: aBool\x0a\x09^self new\x0a\x09\x09initializeContext: aContext imageKey: aJsonOverTile;\x0a\x09\x09selector: aBool;\x0a\x09\x09yourself.\x0a",
messageSends: ["initializeContext:imageKey:", "selector:", "yourself", "new"],
referencedClasses: []
}),
smalltalk.OverTile.klass);


smalltalk.addClass('Tile', smalltalk.Ground, ['isWall'], 'Easnoth-Core-Display');
smalltalk.addMethod(
"_folderName",
smalltalk.method({
selector: "folderName",
category: 'initializing',
fn: function () {
    var self = this;
    return "tiles";
    return self;
},
args: [],
source: "folderName\x0a\x09^'tiles'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Tile);

smalltalk.addMethod(
"_isWall",
smalltalk.method({
selector: "isWall",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@isWall'];
    return self;
},
args: [],
source: "isWall\x0a\x09^isWall",
messageSends: [],
referencedClasses: []
}),
smalltalk.Tile);

smalltalk.addMethod(
"_isWall_",
smalltalk.method({
selector: "isWall:",
category: 'accessing',
fn: function (aBoolean) {
    var self = this;
    self['@isWall'] = aBoolean;
    return self;
},
args: ["aBoolean"],
source: "isWall: aBoolean\x0a\x09isWall := aBoolean",
messageSends: [],
referencedClasses: []
}),
smalltalk.Tile);


smalltalk.addMethod(
"_newWithContext_jsonTile_",
smalltalk.method({
selector: "newWithContext:jsonTile:",
category: 'instance creation',
fn: function (aContext, aJsonTile) {
    var self = this;
    return function ($rec) {smalltalk.send($rec, "_initializeContext_imageKey_", [aContext, aJsonTile]);smalltalk.send($rec, "_isWall_", [false]);return smalltalk.send($rec, "_yourself", []);}(smalltalk.send(self, "_new", []));
    return self;
},
args: ["aContext", "aJsonTile"],
source: "newWithContext: aContext jsonTile: aJsonTile\x0a\x09^self new\x0a\x09\x09initializeContext: aContext imageKey: aJsonTile;\x0a\x09\x09isWall: false;\x0a\x09\x09yourself.\x0a",
messageSends: ["initializeContext:imageKey:", "isWall:", "yourself", "new"],
referencedClasses: []
}),
smalltalk.Tile.klass);


smalltalk.addClass('OverGround', smalltalk.DrawedObject, ['hp'], 'Easnoth-Core-Display');
smalltalk.OverGround.comment="\x22abstract implementation of drawedObject Building and monster. Share some instance variables\x22"
smalltalk.addMethod(
"_hp",
smalltalk.method({
selector: "hp",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@hp'];
    return self;
},
args: [],
source: "hp\x0a\x09^hp",
messageSends: [],
referencedClasses: []
}),
smalltalk.OverGround);

smalltalk.addMethod(
"_hp_",
smalltalk.method({
selector: "hp:",
category: 'accessing',
fn: function (aNumber) {
    var self = this;
    self['@hp'] = aNumber;
    return self;
},
args: ["aNumber"],
source: "hp: aNumber\x0a\x09hp := aNumber",
messageSends: [],
referencedClasses: []
}),
smalltalk.OverGround);



smalltalk.addClass('Building', smalltalk.OverGround, [], 'Easnoth-Core-Display');
smalltalk.addMethod(
"_folderName",
smalltalk.method({
selector: "folderName",
category: 'initializing',
fn: function () {
    var self = this;
    return "buildings";
    return self;
},
args: [],
source: "folderName\x0a\x09^'buildings'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Building);



smalltalk.addClass('Monster', smalltalk.OverGround, ['move', 'attack', 'knockback', 'range', 'heros', 'special', 'side', 'state'], 'Easnoth-Core-Display');
smalltalk.addMethod(
"_attack",
smalltalk.method({
selector: "attack",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@attack'];
    return self;
},
args: [],
source: "attack\x0a\x09^attack",
messageSends: [],
referencedClasses: []
}),
smalltalk.Monster);

smalltalk.addMethod(
"_attack_",
smalltalk.method({
selector: "attack:",
category: 'accessing',
fn: function (somePercent) {
    var self = this;
    self['@attack'] = somePercent;
    return self;
},
args: ["somePercent"],
source: "attack: somePercent\x0a\x09attack := somePercent",
messageSends: [],
referencedClasses: []
}),
smalltalk.Monster);

smalltalk.addMethod(
"_changeState_",
smalltalk.method({
selector: "changeState:",
category: 'state-delegation',
fn: function (aState) {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_state", []), "_newState_for_", [aState, self]);
    return self;
},
args: ["aState"],
source: "changeState: aState\x0a\x09self state newState: aState for: self",
messageSends: ["newState:for:", "state"],
referencedClasses: []
}),
smalltalk.Monster);

smalltalk.addMethod(
"_drawAsHeroX_y_",
smalltalk.method({
selector: "drawAsHeroX:y:",
category: 'displaying',
fn: function (aX, aY) {
    var self = this;
    ($receiver = smalltalk.send(smalltalk.send(self, "_side", []), "_negative", [])).klass === smalltalk.Boolean ? $receiver ? function () {(function ($rec) {smalltalk.send($rec, "_save", []);smalltalk.send($rec, "_translate_y_", [($receiver = aX).klass === smalltalk.Number ? $receiver + 87 : smalltalk.send($receiver, "__plus", [87]), 0]);return smalltalk.send($rec, "_scale_y_", [-1, 1]);}(smalltalk.send(self, "_context", [])));smalltalk.send(self, "_displayX_y_", [0, ($receiver = aY).klass === smalltalk.Number ? $receiver - 28 : smalltalk.send($receiver, "__minus", [28])]);return smalltalk.send(smalltalk.send(self, "_context", []), "_restore", []);}() : function () {return smalltalk.send(self, "_displayX_y_", [($receiver = aX).klass === smalltalk.Number ? $receiver + 15 : smalltalk.send($receiver, "__plus", [15]), ($receiver = aY).klass === smalltalk.Number ? $receiver - 28 : smalltalk.send($receiver, "__minus", [28])]);}() : smalltalk.send($receiver, "_ifTrue_ifFalse_", [function () {(function ($rec) {smalltalk.send($rec, "_save", []);smalltalk.send($rec, "_translate_y_", [($receiver = aX).klass === smalltalk.Number ? $receiver + 87 : smalltalk.send($receiver, "__plus", [87]), 0]);return smalltalk.send($rec, "_scale_y_", [-1, 1]);}(smalltalk.send(self, "_context", [])));smalltalk.send(self, "_displayX_y_", [0, ($receiver = aY).klass === smalltalk.Number ? $receiver - 28 : smalltalk.send($receiver, "__minus", [28])]);return smalltalk.send(smalltalk.send(self, "_context", []), "_restore", []);}, function () {return smalltalk.send(self, "_displayX_y_", [($receiver = aX).klass === smalltalk.Number ? $receiver + 15 : smalltalk.send($receiver, "__plus", [15]), ($receiver = aY).klass === smalltalk.Number ? $receiver - 28 : smalltalk.send($receiver, "__minus", [28])]);}]);
    return self;
},
args: ["aX", "aY"],
source: "drawAsHeroX: aX y: aY\x0a\x09\x2287 = 72 (width image + 15\x22\x0a\x09(self side negative) ifTrue: [\x0a\x09\x09self context save;\x0a\x09\x09\x09translate: aX + 87 y: 0;\x0a\x09\x09\x09scale: -1 y: 1.\x0a\x09\x09self displayX: 0 y: aY - 28.\x0a\x09\x09self context restore.\x0a\x09] ifFalse: [\x0a\x09\x09self displayX: aX + 15 y: aY - 28.\x0a\x09]",
messageSends: ["ifTrue:ifFalse:", "negative", "side", "save", "translate:y:", "+", "scale:y:", "context", "displayX:y:", "-", "restore"],
referencedClasses: []
}),
smalltalk.Monster);

smalltalk.addMethod(
"_drawX_y_",
smalltalk.method({
selector: "drawX:y:",
category: 'displaying',
fn: function (aX, aY) {
    var self = this;
    smalltalk.send(self, "_drawAsHeroX_y_", [aX, aY]);
    return self;
},
args: ["aX", "aY"],
source: "drawX: aX y: aY\x0a\x09\x22drawAsHero ou drawAsUnit\x22\x0a\x09self drawAsHeroX: aX y: aY",
messageSends: ["drawAsHeroX:y:"],
referencedClasses: []
}),
smalltalk.Monster);

smalltalk.addMethod(
"_folderName",
smalltalk.method({
selector: "folderName",
category: 'initializing',
fn: function () {
    var self = this;
    return "monsters";
    return self;
},
args: [],
source: "folderName\x0a\x09^'monsters'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Monster);

smalltalk.addMethod(
"_heros",
smalltalk.method({
selector: "heros",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@heros'];
    return self;
},
args: [],
source: "heros\x0a\x09^heros",
messageSends: [],
referencedClasses: []
}),
smalltalk.Monster);

smalltalk.addMethod(
"_heros_",
smalltalk.method({
selector: "heros:",
category: 'accessing',
fn: function (aBoolean) {
    var self = this;
    self['@heros'] = aBoolean;
    return self;
},
args: ["aBoolean"],
source: "heros: aBoolean\x0a\x09heros := aBoolean",
messageSends: [],
referencedClasses: []
}),
smalltalk.Monster);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initializing',
fn: function () {
    var self = this;
    return self;
},
args: [],
source: "initialize",
messageSends: [],
referencedClasses: []
}),
smalltalk.Monster);

smalltalk.addMethod(
"_initializeSide_",
smalltalk.method({
selector: "initializeSide:",
category: 'initializing',
fn: function (aSide) {
    var self = this;
    smalltalk.send(self, "_side_", [aSide]);
    return self;
},
args: ["aSide"],
source: "initializeSide: aSide\x0a\x09self side: aSide",
messageSends: ["side:"],
referencedClasses: []
}),
smalltalk.Monster);

smalltalk.addMethod(
"_initializeStats_",
smalltalk.method({
selector: "initializeStats:",
category: 'initializing',
fn: function (aJsonMonster) {
    var self = this;
    smalltalk.send(smalltalk.send(smalltalk.MonsterCache || MonsterCache, "_getSingleton", []), "_putStatsWithKey_inMonster_", [aJsonMonster, self]);
    return self;
},
args: ["aJsonMonster"],
source: "initializeStats: aJsonMonster\x0a\x09MonsterCache getSingleton putStatsWithKey: aJsonMonster inMonster: self",
messageSends: ["putStatsWithKey:inMonster:", "getSingleton"],
referencedClasses: ["MonsterCache"]
}),
smalltalk.Monster);

smalltalk.addMethod(
"_knockback",
smalltalk.method({
selector: "knockback",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@knockback'];
    return self;
},
args: [],
source: "knockback\x0a\x09^knockback",
messageSends: [],
referencedClasses: []
}),
smalltalk.Monster);

smalltalk.addMethod(
"_knockback_",
smalltalk.method({
selector: "knockback:",
category: 'accessing',
fn: function (somePercent) {
    var self = this;
    self['@knockback'] = somePercent;
    return self;
},
args: ["somePercent"],
source: "knockback: somePercent\x0a\x09knockback := somePercent",
messageSends: [],
referencedClasses: []
}),
smalltalk.Monster);

smalltalk.addMethod(
"_move",
smalltalk.method({
selector: "move",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@move'];
    return self;
},
args: [],
source: "move\x0a\x09^move",
messageSends: [],
referencedClasses: []
}),
smalltalk.Monster);

smalltalk.addMethod(
"_move_",
smalltalk.method({
selector: "move:",
category: 'accessing',
fn: function (aNumberOfCell) {
    var self = this;
    self['@move'] = aNumberOfCell;
    return self;
},
args: ["aNumberOfCell"],
source: "move: aNumberOfCell\x0a\x09move := aNumberOfCell",
messageSends: [],
referencedClasses: []
}),
smalltalk.Monster);

smalltalk.addMethod(
"_range",
smalltalk.method({
selector: "range",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@range'];
    return self;
},
args: [],
source: "range\x0a\x09^range",
messageSends: [],
referencedClasses: []
}),
smalltalk.Monster);

smalltalk.addMethod(
"_range_",
smalltalk.method({
selector: "range:",
category: 'accessing',
fn: function (aNumberOfCell) {
    var self = this;
    self['@range'] = aNumberOfCell;
    return self;
},
args: ["aNumberOfCell"],
source: "range: aNumberOfCell\x0a\x09range := aNumberOfCell",
messageSends: [],
referencedClasses: []
}),
smalltalk.Monster);

smalltalk.addMethod(
"_side",
smalltalk.method({
selector: "side",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@side'];
    return self;
},
args: [],
source: "side\x0a\x09^side",
messageSends: [],
referencedClasses: []
}),
smalltalk.Monster);

smalltalk.addMethod(
"_side_",
smalltalk.method({
selector: "side:",
category: 'accessing',
fn: function (anInt) {
    var self = this;
    self['@side'] = anInt;
    return self;
},
args: ["anInt"],
source: "side: anInt\x0a\x09side := anInt",
messageSends: [],
referencedClasses: []
}),
smalltalk.Monster);

smalltalk.addMethod(
"_special",
smalltalk.method({
selector: "special",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@special'];
    return self;
},
args: [],
source: "special\x0a\x09^special",
messageSends: [],
referencedClasses: []
}),
smalltalk.Monster);

smalltalk.addMethod(
"_special_",
smalltalk.method({
selector: "special:",
category: 'accessing',
fn: function (something) {
    var self = this;
    self['@special'] = something;
    return self;
},
args: ["something"],
source: "special: something\x0a\x09special := something",
messageSends: [],
referencedClasses: []
}),
smalltalk.Monster);

smalltalk.addMethod(
"_state",
smalltalk.method({
selector: "state",
category: 'accessing',
fn: function () {
    var self = this;
    return ($receiver = self['@state']) == nil || $receiver == undefined ? function () {return smalltalk.send(smalltalk.Inactive || Inactive, "_newFor_", [self]);}() : $receiver;
    return self;
},
args: [],
source: "state\x0a\x09^state ifNil: [Inactive newFor: self]",
messageSends: ["ifNil:", "newFor:"],
referencedClasses: ["Inactive"]
}),
smalltalk.Monster);

smalltalk.addMethod(
"_state_",
smalltalk.method({
selector: "state:",
category: 'accessing',
fn: function (aState) {
    var self = this;
    self['@state'] = aState;
    return self;
},
args: ["aState"],
source: "state: aState\x0a\x09state := aState",
messageSends: [],
referencedClasses: []
}),
smalltalk.Monster);

smalltalk.addMethod(
"_stats_",
smalltalk.method({
selector: "stats:",
category: 'initializing',
fn: function (jsonStats) {
    var self = this;
    smalltalk.send(self, "_move_", [smalltalk.send(jsonStats, "_move", [])]);
    smalltalk.send(self, "_attack_", [smalltalk.send(jsonStats, "_attack", [])]);
    smalltalk.send(self, "_knockback_", [smalltalk.send(jsonStats, "_knockback", [])]);
    smalltalk.send(self, "_heros_", [smalltalk.send(jsonStats, "_heros", [])]);
    smalltalk.send(self, "_special_", [smalltalk.send(jsonStats, "_special", [])]);
    return self;
},
args: ["jsonStats"],
source: "stats: jsonStats\x0a\x09self move: jsonStats move.\x0a\x09self attack: jsonStats attack.\x0a\x09self knockback: jsonStats knockback.\x0a\x09self heros: jsonStats heros.\x0a\x09self special: jsonStats special.\x0a\x09\x22self heros ifTrue: [self hp: 2] ifFalse: [self hp: 4].\x22",
messageSends: ["move:", "move", "attack:", "attack", "knockback:", "knockback", "heros:", "heros", "special:", "special"],
referencedClasses: []
}),
smalltalk.Monster);


smalltalk.addMethod(
"_newWithContext_jsonMonster_",
smalltalk.method({
selector: "newWithContext:jsonMonster:",
category: 'instance creation',
fn: function (aContext, aJsonMonster) {
    var self = this;
    return function ($rec) {smalltalk.send($rec, "_initializeContext_imageKey_", [aContext, smalltalk.send(aJsonMonster, "_name", [])]);smalltalk.send($rec, "_initializeStats_", [smalltalk.send(aJsonMonster, "_name", [])]);smalltalk.send($rec, "_initializeSide_", [smalltalk.send(aJsonMonster, "_side", [])]);return smalltalk.send($rec, "_yourself", []);}(smalltalk.send(self, "_new", []));
    return self;
},
args: ["aContext", "aJsonMonster"],
source: "newWithContext: aContext jsonMonster: aJsonMonster\x0a\x09^self new\x0a\x09\x09initializeContext: aContext imageKey: aJsonMonster name;\x0a\x09\x09initializeStats: aJsonMonster name;\x0a\x09\x09initializeSide: aJsonMonster side;\x0a\x09\x09yourself.\x0a",
messageSends: ["initializeContext:imageKey:", "name", "initializeStats:", "initializeSide:", "side", "yourself", "new"],
referencedClasses: []
}),
smalltalk.Monster.klass);


smalltalk.addClass('Map', smalltalk.Object, ['mapX', 'mapY', 'cells', 'canvas', 'currentCell'], 'Easnoth-Core-Display');
smalltalk.Map.comment="\x22singleton Map, represents all the map drawed in the canvas\x22"
smalltalk.addMethod(
"_addSelection_",
smalltalk.method({
selector: "addSelection:",
category: 'selection',
fn: function (aCellCollection) {
    var self = this;
    smalltalk.send(aCellCollection, "_do_", [function (cell) {return smalltalk.send(cell, "_addSelector", []);}]);
    return self;
},
args: ["aCellCollection"],
source: "addSelection: aCellCollection\x0a\x09aCellCollection do: [:cell | cell addSelector].",
messageSends: ["do:", "addSelector"],
referencedClasses: []
}),
smalltalk.Map);

smalltalk.addMethod(
"_attackableCellsNextTo_side_",
smalltalk.method({
selector: "attackableCellsNextTo:side:",
category: 'cell-delegate',
fn: function (aCell, aSide) {
    var self = this;
    return smalltalk.send(smalltalk.send(self, "_cellsNextTo_", [aCell]), "_select_", [function (each) {return smalltalk.send(each, "_canAttack_", [aSide]);}]);
    return self;
},
args: ["aCell", "aSide"],
source: "attackableCellsNextTo: aCell side: aSide\x0a\x09^(self cellsNextTo: aCell) select: [:each | \x0a\x09\x09\x09each canAttack: aSide]",
messageSends: ["select:", "cellsNextTo:", "canAttack:"],
referencedClasses: []
}),
smalltalk.Map);

smalltalk.addMethod(
"_calculX_y_",
smalltalk.method({
selector: "calculX:y:",
category: 'cell-delegate',
fn: function (i, j) {
    var self = this;
    var xpos = nil;
    var ypos = nil;
    var temp = nil;
    var cood = nil;
    var sin45 = nil;
    var sin15 = nil;
    var sin135 = nil;
    var sin75 = nil;
    sin45 = 0.707106781;
    sin15 = 0.258819045;
    sin135 = 0.233445364;
    sin75 = 0.965925826;
    temp = smalltalk.send(($receiver = j).klass === smalltalk.Number ? $receiver + (($receiver = ($receiver = i).klass === smalltalk.Number ? $receiver + 1 : smalltalk.send($receiver, "__plus", [1])).klass === smalltalk.Number ? $receiver / 2 : smalltalk.send($receiver, "__slash", [2])) : smalltalk.send($receiver, "__plus", [($receiver = ($receiver = i).klass === smalltalk.Number ? $receiver + 1 : smalltalk.send($receiver, "__plus", [1])).klass === smalltalk.Number ? $receiver / 2 : smalltalk.send($receiver, "__slash", [2])]), "_truncated", []);
    xpos = ($receiver = ($receiver = ($receiver = ($receiver = i).klass === smalltalk.Number ? $receiver * (($receiver = sin45).klass === smalltalk.Number ? $receiver + sin75 : smalltalk.send($receiver, "__plus", [sin75])) : smalltalk.send($receiver, "__star", [($receiver = sin45).klass === smalltalk.Number ? $receiver + sin75 : smalltalk.send($receiver, "__plus", [sin75])])).klass === smalltalk.Number ? $receiver - (($receiver = temp).klass === smalltalk.Number ? $receiver * (($receiver = sin15).klass === smalltalk.Number ? $receiver + sin75 : smalltalk.send($receiver, "__plus", [sin75])) : smalltalk.send($receiver, "__star", [($receiver = sin15).klass === smalltalk.Number ? $receiver + sin75 : smalltalk.send($receiver, "__plus", [sin75])])) : smalltalk.send($receiver, "__minus", [($receiver = temp).klass === smalltalk.Number ? $receiver * (($receiver = sin15).klass === smalltalk.Number ? $receiver + sin75 : smalltalk.send($receiver, "__plus", [sin75])) : smalltalk.send($receiver, "__star", [($receiver = sin15).klass === smalltalk.Number ? $receiver + sin75 : smalltalk.send($receiver, "__plus", [sin75])])])).klass === smalltalk.Number ? $receiver * smalltalk.send(self, "_tileUnit", []) : smalltalk.send($receiver, "__star", [smalltalk.send(self, "_tileUnit", [])])).klass === smalltalk.Number ? $receiver + smalltalk.send(self, "_mapX", []) : smalltalk.send($receiver, "__plus", [smalltalk.send(self, "_mapX", [])]);
    ypos = ($receiver = ($receiver = ($receiver = ($receiver = ($receiver = temp).klass === smalltalk.Number ? $receiver * (($receiver = sin15).klass === smalltalk.Number ? $receiver + sin75 : smalltalk.send($receiver, "__plus", [sin75])) : smalltalk.send($receiver, "__star", [($receiver = sin15).klass === smalltalk.Number ? $receiver + sin75 : smalltalk.send($receiver, "__plus", [sin75])])).klass === smalltalk.Number ? $receiver / 2 : smalltalk.send($receiver, "__slash", [2])).klass === smalltalk.Number ? $receiver + (($receiver = i).klass === smalltalk.Number ? $receiver * sin135 : smalltalk.send($receiver, "__star", [sin135])) : smalltalk.send($receiver, "__plus", [($receiver = i).klass === smalltalk.Number ? $receiver * sin135 : smalltalk.send($receiver, "__star", [sin135])])).klass === smalltalk.Number ? $receiver * smalltalk.send(self, "_tileUnit", []) : smalltalk.send($receiver, "__star", [smalltalk.send(self, "_tileUnit", [])])).klass === smalltalk.Number ? $receiver + smalltalk.send(self, "_mapY", []) : smalltalk.send($receiver, "__plus", [smalltalk.send(self, "_mapY", [])]);
    cood = smalltalk.send(smalltalk.Array || Array, "_with_with_", [xpos, ypos]);
    return cood;
    return self;
},
args: ["i", "j"],
source: "calculX: i y: j\x0a\x09|xpos ypos temp cood sin45 sin15 sin135 sin75|\x0a\x0a\x09sin45 := 0.707106781. \x22Pi/4\x22\x0a\x09sin15 := 0.258819045. \x22Pi/12\x22\x0a\x09sin135 := 0.233445364. \x22???->I used Approximation\x22\x0a\x09sin75 := 0.965925826. \x225*Pi/12\x22\x0a\x0a\x09temp := (j + ((i + 1)/2)) truncated.\x0a\x09xpos := (i * (sin45 + sin75) - (temp* (sin15 + sin75))) * self tileUnit + self mapX.\x0a\x09ypos := (temp * (sin15 + sin75) / 2 + (i * sin135)) * self tileUnit + self mapY.\x0a\x09cood := Array with: xpos with: ypos.\x0a\x09\x0a\x09^cood",
messageSends: ["truncated", "+", "/", "*", "-", "tileUnit", "mapX", "mapY", "with:with:"],
referencedClasses: ["Array"]
}),
smalltalk.Map);

smalltalk.addMethod(
"_canvas",
smalltalk.method({
selector: "canvas",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@canvas'];
    return self;
},
args: [],
source: "canvas\x0a\x09^canvas",
messageSends: [],
referencedClasses: []
}),
smalltalk.Map);

smalltalk.addMethod(
"_canvas_",
smalltalk.method({
selector: "canvas:",
category: 'accessing',
fn: function (aCanvas) {
    var self = this;
    self['@canvas'] = aCanvas;
    return self;
},
args: ["aCanvas"],
source: "canvas: aCanvas\x0a\x09canvas := aCanvas",
messageSends: [],
referencedClasses: []
}),
smalltalk.Map);

smalltalk.addMethod(
"_canvasId",
smalltalk.method({
selector: "canvasId",
category: 'initialize-release',
fn: function () {
    var self = this;
    return "#main";
    return self;
},
args: [],
source: "canvasId\x0a\x09^'#main'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Map);

smalltalk.addMethod(
"_canvasPadding",
smalltalk.method({
selector: "canvasPadding",
category: 'initialize-release',
fn: function () {
    var self = this;
    return 40;
    return self;
},
args: [],
source: "canvasPadding\x0a\x09^40",
messageSends: [],
referencedClasses: []
}),
smalltalk.Map);

smalltalk.addMethod(
"_cells",
smalltalk.method({
selector: "cells",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@cells'];
    return self;
},
args: [],
source: "cells\x0a\x09^cells",
messageSends: [],
referencedClasses: []
}),
smalltalk.Map);

smalltalk.addMethod(
"_cells_",
smalltalk.method({
selector: "cells:",
category: 'accessing',
fn: function (anArray) {
    var self = this;
    self['@cells'] = anArray;
    return self;
},
args: ["anArray"],
source: "cells: anArray\x0a\x09cells := anArray.",
messageSends: [],
referencedClasses: []
}),
smalltalk.Map);

smalltalk.addMethod(
"_cellsNextTo_",
smalltalk.method({
selector: "cellsNextTo:",
category: 'cell-delegate',
fn: function (aCell) {
    var self = this;
    var coods = nil;
    coods = smalltalk.send(aCell, "_coodsInMap_", [self]);
    return smalltalk.send(self, "_cellsNextToI_j_", [smalltalk.send(coods, "_at_", [1]), smalltalk.send(coods, "_at_", [2])]);
    return self;
},
args: ["aCell"],
source: "cellsNextTo: aCell\x0a\x09|coods|\x0a\x0a\x09coods := aCell coodsInMap: self.\x0a\x09^self cellsNextToI: (coods at: 1) j: (coods at: 2)",
messageSends: ["coodsInMap:", "cellsNextToI:j:", "at:"],
referencedClasses: []
}),
smalltalk.Map);

smalltalk.addMethod(
"_cellsNextToI_j_",
smalltalk.method({
selector: "cellsNextToI:j:",
category: 'cell-delegate',
fn: function (i, j) {
    var self = this;
    var neighbours = nil;
    neighbours = smalltalk.send(smalltalk.Set || Set, "_new", []);
    ($receiver = ($receiver = j).klass === smalltalk.Number ? $receiver < smalltalk.send(smalltalk.send(smalltalk.send(self, "_cells", []), "_at_", [i]), "_size", []) : smalltalk.send($receiver, "__lt", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_cells", []), "_at_", [i]), "_size", [])])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(neighbours, "_add_", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_cells", []), "_at_", [i]), "_at_", [($receiver = j).klass === smalltalk.Number ? $receiver + 1 : smalltalk.send($receiver, "__plus", [1])])]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return smalltalk.send(neighbours, "_add_", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_cells", []), "_at_", [i]), "_at_", [($receiver = j).klass === smalltalk.Number ? $receiver + 1 : smalltalk.send($receiver, "__plus", [1])])]);}]);
    ($receiver = ($receiver = j).klass === smalltalk.Number ? $receiver > 1 : smalltalk.send($receiver, "__gt", [1])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(neighbours, "_add_", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_cells", []), "_at_", [i]), "_at_", [($receiver = j).klass === smalltalk.Number ? $receiver - 1 : smalltalk.send($receiver, "__minus", [1])])]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return smalltalk.send(neighbours, "_add_", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_cells", []), "_at_", [i]), "_at_", [($receiver = j).klass === smalltalk.Number ? $receiver - 1 : smalltalk.send($receiver, "__minus", [1])])]);}]);
    ($receiver = ($receiver = i).klass === smalltalk.Number ? $receiver < smalltalk.send(smalltalk.send(self, "_cells", []), "_size", []) : smalltalk.send($receiver, "__lt", [smalltalk.send(smalltalk.send(self, "_cells", []), "_size", [])])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(neighbours, "_add_", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_cells", []), "_at_", [($receiver = i).klass === smalltalk.Number ? $receiver + 1 : smalltalk.send($receiver, "__plus", [1])]), "_at_", [j])]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return smalltalk.send(neighbours, "_add_", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_cells", []), "_at_", [($receiver = i).klass === smalltalk.Number ? $receiver + 1 : smalltalk.send($receiver, "__plus", [1])]), "_at_", [j])]);}]);
    ($receiver = ($receiver = i).klass === smalltalk.Number ? $receiver > 1 : smalltalk.send($receiver, "__gt", [1])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(neighbours, "_add_", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_cells", []), "_at_", [($receiver = i).klass === smalltalk.Number ? $receiver - 1 : smalltalk.send($receiver, "__minus", [1])]), "_at_", [j])]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return smalltalk.send(neighbours, "_add_", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_cells", []), "_at_", [($receiver = i).klass === smalltalk.Number ? $receiver - 1 : smalltalk.send($receiver, "__minus", [1])]), "_at_", [j])]);}]);
    ($receiver = smalltalk.send(smalltalk.send(i, "_\\\\", [2]), "__eq", [0])).klass === smalltalk.Boolean ? !$receiver ? function () {($receiver = smalltalk.send(($receiver = j).klass === smalltalk.Number ? $receiver < smalltalk.send(smalltalk.send(smalltalk.send(self, "_cells", []), "_at_", [i]), "_size", []) : smalltalk.send($receiver, "__lt", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_cells", []), "_at_", [i]), "_size", [])]), "_&", [($receiver = i).klass === smalltalk.Number ? $receiver < smalltalk.send(smalltalk.send(self, "_cells", []), "_size", []) : smalltalk.send($receiver, "__lt", [smalltalk.send(smalltalk.send(self, "_cells", []), "_size", [])])])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(neighbours, "_add_", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_cells", []), "_at_", [($receiver = i).klass === smalltalk.Number ? $receiver + 1 : smalltalk.send($receiver, "__plus", [1])]), "_at_", [($receiver = j).klass === smalltalk.Number ? $receiver + 1 : smalltalk.send($receiver, "__plus", [1])])]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return smalltalk.send(neighbours, "_add_", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_cells", []), "_at_", [($receiver = i).klass === smalltalk.Number ? $receiver + 1 : smalltalk.send($receiver, "__plus", [1])]), "_at_", [($receiver = j).klass === smalltalk.Number ? $receiver + 1 : smalltalk.send($receiver, "__plus", [1])])]);}]);return ($receiver = smalltalk.send(($receiver = j).klass === smalltalk.Number ? $receiver < smalltalk.send(smalltalk.send(smalltalk.send(self, "_cells", []), "_at_", [i]), "_size", []) : smalltalk.send($receiver, "__lt", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_cells", []), "_at_", [i]), "_size", [])]), "_&", [($receiver = i).klass === smalltalk.Number ? $receiver > 1 : smalltalk.send($receiver, "__gt", [1])])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(neighbours, "_add_", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_cells", []), "_at_", [($receiver = i).klass === smalltalk.Number ? $receiver - 1 : smalltalk.send($receiver, "__minus", [1])]), "_at_", [($receiver = j).klass === smalltalk.Number ? $receiver + 1 : smalltalk.send($receiver, "__plus", [1])])]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return smalltalk.send(neighbours, "_add_", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_cells", []), "_at_", [($receiver = i).klass === smalltalk.Number ? $receiver - 1 : smalltalk.send($receiver, "__minus", [1])]), "_at_", [($receiver = j).klass === smalltalk.Number ? $receiver + 1 : smalltalk.send($receiver, "__plus", [1])])]);}]);}() : function () {($receiver = smalltalk.send(($receiver = j).klass === smalltalk.Number ? $receiver > 1 : smalltalk.send($receiver, "__gt", [1]), "_&", [($receiver = i).klass === smalltalk.Number ? $receiver < smalltalk.send(smalltalk.send(self, "_cells", []), "_size", []) : smalltalk.send($receiver, "__lt", [smalltalk.send(smalltalk.send(self, "_cells", []), "_size", [])])])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(neighbours, "_add_", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_cells", []), "_at_", [($receiver = i).klass === smalltalk.Number ? $receiver + 1 : smalltalk.send($receiver, "__plus", [1])]), "_at_", [($receiver = j).klass === smalltalk.Number ? $receiver - 1 : smalltalk.send($receiver, "__minus", [1])])]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return smalltalk.send(neighbours, "_add_", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_cells", []), "_at_", [($receiver = i).klass === smalltalk.Number ? $receiver + 1 : smalltalk.send($receiver, "__plus", [1])]), "_at_", [($receiver = j).klass === smalltalk.Number ? $receiver - 1 : smalltalk.send($receiver, "__minus", [1])])]);}]);return ($receiver = smalltalk.send(($receiver = j).klass === smalltalk.Number ? $receiver > 1 : smalltalk.send($receiver, "__gt", [1]), "_&", [($receiver = i).klass === smalltalk.Number ? $receiver > 1 : smalltalk.send($receiver, "__gt", [1])])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(neighbours, "_add_", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_cells", []), "_at_", [($receiver = i).klass === smalltalk.Number ? $receiver - 1 : smalltalk.send($receiver, "__minus", [1])]), "_at_", [($receiver = j).klass === smalltalk.Number ? $receiver - 1 : smalltalk.send($receiver, "__minus", [1])])]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return smalltalk.send(neighbours, "_add_", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_cells", []), "_at_", [($receiver = i).klass === smalltalk.Number ? $receiver - 1 : smalltalk.send($receiver, "__minus", [1])]), "_at_", [($receiver = j).klass === smalltalk.Number ? $receiver - 1 : smalltalk.send($receiver, "__minus", [1])])]);}]);}() : smalltalk.send($receiver, "_ifFalse_ifTrue_", [function () {($receiver = smalltalk.send(($receiver = j).klass === smalltalk.Number ? $receiver < smalltalk.send(smalltalk.send(smalltalk.send(self, "_cells", []), "_at_", [i]), "_size", []) : smalltalk.send($receiver, "__lt", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_cells", []), "_at_", [i]), "_size", [])]), "_&", [($receiver = i).klass === smalltalk.Number ? $receiver < smalltalk.send(smalltalk.send(self, "_cells", []), "_size", []) : smalltalk.send($receiver, "__lt", [smalltalk.send(smalltalk.send(self, "_cells", []), "_size", [])])])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(neighbours, "_add_", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_cells", []), "_at_", [($receiver = i).klass === smalltalk.Number ? $receiver + 1 : smalltalk.send($receiver, "__plus", [1])]), "_at_", [($receiver = j).klass === smalltalk.Number ? $receiver + 1 : smalltalk.send($receiver, "__plus", [1])])]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return smalltalk.send(neighbours, "_add_", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_cells", []), "_at_", [($receiver = i).klass === smalltalk.Number ? $receiver + 1 : smalltalk.send($receiver, "__plus", [1])]), "_at_", [($receiver = j).klass === smalltalk.Number ? $receiver + 1 : smalltalk.send($receiver, "__plus", [1])])]);}]);return ($receiver = smalltalk.send(($receiver = j).klass === smalltalk.Number ? $receiver < smalltalk.send(smalltalk.send(smalltalk.send(self, "_cells", []), "_at_", [i]), "_size", []) : smalltalk.send($receiver, "__lt", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_cells", []), "_at_", [i]), "_size", [])]), "_&", [($receiver = i).klass === smalltalk.Number ? $receiver > 1 : smalltalk.send($receiver, "__gt", [1])])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(neighbours, "_add_", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_cells", []), "_at_", [($receiver = i).klass === smalltalk.Number ? $receiver - 1 : smalltalk.send($receiver, "__minus", [1])]), "_at_", [($receiver = j).klass === smalltalk.Number ? $receiver + 1 : smalltalk.send($receiver, "__plus", [1])])]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return smalltalk.send(neighbours, "_add_", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_cells", []), "_at_", [($receiver = i).klass === smalltalk.Number ? $receiver - 1 : smalltalk.send($receiver, "__minus", [1])]), "_at_", [($receiver = j).klass === smalltalk.Number ? $receiver + 1 : smalltalk.send($receiver, "__plus", [1])])]);}]);}, function () {($receiver = smalltalk.send(($receiver = j).klass === smalltalk.Number ? $receiver > 1 : smalltalk.send($receiver, "__gt", [1]), "_&", [($receiver = i).klass === smalltalk.Number ? $receiver < smalltalk.send(smalltalk.send(self, "_cells", []), "_size", []) : smalltalk.send($receiver, "__lt", [smalltalk.send(smalltalk.send(self, "_cells", []), "_size", [])])])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(neighbours, "_add_", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_cells", []), "_at_", [($receiver = i).klass === smalltalk.Number ? $receiver + 1 : smalltalk.send($receiver, "__plus", [1])]), "_at_", [($receiver = j).klass === smalltalk.Number ? $receiver - 1 : smalltalk.send($receiver, "__minus", [1])])]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return smalltalk.send(neighbours, "_add_", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_cells", []), "_at_", [($receiver = i).klass === smalltalk.Number ? $receiver + 1 : smalltalk.send($receiver, "__plus", [1])]), "_at_", [($receiver = j).klass === smalltalk.Number ? $receiver - 1 : smalltalk.send($receiver, "__minus", [1])])]);}]);return ($receiver = smalltalk.send(($receiver = j).klass === smalltalk.Number ? $receiver > 1 : smalltalk.send($receiver, "__gt", [1]), "_&", [($receiver = i).klass === smalltalk.Number ? $receiver > 1 : smalltalk.send($receiver, "__gt", [1])])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(neighbours, "_add_", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_cells", []), "_at_", [($receiver = i).klass === smalltalk.Number ? $receiver - 1 : smalltalk.send($receiver, "__minus", [1])]), "_at_", [($receiver = j).klass === smalltalk.Number ? $receiver - 1 : smalltalk.send($receiver, "__minus", [1])])]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return smalltalk.send(neighbours, "_add_", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_cells", []), "_at_", [($receiver = i).klass === smalltalk.Number ? $receiver - 1 : smalltalk.send($receiver, "__minus", [1])]), "_at_", [($receiver = j).klass === smalltalk.Number ? $receiver - 1 : smalltalk.send($receiver, "__minus", [1])])]);}]);}]);
    return neighbours;
    return self;
},
args: ["i", "j"],
source: "cellsNextToI: i j: j\x0a\x09|neighbours|\x0a\x09\x0a\x09neighbours := Set new.\x0a\x09(j < (self cells at: i) size) ifTrue: [neighbours add: ((self cells at: i) at: j + 1)].\x0a\x09(j > 1) ifTrue: [neighbours add: ((self cells at: i) at: j - 1)].\x0a\x09(i < self cells size) ifTrue: [neighbours add: ((self cells at: i + 1) at: j)].\x0a\x09(i > 1) ifTrue: [neighbours add: ((self cells at: i - 1) at: j)].\x0a\x09\x0a\x09(i \x5c\x5c 2 = 0) ifFalse: [\x0a\x09\x09((j < (self cells at: i) size) & (i < self cells size)) ifTrue: [neighbours add: ((self cells at: i + 1) at: j + 1)].\x0a\x09\x09((j < (self cells at: i) size) & (i > 1)) ifTrue: [neighbours add: ((self cells at: i - 1) at: j + 1)].\x0a\x09] ifTrue: [\x0a\x09\x09((j > 1) & (i < self cells size)) ifTrue: [neighbours add: ((self cells at: i + 1) at: j - 1)].\x0a\x09\x09((j > 1) & (i > 1)) ifTrue: [neighbours add: ((self cells at: i - 1) at: j - 1)].\x0a\x09].\x0a\x0a\x09^neighbours",
messageSends: ["new", "ifTrue:", "<", "size", "at:", "cells", "add:", "+", ">", "-", "ifFalse:ifTrue:", "=", "\x5c\x5c\x5c\x5c", "&"],
referencedClasses: ["Set"]
}),
smalltalk.Map);

smalltalk.addMethod(
"_coodsOf_",
smalltalk.method({
selector: "coodsOf:",
category: 'cell-delegate',
fn: function (aCell) {
    var self = this;
    var $early = {};
    try {
        smalltalk.send(smalltalk.send(self, "_cells", []), "_withIndexDo_", [function (row, i) {return smalltalk.send(row, "_withIndexDo_", [function (cell, j) {return ($receiver = smalltalk.send(cell, "__eq", [aCell])).klass === smalltalk.Boolean ? $receiver ? function () {return function () {throw $early = [smalltalk.send(smalltalk.Array || Array, "_with_with_", [i, j])];}();}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return function () {throw $early = [smalltalk.send(smalltalk.Array || Array, "_with_with_", [i, j])];}();}]);}]);}]);
        return self;
    } catch (e) {
        if (e === $early) {
            return e[0];
        }
        throw e;
    }
},
args: ["aCell"],
source: "coodsOf: aCell\x0a\x09self cells withIndexDo: [:row :i |\x0a\x09\x09row withIndexDo: [ :cell :j |\x0a\x09\x09\x09(cell = aCell) ifTrue:[^Array with: i with: j]\x0a\x09\x09]\x0a\x09]",
messageSends: ["withIndexDo:", "cells", "ifTrue:", "=", "with:with:"],
referencedClasses: ["Array"]
}),
smalltalk.Map);

smalltalk.addMethod(
"_currentCell",
smalltalk.method({
selector: "currentCell",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@currentCell'];
    return self;
},
args: [],
source: "currentCell\x0a\x09\x22Cell where mouse is\x22\x0a\x09^currentCell",
messageSends: [],
referencedClasses: []
}),
smalltalk.Map);

smalltalk.addMethod(
"_currentCell_",
smalltalk.method({
selector: "currentCell:",
category: 'accessing',
fn: function (aCell) {
    var self = this;
    self['@currentCell'] = aCell;
    return self;
},
args: ["aCell"],
source: "currentCell: aCell\x0a\x09\x22Cell where mouse is\x22\x0a\x09currentCell := aCell",
messageSends: [],
referencedClasses: []
}),
smalltalk.Map);

smalltalk.addMethod(
"_goDown",
smalltalk.method({
selector: "goDown",
category: 'eventHandling',
fn: function () {
    var self = this;
    smalltalk.send(self, "_mapY_", [($receiver = smalltalk.send(self, "_mapY", [])).klass === smalltalk.Number ? $receiver + 10 : smalltalk.send($receiver, "__plus", [10])]);
    smalltalk.send(self, "_update", []);
    return self;
},
args: [],
source: "goDown\x0a\x09self mapY: self mapY + 10.\x0a\x09self update",
messageSends: ["mapY:", "+", "mapY", "update"],
referencedClasses: []
}),
smalltalk.Map);

smalltalk.addMethod(
"_goLeft",
smalltalk.method({
selector: "goLeft",
category: 'eventHandling',
fn: function () {
    var self = this;
    smalltalk.send(self, "_mapX_", [($receiver = smalltalk.send(self, "_mapX", [])).klass === smalltalk.Number ? $receiver - 10 : smalltalk.send($receiver, "__minus", [10])]);
    smalltalk.send(self, "_update", []);
    return self;
},
args: [],
source: "goLeft\x0a\x09self mapX: self mapX - 10.\x0a\x09self update",
messageSends: ["mapX:", "-", "mapX", "update"],
referencedClasses: []
}),
smalltalk.Map);

smalltalk.addMethod(
"_goRight",
smalltalk.method({
selector: "goRight",
category: 'eventHandling',
fn: function () {
    var self = this;
    smalltalk.send(self, "_mapX_", [($receiver = smalltalk.send(self, "_mapX", [])).klass === smalltalk.Number ? $receiver + 10 : smalltalk.send($receiver, "__plus", [10])]);
    smalltalk.send(self, "_update", []);
    return self;
},
args: [],
source: "goRight\x0a\x09self mapX: self mapX + 10.\x0a\x09self update",
messageSends: ["mapX:", "+", "mapX", "update"],
referencedClasses: []
}),
smalltalk.Map);

smalltalk.addMethod(
"_goUp",
smalltalk.method({
selector: "goUp",
category: 'eventHandling',
fn: function () {
    var self = this;
    smalltalk.send(self, "_mapY_", [($receiver = smalltalk.send(self, "_mapY", [])).klass === smalltalk.Number ? $receiver - 10 : smalltalk.send($receiver, "__minus", [10])]);
    smalltalk.send(self, "_update", []);
    return self;
},
args: [],
source: "goUp\x0a\x09self mapY: self mapY - 10.\x0a\x09self update",
messageSends: ["mapY:", "-", "mapY", "update"],
referencedClasses: []
}),
smalltalk.Map);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function () {
    var self = this;
    smalltalk.send(self, "_initialize", [], smalltalk.Map.superclass || nil);
    smalltalk.send(self, "_canvas_", [smalltalk.send(smalltalk.TagBrush || TagBrush, "_fromJQuery_canvas_", [smalltalk.send(smalltalk.send(self, "_canvasId", []), "_asJQuery", []), smalltalk.send(smalltalk.HTMLCanvas || HTMLCanvas, "_onJQuery_", [smalltalk.send("body", "_asJQuery", [])])])]);
    smalltalk.send(self, "_mapX_", [smalltalk.send(self, "_canvasPadding", [])]);
    smalltalk.send(self, "_mapY_", [smalltalk.send(self, "_canvasPadding", [])]);
    return self;
},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x0a\x09\x22set html5 canvas to map canvas\x22\x0a\x09self canvas: (TagBrush fromJQuery: self canvasId asJQuery canvas: (HTMLCanvas onJQuery: 'body' asJQuery)).\x0a\x0a\x09self mapX: self canvasPadding.\x0a\x09self mapY: self canvasPadding.",
messageSends: ["initialize", "canvas:", "fromJQuery:canvas:", "asJQuery", "canvasId", "onJQuery:", "mapX:", "canvasPadding", "mapY:"],
referencedClasses: ["TagBrush", "HTMLCanvas"]
}),
smalltalk.Map);

smalltalk.addMethod(
"_initializeCellsFromJson_",
smalltalk.method({
selector: "initializeCellsFromJson:",
category: 'initialize-release',
fn: function (jsonObject) {
    var self = this;
    var cood = nil;
    smalltalk.send(self, "_cells_", [smalltalk.send(smalltalk.Array || Array, "_new_", [smalltalk.send(smalltalk.send(jsonObject, "_row", []), "_size", [])])]);
    smalltalk.send(smalltalk.send(jsonObject, "_row", []), "_withIndexDo_", [function (row, i) {smalltalk.send(smalltalk.send(self, "_cells", []), "_at_put_", [i, smalltalk.send(smalltalk.Array || Array, "_new_", [smalltalk.send(smalltalk.send(row, "_cells", []), "_size", [])])]);return smalltalk.send(smalltalk.send(row, "_cells", []), "_withIndexDo_", [function (cell, j) {cood = smalltalk.send(self, "_calculX_y_", [i, j]);return smalltalk.send(smalltalk.send(smalltalk.send(self, "_cells", []), "_at_", [i]), "_at_put_", [j, smalltalk.send(smalltalk.Cell || Cell, "_newWithContext_jsoncell_coods_", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_canvas", []), "_element", []), "_getContext_", ["2d"]), cell, cood])]);}]);}]);
    return self;
},
args: ["jsonObject"],
source: "initializeCellsFromJson: jsonObject\x0a\x09|cood|\x0a\x0a\x09self cells: (Array new: (jsonObject row size)).\x0a\x09jsonObject row withIndexDo: [:row :i |\x0a\x09\x09self cells at: i put: (Array new: (row cells size)).\x0a\x09\x09row cells withIndexDo: [ :cell :j |\x0a\x09\x09\x09cood := self calculX: i y: j.\x0a\x09\x09\x09(self cells at: i) at: j put: (Cell newWithContext: (self canvas element getContext: '2d') jsoncell: cell coods: cood).\x0a\x09\x09]\x0a\x09].",
messageSends: ["cells:", "new:", "size", "row", "withIndexDo:", "at:put:", "cells", "calculX:y:", "at:", "newWithContext:jsoncell:coods:", "getContext:", "element", "canvas"],
referencedClasses: ["Array", "Cell"]
}),
smalltalk.Map);

smalltalk.addMethod(
"_initializeEventHandling",
smalltalk.method({
selector: "initializeEventHandling",
category: 'initialize-release',
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_canvas", []), "_onClick_", [function () {return smalltalk.send(self, "_mouseClick", []);}]);
    smalltalk.send(smalltalk.send(self, "_canvas", []), "_onMouseMove_", [function (e) {return smalltalk.send(self, "_mouseMove_", [e]);}]);
    smalltalk.send(smalltalk.send(smalltalk.send(".up", "_asJQuery", []), "_at_", [0]), "_at_put_", ["onclick", function () {return smalltalk.send(self, "_goUp", []);}]);
    smalltalk.send(smalltalk.send(smalltalk.send(".left", "_asJQuery", []), "_at_", [0]), "_at_put_", ["onclick", function () {return smalltalk.send(self, "_goLeft", []);}]);
    smalltalk.send(smalltalk.send(smalltalk.send(".right", "_asJQuery", []), "_at_", [0]), "_at_put_", ["onclick", function () {return smalltalk.send(self, "_goRight", []);}]);
    smalltalk.send(smalltalk.send(smalltalk.send(".down", "_asJQuery", []), "_at_", [0]), "_at_put_", ["onclick", function () {return smalltalk.send(self, "_goDown", []);}]);
    smalltalk.send(smalltalk.send(smalltalk.send(".mirrorHorizontal", "_asJQuery", []), "_at_", [0]), "_at_put_", ["onclick", function () {return smalltalk.send(self, "_mirrorHorizontal", []);}]);
    smalltalk.send(smalltalk.send(smalltalk.send(".mirrorVertical", "_asJQuery", []), "_at_", [0]), "_at_put_", ["onclick", function () {return smalltalk.send(self, "_mirrorVertical", []);}]);
    smalltalk.send(smalltalk.send("window", "_asJQuery", []), "_resize_", [function () {return smalltalk.send(self, "_update", []);}]);
    return self;
},
args: [],
source: "initializeEventHandling\x0a\x09self canvas onClick: [self mouseClick].\x0a\x09self canvas onMouseMove: [:e | self mouseMove: e].\x0a\x0a\x09('.up' asJQuery at: 0) at: 'onclick' put: [self goUp].\x0a\x09('.left' asJQuery at: 0) at: 'onclick' put: [self goLeft].\x0a\x09('.right' asJQuery at: 0) at: 'onclick' put: [self goRight].\x0a\x09('.down' asJQuery at: 0) at: 'onclick' put: [self goDown].\x0a\x09('.mirrorHorizontal' asJQuery at: 0) at: 'onclick' put: [self mirrorHorizontal].\x0a\x09('.mirrorVertical' asJQuery at: 0) at: 'onclick' put: [self mirrorVertical].\x0a\x0a\x09'window' asJQuery resize: [self update].",
messageSends: ["onClick:", "canvas", "mouseClick", "onMouseMove:", "mouseMove:", "at:put:", "at:", "asJQuery", "goUp", "goLeft", "goRight", "goDown", "mirrorHorizontal", "mirrorVertical", "resize:", "update"],
referencedClasses: []
}),
smalltalk.Map);

smalltalk.addMethod(
"_initializeFromJson_",
smalltalk.method({
selector: "initializeFromJson:",
category: 'initialize-release',
fn: function (jsonObject) {
    var self = this;
    smalltalk.send(typeof map == "undefined" ? nil : map, "_mapX_", [($receiver = smalltalk.send(typeof map == "undefined" ? nil : map, "_mapX", [])).klass === smalltalk.Number ? $receiver + (($receiver = ($receiver = smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(jsonObject, "_row", []), "_at_", [1]), "_cells", []), "_size", [])).klass === smalltalk.Number ? $receiver * smalltalk.send(typeof map == "undefined" ? nil : map, "_tileUnit", []) : smalltalk.send($receiver, "__star", [smalltalk.send(typeof map == "undefined" ? nil : map, "_tileUnit", [])])).klass === smalltalk.Number ? $receiver * 1.17 : smalltalk.send($receiver, "__star", [1.17])) : smalltalk.send($receiver, "__plus", [($receiver = ($receiver = smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(jsonObject, "_row", []), "_at_", [1]), "_cells", []), "_size", [])).klass === smalltalk.Number ? $receiver * smalltalk.send(typeof map == "undefined" ? nil : map, "_tileUnit", []) : smalltalk.send($receiver, "__star", [smalltalk.send(typeof map == "undefined" ? nil : map, "_tileUnit", [])])).klass === smalltalk.Number ? $receiver * 1.17 : smalltalk.send($receiver, "__star", [1.17])])]);
    smalltalk.send(smalltalk.send(smalltalk.ImageCache || ImageCache, "_getSingleton", []), "_onload_", [function () {return smalltalk.send(typeof map == "undefined" ? nil : map, "_update", []);}]);
    smalltalk.send(typeof map == "undefined" ? nil : map, "_initializeCellsFromJson_", [jsonObject]);
    smalltalk.send(typeof map == "undefined" ? nil : map, "_initializeEventHandling", []);
    return self;
},
args: ["jsonObject"],
source: "initializeFromJson: jsonObject\x0a\x0a\x09\x22mapX adjustment according to mapSize\x22\x0a\x09map mapX: map mapX + ((jsonObject row at:1) cells size * map tileUnit * 1.17).\x0a\x0a\x09\x22cache initializing\x22\x0a\x09ImageCache getSingleton onload: [map update].\x0a\x0a\x09\x22cells initializing\x22\x0a\x09map initializeCellsFromJson: jsonObject.\x0a\x09\x0a\x09\x22events management\x22\x0a\x09map initializeEventHandling.",
messageSends: ["mapX:", "+", "mapX", "*", "size", "cells", "at:", "row", "tileUnit", "onload:", "getSingleton", "update", "initializeCellsFromJson:", "initializeEventHandling"],
referencedClasses: ["ImageCache"]
}),
smalltalk.Map);

smalltalk.addMethod(
"_mapX",
smalltalk.method({
selector: "mapX",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@mapX'];
    return self;
},
args: [],
source: "mapX\x0a\x09^mapX",
messageSends: [],
referencedClasses: []
}),
smalltalk.Map);

smalltalk.addMethod(
"_mapX_",
smalltalk.method({
selector: "mapX:",
category: 'accessing',
fn: function (aLength) {
    var self = this;
    self['@mapX'] = aLength;
    ($receiver = smalltalk.send(self, "_cells", [])) != nil &&
        $receiver != undefined ? function () {return smalltalk.send(self, "_updateCellsCoods", []);}() : nil;
    return self;
},
args: ["aLength"],
source: "mapX: aLength\x0a\x09mapX := aLength.\x0a\x09self cells ifNotNil: [self updateCellsCoods].",
messageSends: ["ifNotNil:", "cells", "updateCellsCoods"],
referencedClasses: []
}),
smalltalk.Map);

smalltalk.addMethod(
"_mapY",
smalltalk.method({
selector: "mapY",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@mapY'];
    return self;
},
args: [],
source: "mapY\x0a\x09^mapY",
messageSends: [],
referencedClasses: []
}),
smalltalk.Map);

smalltalk.addMethod(
"_mapY_",
smalltalk.method({
selector: "mapY:",
category: 'accessing',
fn: function (aLength) {
    var self = this;
    self['@mapY'] = aLength;
    ($receiver = smalltalk.send(self, "_cells", [])) != nil &&
        $receiver != undefined ? function () {return smalltalk.send(self, "_updateCellsCoods", []);}() : nil;
    return self;
},
args: ["aLength"],
source: "mapY: aLength\x0a\x09mapY := aLength.\x0a\x09self cells ifNotNil: [self updateCellsCoods].",
messageSends: ["ifNotNil:", "cells", "updateCellsCoods"],
referencedClasses: []
}),
smalltalk.Map);

smalltalk.addMethod(
"_mirrorHorizontal",
smalltalk.method({
selector: "mirrorHorizontal",
category: 'eventHandling',
fn: function () {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_translate_y_", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_canvas", []), "_element", []), "_width", []), 0]);return smalltalk.send($rec, "_scale_y_", [smalltalk.send(1, "_negated", []), 1]);}(smalltalk.send(smalltalk.send(smalltalk.send(self, "_canvas", []), "_element", []), "_getContext_", ["2d"])));
    smalltalk.send(self, "_update", []);
    return self;
},
args: [],
source: "mirrorHorizontal\x0a\x09(self canvas element getContext: '2d') translate: self canvas element width y: 0;\x0a\x09\x09scale: 1 negated y: 1.\x0a\x09self update.",
messageSends: ["translate:y:", "width", "element", "canvas", "scale:y:", "negated", "getContext:", "update"],
referencedClasses: []
}),
smalltalk.Map);

smalltalk.addMethod(
"_mirrorVertical",
smalltalk.method({
selector: "mirrorVertical",
category: 'eventHandling',
fn: function () {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_translate_y_", [0, smalltalk.send(smalltalk.send(smalltalk.send(self, "_canvas", []), "_element", []), "_height", [])]);return smalltalk.send($rec, "_scale_y_", [1, smalltalk.send(1, "_negated", [])]);}(smalltalk.send(smalltalk.send(smalltalk.send(self, "_canvas", []), "_element", []), "_getContext_", ["2d"])));
    smalltalk.send(self, "_update", []);
    return self;
},
args: [],
source: "mirrorVertical\x0a\x09(self canvas element getContext: '2d') translate: 0 y: self canvas element height;\x0a\x09\x09scale: 1 y: 1 negated.\x0a\x09self update.",
messageSends: ["translate:y:", "height", "element", "canvas", "scale:y:", "negated", "getContext:", "update"],
referencedClasses: []
}),
smalltalk.Map);

smalltalk.addMethod(
"_monsters",
smalltalk.method({
selector: "monsters",
category: 'monster-selection',
fn: function () {
    var self = this;
    var monsters = nil;
    monsters = smalltalk.send(smalltalk.Array || Array, "_new", []);
    smalltalk.send(smalltalk.send(self, "_cells", []), "_collect_", [function (row) {return smalltalk.send(row, "_collect_", [function (cell) {return ($receiver = smalltalk.send(cell, "_monster", [])) != nil && $receiver != undefined ? function () {return smalltalk.send(monsters, "_add_", [smalltalk.send(cell, "_monster", [])]);}() : nil;}]);}]);
    return monsters;
    return self;
},
args: [],
source: "monsters\x0a\x09|monsters|\x0a\x09monsters := Array new.\x0a\x09self cells collect: [:row |\x0a\x09\x09row collect: [ :cell | \x0a\x09\x09\x09cell monster ifNotNil: [monsters add: cell monster]\x0a\x09\x09]\x0a\x09].\x0a\x09^monsters",
messageSends: ["new", "collect:", "cells", "ifNotNil:", "monster", "add:"],
referencedClasses: ["Array"]
}),
smalltalk.Map);

smalltalk.addMethod(
"_monstersFromSide_",
smalltalk.method({
selector: "monstersFromSide:",
category: 'monster-selection',
fn: function (aSide) {
    var self = this;
    return smalltalk.send(smalltalk.send(self, "_monsters", []), "_select_", [function (each) {return smalltalk.send(smalltalk.send(each, "_side", []), "__eq", [aSide]);}]);
    return self;
},
args: ["aSide"],
source: "monstersFromSide: aSide\x0a\x09^self monsters select: [:each | each side = aSide].",
messageSends: ["select:", "monsters", "=", "side"],
referencedClasses: []
}),
smalltalk.Map);

smalltalk.addMethod(
"_mouseClick",
smalltalk.method({
selector: "mouseClick",
category: 'eventHandling',
fn: function () {
    var self = this;
    smalltalk.send(self, "_removeSelection", []);
    ($receiver = smalltalk.send(self, "_currentCell", [])) != nil &&
        $receiver != undefined ? function () {return smalltalk.send(smalltalk.send(smalltalk.send(self, "_currentCell", []), "_state", []), "_mouseClick", []);}() : nil;
    smalltalk.send(self, "_update", []);
    return self;
},
args: [],
source: "mouseClick\x0a\x09\x22bug inlined the compiler : 2 if needed\x22\x0a\x09self removeSelection.\x0a\x09self currentCell ifNotNil: [ \x0a\x09\x09self currentCell state mouseClick\x0a\x09\x09\x22(self currentCell hasMonster) ifTrue: [\x0a\x09\x09\x09self addSelection: (self currentCell selectableNeighboursInMap: self side: 1).\x0a\x09\x09].\x22\x0a\x09].\x0a\x09self update",
messageSends: ["removeSelection", "ifNotNil:", "currentCell", "mouseClick", "state", "update"],
referencedClasses: []
}),
smalltalk.Map);

smalltalk.addMethod(
"_mouseCoodToHexCoodX_y_",
smalltalk.method({
selector: "mouseCoodToHexCoodX:y:",
category: 'eventHandling',
fn: function (x, y) {
    var self = this;
    var xHex = nil;
    var yHex = nil;
    var cosmaingridx = nil;
    var sinmaingridx = nil;
    var cosmaingridy = nil;
    var sinmaingridy = nil;
    var cosothergridx = nil;
    var sinothergridx = nil;
    var cosothergridy = nil;
    var sinothergridy = nil;
    var nb = nil;
    var nb2 = nil;
    var nb3 = nil;
    var nb4 = nil;
    var nbCheck = nil;
    var xConstante = nil;
    var yConstante = nil;
    var mapDisplayX = nil;
    var mapDisplayY = nil;
    var res = nil;
    cosmaingridx = 0.882947593;
    sinmaingridx = 0.469471563;
    cosmaingridy = smalltalk.send(0.130526192, "_negated", []);
    sinmaingridy = 0.991444861;
    cosothergridx = 0.4539905;
    sinothergridx = 0.891006524;
    cosothergridy = smalltalk.send(0.882947593, "_negated", []);
    sinothergridy = 0.469471563;
    mapDisplayX = smalltalk.send(self, "_mapX", []);
    mapDisplayY = smalltalk.send(self, "_mapY", []);

    function mod(n, mod) {
        return (mod + n % mod) % mod;
    }

    nb = Math.floor((y - cosmaingridx / sinmaingridx * x - (mapDisplayY + 0) + cosmaingridx / sinmaingridx * (mapDisplayX + 320)) / (55 * cosmaingridx));
    nb2 = Math.floor((y - cosmaingridy / sinmaingridy * x - (mapDisplayY + 480) + cosmaingridy / sinmaingridy * (mapDisplayX + 206)) / (173.2 * cosmaingridy));
    xConstante = 9 + mod(nb, 3);
    yConstante = 20 + mod(nb2, 2);
    if (nb2 % 2 == 0) {
        yConstante += mod(nb + 1, 2);
    }
    xHex = Math.floor((xConstante - nb) / 6 + (yConstante - nb2) / 2);
    yHex = Math.floor((nb - xConstante) / 4 + (yConstante - nb2) / 4);
    if (mod(nb, 6) == 1 && nb2 % 2 == 0) {
        xHex++;
        if (nb2 % 4 == 0 && mod(nb, 12) != 7) {
            yHex++;
        }
        if (mod(nb2, 4) == 2 && mod(nb, 12) == 7) {
            yHex++;
        }
    }
    if (nb % 3 == 0) {
        if (nb2 % 2 == 0 && nb % 6 == 0 ||
            mod(nb2, 2) == 1 && mod(nb, 6) == 3) {
            nb3 = Math.floor((y - cosothergridx / sinothergridx * x - (mapDisplayY + 0) + cosothergridx / sinothergridx * (mapDisplayX + 301)) / (68 * cosothergridx));
            nbCheck = 3 + 2 * yHex + xHex % 2;
            if (nb3 == nbCheck) {
                yHex--;
            }
        } else {
            nb4 = Math.floor((y - cosothergridy / sinothergridy * x - (mapDisplayY + 480) + cosothergridy / sinothergridy * (mapDisplayX + 212.5)) / (95.75 * cosothergridy));
            nbCheck = 7 - Math.floor(3 * xHex / 2) + yHex;
            if (nb4 == nbCheck) {
                if (xHex % 2 == 0) {
                    yHex--;
                }
                xHex++;
            }
        }
    }
    res = smalltalk.send(smalltalk.Array || Array, "_with_with_", [xHex, yHex]);
    return res;
    return self;
},
args: ["x", "y"],
source: "mouseCoodToHexCoodX: x y: y\x0a\x09\x22function that take mouse cood in pixel and return the coods of the tile selected\x22\x0a\x09\x0a\x09\x22there are issues from Amber kernel : the order of operations sometimes goes wrong in long lines :  inline compiler issue\x22\x0a\x09\x22so this algo is back to javascript\x22\x0a\x0a\x09| xHex yHex cosmaingridx sinmaingridx cosmaingridy sinmaingridy cosothergridx sinothergridx cosothergridy sinothergridy nb nb2 nb3 nb4 nbCheck xConstante yConstante mapDisplayX mapDisplayY res|\x0a\x09cosmaingridx := 0.882947593.\x0a\x09sinmaingridx := 0.469471563.\x0a\x09cosmaingridy := 0.130526192 negated.\x0a\x09sinmaingridy := 0.991444861.\x0a\x0a\x09cosothergridx := 0.4539905.\x0a\x09sinothergridx := 0.891006524.\x0a\x09cosothergridy := 0.882947593 negated.\x0a\x09sinothergridy := 0.469471563.\x0a                \x0a\x09mapDisplayX := self mapX.\x0a\x09mapDisplayY := self mapY.\x0a\x0a\x09\x09<function mod(n, mod) {\x0a\x09\x09\x09return ((mod+(n%mod))%mod);\x0a\x09\x09}\x0a\x09\x09\x0a\x09\x09nb = Math.floor(((y-(cosmaingridx/sinmaingridx)*x-(mapDisplayY+0)+(cosmaingridx/sinmaingridx)*(mapDisplayX+320))/(55*cosmaingridx)));\x0a\x09\x09nb2 = Math.floor(((y-(cosmaingridy/sinmaingridy)*x-(mapDisplayY+480)+(cosmaingridy/sinmaingridy)*(mapDisplayX+206))/(173.2*cosmaingridy)));\x0a\x09\x09\x0a\x09\x09xConstante = 9 + (mod(nb,3));\x0a\x09\x09yConstante = 20 + (mod(nb2,2));\x0a\x09\x09if (nb2%2 == 0) {yConstante += mod(nb+1,2);}\x0a\x09\x09\x0a\x09\x09xHex = Math.floor(((xConstante-nb)/6)+((yConstante-nb2)/2));\x0a\x09\x09yHex = Math.floor(((nb-xConstante)/4)+((yConstante-nb2)/4));\x0a\x09\x09\x0a\x09\x09if (mod(nb,6)==1 && nb2%2==0){\x0a\x09\x09\x09xHex++;\x0a\x09\x09\x09if (nb2%4==0 && mod(nb,12)!=7){yHex++;}\x0a\x09\x09\x09if (mod(nb2,4)==2 && mod(nb,12)==7){yHex++;}\x0a\x09\x09}\x0a\x09\x09\x0a\x09\x09if (nb%3==0) {\x09\x09\x0a\x09\x09\x09if ((nb2%2==0 && nb%6==0) || (mod(nb2,2)==1 && mod(nb,6)==3)) {\x0a\x09\x09\x09\x09nb3 = Math.floor(((y-(cosothergridx/sinothergridx)*x-(mapDisplayY+0)+(cosothergridx/sinothergridx)*(mapDisplayX+301))/(68*cosothergridx)));\x0a\x09\x09\x09\x09nbCheck = 3+2*yHex+(xHex%2);\x0a\x09\x09\x09\x09if (nb3 == nbCheck) {yHex--;}\x0a\x09\x09\x09}\x0a\x09\x09\x09else {\x0a\x09\x09\x09\x09nb4 = Math.floor(((y-(cosothergridy/sinothergridy)*x-(mapDisplayY+480)+(cosothergridy/sinothergridy)*(mapDisplayX+212.5))/(95.75*cosothergridy)));\x0a\x09\x09\x09\x09nbCheck = 7-Math.floor(3*xHex/2)+yHex;\x0a\x09\x09\x09\x09if (nb4 == nbCheck) {\x0a\x09\x09\x09\x09\x09if (xHex%2 == 0) {yHex--;}\x0a\x09\x09\x09\x09\x09xHex++;\x0a\x09\x09\x09\x09}\x0a\x09\x09\x09}\x0a\x09\x09}>.\x0a\x0a\x09res := Array with: xHex with: yHex.\x0a\x09\x0a\x09^res",
messageSends: ["negated", "mapX", "mapY", "with:with:"],
referencedClasses: ["Array"]
}),
smalltalk.Map);

smalltalk.addMethod(
"_mouseMove_",
smalltalk.method({
selector: "mouseMove:",
category: 'eventHandling',
fn: function (anEvent) {
    var self = this;
    var x = nil;
    var y = nil;
    var cood = nil;
    var canvas = nil;
    x = ($receiver = smalltalk.send(anEvent, "_pageX", [])).klass === smalltalk.Number ? $receiver - smalltalk.send(smalltalk.send(smalltalk.send(self, "_canvas", []), "_element", []), "_offsetLeft", []) : smalltalk.send($receiver, "__minus", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_canvas", []), "_element", []), "_offsetLeft", [])]);
    y = ($receiver = smalltalk.send(anEvent, "_pageY", [])).klass === smalltalk.Number ? $receiver - smalltalk.send(smalltalk.send(smalltalk.send(self, "_canvas", []), "_element", []), "_offsetTop", []) : smalltalk.send($receiver, "__minus", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_canvas", []), "_element", []), "_offsetTop", [])]);
    cood = smalltalk.send(self, "_mouseCoodToHexCoodX_y_", [x, y]);
    smalltalk.send(function () {return smalltalk.send(self, "_currentCell_", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_cells", []), "_at_", [smalltalk.send(cood, "_at_", [1])]), "_at_", [smalltalk.send(cood, "_at_", [2])])]);}, "_on_do_", [smalltalk.Error || Error, function () {return smalltalk.send(self, "_currentCell_", [nil]);}]);
    return self;
},
args: ["anEvent"],
source: "mouseMove: anEvent\x0a\x09|x y cood canvas|\x0a\x09\x0a        x := anEvent pageX - self canvas element offsetLeft.\x0a        y := anEvent pageY - self canvas element offsetTop.\x0a\x0a        cood := self mouseCoodToHexCoodX: x y: y.\x0a\x09\x0a\x09\x22if out of map then nil\x22\x0a\x09[self currentCell:((self cells at: (cood at: 1)) at: (cood at: 2))] on: Error do: [self currentCell: nil].",
messageSends: ["-", "pageX", "offsetLeft", "element", "canvas", "pageY", "offsetTop", "mouseCoodToHexCoodX:y:", "on:do:", "currentCell:", "at:", "cells"],
referencedClasses: ["Error"]
}),
smalltalk.Map);

smalltalk.addMethod(
"_movableCellsNextTo_",
smalltalk.method({
selector: "movableCellsNextTo:",
category: 'cell-delegate',
fn: function (aCell) {
    var self = this;
    return smalltalk.send(smalltalk.send(self, "_cellsNextTo_", [aCell]), "_select_", [function (each) {return smalltalk.send(each, "_canMoveTo", []);}]);
    return self;
},
args: ["aCell"],
source: "movableCellsNextTo: aCell\x0a\x09^(self cellsNextTo: aCell) select: [:each | \x0a\x09\x09\x09each canMoveTo]",
messageSends: ["select:", "cellsNextTo:", "canMoveTo"],
referencedClasses: []
}),
smalltalk.Map);

smalltalk.addMethod(
"_oldAlgoMouseCoodToHexCoodX_y_inMap_",
smalltalk.method({
selector: "oldAlgoMouseCoodToHexCoodX:y:inMap:",
category: 'eventHandling',
fn: function (x, y, aMap) {
    var self = this;
    return self;
},
args: ["x", "y", "aMap"],
source: "oldAlgoMouseCoodToHexCoodX: x y: y inMap: aMap\x0a\x09\x22function that take mouse cood in pixel and return the coods of the tile selected\x22\x0a\x09\x0a\x09\x22there are issues from Amber kernel : the order of operations sometimes goes wrong in long lines\x22\x0a\x09\x22so this algo is back to javascript\x22\x0a\x0a\x09\x22| xHex yHex cosmaingridx sinmaingridx cosmaingridy sinmaingridy cosothergridx sinothergridx cosothergridy sinothergridy nb nb2 nb3 nb4 nbCheck xConstante yConstante mapX mapY res temp1 temp2 k m|\x0a\x09cosmaingridx := 0.882947593.\x0a\x09sinmaingridx := 0.469471563.\x0a\x09cosmaingridy := 0.130526192 negated.\x0a\x09sinmaingridy := 0.991444861.\x0a\x0a\x09cosothergridx := 0.4539905.\x0a\x09sinothergridx := 0.891006524.\x0a\x09cosothergridy := 0.882947593 negated.\x0a\x09sinothergridy := 0.469471563.\x0a                \x0a\x09mapX := aMap mapX.\x0a\x09mapY := aMap mapY.\x0a\x09\x0a\x09nb := (y-(cosmaingridx/sinmaingridx*x)-mapY+0+(cosmaingridx/sinmaingridx*(mapX+320))/((55*cosmaingridx))) floor.\x0a\x09nb2 := (y-(cosmaingridy/sinmaingridy*x)-mapY+480+(cosmaingridy/sinmaingridy*(mapX+206))/(173.2*cosmaingridy)) floor.\x22\x0a\x09\x0a\x09\x22temp1 := cosmaingridx/sinmaingridx.\x0a\x09temp2 := cosmaingridy/sinmaingridy.\x0a\x09\x0a\x09k := 55*cosmaingridx.\x0a\x09m := 173.2*cosmaingridy.\x22\x0a\x0a\x09\x22nb pb vient du denominateur a calculer avant\x22\x0a\x09\x22nb2 probleme d'origine inconnu\x22\x0a\x09\x22nb := (((y-(temp1*x)-mapY+(temp1*(mapX+320)))/(k))) floor.\x0a\x09nb2 := (((y-(temp2*x)-mapY+480+(temp2*(mapX+206)))/(m))) floor.\x0a\x09\x0a\x09Transcript show: 'ST : nb',nb,'---nb2',nb2.\x0a\x09Transcript show: 'ST : k',k,'---m',m.\x0a\x09Transcript show: 'ST : t1',temp1,'---t2',temp2; cr.\x22\x0a\x0a\x09\x22<temp1 = cosmaingridx/sinmaingridx;\x0a\x09temp2 = cosmaingridy/sinmaingridy;\x0a\x09k = 55*cosmaingridx;\x0a\x09m = 173.2*cosmaingridy;>\x22\x0a\x09\x22<nb = Math.floor(((y-(temp1)*x-(mapY+0)+(temp1)*(mapX+320))/(k)));\x0a\x09nb2 = Math.floor(((y-(temp2)*x-(mapY+480)+(temp2)*(mapX+206))/(m)));>.\x22\x0a\x0a\x09\x22Transcript show: 'JS : nb',nb,'---nb2',nb2.\x0a\x09Transcript show: 'JS : k',k,'---m',m.\x0a\x09Transcript show: 'JS : t1',temp1,'---t2',temp2; cr.\x22\x0a\x0a\x09\x22xConstante := 9 + (nb mod: 3).\x0a\x09yConstante := 20 + (nb2 mod: 2).\x0a\x09(nb2\x5c\x5c2 = 0) ifTrue:[yConstante := yConstante + ((nb+1) mod: 2)].\x0a\x09\x0a\x09xHex := (xConstante-nb/6+(yConstante-nb2/2)) floor.\x0a\x09yHex := (nb-xConstante/4+(yConstante-nb2/4)) floor.\x0a\x09\x0a\x09(((nb mod: 6)=1) & ((nb2 \x5c\x5c 2)=0)) ifTrue:[\x0a\x09\x09xHex := xHex + 1.\x0a\x09\x09(((nb2 \x5c\x5c 4)=0) & (((nb mod: 12)=7) not)) ifTrue:[yHex := yHex + 1].\x0a\x09\x09(((nb2 mod: 4)=2) & ((nb mod: 12)=7)) ifTrue:[yHex := yHex + 1].\x0a\x09].\x0a\x09\x0a\x09((nb \x5c\x5c 3) = 0) ifTrue:[       \x0a\x09\x09((((nb2 \x5c\x5c 2) = 0) & ((nb \x5c\x5c 6)=0)) | (((nb2 mod: 2)=1) & ((nb mod: 6)=3))) ifTrue:[\x0a\x09\x09\x09nb3 := ((y-(cosothergridx/sinothergridx)*x-(mapY+0)+(cosothergridx/sinothergridx)*(mapX+301))/(68*cosothergridx)) floor.\x0a\x09\x09\x09nbCheck := 3 + (2 * yHex) +(xHex \x5c\x5c 2).\x0a\x09\x09\x09(nb3 = nbCheck) ifTrue:[yHex := yHex - 1].\x0a\x09\x09]\x0a\x09\x09ifFalse:[\x0a\x09\x09\x09nb4 :=((y-(cosothergridy/sinothergridy)*x-(mapY+480)+(cosothergridy/sinothergridy)*(mapX+212.5))/(95.75*cosothergridy)) floor.\x0a\x09\x09\x09nbCheck := 7 -((3*xHex/2) floor) + yHex.\x0a\x09\x09\x09(nb4 = nbCheck) ifTrue:[\x0a\x09\x09\x09\x09((xHex \x5c\x5c 2) = 0) ifTrue:[yHex := yHex - 1].\x0a\x09\x09\x09\x09xHex := xHex + 1.\x0a\x09\x09\x09].\x0a\x09\x09].\x0a\x09].\x0a\x09\x0a\x09res := Array with: xHex with: yHex.\x0a\x09\x0a\x09^res\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.Map);

smalltalk.addMethod(
"_removeSelection",
smalltalk.method({
selector: "removeSelection",
category: 'selection',
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_cells", []), "_collect_", [function (row) {return smalltalk.send(row, "_collect_", [function (cell) {return smalltalk.send(cell, "_removeSelector", []);}]);}]);
    return self;
},
args: [],
source: "removeSelection\x0a\x09self cells collect: [:row |\x0a\x09\x09row collect: [ :cell | \x0a\x09\x09\x09cell removeSelector\x0a\x09\x09]\x0a\x09]",
messageSends: ["collect:", "cells", "removeSelector"],
referencedClasses: []
}),
smalltalk.Map);

smalltalk.addMethod(
"_selectActiveMonster",
smalltalk.method({
selector: "selectActiveMonster",
category: 'selection',
fn: function () {
    var self = this;
    var activeMonsters = nil;
    smalltalk.send(smalltalk.Transcript || Transcript, "_show_", ["start"]);
    activeMonsters = smalltalk.send(smalltalk.Array || Array, "_new", []);
    smalltalk.send(smalltalk.send(self, "_cells", []), "_collect_", [function (row) {return smalltalk.send(row, "_collect_", [function (cell) {return ($receiver = smalltalk.send(cell, "_monster", [])) != nil && $receiver != undefined ? function () {return ($receiver = smalltalk.send(smalltalk.send(smalltalk.send(cell, "_monster", []), "_state", []), "_isKindOf_", [smalltalk.Inactive || Inactive])).klass === smalltalk.Boolean ? !$receiver ? function () {return smalltalk.send(activeMonsters, "_add_", [cell]);}() : nil : smalltalk.send($receiver, "_ifFalse_", [function () {return smalltalk.send(activeMonsters, "_add_", [cell]);}]);}() : nil;}]);}]);
    (function ($rec) {smalltalk.send($rec, "_show_", [activeMonsters]);return smalltalk.send($rec, "_cr", []);}(smalltalk.Transcript || Transcript));
    smalltalk.send(activeMonsters, "_collect_", [function (each) {return smalltalk.send(each, "_addSelectorColored_", ["white"]);}]);
    return self;
},
args: [],
source: "selectActiveMonster\x0a\x09|activeMonsters|\x0a\x09Transcript show: 'start'.\x0a\x09activeMonsters := Array new.\x0a\x09self cells collect: [:row |\x0a\x09\x09row collect: [ :cell | \x0a\x09\x09\x09cell monster ifNotNil: [\x0a\x09\x09\x09\x09(cell monster state isKindOf: Inactive) ifFalse:[activeMonsters add: cell]\x0a\x09\x09\x09]\x0a\x09\x09]\x0a\x09].\x0a\x09Transcript show: activeMonsters; cr.\x0a\x09activeMonsters collect: [:each | each addSelectorColored: 'white'].",
messageSends: ["show:", "new", "collect:", "cells", "ifNotNil:", "monster", "ifFalse:", "isKindOf:", "state", "add:", "cr", "addSelectorColored:"],
referencedClasses: ["Transcript", "Array", "Inactive"]
}),
smalltalk.Map);

smalltalk.addMethod(
"_selectableCellsNextTo_side_",
smalltalk.method({
selector: "selectableCellsNextTo:side:",
category: 'cell-delegate',
fn: function (aCell, aSide) {
    var self = this;
    return smalltalk.send(smalltalk.send(self, "_cellsNextTo_", [aCell]), "_select_", [function (each) {return smalltalk.send(each, "_canBeSelected_", [aSide]);}]);
    return self;
},
args: ["aCell", "aSide"],
source: "selectableCellsNextTo: aCell side: aSide\x0a\x09^(self cellsNextTo: aCell) select: [:each | \x0a\x09\x09\x09each canBeSelected: aSide]",
messageSends: ["select:", "cellsNextTo:", "canBeSelected:"],
referencedClasses: []
}),
smalltalk.Map);

smalltalk.addMethod(
"_tileUnit",
smalltalk.method({
selector: "tileUnit",
category: 'initialize-release',
fn: function () {
    var self = this;
    return 50;
    return self;
},
args: [],
source: "tileUnit\x0a\x09^50",
messageSends: [],
referencedClasses: []
}),
smalltalk.Map);

smalltalk.addMethod(
"_update",
smalltalk.method({
selector: "update",
category: 'displaying',
fn: function () {
    var self = this;
    var elem = nil;
    elem = smalltalk.send(smalltalk.send(self, "_canvas", []), "_element", []);
    smalltalk.send(smalltalk.send(elem, "_getContext_", ["2d"]), "_clearRect_y_width_height_", [0, 0, smalltalk.send(elem, "_width", []), smalltalk.send(elem, "_height", [])]);
    smalltalk.send(smalltalk.send(self, "_cells", []), "_do_", [function (row) {return smalltalk.send(row, "_do_", [function (cell) {return smalltalk.send(cell, "_draw", []);}]);}]);
    return self;
},
args: [],
source: "update\x0a\x09|elem|\x0a\x0a\x09elem := self canvas element.\x0a\x09(elem getContext: '2d') clearRect: 0 y: 0 width: elem width height: elem height.\x0a\x0a\x09self cells do: [:row |\x0a\x09\x09row do: [ :cell |\x0a\x09\x09\x09cell draw.\x0a\x09\x09]\x0a\x09]",
messageSends: ["element", "canvas", "clearRect:y:width:height:", "getContext:", "width", "height", "do:", "cells", "draw"],
referencedClasses: []
}),
smalltalk.Map);

smalltalk.addMethod(
"_updateCellsCoods",
smalltalk.method({
selector: "updateCellsCoods",
category: 'displaying',
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_cells", []), "_withIndexDo_", [function (row, i) {return smalltalk.send(row, "_withIndexDo_", [function (cell, j) {return smalltalk.send(cell, "_updateCoods_", [smalltalk.send(self, "_calculX_y_", [i, j])]);}]);}]);
    return self;
},
args: [],
source: "updateCellsCoods\x0a\x09self cells withIndexDo: [:row :i |\x0a\x09\x09row withIndexDo: [ :cell :j |\x0a\x09\x09\x09cell updateCoods: (self calculX: i y: j).\x0a\x09\x09]\x0a\x09]",
messageSends: ["withIndexDo:", "cells", "updateCoods:", "calculX:y:"],
referencedClasses: []
}),
smalltalk.Map);


smalltalk.Map.klass.iVarNames = ['map'];
smalltalk.addMethod(
"_getSingleton",
smalltalk.method({
selector: "getSingleton",
category: 'instance creation',
fn: function () {
    var self = this;
    return ($receiver = typeof map == "undefined" ? nil : map) == nil ||
        $receiver == undefined ? function () {return map = smalltalk.send(self, "_new", []);}() : $receiver;
    return self;
},
args: [],
source: "getSingleton\x0a\x09^map ifNil:[map := self new.]",
messageSends: ["ifNil:", "new"],
referencedClasses: []
}),
smalltalk.Map.klass);

smalltalk.addMethod(
"_newWithMapIndex_",
smalltalk.method({
selector: "newWithMapIndex:",
category: 'instance creation',
fn: function (aMapIndex) {
    var self = this;
    var success = nil;
    var map = nil;
    self['@map'] = smalltalk.send(self, "_getSingleton", []);
    success = function (data) {return smalltalk.send(self['@map'], "_initializeFromJson_", [data]);};
    $.getJSON("ressources/json/maps/map" + aMapIndex + ".json", success);
    return self['@map'];
    return self;
},
args: ["aMapIndex"],
source: "newWithMapIndex: aMapIndex\x0a\x09|success map|\x0a\x09\x0a\x09map := self getSingleton.\x0a\x09success := [:data | map initializeFromJson: data].\x0a\x09<$.getJSON('ressources/json/maps/map' + aMapIndex + '.json', success)>.\x0a\x0a\x09^map",
messageSends: ["getSingleton", "initializeFromJson:"],
referencedClasses: []
}),
smalltalk.Map.klass);


