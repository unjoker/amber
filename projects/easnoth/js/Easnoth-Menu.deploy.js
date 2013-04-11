smalltalk.addPackage('Easnoth-Menu');
smalltalk.addClass('CWWidget', smalltalk.Widget, ['parent'], 'Easnoth-Menu');
smalltalk.addMethod(
smalltalk.method({
selector: "isRoot",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isRoot",{},smalltalk.CWWidget)})},
messageSends: []}),
smalltalk.CWWidget);



smalltalk.addClass('CWActionMenu', smalltalk.CWWidget, ['components'], 'Easnoth-Menu');
smalltalk.addMethod(
smalltalk.method({
selector: "addComponent:",
fn: function (aComponent){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._components())._add_(aComponent);
_st(aComponent)._parent_(self);
return self}, function($ctx1) {$ctx1.fill(self,"addComponent:",{aComponent:aComponent},smalltalk.CWActionMenu)})},
messageSends: ["add:", "components", "parent:"]}),
smalltalk.CWActionMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "components",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@components"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"components",{},smalltalk.CWActionMenu)})},
messageSends: []}),
smalltalk.CWActionMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
_st(self)._components_(_st($Array())._new());
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.CWActionMenu)})},
messageSends: ["components:", "new"]}),
smalltalk.CWActionMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "isRoot",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isRoot",{},smalltalk.CWActionMenu)})},
messageSends: []}),
smalltalk.CWActionMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._components())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._renderOn_(html);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.CWActionMenu)})},
messageSends: ["do:", "renderOn:", "components"]}),
smalltalk.CWActionMenu);



smalltalk.addClass('CWFightMenu', smalltalk.CWActionMenu, [], 'Easnoth-Menu');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
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
messageSends: ["initialize", "addComponent:", "new", "appendToJQuery:", "asJQuery", "menuClass"]}),
smalltalk.CWFightMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "menuClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return ".menuEditor";
}, function($ctx1) {$ctx1.fill(self,"menuClass",{},smalltalk.CWFightMenu)})},
messageSends: []}),
smalltalk.CWFightMenu);



smalltalk.addClass('CWActionMenuComponent', smalltalk.CWWidget, [], 'Easnoth-Menu');


