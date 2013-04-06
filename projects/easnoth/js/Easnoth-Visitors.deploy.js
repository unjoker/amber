smalltalk.addPackage('Easnoth-Visitors');
smalltalk.addClass('CWVisitor', smalltalk.Object, [], 'Easnoth-Visitors');
smalltalk.addMethod(
smalltalk.method({
selector: "visitCell:",
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"visitCell:",{aCell:aCell},smalltalk.MapVisitor)})},
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
return self}, function($ctx1) {$ctx1.fill(self,"visitChildTrees:",{aBusinessObject:aBusinessObject},smalltalk.MapVisitor)})},
messageSends: ["do:", "visitTree:", "children"]}),
smalltalk.CWVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitGameOverTile:",
fn: function (aGameOverTile){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"visitGameOverTile:",{aGameOverTile:aGameOverTile},smalltalk.MapVisitor)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.CWVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitHeros:",
fn: function (aHeros){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"visitHeros:",{aHeros:aHeros},smalltalk.MapVisitor)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.CWVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitMap:",
fn: function (aMap){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"visitMap:",{aMap:aMap},smalltalk.MapVisitor)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.CWVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitOverTile:",
fn: function (anOverTile){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"visitOverTile:",{anOverTile:anOverTile},smalltalk.MapVisitor)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.CWVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitRow:",
fn: function (aRow){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"visitRow:",{aRow:aRow},smalltalk.MapVisitor)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.CWVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitTile:",
fn: function (aTile){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"visitTile:",{aTile:aTile},smalltalk.MapVisitor)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.CWVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitTree:",
fn: function (aBusinessObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aBusinessObject)._accept_(self);
_st(self)._visitChildTrees_(aBusinessObject);
return self}, function($ctx1) {$ctx1.fill(self,"visitTree:",{aBusinessObject:aBusinessObject},smalltalk.MapVisitor)})},
messageSends: ["accept:", "visitChildTrees:"]}),
smalltalk.CWVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitTroop:",
fn: function (aTroop){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"visitTroop:",{aTroop:aTroop},smalltalk.MapVisitor)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.CWVisitor);


smalltalk.CWVisitor.klass.iVarNames = ['singleton'];

smalltalk.addClass('CWDrawer', smalltalk.CWVisitor, ['backgroundCanvas', 'monsterCanvas', 'gameCanvas', 'padding', 'currentPoint'], 'Easnoth-Visitors');
smalltalk.addMethod(
smalltalk.method({
selector: "backgroundCanvas",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@backgroundCanvas"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"backgroundCanvas",{},smalltalk.CWDrawer)})},
messageSends: []}),
smalltalk.CWDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "backgroundCanvas:",
fn: function (aCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@backgroundCanvas"]=aCanvas;
return self}, function($ctx1) {$ctx1.fill(self,"backgroundCanvas:",{aCanvas:aCanvas},smalltalk.CWDrawer)})},
messageSends: []}),
smalltalk.CWDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "backgroundCanvasId",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "#background";
}, function($ctx1) {$ctx1.fill(self,"backgroundCanvasId",{},smalltalk.CWDrawer)})},
messageSends: []}),
smalltalk.CWDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "backgroundContext",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self)._backgroundCanvas())._element())._getContext_("2d");
return $1;
}, function($ctx1) {$ctx1.fill(self,"backgroundContext",{},smalltalk.CWDrawer)})},
messageSends: ["getContext:", "element", "backgroundCanvas"]}),
smalltalk.CWDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "calculCanvasCoods:",
fn: function (coods){
var self=this;
var xpos,ypos,temp,sin45,sin15,sin135,sin75,i,j;
return smalltalk.withContext(function($ctx1) { 
var $1;
i=_st(coods)._x();
j=_st(coods)._y();
sin45=(0.707106781);
sin15=(0.258819045);
sin135=(0.233445364);
sin75=(0.965925826);
temp=_st(_st(_st(j).__plus(_st(_st(i).__plus((1))).__slash((2))))._truncated()).__star(_st(sin15).__plus(sin75));
xpos=_st(_st(_st(_st(i).__star(_st(sin45).__plus(sin75))).__minus(temp)).__star(_st(self)._tileUnit())).__plus(_st(_st(self)._padding())._x());
ypos=_st(_st(_st(_st(temp).__slash((2))).__plus(_st(i).__star(sin135))).__star(_st(self)._tileUnit())).__plus(_st(_st(self)._padding())._y());
$1=_st(_st(xpos)._rounded()).__at(_st(ypos)._rounded());
return $1;
}, function($ctx1) {$ctx1.fill(self,"calculCanvasCoods:",{coods:coods,xpos:xpos,ypos:ypos,temp:temp,sin45:sin45,sin15:sin15,sin135:sin135,sin75:sin75,i:i,j:j},smalltalk.CWDrawer)})},
messageSends: ["x", "y", "*", "+", "truncated", "/", "padding", "tileUnit", "-", "@", "rounded"]}),
smalltalk.CWDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "canvasPadding",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(40);
return $1;
}, function($ctx1) {$ctx1.fill(self,"canvasPadding",{},smalltalk.MapDrawer)})},
messageSends: []}),
smalltalk.CWDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "cleanCanvas",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._cleanCanvas_(_st(self)._backgroundCanvas());
_st(self)._cleanCanvas_(_st(self)._gameCanvas());
_st(self)._cleanCanvas_(_st(self)._monsterCanvas());
return self}, function($ctx1) {$ctx1.fill(self,"cleanCanvas",{},smalltalk.CWDrawer)})},
messageSends: ["cleanCanvas:", "backgroundCanvas", "gameCanvas", "monsterCanvas"]}),
smalltalk.CWDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "cleanCanvas:",
fn: function (aCanvas){
var self=this;
var elem;
return smalltalk.withContext(function($ctx1) { 
elem=_st(aCanvas)._element();
_st(_st(elem)._getContext_("2d"))._clearRect_y_width_height_((0),(0),_st(elem)._width(),_st(elem)._height());
return self}, function($ctx1) {$ctx1.fill(self,"cleanCanvas:",{aCanvas:aCanvas,elem:elem},smalltalk.CWDrawer)})},
messageSends: ["element", "clearRect:y:width:height:", "width", "height", "getContext:"]}),
smalltalk.CWDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "display:inContext:",
fn: function (object,ctx){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._display_inContext_X_y_(object,ctx,(0),(0));
return self}, function($ctx1) {$ctx1.fill(self,"display:inContext:",{object:object,ctx:ctx},smalltalk.CWDrawer)})},
messageSends: ["display:inContext:X:y:"]}),
smalltalk.CWDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "display:inContext:X:y:",
fn: function (object,ctx,x,y){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(ctx)._drawImage_x_y_(_st(object)._image(),x,y);
return self}, function($ctx1) {$ctx1.fill(self,"display:inContext:X:y:",{object:object,ctx:ctx,x:x,y:y},smalltalk.CWDrawer)})},
messageSends: ["drawImage:x:y:", "image"]}),
smalltalk.CWDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "draw:",
fn: function (aMap){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._cleanCanvas();
_st(_st(self)._padding())._x_(_st(_st(self)._canvasPadding()).__plus(_st(_st(_st(_st(_st(_st(aMap)._children())._at_((1)))._children())._size()).__star(_st(self)._tileUnit())).__star((1.17))));
_st(self)._visitTree_(aMap);
return self}, function($ctx1) {$ctx1.fill(self,"draw:",{aMap:aMap},smalltalk.CWDrawer)})},
messageSends: ["cleanCanvas", "x:", "+", "*", "tileUnit", "size", "children", "at:", "canvasPadding", "padding", "visitTree:"]}),
smalltalk.CWDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "drawIsometric:inContext:",
fn: function (object,ctx){
var self=this;
function $Number(){return smalltalk.Number||(typeof Number=="undefined"?nil:Number)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st((function(){
return smalltalk.withContext(function($ctx2) {
$1=ctx;
_st($1)._save();
_st($1)._translate_y_(_st(_st(self["@currentPoint"])._x()).__plus((45)),_st(_st(self["@currentPoint"])._y()).__minus((7)));
_st($1)._scale_y_((1),(0.5));
_st($1)._rotate_(_st(_st($Number())._pi()).__slash((4)));
$2=_st($1)._scale_y_((1.4),(1.33));
$2;
return _st(self)._display_inContext_(object,ctx);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._ensure_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(ctx)._restore();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"drawIsometric:inContext:",{object:object,ctx:ctx},smalltalk.CWDrawer)})},
messageSends: ["ensure:", "restore", "save", "translate:y:", "+", "x", "-", "y", "scale:y:", "rotate:", "/", "pi", "display:inContext:"]}),
smalltalk.CWDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "gameCanvas",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@gameCanvas"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"gameCanvas",{},smalltalk.CWDrawer)})},
messageSends: []}),
smalltalk.CWDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "gameCanvas:",
fn: function (aCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@gameCanvas"]=aCanvas;
return self}, function($ctx1) {$ctx1.fill(self,"gameCanvas:",{aCanvas:aCanvas},smalltalk.CWDrawer)})},
messageSends: []}),
smalltalk.CWDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "gameCanvasId",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "#game";
}, function($ctx1) {$ctx1.fill(self,"gameCanvasId",{},smalltalk.CWDrawer)})},
messageSends: []}),
smalltalk.CWDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "gameContext",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self)._gameCanvas())._element())._getContext_("2d");
return $1;
}, function($ctx1) {$ctx1.fill(self,"gameContext",{},smalltalk.CWDrawer)})},
messageSends: ["getContext:", "element", "gameCanvas"]}),
smalltalk.CWDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
function $HTMLCanvas(){return smalltalk.HTMLCanvas||(typeof HTMLCanvas=="undefined"?nil:HTMLCanvas)}
function $TagBrush(){return smalltalk.TagBrush||(typeof TagBrush=="undefined"?nil:TagBrush)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.CWVisitor.fn.prototype._initialize.apply(_st(self), []);
_st(self)._backgroundCanvas_(_st($TagBrush())._fromJQuery_canvas_(_st(_st(self)._backgroundCanvasId())._asJQuery(),_st($HTMLCanvas())._onJQuery_(_st("body")._asJQuery())));
_st(self)._gameCanvas_(_st($TagBrush())._fromJQuery_canvas_(_st(_st(self)._gameCanvasId())._asJQuery(),_st($HTMLCanvas())._onJQuery_(_st("body")._asJQuery())));
_st(self)._monsterCanvas_(_st($TagBrush())._fromJQuery_canvas_(_st(_st(self)._monsterCanvasId())._asJQuery(),_st($HTMLCanvas())._onJQuery_(_st("body")._asJQuery())));
_st(self)._padding_(_st(_st(self)._canvasPadding()).__at(_st(self)._canvasPadding()));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.CWDrawer)})},
messageSends: ["initialize", "backgroundCanvas:", "fromJQuery:canvas:", "asJQuery", "backgroundCanvasId", "onJQuery:", "gameCanvas:", "gameCanvasId", "monsterCanvas:", "monsterCanvasId", "padding:", "@", "canvasPadding"]}),
smalltalk.CWDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "monsterCanvas",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@monsterCanvas"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"monsterCanvas",{},smalltalk.CWDrawer)})},
messageSends: []}),
smalltalk.CWDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "monsterCanvas:",
fn: function (aCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@monsterCanvas"]=aCanvas;
return self}, function($ctx1) {$ctx1.fill(self,"monsterCanvas:",{aCanvas:aCanvas},smalltalk.CWDrawer)})},
messageSends: []}),
smalltalk.CWDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "monsterCanvasId",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "#monster";
}, function($ctx1) {$ctx1.fill(self,"monsterCanvasId",{},smalltalk.CWDrawer)})},
messageSends: []}),
smalltalk.CWDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "monsterContext",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self)._monsterCanvas())._element())._getContext_("2d");
return $1;
}, function($ctx1) {$ctx1.fill(self,"monsterContext",{},smalltalk.CWDrawer)})},
messageSends: ["getContext:", "element", "monsterCanvas"]}),
smalltalk.CWDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "padding",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@padding"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"padding",{},smalltalk.CWDrawer)})},
messageSends: []}),
smalltalk.CWDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "padding:",
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@padding"]=aPoint;
return self}, function($ctx1) {$ctx1.fill(self,"padding:",{aPoint:aPoint},smalltalk.CWDrawer)})},
messageSends: []}),
smalltalk.CWDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "tileUnit",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(50);
return $1;
}, function($ctx1) {$ctx1.fill(self,"tileUnit",{},smalltalk.MapDrawer)})},
messageSends: []}),
smalltalk.CWDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "visitCell:",
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@currentPoint"]=_st(self)._calculCanvasCoods_(_st(aCell)._mapCoods());
return self}, function($ctx1) {$ctx1.fill(self,"visitCell:",{aCell:aCell},smalltalk.MapDrawer)})},
messageSends: ["calculCanvasCoods:", "mapCoods"]}),
smalltalk.CWDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "visitGameOverTile:",
fn: function (got){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._drawIsometric_inContext_(got,_st(self)._gameContext());
return self}, function($ctx1) {$ctx1.fill(self,"visitGameOverTile:",{got:got},smalltalk.CWDrawer)})},
messageSends: ["drawIsometric:inContext:", "gameContext"]}),
smalltalk.CWDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "visitHeros:",
fn: function (heros){
var self=this;
var ctx;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
ctx=_st(self)._monsterContext();
$1=_st(_st(heros)._side())._negative();
if(smalltalk.assert($1)){
_st((function(){
return smalltalk.withContext(function($ctx2) {
$2=ctx;
_st($2)._save();
_st($2)._translate_y_(_st(_st(self["@currentPoint"])._x()).__plus((87)),(0));
$3=_st($2)._scale_y_((-1),(1));
$3;
return _st(self)._display_inContext_X_y_(heros,ctx,(0),_st(_st(self["@currentPoint"])._y()).__minus((28)));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._ensure_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(ctx)._restore();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
} else {
_st(self)._display_inContext_X_y_(heros,ctx,_st(_st(self["@currentPoint"])._x()).__plus((15)),_st(_st(self["@currentPoint"])._y()).__minus((28)));
};
return self}, function($ctx1) {$ctx1.fill(self,"visitHeros:",{heros:heros,ctx:ctx},smalltalk.CWDrawer)})},
messageSends: ["monsterContext", "ifTrue:ifFalse:", "ensure:", "restore", "save", "translate:y:", "+", "x", "scale:y:", "display:inContext:X:y:", "-", "y", "negative", "side"]}),
smalltalk.CWDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "visitMap:",
fn: function (aMap){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"visitMap:",{aMap:aMap},smalltalk.CWDrawer)})},
messageSends: []}),
smalltalk.CWDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "visitOverTile:",
fn: function (ot){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._drawIsometric_inContext_(ot,_st(self)._backgroundContext());
return self}, function($ctx1) {$ctx1.fill(self,"visitOverTile:",{ot:ot},smalltalk.CWDrawer)})},
messageSends: ["drawIsometric:inContext:", "backgroundContext"]}),
smalltalk.CWDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "visitRow:",
fn: function (aRow){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"visitRow:",{aRow:aRow},smalltalk.CWDrawer)})},
messageSends: []}),
smalltalk.CWDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "visitTile:",
fn: function (aTile){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._drawIsometric_inContext_(aTile,_st(self)._backgroundContext());
return self}, function($ctx1) {$ctx1.fill(self,"visitTile:",{aTile:aTile},smalltalk.CWDrawer)})},
messageSends: ["drawIsometric:inContext:", "backgroundContext"]}),
smalltalk.CWDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "visitTroop:",
fn: function (aTroop){
var self=this;
var xArray,yArray,ctx;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
xArray=[(17), (37), (-11), (9)];
yArray=[(33), (23), (26), (15)];
ctx=_st(self)._monsterContext();
_st(_st((1))._to_(_st(aTroop)._hp()))._do_((function(i){
return smalltalk.withContext(function($ctx2) {
$1=_st(_st(aTroop)._side())._negative();
if(smalltalk.assert($1)){
return _st((function(){
return smalltalk.withContext(function($ctx3) {
$2=ctx;
_st($2)._save();
_st($2)._translate_y_(_st(_st(_st(self["@currentPoint"])._x()).__plus((72))).__plus(_st(xArray)._at_(i)),(0));
$3=_st($2)._scale_y_((-1),(1));
$3;
return _st(self)._display_inContext_X_y_(aTroop,ctx,(0),_st(_st(self["@currentPoint"])._y()).__minus(_st(yArray)._at_(i)));
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}))._ensure_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(ctx)._restore();
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
} else {
return _st(self)._display_inContext_X_y_(aTroop,ctx,_st(_st(self["@currentPoint"])._x()).__plus(_st(xArray)._at_(i)),_st(_st(self["@currentPoint"])._y()).__minus(_st(yArray)._at_(i)));
};
}, function($ctx2) {$ctx2.fillBlock({i:i},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"visitTroop:",{aTroop:aTroop,xArray:xArray,yArray:yArray,ctx:ctx},smalltalk.CWDrawer)})},
messageSends: ["monsterContext", "do:", "ifTrue:ifFalse:", "ensure:", "restore", "save", "translate:y:", "+", "at:", "x", "scale:y:", "display:inContext:X:y:", "-", "y", "negative", "side", "to:", "hp"]}),
smalltalk.CWDrawer);



