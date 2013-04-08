smalltalk.addPackage('Easnoth-Events');
smalltalk.addClass('CWBootstrapper', smalltalk.Object, ['objectToLoad', 'objectLoaded'], 'Easnoth-Events');
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
}, function($ctx1) {$ctx1.fill(self,"announcer",{},smalltalk.CWBootstrapper)})},
args: [],
source: "announcer\x0a\x09^ CWEasnothAnnouncer current",
messageSends: ["current"],
referencedClasses: ["CWEasnothAnnouncer"]
}),
smalltalk.CWBootstrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "bootstrap:",
category: 'initialize-release',
fn: function (mapIndex){
var self=this;
function $CWGameBoard(){return smalltalk.CWGameBoard||(typeof CWGameBoard=="undefined"?nil:CWGameBoard)}
return smalltalk.withContext(function($ctx1) { 
_st($CWGameBoard())._newWithMapIndex_(mapIndex);
return self}, function($ctx1) {$ctx1.fill(self,"bootstrap:",{mapIndex:mapIndex},smalltalk.CWBootstrapper)})},
args: ["mapIndex"],
source: "bootstrap: mapIndex\x0a\x09CWGameBoard newWithMapIndex: mapIndex",
messageSends: ["newWithMapIndex:"],
referencedClasses: ["CWGameBoard"]
}),
smalltalk.CWBootstrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "checkIfReady",
category: 'events',
fn: function (){
var self=this;
function $Transcript(){return smalltalk.Transcript||(typeof Transcript=="undefined"?nil:Transcript)}
function $CWGameStart(){return smalltalk.CWGameStart||(typeof CWGameStart=="undefined"?nil:CWGameStart)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@objectToLoad"]).__eq(self["@objectLoaded"]);
if(smalltalk.assert($1)){
_st($Transcript())._show_(self["@objectToLoad"]);
_st(_st(self)._announcer())._announce_(_st($CWGameStart())._new());
};
return self}, function($ctx1) {$ctx1.fill(self,"checkIfReady",{},smalltalk.CWBootstrapper)})},
args: [],
source: "checkIfReady\x0a\x09objectToLoad = objectLoaded\x0a\x09\x09ifTrue: [ Transcript show: objectToLoad. \x0a\x09\x09\x09self announcer announce: CWGameStart new]",
messageSends: ["ifTrue:", "show:", "announce:", "new", "announcer", "="],
referencedClasses: ["Transcript", "CWGameStart"]
}),
smalltalk.CWBootstrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.Object.fn.prototype._initialize.apply(_st(self), []);
self["@objectToLoad"]=(0);
self["@objectLoaded"]=(0);
_st(self)._initializeEventHandling();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.CWBootstrapper)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09objectToLoad := 0.\x0a\x09objectLoaded := 0.\x0a\x09self initializeEventHandling.",
messageSends: ["initialize", "initializeEventHandling"],
referencedClasses: []
}),
smalltalk.CWBootstrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeEventHandling",
category: 'initialize-release',
fn: function (){
var self=this;
function $CWWaitForObject(){return smalltalk.CWWaitForObject||(typeof CWWaitForObject=="undefined"?nil:CWWaitForObject)}
function $CWObjectLoaded(){return smalltalk.CWObjectLoaded||(typeof CWObjectLoaded=="undefined"?nil:CWObjectLoaded)}
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._announcer())._on_do_($CWWaitForObject(),(function(){
return smalltalk.withContext(function($ctx2) {
self["@objectToLoad"]=_st(self["@objectToLoad"]).__plus((1));
return self["@objectToLoad"];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(_st(self)._announcer())._on_do_($CWObjectLoaded(),(function(){
return smalltalk.withContext(function($ctx2) {
self["@objectLoaded"]=_st(self["@objectLoaded"]).__plus((1));
self["@objectLoaded"];
return _st(self)._checkIfReady();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initializeEventHandling",{},smalltalk.CWBootstrapper)})},
args: [],
source: "initializeEventHandling\x0a\x09self announcer \x0a\x09\x09on: CWWaitForObject \x0a\x09\x09do: [ objectToLoad := objectToLoad + 1 ].\x0a\x09self announcer \x0a\x09\x09on: CWObjectLoaded \x0a\x09\x09\x09do: [ objectLoaded := objectLoaded + 1.\x0a\x09\x09\x09\x09self checkIfReady].",
messageSends: ["on:do:", "+", "announcer", "checkIfReady"],
referencedClasses: ["CWWaitForObject", "CWObjectLoaded"]
}),
smalltalk.CWBootstrapper);


smalltalk.addMethod(
smalltalk.method({
selector: "bootstrap:",
category: 'instance creation',
fn: function (mapIndex){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._new())._bootstrap_(mapIndex);
return $1;
}, function($ctx1) {$ctx1.fill(self,"bootstrap:",{mapIndex:mapIndex},smalltalk.CWBootstrapper.klass)})},
args: ["mapIndex"],
source: "bootstrap: mapIndex\x0a\x09^ self new\x0a\x09\x09bootstrap: mapIndex",
messageSends: ["bootstrap:", "new"],
referencedClasses: []
}),
smalltalk.CWBootstrapper.klass);


smalltalk.addClass('CWEasnothAnnouncement', smalltalk.SystemAnnouncement, [], 'Easnoth-Events');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
category: 'concurrency',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aVisitor)._announceSafely_(self);
return self}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.CWEasnothAnnouncement)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09aVisitor announceSafely: self",
messageSends: ["announceSafely:"],
referencedClasses: []
}),
smalltalk.CWEasnothAnnouncement);

smalltalk.addMethod(
smalltalk.method({
selector: "requiresSuspension",
category: 'concurrency',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"requiresSuspension",{},smalltalk.CWEasnothAnnouncement)})},
args: [],
source: "requiresSuspension\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWEasnothAnnouncement);



smalltalk.addClass('CWBootstrapEvent', smalltalk.CWEasnothAnnouncement, [], 'Easnoth-Events');


smalltalk.addClass('CWGameStart', smalltalk.CWBootstrapEvent, [], 'Easnoth-Events');


smalltalk.addClass('CWObjectLoaded', smalltalk.CWBootstrapEvent, [], 'Easnoth-Events');


smalltalk.addClass('CWWaitForObject', smalltalk.CWBootstrapEvent, [], 'Easnoth-Events');


smalltalk.addClass('CWDrawingEvent', smalltalk.CWEasnothAnnouncement, [], 'Easnoth-Events');


smalltalk.addClass('CWGOTDrawingEvent', smalltalk.CWDrawingEvent, [], 'Easnoth-Events');


smalltalk.addClass('CWGlobalDrawingEvent', smalltalk.CWDrawingEvent, [], 'Easnoth-Events');


smalltalk.addClass('CWMonsterAndGOTDrawingEvent', smalltalk.CWDrawingEvent, [], 'Easnoth-Events');


smalltalk.addClass('CWUserAnnouncement', smalltalk.CWEasnothAnnouncement, [], 'Easnoth-Events');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
category: 'concurrency',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._isSuspended();
if(! smalltalk.assert($1)){
_st(aVisitor)._announceSafely_(self);
};
return self}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.CWUserAnnouncement)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09aVisitor isSuspended ifFalse: [\x0a\x09\x09aVisitor announceSafely: self ]",
messageSends: ["ifFalse:", "announceSafely:", "isSuspended"],
referencedClasses: []
}),
smalltalk.CWUserAnnouncement);

smalltalk.addMethod(
smalltalk.method({
selector: "requiresSuspension",
category: 'concurrency',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"requiresSuspension",{},smalltalk.CWUserAnnouncement)})},
args: [],
source: "requiresSuspension\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWUserAnnouncement);



smalltalk.addClass('CWEasnothAnnouncer', smalltalk.SystemAnnouncer, ['suspended'], 'Easnoth-Events');
smalltalk.addMethod(
smalltalk.method({
selector: "announce:",
category: 'events',
fn: function (anAnnouncement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(anAnnouncement)._accept_(self);
return self}, function($ctx1) {$ctx1.fill(self,"announce:",{anAnnouncement:anAnnouncement},smalltalk.CWEasnothAnnouncer)})},
args: ["anAnnouncement"],
source: "announce: anAnnouncement\x0a\x09anAnnouncement accept: self\x0a\x09\x09",
messageSends: ["accept:"],
referencedClasses: []
}),
smalltalk.CWEasnothAnnouncer);

smalltalk.addMethod(
smalltalk.method({
selector: "announceSafely:",
category: 'events',
fn: function (anAnnouncement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@suspended"]=_st(anAnnouncement)._requiresSuspension();
smalltalk.SystemAnnouncer.fn.prototype._announce_.apply(_st(self), [anAnnouncement]);
return self}, function($ctx1) {$ctx1.fill(self,"announceSafely:",{anAnnouncement:anAnnouncement},smalltalk.CWEasnothAnnouncer)})},
args: ["anAnnouncement"],
source: "announceSafely: anAnnouncement\x0a\x09suspended := anAnnouncement requiresSuspension.\x0a\x09super announce: anAnnouncement\x0a\x09\x09",
messageSends: ["requiresSuspension", "announce:"],
referencedClasses: []
}),
smalltalk.CWEasnothAnnouncer);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.SystemAnnouncer.fn.prototype._initialize.apply(_st(self), []);
self["@suspended"]=false;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.CWEasnothAnnouncer)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09suspended := false.",
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.CWEasnothAnnouncer);

smalltalk.addMethod(
smalltalk.method({
selector: "isSuspended",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@suspended"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"isSuspended",{},smalltalk.CWEasnothAnnouncer)})},
args: [],
source: "isSuspended\x0a\x09^ suspended",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWEasnothAnnouncer);

smalltalk.addMethod(
smalltalk.method({
selector: "reactivate",
category: 'events',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@suspended"]=false;
return self}, function($ctx1) {$ctx1.fill(self,"reactivate",{},smalltalk.CWEasnothAnnouncer)})},
args: [],
source: "reactivate\x0a\x09suspended := false.",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWEasnothAnnouncer);



smalltalk.addClass('CWEventDispatcher', smalltalk.Object, ['canvas', 'cells'], 'Easnoth-Events');
smalltalk.CWEventDispatcher.comment="I dispatch event from eventManager canvas to cells. \x0aCells is a bidimentional Array.\x0a\x0aI SHOULD HAVE DIRECTLY THE MAP NOT CELLS I COULD DISPATCH TO ROW OR MAP. IN FACT DISPATCH TO CELL MEANS \x0adispatchToCell: i j\x0a(map children at i) children at: j"
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
smalltalk.CWEventDispatcher);

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
smalltalk.CWEventDispatcher);

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
smalltalk.CWEventDispatcher);

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
smalltalk.CWEventDispatcher);

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
source: "initialize\x0a\x09super initialize. \x0a\x09self canvas: (TagBrush fromJQuery: self canvasId asJQuery canvas: (HTMLCanvas onJQuery: 'body' asJQuery)).\x0a\x09\x22self canvas onMouseUp: [:e | self announcer announce: CWEasnothAnnouncement new ].\x0a\x09self announcer \x0a\x09\x09on: CWEasnothAnnouncement\x0a\x09\x09do: [window alert: 'foo'].\x22",
messageSends: ["initialize", "canvas:", "fromJQuery:canvas:", "asJQuery", "canvasId", "onJQuery:"],
referencedClasses: ["HTMLCanvas", "TagBrush"]
}),
smalltalk.CWEventDispatcher);



smalltalk.addClass('CWGameBoard', smalltalk.Object, ['map', 'menu', 'eventManager'], 'Easnoth-Events');
smalltalk.addMethod(
smalltalk.method({
selector: "announce:",
category: 'event',
fn: function (event){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._announcer())._announce_(event);
return self}, function($ctx1) {$ctx1.fill(self,"announce:",{event:event},smalltalk.CWGameBoard)})},
args: ["event"],
source: "announce: event\x0a\x09self announcer announce: event",
messageSends: ["announce:", "announcer"],
referencedClasses: []
}),
smalltalk.CWGameBoard);

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
}, function($ctx1) {$ctx1.fill(self,"announcer",{},smalltalk.CWGameBoard)})},
args: [],
source: "announcer\x0a\x09^ CWEasnothAnnouncer current",
messageSends: ["current"],
referencedClasses: ["CWEasnothAnnouncer"]
}),
smalltalk.CWGameBoard);

smalltalk.addMethod(
smalltalk.method({
selector: "firstTurn",
category: 'game logic',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"firstTurn",{},smalltalk.CWGameBoard)})},
args: [],
source: "firstTurn",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWGameBoard);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function (){
var self=this;
function $FightMenu(){return smalltalk.FightMenu||(typeof FightMenu=="undefined"?nil:FightMenu)}
function $CWEventDispatcher(){return smalltalk.CWEventDispatcher||(typeof CWEventDispatcher=="undefined"?nil:CWEventDispatcher)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.Object.fn.prototype._initialize.apply(_st(self), []);
self["@menu"]=_st($FightMenu())._newFor_(self);
self["@eventManager"]=_st($CWEventDispatcher())._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.CWGameBoard)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09menu := FightMenu newFor: self.\x0a\x09eventManager := CWEventDispatcher new.",
messageSends: ["initialize", "newFor:", "new"],
referencedClasses: ["FightMenu", "CWEventDispatcher"]
}),
smalltalk.CWGameBoard);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeEventHandling",
category: 'initialize-release',
fn: function (){
var self=this;
function $CWGameStart(){return smalltalk.CWGameStart||(typeof CWGameStart=="undefined"?nil:CWGameStart)}
function $CWGlobalDrawingEvent(){return smalltalk.CWGlobalDrawingEvent||(typeof CWGlobalDrawingEvent=="undefined"?nil:CWGlobalDrawingEvent)}
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._announcer())._on_do_($CWGameStart(),(function(){
return smalltalk.withContext(function($ctx2) {
return _st(self)._announce_(_st($CWGlobalDrawingEvent())._new());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initializeEventHandling",{},smalltalk.CWGameBoard)})},
args: [],
source: "initializeEventHandling\x0a\x09self announcer\x0a\x09\x09on: CWGameStart\x0a\x09\x09do: [ \x22some game logic here ...\x22\x0a\x09\x09\x09self announce: CWGlobalDrawingEvent new ]",
messageSends: ["on:do:", "announce:", "new", "announcer"],
referencedClasses: ["CWGameStart", "CWGlobalDrawingEvent"]
}),
smalltalk.CWGameBoard);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeMapWithIndex:",
category: 'initialize-release',
fn: function (index){
var self=this;
function $CWMap(){return smalltalk.CWMap||(typeof CWMap=="undefined"?nil:CWMap)}
function $CWMapDrawer(){return smalltalk.CWMapDrawer||(typeof CWMapDrawer=="undefined"?nil:CWMapDrawer)}
return smalltalk.withContext(function($ctx1) { 
self["@map"]=_st($CWMap())._newWithMapIndex_(index);
_st(_st($CWMapDrawer())._new())._initializeForMap_(self["@map"]);
_st(self)._initializeEventHandling();
return self}, function($ctx1) {$ctx1.fill(self,"initializeMapWithIndex:",{index:index},smalltalk.CWGameBoard)})},
args: ["index"],
source: "initializeMapWithIndex: index\x0a\x09map := CWMap newWithMapIndex: index.\x0a\x09CWMapDrawer new initializeForMap: map.\x0a\x09self initializeEventHandling.\x0a\x09",
messageSends: ["newWithMapIndex:", "initializeForMap:", "new", "initializeEventHandling"],
referencedClasses: ["CWMap", "CWMapDrawer"]
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


