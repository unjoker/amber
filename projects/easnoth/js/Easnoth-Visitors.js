smalltalk.addPackage('Easnoth-Visitors');
smalltalk.addClass('CWGlobalDrawingContext', smalltalk.Object, ['rowIndex', 'cellIndex', 'currentPointCache', 'drawer'], 'Easnoth-Visitors');
smalltalk.CWGlobalDrawingContext.comment="I represent the execution context of the CWMapDrawer.\x0aWith this context, the CWMap drawer will redraw the whole map."
smalltalk.addMethod(
smalltalk.method({
selector: "calculCanvasCoods",
category: 'calculs',
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
}, function($ctx1) {$ctx1.fill(self,"calculCanvasCoods",{xpos:xpos,ypos:ypos,temp:temp,sin45:sin45,sin15:sin15,sin135:sin135,sin75:sin75,padding:padding,tileUnit:tileUnit},smalltalk.CWDrawingContext)})},
args: [],
source: "calculCanvasCoods\x0a\x09\x22Takes the coods of the cell in the map and answers the absolute coods of the cell image in the web page\x22\x0a\x0a\x09| xpos ypos temp sin45 sin15 sin135 sin75 padding tileUnit |\x0a\x09\x0a\x09padding := drawer padding.\x0a\x09tileUnit := drawer tileUnit.\x0a\x09\x0a\x09sin45 := 0.707106781. \x22Pi/4\x22\x0a\x09sin15 := 0.258819045. \x22Pi/12\x22\x0a\x09sin135 := 0.233445364. \x22???->I used Approximation\x22\x0a\x09sin75 := 0.965925826. \x225*Pi/12\x22\x0a\x0a\x09temp := ((cellIndex + ((rowIndex + 1)/2)) truncated) * (sin15 + sin75).\x0a\x09xpos := (rowIndex * (sin45 + sin75) - (temp)) * tileUnit + padding x.\x0a\x09ypos := (temp / 2 + (rowIndex * sin135)) * tileUnit + padding y.\x0a\x09\x0a\x09^ xpos rounded @ ypos rounded",
messageSends: ["padding", "tileUnit", "*", "+", "truncated", "/", "x", "-", "y", "@", "rounded"],
referencedClasses: []
}),
smalltalk.CWGlobalDrawingContext);

smalltalk.addMethod(
smalltalk.method({
selector: "currentPoint",
category: 'accessing',
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
}, function($ctx1) {$ctx1.fill(self,"currentPoint",{},smalltalk.CWDrawingContext)})},
args: [],
source: "currentPoint\x0a\x09^ currentPointCache ifNil: [ currentPointCache := self calculCanvasCoods ]",
messageSends: ["ifNil:", "calculCanvasCoods"],
referencedClasses: []
}),
smalltalk.CWGlobalDrawingContext);

smalltalk.addMethod(
smalltalk.method({
selector: "nextCell",
category: 'context alteration',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@cellIndex"]=_st(self["@cellIndex"]).__plus((1));
self["@currentPointCache"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"nextCell",{},smalltalk.CWDrawingContext)})},
args: [],
source: "nextCell\x0a\x09cellIndex := cellIndex + 1.\x0a\x09currentPointCache := nil.\x0a\x09",
messageSends: ["+"],
referencedClasses: []
}),
smalltalk.CWGlobalDrawingContext);

smalltalk.addMethod(
smalltalk.method({
selector: "nextRow",
category: 'context alteration',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@rowIndex"]=_st(self["@rowIndex"]).__plus((1));
self["@cellIndex"]=(0);
return self}, function($ctx1) {$ctx1.fill(self,"nextRow",{},smalltalk.CWDrawingContext)})},
args: [],
source: "nextRow\x0a\x09rowIndex := rowIndex + 1.\x0a\x09cellIndex := 0",
messageSends: ["+"],
referencedClasses: []
}),
smalltalk.CWGlobalDrawingContext);

smalltalk.addMethod(
smalltalk.method({
selector: "reset:",
category: 'initialize-release',
fn: function (aDrawer){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@rowIndex"]=(0);
self["@cellIndex"]=(0);
self["@currentPointCache"]=nil;
self["@drawer"]=aDrawer;
return self}, function($ctx1) {$ctx1.fill(self,"reset:",{aDrawer:aDrawer},smalltalk.CWGlobalDrawingContext)})},
args: ["aDrawer"],
source: "reset: aDrawer\x0a\x09rowIndex := 0.\x0a\x09cellIndex := 0.\x0a\x09currentPointCache := nil.\x0a\x09drawer := aDrawer\x0a\x09\x22put back next thing when current system ok\x22\x0a\x09\x22drawer ifNil: [ drawer := aDrawer ]\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWGlobalDrawingContext);

smalltalk.addMethod(
smalltalk.method({
selector: "visitGameOverTile:",
category: 'visiting',
fn: function (got){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@drawer"])._drawIsometric_inContext_(got,_st(self["@drawer"])._gameContext());
return self}, function($ctx1) {$ctx1.fill(self,"visitGameOverTile:",{got:got},smalltalk.CWDrawingContext)})},
args: ["got"],
source: "visitGameOverTile: got\x0a\x09drawer drawIsometric: got inContext: drawer gameContext",
messageSends: ["drawIsometric:inContext:", "gameContext"],
referencedClasses: []
}),
smalltalk.CWGlobalDrawingContext);

smalltalk.addMethod(
smalltalk.method({
selector: "visitHeros:",
category: 'visiting',
fn: function (heros){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@drawer"])._drawHeros_(heros);
return self}, function($ctx1) {$ctx1.fill(self,"visitHeros:",{heros:heros},smalltalk.CWDrawingContext)})},
args: ["heros"],
source: "visitHeros: heros\x0a\x09drawer drawHeros: heros",
messageSends: ["drawHeros:"],
referencedClasses: []
}),
smalltalk.CWGlobalDrawingContext);

smalltalk.addMethod(
smalltalk.method({
selector: "visitOverTile:",
category: 'visiting',
fn: function (ot){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@drawer"])._drawIsometric_inContext_(ot,_st(self["@drawer"])._backgroundContext());
return self}, function($ctx1) {$ctx1.fill(self,"visitOverTile:",{ot:ot},smalltalk.CWGlobalDrawingContext)})},
args: ["ot"],
source: "visitOverTile: ot\x0a\x09drawer drawIsometric: ot inContext: drawer backgroundContext.",
messageSends: ["drawIsometric:inContext:", "backgroundContext"],
referencedClasses: []
}),
smalltalk.CWGlobalDrawingContext);

smalltalk.addMethod(
smalltalk.method({
selector: "visitTile:",
category: 'visiting',
fn: function (aTile){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@drawer"])._drawIsometric_inContext_(aTile,_st(self["@drawer"])._backgroundContext());
return self}, function($ctx1) {$ctx1.fill(self,"visitTile:",{aTile:aTile},smalltalk.CWGlobalDrawingContext)})},
args: ["aTile"],
source: "visitTile: aTile\x0a\x09drawer drawIsometric: aTile inContext: drawer backgroundContext.",
messageSends: ["drawIsometric:inContext:", "backgroundContext"],
referencedClasses: []
}),
smalltalk.CWGlobalDrawingContext);

smalltalk.addMethod(
smalltalk.method({
selector: "visitTroop:",
category: 'visiting',
fn: function (aTroop){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@drawer"])._drawTroop_(aTroop);
return self}, function($ctx1) {$ctx1.fill(self,"visitTroop:",{aTroop:aTroop},smalltalk.CWGlobalDrawingContext)})},
args: ["aTroop"],
source: "visitTroop: aTroop\x0a\x09drawer drawTroop: aTroop",
messageSends: ["drawTroop:"],
referencedClasses: []
}),
smalltalk.CWGlobalDrawingContext);


smalltalk.CWGlobalDrawingContext.klass.iVarNames = ['default'];
smalltalk.addMethod(
smalltalk.method({
selector: "default",
category: 'instance creation',
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
}, function($ctx1) {$ctx1.fill(self,"default",{},smalltalk.CWDrawingContext.klass)})},
args: [],
source: "default\x0a\x09^ default ifNil: [ default := self new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: []
}),
smalltalk.CWGlobalDrawingContext.klass);


smalltalk.addClass('CWMonsterAndGOTDrawingContext', smalltalk.CWGlobalDrawingContext, [], 'Easnoth-Visitors');
smalltalk.CWMonsterAndGOTDrawingContext.comment="With this context, the CWMap drawer will redraw only monsters and game over tiles."
smalltalk.addMethod(
smalltalk.method({
selector: "visitOverTile:",
category: 'visiting',
fn: function (ot){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"visitOverTile:",{ot:ot},smalltalk.CWMonsterAndGOTDrawingContext)})},
args: ["ot"],
source: "visitOverTile: ot\x0a\x09\x22do nothing\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWMonsterAndGOTDrawingContext);

smalltalk.addMethod(
smalltalk.method({
selector: "visitTile:",
category: 'visiting',
fn: function (aTile){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"visitTile:",{aTile:aTile},smalltalk.CWMonsterAndGOTDrawingContext)})},
args: ["aTile"],
source: "visitTile: aTile\x0a\x09\x22do nothing\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWMonsterAndGOTDrawingContext);



smalltalk.addClass('CWGOTDrawingContext', smalltalk.CWMonsterAndGOTDrawingContext, [], 'Easnoth-Visitors');
smalltalk.CWGOTDrawingContext.comment="With this context, the CWMap drawer will redraw only game over tiles."
smalltalk.addMethod(
smalltalk.method({
selector: "visitHeros:",
category: 'visiting',
fn: function (heros){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"visitHeros:",{heros:heros},smalltalk.CWGOTDrawingContext)})},
args: ["heros"],
source: "visitHeros: heros\x0a\x09\x22do nothing\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWGOTDrawingContext);

smalltalk.addMethod(
smalltalk.method({
selector: "visitTroop:",
category: 'visiting',
fn: function (aTroop){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"visitTroop:",{aTroop:aTroop},smalltalk.CWGOTDrawingContext)})},
args: ["aTroop"],
source: "visitTroop: aTroop\x0a\x09\x22do nothing\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWGOTDrawingContext);



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
category: 'visiting',
fn: function (aBusinessObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(aBusinessObject)._children())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(self)._visitTree_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"visitChildTrees:",{aBusinessObject:aBusinessObject},smalltalk.CWVisitor)})},
args: ["aBusinessObject"],
source: "visitChildTrees: aBusinessObject\x0a\x09aBusinessObject children do: [ :each |\x0a\x09\x09self visitTree: each ]",
messageSends: ["do:", "visitTree:", "children"],
referencedClasses: []
}),
smalltalk.CWVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitChildren:",
category: 'visiting',
fn: function (aBusinessObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(aBusinessObject)._children())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._accept_(self);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"visitChildren:",{aBusinessObject:aBusinessObject},smalltalk.CWVisitor)})},
args: ["aBusinessObject"],
source: "visitChildren: aBusinessObject\x0a\x09aBusinessObject children do: [ :each |\x0a\x09\x09each accept: self ]",
messageSends: ["do:", "accept:", "children"],
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
category: 'visiting',
fn: function (aComponent){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aComponent)._accept_(self);
_st(self)._visitChildTrees_(aComponent);
return self}, function($ctx1) {$ctx1.fill(self,"visitTree:",{aComponent:aComponent},smalltalk.CWVisitor)})},
args: ["aComponent"],
source: "visitTree: aComponent\x0a\x09aComponent accept: self.\x0a\x09self visitChildTrees: aComponent.",
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

smalltalk.addClass('CWJsonWriter', smalltalk.CWVisitor, [], 'Easnoth-Visitors');


smalltalk.addClass('CWLeafSelector', smalltalk.CWVisitor, [], 'Easnoth-Visitors');


smalltalk.addClass('CWMapDrawer', smalltalk.CWVisitor, ['backgroundCanvas', 'monsterCanvas', 'gameCanvas', 'padding', 'executionContext'], 'Easnoth-Visitors');
smalltalk.CWMapDrawer.comment="I am a drawer that can draw the business objects through a visit of its tree.\x0aI am an implementation of the interpreter design pattern so I have a context of execution as instance variable."
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
smalltalk.CWMapDrawer);

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
smalltalk.CWMapDrawer);

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
smalltalk.CWMapDrawer);

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
smalltalk.CWMapDrawer);

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
smalltalk.CWMapDrawer);

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
smalltalk.CWMapDrawer);

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
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "currentPoint",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._executionContext())._currentPoint();
return $1;
}, function($ctx1) {$ctx1.fill(self,"currentPoint",{},smalltalk.CWMapDrawer)})},
args: [],
source: "currentPoint\x0a\x09^ self executionContext currentPoint",
messageSends: ["currentPoint", "executionContext"],
referencedClasses: []
}),
smalltalk.CWMapDrawer);

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
smalltalk.CWMapDrawer);

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
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "drawHeros:",
category: 'rendering',
fn: function (heros){
var self=this;
var ctx;
return smalltalk.withContext(function($ctx1) { 
var $1;
ctx=_st(self)._monsterContext();
$1=_st(_st(heros)._side())._negative();
if(smalltalk.assert($1)){
_st(self)._reverseDisplay_inContext_xPad_yPad_(heros,ctx,(87),(28));
} else {
_st(self)._display_inContext_X_y_(heros,ctx,_st(_st(_st(self)._currentPoint())._x()).__plus((15)),_st(_st(_st(self)._currentPoint())._y()).__minus((28)));
};
return self}, function($ctx1) {$ctx1.fill(self,"drawHeros:",{heros:heros,ctx:ctx},smalltalk.CWMapDrawer)})},
args: ["heros"],
source: "drawHeros: heros\x0a\x09\x2287 = 72 (width image + 15\x22\x0a\x09\x0a\x09| ctx |\x0a\x09ctx := self monsterContext.\x0a\x09(heros side negative) ifTrue: [\x0a\x09\x09self reverseDisplay: heros inContext: ctx xPad: 87 yPad: 28\x0a\x09] ifFalse: [\x0a\x09\x09self display: heros inContext: ctx  X: self currentPoint x + 15 y: self currentPoint y - 28\x0a\x09]\x0a\x09",
messageSends: ["monsterContext", "ifTrue:ifFalse:", "reverseDisplay:inContext:xPad:yPad:", "display:inContext:X:y:", "+", "x", "currentPoint", "-", "y", "negative", "side"],
referencedClasses: []
}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "drawIsometric:inContext:",
category: 'rendering',
fn: function (object,ctx){
var self=this;
function $Number(){return smalltalk.Number||(typeof Number=="undefined"?nil:Number)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st(self)._safeDraw_inContext_((function(){
return smalltalk.withContext(function($ctx2) {
$1=ctx;
_st($1)._translate_y_(_st(_st(_st(self)._currentPoint())._x()).__plus((45)),_st(_st(_st(self)._currentPoint())._y()).__minus((7)));
_st($1)._scale_y_((1),(0.5));
_st($1)._rotate_(_st(_st($Number())._pi()).__slash((4)));
$2=_st($1)._scale_y_((1.4),(1.33));
$2;
return _st(self)._display_inContext_(object,ctx);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),ctx);
return self}, function($ctx1) {$ctx1.fill(self,"drawIsometric:inContext:",{object:object,ctx:ctx},smalltalk.CWMapDrawer)})},
args: ["object", "ctx"],
source: "drawIsometric: object inContext: ctx\x0a\x09\x22draw through isometric transformation\x22\x0a\x0a\x09self safeDraw: [ ctx \x0a\x09\x09translate: self currentPoint x + 45 y: self currentPoint y - 7;\x0a\x09\x09scale: 1 y: 0.5;\x0a\x09\x09rotate: Number pi / 4 ;\x0a\x09\x09scale: 1.4 y: 1.33.\x0a\x09self display: object inContext: ctx ]\x0a\x09\x09inContext: ctx",
messageSends: ["safeDraw:inContext:", "translate:y:", "+", "x", "currentPoint", "-", "y", "scale:y:", "rotate:", "/", "pi", "display:inContext:"],
referencedClasses: ["Number"]
}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "drawTroop:",
category: 'rendering',
fn: function (aTroop){
var self=this;
var xArray,yArray,ctx;
return smalltalk.withContext(function($ctx1) { 
var $1;
xArray=[(17), (37), (-11), (9)];
yArray=[(33), (23), (26), (15)];
ctx=_st(self)._monsterContext();
_st(_st((1))._to_(_st(aTroop)._hp()))._do_((function(i){
return smalltalk.withContext(function($ctx2) {
$1=_st(_st(aTroop)._side())._negative();
if(smalltalk.assert($1)){
return _st(self)._reverseDisplay_inContext_xPad_yPad_(aTroop,ctx,_st((72)).__plus(_st(xArray)._at_(i)),_st(yArray)._at_(i));
} else {
return _st(self)._display_inContext_X_y_(aTroop,ctx,_st(_st(_st(self)._currentPoint())._x()).__plus(_st(xArray)._at_(i)),_st(_st(_st(self)._currentPoint())._y()).__minus(_st(yArray)._at_(i)));
};
}, function($ctx2) {$ctx2.fillBlock({i:i},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"drawTroop:",{aTroop:aTroop,xArray:xArray,yArray:yArray,ctx:ctx},smalltalk.CWMapDrawer)})},
args: ["aTroop"],
source: "drawTroop: aTroop\x0a\x09| xArray yArray ctx |\x0a\x0a\x09xArray := #(17 37 -11 9).\x0a\x09yArray := #(33 23 26 15).\x0a\x0a\x09ctx := self monsterContext.\x0a\x09(1 to: aTroop hp) do: [ :i |\x0a\x09\x09(aTroop side negative) ifTrue: [\x0a\x09\x09\x09\x09self reverseDisplay: aTroop inContext: ctx xPad: 72 + (xArray at: i) yPad: (yArray at: i)\x0a\x09\x09\x09] ifFalse: [\x0a\x09\x09\x09\x09self display: aTroop inContext: ctx X: self currentPoint x + (xArray at: i) y: self currentPoint y - (yArray at: i)\x0a\x09\x09\x09]\x0a\x09]",
messageSends: ["monsterContext", "do:", "ifTrue:ifFalse:", "reverseDisplay:inContext:xPad:yPad:", "+", "at:", "display:inContext:X:y:", "x", "currentPoint", "-", "y", "negative", "side", "to:", "hp"],
referencedClasses: []
}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "executionContext",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@executionContext"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"executionContext",{},smalltalk.CWDrawer)})},
args: [],
source: "executionContext\x0a\x09^ executionContext",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWMapDrawer);

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
smalltalk.CWMapDrawer);

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
smalltalk.CWMapDrawer);

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
smalltalk.CWMapDrawer);

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
smalltalk.CWMapDrawer);

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
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeForMap:",
category: 'initialize-release',
fn: function (aMap){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._padding())._x_(_st(_st(self)._canvasPadding()).__plus(_st(_st(_st(_st(_st(_st(aMap)._children())._at_((1)))._children())._size()).__star(_st(self)._tileUnit())).__star((1.17))));
return self}, function($ctx1) {$ctx1.fill(self,"initializeForMap:",{aMap:aMap},smalltalk.CWDrawer)})},
args: ["aMap"],
source: "initializeForMap: aMap\x0a\x09self padding x: self canvasPadding + ((aMap children at:1) children size * self tileUnit * 1.17).",
messageSends: ["x:", "+", "*", "tileUnit", "size", "children", "at:", "canvasPadding", "padding"],
referencedClasses: []
}),
smalltalk.CWMapDrawer);

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
smalltalk.CWMapDrawer);

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
smalltalk.CWMapDrawer);

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
smalltalk.CWMapDrawer);

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
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "newGOTDrawingContext",
category: 'factory',
fn: function (){
var self=this;
function $CWGOTDrawingContext(){return smalltalk.CWGOTDrawingContext||(typeof CWGOTDrawingContext=="undefined"?nil:CWGOTDrawingContext)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st($CWGOTDrawingContext())._default())._reset_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"newGOTDrawingContext",{},smalltalk.CWMapDrawer)})},
args: [],
source: "newGOTDrawingContext\x0a\x09^ CWGOTDrawingContext default reset: self",
messageSends: ["reset:", "default"],
referencedClasses: ["CWGOTDrawingContext"]
}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "newGlobalDrawingContext",
category: 'factory',
fn: function (){
var self=this;
function $CWGlobalDrawingContext(){return smalltalk.CWGlobalDrawingContext||(typeof CWGlobalDrawingContext=="undefined"?nil:CWGlobalDrawingContext)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st($CWGlobalDrawingContext())._default())._reset_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"newGlobalDrawingContext",{},smalltalk.CWMapDrawer)})},
args: [],
source: "newGlobalDrawingContext\x0a\x09^ CWGlobalDrawingContext default reset: self",
messageSends: ["reset:", "default"],
referencedClasses: ["CWGlobalDrawingContext"]
}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "newMonsterAndGOTDrawingContext",
category: 'factory',
fn: function (){
var self=this;
function $CWMonsterAndGOTDrawingContext(){return smalltalk.CWMonsterAndGOTDrawingContext||(typeof CWMonsterAndGOTDrawingContext=="undefined"?nil:CWMonsterAndGOTDrawingContext)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st($CWMonsterAndGOTDrawingContext())._default())._reset_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"newMonsterAndGOTDrawingContext",{},smalltalk.CWMapDrawer)})},
args: [],
source: "newMonsterAndGOTDrawingContext\x0a\x09^ CWMonsterAndGOTDrawingContext default reset: self",
messageSends: ["reset:", "default"],
referencedClasses: ["CWMonsterAndGOTDrawingContext"]
}),
smalltalk.CWMapDrawer);

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
smalltalk.CWMapDrawer);

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
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "reverseDisplay:inContext:xPad:yPad:",
category: 'rendering',
fn: function (heros,ctx,aX,aY){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st(self)._safeDraw_inContext_((function(){
return smalltalk.withContext(function($ctx2) {
$1=ctx;
_st($1)._translate_y_(_st(_st(_st(self)._currentPoint())._x()).__plus(aX),(0));
$2=_st($1)._scale_y_((-1),(1));
$2;
return _st(self)._display_inContext_X_y_(heros,ctx,(0),_st(_st(_st(self)._currentPoint())._y()).__minus(aY));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),ctx);
return self}, function($ctx1) {$ctx1.fill(self,"reverseDisplay:inContext:xPad:yPad:",{heros:heros,ctx:ctx,aX:aX,aY:aY},smalltalk.CWMapDrawer)})},
args: ["heros", "ctx", "aX", "aY"],
source: "reverseDisplay: heros inContext: ctx xPad: aX yPad: aY\x0a\x09\x2287 = 72 (width image + 15\x22\x0a\x0a\x09self safeDraw: [ ctx\x0a\x09\x09translate: self currentPoint x + aX y: 0;\x0a\x09\x09scale: -1 y: 1.\x0a\x09self display: heros inContext: ctx X: 0 y: self currentPoint y - aY ]\x0a\x09\x09inContext: ctx\x0a\x09\x0a\x09",
messageSends: ["safeDraw:inContext:", "translate:y:", "+", "x", "currentPoint", "scale:y:", "display:inContext:X:y:", "-", "y"],
referencedClasses: []
}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "safeDraw:inContext:",
category: 'rendering',
fn: function (aBlock,ctx){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st((function(){
return smalltalk.withContext(function($ctx2) {
_st(ctx)._save();
return _st(aBlock)._value();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._ensure_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(ctx)._restore();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"safeDraw:inContext:",{aBlock:aBlock,ctx:ctx},smalltalk.CWDrawer)})},
args: ["aBlock", "ctx"],
source: "safeDraw: aBlock inContext: ctx\x0a\x09\x22ensure that the drawing context will be restored\x22\x0a\x0a\x09[ ctx save.\x0a\x09aBlock value ]\x0a\x09\x09ensure: [ ctx restore ]",
messageSends: ["ensure:", "restore", "save", "value"],
referencedClasses: []
}),
smalltalk.CWMapDrawer);

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
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "updateGOTs:",
category: 'public',
fn: function (aMap){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._cleanCanvas_(_st(self)._gameCanvas());
_st(self)._initializeForMap_(aMap);
self["@executionContext"]=_st(self)._newGOTDrawingContext();
_st(self)._visitTree_(aMap);
return self}, function($ctx1) {$ctx1.fill(self,"updateGOTs:",{aMap:aMap},smalltalk.CWMapDrawer)})},
args: ["aMap"],
source: "updateGOTs: aMap\x0a\x09self cleanCanvas: self gameCanvas.\x0a\x09\x22hacky\x22\x0a\x09self initializeForMap: aMap.\x0a\x09\x22end hacky\x22\x0a\x09executionContext := self newGOTDrawingContext.\x0a\x09self visitTree: aMap.",
messageSends: ["cleanCanvas:", "gameCanvas", "initializeForMap:", "newGOTDrawingContext", "visitTree:"],
referencedClasses: []
}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "updateMap:",
category: 'public',
fn: function (aMap){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._cleanCanvas();
_st(self)._initializeForMap_(aMap);
self["@executionContext"]=_st(self)._newGlobalDrawingContext();
_st(self)._visitTree_(aMap);
return self}, function($ctx1) {$ctx1.fill(self,"updateMap:",{aMap:aMap},smalltalk.CWMapDrawer)})},
args: ["aMap"],
source: "updateMap: aMap\x0a\x09self cleanCanvas.\x0a\x09\x22hacky\x22\x0a\x09self initializeForMap: aMap.\x0a\x09\x22end hacky\x22\x0a\x09executionContext := self newGlobalDrawingContext.\x0a\x09self visitTree: aMap.",
messageSends: ["cleanCanvas", "initializeForMap:", "newGlobalDrawingContext", "visitTree:"],
referencedClasses: []
}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "updateMonstersAndGOTs:",
category: 'public',
fn: function (aMap){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._cleanCanvas_(_st(self)._gameCanvas());
_st(self)._cleanCanvas_(_st(self)._monsterCanvas());
_st(self)._initializeForMap_(aMap);
self["@executionContext"]=_st(self)._newMonsterAndGOTDrawingContext();
_st(self)._visitTree_(aMap);
return self}, function($ctx1) {$ctx1.fill(self,"updateMonstersAndGOTs:",{aMap:aMap},smalltalk.CWMapDrawer)})},
args: ["aMap"],
source: "updateMonstersAndGOTs: aMap\x0a\x09self cleanCanvas: self gameCanvas.\x0a\x09self cleanCanvas: self monsterCanvas.\x0a\x09\x22hacky\x22\x0a\x09self initializeForMap: aMap.\x0a\x09\x22end hacky\x22\x0a\x09executionContext := self newMonsterAndGOTDrawingContext.\x0a\x09self visitTree: aMap.",
messageSends: ["cleanCanvas:", "gameCanvas", "monsterCanvas", "initializeForMap:", "newMonsterAndGOTDrawingContext", "visitTree:"],
referencedClasses: []
}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "visitCell:",
category: 'visiting',
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._executionContext())._nextCell();
return self}, function($ctx1) {$ctx1.fill(self,"visitCell:",{aCell:aCell},smalltalk.CWMapDrawer)})},
args: ["aCell"],
source: "visitCell: aCell\x0a\x09self executionContext nextCell.",
messageSends: ["nextCell", "executionContext"],
referencedClasses: []
}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "visitGameOverTile:",
category: 'visiting',
fn: function (got){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._executionContext())._visitGameOverTile_(got);
return self}, function($ctx1) {$ctx1.fill(self,"visitGameOverTile:",{got:got},smalltalk.CWMapDrawer)})},
args: ["got"],
source: "visitGameOverTile: got\x0a\x09self executionContext visitGameOverTile: got",
messageSends: ["visitGameOverTile:", "executionContext"],
referencedClasses: []
}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "visitHeros:",
category: 'visiting',
fn: function (heros){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._executionContext())._visitHeros_(heros);
return self}, function($ctx1) {$ctx1.fill(self,"visitHeros:",{heros:heros},smalltalk.CWMapDrawer)})},
args: ["heros"],
source: "visitHeros: heros\x0a\x09self executionContext visitHeros: heros\x0a\x09",
messageSends: ["visitHeros:", "executionContext"],
referencedClasses: []
}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "visitMap:",
category: 'visiting',
fn: function (aMap){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"visitMap:",{aMap:aMap},smalltalk.CWMapDrawer)})},
args: ["aMap"],
source: "visitMap: aMap\x0a\x09\x22nothing to do here\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "visitOverTile:",
category: 'visiting',
fn: function (ot){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._executionContext())._visitOverTile_(ot);
return self}, function($ctx1) {$ctx1.fill(self,"visitOverTile:",{ot:ot},smalltalk.CWMapDrawer)})},
args: ["ot"],
source: "visitOverTile: ot\x0a\x09self executionContext visitOverTile: ot",
messageSends: ["visitOverTile:", "executionContext"],
referencedClasses: []
}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "visitRow:",
category: 'visiting',
fn: function (aRow){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._executionContext())._nextRow();
return self}, function($ctx1) {$ctx1.fill(self,"visitRow:",{aRow:aRow},smalltalk.CWMapDrawer)})},
args: ["aRow"],
source: "visitRow: aRow\x0a\x09self executionContext nextRow.",
messageSends: ["nextRow", "executionContext"],
referencedClasses: []
}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "visitTile:",
category: 'visiting',
fn: function (aTile){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._executionContext())._visitTile_(aTile);
return self}, function($ctx1) {$ctx1.fill(self,"visitTile:",{aTile:aTile},smalltalk.CWMapDrawer)})},
args: ["aTile"],
source: "visitTile: aTile\x0a\x09self executionContext visitTile: aTile",
messageSends: ["visitTile:", "executionContext"],
referencedClasses: []
}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "visitTroop:",
category: 'visiting',
fn: function (aTroop){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._executionContext())._visitTroop_(aTroop);
return self}, function($ctx1) {$ctx1.fill(self,"visitTroop:",{aTroop:aTroop},smalltalk.CWMapDrawer)})},
args: ["aTroop"],
source: "visitTroop: aTroop\x0a\x09self executionContext visitTroop: aTroop",
messageSends: ["visitTroop:", "executionContext"],
referencedClasses: []
}),
smalltalk.CWMapDrawer);



