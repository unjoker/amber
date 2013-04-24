smalltalk.addPackage('Easnoth-Game');
smalltalk.addClass('CWEventDispatcher', smalltalk.Object, ['canvas', 'map', 'padding', 'game'], 'Easnoth-Game');
smalltalk.CWEventDispatcher.comment="I dispatch event from eventManager canvas to cells. "
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
}, function($ctx1) {$ctx1.fill(self,"announcer",{},smalltalk.CWEventDispatcher)})},
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
}, function($ctx1) {$ctx1.fill(self,"canvas",{},smalltalk.CWEventDispatcher)})},
args: [],
source: "canvas\x0a\x09^ canvas",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWEventDispatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "cellAt:y:",
category: 'accessing',
fn: function (i,j){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._rowAt_(i))._childAt_(j);
return $1;
}, function($ctx1) {$ctx1.fill(self,"cellAt:y:",{i:i,j:j},smalltalk.CWEventDispatcher)})},
args: ["i", "j"],
source: "cellAt: i y: j\x0a\x09^ (self rowAt: i) childAt: j",
messageSends: ["childAt:", "rowAt:"],
referencedClasses: []
}),
smalltalk.CWEventDispatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "cellAt:y:ifAbsent:",
category: 'accessing',
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
args: ["i", "j", "aBlock"],
source: "cellAt: i y: j ifAbsent: aBlock\x0a\x09\x22need to change the implementation\x22\x0a\x09^ [(self rowAt: i) childAt: j] on: Error do: [ aBlock value ]",
messageSends: ["on:do:", "value", "childAt:", "rowAt:"],
referencedClasses: ["Error"]
}),
smalltalk.CWEventDispatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "currentCell:",
category: 'calculs',
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
args: ["anEvent"],
source: "currentCell: anEvent\x0a\x09|x y cood|\x0a\x09\x0a        x := anEvent pageX - self canvas element offsetLeft.\x0a        y := anEvent pageY - self canvas element offsetTop.\x0a\x0a        cood := self mouseCoodToHexCoodX: x y: y.\x0a\x09\x0a\x09\x22if out of map then nil\x22\x0a\x09^ self cellAt: cood x y: cood y ifAbsent: [ nil ]",
messageSends: ["-", "offsetLeft", "element", "canvas", "pageX", "offsetTop", "pageY", "mouseCoodToHexCoodX:y:", "cellAt:y:ifAbsent:", "x", "y"],
referencedClasses: []
}),
smalltalk.CWEventDispatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "dispatchMouseClick:",
category: 'events',
fn: function (event){
var self=this;
var cc;
return smalltalk.withContext(function($ctx1) { 
var $1;
cc=_st(self)._currentCell_(event);
$1=cc;
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
_st(cc)._mouseClick_(_st(self["@game"])._gameContext());
};
return self}, function($ctx1) {$ctx1.fill(self,"dispatchMouseClick:",{event:event,cc:cc},smalltalk.CWEventDispatcher)})},
args: ["event"],
source: "dispatchMouseClick: event\x0a\x09| cc |\x0a\x09cc := self currentCell: event.\x0a\x09cc ifNotNil: [ \x0a\x09\x09cc mouseClick: game gameContext ].",
messageSends: ["currentCell:", "ifNotNil:", "mouseClick:", "gameContext"],
referencedClasses: []
}),
smalltalk.CWEventDispatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "eventManagerLayerId",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "#eventManager";
}, function($ctx1) {$ctx1.fill(self,"eventManagerLayerId",{},smalltalk.CWEventDispatcher)})},
args: [],
source: "eventManagerLayerId\x0a\x09^ '#eventManager'",
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
self["@canvas"]=_st($TagBrush())._fromJQuery_canvas_(_st(_st(self)._eventManagerLayerId())._asJQuery(),_st($HTMLCanvas())._onJQuery_(_st("body")._asJQuery()));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.CWEventDispatcher)})},
args: [],
source: "initialize\x0a\x09super initialize. \x0a\x09canvas := (TagBrush fromJQuery: self eventManagerLayerId asJQuery canvas: (HTMLCanvas onJQuery: 'body' asJQuery)).",
messageSends: ["initialize", "fromJQuery:canvas:", "asJQuery", "eventManagerLayerId", "onJQuery:"],
referencedClasses: ["HTMLCanvas", "TagBrush"]
}),
smalltalk.CWEventDispatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeEventHandling",
category: 'initialize-release',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._canvas())._onMouseUp_((function(e){
return smalltalk.withContext(function($ctx2) {
return _st(self)._dispatchMouseClick_(e);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initializeEventHandling",{},smalltalk.CWEventDispatcher)})},
args: [],
source: "initializeEventHandling\x0a\x09self canvas onMouseUp: [:e | \x0a\x09\x09self dispatchMouseClick: e].",
messageSends: ["onMouseUp:", "dispatchMouseClick:", "canvas"],
referencedClasses: []
}),
smalltalk.CWEventDispatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeForMap:game:",
category: 'initialize-release',
fn: function (aMap,aGame){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@game"]=aGame;
self["@map"]=aMap;
self["@padding"]=_st(_st(aMap)._drawer())._padding();
_st(self)._initializeEventHandling();
return self}, function($ctx1) {$ctx1.fill(self,"initializeForMap:game:",{aMap:aMap,aGame:aGame},smalltalk.CWEventDispatcher)})},
args: ["aMap", "aGame"],
source: "initializeForMap: aMap game: aGame\x0a\x09game := aGame.\x0a\x09map := aMap.\x0a\x09padding := aMap drawer padding.\x0a\x09self initializeEventHandling.",
messageSends: ["padding", "drawer", "initializeEventHandling"],
referencedClasses: []
}),
smalltalk.CWEventDispatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "mouseCoodToHexCoodX:y:",
category: 'calculs',
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
args: ["x", "y"],
source: "mouseCoodToHexCoodX: x y: y\x0a\x09\x22function that take mouse cood in pixel and return the coods of the tile selected\x22\x0a\x09\x0a\x09\x22algo is in javascript\x22\x0a\x0a\x09| xHex yHex array mapDisplayX mapDisplayY|\x0a                \x0a\x09mapDisplayX := padding x.\x0a\x09mapDisplayY := padding y.\x0a\x0a\x09array:= self mouseCoodToHexCoodX: x y: y mapX: mapDisplayX mapY: mapDisplayY.\x0a    \x0a    xHex := array at: 1.\x0a    yHex := array at: 2.\x0a    \x0a\x09^xHex @ yHex.",
messageSends: ["x", "y", "mouseCoodToHexCoodX:y:mapX:mapY:", "at:", "@"],
referencedClasses: []
}),
smalltalk.CWEventDispatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "mouseCoodToHexCoodX:y:mapX:mapY:",
category: 'calculs',
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
args: ["x", "y", "mapDisplayX", "mapDisplayY"],
source: "mouseCoodToHexCoodX: x y: y mapX: mapDisplayX mapY: mapDisplayY\x0a\x09\x22function that take mouse cood in pixel and return the coods of the tile selected\x22\x0a\x0a\x09\x09<function mod(n, mod) {\x0a\x09\x09\x09return ((mod+(n%mod))%mod);\x0a\x09\x09}\x0a\x0a\x09\x09var cosmaingridx = 0.882947593;\x0a\x09\x09var sinmaingridx = 0.469471563;\x0a\x09\x09var cosmaingridy = -0.130526192;\x0a\x09\x09var sinmaingridy = 0.991444861;\x0a\x09\x09\x0a\x09\x09var cosothergridx = 0.4539905;\x0a\x09\x09var sinothergridx = 0.891006524;\x0a\x09\x09var cosothergridy = -0.882947593;\x0a\x09\x09var sinothergridy = 0.469471563;\x0a\x09\x09\x0a\x09\x09var nb = Math.floor(((y-(cosmaingridx/sinmaingridx)*x-(mapDisplayY+0)+(cosmaingridx/sinmaingridx)*(mapDisplayX+320))/(55*cosmaingridx)));\x0a\x09\x09var nb2 = Math.floor(((y-(cosmaingridy/sinmaingridy)*x-(mapDisplayY+480)+(cosmaingridy/sinmaingridy)*(mapDisplayX+206))/(173.2*cosmaingridy)));\x0a\x09\x09\x0a\x09\x09var xConstante = 9 + (mod(nb,3));\x0a\x09\x09var yConstante = 20 + (mod(nb2,2));\x0a\x09\x09if (nb2%2 == 0) {yConstante += mod(nb+1,2);}\x0a\x09\x09\x0a\x09\x09xHex = Math.floor(((xConstante-nb)/6)+((yConstante-nb2)/2));\x0a\x09\x09yHex = Math.floor(((nb-xConstante)/4)+((yConstante-nb2)/4));\x0a\x09\x09\x0a\x09\x09if (mod(nb,6)==1 && nb2%2==0){\x0a\x09\x09\x09xHex++;\x0a\x09\x09\x09if (nb2%4==0 && mod(nb,12)!=7){yHex++;}\x0a\x09\x09\x09if (mod(nb2,4)==2 && mod(nb,12)==7){yHex++;}\x0a\x09\x09}\x0a\x09\x09\x0a\x09\x09if (nb%3==0) {\x09\x09\x0a\x09\x09\x09if ((nb2%2==0 && nb%6==0) || (mod(nb2,2)==1 && mod(nb,6)==3)) {\x0a\x09\x09\x09\x09var nb3 = Math.floor(((y-(cosothergridx/sinothergridx)*x-(mapDisplayY+0)+(cosothergridx/sinothergridx)*(mapDisplayX+301))/(68*cosothergridx)));\x0a\x09\x09\x09\x09var nbCheck = 3+2*yHex+(xHex%2);\x0a\x09\x09\x09\x09if (nb3 == nbCheck) {yHex--;}\x0a\x09\x09\x09}\x0a\x09\x09\x09else {\x0a\x09\x09\x09\x09var nb4 = Math.floor(((y-(cosothergridy/sinothergridy)*x-(mapDisplayY+480)+(cosothergridy/sinothergridy)*(mapDisplayX+212.5))/(95.75*cosothergridy)));\x0a\x09\x09\x09\x09var nbCheck = 7-Math.floor(3*xHex/2)+yHex;\x0a\x09\x09\x09\x09if (nb4 == nbCheck) {\x0a\x09\x09\x09\x09\x09if (xHex%2 == 0) {yHex--;}\x0a\x09\x09\x09\x09\x09xHex++;\x0a\x09\x09\x09\x09}\x0a\x09\x09\x09}\x0a\x09\x09}\x0a        var a = new Array(2);\x0a        a[0] = xHex;\x0a        a[1] = yHex;\x0a        return a>",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWEventDispatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "rowAt:",
category: 'accessing',
fn: function (index){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@map"])._childAt_(index);
return $1;
}, function($ctx1) {$ctx1.fill(self,"rowAt:",{index:index},smalltalk.CWEventDispatcher)})},
args: ["index"],
source: "rowAt: index\x0a\x09^ map childAt: index",
messageSends: ["childAt:"],
referencedClasses: []
}),
smalltalk.CWEventDispatcher);



smalltalk.addClass('CWGame', smalltalk.Object, ['map', 'context', 'playerPool'], 'Easnoth-Game');
smalltalk.CWGame.comment="Represent the game. Includes the god game logic (turn system)"
smalltalk.addMethod(
smalltalk.method({
selector: "announce:",
category: 'event',
fn: function (event){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._announcer())._announce_(event);
return self}, function($ctx1) {$ctx1.fill(self,"announce:",{event:event},smalltalk.CWGame)})},
args: ["event"],
source: "announce: event\x0a\x09self announcer announce: event",
messageSends: ["announce:", "announcer"],
referencedClasses: []
}),
smalltalk.CWGame);

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
}, function($ctx1) {$ctx1.fill(self,"announcer",{},smalltalk.CWGame)})},
args: [],
source: "announcer\x0a\x09^ CWEasnothAnnouncer current",
messageSends: ["current"],
referencedClasses: ["CWEasnothAnnouncer"]
}),
smalltalk.CWGame);

smalltalk.addMethod(
smalltalk.method({
selector: "currentPlayer",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._gameContext())._currentPlayer();
return $1;
}, function($ctx1) {$ctx1.fill(self,"currentPlayer",{},smalltalk.CWGame)})},
args: [],
source: "currentPlayer\x0a\x09^ self gameContext currentPlayer",
messageSends: ["currentPlayer", "gameContext"],
referencedClasses: []
}),
smalltalk.CWGame);

smalltalk.addMethod(
smalltalk.method({
selector: "eventManagerLayerId",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "#eventManager";
}, function($ctx1) {$ctx1.fill(self,"eventManagerLayerId",{},smalltalk.CWGame)})},
args: [],
source: "eventManagerLayerId\x0a\x09^ '#eventManager'",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWGame);

smalltalk.addMethod(
smalltalk.method({
selector: "firstTurn",
category: 'game logic',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._gameContext())._nextTurn_(_st(self["@playerPool"])._at_(_st((2))._atRandom()));
_st(_st(self)._currentPlayer())._startTurn_(self["@map"]);
return self}, function($ctx1) {$ctx1.fill(self,"firstTurn",{},smalltalk.CWGame)})},
args: [],
source: "firstTurn\x0a\x09self gameContext nextTurn: (playerPool at: 2 atRandom).\x0a\x09self currentPlayer startTurn: map.",
messageSends: ["nextTurn:", "at:", "atRandom", "gameContext", "startTurn:", "currentPlayer"],
referencedClasses: []
}),
smalltalk.CWGame);

smalltalk.addMethod(
smalltalk.method({
selector: "gameContext",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@context"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"gameContext",{},smalltalk.CWGame)})},
args: [],
source: "gameContext\x0a\x09^ context",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWGame);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function (){
var self=this;
function $CWFightMenu(){return smalltalk.CWFightMenu||(typeof CWFightMenu=="undefined"?nil:CWFightMenu)}
function $CWGameContext(){return smalltalk.CWGameContext||(typeof CWGameContext=="undefined"?nil:CWGameContext)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.Object.fn.prototype._initialize.apply(_st(self), []);
_st($CWFightMenu())._new();
self["@context"]=_st($CWGameContext())._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.CWGame)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09CWFightMenu new.\x0a\x09context := CWGameContext new.",
messageSends: ["initialize", "new"],
referencedClasses: ["CWFightMenu", "CWGameContext"]
}),
smalltalk.CWGame);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeEventHandling",
category: 'initialize-release',
fn: function (){
var self=this;
function $CWGameStart(){return smalltalk.CWGameStart||(typeof CWGameStart=="undefined"?nil:CWGameStart)}
function $CWNextTurnEvent(){return smalltalk.CWNextTurnEvent||(typeof CWNextTurnEvent=="undefined"?nil:CWNextTurnEvent)}
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._announcer())._on_do_($CWGameStart(),(function(){
return smalltalk.withContext(function($ctx2) {
return _st(self)._startGame();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(_st(self)._announcer())._on_do_($CWNextTurnEvent(),(function(){
return smalltalk.withContext(function($ctx2) {
return _st(self)._nextTurn();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initializeEventHandling",{},smalltalk.CWGame)})},
args: [],
source: "initializeEventHandling\x0a\x09self announcer\x0a\x09\x09on: CWGameStart\x0a\x09\x09do: [ self startGame ].\x0a\x09self announcer\x0a\x09\x09on: CWNextTurnEvent\x0a\x09\x09do: [ self nextTurn ]",
messageSends: ["on:do:", "startGame", "announcer", "nextTurn"],
referencedClasses: ["CWGameStart", "CWNextTurnEvent"]
}),
smalltalk.CWGame);

smalltalk.addMethod(
smalltalk.method({
selector: "initializePlayerMonsters",
category: 'initialize-release',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@playerPool"])._do_((function(player){
return smalltalk.withContext(function($ctx2) {
return _st(player)._addMonstersToMap_(self["@map"]);
}, function($ctx2) {$ctx2.fillBlock({player:player},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initializePlayerMonsters",{},smalltalk.CWGame)})},
args: [],
source: "initializePlayerMonsters\x0a\x09playerPool do: [ :player |\x0a\x09\x09player addMonstersToMap: map ].",
messageSends: ["do:", "addMonstersToMap:"],
referencedClasses: []
}),
smalltalk.CWGame);

smalltalk.addMethod(
smalltalk.method({
selector: "initializePlayers",
category: 'initialize-release',
fn: function (){
var self=this;
function $CWAI(){return smalltalk.CWAI||(typeof CWAI=="undefined"?nil:CWAI)}
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(self["@playerPool"])._withIndexDo_((function(player,i){
return smalltalk.withContext(function($ctx2) {
_st(player)._side_(_st(_st(i).__minus((1.5))).__star((2)));
_st(player)._initializeWithMap_(self["@map"]);
$1=_st(player)._isKindOf_($CWAI());
if(smalltalk.assert($1)){
return _st(player)._gameContext_(_st(self)._gameContext());
};
}, function($ctx2) {$ctx2.fillBlock({player:player,i:i},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initializePlayers",{},smalltalk.CWGame)})},
args: [],
source: "initializePlayers\x0a\x09\x22To check and refactor\x22\x0a\x0a\x09playerPool withIndexDo: [ :player :i |\x0a\x09\x09player side: i - 1.5 * 2. \x22works only for 2 players. Enough for now\x22\x0a\x09\x09player initializeWithMap: map.\x0a\x09\x09(player isKindOf: CWAI) ifTrue: [ player gameContext: self gameContext ] ]",
messageSends: ["withIndexDo:", "side:", "*", "-", "initializeWithMap:", "ifTrue:", "gameContext:", "gameContext", "isKindOf:"],
referencedClasses: ["CWAI"]
}),
smalltalk.CWGame);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeWithSettings:",
category: 'initialize-release',
fn: function (gameSettings){
var self=this;
function $CWMap(){return smalltalk.CWMap||(typeof CWMap=="undefined"?nil:CWMap)}
return smalltalk.withContext(function($ctx1) { 
self["@map"]=_st($CWMap())._newWithMapIndex_(_st(gameSettings)._mapNumber());
self["@playerPool"]=_st(gameSettings)._players();
_st(self)._initializePlayers();
_st(self)._initializeEventHandling();
return self}, function($ctx1) {$ctx1.fill(self,"initializeWithSettings:",{gameSettings:gameSettings},smalltalk.CWGame)})},
args: ["gameSettings"],
source: "initializeWithSettings: gameSettings\x0a\x09map := CWMap newWithMapIndex: gameSettings mapNumber.\x0a\x09playerPool := gameSettings players.\x0a\x09self initializePlayers.\x0a\x09self initializeEventHandling.",
messageSends: ["newWithMapIndex:", "mapNumber", "players", "initializePlayers", "initializeEventHandling"],
referencedClasses: ["CWMap"]
}),
smalltalk.CWGame);

smalltalk.addMethod(
smalltalk.method({
selector: "nextPlayer",
category: 'game logic',
fn: function (){
var self=this;
var index;
return smalltalk.withContext(function($ctx1) { 
var $1;
index=_st(self["@playerPool"])._indexOf_(_st(self)._currentPlayer());
$1=_st(self["@playerPool"])._at_ifAbsent_(_st(index).__plus((1)),(function(){
return smalltalk.withContext(function($ctx2) {
return _st(self["@playerPool"])._at_((1));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"nextPlayer",{index:index},smalltalk.CWGame)})},
args: [],
source: "nextPlayer\x0a\x09| index |\x0a\x09index := playerPool indexOf: self currentPlayer.\x0a\x09^ playerPool at: index + 1 ifAbsent: [ playerPool at: 1 ]",
messageSends: ["indexOf:", "currentPlayer", "at:ifAbsent:", "+", "at:"],
referencedClasses: []
}),
smalltalk.CWGame);

smalltalk.addMethod(
smalltalk.method({
selector: "nextTurn",
category: 'game logic',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._currentPlayer())._endTurn_(self["@map"]);
_st(_st(self)._gameContext())._nextTurn_(_st(self)._nextPlayer());
_st(_st(self)._currentPlayer())._startTurn_(self["@map"]);
return self}, function($ctx1) {$ctx1.fill(self,"nextTurn",{},smalltalk.CWGame)})},
args: [],
source: "nextTurn\x0a\x09self currentPlayer endTurn: map.\x0a\x09self gameContext nextTurn: self nextPlayer.\x0a\x09self currentPlayer startTurn: map",
messageSends: ["endTurn:", "currentPlayer", "nextTurn:", "nextPlayer", "gameContext", "startTurn:"],
referencedClasses: []
}),
smalltalk.CWGame);

smalltalk.addMethod(
smalltalk.method({
selector: "startGame",
category: 'initialize-release',
fn: function (){
var self=this;
function $CWEventDispatcher(){return smalltalk.CWEventDispatcher||(typeof CWEventDispatcher=="undefined"?nil:CWEventDispatcher)}
return smalltalk.withContext(function($ctx1) { 
_st(self)._initializePlayerMonsters();
_st(self["@map"])._initializeDrawer();
_st(_st($CWEventDispatcher())._new())._initializeForMap_game_(self["@map"],self);
_st(self["@map"])._updateMap();
_st(self)._firstTurn();
return self}, function($ctx1) {$ctx1.fill(self,"startGame",{},smalltalk.CWGame)})},
args: [],
source: "startGame\x0a\x09self initializePlayerMonsters.\x0a\x09map initializeDrawer.\x0a\x09CWEventDispatcher new initializeForMap: map game: self.\x0a\x09map updateMap.\x0a\x09self firstTurn.",
messageSends: ["initializePlayerMonsters", "initializeDrawer", "initializeForMap:game:", "new", "updateMap", "firstTurn"],
referencedClasses: ["CWEventDispatcher"]
}),
smalltalk.CWGame);



smalltalk.addClass('CWGameContext', smalltalk.Object, ['currentPlayer', 'currentCell'], 'Easnoth-Game');
smalltalk.CWGameContext.comment="Represents the current context of the game, typcally, which player is playing and what monster is currently about to attack / move"
smalltalk.addMethod(
smalltalk.method({
selector: "currentCell",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@currentCell"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"currentCell",{},smalltalk.CWGameContext)})},
args: [],
source: "currentCell\x0a\x09^ currentCell",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWGameContext);

smalltalk.addMethod(
smalltalk.method({
selector: "currentCell:",
category: 'accessing',
fn: function (aCurrentCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@currentCell"]=aCurrentCell;
return self}, function($ctx1) {$ctx1.fill(self,"currentCell:",{aCurrentCell:aCurrentCell},smalltalk.CWGameContext)})},
args: ["aCurrentCell"],
source: "currentCell: aCurrentCell \x0a\x09currentCell := aCurrentCell ",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWGameContext);

smalltalk.addMethod(
smalltalk.method({
selector: "currentMonster",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@currentCell"])._monster();
return $1;
}, function($ctx1) {$ctx1.fill(self,"currentMonster",{},smalltalk.CWGameContext)})},
args: [],
source: "currentMonster\x0a\x09^ currentCell monster",
messageSends: ["monster"],
referencedClasses: []
}),
smalltalk.CWGameContext);

smalltalk.addMethod(
smalltalk.method({
selector: "currentMonster:",
category: 'accessing',
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@currentCell"]=_st(aMonster)._parent();
return self}, function($ctx1) {$ctx1.fill(self,"currentMonster:",{aMonster:aMonster},smalltalk.CWGameContext)})},
args: ["aMonster"],
source: "currentMonster: aMonster\x0a\x09currentCell := aMonster parent",
messageSends: ["parent"],
referencedClasses: []
}),
smalltalk.CWGameContext);

smalltalk.addMethod(
smalltalk.method({
selector: "currentPlayer",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@currentPlayer"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"currentPlayer",{},smalltalk.CWGameContext)})},
args: [],
source: "currentPlayer\x0a\x09^ currentPlayer",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWGameContext);

smalltalk.addMethod(
smalltalk.method({
selector: "currentPlayerSide",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@currentPlayer"])._side();
return $1;
}, function($ctx1) {$ctx1.fill(self,"currentPlayerSide",{},smalltalk.CWGameContext)})},
args: [],
source: "currentPlayerSide\x0a\x09^ currentPlayer side",
messageSends: ["side"],
referencedClasses: []
}),
smalltalk.CWGameContext);

smalltalk.addMethod(
smalltalk.method({
selector: "nextTurn:",
category: 'game logic',
fn: function (nextPlayer){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@currentPlayer"]=nextPlayer;
self["@currentCell"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"nextTurn:",{nextPlayer:nextPlayer},smalltalk.CWGameContext)})},
args: ["nextPlayer"],
source: "nextTurn: nextPlayer\x0a\x09currentPlayer := nextPlayer.\x0a\x09currentCell := nil",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWGameContext);



smalltalk.addClass('CWPlayer', smalltalk.Object, ['side', 'team'], 'Easnoth-Game');
smalltalk.CWPlayer.comment="I represent a player playing Easnoth."
smalltalk.addMethod(
smalltalk.method({
selector: "addMonstersToMap:",
category: 'initialize-release',
fn: function (aMap){
var self=this;
var positions;
return smalltalk.withContext(function($ctx1) { 
positions=_st(self)._monstersPositionArray();
_st(positions)._withIndexDo_((function(point,n){
return smalltalk.withContext(function($ctx2) {
return _st(_st(_st(aMap)._childAt_(_st(point)._x()))._childAt_(_st(point)._y()))._addMonster_(_st(self["@team"])._at_(n));
}, function($ctx2) {$ctx2.fillBlock({point:point,n:n},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"addMonstersToMap:",{aMap:aMap,positions:positions},smalltalk.CWPlayer)})},
args: ["aMap"],
source: "addMonstersToMap: aMap\x0a\x09\x22hack for now\x22\x0a\x09\x0a\x09| positions |\x0a\x09positions := self monstersPositionArray.\x0a\x09positions withIndexDo: [ :point :n |\x0a\x09\x09((aMap childAt: point x) childAt: point y) addMonster: (team at: n) ].",
messageSends: ["monstersPositionArray", "withIndexDo:", "addMonster:", "at:", "childAt:", "y", "x"],
referencedClasses: []
}),
smalltalk.CWPlayer);

smalltalk.addMethod(
smalltalk.method({
selector: "announce:",
category: 'events',
fn: function (event){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._announcer())._announce_(event);
return self}, function($ctx1) {$ctx1.fill(self,"announce:",{event:event},smalltalk.CWPlayer)})},
args: ["event"],
source: "announce: event\x0a\x09self announcer announce: event",
messageSends: ["announce:", "announcer"],
referencedClasses: []
}),
smalltalk.CWPlayer);

smalltalk.addMethod(
smalltalk.method({
selector: "announcer",
category: 'events',
fn: function (){
var self=this;
function $CWEasnothAnnouncer(){return smalltalk.CWEasnothAnnouncer||(typeof CWEasnothAnnouncer=="undefined"?nil:CWEasnothAnnouncer)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($CWEasnothAnnouncer())._current();
return $1;
}, function($ctx1) {$ctx1.fill(self,"announcer",{},smalltalk.CWPlayer)})},
args: [],
source: "announcer\x0a\x09^ CWEasnothAnnouncer current",
messageSends: ["current"],
referencedClasses: ["CWEasnothAnnouncer"]
}),
smalltalk.CWPlayer);

smalltalk.addMethod(
smalltalk.method({
selector: "endGame",
category: 'events',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(window)._alert_(_st("Someone just won. Guess who ? loser : ").__comma(_st(self)._printString()));
return self}, function($ctx1) {$ctx1.fill(self,"endGame",{},smalltalk.CWPlayer)})},
args: [],
source: "endGame\x0a\x09\x22To change... \x22\x0a\x0a\x09window alert: 'Someone just won. Guess who ? loser : ' , self printString",
messageSends: ["alert:", ",", "printString"],
referencedClasses: []
}),
smalltalk.CWPlayer);

smalltalk.addMethod(
smalltalk.method({
selector: "endTurn:",
category: 'game logic',
fn: function (map){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(map)._desactivateMonsters();
_st(map)._removeSelection();
return self}, function($ctx1) {$ctx1.fill(self,"endTurn:",{map:map},smalltalk.CWPlayer)})},
args: ["map"],
source: "endTurn: map\x0a\x09map desactivateMonsters.\x0a\x09map removeSelection.",
messageSends: ["desactivateMonsters", "removeSelection"],
referencedClasses: []
}),
smalltalk.CWPlayer);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeWithMap:",
category: 'initialize-release',
fn: function (aMap){
var self=this;
function $CWWaitForObject(){return smalltalk.CWWaitForObject||(typeof CWWaitForObject=="undefined"?nil:CWWaitForObject)}
function $CWObjectLoaded(){return smalltalk.CWObjectLoaded||(typeof CWObjectLoaded=="undefined"?nil:CWObjectLoaded)}
return smalltalk.withContext(function($ctx1) { 
_st(self)._announce_(_st($CWWaitForObject())._new());
_st(jQuery)._getJSON_onSuccess_(_st(_st("ressources/json/armies/").__comma(_st(self)._team())).__comma(".json"),(function(data){
return smalltalk.withContext(function($ctx2) {
_st(self)._initializeWithMap_army_(aMap,data);
return _st(self)._announce_(_st($CWObjectLoaded())._new());
}, function($ctx2) {$ctx2.fillBlock({data:data},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initializeWithMap:",{aMap:aMap},smalltalk.CWPlayer)})},
args: ["aMap"],
source: "initializeWithMap: aMap\x0a\x09\x22get the monsters of the player and put them in the map. Assumes the team instance variable is the string from the gameSettings and change it to the monsters of the players\x22\x0a\x09\x0a\x09self announce: CWWaitForObject new.\x0a\x09\x0a\x09jQuery \x0a\x09\x09getJSON: 'ressources/json/armies/', self team, '.json' \x0a\x09\x09onSuccess: [:data |\x0a\x09\x09\x09self initializeWithMap: aMap army: data.\x0a\x09\x09\x09self announce: CWObjectLoaded new]",
messageSends: ["announce:", "new", "getJSON:onSuccess:", ",", "team", "initializeWithMap:army:"],
referencedClasses: ["CWWaitForObject", "CWObjectLoaded"]
}),
smalltalk.CWPlayer);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeWithMap:army:",
category: 'initialize-release',
fn: function (aMap,data){
var self=this;
var monsters;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
monsters=_st($Array())._new();
_st((1))._to_by_do_((5),(2),(function(n){
return smalltalk.withContext(function($ctx2) {
return _st(monsters)._at_put_(n,_st(self)._newTroop_army_(_st(data)._warrior(),self["@team"]));
}, function($ctx2) {$ctx2.fillBlock({n:n},$ctx1)})}));
_st((2))._to_by_do_((4),(2),(function(n){
return smalltalk.withContext(function($ctx2) {
return _st(monsters)._at_put_(n,_st(self)._newHeros_army_(_st(data)._heros(),self["@team"]));
}, function($ctx2) {$ctx2.fillBlock({n:n},$ctx1)})}));
self["@team"]=monsters;
return self}, function($ctx1) {$ctx1.fill(self,"initializeWithMap:army:",{aMap:aMap,data:data,monsters:monsters},smalltalk.CWPlayer)})},
args: ["aMap", "data"],
source: "initializeWithMap: aMap army: data\x0a\x09\x09\x22initialize the monsters of the player and put them in the map. Assumes the team instance variable is the string from the gameSettings and change it to the monsters of the player\x22\x0a\x09\x09| monsters |\x0a\x09\x09monsters := Array new.\x0a\x09\x091 to: 5 by: 2 do: [:n |\x0a\x09\x09\x09monsters at: n put: (self newTroop: data warrior army: team) ].\x0a\x09\x092 to: 4 by: 2 do: [:n |\x0a\x09\x09\x09monsters at: n put: (self newHeros: data heros army: team) ].\x0a\x09\x09team := monsters.",
messageSends: ["new", "to:by:do:", "at:put:", "newTroop:army:", "warrior", "newHeros:army:", "heros"],
referencedClasses: ["Array"]
}),
smalltalk.CWPlayer);

smalltalk.addMethod(
smalltalk.method({
selector: "monstersPositionArray",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=_st(_st(self)._side()).__eq((1));
if(smalltalk.assert($2)){
$1=[_st((1)).__at((4)),_st((1)).__at((6)),_st((2)).__at((6)),_st((3)).__at((6)),_st((4)).__at((6))];
} else {
$1=[_st((7)).__at((1)),_st((8)).__at((1)),_st((9)).__at((1)),_st((6)).__at((1)),_st((9)).__at((3))];
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"monstersPositionArray",{},smalltalk.CWPlayer)})},
args: [],
source: "monstersPositionArray\x0a\x09\x22hack for now. should be stored in database\x22\x0a\x09\x0a\x09^ self side = 1\x0a\x09\x09ifTrue: [ { 1@4 . 1@6 . 2@6. 3@6 . 4@6 } ]\x0a\x09\x09ifFalse: [ { 7@1 . 8@1 . 9@1. 6@1 . 9@3 } ]",
messageSends: ["ifTrue:ifFalse:", "@", "=", "side"],
referencedClasses: []
}),
smalltalk.CWPlayer);

smalltalk.addMethod(
smalltalk.method({
selector: "newHeros:army:",
category: 'factory',
fn: function (key,army){
var self=this;
function $CWHeros(){return smalltalk.CWHeros||(typeof CWHeros=="undefined"?nil:CWHeros)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._newMonster_army_class_(key,army,$CWHeros());
return $1;
}, function($ctx1) {$ctx1.fill(self,"newHeros:army:",{key:key,army:army},smalltalk.CWPlayer)})},
args: ["key", "army"],
source: "newHeros: key army: army\x0a\x09\x09^ self newMonster: key army: army class: CWHeros",
messageSends: ["newMonster:army:class:"],
referencedClasses: ["CWHeros"]
}),
smalltalk.CWPlayer);

smalltalk.addMethod(
smalltalk.method({
selector: "newMonster:army:class:",
category: 'factory',
fn: function (key,army,aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(aClass)._new())._initializeFromKey_army_player_(key,army,self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"newMonster:army:class:",{key:key,army:army,aClass:aClass},smalltalk.CWPlayer)})},
args: ["key", "army", "aClass"],
source: "newMonster: key army: army class: aClass\x0a\x09\x09\x22creates a new monster with self as player\x22\x0a\x09\x09^ aClass new initializeFromKey: key army: army player: self",
messageSends: ["initializeFromKey:army:player:", "new"],
referencedClasses: []
}),
smalltalk.CWPlayer);

smalltalk.addMethod(
smalltalk.method({
selector: "newTroop:army:",
category: 'factory',
fn: function (key,army){
var self=this;
function $CWTroop(){return smalltalk.CWTroop||(typeof CWTroop=="undefined"?nil:CWTroop)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._newMonster_army_class_(key,army,$CWTroop());
return $1;
}, function($ctx1) {$ctx1.fill(self,"newTroop:army:",{key:key,army:army},smalltalk.CWPlayer)})},
args: ["key", "army"],
source: "newTroop: key army: army\x0a\x09\x09^ self newMonster: key army: army class: CWTroop",
messageSends: ["newMonster:army:class:"],
referencedClasses: ["CWTroop"]
}),
smalltalk.CWPlayer);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
category: 'printing',
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=aStream;
_st($1)._nextPutAll_(_st(_st(self)._class())._name());
_st($1)._nextPutAll_("(");
_st($1)._nextPutAll_(_st(self["@side"])._printString());
_st($1)._nextPutAll_("-");
_st($1)._nextPutAll_(_st(self["@team"])._printString());
$2=_st($1)._nextPutAll_(")");
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},smalltalk.CWPlayer)})},
args: ["aStream"],
source: "printOn: aStream\x0a\x09aStream \x0a\x09\x09nextPutAll: self class name;\x0a\x09\x09nextPutAll: '(';\x0a\x09\x09nextPutAll: side printString;\x0a\x09\x09nextPutAll: '-';\x0a\x09\x09nextPutAll: team printString;\x0a\x09\x09nextPutAll: ')'",
messageSends: ["nextPutAll:", "name", "class", "printString"],
referencedClasses: []
}),
smalltalk.CWPlayer);

smalltalk.addMethod(
smalltalk.method({
selector: "removeMonster:",
category: 'game logic',
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(_st(self)._team())._remove_(aMonster);
_st(aMonster)._player_(nil);
$1=_st(_st(self)._team())._isEmpty();
if(smalltalk.assert($1)){
_st(self)._endGame();
};
return self}, function($ctx1) {$ctx1.fill(self,"removeMonster:",{aMonster:aMonster},smalltalk.CWPlayer)})},
args: ["aMonster"],
source: "removeMonster: aMonster\x0a\x09self team remove: aMonster.\x0a\x09aMonster player: nil.\x0a\x09self team isEmpty \x0a\x09\x09ifTrue: [ self endGame ]",
messageSends: ["remove:", "team", "player:", "ifTrue:", "endGame", "isEmpty"],
referencedClasses: []
}),
smalltalk.CWPlayer);

smalltalk.addMethod(
smalltalk.method({
selector: "side",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@side"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"side",{},smalltalk.CWPlayer)})},
args: [],
source: "side\x0a\x09^ side",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWPlayer);

smalltalk.addMethod(
smalltalk.method({
selector: "side:",
category: 'accessing',
fn: function (int){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@side"]=int;
return self}, function($ctx1) {$ctx1.fill(self,"side:",{int:int},smalltalk.CWPlayer)})},
args: ["int"],
source: "side: int\x0a\x09side := int",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWPlayer);

smalltalk.addMethod(
smalltalk.method({
selector: "startTurn:",
category: 'game logic',
fn: function (map){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(_st(self)._team())._isEmpty();
if(smalltalk.assert($1)){
$2=_st(self)._endGame();
return $2;
};
_st(_st(self)._team())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
_st(each)._readyToBePicked();
return _st(_st(each)._parent())._showActiveMonsters();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
_st(map)._updateGOTs();
return self}, function($ctx1) {$ctx1.fill(self,"startTurn:",{map:map},smalltalk.CWPlayer)})},
args: ["map"],
source: "startTurn: map\x0a\x09self team isEmpty ifTrue: [ ^ self endGame ].\x0a\x09self team do: [ :each |\x0a\x09\x09each readyToBePicked.\x0a\x09\x09each parent showActiveMonsters ].\x0a\x09map updateGOTs.",
messageSends: ["ifTrue:", "endGame", "isEmpty", "team", "do:", "readyToBePicked", "showActiveMonsters", "parent", "updateGOTs"],
referencedClasses: []
}),
smalltalk.CWPlayer);

smalltalk.addMethod(
smalltalk.method({
selector: "team",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@team"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"team",{},smalltalk.CWPlayer)})},
args: [],
source: "team\x0a\x09^ team",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWPlayer);

smalltalk.addMethod(
smalltalk.method({
selector: "team:",
category: 'accessing',
fn: function (aTeam){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@team"]=aTeam;
return self}, function($ctx1) {$ctx1.fill(self,"team:",{aTeam:aTeam},smalltalk.CWPlayer)})},
args: ["aTeam"],
source: "team: aTeam\x0a\x09team := aTeam",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWPlayer);



smalltalk.addClass('CWAI', smalltalk.CWPlayer, ['gameContext'], 'Easnoth-Game');
smalltalk.addMethod(
smalltalk.method({
selector: "gameContext",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@gameContext"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"gameContext",{},smalltalk.CWAI)})},
args: [],
source: "gameContext\x0a\x09^ gameContext",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWAI);

smalltalk.addMethod(
smalltalk.method({
selector: "gameContext:",
category: 'accessing',
fn: function (aCtx){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@gameContext"]=aCtx;
return self}, function($ctx1) {$ctx1.fill(self,"gameContext:",{aCtx:aCtx},smalltalk.CWAI)})},
args: ["aCtx"],
source: "gameContext: aCtx\x0a\x09gameContext := aCtx",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWAI);



smalltalk.addClass('CWAggressWeakestAI', smalltalk.CWAI, ['monsterToPlay', 'cellToTarget'], 'Easnoth-Game');
smalltalk.CWAggressWeakestAI.comment="For each move, I calcul a score which correspond to :\x0a- how many damage the attacking monster will do (depends on number of dices + attack percentage )\x0a- how many hp left have the foe ( I try to attack the weakest foe)\x0a Then I execute the move that has the highest score.\x0a \x0a If I cannot attack, I just do some random move."
smalltalk.addMethod(
smalltalk.method({
selector: "calculBestMove",
category: 'game logic',
fn: function (){
var self=this;
var score,bestScore;
return smalltalk.withContext(function($ctx1) { 
var $1;
bestScore=_st((9999))._negated();
_st(_st(self)._team())._do_((function(monster){
return smalltalk.withContext(function($ctx2) {
return _st(_st(monster)._attackableTargets())._do_((function(target){
return smalltalk.withContext(function($ctx3) {
score=_st(_st(monster)._attackPotential()).__minus(_st(_st(target)._monster())._defensePotential());
score;
$1=_st(score).__gt(bestScore);
if(smalltalk.assert($1)){
bestScore=score;
bestScore;
self["@monsterToPlay"]=monster;
self["@monsterToPlay"];
self["@cellToTarget"]=target;
return self["@cellToTarget"];
};
}, function($ctx3) {$ctx3.fillBlock({target:target},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({monster:monster},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"calculBestMove",{score:score,bestScore:bestScore},smalltalk.CWAggressWeakestAI)})},
args: [],
source: "calculBestMove\x0a\x09\x22Calcul the best move for the AI player. see class comment for details\x22 \x0a\x0a\x09| score bestScore |\x0a\x09bestScore := 9999 negated.\x0a\x09self team do: [ :monster |\x0a\x09\x09monster attackableTargets do: [ :target |\x0a\x09\x09\x09score := monster attackPotential - target monster defensePotential. \x0a\x09\x09\x09score > bestScore ifTrue: [ \x0a\x09\x09\x09\x09bestScore := score.\x0a\x09\x09\x09\x09monsterToPlay := monster.\x0a\x09\x09\x09\x09cellToTarget := target ] ] ]",
messageSends: ["negated", "do:", "-", "defensePotential", "monster", "attackPotential", "ifTrue:", ">", "attackableTargets", "team"],
referencedClasses: []
}),
smalltalk.CWAggressWeakestAI);

smalltalk.addMethod(
smalltalk.method({
selector: "checkForNextTurn:",
category: 'game logic',
fn: function (monster){
var self=this;
function $CWNextTurnEvent(){return smalltalk.CWNextTurnEvent||(typeof CWNextTurnEvent=="undefined"?nil:CWNextTurnEvent)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(monster)._isInactive();
if(! smalltalk.assert($1)){
_st(self)._announce_(_st($CWNextTurnEvent())._new());
};
return self}, function($ctx1) {$ctx1.fill(self,"checkForNextTurn:",{monster:monster},smalltalk.CWAggressWeakestAI)})},
args: ["monster"],
source: "checkForNextTurn: monster\x0a\x09\x22After the monster has played, either the game has automatically triggered the next turn event (and then set the current monster to inactive state), or the AI player needs to do it manually\x22\x0a\x0a\x09monster isInactive \x0a\x09\x09ifFalse: [ self announce: CWNextTurnEvent new ]",
messageSends: ["ifFalse:", "announce:", "new", "isInactive"],
referencedClasses: ["CWNextTurnEvent"]
}),
smalltalk.CWAggressWeakestAI);

smalltalk.addMethod(
smalltalk.method({
selector: "executeAttack",
category: 'game logic',
fn: function (){
var self=this;
var relatedTargetCell,duration;
return smalltalk.withContext(function($ctx1) { 
relatedTargetCell=_st(_st(self["@monsterToPlay"])._parent())._cellToMoveBeforeAttack_(self["@cellToTarget"]);
duration=_st(_st(_st(_st(_st(self["@monsterToPlay"])._parent())._pathTo_(relatedTargetCell))._size()).__minus((1))).__star((300));
_st(self["@cellToTarget"])._mouseClick_(_st(self)._gameContext());
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self)._checkForNextTurn_(self["@monsterToPlay"]);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._valueWithTimeout_(_st(_st(duration).__plus((2000))).__plus(_st(self)._time()));
return self}, function($ctx1) {$ctx1.fill(self,"executeAttack",{relatedTargetCell:relatedTargetCell,duration:duration},smalltalk.CWAggressWeakestAI)})},
args: [],
source: "executeAttack\x0a\x09| relatedTargetCell duration |\x0a\x09relatedTargetCell := monsterToPlay parent cellToMoveBeforeAttack: cellToTarget.\x0a\x09duration := (monsterToPlay parent pathTo: relatedTargetCell) size - 1 * 300.\x0a\x09cellToTarget mouseClick: self gameContext. \x0a\x09[ self checkForNextTurn: monsterToPlay ] valueWithTimeout: duration + 2000 + self time.",
messageSends: ["cellToMoveBeforeAttack:", "parent", "*", "-", "size", "pathTo:", "mouseClick:", "gameContext", "valueWithTimeout:", "+", "time", "checkForNextTurn:"],
referencedClasses: []
}),
smalltalk.CWAggressWeakestAI);

smalltalk.addMethod(
smalltalk.method({
selector: "executeBestMove",
category: 'game logic',
fn: function (){
var self=this;
var duration,relatedTargetCell,hasAttack;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(_st(self["@monsterToPlay"])._parent())._mouseClick_(_st(self)._gameContext());
_st((function(){
return smalltalk.withContext(function($ctx2) {
$1=_st(self["@cellToTarget"])._hasMonster();
if(smalltalk.assert($1)){
return _st(self)._executeAttack();
} else {
return _st(self)._executeMove();
};
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._valueWithTimeout_(_st(self)._time());
return self}, function($ctx1) {$ctx1.fill(self,"executeBestMove",{duration:duration,relatedTargetCell:relatedTargetCell,hasAttack:hasAttack},smalltalk.CWAggressWeakestAI)})},
args: [],
source: "executeBestMove\x0a\x09\x22Assumes that the bestMove instance variable is now set to an Array(a Monster to play . aCell to move / attack). Executes this best move\x22\x0a\x0a\x09| duration relatedTargetCell hasAttack |\x0a\x09monsterToPlay parent mouseClick: self gameContext.\x0a\x09[ cellToTarget hasMonster \x0a\x09\x09\x09ifTrue: [ self executeAttack ]\x0a\x09\x09\x09ifFalse: [ self executeMove ].\x0a\x09] valueWithTimeout: self time.",
messageSends: ["mouseClick:", "gameContext", "parent", "valueWithTimeout:", "time", "ifTrue:ifFalse:", "executeAttack", "executeMove", "hasMonster"],
referencedClasses: []
}),
smalltalk.CWAggressWeakestAI);

smalltalk.addMethod(
smalltalk.method({
selector: "executeMove",
category: 'game logic',
fn: function (){
var self=this;
var duration;
return smalltalk.withContext(function($ctx1) { 
duration=_st(_st(_st(_st(_st(self["@monsterToPlay"])._parent())._pathTo_(self["@cellToTarget"]))._size()).__minus((1))).__star((300));
_st(self["@cellToTarget"])._mouseClick_(_st(self)._gameContext());
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self)._checkForNextTurn_(self["@monsterToPlay"]);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._valueWithTimeout_(_st(duration).__plus(_st(self)._time()));
return self}, function($ctx1) {$ctx1.fill(self,"executeMove",{duration:duration},smalltalk.CWAggressWeakestAI)})},
args: [],
source: "executeMove\x0a\x09| duration |\x0a\x09duration := (monsterToPlay parent pathTo: cellToTarget) size - 1 * 300.\x0a\x09cellToTarget mouseClick: self gameContext. \x0a\x09[ self checkForNextTurn: monsterToPlay ] valueWithTimeout: duration + self time.",
messageSends: ["*", "-", "size", "pathTo:", "parent", "mouseClick:", "gameContext", "valueWithTimeout:", "+", "time", "checkForNextTurn:"],
referencedClasses: []
}),
smalltalk.CWAggressWeakestAI);

smalltalk.addMethod(
smalltalk.method({
selector: "randomMove",
category: 'game logic',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
self["@monsterToPlay"]=_st(_st(self)._team())._at_(_st(_st(_st(self)._team())._size())._atRandom());
$1=_st(_st(self["@monsterToPlay"])._parent())._movableNeighboursCycle_(_st(self["@monsterToPlay"])._move());
_st($1)._remove_(_st(self["@monsterToPlay"])._parent());
$2=_st($1)._yourself();
self["@cellToTarget"]=_st($2)._atRandom();
return self}, function($ctx1) {$ctx1.fill(self,"randomMove",{},smalltalk.CWAggressWeakestAI)})},
args: [],
source: "randomMove\x0a\x09\x22Assumes that no monster can attack. Set bestMove to some random move of some random monster\x22\x0a\x09monsterToPlay := self team at: self team size atRandom.\x0a\x09cellToTarget := ((monsterToPlay parent movableNeighboursCycle: monsterToPlay move) remove: monsterToPlay parent; yourself) atRandom.",
messageSends: ["at:", "atRandom", "size", "team", "remove:", "parent", "movableNeighboursCycle:", "move", "yourself"],
referencedClasses: []
}),
smalltalk.CWAggressWeakestAI);

smalltalk.addMethod(
smalltalk.method({
selector: "reinitialize",
category: 'game logic',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@monsterToPlay"]=nil;
self["@cellToTarget"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"reinitialize",{},smalltalk.CWAggressWeakestAI)})},
args: [],
source: "reinitialize\x0a\x09monsterToPlay := nil.\x0a\x09cellToTarget := nil.",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWAggressWeakestAI);

smalltalk.addMethod(
smalltalk.method({
selector: "startTurn:",
category: 'game logic',
fn: function (map){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=_st(_st(self)._team())._isEmpty();
if(smalltalk.assert($1)){
$2=self;
return $2;
};
smalltalk.CWAI.fn.prototype._startTurn_.apply(_st(self), [map]);
_st((function(){
return smalltalk.withContext(function($ctx2) {
_st(self)._reinitialize();
_st(self)._calculBestMove();
$3=self["@monsterToPlay"];
if(($receiver = $3) == nil || $receiver == undefined){
_st(self)._randomMove();
} else {
$3;
};
return _st(self)._executeBestMove();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._valueWithTimeout_(_st(self)._time());
return self}, function($ctx1) {$ctx1.fill(self,"startTurn:",{map:map},smalltalk.CWAggressWeakestAI)})},
args: ["map"],
source: "startTurn: map\x0a\x09self team isEmpty ifTrue: [^ self].\x0a\x09super startTurn: map.\x0a\x09[\x0a\x09self reinitialize.\x0a\x09self calculBestMove.\x0a\x09monsterToPlay ifNil: [ self randomMove ].\x0a\x09self executeBestMove\x0a\x09] valueWithTimeout: self time",
messageSends: ["ifTrue:", "isEmpty", "team", "startTurn:", "valueWithTimeout:", "time", "reinitialize", "calculBestMove", "ifNil:", "randomMove", "executeBestMove"],
referencedClasses: []
}),
smalltalk.CWAggressWeakestAI);

smalltalk.addMethod(
smalltalk.method({
selector: "time",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(500);
return $1;
}, function($ctx1) {$ctx1.fill(self,"time",{},smalltalk.CWAggressWeakestAI)})},
args: [],
source: "time\x0a\x09\x22time for user to see what AI is doing\x22\x0a\x09^ 500",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWAggressWeakestAI);



smalltalk.addClass('CWHuman', smalltalk.CWPlayer, [], 'Easnoth-Game');


