smalltalk.addPackage('Easnoth-Core', {});
smalltalk.addClass('Cell', smalltalk.Object, ['drawedObjects', 'x', 'y'], 'Easnoth-Core');
smalltalk.Cell.comment="\x22implementation of an hexagonal isometric cell\x22"
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
category: 'accessing',
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
category: 'accessing',
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
"_monster",
smalltalk.method({
selector: "monster",
category: 'accessing',
fn: function () {
    var self = this;
    return smalltalk.send(self['@drawedObjects'], "_at_", [7]);
    return self;
},
args: [],
source: "monster\x0a\x09^drawedObjects at: 7",
messageSends: ["at:"],
referencedClasses: []
}),
smalltalk.Cell);

smalltalk.addMethod(
"_monster_",
smalltalk.method({
selector: "monster:",
category: 'accessing',
fn: function (aMonster) {
    var self = this;
    smalltalk.send(self['@drawedObjects'], "_at_put_", [7, aMonster]);
    return self;
},
args: ["aMonster"],
source: "monster: aMonster\x0a\x09drawedObjects at: 7 put: aMonster",
messageSends: ["at:put:"],
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
    return smalltalk.send(self['@drawedObjects'], "_select_", [function (each) {return smalltalk.send(smalltalk.send(each, "_class", []), "__eq", [smalltalk.OverTile || OverTile]);}]);
    return self;
},
args: [],
source: "overTiles\x0a\x09^drawedObjects select:[:each | each class = OverTile ].",
messageSends: ["select:", "=", "class"],
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
},
args: ["aCollection"],
source: "overTiles: aCollection\x0a\x09(aCollection size < 7) ifTrue: [\x0a\x09\x09(1 to: aCollection size) do: [:i | drawedObjects at: i+1 put: (aCollection at: i)]\x0a\x09] ifFalse: [\x0a\x09\x09^self error: 'too many overtiles in cell in json object'\x0a\x09]",
messageSends: ["ifTrue:ifFalse:", "<", "size", "do:", "to:", "at:put:", "+", "at:", "error:"],
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
    return smalltalk.send(self['@drawedObjects'], "_at_", [1]);
    return self;
},
args: [],
source: "tile\x0a\x09^drawedObjects at: 1",
messageSends: ["at:"],
referencedClasses: []
}),
smalltalk.Cell);

smalltalk.addMethod(
"_tile_",
smalltalk.method({
selector: "tile:",
category: 'accessing',
fn: function (aTile) {
    var self = this;
    smalltalk.send(self['@drawedObjects'], "_at_put_", [1, aTile]);
    return self;
},
args: ["aTile"],
source: "tile: aTile\x0a\x09drawedObjects at: 1 put: aTile.",
messageSends: ["at:put:"],
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
category: 'accessing',
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
category: 'accessing',
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
category: 'accessing',
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
category: 'accessing',
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
    return function ($rec) {smalltalk.send($rec, "_drawedObjects_", [smalltalk.send(smalltalk.Array || Array, "_new_", [8])]);smalltalk.send($rec, "_x_", [smalltalk.send(coods, "_at_", [1])]);smalltalk.send($rec, "_y_", [smalltalk.send(coods, "_at_", [2])]);smalltalk.send($rec, "_tile_", [smalltalk.send(smalltalk.Tile || Tile, "_newWithContext_jsonTile_", [aContext, smalltalk.send(aJsonCell, "_tile", [])])]);smalltalk.send($rec, "_overTiles_", [smalltalk.send(smalltalk.send(aJsonCell, "_overtiles", []), "_collect_", [function (each) {return smalltalk.send(smalltalk.OverTile || OverTile, "_newWithContext_jsonOverTile_", [aContext, smalltalk.send(each, "_overtile", [])]);}])]);smalltalk.send($rec, "_monster_", [smalltalk.send(smalltalk.Monster || Monster, "_newWithContext_jsonMonster_", [aContext, smalltalk.send(aJsonCell, "_monster", [])])]);return smalltalk.send($rec, "_yourself", []);}(smalltalk.send(self, "_new", []));
    return self;
},
args: ["aContext", "aJsonCell", "coods"],
source: "newWithContext: aContext jsoncell: aJsonCell coods: coods\x0a\x09^self new\x0a\x09\x09drawedObjects: (Array new: 8);\x0a\x09\x09x: (coods at: 1);\x0a\x09\x09y: (coods at: 2);\x0a\x09\x09tile: (Tile newWithContext: aContext jsonTile: aJsonCell tile);\x0a\x09\x09overTiles: (aJsonCell overtiles collect: [:each | OverTile newWithContext: aContext jsonOverTile: each overtile]);\x0a\x09\x09monster: (Monster newWithContext: aContext jsonMonster: aJsonCell monster);\x0a\x09\x09yourself.",
messageSends: ["drawedObjects:", "new:", "x:", "at:", "y:", "tile:", "newWithContext:jsonTile:", "tile", "overTiles:", "collect:", "overtiles", "newWithContext:jsonOverTile:", "overtile", "monster:", "newWithContext:jsonMonster:", "monster", "yourself", "new"],
referencedClasses: ["Array", "Tile", "OverTile", "Monster"]
}),
smalltalk.Cell.klass);


smalltalk.addClass('DrawedObject', smalltalk.Object, ['image', 'context'], 'Easnoth-Core');
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



smalltalk.addClass('Ground', smalltalk.DrawedObject, [], 'Easnoth-Core');
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



smalltalk.addClass('OverTile', smalltalk.Ground, [], 'Easnoth-Core');
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
"_newWithContext_jsonOverTile_",
smalltalk.method({
selector: "newWithContext:jsonOverTile:",
category: 'instance creation',
fn: function (aContext, aJsonOverTile) {
    var self = this;
    return function ($rec) {smalltalk.send($rec, "_initializeContext_imageKey_", [aContext, aJsonOverTile]);return smalltalk.send($rec, "_yourself", []);}(smalltalk.send(self, "_new", []));
    return self;
},
args: ["aContext", "aJsonOverTile"],
source: "newWithContext: aContext jsonOverTile: aJsonOverTile\x0a\x09^self new\x0a\x09\x09initializeContext: aContext imageKey: aJsonOverTile;\x0a\x09\x09yourself.\x0a",
messageSends: ["initializeContext:imageKey:", "yourself", "new"],
referencedClasses: []
}),
smalltalk.OverTile.klass);


smalltalk.addClass('Tile', smalltalk.Ground, ['isWall'], 'Easnoth-Core');
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


smalltalk.addClass('OverGround', smalltalk.DrawedObject, ['hp'], 'Easnoth-Core');
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



smalltalk.addClass('Building', smalltalk.OverGround, [], 'Easnoth-Core');
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



smalltalk.addClass('Monster', smalltalk.OverGround, ['move', 'attack', 'knockback', 'range', 'heros', 'special'], 'Easnoth-Core');
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
"_drawAsHeroX_y_",
smalltalk.method({
selector: "drawAsHeroX:y:",
category: 'displaying',
fn: function (aX, aY) {
    var self = this;
    smalltalk.send(self, "_displayX_y_", [($receiver = aX).klass === smalltalk.Number ? $receiver + 15 : smalltalk.send($receiver, "__plus", [15]), ($receiver = aY).klass === smalltalk.Number ? $receiver - 28 : smalltalk.send($receiver, "__minus", [28])]);
    return self;
},
args: ["aX", "aY"],
source: "drawAsHeroX: aX y: aY\x0a\x09\x22if player 2\x0a\x09self context save;\x0a\x09\x09translate: aX y: 0.\x0a\x09\x09scale: -1 y: 1.\x0a\x09self displayX: 0 - 15 y: aY - 28.\x0a\x09ctx restore.\x22\x0a\x09self displayX: aX + 15 y: aY - 28.",
messageSends: ["displayX:y:", "+", "-"],
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
    return function ($rec) {smalltalk.send($rec, "_initializeContext_imageKey_", [aContext, aJsonMonster]);smalltalk.send($rec, "_initializeStats_", [aJsonMonster]);return smalltalk.send($rec, "_yourself", []);}(smalltalk.send(self, "_new", []));
    return self;
},
args: ["aContext", "aJsonMonster"],
source: "newWithContext: aContext jsonMonster: aJsonMonster\x0a\x09^self new\x0a\x09\x09initializeContext: aContext imageKey: aJsonMonster;\x0a\x09\x09initializeStats: aJsonMonster;\x0a\x09\x09yourself.\x0a",
messageSends: ["initializeContext:imageKey:", "initializeStats:", "yourself", "new"],
referencedClasses: []
}),
smalltalk.Monster.klass);


smalltalk.addClass('Map', smalltalk.Object, ['mapX', 'mapY', 'cells', 'canvas'], 'Easnoth-Core');
smalltalk.Map.comment="\x22singleton Map, represents all the map drawed in the canvas\x22"
smalltalk.addMethod(
"_calculX_y_",
smalltalk.method({
selector: "calculX:y:",
category: 'initialize-release',
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
    smalltalk.send(smalltalk.Transcript || Transcript, "_show_", ["banana"]);
    smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_canvas", []), "_element", []), "_getContext_", ["2d"]), "_clearRect_y_width_height_", [0, 0, 1366, 768]);
    smalltalk.send(smalltalk.send(self, "_cells", []), "_do_", [function (row) {return smalltalk.send(row, "_do_", [function (cell) {return smalltalk.send(cell, "_draw", []);}]);}]);
    return self;
},
args: [],
source: "update\x0a\x09Transcript show: 'banana'.\x0a\x09(self canvas element getContext: '2d') clearRect: 0 y: 0 width: 1366 height: 768.\x0a\x09self cells do: [:row |\x0a\x09\x09row do: [ :cell |\x0a\x09\x09\x09cell draw.\x0a\x09\x09]\x0a\x09]",
messageSends: ["show:", "clearRect:y:width:height:", "getContext:", "element", "canvas", "do:", "cells", "draw"],
referencedClasses: ["Transcript"]
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
},
args: ["aMapIndex"],
source: "newWithMapIndex: aMapIndex\x0a\x09|jsonObject map|\x0a\x09\x0a\x09map := self getSingleton.\x0a\x09jsonObject := JSON parse: (XMLhttpRequestProxy getSingleton loadJSON:  'ressources/json/maps/map',aMapIndex,'.json').\x0a\x09\x0a\x09\x22mapX adjustment according to mapSize\x22\x0a\x09map mapX: map mapX + ((jsonObject row at:1) cells size * map tileUnit * 1.17).\x0a\x0a\x09\x22cache initializing\x22\x0a\x09ImageCache getSingleton onload: [map update].\x0a\x09'window' asJQuery resize: [map update.].\x0a\x0a\x09\x22cells initializing\x22\x0a\x09map initializeCellsFromJson: jsonObject.\x0a\x0a\x09^map",
messageSends: ["getSingleton", "parse:", "loadJSON:", ",", "mapX:", "+", "mapX", "*", "size", "cells", "at:", "row", "tileUnit", "onload:", "update", "resize:", "asJQuery", "initializeCellsFromJson:"],
referencedClasses: ["JSON", "XMLhttpRequestProxy", "ImageCache"]
}),
smalltalk.Map.klass);


