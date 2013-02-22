smalltalk.addPackage('Easnoth-Menu', {});
smalltalk.addClass('ActionMenu', smalltalk.Widget, ['map', 'components'], 'Easnoth-Menu');
smalltalk.addMethod(
"_addComponent_",
smalltalk.method({
selector: "addComponent:",
category: 'accessing',
fn: function (aComponent) {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_components", []), "_add_", [aComponent]);
    return self;
},
args: ["aComponent"],
source: "addComponent: aComponent\x0a\x09self components add: aComponent",
messageSends: ["add:", "components"],
referencedClasses: []
}),
smalltalk.ActionMenu);

smalltalk.addMethod(
"_components",
smalltalk.method({
selector: "components",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@components'];
    return self;
},
args: [],
source: "components\x0a\x09^components",
messageSends: [],
referencedClasses: []
}),
smalltalk.ActionMenu);

smalltalk.addMethod(
"_components_",
smalltalk.method({
selector: "components:",
category: 'accessing',
fn: function (aCol) {
    var self = this;
    self['@components'] = aCol;
    return self;
},
args: ["aCol"],
source: "components: aCol\x0a\x09components := aCol",
messageSends: [],
referencedClasses: []
}),
smalltalk.ActionMenu);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function () {
    var self = this;
    smalltalk.send(self, "_components_", [smalltalk.send(smalltalk.Array || Array, "_new", [])]);
    return self;
},
args: [],
source: "initialize\x0a\x09self components: Array new",
messageSends: ["components:", "new"],
referencedClasses: ["Array"]
}),
smalltalk.ActionMenu);

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
smalltalk.ActionMenu);

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
smalltalk.ActionMenu);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
category: 'initialize-release',
fn: function (html) {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_components", []), "_collect_", [function (each) {return smalltalk.send(each, "_renderOn_", [html]);}]);
    return self;
},
args: ["html"],
source: "renderOn: html\x0a\x09self components collect: [:each |\x0a\x09\x09each renderOn: html ].",
messageSends: ["collect:", "components", "renderOn:"],
referencedClasses: []
}),
smalltalk.ActionMenu);


smalltalk.addMethod(
"_newFor_",
smalltalk.method({
selector: "newFor:",
category: 'instance-creation',
fn: function (aMap) {
    var self = this;
    return function ($rec) {smalltalk.send($rec, "_map_", [aMap]);return smalltalk.send($rec, "_yourself", []);}(smalltalk.send(self, "_new", []));
    return self;
},
args: ["aMap"],
source: "newFor: aMap\x0a\x09^self new\x0a\x09\x09map: aMap;\x0a\x09\x09yourself.",
messageSends: ["map:", "yourself", "new"],
referencedClasses: []
}),
smalltalk.ActionMenu.klass);


smalltalk.addClass('FightMenu', smalltalk.ActionMenu, ['actionCell'], 'Easnoth-Menu');
smalltalk.addMethod(
"_actionCell",
smalltalk.method({
selector: "actionCell",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@actionCell'];
    return self;
},
args: [],
source: "actionCell\x0a\x09^actionCell",
messageSends: [],
referencedClasses: []
}),
smalltalk.FightMenu);

smalltalk.addMethod(
"_actionCell_",
smalltalk.method({
selector: "actionCell:",
category: 'accessing',
fn: function (aCell) {
    var self = this;
    self['@actionCell'] = aCell;
    return self;
},
args: ["aCell"],
source: "actionCell: aCell\x0a\x09actionCell := aCell",
messageSends: [],
referencedClasses: []
}),
smalltalk.FightMenu);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function () {
    var self = this;
    smalltalk.send(self, "_initialize", [], smalltalk.FightMenu.superclass || nil);
    smalltalk.send(self, "_addComponent_", [smalltalk.send(smalltalk.MonsterWatcher || MonsterWatcher, "_newFor_", [self])]);
    smalltalk.send(self, "_addComponent_", [smalltalk.send(smalltalk.MapWatcher || MapWatcher, "_newFor_", [self])]);
    return self;
},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self addComponent: (MonsterWatcher newFor: self).\x0a\x09self addComponent: (MapWatcher newFor: self).",
messageSends: ["initialize", "addComponent:", "newFor:"],
referencedClasses: ["MonsterWatcher", "MapWatcher"]
}),
smalltalk.FightMenu);



smalltalk.addClass('ActionMenuComponent', smalltalk.Widget, ['actionMenu'], 'Easnoth-Menu');
smalltalk.addMethod(
"_actionMenu",
smalltalk.method({
selector: "actionMenu",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@actionMenu'];
    return self;
},
args: [],
source: "actionMenu\x0a\x09^actionMenu",
messageSends: [],
referencedClasses: []
}),
smalltalk.ActionMenuComponent);

smalltalk.addMethod(
"_actionMenu_",
smalltalk.method({
selector: "actionMenu:",
category: 'accessing',
fn: function (aMenu) {
    var self = this;
    self['@actionMenu'] = aMenu;
    return self;
},
args: ["aMenu"],
source: "actionMenu: aMenu\x0a\x09actionMenu := aMenu",
messageSends: [],
referencedClasses: []
}),
smalltalk.ActionMenuComponent);


smalltalk.addMethod(
"_newFor_",
smalltalk.method({
selector: "newFor:",
category: 'instance-creation',
fn: function (aMenu) {
    var self = this;
    return function ($rec) {smalltalk.send($rec, "_actionMenu_", [aMenu]);return smalltalk.send($rec, "_yourself", []);}(smalltalk.send(self, "_new", []));
    return self;
},
args: ["aMenu"],
source: "newFor: aMenu\x0a\x09^self new\x0a\x09\x09actionMenu: aMenu;\x0a\x09\x09yourself.",
messageSends: ["actionMenu:", "yourself", "new"],
referencedClasses: []
}),
smalltalk.ActionMenuComponent.klass);


smalltalk.addClass('MapWatcher', smalltalk.ActionMenuComponent, [], 'Easnoth-Menu');
smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
category: 'displaying',
fn: function (html) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_class_", ["mapWatcher"]);return smalltalk.send($rec, "_with_", [function () {(function ($rec) {smalltalk.send($rec, "_with_", ["left"]);return smalltalk.send($rec, "_onClick_", [function () {return smalltalk.send(smalltalk.send(smalltalk.send(self, "_actionMenu", []), "_map", []), "_goLeft", []);}]);}(smalltalk.send(html, "_button", [])));(function ($rec) {smalltalk.send($rec, "_with_", ["right"]);return smalltalk.send($rec, "_onClick_", [function () {return smalltalk.send(smalltalk.send(smalltalk.send(self, "_actionMenu", []), "_map", []), "_goRight", []);}]);}(smalltalk.send(html, "_button", [])));(function ($rec) {smalltalk.send($rec, "_with_", ["down"]);return smalltalk.send($rec, "_onClick_", [function () {return smalltalk.send(smalltalk.send(smalltalk.send(self, "_actionMenu", []), "_map", []), "_goDown", []);}]);}(smalltalk.send(html, "_button", [])));(function ($rec) {smalltalk.send($rec, "_with_", ["up"]);return smalltalk.send($rec, "_onClick_", [function () {return smalltalk.send(smalltalk.send(smalltalk.send(self, "_actionMenu", []), "_map", []), "_goUp", []);}]);}(smalltalk.send(html, "_button", [])));(function ($rec) {smalltalk.send($rec, "_with_", ["mh"]);return smalltalk.send($rec, "_onClick_", [function () {return smalltalk.send(smalltalk.send(smalltalk.send(self, "_actionMenu", []), "_map", []), "_mirrorHorizontal", []);}]);}(smalltalk.send(html, "_button", [])));return function ($rec) {smalltalk.send($rec, "_with_", ["vh"]);return smalltalk.send($rec, "_onClick_", [function () {return smalltalk.send(smalltalk.send(smalltalk.send(self, "_actionMenu", []), "_map", []), "_mirrorVertical", []);}]);}(smalltalk.send(html, "_button", []));}]);}(smalltalk.send(html, "_div", [])));
    return self;
},
args: ["html"],
source: "renderOn: html\x0a\x09html div \x0a\x09\x09class: 'mapWatcher';\x0a\x09\x09with: [\x0a\x09html button\x0a\x09\x09with: 'left';\x0a\x09\x09onClick: [self actionMenu map goLeft].\x0a\x09html button\x0a\x09\x09with: 'right';\x0a\x09\x09onClick: [self actionMenu map goRight].\x0a\x09html button\x0a\x09\x09with: 'down';\x0a\x09\x09onClick: [self actionMenu map goDown].\x0a\x09html button\x0a\x09\x09with: 'up';\x0a\x09\x09onClick: [self actionMenu map goUp].\x0a\x09html button\x0a\x09\x09with: 'mh';\x0a\x09\x09onClick: [self actionMenu map mirrorHorizontal].\x0a\x09html button\x0a\x09\x09with: 'vh';\x0a\x09\x09onClick: [self actionMenu map mirrorVertical].\x0a\x09].",
messageSends: ["class:", "with:", "onClick:", "goLeft", "map", "actionMenu", "button", "goRight", "goDown", "goUp", "mirrorHorizontal", "mirrorVertical", "div"],
referencedClasses: []
}),
smalltalk.MapWatcher);



smalltalk.addClass('MonsterWatcher', smalltalk.ActionMenuComponent, ['monster', 'box'], 'Easnoth-Menu');
smalltalk.addMethod(
"_box",
smalltalk.method({
selector: "box",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@box'];
    return self;
},
args: [],
source: "box\x0a\x09^box",
messageSends: [],
referencedClasses: []
}),
smalltalk.MonsterWatcher);

smalltalk.addMethod(
"_box_",
smalltalk.method({
selector: "box:",
category: 'accessing',
fn: function (aBox) {
    var self = this;
    self['@box'] = aBox;
    return self;
},
args: ["aBox"],
source: "box: aBox\x0a\x09box := aBox",
messageSends: [],
referencedClasses: []
}),
smalltalk.MonsterWatcher);

smalltalk.addMethod(
"_monster",
smalltalk.method({
selector: "monster",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@monster'];
    return self;
},
args: [],
source: "monster\x0a\x09^monster",
messageSends: [],
referencedClasses: []
}),
smalltalk.MonsterWatcher);

smalltalk.addMethod(
"_monster_",
smalltalk.method({
selector: "monster:",
category: 'accessing',
fn: function (aMonster) {
    var self = this;
    self['@monster'] = aMonster;
    smalltalk.send(self, "_update", []);
    return self;
},
args: ["aMonster"],
source: "monster: aMonster\x0a\x09monster := aMonster.\x0a\x09self update",
messageSends: ["update"],
referencedClasses: []
}),
smalltalk.MonsterWatcher);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
category: 'displaying',
fn: function (html) {
    var self = this;
    smalltalk.send(self, "_box_", [function ($rec) {smalltalk.send($rec, "_class_", ["monsterWatcher"]);return smalltalk.send($rec, "_yourself", []);}(smalltalk.send(html, "_div", []))]);
    smalltalk.send(self, "_update", []);
    return self;
},
args: ["html"],
source: "renderOn: html\x0a\x09self box: (html div \x0a\x09\x09class: 'monsterWatcher';\x0a\x09\x09yourself).\x0a\x09self update",
messageSends: ["box:", "class:", "yourself", "div", "update"],
referencedClasses: []
}),
smalltalk.MonsterWatcher);

smalltalk.addMethod(
"_update",
smalltalk.method({
selector: "update",
category: 'displaying',
fn: function () {
    var self = this;
    ($receiver = smalltalk.send(self, "_monster", [])) != nil &&
        $receiver != undefined ? function () {return smalltalk.send(smalltalk.send(self, "_box", []), "_contents_", [function (html) {smalltalk.send(html, "_img_", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_monster", []), "_image", []), "_at_", ["src"])]);return smalltalk.send(smalltalk.send(html, "_ul", []), "_with_", [function () {return smalltalk.send(smalltalk.send(html, "_li", []), "_with_", [smalltalk.send("knockBack", "__comma", [smalltalk.send(smalltalk.send(self, "_monster", []), "_knockback", [])])]);}]);}]);}() : nil;
    return self;
},
args: [],
source: "update\x0a\x09self monster ifNotNil: [\x0a                self box contents: [:html | \x0a                        html img: (self monster image at: 'src').\x0a                        html ul with: [\x0a                                html li \x0a                                        with: 'knockBack',self monster knockback.\x0a                        ].\x0a                ].\x0a\x09].\x0a\x09\x09\x0a\x09",
messageSends: ["ifNotNil:", "monster", "contents:", "box", "img:", "at:", "image", "with:", "ul", "li", ",", "knockback"],
referencedClasses: []
}),
smalltalk.MonsterWatcher);



