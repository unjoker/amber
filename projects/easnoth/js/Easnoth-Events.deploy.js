smalltalk.addPackage('Easnoth-Events');
smalltalk.addClass('CWBootstrapper', smalltalk.Object, ['objectToLoad', 'objectLoaded'], 'Easnoth-Events');
smalltalk.addMethod(
smalltalk.method({
selector: "announcer",
fn: function (){
var self=this;
function $CWEasnothAnnouncer(){return smalltalk.CWEasnothAnnouncer||(typeof CWEasnothAnnouncer=="undefined"?nil:CWEasnothAnnouncer)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($CWEasnothAnnouncer())._current();
return $1;
}, function($ctx1) {$ctx1.fill(self,"announcer",{},smalltalk.CWBootstrapper)})},
messageSends: ["current"]}),
smalltalk.CWBootstrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "bootstrap:",
fn: function (mapIndex){
var self=this;
function $CWGame(){return smalltalk.CWGame||(typeof CWGame=="undefined"?nil:CWGame)}
return smalltalk.withContext(function($ctx1) { 
_st($CWGame())._newWithMapIndex_(mapIndex);
return self}, function($ctx1) {$ctx1.fill(self,"bootstrap:",{mapIndex:mapIndex},smalltalk.CWBootstrapper)})},
messageSends: ["newWithMapIndex:"]}),
smalltalk.CWBootstrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "checkIfReady",
fn: function (){
var self=this;
function $CWGameStart(){return smalltalk.CWGameStart||(typeof CWGameStart=="undefined"?nil:CWGameStart)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@objectToLoad"]).__eq(self["@objectLoaded"]);
if(smalltalk.assert($1)){
_st(_st(self)._announcer())._announce_(_st($CWGameStart())._new());
};
return self}, function($ctx1) {$ctx1.fill(self,"checkIfReady",{},smalltalk.CWBootstrapper)})},
messageSends: ["ifTrue:", "announce:", "new", "announcer", "="]}),
smalltalk.CWBootstrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.Object.fn.prototype._initialize.apply(_st(self), []);
self["@objectToLoad"]=(0);
self["@objectLoaded"]=(0);
_st(self)._initializeEventHandling();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.CWBootstrapper)})},
messageSends: ["initialize", "initializeEventHandling"]}),
smalltalk.CWBootstrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeEventHandling",
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
messageSends: ["on:do:", "+", "announcer", "checkIfReady"]}),
smalltalk.CWBootstrapper);


smalltalk.addMethod(
smalltalk.method({
selector: "bootstrap:",
fn: function (mapIndex){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._new())._bootstrap_(mapIndex);
return $1;
}, function($ctx1) {$ctx1.fill(self,"bootstrap:",{mapIndex:mapIndex},smalltalk.CWBootstrapper.klass)})},
messageSends: ["bootstrap:", "new"]}),
smalltalk.CWBootstrapper.klass);


smalltalk.addClass('CWEasnothAnnouncement', smalltalk.SystemAnnouncement, [], 'Easnoth-Events');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aVisitor)._announceSafely_(self);
return self}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.CWEasnothAnnouncement)})},
messageSends: ["announceSafely:"]}),
smalltalk.CWEasnothAnnouncement);

smalltalk.addMethod(
smalltalk.method({
selector: "requiresSuspension",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"requiresSuspension",{},smalltalk.CWEasnothAnnouncement)})},
messageSends: []}),
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
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._isSuspended();
if(! smalltalk.assert($1)){
_st(aVisitor)._announceSafely_(self);
};
return self}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.CWUserAnnouncement)})},
messageSends: ["ifFalse:", "announceSafely:", "isSuspended"]}),
smalltalk.CWUserAnnouncement);

smalltalk.addMethod(
smalltalk.method({
selector: "requiresSuspension",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"requiresSuspension",{},smalltalk.CWUserAnnouncement)})},
messageSends: []}),
smalltalk.CWUserAnnouncement);



smalltalk.addClass('CWEasnothAnnouncer', smalltalk.SystemAnnouncer, ['suspended'], 'Easnoth-Events');
smalltalk.addMethod(
smalltalk.method({
selector: "announce:",
fn: function (anAnnouncement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(anAnnouncement)._accept_(self);
return self}, function($ctx1) {$ctx1.fill(self,"announce:",{anAnnouncement:anAnnouncement},smalltalk.CWEasnothAnnouncer)})},
messageSends: ["accept:"]}),
smalltalk.CWEasnothAnnouncer);

smalltalk.addMethod(
smalltalk.method({
selector: "announceSafely:",
fn: function (anAnnouncement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@suspended"]=_st(anAnnouncement)._requiresSuspension();
smalltalk.SystemAnnouncer.fn.prototype._announce_.apply(_st(self), [anAnnouncement]);
return self}, function($ctx1) {$ctx1.fill(self,"announceSafely:",{anAnnouncement:anAnnouncement},smalltalk.CWEasnothAnnouncer)})},
messageSends: ["requiresSuspension", "announce:"]}),
smalltalk.CWEasnothAnnouncer);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.SystemAnnouncer.fn.prototype._initialize.apply(_st(self), []);
self["@suspended"]=false;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.CWEasnothAnnouncer)})},
messageSends: ["initialize"]}),
smalltalk.CWEasnothAnnouncer);

smalltalk.addMethod(
smalltalk.method({
selector: "isSuspended",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@suspended"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"isSuspended",{},smalltalk.CWEasnothAnnouncer)})},
messageSends: []}),
smalltalk.CWEasnothAnnouncer);

smalltalk.addMethod(
smalltalk.method({
selector: "reactivate",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@suspended"]=false;
return self}, function($ctx1) {$ctx1.fill(self,"reactivate",{},smalltalk.CWEasnothAnnouncer)})},
messageSends: []}),
smalltalk.CWEasnothAnnouncer);



smalltalk.addClass('CWEventDispatcher', smalltalk.Object, ['canvas', 'map', 'padding', 'actionCell'], 'Easnoth-Events');
smalltalk.addMethod(
smalltalk.method({
selector: "announcer",
fn: function (){
var self=this;
function $CWEasnothAnnouncer(){return smalltalk.CWEasnothAnnouncer||(typeof CWEasnothAnnouncer=="undefined"?nil:CWEasnothAnnouncer)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($CWEasnothAnnouncer())._current();
return $1;
}, function($ctx1) {$ctx1.fill(self,"announcer",{},smalltalk.CWEventManager)})},
messageSends: ["current"]}),
smalltalk.CWEventDispatcher);

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
smalltalk.CWEventDispatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "canvas:",
fn: function (aCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@canvas"]=aCanvas;
return self}, function($ctx1) {$ctx1.fill(self,"canvas:",{aCanvas:aCanvas},smalltalk.CWEventManager)})},
messageSends: []}),
smalltalk.CWEventDispatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "canvasId",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "#eventManager";
}, function($ctx1) {$ctx1.fill(self,"canvasId",{},smalltalk.CWEventManager)})},
messageSends: []}),
smalltalk.CWEventDispatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "cellAt:y:",
fn: function (i,j){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._rowAt_(i))._childAt_(j);
return $1;
}, function($ctx1) {$ctx1.fill(self,"cellAt:y:",{i:i,j:j},smalltalk.CWEventDispatcher)})},
messageSends: ["childAt:", "rowAt:"]}),
smalltalk.CWEventDispatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "cellAt:y:ifAbsent:",
fn: function (i,j,aBlock){
var self=this;
function $Error(){return smalltalk.Error||(typeof Error=="undefined"?nil:Error)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(self)._rowAt_(i))._childAt_(j);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._on_do_($Error(),(function(){
return smalltalk.withContext(function($ctx2) {
return _st(aBlock)._value();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"cellAt:y:ifAbsent:",{i:i,j:j,aBlock:aBlock},smalltalk.CWEventDispatcher)})},
messageSends: ["on:do:", "value", "childAt:", "rowAt:"]}),
smalltalk.CWEventDispatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "currentCell:",
fn: function (anEvent){
var self=this;
var x,y,cood;
return smalltalk.withContext(function($ctx1) { 
var $1;
x=_st(_st(anEvent)._pageX()).__minus(_st(_st(_st(self)._canvas())._element())._offsetLeft());
y=_st(_st(anEvent)._pageY()).__minus(_st(_st(_st(self)._canvas())._element())._offsetTop());
cood=_st(self)._mouseCoodToHexCoodX_y_(x,y);
$1=_st(self)._cellAt_y_ifAbsent_(_st(cood)._x(),_st(cood)._y(),(function(){
return smalltalk.withContext(function($ctx2) {
return nil;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"currentCell:",{anEvent:anEvent,x:x,y:y,cood:cood},smalltalk.CWEventDispatcher)})},
messageSends: ["-", "offsetLeft", "element", "canvas", "pageX", "offsetTop", "pageY", "mouseCoodToHexCoodX:y:", "cellAt:y:ifAbsent:", "x", "y"]}),
smalltalk.CWEventDispatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "dispatchMouseClick:",
fn: function (event){
var self=this;
var cc;
function $Transcript(){return smalltalk.Transcript||(typeof Transcript=="undefined"?nil:Transcript)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=$Transcript();
_st($1)._show_("mouseClick");
$2=_st($1)._cr();
return self}, function($ctx1) {$ctx1.fill(self,"dispatchMouseClick:",{event:event,cc:cc},smalltalk.CWEventDispatcher)})},
messageSends: ["show:", "cr"]}),
smalltalk.CWEventDispatcher);

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
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.CWEventDispatcher)})},
messageSends: ["initialize", "canvas:", "fromJQuery:canvas:", "asJQuery", "canvasId", "onJQuery:"]}),
smalltalk.CWEventDispatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeEventHandling",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._canvas())._onMouseUp_((function(e){
return smalltalk.withContext(function($ctx2) {
return _st(self)._dispatchMouseClick_(e);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initializeEventHandling",{},smalltalk.CWEventDispatcher)})},
messageSends: ["onMouseUp:", "dispatchMouseClick:", "canvas"]}),
smalltalk.CWEventDispatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeForMap:drawer:",
fn: function (aMap,drawer){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@map"]=aMap;
self["@padding"]=_st(drawer)._padding();
_st(self)._initializeEventHandling();
return self}, function($ctx1) {$ctx1.fill(self,"initializeForMap:drawer:",{aMap:aMap,drawer:drawer},smalltalk.CWEventDispatcher)})},
messageSends: ["padding", "initializeEventHandling"]}),
smalltalk.CWEventDispatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "mouseCoodToHexCoodX:y:",
fn: function (x,y){
var self=this;
var xHex,yHex,array,mapDisplayX,mapDisplayY;
return smalltalk.withContext(function($ctx1) { 
var $1;
mapDisplayX=_st(self["@padding"])._x();
mapDisplayY=_st(self["@padding"])._y();
array=_st(self)._mouseCoodToHexCoodX_y_mapX_mapY_(x,y,mapDisplayX,mapDisplayY);
xHex=_st(array)._at_((1));
yHex=_st(array)._at_((2));
$1=_st(xHex).__at(yHex);
return $1;
}, function($ctx1) {$ctx1.fill(self,"mouseCoodToHexCoodX:y:",{x:x,y:y,xHex:xHex,yHex:yHex,array:array,mapDisplayX:mapDisplayX,mapDisplayY:mapDisplayY},smalltalk.CWEventDispatcher)})},
messageSends: ["x", "y", "mouseCoodToHexCoodX:y:mapX:mapY:", "at:", "@"]}),
smalltalk.CWEventDispatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "mouseCoodToHexCoodX:y:mapX:mapY:",
fn: function (x,y,mapDisplayX,mapDisplayY){
var self=this;
return smalltalk.withContext(function($ctx1) { 
function mod(n, mod) {
			return ((mod+(n%mod))%mod);
		}

		var cosmaingridx = 0.882947593;
		var sinmaingridx = 0.469471563;
		var cosmaingridy = -0.130526192;
		var sinmaingridy = 0.991444861;
		
		var cosothergridx = 0.4539905;
		var sinothergridx = 0.891006524;
		var cosothergridy = -0.882947593;
		var sinothergridy = 0.469471563;
		
		var nb = Math.floor(((y-(cosmaingridx/sinmaingridx)*x-(mapDisplayY+0)+(cosmaingridx/sinmaingridx)*(mapDisplayX+320))/(55*cosmaingridx)));
		var nb2 = Math.floor(((y-(cosmaingridy/sinmaingridy)*x-(mapDisplayY+480)+(cosmaingridy/sinmaingridy)*(mapDisplayX+206))/(173.2*cosmaingridy)));
		
		var xConstante = 9 + (mod(nb,3));
		var yConstante = 20 + (mod(nb2,2));
		if (nb2%2 == 0) {yConstante += mod(nb+1,2);}
		
		xHex = Math.floor(((xConstante-nb)/6)+((yConstante-nb2)/2));
		yHex = Math.floor(((nb-xConstante)/4)+((yConstante-nb2)/4));
		
		if (mod(nb,6)==1 && nb2%2==0){
			xHex++;
			if (nb2%4==0 && mod(nb,12)!=7){yHex++;}
			if (mod(nb2,4)==2 && mod(nb,12)==7){yHex++;}
		}
		
		if (nb%3==0) {		
			if ((nb2%2==0 && nb%6==0) || (mod(nb2,2)==1 && mod(nb,6)==3)) {
				var nb3 = Math.floor(((y-(cosothergridx/sinothergridx)*x-(mapDisplayY+0)+(cosothergridx/sinothergridx)*(mapDisplayX+301))/(68*cosothergridx)));
				var nbCheck = 3+2*yHex+(xHex%2);
				if (nb3 == nbCheck) {yHex--;}
			}
			else {
				var nb4 = Math.floor(((y-(cosothergridy/sinothergridy)*x-(mapDisplayY+480)+(cosothergridy/sinothergridy)*(mapDisplayX+212.5))/(95.75*cosothergridy)));
				var nbCheck = 7-Math.floor(3*xHex/2)+yHex;
				if (nb4 == nbCheck) {
					if (xHex%2 == 0) {yHex--;}
					xHex++;
				}
			}
		}
        var a = new Array(2);
        a[0] = xHex;
        a[1] = yHex;
        return a;
return self}, function($ctx1) {$ctx1.fill(self,"mouseCoodToHexCoodX:y:mapX:mapY:",{x:x,y:y,mapDisplayX:mapDisplayX,mapDisplayY:mapDisplayY},smalltalk.CWEventDispatcher)})},
messageSends: []}),
smalltalk.CWEventDispatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "rowAt:",
fn: function (index){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@map"])._childAt_(index);
return $1;
}, function($ctx1) {$ctx1.fill(self,"rowAt:",{index:index},smalltalk.CWEventDispatcher)})},
messageSends: ["childAt:"]}),
smalltalk.CWEventDispatcher);



smalltalk.addClass('CWGame', smalltalk.Object, ['map', 'menu', 'eventManager'], 'Easnoth-Events');
smalltalk.addMethod(
smalltalk.method({
selector: "announce:",
fn: function (event){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._announcer())._announce_(event);
return self}, function($ctx1) {$ctx1.fill(self,"announce:",{event:event},smalltalk.CWGameBoard)})},
messageSends: ["announce:", "announcer"]}),
smalltalk.CWGame);

smalltalk.addMethod(
smalltalk.method({
selector: "announcer",
fn: function (){
var self=this;
function $CWEasnothAnnouncer(){return smalltalk.CWEasnothAnnouncer||(typeof CWEasnothAnnouncer=="undefined"?nil:CWEasnothAnnouncer)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($CWEasnothAnnouncer())._current();
return $1;
}, function($ctx1) {$ctx1.fill(self,"announcer",{},smalltalk.CWGameBoard)})},
messageSends: ["current"]}),
smalltalk.CWGame);

smalltalk.addMethod(
smalltalk.method({
selector: "firstTurn",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"firstTurn",{},smalltalk.CWGameBoard)})},
messageSends: []}),
smalltalk.CWGame);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
function $FightMenu(){return smalltalk.FightMenu||(typeof FightMenu=="undefined"?nil:FightMenu)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.Object.fn.prototype._initialize.apply(_st(self), []);
self["@menu"]=_st($FightMenu())._newFor_(self);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.CWGame)})},
messageSends: ["initialize", "newFor:"]}),
smalltalk.CWGame);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeEventHandling",
fn: function (){
var self=this;
function $CWGameStart(){return smalltalk.CWGameStart||(typeof CWGameStart=="undefined"?nil:CWGameStart)}
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._announcer())._on_do_($CWGameStart(),(function(){
return smalltalk.withContext(function($ctx2) {
return _st(self)._startGame();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initializeEventHandling",{},smalltalk.CWGameBoard)})},
messageSends: ["on:do:", "startGame", "announcer"]}),
smalltalk.CWGame);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeMapWithIndex:",
fn: function (index){
var self=this;
function $CWMap(){return smalltalk.CWMap||(typeof CWMap=="undefined"?nil:CWMap)}
return smalltalk.withContext(function($ctx1) { 
self["@map"]=_st($CWMap())._newWithMapIndex_(index);
_st(self)._initializeEventHandling();
return self}, function($ctx1) {$ctx1.fill(self,"initializeMapWithIndex:",{index:index},smalltalk.CWGameBoard)})},
messageSends: ["newWithMapIndex:", "initializeEventHandling"]}),
smalltalk.CWGame);

smalltalk.addMethod(
smalltalk.method({
selector: "startGame",
fn: function (){
var self=this;
var drawer;
function $CWMapDrawer(){return smalltalk.CWMapDrawer||(typeof CWMapDrawer=="undefined"?nil:CWMapDrawer)}
function $CWEventDispatcher(){return smalltalk.CWEventDispatcher||(typeof CWEventDispatcher=="undefined"?nil:CWEventDispatcher)}
function $CWGlobalDrawingEvent(){return smalltalk.CWGlobalDrawingEvent||(typeof CWGlobalDrawingEvent=="undefined"?nil:CWGlobalDrawingEvent)}
return smalltalk.withContext(function($ctx1) { 
_st(_st(".loading")._asJQuery())._animate_duration_(smalltalk.HashedCollection._fromPairs_([_st("top").__minus_gt("-60%")]),(2500));
drawer=_st(_st($CWMapDrawer())._new())._initializeForMap_(self["@map"]);
_st(_st($CWEventDispatcher())._new())._initializeForMap_drawer_(self["@map"],drawer);
_st(self)._announce_(_st($CWGlobalDrawingEvent())._new());
return self}, function($ctx1) {$ctx1.fill(self,"startGame",{drawer:drawer},smalltalk.CWGame)})},
messageSends: ["animate:duration:", "->", "asJQuery", "initializeForMap:", "new", "initializeForMap:drawer:", "announce:"]}),
smalltalk.CWGame);


smalltalk.addMethod(
smalltalk.method({
selector: "examples",
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
messageSends: ["newWithMapIndex:", "update", "default", "updateGOTs", "updateMonstersAndGOTs", "current"]}),
smalltalk.CWGame.klass);

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
smalltalk.CWGame.klass);


