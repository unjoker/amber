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

smalltalk.addClass('CWDrawer', smalltalk.CWVisitor, ['backgroundCanvas', 'monsterCanvas', 'gameCanvas', 'padding', 'currentPoint'], 'Easnoth-Visitors');
smalltalk.CWDrawer.comment="I am a drawer that can draw the business objects through a visit of its tree."
smalltalk.addMethod(
smalltalk.method({
selector: "backgroundCanvas",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@backgroundCanvas"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"backgroundCanvas",{},smalltalk.CWDrawer)})},
args: [],
source: "backgroundCanvas\x0a\x09^ backgroundCanvas",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "backgroundCanvas:",
category: 'accessing',
fn: function (aCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@backgroundCanvas"]=aCanvas;
return self}, function($ctx1) {$ctx1.fill(self,"backgroundCanvas:",{aCanvas:aCanvas},smalltalk.CWDrawer)})},
args: ["aCanvas"],
source: "backgroundCanvas: aCanvas\x0a\x09backgroundCanvas := aCanvas",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "backgroundCanvasId",
category: 'constant',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "#background";
}, function($ctx1) {$ctx1.fill(self,"backgroundCanvasId",{},smalltalk.CWDrawer)})},
args: [],
source: "backgroundCanvasId\x0a\x09\x22id of the background canvas for the css\x22\x0a\x0a\x09^ '#background'",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "backgroundContext",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self)._backgroundCanvas())._element())._getContext_("2d");
return $1;
}, function($ctx1) {$ctx1.fill(self,"backgroundContext",{},smalltalk.CWDrawer)})},
args: [],
source: "backgroundContext\x0a\x09^ self backgroundCanvas element getContext: '2d'",
messageSends: ["getContext:", "element", "backgroundCanvas"],
referencedClasses: []
}),
smalltalk.CWDrawer);

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
xpos=_st(_st(_st(_st(i).__star(_st(sin45).__plus(sin75))).__minus(temp)).__star(_st(self)._tileUnit())).__plus(_st(_st(self)._padding())._x());
ypos=_st(_st(_st(_st(temp).__slash((2))).__plus(_st(i).__star(sin135))).__star(_st(self)._tileUnit())).__plus(_st(_st(self)._padding())._y());
$1=_st(_st(xpos)._rounded()).__at(_st(ypos)._rounded());
return $1;
}, function($ctx1) {$ctx1.fill(self,"calculCanvasCoods:",{coods:coods,xpos:xpos,ypos:ypos,temp:temp,sin45:sin45,sin15:sin15,sin135:sin135,sin75:sin75,i:i,j:j},smalltalk.CWDrawer)})},
args: ["coods"],
source: "calculCanvasCoods: coods\x0a\x09\x22Takes the coods of the cell in the map and answers the absolute coods of the cell image in the web page\x22\x0a\x0a\x09| xpos ypos temp sin45 sin15 sin135 sin75 i j |\x0a\x09\x0a\x09i := coods x.\x0a\x09j := coods y.\x0a\x09\x0a\x09sin45 := 0.707106781. \x22Pi/4\x22\x0a\x09sin15 := 0.258819045. \x22Pi/12\x22\x0a\x09sin135 := 0.233445364. \x22???->I used Approximation\x22\x0a\x09sin75 := 0.965925826. \x225*Pi/12\x22\x0a\x0a\x09temp := ((j + ((i + 1)/2)) truncated) * (sin15 + sin75).\x0a\x09xpos := (i * (sin45 + sin75) - (temp)) * self tileUnit + self padding x.\x0a\x09ypos := (temp / 2 + (i * sin135)) * self tileUnit + self padding y.\x0a\x09\x0a\x09^ xpos rounded @ ypos rounded.",
messageSends: ["x", "y", "*", "+", "truncated", "/", "padding", "tileUnit", "-", "@", "rounded"],
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
return smalltalk.withContext(function($ctx1) { 
_st(self)._cleanCanvas_(_st(self)._backgroundCanvas());
_st(self)._cleanCanvas_(_st(self)._gameCanvas());
_st(self)._cleanCanvas_(_st(self)._monsterCanvas());
return self}, function($ctx1) {$ctx1.fill(self,"cleanCanvas",{},smalltalk.CWDrawer)})},
args: [],
source: "cleanCanvas\x0a\x09self cleanCanvas: self backgroundCanvas.\x0a\x09self cleanCanvas: self gameCanvas.\x0a\x09self cleanCanvas: self monsterCanvas.\x0a ",
messageSends: ["cleanCanvas:", "backgroundCanvas", "gameCanvas", "monsterCanvas"],
referencedClasses: []
}),
smalltalk.CWDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "cleanCanvas:",
category: 'public',
fn: function (aCanvas){
var self=this;
var elem;
return smalltalk.withContext(function($ctx1) { 
elem=_st(aCanvas)._element();
_st(_st(elem)._getContext_("2d"))._clearRect_y_width_height_((0),(0),_st(elem)._width(),_st(elem)._height());
return self}, function($ctx1) {$ctx1.fill(self,"cleanCanvas:",{aCanvas:aCanvas,elem:elem},smalltalk.CWDrawer)})},
args: ["aCanvas"],
source: "cleanCanvas: aCanvas\x0a\x09| elem |\x0a\x09elem := aCanvas element.\x0a\x09(elem getContext: '2d') clearRect: 0 y: 0 width: elem width height: elem height.\x0a ",
messageSends: ["element", "clearRect:y:width:height:", "width", "height", "getContext:"],
referencedClasses: []
}),
smalltalk.CWDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "display:inContext:",
category: 'rendering',
fn: function (object,ctx){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._display_inContext_X_y_(object,ctx,(0),(0));
return self}, function($ctx1) {$ctx1.fill(self,"display:inContext:",{object:object,ctx:ctx},smalltalk.CWDrawer)})},
args: ["object", "ctx"],
source: "display: object inContext: ctx\x0a\x09self display: object inContext: ctx X: 0 y: 0",
messageSends: ["display:inContext:X:y:"],
referencedClasses: []
}),
smalltalk.CWDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "display:inContext:X:y:",
category: 'rendering',
fn: function (object,ctx,x,y){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(ctx)._drawImage_x_y_(_st(object)._image(),x,y);
return self}, function($ctx1) {$ctx1.fill(self,"display:inContext:X:y:",{object:object,ctx:ctx,x:x,y:y},smalltalk.CWDrawer)})},
args: ["object", "ctx", "x", "y"],
source: "display: object inContext: ctx X: x y: y\x0a\x09ctx\x0a\x09\x09drawImage: object image\x0a\x09\x09x: x\x0a\x09\x09y: y.",
messageSends: ["drawImage:x:y:", "image"],
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
_st(_st(self)._padding())._x_(_st(_st(self)._canvasPadding()).__plus(_st(_st(_st(_st(_st(_st(aMap)._children())._at_((1)))._children())._size()).__star(_st(self)._tileUnit())).__star((1.17))));
_st(self)._visitTree_(aMap);
return self}, function($ctx1) {$ctx1.fill(self,"draw:",{aMap:aMap},smalltalk.CWDrawer)})},
args: ["aMap"],
source: "draw: aMap\x0a\x09self cleanCanvas.\x0a\x09\x22The following line should be put somewhere else\x22\x0a\x09self padding x: self canvasPadding + ((aMap children at:1) children size * self tileUnit * 1.17).\x0a\x09self visitTree: aMap.\x0a ",
messageSends: ["cleanCanvas", "x:", "+", "*", "tileUnit", "size", "children", "at:", "canvasPadding", "padding", "visitTree:"],
referencedClasses: []
}),
smalltalk.CWDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "drawIsometric:inContext:",
category: 'rendering',
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
args: ["object", "ctx"],
source: "drawIsometric: object inContext: ctx\x0a\x09\x22draw through isometric transformation\x22\x0a\x0a\x09[ ctx save;\x0a\x09\x09translate: currentPoint x + 45 y: currentPoint y - 7;\x0a\x09\x09scale: 1 y: 0.5;\x0a\x09\x09rotate: Number pi / 4 ;\x0a\x09\x09scale: 1.4 y: 1.33.\x0a\x09self display: object inContext: ctx ]\x0a\x09\x09ensure: [ ctx restore ]",
messageSends: ["ensure:", "restore", "save", "translate:y:", "+", "x", "-", "y", "scale:y:", "rotate:", "/", "pi", "display:inContext:"],
referencedClasses: ["Number"]
}),
smalltalk.CWDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "gameCanvas",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@gameCanvas"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"gameCanvas",{},smalltalk.CWDrawer)})},
args: [],
source: "gameCanvas\x0a\x09^ gameCanvas",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "gameCanvas:",
category: 'accessing',
fn: function (aCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@gameCanvas"]=aCanvas;
return self}, function($ctx1) {$ctx1.fill(self,"gameCanvas:",{aCanvas:aCanvas},smalltalk.CWDrawer)})},
args: ["aCanvas"],
source: "gameCanvas: aCanvas\x0a\x09gameCanvas := aCanvas",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "gameCanvasId",
category: 'constant',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "#game";
}, function($ctx1) {$ctx1.fill(self,"gameCanvasId",{},smalltalk.CWDrawer)})},
args: [],
source: "gameCanvasId\x0a\x09\x22id of the game canvas for the css\x22\x0a\x0a\x09^ '#game'",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "gameContext",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self)._gameCanvas())._element())._getContext_("2d");
return $1;
}, function($ctx1) {$ctx1.fill(self,"gameContext",{},smalltalk.CWDrawer)})},
args: [],
source: "gameContext\x0a\x09^ self gameCanvas element getContext: '2d'",
messageSends: ["getContext:", "element", "gameCanvas"],
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
_st(self)._backgroundCanvas_(_st($TagBrush())._fromJQuery_canvas_(_st(_st(self)._backgroundCanvasId())._asJQuery(),_st($HTMLCanvas())._onJQuery_(_st("body")._asJQuery())));
_st(self)._gameCanvas_(_st($TagBrush())._fromJQuery_canvas_(_st(_st(self)._gameCanvasId())._asJQuery(),_st($HTMLCanvas())._onJQuery_(_st("body")._asJQuery())));
_st(self)._monsterCanvas_(_st($TagBrush())._fromJQuery_canvas_(_st(_st(self)._monsterCanvasId())._asJQuery(),_st($HTMLCanvas())._onJQuery_(_st("body")._asJQuery())));
_st(self)._padding_(_st(_st(self)._canvasPadding()).__at(_st(self)._canvasPadding()));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.CWDrawer)})},
args: [],
source: "initialize\x0a\x09super initialize. \x0a\x09self backgroundCanvas: (TagBrush fromJQuery: self backgroundCanvasId asJQuery canvas: (HTMLCanvas onJQuery: 'body' asJQuery)).\x0a\x09self gameCanvas: (TagBrush fromJQuery: self gameCanvasId asJQuery canvas: (HTMLCanvas onJQuery: 'body' asJQuery)).\x0a\x09self monsterCanvas: (TagBrush fromJQuery: self monsterCanvasId asJQuery canvas: (HTMLCanvas onJQuery: 'body' asJQuery)).\x0a\x09self padding: (self canvasPadding @ self canvasPadding).",
messageSends: ["initialize", "backgroundCanvas:", "fromJQuery:canvas:", "asJQuery", "backgroundCanvasId", "onJQuery:", "gameCanvas:", "gameCanvasId", "monsterCanvas:", "monsterCanvasId", "padding:", "@", "canvasPadding"],
referencedClasses: ["HTMLCanvas", "TagBrush"]
}),
smalltalk.CWDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "monsterCanvas",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@monsterCanvas"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"monsterCanvas",{},smalltalk.CWDrawer)})},
args: [],
source: "monsterCanvas\x0a\x09^ monsterCanvas",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "monsterCanvas:",
category: 'accessing',
fn: function (aCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@monsterCanvas"]=aCanvas;
return self}, function($ctx1) {$ctx1.fill(self,"monsterCanvas:",{aCanvas:aCanvas},smalltalk.CWDrawer)})},
args: ["aCanvas"],
source: "monsterCanvas: aCanvas\x0a\x09monsterCanvas := aCanvas",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "monsterCanvasId",
category: 'constant',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "#monster";
}, function($ctx1) {$ctx1.fill(self,"monsterCanvasId",{},smalltalk.CWDrawer)})},
args: [],
source: "monsterCanvasId\x0a\x09\x22id of the monster canvas for the css\x22\x0a\x0a\x09^ '#monster'",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "monsterContext",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self)._monsterCanvas())._element())._getContext_("2d");
return $1;
}, function($ctx1) {$ctx1.fill(self,"monsterContext",{},smalltalk.CWDrawer)})},
args: [],
source: "monsterContext\x0a\x09^ self monsterCanvas element getContext: '2d'",
messageSends: ["getContext:", "element", "monsterCanvas"],
referencedClasses: []
}),
smalltalk.CWDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "padding",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@padding"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"padding",{},smalltalk.CWDrawer)})},
args: [],
source: "padding\x0a\x09^ padding",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "padding:",
category: 'accessing',
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@padding"]=aPoint;
return self}, function($ctx1) {$ctx1.fill(self,"padding:",{aPoint:aPoint},smalltalk.CWDrawer)})},
args: ["aPoint"],
source: "padding: aPoint\x0a\x09padding := aPoint",
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
_st(self)._drawIsometric_inContext_(got,_st(self)._gameContext());
return self}, function($ctx1) {$ctx1.fill(self,"visitGameOverTile:",{got:got},smalltalk.CWDrawer)})},
args: ["got"],
source: "visitGameOverTile: got\x0a\x09self drawIsometric: got inContext: self gameContext",
messageSends: ["drawIsometric:inContext:", "gameContext"],
referencedClasses: []
}),
smalltalk.CWDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "visitHeros:",
category: 'visiting',
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
args: ["heros"],
source: "visitHeros: heros\x0a\x09\x2287 = 72 (width image + 15\x22\x0a\x09\x0a\x09| ctx |\x0a\x09ctx := self monsterContext.\x0a\x09(heros side negative) ifTrue: [\x0a\x09\x09[ ctx save;\x0a\x09\x09\x09translate: currentPoint x + 87 y: 0;\x0a\x09\x09\x09scale: -1 y: 1.\x0a\x09\x09self display: heros inContext: ctx X: 0 y: currentPoint y - 28 ]\x0a\x09\x09\x09ensure: [ ctx restore ]\x0a\x09] ifFalse: [\x0a\x09\x09self display: heros inContext: ctx  X: currentPoint x + 15 y: currentPoint y - 28.\x0a\x09]\x0a\x09",
messageSends: ["monsterContext", "ifTrue:ifFalse:", "ensure:", "restore", "save", "translate:y:", "+", "x", "scale:y:", "display:inContext:X:y:", "-", "y", "negative", "side"],
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
return self}, function($ctx1) {$ctx1.fill(self,"visitMap:",{aMap:aMap},smalltalk.CWDrawer)})},
args: ["aMap"],
source: "visitMap: aMap\x0a\x09\x09\x22Nothing to draw\x22",
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
_st(self)._drawIsometric_inContext_(ot,_st(self)._backgroundContext());
return self}, function($ctx1) {$ctx1.fill(self,"visitOverTile:",{ot:ot},smalltalk.CWDrawer)})},
args: ["ot"],
source: "visitOverTile: ot\x0a\x09self drawIsometric: ot inContext: self backgroundContext.",
messageSends: ["drawIsometric:inContext:", "backgroundContext"],
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
return self}, function($ctx1) {$ctx1.fill(self,"visitRow:",{aRow:aRow},smalltalk.CWDrawer)})},
args: ["aRow"],
source: "visitRow: aRow\x0a\x09\x22Nothing to draw\x22",
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
_st(self)._drawIsometric_inContext_(aTile,_st(self)._backgroundContext());
return self}, function($ctx1) {$ctx1.fill(self,"visitTile:",{aTile:aTile},smalltalk.CWDrawer)})},
args: ["aTile"],
source: "visitTile: aTile\x0a\x09self drawIsometric: aTile inContext: self backgroundContext.",
messageSends: ["drawIsometric:inContext:", "backgroundContext"],
referencedClasses: []
}),
smalltalk.CWDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "visitTroop:",
category: 'visiting',
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
args: ["aTroop"],
source: "visitTroop: aTroop\x0a\x09| xArray yArray ctx |\x0a\x0a\x09xArray := #(17 37 -11 9).\x0a\x09yArray := #(33 23 26 15).\x0a\x0a\x09ctx := self monsterContext.\x0a\x09(1 to: aTroop hp) do: [ :i |\x0a\x09\x09(aTroop side negative) ifTrue: [\x0a\x09\x09\x09\x09[ ctx save;\x0a\x09\x09\x09\x09\x09translate: currentPoint x + 72 + (xArray at: i) y: 0;\x0a\x09\x09\x09\x09\x09scale: -1 y: 1.\x0a\x09\x09\x09\x09self display: aTroop inContext: ctx X: 0 y: currentPoint y - (yArray at: i) ] \x0a\x09\x09\x09\x09\x09ensure: [ ctx restore ]\x0a\x09\x09\x09] ifFalse: [\x0a\x09\x09\x09\x09self display: aTroop inContext: ctx X: currentPoint x + (xArray at: i) y: currentPoint y - (yArray at: i)\x0a\x09\x09\x09]\x0a\x09]",
messageSends: ["monsterContext", "do:", "ifTrue:ifFalse:", "ensure:", "restore", "save", "translate:y:", "+", "at:", "x", "scale:y:", "display:inContext:X:y:", "-", "y", "negative", "side", "to:", "hp"],
referencedClasses: []
}),
smalltalk.CWDrawer);



