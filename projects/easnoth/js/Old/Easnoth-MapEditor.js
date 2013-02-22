smalltalk.addPackage('Easnoth-MapEditor', {});
smalltalk.addClass('MapEditorEventManager', smalltalk.EventManager, ['drawedObjectType'], 'Easnoth-MapEditor');
smalltalk.MapEditorEventManager.comment="\x22EventHandler that permits to edit a map\x22"
smalltalk.addMethod(
"_drawedObjectNextEvent",
smalltalk.method({
selector: "drawedObjectNextEvent",
category: 'eventHandling',
fn: function () {
    var self = this;
    return self;
},
args: [],
source: "drawedObjectNextEvent",
messageSends: [],
referencedClasses: []
}),
smalltalk.MapEditorEventManager);

smalltalk.addMethod(
"_drawedObjectPreviousEvent",
smalltalk.method({
selector: "drawedObjectPreviousEvent",
category: 'eventHandling',
fn: function () {
    var self = this;
    return self;
},
args: [],
source: "drawedObjectPreviousEvent",
messageSends: [],
referencedClasses: []
}),
smalltalk.MapEditorEventManager);

smalltalk.addMethod(
"_drawedObjectType",
smalltalk.method({
selector: "drawedObjectType",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@drawedObjectType'];
    return self;
},
args: [],
source: "drawedObjectType\x0a\x09^drawedObjectType",
messageSends: [],
referencedClasses: []
}),
smalltalk.MapEditorEventManager);

smalltalk.addMethod(
"_drawedObjectType_",
smalltalk.method({
selector: "drawedObjectType:",
category: 'accessing',
fn: function (aType) {
    var self = this;
    self['@drawedObjectType'] = aType;
    return self;
},
args: ["aType"],
source: "drawedObjectType: aType\x0a\x09drawedObjectType := aType",
messageSends: [],
referencedClasses: []
}),
smalltalk.MapEditorEventManager);

smalltalk.addMethod(
"_handleDrawedObjectNextEvent",
smalltalk.method({
selector: "handleDrawedObjectNextEvent",
category: 'initialize-eventHandling',
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(smalltalk.send(".next", "_asJQuery", []), "_at_", [0]), "_at_put_", ["onclick", function () {return smalltalk.send(self, "_drawedObjectNextEvent", []);}]);
    return self;
},
args: [],
source: "handleDrawedObjectNextEvent\x0a\x09('.next' asJQuery at: 0) at: 'onclick' put: [self drawedObjectNextEvent]",
messageSends: ["at:put:", "at:", "asJQuery", "drawedObjectNextEvent"],
referencedClasses: []
}),
smalltalk.MapEditorEventManager);

smalltalk.addMethod(
"_handleDrawedObjectPreviousEvent",
smalltalk.method({
selector: "handleDrawedObjectPreviousEvent",
category: 'initialize-eventHandling',
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(smalltalk.send(".previous", "_asJQuery", []), "_at_", [0]), "_at_put_", ["onclick", function () {return smalltalk.send(self, "_drawedObjectPreviousEvent", []);}]);
    return self;
},
args: [],
source: "handleDrawedObjectPreviousEvent\x0a\x09('.previous' asJQuery at: 0) at: 'onclick' put: [self drawedObjectPreviousEvent]",
messageSends: ["at:put:", "at:", "asJQuery", "drawedObjectPreviousEvent"],
referencedClasses: []
}),
smalltalk.MapEditorEventManager);

smalltalk.addMethod(
"_handleDrawedObjectRadioButtonEvent",
smalltalk.method({
selector: "handleDrawedObjectRadioButtonEvent",
category: 'initialize-eventHandling',
fn: function () {
    var self = this;
    var drawedObjectRadioButton = nil;
    drawedObjectRadioButton = smalltalk.send(".radioDrawedObjectType", "_asJQuery", []);
    smalltalk.send(smalltalk.send(0, "_to_", [3]), "_do_", [function (i) {return smalltalk.send(smalltalk.send(drawedObjectRadioButton, "_at_", [i]), "_at_put_", ["onclick", function () {return smalltalk.send(self, "_radioDrawedObjectEvent_", [smalltalk.send(smalltalk.send(drawedObjectRadioButton, "_at_", [i]), "_at_", ["value"])]);}]);}]);
    return self;
},
args: [],
source: "handleDrawedObjectRadioButtonEvent\x0a\x09|drawedObjectRadioButton|\x0a\x09drawedObjectRadioButton := '.radioDrawedObjectType' asJQuery.\x0a\x0a\x09(0 to: 3) do: [:i |\x0a\x09\x09(drawedObjectRadioButton at: i) at: 'onclick' put: [\x0a\x09\x09\x09self radioDrawedObjectEvent: ((drawedObjectRadioButton at: i) at: 'value')\x0a\x09\x09]\x0a\x09]",
messageSends: ["asJQuery", "do:", "to:", "at:put:", "at:", "radioDrawedObjectEvent:"],
referencedClasses: []
}),
smalltalk.MapEditorEventManager);

smalltalk.addMethod(
"_handleMenuEvents",
smalltalk.method({
selector: "handleMenuEvents",
category: 'initialize-eventHandling',
fn: function () {
    var self = this;
    smalltalk.send(self, "_handleDrawedObjectRadioButtonEvent", []);
    smalltalk.send(self, "_handleDrawedObjectNextEvent", []);
    smalltalk.send(self, "_handleDrawedObjectPreviousEvent", []);
    return self;
},
args: [],
source: "handleMenuEvents\x0a\x09self handleDrawedObjectRadioButtonEvent.\x0a\x09self handleDrawedObjectNextEvent.\x0a\x09self handleDrawedObjectPreviousEvent",
messageSends: ["handleDrawedObjectRadioButtonEvent", "handleDrawedObjectNextEvent", "handleDrawedObjectPreviousEvent"],
referencedClasses: []
}),
smalltalk.MapEditorEventManager);

smalltalk.addMethod(
"_menuToInstantiate",
smalltalk.method({
selector: "menuToInstantiate",
category: 'initialize-release',
fn: function () {
    var self = this;
    return smalltalk.MenuEditor || MenuEditor;
    return self;
},
args: [],
source: "menuToInstantiate\x0a\x09^MenuEditor",
messageSends: [],
referencedClasses: ["MenuEditor"]
}),
smalltalk.MapEditorEventManager);

smalltalk.addMethod(
"_mouseClick",
smalltalk.method({
selector: "mouseClick",
category: 'eventHandling',
fn: function () {
    var self = this;
    smalltalk.send(function () {return smalltalk.send(smalltalk.send(smalltalk.send(self, "_hexMouse", []), "_cell", []), "_drawedObjects_", [smalltalk.send(smalltalk.Array || Array, "_withAll_", [[nil, nil, nil, nil, nil, nil, nil, nil]])]);}, "_on_do_", [smalltalk.Error || Error, function () {return nil;}]);
    smalltalk.send(smalltalk.send(self, "_map", []), "_update", []);
    return self;
},
args: [],
source: "mouseClick\x0a\x09\x22TO DO\x22\x0a\x09\x22Test it delete the cell\x22\x0a\x09[self hexMouse cell drawedObjects:  (Array withAll: #(nil nil nil nil nil nil nil nil))] on: Error do:[\x22out of map\x22].\x0a\x09self map update.",
messageSends: ["on:do:", "drawedObjects:", "cell", "hexMouse", "withAll:", "update", "map"],
referencedClasses: ["Array", "Error"]
}),
smalltalk.MapEditorEventManager);

smalltalk.addMethod(
"_radioDrawedObjectEvent_",
smalltalk.method({
selector: "radioDrawedObjectEvent:",
category: 'eventHandling',
fn: function (radioButtonValue) {
    var self = this;
    smalltalk.send(self, "_drawedObjectType_", [radioButtonValue]);
    smalltalk.send(smalltalk.send(smalltalk.send(".imageEdited", "_asJQuery", []), "_at_", [0]), "_at_put_", ["src", "ressources/images/monsters/shyde.png"]);
    return self;
},
args: ["radioButtonValue"],
source: "radioDrawedObjectEvent: radioButtonValue\x0a\x0a\x09self drawedObjectType: radioButtonValue.\x0a\x09('.imageEdited' asJQuery at:0) at: 'src' put: 'ressources/images/monsters/shyde.png'.",
messageSends: ["drawedObjectType:", "at:put:", "at:", "asJQuery"],
referencedClasses: []
}),
smalltalk.MapEditorEventManager);



