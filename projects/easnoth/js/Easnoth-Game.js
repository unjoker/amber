smalltalk.addPackage('Easnoth-Game');
smalltalk.addClass('CWAssociationList', smalltalk.Array, [], 'Easnoth-Game');
smalltalk.addMethod(
smalltalk.method({
selector: "collect:",
category: 'collection protocol',
fn: function (aBlock){
var self=this;
var res;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1;
res=_st($Array())._new();
_st(self)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(res)._add_(_st(aBlock)._value_(each));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$1=res;
return $1;
}, function($ctx1) {$ctx1.fill(self,"collect:",{aBlock:aBlock,res:res},smalltalk.CWAssociationList)})},
args: ["aBlock"],
source: "collect: aBlock\x0a\x09| res |\x0a\x09res := Array new.\x0a\x09self do: [ :each |\x0a\x09\x09res add: (aBlock value: each) ].\x0a\x09^ res",
messageSends: ["new", "do:", "add:", "value:"],
referencedClasses: ["Array"]
}),
smalltalk.CWAssociationList);

smalltalk.addMethod(
smalltalk.method({
selector: "keyAtValue:",
category: 'collection protocol',
fn: function (aValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
var $early={};
try {
_st(self)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
$1=_st(_st(each)._value()).__eq(aValue);
if(smalltalk.assert($1)){
$2=_st(each)._key();
throw $early=[$2];
};
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"keyAtValue:",{aValue:aValue},smalltalk.CWAssociationList)})},
args: ["aValue"],
source: "keyAtValue: aValue\x0a\x09self do: [ :each |\x0a\x09\x09each value = aValue ifTrue: [ ^ each key ] ]",
messageSends: ["do:", "ifTrue:", "key", "=", "value"],
referencedClasses: []
}),
smalltalk.CWAssociationList);

smalltalk.addMethod(
smalltalk.method({
selector: "keys",
category: 'collection protocol',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._key();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"keys",{},smalltalk.CWAssociationList)})},
args: [],
source: "keys\x0a\x09^ self collect: [ :each | each key ]",
messageSends: ["collect:", "key"],
referencedClasses: []
}),
smalltalk.CWAssociationList);

smalltalk.addMethod(
smalltalk.method({
selector: "keysAndValuesDo:",
category: 'collection protocol',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._do_((function(assoc){
return smalltalk.withContext(function($ctx2) {
return _st(aBlock)._value_value_(_st(assoc)._key(),_st(assoc)._value());
}, function($ctx2) {$ctx2.fillBlock({assoc:assoc},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"keysAndValuesDo:",{aBlock:aBlock},smalltalk.CWAssociationList)})},
args: ["aBlock"],
source: "keysAndValuesDo: aBlock\x0a\x09^ self do: [ :assoc | \x0a\x09\x09aBlock value: assoc key value: assoc value ]",
messageSends: ["do:", "value:value:", "key", "value"],
referencedClasses: []
}),
smalltalk.CWAssociationList);

smalltalk.addMethod(
smalltalk.method({
selector: "values",
category: 'collection protocol',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._value();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"values",{},smalltalk.CWAssociationList)})},
args: [],
source: "values\x0a\x09^ self collect: [ :each | each value ]",
messageSends: ["collect:", "value"],
referencedClasses: []
}),
smalltalk.CWAssociationList);



smalltalk.addClass('CWEventDispatcher', smalltalk.Object, ['canvas', 'map', 'drawer', 'game', 'suspended'], 'Easnoth-Game');
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
source: "currentCell: anEvent\x0a\x09|x y cood|\x0a\x09\x0a     x := anEvent pageX - self canvas element offsetLeft.\x0a     y := anEvent pageY - self canvas element offsetTop.\x0a\x0a     cood := self mouseCoodToHexCoodX: x y: y.\x0a\x09\x0a\x09\x22if out of map then nil\x22\x0a\x09^ self cellAt: cood x y: cood y ifAbsent: [ nil ]",
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
var $1,$2;
$1=self["@suspended"];
if(! smalltalk.assert($1)){
cc=_st(self)._currentCell_(event);
cc;
$2=cc;
if(($receiver = $2) == nil || $receiver == undefined){
$2;
} else {
_st(cc)._mouseClick_(_st(self["@game"])._gameContext());
};
};
return self}, function($ctx1) {$ctx1.fill(self,"dispatchMouseClick:",{event:event,cc:cc},smalltalk.CWEventDispatcher)})},
args: ["event"],
source: "dispatchMouseClick: event\x0a\x09| cc |\x0a\x09suspended ifFalse: [\x0a\x09\x09cc := self currentCell: event.\x0a\x09\x09cc ifNotNil: [ \x0a\x09\x09\x09cc mouseClick: game gameContext ] ]",
messageSends: ["ifFalse:", "currentCell:", "ifNotNil:", "mouseClick:", "gameContext"],
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
self["@suspended"]=false;
self["@canvas"]=_st($TagBrush())._fromJQuery_canvas_(_st(_st(self)._eventManagerLayerId())._asJQuery(),_st($HTMLCanvas())._onJQuery_(_st("body")._asJQuery()));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.CWEventDispatcher)})},
args: [],
source: "initialize\x0a\x09super initialize. \x0a\x09suspended := false.\x0a\x09canvas := (TagBrush fromJQuery: self eventManagerLayerId asJQuery canvas: (HTMLCanvas onJQuery: 'body' asJQuery)).",
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
self["@drawer"]=_st(aMap)._drawer();
_st(self)._initializeEventHandling();
return self}, function($ctx1) {$ctx1.fill(self,"initializeForMap:game:",{aMap:aMap,aGame:aGame},smalltalk.CWEventDispatcher)})},
args: ["aMap", "aGame"],
source: "initializeForMap: aMap game: aGame\x0a\x09game := aGame.\x0a\x09map := aMap.\x0a\x09drawer := aMap drawer.\x0a\x09self initializeEventHandling.",
messageSends: ["drawer", "initializeEventHandling"],
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
mapDisplayX=_st(_st(self)._padding())._x();
mapDisplayY=_st(_st(self)._padding())._y();
array=_st(self)._mouseCoodToHexCoodX_y_mapX_mapY_(x,y,mapDisplayX,mapDisplayY);
xHex=_st(array)._at_((1));
yHex=_st(array)._at_((2));
$1=_st(xHex).__at(yHex);
return $1;
}, function($ctx1) {$ctx1.fill(self,"mouseCoodToHexCoodX:y:",{x:x,y:y,xHex:xHex,yHex:yHex,array:array,mapDisplayX:mapDisplayX,mapDisplayY:mapDisplayY},smalltalk.CWEventDispatcher)})},
args: ["x", "y"],
source: "mouseCoodToHexCoodX: x y: y\x0a\x09\x22function that take mouse cood in pixel and return the coods of the tile selected\x22\x0a\x09\x0a\x09\x22algo is in javascript\x22\x0a\x0a\x09| xHex yHex array mapDisplayX mapDisplayY|\x0a                \x0a\x09mapDisplayX := self padding x.\x0a\x09mapDisplayY := self padding y.\x0a\x0a\x09array:= self mouseCoodToHexCoodX: x y: y mapX: mapDisplayX mapY: mapDisplayY.\x0a    \x0a    xHex := array at: 1.\x0a    yHex := array at: 2.\x0a    \x0a\x09^xHex @ yHex.",
messageSends: ["x", "padding", "y", "mouseCoodToHexCoodX:y:mapX:mapY:", "at:", "@"],
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
selector: "padding",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@drawer"])._padding();
return $1;
}, function($ctx1) {$ctx1.fill(self,"padding",{},smalltalk.CWEventDispatcher)})},
args: [],
source: "padding\x0a\x09^ drawer padding",
messageSends: ["padding"],
referencedClasses: []
}),
smalltalk.CWEventDispatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "resume",
category: 'suspending',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@suspended"]=false;
return self}, function($ctx1) {$ctx1.fill(self,"resume",{},smalltalk.CWEventDispatcher)})},
args: [],
source: "resume\x0a\x09suspended := false",
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

smalltalk.addMethod(
smalltalk.method({
selector: "suspend",
category: 'suspending',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@suspended"]=true;
return self}, function($ctx1) {$ctx1.fill(self,"suspend",{},smalltalk.CWEventDispatcher)})},
args: [],
source: "suspend\x0a\x09suspended := true",
messageSends: [],
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
selector: "initializeAI:",
category: 'initialize-release',
fn: function (eventDispatcher){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@playerPool"])._do_((function(player){
return smalltalk.withContext(function($ctx2) {
return _st(player)._eventDispatcher_(eventDispatcher);
}, function($ctx2) {$ctx2.fillBlock({player:player},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initializeAI:",{eventDispatcher:eventDispatcher},smalltalk.CWGame)})},
args: ["eventDispatcher"],
source: "initializeAI: eventDispatcher\x0a\x09playerPool do: [ :player |\x0a\x09\x09player eventDispatcher: eventDispatcher ]",
messageSends: ["do:", "eventDispatcher:"],
referencedClasses: []
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
var eventDispatcher;
function $CWEventDispatcher(){return smalltalk.CWEventDispatcher||(typeof CWEventDispatcher=="undefined"?nil:CWEventDispatcher)}
return smalltalk.withContext(function($ctx1) { 
_st(self)._initializePlayerMonsters();
_st(self["@map"])._initializeDrawer();
eventDispatcher=_st(_st($CWEventDispatcher())._new())._initializeForMap_game_(self["@map"],self);
_st(self)._initializeAI_(eventDispatcher);
_st(self["@map"])._updateMap();
_st(self)._firstTurn();
return self}, function($ctx1) {$ctx1.fill(self,"startGame",{eventDispatcher:eventDispatcher},smalltalk.CWGame)})},
args: [],
source: "startGame\x0a\x09| eventDispatcher |\x0a\x09self initializePlayerMonsters.\x0a\x09map initializeDrawer.\x0a\x09eventDispatcher := CWEventDispatcher new initializeForMap: map game: self.\x0a\x09self initializeAI: eventDispatcher.\x0a\x09map updateMap.\x0a\x09self firstTurn.",
messageSends: ["initializePlayerMonsters", "initializeDrawer", "initializeForMap:game:", "new", "initializeAI:", "updateMap", "firstTurn"],
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



smalltalk.addClass('CWPathFinder', smalltalk.Object, ['studiedList', 'listToStudy', 'cellLast', 'result'], 'Easnoth-Game');
smalltalk.addMethod(
smalltalk.method({
selector: "iterate",
category: 'private',
fn: function (){
var self=this;
var tempArray;
function $CWAssociationList(){return smalltalk.CWAssociationList||(typeof CWAssociationList=="undefined"?nil:CWAssociationList)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
var $early={};
try {
tempArray=_st($CWAssociationList())._new();
_st(self["@listToStudy"])._keysAndValuesDo_((function(key,value){
return smalltalk.withContext(function($ctx2) {
_st(self["@studiedList"])._add_(_st(key).__minus_gt(value));
return _st(_st(value)._freeNeighbours())._do_((function(each){
return smalltalk.withContext(function($ctx3) {
$1=_st(_st(self["@studiedList"])._values())._includes_(each);
if(! smalltalk.assert($1)){
_st(tempArray)._add_(_st(value).__minus_gt(each));
$2=_st(each).__eq(self["@cellLast"]);
if(smalltalk.assert($2)){
_st(self["@studiedList"])._add_(_st(value).__minus_gt(each));
$3=_st(self)._pathAnswer();
throw $early=[$3];
};
};
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({key:key,value:value},$ctx1)})}));
self["@listToStudy"]=tempArray;
return self}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"iterate",{tempArray:tempArray},smalltalk.CWPathFinder)})},
args: [],
source: "iterate\x0a\x09\x22Calculs path for toStudyList cells and set the correct value to it\x22\x0a\x0a\x09| tempArray |\x0a\x0a\x09tempArray := CWAssociationList new.\x0a\x09listToStudy keysAndValuesDo: [ :key :value |\x0a\x09\x09studiedList add: (key -> value).\x0a\x09\x09value freeNeighbours do: [ :each |\x0a\x09\x09\x09(studiedList values includes: each) ifFalse: [ \x0a\x09\x09\x09\x09tempArray add: (value -> each).\x0a\x09\x09\x09\x09each = cellLast ifTrue: [ \x0a\x09\x09\x09\x09\x09studiedList add: (value -> each).\x0a\x09\x09\x09\x09\x09^ self pathAnswer ] ] ] ].\x0a\x09\x09 \x0a\x09listToStudy := tempArray.",
messageSends: ["new", "keysAndValuesDo:", "add:", "->", "do:", "ifFalse:", "ifTrue:", "pathAnswer", "=", "includes:", "values", "freeNeighbours"],
referencedClasses: ["CWAssociationList"]
}),
smalltalk.CWPathFinder);

smalltalk.addMethod(
smalltalk.method({
selector: "pathAnswer",
category: 'private',
fn: function (){
var self=this;
var currentCell;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
self["@result"]=_st($Array())._new();
currentCell=self["@cellLast"];
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(currentCell)._isNil();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileFalse_((function(){
return smalltalk.withContext(function($ctx2) {
_st(self["@result"])._add_(currentCell);
currentCell=_st(self["@studiedList"])._keyAtValue_(currentCell);
return currentCell;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"pathAnswer",{currentCell:currentCell},smalltalk.CWPathFinder)})},
args: [],
source: "pathAnswer\x0a\x09| currentCell |\x0a\x09result := Array new.\x0a\x09currentCell := cellLast.\x0a\x09[ currentCell isNil ] whileFalse: [ \x0a\x09\x09result add: currentCell.\x0a\x09\x09currentCell := studiedList keyAtValue: currentCell ].",
messageSends: ["new", "whileFalse:", "add:", "keyAtValue:", "isNil"],
referencedClasses: ["Array"]
}),
smalltalk.CWPathFinder);

smalltalk.addMethod(
smalltalk.method({
selector: "pathFrom:to:",
category: 'pathfinding',
fn: function (cellStart,cellEnd){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(self)._resetList();
self["@cellLast"]=cellEnd;
_st(self["@listToStudy"])._add_(_st(nil).__minus_gt(cellStart));
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self["@result"])._isNil();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileTrue_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self)._iterate();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$1=self["@result"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"pathFrom:to:",{cellStart:cellStart,cellEnd:cellEnd},smalltalk.CWPathFinder)})},
args: ["cellStart", "cellEnd"],
source: "pathFrom: cellStart to: cellEnd\x0a\x09\x22Answers the shortest path from the current cell to the cell clicked\x22\x0a\x0a\x09self resetList.\x0a\x09cellLast := cellEnd.\x0a\x09listToStudy add: (nil -> cellStart).\x0a\x09[ result isNil ] whileTrue: [ self iterate ].\x0a\x09\x0a\x09^ result",
messageSends: ["resetList", "add:", "->", "whileTrue:", "iterate", "isNil"],
referencedClasses: []
}),
smalltalk.CWPathFinder);

smalltalk.addMethod(
smalltalk.method({
selector: "resetList",
category: 'private',
fn: function (){
var self=this;
function $CWAssociationList(){return smalltalk.CWAssociationList||(typeof CWAssociationList=="undefined"?nil:CWAssociationList)}
return smalltalk.withContext(function($ctx1) { 
self["@studiedList"]=_st($CWAssociationList())._new();
self["@listToStudy"]=_st($CWAssociationList())._new();
self["@result"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"resetList",{},smalltalk.CWPathFinder)})},
args: [],
source: "resetList\x0a\x09studiedList := CWAssociationList new.\x0a\x09listToStudy := CWAssociationList new.\x0a\x09result := nil.",
messageSends: ["new"],
referencedClasses: ["CWAssociationList"]
}),
smalltalk.CWPathFinder);


smalltalk.addMethod(
smalltalk.method({
selector: "bench",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"bench",{},smalltalk.CWPathFinder.klass)})},
args: [],
source: "bench\x0a\x09\x22[ CWPathFinder new pathFrom: ((self childAt: 9) childAt: 5) to: ((self childAt: 1) childAt: 5) ] timeToRun  1430 .\x0a\x09[ ((self childAt: 9) childAt: 5) movableNeighboursCycle: 10.\x0a\x09((self childAt: 9) childAt: 5) pathTo: ((self childAt: 1) childAt: 5) ] timeToRun 8 \x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWPathFinder.klass);


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
_st(monsters)._at_put_((1),_st(self)._newTroop_(_st(data)._troop()));
_st(monsters)._at_put_((2),_st(self)._newTroopHeros_(_st(data)._troopHeros()));
_st(monsters)._at_put_((3),_st(self)._newRange_(_st(data)._range()));
_st(monsters)._at_put_((4),_st(self)._newCavalry_(_st(data)._cavalry()));
_st(monsters)._at_put_((5),_st(self)._newCavalryHeros_(_st(data)._cavalryHeros()));
_st(monsters)._at_put_((6),_st(self)._newRangeHeros_(_st(data)._rangeHeros()));
self["@team"]=monsters;
return self}, function($ctx1) {$ctx1.fill(self,"initializeWithMap:army:",{aMap:aMap,data:data,monsters:monsters},smalltalk.CWPlayer)})},
args: ["aMap", "data"],
source: "initializeWithMap: aMap army: data\x0a\x09\x09\x22initialize the monsters of the player. Assumes the team instance variable is the string from the gameSettings and change it to the monsters of the player\x22\x0a\x09\x09| monsters |\x0a\x09\x09monsters := Array new.\x0a\x09\x09monsters at: 1 put: (self newTroop: data troop).\x0a\x09\x09monsters at: 2 put: (self newTroopHeros: data troopHeros).\x0a\x09\x09monsters at: 3 put: (self newRange: data range).\x0a\x09\x09monsters at: 4 put: (self newCavalry: data cavalry).\x0a\x09\x09monsters at: 5 put: (self newCavalryHeros: data cavalryHeros).\x0a\x09\x09monsters at: 6 put: (self newRangeHeros: data rangeHeros).\x0a\x09\x09team := monsters.",
messageSends: ["new", "at:put:", "newTroop:", "troop", "newTroopHeros:", "troopHeros", "newRange:", "range", "newCavalry:", "cavalry", "newCavalryHeros:", "cavalryHeros", "newRangeHeros:", "rangeHeros"],
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
$1=[_st((1)).__at((4)),_st((1)).__at((6)),_st((2)).__at((6)),_st((3)).__at((6)),_st((4)).__at((6)),_st((1)).__at((3))];
} else {
$1=[_st((7)).__at((1)),_st((8)).__at((1)),_st((9)).__at((1)),_st((6)).__at((1)),_st((9)).__at((3)),_st((9)).__at((4))];
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"monstersPositionArray",{},smalltalk.CWPlayer)})},
args: [],
source: "monstersPositionArray\x0a\x09\x22hack for now. should be stored in database\x22\x0a\x09\x0a\x09^ self side = 1\x0a\x09\x09ifTrue: [ { 1@4 . 1@6 . 2@6. 3@6 . 4@6 . 1@3 } ]\x0a\x09\x09ifFalse: [ { 7@1 . 8@1 . 9@1. 6@1 . 9@3 . 9@4} ]",
messageSends: ["ifTrue:ifFalse:", "@", "=", "side"],
referencedClasses: []
}),
smalltalk.CWPlayer);

smalltalk.addMethod(
smalltalk.method({
selector: "newCavalry:",
category: 'factory',
fn: function (jsonStat){
var self=this;
function $CWUnitStrategy(){return smalltalk.CWUnitStrategy||(typeof CWUnitStrategy=="undefined"?nil:CWUnitStrategy)}
function $CWCavalryStrategy(){return smalltalk.CWCavalryStrategy||(typeof CWCavalryStrategy=="undefined"?nil:CWCavalryStrategy)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._newMonster_heros_type_(jsonStat,$CWUnitStrategy(),$CWCavalryStrategy());
return $1;
}, function($ctx1) {$ctx1.fill(self,"newCavalry:",{jsonStat:jsonStat},smalltalk.CWPlayer)})},
args: ["jsonStat"],
source: "newCavalry: jsonStat\x0a\x09\x09^ self newMonster: jsonStat heros: CWUnitStrategy type: CWCavalryStrategy",
messageSends: ["newMonster:heros:type:"],
referencedClasses: ["CWUnitStrategy", "CWCavalryStrategy"]
}),
smalltalk.CWPlayer);

smalltalk.addMethod(
smalltalk.method({
selector: "newCavalryHeros:",
category: 'factory',
fn: function (jsonStat){
var self=this;
function $CWHerosStrategy(){return smalltalk.CWHerosStrategy||(typeof CWHerosStrategy=="undefined"?nil:CWHerosStrategy)}
function $CWCavalryStrategy(){return smalltalk.CWCavalryStrategy||(typeof CWCavalryStrategy=="undefined"?nil:CWCavalryStrategy)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._newMonster_heros_type_(jsonStat,$CWHerosStrategy(),$CWCavalryStrategy());
return $1;
}, function($ctx1) {$ctx1.fill(self,"newCavalryHeros:",{jsonStat:jsonStat},smalltalk.CWPlayer)})},
args: ["jsonStat"],
source: "newCavalryHeros: jsonStat\x0a\x09\x09^ self newMonster: jsonStat heros: CWHerosStrategy type: CWCavalryStrategy",
messageSends: ["newMonster:heros:type:"],
referencedClasses: ["CWHerosStrategy", "CWCavalryStrategy"]
}),
smalltalk.CWPlayer);

smalltalk.addMethod(
smalltalk.method({
selector: "newMonster:heros:type:",
category: 'factory',
fn: function (jsonStat,strat,aType){
var self=this;
function $CWMonster(){return smalltalk.CWMonster||(typeof CWMonster=="undefined"?nil:CWMonster)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st($CWMonster())._new())._initializeWithStat_army_player_heros_type_(jsonStat,_st(self)._team(),self,strat,aType);
return $1;
}, function($ctx1) {$ctx1.fill(self,"newMonster:heros:type:",{jsonStat:jsonStat,strat:strat,aType:aType},smalltalk.CWPlayer)})},
args: ["jsonStat", "strat", "aType"],
source: "newMonster: jsonStat heros: strat type: aType\x0a\x09\x09\x22creates a new monster with self as player\x22\x0a\x09\x09^ CWMonster new initializeWithStat: jsonStat army: self team player: self heros: strat type: aType",
messageSends: ["initializeWithStat:army:player:heros:type:", "team", "new"],
referencedClasses: ["CWMonster"]
}),
smalltalk.CWPlayer);

smalltalk.addMethod(
smalltalk.method({
selector: "newRange:",
category: 'factory',
fn: function (jsonStat){
var self=this;
function $CWUnitStrategy(){return smalltalk.CWUnitStrategy||(typeof CWUnitStrategy=="undefined"?nil:CWUnitStrategy)}
function $CWRangeStrategy(){return smalltalk.CWRangeStrategy||(typeof CWRangeStrategy=="undefined"?nil:CWRangeStrategy)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._newMonster_heros_type_(jsonStat,$CWUnitStrategy(),$CWRangeStrategy());
return $1;
}, function($ctx1) {$ctx1.fill(self,"newRange:",{jsonStat:jsonStat},smalltalk.CWPlayer)})},
args: ["jsonStat"],
source: "newRange: jsonStat\x0a\x09\x09^ self newMonster: jsonStat heros: CWUnitStrategy type: CWRangeStrategy",
messageSends: ["newMonster:heros:type:"],
referencedClasses: ["CWUnitStrategy", "CWRangeStrategy"]
}),
smalltalk.CWPlayer);

smalltalk.addMethod(
smalltalk.method({
selector: "newRangeHeros:",
category: 'factory',
fn: function (jsonStat){
var self=this;
function $CWHerosStrategy(){return smalltalk.CWHerosStrategy||(typeof CWHerosStrategy=="undefined"?nil:CWHerosStrategy)}
function $CWRangeStrategy(){return smalltalk.CWRangeStrategy||(typeof CWRangeStrategy=="undefined"?nil:CWRangeStrategy)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._newMonster_heros_type_(jsonStat,$CWHerosStrategy(),$CWRangeStrategy());
return $1;
}, function($ctx1) {$ctx1.fill(self,"newRangeHeros:",{jsonStat:jsonStat},smalltalk.CWPlayer)})},
args: ["jsonStat"],
source: "newRangeHeros: jsonStat\x0a\x09\x09^ self newMonster: jsonStat heros: CWHerosStrategy type: CWRangeStrategy",
messageSends: ["newMonster:heros:type:"],
referencedClasses: ["CWHerosStrategy", "CWRangeStrategy"]
}),
smalltalk.CWPlayer);

smalltalk.addMethod(
smalltalk.method({
selector: "newTroop:",
category: 'factory',
fn: function (jsonStat){
var self=this;
function $CWUnitStrategy(){return smalltalk.CWUnitStrategy||(typeof CWUnitStrategy=="undefined"?nil:CWUnitStrategy)}
function $CWTroopStrategy(){return smalltalk.CWTroopStrategy||(typeof CWTroopStrategy=="undefined"?nil:CWTroopStrategy)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._newMonster_heros_type_(jsonStat,$CWUnitStrategy(),$CWTroopStrategy());
return $1;
}, function($ctx1) {$ctx1.fill(self,"newTroop:",{jsonStat:jsonStat},smalltalk.CWPlayer)})},
args: ["jsonStat"],
source: "newTroop: jsonStat\x0a\x09\x09^ self newMonster: jsonStat heros: CWUnitStrategy type: CWTroopStrategy",
messageSends: ["newMonster:heros:type:"],
referencedClasses: ["CWUnitStrategy", "CWTroopStrategy"]
}),
smalltalk.CWPlayer);

smalltalk.addMethod(
smalltalk.method({
selector: "newTroopHeros:",
category: 'factory',
fn: function (jsonStat){
var self=this;
function $CWHerosStrategy(){return smalltalk.CWHerosStrategy||(typeof CWHerosStrategy=="undefined"?nil:CWHerosStrategy)}
function $CWTroopStrategy(){return smalltalk.CWTroopStrategy||(typeof CWTroopStrategy=="undefined"?nil:CWTroopStrategy)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._newMonster_heros_type_(jsonStat,$CWHerosStrategy(),$CWTroopStrategy());
return $1;
}, function($ctx1) {$ctx1.fill(self,"newTroopHeros:",{jsonStat:jsonStat},smalltalk.CWPlayer)})},
args: ["jsonStat"],
source: "newTroopHeros: jsonStat\x0a\x09\x09^ self newMonster: jsonStat heros: CWHerosStrategy type: CWTroopStrategy",
messageSends: ["newMonster:heros:type:"],
referencedClasses: ["CWHerosStrategy", "CWTroopStrategy"]
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



smalltalk.addClass('CWAI', smalltalk.CWPlayer, ['gameContext', 'eventDispatcher'], 'Easnoth-Game');
smalltalk.addMethod(
smalltalk.method({
selector: "endTurn:",
category: 'game logic',
fn: function (aMap){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.CWPlayer.fn.prototype._endTurn_.apply(_st(self), [aMap]);
_st(_st(self)._eventDispatcher())._resume();
return self}, function($ctx1) {$ctx1.fill(self,"endTurn:",{aMap:aMap},smalltalk.CWAI)})},
args: ["aMap"],
source: "endTurn: aMap\x0a\x09super endTurn: aMap.\x0a\x09self eventDispatcher resume",
messageSends: ["endTurn:", "resume", "eventDispatcher"],
referencedClasses: []
}),
smalltalk.CWAI);

smalltalk.addMethod(
smalltalk.method({
selector: "eventDispatcher",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@eventDispatcher"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"eventDispatcher",{},smalltalk.CWAI)})},
args: [],
source: "eventDispatcher\x0a\x09^ eventDispatcher",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWAI);

smalltalk.addMethod(
smalltalk.method({
selector: "eventDispatcher:",
category: 'accessing',
fn: function (ev){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@eventDispatcher"]=ev;
return self}, function($ctx1) {$ctx1.fill(self,"eventDispatcher:",{ev:ev},smalltalk.CWAI)})},
args: ["ev"],
source: "eventDispatcher: ev\x0a\x09eventDispatcher := ev",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWAI);

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

smalltalk.addMethod(
smalltalk.method({
selector: "startTurn:",
category: 'game logic',
fn: function (aMap){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._eventDispatcher())._suspend();
smalltalk.CWPlayer.fn.prototype._startTurn_.apply(_st(self), [aMap]);
return self}, function($ctx1) {$ctx1.fill(self,"startTurn:",{aMap:aMap},smalltalk.CWAI)})},
args: ["aMap"],
source: "startTurn: aMap\x0a\x09self eventDispatcher suspend.\x0a\x09super startTurn: aMap",
messageSends: ["suspend", "eventDispatcher", "startTurn:"],
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
_st(monster)._currentMove_(_st(monster)._move());
_st(_st(monster)._attackableTargets())._do_((function(target){
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
return _st(monster)._currentMove_((0));
}, function($ctx2) {$ctx2.fillBlock({monster:monster},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"calculBestMove",{score:score,bestScore:bestScore},smalltalk.CWAggressWeakestAI)})},
args: [],
source: "calculBestMove\x0a\x09\x22Calcul the best move for the AI player. see class comment for details\x22 \x0a\x0a\x09| score bestScore |\x0a\x09bestScore := 9999 negated.\x0a\x09self team do: [ :monster |\x0a\x09\x09monster currentMove: monster move.\x0a\x09\x09monster attackableTargets do: [ :target |\x0a\x09\x09\x09score := monster attackPotential - target monster defensePotential. \x0a\x09\x09\x09score > bestScore ifTrue: [ \x0a\x09\x09\x09\x09bestScore := score.\x0a\x09\x09\x09\x09monsterToPlay := monster.\x0a\x09\x09\x09\x09cellToTarget := target ] ].\x0a\x09\x09monster currentMove: 0. ]",
messageSends: ["negated", "do:", "currentMove:", "move", "-", "defensePotential", "monster", "attackPotential", "ifTrue:", ">", "attackableTargets", "team"],
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
var $1;
relatedTargetCell=_st(_st(self["@monsterToPlay"])._parent())._cellToMoveBeforeAttack_(self["@cellToTarget"]);
$1=relatedTargetCell;
if(($receiver = $1) == nil || $receiver == undefined){
relatedTargetCell=_st(self["@monsterToPlay"])._parent();
relatedTargetCell;
} else {
$1;
};
duration=_st(_st(_st(_st(_st(self["@monsterToPlay"])._parent())._pathTo_(relatedTargetCell))._size()).__minus((1))).__star((300));
_st(_st(self["@monsterToPlay"])._root())._removeSelection();
_st(_st(self["@monsterToPlay"])._parent())._mouseClick_(_st(self)._gameContext());
_st(self["@cellToTarget"])._mouseClick_(_st(self)._gameContext());
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self)._checkForNextTurn_(self["@monsterToPlay"]);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._valueWithTimeout_(_st(_st(duration).__plus((2000))).__plus(_st(self)._time()));
return self}, function($ctx1) {$ctx1.fill(self,"executeAttack",{relatedTargetCell:relatedTargetCell,duration:duration},smalltalk.CWAggressWeakestAI)})},
args: [],
source: "executeAttack\x0a\x09| relatedTargetCell duration |\x0a\x09relatedTargetCell := monsterToPlay parent cellToMoveBeforeAttack: cellToTarget.\x0a\x09relatedTargetCell ifNil: [ \x22case where the ennemy is neighbour and no free cells around\x22 relatedTargetCell := monsterToPlay parent ].\x0a\x09duration := (monsterToPlay parent pathTo: relatedTargetCell) size - 1 * 300.\x0a\x09\x22hack\x22\x0a\x09monsterToPlay root removeSelection.\x0a\x09monsterToPlay parent mouseClick: self gameContext. \x0a\x09\x22end hack : to reset tracks and monsterselected tiles\x22\x0a\x09cellToTarget mouseClick: self gameContext. \x0a\x09[ self checkForNextTurn: monsterToPlay ] valueWithTimeout: duration + 2000 + self time.",
messageSends: ["cellToMoveBeforeAttack:", "parent", "ifNil:", "*", "-", "size", "pathTo:", "removeSelection", "root", "mouseClick:", "gameContext", "valueWithTimeout:", "+", "time", "checkForNextTurn:"],
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
var cellsToGo;
return smalltalk.withContext(function($ctx1) { 
var $1;
var $early={};
try {
self["@monsterToPlay"]=_st(_st(self)._team())._at_(_st(_st(_st(self)._team())._size())._atRandom());
_st(_st(self["@monsterToPlay"])._root())._removeSelection();
cellsToGo=_st(_st(_st(self["@monsterToPlay"])._parent())._movableNeighboursCycle_(_st(self["@monsterToPlay"])._move()))._remove_(_st(self["@monsterToPlay"])._parent());
_st(cellsToGo)._ifEmpty_((function(){
return smalltalk.withContext(function($ctx2) {
$1=_st(self)._checkForNextTurn_(self["@monsterToPlay"]);
throw $early=[$1];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
self["@cellToTarget"]=_st(_st(cellsToGo)._asArray())._atRandom();
return self}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"randomMove",{cellsToGo:cellsToGo},smalltalk.CWAggressWeakestAI)})},
args: [],
source: "randomMove\x0a\x09\x22Assumes that no monster can attack. Set bestMove to some random move of some random monster\x22\x0a\x09| cellsToGo |\x0a\x09monsterToPlay := self team at: self team size atRandom.\x0a\x09\x22hack for the selected cells for pathfinding ...\x22\x0a\x09monsterToPlay root removeSelection.\x0a\x09\x22end hack\x22\x0a\x09cellsToGo := (monsterToPlay parent movableNeighboursCycle: monsterToPlay move) remove: monsterToPlay parent.\x0a\x09cellsToGo ifEmpty: [ ^ self checkForNextTurn: monsterToPlay ]. \x22Case where the monster cannot move (surrounded by allies)\x22\x0a\x09cellToTarget := cellsToGo asArray atRandom.",
messageSends: ["at:", "atRandom", "size", "team", "removeSelection", "root", "remove:", "parent", "movableNeighboursCycle:", "move", "ifEmpty:", "checkForNextTurn:", "asArray"],
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
smalltalk.addMethod(
smalltalk.method({
selector: "eventDispatcher:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"eventDispatcher:",{anObject:anObject},smalltalk.CWHuman)})},
args: ["anObject"],
source: "eventDispatcher: anObject\x0a\x09\x22not used for humans\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWHuman);



smalltalk.addMethod(
smalltalk.method({
selector: "asBit",
category: '*Easnoth-Game',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self;
if(smalltalk.assert($2)){
$1=(1);
} else {
$1=(0);
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"asBit",{},smalltalk.Boolean)})},
args: [],
source: "asBit\x0a\x09^ self ifTrue: [ 1 ] ifFalse: [ 0 ]",
messageSends: ["ifTrue:ifFalse:"],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
smalltalk.method({
selector: "at:ifPresent:ifAbsent:",
category: '*Easnoth-Game',
fn: function (index,aBlock,anotherBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=_st(_st(index).__lt_eq(_st(self)._size()))._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(index).__gt((0));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
if(smalltalk.assert($2)){
$1=_st(aBlock)._value_(_st(self)._at_(index));
} else {
$1=_st(anotherBlock)._value();
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"at:ifPresent:ifAbsent:",{index:index,aBlock:aBlock,anotherBlock:anotherBlock},smalltalk.SequenceableCollection)})},
args: ["index", "aBlock", "anotherBlock"],
source: "at: index ifPresent: aBlock ifAbsent: anotherBlock\x0a\x0a\x09^(index <= self size and: [ index > 0 ])\x0a\x09\x09ifTrue: [ aBlock value: (self at: index) ]\x0a\x09\x09ifFalse: [ anotherBlock value ]",
messageSends: ["ifTrue:ifFalse:", "value:", "at:", "value", "and:", ">", "<=", "size"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

