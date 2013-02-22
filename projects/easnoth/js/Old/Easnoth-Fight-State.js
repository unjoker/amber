smalltalk.addPackage('Easnoth-Fight-State', {});
smalltalk.addClass('State', smalltalk.Object, ['object'], 'Easnoth-Fight-State');
smalltalk.addMethod(
"_newState_for_",
smalltalk.method({
selector: "newState:for:",
category: 'initialize-release',
fn: function (aState, anObject) {
    var self = this;
    var newState = nil;
    newState = smalltalk.send(aState, "_newFor_", [anObject]);
    smalltalk.send(smalltalk.send(anObject, "_state", []), "_tearDown", []);
    smalltalk.send(anObject, "_state_", [newState]);
    smalltalk.send(newState, "_setUp", []);
    return self;
},
args: ["aState", "anObject"],
source: "newState: aState for: anObject\x0a\x09|newState|\x0a\x0a\x09newState := aState newFor: anObject.\x0a\x09anObject state tearDown.\x0a\x09anObject state: newState.\x0a\x09newState setUp.",
messageSends: ["newFor:", "tearDown", "state", "state:", "setUp"],
referencedClasses: []
}),
smalltalk.State);

smalltalk.addMethod(
"_object",
smalltalk.method({
selector: "object",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@object'];
    return self;
},
args: [],
source: "object\x0a\x09^object",
messageSends: [],
referencedClasses: []
}),
smalltalk.State);

smalltalk.addMethod(
"_object_",
smalltalk.method({
selector: "object:",
category: 'accessing',
fn: function (anObject) {
    var self = this;
    self['@object'] = anObject;
    return self;
},
args: ["anObject"],
source: "object: anObject\x0a\x09object := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.State);

smalltalk.addMethod(
"_setUp",
smalltalk.method({
selector: "setUp",
category: 'initialize-release',
fn: function () {
    var self = this;
    return self;
},
args: [],
source: "setUp",
messageSends: [],
referencedClasses: []
}),
smalltalk.State);

smalltalk.addMethod(
"_tearDown",
smalltalk.method({
selector: "tearDown",
category: 'initialize-release',
fn: function () {
    var self = this;
    return self;
},
args: [],
source: "tearDown",
messageSends: [],
referencedClasses: []
}),
smalltalk.State);


smalltalk.addMethod(
"_newFor_",
smalltalk.method({
selector: "newFor:",
category: 'instance creation',
fn: function (anObject) {
    var self = this;
    return function ($rec) {smalltalk.send($rec, "_object_", [anObject]);return smalltalk.send($rec, "_yourself", []);}(smalltalk.send(self, "_new", []));
    return self;
},
args: ["anObject"],
source: "newFor: anObject\x0a\x09^self new\x0a\x09\x09object: anObject;\x0a\x09\x09yourself.",
messageSends: ["object:", "yourself", "new"],
referencedClasses: []
}),
smalltalk.State.klass);


smalltalk.addClass('CellState', smalltalk.State, [], 'Easnoth-Fight-State');
smalltalk.addMethod(
"_addSelector",
smalltalk.method({
selector: "addSelector",
category: 'eventHandling',
fn: function () {
    var self = this;
    smalltalk.send(self, "_subclassResponsibility", []);
    return self;
},
args: [],
source: "addSelector\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.CellState);

smalltalk.addMethod(
"_canAttack_",
smalltalk.method({
selector: "canAttack:",
category: 'eventHandling',
fn: function (aSidePlayed) {
    var self = this;
    smalltalk.send(self, "_subclassResponsibility", []);
    return self;
},
args: ["aSidePlayed"],
source: "canAttack: aSidePlayed\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.CellState);

smalltalk.addMethod(
"_canBeSelected_",
smalltalk.method({
selector: "canBeSelected:",
category: 'eventHandling',
fn: function (aSide) {
    var self = this;
    smalltalk.send(self, "_subclassResponsibility", []);
    return self;
},
args: ["aSide"],
source: "canBeSelected: aSide\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.CellState);

smalltalk.addMethod(
"_canMoveTo",
smalltalk.method({
selector: "canMoveTo",
category: 'eventHandling',
fn: function () {
    var self = this;
    smalltalk.send(self, "_subclassResponsibility", []);
    return self;
},
args: [],
source: "canMoveTo\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.CellState);

smalltalk.addMethod(
"_mouseClick",
smalltalk.method({
selector: "mouseClick",
category: 'eventHandling',
fn: function () {
    var self = this;
    smalltalk.send(self, "_subclassResponsibility", []);
    return self;
},
args: [],
source: "mouseClick\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.CellState);

smalltalk.addMethod(
"_removeSelector",
smalltalk.method({
selector: "removeSelector",
category: 'eventHandling',
fn: function () {
    var self = this;
    smalltalk.send(self, "_subclassResponsibility", []);
    return self;
},
args: [],
source: "removeSelector\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.CellState);


smalltalk.addMethod(
"_initializeStateFor_",
smalltalk.method({
selector: "initializeStateFor:",
category: 'instance creation',
fn: function (aCell) {
    var self = this;
    ($receiver = smalltalk.send(aCell, "_free", [])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(aCell, "_state_", [smalltalk.send(smalltalk.Free || Free, "_newFor_", [aCell])]);}() : function () {return smalltalk.send(aCell, "_state_", [smalltalk.send(smalltalk.HasMonster || HasMonster, "_newFor_", [aCell])]);}() : smalltalk.send($receiver, "_ifTrue_ifFalse_", [function () {return smalltalk.send(aCell, "_state_", [smalltalk.send(smalltalk.Free || Free, "_newFor_", [aCell])]);}, function () {return smalltalk.send(aCell, "_state_", [smalltalk.send(smalltalk.HasMonster || HasMonster, "_newFor_", [aCell])]);}]);
    return self;
},
args: ["aCell"],
source: "initializeStateFor: aCell\x0a\x09aCell free ifTrue: [\x0a\x09\x09aCell state: (Free newFor: aCell)\x0a\x09] ifFalse: [\x0a\x09\x09aCell state: (HasMonster newFor: aCell)\x0a\x09]",
messageSends: ["ifTrue:ifFalse:", "free", "state:", "newFor:"],
referencedClasses: ["Free", "HasMonster"]
}),
smalltalk.CellState.klass);


smalltalk.addClass('Free', smalltalk.CellState, [], 'Easnoth-Fight-State');
smalltalk.Free.comment="\x22no monster on it\x22"
smalltalk.addMethod(
"_addSelector",
smalltalk.method({
selector: "addSelector",
category: 'eventHandling',
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_object", []), "_addSelectorColored_", ["green"]);
    smalltalk.send(smalltalk.send(self, "_object", []), "_changeState_", [smalltalk.FreeSelected || FreeSelected]);
    return self;
},
args: [],
source: "addSelector\x0a\x09self object addSelectorColored: 'green'.\x0a\x09self object changeState: FreeSelected.",
messageSends: ["addSelectorColored:", "object", "changeState:"],
referencedClasses: ["FreeSelected"]
}),
smalltalk.Free);

smalltalk.addMethod(
"_canAttack_",
smalltalk.method({
selector: "canAttack:",
category: 'eventHandling',
fn: function (aSidePlayed) {
    var self = this;
    return false;
    return self;
},
args: ["aSidePlayed"],
source: "canAttack: aSidePlayed\x0a\x09^false",
messageSends: [],
referencedClasses: []
}),
smalltalk.Free);

smalltalk.addMethod(
"_canBeSelected_",
smalltalk.method({
selector: "canBeSelected:",
category: 'eventHandling',
fn: function (aSide) {
    var self = this;
    return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_object", []), "_tile", []), "_isWall", []), "_not", []);
    return self;
},
args: ["aSide"],
source: "canBeSelected: aSide\x0a\x09^self object tile isWall not\x0a\x09",
messageSends: ["not", "isWall", "tile", "object"],
referencedClasses: []
}),
smalltalk.Free);

smalltalk.addMethod(
"_canMoveTo",
smalltalk.method({
selector: "canMoveTo",
category: 'eventHandling',
fn: function () {
    var self = this;
    return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_object", []), "_tile", []), "_isWall", []), "_not", []);
    return self;
},
args: [],
source: "canMoveTo\x0a\x09^self object tile isWall not",
messageSends: ["not", "isWall", "tile", "object"],
referencedClasses: []
}),
smalltalk.Free);

smalltalk.addMethod(
"_mouseClick",
smalltalk.method({
selector: "mouseClick",
category: 'eventHandling',
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(smalltalk.Map || Map, "_getSingleton", []), "_selectActiveMonster", []);
    return self;
},
args: [],
source: "mouseClick\x0a\x09Map getSingleton selectActiveMonster",
messageSends: ["selectActiveMonster", "getSingleton"],
referencedClasses: ["Map"]
}),
smalltalk.Free);

smalltalk.addMethod(
"_removeSelector",
smalltalk.method({
selector: "removeSelector",
category: 'eventHandling',
fn: function () {
    var self = this;
    return self;
},
args: [],
source: "removeSelector",
messageSends: [],
referencedClasses: []
}),
smalltalk.Free);



smalltalk.addClass('FreeSelected', smalltalk.CellState, [], 'Easnoth-Fight-State');
smalltalk.FreeSelected.comment="\x22free not wall selected\x22"
smalltalk.addMethod(
"_addSelector",
smalltalk.method({
selector: "addSelector",
category: 'eventHandling',
fn: function () {
    var self = this;
    smalltalk.send(self, "_error_", ["shouldnt be possible to add selector on this cell"]);
    return self;
},
args: [],
source: "addSelector\x0a\x09self error: 'shouldnt be possible to add selector on this cell'",
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.FreeSelected);

smalltalk.addMethod(
"_canAttack_",
smalltalk.method({
selector: "canAttack:",
category: 'eventHandling',
fn: function (aSidePlayed) {
    var self = this;
    return false;
    return self;
},
args: ["aSidePlayed"],
source: "canAttack: aSidePlayed\x0a\x09^false",
messageSends: [],
referencedClasses: []
}),
smalltalk.FreeSelected);

smalltalk.addMethod(
"_canBeSelected_",
smalltalk.method({
selector: "canBeSelected:",
category: 'eventHandling',
fn: function (aSide) {
    var self = this;
    return false;
    return self;
},
args: ["aSide"],
source: "canBeSelected: aSide\x0a\x09^false",
messageSends: [],
referencedClasses: []
}),
smalltalk.FreeSelected);

smalltalk.addMethod(
"_canMoveTo",
smalltalk.method({
selector: "canMoveTo",
category: 'eventHandling',
fn: function () {
    var self = this;
    return false;
    return self;
},
args: [],
source: "canMoveTo\x0a\x09^false",
messageSends: [],
referencedClasses: []
}),
smalltalk.FreeSelected);

smalltalk.addMethod(
"_mouseClick",
smalltalk.method({
selector: "mouseClick",
category: 'eventHandling',
fn: function () {
    var self = this;
    var actionCell = nil;
    actionCell = smalltalk.send(smalltalk.send(smalltalk.Turn || Turn, "_getSingleton", []), "_actionCell", []);
    smalltalk.send(smalltalk.send(smalltalk.send(actionCell, "_monster", []), "_state", []), "_moveTo_", [smalltalk.send(self, "_object", [])]);
    return self;
},
args: [],
source: "mouseClick\x0a\x09|actionCell|\x0a\x09actionCell := Turn getSingleton actionCell.\x0a\x09actionCell monster state moveTo: self object.\x0a\x09\x0a\x09\x0a\x09",
messageSends: ["actionCell", "getSingleton", "moveTo:", "state", "monster", "object"],
referencedClasses: ["Turn"]
}),
smalltalk.FreeSelected);

smalltalk.addMethod(
"_removeSelector",
smalltalk.method({
selector: "removeSelector",
category: 'eventHandling',
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(smalltalk.send(self, "_object", []), "_overTiles", []), "_do_", [function (overTile) {return ($receiver = smalltalk.send(overTile, "_selector", [])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(smalltalk.send(smalltalk.send(self, "_object", []), "_drawedObjects", []), "_remove_", [overTile]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return smalltalk.send(smalltalk.send(smalltalk.send(self, "_object", []), "_drawedObjects", []), "_remove_", [overTile]);}]);}]);
    smalltalk.send(smalltalk.send(self, "_object", []), "_changeState_", [smalltalk.Free || Free]);
    return self;
},
args: [],
source: "removeSelector\x0a\x09self object overTiles do: [:overTile | \x0a\x09\x09overTile selector ifTrue: [self object drawedObjects remove: overTile]\x0a\x09].\x0a\x09self object changeState: Free",
messageSends: ["do:", "overTiles", "object", "ifTrue:", "selector", "remove:", "drawedObjects", "changeState:"],
referencedClasses: ["Free"]
}),
smalltalk.FreeSelected);



smalltalk.addClass('HasMonster', smalltalk.CellState, [], 'Easnoth-Fight-State');
smalltalk.HasMonster.comment="\x22monster on it\x22"
smalltalk.addMethod(
"_addSelector",
smalltalk.method({
selector: "addSelector",
category: 'eventHandling',
fn: function () {
    var self = this;
    var sidePlaying = nil;
    sidePlaying = smalltalk.send(smalltalk.send(smalltalk.Turn || Turn, "_getSingleton", []), "_side", []);
    ($receiver = smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_object", []), "_monster", []), "_side", []), "__eq", [sidePlaying])).klass === smalltalk.Boolean ? !$receiver ? function () {return smalltalk.send(self, "_error_", ["shouldnt be able to select because friendly monster"]);}() : function () {smalltalk.send(smalltalk.send(self, "_object", []), "_addSelectorColored_", ["red"]);return smalltalk.send(smalltalk.send(self, "_object", []), "_changeState_", [smalltalk.HasMonsterSelected || HasMonsterSelected]);}() : smalltalk.send($receiver, "_ifFalse_ifTrue_", [function () {return smalltalk.send(self, "_error_", ["shouldnt be able to select because friendly monster"]);}, function () {smalltalk.send(smalltalk.send(self, "_object", []), "_addSelectorColored_", ["red"]);return smalltalk.send(smalltalk.send(self, "_object", []), "_changeState_", [smalltalk.HasMonsterSelected || HasMonsterSelected]);}]);
    return self;
},
args: [],
source: "addSelector\x0a\x09|sidePlaying|\x0a\x09sidePlaying := Turn getSingleton side.\x0a\x09(self object monster side = sidePlaying) ifFalse: [\x0a\x09\x09self error: 'shouldnt be able to select because friendly monster'\x0a\x09] ifTrue: [\x0a\x09\x09self object addSelectorColored: 'red'.\x0a\x09\x09self object changeState: HasMonsterSelected.\x0a\x09].",
messageSends: ["side", "getSingleton", "ifFalse:ifTrue:", "=", "monster", "object", "error:", "addSelectorColored:", "changeState:"],
referencedClasses: ["Turn", "HasMonsterSelected"]
}),
smalltalk.HasMonster);

smalltalk.addMethod(
"_canAttack_",
smalltalk.method({
selector: "canAttack:",
category: 'eventHandling',
fn: function (aSidePlayed) {
    var self = this;
    return self;
},
args: ["aSidePlayed"],
source: "canAttack: aSidePlayed\x0a\x09\x22if aSidePlayed != monster side ok else not\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.HasMonster);

smalltalk.addMethod(
"_canBeSelected_",
smalltalk.method({
selector: "canBeSelected:",
category: 'eventHandling',
fn: function (aSide) {
    var self = this;
    return true;
    return self;
},
args: ["aSide"],
source: "canBeSelected: aSide\x0a\x09\x22actionCell side != aSide\x22\x0a\x09^true",
messageSends: [],
referencedClasses: []
}),
smalltalk.HasMonster);

smalltalk.addMethod(
"_canMoveTo",
smalltalk.method({
selector: "canMoveTo",
category: 'eventHandling',
fn: function () {
    var self = this;
    return false;
    return self;
},
args: [],
source: "canMoveTo\x0a\x09^false",
messageSends: [],
referencedClasses: []
}),
smalltalk.HasMonster);

smalltalk.addMethod(
"_mouseClick",
smalltalk.method({
selector: "mouseClick",
category: 'eventHandling',
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_object", []), "_monster", []), "_state", []), "_selectMonsterOn_", [smalltalk.send(self, "_object", [])]);
    return self;
},
args: [],
source: "mouseClick\x0a\x09self object monster state selectMonsterOn: self object.",
messageSends: ["selectMonsterOn:", "state", "monster", "object"],
referencedClasses: []
}),
smalltalk.HasMonster);

smalltalk.addMethod(
"_removeSelector",
smalltalk.method({
selector: "removeSelector",
category: 'eventHandling',
fn: function () {
    var self = this;
    return self;
},
args: [],
source: "removeSelector",
messageSends: [],
referencedClasses: []
}),
smalltalk.HasMonster);



smalltalk.addClass('HasMonsterSelected', smalltalk.CellState, [], 'Easnoth-Fight-State');
smalltalk.HasMonsterSelected.comment="\x22ennemy selected\x22"
smalltalk.addMethod(
"_addSelector",
smalltalk.method({
selector: "addSelector",
category: 'eventHandling',
fn: function () {
    var self = this;
    smalltalk.send(self, "_error_", ["shouldnt be possible to add selector on this cell"]);
    return self;
},
args: [],
source: "addSelector\x0a\x09self error: 'shouldnt be possible to add selector on this cell'",
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.HasMonsterSelected);

smalltalk.addMethod(
"_canAttack_",
smalltalk.method({
selector: "canAttack:",
category: 'eventHandling',
fn: function (aSidePlayed) {
    var self = this;
    return false;
    return self;
},
args: ["aSidePlayed"],
source: "canAttack: aSidePlayed\x0a\x09^false",
messageSends: [],
referencedClasses: []
}),
smalltalk.HasMonsterSelected);

smalltalk.addMethod(
"_canBeSelected_",
smalltalk.method({
selector: "canBeSelected:",
category: 'eventHandling',
fn: function (aSide) {
    var self = this;
    return false;
    return self;
},
args: ["aSide"],
source: "canBeSelected: aSide\x0a\x09^false",
messageSends: [],
referencedClasses: []
}),
smalltalk.HasMonsterSelected);

smalltalk.addMethod(
"_canMoveTo",
smalltalk.method({
selector: "canMoveTo",
category: 'eventHandling',
fn: function () {
    var self = this;
    return false;
    return self;
},
args: [],
source: "canMoveTo\x0a\x09^false",
messageSends: [],
referencedClasses: []
}),
smalltalk.HasMonsterSelected);

smalltalk.addMethod(
"_mouseClick",
smalltalk.method({
selector: "mouseClick",
category: 'eventHandling',
fn: function () {
    var self = this;
    return self;
},
args: [],
source: "mouseClick\x0a\x09\x22attack him..\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.HasMonsterSelected);

smalltalk.addMethod(
"_removeSelector",
smalltalk.method({
selector: "removeSelector",
category: 'eventHandling',
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(smalltalk.send(self, "_object", []), "_overTiles", []), "_do_", [function (overTile) {return ($receiver = smalltalk.send(overTile, "_selector", [])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(smalltalk.send(smalltalk.send(self, "_object", []), "_drawedObjects", []), "_remove_", [overTile]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return smalltalk.send(smalltalk.send(smalltalk.send(self, "_object", []), "_drawedObjects", []), "_remove_", [overTile]);}]);}]);
    smalltalk.send(smalltalk.send(self, "_object", []), "_changeState_", [smalltalk.HasMonster || HasMonster]);
    return self;
},
args: [],
source: "removeSelector\x0a\x09self object overTiles do: [:overTile | \x0a\x09\x09overTile selector ifTrue: [self object drawedObjects remove: overTile]\x0a\x09].\x0a\x09self object changeState: HasMonster",
messageSends: ["do:", "overTiles", "object", "ifTrue:", "selector", "remove:", "drawedObjects", "changeState:"],
referencedClasses: ["HasMonster"]
}),
smalltalk.HasMonsterSelected);



smalltalk.addClass('MonsterState', smalltalk.State, [], 'Easnoth-Fight-State');
smalltalk.addMethod(
"_moveTo_",
smalltalk.method({
selector: "moveTo:",
category: 'eventHandling',
fn: function (aCell) {
    var self = this;
    smalltalk.send(self, "_subclassResponsibility", []);
    return self;
},
args: ["aCell"],
source: "moveTo: aCell\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.MonsterState);

smalltalk.addMethod(
"_selectMonsterOn_",
smalltalk.method({
selector: "selectMonsterOn:",
category: 'eventHandling',
fn: function (aCell) {
    var self = this;
    smalltalk.send(self, "_subclassResponsibility", []);
    return self;
},
args: ["aCell"],
source: "selectMonsterOn: aCell\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.MonsterState);



smalltalk.addClass('Active', smalltalk.MonsterState, [], 'Easnoth-Fight-State');
smalltalk.Active.comment="\x22Monster can move and attack\x22"
smalltalk.addMethod(
"_moveTo_",
smalltalk.method({
selector: "moveTo:",
category: 'eventHandling',
fn: function (aCell) {
    var self = this;
    var actionCell = nil;
    var monster = nil;
    actionCell = smalltalk.send(smalltalk.send(smalltalk.Turn || Turn, "_getSingleton", []), "_actionCell", []);
    monster = smalltalk.send(actionCell, "_monster", []);
    smalltalk.send(actionCell, "_removeMonster", []);
    smalltalk.send(aCell, "_monster_", [monster]);
    return self;
},
args: ["aCell"],
source: "moveTo: aCell\x0a\x09|actionCell monster|\x0a\x0a\x09\x22add animation here\x22\x0a\x09actionCell := Turn getSingleton actionCell.\x0a\x09monster := actionCell monster.\x0a\x09actionCell removeMonster.\x0a\x09aCell monster: monster",
messageSends: ["actionCell", "getSingleton", "monster", "removeMonster", "monster:"],
referencedClasses: ["Turn"]
}),
smalltalk.Active);

smalltalk.addMethod(
"_selectMonsterOn_",
smalltalk.method({
selector: "selectMonsterOn:",
category: 'eventHandling',
fn: function (aCell) {
    var self = this;
    var map = nil;
    var turn = nil;
    map = smalltalk.send(smalltalk.Map || Map, "_getSingleton", []);
    turn = smalltalk.send(smalltalk.Turn || Turn, "_getSingleton", []);
    smalltalk.send(turn, "_actionCell_", [aCell]);
    smalltalk.send(map, "_addSelection_", [smalltalk.send(aCell, "_selectableNeighboursInMap_side_", [map, smalltalk.send(turn, "_side", [])])]);
    return self;
},
args: ["aCell"],
source: "selectMonsterOn: aCell\x0a\x09|map turn|\x0a\x09map := Map getSingleton.\x0a\x09turn := Turn getSingleton.\x0a\x09turn actionCell: aCell.\x0a\x09map addSelection: (aCell selectableNeighboursInMap: map side: turn side)\x0a\x09",
messageSends: ["getSingleton", "actionCell:", "addSelection:", "selectableNeighboursInMap:side:", "side"],
referencedClasses: ["Map", "Turn"]
}),
smalltalk.Active);



smalltalk.addClass('HasAttacked', smalltalk.MonsterState, [], 'Easnoth-Fight-State');
smalltalk.HasAttacked.comment="\x22Monster can only move\x22"
smalltalk.addMethod(
"_moveTo_",
smalltalk.method({
selector: "moveTo:",
category: 'eventHandling',
fn: function (aCell) {
    var self = this;
    var actionCell = nil;
    var monster = nil;
    actionCell = smalltalk.send(smalltalk.send(smalltalk.Turn || Turn, "_getSingleton", []), "_actionCell", []);
    monster = smalltalk.send(actionCell, "_monster", []);
    smalltalk.send(actionCell, "_removeMonster", []);
    smalltalk.send(aCell, "_monster_", [monster]);
    return self;
},
args: ["aCell"],
source: "moveTo: aCell\x0a\x09|actionCell monster|\x0a\x0a\x09\x22add animation here\x22\x0a\x09actionCell := Turn getSingleton actionCell.\x0a\x09monster := actionCell monster.\x0a\x09actionCell removeMonster.\x0a\x09aCell monster: monster",
messageSends: ["actionCell", "getSingleton", "monster", "removeMonster", "monster:"],
referencedClasses: ["Turn"]
}),
smalltalk.HasAttacked);

smalltalk.addMethod(
"_selectMonsterOn_",
smalltalk.method({
selector: "selectMonsterOn:",
category: 'eventHandling',
fn: function (aCell) {
    var self = this;
    var map = nil;
    var turn = nil;
    map = smalltalk.send(smalltalk.Map || Map, "_getSingleton", []);
    turn = smalltalk.send(smalltalk.Turn || Turn, "_getSingleton", []);
    smalltalk.send(turn, "_actionCell_", [aCell]);
    smalltalk.send(map, "_addSelection_", [smalltalk.send(aCell, "_attackableNeighboursInMap_side_", [map, smalltalk.send(turn, "_side", [])])]);
    return self;
},
args: ["aCell"],
source: "selectMonsterOn: aCell\x0a\x09|map turn|\x0a\x09map := Map getSingleton.\x0a\x09turn := Turn getSingleton.\x0a\x09turn actionCell: aCell.\x0a\x09map addSelection: (aCell attackableNeighboursInMap: map side: turn side)",
messageSends: ["getSingleton", "actionCell:", "addSelection:", "attackableNeighboursInMap:side:", "side"],
referencedClasses: ["Map", "Turn"]
}),
smalltalk.HasAttacked);



smalltalk.addClass('HasMoved', smalltalk.MonsterState, [], 'Easnoth-Fight-State');
smalltalk.HasMoved.comment="\x22Monster can only attack\x22"
smalltalk.addMethod(
"_moveTo_",
smalltalk.method({
selector: "moveTo:",
category: 'not yet classified',
fn: function (aCell) {
    var self = this;
    smalltalk.send(self, "_error_", ["has already moved"]);
    return self;
},
args: ["aCell"],
source: "moveTo: aCell\x0a\x09self error:'has already moved'",
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.HasMoved);

smalltalk.addMethod(
"_selectMonsterOn_",
smalltalk.method({
selector: "selectMonsterOn:",
category: 'not yet classified',
fn: function (aCell) {
    var self = this;
    var map = nil;
    var turn = nil;
    map = smalltalk.send(smalltalk.Map || Map, "_getSingleton", []);
    turn = smalltalk.send(smalltalk.Turn || Turn, "_getSingleton", []);
    smalltalk.send(turn, "_actionCell_", [aCell]);
    smalltalk.send(map, "_addSelection_", [smalltalk.send(aCell, "_movableNeighboursInMap_side_", [map, smalltalk.send(turn, "_side", [])])]);
    return self;
},
args: ["aCell"],
source: "selectMonsterOn: aCell\x0a\x09|map turn|\x0a\x09map := Map getSingleton.\x0a\x09turn := Turn getSingleton.\x0a\x09turn actionCell: aCell.\x0a\x09map addSelection: (aCell movableNeighboursInMap: map side: turn side)",
messageSends: ["getSingleton", "actionCell:", "addSelection:", "movableNeighboursInMap:side:", "side"],
referencedClasses: ["Map", "Turn"]
}),
smalltalk.HasMoved);



smalltalk.addClass('Inactive', smalltalk.MonsterState, [], 'Easnoth-Fight-State');
smalltalk.Inactive.comment="\x22monster can't move or attack\x22"
smalltalk.addMethod(
"_moveTo_",
smalltalk.method({
selector: "moveTo:",
category: 'eventHandling',
fn: function (aCell) {
    var self = this;
    smalltalk.send(self, "_error_", ["inactive"]);
    return self;
},
args: ["aCell"],
source: "moveTo: aCell\x0a\x09self error:'inactive'",
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.Inactive);

smalltalk.addMethod(
"_selectMonsterOn_",
smalltalk.method({
selector: "selectMonsterOn:",
category: 'eventHandling',
fn: function (aCell) {
    var self = this;
    return self;
},
args: ["aCell"],
source: "selectMonsterOn: aCell\x0a\x09\x22nothing for now\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.Inactive);



smalltalk.addClass('Turn', smalltalk.Object, ['actionCell', 'side'], 'Easnoth-Fight-State');
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
smalltalk.Turn);

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
smalltalk.Turn);

smalltalk.addMethod(
"_activateTwoMonsters",
smalltalk.method({
selector: "activateTwoMonsters",
category: 'gaming',
fn: function () {
    var self = this;
    var armyPlaying = nil;
    var randomMonster = nil;
    armyPlaying = smalltalk.send(smalltalk.send(smalltalk.Map || Map, "_getSingleton", []), "_monstersFromSide_", [smalltalk.send(self, "_side", [])]);
    randomMonster = smalltalk.send(armyPlaying, "_atRandom", []);
    smalltalk.send(randomMonster, "_state_", [smalltalk.send(smalltalk.Active || Active, "_newFor_", [randomMonster])]);
    return self;
},
args: [],
source: "activateTwoMonsters\x0a\x09|armyPlaying randomMonster|\x0a\x0a\x09\x22activate 1 monster\x22\x0a\x09armyPlaying := Map getSingleton monstersFromSide: self side.\x0a\x09randomMonster := armyPlaying atRandom.\x0a\x09randomMonster state: (Active newFor: randomMonster)",
messageSends: ["monstersFromSide:", "getSingleton", "side", "atRandom", "state:", "newFor:"],
referencedClasses: ["Map", "Active"]
}),
smalltalk.Turn);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'gaming',
fn: function () {
    var self = this;
    smalltalk.send(self, "_side_", [($receiver = 2 * smalltalk.send(1, "_atRandom", [])).klass === smalltalk.Number ? $receiver - 1 : smalltalk.send($receiver, "__minus", [1])]);
    smalltalk.send(self, "_activateTwoMonsters", []);
    return self;
},
args: [],
source: "initialize\x0a\x09self side: 2 * 1 atRandom - 1.\x0a\x09self activateTwoMonsters.",
messageSends: ["side:", "-", "*", "atRandom", "activateTwoMonsters"],
referencedClasses: []
}),
smalltalk.Turn);

smalltalk.addMethod(
"_nextTurn",
smalltalk.method({
selector: "nextTurn",
category: 'gaming',
fn: function () {
    var self = this;
    smalltalk.send(self, "_side_", [smalltalk.send(smalltalk.send(self, "_side", []), "_negated", [])]);
    smalltalk.send(self, "_activateTwoMonsters", []);
    return self;
},
args: [],
source: "nextTurn\x0a\x09self side: self side negated.\x0a\x09self activateTwoMonsters.",
messageSends: ["side:", "negated", "side", "activateTwoMonsters"],
referencedClasses: []
}),
smalltalk.Turn);

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
smalltalk.Turn);

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
smalltalk.Turn);


smalltalk.Turn.klass.iVarNames = ['turn'];
smalltalk.addMethod(
"_getSingleton",
smalltalk.method({
selector: "getSingleton",
category: 'instance-creation',
fn: function () {
    var self = this;
    return ($receiver = self['@turn']) == nil || $receiver == undefined ? function () {return self['@turn'] = smalltalk.send(self, "_new", []);}() : $receiver;
    return self;
},
args: [],
source: "getSingleton\x0a\x09^turn ifNil:[turn := self new]",
messageSends: ["ifNil:", "new"],
referencedClasses: []
}),
smalltalk.Turn.klass);


