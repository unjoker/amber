smalltalk.addPackage('Easnoth-Visitors');
smalltalk.addClass('CWMapInterpreterContext', smalltalk.Object, ['rowIndex', 'cellIndex'], 'Easnoth-Visitors');
smalltalk.addMethod(
smalltalk.method({
selector: "nextCell",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@cellIndex"]=_st(self["@cellIndex"]).__plus((1));
return self}, function($ctx1) {$ctx1.fill(self,"nextCell",{},smalltalk.CWMapVisitorContext)})},
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
return self}, function($ctx1) {$ctx1.fill(self,"nextRow",{},smalltalk.CWMapVisitorContext)})},
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
return self}, function($ctx1) {$ctx1.fill(self,"reset",{},smalltalk.CWMapVisitorContext)})},
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
}, function($ctx1) {$ctx1.fill(self,"default",{},smalltalk.CWMapVisitorContext.klass)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.CWMapInterpreterContext.klass);


smalltalk.addClass('CWGlobalDrawingContext', smalltalk.CWMapInterpreterContext, ['currentPointCache', 'drawer'], 'Easnoth-Visitors');
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
_st(self["@drawer"])._drawIsometric_inContext_(got,_st(self["@drawer"])._gameContext());
return self}, function($ctx1) {$ctx1.fill(self,"visitGameOverTile:",{got:got},smalltalk.CWGlobalDrawingContext)})},
messageSends: ["drawIsometric:inContext:", "gameContext"]}),
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
_st(self["@drawer"])._drawIsometric_inContext_(ot,_st(self["@drawer"])._backgroundContext());
return self}, function($ctx1) {$ctx1.fill(self,"visitOverTile:",{ot:ot},smalltalk.CWGlobalDrawingContext)})},
messageSends: ["drawIsometric:inContext:", "backgroundContext"]}),
smalltalk.CWGlobalDrawingContext);

smalltalk.addMethod(
smalltalk.method({
selector: "visitTile:",
fn: function (aTile){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@drawer"])._drawIsometric_inContext_(aTile,_st(self["@drawer"])._backgroundContext());
return self}, function($ctx1) {$ctx1.fill(self,"visitTile:",{aTile:aTile},smalltalk.CWGlobalDrawingContext)})},
messageSends: ["drawIsometric:inContext:", "backgroundContext"]}),
smalltalk.CWGlobalDrawingContext);

smalltalk.addMethod(
smalltalk.method({
selector: "visitTroop:",
fn: function (aTroop){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@drawer"])._drawTroop_(aTroop);
return self}, function($ctx1) {$ctx1.fill(self,"visitTroop:",{aTroop:aTroop},smalltalk.CWGlobalDrawingContext)})},
messageSends: ["drawTroop:"]}),
smalltalk.CWGlobalDrawingContext);



smalltalk.addClass('CWMonsterAndGOTDrawingContext', smalltalk.CWGlobalDrawingContext, [], 'Easnoth-Visitors');
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



smalltalk.addClass('CWGOTDrawingContext', smalltalk.CWMonsterAndGOTDrawingContext, [], 'Easnoth-Visitors');
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
selector: "visitTroop:",
fn: function (aTroop){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"visitTroop:",{aTroop:aTroop},smalltalk.CWGOTDrawingContext)})},
messageSends: []}),
smalltalk.CWGOTDrawingContext);



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
selector: "visitTroop:",
fn: function (aTroop){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"visitTroop:",{aTroop:aTroop},smalltalk.MapVisitor)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.CWVisitor);


smalltalk.CWVisitor.klass.iVarNames = ['singleton'];

smalltalk.addClass('CWJsonWriter', smalltalk.CWVisitor, ['stream', 'indentLevel', 'otNumber'], 'Easnoth-Visitors');
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
selector: "visitTroop:",
fn: function (aTroop){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self;
_st($1)._startObjectNamed_("troop");
$2=_st($1)._visitMonster_(aTroop);
return self}, function($ctx1) {$ctx1.fill(self,"visitTroop:",{aTroop:aTroop},smalltalk.CWJsonWriter)})},
messageSends: ["startObjectNamed:", "visitMonster:"]}),
smalltalk.CWJsonWriter);



smalltalk.addClass('CWMapInterpreter', smalltalk.CWVisitor, ['executionContext'], 'Easnoth-Visitors');
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



smalltalk.addClass('CWMapDrawer', smalltalk.CWMapInterpreter, ['layers', 'padding', 'map'], 'Easnoth-Visitors');
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
selector: "backgroundCanvas",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@layers"])._at_((1));
return $1;
}, function($ctx1) {$ctx1.fill(self,"backgroundCanvas",{},smalltalk.CWMapDrawer)})},
messageSends: ["at:"]}),
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
selector: "backgroundContext",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._contextForCanvas_(_st(self)._backgroundCanvas());
return $1;
}, function($ctx1) {$ctx1.fill(self,"backgroundContext",{},smalltalk.CWMapDrawer)})},
messageSends: ["contextForCanvas:", "backgroundCanvas"]}),
smalltalk.CWMapDrawer);

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
}, function($ctx1) {$ctx1.fill(self,"canvasForId:",{id:id},smalltalk.CWMapDrawer)})},
messageSends: ["fromJQuery:canvas:", "asJQuery", "onJQuery:"]}),
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
selector: "cleanCanvas",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@layers"])._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(self)._cleanCanvas_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"cleanCanvas",{},smalltalk.CWMapDrawer)})},
messageSends: ["do:", "cleanCanvas:"]}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "cleanCanvas:",
fn: function (aCanvas){
var self=this;
var elem;
return smalltalk.withContext(function($ctx1) { 
elem=_st(aCanvas)._element();
_st(_st(elem)._getContext_("2d"))._clearRect_y_width_height_((0),(0),_st(elem)._width(),_st(elem)._height());
return self}, function($ctx1) {$ctx1.fill(self,"cleanCanvas:",{aCanvas:aCanvas,elem:elem},smalltalk.CWMapDrawer)})},
messageSends: ["element", "clearRect:y:width:height:", "width", "height", "getContext:"]}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "contextForCanvas:",
fn: function (canvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(canvas)._element())._getContext_("2d");
return $1;
}, function($ctx1) {$ctx1.fill(self,"contextForCanvas:",{canvas:canvas},smalltalk.CWMapDrawer)})},
messageSends: ["getContext:", "element"]}),
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
selector: "display:inContext:",
fn: function (object,ctx){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._display_inContext_X_y_(object,ctx,(0),(0));
return self}, function($ctx1) {$ctx1.fill(self,"display:inContext:",{object:object,ctx:ctx},smalltalk.CWMapDrawer)})},
messageSends: ["display:inContext:X:y:"]}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "display:inContext:X:y:",
fn: function (object,ctx,x,y){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(ctx)._drawImage_x_y_(_st(object)._image(),x,y);
return self}, function($ctx1) {$ctx1.fill(self,"display:inContext:X:y:",{object:object,ctx:ctx,x:x,y:y},smalltalk.CWMapDrawer)})},
messageSends: ["drawImage:x:y:", "image"]}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "drawHeros:",
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
messageSends: ["monsterContext", "ifTrue:ifFalse:", "reverseDisplay:inContext:xPad:yPad:", "display:inContext:X:y:", "+", "x", "currentPoint", "-", "y", "negative", "side"]}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "drawIsometric:inContext:",
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
messageSends: ["safeDraw:inContext:", "translate:y:", "+", "x", "currentPoint", "-", "y", "scale:y:", "rotate:", "/", "pi", "display:inContext:"]}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "drawTroop:",
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
messageSends: ["monsterContext", "do:", "ifTrue:ifFalse:", "reverseDisplay:inContext:xPad:yPad:", "+", "at:", "display:inContext:X:y:", "x", "currentPoint", "-", "y", "negative", "side", "to:", "hp"]}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "gameCanvas",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@layers"])._at_((2));
return $1;
}, function($ctx1) {$ctx1.fill(self,"gameCanvas",{},smalltalk.CWMapDrawer)})},
messageSends: ["at:"]}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "gameCanvasId",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "#game";
}, function($ctx1) {$ctx1.fill(self,"gameCanvasId",{},smalltalk.CWMapDrawer)})},
messageSends: []}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "gameContext",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._contextForCanvas_(_st(self)._gameCanvas());
return $1;
}, function($ctx1) {$ctx1.fill(self,"gameContext",{},smalltalk.CWMapDrawer)})},
messageSends: ["contextForCanvas:", "gameCanvas"]}),
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
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.CWMapDrawer)})},
messageSends: ["initialize", "initializeLayers", "padding:", "@", "canvasPadding"]}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeForMap:",
fn: function (aMap){
var self=this;
function $Transcript(){return smalltalk.Transcript||(typeof Transcript=="undefined"?nil:Transcript)}
return smalltalk.withContext(function($ctx1) { 
self["@map"]=aMap;
_st($Transcript())._show_(_st("init mapDrawer with: ").__comma(_st(self["@map"])._printString()));
_st(_st(self)._padding())._x_(_st(_st(self)._canvasPadding()).__plus(_st(_st(_st(_st(_st(_st(self["@map"])._children())._at_((1)))._children())._size()).__star(_st(self)._tileUnit())).__star((1.17))));
return self}, function($ctx1) {$ctx1.fill(self,"initializeForMap:",{aMap:aMap},smalltalk.CWMapDrawer)})},
messageSends: ["show:", ",", "printString", "x:", "+", "*", "tileUnit", "size", "children", "at:", "canvasPadding", "padding"]}),
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
_st($1)._at_put_((1),_st(self)._canvasForId_(_st(self)._backgroundCanvasId()));
_st($1)._at_put_((2),_st(self)._canvasForId_(_st(self)._gameCanvasId()));
_st($1)._at_put_((3),_st(self)._canvasForId_(_st(self)._monsterCanvasId()));
$2=_st($1)._yourself();
self["@layers"]=$2;
return self}, function($ctx1) {$ctx1.fill(self,"initializeLayers",{},smalltalk.CWMapDrawer)})},
messageSends: ["at:put:", "canvasForId:", "backgroundCanvasId", "new", "gameCanvasId", "monsterCanvasId", "yourself"]}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "monsterCanvas",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@layers"])._at_((3));
return $1;
}, function($ctx1) {$ctx1.fill(self,"monsterCanvas",{},smalltalk.CWMapDrawer)})},
messageSends: ["at:"]}),
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
selector: "monsterContext",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._contextForCanvas_(_st(self)._monsterCanvas());
return $1;
}, function($ctx1) {$ctx1.fill(self,"monsterContext",{},smalltalk.CWMapDrawer)})},
messageSends: ["contextForCanvas:", "monsterCanvas"]}),
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
selector: "reverseDisplay:inContext:xPad:yPad:",
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
messageSends: ["safeDraw:inContext:", "translate:y:", "+", "x", "currentPoint", "scale:y:", "display:inContext:X:y:", "-", "y"]}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "safeDraw:inContext:",
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
return self}, function($ctx1) {$ctx1.fill(self,"safeDraw:inContext:",{aBlock:aBlock,ctx:ctx},smalltalk.CWMapDrawer)})},
messageSends: ["ensure:", "restore", "save", "value"]}),
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
selector: "updateGOTs",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._cleanCanvas_(_st(self)._gameCanvas());
self["@executionContext"]=_st(self)._newGOTDrawingContext();
_st(self)._visitTree_(self["@map"]);
return self}, function($ctx1) {$ctx1.fill(self,"updateGOTs",{},smalltalk.CWMapDrawer)})},
messageSends: ["cleanCanvas:", "gameCanvas", "newGOTDrawingContext", "visitTree:"]}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "updateMap",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._cleanCanvas();
self["@executionContext"]=_st(self)._newGlobalDrawingContext();
_st(self)._visitTree_(self["@map"]);
return self}, function($ctx1) {$ctx1.fill(self,"updateMap",{},smalltalk.CWMapDrawer)})},
messageSends: ["cleanCanvas", "newGlobalDrawingContext", "visitTree:"]}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "updateMonstersAndGOTs",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._cleanCanvas_(_st(self)._gameCanvas());
_st(self)._cleanCanvas_(_st(self)._monsterCanvas());
self["@executionContext"]=_st(self)._newMonsterAndGOTDrawingContext();
_st(self)._visitTree_(self["@map"]);
return self}, function($ctx1) {$ctx1.fill(self,"updateMonstersAndGOTs",{},smalltalk.CWMapDrawer)})},
messageSends: ["cleanCanvas:", "gameCanvas", "monsterCanvas", "newMonsterAndGOTDrawingContext", "visitTree:"]}),
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
selector: "visitTroop:",
fn: function (aTroop){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._executionContext())._visitTroop_(aTroop);
return self}, function($ctx1) {$ctx1.fill(self,"visitTroop:",{aTroop:aTroop},smalltalk.CWMapDrawer)})},
messageSends: ["visitTroop:", "executionContext"]}),
smalltalk.CWMapDrawer);



