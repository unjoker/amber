smalltalk.addPackage('Easnoth-EventManagers', {});
smalltalk.addClass('EventManager', smalltalk.Object, ['map', 'hexMouse'], 'Easnoth-EventManagers');
smalltalk.EventManager.comment="\x22abstract EventHandler\x22"
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
    smalltalk.send(self, "_subclassResponsibility", []);
    return self;
},
args: [],
source: "initializeEventManagement\x0a\x09\x22has not to belong to initialize directly because need map to be set before \x22\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
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


smalltalk.addClass('FightEventManager', smalltalk.EventManager, [], 'Easnoth-EventManagers');


smalltalk.addClass('MultiPlayerFightEventManager', smalltalk.FightEventManager, [], 'Easnoth-EventManagers');


smalltalk.addClass('SinglePlayerFightEventManager', smalltalk.FightEventManager, [], 'Easnoth-EventManagers');


smalltalk.addClass('MapEditorEventManager', smalltalk.EventManager, ['drawedObjectType'], 'Easnoth-EventManagers');
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
"_handleCanvasEvents",
smalltalk.method({
selector: "handleCanvasEvents",
category: 'initialize-eventHandling',
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(smalltalk.send(self, "_map", []), "_canvas", []), "_onClick_", [function () {return smalltalk.send(self, "_mouseClick", []);}]);
    smalltalk.send(smalltalk.send(smalltalk.send(self, "_map", []), "_canvas", []), "_onMouseMove_", [function (e) {return smalltalk.send(self, "_mouseMove_", [e]);}]);
    return self;
},
args: [],
source: "handleCanvasEvents\x0a\x09self map canvas onClick: [self mouseClick].\x0a\x09self map canvas onMouseMove: [:e | self mouseMove: e].",
messageSends: ["onClick:", "canvas", "map", "mouseClick", "onMouseMove:", "mouseMove:"],
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
    return self;
},
args: [],
source: "handleMapEvent\x0a\x09('.up' asJQuery at: 0) at: 'onclick' put: [self mapUpEvent].\x0a\x09('.left' asJQuery at: 0) at: 'onclick' put: [self mapLeftEvent].\x0a\x09('.right' asJQuery at: 0) at: 'onclick' put: [self mapRightEvent].\x0a\x09('.down' asJQuery at: 0) at: 'onclick' put: [self mapDownEvent].",
messageSends: ["at:put:", "at:", "asJQuery", "mapUpEvent", "mapLeftEvent", "mapRightEvent", "mapDownEvent"],
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
    smalltalk.send(self, "_handleMapEvent", []);
    smalltalk.send(self, "_handleDrawedObjectNextEvent", []);
    smalltalk.send(self, "_handleDrawedObjectPreviousEvent", []);
    return self;
},
args: [],
source: "handleMenuEvents\x0a\x09self handleDrawedObjectRadioButtonEvent.\x0a\x09self handleMapEvent.\x0a\x09self handleDrawedObjectNextEvent.\x0a\x09self handleDrawedObjectPreviousEvent",
messageSends: ["handleDrawedObjectRadioButtonEvent", "handleMapEvent", "handleDrawedObjectNextEvent", "handleDrawedObjectPreviousEvent"],
referencedClasses: []
}),
smalltalk.MapEditorEventManager);

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
source: "initializeEventManagement\x0a\x09self handleCanvasEvents.\x0a\x09self handleMenuEvents.",
messageSends: ["handleCanvasEvents", "handleMenuEvents"],
referencedClasses: []
}),
smalltalk.MapEditorEventManager);

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
smalltalk.MapEditorEventManager);

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
smalltalk.MapEditorEventManager);

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
smalltalk.MapEditorEventManager);

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
    smalltalk.send(function () {return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_map", []), "_cells", []), "_at_", [smalltalk.send(smalltalk.send(self, "_hexMouse", []), "_xCell", [])]), "_at_", [smalltalk.send(smalltalk.send(self, "_hexMouse", []), "_yCell", [])]), "_drawedObjects_", [smalltalk.send(smalltalk.Array || Array, "_withAll_", [[nil, nil, nil, nil, nil, nil, nil, nil]])]);}, "_on_do_", [smalltalk.Error || Error, function () {return nil;}]);
    smalltalk.send(smalltalk.send(self, "_map", []), "_update", []);
    return self;
},
args: [],
source: "mouseClick\x0a\x09\x22TO DO\x22\x0a\x09\x22Test it delete the cell\x22\x0a\x09\x22plz test if cell selected in array before doing that\x22\x0a\x09[((self map cells at: self hexMouse xCell) at: self hexMouse yCell) drawedObjects:  (Array withAll: #(nil nil nil nil nil nil nil nil))] on: Error do:[].\x0a\x09self map update.",
messageSends: ["on:do:", "drawedObjects:", "at:", "cells", "map", "xCell", "hexMouse", "yCell", "withAll:", "update"],
referencedClasses: ["Array", "Error"]
}),
smalltalk.MapEditorEventManager);

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



