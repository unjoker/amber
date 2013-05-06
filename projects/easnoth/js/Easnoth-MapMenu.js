smalltalk.addPackage('Easnoth-MapMenu');
smalltalk.addClass('CWWidget', smalltalk.Widget, ['parent'], 'Easnoth-MapMenu');
smalltalk.addMethod(
smalltalk.method({
selector: "announce:",
category: 'events',
fn: function (anEvent){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._announcer())._announce_(anEvent);
return self}, function($ctx1) {$ctx1.fill(self,"announce:",{anEvent:anEvent},smalltalk.CWWidget)})},
args: ["anEvent"],
source: "announce: anEvent\x0a\x09self announcer announce: anEvent",
messageSends: ["announce:", "announcer"],
referencedClasses: []
}),
smalltalk.CWWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "announcer",
category: 'accessing',
fn: function (){
var self=this;
function $CWEasnothAnnouncer(){return smalltalk.CWEasnothAnnouncer||(typeof CWEasnothAnnouncer=="undefined"?nil:CWEasnothAnnouncer)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($CWEasnothAnnouncer())._current();
return $1;
}, function($ctx1) {$ctx1.fill(self,"announcer",{},smalltalk.CWWidget)})},
args: [],
source: "announcer\x0a\x09^ CWEasnothAnnouncer current",
messageSends: ["current"],
referencedClasses: ["CWEasnothAnnouncer"]
}),
smalltalk.CWWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "children",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"children",{},smalltalk.CWWidget)})},
args: [],
source: "children\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.CWWidget);

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

smalltalk.addMethod(
smalltalk.method({
selector: "parent",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@parent"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"parent",{},smalltalk.CWWidget)})},
args: [],
source: "parent\x0a\x09^ parent",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "parent:",
category: 'accessing',
fn: function (object){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@parent"]=object;
return self}, function($ctx1) {$ctx1.fill(self,"parent:",{object:object},smalltalk.CWWidget)})},
args: ["object"],
source: "parent: object\x0a\x09parent := object",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "root",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=_st(self)._isRoot();
if(smalltalk.assert($1)){
$2=self;
return $2;
};
$3=_st(_st(self)._parent())._root();
return $3;
}, function($ctx1) {$ctx1.fill(self,"root",{},smalltalk.CWWidget)})},
args: [],
source: "root\x0a\x09self isRoot ifTrue: [ ^ self ].\x0a\x09^ self parent root",
messageSends: ["ifTrue:", "isRoot", "root", "parent"],
referencedClasses: []
}),
smalltalk.CWWidget);



smalltalk.addClass('CWActionMenu', smalltalk.CWWidget, ['components'], 'Easnoth-MapMenu');
smalltalk.addMethod(
smalltalk.method({
selector: "addComponent:",
category: 'accessing',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._components())._add_(_st(self)._newChild_(aClass));
return self}, function($ctx1) {$ctx1.fill(self,"addComponent:",{aClass:aClass},smalltalk.CWActionMenu)})},
args: ["aClass"],
source: "addComponent: aClass\x0a\x09self components add: (self newChild: aClass)",
messageSends: ["add:", "newChild:", "components"],
referencedClasses: []
}),
smalltalk.CWActionMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "children",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._components();
return $1;
}, function($ctx1) {$ctx1.fill(self,"children",{},smalltalk.CWActionMenu)})},
args: [],
source: "children\x0a\x09^ self components",
messageSends: ["components"],
referencedClasses: []
}),
smalltalk.CWActionMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "components",
category: 'accessing',
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
smalltalk.CWWidget.fn.prototype._initialize.apply(_st(self), []);
self["@components"]=_st($Array())._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.CWActionMenu)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09components := Array new",
messageSends: ["initialize", "new"],
referencedClasses: ["Array"]
}),
smalltalk.CWActionMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeWithGame:",
category: 'initialize-release',
fn: function (aGame){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"initializeWithGame:",{aGame:aGame},smalltalk.CWActionMenu)})},
args: ["aGame"],
source: "initializeWithGame: aGame\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
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
selector: "newChild:",
category: 'factory',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(aClass)._new())._parent_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"newChild:",{aClass:aClass},smalltalk.CWActionMenu)})},
args: ["aClass"],
source: "newChild: aClass\x0a\x09^ aClass new parent: self",
messageSends: ["parent:", "new"],
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



smalltalk.addClass('CWFightMenu', smalltalk.CWActionMenu, [], 'Easnoth-MapMenu');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function (){
var self=this;
function $CWMonsterWatcher(){return smalltalk.CWMonsterWatcher||(typeof CWMonsterWatcher=="undefined"?nil:CWMonsterWatcher)}
function $CWDices(){return smalltalk.CWDices||(typeof CWDices=="undefined"?nil:CWDices)}
function $CWMapControls(){return smalltalk.CWMapControls||(typeof CWMapControls=="undefined"?nil:CWMapControls)}
function $CWTurnWatcher(){return smalltalk.CWTurnWatcher||(typeof CWTurnWatcher=="undefined"?nil:CWTurnWatcher)}
function $CWEndGameEvent(){return smalltalk.CWEndGameEvent||(typeof CWEndGameEvent=="undefined"?nil:CWEndGameEvent)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.CWActionMenu.fn.prototype._initialize.apply(_st(self), []);
_st(self)._addComponent_($CWMonsterWatcher());
_st(self)._addComponent_($CWDices());
_st(self)._addComponent_($CWMapControls());
_st(self)._addComponent_($CWTurnWatcher());
_st(self)._appendToJQuery_(_st(_st(self)._menuClass())._asJQuery());
_st(_st(self)._announcer())._on_do_($CWEndGameEvent(),(function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(_st(self)._menuClass())._asJQuery())._empty();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.CWFightMenu)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self addComponent: CWMonsterWatcher.\x0a\x09self addComponent: CWDices.\x0a\x09self addComponent: CWMapControls.\x0a\x09self addComponent: CWTurnWatcher.\x0a\x09self appendToJQuery: self menuClass asJQuery.\x0a\x09self announcer\x0a\x09\x09on: CWEndGameEvent\x0a\x09\x09do: [ self menuClass asJQuery empty ]",
messageSends: ["initialize", "addComponent:", "appendToJQuery:", "asJQuery", "menuClass", "on:do:", "empty", "announcer"],
referencedClasses: ["CWMonsterWatcher", "CWDices", "CWMapControls", "CWTurnWatcher", "CWEndGameEvent"]
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



smalltalk.addClass('CWActionMenuComponent', smalltalk.CWWidget, [], 'Easnoth-MapMenu');
smalltalk.addMethod(
smalltalk.method({
selector: "children",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=[];
return $1;
}, function($ctx1) {$ctx1.fill(self,"children",{},smalltalk.CWActionMenuComponent)})},
args: [],
source: "children\x0a\x09^ #()",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWActionMenuComponent);



smalltalk.addClass('CWDices', smalltalk.CWActionMenuComponent, ['box'], 'Easnoth-MapMenu');
smalltalk.CWDices.comment="SHOULD HAVE DICES AS IV AND THEN USE NORMAL TREE STUFF TO DRAW."
smalltalk.addMethod(
smalltalk.method({
selector: "firstLoad",
category: 'initialize-release',
fn: function (){
var self=this;
function $CWDiceDeath(){return smalltalk.CWDiceDeath||(typeof CWDiceDeath=="undefined"?nil:CWDiceDeath)}
function $CWDiceMiss(){return smalltalk.CWDiceMiss||(typeof CWDiceMiss=="undefined"?nil:CWDiceMiss)}
return smalltalk.withContext(function($ctx1) { 
_st(self["@box"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) {
_st(_st(html)._h4())._with_("Fight result");
_st(_st($CWDiceDeath())._new())._renderOn_callback_(html,(function(){
return smalltalk.withContext(function($ctx3) {
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
return _st(_st($CWDiceMiss())._new())._renderOn_callback_(html,(function(){
return smalltalk.withContext(function($ctx3) {
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"firstLoad",{},smalltalk.CWDices)})},
args: [],
source: "firstLoad\x0a    box contents: [ :html | \x0a\x09html h4 with: 'Fight result'.\x0a           CWDiceDeath new renderOn: html callback: [ ].\x0a           CWDiceMiss new renderOn: html callback: [ ] ].",
messageSends: ["contents:", "with:", "h4", "renderOn:callback:", "new"],
referencedClasses: ["CWDiceDeath", "CWDiceMiss"]
}),
smalltalk.CWDices);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function (){
var self=this;
function $CWDicesRolledEvent(){return smalltalk.CWDicesRolledEvent||(typeof CWDicesRolledEvent=="undefined"?nil:CWDicesRolledEvent)}
function $CWMonsterUpdateEvent(){return smalltalk.CWMonsterUpdateEvent||(typeof CWMonsterUpdateEvent=="undefined"?nil:CWMonsterUpdateEvent)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.CWActionMenuComponent.fn.prototype._initialize.apply(_st(self), []);
_st(_st(self)._announcer())._on_do_($CWDicesRolledEvent(),(function(event){
return smalltalk.withContext(function($ctx2) {
return _st(self)._showDices_(event);
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1)})}));
_st(_st(self)._announcer())._on_do_($CWMonsterUpdateEvent(),(function(event){
return smalltalk.withContext(function($ctx2) {
return _st(self)._showDicesNoAnimation_(_st(event)._monster());
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.CWDices)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self announcer \x0a\x09\x09on: CWDicesRolledEvent\x0a\x09\x09do: [ :event | self showDices: event ].\x0a\x09self announcer \x0a\x09\x09on: CWMonsterUpdateEvent\x0a\x09\x09do: [ :event | self showDicesNoAnimation: event monster ]",
messageSends: ["initialize", "on:do:", "showDices:", "announcer", "showDicesNoAnimation:", "monster"],
referencedClasses: ["CWDicesRolledEvent", "CWMonsterUpdateEvent"]
}),
smalltalk.CWDices);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
category: 'initialize-release',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._div();
_st($1)._class_("dices");
$2=_st($1)._yourself();
self["@box"]=$2;
_st(self)._firstLoad();
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.CWDices)})},
args: ["html"],
source: "renderOn: html\x0a\x09box := (html div \x0a\x09\x09class: 'dices';\x0a\x09\x09yourself).\x0a\x09self firstLoad",
messageSends: ["class:", "div", "yourself", "firstLoad"],
referencedClasses: []
}),
smalltalk.CWDices);

smalltalk.addMethod(
smalltalk.method({
selector: "showDices:",
category: 'public',
fn: function (aResDices){
var self=this;
var cb;
return smalltalk.withContext(function($ctx1) { 
cb=(function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(aResDices)._callback())._value_(aResDices);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})});
_st(self)._updateDices_kills_callBack_(_st(aResDices)._dices(),_st(aResDices)._kills(),cb);
return self}, function($ctx1) {$ctx1.fill(self,"showDices:",{aResDices:aResDices,cb:cb},smalltalk.CWDices)})},
args: ["aResDices"],
source: "showDices: aResDices\x0a\x09| cb |\x0a\x09cb := [ aResDices callback value: aResDices ].\x0a\x09self updateDices: aResDices dices kills: aResDices kills callBack: cb.",
messageSends: ["value:", "callback", "updateDices:kills:callBack:", "dices", "kills"],
referencedClasses: []
}),
smalltalk.CWDices);

smalltalk.addMethod(
smalltalk.method({
selector: "showDicesNoAnimation:",
category: 'public',
fn: function (monster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"showDicesNoAnimation:",{monster:monster},smalltalk.CWDices)})},
args: ["monster"],
source: "showDicesNoAnimation: monster\x0a\x09\x22should change the number of dices without animation\x22\x0a\x09\x22monster ifNotNil: [\x0a\x09\x09box contents: [:html | \x0a\x09\x09\x09html h4 with: 'Fight result'.\x0a\x09\x09\x091 to: monster dices do: [\x0a\x09\x09\x09\x09CWDiceDeath new renderOn: html ] ] ]\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWDices);

smalltalk.addMethod(
smalltalk.method({
selector: "updateDices:kills:callBack:",
category: 'private',
fn: function (dicesNb,kills,cb){
var self=this;
var tmp,dices,i,callback;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
function $CWDiceDeath(){return smalltalk.CWDiceDeath||(typeof CWDiceDeath=="undefined"?nil:CWDiceDeath)}
function $CWDiceMiss(){return smalltalk.CWDiceMiss||(typeof CWDiceMiss=="undefined"?nil:CWDiceMiss)}
return smalltalk.withContext(function($ctx1) { 
var $1;
dices=_st($Array())._new_(dicesNb);
i=(1);
callback=(function(){
return smalltalk.withContext(function($ctx2) {
i=_st(i).__plus((1));
i;
$1=_st(i).__eq(dicesNb);
return _st($1)._ifTrue_(cb);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})});
_st((1))._to_do_(kills,(function(k){
return smalltalk.withContext(function($ctx2) {
return _st(dices)._at_put_(k,_st(_st($CWDiceDeath())._new())._parent_(self));
}, function($ctx2) {$ctx2.fillBlock({k:k},$ctx1)})}));
_st(_st(kills).__plus((1)))._to_do_(dicesNb,(function(j){
return smalltalk.withContext(function($ctx2) {
return _st(dices)._at_put_(j,_st(_st($CWDiceMiss())._new())._parent_(self));
}, function($ctx2) {$ctx2.fillBlock({j:j},$ctx1)})}));
_st(self["@box"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) {
_st(_st(html)._h4())._with_("Fight result");
return _st((1))._to_do_(dicesNb,(function(){
return smalltalk.withContext(function($ctx3) {
tmp=_st(dices)._atRandom();
tmp;
_st(tmp)._renderOn_callback_(html,callback);
return _st(dices)._remove_(tmp);
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"updateDices:kills:callBack:",{dicesNb:dicesNb,kills:kills,cb:cb,tmp:tmp,dices:dices,i:i,callback:callback},smalltalk.CWDices)})},
args: ["dicesNb", "kills", "cb"],
source: "updateDices: dicesNb kills: kills callBack: cb\x0a\x09\x22animate the dices and display them in random order\x22\x0a\x0a\x09| tmp dices i callback |\x0a\x09dices := Array new: dicesNb.\x0a\x09i := 1.\x0a\x09callback := [\x0a\x09\x09i := i + 1. \x0a\x09\x09(i = dicesNb) \x0a\x09\x09\x09ifTrue: cb].\x0a\x0a\x091 to: kills do: [ :k | dices at: k put: (CWDiceDeath new parent: self) ].\x0a\x09kills + 1 to: dicesNb do: [ :j | dices at: j put: (CWDiceMiss new parent: self) ].\x0a\x0a    box contents: [:html | \x0a\x09\x09html h4 with: 'Fight result'.\x0a\x09\x091 to: dicesNb do: [\x0a\x09\x09\x09tmp := dices atRandom.\x0a\x09\x09\x09tmp renderOn: html callback: callback.\x0a\x09\x09\x09dices remove: tmp ] ]",
messageSends: ["new:", "+", "ifTrue:", "=", "to:do:", "at:put:", "parent:", "new", "contents:", "with:", "h4", "atRandom", "renderOn:callback:", "remove:"],
referencedClasses: ["Array", "CWDiceDeath", "CWDiceMiss"]
}),
smalltalk.CWDices);



smalltalk.addClass('CWMapControls', smalltalk.CWActionMenuComponent, [], 'Easnoth-MapMenu');
smalltalk.addMethod(
smalltalk.method({
selector: "go:",
category: 'actions',
fn: function (direction){
var self=this;
function $CWMapMoveEvent(){return smalltalk.CWMapMoveEvent||(typeof CWMapMoveEvent=="undefined"?nil:CWMapMoveEvent)}
return smalltalk.withContext(function($ctx1) { 
_st(self)._announce_(_st(_st($CWMapMoveEvent())._new())._directionMethod_(direction));
return self}, function($ctx1) {$ctx1.fill(self,"go:",{direction:direction},smalltalk.CWMapControls)})},
args: ["direction"],
source: "go: direction\x0a\x09self announce: (CWMapMoveEvent new directionMethod: direction)",
messageSends: ["announce:", "directionMethod:", "new"],
referencedClasses: ["CWMapMoveEvent"]
}),
smalltalk.CWMapControls);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$5,$6,$7,$8,$9,$10,$2;
$1=_st(html)._div();
_st($1)._class_("mapWatcher");
_st($1)._width_((500));
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
_st(_st(html)._h4())._with_("map controls");
$3=_st(html)._button();
_st($3)._with_("left");
$4=_st($3)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(self)._go_("left");
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
$4;
$5=_st(html)._button();
_st($5)._with_("right");
$6=_st($5)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(self)._go_("right");
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
$6;
$7=_st(html)._button();
_st($7)._with_("down");
$8=_st($7)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(self)._go_("down");
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
$8;
$9=_st(html)._button();
_st($9)._with_("up");
$10=_st($9)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(self)._go_("up");
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
return $10;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.CWMapControls)})},
args: ["html"],
source: "renderOn: html\x0a\x09html div \x0a\x09\x09class: 'mapWatcher';\x0a\x09\x09width: 500;\x0a\x09\x09with: [\x0a                html h4\x0a                        with: 'map controls'.\x0a                html button\x0a                        with: 'left';\x0a                        onClick: [self go: 'left'].\x0a                html button\x0a                        with: 'right';\x0a                        onClick: [self go: 'right'].\x0a                html button\x0a                        with: 'down';\x0a                        onClick: [self go: 'down'].\x0a                html button\x0a                        with: 'up';\x0a                        onClick: [self go: 'up'].\x0a\x09].",
messageSends: ["class:", "div", "width:", "with:", "h4", "button", "onClick:", "go:"],
referencedClasses: []
}),
smalltalk.CWMapControls);



smalltalk.addClass('CWMonsterWatcher', smalltalk.CWActionMenuComponent, ['monster', 'box', 'imgBox'], 'Easnoth-MapMenu');
smalltalk.addMethod(
smalltalk.method({
selector: "emptyMonster",
category: 'accessing',
fn: function (){
var self=this;
function $CWMonster(){return smalltalk.CWMonster||(typeof CWMonster=="undefined"?nil:CWMonster)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($CWMonster())._emptyMonster();
return $1;
}, function($ctx1) {$ctx1.fill(self,"emptyMonster",{},smalltalk.CWMonsterWatcher)})},
args: [],
source: "emptyMonster\x0a\x09^ CWMonster emptyMonster",
messageSends: ["emptyMonster"],
referencedClasses: ["CWMonster"]
}),
smalltalk.CWMonsterWatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function (){
var self=this;
function $CWMonsterUpdateEvent(){return smalltalk.CWMonsterUpdateEvent||(typeof CWMonsterUpdateEvent=="undefined"?nil:CWMonsterUpdateEvent)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.CWActionMenuComponent.fn.prototype._initialize.apply(_st(self), []);
_st(_st(self)._announcer())._on_do_($CWMonsterUpdateEvent(),(function(event){
return smalltalk.withContext(function($ctx2) {
return _st(self)._watchMonster_(_st(event)._monster());
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.CWMonsterWatcher)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self announcer \x0a\x09\x09on: CWMonsterUpdateEvent\x0a\x09\x09do: [ :event | self watchMonster: event monster ]",
messageSends: ["initialize", "on:do:", "watchMonster:", "monster", "announcer"],
referencedClasses: ["CWMonsterUpdateEvent"]
}),
smalltalk.CWMonsterWatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "monster",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@monster"];
if(($receiver = $2) == nil || $receiver == undefined){
$1=_st(self)._emptyMonster();
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"monster",{},smalltalk.CWMonsterWatcher)})},
args: [],
source: "monster\x0a\x09^ monster ifNil: [self emptyMonster]",
messageSends: ["ifNil:", "emptyMonster"],
referencedClasses: []
}),
smalltalk.CWMonsterWatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._div();
_st($1)._class_("monsterWatcher");
$2=_st($1)._yourself();
self["@box"]=$2;
_st(self)._update();
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.CWMonsterWatcher)})},
args: ["html"],
source: "renderOn: html\x0a\x09box := (html div \x0a\x09\x09class: 'monsterWatcher';\x0a\x09\x09yourself).\x0a\x09self update",
messageSends: ["class:", "div", "yourself", "update"],
referencedClasses: []
}),
smalltalk.CWMonsterWatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "update",
category: 'rendering',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st(self["@box"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) {
_st(_st(html)._h4())._with_("selected monster");
$1=_st(html)._table();
_st($1)._class_("tableStats");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(_st(html)._tr())._with_((function(){
return smalltalk.withContext(function($ctx4) {
_st(_st(html)._td())._with_((function(){
return smalltalk.withContext(function($ctx5) {
_st(_st(html)._tr())._with_(_st("hp : ").__comma(_st(_st(self)._monster())._hp()));
_st(_st(html)._tr())._with_(_st(_st(_st("move : ").__comma(_st(_st(self)._monster())._currentMove())).__comma("/")).__comma(_st(_st(self)._monster())._move()));
return _st(_st(html)._tr())._with_(_st("range : ").__comma(_st(_st(self)._monster())._range()));
}, function($ctx5) {$ctx5.fillBlock({},$ctx1)})}));
return _st(_st(html)._td())._with_((function(){
return smalltalk.withContext(function($ctx5) {
_st(_st(html)._tr())._with_(_st("dices : ").__comma(_st(_st(self)._monster())._dices()));
_st(_st(html)._tr())._with_(_st(_st("attack : ").__comma(_st(_st(self)._monster())._attack())).__comma(" %"));
return _st(_st(html)._tr())._with_(_st("special : ").__comma(_st(_st(self)._monster())._special()));
}, function($ctx5) {$ctx5.fillBlock({},$ctx1)})}));
}, function($ctx4) {$ctx4.fillBlock({},$ctx1)})}));
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
return $2;
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"update",{},smalltalk.CWMonsterWatcher)})},
args: [],
source: "update\x0a\x09\x22I hide some stuff for release\x22\x0a\x0a        box contents: [:html | \x0a\x09\x09html h4 with: 'selected monster'.\x0a\x09\x09\x09\x09\x22html img: (self monster image at: 'src').\x22\x0a                html table\x0a\x09\x09\x09class: 'tableStats';\x0a\x09\x09\x09with: [\x0a\x09\x09\x09html tr with: [\x0a\x09\x09\x09\x09html td with: [\x0a                        \x09\x09html tr with: 'hp : ', self monster hp.\x0a                        \x09\x09html tr with: 'move : ', self monster currentMove, '/', self monster move.\x0a                        \x09\x09html tr with: 'range : ', self monster range.\x0a\x09\x09\x09\x09].\x0a\x09\x09\x09\x09html td with: [\x0a                       \x09\x09\x09html tr with: 'dices : ', self monster dices.\x0a                        \x09\x09html tr with: 'attack : ', self monster attack,' %'.\x0a                       \x09\x09\x09html tr with: 'special : ', self monster special.\x0a\x09\x09\x09\x09]\x0a\x09\x09\x09].\x0a\x09\x09].\x0a\x09\x09\x22html h5 with: 'debug'.\x0a                html span with: 'state : ', self monster state class.\x0a\x09\x09\x09\x09html br.\x0a                html span with: 'attackPot : ', self monster attackPotential.\x0a\x09\x09\x09\x09html br.\x0a                html span with: 'cell : ', self monster parent printString.\x22\x0a        ].",
messageSends: ["contents:", "with:", "h4", "class:", "table", ",", "hp", "monster", "tr", "move", "currentMove", "range", "td", "dices", "attack", "special"],
referencedClasses: []
}),
smalltalk.CWMonsterWatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "watchMonster:",
category: 'initialize-release',
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@monster"]).__eq(aMonster);
if(! smalltalk.assert($1)){
self["@monster"]=aMonster;
self["@monster"];
_st(self)._update();
};
return self}, function($ctx1) {$ctx1.fill(self,"watchMonster:",{aMonster:aMonster},smalltalk.CWMonsterWatcher)})},
args: ["aMonster"],
source: "watchMonster: aMonster\x0a\x09monster = aMonster\x0a\x09\x09ifFalse: [ \x0a\x09\x09\x09monster := aMonster.\x0a\x09\x09\x09self update ] ",
messageSends: ["ifFalse:", "update", "="],
referencedClasses: []
}),
smalltalk.CWMonsterWatcher);



smalltalk.addClass('CWTurnWatcher', smalltalk.CWActionMenuComponent, ['box'], 'Easnoth-MapMenu');
smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
fn: function (html){
var self=this;
function $CWNextTurnEvent(){return smalltalk.CWNextTurnEvent||(typeof CWNextTurnEvent=="undefined"?nil:CWNextTurnEvent)}
function $Browser(){return smalltalk.Browser||(typeof Browser=="undefined"?nil:Browser)}
function $CWEndGameEvent(){return smalltalk.CWEndGameEvent||(typeof CWEndGameEvent=="undefined"?nil:CWEndGameEvent)}
function $CWStartMenu(){return smalltalk.CWStartMenu||(typeof CWStartMenu=="undefined"?nil:CWStartMenu)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$5,$6,$7,$8,$9,$10,$2;
$1=_st(html)._div();
_st($1)._class_("stuff");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
self["@box"]=_st(html)._h5();
self["@box"];
$3=_st(html)._button();
_st($3)._with_("next turn");
$4=_st($3)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(self)._announce_(_st($CWNextTurnEvent())._new());
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
$4;
$5=_st(html)._button();
_st($5)._with_("class browser");
$6=_st($5)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return _st($Browser())._open();
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
$6;
$7=_st(html)._button();
_st($7)._with_("menu");
$8=_st($7)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
_st(self)._announce_(_st($CWEndGameEvent())._new());
return _st($CWStartMenu())._start();
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
$8;
_st(html)._br();
$9=_st(html)._iframe();
_st($9)._src_("//www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2FEasnoth&amp;send=false&amp;layout=box_count&amp;width=450&amp;show_faces=true&amp;font&amp;colorscheme=light&amp;action=like&amp;height=90&amp;appId=97614502002");
_st($9)._at_put_("frameborder",(0));
_st($9)._at_put_("scrolling","no");
_st($9)._style_("border:none; overflow:hidden; width:90px; height:21px;");
$10=_st($9)._at_put_("allowTransparency","true");
return $10;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.CWTurnWatcher)})},
args: ["html"],
source: "renderOn: html\x0a\x09html div class: 'stuff'; with: [\x0a\x09\x09box := html h5.\x0a                html button with: 'next turn';\x0a                        onClick: [self announce: CWNextTurnEvent new].\x0a\x09\x09\x22'body' asJQuery keyup:[:event | (event keyCode = 13) ifTrue: [self nextTurn]].\x22\x0a                html button with: 'class browser';\x0a                        onClick: [Browser open].\x0a\x09\x09\x09\x09   html button with: 'menu';\x0a                        onClick: [\x0a\x09\x09\x09\x09\x09\x09\x09self announce: CWEndGameEvent new.\x0a\x09\x09\x09\x09\x09\x09\x09CWStartMenu start].\x0a\x09\x09\x09\x09html br.\x0a\x09\x09\x09\x09html iframe\x0a\x09\x09\x09\x09\x09src: '//www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2FEasnoth&amp;send=false&amp;layout=box_count&amp;width=450&amp;show_faces=true&amp;font&amp;colorscheme=light&amp;action=like&amp;height=90&amp;appId=97614502002';\x0a\x09\x09\x09\x09\x09at: 'frameborder' put: 0;\x0a\x09\x09\x09\x09\x09at: 'scrolling' put: 'no';\x0a\x09\x09\x09\x09\x09style:'border:none; overflow:hidden; width:90px; height:21px;';\x0a\x09\x09\x09\x09\x09at: 'allowTransparency' put: 'true'.\x0a\x09].",
messageSends: ["class:", "div", "with:", "h5", "button", "onClick:", "announce:", "new", "open", "start", "br", "src:", "iframe", "at:put:", "style:"],
referencedClasses: ["CWNextTurnEvent", "Browser", "CWEndGameEvent", "CWStartMenu"]
}),
smalltalk.CWTurnWatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "update",
category: 'rendering',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._turnDisplay())._contents_(_st("turn number : ").__comma(_st(self)._turnNumber()));
return self}, function($ctx1) {$ctx1.fill(self,"update",{},smalltalk.CWTurnWatcher)})},
args: [],
source: "update\x0a\x09self turnDisplay contents: 'turn number : ', self turnNumber.",
messageSends: ["contents:", ",", "turnNumber", "turnDisplay"],
referencedClasses: []
}),
smalltalk.CWTurnWatcher);



smalltalk.addClass('CWDice', smalltalk.CWWidget, [], 'Easnoth-MapMenu');
smalltalk.addMethod(
smalltalk.method({
selector: "animate:callBack:",
category: 'rendering',
fn: function (dice,animationFinished){
var self=this;
var random,url;
return smalltalk.withContext(function($ctx1) { 
random=_st((2)).__plus(_st((7))._atRandom());
url=_st(self)._url();
_st(self)._animate_callBack_random_url_(dice,animationFinished,random,url);
return self}, function($ctx1) {$ctx1.fill(self,"animate:callBack:",{dice:dice,animationFinished:animationFinished,random:random,url:url},smalltalk.CWDice)})},
args: ["dice", "animationFinished"],
source: "animate: dice callBack: animationFinished\x0a\x09\x22This method calls the jquery animation that is implemented in javascript\x0a\x09To refactor later\x22\x0a\x09\x0a\x09| random url |\x0a\x0a\x09random := 2 + 7 atRandom.\x0a\x09url := self url.\x0a\x0a\x09self animate: dice callBack: animationFinished random: random url: url",
messageSends: ["+", "atRandom", "url", "animate:callBack:random:url:"],
referencedClasses: []
}),
smalltalk.CWDice);

smalltalk.addMethod(
smalltalk.method({
selector: "animate:callBack:random:url:",
category: 'rendering',
fn: function (dice,animationFinished,random,url){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var i = 0;
    function roll() {
		dice.animate({'border-spacing': -40},
                        {step: function(now, fx) {
                                $(fx.elem).css('background-position', '1px '+now+'px');
                        },
                        duration: 200,
                        easing: 'linear',
                        complete: function (){
                                i++;
                                if (i< random){
                                        roll();
                                } else {
                                        i = 0;
                                        dice.css('background-image', 'url(' + url + ')').css('background-position','1px 40px').css('background-repeat','no-repeat').animate({'border-spacing': -40},
                                                {step: function(now, fx) {
                                                        $(fx.elem).css('background-position', '1px '+now+'px');
                                                        },
                                                        duration: 200,
                                                        easing: 'linear',
							complete: function(){
								animationFinished();
							}
                                                })
                                }
                        }
		})
	}
	roll();;
return self}, function($ctx1) {$ctx1.fill(self,"animate:callBack:random:url:",{dice:dice,animationFinished:animationFinished,random:random,url:url},smalltalk.CWDice)})},
args: ["dice", "animationFinished", "random", "url"],
source: "animate: dice callBack: animationFinished random: random url: url\x0a<var i = 0;\x0a    function roll() {\x0a\x09\x09dice.animate({'border-spacing': -40},\x0a                        {step: function(now, fx) {\x0a                                $(fx.elem).css('background-position', '1px '+now+'px');\x0a                        },\x0a                        duration: 200,\x0a                        easing: 'linear',\x0a                        complete: function (){\x0a                                i++;\x0a                                if (i< random){\x0a                                        roll();\x0a                                } else {\x0a                                        i = 0;\x0a                                        dice.css('background-image', 'url(' + url + ')').css('background-position','1px 40px').css('background-repeat','no-repeat').animate({'border-spacing': -40},\x0a                                                {step: function(now, fx) {\x0a                                                        $(fx.elem).css('background-position', '1px '+now+'px');\x0a                                                        },\x0a                                                        duration: 200,\x0a                                                        easing: 'linear',\x0a\x09\x09\x09\x09\x09\x09\x09complete: function(){\x0a\x09\x09\x09\x09\x09\x09\x09\x09animationFinished();\x0a\x09\x09\x09\x09\x09\x09\x09}\x0a                                                })\x0a                                }\x0a                        }\x0a\x09\x09})\x0a\x09}\x0a\x09roll();>",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWDice);

smalltalk.addMethod(
smalltalk.method({
selector: "backgroundPictureUrl",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._diceRepo()).__comma("diceBackground.png");
return $1;
}, function($ctx1) {$ctx1.fill(self,"backgroundPictureUrl",{},smalltalk.CWDice)})},
args: [],
source: "backgroundPictureUrl\x0a\x09^\x09self diceRepo, 'diceBackground.png'",
messageSends: [",", "diceRepo"],
referencedClasses: []
}),
smalltalk.CWDice);

smalltalk.addMethod(
smalltalk.method({
selector: "diceRepo",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "ressources/images/fight/";
}, function($ctx1) {$ctx1.fill(self,"diceRepo",{},smalltalk.CWDice)})},
args: [],
source: "diceRepo\x0a\x09^ 'ressources/images/fight/'",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWDice);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(_st(html)._img_(_st(self)._backgroundPictureUrl()))._asJQuery())._css_put_("background",_st(_st("url(").__comma(_st(self)._url())).__comma(") 1px 40px"));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.CWDice)})},
args: ["html"],
source: "renderOn: html\x0a\x09(html img: self backgroundPictureUrl) asJQuery css: 'background' put: 'url(',self url,') 1px 40px'",
messageSends: ["css:put:", ",", "url", "asJQuery", "img:", "backgroundPictureUrl"],
referencedClasses: []
}),
smalltalk.CWDice);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:callback:",
category: 'rendering',
fn: function (html,cb){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._animate_callBack_(_st(_st(_st(html)._img_(_st(self)._backgroundPictureUrl()))._asJQuery())._css_put_("background",_st(_st("url(").__comma(_st(self)._urlRoll())).__comma(") 1px 0")),cb);
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:callback:",{html:html,cb:cb},smalltalk.CWDice)})},
args: ["html", "cb"],
source: "renderOn: html callback: cb\x0a\x09 self animate: ((html img: self backgroundPictureUrl) asJQuery css: 'background' put: 'url(', self urlRoll, ') 1px 0') callBack: cb",
messageSends: ["animate:callBack:", "css:put:", ",", "urlRoll", "asJQuery", "img:", "backgroundPictureUrl"],
referencedClasses: []
}),
smalltalk.CWDice);

smalltalk.addMethod(
smalltalk.method({
selector: "url",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsiblity();
return self}, function($ctx1) {$ctx1.fill(self,"url",{},smalltalk.CWDice)})},
args: [],
source: "url\x0a\x09self subclassResponsiblity",
messageSends: ["subclassResponsiblity"],
referencedClasses: []
}),
smalltalk.CWDice);

smalltalk.addMethod(
smalltalk.method({
selector: "urlRoll",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._diceRepo()).__comma("diceRoll.png");
return $1;
}, function($ctx1) {$ctx1.fill(self,"urlRoll",{},smalltalk.CWDice)})},
args: [],
source: "urlRoll\x0a\x09^ self diceRepo, 'diceRoll.png'",
messageSends: [",", "diceRepo"],
referencedClasses: []
}),
smalltalk.CWDice);



smalltalk.addClass('CWDiceDeath', smalltalk.CWDice, [], 'Easnoth-MapMenu');
smalltalk.addMethod(
smalltalk.method({
selector: "url",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._diceRepo()).__comma("diceDeath.png");
return $1;
}, function($ctx1) {$ctx1.fill(self,"url",{},smalltalk.CWDiceDeath)})},
args: [],
source: "url\x0a\x09^ self diceRepo, 'diceDeath.png'",
messageSends: [",", "diceRepo"],
referencedClasses: []
}),
smalltalk.CWDiceDeath);



smalltalk.addClass('CWDiceMiss', smalltalk.CWDice, [], 'Easnoth-MapMenu');
smalltalk.addMethod(
smalltalk.method({
selector: "url",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._diceRepo()).__comma("diceMiss.png");
return $1;
}, function($ctx1) {$ctx1.fill(self,"url",{},smalltalk.CWDiceMiss)})},
args: [],
source: "url\x0a\x09^ self diceRepo, 'diceMiss.png'",
messageSends: [",", "diceRepo"],
referencedClasses: []
}),
smalltalk.CWDiceMiss);



