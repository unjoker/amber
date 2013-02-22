smalltalk.addPackage('Easnoth-EventManagers', {});
smalltalk.addClass('EventManager', smalltalk.Object, ['map', 'hexMouse'], 'Easnoth-EventManagers');
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
    smalltalk.send(self, "_subclassResponsibility", []);
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


smalltalk.addClass('FightEventManager', smalltalk.EventManager, [], 'Easnoth-EventManagers');


smalltalk.addClass('MultiPlayerFightEventManager', smalltalk.FightEventManager, [], 'Easnoth-EventManagers');


smalltalk.addClass('SinglePlayerFightEventManager', smalltalk.FightEventManager, [], 'Easnoth-EventManagers');


smalltalk.addClass('MapEditorEventManager', smalltalk.EventManager, ['drawedObjectType'], 'Easnoth-EventManagers');
smalltalk.addMethod(
"_drawedObjectNextEvent",
smalltalk.method({
selector: "drawedObjectNextEvent",
fn: function () {
    var self = this;
    return self;
}
}),
smalltalk.MapEditorEventManager);

smalltalk.addMethod(
"_drawedObjectPreviousEvent",
smalltalk.method({
selector: "drawedObjectPreviousEvent",
fn: function () {
    var self = this;
    return self;
}
}),
smalltalk.MapEditorEventManager);

smalltalk.addMethod(
"_drawedObjectType",
smalltalk.method({
selector: "drawedObjectType",
fn: function () {
    var self = this;
    return self['@drawedObjectType'];
    return self;
}
}),
smalltalk.MapEditorEventManager);

smalltalk.addMethod(
"_drawedObjectType_",
smalltalk.method({
selector: "drawedObjectType:",
fn: function (aType) {
    var self = this;
    self['@drawedObjectType'] = aType;
    return self;
}
}),
smalltalk.MapEditorEventManager);

smalltalk.addMethod(
"_handleCanvasEvents",
smalltalk.method({
selector: "handleCanvasEvents",
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(smalltalk.send(self, "_map", []), "_canvas", []), "_onClick_", [function () {return smalltalk.send(self, "_mouseClick", []);}]);
    smalltalk.send(smalltalk.send(smalltalk.send(self, "_map", []), "_canvas", []), "_onMouseMove_", [function (e) {return smalltalk.send(self, "_mouseMove_", [e]);}]);
    return self;
}
}),
smalltalk.MapEditorEventManager);

smalltalk.addMethod(
"_handleDrawedObjectNextEvent",
smalltalk.method({
selector: "handleDrawedObjectNextEvent",
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(smalltalk.send(".next", "_asJQuery", []), "_at_", [0]), "_at_put_", ["onclick", function () {return smalltalk.send(self, "_drawedObjectNextEvent", []);}]);
    return self;
}
}),
smalltalk.MapEditorEventManager);

smalltalk.addMethod(
"_handleDrawedObjectPreviousEvent",
smalltalk.method({
selector: "handleDrawedObjectPreviousEvent",
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(smalltalk.send(".previous", "_asJQuery", []), "_at_", [0]), "_at_put_", ["onclick", function () {return smalltalk.send(self, "_drawedObjectPreviousEvent", []);}]);
    return self;
}
}),
smalltalk.MapEditorEventManager);

smalltalk.addMethod(
"_handleDrawedObjectRadioButtonEvent",
smalltalk.method({
selector: "handleDrawedObjectRadioButtonEvent",
fn: function () {
    var self = this;
    var drawedObjectRadioButton = nil;
    drawedObjectRadioButton = smalltalk.send(".radioDrawedObjectType", "_asJQuery", []);
    smalltalk.send(smalltalk.send(0, "_to_", [3]), "_do_", [function (i) {return smalltalk.send(smalltalk.send(drawedObjectRadioButton, "_at_", [i]), "_at_put_", ["onclick", function () {return smalltalk.send(self, "_radioDrawedObjectEvent_", [smalltalk.send(smalltalk.send(drawedObjectRadioButton, "_at_", [i]), "_at_", ["value"])]);}]);}]);
    return self;
}
}),
smalltalk.MapEditorEventManager);

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
    return self;
}
}),
smalltalk.MapEditorEventManager);

smalltalk.addMethod(
"_handleMenuEvents",
smalltalk.method({
selector: "handleMenuEvents",
fn: function () {
    var self = this;
    smalltalk.send(self, "_handleDrawedObjectRadioButtonEvent", []);
    smalltalk.send(self, "_handleMapEvent", []);
    smalltalk.send(self, "_handleDrawedObjectNextEvent", []);
    smalltalk.send(self, "_handleDrawedObjectPreviousEvent", []);
    return self;
}
}),
smalltalk.MapEditorEventManager);

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
smalltalk.MapEditorEventManager);

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
smalltalk.MapEditorEventManager);

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
smalltalk.MapEditorEventManager);

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
smalltalk.MapEditorEventManager);

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
smalltalk.MapEditorEventManager);

smalltalk.addMethod(
"_menuToInstantiate",
smalltalk.method({
selector: "menuToInstantiate",
fn: function () {
    var self = this;
    return smalltalk.MenuEditor || MenuEditor;
    return self;
}
}),
smalltalk.MapEditorEventManager);

smalltalk.addMethod(
"_mouseClick",
smalltalk.method({
selector: "mouseClick",
fn: function () {
    var self = this;
    smalltalk.send(function () {return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_map", []), "_cells", []), "_at_", [smalltalk.send(smalltalk.send(self, "_hexMouse", []), "_xCell", [])]), "_at_", [smalltalk.send(smalltalk.send(self, "_hexMouse", []), "_yCell", [])]), "_drawedObjects_", [smalltalk.send(smalltalk.Array || Array, "_withAll_", [[nil, nil, nil, nil, nil, nil, nil, nil]])]);}, "_on_do_", [smalltalk.Error || Error, function () {return nil;}]);
    smalltalk.send(smalltalk.send(self, "_map", []), "_update", []);
    return self;
}
}),
smalltalk.MapEditorEventManager);

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
smalltalk.MapEditorEventManager);

smalltalk.addMethod(
"_radioDrawedObjectEvent_",
smalltalk.method({
selector: "radioDrawedObjectEvent:",
fn: function (radioButtonValue) {
    var self = this;
    smalltalk.send(self, "_drawedObjectType_", [radioButtonValue]);
    smalltalk.send(smalltalk.send(smalltalk.send(".imageEdited", "_asJQuery", []), "_at_", [0]), "_at_put_", ["src", "ressources/images/monsters/shyde.png"]);
    return self;
}
}),
smalltalk.MapEditorEventManager);



