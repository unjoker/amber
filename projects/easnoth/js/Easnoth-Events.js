smalltalk.addPackage('Easnoth-Events');
smalltalk.addClass('CWEasnothAnnouncement', smalltalk.SystemAnnouncement, [], 'Easnoth-Events');


smalltalk.addClass('CWEasnothAnnouncer', smalltalk.SystemAnnouncer, [], 'Easnoth-Events');


smalltalk.addClass('CWEventManager', smalltalk.Object, ['canvas'], 'Easnoth-Events');
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
}, function($ctx1) {$ctx1.fill(self,"announcer",{},smalltalk.CWEventManager)})},
args: [],
source: "announcer\x0a\x09^ CWEasnothAnnouncer current",
messageSends: ["current"],
referencedClasses: ["CWEasnothAnnouncer"]
}),
smalltalk.CWEventManager);

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
function $CWEasnothAnnouncement(){return smalltalk.CWEasnothAnnouncement||(typeof CWEasnothAnnouncement=="undefined"?nil:CWEasnothAnnouncement)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.Object.fn.prototype._initialize.apply(_st(self), []);
_st(self)._canvas_(_st($TagBrush())._fromJQuery_canvas_(_st(_st(self)._canvasId())._asJQuery(),_st($HTMLCanvas())._onJQuery_(_st("body")._asJQuery())));
_st(_st(self)._canvas())._onMouseUp_((function(e){
return smalltalk.withContext(function($ctx2) {
return _st(_st(self)._announcer())._announce_(_st($CWEasnothAnnouncement())._new());
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
_st(_st(self)._announcer())._on_do_($CWEasnothAnnouncement(),(function(){
return smalltalk.withContext(function($ctx2) {
return _st(window)._alert_("foo");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.CWEventManager)})},
args: [],
source: "initialize\x0a\x09super initialize. \x0a\x09self canvas: (TagBrush fromJQuery: self canvasId asJQuery canvas: (HTMLCanvas onJQuery: 'body' asJQuery)).\x0a\x09self canvas onMouseUp: [:e | self announcer announce: CWEasnothAnnouncement new ].\x0a\x09self announcer \x0a\x09\x09on: CWEasnothAnnouncement\x0a\x09\x09do: [window alert: 'foo'].",
messageSends: ["initialize", "canvas:", "fromJQuery:canvas:", "asJQuery", "canvasId", "onJQuery:", "onMouseUp:", "announce:", "new", "announcer", "canvas", "on:do:", "alert:"],
referencedClasses: ["HTMLCanvas", "TagBrush", "CWEasnothAnnouncement"]
}),
smalltalk.CWEventManager);



smalltalk.addClass('CWGameBoard', smalltalk.Object, ['map', 'menu', 'eventManager'], 'Easnoth-Events');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function (){
var self=this;
function $FightMenu(){return smalltalk.FightMenu||(typeof FightMenu=="undefined"?nil:FightMenu)}
function $CWEventManager(){return smalltalk.CWEventManager||(typeof CWEventManager=="undefined"?nil:CWEventManager)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.Object.fn.prototype._initialize.apply(_st(self), []);
self["@menu"]=_st($FightMenu())._newFor_(self);
self["@eventManager"]=_st($CWEventManager())._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.CWGameBoard)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09menu := FightMenu newFor: self.\x0a\x09eventManager := CWEventManager new",
messageSends: ["initialize", "newFor:", "new"],
referencedClasses: ["FightMenu", "CWEventManager"]
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
selector: "examples",
category: 'examples',
fn: function (){
var self=this;
function $CWMap(){return smalltalk.CWMap||(typeof CWMap=="undefined"?nil:CWMap)}
function $CWEasnothAnnouncer(){return smalltalk.CWEasnothAnnouncer||(typeof CWEasnothAnnouncer=="undefined"?nil:CWEasnothAnnouncer)}
return smalltalk.withContext(function($ctx1) { 
_st($CWMap())._newWithMapIndex_((5));
_st(_st($CWMap())._default())._update();
_st(_st($CWMap())._default())._updateGOTs();
_st(_st($CWMap())._default())._updateMonstersAndGOTs();
_st($CWEasnothAnnouncer())._current();
return self}, function($ctx1) {$ctx1.fill(self,"examples",{},smalltalk.CWGameBoard.klass)})},
args: [],
source: "examples\x0a\x09\x22To remove when model ok\x22\x0a\x09CWMap newWithMapIndex: 5.\x0a\x09CWMap default update.\x0a\x09CWMap default updateGOTs.\x0a\x09CWMap default updateMonstersAndGOTs.\x0a\x09CWEasnothAnnouncer current.",
messageSends: ["newWithMapIndex:", "update", "default", "updateGOTs", "updateMonstersAndGOTs", "current"],
referencedClasses: ["CWMap", "CWEasnothAnnouncer"]
}),
smalltalk.CWGameBoard.klass);

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


