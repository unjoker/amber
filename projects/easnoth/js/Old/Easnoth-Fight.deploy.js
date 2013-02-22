smalltalk.addPackage('Easnoth-Fight', {});
smalltalk.addClass('EventManager', smalltalk.Object, ['map', 'hexMouse'], 'Easnoth-Fight');
smalltalk.addMethod(
"_handleCanvasEvents",
smalltalk.method({
selector: "handleCanvasEvents",
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(smalltalk.send(self, "_map", []), "_canvas", []), "_onClick_", [function () {return smalltalk.send(self, "_mouseClick", []);}]);
    smalltalk.send(smalltalk.send(smalltalk.send(self, "_map", []), "_canvas", []), "_onMouseMove_", [function (e) {return smalltalk.send(self, "_mouseMove_", [e]);}]);
    smalltalk.send(self, "_handleMapEvent", []);
    return self;
}
}),
smalltalk.EventManager);

smalltalk.addMethod(
"_handleMapEvent",
smalltalk.method({
selector: "handleMapEvent",
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(smalltalk.send(".up", "_asJQuery", []), "_at_", [0]), "_at_put_", ["onclick", function () {return smalltalk.send(self, "_mapUpEvent", []);}]);
    smalltalk.send(smalltalk.send(smalltalk.send(".left", "_asJQuery", []), "_at_", [0]), "_at_put_", ["onclick", function () {return smalltalk.send(self, "_mapLeftEvent", []);}]);
    smalltalk.send(smalltalk.send(smalltalk.send(".right", "_asJQuery", []), "_at_", [0]), "_at_put_", ["onclick", function () {return smalltalk.send(self, "_mapRightEvent", []);}]);
    smalltalk.send(smalltalk.send(smalltalk.send(".down", "_asJQuery", []), "_at_", [0]), "_at_put_", ["onclick", function () {return smalltalk.send(self, "_mapDownEvent", []);}]);
    smalltalk.send(smalltalk.send(smalltalk.send(".mirrorHorizontal", "_asJQuery", []), "_at_", [0]), "_at_put_", ["onclick", function () {return smalltalk.send(self, "_mapMirrorHorizontalEvent", []);}]);
    smalltalk.send(smalltalk.send(smalltalk.send(".mirrorVertical", "_asJQuery", []), "_at_", [0]), "_at_put_", ["onclick", function () {return smalltalk.send(self, "_mapMirrorVerticalEvent", []);}]);
    return self;
}
}),
smalltalk.EventManager);

smalltalk.addMethod(
"_handleMenuEvents",
smalltalk.method({
selector: "handleMenuEvents",
fn: function () {
    var self = this;
    smalltalk.send(self, "_subclassResponsibility", []);
    return self;
}
}),
smalltalk.EventManager);

smalltalk.addMethod(
"_hexMouse",
smalltalk.method({
selector: "hexMouse",
fn: function () {
    var self = this;
    return self['@hexMouse'];
    return self;
}
}),
smalltalk.EventManager);

smalltalk.addMethod(
"_hexMouse_",
smalltalk.method({
selector: "hexMouse:",
fn: function (aMouse) {
    var self = this;
    self['@hexMouse'] = aMouse;
    return self;
}
}),
smalltalk.EventManager);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function () {
    var self = this;
    smalltalk.send(self, "_hexMouse_", [smalltalk.send(smalltalk.HexMouse || HexMouse, "_getSingleton", [])]);
    return self;
}
}),
smalltalk.EventManager);

smalltalk.addMethod(
"_initializeEventManagement",
smalltalk.method({
selector: "initializeEventManagement",
fn: function () {
    var self = this;
    smalltalk.send(self, "_handleCanvasEvents", []);
    smalltalk.send(self, "_handleMenuEvents", []);
    return self;
}
}),
smalltalk.EventManager);

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
smalltalk.EventManager);

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
smalltalk.EventManager);

smalltalk.addMethod(
"_mapDownEvent",
smalltalk.method({
selector: "mapDownEvent",
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_map", []), "_mapY_", [($receiver = smalltalk.send(smalltalk.send(self, "_map", []), "_mapY", [])).klass === smalltalk.Number ? $receiver + 10 : smalltalk.send($receiver, "__plus", [10])]);
    smalltalk.send(smalltalk.send(self, "_map", []), "_update", []);
    return self;
}
}),
smalltalk.EventManager);

smalltalk.addMethod(
"_mapLeftEvent",
smalltalk.method({
selector: "mapLeftEvent",
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_map", []), "_mapX_", [($receiver = smalltalk.send(smalltalk.send(self, "_map", []), "_mapX", [])).klass === smalltalk.Number ? $receiver - 10 : smalltalk.send($receiver, "__minus", [10])]);
    smalltalk.send(smalltalk.send(self, "_map", []), "_update", []);
    return self;
}
}),
smalltalk.EventManager);

smalltalk.addMethod(
"_mapMirrorHorizontalEvent",
smalltalk.method({
selector: "mapMirrorHorizontalEvent",
fn: function () {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_translate_y_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_map", []), "_canvas", []), "_element", []), "_width", []), 0]);return smalltalk.send($rec, "_scale_y_", [smalltalk.send(1, "_negated", []), 1]);}(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_map", []), "_canvas", []), "_element", []), "_getContext_", ["2d"])));
    smalltalk.send(smalltalk.send(self, "_map", []), "_update", []);
    return self;
}
}),
smalltalk.EventManager);

smalltalk.addMethod(
"_mapMirrorVerticalEvent",
smalltalk.method({
selector: "mapMirrorVerticalEvent",
fn: function () {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_translate_y_", [0, smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_map", []), "_canvas", []), "_element", []), "_height", [])]);return smalltalk.send($rec, "_scale_y_", [1, smalltalk.send(1, "_negated", [])]);}(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_map", []), "_canvas", []), "_element", []), "_getContext_", ["2d"])));
    smalltalk.send(smalltalk.send(self, "_map", []), "_update", []);
    return self;
}
}),
smalltalk.EventManager);

smalltalk.addMethod(
"_mapRightEvent",
smalltalk.method({
selector: "mapRightEvent",
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_map", []), "_mapX_", [($receiver = smalltalk.send(smalltalk.send(self, "_map", []), "_mapX", [])).klass === smalltalk.Number ? $receiver + 10 : smalltalk.send($receiver, "__plus", [10])]);
    smalltalk.send(smalltalk.send(self, "_map", []), "_update", []);
    return self;
}
}),
smalltalk.EventManager);

smalltalk.addMethod(
"_mapUpEvent",
smalltalk.method({
selector: "mapUpEvent",
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_map", []), "_mapY_", [($receiver = smalltalk.send(smalltalk.send(self, "_map", []), "_mapY", [])).klass === smalltalk.Number ? $receiver - 10 : smalltalk.send($receiver, "__minus", [10])]);
    smalltalk.send(smalltalk.send(self, "_map", []), "_update", []);
    return self;
}
}),
smalltalk.EventManager);

smalltalk.addMethod(
"_menuToInstantiate",
smalltalk.method({
selector: "menuToInstantiate",
fn: function () {
    var self = this;
    smalltalk.send(self, "_subClassResponsibility", []);
    return self;
}
}),
smalltalk.EventManager);

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
smalltalk.EventManager);

smalltalk.addMethod(
"_mouseMove_",
smalltalk.method({
selector: "mouseMove:",
fn: function (anEvent) {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_hexMouse", []), "_updateCoods_inMap_", [anEvent, smalltalk.send(self, "_map", [])]);
    return self;
}
}),
smalltalk.EventManager);


smalltalk.EventManager.klass.iVarNames = ['eventManager'];
smalltalk.addMethod(
"_getSingleton",
smalltalk.method({
selector: "getSingleton",
fn: function () {
    var self = this;
    return ($receiver = self['@eventManager']) == nil ||
        $receiver == undefined ? function () {return self['@eventManager'] = smalltalk.send(self, "_new", []);}() : $receiver;
    return self;
}
}),
smalltalk.EventManager.klass);

smalltalk.addMethod(
"_newWithMapIndex_",
smalltalk.method({
selector: "newWithMapIndex:",
fn: function (aMapIndex) {
    var self = this;
    return function ($rec) {smalltalk.send($rec, "_map_", [smalltalk.send(smalltalk.Map || Map, "_newWithMapIndex_", [aMapIndex])]);smalltalk.send($rec, "_initializeEventManagement", []);return smalltalk.send($rec, "_yourself", []);}(smalltalk.send(self, "_getSingleton", []));
    return self;
}
}),
smalltalk.EventManager.klass);


smalltalk.addClass('FightEventManager', smalltalk.EventManager, ['selectedCells', 'selectedCell', 'state', 'sidePlaying'], 'Easnoth-Fight');
smalltalk.addMethod(
"_handleMenuEvents",
smalltalk.method({
selector: "handleMenuEvents",
fn: function () {
    var self = this;
    return self;
}
}),
smalltalk.FightEventManager);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function () {
    var self = this;
    smalltalk.send(self, "_initialize", [], smalltalk.FightEventManager.superclass || nil);
    smalltalk.send(self, "_state_", [smalltalk.send(smalltalk.RegularState || RegularState, "_getStateFor_", [self])]);
    smalltalk.send(self, "_sidePlaying_", [1]);
    return self;
}
}),
smalltalk.FightEventManager);

smalltalk.addMethod(
"_mouseClick",
smalltalk.method({
selector: "mouseClick",
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_map", []), "_removeSelection", []);
    smalltalk.send(smalltalk.send(self, "_state", []), "_mouseClick", []);
    smalltalk.send(smalltalk.send(self, "_map", []), "_update", []);
    return self;
}
}),
smalltalk.FightEventManager);

smalltalk.addMethod(
"_selectCells",
smalltalk.method({
selector: "selectCells",
fn: function () {
    var self = this;
    var selectedCell = nil;
    self['@selectedCell'] = smalltalk.send(smalltalk.send(self, "_hexMouse", []), "_cell", []);
    ($receiver = self['@selectedCell']) != nil &&
        $receiver != undefined ? function () {return ($receiver = smalltalk.send(self['@selectedCell'], "_hasMonster", [])).klass === smalltalk.Boolean ? $receiver ? function () {smalltalk.send(self, "_selectedCells_", [smalltalk.send(self['@selectedCell'], "_selectableNeighboursInMap_side_", [smalltalk.send(self, "_map", []), smalltalk.send(self, "_sidePlaying", [])])]);return smalltalk.send(smalltalk.send(self, "_map", []), "_addSelection_", [smalltalk.send(self, "_selectedCells", [])]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {smalltalk.send(self, "_selectedCells_", [smalltalk.send(self['@selectedCell'], "_selectableNeighboursInMap_side_", [smalltalk.send(self, "_map", []), smalltalk.send(self, "_sidePlaying", [])])]);return smalltalk.send(smalltalk.send(self, "_map", []), "_addSelection_", [smalltalk.send(self, "_selectedCells", [])]);}]);}() : nil;
    return self;
}
}),
smalltalk.FightEventManager);

smalltalk.addMethod(
"_selectedCell",
smalltalk.method({
selector: "selectedCell",
fn: function () {
    var self = this;
    return self['@selectedCell'];
    return self;
}
}),
smalltalk.FightEventManager);

smalltalk.addMethod(
"_selectedCell_",
smalltalk.method({
selector: "selectedCell:",
fn: function (aCell) {
    var self = this;
    self['@selectedCell'] = aCell;
    return self;
}
}),
smalltalk.FightEventManager);

smalltalk.addMethod(
"_selectedCells",
smalltalk.method({
selector: "selectedCells",
fn: function () {
    var self = this;
    return self['@selectedCells'];
    return self;
}
}),
smalltalk.FightEventManager);

smalltalk.addMethod(
"_selectedCells_",
smalltalk.method({
selector: "selectedCells:",
fn: function (aCellCollection) {
    var self = this;
    self['@selectedCells'] = aCellCollection;
    return self;
}
}),
smalltalk.FightEventManager);

smalltalk.addMethod(
"_sidePlaying",
smalltalk.method({
selector: "sidePlaying",
fn: function () {
    var self = this;
    return self['@sidePlaying'];
    return self;
}
}),
smalltalk.FightEventManager);

smalltalk.addMethod(
"_sidePlaying_",
smalltalk.method({
selector: "sidePlaying:",
fn: function (aSide) {
    var self = this;
    self['@sidePlaying'] = aSide;
    return self;
}
}),
smalltalk.FightEventManager);

smalltalk.addMethod(
"_state",
smalltalk.method({
selector: "state",
fn: function () {
    var self = this;
    return self['@state'];
    return self;
}
}),
smalltalk.FightEventManager);

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
fn: function () {
    var self = this;
    return self['@eventManager'];
    return self;
}
}),
smalltalk.FightState);

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
smalltalk.FightState);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function () {
    var self = this;
    smalltalk.send(self, "_eventManager_", [smalltalk.send(smalltalk.EventManager || EventManager, "_getSingleton", [])]);
    return self;
}
}),
smalltalk.FightState);

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
smalltalk.FightState);


smalltalk.FightState.klass.iVarNames = ['state'];
smalltalk.addMethod(
"_getStateFor_",
smalltalk.method({
selector: "getStateFor:",
fn: function (anEventManager) {
    var self = this;
    return ($receiver = self['@state']) == nil || $receiver == undefined ? function () {return self['@state'] = smalltalk.send(smalltalk.send(self, "_new", []), "_eventManager_", [anEventManager]);}() : $receiver;
    return self;
}
}),
smalltalk.FightState.klass);


smalltalk.addClass('AlreadyAttackState', smalltalk.FightState, [], 'Easnoth-Fight');


smalltalk.addClass('AlreadyMoveState', smalltalk.FightState, [], 'Easnoth-Fight');


smalltalk.addClass('RegularState', smalltalk.FightState, [], 'Easnoth-Fight');
smalltalk.addMethod(
"_mouseClick",
smalltalk.method({
selector: "mouseClick",
fn: function () {
    var self = this;
    var ev = nil;
    ev = smalltalk.send(self, "_eventManager", []);
    smalltalk.send(ev, "_selectCells", []);
    smalltalk.send(ev, "_state_", [smalltalk.send(smalltalk.RegularStateSelectionDone || RegularStateSelectionDone, "_getStateFor_", [ev])]);
    return self;
}
}),
smalltalk.RegularState);



smalltalk.addClass('RegularStateSelectionDone', smalltalk.FightState, [], 'Easnoth-Fight');
smalltalk.addMethod(
"_mouseClick",
smalltalk.method({
selector: "mouseClick",
fn: function () {
    var self = this;
    var ev = nil;
    var cellClicked = nil;
    ev = smalltalk.send(self, "_eventManager", []);
    cellClicked = smalltalk.send(smalltalk.send(smalltalk.send(self, "_eventManager", []), "_hexMouse", []), "_cell", []);
    ($receiver = cellClicked) != nil && $receiver != undefined ? function () {return ($receiver = smalltalk.send(cellClicked, "_hasSelector", [])).klass === smalltalk.Boolean ? $receiver ? function () {return ($receiver = smalltalk.send(cellClicked, "_hasGreenSelector", [])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(smalltalk.send(self, "_ev", []), "_moveMonster", []);}() : function () {return nil;}() : smalltalk.send($receiver, "_ifTrue_ifFalse_", [function () {return smalltalk.send(smalltalk.send(self, "_ev", []), "_moveMonster", []);}, function () {return nil;}]);}() : function () {smalltalk.send(ev, "_state_", [smalltalk.send(smalltalk.RegularState || RegularState, "_getStateFor_", [ev])]);return smalltalk.send(smalltalk.send(ev, "_state", []), "_mouseClick", []);}() : smalltalk.send($receiver, "_ifTrue_ifFalse_", [function () {return ($receiver = smalltalk.send(cellClicked, "_hasGreenSelector", [])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(smalltalk.send(self, "_ev", []), "_moveMonster", []);}() : function () {return nil;}() : smalltalk.send($receiver, "_ifTrue_ifFalse_", [function () {return smalltalk.send(smalltalk.send(self, "_ev", []), "_moveMonster", []);}, function () {return nil;}]);}, function () {smalltalk.send(ev, "_state_", [smalltalk.send(smalltalk.RegularState || RegularState, "_getStateFor_", [ev])]);return smalltalk.send(smalltalk.send(ev, "_state", []), "_mouseClick", []);}]);}() : nil;
    return self;
}
}),
smalltalk.RegularStateSelectionDone);



smalltalk.addClass('HexMouse', smalltalk.Object, ['cell'], 'Easnoth-Fight');
smalltalk.addMethod(
"_cell",
smalltalk.method({
selector: "cell",
fn: function () {
    var self = this;
    return self['@cell'];
    return self;
}
}),
smalltalk.HexMouse);

smalltalk.addMethod(
"_cell_",
smalltalk.method({
selector: "cell:",
fn: function (aCell) {
    var self = this;
    self['@cell'] = aCell;
    return self;
}
}),
smalltalk.HexMouse);

smalltalk.addMethod(
"_mouseCoodToHexCoodX_y_inMap_",
smalltalk.method({
selector: "mouseCoodToHexCoodX:y:inMap:",
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
}
}),
smalltalk.HexMouse);

smalltalk.addMethod(
"_oldAlgoMouseCoodToHexCoodX_y_inMap_",
smalltalk.method({
selector: "oldAlgoMouseCoodToHexCoodX:y:inMap:",
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
}
}),
smalltalk.HexMouse);

smalltalk.addMethod(
"_updateCoods_inMap_",
smalltalk.method({
selector: "updateCoods:inMap:",
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
}
}),
smalltalk.HexMouse);


smalltalk.HexMouse.klass.iVarNames = ['hexMouse'];
smalltalk.addMethod(
"_getSingleton",
smalltalk.method({
selector: "getSingleton",
fn: function () {
    var self = this;
    return ($receiver = self['@hexMouse']) == nil || $receiver == undefined ? function () {return self['@hexMouse'] = smalltalk.send(self, "_new", []);}() : $receiver;
    return self;
}
}),
smalltalk.HexMouse.klass);


