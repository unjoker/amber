smalltalk.addPackage('Easnoth-Fight', {});
smalltalk.addClass('EventManager', smalltalk.Object, ['map', 'hexMouse'], 'Easnoth-Fight');
smalltalk.EventManager.comment="\x22abstract EventHandler\x22"
smalltalk.addMethod(
"_handleCanvasEvents",
smalltalk.method({
selector: "handleCanvasEvents",
category: 'initialize-eventHandling',
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(smalltalk.send(self, "_map", []), "_canvas", []), "_onClick_", [function () {return smalltalk.send(self, "_mouseClick", []);}]);
    smalltalk.send(smalltalk.send(smalltalk.send(self, "_map", []), "_canvas", []), "_onMouseMove_", [function (e) {return smalltalk.send(self, "_mouseMove_", [e]);}]);
    smalltalk.send(self, "_handleMapEvent", []);
    return self;
},
args: [],
source: "handleCanvasEvents\x0a\x09self map canvas onClick: [self mouseClick].\x0a\x09self map canvas onMouseMove: [:e | self mouseMove: e].\x0a\x09self handleMapEvent.",
messageSends: ["onClick:", "canvas", "map", "mouseClick", "onMouseMove:", "mouseMove:", "handleMapEvent"],
referencedClasses: []
}),
smalltalk.EventManager);

smalltalk.addMethod(
"_handleMapEvent",
smalltalk.method({
selector: "handleMapEvent",
category: 'initialize-eventHandling',
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(smalltalk.send(".up", "_asJQuery", []), "_at_", [0]), "_at_put_", ["onclick", function () {return smalltalk.send(self, "_mapUpEvent", []);}]);
    smalltalk.send(smalltalk.send(smalltalk.send(".left", "_asJQuery", []), "_at_", [0]), "_at_put_", ["onclick", function () {return smalltalk.send(self, "_mapLeftEvent", []);}]);
    smalltalk.send(smalltalk.send(smalltalk.send(".right", "_asJQuery", []), "_at_", [0]), "_at_put_", ["onclick", function () {return smalltalk.send(self, "_mapRightEvent", []);}]);
    smalltalk.send(smalltalk.send(smalltalk.send(".down", "_asJQuery", []), "_at_", [0]), "_at_put_", ["onclick", function () {return smalltalk.send(self, "_mapDownEvent", []);}]);
    smalltalk.send(smalltalk.send(smalltalk.send(".mirrorHorizontal", "_asJQuery", []), "_at_", [0]), "_at_put_", ["onclick", function () {return smalltalk.send(self, "_mapMirrorHorizontalEvent", []);}]);
    smalltalk.send(smalltalk.send(smalltalk.send(".mirrorVertical", "_asJQuery", []), "_at_", [0]), "_at_put_", ["onclick", function () {return smalltalk.send(self, "_mapMirrorVerticalEvent", []);}]);
    return self;
},
args: [],
source: "handleMapEvent\x0a\x09('.up' asJQuery at: 0) at: 'onclick' put: [self mapUpEvent].\x0a\x09('.left' asJQuery at: 0) at: 'onclick' put: [self mapLeftEvent].\x0a\x09('.right' asJQuery at: 0) at: 'onclick' put: [self mapRightEvent].\x0a\x09('.down' asJQuery at: 0) at: 'onclick' put: [self mapDownEvent].\x0a\x09('.mirrorHorizontal' asJQuery at: 0) at: 'onclick' put: [self mapMirrorHorizontalEvent].\x0a\x09('.mirrorVertical' asJQuery at: 0) at: 'onclick' put: [self mapMirrorVerticalEvent].",
messageSends: ["at:put:", "at:", "asJQuery", "mapUpEvent", "mapLeftEvent", "mapRightEvent", "mapDownEvent", "mapMirrorHorizontalEvent", "mapMirrorVerticalEvent"],
referencedClasses: []
}),
smalltalk.EventManager);

smalltalk.addMethod(
"_handleMenuEvents",
smalltalk.method({
selector: "handleMenuEvents",
category: 'initialize-eventHandling',
fn: function () {
    var self = this;
    smalltalk.send(self, "_subclassResponsibility", []);
    return self;
},
args: [],
source: "handleMenuEvents\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.EventManager);

smalltalk.addMethod(
"_hexMouse",
smalltalk.method({
selector: "hexMouse",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@hexMouse'];
    return self;
},
args: [],
source: "hexMouse\x0a\x09^hexMouse",
messageSends: [],
referencedClasses: []
}),
smalltalk.EventManager);

smalltalk.addMethod(
"_hexMouse_",
smalltalk.method({
selector: "hexMouse:",
category: 'accessing',
fn: function (aMouse) {
    var self = this;
    self['@hexMouse'] = aMouse;
    return self;
},
args: ["aMouse"],
source: "hexMouse: aMouse\x0a\x09hexMouse := aMouse",
messageSends: [],
referencedClasses: []
}),
smalltalk.EventManager);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function () {
    var self = this;
    smalltalk.send(self, "_hexMouse_", [smalltalk.send(smalltalk.HexMouse || HexMouse, "_getSingleton", [])]);
    return self;
},
args: [],
source: "initialize\x0a\x09self hexMouse: HexMouse getSingleton",
messageSends: ["hexMouse:", "getSingleton"],
referencedClasses: ["HexMouse"]
}),
smalltalk.EventManager);

smalltalk.addMethod(
"_initializeEventManagement",
smalltalk.method({
selector: "initializeEventManagement",
category: 'initialize-release',
fn: function () {
    var self = this;
    smalltalk.send(self, "_handleCanvasEvents", []);
    smalltalk.send(self, "_handleMenuEvents", []);
    return self;
},
args: [],
source: "initializeEventManagement\x0a\x09\x22has not to belong to initialize directly because need map to be set before \x22\x0a\x09self handleCanvasEvents.\x0a\x09self handleMenuEvents.",
messageSends: ["handleCanvasEvents", "handleMenuEvents"],
referencedClasses: []
}),
smalltalk.EventManager);

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
smalltalk.EventManager);

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
smalltalk.EventManager);

smalltalk.addMethod(
"_mapDownEvent",
smalltalk.method({
selector: "mapDownEvent",
category: 'eventHandling',
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_map", []), "_mapY_", [($receiver = smalltalk.send(smalltalk.send(self, "_map", []), "_mapY", [])).klass === smalltalk.Number ? $receiver + 10 : smalltalk.send($receiver, "__plus", [10])]);
    smalltalk.send(smalltalk.send(self, "_map", []), "_update", []);
    return self;
},
args: [],
source: "mapDownEvent\x0a\x09self map mapY: self map mapY + 10.\x0a\x09self map update",
messageSends: ["mapY:", "map", "+", "mapY", "update"],
referencedClasses: []
}),
smalltalk.EventManager);

smalltalk.addMethod(
"_mapLeftEvent",
smalltalk.method({
selector: "mapLeftEvent",
category: 'eventHandling',
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_map", []), "_mapX_", [($receiver = smalltalk.send(smalltalk.send(self, "_map", []), "_mapX", [])).klass === smalltalk.Number ? $receiver - 10 : smalltalk.send($receiver, "__minus", [10])]);
    smalltalk.send(smalltalk.send(self, "_map", []), "_update", []);
    return self;
},
args: [],
source: "mapLeftEvent\x0a\x09self map mapX: self map mapX - 10.\x0a\x09self map update",
messageSends: ["mapX:", "map", "-", "mapX", "update"],
referencedClasses: []
}),
smalltalk.EventManager);

smalltalk.addMethod(
"_mapMirrorHorizontalEvent",
smalltalk.method({
selector: "mapMirrorHorizontalEvent",
category: 'eventHandling',
fn: function () {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_translate_y_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_map", []), "_canvas", []), "_element", []), "_width", []), 0]);return smalltalk.send($rec, "_scale_y_", [smalltalk.send(1, "_negated", []), 1]);}(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_map", []), "_canvas", []), "_element", []), "_getContext_", ["2d"])));
    smalltalk.send(smalltalk.send(self, "_map", []), "_update", []);
    return self;
},
args: [],
source: "mapMirrorHorizontalEvent\x0a\x09(self map canvas element getContext: '2d') translate: self map canvas element width y: 0;\x0a\x09\x09scale: 1 negated y: 1.\x0a\x09self map update.",
messageSends: ["translate:y:", "width", "element", "canvas", "map", "scale:y:", "negated", "getContext:", "update"],
referencedClasses: []
}),
smalltalk.EventManager);

smalltalk.addMethod(
"_mapMirrorVerticalEvent",
smalltalk.method({
selector: "mapMirrorVerticalEvent",
category: 'eventHandling',
fn: function () {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_translate_y_", [0, smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_map", []), "_canvas", []), "_element", []), "_height", [])]);return smalltalk.send($rec, "_scale_y_", [1, smalltalk.send(1, "_negated", [])]);}(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_map", []), "_canvas", []), "_element", []), "_getContext_", ["2d"])));
    smalltalk.send(smalltalk.send(self, "_map", []), "_update", []);
    return self;
},
args: [],
source: "mapMirrorVerticalEvent\x0a\x09(self map canvas element getContext: '2d') translate: 0 y: self map canvas element height;\x0a\x09\x09scale: 1 y: 1 negated.\x0a\x09self map update.",
messageSends: ["translate:y:", "height", "element", "canvas", "map", "scale:y:", "negated", "getContext:", "update"],
referencedClasses: []
}),
smalltalk.EventManager);

smalltalk.addMethod(
"_mapRightEvent",
smalltalk.method({
selector: "mapRightEvent",
category: 'eventHandling',
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_map", []), "_mapX_", [($receiver = smalltalk.send(smalltalk.send(self, "_map", []), "_mapX", [])).klass === smalltalk.Number ? $receiver + 10 : smalltalk.send($receiver, "__plus", [10])]);
    smalltalk.send(smalltalk.send(self, "_map", []), "_update", []);
    return self;
},
args: [],
source: "mapRightEvent\x0a\x09self map mapX: self map mapX + 10.\x0a\x09self map update",
messageSends: ["mapX:", "map", "+", "mapX", "update"],
referencedClasses: []
}),
smalltalk.EventManager);

smalltalk.addMethod(
"_mapUpEvent",
smalltalk.method({
selector: "mapUpEvent",
category: 'eventHandling',
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_map", []), "_mapY_", [($receiver = smalltalk.send(smalltalk.send(self, "_map", []), "_mapY", [])).klass === smalltalk.Number ? $receiver - 10 : smalltalk.send($receiver, "__minus", [10])]);
    smalltalk.send(smalltalk.send(self, "_map", []), "_update", []);
    return self;
},
args: [],
source: "mapUpEvent\x0a\x09self map mapY: self map mapY - 10.\x0a\x09self map update",
messageSends: ["mapY:", "map", "-", "mapY", "update"],
referencedClasses: []
}),
smalltalk.EventManager);

smalltalk.addMethod(
"_menuToInstantiate",
smalltalk.method({
selector: "menuToInstantiate",
category: 'initialize-release',
fn: function () {
    var self = this;
    smalltalk.send(self, "_subClassResponsibility", []);
    return self;
},
args: [],
source: "menuToInstantiate\x0a\x09self subClassResponsibility\x0a",
messageSends: ["subClassResponsibility"],
referencedClasses: []
}),
smalltalk.EventManager);

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
smalltalk.EventManager);

smalltalk.addMethod(
"_mouseMove_",
smalltalk.method({
selector: "mouseMove:",
category: 'eventHandling',
fn: function (anEvent) {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_hexMouse", []), "_updateCoods_inMap_", [anEvent, smalltalk.send(self, "_map", [])]);
    return self;
},
args: ["anEvent"],
source: "mouseMove: anEvent\x0a\x09self hexMouse updateCoods: anEvent inMap: self map",
messageSends: ["updateCoods:inMap:", "hexMouse", "map"],
referencedClasses: []
}),
smalltalk.EventManager);


smalltalk.EventManager.klass.iVarNames = ['eventManager'];
smalltalk.addMethod(
"_getSingleton",
smalltalk.method({
selector: "getSingleton",
category: 'initialize-release',
fn: function () {
    var self = this;
    return ($receiver = self['@eventManager']) == nil ||
        $receiver == undefined ? function () {return self['@eventManager'] = smalltalk.send(self, "_new", []);}() : $receiver;
    return self;
},
args: [],
source: "getSingleton\x0a\x09^eventManager ifNil:[eventManager := self new.]",
messageSends: ["ifNil:", "new"],
referencedClasses: []
}),
smalltalk.EventManager.klass);

smalltalk.addMethod(
"_newWithMapIndex_",
smalltalk.method({
selector: "newWithMapIndex:",
category: 'initialize-release',
fn: function (aMapIndex) {
    var self = this;
    return function ($rec) {smalltalk.send($rec, "_map_", [smalltalk.send(smalltalk.Map || Map, "_newWithMapIndex_", [aMapIndex])]);smalltalk.send($rec, "_initializeEventManagement", []);return smalltalk.send($rec, "_yourself", []);}(smalltalk.send(self, "_getSingleton", []));
    return self;
},
args: ["aMapIndex"],
source: "newWithMapIndex: aMapIndex\x0a\x09^self getSingleton\x0a\x09\x09map: (Map newWithMapIndex: aMapIndex);\x0a\x09\x09initializeEventManagement;\x0a\x09\x09yourself.",
messageSends: ["map:", "newWithMapIndex:", "initializeEventManagement", "yourself", "getSingleton"],
referencedClasses: ["Map"]
}),
smalltalk.EventManager.klass);


smalltalk.addClass('FightEventManager', smalltalk.EventManager, ['selectedCells', 'selectedCell', 'state', 'sidePlaying'], 'Easnoth-Fight');
smalltalk.addMethod(
"_handleMenuEvents",
smalltalk.method({
selector: "handleMenuEvents",
category: 'initialize-eventHandling',
fn: function () {
    var self = this;
    return self;
},
args: [],
source: "handleMenuEvents",
messageSends: [],
referencedClasses: []
}),
smalltalk.FightEventManager);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function () {
    var self = this;
    smalltalk.send(self, "_initialize", [], smalltalk.FightEventManager.superclass || nil);
    smalltalk.send(self, "_state_", [smalltalk.send(smalltalk.RegularState || RegularState, "_getStateFor_", [self])]);
    smalltalk.send(self, "_sidePlaying_", [1]);
    return self;
},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self state: (RegularState getStateFor: self).\x0a\x09self sidePlaying: 1.",
messageSends: ["initialize", "state:", "getStateFor:", "sidePlaying:"],
referencedClasses: ["RegularState"]
}),
smalltalk.FightEventManager);

smalltalk.addMethod(
"_mouseClick",
smalltalk.method({
selector: "mouseClick",
category: 'eventHandling',
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_map", []), "_removeSelection", []);
    smalltalk.send(smalltalk.send(self, "_state", []), "_mouseClick", []);
    smalltalk.send(smalltalk.send(self, "_map", []), "_update", []);
    return self;
},
args: [],
source: "mouseClick\x0a\x09self map removeSelection.\x0a\x09self state mouseClick.\x0a\x09self map update",
messageSends: ["removeSelection", "map", "mouseClick", "state", "update"],
referencedClasses: []
}),
smalltalk.FightEventManager);

smalltalk.addMethod(
"_selectCells",
smalltalk.method({
selector: "selectCells",
category: 'actions',
fn: function () {
    var self = this;
    var selectedCell = nil;
    self['@selectedCell'] = smalltalk.send(smalltalk.send(self, "_hexMouse", []), "_cell", []);
    ($receiver = self['@selectedCell']) != nil &&
        $receiver != undefined ? function () {return ($receiver = smalltalk.send(self['@selectedCell'], "_hasMonster", [])).klass === smalltalk.Boolean ? $receiver ? function () {smalltalk.send(self, "_selectedCells_", [smalltalk.send(self['@selectedCell'], "_selectableNeighboursInMap_side_", [smalltalk.send(self, "_map", []), smalltalk.send(self, "_sidePlaying", [])])]);return smalltalk.send(smalltalk.send(self, "_map", []), "_addSelection_", [smalltalk.send(self, "_selectedCells", [])]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {smalltalk.send(self, "_selectedCells_", [smalltalk.send(self['@selectedCell'], "_selectableNeighboursInMap_side_", [smalltalk.send(self, "_map", []), smalltalk.send(self, "_sidePlaying", [])])]);return smalltalk.send(smalltalk.send(self, "_map", []), "_addSelection_", [smalltalk.send(self, "_selectedCells", [])]);}]);}() : nil;
    return self;
},
args: [],
source: "selectCells\x0a\x09|selectedCell|\x0a\x0a\x09selectedCell := self hexMouse cell.\x0a\x09\x22bug inlined the compiler : 2 if needed\x22\x0a\x09selectedCell ifNotNil: [ \x0a\x09\x09(selectedCell hasMonster) ifTrue: [\x0a\x09\x09\x09self selectedCells: (selectedCell selectableNeighboursInMap: self map side: self sidePlaying).\x0a\x09\x09\x09self map addSelection: self selectedCells.\x0a\x09\x09].\x0a\x09].",
messageSends: ["cell", "hexMouse", "ifNotNil:", "ifTrue:", "hasMonster", "selectedCells:", "selectableNeighboursInMap:side:", "map", "sidePlaying", "addSelection:", "selectedCells"],
referencedClasses: []
}),
smalltalk.FightEventManager);

smalltalk.addMethod(
"_selectedCell",
smalltalk.method({
selector: "selectedCell",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@selectedCell'];
    return self;
},
args: [],
source: "selectedCell\x0a\x09^selectedCell",
messageSends: [],
referencedClasses: []
}),
smalltalk.FightEventManager);

smalltalk.addMethod(
"_selectedCell_",
smalltalk.method({
selector: "selectedCell:",
category: 'accessing',
fn: function (aCell) {
    var self = this;
    self['@selectedCell'] = aCell;
    return self;
},
args: ["aCell"],
source: "selectedCell: aCell\x0a\x09selectedCell := aCell",
messageSends: [],
referencedClasses: []
}),
smalltalk.FightEventManager);

smalltalk.addMethod(
"_selectedCells",
smalltalk.method({
selector: "selectedCells",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@selectedCells'];
    return self;
},
args: [],
source: "selectedCells\x0a\x09^selectedCells",
messageSends: [],
referencedClasses: []
}),
smalltalk.FightEventManager);

smalltalk.addMethod(
"_selectedCells_",
smalltalk.method({
selector: "selectedCells:",
category: 'accessing',
fn: function (aCellCollection) {
    var self = this;
    self['@selectedCells'] = aCellCollection;
    return self;
},
args: ["aCellCollection"],
source: "selectedCells: aCellCollection\x0a\x09selectedCells := aCellCollection",
messageSends: [],
referencedClasses: []
}),
smalltalk.FightEventManager);

smalltalk.addMethod(
"_sidePlaying",
smalltalk.method({
selector: "sidePlaying",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@sidePlaying'];
    return self;
},
args: [],
source: "sidePlaying\x0a\x09^sidePlaying",
messageSends: [],
referencedClasses: []
}),
smalltalk.FightEventManager);

smalltalk.addMethod(
"_sidePlaying_",
smalltalk.method({
selector: "sidePlaying:",
category: 'accessing',
fn: function (aSide) {
    var self = this;
    self['@sidePlaying'] = aSide;
    return self;
},
args: ["aSide"],
source: "sidePlaying: aSide\x0a\x09sidePlaying := aSide",
messageSends: [],
referencedClasses: []
}),
smalltalk.FightEventManager);

smalltalk.addMethod(
"_state",
smalltalk.method({
selector: "state",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@state'];
    return self;
},
args: [],
source: "state\x0a\x09^state",
messageSends: [],
referencedClasses: []
}),
smalltalk.FightEventManager);

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
smalltalk.FightEventManager);



smalltalk.addClass('MultiPlayerFightEventManager', smalltalk.FightEventManager, [], 'Easnoth-Fight');


smalltalk.addClass('NetworkMultiPlayerFightEventManager', smalltalk.MultiPlayerFightEventManager, [], 'Easnoth-Fight');


smalltalk.addClass('RegularMultiPlayerFightEventManager', smalltalk.MultiPlayerFightEventManager, [], 'Easnoth-Fight');


smalltalk.addClass('SinglePlayerFightEventManager', smalltalk.FightEventManager, [], 'Easnoth-Fight');


smalltalk.addClass('FightState', smalltalk.Object, ['eventManager'], 'Easnoth-Fight');
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
smalltalk.FightState);

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
smalltalk.FightState);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'eventHandling',
fn: function () {
    var self = this;
    smalltalk.send(self, "_eventManager_", [smalltalk.send(smalltalk.EventManager || EventManager, "_getSingleton", [])]);
    return self;
},
args: [],
source: "initialize\x0a\x09self eventManager: EventManager getSingleton",
messageSends: ["eventManager:", "getSingleton"],
referencedClasses: ["EventManager"]
}),
smalltalk.FightState);

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
source: "mouseClick\x0a\x09self subclassResponsibility\x0a\x09",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.FightState);


smalltalk.FightState.klass.iVarNames = ['state'];
smalltalk.addMethod(
"_getStateFor_",
smalltalk.method({
selector: "getStateFor:",
category: 'instance-creation',
fn: function (anEventManager) {
    var self = this;
    return ($receiver = self['@state']) == nil || $receiver == undefined ? function () {return self['@state'] = smalltalk.send(smalltalk.send(self, "_new", []), "_eventManager_", [anEventManager]);}() : $receiver;
    return self;
},
args: ["anEventManager"],
source: "getStateFor: anEventManager\x0a\x09^state ifNil:[state := self new eventManager: anEventManager.]",
messageSends: ["ifNil:", "eventManager:", "new"],
referencedClasses: []
}),
smalltalk.FightState.klass);


smalltalk.addClass('AlreadyAttackState', smalltalk.FightState, [], 'Easnoth-Fight');


smalltalk.addClass('AlreadyMoveState', smalltalk.FightState, [], 'Easnoth-Fight');


smalltalk.addClass('RegularState', smalltalk.FightState, [], 'Easnoth-Fight');
smalltalk.addMethod(
"_mouseClick",
smalltalk.method({
selector: "mouseClick",
category: 'eventHandling',
fn: function () {
    var self = this;
    var ev = nil;
    ev = smalltalk.send(self, "_eventManager", []);
    smalltalk.send(ev, "_selectCells", []);
    smalltalk.send(ev, "_state_", [smalltalk.send(smalltalk.RegularStateSelectionDone || RegularStateSelectionDone, "_getStateFor_", [ev])]);
    return self;
},
args: [],
source: "mouseClick\x0a\x09|ev|\x0a\x0a\x09ev := self eventManager.\x0a\x09ev selectCells.\x0a\x09ev state: (RegularStateSelectionDone getStateFor: ev)\x0a\x09",
messageSends: ["eventManager", "selectCells", "state:", "getStateFor:"],
referencedClasses: ["RegularStateSelectionDone"]
}),
smalltalk.RegularState);



smalltalk.addClass('RegularStateSelectionDone', smalltalk.FightState, [], 'Easnoth-Fight');
smalltalk.addMethod(
"_mouseClick",
smalltalk.method({
selector: "mouseClick",
category: 'eventHandling',
fn: function () {
    var self = this;
    var ev = nil;
    var cellClicked = nil;
    ev = smalltalk.send(self, "_eventManager", []);
    cellClicked = smalltalk.send(smalltalk.send(smalltalk.send(self, "_eventManager", []), "_hexMouse", []), "_cell", []);
    ($receiver = cellClicked) != nil && $receiver != undefined ? function () {return ($receiver = smalltalk.send(cellClicked, "_hasSelector", [])).klass === smalltalk.Boolean ? $receiver ? function () {return ($receiver = smalltalk.send(cellClicked, "_hasGreenSelector", [])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(smalltalk.send(self, "_ev", []), "_moveMonster", []);}() : function () {return nil;}() : smalltalk.send($receiver, "_ifTrue_ifFalse_", [function () {return smalltalk.send(smalltalk.send(self, "_ev", []), "_moveMonster", []);}, function () {return nil;}]);}() : function () {smalltalk.send(ev, "_state_", [smalltalk.send(smalltalk.RegularState || RegularState, "_getStateFor_", [ev])]);return smalltalk.send(smalltalk.send(ev, "_state", []), "_mouseClick", []);}() : smalltalk.send($receiver, "_ifTrue_ifFalse_", [function () {return ($receiver = smalltalk.send(cellClicked, "_hasGreenSelector", [])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(smalltalk.send(self, "_ev", []), "_moveMonster", []);}() : function () {return nil;}() : smalltalk.send($receiver, "_ifTrue_ifFalse_", [function () {return smalltalk.send(smalltalk.send(self, "_ev", []), "_moveMonster", []);}, function () {return nil;}]);}, function () {smalltalk.send(ev, "_state_", [smalltalk.send(smalltalk.RegularState || RegularState, "_getStateFor_", [ev])]);return smalltalk.send(smalltalk.send(ev, "_state", []), "_mouseClick", []);}]);}() : nil;
    return self;
},
args: [],
source: "mouseClick\x0a\x09|ev cellClicked|\x0a\x0a\x09ev := self eventManager.\x0a\x09cellClicked := self eventManager hexMouse cell.\x0a\x09cellClicked ifNotNil: [\x0a              (cellClicked hasSelector) ifTrue: [\x0a                      cellClicked hasGreenSelector ifTrue: [\x0a                              self ev moveMonster.\x0a                      ] ifFalse: [\x0a                              \x22attack, cant move or regular\x22\x0a                      ]\x0a              ] ifFalse: [\x0a                      ev state: (RegularState getStateFor: ev).\x0a                      ev state mouseClick.\x0a              ]\x0a\x09].",
messageSends: ["eventManager", "cell", "hexMouse", "ifNotNil:", "ifTrue:ifFalse:", "hasSelector", "hasGreenSelector", "moveMonster", "ev", "state:", "getStateFor:", "mouseClick", "state"],
referencedClasses: ["RegularState"]
}),
smalltalk.RegularStateSelectionDone);



smalltalk.addClass('HexMouse', smalltalk.Object, ['cell'], 'Easnoth-Fight');
smalltalk.HexMouse.comment="\x22representation of the mouse with its coods according to the tiles in the map\x22"
smalltalk.addMethod(
"_cell",
smalltalk.method({
selector: "cell",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@cell'];
    return self;
},
args: [],
source: "cell\x0a\x09^cell",
messageSends: [],
referencedClasses: []
}),
smalltalk.HexMouse);

smalltalk.addMethod(
"_cell_",
smalltalk.method({
selector: "cell:",
category: 'accessing',
fn: function (aCell) {
    var self = this;
    self['@cell'] = aCell;
    return self;
},
args: ["aCell"],
source: "cell: aCell\x0a\x09cell := aCell",
messageSends: [],
referencedClasses: []
}),
smalltalk.HexMouse);

smalltalk.addMethod(
"_mouseCoodToHexCoodX_y_inMap_",
smalltalk.method({
selector: "mouseCoodToHexCoodX:y:inMap:",
category: 'calculs',
fn: function (x, y, aMap) {
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
    var mapX = nil;
    var mapY = nil;
    var res = nil;
    cosmaingridx = 0.882947593;
    sinmaingridx = 0.469471563;
    cosmaingridy = smalltalk.send(0.130526192, "_negated", []);
    sinmaingridy = 0.991444861;
    cosothergridx = 0.4539905;
    sinothergridx = 0.891006524;
    cosothergridy = smalltalk.send(0.882947593, "_negated", []);
    sinothergridy = 0.469471563;
    mapX = smalltalk.send(aMap, "_mapX", []);
    mapY = smalltalk.send(aMap, "_mapY", []);

    function mod(n, mod) {
        return (mod + n % mod) % mod;
    }

    nb = Math.floor((y - cosmaingridx / sinmaingridx * x - (mapY + 0) + cosmaingridx / sinmaingridx * (mapX + 320)) / (55 * cosmaingridx));
    nb2 = Math.floor((y - cosmaingridy / sinmaingridy * x - (mapY + 480) + cosmaingridy / sinmaingridy * (mapX + 206)) / (173.2 * cosmaingridy));
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
            nb3 = Math.floor((y - cosothergridx / sinothergridx * x - (mapY + 0) + cosothergridx / sinothergridx * (mapX + 301)) / (68 * cosothergridx));
            nbCheck = 3 + 2 * yHex + xHex % 2;
            if (nb3 == nbCheck) {
                yHex--;
            }
        } else {
            nb4 = Math.floor((y - cosothergridy / sinothergridy * x - (mapY + 480) + cosothergridy / sinothergridy * (mapX + 212.5)) / (95.75 * cosothergridy));
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
args: ["x", "y", "aMap"],
source: "mouseCoodToHexCoodX: x y: y inMap: aMap\x0a\x09\x22function that take mouse cood in pixel and return the coods of the tile selected\x22\x0a\x09\x0a\x09\x22there are issues from Amber kernel : the order of operations sometimes goes wrong in long lines :  inline compiler issue\x22\x0a\x09\x22so this algo is back to javascript\x22\x0a\x0a\x09| xHex yHex cosmaingridx sinmaingridx cosmaingridy sinmaingridy cosothergridx sinothergridx cosothergridy sinothergridy nb nb2 nb3 nb4 nbCheck xConstante yConstante mapX mapY res|\x0a\x09cosmaingridx := 0.882947593.\x0a\x09sinmaingridx := 0.469471563.\x0a\x09cosmaingridy := 0.130526192 negated.\x0a\x09sinmaingridy := 0.991444861.\x0a\x0a\x09cosothergridx := 0.4539905.\x0a\x09sinothergridx := 0.891006524.\x0a\x09cosothergridy := 0.882947593 negated.\x0a\x09sinothergridy := 0.469471563.\x0a                \x0a\x09mapX := aMap mapX.\x0a\x09mapY := aMap mapY.\x0a\x09\x0a\x09\x09<function mod(n, mod) {\x0a\x09\x09\x09return ((mod+(n%mod))%mod);\x0a\x09\x09}\x0a\x09\x09\x0a\x09\x09nb = Math.floor(((y-(cosmaingridx/sinmaingridx)*x-(mapY+0)+(cosmaingridx/sinmaingridx)*(mapX+320))/(55*cosmaingridx)));\x0a\x09\x09nb2 = Math.floor(((y-(cosmaingridy/sinmaingridy)*x-(mapY+480)+(cosmaingridy/sinmaingridy)*(mapX+206))/(173.2*cosmaingridy)));\x0a\x09\x09\x0a\x09\x09xConstante = 9 + (mod(nb,3));\x0a\x09\x09yConstante = 20 + (mod(nb2,2));\x0a\x09\x09if (nb2%2 == 0) {yConstante += mod(nb+1,2);}\x0a\x09\x09\x0a\x09\x09xHex = Math.floor(((xConstante-nb)/6)+((yConstante-nb2)/2));\x0a\x09\x09yHex = Math.floor(((nb-xConstante)/4)+((yConstante-nb2)/4));\x0a\x09\x09\x0a\x09\x09if (mod(nb,6)==1 && nb2%2==0){\x0a\x09\x09\x09xHex++;\x0a\x09\x09\x09if (nb2%4==0 && mod(nb,12)!=7){yHex++;}\x0a\x09\x09\x09if (mod(nb2,4)==2 && mod(nb,12)==7){yHex++;}\x0a\x09\x09}\x0a\x09\x09\x0a\x09\x09if (nb%3==0) {\x09\x09\x0a\x09\x09\x09if ((nb2%2==0 && nb%6==0) || (mod(nb2,2)==1 && mod(nb,6)==3)) {\x0a\x09\x09\x09\x09nb3 = Math.floor(((y-(cosothergridx/sinothergridx)*x-(mapY+0)+(cosothergridx/sinothergridx)*(mapX+301))/(68*cosothergridx)));\x0a\x09\x09\x09\x09nbCheck = 3+2*yHex+(xHex%2);\x0a\x09\x09\x09\x09if (nb3 == nbCheck) {yHex--;}\x0a\x09\x09\x09}\x0a\x09\x09\x09else {\x0a\x09\x09\x09\x09nb4 = Math.floor(((y-(cosothergridy/sinothergridy)*x-(mapY+480)+(cosothergridy/sinothergridy)*(mapX+212.5))/(95.75*cosothergridy)));\x0a\x09\x09\x09\x09nbCheck = 7-Math.floor(3*xHex/2)+yHex;\x0a\x09\x09\x09\x09if (nb4 == nbCheck) {\x0a\x09\x09\x09\x09\x09if (xHex%2 == 0) {yHex--;}\x0a\x09\x09\x09\x09\x09xHex++;\x0a\x09\x09\x09\x09}\x0a\x09\x09\x09}\x0a\x09\x09}>.\x0a\x0a\x09res := Array with: xHex with: yHex.\x0a\x09\x0a\x09^res",
messageSends: ["negated", "mapX", "mapY", "with:with:"],
referencedClasses: ["Array"]
}),
smalltalk.HexMouse);

smalltalk.addMethod(
"_oldAlgoMouseCoodToHexCoodX_y_inMap_",
smalltalk.method({
selector: "oldAlgoMouseCoodToHexCoodX:y:inMap:",
category: 'calculs',
fn: function (x, y, aMap) {
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
    var mapX = nil;
    var mapY = nil;
    var res = nil;
    var temp1 = nil;
    var temp2 = nil;
    var k = nil;
    var m = nil;
    cosmaingridx = 0.882947593;
    sinmaingridx = 0.469471563;
    cosmaingridy = smalltalk.send(0.130526192, "_negated", []);
    sinmaingridy = 0.991444861;
    cosothergridx = 0.4539905;
    sinothergridx = 0.891006524;
    cosothergridy = smalltalk.send(0.882947593, "_negated", []);
    sinothergridy = 0.469471563;
    mapX = smalltalk.send(aMap, "_mapX", []);
    mapY = smalltalk.send(aMap, "_mapY", []);
    nb = smalltalk.send(($receiver = ($receiver = ($receiver = ($receiver = ($receiver = y).klass === smalltalk.Number ? $receiver - (($receiver = ($receiver = cosmaingridx).klass === smalltalk.Number ? $receiver / sinmaingridx : smalltalk.send($receiver, "__slash", [sinmaingridx])).klass === smalltalk.Number ? $receiver * x : smalltalk.send($receiver, "__star", [x])) : smalltalk.send($receiver, "__minus", [($receiver = ($receiver = cosmaingridx).klass === smalltalk.Number ? $receiver / sinmaingridx : smalltalk.send($receiver, "__slash", [sinmaingridx])).klass === smalltalk.Number ? $receiver * x : smalltalk.send($receiver, "__star", [x])])).klass === smalltalk.Number ? $receiver - mapY : smalltalk.send($receiver, "__minus", [mapY])).klass === smalltalk.Number ? $receiver + 0 : smalltalk.send($receiver, "__plus", [0])).klass === smalltalk.Number ? $receiver + (($receiver = ($receiver = cosmaingridx).klass === smalltalk.Number ? $receiver / sinmaingridx : smalltalk.send($receiver, "__slash", [sinmaingridx])).klass === smalltalk.Number ? $receiver * (($receiver = mapX).klass === smalltalk.Number ? $receiver + 320 : smalltalk.send($receiver, "__plus", [320])) : smalltalk.send($receiver, "__star", [($receiver = mapX).klass === smalltalk.Number ? $receiver + 320 : smalltalk.send($receiver, "__plus", [320])])) : smalltalk.send($receiver, "__plus", [($receiver = ($receiver = cosmaingridx).klass === smalltalk.Number ? $receiver / sinmaingridx : smalltalk.send($receiver, "__slash", [sinmaingridx])).klass === smalltalk.Number ? $receiver * (($receiver = mapX).klass === smalltalk.Number ? $receiver + 320 : smalltalk.send($receiver, "__plus", [320])) : smalltalk.send($receiver, "__star", [($receiver = mapX).klass === smalltalk.Number ? $receiver + 320 : smalltalk.send($receiver, "__plus", [320])])])).klass === smalltalk.Number ? $receiver / 55 * cosmaingridx : smalltalk.send($receiver, "__slash", [55 * cosmaingridx]), "_floor", []);
    nb2 = smalltalk.send(($receiver = ($receiver = ($receiver = ($receiver = ($receiver = y).klass === smalltalk.Number ? $receiver - (($receiver = ($receiver = cosmaingridy).klass === smalltalk.Number ? $receiver / sinmaingridy : smalltalk.send($receiver, "__slash", [sinmaingridy])).klass === smalltalk.Number ? $receiver * x : smalltalk.send($receiver, "__star", [x])) : smalltalk.send($receiver, "__minus", [($receiver = ($receiver = cosmaingridy).klass === smalltalk.Number ? $receiver / sinmaingridy : smalltalk.send($receiver, "__slash", [sinmaingridy])).klass === smalltalk.Number ? $receiver * x : smalltalk.send($receiver, "__star", [x])])).klass === smalltalk.Number ? $receiver - mapY : smalltalk.send($receiver, "__minus", [mapY])).klass === smalltalk.Number ? $receiver + 480 : smalltalk.send($receiver, "__plus", [480])).klass === smalltalk.Number ? $receiver + (($receiver = ($receiver = cosmaingridy).klass === smalltalk.Number ? $receiver / sinmaingridy : smalltalk.send($receiver, "__slash", [sinmaingridy])).klass === smalltalk.Number ? $receiver * (($receiver = mapX).klass === smalltalk.Number ? $receiver + 206 : smalltalk.send($receiver, "__plus", [206])) : smalltalk.send($receiver, "__star", [($receiver = mapX).klass === smalltalk.Number ? $receiver + 206 : smalltalk.send($receiver, "__plus", [206])])) : smalltalk.send($receiver, "__plus", [($receiver = ($receiver = cosmaingridy).klass === smalltalk.Number ? $receiver / sinmaingridy : smalltalk.send($receiver, "__slash", [sinmaingridy])).klass === smalltalk.Number ? $receiver * (($receiver = mapX).klass === smalltalk.Number ? $receiver + 206 : smalltalk.send($receiver, "__plus", [206])) : smalltalk.send($receiver, "__star", [($receiver = mapX).klass === smalltalk.Number ? $receiver + 206 : smalltalk.send($receiver, "__plus", [206])])])).klass === smalltalk.Number ? $receiver / 173.2 * cosmaingridy : smalltalk.send($receiver, "__slash", [173.2 * cosmaingridy]), "_floor", []);
    xConstante = 9 + smalltalk.send(nb, "_mod_", [3]);
    yConstante = 20 + smalltalk.send(nb2, "_mod_", [2]);
    ($receiver = smalltalk.send(smalltalk.send(nb2, "_\\\\", [2]), "__eq", [0])).klass === smalltalk.Boolean ? $receiver ? function () {return yConstante = ($receiver = yConstante).klass === smalltalk.Number ? $receiver + smalltalk.send(($receiver = nb).klass === smalltalk.Number ? $receiver + 1 : smalltalk.send($receiver, "__plus", [1]), "_mod_", [2]) : smalltalk.send($receiver, "__plus", [smalltalk.send(($receiver = nb).klass === smalltalk.Number ? $receiver + 1 : smalltalk.send($receiver, "__plus", [1]), "_mod_", [2])]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return yConstante = ($receiver = yConstante).klass === smalltalk.Number ? $receiver + smalltalk.send(($receiver = nb).klass === smalltalk.Number ? $receiver + 1 : smalltalk.send($receiver, "__plus", [1]), "_mod_", [2]) : smalltalk.send($receiver, "__plus", [smalltalk.send(($receiver = nb).klass === smalltalk.Number ? $receiver + 1 : smalltalk.send($receiver, "__plus", [1]), "_mod_", [2])]);}]);
    xHex = smalltalk.send(($receiver = ($receiver = ($receiver = xConstante).klass === smalltalk.Number ? $receiver - nb : smalltalk.send($receiver, "__minus", [nb])).klass === smalltalk.Number ? $receiver / 6 : smalltalk.send($receiver, "__slash", [6])).klass === smalltalk.Number ? $receiver + (($receiver = ($receiver = yConstante).klass === smalltalk.Number ? $receiver - nb2 : smalltalk.send($receiver, "__minus", [nb2])).klass === smalltalk.Number ? $receiver / 2 : smalltalk.send($receiver, "__slash", [2])) : smalltalk.send($receiver, "__plus", [($receiver = ($receiver = yConstante).klass === smalltalk.Number ? $receiver - nb2 : smalltalk.send($receiver, "__minus", [nb2])).klass === smalltalk.Number ? $receiver / 2 : smalltalk.send($receiver, "__slash", [2])]), "_floor", []);
    yHex = smalltalk.send(($receiver = ($receiver = ($receiver = nb).klass === smalltalk.Number ? $receiver - xConstante : smalltalk.send($receiver, "__minus", [xConstante])).klass === smalltalk.Number ? $receiver / 4 : smalltalk.send($receiver, "__slash", [4])).klass === smalltalk.Number ? $receiver + (($receiver = ($receiver = yConstante).klass === smalltalk.Number ? $receiver - nb2 : smalltalk.send($receiver, "__minus", [nb2])).klass === smalltalk.Number ? $receiver / 4 : smalltalk.send($receiver, "__slash", [4])) : smalltalk.send($receiver, "__plus", [($receiver = ($receiver = yConstante).klass === smalltalk.Number ? $receiver - nb2 : smalltalk.send($receiver, "__minus", [nb2])).klass === smalltalk.Number ? $receiver / 4 : smalltalk.send($receiver, "__slash", [4])]), "_floor", []);
    ($receiver = smalltalk.send(smalltalk.send(smalltalk.send(nb, "_mod_", [6]), "__eq", [1]), "_&", [smalltalk.send(smalltalk.send(nb2, "_\\\\", [2]), "__eq", [0])])).klass === smalltalk.Boolean ? $receiver ? function () {xHex = ($receiver = xHex).klass === smalltalk.Number ? $receiver + 1 : smalltalk.send($receiver, "__plus", [1]);($receiver = smalltalk.send(smalltalk.send(smalltalk.send(nb2, "_\\\\", [4]), "__eq", [0]), "_&", [smalltalk.send(smalltalk.send(smalltalk.send(nb, "_mod_", [12]), "__eq", [7]), "_not", [])])).klass === smalltalk.Boolean ? $receiver ? function () {return yHex = ($receiver = yHex).klass === smalltalk.Number ? $receiver + 1 : smalltalk.send($receiver, "__plus", [1]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return yHex = ($receiver = yHex).klass === smalltalk.Number ? $receiver + 1 : smalltalk.send($receiver, "__plus", [1]);}]);return ($receiver = smalltalk.send(smalltalk.send(smalltalk.send(nb2, "_mod_", [4]), "__eq", [2]), "_&", [smalltalk.send(smalltalk.send(nb, "_mod_", [12]), "__eq", [7])])).klass === smalltalk.Boolean ? $receiver ? function () {return yHex = ($receiver = yHex).klass === smalltalk.Number ? $receiver + 1 : smalltalk.send($receiver, "__plus", [1]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return yHex = ($receiver = yHex).klass === smalltalk.Number ? $receiver + 1 : smalltalk.send($receiver, "__plus", [1]);}]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {xHex = ($receiver = xHex).klass === smalltalk.Number ? $receiver + 1 : smalltalk.send($receiver, "__plus", [1]);($receiver = smalltalk.send(smalltalk.send(smalltalk.send(nb2, "_\\\\", [4]), "__eq", [0]), "_&", [smalltalk.send(smalltalk.send(smalltalk.send(nb, "_mod_", [12]), "__eq", [7]), "_not", [])])).klass === smalltalk.Boolean ? $receiver ? function () {return yHex = ($receiver = yHex).klass === smalltalk.Number ? $receiver + 1 : smalltalk.send($receiver, "__plus", [1]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return yHex = ($receiver = yHex).klass === smalltalk.Number ? $receiver + 1 : smalltalk.send($receiver, "__plus", [1]);}]);return ($receiver = smalltalk.send(smalltalk.send(smalltalk.send(nb2, "_mod_", [4]), "__eq", [2]), "_&", [smalltalk.send(smalltalk.send(nb, "_mod_", [12]), "__eq", [7])])).klass === smalltalk.Boolean ? $receiver ? function () {return yHex = ($receiver = yHex).klass === smalltalk.Number ? $receiver + 1 : smalltalk.send($receiver, "__plus", [1]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return yHex = ($receiver = yHex).klass === smalltalk.Number ? $receiver + 1 : smalltalk.send($receiver, "__plus", [1]);}]);}]);
    ($receiver = smalltalk.send(smalltalk.send(nb, "_\\\\", [3]), "__eq", [0])).klass === smalltalk.Boolean ? $receiver ? function () {return ($receiver = smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(nb2, "_\\\\", [2]), "__eq", [0]), "_&", [smalltalk.send(smalltalk.send(nb, "_\\\\", [6]), "__eq", [0])]), "_|", [smalltalk.send(smalltalk.send(smalltalk.send(nb2, "_mod_", [2]), "__eq", [1]), "_&", [smalltalk.send(smalltalk.send(nb, "_mod_", [6]), "__eq", [3])])])).klass === smalltalk.Boolean ? $receiver ? function () {nb3 = smalltalk.send(($receiver = ($receiver = ($receiver = ($receiver = ($receiver = ($receiver = y).klass === smalltalk.Number ? $receiver - (($receiver = cosothergridx).klass === smalltalk.Number ? $receiver / sinothergridx : smalltalk.send($receiver, "__slash", [sinothergridx])) : smalltalk.send($receiver, "__minus", [($receiver = cosothergridx).klass === smalltalk.Number ? $receiver / sinothergridx : smalltalk.send($receiver, "__slash", [sinothergridx])])).klass === smalltalk.Number ? $receiver * x : smalltalk.send($receiver, "__star", [x])).klass === smalltalk.Number ? $receiver - (($receiver = mapY).klass === smalltalk.Number ? $receiver + 0 : smalltalk.send($receiver, "__plus", [0])) : smalltalk.send($receiver, "__minus", [($receiver = mapY).klass === smalltalk.Number ? $receiver + 0 : smalltalk.send($receiver, "__plus", [0])])).klass === smalltalk.Number ? $receiver + (($receiver = cosothergridx).klass === smalltalk.Number ? $receiver / sinothergridx : smalltalk.send($receiver, "__slash", [sinothergridx])) : smalltalk.send($receiver, "__plus", [($receiver = cosothergridx).klass === smalltalk.Number ? $receiver / sinothergridx : smalltalk.send($receiver, "__slash", [sinothergridx])])).klass === smalltalk.Number ? $receiver * (($receiver = mapX).klass === smalltalk.Number ? $receiver + 301 : smalltalk.send($receiver, "__plus", [301])) : smalltalk.send($receiver, "__star", [($receiver = mapX).klass === smalltalk.Number ? $receiver + 301 : smalltalk.send($receiver, "__plus", [301])])).klass === smalltalk.Number ? $receiver / 68 * cosothergridx : smalltalk.send($receiver, "__slash", [68 * cosothergridx]), "_floor", []);nbCheck = ($receiver = 3 + 2 * yHex).klass === smalltalk.Number ? $receiver + smalltalk.send(xHex, "_\\\\", [2]) : smalltalk.send($receiver, "__plus", [smalltalk.send(xHex, "_\\\\", [2])]);return ($receiver = smalltalk.send(nb3, "__eq", [nbCheck])).klass === smalltalk.Boolean ? $receiver ? function () {return yHex = ($receiver = yHex).klass === smalltalk.Number ? $receiver - 1 : smalltalk.send($receiver, "__minus", [1]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return yHex = ($receiver = yHex).klass === smalltalk.Number ? $receiver - 1 : smalltalk.send($receiver, "__minus", [1]);}]);}() : function () {nb4 = smalltalk.send(($receiver = ($receiver = ($receiver = ($receiver = ($receiver = ($receiver = y).klass === smalltalk.Number ? $receiver - (($receiver = cosothergridy).klass === smalltalk.Number ? $receiver / sinothergridy : smalltalk.send($receiver, "__slash", [sinothergridy])) : smalltalk.send($receiver, "__minus", [($receiver = cosothergridy).klass === smalltalk.Number ? $receiver / sinothergridy : smalltalk.send($receiver, "__slash", [sinothergridy])])).klass === smalltalk.Number ? $receiver * x : smalltalk.send($receiver, "__star", [x])).klass === smalltalk.Number ? $receiver - (($receiver = mapY).klass === smalltalk.Number ? $receiver + 480 : smalltalk.send($receiver, "__plus", [480])) : smalltalk.send($receiver, "__minus", [($receiver = mapY).klass === smalltalk.Number ? $receiver + 480 : smalltalk.send($receiver, "__plus", [480])])).klass === smalltalk.Number ? $receiver + (($receiver = cosothergridy).klass === smalltalk.Number ? $receiver / sinothergridy : smalltalk.send($receiver, "__slash", [sinothergridy])) : smalltalk.send($receiver, "__plus", [($receiver = cosothergridy).klass === smalltalk.Number ? $receiver / sinothergridy : smalltalk.send($receiver, "__slash", [sinothergridy])])).klass === smalltalk.Number ? $receiver * (($receiver = mapX).klass === smalltalk.Number ? $receiver + 212.5 : smalltalk.send($receiver, "__plus", [212.5])) : smalltalk.send($receiver, "__star", [($receiver = mapX).klass === smalltalk.Number ? $receiver + 212.5 : smalltalk.send($receiver, "__plus", [212.5])])).klass === smalltalk.Number ? $receiver / 95.75 * cosothergridy : smalltalk.send($receiver, "__slash", [95.75 * cosothergridy]), "_floor", []);nbCheck = ($receiver = 7 - smalltalk.send(($receiver = 3 * xHex).klass === smalltalk.Number ? $receiver / 2 : smalltalk.send($receiver, "__slash", [2]), "_floor", [])).klass === smalltalk.Number ? $receiver + yHex : smalltalk.send($receiver, "__plus", [yHex]);return ($receiver = smalltalk.send(nb4, "__eq", [nbCheck])).klass === smalltalk.Boolean ? $receiver ? function () {($receiver = smalltalk.send(smalltalk.send(xHex, "_\\\\", [2]), "__eq", [0])).klass === smalltalk.Boolean ? $receiver ? function () {return yHex = ($receiver = yHex).klass === smalltalk.Number ? $receiver - 1 : smalltalk.send($receiver, "__minus", [1]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return yHex = ($receiver = yHex).klass === smalltalk.Number ? $receiver - 1 : smalltalk.send($receiver, "__minus", [1]);}]);return xHex = ($receiver = xHex).klass === smalltalk.Number ? $receiver + 1 : smalltalk.send($receiver, "__plus", [1]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {($receiver = smalltalk.send(smalltalk.send(xHex, "_\\\\", [2]), "__eq", [0])).klass === smalltalk.Boolean ? $receiver ? function () {return yHex = ($receiver = yHex).klass === smalltalk.Number ? $receiver - 1 : smalltalk.send($receiver, "__minus", [1]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return yHex = ($receiver = yHex).klass === smalltalk.Number ? $receiver - 1 : smalltalk.send($receiver, "__minus", [1]);}]);return xHex = ($receiver = xHex).klass === smalltalk.Number ? $receiver + 1 : smalltalk.send($receiver, "__plus", [1]);}]);}() : smalltalk.send($receiver, "_ifTrue_ifFalse_", [function () {nb3 = smalltalk.send(($receiver = ($receiver = ($receiver = ($receiver = ($receiver = ($receiver = y).klass === smalltalk.Number ? $receiver - (($receiver = cosothergridx).klass === smalltalk.Number ? $receiver / sinothergridx : smalltalk.send($receiver, "__slash", [sinothergridx])) : smalltalk.send($receiver, "__minus", [($receiver = cosothergridx).klass === smalltalk.Number ? $receiver / sinothergridx : smalltalk.send($receiver, "__slash", [sinothergridx])])).klass === smalltalk.Number ? $receiver * x : smalltalk.send($receiver, "__star", [x])).klass === smalltalk.Number ? $receiver - (($receiver = mapY).klass === smalltalk.Number ? $receiver + 0 : smalltalk.send($receiver, "__plus", [0])) : smalltalk.send($receiver, "__minus", [($receiver = mapY).klass === smalltalk.Number ? $receiver + 0 : smalltalk.send($receiver, "__plus", [0])])).klass === smalltalk.Number ? $receiver + (($receiver = cosothergridx).klass === smalltalk.Number ? $receiver / sinothergridx : smalltalk.send($receiver, "__slash", [sinothergridx])) : smalltalk.send($receiver, "__plus", [($receiver = cosothergridx).klass === smalltalk.Number ? $receiver / sinothergridx : smalltalk.send($receiver, "__slash", [sinothergridx])])).klass === smalltalk.Number ? $receiver * (($receiver = mapX).klass === smalltalk.Number ? $receiver + 301 : smalltalk.send($receiver, "__plus", [301])) : smalltalk.send($receiver, "__star", [($receiver = mapX).klass === smalltalk.Number ? $receiver + 301 : smalltalk.send($receiver, "__plus", [301])])).klass === smalltalk.Number ? $receiver / 68 * cosothergridx : smalltalk.send($receiver, "__slash", [68 * cosothergridx]), "_floor", []);nbCheck = ($receiver = 3 + 2 * yHex).klass === smalltalk.Number ? $receiver + smalltalk.send(xHex, "_\\\\", [2]) : smalltalk.send($receiver, "__plus", [smalltalk.send(xHex, "_\\\\", [2])]);return ($receiver = smalltalk.send(nb3, "__eq", [nbCheck])).klass === smalltalk.Boolean ? $receiver ? function () {return yHex = ($receiver = yHex).klass === smalltalk.Number ? $receiver - 1 : smalltalk.send($receiver, "__minus", [1]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return yHex = ($receiver = yHex).klass === smalltalk.Number ? $receiver - 1 : smalltalk.send($receiver, "__minus", [1]);}]);}, function () {nb4 = smalltalk.send(($receiver = ($receiver = ($receiver = ($receiver = ($receiver = ($receiver = y).klass === smalltalk.Number ? $receiver - (($receiver = cosothergridy).klass === smalltalk.Number ? $receiver / sinothergridy : smalltalk.send($receiver, "__slash", [sinothergridy])) : smalltalk.send($receiver, "__minus", [($receiver = cosothergridy).klass === smalltalk.Number ? $receiver / sinothergridy : smalltalk.send($receiver, "__slash", [sinothergridy])])).klass === smalltalk.Number ? $receiver * x : smalltalk.send($receiver, "__star", [x])).klass === smalltalk.Number ? $receiver - (($receiver = mapY).klass === smalltalk.Number ? $receiver + 480 : smalltalk.send($receiver, "__plus", [480])) : smalltalk.send($receiver, "__minus", [($receiver = mapY).klass === smalltalk.Number ? $receiver + 480 : smalltalk.send($receiver, "__plus", [480])])).klass === smalltalk.Number ? $receiver + (($receiver = cosothergridy).klass === smalltalk.Number ? $receiver / sinothergridy : smalltalk.send($receiver, "__slash", [sinothergridy])) : smalltalk.send($receiver, "__plus", [($receiver = cosothergridy).klass === smalltalk.Number ? $receiver / sinothergridy : smalltalk.send($receiver, "__slash", [sinothergridy])])).klass === smalltalk.Number ? $receiver * (($receiver = mapX).klass === smalltalk.Number ? $receiver + 212.5 : smalltalk.send($receiver, "__plus", [212.5])) : smalltalk.send($receiver, "__star", [($receiver = mapX).klass === smalltalk.Number ? $receiver + 212.5 : smalltalk.send($receiver, "__plus", [212.5])])).klass === smalltalk.Number ? $receiver / 95.75 * cosothergridy : smalltalk.send($receiver, "__slash", [95.75 * cosothergridy]), "_floor", []);nbCheck = ($receiver = 7 - smalltalk.send(($receiver = 3 * xHex).klass === smalltalk.Number ? $receiver / 2 : smalltalk.send($receiver, "__slash", [2]), "_floor", [])).klass === smalltalk.Number ? $receiver + yHex : smalltalk.send($receiver, "__plus", [yHex]);return ($receiver = smalltalk.send(nb4, "__eq", [nbCheck])).klass === smalltalk.Boolean ? $receiver ? function () {($receiver = smalltalk.send(smalltalk.send(xHex, "_\\\\", [2]), "__eq", [0])).klass === smalltalk.Boolean ? $receiver ? function () {return yHex = ($receiver = yHex).klass === smalltalk.Number ? $receiver - 1 : smalltalk.send($receiver, "__minus", [1]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return yHex = ($receiver = yHex).klass === smalltalk.Number ? $receiver - 1 : smalltalk.send($receiver, "__minus", [1]);}]);return xHex = ($receiver = xHex).klass === smalltalk.Number ? $receiver + 1 : smalltalk.send($receiver, "__plus", [1]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {($receiver = smalltalk.send(smalltalk.send(xHex, "_\\\\", [2]), "__eq", [0])).klass === smalltalk.Boolean ? $receiver ? function () {return yHex = ($receiver = yHex).klass === smalltalk.Number ? $receiver - 1 : smalltalk.send($receiver, "__minus", [1]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return yHex = ($receiver = yHex).klass === smalltalk.Number ? $receiver - 1 : smalltalk.send($receiver, "__minus", [1]);}]);return xHex = ($receiver = xHex).klass === smalltalk.Number ? $receiver + 1 : smalltalk.send($receiver, "__plus", [1]);}]);}]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return ($receiver = smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(nb2, "_\\\\", [2]), "__eq", [0]), "_&", [smalltalk.send(smalltalk.send(nb, "_\\\\", [6]), "__eq", [0])]), "_|", [smalltalk.send(smalltalk.send(smalltalk.send(nb2, "_mod_", [2]), "__eq", [1]), "_&", [smalltalk.send(smalltalk.send(nb, "_mod_", [6]), "__eq", [3])])])).klass === smalltalk.Boolean ? $receiver ? function () {nb3 = smalltalk.send(($receiver = ($receiver = ($receiver = ($receiver = ($receiver = ($receiver = y).klass === smalltalk.Number ? $receiver - (($receiver = cosothergridx).klass === smalltalk.Number ? $receiver / sinothergridx : smalltalk.send($receiver, "__slash", [sinothergridx])) : smalltalk.send($receiver, "__minus", [($receiver = cosothergridx).klass === smalltalk.Number ? $receiver / sinothergridx : smalltalk.send($receiver, "__slash", [sinothergridx])])).klass === smalltalk.Number ? $receiver * x : smalltalk.send($receiver, "__star", [x])).klass === smalltalk.Number ? $receiver - (($receiver = mapY).klass === smalltalk.Number ? $receiver + 0 : smalltalk.send($receiver, "__plus", [0])) : smalltalk.send($receiver, "__minus", [($receiver = mapY).klass === smalltalk.Number ? $receiver + 0 : smalltalk.send($receiver, "__plus", [0])])).klass === smalltalk.Number ? $receiver + (($receiver = cosothergridx).klass === smalltalk.Number ? $receiver / sinothergridx : smalltalk.send($receiver, "__slash", [sinothergridx])) : smalltalk.send($receiver, "__plus", [($receiver = cosothergridx).klass === smalltalk.Number ? $receiver / sinothergridx : smalltalk.send($receiver, "__slash", [sinothergridx])])).klass === smalltalk.Number ? $receiver * (($receiver = mapX).klass === smalltalk.Number ? $receiver + 301 : smalltalk.send($receiver, "__plus", [301])) : smalltalk.send($receiver, "__star", [($receiver = mapX).klass === smalltalk.Number ? $receiver + 301 : smalltalk.send($receiver, "__plus", [301])])).klass === smalltalk.Number ? $receiver / 68 * cosothergridx : smalltalk.send($receiver, "__slash", [68 * cosothergridx]), "_floor", []);nbCheck = ($receiver = 3 + 2 * yHex).klass === smalltalk.Number ? $receiver + smalltalk.send(xHex, "_\\\\", [2]) : smalltalk.send($receiver, "__plus", [smalltalk.send(xHex, "_\\\\", [2])]);return ($receiver = smalltalk.send(nb3, "__eq", [nbCheck])).klass === smalltalk.Boolean ? $receiver ? function () {return yHex = ($receiver = yHex).klass === smalltalk.Number ? $receiver - 1 : smalltalk.send($receiver, "__minus", [1]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return yHex = ($receiver = yHex).klass === smalltalk.Number ? $receiver - 1 : smalltalk.send($receiver, "__minus", [1]);}]);}() : function () {nb4 = smalltalk.send(($receiver = ($receiver = ($receiver = ($receiver = ($receiver = ($receiver = y).klass === smalltalk.Number ? $receiver - (($receiver = cosothergridy).klass === smalltalk.Number ? $receiver / sinothergridy : smalltalk.send($receiver, "__slash", [sinothergridy])) : smalltalk.send($receiver, "__minus", [($receiver = cosothergridy).klass === smalltalk.Number ? $receiver / sinothergridy : smalltalk.send($receiver, "__slash", [sinothergridy])])).klass === smalltalk.Number ? $receiver * x : smalltalk.send($receiver, "__star", [x])).klass === smalltalk.Number ? $receiver - (($receiver = mapY).klass === smalltalk.Number ? $receiver + 480 : smalltalk.send($receiver, "__plus", [480])) : smalltalk.send($receiver, "__minus", [($receiver = mapY).klass === smalltalk.Number ? $receiver + 480 : smalltalk.send($receiver, "__plus", [480])])).klass === smalltalk.Number ? $receiver + (($receiver = cosothergridy).klass === smalltalk.Number ? $receiver / sinothergridy : smalltalk.send($receiver, "__slash", [sinothergridy])) : smalltalk.send($receiver, "__plus", [($receiver = cosothergridy).klass === smalltalk.Number ? $receiver / sinothergridy : smalltalk.send($receiver, "__slash", [sinothergridy])])).klass === smalltalk.Number ? $receiver * (($receiver = mapX).klass === smalltalk.Number ? $receiver + 212.5 : smalltalk.send($receiver, "__plus", [212.5])) : smalltalk.send($receiver, "__star", [($receiver = mapX).klass === smalltalk.Number ? $receiver + 212.5 : smalltalk.send($receiver, "__plus", [212.5])])).klass === smalltalk.Number ? $receiver / 95.75 * cosothergridy : smalltalk.send($receiver, "__slash", [95.75 * cosothergridy]), "_floor", []);nbCheck = ($receiver = 7 - smalltalk.send(($receiver = 3 * xHex).klass === smalltalk.Number ? $receiver / 2 : smalltalk.send($receiver, "__slash", [2]), "_floor", [])).klass === smalltalk.Number ? $receiver + yHex : smalltalk.send($receiver, "__plus", [yHex]);return ($receiver = smalltalk.send(nb4, "__eq", [nbCheck])).klass === smalltalk.Boolean ? $receiver ? function () {($receiver = smalltalk.send(smalltalk.send(xHex, "_\\\\", [2]), "__eq", [0])).klass === smalltalk.Boolean ? $receiver ? function () {return yHex = ($receiver = yHex).klass === smalltalk.Number ? $receiver - 1 : smalltalk.send($receiver, "__minus", [1]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return yHex = ($receiver = yHex).klass === smalltalk.Number ? $receiver - 1 : smalltalk.send($receiver, "__minus", [1]);}]);return xHex = ($receiver = xHex).klass === smalltalk.Number ? $receiver + 1 : smalltalk.send($receiver, "__plus", [1]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {($receiver = smalltalk.send(smalltalk.send(xHex, "_\\\\", [2]), "__eq", [0])).klass === smalltalk.Boolean ? $receiver ? function () {return yHex = ($receiver = yHex).klass === smalltalk.Number ? $receiver - 1 : smalltalk.send($receiver, "__minus", [1]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return yHex = ($receiver = yHex).klass === smalltalk.Number ? $receiver - 1 : smalltalk.send($receiver, "__minus", [1]);}]);return xHex = ($receiver = xHex).klass === smalltalk.Number ? $receiver + 1 : smalltalk.send($receiver, "__plus", [1]);}]);}() : smalltalk.send($receiver, "_ifTrue_ifFalse_", [function () {nb3 = smalltalk.send(($receiver = ($receiver = ($receiver = ($receiver = ($receiver = ($receiver = y).klass === smalltalk.Number ? $receiver - (($receiver = cosothergridx).klass === smalltalk.Number ? $receiver / sinothergridx : smalltalk.send($receiver, "__slash", [sinothergridx])) : smalltalk.send($receiver, "__minus", [($receiver = cosothergridx).klass === smalltalk.Number ? $receiver / sinothergridx : smalltalk.send($receiver, "__slash", [sinothergridx])])).klass === smalltalk.Number ? $receiver * x : smalltalk.send($receiver, "__star", [x])).klass === smalltalk.Number ? $receiver - (($receiver = mapY).klass === smalltalk.Number ? $receiver + 0 : smalltalk.send($receiver, "__plus", [0])) : smalltalk.send($receiver, "__minus", [($receiver = mapY).klass === smalltalk.Number ? $receiver + 0 : smalltalk.send($receiver, "__plus", [0])])).klass === smalltalk.Number ? $receiver + (($receiver = cosothergridx).klass === smalltalk.Number ? $receiver / sinothergridx : smalltalk.send($receiver, "__slash", [sinothergridx])) : smalltalk.send($receiver, "__plus", [($receiver = cosothergridx).klass === smalltalk.Number ? $receiver / sinothergridx : smalltalk.send($receiver, "__slash", [sinothergridx])])).klass === smalltalk.Number ? $receiver * (($receiver = mapX).klass === smalltalk.Number ? $receiver + 301 : smalltalk.send($receiver, "__plus", [301])) : smalltalk.send($receiver, "__star", [($receiver = mapX).klass === smalltalk.Number ? $receiver + 301 : smalltalk.send($receiver, "__plus", [301])])).klass === smalltalk.Number ? $receiver / 68 * cosothergridx : smalltalk.send($receiver, "__slash", [68 * cosothergridx]), "_floor", []);nbCheck = ($receiver = 3 + 2 * yHex).klass === smalltalk.Number ? $receiver + smalltalk.send(xHex, "_\\\\", [2]) : smalltalk.send($receiver, "__plus", [smalltalk.send(xHex, "_\\\\", [2])]);return ($receiver = smalltalk.send(nb3, "__eq", [nbCheck])).klass === smalltalk.Boolean ? $receiver ? function () {return yHex = ($receiver = yHex).klass === smalltalk.Number ? $receiver - 1 : smalltalk.send($receiver, "__minus", [1]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return yHex = ($receiver = yHex).klass === smalltalk.Number ? $receiver - 1 : smalltalk.send($receiver, "__minus", [1]);}]);}, function () {nb4 = smalltalk.send(($receiver = ($receiver = ($receiver = ($receiver = ($receiver = ($receiver = y).klass === smalltalk.Number ? $receiver - (($receiver = cosothergridy).klass === smalltalk.Number ? $receiver / sinothergridy : smalltalk.send($receiver, "__slash", [sinothergridy])) : smalltalk.send($receiver, "__minus", [($receiver = cosothergridy).klass === smalltalk.Number ? $receiver / sinothergridy : smalltalk.send($receiver, "__slash", [sinothergridy])])).klass === smalltalk.Number ? $receiver * x : smalltalk.send($receiver, "__star", [x])).klass === smalltalk.Number ? $receiver - (($receiver = mapY).klass === smalltalk.Number ? $receiver + 480 : smalltalk.send($receiver, "__plus", [480])) : smalltalk.send($receiver, "__minus", [($receiver = mapY).klass === smalltalk.Number ? $receiver + 480 : smalltalk.send($receiver, "__plus", [480])])).klass === smalltalk.Number ? $receiver + (($receiver = cosothergridy).klass === smalltalk.Number ? $receiver / sinothergridy : smalltalk.send($receiver, "__slash", [sinothergridy])) : smalltalk.send($receiver, "__plus", [($receiver = cosothergridy).klass === smalltalk.Number ? $receiver / sinothergridy : smalltalk.send($receiver, "__slash", [sinothergridy])])).klass === smalltalk.Number ? $receiver * (($receiver = mapX).klass === smalltalk.Number ? $receiver + 212.5 : smalltalk.send($receiver, "__plus", [212.5])) : smalltalk.send($receiver, "__star", [($receiver = mapX).klass === smalltalk.Number ? $receiver + 212.5 : smalltalk.send($receiver, "__plus", [212.5])])).klass === smalltalk.Number ? $receiver / 95.75 * cosothergridy : smalltalk.send($receiver, "__slash", [95.75 * cosothergridy]), "_floor", []);nbCheck = ($receiver = 7 - smalltalk.send(($receiver = 3 * xHex).klass === smalltalk.Number ? $receiver / 2 : smalltalk.send($receiver, "__slash", [2]), "_floor", [])).klass === smalltalk.Number ? $receiver + yHex : smalltalk.send($receiver, "__plus", [yHex]);return ($receiver = smalltalk.send(nb4, "__eq", [nbCheck])).klass === smalltalk.Boolean ? $receiver ? function () {($receiver = smalltalk.send(smalltalk.send(xHex, "_\\\\", [2]), "__eq", [0])).klass === smalltalk.Boolean ? $receiver ? function () {return yHex = ($receiver = yHex).klass === smalltalk.Number ? $receiver - 1 : smalltalk.send($receiver, "__minus", [1]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return yHex = ($receiver = yHex).klass === smalltalk.Number ? $receiver - 1 : smalltalk.send($receiver, "__minus", [1]);}]);return xHex = ($receiver = xHex).klass === smalltalk.Number ? $receiver + 1 : smalltalk.send($receiver, "__plus", [1]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {($receiver = smalltalk.send(smalltalk.send(xHex, "_\\\\", [2]), "__eq", [0])).klass === smalltalk.Boolean ? $receiver ? function () {return yHex = ($receiver = yHex).klass === smalltalk.Number ? $receiver - 1 : smalltalk.send($receiver, "__minus", [1]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return yHex = ($receiver = yHex).klass === smalltalk.Number ? $receiver - 1 : smalltalk.send($receiver, "__minus", [1]);}]);return xHex = ($receiver = xHex).klass === smalltalk.Number ? $receiver + 1 : smalltalk.send($receiver, "__plus", [1]);}]);}]);}]);
    res = smalltalk.send(smalltalk.Array || Array, "_with_with_", [xHex, yHex]);
    return res;
    return self;
},
args: ["x", "y", "aMap"],
source: "oldAlgoMouseCoodToHexCoodX: x y: y inMap: aMap\x0a\x09\x22function that take mouse cood in pixel and return the coods of the tile selected\x22\x0a\x09\x0a\x09\x22there are issues from Amber kernel : the order of operations sometimes goes wrong in long lines\x22\x0a\x09\x22so this algo is back to javascript\x22\x0a\x0a\x09| xHex yHex cosmaingridx sinmaingridx cosmaingridy sinmaingridy cosothergridx sinothergridx cosothergridy sinothergridy nb nb2 nb3 nb4 nbCheck xConstante yConstante mapX mapY res temp1 temp2 k m|\x0a\x09cosmaingridx := 0.882947593.\x0a\x09sinmaingridx := 0.469471563.\x0a\x09cosmaingridy := 0.130526192 negated.\x0a\x09sinmaingridy := 0.991444861.\x0a\x0a\x09cosothergridx := 0.4539905.\x0a\x09sinothergridx := 0.891006524.\x0a\x09cosothergridy := 0.882947593 negated.\x0a\x09sinothergridy := 0.469471563.\x0a                \x0a\x09mapX := aMap mapX.\x0a\x09mapY := aMap mapY.\x0a\x09\x0a\x09nb := (y-(cosmaingridx/sinmaingridx*x)-mapY+0+(cosmaingridx/sinmaingridx*(mapX+320))/((55*cosmaingridx))) floor.\x0a\x09nb2 := (y-(cosmaingridy/sinmaingridy*x)-mapY+480+(cosmaingridy/sinmaingridy*(mapX+206))/(173.2*cosmaingridy)) floor.\x0a\x09\x0a\x09\x22temp1 := cosmaingridx/sinmaingridx.\x0a\x09temp2 := cosmaingridy/sinmaingridy.\x0a\x09\x0a\x09k := 55*cosmaingridx.\x0a\x09m := 173.2*cosmaingridy.\x22\x0a\x0a\x09\x22nb pb vient du denominateur a calculer avant\x22\x0a\x09\x22nb2 probleme d'origine inconnu\x22\x0a\x09\x22nb := (((y-(temp1*x)-mapY+(temp1*(mapX+320)))/(k))) floor.\x0a\x09nb2 := (((y-(temp2*x)-mapY+480+(temp2*(mapX+206)))/(m))) floor.\x0a\x09\x0a\x09Transcript show: 'ST : nb',nb,'---nb2',nb2.\x0a\x09Transcript show: 'ST : k',k,'---m',m.\x0a\x09Transcript show: 'ST : t1',temp1,'---t2',temp2; cr.\x22\x0a\x0a\x09\x22<temp1 = cosmaingridx/sinmaingridx;\x0a\x09temp2 = cosmaingridy/sinmaingridy;\x0a\x09k = 55*cosmaingridx;\x0a\x09m = 173.2*cosmaingridy;>\x22\x0a\x09\x22<nb = Math.floor(((y-(temp1)*x-(mapY+0)+(temp1)*(mapX+320))/(k)));\x0a\x09nb2 = Math.floor(((y-(temp2)*x-(mapY+480)+(temp2)*(mapX+206))/(m)));>.\x22\x0a\x0a\x09\x22Transcript show: 'JS : nb',nb,'---nb2',nb2.\x0a\x09Transcript show: 'JS : k',k,'---m',m.\x0a\x09Transcript show: 'JS : t1',temp1,'---t2',temp2; cr.\x22\x0a\x0a\x09xConstante := 9 + (nb mod: 3).\x0a\x09yConstante := 20 + (nb2 mod: 2).\x0a\x09(nb2\x5c\x5c2 = 0) ifTrue:[yConstante := yConstante + ((nb+1) mod: 2)].\x0a\x09\x0a\x09xHex := (xConstante-nb/6+(yConstante-nb2/2)) floor.\x0a\x09yHex := (nb-xConstante/4+(yConstante-nb2/4)) floor.\x0a\x09\x0a\x09(((nb mod: 6)=1) & ((nb2 \x5c\x5c 2)=0)) ifTrue:[\x0a\x09\x09xHex := xHex + 1.\x0a\x09\x09(((nb2 \x5c\x5c 4)=0) & (((nb mod: 12)=7) not)) ifTrue:[yHex := yHex + 1].\x0a\x09\x09(((nb2 mod: 4)=2) & ((nb mod: 12)=7)) ifTrue:[yHex := yHex + 1].\x0a\x09].\x0a\x09\x0a\x09((nb \x5c\x5c 3) = 0) ifTrue:[       \x0a\x09\x09((((nb2 \x5c\x5c 2) = 0) & ((nb \x5c\x5c 6)=0)) | (((nb2 mod: 2)=1) & ((nb mod: 6)=3))) ifTrue:[\x0a\x09\x09\x09nb3 := ((y-(cosothergridx/sinothergridx)*x-(mapY+0)+(cosothergridx/sinothergridx)*(mapX+301))/(68*cosothergridx)) floor.\x0a\x09\x09\x09nbCheck := 3 + (2 * yHex) +(xHex \x5c\x5c 2).\x0a\x09\x09\x09(nb3 = nbCheck) ifTrue:[yHex := yHex - 1].\x0a\x09\x09]\x0a\x09\x09ifFalse:[\x0a\x09\x09\x09nb4 :=((y-(cosothergridy/sinothergridy)*x-(mapY+480)+(cosothergridy/sinothergridy)*(mapX+212.5))/(95.75*cosothergridy)) floor.\x0a\x09\x09\x09nbCheck := 7 -((3*xHex/2) floor) + yHex.\x0a\x09\x09\x09(nb4 = nbCheck) ifTrue:[\x0a\x09\x09\x09\x09((xHex \x5c\x5c 2) = 0) ifTrue:[yHex := yHex - 1].\x0a\x09\x09\x09\x09xHex := xHex + 1.\x0a\x09\x09\x09].\x0a\x09\x09].\x0a\x09].\x0a\x09\x0a\x09res := Array with: xHex with: yHex.\x0a\x09\x0a\x09^res",
messageSends: ["negated", "mapX", "mapY", "floor", "/", "+", "-", "*", "mod:", "ifTrue:", "=", "\x5c\x5c\x5c\x5c", "&", "not", "ifTrue:ifFalse:", "|", "with:with:"],
referencedClasses: ["Array"]
}),
smalltalk.HexMouse);

smalltalk.addMethod(
"_updateCoods_inMap_",
smalltalk.method({
selector: "updateCoods:inMap:",
category: 'coods',
fn: function (anEvent, aMap) {
    var self = this;
    var x = nil;
    var y = nil;
    var cood = nil;
    var canvas = nil;
    canvas = smalltalk.send(smalltalk.send(aMap, "_canvas", []), "_element", []);
    x = ($receiver = smalltalk.send(anEvent, "_pageX", [])).klass === smalltalk.Number ? $receiver - smalltalk.send(canvas, "_offsetLeft", []) : smalltalk.send($receiver, "__minus", [smalltalk.send(canvas, "_offsetLeft", [])]);
    y = ($receiver = smalltalk.send(anEvent, "_pageY", [])).klass === smalltalk.Number ? $receiver - smalltalk.send(canvas, "_offsetTop", []) : smalltalk.send($receiver, "__minus", [smalltalk.send(canvas, "_offsetTop", [])]);
    cood = smalltalk.send(self, "_mouseCoodToHexCoodX_y_inMap_", [x, y, aMap]);
    smalltalk.send(function () {return smalltalk.send(self, "_cell_", [smalltalk.send(smalltalk.send(smalltalk.send(aMap, "_cells", []), "_at_", [smalltalk.send(cood, "_at_", [1])]), "_at_", [smalltalk.send(cood, "_at_", [2])])]);}, "_on_do_", [smalltalk.Error || Error, function () {return smalltalk.send(self, "_cell_", [nil]);}]);
    return self;
},
args: ["anEvent", "aMap"],
source: "updateCoods: anEvent inMap: aMap\x0a\x09|x y cood canvas|\x0a\x09\x0a\x09canvas := aMap canvas element.\x0a\x0a        x := anEvent pageX - canvas offsetLeft.\x0a        y := anEvent pageY - canvas offsetTop.\x0a\x0a        cood := self mouseCoodToHexCoodX: x y: y inMap: aMap.\x0a\x09\x09\x0a\x09\x22if out of map then nil\x22\x0a\x09[self cell:((aMap cells at: (cood at: 1)) at: (cood at: 2))] on: Error do: [self cell: nil].\x0a\x09\x0a\x09\x22Transcript show: '[',x,'-',y,']'; cr.\x0a\x09Transcript show: '[',xCell,'-',yCell,']'; cr.\x22",
messageSends: ["element", "canvas", "-", "pageX", "offsetLeft", "pageY", "offsetTop", "mouseCoodToHexCoodX:y:inMap:", "on:do:", "cell:", "at:", "cells"],
referencedClasses: ["Error"]
}),
smalltalk.HexMouse);


smalltalk.HexMouse.klass.iVarNames = ['hexMouse'];
smalltalk.addMethod(
"_getSingleton",
smalltalk.method({
selector: "getSingleton",
category: 'initialize-release',
fn: function () {
    var self = this;
    return ($receiver = self['@hexMouse']) == nil || $receiver == undefined ? function () {return self['@hexMouse'] = smalltalk.send(self, "_new", []);}() : $receiver;
    return self;
},
args: [],
source: "getSingleton\x0a\x09^hexMouse ifNil:[hexMouse := self new.]",
messageSends: ["ifNil:", "new"],
referencedClasses: []
}),
smalltalk.HexMouse.klass);


