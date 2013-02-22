smalltalk.addPackage('Easnoth-Core-Display', {});
smalltalk.addClass('Cell', smalltalk.Object, ['drawedObjects', 'x', 'y', 'state'], 'Easnoth-Core-Display');
smalltalk.addMethod(
"_addSelector",
smalltalk.method({
selector: "addSelector",
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_state", []), "_addSelector", []);
    return self;
}
}),
smalltalk.Cell);

smalltalk.addMethod(
"_addSelectorColored_",
smalltalk.method({
selector: "addSelectorColored:",
fn: function (aSelector) {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_drawedObjects", []), "_add_", [smalltalk.send(smalltalk.OverTile || OverTile, "_newWithContext_jsonOverTile_selector_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.Map || Map, "_getSingleton", []), "_canvas", []), "_element", []), "_getContext_", ["2d"]), aSelector, true])]);
    smalltalk.send(self, "_reorderDrawedObjects", []);
    return self;
}
}),
smalltalk.Cell);

smalltalk.addMethod(
"_attackableNeighboursInMap_side_",
smalltalk.method({
selector: "attackableNeighboursInMap:side:",
fn: function (aMap, aSide) {
    var self = this;
    return smalltalk.send(aMap, "_attackableCellsNextTo_side_", [self, aSide]);
    return self;
}
}),
smalltalk.Cell);

smalltalk.addMethod(
"_canAttack_",
smalltalk.method({
selector: "canAttack:",
fn: function (aSide) {
    var self = this;
    return smalltalk.send(smalltalk.send(self, "_state", []), "_canAttack_", [aSide]);
    return self;
}
}),
smalltalk.Cell);

smalltalk.addMethod(
"_canBeSelected_",
smalltalk.method({
selector: "canBeSelected:",
fn: function (sidePlayed) {
    var self = this;
    return smalltalk.send(smalltalk.send(self, "_state", []), "_canBeSelected_", [sidePlayed]);
    return self;
}
}),
smalltalk.Cell);

smalltalk.addMethod(
"_canMoveTo",
smalltalk.method({
selector: "canMoveTo",
fn: function () {
    var self = this;
    return smalltalk.send(smalltalk.send(self, "_state", []), "_canMoveTo", []);
    return self;
}
}),
smalltalk.Cell);

smalltalk.addMethod(
"_changeState_",
smalltalk.method({
selector: "changeState:",
fn: function (aState) {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_state", []), "_newState_for_", [aState, self]);
    return self;
}
}),
smalltalk.Cell);

smalltalk.addMethod(
"_coodsInMap_",
smalltalk.method({
selector: "coodsInMap:",
fn: function (aMap) {
    var self = this;
    return smalltalk.send(aMap, "_coodsOf_", [self]);
    return self;
}
}),
smalltalk.Cell);

smalltalk.addMethod(
"_draw",
smalltalk.method({
selector: "draw",
fn: function () {
    var self = this;
    smalltalk.send(self['@drawedObjects'], "_do_", [function (drawedObject) {return ($receiver = drawedObject) != nil && $receiver != undefined ? function () {return smalltalk.send(drawedObject, "_drawX_y_", [smalltalk.send(self, "_x", []), smalltalk.send(self, "_y", [])]);}() : nil;}]);
    return self;
}
}),
smalltalk.Cell);

smalltalk.addMethod(
"_drawedObjects",
smalltalk.method({
selector: "drawedObjects",
fn: function () {
    var self = this;
    return self['@drawedObjects'];
    return self;
}
}),
smalltalk.Cell);

smalltalk.addMethod(
"_drawedObjects_",
smalltalk.method({
selector: "drawedObjects:",
fn: function (value) {
    var self = this;
    self['@drawedObjects'] = value;
    return self;
}
}),
smalltalk.Cell);

smalltalk.addMethod(
"_free",
smalltalk.method({
selector: "free",
fn: function () {
    var self = this;
    return smalltalk.send(smalltalk.send(self, "_hasMonster", []), "_not", []);
    return self;
}
}),
smalltalk.Cell);

smalltalk.addMethod(
"_hasMonster",
smalltalk.method({
selector: "hasMonster",
fn: function () {
    var self = this;
    return smalltalk.send(smalltalk.send(self, "_monster", []), "_notNil", []);
    return self;
}
}),
smalltalk.Cell);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function () {
    var self = this;
    smalltalk.send(self, "_initialize", [], smalltalk.Cell.superclass || nil);
    smalltalk.send(self, "_drawedObjects_", [smalltalk.send(smalltalk.Array || Array, "_new", [])]);
    return self;
}
}),
smalltalk.Cell);

smalltalk.addMethod(
"_initializeState",
smalltalk.method({
selector: "initializeState",
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.CellState || CellState, "_initializeStateFor_", [self]);
    return self;
}
}),
smalltalk.Cell);

smalltalk.addMethod(
"_monster",
smalltalk.method({
selector: "monster",
fn: function () {
    var self = this;
    return smalltalk.send(self, "_specificDrawedObject_", [smalltalk.Monster || Monster]);
    return self;
}
}),
smalltalk.Cell);

smalltalk.addMethod(
"_monster_",
smalltalk.method({
selector: "monster:",
fn: function (aMonster) {
    var self = this;
    ($receiver = smalltalk.send(self, "_monster", [])) == nil ||
        $receiver == undefined ? function () {return smalltalk.send(smalltalk.send(self, "_drawedObjects", []), "_add_", [aMonster]);}() : function () {return smalltalk.send(self, "_error_", ["This cell has already a Monster"]);}();
    return self;
}
}),
smalltalk.Cell);

smalltalk.addMethod(
"_movableNeighboursInMap_",
smalltalk.method({
selector: "movableNeighboursInMap:",
fn: function (aMap) {
    var self = this;
    return smalltalk.send(aMap, "_movableCellsNextTo_", [self]);
    return self;
}
}),
smalltalk.Cell);

smalltalk.addMethod(
"_neighboursInMap_",
smalltalk.method({
selector: "neighboursInMap:",
fn: function (aMap) {
    var self = this;
    return smalltalk.send(aMap, "_cellsNextTo_", [self]);
    return self;
}
}),
smalltalk.Cell);

smalltalk.addMethod(
"_overTiles",
smalltalk.method({
selector: "overTiles",
fn: function () {
    var self = this;
    return smalltalk.send(self, "_specificDrawedObjects_", [smalltalk.OverTile || OverTile]);
    return self;
}
}),
smalltalk.Cell);

smalltalk.addMethod(
"_overTiles_",
smalltalk.method({
selector: "overTiles:",
fn: function (aCollection) {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_drawedObjects", []), "_addAll_", [aCollection]);
    return self;
}
}),
smalltalk.Cell);

smalltalk.addMethod(
"_parseJSONCell_withContext_",
smalltalk.method({
selector: "parseJSONCell:withContext:",
fn: function (aJsonCell, aContext) {
    var self = this;
    smalltalk.send(function () {return smalltalk.send(self, "_tile_", [smalltalk.send(smalltalk.Tile || Tile, "_newWithContext_jsonTile_", [aContext, smalltalk.send(aJsonCell, "_tile", [])])]);}, "_on_do_", [smalltalk.Error || Error, function () {return nil;}]);
    smalltalk.send(function () {return smalltalk.send(self, "_overTiles_", [smalltalk.send(smalltalk.send(aJsonCell, "_overtiles", []), "_collect_", [function (each) {return smalltalk.send(smalltalk.OverTile || OverTile, "_newWithContext_jsonOverTile_", [aContext, smalltalk.send(each, "_overtile", [])]);}])]);}, "_on_do_", [smalltalk.Error || Error, function () {return nil;}]);
    smalltalk.send(function () {return smalltalk.send(self, "_monster_", [smalltalk.send(smalltalk.Monster || Monster, "_newWithContext_jsonMonster_", [aContext, smalltalk.send(aJsonCell, "_monster", [])])]);}, "_on_do_", [smalltalk.Error || Error, function () {return nil;}]);
    return self;
}
}),
smalltalk.Cell);

smalltalk.addMethod(
"_removeMonster",
smalltalk.method({
selector: "removeMonster",
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_drawedObjects", []), "_remove_", [smalltalk.send(self, "_monster", [])]);
    return self;
}
}),
smalltalk.Cell);

smalltalk.addMethod(
"_removeSelector",
smalltalk.method({
selector: "removeSelector",
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_state", []), "_removeSelector", []);
    return self;
}
}),
smalltalk.Cell);

smalltalk.addMethod(
"_removeTile",
smalltalk.method({
selector: "removeTile",
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_drawedObjects", []), "_remove_", [smalltalk.send(self, "_tile", [])]);
    return self;
}
}),
smalltalk.Cell);

smalltalk.addMethod(
"_reorderDrawedObjects",
smalltalk.method({
selector: "reorderDrawedObjects",
fn: function () {
    var self = this;
    var orderedDrawedObjects = nil;
    orderedDrawedObjects = smalltalk.send(smalltalk.Array || Array, "_with_", [smalltalk.send(self, "_tile", [])]);
    smalltalk.send(orderedDrawedObjects, "_addAll_", [smalltalk.send(self, "_overTiles", [])]);
    smalltalk.send(orderedDrawedObjects, "_add_", [smalltalk.send(self, "_monster", [])]);
    smalltalk.send(self, "_drawedObjects_", [orderedDrawedObjects]);
    return self;
}
}),
smalltalk.Cell);

smalltalk.addMethod(
"_selectableNeighboursInMap_side_",
smalltalk.method({
selector: "selectableNeighboursInMap:side:",
fn: function (aMap, aSide) {
    var self = this;
    return smalltalk.send(aMap, "_selectableCellsNextTo_side_", [self, aSide]);
    return self;
}
}),
smalltalk.Cell);

smalltalk.addMethod(
"_specificDrawedObject_",
smalltalk.method({
selector: "specificDrawedObject:",
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
}
}),
smalltalk.Cell);

smalltalk.addMethod(
"_specificDrawedObjects_",
smalltalk.method({
selector: "specificDrawedObjects:",
fn: function (aClass) {
    var self = this;
    return smalltalk.send(smalltalk.send(self, "_drawedObjects", []), "_select_", [function (each) {return smalltalk.send(each, "_isKindOf_", [aClass]);}]);
    return self;
}
}),
smalltalk.Cell);

smalltalk.addMethod(
"_state",
smalltalk.method({
selector: "state",
fn: function () {
    var self = this;
    ($receiver = self['@state']) == nil || $receiver == undefined ? function () {return smalltalk.send(self, "_initializeState", []);}() : $receiver;
    return self['@state'];
    return self;
}
}),
smalltalk.Cell);

smalltalk.addMethod(
"_state_",
smalltalk.method({
selector: "state:",
fn: function (aState) {
    var self = this;
    self['@state'] = aState;
    return self;
}
}),
smalltalk.Cell);

smalltalk.addMethod(
"_tile",
smalltalk.method({
selector: "tile",
fn: function () {
    var self = this;
    return smalltalk.send(self, "_specificDrawedObject_", [smalltalk.Tile || Tile]);
    return self;
}
}),
smalltalk.Cell);

smalltalk.addMethod(
"_tile_",
smalltalk.method({
selector: "tile:",
fn: function (aTile) {
    var self = this;
    ($receiver = smalltalk.send(self, "_tile", [])) == nil ||
        $receiver == undefined ? function () {return smalltalk.send(smalltalk.send(self, "_drawedObjects", []), "_add_", [aTile]);}() : function () {return smalltalk.send(self, "_error_", ["This cell has already a Tile"]);}();
    return self;
}
}),
smalltalk.Cell);

smalltalk.addMethod(
"_updateCoods_",
smalltalk.method({
selector: "updateCoods:",
fn: function (coods) {
    var self = this;
    smalltalk.send(self, "_x_", [smalltalk.send(coods, "_at_", [1])]);
    smalltalk.send(self, "_y_", [smalltalk.send(coods, "_at_", [2])]);
    return self;
}
}),
smalltalk.Cell);

smalltalk.addMethod(
"_x",
smalltalk.method({
selector: "x",
fn: function () {
    var self = this;
    return self['@x'];
    return self;
}
}),
smalltalk.Cell);

smalltalk.addMethod(
"_x_",
smalltalk.method({
selector: "x:",
fn: function (value) {
    var self = this;
    self['@x'] = smalltalk.send(value, "_truncated", []);
    return self;
}
}),
smalltalk.Cell);

smalltalk.addMethod(
"_y",
smalltalk.method({
selector: "y",
fn: function () {
    var self = this;
    return self['@y'];
    return self;
}
}),
smalltalk.Cell);

smalltalk.addMethod(
"_y_",
smalltalk.method({
selector: "y:",
fn: function (value) {
    var self = this;
    self['@y'] = smalltalk.send(value, "_truncated", []);
    return self;
}
}),
smalltalk.Cell);


smalltalk.addMethod(
"_newWithContext_jsoncell_coods_",
smalltalk.method({
selector: "newWithContext:jsoncell:coods:",
fn: function (aContext, aJsonCell, coods) {
    var self = this;
    return function ($rec) {smalltalk.send($rec, "_updateCoods_", [coods]);smalltalk.send($rec, "_parseJSONCell_withContext_", [aJsonCell, aContext]);return smalltalk.send($rec, "_yourself", []);}(smalltalk.send(self, "_new", []));
    return self;
}
}),
smalltalk.Cell.klass);


smalltalk.addClass('DrawedObject', smalltalk.Object, ['image', 'context'], 'Easnoth-Core-Display');
smalltalk.addMethod(
"_context",
smalltalk.method({
selector: "context",
fn: function () {
    var self = this;
    return self['@context'];
    return self;
}
}),
smalltalk.DrawedObject);

smalltalk.addMethod(
"_context_",
smalltalk.method({
selector: "context:",
fn: function (aCtx) {
    var self = this;
    self['@context'] = aCtx;
    return self;
}
}),
smalltalk.DrawedObject);

smalltalk.addMethod(
"_displayX_y_",
smalltalk.method({
selector: "displayX:y:",
fn: function (aX, aY) {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_context", []), "_drawImage_x_y_", [smalltalk.send(self, "_image", []), aX, aY]);
    return self;
}
}),
smalltalk.DrawedObject);

smalltalk.addMethod(
"_drawX_y_",
smalltalk.method({
selector: "drawX:y:",
fn: function (aX, aY) {
    var self = this;
    smalltalk.send(self, "_subclassResponsibility", []);
    return self;
}
}),
smalltalk.DrawedObject);

smalltalk.addMethod(
"_folderName",
smalltalk.method({
selector: "folderName",
fn: function () {
    var self = this;
    smalltalk.send(self, "_subclassResponsibility", []);
    return self;
}
}),
smalltalk.DrawedObject);

smalltalk.addMethod(
"_image",
smalltalk.method({
selector: "image",
fn: function () {
    var self = this;
    return self['@image'];
    return self;
}
}),
smalltalk.DrawedObject);

smalltalk.addMethod(
"_image_",
smalltalk.method({
selector: "image:",
fn: function (anImage) {
    var self = this;
    self['@image'] = anImage;
    return self;
}
}),
smalltalk.DrawedObject);

smalltalk.addMethod(
"_initializeContext_imageKey_",
smalltalk.method({
selector: "initializeContext:imageKey:",
fn: function (aCtx, aKey) {
    var self = this;
    smalltalk.send(self, "_context_", [aCtx]);
    smalltalk.send(smalltalk.send(smalltalk.ImageCache || ImageCache, "_getSingleton", []), "_putImageWithKey_inDrawedObject_", [aKey, self]);
    return self;
}
}),
smalltalk.DrawedObject);



smalltalk.addClass('Ground', smalltalk.DrawedObject, [], 'Easnoth-Core-Display');
smalltalk.addMethod(
"_drawX_y_",
smalltalk.method({
selector: "drawX:y:",
fn: function (aX, aY) {
    var self = this;
    var ctx = nil;
    ctx = smalltalk.send(self, "_context", []);
    (function ($rec) {smalltalk.send($rec, "_save", []);smalltalk.send($rec, "_translate_y_", [($receiver = aX).klass === smalltalk.Number ? $receiver + 45 : smalltalk.send($receiver, "__plus", [45]), ($receiver = aY).klass === smalltalk.Number ? $receiver - 7 : smalltalk.send($receiver, "__minus", [7])]);smalltalk.send($rec, "_scale_y_", [1, 0.5]);smalltalk.send($rec, "_rotate_", [($receiver = smalltalk.send(smalltalk.Number || Number, "_pi", [])).klass === smalltalk.Number ? $receiver / 4 : smalltalk.send($receiver, "__slash", [4])]);return smalltalk.send($rec, "_scale_y_", [1.4, 1.23]);}(ctx));
    smalltalk.send(self, "_displayX_y_", [0, 0]);
    smalltalk.send(ctx, "_restore", []);
    return self;
}
}),
smalltalk.Ground);



smalltalk.addClass('OverTile', smalltalk.Ground, ['selector'], 'Easnoth-Core-Display');
smalltalk.addMethod(
"_folderName",
smalltalk.method({
selector: "folderName",
fn: function () {
    var self = this;
    return "overtiles";
    return self;
}
}),
smalltalk.OverTile);

smalltalk.addMethod(
"_selector",
smalltalk.method({
selector: "selector",
fn: function () {
    var self = this;
    return self['@selector'];
    return self;
}
}),
smalltalk.OverTile);

smalltalk.addMethod(
"_selector_",
smalltalk.method({
selector: "selector:",
fn: function (aBool) {
    var self = this;
    self['@selector'] = aBool;
    return self;
}
}),
smalltalk.OverTile);


smalltalk.addMethod(
"_newWithContext_jsonOverTile_",
smalltalk.method({
selector: "newWithContext:jsonOverTile:",
fn: function (aContext, aJsonOverTile) {
    var self = this;
    return smalltalk.send(self, "_newWithContext_jsonOverTile_selector_", [aContext, aJsonOverTile, false]);
    return self;
}
}),
smalltalk.OverTile.klass);

smalltalk.addMethod(
"_newWithContext_jsonOverTile_selector_",
smalltalk.method({
selector: "newWithContext:jsonOverTile:selector:",
fn: function (aContext, aJsonOverTile, aBool) {
    var self = this;
    return function ($rec) {smalltalk.send($rec, "_initializeContext_imageKey_", [aContext, aJsonOverTile]);smalltalk.send($rec, "_selector_", [aBool]);return smalltalk.send($rec, "_yourself", []);}(smalltalk.send(self, "_new", []));
    return self;
}
}),
smalltalk.OverTile.klass);


smalltalk.addClass('Tile', smalltalk.Ground, ['isWall'], 'Easnoth-Core-Display');
smalltalk.addMethod(
"_folderName",
smalltalk.method({
selector: "folderName",
fn: function () {
    var self = this;
    return "tiles";
    return self;
}
}),
smalltalk.Tile);

smalltalk.addMethod(
"_isWall",
smalltalk.method({
selector: "isWall",
fn: function () {
    var self = this;
    return self['@isWall'];
    return self;
}
}),
smalltalk.Tile);

smalltalk.addMethod(
"_isWall_",
smalltalk.method({
selector: "isWall:",
fn: function (aBoolean) {
    var self = this;
    self['@isWall'] = aBoolean;
    return self;
}
}),
smalltalk.Tile);


smalltalk.addMethod(
"_newWithContext_jsonTile_",
smalltalk.method({
selector: "newWithContext:jsonTile:",
fn: function (aContext, aJsonTile) {
    var self = this;
    return function ($rec) {smalltalk.send($rec, "_initializeContext_imageKey_", [aContext, aJsonTile]);smalltalk.send($rec, "_isWall_", [false]);return smalltalk.send($rec, "_yourself", []);}(smalltalk.send(self, "_new", []));
    return self;
}
}),
smalltalk.Tile.klass);


smalltalk.addClass('OverGround', smalltalk.DrawedObject, ['hp'], 'Easnoth-Core-Display');
smalltalk.addMethod(
"_hp",
smalltalk.method({
selector: "hp",
fn: function () {
    var self = this;
    return self['@hp'];
    return self;
}
}),
smalltalk.OverGround);

smalltalk.addMethod(
"_hp_",
smalltalk.method({
selector: "hp:",
fn: function (aNumber) {
    var self = this;
    self['@hp'] = aNumber;
    return self;
}
}),
smalltalk.OverGround);



smalltalk.addClass('Building', smalltalk.OverGround, [], 'Easnoth-Core-Display');
smalltalk.addMethod(
"_folderName",
smalltalk.method({
selector: "folderName",
fn: function () {
    var self = this;
    return "buildings";
    return self;
}
}),
smalltalk.Building);



smalltalk.addClass('Monster', smalltalk.OverGround, ['move', 'attack', 'knockback', 'range', 'heros', 'special', 'side', 'state'], 'Easnoth-Core-Display');
smalltalk.addMethod(
"_attack",
smalltalk.method({
selector: "attack",
fn: function () {
    var self = this;
    return self['@attack'];
    return self;
}
}),
smalltalk.Monster);

smalltalk.addMethod(
"_attack_",
smalltalk.method({
selector: "attack:",
fn: function (somePercent) {
    var self = this;
    self['@attack'] = somePercent;
    return self;
}
}),
smalltalk.Monster);

smalltalk.addMethod(
"_changeState_",
smalltalk.method({
selector: "changeState:",
fn: function (aState) {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_state", []), "_newState_for_", [aState, self]);
    return self;
}
}),
smalltalk.Monster);

smalltalk.addMethod(
"_drawAsHeroX_y_",
smalltalk.method({
selector: "drawAsHeroX:y:",
fn: function (aX, aY) {
    var self = this;
    ($receiver = smalltalk.send(smalltalk.send(self, "_side", []), "_negative", [])).klass === smalltalk.Boolean ? $receiver ? function () {(function ($rec) {smalltalk.send($rec, "_save", []);smalltalk.send($rec, "_translate_y_", [($receiver = aX).klass === smalltalk.Number ? $receiver + 87 : smalltalk.send($receiver, "__plus", [87]), 0]);return smalltalk.send($rec, "_scale_y_", [-1, 1]);}(smalltalk.send(self, "_context", [])));smalltalk.send(self, "_displayX_y_", [0, ($receiver = aY).klass === smalltalk.Number ? $receiver - 28 : smalltalk.send($receiver, "__minus", [28])]);return smalltalk.send(smalltalk.send(self, "_context", []), "_restore", []);}() : function () {return smalltalk.send(self, "_displayX_y_", [($receiver = aX).klass === smalltalk.Number ? $receiver + 15 : smalltalk.send($receiver, "__plus", [15]), ($receiver = aY).klass === smalltalk.Number ? $receiver - 28 : smalltalk.send($receiver, "__minus", [28])]);}() : smalltalk.send($receiver, "_ifTrue_ifFalse_", [function () {(function ($rec) {smalltalk.send($rec, "_save", []);smalltalk.send($rec, "_translate_y_", [($receiver = aX).klass === smalltalk.Number ? $receiver + 87 : smalltalk.send($receiver, "__plus", [87]), 0]);return smalltalk.send($rec, "_scale_y_", [-1, 1]);}(smalltalk.send(self, "_context", [])));smalltalk.send(self, "_displayX_y_", [0, ($receiver = aY).klass === smalltalk.Number ? $receiver - 28 : smalltalk.send($receiver, "__minus", [28])]);return smalltalk.send(smalltalk.send(self, "_context", []), "_restore", []);}, function () {return smalltalk.send(self, "_displayX_y_", [($receiver = aX).klass === smalltalk.Number ? $receiver + 15 : smalltalk.send($receiver, "__plus", [15]), ($receiver = aY).klass === smalltalk.Number ? $receiver - 28 : smalltalk.send($receiver, "__minus", [28])]);}]);
    return self;
}
}),
smalltalk.Monster);

smalltalk.addMethod(
"_drawX_y_",
smalltalk.method({
selector: "drawX:y:",
fn: function (aX, aY) {
    var self = this;
    smalltalk.send(self, "_drawAsHeroX_y_", [aX, aY]);
    return self;
}
}),
smalltalk.Monster);

smalltalk.addMethod(
"_folderName",
smalltalk.method({
selector: "folderName",
fn: function () {
    var self = this;
    return "monsters";
    return self;
}
}),
smalltalk.Monster);

smalltalk.addMethod(
"_heros",
smalltalk.method({
selector: "heros",
fn: function () {
    var self = this;
    return self['@heros'];
    return self;
}
}),
smalltalk.Monster);

smalltalk.addMethod(
"_heros_",
smalltalk.method({
selector: "heros:",
fn: function (aBoolean) {
    var self = this;
    self['@heros'] = aBoolean;
    return self;
}
}),
smalltalk.Monster);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function () {
    var self = this;
    return self;
}
}),
smalltalk.Monster);

smalltalk.addMethod(
"_initializeSide_",
smalltalk.method({
selector: "initializeSide:",
fn: function (aSide) {
    var self = this;
    smalltalk.send(self, "_side_", [aSide]);
    return self;
}
}),
smalltalk.Monster);

smalltalk.addMethod(
"_initializeStats_",
smalltalk.method({
selector: "initializeStats:",
fn: function (aJsonMonster) {
    var self = this;
    smalltalk.send(smalltalk.send(smalltalk.MonsterCache || MonsterCache, "_getSingleton", []), "_putStatsWithKey_inMonster_", [aJsonMonster, self]);
    return self;
}
}),
smalltalk.Monster);

smalltalk.addMethod(
"_knockback",
smalltalk.method({
selector: "knockback",
fn: function () {
    var self = this;
    return self['@knockback'];
    return self;
}
}),
smalltalk.Monster);

smalltalk.addMethod(
"_knockback_",
smalltalk.method({
selector: "knockback:",
fn: function (somePercent) {
    var self = this;
    self['@knockback'] = somePercent;
    return self;
}
}),
smalltalk.Monster);

smalltalk.addMethod(
"_move",
smalltalk.method({
selector: "move",
fn: function () {
    var self = this;
    return self['@move'];
    return self;
}
}),
smalltalk.Monster);

smalltalk.addMethod(
"_move_",
smalltalk.method({
selector: "move:",
fn: function (aNumberOfCell) {
    var self = this;
    self['@move'] = aNumberOfCell;
    return self;
}
}),
smalltalk.Monster);

smalltalk.addMethod(
"_range",
smalltalk.method({
selector: "range",
fn: function () {
    var self = this;
    return self['@range'];
    return self;
}
}),
smalltalk.Monster);

smalltalk.addMethod(
"_range_",
smalltalk.method({
selector: "range:",
fn: function (aNumberOfCell) {
    var self = this;
    self['@range'] = aNumberOfCell;
    return self;
}
}),
smalltalk.Monster);

smalltalk.addMethod(
"_side",
smalltalk.method({
selector: "side",
fn: function () {
    var self = this;
    return self['@side'];
    return self;
}
}),
smalltalk.Monster);

smalltalk.addMethod(
"_side_",
smalltalk.method({
selector: "side:",
fn: function (anInt) {
    var self = this;
    self['@side'] = anInt;
    return self;
}
}),
smalltalk.Monster);

smalltalk.addMethod(
"_special",
smalltalk.method({
selector: "special",
fn: function () {
    var self = this;
    return self['@special'];
    return self;
}
}),
smalltalk.Monster);

smalltalk.addMethod(
"_special_",
smalltalk.method({
selector: "special:",
fn: function (something) {
    var self = this;
    self['@special'] = something;
    return self;
}
}),
smalltalk.Monster);

smalltalk.addMethod(
"_state",
smalltalk.method({
selector: "state",
fn: function () {
    var self = this;
    return ($receiver = self['@state']) == nil || $receiver == undefined ? function () {return smalltalk.send(smalltalk.Inactive || Inactive, "_newFor_", [self]);}() : $receiver;
    return self;
}
}),
smalltalk.Monster);

smalltalk.addMethod(
"_state_",
smalltalk.method({
selector: "state:",
fn: function (aState) {
    var self = this;
    self['@state'] = aState;
    return self;
}
}),
smalltalk.Monster);

smalltalk.addMethod(
"_stats_",
smalltalk.method({
selector: "stats:",
fn: function (jsonStats) {
    var self = this;
    smalltalk.send(self, "_move_", [smalltalk.send(jsonStats, "_move", [])]);
    smalltalk.send(self, "_attack_", [smalltalk.send(jsonStats, "_attack", [])]);
    smalltalk.send(self, "_knockback_", [smalltalk.send(jsonStats, "_knockback", [])]);
    smalltalk.send(self, "_heros_", [smalltalk.send(jsonStats, "_heros", [])]);
    smalltalk.send(self, "_special_", [smalltalk.send(jsonStats, "_special", [])]);
    return self;
}
}),
smalltalk.Monster);


smalltalk.addMethod(
"_newWithContext_jsonMonster_",
smalltalk.method({
selector: "newWithContext:jsonMonster:",
fn: function (aContext, aJsonMonster) {
    var self = this;
    return function ($rec) {smalltalk.send($rec, "_initializeContext_imageKey_", [aContext, smalltalk.send(aJsonMonster, "_name", [])]);smalltalk.send($rec, "_initializeStats_", [smalltalk.send(aJsonMonster, "_name", [])]);smalltalk.send($rec, "_initializeSide_", [smalltalk.send(aJsonMonster, "_side", [])]);return smalltalk.send($rec, "_yourself", []);}(smalltalk.send(self, "_new", []));
    return self;
}
}),
smalltalk.Monster.klass);


smalltalk.addClass('Map', smalltalk.Object, ['mapX', 'mapY', 'cells', 'canvas', 'currentCell'], 'Easnoth-Core-Display');
smalltalk.addMethod(
"_addSelection_",
smalltalk.method({
selector: "addSelection:",
fn: function (aCellCollection) {
    var self = this;
    smalltalk.send(aCellCollection, "_do_", [function (cell) {return smalltalk.send(cell, "_addSelector", []);}]);
    return self;
}
}),
smalltalk.Map);

smalltalk.addMethod(
"_attackableCellsNextTo_side_",
smalltalk.method({
selector: "attackableCellsNextTo:side:",
fn: function (aCell, aSide) {
    var self = this;
    return smalltalk.send(smalltalk.send(self, "_cellsNextTo_", [aCell]), "_select_", [function (each) {return smalltalk.send(each, "_canAttack_", [aSide]);}]);
    return self;
}
}),
smalltalk.Map);

smalltalk.addMethod(
"_calculX_y_",
smalltalk.method({
selector: "calculX:y:",
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
}
}),
smalltalk.Map);

smalltalk.addMethod(
"_canvas",
smalltalk.method({
selector: "canvas",
fn: function () {
    var self = this;
    return self['@canvas'];
    return self;
}
}),
smalltalk.Map);

smalltalk.addMethod(
"_canvas_",
smalltalk.method({
selector: "canvas:",
fn: function (aCanvas) {
    var self = this;
    self['@canvas'] = aCanvas;
    return self;
}
}),
smalltalk.Map);

smalltalk.addMethod(
"_canvasId",
smalltalk.method({
selector: "canvasId",
fn: function () {
    var self = this;
    return "#main";
    return self;
}
}),
smalltalk.Map);

smalltalk.addMethod(
"_canvasPadding",
smalltalk.method({
selector: "canvasPadding",
fn: function () {
    var self = this;
    return 40;
    return self;
}
}),
smalltalk.Map);

smalltalk.addMethod(
"_cells",
smalltalk.method({
selector: "cells",
fn: function () {
    var self = this;
    return self['@cells'];
    return self;
}
}),
smalltalk.Map);

smalltalk.addMethod(
"_cells_",
smalltalk.method({
selector: "cells:",
fn: function (anArray) {
    var self = this;
    self['@cells'] = anArray;
    return self;
}
}),
smalltalk.Map);

smalltalk.addMethod(
"_cellsNextTo_",
smalltalk.method({
selector: "cellsNextTo:",
fn: function (aCell) {
    var self = this;
    var coods = nil;
    coods = smalltalk.send(aCell, "_coodsInMap_", [self]);
    return smalltalk.send(self, "_cellsNextToI_j_", [smalltalk.send(coods, "_at_", [1]), smalltalk.send(coods, "_at_", [2])]);
    return self;
}
}),
smalltalk.Map);

smalltalk.addMethod(
"_cellsNextToI_j_",
smalltalk.method({
selector: "cellsNextToI:j:",
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
}
}),
smalltalk.Map);

smalltalk.addMethod(
"_coodsOf_",
smalltalk.method({
selector: "coodsOf:",
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
}
}),
smalltalk.Map);

smalltalk.addMethod(
"_currentCell",
smalltalk.method({
selector: "currentCell",
fn: function () {
    var self = this;
    return self['@currentCell'];
    return self;
}
}),
smalltalk.Map);

smalltalk.addMethod(
"_currentCell_",
smalltalk.method({
selector: "currentCell:",
fn: function (aCell) {
    var self = this;
    self['@currentCell'] = aCell;
    return self;
}
}),
smalltalk.Map);

smalltalk.addMethod(
"_goDown",
smalltalk.method({
selector: "goDown",
fn: function () {
    var self = this;
    smalltalk.send(self, "_mapY_", [($receiver = smalltalk.send(self, "_mapY", [])).klass === smalltalk.Number ? $receiver + 10 : smalltalk.send($receiver, "__plus", [10])]);
    smalltalk.send(self, "_update", []);
    return self;
}
}),
smalltalk.Map);

smalltalk.addMethod(
"_goLeft",
smalltalk.method({
selector: "goLeft",
fn: function () {
    var self = this;
    smalltalk.send(self, "_mapX_", [($receiver = smalltalk.send(self, "_mapX", [])).klass === smalltalk.Number ? $receiver - 10 : smalltalk.send($receiver, "__minus", [10])]);
    smalltalk.send(self, "_update", []);
    return self;
}
}),
smalltalk.Map);

smalltalk.addMethod(
"_goRight",
smalltalk.method({
selector: "goRight",
fn: function () {
    var self = this;
    smalltalk.send(self, "_mapX_", [($receiver = smalltalk.send(self, "_mapX", [])).klass === smalltalk.Number ? $receiver + 10 : smalltalk.send($receiver, "__plus", [10])]);
    smalltalk.send(self, "_update", []);
    return self;
}
}),
smalltalk.Map);

smalltalk.addMethod(
"_goUp",
smalltalk.method({
selector: "goUp",
fn: function () {
    var self = this;
    smalltalk.send(self, "_mapY_", [($receiver = smalltalk.send(self, "_mapY", [])).klass === smalltalk.Number ? $receiver - 10 : smalltalk.send($receiver, "__minus", [10])]);
    smalltalk.send(self, "_update", []);
    return self;
}
}),
smalltalk.Map);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function () {
    var self = this;
    smalltalk.send(self, "_initialize", [], smalltalk.Map.superclass || nil);
    smalltalk.send(self, "_canvas_", [smalltalk.send(smalltalk.TagBrush || TagBrush, "_fromJQuery_canvas_", [smalltalk.send(smalltalk.send(self, "_canvasId", []), "_asJQuery", []), smalltalk.send(smalltalk.HTMLCanvas || HTMLCanvas, "_onJQuery_", [smalltalk.send("body", "_asJQuery", [])])])]);
    smalltalk.send(self, "_mapX_", [smalltalk.send(self, "_canvasPadding", [])]);
    smalltalk.send(self, "_mapY_", [smalltalk.send(self, "_canvasPadding", [])]);
    return self;
}
}),
smalltalk.Map);

smalltalk.addMethod(
"_initializeCellsFromJson_",
smalltalk.method({
selector: "initializeCellsFromJson:",
fn: function (jsonObject) {
    var self = this;
    var cood = nil;
    smalltalk.send(self, "_cells_", [smalltalk.send(smalltalk.Array || Array, "_new_", [smalltalk.send(smalltalk.send(jsonObject, "_row", []), "_size", [])])]);
    smalltalk.send(smalltalk.send(jsonObject, "_row", []), "_withIndexDo_", [function (row, i) {smalltalk.send(smalltalk.send(self, "_cells", []), "_at_put_", [i, smalltalk.send(smalltalk.Array || Array, "_new_", [smalltalk.send(smalltalk.send(row, "_cells", []), "_size", [])])]);return smalltalk.send(smalltalk.send(row, "_cells", []), "_withIndexDo_", [function (cell, j) {cood = smalltalk.send(self, "_calculX_y_", [i, j]);return smalltalk.send(smalltalk.send(smalltalk.send(self, "_cells", []), "_at_", [i]), "_at_put_", [j, smalltalk.send(smalltalk.Cell || Cell, "_newWithContext_jsoncell_coods_", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_canvas", []), "_element", []), "_getContext_", ["2d"]), cell, cood])]);}]);}]);
    return self;
}
}),
smalltalk.Map);

smalltalk.addMethod(
"_initializeEventHandling",
smalltalk.method({
selector: "initializeEventHandling",
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
}
}),
smalltalk.Map);

smalltalk.addMethod(
"_initializeFromJson_",
smalltalk.method({
selector: "initializeFromJson:",
fn: function (jsonObject) {
    var self = this;
    smalltalk.send(typeof map == "undefined" ? nil : map, "_mapX_", [($receiver = smalltalk.send(typeof map == "undefined" ? nil : map, "_mapX", [])).klass === smalltalk.Number ? $receiver + (($receiver = ($receiver = smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(jsonObject, "_row", []), "_at_", [1]), "_cells", []), "_size", [])).klass === smalltalk.Number ? $receiver * smalltalk.send(typeof map == "undefined" ? nil : map, "_tileUnit", []) : smalltalk.send($receiver, "__star", [smalltalk.send(typeof map == "undefined" ? nil : map, "_tileUnit", [])])).klass === smalltalk.Number ? $receiver * 1.17 : smalltalk.send($receiver, "__star", [1.17])) : smalltalk.send($receiver, "__plus", [($receiver = ($receiver = smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(jsonObject, "_row", []), "_at_", [1]), "_cells", []), "_size", [])).klass === smalltalk.Number ? $receiver * smalltalk.send(typeof map == "undefined" ? nil : map, "_tileUnit", []) : smalltalk.send($receiver, "__star", [smalltalk.send(typeof map == "undefined" ? nil : map, "_tileUnit", [])])).klass === smalltalk.Number ? $receiver * 1.17 : smalltalk.send($receiver, "__star", [1.17])])]);
    smalltalk.send(smalltalk.send(smalltalk.ImageCache || ImageCache, "_getSingleton", []), "_onload_", [function () {return smalltalk.send(typeof map == "undefined" ? nil : map, "_update", []);}]);
    smalltalk.send(typeof map == "undefined" ? nil : map, "_initializeCellsFromJson_", [jsonObject]);
    smalltalk.send(typeof map == "undefined" ? nil : map, "_initializeEventHandling", []);
    return self;
}
}),
smalltalk.Map);

smalltalk.addMethod(
"_mapX",
smalltalk.method({
selector: "mapX",
fn: function () {
    var self = this;
    return self['@mapX'];
    return self;
}
}),
smalltalk.Map);

smalltalk.addMethod(
"_mapX_",
smalltalk.method({
selector: "mapX:",
fn: function (aLength) {
    var self = this;
    self['@mapX'] = aLength;
    ($receiver = smalltalk.send(self, "_cells", [])) != nil &&
        $receiver != undefined ? function () {return smalltalk.send(self, "_updateCellsCoods", []);}() : nil;
    return self;
}
}),
smalltalk.Map);

smalltalk.addMethod(
"_mapY",
smalltalk.method({
selector: "mapY",
fn: function () {
    var self = this;
    return self['@mapY'];
    return self;
}
}),
smalltalk.Map);

smalltalk.addMethod(
"_mapY_",
smalltalk.method({
selector: "mapY:",
fn: function (aLength) {
    var self = this;
    self['@mapY'] = aLength;
    ($receiver = smalltalk.send(self, "_cells", [])) != nil &&
        $receiver != undefined ? function () {return smalltalk.send(self, "_updateCellsCoods", []);}() : nil;
    return self;
}
}),
smalltalk.Map);

smalltalk.addMethod(
"_mirrorHorizontal",
smalltalk.method({
selector: "mirrorHorizontal",
fn: function () {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_translate_y_", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_canvas", []), "_element", []), "_width", []), 0]);return smalltalk.send($rec, "_scale_y_", [smalltalk.send(1, "_negated", []), 1]);}(smalltalk.send(smalltalk.send(smalltalk.send(self, "_canvas", []), "_element", []), "_getContext_", ["2d"])));
    smalltalk.send(self, "_update", []);
    return self;
}
}),
smalltalk.Map);

smalltalk.addMethod(
"_mirrorVertical",
smalltalk.method({
selector: "mirrorVertical",
fn: function () {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_translate_y_", [0, smalltalk.send(smalltalk.send(smalltalk.send(self, "_canvas", []), "_element", []), "_height", [])]);return smalltalk.send($rec, "_scale_y_", [1, smalltalk.send(1, "_negated", [])]);}(smalltalk.send(smalltalk.send(smalltalk.send(self, "_canvas", []), "_element", []), "_getContext_", ["2d"])));
    smalltalk.send(self, "_update", []);
    return self;
}
}),
smalltalk.Map);

smalltalk.addMethod(
"_monsters",
smalltalk.method({
selector: "monsters",
fn: function () {
    var self = this;
    var monsters = nil;
    monsters = smalltalk.send(smalltalk.Array || Array, "_new", []);
    smalltalk.send(smalltalk.send(self, "_cells", []), "_collect_", [function (row) {return smalltalk.send(row, "_collect_", [function (cell) {return ($receiver = smalltalk.send(cell, "_monster", [])) != nil && $receiver != undefined ? function () {return smalltalk.send(monsters, "_add_", [smalltalk.send(cell, "_monster", [])]);}() : nil;}]);}]);
    return monsters;
    return self;
}
}),
smalltalk.Map);

smalltalk.addMethod(
"_monstersFromSide_",
smalltalk.method({
selector: "monstersFromSide:",
fn: function (aSide) {
    var self = this;
    return smalltalk.send(smalltalk.send(self, "_monsters", []), "_select_", [function (each) {return smalltalk.send(smalltalk.send(each, "_side", []), "__eq", [aSide]);}]);
    return self;
}
}),
smalltalk.Map);

smalltalk.addMethod(
"_mouseClick",
smalltalk.method({
selector: "mouseClick",
fn: function () {
    var self = this;
    smalltalk.send(self, "_removeSelection", []);
    ($receiver = smalltalk.send(self, "_currentCell", [])) != nil &&
        $receiver != undefined ? function () {return smalltalk.send(smalltalk.send(smalltalk.send(self, "_currentCell", []), "_state", []), "_mouseClick", []);}() : nil;
    smalltalk.send(self, "_update", []);
    return self;
}
}),
smalltalk.Map);

smalltalk.addMethod(
"_mouseCoodToHexCoodX_y_",
smalltalk.method({
selector: "mouseCoodToHexCoodX:y:",
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
}
}),
smalltalk.Map);

smalltalk.addMethod(
"_mouseMove_",
smalltalk.method({
selector: "mouseMove:",
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
}
}),
smalltalk.Map);

smalltalk.addMethod(
"_movableCellsNextTo_",
smalltalk.method({
selector: "movableCellsNextTo:",
fn: function (aCell) {
    var self = this;
    return smalltalk.send(smalltalk.send(self, "_cellsNextTo_", [aCell]), "_select_", [function (each) {return smalltalk.send(each, "_canMoveTo", []);}]);
    return self;
}
}),
smalltalk.Map);

smalltalk.addMethod(
"_oldAlgoMouseCoodToHexCoodX_y_inMap_",
smalltalk.method({
selector: "oldAlgoMouseCoodToHexCoodX:y:inMap:",
fn: function (x, y, aMap) {
    var self = this;
    return self;
}
}),
smalltalk.Map);

smalltalk.addMethod(
"_removeSelection",
smalltalk.method({
selector: "removeSelection",
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_cells", []), "_collect_", [function (row) {return smalltalk.send(row, "_collect_", [function (cell) {return smalltalk.send(cell, "_removeSelector", []);}]);}]);
    return self;
}
}),
smalltalk.Map);

smalltalk.addMethod(
"_selectActiveMonster",
smalltalk.method({
selector: "selectActiveMonster",
fn: function () {
    var self = this;
    var activeMonsters = nil;
    smalltalk.send(smalltalk.Transcript || Transcript, "_show_", ["start"]);
    activeMonsters = smalltalk.send(smalltalk.Array || Array, "_new", []);
    smalltalk.send(smalltalk.send(self, "_cells", []), "_collect_", [function (row) {return smalltalk.send(row, "_collect_", [function (cell) {return ($receiver = smalltalk.send(cell, "_monster", [])) != nil && $receiver != undefined ? function () {return ($receiver = smalltalk.send(smalltalk.send(smalltalk.send(cell, "_monster", []), "_state", []), "_isKindOf_", [smalltalk.Inactive || Inactive])).klass === smalltalk.Boolean ? !$receiver ? function () {return smalltalk.send(activeMonsters, "_add_", [cell]);}() : nil : smalltalk.send($receiver, "_ifFalse_", [function () {return smalltalk.send(activeMonsters, "_add_", [cell]);}]);}() : nil;}]);}]);
    (function ($rec) {smalltalk.send($rec, "_show_", [activeMonsters]);return smalltalk.send($rec, "_cr", []);}(smalltalk.Transcript || Transcript));
    smalltalk.send(activeMonsters, "_collect_", [function (each) {return smalltalk.send(each, "_addSelectorColored_", ["white"]);}]);
    return self;
}
}),
smalltalk.Map);

smalltalk.addMethod(
"_selectableCellsNextTo_side_",
smalltalk.method({
selector: "selectableCellsNextTo:side:",
fn: function (aCell, aSide) {
    var self = this;
    return smalltalk.send(smalltalk.send(self, "_cellsNextTo_", [aCell]), "_select_", [function (each) {return smalltalk.send(each, "_canBeSelected_", [aSide]);}]);
    return self;
}
}),
smalltalk.Map);

smalltalk.addMethod(
"_tileUnit",
smalltalk.method({
selector: "tileUnit",
fn: function () {
    var self = this;
    return 50;
    return self;
}
}),
smalltalk.Map);

smalltalk.addMethod(
"_update",
smalltalk.method({
selector: "update",
fn: function () {
    var self = this;
    var elem = nil;
    elem = smalltalk.send(smalltalk.send(self, "_canvas", []), "_element", []);
    smalltalk.send(smalltalk.send(elem, "_getContext_", ["2d"]), "_clearRect_y_width_height_", [0, 0, smalltalk.send(elem, "_width", []), smalltalk.send(elem, "_height", [])]);
    smalltalk.send(smalltalk.send(self, "_cells", []), "_do_", [function (row) {return smalltalk.send(row, "_do_", [function (cell) {return smalltalk.send(cell, "_draw", []);}]);}]);
    return self;
}
}),
smalltalk.Map);

smalltalk.addMethod(
"_updateCellsCoods",
smalltalk.method({
selector: "updateCellsCoods",
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_cells", []), "_withIndexDo_", [function (row, i) {return smalltalk.send(row, "_withIndexDo_", [function (cell, j) {return smalltalk.send(cell, "_updateCoods_", [smalltalk.send(self, "_calculX_y_", [i, j])]);}]);}]);
    return self;
}
}),
smalltalk.Map);


smalltalk.Map.klass.iVarNames = ['map'];
smalltalk.addMethod(
"_getSingleton",
smalltalk.method({
selector: "getSingleton",
fn: function () {
    var self = this;
    return ($receiver = typeof map == "undefined" ? nil : map) == nil ||
        $receiver == undefined ? function () {return map = smalltalk.send(self, "_new", []);}() : $receiver;
    return self;
}
}),
smalltalk.Map.klass);

smalltalk.addMethod(
"_newWithMapIndex_",
smalltalk.method({
selector: "newWithMapIndex:",
fn: function (aMapIndex) {
    var self = this;
    var success = nil;
    var map = nil;
    self['@map'] = smalltalk.send(self, "_getSingleton", []);
    success = function (data) {return smalltalk.send(self['@map'], "_initializeFromJson_", [data]);};
    $.getJSON("ressources/json/maps/map" + aMapIndex + ".json", success);
    return self['@map'];
    return self;
}
}),
smalltalk.Map.klass);


