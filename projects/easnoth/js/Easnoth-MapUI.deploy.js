smalltalk.addPackage('Easnoth-MapUI');
smalltalk.addClass('CWEventDispatcher', smalltalk.Object, ['canvas', 'map', 'drawer', 'game', 'suspended'], 'Easnoth-MapUI');
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
}, function($ctx1) {$ctx1.fill(self,"announcer",{},smalltalk.CWEventDispatcher)})},
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
}, function($ctx1) {$ctx1.fill(self,"canvas",{},smalltalk.CWEventDispatcher)})},
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
messageSends: ["ifFalse:", "currentCell:", "ifNotNil:", "mouseClick:", "gameContext"]}),
smalltalk.CWEventDispatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "eventManagerLayerId",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "#eventManager";
}, function($ctx1) {$ctx1.fill(self,"eventManagerLayerId",{},smalltalk.CWEventDispatcher)})},
messageSends: []}),
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
self["@suspended"]=false;
self["@canvas"]=_st($TagBrush())._fromJQuery_canvas_(_st(_st(self)._eventManagerLayerId())._asJQuery(),_st($HTMLCanvas())._onJQuery_(_st("body")._asJQuery()));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.CWEventDispatcher)})},
messageSends: ["initialize", "fromJQuery:canvas:", "asJQuery", "eventManagerLayerId", "onJQuery:"]}),
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
selector: "initializeForMap:game:",
fn: function (aMap,aGame){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@game"]=aGame;
self["@map"]=aMap;
self["@drawer"]=_st(aMap)._drawer();
_st(self)._initializeEventHandling();
return self}, function($ctx1) {$ctx1.fill(self,"initializeForMap:game:",{aMap:aMap,aGame:aGame},smalltalk.CWEventDispatcher)})},
messageSends: ["drawer", "initializeEventHandling"]}),
smalltalk.CWEventDispatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "mouseCoodToHexCoodX:y:",
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
messageSends: ["x", "padding", "y", "mouseCoodToHexCoodX:y:mapX:mapY:", "at:", "@"]}),
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
selector: "padding",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@drawer"])._padding();
return $1;
}, function($ctx1) {$ctx1.fill(self,"padding",{},smalltalk.CWEventDispatcher)})},
messageSends: ["padding"]}),
smalltalk.CWEventDispatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "resume",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@suspended"]=false;
return self}, function($ctx1) {$ctx1.fill(self,"resume",{},smalltalk.CWEventDispatcher)})},
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

smalltalk.addMethod(
smalltalk.method({
selector: "suspend",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@suspended"]=true;
return self}, function($ctx1) {$ctx1.fill(self,"suspend",{},smalltalk.CWEventDispatcher)})},
messageSends: []}),
smalltalk.CWEventDispatcher);



smalltalk.addClass('CWLayer', smalltalk.Object, [], 'Easnoth-MapUI');


smalltalk.addClass('CWCanvasLayer', smalltalk.CWLayer, ['canvas'], 'Easnoth-MapUI');
smalltalk.addMethod(
smalltalk.method({
selector: "canvasForId:",
fn: function (id){
var self=this;
function $HTMLCanvas(){return smalltalk.HTMLCanvas||(typeof HTMLCanvas=="undefined"?nil:HTMLCanvas)}
function $TagBrush(){return smalltalk.TagBrush||(typeof TagBrush=="undefined"?nil:TagBrush)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($TagBrush())._fromJQuery_canvas_(_st(id)._asJQuery(),_st($HTMLCanvas())._onJQuery_(_st("body")._asJQuery()));
return $1;
}, function($ctx1) {$ctx1.fill(self,"canvasForId:",{id:id},smalltalk.CWCanvasLayer)})},
messageSends: ["fromJQuery:canvas:", "asJQuery", "onJQuery:"]}),
smalltalk.CWCanvasLayer);

smalltalk.addMethod(
smalltalk.method({
selector: "clean",
fn: function (){
var self=this;
var elem;
return smalltalk.withContext(function($ctx1) { 
elem=_st(self["@canvas"])._element();
_st(_st(elem)._getContext_("2d"))._clearRect_y_width_height_((0),(0),_st(elem)._width(),_st(elem)._height());
return self}, function($ctx1) {$ctx1.fill(self,"clean",{elem:elem},smalltalk.CWCanvasLayer)})},
messageSends: ["element", "clearRect:y:width:height:", "width", "height", "getContext:"]}),
smalltalk.CWCanvasLayer);

smalltalk.addMethod(
smalltalk.method({
selector: "context",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@canvas"])._element())._getContext_("2d");
return $1;
}, function($ctx1) {$ctx1.fill(self,"context",{},smalltalk.CWCanvasLayer)})},
messageSends: ["getContext:", "element"]}),
smalltalk.CWCanvasLayer);

smalltalk.addMethod(
smalltalk.method({
selector: "display:",
fn: function (object){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._display_cood_(object,_st((0)).__at((0)));
return self}, function($ctx1) {$ctx1.fill(self,"display:",{object:object},smalltalk.CWCanvasLayer)})},
messageSends: ["display:cood:", "@"]}),
smalltalk.CWCanvasLayer);

smalltalk.addMethod(
smalltalk.method({
selector: "display:cood:",
fn: function (object,aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._context())._drawImage_x_y_(_st(object)._image(),_st(aPoint)._x(),_st(aPoint)._y());
return self}, function($ctx1) {$ctx1.fill(self,"display:cood:",{object:object,aPoint:aPoint},smalltalk.CWCanvasLayer)})},
messageSends: ["drawImage:x:y:", "image", "x", "y", "context"]}),
smalltalk.CWCanvasLayer);

smalltalk.addMethod(
smalltalk.method({
selector: "drawImage:x:y:",
fn: function (img,x,y){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._context())._drawImage_x_y_(img,x,y);
return self}, function($ctx1) {$ctx1.fill(self,"drawImage:x:y:",{img:img,x:x,y:y},smalltalk.CWCanvasLayer)})},
messageSends: ["drawImage:x:y:", "context"]}),
smalltalk.CWCanvasLayer);

smalltalk.addMethod(
smalltalk.method({
selector: "drawIsometric:point:",
fn: function (object,point){
var self=this;
function $Number(){return smalltalk.Number||(typeof Number=="undefined"?nil:Number)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st(self)._safeDraw_((function(context){
return smalltalk.withContext(function($ctx2) {
$1=context;
_st($1)._translate_y_(_st(_st(point)._x()).__plus((45)),_st(_st(point)._y()).__minus((7)));
_st($1)._scale_y_((1),(0.5));
_st($1)._rotate_(_st(_st($Number())._pi()).__slash((4)));
$2=_st($1)._scale_y_((1.4),(1.33));
$2;
return _st(self)._display_(object);
}, function($ctx2) {$ctx2.fillBlock({context:context},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"drawIsometric:point:",{object:object,point:point},smalltalk.CWCanvasLayer)})},
messageSends: ["safeDraw:", "translate:y:", "+", "x", "-", "y", "scale:y:", "rotate:", "/", "pi", "display:"]}),
smalltalk.CWCanvasLayer);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeWithId:",
fn: function (id){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@canvas"]=_st(self)._canvasForId_(id);
return self}, function($ctx1) {$ctx1.fill(self,"initializeWithId:",{id:id},smalltalk.CWCanvasLayer)})},
messageSends: ["canvasForId:"]}),
smalltalk.CWCanvasLayer);

smalltalk.addMethod(
smalltalk.method({
selector: "reverseDisplay:point:xPad:yPad:",
fn: function (monster,point,aX,aY){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
_st((function(){
return smalltalk.withContext(function($ctx2) {
$1=_st(self)._context();
_st($1)._translate_y_(_st(_st(point)._x()).__plus(aX),(0));
$2=_st($1)._scale_y_((-1),(1));
$2;
return _st(self)._display_cood_(monster,_st((0)).__at(_st(_st(point)._y()).__minus(aY)));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._ensure_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(self)._context();
_st($3)._scale_y_((-1),(1));
$4=_st($3)._translate_y_(_st(_st(_st(point)._x()).__plus(aX))._negated(),(0));
return $4;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"reverseDisplay:point:xPad:yPad:",{monster:monster,point:point,aX:aX,aY:aY},smalltalk.CWCanvasLayer)})},
messageSends: ["ensure:", "scale:y:", "context", "translate:y:", "negated", "+", "x", "display:cood:", "@", "-", "y"]}),
smalltalk.CWCanvasLayer);

smalltalk.addMethod(
smalltalk.method({
selector: "safeDraw:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st((function(){
return smalltalk.withContext(function($ctx2) {
_st(_st(self)._context())._save();
return _st(aBlock)._value_(_st(self)._context());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._ensure_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(self)._context())._restore();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"safeDraw:",{aBlock:aBlock},smalltalk.CWCanvasLayer)})},
messageSends: ["ensure:", "restore", "context", "save", "value:"]}),
smalltalk.CWCanvasLayer);



smalltalk.addClass('CWImageLayer', smalltalk.CWLayer, ['array'], 'Easnoth-MapUI');
smalltalk.addMethod(
smalltalk.method({
selector: "initializeForMap:",
fn: function (map){
var self=this;
function $CWTwoDimArray(){return smalltalk.CWTwoDimArray||(typeof CWTwoDimArray=="undefined"?nil:CWTwoDimArray)}
return smalltalk.withContext(function($ctx1) { 
self["@array"]=_st($CWTwoDimArray())._new_(_st(_st(_st(map)._children())._size()).__at(_st(_st(_st(map)._childAt_((1)))._children())._size()));
return self}, function($ctx1) {$ctx1.fill(self,"initializeForMap:",{map:map},smalltalk.CWImageLayer)})},
messageSends: ["new:", "@", "size", "children", "childAt:"]}),
smalltalk.CWImageLayer);



smalltalk.addClass('CWMapInterpreterContext', smalltalk.Object, ['rowIndex', 'cellIndex'], 'Easnoth-MapUI');
smalltalk.addMethod(
smalltalk.method({
selector: "currentCoods",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@rowIndex"]).__at(self["@cellIndex"]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"currentCoods",{},smalltalk.CWMapInterpreterContext)})},
messageSends: ["@"]}),
smalltalk.CWMapInterpreterContext);

smalltalk.addMethod(
smalltalk.method({
selector: "nextCell",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@cellIndex"]=_st(self["@cellIndex"]).__plus((1));
return self}, function($ctx1) {$ctx1.fill(self,"nextCell",{},smalltalk.CWMapInterpreterContext)})},
messageSends: ["+"]}),
smalltalk.CWMapInterpreterContext);

smalltalk.addMethod(
smalltalk.method({
selector: "nextRow",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@rowIndex"]=_st(self["@rowIndex"]).__plus((1));
self["@cellIndex"]=(0);
return self}, function($ctx1) {$ctx1.fill(self,"nextRow",{},smalltalk.CWMapInterpreterContext)})},
messageSends: ["+"]}),
smalltalk.CWMapInterpreterContext);

smalltalk.addMethod(
smalltalk.method({
selector: "reset",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@rowIndex"]=(0);
self["@cellIndex"]=(0);
return self}, function($ctx1) {$ctx1.fill(self,"reset",{},smalltalk.CWMapInterpreterContext)})},
messageSends: []}),
smalltalk.CWMapInterpreterContext);


smalltalk.CWMapInterpreterContext.klass.iVarNames = ['default'];
smalltalk.addMethod(
smalltalk.method({
selector: "default",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@default"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@default"]=_st(self)._new();
$1=self["@default"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"default",{},smalltalk.CWMapInterpreterContext.klass)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.CWMapInterpreterContext.klass);


smalltalk.addClass('CWGlobalDrawingContext', smalltalk.CWMapInterpreterContext, ['currentPointCache', 'drawer'], 'Easnoth-MapUI');
smalltalk.addMethod(
smalltalk.method({
selector: "calculCanvasCoods",
fn: function (){
var self=this;
var xpos,ypos,temp,sin45,sin15,sin135,sin75,padding,tileUnit;
return smalltalk.withContext(function($ctx1) { 
var $1;
padding=_st(self["@drawer"])._padding();
tileUnit=_st(self["@drawer"])._tileUnit();
sin45=(0.707106781);
sin15=(0.258819045);
sin135=(0.233445364);
sin75=(0.965925826);
temp=_st(_st(_st(self["@cellIndex"]).__plus(_st(_st(self["@rowIndex"]).__plus((1))).__slash((2))))._truncated()).__star(_st(sin15).__plus(sin75));
xpos=_st(_st(_st(_st(self["@rowIndex"]).__star(_st(sin45).__plus(sin75))).__minus(temp)).__star(tileUnit)).__plus(_st(padding)._x());
ypos=_st(_st(_st(_st(temp).__slash((2))).__plus(_st(self["@rowIndex"]).__star(sin135))).__star(tileUnit)).__plus(_st(padding)._y());
$1=_st(_st(xpos)._rounded()).__at(_st(ypos)._rounded());
return $1;
}, function($ctx1) {$ctx1.fill(self,"calculCanvasCoods",{xpos:xpos,ypos:ypos,temp:temp,sin45:sin45,sin15:sin15,sin135:sin135,sin75:sin75,padding:padding,tileUnit:tileUnit},smalltalk.CWGlobalDrawingContext)})},
messageSends: ["padding", "tileUnit", "*", "+", "truncated", "/", "x", "-", "y", "@", "rounded"]}),
smalltalk.CWGlobalDrawingContext);

smalltalk.addMethod(
smalltalk.method({
selector: "currentPoint",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@currentPointCache"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@currentPointCache"]=_st(self)._calculCanvasCoods();
$1=self["@currentPointCache"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"currentPoint",{},smalltalk.CWGlobalDrawingContext)})},
messageSends: ["ifNil:", "calculCanvasCoods"]}),
smalltalk.CWGlobalDrawingContext);

smalltalk.addMethod(
smalltalk.method({
selector: "nextCell",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.CWMapInterpreterContext.fn.prototype._nextCell.apply(_st(self), []);
self["@currentPointCache"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"nextCell",{},smalltalk.CWGlobalDrawingContext)})},
messageSends: ["nextCell"]}),
smalltalk.CWGlobalDrawingContext);

smalltalk.addMethod(
smalltalk.method({
selector: "reset:",
fn: function (aDrawer){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
smalltalk.CWMapInterpreterContext.fn.prototype._reset.apply(_st(self), []);
self["@currentPointCache"]=nil;
$1=self["@drawer"];
if(($receiver = $1) == nil || $receiver == undefined){
self["@drawer"]=aDrawer;
self["@drawer"];
} else {
$1;
};
return self}, function($ctx1) {$ctx1.fill(self,"reset:",{aDrawer:aDrawer},smalltalk.CWGlobalDrawingContext)})},
messageSends: ["reset", "ifNil:"]}),
smalltalk.CWGlobalDrawingContext);

smalltalk.addMethod(
smalltalk.method({
selector: "visitGameOverTile:",
fn: function (got){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@drawer"])._drawGOT_(got);
return self}, function($ctx1) {$ctx1.fill(self,"visitGameOverTile:",{got:got},smalltalk.CWGlobalDrawingContext)})},
messageSends: ["drawGOT:"]}),
smalltalk.CWGlobalDrawingContext);

smalltalk.addMethod(
smalltalk.method({
selector: "visitHeros:",
fn: function (heros){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@drawer"])._drawHeros_(heros);
return self}, function($ctx1) {$ctx1.fill(self,"visitHeros:",{heros:heros},smalltalk.CWGlobalDrawingContext)})},
messageSends: ["drawHeros:"]}),
smalltalk.CWGlobalDrawingContext);

smalltalk.addMethod(
smalltalk.method({
selector: "visitOverTile:",
fn: function (ot){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@drawer"])._drawBackground_(ot);
return self}, function($ctx1) {$ctx1.fill(self,"visitOverTile:",{ot:ot},smalltalk.CWGlobalDrawingContext)})},
messageSends: ["drawBackground:"]}),
smalltalk.CWGlobalDrawingContext);

smalltalk.addMethod(
smalltalk.method({
selector: "visitTile:",
fn: function (aTile){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@drawer"])._drawBackTile();
_st(self["@drawer"])._drawBackground_(aTile);
return self}, function($ctx1) {$ctx1.fill(self,"visitTile:",{aTile:aTile},smalltalk.CWGlobalDrawingContext)})},
messageSends: ["drawBackTile", "drawBackground:"]}),
smalltalk.CWGlobalDrawingContext);

smalltalk.addMethod(
smalltalk.method({
selector: "visitUnit:",
fn: function (aUnit){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@drawer"])._drawUnit_(aUnit);
return self}, function($ctx1) {$ctx1.fill(self,"visitUnit:",{aUnit:aUnit},smalltalk.CWGlobalDrawingContext)})},
messageSends: ["drawUnit:"]}),
smalltalk.CWGlobalDrawingContext);



smalltalk.addClass('CWMonsterAndGOTDrawingContext', smalltalk.CWGlobalDrawingContext, [], 'Easnoth-MapUI');
smalltalk.addMethod(
smalltalk.method({
selector: "visitOverTile:",
fn: function (ot){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"visitOverTile:",{ot:ot},smalltalk.CWMonsterAndGOTDrawingContext)})},
messageSends: []}),
smalltalk.CWMonsterAndGOTDrawingContext);

smalltalk.addMethod(
smalltalk.method({
selector: "visitTile:",
fn: function (aTile){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"visitTile:",{aTile:aTile},smalltalk.CWMonsterAndGOTDrawingContext)})},
messageSends: []}),
smalltalk.CWMonsterAndGOTDrawingContext);



smalltalk.addClass('CWGOTDrawingContext', smalltalk.CWMonsterAndGOTDrawingContext, [], 'Easnoth-MapUI');
smalltalk.addMethod(
smalltalk.method({
selector: "visitHeros:",
fn: function (heros){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"visitHeros:",{heros:heros},smalltalk.CWGOTDrawingContext)})},
messageSends: []}),
smalltalk.CWGOTDrawingContext);

smalltalk.addMethod(
smalltalk.method({
selector: "visitUnit:",
fn: function (aUnit){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"visitUnit:",{aUnit:aUnit},smalltalk.CWGOTDrawingContext)})},
messageSends: []}),
smalltalk.CWGOTDrawingContext);



smalltalk.addClass('CWTwoDimArray', smalltalk.Object, ['array'], 'Easnoth-MapUI');
smalltalk.addMethod(
smalltalk.method({
selector: "do:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@array"])._do_((function(subArray){
return smalltalk.withContext(function($ctx2) {
return _st(subArray)._do_((function(each){
return smalltalk.withContext(function($ctx3) {
return _st(aBlock)._value_(each);
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({subArray:subArray},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"do:",{aBlock:aBlock},smalltalk.CWTwoDimArray)})},
messageSends: ["do:", "value:"]}),
smalltalk.CWTwoDimArray);

smalltalk.addMethod(
smalltalk.method({
selector: "i:j:",
fn: function (i,j){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@array"])._at_(i))._at_(j);
return $1;
}, function($ctx1) {$ctx1.fill(self,"i:j:",{i:i,j:j},smalltalk.CWTwoDimArray)})},
messageSends: ["at:"]}),
smalltalk.CWTwoDimArray);

smalltalk.addMethod(
smalltalk.method({
selector: "i:j:put:",
fn: function (i,j,value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@array"])._at_(i))._at_put_(j,value);
return $1;
}, function($ctx1) {$ctx1.fill(self,"i:j:put:",{i:i,j:j,value:value},smalltalk.CWTwoDimArray)})},
messageSends: ["at:put:", "at:"]}),
smalltalk.CWTwoDimArray);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeWithSize:",
fn: function (aPoint){
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
self["@array"]=_st($Array())._new_(_st(aPoint)._x());
_st((1))._to_do_(_st(aPoint)._x(),(function(index){
return smalltalk.withContext(function($ctx2) {
return _st(self["@array"])._at_put_(index,_st($Array())._new_(_st(aPoint)._y()));
}, function($ctx2) {$ctx2.fillBlock({index:index},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initializeWithSize:",{aPoint:aPoint},smalltalk.CWTwoDimArray)})},
messageSends: ["new:", "x", "to:do:", "at:put:", "y"]}),
smalltalk.CWTwoDimArray);


smalltalk.addMethod(
smalltalk.method({
selector: "new",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._shouldNotImplement();
return self}, function($ctx1) {$ctx1.fill(self,"new",{},smalltalk.CWTwoDimArray.klass)})},
messageSends: ["shouldNotImplement"]}),
smalltalk.CWTwoDimArray.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "new:",
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st(self)._new();
_st($2)._initializeWithSize_(aPoint);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"new:",{aPoint:aPoint},smalltalk.CWTwoDimArray.klass)})},
messageSends: ["initializeWithSize:", "new", "yourself"]}),
smalltalk.CWTwoDimArray.klass);


smalltalk.addClass('CWVisitor', smalltalk.Object, [], 'Easnoth-MapModel');
smalltalk.addMethod(
smalltalk.method({
selector: "visitCell:",
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"visitCell:",{aCell:aCell},smalltalk.CWVisitor)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.CWVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitChildTrees:",
fn: function (aBusinessObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(aBusinessObject)._children())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(self)._visitTree_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"visitChildTrees:",{aBusinessObject:aBusinessObject},smalltalk.CWVisitor)})},
messageSends: ["do:", "visitTree:", "children"]}),
smalltalk.CWVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitChildren:",
fn: function (aBusinessObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(aBusinessObject)._children())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._accept_(self);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"visitChildren:",{aBusinessObject:aBusinessObject},smalltalk.CWVisitor)})},
messageSends: ["do:", "accept:", "children"]}),
smalltalk.CWVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitGameOverTile:",
fn: function (aGameOverTile){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"visitGameOverTile:",{aGameOverTile:aGameOverTile},smalltalk.CWVisitor)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.CWVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitHeros:",
fn: function (aHeros){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"visitHeros:",{aHeros:aHeros},smalltalk.CWVisitor)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.CWVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitMap:",
fn: function (aMap){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"visitMap:",{aMap:aMap},smalltalk.CWVisitor)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.CWVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitOverTile:",
fn: function (anOverTile){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"visitOverTile:",{anOverTile:anOverTile},smalltalk.CWVisitor)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.CWVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitRow:",
fn: function (aRow){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"visitRow:",{aRow:aRow},smalltalk.CWVisitor)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.CWVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitTile:",
fn: function (aTile){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"visitTile:",{aTile:aTile},smalltalk.CWVisitor)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.CWVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitTree:",
fn: function (aComponent){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aComponent)._accept_(self);
_st(self)._visitChildTrees_(aComponent);
return self}, function($ctx1) {$ctx1.fill(self,"visitTree:",{aComponent:aComponent},smalltalk.CWVisitor)})},
messageSends: ["accept:", "visitChildTrees:"]}),
smalltalk.CWVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitUnit:",
fn: function (aUnit){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"visitUnit:",{aUnit:aUnit},smalltalk.CWVisitor)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.CWVisitor);


smalltalk.CWVisitor.klass.iVarNames = ['singleton'];

smalltalk.addClass('CWJsonWriter', smalltalk.CWVisitor, ['stream', 'indentLevel', 'otNumber'], 'Easnoth-MapModel');
smalltalk.addMethod(
smalltalk.method({
selector: "commaCr",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self;
_st($1)._nextPutAll_(",");
$2=_st($1)._cr();
return self}, function($ctx1) {$ctx1.fill(self,"commaCr",{},smalltalk.CWJsonWriter)})},
messageSends: ["nextPutAll:", "cr"]}),
smalltalk.CWJsonWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "cr",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@stream"])._cr();
_st((1))._to_do_(self["@indentLevel"],(function(each){
return smalltalk.withContext(function($ctx2) {
return _st(self["@stream"])._tab();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"cr",{},smalltalk.CWJsonWriter)})},
messageSends: ["cr", "to:do:", "tab"]}),
smalltalk.CWJsonWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "crIndentDecr",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._decreaseIndent();
_st(self)._cr();
return self}, function($ctx1) {$ctx1.fill(self,"crIndentDecr",{},smalltalk.CWJsonWriter)})},
messageSends: ["decreaseIndent", "cr"]}),
smalltalk.CWJsonWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "crIndentIncr",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._increaseIndent();
_st(self)._cr();
return self}, function($ctx1) {$ctx1.fill(self,"crIndentIncr",{},smalltalk.CWJsonWriter)})},
messageSends: ["increaseIndent", "cr"]}),
smalltalk.CWJsonWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "decreaseIndent",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@indentLevel"]=_st(self["@indentLevel"]).__minus((1));
$1=_st(self["@indentLevel"]).__lt((0));
if(smalltalk.assert($1)){
_st(self)._error_("indentation problem");
};
return self}, function($ctx1) {$ctx1.fill(self,"decreaseIndent",{},smalltalk.CWJsonWriter)})},
messageSends: ["-", "ifTrue:", "error:", "<"]}),
smalltalk.CWJsonWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "endArray",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self;
_st($1)._crIndentDecr();
$2=_st($1)._nextPutAll_("]");
return self}, function($ctx1) {$ctx1.fill(self,"endArray",{},smalltalk.CWJsonWriter)})},
messageSends: ["crIndentDecr", "nextPutAll:"]}),
smalltalk.CWJsonWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "endObject",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self;
_st($1)._crIndentDecr();
$2=_st($1)._nextPutAll_("}");
return self}, function($ctx1) {$ctx1.fill(self,"endObject",{},smalltalk.CWJsonWriter)})},
messageSends: ["crIndentDecr", "nextPutAll:"]}),
smalltalk.CWJsonWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "exportMap:",
fn: function (aMap){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(aMap)._removeSelection();
_st(self)._visitMap_(aMap);
$1=_st(_st(self["@stream"])._collection())._asString();
return $1;
}, function($ctx1) {$ctx1.fill(self,"exportMap:",{aMap:aMap},smalltalk.CWJsonWriter)})},
messageSends: ["removeSelection", "visitMap:", "asString", "collection"]}),
smalltalk.CWJsonWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "extractKeyFrom:",
fn: function (url){
var self=this;
var imageName;
return smalltalk.withContext(function($ctx1) { 
var $1;
imageName=_st(_st(url)._tokenize_("/"))._last();
$1=_st(_st(imageName)._tokenize_("."))._first();
return $1;
}, function($ctx1) {$ctx1.fill(self,"extractKeyFrom:",{url:url,imageName:imageName},smalltalk.CWJsonWriter)})},
messageSends: ["last", "tokenize:", "first"]}),
smalltalk.CWJsonWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "increaseIndent",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@indentLevel"]=_st(self["@indentLevel"]).__plus((1));
return self}, function($ctx1) {$ctx1.fill(self,"increaseIndent",{},smalltalk.CWJsonWriter)})},
messageSends: ["+"]}),
smalltalk.CWJsonWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
function $StringStream(){return smalltalk.StringStream||(typeof StringStream=="undefined"?nil:StringStream)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.CWVisitor.fn.prototype._initialize.apply(_st(self), []);
self["@stream"]=_st($StringStream())._on_("");
self["@indentLevel"]=(0);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.CWJsonWriter)})},
messageSends: ["initialize", "on:"]}),
smalltalk.CWJsonWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "nextPutAll:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@stream"])._nextPutAll_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"nextPutAll:",{aString:aString},smalltalk.CWJsonWriter)})},
messageSends: ["nextPutAll:"]}),
smalltalk.CWJsonWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "objectFieldName:intValue:",
fn: function (aName,anInt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self;
_st($1)._nextPutAll_("\x22");
_st($1)._nextPutAll_(aName);
_st($1)._nextPutAll_("\x22: ");
$2=_st($1)._nextPutAll_(_st(anInt)._printString());
return self}, function($ctx1) {$ctx1.fill(self,"objectFieldName:intValue:",{aName:aName,anInt:anInt},smalltalk.CWJsonWriter)})},
messageSends: ["nextPutAll:", "printString"]}),
smalltalk.CWJsonWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "objectFieldName:stringValue:",
fn: function (aName,aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self;
_st($1)._nextPutAll_("\x22");
_st($1)._nextPutAll_(aName);
_st($1)._nextPutAll_("\x22: \x22");
_st($1)._nextPutAll_(aString);
$2=_st($1)._nextPutAll_("\x22");
return self}, function($ctx1) {$ctx1.fill(self,"objectFieldName:stringValue:",{aName:aName,aString:aString},smalltalk.CWJsonWriter)})},
messageSends: ["nextPutAll:"]}),
smalltalk.CWJsonWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "space",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@stream"])._space();
return self}, function($ctx1) {$ctx1.fill(self,"space",{},smalltalk.CWJsonWriter)})},
messageSends: ["space"]}),
smalltalk.CWJsonWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "startArrayNamed:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self;
_st($1)._nextPutAll_("\x22");
_st($1)._nextPutAll_(aString);
_st($1)._nextPutAll_("\x22: [");
$2=_st($1)._crIndentIncr();
return self}, function($ctx1) {$ctx1.fill(self,"startArrayNamed:",{aString:aString},smalltalk.CWJsonWriter)})},
messageSends: ["nextPutAll:", "crIndentIncr"]}),
smalltalk.CWJsonWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "startObject",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self;
_st($1)._nextPutAll_("{");
$2=_st($1)._crIndentIncr();
return self}, function($ctx1) {$ctx1.fill(self,"startObject",{},smalltalk.CWJsonWriter)})},
messageSends: ["nextPutAll:", "crIndentIncr"]}),
smalltalk.CWJsonWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "startObjectNamed:",
fn: function (aName){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self;
_st($1)._nextPutAll_("\x22");
_st($1)._nextPutAll_(aName);
_st($1)._nextPutAll_("\x22: ");
$2=_st($1)._startObject();
return self}, function($ctx1) {$ctx1.fill(self,"startObjectNamed:",{aName:aName},smalltalk.CWJsonWriter)})},
messageSends: ["nextPutAll:", "startObject"]}),
smalltalk.CWJsonWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "visitCell:",
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
self["@otNumber"]=(0);
$1=self;
_st($1)._startObject();
_st($1)._visitChildren_(aCell);
$2=_st($1)._endObject();
return self}, function($ctx1) {$ctx1.fill(self,"visitCell:",{aCell:aCell},smalltalk.CWJsonWriter)})},
messageSends: ["startObject", "visitChildren:", "endObject"]}),
smalltalk.CWJsonWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "visitChildren:",
fn: function (aBusinessObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(_st(aBusinessObject)._children())._withIndexDo_((function(child,i){
return smalltalk.withContext(function($ctx2) {
_st(child)._accept_(self);
$1=_st(i).__eq(_st(_st(aBusinessObject)._children())._size());
if(! smalltalk.assert($1)){
return _st(self)._commaCr();
};
}, function($ctx2) {$ctx2.fillBlock({child:child,i:i},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"visitChildren:",{aBusinessObject:aBusinessObject},smalltalk.CWJsonWriter)})},
messageSends: ["withIndexDo:", "accept:", "ifFalse:", "commaCr", "=", "size", "children"]}),
smalltalk.CWJsonWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "visitGameOverTile:",
fn: function (aGameOverTile){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("gameOverTile should have been removed before exportation");
return self}, function($ctx1) {$ctx1.fill(self,"visitGameOverTile:",{aGameOverTile:aGameOverTile},smalltalk.CWJsonWriter)})},
messageSends: ["error:"]}),
smalltalk.CWJsonWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "visitHeros:",
fn: function (aHeros){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self;
_st($1)._startObjectNamed_("heros");
$2=_st($1)._visitMonster_(aHeros);
return self}, function($ctx1) {$ctx1.fill(self,"visitHeros:",{aHeros:aHeros},smalltalk.CWJsonWriter)})},
messageSends: ["startObjectNamed:", "visitMonster:"]}),
smalltalk.CWJsonWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "visitMap:",
fn: function (aMap){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self;
_st($1)._startObject();
_st($1)._objectFieldName_stringValue_("name","foo");
_st($1)._commaCr();
_st($1)._startArrayNamed_("row");
_st($1)._visitChildren_(aMap);
_st($1)._endArray();
$2=_st($1)._endObject();
return self}, function($ctx1) {$ctx1.fill(self,"visitMap:",{aMap:aMap},smalltalk.CWJsonWriter)})},
messageSends: ["startObject", "objectFieldName:stringValue:", "commaCr", "startArrayNamed:", "visitChildren:", "endArray", "endObject"]}),
smalltalk.CWJsonWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "visitMonster:",
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self;
_st($1)._objectFieldName_stringValue_("name",_st(self)._extractKeyFrom_(_st(_st(aMonster)._image())._src()));
_st($1)._commaCr();
_st($1)._objectFieldName_intValue_("side",_st(aMonster)._side());
$2=_st($1)._endObject();
return self}, function($ctx1) {$ctx1.fill(self,"visitMonster:",{aMonster:aMonster},smalltalk.CWJsonWriter)})},
messageSends: ["objectFieldName:stringValue:", "extractKeyFrom:", "src", "image", "commaCr", "objectFieldName:intValue:", "side", "endObject"]}),
smalltalk.CWJsonWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "visitOverTile:",
fn: function (anOverTile){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@otNumber"]=_st(self["@otNumber"]).__plus((1));
_st(self)._objectFieldName_stringValue_(_st("overtile").__comma(self["@otNumber"]),_st(self)._extractKeyFrom_(_st(_st(anOverTile)._image())._src()));
return self}, function($ctx1) {$ctx1.fill(self,"visitOverTile:",{anOverTile:anOverTile},smalltalk.CWJsonWriter)})},
messageSends: ["+", "objectFieldName:stringValue:", ",", "extractKeyFrom:", "src", "image"]}),
smalltalk.CWJsonWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "visitRow:",
fn: function (aRow){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self;
_st($1)._startObject();
_st($1)._startArrayNamed_("cells");
_st($1)._visitChildren_(aRow);
_st($1)._endArray();
$2=_st($1)._endObject();
return self}, function($ctx1) {$ctx1.fill(self,"visitRow:",{aRow:aRow},smalltalk.CWJsonWriter)})},
messageSends: ["startObject", "startArrayNamed:", "visitChildren:", "endArray", "endObject"]}),
smalltalk.CWJsonWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "visitTile:",
fn: function (aTile){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._objectFieldName_stringValue_("tile",_st(self)._extractKeyFrom_(_st(_st(aTile)._image())._src()));
return self}, function($ctx1) {$ctx1.fill(self,"visitTile:",{aTile:aTile},smalltalk.CWJsonWriter)})},
messageSends: ["objectFieldName:stringValue:", "extractKeyFrom:", "src", "image"]}),
smalltalk.CWJsonWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "visitUnit:",
fn: function (aUnit){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self;
_st($1)._startObjectNamed_("unit");
$2=_st($1)._visitMonster_(aUnit);
return self}, function($ctx1) {$ctx1.fill(self,"visitUnit:",{aUnit:aUnit},smalltalk.CWJsonWriter)})},
messageSends: ["startObjectNamed:", "visitMonster:"]}),
smalltalk.CWJsonWriter);



smalltalk.addClass('CWMapInterpreter', smalltalk.CWVisitor, ['executionContext'], 'Easnoth-MapUI');
smalltalk.addMethod(
smalltalk.method({
selector: "executionContext",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@executionContext"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"executionContext",{},smalltalk.CWMapInterpreter)})},
messageSends: []}),
smalltalk.CWMapInterpreter);



smalltalk.addClass('CWMapDrawer', smalltalk.CWMapInterpreter, ['layers', 'padding', 'map'], 'Easnoth-MapUI');
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
}, function($ctx1) {$ctx1.fill(self,"announcer",{},smalltalk.CWMapDrawer)})},
messageSends: ["current"]}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "backTileImage",
fn: function (){
var self=this;
function $CWBackground(){return smalltalk.CWBackground||(typeof CWBackground=="undefined"?nil:CWBackground)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($CWBackground())._imageCacheAt_("back");
return $1;
}, function($ctx1) {$ctx1.fill(self,"backTileImage",{},smalltalk.CWMapDrawer)})},
messageSends: ["imageCacheAt:"]}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "backgroundCanvasId",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "#background";
}, function($ctx1) {$ctx1.fill(self,"backgroundCanvasId",{},smalltalk.CWMapDrawer)})},
messageSends: []}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "backgroundLayer",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@layers"])._at_((1));
return $1;
}, function($ctx1) {$ctx1.fill(self,"backgroundLayer",{},smalltalk.CWMapDrawer)})},
messageSends: ["at:"]}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "canvasPadding",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(40);
return $1;
}, function($ctx1) {$ctx1.fill(self,"canvasPadding",{},smalltalk.CWMapDrawer)})},
messageSends: []}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "currentCoods",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._executionContext())._currentCoods();
return $1;
}, function($ctx1) {$ctx1.fill(self,"currentCoods",{},smalltalk.CWMapDrawer)})},
messageSends: ["currentCoods", "executionContext"]}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "currentPoint",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._executionContext())._currentPoint();
return $1;
}, function($ctx1) {$ctx1.fill(self,"currentPoint",{},smalltalk.CWMapDrawer)})},
messageSends: ["currentPoint", "executionContext"]}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "down",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@padding"]=_st(self["@padding"]).__plus(_st((0)).__at(_st(self)._moveIncrement()));
_st(self)._updateMap();
return self}, function($ctx1) {$ctx1.fill(self,"down",{},smalltalk.CWMapDrawer)})},
messageSends: ["+", "@", "moveIncrement", "updateMap"]}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "drawBackTile",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._backgroundLayer())._drawImage_x_y_(_st(self)._backTileImage(),_st(_st(_st(self)._currentPoint())._x()).__minus((4)),_st(_st(_st(self)._currentPoint())._y()).__plus((20)));
return self}, function($ctx1) {$ctx1.fill(self,"drawBackTile",{},smalltalk.CWMapDrawer)})},
messageSends: ["drawImage:x:y:", "backTileImage", "-", "x", "currentPoint", "+", "y", "backgroundLayer"]}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "drawBackground:",
fn: function (object){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._backgroundLayer())._drawIsometric_point_(object,_st(self)._currentPoint());
return self}, function($ctx1) {$ctx1.fill(self,"drawBackground:",{object:object},smalltalk.CWMapDrawer)})},
messageSends: ["drawIsometric:point:", "currentPoint", "backgroundLayer"]}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "drawGOT:",
fn: function (got){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._gotLayer())._safeDraw_((function(context){
return smalltalk.withContext(function($ctx2) {
return _st(_st(self)._gotLayer())._display_cood_(got,_st(_st(_st(_st(self)._currentPoint())._x()).__minus((15))).__at(_st(_st(_st(self)._currentPoint())._y()).__minus((10))));
}, function($ctx2) {$ctx2.fillBlock({context:context},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"drawGOT:",{got:got},smalltalk.CWMapDrawer)})},
messageSends: ["safeDraw:", "display:cood:", "@", "-", "y", "currentPoint", "x", "gotLayer"]}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "drawHeros:",
fn: function (heros){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(heros)._side())._negative();
if(smalltalk.assert($1)){
_st(_st(self)._monsterLayer())._reverseDisplay_point_xPad_yPad_(heros,_st(self)._currentPoint(),(87),(28));
} else {
_st(_st(self)._monsterLayer())._display_cood_(heros,_st(_st(_st(_st(self)._currentPoint())._x()).__plus((15))).__at(_st(_st(_st(self)._currentPoint())._y()).__minus((28))));
};
return self}, function($ctx1) {$ctx1.fill(self,"drawHeros:",{heros:heros},smalltalk.CWMapDrawer)})},
messageSends: ["ifTrue:ifFalse:", "reverseDisplay:point:xPad:yPad:", "currentPoint", "monsterLayer", "display:cood:", "@", "-", "y", "+", "x", "negative", "side"]}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "drawUnit:",
fn: function (aUnit){
var self=this;
var xArray,yArray;
return smalltalk.withContext(function($ctx1) { 
var $1;
xArray=[(17), (37), (-11), (9)];
yArray=[(33), (23), (26), (15)];
_st(_st((1))._to_(_st(aUnit)._hp()))._do_((function(i){
return smalltalk.withContext(function($ctx2) {
$1=_st(_st(aUnit)._side())._negative();
if(smalltalk.assert($1)){
return _st(_st(self)._monsterLayer())._reverseDisplay_point_xPad_yPad_(aUnit,_st(self)._currentPoint(),_st((72)).__plus(_st(xArray)._at_(i)),_st(yArray)._at_(i));
} else {
return _st(_st(self)._monsterLayer())._display_cood_(aUnit,_st(_st(_st(_st(self)._currentPoint())._x()).__plus(_st(xArray)._at_(i))).__at(_st(_st(_st(self)._currentPoint())._y()).__minus(_st(yArray)._at_(i))));
};
}, function($ctx2) {$ctx2.fillBlock({i:i},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"drawUnit:",{aUnit:aUnit,xArray:xArray,yArray:yArray},smalltalk.CWMapDrawer)})},
messageSends: ["do:", "ifTrue:ifFalse:", "reverseDisplay:point:xPad:yPad:", "currentPoint", "+", "at:", "monsterLayer", "display:cood:", "@", "-", "y", "x", "negative", "side", "to:", "hp"]}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "gotCanvasId",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "#game";
}, function($ctx1) {$ctx1.fill(self,"gotCanvasId",{},smalltalk.CWMapDrawer)})},
messageSends: []}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "gotLayer",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@layers"])._at_((2));
return $1;
}, function($ctx1) {$ctx1.fill(self,"gotLayer",{},smalltalk.CWMapDrawer)})},
messageSends: ["at:"]}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.CWMapInterpreter.fn.prototype._initialize.apply(_st(self), []);
_st(self)._initializeLayers();
_st(self)._padding_(_st(_st(self)._canvasPadding()).__at(_st(self)._canvasPadding()));
_st(self)._initializeEventHandling();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.CWMapDrawer)})},
messageSends: ["initialize", "initializeLayers", "padding:", "@", "canvasPadding", "initializeEventHandling"]}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeEventHandling",
fn: function (){
var self=this;
function $CWMapMoveEvent(){return smalltalk.CWMapMoveEvent||(typeof CWMapMoveEvent=="undefined"?nil:CWMapMoveEvent)}
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._announcer())._on_do_($CWMapMoveEvent(),(function(event){
return smalltalk.withContext(function($ctx2) {
return _st(self)._perform_(_st(event)._directionMethod());
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initializeEventHandling",{},smalltalk.CWMapDrawer)})},
messageSends: ["on:do:", "perform:", "directionMethod", "announcer"]}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeForMap:",
fn: function (aMap){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@map"]=aMap;
_st(_st(self)._padding())._x_(_st(_st(self)._canvasPadding()).__plus(_st(_st(_st(_st(_st(_st(self["@map"])._children())._at_((1)))._children())._size()).__star(_st(self)._tileUnit())).__star((1.17))));
return self}, function($ctx1) {$ctx1.fill(self,"initializeForMap:",{aMap:aMap},smalltalk.CWMapDrawer)})},
messageSends: ["x:", "+", "*", "tileUnit", "size", "children", "at:", "canvasPadding", "padding"]}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeLayers",
fn: function (){
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($Array())._new();
_st($1)._at_put_((1),_st(self)._layerForId_(_st(self)._backgroundCanvasId()));
_st($1)._at_put_((2),_st(self)._layerForId_(_st(self)._gotCanvasId()));
_st($1)._at_put_((3),_st(self)._layerForId_(_st(self)._monsterCanvasId()));
$2=_st($1)._yourself();
self["@layers"]=$2;
return self}, function($ctx1) {$ctx1.fill(self,"initializeLayers",{},smalltalk.CWMapDrawer)})},
messageSends: ["at:put:", "layerForId:", "backgroundCanvasId", "new", "gotCanvasId", "monsterCanvasId", "yourself"]}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "layerForId:",
fn: function (id){
var self=this;
function $CWCanvasLayer(){return smalltalk.CWCanvasLayer||(typeof CWCanvasLayer=="undefined"?nil:CWCanvasLayer)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st($CWCanvasLayer())._new())._initializeWithId_(id);
return $1;
}, function($ctx1) {$ctx1.fill(self,"layerForId:",{id:id},smalltalk.CWMapDrawer)})},
messageSends: ["initializeWithId:", "new"]}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "left",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@padding"]=_st(self["@padding"]).__plus(_st(_st(_st(self)._moveIncrement())._negated()).__at((0)));
_st(self)._updateMap();
return self}, function($ctx1) {$ctx1.fill(self,"left",{},smalltalk.CWMapDrawer)})},
messageSends: ["+", "@", "negated", "moveIncrement", "updateMap"]}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "monsterCanvasId",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "#monster";
}, function($ctx1) {$ctx1.fill(self,"monsterCanvasId",{},smalltalk.CWMapDrawer)})},
messageSends: []}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "monsterLayer",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@layers"])._at_((3));
return $1;
}, function($ctx1) {$ctx1.fill(self,"monsterLayer",{},smalltalk.CWMapDrawer)})},
messageSends: ["at:"]}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "moveIncrement",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(50);
return $1;
}, function($ctx1) {$ctx1.fill(self,"moveIncrement",{},smalltalk.CWMapDrawer)})},
messageSends: []}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "newGOTDrawingContext",
fn: function (){
var self=this;
function $CWGOTDrawingContext(){return smalltalk.CWGOTDrawingContext||(typeof CWGOTDrawingContext=="undefined"?nil:CWGOTDrawingContext)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st($CWGOTDrawingContext())._default())._reset_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"newGOTDrawingContext",{},smalltalk.CWMapDrawer)})},
messageSends: ["reset:", "default"]}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "newGlobalDrawingContext",
fn: function (){
var self=this;
function $CWGlobalDrawingContext(){return smalltalk.CWGlobalDrawingContext||(typeof CWGlobalDrawingContext=="undefined"?nil:CWGlobalDrawingContext)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st($CWGlobalDrawingContext())._default())._reset_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"newGlobalDrawingContext",{},smalltalk.CWMapDrawer)})},
messageSends: ["reset:", "default"]}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "newMonsterAndGOTDrawingContext",
fn: function (){
var self=this;
function $CWMonsterAndGOTDrawingContext(){return smalltalk.CWMonsterAndGOTDrawingContext||(typeof CWMonsterAndGOTDrawingContext=="undefined"?nil:CWMonsterAndGOTDrawingContext)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st($CWMonsterAndGOTDrawingContext())._default())._reset_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"newMonsterAndGOTDrawingContext",{},smalltalk.CWMapDrawer)})},
messageSends: ["reset:", "default"]}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "padding",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@padding"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"padding",{},smalltalk.CWMapDrawer)})},
messageSends: []}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "padding:",
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@padding"]=aPoint;
return self}, function($ctx1) {$ctx1.fill(self,"padding:",{aPoint:aPoint},smalltalk.CWMapDrawer)})},
messageSends: []}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "right",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@padding"]=_st(self["@padding"]).__plus(_st(_st(self)._moveIncrement()).__at((0)));
_st(self)._updateMap();
return self}, function($ctx1) {$ctx1.fill(self,"right",{},smalltalk.CWMapDrawer)})},
messageSends: ["+", "@", "moveIncrement", "updateMap"]}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "tileUnit",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(50);
return $1;
}, function($ctx1) {$ctx1.fill(self,"tileUnit",{},smalltalk.CWMapDrawer)})},
messageSends: []}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "up",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@padding"]=_st(self["@padding"]).__plus(_st((0)).__at(_st(_st(self)._moveIncrement())._negated()));
_st(self)._updateMap();
return self}, function($ctx1) {$ctx1.fill(self,"up",{},smalltalk.CWMapDrawer)})},
messageSends: ["+", "@", "negated", "moveIncrement", "updateMap"]}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "updateGOTs",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._gotLayer())._clean();
self["@executionContext"]=_st(self)._newGOTDrawingContext();
_st(self)._visitTree_(self["@map"]);
return self}, function($ctx1) {$ctx1.fill(self,"updateGOTs",{},smalltalk.CWMapDrawer)})},
messageSends: ["clean", "gotLayer", "newGOTDrawingContext", "visitTree:"]}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "updateMap",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@layers"])._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._clean();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
self["@executionContext"]=_st(self)._newGlobalDrawingContext();
_st(self)._visitTree_(self["@map"]);
return self}, function($ctx1) {$ctx1.fill(self,"updateMap",{},smalltalk.CWMapDrawer)})},
messageSends: ["do:", "clean", "newGlobalDrawingContext", "visitTree:"]}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "updateMonstersAndGOTs",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._gotLayer())._clean();
_st(_st(self)._monsterLayer())._clean();
self["@executionContext"]=_st(self)._newMonsterAndGOTDrawingContext();
_st(self)._visitTree_(self["@map"]);
return self}, function($ctx1) {$ctx1.fill(self,"updateMonstersAndGOTs",{},smalltalk.CWMapDrawer)})},
messageSends: ["clean", "gotLayer", "monsterLayer", "newMonsterAndGOTDrawingContext", "visitTree:"]}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "visitCell:",
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._executionContext())._nextCell();
return self}, function($ctx1) {$ctx1.fill(self,"visitCell:",{aCell:aCell},smalltalk.CWMapDrawer)})},
messageSends: ["nextCell", "executionContext"]}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "visitGameOverTile:",
fn: function (got){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._executionContext())._visitGameOverTile_(got);
return self}, function($ctx1) {$ctx1.fill(self,"visitGameOverTile:",{got:got},smalltalk.CWMapDrawer)})},
messageSends: ["visitGameOverTile:", "executionContext"]}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "visitHeros:",
fn: function (heros){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._executionContext())._visitHeros_(heros);
return self}, function($ctx1) {$ctx1.fill(self,"visitHeros:",{heros:heros},smalltalk.CWMapDrawer)})},
messageSends: ["visitHeros:", "executionContext"]}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "visitMap:",
fn: function (aMap){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"visitMap:",{aMap:aMap},smalltalk.CWMapDrawer)})},
messageSends: []}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "visitOverTile:",
fn: function (ot){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._executionContext())._visitOverTile_(ot);
return self}, function($ctx1) {$ctx1.fill(self,"visitOverTile:",{ot:ot},smalltalk.CWMapDrawer)})},
messageSends: ["visitOverTile:", "executionContext"]}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "visitRow:",
fn: function (aRow){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._executionContext())._nextRow();
return self}, function($ctx1) {$ctx1.fill(self,"visitRow:",{aRow:aRow},smalltalk.CWMapDrawer)})},
messageSends: ["nextRow", "executionContext"]}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "visitTile:",
fn: function (aTile){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._executionContext())._visitTile_(aTile);
return self}, function($ctx1) {$ctx1.fill(self,"visitTile:",{aTile:aTile},smalltalk.CWMapDrawer)})},
messageSends: ["visitTile:", "executionContext"]}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "visitUnit:",
fn: function (aUnit){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._executionContext())._visitUnit_(aUnit);
return self}, function($ctx1) {$ctx1.fill(self,"visitUnit:",{aUnit:aUnit},smalltalk.CWMapDrawer)})},
messageSends: ["visitUnit:", "executionContext"]}),
smalltalk.CWMapDrawer);



