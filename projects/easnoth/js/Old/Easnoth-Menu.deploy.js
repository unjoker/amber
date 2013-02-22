smalltalk.addPackage('Easnoth-Menu', {});
smalltalk.addClass('ActionMenu', smalltalk.Widget, ['map', 'components'], 'Easnoth-Menu');
smalltalk.addMethod(
"_addComponent_",
smalltalk.method({
selector: "addComponent:",
fn: function (aComponent) {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_components", []), "_add_", [aComponent]);
    return self;
}
}),
smalltalk.ActionMenu);

smalltalk.addMethod(
"_components",
smalltalk.method({
selector: "components",
fn: function () {
    var self = this;
    return self['@components'];
    return self;
}
}),
smalltalk.ActionMenu);

smalltalk.addMethod(
"_components_",
smalltalk.method({
selector: "components:",
fn: function (aCol) {
    var self = this;
    self['@components'] = aCol;
    return self;
}
}),
smalltalk.ActionMenu);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function () {
    var self = this;
    smalltalk.send(self, "_components_", [smalltalk.send(smalltalk.Array || Array, "_new", [])]);
    return self;
}
}),
smalltalk.ActionMenu);

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
smalltalk.ActionMenu);

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
smalltalk.ActionMenu);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
fn: function (html) {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_components", []), "_collect_", [function (each) {return smalltalk.send(each, "_renderOn_", [html]);}]);
    return self;
}
}),
smalltalk.ActionMenu);


smalltalk.addMethod(
"_newFor_",
smalltalk.method({
selector: "newFor:",
fn: function (aMap) {
    var self = this;
    return function ($rec) {smalltalk.send($rec, "_map_", [aMap]);return smalltalk.send($rec, "_yourself", []);}(smalltalk.send(self, "_new", []));
    return self;
}
}),
smalltalk.ActionMenu.klass);


smalltalk.addClass('FightMenu', smalltalk.ActionMenu, ['actionCell'], 'Easnoth-Menu');
smalltalk.addMethod(
"_actionCell",
smalltalk.method({
selector: "actionCell",
fn: function () {
    var self = this;
    return self['@actionCell'];
    return self;
}
}),
smalltalk.FightMenu);

smalltalk.addMethod(
"_actionCell_",
smalltalk.method({
selector: "actionCell:",
fn: function (aCell) {
    var self = this;
    self['@actionCell'] = aCell;
    return self;
}
}),
smalltalk.FightMenu);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function () {
    var self = this;
    smalltalk.send(self, "_initialize", [], smalltalk.FightMenu.superclass || nil);
    smalltalk.send(self, "_addComponent_", [smalltalk.send(smalltalk.MonsterWatcher || MonsterWatcher, "_newFor_", [self])]);
    smalltalk.send(self, "_addComponent_", [smalltalk.send(smalltalk.MapWatcher || MapWatcher, "_newFor_", [self])]);
    return self;
}
}),
smalltalk.FightMenu);



smalltalk.addClass('ActionMenuComponent', smalltalk.Widget, ['actionMenu'], 'Easnoth-Menu');
smalltalk.addMethod(
"_actionMenu",
smalltalk.method({
selector: "actionMenu",
fn: function () {
    var self = this;
    return self['@actionMenu'];
    return self;
}
}),
smalltalk.ActionMenuComponent);

smalltalk.addMethod(
"_actionMenu_",
smalltalk.method({
selector: "actionMenu:",
fn: function (aMenu) {
    var self = this;
    self['@actionMenu'] = aMenu;
    return self;
}
}),
smalltalk.ActionMenuComponent);


smalltalk.addMethod(
"_newFor_",
smalltalk.method({
selector: "newFor:",
fn: function (aMenu) {
    var self = this;
    return function ($rec) {smalltalk.send($rec, "_actionMenu_", [aMenu]);return smalltalk.send($rec, "_yourself", []);}(smalltalk.send(self, "_new", []));
    return self;
}
}),
smalltalk.ActionMenuComponent.klass);


smalltalk.addClass('MapWatcher', smalltalk.ActionMenuComponent, [], 'Easnoth-Menu');
smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
fn: function (html) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_class_", ["mapWatcher"]);return smalltalk.send($rec, "_with_", [function () {(function ($rec) {smalltalk.send($rec, "_with_", ["left"]);return smalltalk.send($rec, "_onClick_", [function () {return smalltalk.send(smalltalk.send(smalltalk.send(self, "_actionMenu", []), "_map", []), "_goLeft", []);}]);}(smalltalk.send(html, "_button", [])));(function ($rec) {smalltalk.send($rec, "_with_", ["right"]);return smalltalk.send($rec, "_onClick_", [function () {return smalltalk.send(smalltalk.send(smalltalk.send(self, "_actionMenu", []), "_map", []), "_goRight", []);}]);}(smalltalk.send(html, "_button", [])));(function ($rec) {smalltalk.send($rec, "_with_", ["down"]);return smalltalk.send($rec, "_onClick_", [function () {return smalltalk.send(smalltalk.send(smalltalk.send(self, "_actionMenu", []), "_map", []), "_goDown", []);}]);}(smalltalk.send(html, "_button", [])));(function ($rec) {smalltalk.send($rec, "_with_", ["up"]);return smalltalk.send($rec, "_onClick_", [function () {return smalltalk.send(smalltalk.send(smalltalk.send(self, "_actionMenu", []), "_map", []), "_goUp", []);}]);}(smalltalk.send(html, "_button", [])));(function ($rec) {smalltalk.send($rec, "_with_", ["mh"]);return smalltalk.send($rec, "_onClick_", [function () {return smalltalk.send(smalltalk.send(smalltalk.send(self, "_actionMenu", []), "_map", []), "_mirrorHorizontal", []);}]);}(smalltalk.send(html, "_button", [])));return function ($rec) {smalltalk.send($rec, "_with_", ["vh"]);return smalltalk.send($rec, "_onClick_", [function () {return smalltalk.send(smalltalk.send(smalltalk.send(self, "_actionMenu", []), "_map", []), "_mirrorVertical", []);}]);}(smalltalk.send(html, "_button", []));}]);}(smalltalk.send(html, "_div", [])));
    return self;
}
}),
smalltalk.MapWatcher);



smalltalk.addClass('MonsterWatcher', smalltalk.ActionMenuComponent, ['monster', 'box'], 'Easnoth-Menu');
smalltalk.addMethod(
"_box",
smalltalk.method({
selector: "box",
fn: function () {
    var self = this;
    return self['@box'];
    return self;
}
}),
smalltalk.MonsterWatcher);

smalltalk.addMethod(
"_box_",
smalltalk.method({
selector: "box:",
fn: function (aBox) {
    var self = this;
    self['@box'] = aBox;
    return self;
}
}),
smalltalk.MonsterWatcher);

smalltalk.addMethod(
"_monster",
smalltalk.method({
selector: "monster",
fn: function () {
    var self = this;
    return self['@monster'];
    return self;
}
}),
smalltalk.MonsterWatcher);

smalltalk.addMethod(
"_monster_",
smalltalk.method({
selector: "monster:",
fn: function (aMonster) {
    var self = this;
    self['@monster'] = aMonster;
    smalltalk.send(self, "_update", []);
    return self;
}
}),
smalltalk.MonsterWatcher);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
fn: function (html) {
    var self = this;
    smalltalk.send(self, "_box_", [function ($rec) {smalltalk.send($rec, "_class_", ["monsterWatcher"]);return smalltalk.send($rec, "_yourself", []);}(smalltalk.send(html, "_div", []))]);
    smalltalk.send(self, "_update", []);
    return self;
}
}),
smalltalk.MonsterWatcher);

smalltalk.addMethod(
"_update",
smalltalk.method({
selector: "update",
fn: function () {
    var self = this;
    ($receiver = smalltalk.send(self, "_monster", [])) != nil &&
        $receiver != undefined ? function () {return smalltalk.send(smalltalk.send(self, "_box", []), "_contents_", [function (html) {smalltalk.send(html, "_img_", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_monster", []), "_image", []), "_at_", ["src"])]);return smalltalk.send(smalltalk.send(html, "_ul", []), "_with_", [function () {return smalltalk.send(smalltalk.send(html, "_li", []), "_with_", [smalltalk.send("knockBack", "__comma", [smalltalk.send(smalltalk.send(self, "_monster", []), "_knockback", [])])]);}]);}]);}() : nil;
    return self;
}
}),
smalltalk.MonsterWatcher);



