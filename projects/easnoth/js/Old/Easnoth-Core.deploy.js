smalltalk.addPackage('Easnoth-Core', {});
smalltalk.addClass('Cell', smalltalk.Object, ['drawedObjects', 'x', 'y'], 'Easnoth-Core');
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
"_monster",
smalltalk.method({
selector: "monster",
fn: function () {
    var self = this;
    return smalltalk.send(self['@drawedObjects'], "_at_", [7]);
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
    smalltalk.send(self['@drawedObjects'], "_at_put_", [7, aMonster]);
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
    return smalltalk.send(self['@drawedObjects'], "_select_", [function (each) {return smalltalk.send(smalltalk.send(each, "_class", []), "__eq", [smalltalk.OverTile || OverTile]);}]);
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
    var $early = {};
    try {
        ($receiver = ($receiver = smalltalk.send(aCollection, "_size", [])).klass === smalltalk.Number ? $receiver < 7 : smalltalk.send($receiver, "__lt", [7])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(smalltalk.send(1, "_to_", [smalltalk.send(aCollection, "_size", [])]), "_do_", [function (i) {return smalltalk.send(self['@drawedObjects'], "_at_put_", [($receiver = i).klass === smalltalk.Number ? $receiver + 1 : smalltalk.send($receiver, "__plus", [1]), smalltalk.send(aCollection, "_at_", [i])]);}]);}() : function () {return function () {throw $early = [smalltalk.send(self, "_error_", ["too many overtiles in cell in json object"])];}();}() : smalltalk.send($receiver, "_ifTrue_ifFalse_", [function () {return smalltalk.send(smalltalk.send(1, "_to_", [smalltalk.send(aCollection, "_size", [])]), "_do_", [function (i) {return smalltalk.send(self['@drawedObjects'], "_at_put_", [($receiver = i).klass === smalltalk.Number ? $receiver + 1 : smalltalk.send($receiver, "__plus", [1]), smalltalk.send(aCollection, "_at_", [i])]);}]);}, function () {return function () {throw $early = [smalltalk.send(self, "_error_", ["too many overtiles in cell in json object"])];}();}]);
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
"_tile",
smalltalk.method({
selector: "tile",
fn: function () {
    var self = this;
    return smalltalk.send(self['@drawedObjects'], "_at_", [1]);
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
    smalltalk.send(self['@drawedObjects'], "_at_put_", [1, aTile]);
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
    return function ($rec) {smalltalk.send($rec, "_drawedObjects_", [smalltalk.send(smalltalk.Array || Array, "_new_", [8])]);smalltalk.send($rec, "_x_", [smalltalk.send(coods, "_at_", [1])]);smalltalk.send($rec, "_y_", [smalltalk.send(coods, "_at_", [2])]);smalltalk.send($rec, "_tile_", [smalltalk.send(smalltalk.Tile || Tile, "_newWithContext_jsonTile_", [aContext, smalltalk.send(aJsonCell, "_tile", [])])]);smalltalk.send($rec, "_overTiles_", [smalltalk.send(smalltalk.send(aJsonCell, "_overtiles", []), "_collect_", [function (each) {return smalltalk.send(smalltalk.OverTile || OverTile, "_newWithContext_jsonOverTile_", [aContext, smalltalk.send(each, "_overtile", [])]);}])]);smalltalk.send($rec, "_monster_", [smalltalk.send(smalltalk.Monster || Monster, "_newWithContext_jsonMonster_", [aContext, smalltalk.send(aJsonCell, "_monster", [])])]);return smalltalk.send($rec, "_yourself", []);}(smalltalk.send(self, "_new", []));
    return self;
}
}),
smalltalk.Cell.klass);


smalltalk.addClass('DrawedObject', smalltalk.Object, ['image', 'context'], 'Easnoth-Core');
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



smalltalk.addClass('Ground', smalltalk.DrawedObject, [], 'Easnoth-Core');
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



smalltalk.addClass('OverTile', smalltalk.Ground, [], 'Easnoth-Core');
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
"_newWithContext_jsonOverTile_",
smalltalk.method({
selector: "newWithContext:jsonOverTile:",
fn: function (aContext, aJsonOverTile) {
    var self = this;
    return function ($rec) {smalltalk.send($rec, "_initializeContext_imageKey_", [aContext, aJsonOverTile]);return smalltalk.send($rec, "_yourself", []);}(smalltalk.send(self, "_new", []));
    return self;
}
}),
smalltalk.OverTile.klass);


smalltalk.addClass('Tile', smalltalk.Ground, ['isWall'], 'Easnoth-Core');
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


smalltalk.addClass('OverGround', smalltalk.DrawedObject, ['hp'], 'Easnoth-Core');
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



smalltalk.addClass('Building', smalltalk.OverGround, [], 'Easnoth-Core');
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



smalltalk.addClass('Monster', smalltalk.OverGround, ['move', 'attack', 'knockback', 'range', 'heros', 'special'], 'Easnoth-Core');
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
"_drawAsHeroX_y_",
smalltalk.method({
selector: "drawAsHeroX:y:",
fn: function (aX, aY) {
    var self = this;
    smalltalk.send(self, "_displayX_y_", [($receiver = aX).klass === smalltalk.Number ? $receiver + 15 : smalltalk.send($receiver, "__plus", [15]), ($receiver = aY).klass === smalltalk.Number ? $receiver - 28 : smalltalk.send($receiver, "__minus", [28])]);
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
    return function ($rec) {smalltalk.send($rec, "_initializeContext_imageKey_", [aContext, aJsonMonster]);smalltalk.send($rec, "_initializeStats_", [aJsonMonster]);return smalltalk.send($rec, "_yourself", []);}(smalltalk.send(self, "_new", []));
    return self;
}
}),
smalltalk.Monster.klass);


smalltalk.addClass('Map', smalltalk.Object, ['mapX', 'mapY', 'cells', 'canvas'], 'Easnoth-Core');
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
    smalltalk.send(smalltalk.Transcript || Transcript, "_show_", ["banana"]);
    smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_canvas", []), "_element", []), "_getContext_", ["2d"]), "_clearRect_y_width_height_", [0, 0, 1366, 768]);
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
    var jsonObject = nil;
    var map = nil;
    self['@map'] = smalltalk.send(self, "_getSingleton", []);
    jsonObject = smalltalk.send(smalltalk.JSON || JSON, "_parse_", [smalltalk.send(smalltalk.send(smalltalk.XMLhttpRequestProxy || XMLhttpRequestProxy, "_getSingleton", []), "_loadJSON_", [smalltalk.send(smalltalk.send("ressources/json/maps/map", "__comma", [aMapIndex]), "__comma", [".json"])])]);
    smalltalk.send(self['@map'], "_mapX_", [($receiver = smalltalk.send(self['@map'], "_mapX", [])).klass === smalltalk.Number ? $receiver + (($receiver = ($receiver = smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(jsonObject, "_row", []), "_at_", [1]), "_cells", []), "_size", [])).klass === smalltalk.Number ? $receiver * smalltalk.send(self['@map'], "_tileUnit", []) : smalltalk.send($receiver, "__star", [smalltalk.send(self['@map'], "_tileUnit", [])])).klass === smalltalk.Number ? $receiver * 1.17 : smalltalk.send($receiver, "__star", [1.17])) : smalltalk.send($receiver, "__plus", [($receiver = ($receiver = smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(jsonObject, "_row", []), "_at_", [1]), "_cells", []), "_size", [])).klass === smalltalk.Number ? $receiver * smalltalk.send(self['@map'], "_tileUnit", []) : smalltalk.send($receiver, "__star", [smalltalk.send(self['@map'], "_tileUnit", [])])).klass === smalltalk.Number ? $receiver * 1.17 : smalltalk.send($receiver, "__star", [1.17])])]);
    smalltalk.send(smalltalk.send(smalltalk.ImageCache || ImageCache, "_getSingleton", []), "_onload_", [function () {return smalltalk.send(self['@map'], "_update", []);}]);
    smalltalk.send(smalltalk.send("window", "_asJQuery", []), "_resize_", [function () {return smalltalk.send(self['@map'], "_update", []);}]);
    smalltalk.send(self['@map'], "_initializeCellsFromJson_", [jsonObject]);
    return self['@map'];
    return self;
}
}),
smalltalk.Map.klass);


