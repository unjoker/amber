smalltalk.addPackage('Easnoth-Visitors');
smalltalk.addClass('CWVisitor', smalltalk.Object, [], 'Easnoth-Visitors');
smalltalk.CWVisitor.comment="I am an abstract visitor that can visit the whole tree of business objects."
smalltalk.addMethod(
smalltalk.method({
selector: "visitCell:",
category: 'visiting',
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"visitCell:",{aCell:aCell},smalltalk.MapVisitor)})},
args: ["aCell"],
source: "visitCell: aCell\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.CWVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitChildTrees:",
category: 'visiting tree',
fn: function (aBusinessObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(aBusinessObject)._children())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(self)._visitTree_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"visitChildTrees:",{aBusinessObject:aBusinessObject},smalltalk.MapVisitor)})},
args: ["aBusinessObject"],
source: "visitChildTrees: aBusinessObject\x0a\x09aBusinessObject children do: [:each |\x0a\x09\x09self visitTree: each ]",
messageSends: ["do:", "visitTree:", "children"],
referencedClasses: []
}),
smalltalk.CWVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitGameOverTile:",
category: 'visiting',
fn: function (aGameOverTile){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"visitGameOverTile:",{aGameOverTile:aGameOverTile},smalltalk.MapVisitor)})},
args: ["aGameOverTile"],
source: "visitGameOverTile: aGameOverTile\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.CWVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitHeros:",
category: 'visiting',
fn: function (aHeros){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"visitHeros:",{aHeros:aHeros},smalltalk.MapVisitor)})},
args: ["aHeros"],
source: "visitHeros: aHeros\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.CWVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitMap:",
category: 'visiting',
fn: function (aMap){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"visitMap:",{aMap:aMap},smalltalk.MapVisitor)})},
args: ["aMap"],
source: "visitMap: aMap\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.CWVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitOverTile:",
category: 'visiting',
fn: function (anOverTile){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"visitOverTile:",{anOverTile:anOverTile},smalltalk.MapVisitor)})},
args: ["anOverTile"],
source: "visitOverTile: anOverTile\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.CWVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitRow:",
category: 'visiting',
fn: function (aRow){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"visitRow:",{aRow:aRow},smalltalk.MapVisitor)})},
args: ["aRow"],
source: "visitRow: aRow\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.CWVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitTile:",
category: 'visiting',
fn: function (aTile){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"visitTile:",{aTile:aTile},smalltalk.MapVisitor)})},
args: ["aTile"],
source: "visitTile: aTile\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.CWVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitTree:",
category: 'visiting tree',
fn: function (aBusinessObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aBusinessObject)._accept_(self);
_st(self)._visitChildTrees_(aBusinessObject);
return self}, function($ctx1) {$ctx1.fill(self,"visitTree:",{aBusinessObject:aBusinessObject},smalltalk.MapVisitor)})},
args: ["aBusinessObject"],
source: "visitTree: aBusinessObject\x0a\x09aBusinessObject accept: self.\x0a\x09self visitChildTrees: aBusinessObject",
messageSends: ["accept:", "visitChildTrees:"],
referencedClasses: []
}),
smalltalk.CWVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitTroop:",
category: 'visiting',
fn: function (aTroop){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"visitTroop:",{aTroop:aTroop},smalltalk.MapVisitor)})},
args: ["aTroop"],
source: "visitTroop: aTroop\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.CWVisitor);


smalltalk.CWVisitor.klass.iVarNames = ['singleton'];

smalltalk.addClass('CWDrawer', smalltalk.CWVisitor, ['canvas', 'mapCoods', 'currentPoint'], 'Easnoth-Visitors');
smalltalk.CWDrawer.comment="I am a drawer that can draw the business objects through a visit of its tree."
smalltalk.addMethod(
smalltalk.method({
selector: "calculCanvasCoods:",
category: 'calculs',
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
args: ["coods"],
source: "calculCanvasCoods: coods\x0a\x09\x22Takes the coods of the cell in the map and answers the absolute coods of the cell image in the web page\x22\x0a\x0a\x09| xpos ypos temp sin45 sin15 sin135 sin75 i j |\x0a\x09\x0a\x09i := coods x.\x0a\x09j := coods y.\x0a\x09\x0a\x09sin45 := 0.707106781. \x22Pi/4\x22\x0a\x09sin15 := 0.258819045. \x22Pi/12\x22\x0a\x09sin135 := 0.233445364. \x22???->I used Approximation\x22\x0a\x09sin75 := 0.965925826. \x225*Pi/12\x22\x0a\x0a\x09temp := ((j + ((i + 1)/2)) truncated) * (sin15 + sin75).\x0a\x09xpos := (i * (sin45 + sin75) - (temp)) * self tileUnit + self mapCoods x.\x0a\x09ypos := (temp / 2 + (i * sin135)) * self tileUnit + self mapCoods y.\x0a\x09\x0a\x09^ xpos rounded @ ypos rounded.",
messageSends: ["x", "y", "*", "+", "truncated", "/", "mapCoods", "tileUnit", "-", "@", "rounded"],
referencedClasses: []
}),
smalltalk.CWDrawer);

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
}, function($ctx1) {$ctx1.fill(self,"canvas",{},smalltalk.MapDrawer)})},
args: [],
source: "canvas\x0a\x09^ canvas",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "canvas:",
category: 'accessing',
fn: function (aCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@canvas"]=aCanvas;
return self}, function($ctx1) {$ctx1.fill(self,"canvas:",{aCanvas:aCanvas},smalltalk.MapDrawer)})},
args: ["aCanvas"],
source: "canvas: aCanvas\x0a\x09canvas := aCanvas",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "canvasId",
category: 'constant',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "#main";
}, function($ctx1) {$ctx1.fill(self,"canvasId",{},smalltalk.MapDrawer)})},
args: [],
source: "canvasId\x0a\x09\x22id of the main canvas for the css\x22\x0a\x0a\x09^ '#main'",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "canvasPadding",
category: 'constant',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(40);
return $1;
}, function($ctx1) {$ctx1.fill(self,"canvasPadding",{},smalltalk.MapDrawer)})},
args: [],
source: "canvasPadding\x0a\x09\x22padding between the border of the web page and the map (left and top)\x22\x0a\x0a\x09^ 40",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "cleanCanvas",
category: 'public',
fn: function (){
var self=this;
var elem;
return smalltalk.withContext(function($ctx1) { 
elem=_st(_st(self)._canvas())._element();
_st(_st(elem)._getContext_("2d"))._clearRect_y_width_height_((0),(0),_st(elem)._width(),_st(elem)._height());
return self}, function($ctx1) {$ctx1.fill(self,"cleanCanvas",{elem:elem},smalltalk.CWBusinessObject)})},
args: [],
source: "cleanCanvas\x0a\x09| elem |\x0a\x09elem := self canvas element.\x0a\x09(elem getContext: '2d') clearRect: 0 y: 0 width: elem width height: elem height.\x0a ",
messageSends: ["element", "canvas", "clearRect:y:width:height:", "width", "height", "getContext:"],
referencedClasses: []
}),
smalltalk.CWDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "context",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@canvas"])._element())._getContext_("2d");
return $1;
}, function($ctx1) {$ctx1.fill(self,"context",{},smalltalk.MapDrawer)})},
args: [],
source: "context\x0a\x09^ canvas element getContext: '2d'",
messageSends: ["getContext:", "element"],
referencedClasses: []
}),
smalltalk.CWDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "display:",
category: 'rendering',
fn: function (object){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._display_X_y_(object,(0),(0));
return self}, function($ctx1) {$ctx1.fill(self,"display:",{object:object},smalltalk.MapDrawer)})},
args: ["object"],
source: "display: object\x0a\x09self display: object X: 0 y: 0",
messageSends: ["display:X:y:"],
referencedClasses: []
}),
smalltalk.CWDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "display:X:y:",
category: 'rendering',
fn: function (object,x,y){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._context())._drawImage_x_y_(_st(object)._image(),x,y);
return self}, function($ctx1) {$ctx1.fill(self,"display:X:y:",{object:object,x:x,y:y},smalltalk.MapDrawer)})},
args: ["object", "x", "y"],
source: "display: object X: x y: y\x0a\x09self context \x0a\x09\x09drawImage: object image\x0a\x09\x09x: x\x0a\x09\x09y: y.",
messageSends: ["drawImage:x:y:", "image", "context"],
referencedClasses: []
}),
smalltalk.CWDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "draw:",
category: 'public',
fn: function (aMap){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._cleanCanvas();
_st(_st(self)._mapCoods())._x_(_st(_st(self)._canvasPadding()).__plus(_st(_st(_st(_st(_st(_st(aMap)._children())._at_((1)))._children())._size()).__star(_st(self)._tileUnit())).__star((1.17))));
_st(self)._visitTree_(aMap);
return self}, function($ctx1) {$ctx1.fill(self,"draw:",{aMap:aMap},smalltalk.CWDrawer)})},
args: ["aMap"],
source: "draw: aMap\x0a\x09self cleanCanvas.\x0a\x09\x22The following line should be put somewhere else\x22\x0a\x09self mapCoods x: self canvasPadding + ((aMap children at:1) children size * self tileUnit * 1.17).\x0a\x09self visitTree: aMap.\x0a ",
messageSends: ["cleanCanvas", "x:", "+", "*", "tileUnit", "size", "children", "at:", "canvasPadding", "mapCoods", "visitTree:"],
referencedClasses: []
}),
smalltalk.CWDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "drawIsometric:",
category: 'rendering',
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
args: ["object"],
source: "drawIsometric: object\x0a\x09\x22draw through isometric transformation\x22\x0a\x0a\x09|ctx|\x0a\x09ctx := self context.\x0a\x09ctx save;\x0a\x09\x09translate: currentPoint x + 45 y: currentPoint y - 7;\x0a\x09\x09scale: 1 y: 0.5;\x0a\x09\x09rotate: Number pi / 4 ;\x0a\x09\x09scale: 1.4 y: 1.33.\x0a\x09self display: object.\x0a\x09ctx restore.",
messageSends: ["context", "save", "translate:y:", "+", "x", "-", "y", "scale:y:", "rotate:", "/", "pi", "display:", "restore"],
referencedClasses: ["Number"]
}),
smalltalk.CWDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "imageOf:",
category: 'rendering',
fn: function (object){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"imageOf:",{object:object},smalltalk.MapDrawer)})},
args: ["object"],
source: "imageOf: object\x0a\x09\x22I cannot remove this method ... \x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function (){
var self=this;
function $HTMLCanvas(){return smalltalk.HTMLCanvas||(typeof HTMLCanvas=="undefined"?nil:HTMLCanvas)}
function $TagBrush(){return smalltalk.TagBrush||(typeof TagBrush=="undefined"?nil:TagBrush)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.CWVisitor.fn.prototype._initialize.apply(_st(self), []);
_st(self)._canvas_(_st($TagBrush())._fromJQuery_canvas_(_st(_st(self)._canvasId())._asJQuery(),_st($HTMLCanvas())._onJQuery_(_st("body")._asJQuery())));
_st(self)._mapCoods_(_st(_st(self)._canvasPadding()).__at(_st(self)._canvasPadding()));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.CWDrawer)})},
args: [],
source: "initialize\x0a\x09super initialize. \x0a\x09self canvas: (TagBrush fromJQuery: self canvasId asJQuery canvas: (HTMLCanvas onJQuery: 'body' asJQuery)).\x0a\x09self mapCoods: (self canvasPadding @ self canvasPadding).",
messageSends: ["initialize", "canvas:", "fromJQuery:canvas:", "asJQuery", "canvasId", "onJQuery:", "mapCoods:", "@", "canvasPadding"],
referencedClasses: ["HTMLCanvas", "TagBrush"]
}),
smalltalk.CWDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "mapCoods",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@mapCoods"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"mapCoods",{},smalltalk.MapDrawer)})},
args: [],
source: "mapCoods\x0a\x09^ mapCoods",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "mapCoods:",
category: 'accessing',
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@mapCoods"]=aPoint;
return self}, function($ctx1) {$ctx1.fill(self,"mapCoods:",{aPoint:aPoint},smalltalk.MapDrawer)})},
args: ["aPoint"],
source: "mapCoods: aPoint\x0a\x09mapCoods := aPoint",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "tileUnit",
category: 'constant',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(50);
return $1;
}, function($ctx1) {$ctx1.fill(self,"tileUnit",{},smalltalk.MapDrawer)})},
args: [],
source: "tileUnit\x0a\x09\x22scale of the images\x22\x0a\x0a\x09^ 50",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "visitCell:",
category: 'visiting',
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@currentPoint"]=_st(self)._calculCanvasCoods_(_st(aCell)._mapCoods());
return self}, function($ctx1) {$ctx1.fill(self,"visitCell:",{aCell:aCell},smalltalk.MapDrawer)})},
args: ["aCell"],
source: "visitCell: aCell\x0a\x09currentPoint := (self calculCanvasCoods: aCell mapCoods).",
messageSends: ["calculCanvasCoods:", "mapCoods"],
referencedClasses: []
}),
smalltalk.CWDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "visitGameOverTile:",
category: 'visiting',
fn: function (got){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._drawIsometric_(got);
return self}, function($ctx1) {$ctx1.fill(self,"visitGameOverTile:",{got:got},smalltalk.MapDrawer)})},
args: ["got"],
source: "visitGameOverTile: got\x0a\x09self drawIsometric: got.",
messageSends: ["drawIsometric:"],
referencedClasses: []
}),
smalltalk.CWDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "visitHeros:",
category: 'visiting',
fn: function (heros){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=_st(_st(heros)._side())._negative();
if(smalltalk.assert($1)){
$2=_st(self)._context();
_st($2)._save();
_st($2)._translate_y_(_st(_st(self["@currentPoint"])._x()).__plus((87)),(0));
$3=_st($2)._scale_y_((-1),(1));
$3;
_st(self)._display_X_y_(heros,(0),_st(_st(self["@currentPoint"])._y()).__minus((28)));
_st(_st(self)._context())._restore();
} else {
_st(self)._display_X_y_(heros,_st(_st(self["@currentPoint"])._x()).__plus((15)),_st(_st(self["@currentPoint"])._y()).__minus((28)));
};
return self}, function($ctx1) {$ctx1.fill(self,"visitHeros:",{heros:heros},smalltalk.CWDrawer)})},
args: ["heros"],
source: "visitHeros: heros\x0a\x09\x2287 = 72 (width image + 15\x22\x0a\x09\x0a\x09(heros side negative) ifTrue: [\x0a\x09\x09self context save;\x0a\x09\x09\x09translate: currentPoint x + 87 y: 0;\x0a\x09\x09\x09scale: -1 y: 1.\x0a\x09\x09self display: heros X: 0 y: currentPoint y - 28.\x0a\x09\x09self context restore.\x0a\x09] ifFalse: [\x0a\x09\x09self display: heros X: currentPoint x + 15 y: currentPoint y - 28.\x0a\x09]\x0a\x09",
messageSends: ["ifTrue:ifFalse:", "save", "context", "translate:y:", "+", "x", "scale:y:", "display:X:y:", "-", "y", "restore", "negative", "side"],
referencedClasses: []
}),
smalltalk.CWDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "visitMap:",
category: 'visiting',
fn: function (aMap){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"visitMap:",{aMap:aMap},smalltalk.MapDrawer)})},
args: ["aMap"],
source: "visitMap: aMap",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "visitOverTile:",
category: 'visiting',
fn: function (ot){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._drawIsometric_(ot);
return self}, function($ctx1) {$ctx1.fill(self,"visitOverTile:",{ot:ot},smalltalk.MapDrawer)})},
args: ["ot"],
source: "visitOverTile: ot\x0a\x09self drawIsometric: ot.",
messageSends: ["drawIsometric:"],
referencedClasses: []
}),
smalltalk.CWDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "visitRow:",
category: 'visiting',
fn: function (aRow){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"visitRow:",{aRow:aRow},smalltalk.MapDrawer)})},
args: ["aRow"],
source: "visitRow: aRow",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "visitTile:",
category: 'visiting',
fn: function (aTile){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._drawIsometric_(aTile);
return self}, function($ctx1) {$ctx1.fill(self,"visitTile:",{aTile:aTile},smalltalk.MapDrawer)})},
args: ["aTile"],
source: "visitTile: aTile\x0a\x09self drawIsometric: aTile.",
messageSends: ["drawIsometric:"],
referencedClasses: []
}),
smalltalk.CWDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "visitTroop:",
category: 'visiting',
fn: function (aTroop){
var self=this;
var xArray,yArray;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
xArray=[(17), (37), (-11), (9)];
yArray=[(33), (23), (26), (15)];
_st(_st((1))._to_(_st(aTroop)._hp()))._do_((function(i){
return smalltalk.withContext(function($ctx2) {
$1=_st(_st(aTroop)._side())._negative();
if(smalltalk.assert($1)){
$2=_st(self)._context();
_st($2)._save();
_st($2)._translate_y_(_st(_st(_st(self["@currentPoint"])._x()).__plus((72))).__plus(_st(xArray)._at_(i)),(0));
$3=_st($2)._scale_y_((-1),(1));
$3;
_st(self)._display_X_y_(aTroop,(0),_st(_st(self["@currentPoint"])._y()).__minus(_st(yArray)._at_(i)));
return _st(_st(self)._context())._restore();
} else {
return _st(self)._display_X_y_(aTroop,_st(_st(self["@currentPoint"])._x()).__plus(_st(xArray)._at_(i)),_st(_st(self["@currentPoint"])._y()).__minus(_st(yArray)._at_(i)));
};
}, function($ctx2) {$ctx2.fillBlock({i:i},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"visitTroop:",{aTroop:aTroop,xArray:xArray,yArray:yArray},smalltalk.CWDrawer)})},
args: ["aTroop"],
source: "visitTroop: aTroop\x0a\x09|xArray yArray|\x0a\x0a\x09xArray := #(17 37 -11 9).\x0a\x09yArray := #(33 23 26 15).\x0a\x0a\x09(1 to: aTroop hp) do: [ :i |\x0a\x09\x09(aTroop side negative) ifTrue: [\x0a\x09\x09\x09\x09self context save;\x0a\x09\x09\x09\x09\x09translate: currentPoint x + 72 + (xArray at: i) y: 0;\x0a\x09\x09\x09\x09\x09scale: -1 y: 1.\x0a\x09\x09\x09\x09self display: aTroop X: 0 y: currentPoint y - (yArray at: i).\x0a\x09\x09\x09\x09self context restore.\x0a\x09\x09\x09] ifFalse: [\x0a\x09\x09\x09\x09self display: aTroop X: currentPoint x + (xArray at: i) y: currentPoint y - (yArray at: i)\x0a\x09\x09\x09]\x0a\x09]",
messageSends: ["do:", "ifTrue:ifFalse:", "save", "context", "translate:y:", "+", "at:", "x", "scale:y:", "display:X:y:", "-", "y", "restore", "negative", "side", "to:", "hp"],
referencedClasses: []
}),
smalltalk.CWDrawer);



