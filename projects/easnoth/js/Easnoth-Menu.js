smalltalk.addPackage('Easnoth-Menu');
smalltalk.addClass('CWDicesResult', smalltalk.Widget, ['dices', 'kills'], 'Easnoth-Menu');
smalltalk.addMethod(
smalltalk.method({
selector: "dices",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@dices"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"dices",{},smalltalk.CWDicesResult)})},
args: [],
source: "dices\x0a\x09^ dices",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWDicesResult);

smalltalk.addMethod(
smalltalk.method({
selector: "dices:",
category: 'accessing',
fn: function (int){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@dices"]=int;
return self}, function($ctx1) {$ctx1.fill(self,"dices:",{int:int},smalltalk.CWDicesResult)})},
args: ["int"],
source: "dices: int\x0a\x09dices := int",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWDicesResult);

smalltalk.addMethod(
smalltalk.method({
selector: "kills",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@kills"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"kills",{},smalltalk.CWDicesResult)})},
args: [],
source: "kills\x0a\x09^ kills",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWDicesResult);

smalltalk.addMethod(
smalltalk.method({
selector: "kills:",
category: 'accessing',
fn: function (int){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@kills"]=int;
return self}, function($ctx1) {$ctx1.fill(self,"kills:",{int:int},smalltalk.CWDicesResult)})},
args: ["int"],
source: "kills: int\x0a\x09kills := int",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWDicesResult);



smalltalk.addClass('CWWidget', smalltalk.Widget, ['parent'], 'Easnoth-Menu');
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



smalltalk.addClass('CWActionMenu', smalltalk.CWWidget, ['components'], 'Easnoth-Menu');
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


smalltalk.addMethod(
smalltalk.method({
selector: "newFor:",
category: 'instance creation',
fn: function (aGame){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._new())._initializeWithGame_(_st(aGame)._yourself());
return $1;
}, function($ctx1) {$ctx1.fill(self,"newFor:",{aGame:aGame},smalltalk.CWActionMenu.klass)})},
args: ["aGame"],
source: "newFor: aGame\x0a\x09^ self new\x0a\x09\x09\x09initializeWithGame: aGame\x0a\x09\x09\x09yourself",
messageSends: ["initializeWithGame:", "yourself", "new"],
referencedClasses: []
}),
smalltalk.CWActionMenu.klass);


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
_st(self)._addComponent_($CWMonsterWatcher());
_st(self)._addComponent_($CWDices());
_st(self)._addComponent_($CWTileWatcher());
_st(self)._addComponent_($CWMapControls());
_st(self)._addComponent_($CWTurnWatcher());
_st(self)._appendToJQuery_(_st(_st(self)._menuClass())._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.CWFightMenu)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self addComponent: CWMonsterWatcher.\x0a\x09self addComponent: CWDices.\x0a\x09self addComponent: CWTileWatcher.\x0a\x09self addComponent: CWMapControls.\x0a\x09self addComponent: CWTurnWatcher.\x0a\x09self appendToJQuery: self menuClass asJQuery.",
messageSends: ["initialize", "addComponent:", "appendToJQuery:", "asJQuery", "menuClass"],
referencedClasses: ["CWMonsterWatcher", "CWDices", "CWTileWatcher", "CWMapControls", "CWTurnWatcher"]
}),
smalltalk.CWFightMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeWithGame:",
category: 'initialize-release',
fn: function (aGame){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(_st(self)._components())._last())._initializeWithGame_(aGame);
_st(self)._appendToJQuery_(_st(_st(self)._menuClass())._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"initializeWithGame:",{aGame:aGame},smalltalk.CWFightMenu)})},
args: ["aGame"],
source: "initializeWithGame: aGame\x0a\x09self components last initializeWithGame: aGame.\x0a\x09self appendToJQuery: self menuClass asJQuery.",
messageSends: ["initializeWithGame:", "last", "components", "appendToJQuery:", "asJQuery", "menuClass"],
referencedClasses: []
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



smalltalk.addClass('CWDices', smalltalk.CWActionMenuComponent, ['box'], 'Easnoth-Menu');
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
_st(_st($CWDiceDeath())._new())._renderOn_(html);
return _st(_st($CWDiceMiss())._new())._renderOn_(html);
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"firstLoad",{},smalltalk.CWDices)})},
args: [],
source: "firstLoad\x0a    box contents: [ :html | \x0a\x09html h4 with: 'Fight result'.\x0a           CWDiceDeath new renderOn: html.\x0a           CWDiceMiss new renderOn: html ].",
messageSends: ["contents:", "with:", "h4", "renderOn:", "new"],
referencedClasses: ["CWDiceDeath", "CWDiceMiss"]
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
selector: "showDices:callback:",
category: 'public',
fn: function (aResDices,cb){
var self=this;
var kill,knockBack;
return smalltalk.withContext(function($ctx1) { 
kill=_st(aResDices)._x();
knockBack=_st(aResDices)._y();
_st(self)._updateDices_kills_callBack_(_st(aResDices)._dices(),_st(aResDices)._kill(),cb);
return self}, function($ctx1) {$ctx1.fill(self,"showDices:callback:",{aResDices:aResDices,cb:cb,kill:kill,knockBack:knockBack},smalltalk.CWDices)})},
args: ["aResDices", "cb"],
source: "showDices: aResDices callback: cb\x0a\x09|kill knockBack|\x0a\x0a\x09kill := aResDices x.\x0a\x09knockBack := aResDices y.\x0a\x0a\x09self updateDices: aResDices dices kills: aResDices kill callBack: cb.",
messageSends: ["x", "y", "updateDices:kills:callBack:", "dices", "kill"],
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
source: "updateDices: dicesNb kills: kills callBack: cb\x0a\x09\x22animate the dices and display them in random order\x22\x0a\x0a\x09| tmp dices i callback |\x0a\x0a\x09dices := Array new: dicesNb.\x0a\x09i := 1.\x0a\x09callback := [\x0a\x09\x09i := i + 1. \x0a\x09\x09(i = dicesNb) \x0a\x09\x09\x09ifTrue: cb].\x0a\x0a\x091 to: kills do: [ :k | dices at: k put: (CWDiceDeath new parent: self) ].\x0a\x09kills + 1 to: dicesNb do: [ :j | dices at: j put: (CWDiceMiss new parent: self) ].\x0a\x0a    box contents: [:html | \x0a\x09\x09html h4 with: 'Fight result'.\x0a\x09\x091 to: dicesNb do: [\x0a\x09\x09\x09tmp := dices atRandom.\x0a\x09\x09\x09tmp renderOn: html callback: callback.\x0a\x09\x09\x09dices remove: tmp ] ]",
messageSends: ["new:", "+", "ifTrue:", "=", "to:do:", "at:put:", "parent:", "new", "contents:", "with:", "h4", "atRandom", "renderOn:callback:", "remove:"],
referencedClasses: ["Array", "CWDiceDeath", "CWDiceMiss"]
}),
smalltalk.CWDices);



smalltalk.addClass('CWMapControls', smalltalk.CWActionMenuComponent, [], 'Easnoth-Menu');
smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._div();
_st($1)._class_("mapWatcher");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.CWMapControls)})},
args: ["html"],
source: "renderOn: html\x0a\x09html div \x0a\x09\x09class: 'mapWatcher';\x0a\x09\x09with: [\x0a                \x22html h4\x0a                        with: 'map controls'.\x0a                html button\x0a                        with: 'left';\x0a                        onClick: [self actionMenu map goLeft].\x0a                html button\x0a                        with: 'right';\x0a                        onClick: [self actionMenu map goRight].\x0a                html button\x0a                        with: 'down';\x0a                        onClick: [self actionMenu map goDown].\x0a                html button\x0a                        with: 'up';\x0a                        onClick: [self actionMenu map goUp].\x22\x0a\x09\x09\x22html span \x0a\x09\x09\x09with: '-'.\x0a                html button\x0a                        with: 'mh';\x0a                        onClick: [self actionMenu map mirrorHorizontal].\x0a                html button\x0a                        with: 'vh';\x0a                        onClick: [self actionMenu map mirrorVertical].\x22\x0a\x09].",
messageSends: ["class:", "div", "with:"],
referencedClasses: []
}),
smalltalk.CWMapControls);



smalltalk.addClass('CWMonsterWatcher', smalltalk.CWActionMenuComponent, ['monster', 'box'], 'Easnoth-Menu');


smalltalk.addClass('CWTileWatcher', smalltalk.CWActionMenuComponent, ['tile', 'box'], 'Easnoth-Menu');


smalltalk.addClass('CWTurnWatcher', smalltalk.CWActionMenuComponent, ['box', 'nextTurn'], 'Easnoth-Menu');
smalltalk.addMethod(
smalltalk.method({
selector: "initializeWithGame:",
category: 'rendering',
fn: function (aGame){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@nextTurn"]=(function(){
return smalltalk.withContext(function($ctx2) {
return _st(aGame)._nextTurn();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})});
return self}, function($ctx1) {$ctx1.fill(self,"initializeWithGame:",{aGame:aGame},smalltalk.CWTurnWatcher)})},
args: ["aGame"],
source: "initializeWithGame: aGame\x0a\x09nextTurn := [ aGame nextTurn ].",
messageSends: ["nextTurn"],
referencedClasses: []
}),
smalltalk.CWTurnWatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
fn: function (html){
var self=this;
function $Browser(){return smalltalk.Browser||(typeof Browser=="undefined"?nil:Browser)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$5,$6,$2;
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
return _st(self["@nextTurn"])._value();
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
$4;
$5=_st(html)._button();
_st($5)._with_("class browser");
$6=_st($5)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return _st($Browser())._open();
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
return $6;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.CWTurnWatcher)})},
args: ["html"],
source: "renderOn: html\x0a\x09html div class: 'stuff'; with: [\x0a\x09\x09box := html h5.\x0a                html button with: 'next turn';\x0a                        onClick: [nextTurn value].\x0a\x09\x09\x22'body' asJQuery keyup:[:event | (event keyCode = 13) ifTrue: [self nextTurn]].\x22\x0a                html button with: 'class browser';\x0a                        onClick: [Browser open].\x0a\x09].\x0a\x09\x22self update.\x22",
messageSends: ["class:", "div", "with:", "h5", "button", "onClick:", "value", "open"],
referencedClasses: ["Browser"]
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



smalltalk.addClass('CWDice', smalltalk.CWWidget, [], 'Easnoth-Menu');
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
		dice.animate({'border-spacing': -100},
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
                                        dice.css('background-image', 'url(' + url + ')').css('background-position','1px 100px').css('background-repeat','no-repeat').animate({'border-spacing': -100},
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
source: "animate: dice callBack: animationFinished random: random url: url\x0a<var i = 0;\x0a    function roll() {\x0a\x09\x09dice.animate({'border-spacing': -100},\x0a                        {step: function(now, fx) {\x0a                                $(fx.elem).css('background-position', '1px '+now+'px');\x0a                        },\x0a                        duration: 200,\x0a                        easing: 'linear',\x0a                        complete: function (){\x0a                                i++;\x0a                                if (i< random){\x0a                                        roll();\x0a                                } else {\x0a                                        i = 0;\x0a                                        dice.css('background-image', 'url(' + url + ')').css('background-position','1px 100px').css('background-repeat','no-repeat').animate({'border-spacing': -100},\x0a                                                {step: function(now, fx) {\x0a                                                        $(fx.elem).css('background-position', '1px '+now+'px');\x0a                                                        },\x0a                                                        duration: 200,\x0a                                                        easing: 'linear',\x0a\x09\x09\x09\x09\x09\x09\x09complete: function(){\x0a\x09\x09\x09\x09\x09\x09\x09\x09animationFinished();\x0a\x09\x09\x09\x09\x09\x09\x09}\x0a                                                })\x0a                                }\x0a                        }\x0a\x09\x09})\x0a\x09}\x0a\x09roll();>",
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
selector: "renderOn:callback:",
category: 'rendering',
fn: function (html,cb){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._animate_callBack_(_st(_st(_st(html)._img_(_st(self)._backgroundPictureUrl()))._asJQuery())._css_put_("background","url(\x22ressources/images/fight/diceRoll.png\x22) 1px 0"),cb);
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:callback:",{html:html,cb:cb},smalltalk.CWDice)})},
args: ["html", "cb"],
source: "renderOn: html callback: cb\x0a\x09 self animate: ((html img: self backgroundPictureUrl) asJQuery css: 'background' put: 'url(\x22ressources/images/fight/diceRoll.png\x22) 1px 0') callBack: cb",
messageSends: ["animate:callBack:", "css:put:", "asJQuery", "img:", "backgroundPictureUrl"],
referencedClasses: []
}),
smalltalk.CWDice);



smalltalk.addClass('CWDiceDeath', smalltalk.CWDice, [], 'Easnoth-Menu');
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



smalltalk.addClass('CWDiceMiss', smalltalk.CWDice, [], 'Easnoth-Menu');
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



