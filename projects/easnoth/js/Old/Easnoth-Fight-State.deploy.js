smalltalk.addPackage('Easnoth-Fight-State', {});
smalltalk.addClass('State', smalltalk.Object, ['object'], 'Easnoth-Fight-State');
smalltalk.addMethod(
"_newState_for_",
smalltalk.method({
selector: "newState:for:",
fn: function (aState, anObject) {
    var self = this;
    var newState = nil;
    newState = smalltalk.send(aState, "_newFor_", [anObject]);
    smalltalk.send(smalltalk.send(anObject, "_state", []), "_tearDown", []);
    smalltalk.send(anObject, "_state_", [newState]);
    smalltalk.send(newState, "_setUp", []);
    return self;
}
}),
smalltalk.State);

smalltalk.addMethod(
"_object",
smalltalk.method({
selector: "object",
fn: function () {
    var self = this;
    return self['@object'];
    return self;
}
}),
smalltalk.State);

smalltalk.addMethod(
"_object_",
smalltalk.method({
selector: "object:",
fn: function (anObject) {
    var self = this;
    self['@object'] = anObject;
    return self;
}
}),
smalltalk.State);

smalltalk.addMethod(
"_setUp",
smalltalk.method({
selector: "setUp",
fn: function () {
    var self = this;
    return self;
}
}),
smalltalk.State);

smalltalk.addMethod(
"_tearDown",
smalltalk.method({
selector: "tearDown",
fn: function () {
    var self = this;
    return self;
}
}),
smalltalk.State);


smalltalk.addMethod(
"_newFor_",
smalltalk.method({
selector: "newFor:",
fn: function (anObject) {
    var self = this;
    return function ($rec) {smalltalk.send($rec, "_object_", [anObject]);return smalltalk.send($rec, "_yourself", []);}(smalltalk.send(self, "_new", []));
    return self;
}
}),
smalltalk.State.klass);


smalltalk.addClass('CellState', smalltalk.State, [], 'Easnoth-Fight-State');
smalltalk.addMethod(
"_addSelector",
smalltalk.method({
selector: "addSelector",
fn: function () {
    var self = this;
    smalltalk.send(self, "_subclassResponsibility", []);
    return self;
}
}),
smalltalk.CellState);

smalltalk.addMethod(
"_canAttack_",
smalltalk.method({
selector: "canAttack:",
fn: function (aSidePlayed) {
    var self = this;
    smalltalk.send(self, "_subclassResponsibility", []);
    return self;
}
}),
smalltalk.CellState);

smalltalk.addMethod(
"_canBeSelected_",
smalltalk.method({
selector: "canBeSelected:",
fn: function (aSide) {
    var self = this;
    smalltalk.send(self, "_subclassResponsibility", []);
    return self;
}
}),
smalltalk.CellState);

smalltalk.addMethod(
"_canMoveTo",
smalltalk.method({
selector: "canMoveTo",
fn: function () {
    var self = this;
    smalltalk.send(self, "_subclassResponsibility", []);
    return self;
}
}),
smalltalk.CellState);

smalltalk.addMethod(
"_mouseClick",
smalltalk.method({
selector: "mouseClick",
fn: function () {
    var self = this;
    smalltalk.send(self, "_subclassResponsibility", []);
    return self;
}
}),
smalltalk.CellState);

smalltalk.addMethod(
"_removeSelector",
smalltalk.method({
selector: "removeSelector",
fn: function () {
    var self = this;
    smalltalk.send(self, "_subclassResponsibility", []);
    return self;
}
}),
smalltalk.CellState);


smalltalk.addMethod(
"_initializeStateFor_",
smalltalk.method({
selector: "initializeStateFor:",
fn: function (aCell) {
    var self = this;
    ($receiver = smalltalk.send(aCell, "_free", [])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(aCell, "_state_", [smalltalk.send(smalltalk.Free || Free, "_newFor_", [aCell])]);}() : function () {return smalltalk.send(aCell, "_state_", [smalltalk.send(smalltalk.HasMonster || HasMonster, "_newFor_", [aCell])]);}() : smalltalk.send($receiver, "_ifTrue_ifFalse_", [function () {return smalltalk.send(aCell, "_state_", [smalltalk.send(smalltalk.Free || Free, "_newFor_", [aCell])]);}, function () {return smalltalk.send(aCell, "_state_", [smalltalk.send(smalltalk.HasMonster || HasMonster, "_newFor_", [aCell])]);}]);
    return self;
}
}),
smalltalk.CellState.klass);


smalltalk.addClass('Free', smalltalk.CellState, [], 'Easnoth-Fight-State');
smalltalk.addMethod(
"_addSelector",
smalltalk.method({
selector: "addSelector",
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_object", []), "_addSelectorColored_", ["green"]);
    smalltalk.send(smalltalk.send(self, "_object", []), "_changeState_", [smalltalk.FreeSelected || FreeSelected]);
    return self;
}
}),
smalltalk.Free);

smalltalk.addMethod(
"_canAttack_",
smalltalk.method({
selector: "canAttack:",
fn: function (aSidePlayed) {
    var self = this;
    return false;
    return self;
}
}),
smalltalk.Free);

smalltalk.addMethod(
"_canBeSelected_",
smalltalk.method({
selector: "canBeSelected:",
fn: function (aSide) {
    var self = this;
    return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_object", []), "_tile", []), "_isWall", []), "_not", []);
    return self;
}
}),
smalltalk.Free);

smalltalk.addMethod(
"_canMoveTo",
smalltalk.method({
selector: "canMoveTo",
fn: function () {
    var self = this;
    return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_object", []), "_tile", []), "_isWall", []), "_not", []);
    return self;
}
}),
smalltalk.Free);

smalltalk.addMethod(
"_mouseClick",
smalltalk.method({
selector: "mouseClick",
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(smalltalk.Map || Map, "_getSingleton", []), "_selectActiveMonster", []);
    return self;
}
}),
smalltalk.Free);

smalltalk.addMethod(
"_removeSelector",
smalltalk.method({
selector: "removeSelector",
fn: function () {
    var self = this;
    return self;
}
}),
smalltalk.Free);



smalltalk.addClass('FreeSelected', smalltalk.CellState, [], 'Easnoth-Fight-State');
smalltalk.addMethod(
"_addSelector",
smalltalk.method({
selector: "addSelector",
fn: function () {
    var self = this;
    smalltalk.send(self, "_error_", ["shouldnt be possible to add selector on this cell"]);
    return self;
}
}),
smalltalk.FreeSelected);

smalltalk.addMethod(
"_canAttack_",
smalltalk.method({
selector: "canAttack:",
fn: function (aSidePlayed) {
    var self = this;
    return false;
    return self;
}
}),
smalltalk.FreeSelected);

smalltalk.addMethod(
"_canBeSelected_",
smalltalk.method({
selector: "canBeSelected:",
fn: function (aSide) {
    var self = this;
    return false;
    return self;
}
}),
smalltalk.FreeSelected);

smalltalk.addMethod(
"_canMoveTo",
smalltalk.method({
selector: "canMoveTo",
fn: function () {
    var self = this;
    return false;
    return self;
}
}),
smalltalk.FreeSelected);

smalltalk.addMethod(
"_mouseClick",
smalltalk.method({
selector: "mouseClick",
fn: function () {
    var self = this;
    var actionCell = nil;
    actionCell = smalltalk.send(smalltalk.send(smalltalk.Turn || Turn, "_getSingleton", []), "_actionCell", []);
    smalltalk.send(smalltalk.send(smalltalk.send(actionCell, "_monster", []), "_state", []), "_moveTo_", [smalltalk.send(self, "_object", [])]);
    return self;
}
}),
smalltalk.FreeSelected);

smalltalk.addMethod(
"_removeSelector",
smalltalk.method({
selector: "removeSelector",
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(smalltalk.send(self, "_object", []), "_overTiles", []), "_do_", [function (overTile) {return ($receiver = smalltalk.send(overTile, "_selector", [])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(smalltalk.send(smalltalk.send(self, "_object", []), "_drawedObjects", []), "_remove_", [overTile]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return smalltalk.send(smalltalk.send(smalltalk.send(self, "_object", []), "_drawedObjects", []), "_remove_", [overTile]);}]);}]);
    smalltalk.send(smalltalk.send(self, "_object", []), "_changeState_", [smalltalk.Free || Free]);
    return self;
}
}),
smalltalk.FreeSelected);



smalltalk.addClass('HasMonster', smalltalk.CellState, [], 'Easnoth-Fight-State');
smalltalk.addMethod(
"_addSelector",
smalltalk.method({
selector: "addSelector",
fn: function () {
    var self = this;
    var sidePlaying = nil;
    sidePlaying = smalltalk.send(smalltalk.send(smalltalk.Turn || Turn, "_getSingleton", []), "_side", []);
    ($receiver = smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_object", []), "_monster", []), "_side", []), "__eq", [sidePlaying])).klass === smalltalk.Boolean ? !$receiver ? function () {return smalltalk.send(self, "_error_", ["shouldnt be able to select because friendly monster"]);}() : function () {smalltalk.send(smalltalk.send(self, "_object", []), "_addSelectorColored_", ["red"]);return smalltalk.send(smalltalk.send(self, "_object", []), "_changeState_", [smalltalk.HasMonsterSelected || HasMonsterSelected]);}() : smalltalk.send($receiver, "_ifFalse_ifTrue_", [function () {return smalltalk.send(self, "_error_", ["shouldnt be able to select because friendly monster"]);}, function () {smalltalk.send(smalltalk.send(self, "_object", []), "_addSelectorColored_", ["red"]);return smalltalk.send(smalltalk.send(self, "_object", []), "_changeState_", [smalltalk.HasMonsterSelected || HasMonsterSelected]);}]);
    return self;
}
}),
smalltalk.HasMonster);

smalltalk.addMethod(
"_canAttack_",
smalltalk.method({
selector: "canAttack:",
fn: function (aSidePlayed) {
    var self = this;
    return self;
}
}),
smalltalk.HasMonster);

smalltalk.addMethod(
"_canBeSelected_",
smalltalk.method({
selector: "canBeSelected:",
fn: function (aSide) {
    var self = this;
    return true;
    return self;
}
}),
smalltalk.HasMonster);

smalltalk.addMethod(
"_canMoveTo",
smalltalk.method({
selector: "canMoveTo",
fn: function () {
    var self = this;
    return false;
    return self;
}
}),
smalltalk.HasMonster);

smalltalk.addMethod(
"_mouseClick",
smalltalk.method({
selector: "mouseClick",
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_object", []), "_monster", []), "_state", []), "_selectMonsterOn_", [smalltalk.send(self, "_object", [])]);
    return self;
}
}),
smalltalk.HasMonster);

smalltalk.addMethod(
"_removeSelector",
smalltalk.method({
selector: "removeSelector",
fn: function () {
    var self = this;
    return self;
}
}),
smalltalk.HasMonster);



smalltalk.addClass('HasMonsterSelected', smalltalk.CellState, [], 'Easnoth-Fight-State');
smalltalk.addMethod(
"_addSelector",
smalltalk.method({
selector: "addSelector",
fn: function () {
    var self = this;
    smalltalk.send(self, "_error_", ["shouldnt be possible to add selector on this cell"]);
    return self;
}
}),
smalltalk.HasMonsterSelected);

smalltalk.addMethod(
"_canAttack_",
smalltalk.method({
selector: "canAttack:",
fn: function (aSidePlayed) {
    var self = this;
    return false;
    return self;
}
}),
smalltalk.HasMonsterSelected);

smalltalk.addMethod(
"_canBeSelected_",
smalltalk.method({
selector: "canBeSelected:",
fn: function (aSide) {
    var self = this;
    return false;
    return self;
}
}),
smalltalk.HasMonsterSelected);

smalltalk.addMethod(
"_canMoveTo",
smalltalk.method({
selector: "canMoveTo",
fn: function () {
    var self = this;
    return false;
    return self;
}
}),
smalltalk.HasMonsterSelected);

smalltalk.addMethod(
"_mouseClick",
smalltalk.method({
selector: "mouseClick",
fn: function () {
    var self = this;
    return self;
}
}),
smalltalk.HasMonsterSelected);

smalltalk.addMethod(
"_removeSelector",
smalltalk.method({
selector: "removeSelector",
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(smalltalk.send(self, "_object", []), "_overTiles", []), "_do_", [function (overTile) {return ($receiver = smalltalk.send(overTile, "_selector", [])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(smalltalk.send(smalltalk.send(self, "_object", []), "_drawedObjects", []), "_remove_", [overTile]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return smalltalk.send(smalltalk.send(smalltalk.send(self, "_object", []), "_drawedObjects", []), "_remove_", [overTile]);}]);}]);
    smalltalk.send(smalltalk.send(self, "_object", []), "_changeState_", [smalltalk.HasMonster || HasMonster]);
    return self;
}
}),
smalltalk.HasMonsterSelected);



smalltalk.addClass('MonsterState', smalltalk.State, [], 'Easnoth-Fight-State');
smalltalk.addMethod(
"_moveTo_",
smalltalk.method({
selector: "moveTo:",
fn: function (aCell) {
    var self = this;
    smalltalk.send(self, "_subclassResponsibility", []);
    return self;
}
}),
smalltalk.MonsterState);

smalltalk.addMethod(
"_selectMonsterOn_",
smalltalk.method({
selector: "selectMonsterOn:",
fn: function (aCell) {
    var self = this;
    smalltalk.send(self, "_subclassResponsibility", []);
    return self;
}
}),
smalltalk.MonsterState);



smalltalk.addClass('Active', smalltalk.MonsterState, [], 'Easnoth-Fight-State');
smalltalk.addMethod(
"_moveTo_",
smalltalk.method({
selector: "moveTo:",
fn: function (aCell) {
    var self = this;
    var actionCell = nil;
    var monster = nil;
    actionCell = smalltalk.send(smalltalk.send(smalltalk.Turn || Turn, "_getSingleton", []), "_actionCell", []);
    monster = smalltalk.send(actionCell, "_monster", []);
    smalltalk.send(actionCell, "_removeMonster", []);
    smalltalk.send(aCell, "_monster_", [monster]);
    return self;
}
}),
smalltalk.Active);

smalltalk.addMethod(
"_selectMonsterOn_",
smalltalk.method({
selector: "selectMonsterOn:",
fn: function (aCell) {
    var self = this;
    var map = nil;
    var turn = nil;
    map = smalltalk.send(smalltalk.Map || Map, "_getSingleton", []);
    turn = smalltalk.send(smalltalk.Turn || Turn, "_getSingleton", []);
    smalltalk.send(turn, "_actionCell_", [aCell]);
    smalltalk.send(map, "_addSelection_", [smalltalk.send(aCell, "_selectableNeighboursInMap_side_", [map, smalltalk.send(turn, "_side", [])])]);
    return self;
}
}),
smalltalk.Active);



smalltalk.addClass('HasAttacked', smalltalk.MonsterState, [], 'Easnoth-Fight-State');
smalltalk.addMethod(
"_moveTo_",
smalltalk.method({
selector: "moveTo:",
fn: function (aCell) {
    var self = this;
    var actionCell = nil;
    var monster = nil;
    actionCell = smalltalk.send(smalltalk.send(smalltalk.Turn || Turn, "_getSingleton", []), "_actionCell", []);
    monster = smalltalk.send(actionCell, "_monster", []);
    smalltalk.send(actionCell, "_removeMonster", []);
    smalltalk.send(aCell, "_monster_", [monster]);
    return self;
}
}),
smalltalk.HasAttacked);

smalltalk.addMethod(
"_selectMonsterOn_",
smalltalk.method({
selector: "selectMonsterOn:",
fn: function (aCell) {
    var self = this;
    var map = nil;
    var turn = nil;
    map = smalltalk.send(smalltalk.Map || Map, "_getSingleton", []);
    turn = smalltalk.send(smalltalk.Turn || Turn, "_getSingleton", []);
    smalltalk.send(turn, "_actionCell_", [aCell]);
    smalltalk.send(map, "_addSelection_", [smalltalk.send(aCell, "_attackableNeighboursInMap_side_", [map, smalltalk.send(turn, "_side", [])])]);
    return self;
}
}),
smalltalk.HasAttacked);



smalltalk.addClass('HasMoved', smalltalk.MonsterState, [], 'Easnoth-Fight-State');
smalltalk.addMethod(
"_moveTo_",
smalltalk.method({
selector: "moveTo:",
fn: function (aCell) {
    var self = this;
    smalltalk.send(self, "_error_", ["has already moved"]);
    return self;
}
}),
smalltalk.HasMoved);

smalltalk.addMethod(
"_selectMonsterOn_",
smalltalk.method({
selector: "selectMonsterOn:",
fn: function (aCell) {
    var self = this;
    var map = nil;
    var turn = nil;
    map = smalltalk.send(smalltalk.Map || Map, "_getSingleton", []);
    turn = smalltalk.send(smalltalk.Turn || Turn, "_getSingleton", []);
    smalltalk.send(turn, "_actionCell_", [aCell]);
    smalltalk.send(map, "_addSelection_", [smalltalk.send(aCell, "_movableNeighboursInMap_side_", [map, smalltalk.send(turn, "_side", [])])]);
    return self;
}
}),
smalltalk.HasMoved);



smalltalk.addClass('Inactive', smalltalk.MonsterState, [], 'Easnoth-Fight-State');
smalltalk.addMethod(
"_moveTo_",
smalltalk.method({
selector: "moveTo:",
fn: function (aCell) {
    var self = this;
    smalltalk.send(self, "_error_", ["inactive"]);
    return self;
}
}),
smalltalk.Inactive);

smalltalk.addMethod(
"_selectMonsterOn_",
smalltalk.method({
selector: "selectMonsterOn:",
fn: function (aCell) {
    var self = this;
    return self;
}
}),
smalltalk.Inactive);



smalltalk.addClass('Turn', smalltalk.Object, ['actionCell', 'side'], 'Easnoth-Fight-State');
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
smalltalk.Turn);

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
smalltalk.Turn);

smalltalk.addMethod(
"_activateTwoMonsters",
smalltalk.method({
selector: "activateTwoMonsters",
fn: function () {
    var self = this;
    var armyPlaying = nil;
    var randomMonster = nil;
    armyPlaying = smalltalk.send(smalltalk.send(smalltalk.Map || Map, "_getSingleton", []), "_monstersFromSide_", [smalltalk.send(self, "_side", [])]);
    randomMonster = smalltalk.send(armyPlaying, "_atRandom", []);
    smalltalk.send(randomMonster, "_state_", [smalltalk.send(smalltalk.Active || Active, "_newFor_", [randomMonster])]);
    return self;
}
}),
smalltalk.Turn);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function () {
    var self = this;
    smalltalk.send(self, "_side_", [($receiver = 2 * smalltalk.send(1, "_atRandom", [])).klass === smalltalk.Number ? $receiver - 1 : smalltalk.send($receiver, "__minus", [1])]);
    smalltalk.send(self, "_activateTwoMonsters", []);
    return self;
}
}),
smalltalk.Turn);

smalltalk.addMethod(
"_nextTurn",
smalltalk.method({
selector: "nextTurn",
fn: function () {
    var self = this;
    smalltalk.send(self, "_side_", [smalltalk.send(smalltalk.send(self, "_side", []), "_negated", [])]);
    smalltalk.send(self, "_activateTwoMonsters", []);
    return self;
}
}),
smalltalk.Turn);

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
smalltalk.Turn);

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
smalltalk.Turn);


smalltalk.Turn.klass.iVarNames = ['turn'];
smalltalk.addMethod(
"_getSingleton",
smalltalk.method({
selector: "getSingleton",
fn: function () {
    var self = this;
    return ($receiver = self['@turn']) == nil || $receiver == undefined ? function () {return self['@turn'] = smalltalk.send(self, "_new", []);}() : $receiver;
    return self;
}
}),
smalltalk.Turn.klass);


