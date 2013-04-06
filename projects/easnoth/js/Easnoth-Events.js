smalltalk.addPackage('Easnoth-Events');
smalltalk.addClass('CWEventManager', smalltalk.Object, ['canvas'], 'Easnoth-Events');
smalltalk.addMethod(
smalltalk.method({
selector: "canvas",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@canvas"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"canvas",{},smalltalk.CWEventManager)})},
args: [],
source: "canvas\x0a\x09^ canvas",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWEventManager);

smalltalk.addMethod(
smalltalk.method({
selector: "canvas:",
category: 'accessing',
fn: function (aCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@canvas"]=aCanvas;
return self}, function($ctx1) {$ctx1.fill(self,"canvas:",{aCanvas:aCanvas},smalltalk.CWEventManager)})},
args: ["aCanvas"],
source: "canvas: aCanvas\x0a\x09canvas := aCanvas",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWEventManager);

smalltalk.addMethod(
smalltalk.method({
selector: "canvasId",
category: 'initialize-release',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "#eventManager";
}, function($ctx1) {$ctx1.fill(self,"canvasId",{},smalltalk.CWEventManager)})},
args: [],
source: "canvasId\x0a\x09^ '#eventManager'",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWEventManager);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function (){
var self=this;
function $HTMLCanvas(){return smalltalk.HTMLCanvas||(typeof HTMLCanvas=="undefined"?nil:HTMLCanvas)}
function $TagBrush(){return smalltalk.TagBrush||(typeof TagBrush=="undefined"?nil:TagBrush)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.Object.fn.prototype._initialize.apply(_st(self), []);
_st(self)._canvas_(_st($TagBrush())._fromJQuery_canvas_(_st(_st(self)._canvasId())._asJQuery(),_st($HTMLCanvas())._onJQuery_(_st("body")._asJQuery())));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.CWEventManager)})},
args: [],
source: "initialize\x0a\x09super initialize. \x0a\x09self canvas: (TagBrush fromJQuery: self canvasId asJQuery canvas: (HTMLCanvas onJQuery: 'body' asJQuery)).",
messageSends: ["initialize", "canvas:", "fromJQuery:canvas:", "asJQuery", "canvasId", "onJQuery:"],
referencedClasses: ["HTMLCanvas", "TagBrush"]
}),
smalltalk.CWEventManager);



smalltalk.addClass('CWGameBoard', smalltalk.Object, ['map', 'drawer', 'menu'], 'Easnoth-Events');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function (){
var self=this;
function $CWDrawer(){return smalltalk.CWDrawer||(typeof CWDrawer=="undefined"?nil:CWDrawer)}
function $FightMenu(){return smalltalk.FightMenu||(typeof FightMenu=="undefined"?nil:FightMenu)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.Object.fn.prototype._initialize.apply(_st(self), []);
self["@drawer"]=_st($CWDrawer())._new();
self["@menu"]=_st($FightMenu())._newFor_(self);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.CWGameBoard)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09drawer := CWDrawer new.\x0a\x09menu := FightMenu newFor: self",
messageSends: ["initialize", "new", "newFor:"],
referencedClasses: ["CWDrawer", "FightMenu"]
}),
smalltalk.CWGameBoard);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeMapWithIndex:",
category: 'initialize-release',
fn: function (index){
var self=this;
function $CWMap(){return smalltalk.CWMap||(typeof CWMap=="undefined"?nil:CWMap)}
return smalltalk.withContext(function($ctx1) { 
self["@map"]=_st($CWMap())._newWithMapIndex_(index);
return self}, function($ctx1) {$ctx1.fill(self,"initializeMapWithIndex:",{index:index},smalltalk.CWGameBoard)})},
args: ["index"],
source: "initializeMapWithIndex: index\x0a\x09map := CWMap newWithMapIndex: index.",
messageSends: ["newWithMapIndex:"],
referencedClasses: ["CWMap"]
}),
smalltalk.CWGameBoard);


smalltalk.addMethod(
smalltalk.method({
selector: "newWithMapIndex:",
category: 'instance creation',
fn: function (index){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._new())._initializeMapWithIndex_(index);
return $1;
}, function($ctx1) {$ctx1.fill(self,"newWithMapIndex:",{index:index},smalltalk.CWGameBoard.klass)})},
args: ["index"],
source: "newWithMapIndex: index\x0a\x09^ self new initializeMapWithIndex: index",
messageSends: ["initializeMapWithIndex:", "new"],
referencedClasses: []
}),
smalltalk.CWGameBoard.klass);


