smalltalk.addPackage('Easnoth-Menu');
smalltalk.addClass('CWWidget', smalltalk.Widget, ['parent'], 'Easnoth-Menu');
smalltalk.addMethod(
smalltalk.method({
selector: "isRoot",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isRoot",{},smalltalk.CWWidget)})},
args: [],
source: "isRoot\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWWidget);



smalltalk.addClass('CWActionMenu', smalltalk.CWWidget, ['components'], 'Easnoth-Menu');
smalltalk.addMethod(
smalltalk.method({
selector: "addComponent:",
category: 'children management',
fn: function (aComponent){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._components())._add_(aComponent);
_st(aComponent)._parent_(self);
return self}, function($ctx1) {$ctx1.fill(self,"addComponent:",{aComponent:aComponent},smalltalk.CWActionMenu)})},
args: ["aComponent"],
source: "addComponent: aComponent\x0a\x09self components add: aComponent.\x0a\x09aComponent parent: self",
messageSends: ["add:", "components", "parent:"],
referencedClasses: []
}),
smalltalk.CWActionMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "components",
category: 'children management',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@components"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"components",{},smalltalk.CWActionMenu)})},
args: [],
source: "components\x0a\x09^ components",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWActionMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function (){
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
_st(self)._components_(_st($Array())._new());
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.CWActionMenu)})},
args: [],
source: "initialize\x0a\x09self components: Array new",
messageSends: ["components:", "new"],
referencedClasses: ["Array"]
}),
smalltalk.CWActionMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "isRoot",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isRoot",{},smalltalk.CWActionMenu)})},
args: [],
source: "isRoot\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWActionMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._components())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._renderOn_(html);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.CWActionMenu)})},
args: ["html"],
source: "renderOn: html\x0a\x09self components do: [:each |\x0a\x09\x09each renderOn: html ].",
messageSends: ["do:", "renderOn:", "components"],
referencedClasses: []
}),
smalltalk.CWActionMenu);



smalltalk.addClass('CWFightMenu', smalltalk.CWActionMenu, [], 'Easnoth-Menu');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function (){
var self=this;
function $CWMonsterWatcher(){return smalltalk.CWMonsterWatcher||(typeof CWMonsterWatcher=="undefined"?nil:CWMonsterWatcher)}
function $CWDices(){return smalltalk.CWDices||(typeof CWDices=="undefined"?nil:CWDices)}
function $CWTileWatcher(){return smalltalk.CWTileWatcher||(typeof CWTileWatcher=="undefined"?nil:CWTileWatcher)}
function $CWMapControls(){return smalltalk.CWMapControls||(typeof CWMapControls=="undefined"?nil:CWMapControls)}
function $CWTurnWatcher(){return smalltalk.CWTurnWatcher||(typeof CWTurnWatcher=="undefined"?nil:CWTurnWatcher)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.CWActionMenu.fn.prototype._initialize.apply(_st(self), []);
_st(self)._addComponent_(_st($CWMonsterWatcher())._new());
_st(self)._addComponent_(_st($CWDices())._new());
_st(self)._addComponent_(_st($CWTileWatcher())._new());
_st(self)._addComponent_(_st($CWMapControls())._new());
_st(self)._addComponent_(_st($CWTurnWatcher())._new());
_st(self)._appendToJQuery_(_st(_st(self)._menuClass())._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.CWFightMenu)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self addComponent: CWMonsterWatcher new.\x0a\x09self addComponent: CWDices new.\x0a\x09self addComponent: CWTileWatcher new.\x0a\x09self addComponent: CWMapControls new.\x0a\x09self addComponent: CWTurnWatcher new.\x0a\x09self appendToJQuery: self menuClass asJQuery.",
messageSends: ["initialize", "addComponent:", "new", "appendToJQuery:", "asJQuery", "menuClass"],
referencedClasses: ["CWMonsterWatcher", "CWDices", "CWTileWatcher", "CWMapControls", "CWTurnWatcher"]
}),
smalltalk.CWFightMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "menuClass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return ".menuEditor";
}, function($ctx1) {$ctx1.fill(self,"menuClass",{},smalltalk.CWFightMenu)})},
args: [],
source: "menuClass\x0a\x09^ '.menuEditor'",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWFightMenu);



smalltalk.addClass('CWActionMenuComponent', smalltalk.CWWidget, [], 'Easnoth-Menu');


