smalltalk.addPackage('Easnoth-BusinessObjects');
smalltalk.addClass('CWNode', smalltalk.Object, ['parent', 'children'], 'Easnoth-BusinessObjects');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.CoreWidget)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.CWNode);

smalltalk.addMethod(
smalltalk.method({
selector: "addChild:",
fn: function (object){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@children"])._add_(object);
return $1;
}, function($ctx1) {$ctx1.fill(self,"addChild:",{object:object},smalltalk.CWBusinessObject)})},
messageSends: ["add:"]}),
smalltalk.CWNode);

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
smalltalk.CWNode);

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
smalltalk.CWNode);

smalltalk.addMethod(
smalltalk.method({
selector: "childAt:put:",
fn: function (index,object){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@children"])._at_put_(index,object);
return $1;
}, function($ctx1) {$ctx1.fill(self,"childAt:put:",{index:index,object:object},smalltalk.CWBusinessObject)})},
messageSends: ["at:put:"]}),
smalltalk.CWNode);

smalltalk.addMethod(
smalltalk.method({
selector: "childBasicClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"childBasicClass",{},smalltalk.CoreWidget)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.CWNode);

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
smalltalk.CWNode);

smalltalk.addMethod(
smalltalk.method({
selector: "children:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@children"]=aCollection;
return self}, function($ctx1) {$ctx1.fill(self,"children:",{aCollection:aCollection},smalltalk.CoreWidget)})},
messageSends: []}),
smalltalk.CWNode);

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
smalltalk.CWNode);

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
smalltalk.CWNode);

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
smalltalk.CWNode);

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
smalltalk.CWNode);

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
smalltalk.CWNode);

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
smalltalk.CWNode);

smalltalk.addMethod(
smalltalk.method({
selector: "parent:",
fn: function (object){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@parent"]=object;
return self}, function($ctx1) {$ctx1.fill(self,"parent:",{object:object},smalltalk.CWBusinessObject)})},
messageSends: []}),
smalltalk.CWNode);

smalltalk.addMethod(
smalltalk.method({
selector: "removeChild:",
fn: function (object){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@children"])._remove_(object);
return $1;
}, function($ctx1) {$ctx1.fill(self,"removeChild:",{object:object},smalltalk.CWBusinessObject)})},
messageSends: ["remove:"]}),
smalltalk.CWNode);



smalltalk.addClass('CWCell', smalltalk.CWNode, ['mapCoods'], 'Easnoth-BusinessObjects');
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
var $1,$2,$3,$4;
elements=_st(aJsonCell)._keys();
$1=_st(_st(elements)._first()).__eq("tile");
if(smalltalk.assert($1)){
_st(self)._addChild_(_st(_st(self)._newTile())._initializeFromJson_(_st(aJsonCell)._tile()));
};
$2=_st(elements)._includes_("overtiles");
if(smalltalk.assert($2)){
_st(self)._addChildren_(_st(_st(aJsonCell)._overtiles())._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(self)._newOverTile())._initializeFromJson_(_st(each)._overtile());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})})));
};
$3=_st(_st(elements)._last()).__eq("heros");
if(smalltalk.assert($3)){
_st(self)._addChild_(_st(_st(self)._newHeros())._initializeFromJson_(_st(aJsonCell)._heros()));
};
$4=_st(_st(elements)._last()).__eq("troop");
if(smalltalk.assert($4)){
_st(self)._addChild_(_st(_st(self)._newTroop())._initializeFromJson_(_st(aJsonCell)._troop()));
};
return self}, function($ctx1) {$ctx1.fill(self,"initializeFromJson:",{aJsonCell:aJsonCell,elements:elements},smalltalk.CWCell)})},
messageSends: ["keys", "ifTrue:", "addChild:", "initializeFromJson:", "tile", "newTile", "=", "first", "addChildren:", "collect:", "overtile", "newOverTile", "overtiles", "includes:", "heros", "newHeros", "last", "troop", "newTroop"]}),
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



smalltalk.addClass('CWImageLeaf', smalltalk.CWNode, ['image'], 'Easnoth-BusinessObjects');
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
selector: "image",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@image"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"image",{},smalltalk.CWImageLeaf)})},
messageSends: []}),
smalltalk.CWImageLeaf);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeFromJson:",
fn: function (aJson){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@image"]=_st(_st(self)._class())._imageCacheAt_ifAbsent_(aJson,(function(){
return smalltalk.withContext(function($ctx2) {
return _st(self)._newImageFrom_(aJson);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initializeFromJson:",{aJson:aJson},smalltalk.CWImageLeaf)})},
messageSends: ["imageCacheAt:ifAbsent:", "newImageFrom:", "class"]}),
smalltalk.CWImageLeaf);

smalltalk.addMethod(
smalltalk.method({
selector: "isLeaf",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isLeaf",{},smalltalk.CWImageLeaf)})},
messageSends: []}),
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

smalltalk.addMethod(
smalltalk.method({
selector: "newImageFrom:",
fn: function (aJson){
var self=this;
function $NativeFunction(){return smalltalk.NativeFunction||(typeof NativeFunction=="undefined"?nil:NativeFunction)}
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@image"]=_st($NativeFunction())._constructor_("Image");
_st(_st(_st(self)._class())._imageCache())._at_put_(aJson,self["@image"]);
_st(self["@image"])._at_put_("src",_st(_st(_st(_st("ressources/images/").__comma(_st(self)._folderName())).__comma("/")).__comma(aJson)).__comma(".png"));
$1=self["@image"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"newImageFrom:",{aJson:aJson},smalltalk.CWImageLeaf)})},
messageSends: ["constructor:", "at:put:", "imageCache", "class", ",", "folderName"]}),
smalltalk.CWImageLeaf);


smalltalk.CWImageLeaf.klass.iVarNames = ['imageCache'];
smalltalk.addMethod(
smalltalk.method({
selector: "imageCache",
fn: function (){
var self=this;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@imageCache"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@imageCache"]=_st($Dictionary())._new();
$1=self["@imageCache"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"imageCache",{},smalltalk.CWImageLeaf.klass)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.CWImageLeaf.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "imageCacheAt:ifAbsent:",
fn: function (aKey,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._imageCache())._at_ifAbsent_(aKey,aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"imageCacheAt:ifAbsent:",{aKey:aKey,aBlock:aBlock},smalltalk.CWImageLeaf.klass)})},
messageSends: ["at:ifAbsent:", "imageCache"]}),
smalltalk.CWImageLeaf.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "imageCacheAt:put:",
fn: function (aKey,anImage){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._imageCache())._at_put_(aKey,anImage);
return $1;
}, function($ctx1) {$ctx1.fill(self,"imageCacheAt:put:",{aKey:aKey,anImage:anImage},smalltalk.CWImageLeaf.klass)})},
messageSends: ["at:put:", "imageCache"]}),
smalltalk.CWImageLeaf.klass);


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



smalltalk.addClass('CWWall', smalltalk.CWTile, [], 'Easnoth-BusinessObjects');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitWall_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.CWWall)})},
messageSends: ["visitWall:"]}),
smalltalk.CWWall);



smalltalk.addClass('CWMonster', smalltalk.CWImageLeaf, ['side', 'move', 'attack', 'dices', 'hp'], 'Easnoth-BusinessObjects');
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
selector: "addStats:",
fn: function (aKey){
var self=this;
var keySuccess;
function $Transcript(){return smalltalk.Transcript||(typeof Transcript=="undefined"?nil:Transcript)}
return smalltalk.withContext(function($ctx1) { 
_st($Transcript())._show_(_st("addStats : ").__comma(aKey));
keySuccess=_st(aKey).__comma("success");
_st(_st(self)._class())._jsonStatCacheAt_put_(keySuccess,(function(statsNew){
return smalltalk.withContext(function($ctx2) {
_st(_st(self)._class())._jsonStatCacheAt_put_(aKey,statsNew);
return _st(self)._stats_(statsNew);
}, function($ctx2) {$ctx2.fillBlock({statsNew:statsNew},$ctx1)})}));
_st(jQuery)._getJSON_onSuccess_(_st(_st("ressources/json/monsters/").__comma(aKey)).__comma(".json"),(function(data){
return smalltalk.withContext(function($ctx2) {
return _st(_st(_st(self)._class())._jsonStatCacheAt_(keySuccess))._value_(data);
}, function($ctx2) {$ctx2.fillBlock({data:data},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"addStats:",{aKey:aKey,keySuccess:keySuccess},smalltalk.CWMonster)})},
messageSends: ["show:", ",", "jsonStatCacheAt:put:", "class", "stats:", "getJSON:onSuccess:", "value:", "jsonStatCacheAt:"]}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "attack",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@attack"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"attack",{},smalltalk.CWMonster)})},
messageSends: []}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "attack:",
fn: function (int){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@attack"]=int;
return self}, function($ctx1) {$ctx1.fill(self,"attack:",{int:int},smalltalk.CWMonster)})},
messageSends: []}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultHp",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"defaultHp",{},smalltalk.CWMonster)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "dices",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@dices"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"dices",{},smalltalk.CWMonster)})},
messageSends: []}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "dices:",
fn: function (int){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@dices"]=int;
return self}, function($ctx1) {$ctx1.fill(self,"dices:",{int:int},smalltalk.CWMonster)})},
messageSends: []}),
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
selector: "hp",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@hp"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"hp",{},smalltalk.CWMonster)})},
messageSends: []}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "hp:",
fn: function (int){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@hp"]=int;
return self}, function($ctx1) {$ctx1.fill(self,"hp:",{int:int},smalltalk.CWMonster)})},
messageSends: []}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeFromJson:",
fn: function (aJson){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.CWImageLeaf.fn.prototype._initializeFromJson_.apply(_st(self), [_st(aJson)._name()]);
_st(self)._side_(_st(aJson)._side());
_st(self)._loadStats_(_st(aJson)._name());
return self}, function($ctx1) {$ctx1.fill(self,"initializeFromJson:",{aJson:aJson},smalltalk.CWMonster)})},
messageSends: ["initializeFromJson:", "name", "side:", "side", "loadStats:"]}),
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

smalltalk.addMethod(
smalltalk.method({
selector: "loadStats:",
fn: function (aJson){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self)._class())._jsonStatCache())._includesKey_(_st(aJson).__comma("success"));
if(smalltalk.assert($1)){
_st(self)._updateStats_(aJson);
} else {
_st(self)._addStats_(aJson);
};
return self}, function($ctx1) {$ctx1.fill(self,"loadStats:",{aJson:aJson},smalltalk.CWMonster)})},
messageSends: ["ifTrue:ifFalse:", "updateStats:", "addStats:", "includesKey:", ",", "jsonStatCache", "class"]}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "move",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@move"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"move",{},smalltalk.CWMonster)})},
messageSends: []}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "move:",
fn: function (int){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@move"]=int;
return self}, function($ctx1) {$ctx1.fill(self,"move:",{int:int},smalltalk.CWMonster)})},
messageSends: []}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "side",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@side"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"side",{},smalltalk.CWMonster)})},
messageSends: []}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "side:",
fn: function (int){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@side"]=int;
return self}, function($ctx1) {$ctx1.fill(self,"side:",{int:int},smalltalk.CWMonster)})},
messageSends: []}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "stats:",
fn: function (jsonStats){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._move_(_st(jsonStats)._move());
_st(self)._attack_(_st(jsonStats)._attack());
_st(self)._dices_(_st(jsonStats)._dices());
_st(self)._hp_(_st(self)._defaultHp());
return self}, function($ctx1) {$ctx1.fill(self,"stats:",{jsonStats:jsonStats},smalltalk.CWMonster)})},
messageSends: ["move:", "move", "attack:", "attack", "dices:", "dices", "hp:", "defaultHp"]}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "updateStats:",
fn: function (aKey){
var self=this;
var keySuccess,oldCallBack;
function $Transcript(){return smalltalk.Transcript||(typeof Transcript=="undefined"?nil:Transcript)}
return smalltalk.withContext(function($ctx1) { 
var $1;
_st($Transcript())._show_(_st("updateStats : ").__comma(aKey));
keySuccess=_st(aKey).__comma("success");
oldCallBack=_st(_st(self)._class())._jsonStatCacheAt_(keySuccess);
_st(_st(self)._class())._jsonStatCacheAt_put_(keySuccess,(function(statsNew){
return smalltalk.withContext(function($ctx2) {
_st(self)._stats_(statsNew);
return _st(oldCallBack)._value_(statsNew);
}, function($ctx2) {$ctx2.fillBlock({statsNew:statsNew},$ctx1)})}));
$1=_st(_st(_st(self)._class())._jsonStatCache())._includesKey_(aKey);
if(smalltalk.assert($1)){
_st(self)._stats_(_st(_st(self)._class())._jsonStatCacheAt_(aKey));
};
return self}, function($ctx1) {$ctx1.fill(self,"updateStats:",{aKey:aKey,keySuccess:keySuccess,oldCallBack:oldCallBack},smalltalk.CWMonster)})},
messageSends: ["show:", ",", "jsonStatCacheAt:", "class", "jsonStatCacheAt:put:", "stats:", "value:", "ifTrue:", "includesKey:", "jsonStatCache"]}),
smalltalk.CWMonster);


smalltalk.CWMonster.klass.iVarNames = ['jsonStatCache'];
smalltalk.addMethod(
smalltalk.method({
selector: "jsonStatCache",
fn: function (){
var self=this;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@jsonStatCache"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@jsonStatCache"]=_st($Dictionary())._new();
$1=self["@jsonStatCache"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"jsonStatCache",{},smalltalk.CWMonster.klass)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.CWMonster.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "jsonStatCacheAt:",
fn: function (aKey){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._jsonStatCache())._at_(aKey);
return $1;
}, function($ctx1) {$ctx1.fill(self,"jsonStatCacheAt:",{aKey:aKey},smalltalk.CWMonster.klass)})},
messageSends: ["at:", "jsonStatCache"]}),
smalltalk.CWMonster.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "jsonStatCacheAt:ifAbsent:",
fn: function (aKey,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._jsonStatCache())._at_ifAbsent_(aKey,aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"jsonStatCacheAt:ifAbsent:",{aKey:aKey,aBlock:aBlock},smalltalk.CWMonster.klass)})},
messageSends: ["at:ifAbsent:", "jsonStatCache"]}),
smalltalk.CWMonster.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "jsonStatCacheAt:put:",
fn: function (aKey,aJson){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._jsonStatCache())._at_put_(aKey,aJson);
return $1;
}, function($ctx1) {$ctx1.fill(self,"jsonStatCacheAt:put:",{aKey:aKey,aJson:aJson},smalltalk.CWMonster.klass)})},
messageSends: ["at:put:", "jsonStatCache"]}),
smalltalk.CWMonster.klass);


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

smalltalk.addMethod(
smalltalk.method({
selector: "defaultHp",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(2);
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultHp",{},smalltalk.CWHeros)})},
messageSends: []}),
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

smalltalk.addMethod(
smalltalk.method({
selector: "defaultHp",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(4);
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultHp",{},smalltalk.CWTroop)})},
messageSends: []}),
smalltalk.CWTroop);



smalltalk.addClass('CWMap', smalltalk.CWNode, [], 'Easnoth-BusinessObjects');
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
selector: "initializeFromJson:",
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
_st(self)._childAt_put_(i,child);
_st(child)._rowIndex_(i);
return _st(child)._initializeFromJson_(row);
}, function($ctx2) {$ctx2.fillBlock({row:row,i:i},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initializeFromJson:",{jsonMap:jsonMap,child:child,rows:rows},smalltalk.CWMap)})},
messageSends: ["row", "children:", "new:", "size", "withIndexDo:", "newChild", "childAt:put:", "rowIndex:", "initializeFromJson:"]}),
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


smalltalk.CWMap.klass.iVarNames = ['default'];
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
}, function($ctx1) {$ctx1.fill(self,"default",{},smalltalk.CWMap.klass)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.CWMap.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "newWithMapIndex:",
fn: function (aMapIndex){
var self=this;
var map;
return smalltalk.withContext(function($ctx1) { 
var $1;
map=_st(self)._default();
_st(jQuery)._getJSON_onSuccess_(_st(_st("ressources/json/maps/map").__comma(aMapIndex)).__comma(".json"),(function(data){
return smalltalk.withContext(function($ctx2) {
return _st(map)._initializeFromJson_(data);
}, function($ctx2) {$ctx2.fillBlock({data:data},$ctx1)})}));
$1=map;
return $1;
}, function($ctx1) {$ctx1.fill(self,"newWithMapIndex:",{aMapIndex:aMapIndex,map:map},smalltalk.CWMap.klass)})},
messageSends: ["default", "getJSON:onSuccess:", ",", "initializeFromJson:"]}),
smalltalk.CWMap.klass);


smalltalk.addClass('CWRow', smalltalk.CWNode, ['rowIndex'], 'Easnoth-BusinessObjects');
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



