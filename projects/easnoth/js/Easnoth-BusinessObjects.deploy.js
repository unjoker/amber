smalltalk.addPackage('Easnoth-BusinessObjects');
smalltalk.addClass('CWBusinessObject', smalltalk.Object, ['parent', 'children'], 'Easnoth-BusinessObjects');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.CoreWidget)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.CWBusinessObject);

smalltalk.addMethod(
smalltalk.method({
selector: "addChild:",
fn: function (aCoreWidget){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@children"])._add_(aCoreWidget);
return $1;
}, function($ctx1) {$ctx1.fill(self,"addChild:",{aCoreWidget:aCoreWidget},smalltalk.CoreWidget)})},
messageSends: ["add:"]}),
smalltalk.CWBusinessObject);

smalltalk.addMethod(
smalltalk.method({
selector: "addChildren:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@children"])._addAll_(aCollection);
return $1;
}, function($ctx1) {$ctx1.fill(self,"addChildren:",{aCollection:aCollection},smalltalk.CoreWidget)})},
messageSends: ["addAll:"]}),
smalltalk.CWBusinessObject);

smalltalk.addMethod(
smalltalk.method({
selector: "childAt:",
fn: function (index){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@children"])._at_(index);
return $1;
}, function($ctx1) {$ctx1.fill(self,"childAt:",{index:index},smalltalk.CoreWidget)})},
messageSends: ["at:"]}),
smalltalk.CWBusinessObject);

smalltalk.addMethod(
smalltalk.method({
selector: "childAt:put:",
fn: function (index,aCoreWidget){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@children"])._at_put_(index,aCoreWidget);
return $1;
}, function($ctx1) {$ctx1.fill(self,"childAt:put:",{index:index,aCoreWidget:aCoreWidget},smalltalk.CoreWidget)})},
messageSends: ["at:put:"]}),
smalltalk.CWBusinessObject);

smalltalk.addMethod(
smalltalk.method({
selector: "childBasicClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"childBasicClass",{},smalltalk.CoreWidget)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.CWBusinessObject);

smalltalk.addMethod(
smalltalk.method({
selector: "children",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@children"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"children",{},smalltalk.CoreWidget)})},
messageSends: []}),
smalltalk.CWBusinessObject);

smalltalk.addMethod(
smalltalk.method({
selector: "children:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@children"]=aCollection;
return self}, function($ctx1) {$ctx1.fill(self,"children:",{aCollection:aCollection},smalltalk.CoreWidget)})},
messageSends: []}),
smalltalk.CWBusinessObject);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.Object.fn.prototype._initialize.apply(_st(self), []);
self["@children"]=_st($Array())._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.CoreWidget)})},
messageSends: ["initialize", "new"]}),
smalltalk.CWBusinessObject);

smalltalk.addMethod(
smalltalk.method({
selector: "isLeaf",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@children"])._isEmpty();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isLeaf",{},smalltalk.CoreWidget)})},
messageSends: ["isEmpty"]}),
smalltalk.CWBusinessObject);

smalltalk.addMethod(
smalltalk.method({
selector: "isRoot",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@parent"])._isNil();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isRoot",{},smalltalk.CoreWidget)})},
messageSends: ["isNil"]}),
smalltalk.CWBusinessObject);

smalltalk.addMethod(
smalltalk.method({
selector: "newChild",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._newChild_(_st(self)._childBasicClass());
return $1;
}, function($ctx1) {$ctx1.fill(self,"newChild",{},smalltalk.CoreWidget)})},
messageSends: ["newChild:", "childBasicClass"]}),
smalltalk.CWBusinessObject);

smalltalk.addMethod(
smalltalk.method({
selector: "newChild:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(aClass)._new())._parent_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"newChild:",{aClass:aClass},smalltalk.CoreWidget)})},
messageSends: ["parent:", "new"]}),
smalltalk.CWBusinessObject);

smalltalk.addMethod(
smalltalk.method({
selector: "parent",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@parent"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"parent",{},smalltalk.CoreWidget)})},
messageSends: []}),
smalltalk.CWBusinessObject);

smalltalk.addMethod(
smalltalk.method({
selector: "parent:",
fn: function (aCoreWidget){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@parent"]=aCoreWidget;
return self}, function($ctx1) {$ctx1.fill(self,"parent:",{aCoreWidget:aCoreWidget},smalltalk.CoreWidget)})},
messageSends: []}),
smalltalk.CWBusinessObject);



smalltalk.addClass('CWCell', smalltalk.CWBusinessObject, ['canvasCoods', 'mapCoods'], 'Easnoth-BusinessObjects');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitCell_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.CWCell)})},
messageSends: ["visitCell:"]}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "canvasCoods",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@canvasCoods"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"canvasCoods",{},smalltalk.CWCell)})},
messageSends: []}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "canvasCoods:",
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@canvasCoods"]=aPoint;
return self}, function($ctx1) {$ctx1.fill(self,"canvasCoods:",{aPoint:aPoint},smalltalk.CWCell)})},
messageSends: []}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "gameOverTileClass",
fn: function (){
var self=this;
function $CWGameOverTile(){return smalltalk.CWGameOverTile||(typeof CWGameOverTile=="undefined"?nil:CWGameOverTile)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=$CWGameOverTile();
return $1;
}, function($ctx1) {$ctx1.fill(self,"gameOverTileClass",{},smalltalk.CWCell)})},
messageSends: []}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "herosClass",
fn: function (){
var self=this;
function $CWHeros(){return smalltalk.CWHeros||(typeof CWHeros=="undefined"?nil:CWHeros)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=$CWHeros();
return $1;
}, function($ctx1) {$ctx1.fill(self,"herosClass",{},smalltalk.CWCell)})},
messageSends: []}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeFromJson:",
fn: function (aJsonCell){
var self=this;
var elements;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
elements=_st(aJsonCell)._keys();
$1=_st(_st(elements)._first()).__eq("tile");
if(smalltalk.assert($1)){
_st(self)._addChild_(_st(_st(self)._newTile())._initializeFromJson_(_st(aJsonCell)._tile()));
};
$2=_st(elements)._includes_("overtiles");
if(smalltalk.assert($2)){
_st(self)._addChildren_(_st(_st(aJsonCell)._overtiles())._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(self)._newOverTile())._initializeFromJson_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})})));
};
$3=_st(_st(elements)._last()).__eq("monster");
if(smalltalk.assert($3)){
_st(self)._addChild_(_st(_st(self)._newHeros())._initializeFromJson_(_st(aJsonCell)._monster()));
};
return self}, function($ctx1) {$ctx1.fill(self,"initializeFromJson:",{aJsonCell:aJsonCell,elements:elements},smalltalk.CWCell)})},
messageSends: ["keys", "ifTrue:", "addChild:", "initializeFromJson:", "tile", "newTile", "=", "first", "addChildren:", "collect:", "newOverTile", "overtiles", "includes:", "monster", "newHeros", "last"]}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "mapCoods",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@mapCoods"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"mapCoods",{},smalltalk.CWCell)})},
messageSends: []}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "mapCoods:",
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@mapCoods"]=aPoint;
return self}, function($ctx1) {$ctx1.fill(self,"mapCoods:",{aPoint:aPoint},smalltalk.CWCell)})},
messageSends: []}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "newGameOverTile",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._newChild_(_st(self)._gameOverTileClass());
return $1;
}, function($ctx1) {$ctx1.fill(self,"newGameOverTile",{},smalltalk.CWCell)})},
messageSends: ["newChild:", "gameOverTileClass"]}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "newHeros",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._newChild_(_st(self)._herosClass());
return $1;
}, function($ctx1) {$ctx1.fill(self,"newHeros",{},smalltalk.CWCell)})},
messageSends: ["newChild:", "herosClass"]}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "newOverTile",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._newChild_(_st(self)._overTileClass());
return $1;
}, function($ctx1) {$ctx1.fill(self,"newOverTile",{},smalltalk.CWCell)})},
messageSends: ["newChild:", "overTileClass"]}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "newTile",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._newChild_(_st(self)._tileClass());
return $1;
}, function($ctx1) {$ctx1.fill(self,"newTile",{},smalltalk.CWCell)})},
messageSends: ["newChild:", "tileClass"]}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "newTroop",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._newChild_(_st(self)._troopClass());
return $1;
}, function($ctx1) {$ctx1.fill(self,"newTroop",{},smalltalk.CWCell)})},
messageSends: ["newChild:", "troopClass"]}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "overTileClass",
fn: function (){
var self=this;
function $CWOverTile(){return smalltalk.CWOverTile||(typeof CWOverTile=="undefined"?nil:CWOverTile)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=$CWOverTile();
return $1;
}, function($ctx1) {$ctx1.fill(self,"overTileClass",{},smalltalk.CWCell)})},
messageSends: []}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "tileClass",
fn: function (){
var self=this;
function $CWTile(){return smalltalk.CWTile||(typeof CWTile=="undefined"?nil:CWTile)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=$CWTile();
return $1;
}, function($ctx1) {$ctx1.fill(self,"tileClass",{},smalltalk.CWCell)})},
messageSends: []}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "troopClass",
fn: function (){
var self=this;
function $CWTroop(){return smalltalk.CWTroop||(typeof CWTroop=="undefined"?nil:CWTroop)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=$CWTroop();
return $1;
}, function($ctx1) {$ctx1.fill(self,"troopClass",{},smalltalk.CWCell)})},
messageSends: []}),
smalltalk.CWCell);



smalltalk.addClass('CWImageLeaf', smalltalk.CWBusinessObject, ['image'], 'Easnoth-BusinessObjects');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._shouldNotImplement();
return self}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.CWImageLeaf)})},
messageSends: ["shouldNotImplement"]}),
smalltalk.CWImageLeaf);

smalltalk.addMethod(
smalltalk.method({
selector: "folderName",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"folderName",{},smalltalk.CWImageLeaf)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.CWImageLeaf);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeFromJson:",
fn: function (aJson){
var self=this;
var imageNew;
function $NativeFunction(){return smalltalk.NativeFunction||(typeof NativeFunction=="undefined"?nil:NativeFunction)}
return smalltalk.withContext(function($ctx1) { 
imageNew=_st($NativeFunction())._constructor_("Image");
_st(imageNew)._at_put_("src",_st(_st(_st(_st("ressources/images/").__comma(_st(self)._folderName())).__comma("/")).__comma(_st(self)._keyFor_(aJson))).__comma(".png"));
return self}, function($ctx1) {$ctx1.fill(self,"initializeFromJson:",{aJson:aJson,imageNew:imageNew},smalltalk.CWImageLeaf)})},
messageSends: ["constructor:", "at:put:", ",", "keyFor:", "folderName"]}),
smalltalk.CWImageLeaf);

smalltalk.addMethod(
smalltalk.method({
selector: "keyFor:",
fn: function (aJson){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=aJson;
return $1;
}, function($ctx1) {$ctx1.fill(self,"keyFor:",{aJson:aJson},smalltalk.CWImageLeaf)})},
messageSends: []}),
smalltalk.CWImageLeaf);



smalltalk.addClass('CWBackground', smalltalk.CWImageLeaf, [], 'Easnoth-BusinessObjects');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._shouldNotImplement();
return self}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.CWBackground)})},
messageSends: ["shouldNotImplement"]}),
smalltalk.CWBackground);



smalltalk.addClass('CWOverTile', smalltalk.CWBackground, [], 'Easnoth-BusinessObjects');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitOverTile_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.CWOverTile)})},
messageSends: ["visitOverTile:"]}),
smalltalk.CWOverTile);

smalltalk.addMethod(
smalltalk.method({
selector: "folderName",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "overtiles";
}, function($ctx1) {$ctx1.fill(self,"folderName",{},smalltalk.CWOverTile)})},
messageSends: []}),
smalltalk.CWOverTile);



smalltalk.addClass('CWGameOverTile', smalltalk.CWOverTile, [], 'Easnoth-BusinessObjects');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitGameOverTile_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.CWGameOverTile)})},
messageSends: ["visitGameOverTile:"]}),
smalltalk.CWGameOverTile);



smalltalk.addClass('CWTile', smalltalk.CWBackground, [], 'Easnoth-BusinessObjects');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitTile_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.CWTile)})},
messageSends: ["visitTile:"]}),
smalltalk.CWTile);

smalltalk.addMethod(
smalltalk.method({
selector: "folderName",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "tiles";
}, function($ctx1) {$ctx1.fill(self,"folderName",{},smalltalk.CWTile)})},
messageSends: []}),
smalltalk.CWTile);



smalltalk.addClass('CWMonster', smalltalk.CWImageLeaf, [], 'Easnoth-BusinessObjects');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._shouldNotImplement();
return self}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.CWMonster)})},
messageSends: ["shouldNotImplement"]}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "folderName",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "monsters";
}, function($ctx1) {$ctx1.fill(self,"folderName",{},smalltalk.CWMonster)})},
messageSends: []}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "keyFor:",
fn: function (aJson){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aJson)._name();
return $1;
}, function($ctx1) {$ctx1.fill(self,"keyFor:",{aJson:aJson},smalltalk.CWMonster)})},
messageSends: ["name"]}),
smalltalk.CWMonster);



smalltalk.addClass('CWHeros', smalltalk.CWMonster, [], 'Easnoth-BusinessObjects');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitHeros_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.CWHeros)})},
messageSends: ["visitHeros:"]}),
smalltalk.CWHeros);



smalltalk.addClass('CWTroop', smalltalk.CWMonster, [], 'Easnoth-BusinessObjects');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitTroop_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.CWTroop)})},
messageSends: ["visitTroop:"]}),
smalltalk.CWTroop);



smalltalk.addClass('CWMap', smalltalk.CWBusinessObject, ['canvasCoods'], 'Easnoth-BusinessObjects');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitMap_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.CWMap)})},
messageSends: ["visitMap:"]}),
smalltalk.CWMap);

smalltalk.addMethod(
smalltalk.method({
selector: "canvasCoods",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@canvasCoods"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"canvasCoods",{},smalltalk.CWMap)})},
messageSends: []}),
smalltalk.CWMap);

smalltalk.addMethod(
smalltalk.method({
selector: "canvasCoods:",
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@canvasCoods"]=aPoint;
return self}, function($ctx1) {$ctx1.fill(self,"canvasCoods:",{aPoint:aPoint},smalltalk.CWMap)})},
messageSends: []}),
smalltalk.CWMap);

smalltalk.addMethod(
smalltalk.method({
selector: "canvasPadding",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(40);
return $1;
}, function($ctx1) {$ctx1.fill(self,"canvasPadding",{},smalltalk.CWMap)})},
messageSends: []}),
smalltalk.CWMap);

smalltalk.addMethod(
smalltalk.method({
selector: "childBasicClass",
fn: function (){
var self=this;
function $CWRow(){return smalltalk.CWRow||(typeof CWRow=="undefined"?nil:CWRow)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=$CWRow();
return $1;
}, function($ctx1) {$ctx1.fill(self,"childBasicClass",{},smalltalk.CWMap)})},
messageSends: []}),
smalltalk.CWMap);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.CWBusinessObject.fn.prototype._initialize.apply(_st(self), []);
self["@canvasCoods"]=_st(_st(self)._canvasPadding()).__at(_st(self)._canvasPadding());
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.CWMap)})},
messageSends: ["initialize", "@", "canvasPadding"]}),
smalltalk.CWMap);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeChildrenFromJson:",
fn: function (jsonMap){
var self=this;
var child,rows;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
rows=_st(jsonMap)._row();
_st(self)._children_(_st($Array())._new_(_st(rows)._size()));
_st(rows)._withIndexDo_((function(row,i){
return smalltalk.withContext(function($ctx2) {
child=_st(self)._newChild();
child;
_st(child)._rowIndex_(i);
_st(child)._initializeFromJson_(row);
return _st(self)._childAt_put_(i,child);
}, function($ctx2) {$ctx2.fillBlock({row:row,i:i},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initializeChildrenFromJson:",{jsonMap:jsonMap,child:child,rows:rows},smalltalk.CWMap)})},
messageSends: ["row", "children:", "new:", "size", "withIndexDo:", "newChild", "rowIndex:", "initializeFromJson:", "childAt:put:"]}),
smalltalk.CWMap);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeFromJson:",
fn: function (jsonMap){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._canvasCoods())._x_(_st(_st(_st(self)._canvasCoods())._x()).__plus(_st(_st(_st(_st(_st(_st(jsonMap)._row())._at_((1)))._cells())._size()).__star(_st(self)._tileUnit())).__star((1.17))));
_st(self)._initializeChildrenFromJson_(jsonMap);
return self}, function($ctx1) {$ctx1.fill(self,"initializeFromJson:",{jsonMap:jsonMap},smalltalk.CWMap)})},
messageSends: ["x:", "+", "*", "tileUnit", "size", "cells", "at:", "row", "x", "canvasCoods", "initializeChildrenFromJson:"]}),
smalltalk.CWMap);

smalltalk.addMethod(
smalltalk.method({
selector: "tileUnit",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(50);
return $1;
}, function($ctx1) {$ctx1.fill(self,"tileUnit",{},smalltalk.CWMap)})},
messageSends: []}),
smalltalk.CWMap);


smalltalk.addMethod(
smalltalk.method({
selector: "newWithMapIndex:",
fn: function (aMapIndex){
var self=this;
var map;
return smalltalk.withContext(function($ctx1) { 
var $1;
map=_st(self)._new();
_st(jQuery)._getJSON_onSuccess_(_st(_st("ressources/json/maps/map").__comma(aMapIndex)).__comma(".json"),(function(data){
return smalltalk.withContext(function($ctx2) {
return _st(map)._initializeFromJson_(data);
}, function($ctx2) {$ctx2.fillBlock({data:data},$ctx1)})}));
$1=map;
return $1;
}, function($ctx1) {$ctx1.fill(self,"newWithMapIndex:",{aMapIndex:aMapIndex,map:map},smalltalk.CWMap.klass)})},
messageSends: ["new", "getJSON:onSuccess:", ",", "initializeFromJson:"]}),
smalltalk.CWMap.klass);


smalltalk.addClass('CWRow', smalltalk.CWBusinessObject, ['rowIndex'], 'Easnoth-BusinessObjects');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitRow_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.CWRow)})},
messageSends: ["visitRow:"]}),
smalltalk.CWRow);

smalltalk.addMethod(
smalltalk.method({
selector: "childBasicClass",
fn: function (){
var self=this;
function $CWCell(){return smalltalk.CWCell||(typeof CWCell=="undefined"?nil:CWCell)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=$CWCell();
return $1;
}, function($ctx1) {$ctx1.fill(self,"childBasicClass",{},smalltalk.CWRow)})},
messageSends: []}),
smalltalk.CWRow);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeFromJson:",
fn: function (jsonRow){
var self=this;
var cells,child;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
cells=_st(jsonRow)._cells();
_st(self)._children_(_st($Array())._new_(_st(cells)._size()));
_st(cells)._withIndexDo_((function(cell,i){
return smalltalk.withContext(function($ctx2) {
child=_st(self)._newChild();
child;
_st(child)._mapCoods_(_st(_st(self)._rowIndex()).__at(i));
_st(child)._initializeFromJson_(cell);
return _st(self)._childAt_put_(i,child);
}, function($ctx2) {$ctx2.fillBlock({cell:cell,i:i},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initializeFromJson:",{jsonRow:jsonRow,cells:cells,child:child},smalltalk.CWRow)})},
messageSends: ["cells", "children:", "new:", "size", "withIndexDo:", "newChild", "mapCoods:", "@", "rowIndex", "initializeFromJson:", "childAt:put:"]}),
smalltalk.CWRow);

smalltalk.addMethod(
smalltalk.method({
selector: "rowIndex",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@rowIndex"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"rowIndex",{},smalltalk.CWRow)})},
messageSends: []}),
smalltalk.CWRow);

smalltalk.addMethod(
smalltalk.method({
selector: "rowIndex:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@rowIndex"]=aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"rowIndex:",{aNumber:aNumber},smalltalk.CWRow)})},
messageSends: []}),
smalltalk.CWRow);



smalltalk.addClass('CWGameBoard', smalltalk.Object, ['map', 'drawer', 'menu', 'cache'], 'Easnoth-BusinessObjects');


