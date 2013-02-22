smalltalk.addPackage('Easnoth-MapEditor', {});
smalltalk.addClass('MapEditorEventManager', smalltalk.EventManager, ['drawedObjectType'], 'Easnoth-MapEditor');
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
"_handleMenuEvents",
smalltalk.method({
selector: "handleMenuEvents",
fn: function () {
    var self = this;
    smalltalk.send(self, "_handleDrawedObjectRadioButtonEvent", []);
    smalltalk.send(self, "_handleDrawedObjectNextEvent", []);
    smalltalk.send(self, "_handleDrawedObjectPreviousEvent", []);
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
    smalltalk.send(function () {return smalltalk.send(smalltalk.send(smalltalk.send(self, "_hexMouse", []), "_cell", []), "_drawedObjects_", [smalltalk.send(smalltalk.Array || Array, "_withAll_", [[nil, nil, nil, nil, nil, nil, nil, nil]])]);}, "_on_do_", [smalltalk.Error || Error, function () {return nil;}]);
    smalltalk.send(smalltalk.send(self, "_map", []), "_update", []);
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



