smalltalk.addPackage('Easnoth-Events');
smalltalk.addClass('CWEventManager', smalltalk.Object, ['canvas'], 'Easnoth-Events');
smalltalk.addMethod(
smalltalk.method({
selector: "canvas",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@canvas"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"canvas",{},smalltalk.CWEventManager)})},
messageSends: []}),
smalltalk.CWEventManager);

smalltalk.addMethod(
smalltalk.method({
selector: "canvas:",
fn: function (aCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@canvas"]=aCanvas;
return self}, function($ctx1) {$ctx1.fill(self,"canvas:",{aCanvas:aCanvas},smalltalk.CWEventManager)})},
messageSends: []}),
smalltalk.CWEventManager);

smalltalk.addMethod(
smalltalk.method({
selector: "canvasId",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "#eventManager";
}, function($ctx1) {$ctx1.fill(self,"canvasId",{},smalltalk.CWEventManager)})},
messageSends: []}),
smalltalk.CWEventManager);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
function $HTMLCanvas(){return smalltalk.HTMLCanvas||(typeof HTMLCanvas=="undefined"?nil:HTMLCanvas)}
function $TagBrush(){return smalltalk.TagBrush||(typeof TagBrush=="undefined"?nil:TagBrush)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.Object.fn.prototype._initialize.apply(_st(self), []);
_st(self)._canvas_(_st($TagBrush())._fromJQuery_canvas_(_st(_st(self)._canvasId())._asJQuery(),_st($HTMLCanvas())._onJQuery_(_st("body")._asJQuery())));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.CWEventManager)})},
messageSends: ["initialize", "canvas:", "fromJQuery:canvas:", "asJQuery", "canvasId", "onJQuery:"]}),
smalltalk.CWEventManager);



smalltalk.addClass('CWGameBoard', smalltalk.Object, ['map', 'drawer', 'menu'], 'Easnoth-Events');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
function $CWDrawer(){return smalltalk.CWDrawer||(typeof CWDrawer=="undefined"?nil:CWDrawer)}
function $FightMenu(){return smalltalk.FightMenu||(typeof FightMenu=="undefined"?nil:FightMenu)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.Object.fn.prototype._initialize.apply(_st(self), []);
self["@drawer"]=_st($CWDrawer())._new();
self["@menu"]=_st($FightMenu())._newFor_(self);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.CWGameBoard)})},
messageSends: ["initialize", "new", "newFor:"]}),
smalltalk.CWGameBoard);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeMapWithIndex:",
fn: function (index){
var self=this;
function $CWMap(){return smalltalk.CWMap||(typeof CWMap=="undefined"?nil:CWMap)}
return smalltalk.withContext(function($ctx1) { 
self["@map"]=_st($CWMap())._newWithMapIndex_(index);
return self}, function($ctx1) {$ctx1.fill(self,"initializeMapWithIndex:",{index:index},smalltalk.CWGameBoard)})},
messageSends: ["newWithMapIndex:"]}),
smalltalk.CWGameBoard);


smalltalk.addMethod(
smalltalk.method({
selector: "newWithMapIndex:",
fn: function (index){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._new())._initializeMapWithIndex_(index);
return $1;
}, function($ctx1) {$ctx1.fill(self,"newWithMapIndex:",{index:index},smalltalk.CWGameBoard.klass)})},
messageSends: ["initializeMapWithIndex:", "new"]}),
smalltalk.CWGameBoard.klass);


