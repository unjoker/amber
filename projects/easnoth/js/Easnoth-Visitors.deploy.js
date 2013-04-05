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

smalltalk.addClass('CWDrawer', smalltalk.CWVisitor, ['canvas', 'mapCoods', 'currentPoint'], 'Easnoth-Visitors');
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
xpos=_st(_st(_st(_st(i).__star(_st(sin45).__plus(sin75))).__minus(temp)).__star(_st(self)._tileUnit())).__plus(_st(_st(self)._mapCoods())._x());
ypos=_st(_st(_st(_st(temp).__slash((2))).__plus(_st(i).__star(sin135))).__star(_st(self)._tileUnit())).__plus(_st(_st(self)._mapCoods())._y());
$1=_st(_st(xpos)._rounded()).__at(_st(ypos)._rounded());
return $1;
}, function($ctx1) {$ctx1.fill(self,"calculCanvasCoods:",{coods:coods,xpos:xpos,ypos:ypos,temp:temp,sin45:sin45,sin15:sin15,sin135:sin135,sin75:sin75,i:i,j:j},smalltalk.MapDrawer)})},
messageSends: ["x", "y", "*", "+", "truncated", "/", "mapCoods", "tileUnit", "-", "@", "rounded"]}),
smalltalk.CWDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "canvas",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@canvas"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"canvas",{},smalltalk.MapDrawer)})},
messageSends: []}),
smalltalk.CWDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "canvas:",
fn: function (aCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@canvas"]=aCanvas;
return self}, function($ctx1) {$ctx1.fill(self,"canvas:",{aCanvas:aCanvas},smalltalk.MapDrawer)})},
messageSends: []}),
smalltalk.CWDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "canvasId",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "#main";
}, function($ctx1) {$ctx1.fill(self,"canvasId",{},smalltalk.MapDrawer)})},
messageSends: []}),
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
var elem;
return smalltalk.withContext(function($ctx1) { 
elem=_st(_st(self)._canvas())._element();
_st(_st(elem)._getContext_("2d"))._clearRect_y_width_height_((0),(0),_st(elem)._width(),_st(elem)._height());
return self}, function($ctx1) {$ctx1.fill(self,"cleanCanvas",{elem:elem},smalltalk.CWBusinessObject)})},
messageSends: ["element", "canvas", "clearRect:y:width:height:", "width", "height", "getContext:"]}),
smalltalk.CWDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "context",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@canvas"])._element())._getContext_("2d");
return $1;
}, function($ctx1) {$ctx1.fill(self,"context",{},smalltalk.MapDrawer)})},
messageSends: ["getContext:", "element"]}),
smalltalk.CWDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "display:",
fn: function (object){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._display_X_y_(object,(0),(0));
return self}, function($ctx1) {$ctx1.fill(self,"display:",{object:object},smalltalk.MapDrawer)})},
messageSends: ["display:X:y:"]}),
smalltalk.CWDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "display:X:y:",
fn: function (object,x,y){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._context())._drawImage_x_y_(_st(object)._image(),x,y);
return self}, function($ctx1) {$ctx1.fill(self,"display:X:y:",{object:object,x:x,y:y},smalltalk.MapDrawer)})},
messageSends: ["drawImage:x:y:", "image", "context"]}),
smalltalk.CWDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "drawBusinessObject:",
fn: function (aMap){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._cleanCanvas();
_st(_st(self)._mapCoods())._x_(_st(_st(self)._canvasPadding()).__plus(_st(_st(_st(_st(_st(_st(aMap)._children())._at_((1)))._children())._size()).__star(_st(self)._tileUnit())).__star((1.17))));
_st(self)._visitTree_(aMap);
return self}, function($ctx1) {$ctx1.fill(self,"drawBusinessObject:",{aMap:aMap},smalltalk.CWBusinessObject)})},
messageSends: ["cleanCanvas", "x:", "+", "*", "tileUnit", "size", "children", "at:", "canvasPadding", "mapCoods", "visitTree:"]}),
smalltalk.CWDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "drawIsometric:",
fn: function (object){
var self=this;
var ctx;
function $Number(){return smalltalk.Number||(typeof Number=="undefined"?nil:Number)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
ctx=_st(self)._context();
$1=ctx;
_st($1)._save();
_st($1)._translate_y_(_st(_st(self["@currentPoint"])._x()).__plus((45)),_st(_st(self["@currentPoint"])._y()).__minus((7)));
_st($1)._scale_y_((1),(0.5));
_st($1)._rotate_(_st(_st($Number())._pi()).__slash((4)));
$2=_st($1)._scale_y_((1.4),(1.33));
_st(self)._display_(object);
_st(ctx)._restore();
return self}, function($ctx1) {$ctx1.fill(self,"drawIsometric:",{object:object,ctx:ctx},smalltalk.MapDrawer)})},
messageSends: ["context", "save", "translate:y:", "+", "x", "-", "y", "scale:y:", "rotate:", "/", "pi", "display:", "restore"]}),
smalltalk.CWDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "imageOf:",
fn: function (object){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"imageOf:",{object:object},smalltalk.MapDrawer)})},
messageSends: []}),
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
_st(self)._canvas_(_st($TagBrush())._fromJQuery_canvas_(_st(_st(self)._canvasId())._asJQuery(),_st($HTMLCanvas())._onJQuery_(_st("body")._asJQuery())));
_st(self)._mapCoods_(_st(_st(self)._canvasPadding()).__at(_st(self)._canvasPadding()));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.CWDrawer)})},
messageSends: ["initialize", "canvas:", "fromJQuery:canvas:", "asJQuery", "canvasId", "onJQuery:", "mapCoods:", "@", "canvasPadding"]}),
smalltalk.CWDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "mapCoods",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@mapCoods"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"mapCoods",{},smalltalk.MapDrawer)})},
messageSends: []}),
smalltalk.CWDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "mapCoods:",
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@mapCoods"]=aPoint;
return self}, function($ctx1) {$ctx1.fill(self,"mapCoods:",{aPoint:aPoint},smalltalk.MapDrawer)})},
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
_st(self)._drawIsometric_(got);
return self}, function($ctx1) {$ctx1.fill(self,"visitGameOverTile:",{got:got},smalltalk.MapDrawer)})},
messageSends: ["drawIsometric:"]}),
smalltalk.CWDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "visitHeros:",
fn: function (heros){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._display_X_y_(heros,_st(_st(self["@currentPoint"])._x()).__plus((15)),_st(_st(self["@currentPoint"])._y()).__minus((28)));
return self}, function($ctx1) {$ctx1.fill(self,"visitHeros:",{heros:heros},smalltalk.MapDrawer)})},
messageSends: ["display:X:y:", "+", "x", "-", "y"]}),
smalltalk.CWDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "visitMap:",
fn: function (aMap){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"visitMap:",{aMap:aMap},smalltalk.MapDrawer)})},
messageSends: []}),
smalltalk.CWDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "visitOverTile:",
fn: function (ot){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._drawIsometric_(ot);
return self}, function($ctx1) {$ctx1.fill(self,"visitOverTile:",{ot:ot},smalltalk.MapDrawer)})},
messageSends: ["drawIsometric:"]}),
smalltalk.CWDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "visitRow:",
fn: function (aRow){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"visitRow:",{aRow:aRow},smalltalk.MapDrawer)})},
messageSends: []}),
smalltalk.CWDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "visitTile:",
fn: function (aTile){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._drawIsometric_(aTile);
return self}, function($ctx1) {$ctx1.fill(self,"visitTile:",{aTile:aTile},smalltalk.MapDrawer)})},
messageSends: ["drawIsometric:"]}),
smalltalk.CWDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "visitTroop:",
fn: function (aTile){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"visitTroop:",{aTile:aTile},smalltalk.MapDrawer)})},
messageSends: []}),
smalltalk.CWDrawer);



