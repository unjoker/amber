smalltalk.addPackage('Easnoth-BusinessObjects');
smalltalk.addClass('CWNode', smalltalk.Object, ['parent', 'children'], 'Easnoth-BusinessObjects');
smalltalk.CWNode.comment="I represent a business object of the game. The business objects are managed in a tree : you have a root object that has children (and children can also have children).\x0a\x0aGame logic is implemented in my subclasses. For Displaying, look at CWDrawer."
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.CoreWidget)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.CWNode);

smalltalk.addMethod(
smalltalk.method({
selector: "addChild:",
category: 'nodes',
fn: function (object){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@children"])._add_(object);
return $1;
}, function($ctx1) {$ctx1.fill(self,"addChild:",{object:object},smalltalk.CWBusinessObject)})},
args: ["object"],
source: "addChild: object\x0a\x09^ children add: object\x0a\x09",
messageSends: ["add:"],
referencedClasses: []
}),
smalltalk.CWNode);

smalltalk.addMethod(
smalltalk.method({
selector: "addChildren:",
category: 'nodes',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@children"])._addAll_(aCollection);
return $1;
}, function($ctx1) {$ctx1.fill(self,"addChildren:",{aCollection:aCollection},smalltalk.CoreWidget)})},
args: ["aCollection"],
source: "addChildren: aCollection\x0a\x09^ children addAll: aCollection\x0a\x09",
messageSends: ["addAll:"],
referencedClasses: []
}),
smalltalk.CWNode);

smalltalk.addMethod(
smalltalk.method({
selector: "childAt:",
category: 'nodes',
fn: function (index){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@children"])._at_(index);
return $1;
}, function($ctx1) {$ctx1.fill(self,"childAt:",{index:index},smalltalk.CoreWidget)})},
args: ["index"],
source: "childAt: index \x0a\x09^ children at: index\x0a\x09",
messageSends: ["at:"],
referencedClasses: []
}),
smalltalk.CWNode);

smalltalk.addMethod(
smalltalk.method({
selector: "childAt:put:",
category: 'nodes',
fn: function (index,object){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@children"])._at_put_(index,object);
return $1;
}, function($ctx1) {$ctx1.fill(self,"childAt:put:",{index:index,object:object},smalltalk.CWBusinessObject)})},
args: ["index", "object"],
source: "childAt: index put: object\x0a\x09^ children at: index put: object\x0a\x09",
messageSends: ["at:put:"],
referencedClasses: []
}),
smalltalk.CWNode);

smalltalk.addMethod(
smalltalk.method({
selector: "childBasicClass",
category: 'nodes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"childBasicClass",{},smalltalk.CoreWidget)})},
args: [],
source: "childBasicClass\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.CWNode);

smalltalk.addMethod(
smalltalk.method({
selector: "children",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@children"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"children",{},smalltalk.CoreWidget)})},
args: [],
source: "children\x0a\x09^ children",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWNode);

smalltalk.addMethod(
smalltalk.method({
selector: "children:",
category: 'accessing',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@children"]=aCollection;
return self}, function($ctx1) {$ctx1.fill(self,"children:",{aCollection:aCollection},smalltalk.CoreWidget)})},
args: ["aCollection"],
source: "children: aCollection\x0a\x09children := aCollection",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWNode);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'testing',
fn: function (){
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.Object.fn.prototype._initialize.apply(_st(self), []);
self["@children"]=_st($Array())._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.CoreWidget)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09children := Array new",
messageSends: ["initialize", "new"],
referencedClasses: ["Array"]
}),
smalltalk.CWNode);

smalltalk.addMethod(
smalltalk.method({
selector: "isLeaf",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@children"])._isEmpty();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isLeaf",{},smalltalk.CoreWidget)})},
args: [],
source: "isLeaf\x0a\x09^ children isEmpty",
messageSends: ["isEmpty"],
referencedClasses: []
}),
smalltalk.CWNode);

smalltalk.addMethod(
smalltalk.method({
selector: "isRoot",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@parent"])._isNil();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isRoot",{},smalltalk.CoreWidget)})},
args: [],
source: "isRoot\x0a\x09^ parent isNil",
messageSends: ["isNil"],
referencedClasses: []
}),
smalltalk.CWNode);

smalltalk.addMethod(
smalltalk.method({
selector: "newChild",
category: 'factory',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._newChild_(_st(self)._childBasicClass());
return $1;
}, function($ctx1) {$ctx1.fill(self,"newChild",{},smalltalk.CoreWidget)})},
args: [],
source: "newChild\x0a\x09^ self newChild: self childBasicClass",
messageSends: ["newChild:", "childBasicClass"],
referencedClasses: []
}),
smalltalk.CWNode);

smalltalk.addMethod(
smalltalk.method({
selector: "newChild:",
category: 'factory',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(aClass)._new())._parent_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"newChild:",{aClass:aClass},smalltalk.CoreWidget)})},
args: ["aClass"],
source: "newChild: aClass\x0a\x09^ aClass new parent: self",
messageSends: ["parent:", "new"],
referencedClasses: []
}),
smalltalk.CWNode);

smalltalk.addMethod(
smalltalk.method({
selector: "parent",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@parent"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"parent",{},smalltalk.CoreWidget)})},
args: [],
source: "parent\x0a\x09^ parent",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWNode);

smalltalk.addMethod(
smalltalk.method({
selector: "parent:",
category: 'accessing',
fn: function (object){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@parent"]=object;
return self}, function($ctx1) {$ctx1.fill(self,"parent:",{object:object},smalltalk.CWBusinessObject)})},
args: ["object"],
source: "parent: object\x0a\x09parent := object",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWNode);

smalltalk.addMethod(
smalltalk.method({
selector: "removeChild:",
category: 'nodes',
fn: function (object){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@children"])._remove_(object);
return $1;
}, function($ctx1) {$ctx1.fill(self,"removeChild:",{object:object},smalltalk.CWBusinessObject)})},
args: ["object"],
source: "removeChild: object\x0a\x09^ children remove: object\x0a\x09",
messageSends: ["remove:"],
referencedClasses: []
}),
smalltalk.CWNode);



smalltalk.addClass('CWCell', smalltalk.CWNode, ['mapCoods'], 'Easnoth-BusinessObjects');
smalltalk.CWCell.comment="I represent an hexagon cell in the map."
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitCell_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.CWCell)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitCell: self",
messageSends: ["visitCell:"],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "gameOverTileClass",
category: 'nodes',
fn: function (){
var self=this;
function $CWGameOverTile(){return smalltalk.CWGameOverTile||(typeof CWGameOverTile=="undefined"?nil:CWGameOverTile)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=$CWGameOverTile();
return $1;
}, function($ctx1) {$ctx1.fill(self,"gameOverTileClass",{},smalltalk.CWCell)})},
args: [],
source: "gameOverTileClass\x0a\x09^ CWGameOverTile",
messageSends: [],
referencedClasses: ["CWGameOverTile"]
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "herosClass",
category: 'nodes',
fn: function (){
var self=this;
function $CWHeros(){return smalltalk.CWHeros||(typeof CWHeros=="undefined"?nil:CWHeros)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=$CWHeros();
return $1;
}, function($ctx1) {$ctx1.fill(self,"herosClass",{},smalltalk.CWCell)})},
args: [],
source: "herosClass\x0a\x09^ CWHeros",
messageSends: [],
referencedClasses: ["CWHeros"]
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeFromJson:",
category: 'initialize-release',
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
args: ["aJsonCell"],
source: "initializeFromJson: aJsonCell\x0a    | elements |\x0a    \x0a    elements := aJsonCell keys.\x0a    \x0a    elements first = 'tile'\x0a    \x09ifTrue: [ self addChild: (self newTile initializeFromJson: aJsonCell tile) ].\x0a    (elements includes: 'overtiles') \x0a    \x09ifTrue: [ self addChildren: (aJsonCell overtiles collect: [:each | \x0a\x09\x09\x09self newOverTile initializeFromJson: each overtile] ) ].\x0a    elements last = 'heros'\x0a    \x09ifTrue: [ self addChild: (self newHeros initializeFromJson: aJsonCell heros) ].\x0a    elements last = 'troop'\x0a    \x09ifTrue: [ self addChild: (self newTroop initializeFromJson: aJsonCell troop) ].",
messageSends: ["keys", "ifTrue:", "addChild:", "initializeFromJson:", "tile", "newTile", "=", "first", "addChildren:", "collect:", "overtile", "newOverTile", "overtiles", "includes:", "heros", "newHeros", "last", "troop", "newTroop"],
referencedClasses: []
}),
smalltalk.CWCell);

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
}, function($ctx1) {$ctx1.fill(self,"mapCoods",{},smalltalk.CWCell)})},
args: [],
source: "mapCoods\x0a\x09^ mapCoods",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "mapCoods:",
category: 'accessing',
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@mapCoods"]=aPoint;
return self}, function($ctx1) {$ctx1.fill(self,"mapCoods:",{aPoint:aPoint},smalltalk.CWCell)})},
args: ["aPoint"],
source: "mapCoods: aPoint\x0a\x09mapCoods := aPoint.",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "newGameOverTile",
category: 'factory',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._newChild_(_st(self)._gameOverTileClass());
return $1;
}, function($ctx1) {$ctx1.fill(self,"newGameOverTile",{},smalltalk.CWCell)})},
args: [],
source: "newGameOverTile\x0a\x09 ^ self newChild: self gameOverTileClass",
messageSends: ["newChild:", "gameOverTileClass"],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "newHeros",
category: 'factory',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._newChild_(_st(self)._herosClass());
return $1;
}, function($ctx1) {$ctx1.fill(self,"newHeros",{},smalltalk.CWCell)})},
args: [],
source: "newHeros\x0a\x09 ^ self newChild: self herosClass",
messageSends: ["newChild:", "herosClass"],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "newOverTile",
category: 'factory',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._newChild_(_st(self)._overTileClass());
return $1;
}, function($ctx1) {$ctx1.fill(self,"newOverTile",{},smalltalk.CWCell)})},
args: [],
source: "newOverTile\x0a\x09 ^ self newChild: self overTileClass",
messageSends: ["newChild:", "overTileClass"],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "newTile",
category: 'factory',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._newChild_(_st(self)._tileClass());
return $1;
}, function($ctx1) {$ctx1.fill(self,"newTile",{},smalltalk.CWCell)})},
args: [],
source: "newTile\x0a\x09 ^ self newChild: self tileClass ",
messageSends: ["newChild:", "tileClass"],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "newTroop",
category: 'factory',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._newChild_(_st(self)._troopClass());
return $1;
}, function($ctx1) {$ctx1.fill(self,"newTroop",{},smalltalk.CWCell)})},
args: [],
source: "newTroop\x0a\x09 ^ self newChild: self troopClass",
messageSends: ["newChild:", "troopClass"],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "overTileClass",
category: 'nodes',
fn: function (){
var self=this;
function $CWOverTile(){return smalltalk.CWOverTile||(typeof CWOverTile=="undefined"?nil:CWOverTile)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=$CWOverTile();
return $1;
}, function($ctx1) {$ctx1.fill(self,"overTileClass",{},smalltalk.CWCell)})},
args: [],
source: "overTileClass\x0a\x09^ CWOverTile",
messageSends: [],
referencedClasses: ["CWOverTile"]
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "tileClass",
category: 'nodes',
fn: function (){
var self=this;
function $CWTile(){return smalltalk.CWTile||(typeof CWTile=="undefined"?nil:CWTile)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=$CWTile();
return $1;
}, function($ctx1) {$ctx1.fill(self,"tileClass",{},smalltalk.CWCell)})},
args: [],
source: "tileClass\x0a\x09^ CWTile",
messageSends: [],
referencedClasses: ["CWTile"]
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "troopClass",
category: 'nodes',
fn: function (){
var self=this;
function $CWTroop(){return smalltalk.CWTroop||(typeof CWTroop=="undefined"?nil:CWTroop)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=$CWTroop();
return $1;
}, function($ctx1) {$ctx1.fill(self,"troopClass",{},smalltalk.CWCell)})},
args: [],
source: "troopClass\x0a\x09^ CWTroop",
messageSends: [],
referencedClasses: ["CWTroop"]
}),
smalltalk.CWCell);



smalltalk.addClass('CWImageLeaf', smalltalk.CWNode, ['image'], 'Easnoth-BusinessObjects');
smalltalk.CWImageLeaf.comment="I represent a leaf of the business objects tree that has an image. Usually only my instances are rendered when the CWDrawer visits the business object graph."
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._shouldNotImplement();
return self}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.CWImageLeaf)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09self shouldNotImplement",
messageSends: ["shouldNotImplement"],
referencedClasses: []
}),
smalltalk.CWImageLeaf);

smalltalk.addMethod(
smalltalk.method({
selector: "folderName",
category: 'initialize-release',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"folderName",{},smalltalk.CWImageLeaf)})},
args: [],
source: "folderName\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.CWImageLeaf);

smalltalk.addMethod(
smalltalk.method({
selector: "image",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@image"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"image",{},smalltalk.CWImageLeaf)})},
args: [],
source: "image\x0a\x09^ image",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWImageLeaf);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeFromJson:",
category: 'initialize-release',
fn: function (aJson){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@image"]=_st(_st(self)._class())._imageCacheAt_ifAbsent_(aJson,(function(){
return smalltalk.withContext(function($ctx2) {
return _st(self)._newImageFrom_(aJson);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initializeFromJson:",{aJson:aJson},smalltalk.CWImageLeaf)})},
args: ["aJson"],
source: "initializeFromJson: aJson\x0a\x09image := self class \x0a\x09\x09imageCacheAt: aJson\x0a\x09\x09ifAbsent: [ self newImageFrom: aJson ]",
messageSends: ["imageCacheAt:ifAbsent:", "newImageFrom:", "class"],
referencedClasses: []
}),
smalltalk.CWImageLeaf);

smalltalk.addMethod(
smalltalk.method({
selector: "isLeaf",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isLeaf",{},smalltalk.CWImageLeaf)})},
args: [],
source: "isLeaf\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWImageLeaf);

smalltalk.addMethod(
smalltalk.method({
selector: "keyFor:",
category: 'accessing',
fn: function (aJson){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=aJson;
return $1;
}, function($ctx1) {$ctx1.fill(self,"keyFor:",{aJson:aJson},smalltalk.CWImageLeaf)})},
args: ["aJson"],
source: "keyFor: aJson\x0a\x09^ aJson",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWImageLeaf);

smalltalk.addMethod(
smalltalk.method({
selector: "newImageFrom:",
category: 'initialize-release',
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
args: ["aJson"],
source: "newImageFrom: aJson\x0a\x09\x22Create a new image and cache it\x22\x0a\x09\x0a\x09image := NativeFunction constructor: 'Image'.\x0a\x09self class imageCache at: aJson put: image.\x0a    image at: 'src' put:  'ressources/images/', self folderName, '/', aJson, '.png'.\x0a\x09\x0a\x09^ image",
messageSends: ["constructor:", "at:put:", "imageCache", "class", ",", "folderName"],
referencedClasses: ["NativeFunction"]
}),
smalltalk.CWImageLeaf);


smalltalk.CWImageLeaf.klass.iVarNames = ['imageCache'];
smalltalk.addMethod(
smalltalk.method({
selector: "imageCache",
category: 'caching',
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
args: [],
source: "imageCache\x0a\x09^ imageCache ifNil: [ imageCache := Dictionary new ]\x0a\x09",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Dictionary"]
}),
smalltalk.CWImageLeaf.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "imageCacheAt:ifAbsent:",
category: 'caching',
fn: function (aKey,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._imageCache())._at_ifAbsent_(aKey,aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"imageCacheAt:ifAbsent:",{aKey:aKey,aBlock:aBlock},smalltalk.CWImageLeaf.klass)})},
args: ["aKey", "aBlock"],
source: "imageCacheAt: aKey ifAbsent: aBlock\x0a\x09^ self imageCache at: aKey ifAbsent: aBlock\x0a\x09",
messageSends: ["at:ifAbsent:", "imageCache"],
referencedClasses: []
}),
smalltalk.CWImageLeaf.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "imageCacheAt:put:",
category: 'caching',
fn: function (aKey,anImage){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._imageCache())._at_put_(aKey,anImage);
return $1;
}, function($ctx1) {$ctx1.fill(self,"imageCacheAt:put:",{aKey:aKey,anImage:anImage},smalltalk.CWImageLeaf.klass)})},
args: ["aKey", "anImage"],
source: "imageCacheAt: aKey put: anImage\x0a\x09^ self imageCache at: aKey put: anImage\x0a\x09",
messageSends: ["at:put:", "imageCache"],
referencedClasses: []
}),
smalltalk.CWImageLeaf.klass);


smalltalk.addClass('CWBackground', smalltalk.CWImageLeaf, [], 'Easnoth-BusinessObjects');
smalltalk.CWBackground.comment="I represent an element of the background (tiles, overtiles, ...). "
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._shouldNotImplement();
return self}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.CWBackground)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09self shouldNotImplement",
messageSends: ["shouldNotImplement"],
referencedClasses: []
}),
smalltalk.CWBackground);



smalltalk.addClass('CWOverTile', smalltalk.CWBackground, [], 'Easnoth-BusinessObjects');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitOverTile_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.CWOverTile)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitOverTile: self",
messageSends: ["visitOverTile:"],
referencedClasses: []
}),
smalltalk.CWOverTile);

smalltalk.addMethod(
smalltalk.method({
selector: "folderName",
category: 'initialize-release',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "overtiles";
}, function($ctx1) {$ctx1.fill(self,"folderName",{},smalltalk.CWOverTile)})},
args: [],
source: "folderName\x0a\x09^ 'overtiles'",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWOverTile);



smalltalk.addClass('CWGameOverTile', smalltalk.CWOverTile, [], 'Easnoth-BusinessObjects');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitGameOverTile_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.CWGameOverTile)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitGameOverTile: self",
messageSends: ["visitGameOverTile:"],
referencedClasses: []
}),
smalltalk.CWGameOverTile);



smalltalk.addClass('CWTile', smalltalk.CWBackground, [], 'Easnoth-BusinessObjects');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitTile_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.CWTile)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitTile: self",
messageSends: ["visitTile:"],
referencedClasses: []
}),
smalltalk.CWTile);

smalltalk.addMethod(
smalltalk.method({
selector: "folderName",
category: 'initalize-release',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "tiles";
}, function($ctx1) {$ctx1.fill(self,"folderName",{},smalltalk.CWTile)})},
args: [],
source: "folderName\x0a\x09^ 'tiles'",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWTile);



smalltalk.addClass('CWWall', smalltalk.CWTile, [], 'Easnoth-BusinessObjects');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitWall_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.CWWall)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitWall: self",
messageSends: ["visitWall:"],
referencedClasses: []
}),
smalltalk.CWWall);



smalltalk.addClass('CWMonster', smalltalk.CWImageLeaf, ['side', 'move', 'attack', 'dices', 'hp'], 'Easnoth-BusinessObjects');
smalltalk.CWMonster.comment="I represent people on the map. My instances variables are the stats of the guy I represent."
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._shouldNotImplement();
return self}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.CWMonster)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09self shouldNotImplement",
messageSends: ["shouldNotImplement"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "addStats:",
category: 'initialize-release',
fn: function (aKey){
var self=this;
var keySuccess;
return smalltalk.withContext(function($ctx1) { 
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
args: ["aKey"],
source: "addStats: aKey\x0a\x09| keySuccess |\x0a\x09\x0a\x09keySuccess := aKey,'success'.\x0a\x09\x0a    self class \x0a\x09\x09jsonStatCacheAt: keySuccess \x0a\x09\x09put: [:statsNew | \x0a\x09\x09\x09self class jsonStatCacheAt: aKey put: statsNew.\x0a       \x09\x09self stats: statsNew ].\x0a\x0a\x09jQuery \x0a\x09\x09getJSON: 'ressources/json/monsters/', aKey, '.json' \x0a\x09\x09onSuccess: [:data | (self class jsonStatCacheAt: keySuccess) value: data]",
messageSends: [",", "jsonStatCacheAt:put:", "class", "stats:", "getJSON:onSuccess:", "value:", "jsonStatCacheAt:"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "attack",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@attack"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"attack",{},smalltalk.CWMonster)})},
args: [],
source: "attack\x0a\x09^ attack",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "attack:",
category: 'accessing',
fn: function (int){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@attack"]=int;
return self}, function($ctx1) {$ctx1.fill(self,"attack:",{int:int},smalltalk.CWMonster)})},
args: ["int"],
source: "attack: int\x0a\x09attack := int",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultHp",
category: 'initialize-release',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"defaultHp",{},smalltalk.CWMonster)})},
args: [],
source: "defaultHp\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "dices",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@dices"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"dices",{},smalltalk.CWMonster)})},
args: [],
source: "dices\x0a\x09^ dices",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "dices:",
category: 'accessing',
fn: function (int){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@dices"]=int;
return self}, function($ctx1) {$ctx1.fill(self,"dices:",{int:int},smalltalk.CWMonster)})},
args: ["int"],
source: "dices: int\x0a\x09dices := int",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "folderName",
category: 'initialize-release',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "monsters";
}, function($ctx1) {$ctx1.fill(self,"folderName",{},smalltalk.CWMonster)})},
args: [],
source: "folderName\x0a\x09^ 'monsters'",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "hp",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@hp"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"hp",{},smalltalk.CWMonster)})},
args: [],
source: "hp\x0a\x09^ hp",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "hp:",
category: 'accessing',
fn: function (int){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@hp"]=int;
return self}, function($ctx1) {$ctx1.fill(self,"hp:",{int:int},smalltalk.CWMonster)})},
args: ["int"],
source: "hp: int\x0a\x09hp := int",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeFromJson:",
category: 'initialize-release',
fn: function (aJson){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.CWImageLeaf.fn.prototype._initializeFromJson_.apply(_st(self), [_st(aJson)._name()]);
_st(self)._side_(_st(aJson)._side());
_st(self)._loadStats_(_st(aJson)._name());
return self}, function($ctx1) {$ctx1.fill(self,"initializeFromJson:",{aJson:aJson},smalltalk.CWMonster)})},
args: ["aJson"],
source: "initializeFromJson: aJson\x0a\x09super initializeFromJson: aJson name.\x0a\x09self side: aJson side.\x0a\x09self loadStats: aJson name.",
messageSends: ["initializeFromJson:", "name", "side:", "side", "loadStats:"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "keyFor:",
category: 'accessing',
fn: function (aJson){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aJson)._name();
return $1;
}, function($ctx1) {$ctx1.fill(self,"keyFor:",{aJson:aJson},smalltalk.CWMonster)})},
args: ["aJson"],
source: "keyFor: aJson\x0a\x09^ aJson name",
messageSends: ["name"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "loadStats:",
category: 'initialize-release',
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
args: ["aJson"],
source: "loadStats: aJson\x0a\x09(self class jsonStatCache includesKey: aJson,'success') \x0a\x09\x09ifTrue: [ self updateStats: aJson ] \x0a\x09\x09ifFalse: [ self addStats: aJson ].",
messageSends: ["ifTrue:ifFalse:", "updateStats:", "addStats:", "includesKey:", ",", "jsonStatCache", "class"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "move",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@move"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"move",{},smalltalk.CWMonster)})},
args: [],
source: "move\x0a\x09^ move",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "move:",
category: 'accessing',
fn: function (int){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@move"]=int;
return self}, function($ctx1) {$ctx1.fill(self,"move:",{int:int},smalltalk.CWMonster)})},
args: ["int"],
source: "move: int\x0a\x09move := int",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWMonster);

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
}, function($ctx1) {$ctx1.fill(self,"side",{},smalltalk.CWMonster)})},
args: [],
source: "side\x0a\x09^ side",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "side:",
category: 'accessing',
fn: function (int){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@side"]=int;
return self}, function($ctx1) {$ctx1.fill(self,"side:",{int:int},smalltalk.CWMonster)})},
args: ["int"],
source: "side: int\x0a\x09side := int",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "stats:",
category: 'initialize-release',
fn: function (jsonStats){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._move_(_st(jsonStats)._move());
_st(self)._attack_(_st(jsonStats)._attack());
_st(self)._dices_(_st(jsonStats)._dices());
_st(self)._hp_(_st(self)._defaultHp());
return self}, function($ctx1) {$ctx1.fill(self,"stats:",{jsonStats:jsonStats},smalltalk.CWMonster)})},
args: ["jsonStats"],
source: "stats: jsonStats\x0a\x09self move: jsonStats move.\x0a\x09\x22self range: jsonStats range.\x22\x0a\x09self attack: jsonStats attack.\x0a\x09\x22self knockback: jsonStats knockback.\x22\x0a\x09self dices: jsonStats dices.\x0a\x09\x22self special: jsonStats special.\x22\x0a\x09self hp: self defaultHp.",
messageSends: ["move:", "move", "attack:", "attack", "dices:", "dices", "hp:", "defaultHp"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "updateStats:",
category: 'initialize-release',
fn: function (aKey){
var self=this;
var keySuccess,oldCallBack;
return smalltalk.withContext(function($ctx1) { 
var $1;
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
args: ["aKey"],
source: "updateStats: aKey \x0a\x09|keySuccess oldCallBack|\x0a\x0a\x09keySuccess := aKey,'success'.\x0a\x09oldCallBack := self class jsonStatCacheAt: keySuccess.\x0a\x09self class jsonStatCacheAt: keySuccess put: [:statsNew | \x0a\x09\x09\x09self stats: statsNew. \x0a\x09\x09\x09oldCallBack value: statsNew ].\x0a\x09\x09\x09\x0a\x09\x22Case where the json file finished loading during the execution of this method but before the new call back was set up\x22\x0a\x09(self class jsonStatCache includesKey: aKey) \x0a\x09\x09ifTrue: [self stats: (self class jsonStatCacheAt: aKey)].",
messageSends: [",", "jsonStatCacheAt:", "class", "jsonStatCacheAt:put:", "stats:", "value:", "ifTrue:", "includesKey:", "jsonStatCache"],
referencedClasses: []
}),
smalltalk.CWMonster);


smalltalk.CWMonster.klass.iVarNames = ['jsonStatCache'];
smalltalk.addMethod(
smalltalk.method({
selector: "jsonStatCache",
category: 'caching',
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
args: [],
source: "jsonStatCache\x0a\x09^ jsonStatCache ifNil: [ jsonStatCache := Dictionary new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Dictionary"]
}),
smalltalk.CWMonster.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "jsonStatCacheAt:",
category: 'caching',
fn: function (aKey){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._jsonStatCache())._at_(aKey);
return $1;
}, function($ctx1) {$ctx1.fill(self,"jsonStatCacheAt:",{aKey:aKey},smalltalk.CWMonster.klass)})},
args: ["aKey"],
source: "jsonStatCacheAt: aKey\x0a\x09^ self jsonStatCache at: aKey",
messageSends: ["at:", "jsonStatCache"],
referencedClasses: []
}),
smalltalk.CWMonster.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "jsonStatCacheAt:ifAbsent:",
category: 'caching',
fn: function (aKey,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._jsonStatCache())._at_ifAbsent_(aKey,aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"jsonStatCacheAt:ifAbsent:",{aKey:aKey,aBlock:aBlock},smalltalk.CWMonster.klass)})},
args: ["aKey", "aBlock"],
source: "jsonStatCacheAt: aKey ifAbsent: aBlock\x0a\x09^ self jsonStatCache at: aKey ifAbsent: aBlock",
messageSends: ["at:ifAbsent:", "jsonStatCache"],
referencedClasses: []
}),
smalltalk.CWMonster.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "jsonStatCacheAt:put:",
category: 'caching',
fn: function (aKey,aJson){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._jsonStatCache())._at_put_(aKey,aJson);
return $1;
}, function($ctx1) {$ctx1.fill(self,"jsonStatCacheAt:put:",{aKey:aKey,aJson:aJson},smalltalk.CWMonster.klass)})},
args: ["aKey", "aJson"],
source: "jsonStatCacheAt: aKey put: aJson\x0a\x09^ self jsonStatCache at: aKey put: aJson",
messageSends: ["at:put:", "jsonStatCache"],
referencedClasses: []
}),
smalltalk.CWMonster.klass);


smalltalk.addClass('CWHeros', smalltalk.CWMonster, [], 'Easnoth-BusinessObjects');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitHeros_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.CWHeros)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitHeros: self",
messageSends: ["visitHeros:"],
referencedClasses: []
}),
smalltalk.CWHeros);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultHp",
category: 'initialize-release',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(2);
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultHp",{},smalltalk.CWHeros)})},
args: [],
source: "defaultHp\x0a\x09^ 2",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWHeros);



smalltalk.addClass('CWTroop', smalltalk.CWMonster, [], 'Easnoth-BusinessObjects');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitTroop_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.CWTroop)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitTroop: self",
messageSends: ["visitTroop:"],
referencedClasses: []
}),
smalltalk.CWTroop);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultHp",
category: 'initialize-release',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(4);
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultHp",{},smalltalk.CWTroop)})},
args: [],
source: "defaultHp\x0a\x09^ 4",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWTroop);



smalltalk.addClass('CWMap', smalltalk.CWNode, [], 'Easnoth-BusinessObjects');
smalltalk.CWMap.comment="I represent the whole map in the game. "
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitMap_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.CWMap)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitMap: self",
messageSends: ["visitMap:"],
referencedClasses: []
}),
smalltalk.CWMap);

smalltalk.addMethod(
smalltalk.method({
selector: "canvasCoods",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@canvasCoods"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"canvasCoods",{},smalltalk.CWMap)})},
args: [],
source: "canvasCoods\x0a\x09^ canvasCoods",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWMap);

smalltalk.addMethod(
smalltalk.method({
selector: "canvasCoods:",
category: 'accessing',
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@canvasCoods"]=aPoint;
return self}, function($ctx1) {$ctx1.fill(self,"canvasCoods:",{aPoint:aPoint},smalltalk.CWMap)})},
args: ["aPoint"],
source: "canvasCoods: aPoint\x0a\x09canvasCoods := aPoint",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWMap);

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
}, function($ctx1) {$ctx1.fill(self,"canvasPadding",{},smalltalk.CWMap)})},
args: [],
source: "canvasPadding\x0a\x09\x22Answers the basic distance between the window border and my top left cell\x22\x0a\x0a\x09^ 40",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWMap);

smalltalk.addMethod(
smalltalk.method({
selector: "childBasicClass",
category: 'nodes',
fn: function (){
var self=this;
function $CWRow(){return smalltalk.CWRow||(typeof CWRow=="undefined"?nil:CWRow)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=$CWRow();
return $1;
}, function($ctx1) {$ctx1.fill(self,"childBasicClass",{},smalltalk.CWMap)})},
args: [],
source: "childBasicClass\x0a\x09^ CWRow",
messageSends: [],
referencedClasses: ["CWRow"]
}),
smalltalk.CWMap);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeFromJson:",
category: 'initialize-release',
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
args: ["jsonMap"],
source: "initializeFromJson: jsonMap\x0a\x09\x22initialize the children of the map (the rows)\x22\x0a\x09\x0a\x09| child rows |\x0a\x09rows := jsonMap row.\x0a\x09self children: (Array new: rows size).\x0a\x09rows withIndexDo: [:row :i |\x0a\x09\x09child := self newChild.\x0a\x09\x09self childAt: i put: child.\x0a\x09\x09child rowIndex: i.\x0a\x09\x09child initializeFromJson: row ]",
messageSends: ["row", "children:", "new:", "size", "withIndexDo:", "newChild", "childAt:put:", "rowIndex:", "initializeFromJson:"],
referencedClasses: ["Array"]
}),
smalltalk.CWMap);

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
}, function($ctx1) {$ctx1.fill(self,"tileUnit",{},smalltalk.CWMap)})},
args: [],
source: "tileUnit\x0a\x09\x22Answers the scale of cells. Change if you take bigger pictures\x22\x0a\x0a\x09^ 50",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWMap);


smalltalk.CWMap.klass.iVarNames = ['default'];
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
}, function($ctx1) {$ctx1.fill(self,"default",{},smalltalk.CWMap.klass)})},
args: [],
source: "default\x0a\x09^ default ifNil: [ default := self new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: []
}),
smalltalk.CWMap.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "newWithMapIndex:",
category: 'instance creation',
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
args: ["aMapIndex"],
source: "newWithMapIndex: aMapIndex\x0a\x09| map |\x0a\x09\x0a\x09map := self default.\x0a    jQuery \x0a\x09\x09getJSON: 'ressources/json/maps/map', aMapIndex, '.json' \x0a\x09\x09onSuccess: [:data | \x0a\x09\x09\x09map initializeFromJson: data].\x0a\x0a\x09^ map",
messageSends: ["default", "getJSON:onSuccess:", ",", "initializeFromJson:"],
referencedClasses: []
}),
smalltalk.CWMap.klass);


smalltalk.addClass('CWRow', smalltalk.CWNode, ['rowIndex'], 'Easnoth-BusinessObjects');
smalltalk.CWRow.comment="I represent a row of cells in the map."
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitRow_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.CWRow)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitRow: self",
messageSends: ["visitRow:"],
referencedClasses: []
}),
smalltalk.CWRow);

smalltalk.addMethod(
smalltalk.method({
selector: "childBasicClass",
category: 'nodes',
fn: function (){
var self=this;
function $CWCell(){return smalltalk.CWCell||(typeof CWCell=="undefined"?nil:CWCell)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=$CWCell();
return $1;
}, function($ctx1) {$ctx1.fill(self,"childBasicClass",{},smalltalk.CWRow)})},
args: [],
source: "childBasicClass\x0a\x09^ CWCell",
messageSends: [],
referencedClasses: ["CWCell"]
}),
smalltalk.CWRow);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeFromJson:",
category: 'initialize',
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
args: ["jsonRow"],
source: "initializeFromJson: jsonRow\x0a\x09| cells child |\x0a\x0a\x09cells := jsonRow cells.\x0a\x09self children: (Array new: cells size).\x0a\x09\x0a\x09cells withIndexDo: [:cell :i |\x0a\x09\x09child :=  self newChild.\x0a\x09\x09child mapCoods: self rowIndex @ i.\x0a\x09\x09child initializeFromJson: cell. \x0a\x09\x09self childAt: i put: child ].",
messageSends: ["cells", "children:", "new:", "size", "withIndexDo:", "newChild", "mapCoods:", "@", "rowIndex", "initializeFromJson:", "childAt:put:"],
referencedClasses: ["Array"]
}),
smalltalk.CWRow);

smalltalk.addMethod(
smalltalk.method({
selector: "rowIndex",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@rowIndex"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"rowIndex",{},smalltalk.CWRow)})},
args: [],
source: "rowIndex\x0a\x09^ rowIndex",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWRow);

smalltalk.addMethod(
smalltalk.method({
selector: "rowIndex:",
category: 'accessing',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@rowIndex"]=aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"rowIndex:",{aNumber:aNumber},smalltalk.CWRow)})},
args: ["aNumber"],
source: "rowIndex: aNumber\x0a\x09rowIndex := aNumber",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWRow);



