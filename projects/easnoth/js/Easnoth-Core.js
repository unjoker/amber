smalltalk.addPackage('Easnoth-Core');
smalltalk.addClass('CWGameBoard', smalltalk.Object, ['map', 'drawer', 'menu', 'cache'], 'Easnoth-Core');


smalltalk.addClass('Cell', smalltalk.Object, ['tile', 'gameOverTile', 'overTiles', 'monster', 'coods', 'state', 'map'], 'Easnoth-Core');
smalltalk.Cell.comment="\x22implementation of an hexagonal isometric cell\x22"
smalltalk.addMethod(
smalltalk.method({
selector: "addSelector",
category: 'state-delegation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._state())._addSelector();
return self}, function($ctx1) {$ctx1.fill(self,"addSelector",{},smalltalk.Cell)})},
args: [],
source: "addSelector\x0a\x09self state addSelector",
messageSends: ["addSelector", "state"],
referencedClasses: []
}),
smalltalk.Cell);

smalltalk.addMethod(
smalltalk.method({
selector: "addSelectorColored:",
category: 'displaying',
fn: function (aSelector){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._gameOverTile_(_st(self)._createGameOverTile_(aSelector));
return self}, function($ctx1) {$ctx1.fill(self,"addSelectorColored:",{aSelector:aSelector},smalltalk.Cell)})},
args: ["aSelector"],
source: "addSelectorColored: aSelector\x0a\x09self gameOverTile: (self createGameOverTile: aSelector)",
messageSends: ["gameOverTile:", "createGameOverTile:"],
referencedClasses: []
}),
smalltalk.Cell);

smalltalk.addMethod(
smalltalk.method({
selector: "attackableNeighboursSide:",
category: 'map-delegation',
fn: function (aSide){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._map())._attackableCellsNextTo_side_cycle_(self,aSide,_st(_st(self)._monster())._range());
return $1;
}, function($ctx1) {$ctx1.fill(self,"attackableNeighboursSide:",{aSide:aSide},smalltalk.Cell)})},
args: ["aSide"],
source: "attackableNeighboursSide: aSide\x0a\x09^self map attackableCellsNextTo: self side: aSide cycle: self monster range",
messageSends: ["attackableCellsNextTo:side:cycle:", "range", "monster", "map"],
referencedClasses: []
}),
smalltalk.Cell);

smalltalk.addMethod(
smalltalk.method({
selector: "canAttack:",
category: 'state-delegation',
fn: function (aSide){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._state())._canAttack_(aSide);
return $1;
}, function($ctx1) {$ctx1.fill(self,"canAttack:",{aSide:aSide},smalltalk.Cell)})},
args: ["aSide"],
source: "canAttack: aSide\x0a\x09^self state canAttack: aSide",
messageSends: ["canAttack:", "state"],
referencedClasses: []
}),
smalltalk.Cell);

smalltalk.addMethod(
smalltalk.method({
selector: "canMoveTo",
category: 'state-delegation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._state())._canMoveTo();
return $1;
}, function($ctx1) {$ctx1.fill(self,"canMoveTo",{},smalltalk.Cell)})},
args: [],
source: "canMoveTo\x0a\x09^self state canMoveTo",
messageSends: ["canMoveTo", "state"],
referencedClasses: []
}),
smalltalk.Cell);

smalltalk.addMethod(
smalltalk.method({
selector: "changeState:",
category: 'state-delegation',
fn: function (aState){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._state())._newState_for_(aState,self);
return self}, function($ctx1) {$ctx1.fill(self,"changeState:",{aState:aState},smalltalk.Cell)})},
args: ["aState"],
source: "changeState: aState\x0a\x09self state newState: aState for: self",
messageSends: ["newState:for:", "state"],
referencedClasses: []
}),
smalltalk.Cell);

smalltalk.addMethod(
smalltalk.method({
selector: "coods",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@coods"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"coods",{},smalltalk.Cell)})},
args: [],
source: "coods\x0a\x09^coods",
messageSends: [],
referencedClasses: []
}),
smalltalk.Cell);

smalltalk.addMethod(
smalltalk.method({
selector: "coods:",
category: 'accessing',
fn: function (cood){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@coods"]=_st(_st(_st(cood)._x())._rounded()).__at(_st(_st(cood)._y())._rounded());
return self}, function($ctx1) {$ctx1.fill(self,"coods:",{cood:cood},smalltalk.Cell)})},
args: ["cood"],
source: "coods: cood\x0a\x09coods := cood x rounded @ cood y rounded",
messageSends: ["@", "rounded", "y", "x"],
referencedClasses: []
}),
smalltalk.Cell);

smalltalk.addMethod(
smalltalk.method({
selector: "coodsInMap",
category: 'map-delegation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._map())._coodsOf_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"coodsInMap",{},smalltalk.Cell)})},
args: [],
source: "coodsInMap\x0a\x09^self map coodsOf: self",
messageSends: ["coodsOf:", "map"],
referencedClasses: []
}),
smalltalk.Cell);

smalltalk.addMethod(
smalltalk.method({
selector: "createGameOverTile:",
category: 'factory',
fn: function (jsonOverTile){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._createOverTile_selector_(jsonOverTile,true);
return $1;
}, function($ctx1) {$ctx1.fill(self,"createGameOverTile:",{jsonOverTile:jsonOverTile},smalltalk.Cell)})},
args: ["jsonOverTile"],
source: "createGameOverTile: jsonOverTile\x0a\x09^ self createOverTile: jsonOverTile selector: true",
messageSends: ["createOverTile:selector:"],
referencedClasses: []
}),
smalltalk.Cell);

smalltalk.addMethod(
smalltalk.method({
selector: "createMonster:",
category: 'factory',
fn: function (aJsonMonster){
var self=this;
function $Monster(){return smalltalk.Monster||(typeof Monster=="undefined"?nil:Monster)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Monster())._newInCell_jsonMonster_(self,aJsonMonster);
return $1;
}, function($ctx1) {$ctx1.fill(self,"createMonster:",{aJsonMonster:aJsonMonster},smalltalk.Cell)})},
args: ["aJsonMonster"],
source: "createMonster: aJsonMonster\x0a\x09^ Monster \x0a    \x09newInCell: self \x0a        jsonMonster: aJsonMonster",
messageSends: ["newInCell:jsonMonster:"],
referencedClasses: ["Monster"]
}),
smalltalk.Cell);

smalltalk.addMethod(
smalltalk.method({
selector: "createOverTile:",
category: 'factory',
fn: function (jsonOverTile){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._createOverTile_selector_(jsonOverTile,false);
return $1;
}, function($ctx1) {$ctx1.fill(self,"createOverTile:",{jsonOverTile:jsonOverTile},smalltalk.Cell)})},
args: ["jsonOverTile"],
source: "createOverTile: jsonOverTile\x0a\x09^ self createOverTile: jsonOverTile selector: false",
messageSends: ["createOverTile:selector:"],
referencedClasses: []
}),
smalltalk.Cell);

smalltalk.addMethod(
smalltalk.method({
selector: "createOverTile:selector:",
category: 'factory',
fn: function (jsonOverTile,aBool){
var self=this;
function $OverTile(){return smalltalk.OverTile||(typeof OverTile=="undefined"?nil:OverTile)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($OverTile())._newInCell_jsonOverTile_selector_(self,jsonOverTile,aBool);
return $1;
}, function($ctx1) {$ctx1.fill(self,"createOverTile:selector:",{jsonOverTile:jsonOverTile,aBool:aBool},smalltalk.Cell)})},
args: ["jsonOverTile", "aBool"],
source: "createOverTile: jsonOverTile selector: aBool\x0a\x09^ OverTile \x0a\x09\x09newInCell: self \x0a\x09\x09jsonOverTile: jsonOverTile \x0a\x09\x09selector: aBool",
messageSends: ["newInCell:jsonOverTile:selector:"],
referencedClasses: ["OverTile"]
}),
smalltalk.Cell);

smalltalk.addMethod(
smalltalk.method({
selector: "createOverTiles:",
category: 'factory',
fn: function (jsonOverTiles){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(jsonOverTiles)._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(self)._createOverTile_(_st(each)._overtile());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"createOverTiles:",{jsonOverTiles:jsonOverTiles},smalltalk.Cell)})},
args: ["jsonOverTiles"],
source: "createOverTiles: jsonOverTiles\x0a\x09^ jsonOverTiles collect: [:each | \x0a    \x09self createOverTile: each overtile ]",
messageSends: ["collect:", "createOverTile:", "overtile"],
referencedClasses: []
}),
smalltalk.Cell);

smalltalk.addMethod(
smalltalk.method({
selector: "createTile:",
category: 'factory',
fn: function (aJsonTile){
var self=this;
function $Tile(){return smalltalk.Tile||(typeof Tile=="undefined"?nil:Tile)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Tile())._newInCell_jsonTile_(self,aJsonTile);
return $1;
}, function($ctx1) {$ctx1.fill(self,"createTile:",{aJsonTile:aJsonTile},smalltalk.Cell)})},
args: ["aJsonTile"],
source: "createTile: aJsonTile\x0a\x09^ Tile \x0a    \x09newInCell: self \x0a        jsonTile: aJsonTile",
messageSends: ["newInCell:jsonTile:"],
referencedClasses: ["Tile"]
}),
smalltalk.Cell);

smalltalk.addMethod(
smalltalk.method({
selector: "draw",
category: 'displaying',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(_st(self)._drawedObjects())._do_((function(drawedObject){
return smalltalk.withContext(function($ctx2) {
$1=_st(_st(drawedObject)._notNil()).__and(_st(_st(self)._coods())._notNil());
if(smalltalk.assert($1)){
return _st(drawedObject)._draw();
};
}, function($ctx2) {$ctx2.fillBlock({drawedObject:drawedObject},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"draw",{},smalltalk.Cell)})},
args: [],
source: "draw\x0a\x09self drawedObjects do: [ :drawedObject |\x0a\x09\x09(drawedObject notNil & self coods notNil) ifTrue: [drawedObject draw]\x0a\x09].",
messageSends: ["do:", "ifTrue:", "draw", "&", "notNil", "coods", "drawedObjects"],
referencedClasses: []
}),
smalltalk.Cell);

smalltalk.addMethod(
smalltalk.method({
selector: "drawedObjects",
category: 'accessing',
fn: function (){
var self=this;
var drawedObjects;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1;
drawedObjects=_st($Array())._new_((8));
_st(drawedObjects)._addIfNotNil_(_st(self)._tile());
_st(_st(self)._overTiles())._do_((function(ot){
return smalltalk.withContext(function($ctx2) {
return _st(drawedObjects)._addIfNotNil_(ot);
}, function($ctx2) {$ctx2.fillBlock({ot:ot},$ctx1)})}));
_st(drawedObjects)._addIfNotNil_(_st(self)._gameOverTile());
_st(drawedObjects)._addIfNotNil_(_st(self)._monster());
$1=drawedObjects;
return $1;
}, function($ctx1) {$ctx1.fill(self,"drawedObjects",{drawedObjects:drawedObjects},smalltalk.Cell)})},
args: [],
source: "drawedObjects\x0a\x09|drawedObjects|\x0a    drawedObjects := Array new: 8.\x0a    drawedObjects addIfNotNil: self tile.\x0a    self overTiles do: [:ot |\x0a\x09\x09drawedObjects addIfNotNil: ot ]. \x0a    drawedObjects addIfNotNil: self gameOverTile.\x0a    drawedObjects addIfNotNil: self monster.\x0a    ^drawedObjects",
messageSends: ["new:", "addIfNotNil:", "tile", "do:", "overTiles", "gameOverTile", "monster"],
referencedClasses: ["Array"]
}),
smalltalk.Cell);

smalltalk.addMethod(
smalltalk.method({
selector: "drawedObjects:",
category: 'accessing-direct',
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@drawedObjects"]=value;
return self}, function($ctx1) {$ctx1.fill(self,"drawedObjects:",{value:value}, smalltalk.Cell)})},
args: ["value"],
source: "drawedObjects: value\x0a\x09drawedObjects := value.",
messageSends: [],
referencedClasses: []
}),
smalltalk.Cell);

smalltalk.addMethod(
smalltalk.method({
selector: "free",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._hasMonster())._not();
return $1;
}, function($ctx1) {$ctx1.fill(self,"free",{},smalltalk.Cell)})},
args: [],
source: "free\x0a\x09^self hasMonster not",
messageSends: ["not", "hasMonster"],
referencedClasses: []
}),
smalltalk.Cell);

smalltalk.addMethod(
smalltalk.method({
selector: "gameOverTile",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@gameOverTile"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"gameOverTile",{},smalltalk.Cell)})},
args: [],
source: "gameOverTile\x0a\x09^gameOverTile",
messageSends: [],
referencedClasses: []
}),
smalltalk.Cell);

smalltalk.addMethod(
smalltalk.method({
selector: "gameOverTile:",
category: 'accessing',
fn: function (anOverTile){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@gameOverTile"]=anOverTile;
_st(anOverTile)._cell_(self);
return self}, function($ctx1) {$ctx1.fill(self,"gameOverTile:",{anOverTile:anOverTile},smalltalk.Cell)})},
args: ["anOverTile"],
source: "gameOverTile: anOverTile\x0a\x09gameOverTile := anOverTile.\x0a    anOverTile cell: self",
messageSends: ["cell:"],
referencedClasses: []
}),
smalltalk.Cell);

smalltalk.addMethod(
smalltalk.method({
selector: "hasMonster",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._monster())._notNil();
return $1;
}, function($ctx1) {$ctx1.fill(self,"hasMonster",{},smalltalk.Cell)})},
args: [],
source: "hasMonster\x0a\x09^self monster notNil",
messageSends: ["notNil", "monster"],
referencedClasses: []
}),
smalltalk.Cell);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function (){
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.Object.fn.prototype._initialize.apply(_st(self), []);
_st(self)._overTiles_(_st($Array())._new_((5)));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.Cell)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self overTiles: (Array new: 5).",
messageSends: ["initialize", "overTiles:", "new:"],
referencedClasses: ["Array"]
}),
smalltalk.Cell);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeState",
category: 'initialize-release',
fn: function (){
var self=this;
function $CellState(){return smalltalk.CellState||(typeof CellState=="undefined"?nil:CellState)}
return smalltalk.withContext(function($ctx1) { 
_st($CellState())._initializeStateFor_(self);
return self}, function($ctx1) {$ctx1.fill(self,"initializeState",{},smalltalk.Cell)})},
args: [],
source: "initializeState\x0a\x09CellState initializeStateFor: self",
messageSends: ["initializeStateFor:"],
referencedClasses: ["CellState"]
}),
smalltalk.Cell);

smalltalk.addMethod(
smalltalk.method({
selector: "map",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@map"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"map",{},smalltalk.Cell)})},
args: [],
source: "map\x0a\x09^map",
messageSends: [],
referencedClasses: []
}),
smalltalk.Cell);

smalltalk.addMethod(
smalltalk.method({
selector: "map:",
category: 'accessing',
fn: function (aMap){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@map"]=aMap;
return self}, function($ctx1) {$ctx1.fill(self,"map:",{aMap:aMap},smalltalk.Cell)})},
args: ["aMap"],
source: "map: aMap\x0a\x09map := aMap",
messageSends: [],
referencedClasses: []
}),
smalltalk.Cell);

smalltalk.addMethod(
smalltalk.method({
selector: "monster",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@monster"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"monster",{},smalltalk.Cell)})},
args: [],
source: "monster\x0a\x09^monster",
messageSends: [],
referencedClasses: []
}),
smalltalk.Cell);

smalltalk.addMethod(
smalltalk.method({
selector: "monster:",
category: 'accessing',
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@monster"]=aMonster;
_st(aMonster)._cell_(self);
return self}, function($ctx1) {$ctx1.fill(self,"monster:",{aMonster:aMonster},smalltalk.Cell)})},
args: ["aMonster"],
source: "monster: aMonster\x0a\x09monster := aMonster.\x0a    aMonster cell: self",
messageSends: ["cell:"],
referencedClasses: []
}),
smalltalk.Cell);

smalltalk.addMethod(
smalltalk.method({
selector: "mouseClick:",
category: 'state-delegation',
fn: function (actionMenu){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._state())._mouseClick_(actionMenu);
return self}, function($ctx1) {$ctx1.fill(self,"mouseClick:",{actionMenu:actionMenu},smalltalk.Cell)})},
args: ["actionMenu"],
source: "mouseClick: actionMenu\x0a\x09self state mouseClick: actionMenu",
messageSends: ["mouseClick:", "state"],
referencedClasses: []
}),
smalltalk.Cell);

smalltalk.addMethod(
smalltalk.method({
selector: "movableNeighbours",
category: 'map-delegation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._map())._movableCellsNextTo_cycle_(self,_st(_st(self)._monster())._move());
return $1;
}, function($ctx1) {$ctx1.fill(self,"movableNeighbours",{},smalltalk.Cell)})},
args: [],
source: "movableNeighbours\x0a\x09^self map movableCellsNextTo: self cycle: self monster move",
messageSends: ["movableCellsNextTo:cycle:", "move", "monster", "map"],
referencedClasses: []
}),
smalltalk.Cell);

smalltalk.addMethod(
smalltalk.method({
selector: "neighbours",
category: 'map-delegation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._map())._cellsNextTo_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"neighbours",{},smalltalk.Cell)})},
args: [],
source: "neighbours\x0a\x09^self map cellsNextTo: self",
messageSends: ["cellsNextTo:", "map"],
referencedClasses: []
}),
smalltalk.Cell);

smalltalk.addMethod(
smalltalk.method({
selector: "overTiles",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@overTiles"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"overTiles",{},smalltalk.Cell)})},
args: [],
source: "overTiles\x0a\x09^overTiles",
messageSends: [],
referencedClasses: []
}),
smalltalk.Cell);

smalltalk.addMethod(
smalltalk.method({
selector: "overTiles:",
category: 'accessing',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@overTiles"]=aCollection;
_st(aCollection)._do_((function(overtile){
return smalltalk.withContext(function($ctx2) {
$1=overtile;
if(($receiver = $1) == nil || $receiver == undefined){
return $1;
} else {
return _st(overtile)._cell_(self);
};
}, function($ctx2) {$ctx2.fillBlock({overtile:overtile},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"overTiles:",{aCollection:aCollection},smalltalk.Cell)})},
args: ["aCollection"],
source: "overTiles: aCollection\x0a\x09overTiles := aCollection.\x0a    aCollection do: [:overtile |\x0a    \x09overtile ifNotNil: [overtile cell: self]]",
messageSends: ["do:", "ifNotNil:", "cell:"],
referencedClasses: []
}),
smalltalk.Cell);

smalltalk.addMethod(
smalltalk.method({
selector: "parseJSONCell:",
category: 'initialize-release',
fn: function (aJsonCell){
var self=this;
var elements;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
elements=_st(aJsonCell)._keys();
$1=_st(_st(elements)._first()).__eq("tile");
if(smalltalk.assert($1)){
_st(self)._tile_(_st(self)._createTile_(_st(aJsonCell)._tile()));
};
$2=_st(elements)._includes_("overtiles");
if(smalltalk.assert($2)){
_st(self)._overTiles_(_st(self)._createOverTiles_(_st(aJsonCell)._overtiles()));
};
$3=_st(_st(elements)._last()).__eq("monster");
if(smalltalk.assert($3)){
_st(self)._monster_(_st(self)._createMonster_(_st(aJsonCell)._monster()));
};
return self}, function($ctx1) {$ctx1.fill(self,"parseJSONCell:",{aJsonCell:aJsonCell,elements:elements},smalltalk.Cell)})},
args: ["aJsonCell"],
source: "parseJSONCell: aJsonCell\x0a    | elements |\x0a    \x0a    elements := aJsonCell keys.\x0a    \x0a    elements first = 'tile'\x0a    \x09ifTrue: [self tile: (self createTile: aJsonCell tile)].\x0a    (elements includes: 'overtiles')\x0a    \x09ifTrue: [self overTiles: (self createOverTiles: aJsonCell overtiles)].\x0a    elements last = 'monster'\x0a    \x09ifTrue: [self monster: (self createMonster: aJsonCell monster)].",
messageSends: ["keys", "ifTrue:", "tile:", "createTile:", "tile", "=", "first", "overTiles:", "createOverTiles:", "overtiles", "includes:", "monster:", "createMonster:", "monster", "last"],
referencedClasses: []
}),
smalltalk.Cell);

smalltalk.addMethod(
smalltalk.method({
selector: "prevCell",
category: 'state-delegation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._state())._prevCell();
return $1;
}, function($ctx1) {$ctx1.fill(self,"prevCell",{},smalltalk.Cell)})},
args: [],
source: "prevCell\x0a\x09^self state prevCell",
messageSends: ["prevCell", "state"],
referencedClasses: []
}),
smalltalk.Cell);

smalltalk.addMethod(
smalltalk.method({
selector: "prevCell:",
category: 'state-delegation',
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._state())._prevCell_(aCell);
return self}, function($ctx1) {$ctx1.fill(self,"prevCell:",{aCell:aCell},smalltalk.Cell)})},
args: ["aCell"],
source: "prevCell: aCell\x0a\x09self state prevCell: aCell",
messageSends: ["prevCell:", "state"],
referencedClasses: []
}),
smalltalk.Cell);

smalltalk.addMethod(
smalltalk.method({
selector: "printString",
category: 'printing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st("Cell : ").__comma(_st(_st(self)._coodsInMap())._x())).__comma("-")).__comma(_st(_st(self)._coodsInMap())._y());
return $1;
}, function($ctx1) {$ctx1.fill(self,"printString",{},smalltalk.Cell)})},
args: [],
source: "printString\x0a\x09^'Cell : ' , self coodsInMap x , '-' , self coodsInMap y",
messageSends: [",", "y", "coodsInMap", "x"],
referencedClasses: []
}),
smalltalk.Cell);

smalltalk.addMethod(
smalltalk.method({
selector: "removeGameOverTile",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@gameOverTile"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"removeGameOverTile",{},smalltalk.Cell)})},
args: [],
source: "removeGameOverTile\x0a\x09gameOverTile := nil",
messageSends: [],
referencedClasses: []
}),
smalltalk.Cell);

smalltalk.addMethod(
smalltalk.method({
selector: "removeMonster",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@monster"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"removeMonster",{},smalltalk.Cell)})},
args: [],
source: "removeMonster\x0a\x09monster := nil",
messageSends: [],
referencedClasses: []
}),
smalltalk.Cell);

smalltalk.addMethod(
smalltalk.method({
selector: "removeSelector",
category: 'state-delegation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._state())._removeSelector();
return self}, function($ctx1) {$ctx1.fill(self,"removeSelector",{},smalltalk.Cell)})},
args: [],
source: "removeSelector\x0a\x09self state removeSelector",
messageSends: ["removeSelector", "state"],
referencedClasses: []
}),
smalltalk.Cell);

smalltalk.addMethod(
smalltalk.method({
selector: "removeTile",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@tile"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"removeTile",{},smalltalk.Cell)})},
args: [],
source: "removeTile\x0a\x09tile := nil.",
messageSends: [],
referencedClasses: []
}),
smalltalk.Cell);

smalltalk.addMethod(
smalltalk.method({
selector: "selectableNeighboursSide:",
category: 'map-delegation',
fn: function (aSide){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._map())._selectableCellsNextTo_side_cycle_(self,aSide,_st(_st(self)._monster())._move());
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectableNeighboursSide:",{aSide:aSide},smalltalk.Cell)})},
args: ["aSide"],
source: "selectableNeighboursSide: aSide\x0a\x09^self map selectableCellsNextTo: self side: aSide cycle: self monster move",
messageSends: ["selectableCellsNextTo:side:cycle:", "move", "monster", "map"],
referencedClasses: []
}),
smalltalk.Cell);

smalltalk.addMethod(
smalltalk.method({
selector: "state",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@state"];
if(($receiver = $1) == nil || $receiver == undefined){
_st(self)._initializeState();
} else {
$1;
};
$2=self["@state"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"state",{},smalltalk.Cell)})},
args: [],
source: "state\x0a\x09state ifNil: [self initializeState].\x0a\x09^state",
messageSends: ["ifNil:", "initializeState"],
referencedClasses: []
}),
smalltalk.Cell);

smalltalk.addMethod(
smalltalk.method({
selector: "state:",
category: 'accessing',
fn: function (aState){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@state"]=aState;
return self}, function($ctx1) {$ctx1.fill(self,"state:",{aState:aState},smalltalk.Cell)})},
args: ["aState"],
source: "state: aState\x0a\x09state := aState",
messageSends: [],
referencedClasses: []
}),
smalltalk.Cell);

smalltalk.addMethod(
smalltalk.method({
selector: "tile",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@tile"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"tile",{},smalltalk.Cell)})},
args: [],
source: "tile\x0a\x09^tile",
messageSends: [],
referencedClasses: []
}),
smalltalk.Cell);

smalltalk.addMethod(
smalltalk.method({
selector: "tile:",
category: 'accessing',
fn: function (aTile){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@tile"]=aTile;
_st(aTile)._cell_(self);
return self}, function($ctx1) {$ctx1.fill(self,"tile:",{aTile:aTile},smalltalk.Cell)})},
args: ["aTile"],
source: "tile: aTile\x0a\x09tile := aTile.\x0a    aTile cell: self",
messageSends: ["cell:"],
referencedClasses: []
}),
smalltalk.Cell);

smalltalk.addMethod(
smalltalk.method({
selector: "updateCoods:",
category: 'displaying',
fn: function (cood){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._coods_(cood);
return self}, function($ctx1) {$ctx1.fill(self,"updateCoods:",{cood:cood},smalltalk.Cell)})},
args: ["cood"],
source: "updateCoods: cood\x0a\x09self coods: cood",
messageSends: ["coods:"],
referencedClasses: []
}),
smalltalk.Cell);


smalltalk.addMethod(
smalltalk.method({
selector: "newInMap:jsoncell:coods:",
category: 'instance creation',
fn: function (aMap,aJsonCell,coods){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st(self)._new();
_st($2)._map_(aMap);
_st($2)._updateCoods_(coods);
_st($2)._parseJSONCell_(aJsonCell);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"newInMap:jsoncell:coods:",{aMap:aMap,aJsonCell:aJsonCell,coods:coods},smalltalk.Cell.klass)})},
args: ["aMap", "aJsonCell", "coods"],
source: "newInMap: aMap jsoncell: aJsonCell coods: coods\x0a\x09^self new\x0a\x09\x09map: aMap;\x0a\x09\x09updateCoods: coods;\x0a\x09\x09parseJSONCell: aJsonCell;\x0a\x09\x09yourself.",
messageSends: ["map:", "new", "updateCoods:", "parseJSONCell:", "yourself"],
referencedClasses: []
}),
smalltalk.Cell.klass);


smalltalk.addClass('DrawedObject', smalltalk.Object, ['image', 'cell'], 'Easnoth-Core');
smalltalk.DrawedObject.comment="\x22abstract implementation of a drawedObject, Tile, overtile, Building or Monster\x22"
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibilty();
return self}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.DrawedObject)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09self subclassResponsibilty",
messageSends: ["subclassResponsibilty"],
referencedClasses: []
}),
smalltalk.DrawedObject);

smalltalk.addMethod(
smalltalk.method({
selector: "cell",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@cell"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"cell",{},smalltalk.DrawedObject)})},
args: [],
source: "cell\x0a\x09^cell",
messageSends: [],
referencedClasses: []
}),
smalltalk.DrawedObject);

smalltalk.addMethod(
smalltalk.method({
selector: "cell:",
category: 'accessing',
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@cell"]=aCell;
return self}, function($ctx1) {$ctx1.fill(self,"cell:",{aCell:aCell},smalltalk.DrawedObject)})},
args: ["aCell"],
source: "cell: aCell\x0a\x09cell := aCell",
messageSends: [],
referencedClasses: []
}),
smalltalk.DrawedObject);

smalltalk.addMethod(
smalltalk.method({
selector: "context",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@cell"])._map())._context();
return $1;
}, function($ctx1) {$ctx1.fill(self,"context",{},smalltalk.DrawedObject)})},
args: [],
source: "context\x0a\x09^cell map context",
messageSends: ["context", "map"],
referencedClasses: []
}),
smalltalk.DrawedObject);

smalltalk.addMethod(
smalltalk.method({
selector: "displayX:y:",
category: 'displaying',
fn: function (aX,aY){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._context())._drawImage_x_y_(_st(self)._image(),aX,aY);
return self}, function($ctx1) {$ctx1.fill(self,"displayX:y:",{aX:aX,aY:aY},smalltalk.DrawedObject)})},
args: ["aX", "aY"],
source: "displayX: aX y: aY\x0a\x09self context drawImage: self image\x0a\x09\x09\x09\x09\x09\x09x: aX\x0a\x09\x09\x09\x09\x09\x09y: aY.",
messageSends: ["drawImage:x:y:", "image", "context"],
referencedClasses: []
}),
smalltalk.DrawedObject);

smalltalk.addMethod(
smalltalk.method({
selector: "draw",
category: 'displaying',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"draw",{},smalltalk.DrawedObject)})},
args: [],
source: "draw\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.DrawedObject);

smalltalk.addMethod(
smalltalk.method({
selector: "folderName",
category: 'initializing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"folderName",{},smalltalk.DrawedObject)})},
args: [],
source: "folderName\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.DrawedObject);

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
}, function($ctx1) {$ctx1.fill(self,"image",{},smalltalk.DrawedObject)})},
args: [],
source: "image\x0a\x09^image",
messageSends: [],
referencedClasses: []
}),
smalltalk.DrawedObject);

smalltalk.addMethod(
smalltalk.method({
selector: "image:",
category: 'accessing',
fn: function (anImage){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@image"]=anImage;
return self}, function($ctx1) {$ctx1.fill(self,"image:",{anImage:anImage},smalltalk.DrawedObject)})},
args: ["anImage"],
source: "image: anImage\x0a\x09image := anImage",
messageSends: [],
referencedClasses: []
}),
smalltalk.DrawedObject);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeCell:imageKey:",
category: 'initializing',
fn: function (aCell,aKey){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._cell_(aCell);
_st(_st(_st(_st(aCell)._map())._cache())._images())._putImageWithKey_inDrawedObject_(aKey,self);
return self}, function($ctx1) {$ctx1.fill(self,"initializeCell:imageKey:",{aCell:aCell,aKey:aKey},smalltalk.DrawedObject)})},
args: ["aCell", "aKey"],
source: "initializeCell: aCell imageKey: aKey\x0a\x09self cell: aCell.\x0a\x09aCell map cache images putImageWithKey: aKey inDrawedObject: self",
messageSends: ["cell:", "putImageWithKey:inDrawedObject:", "images", "cache", "map"],
referencedClasses: []
}),
smalltalk.DrawedObject);



smalltalk.addClass('Ground', smalltalk.DrawedObject, [], 'Easnoth-Core');
smalltalk.Ground.comment="\x22abstract implementation of drawedObject Overtile and Tile. Drawed through isometric transformation\x22"
smalltalk.addMethod(
smalltalk.method({
selector: "draw",
category: 'displaying',
fn: function (){
var self=this;
var ctx;
function $Number(){return smalltalk.Number||(typeof Number=="undefined"?nil:Number)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
ctx=_st(self)._context();
$1=ctx;
_st($1)._save();
_st($1)._translate_y_(_st(_st(_st(_st(self)._cell())._coods())._x()).__plus((45)),_st(_st(_st(_st(self)._cell())._coods())._y()).__minus((7)));
_st($1)._scale_y_((1),(0.5));
_st($1)._rotate_(_st(_st($Number())._pi()).__slash((4)));
$2=_st($1)._scale_y_((1.4),(1.33));
_st(self)._displayX_y_((0),(0));
_st(ctx)._restore();
return self}, function($ctx1) {$ctx1.fill(self,"draw",{ctx:ctx},smalltalk.Ground)})},
args: [],
source: "draw\x0a\x09\x22draw through isometric transformation\x22\x0a\x0a\x09|ctx|\x0a\x09ctx := self context.\x0a\x09ctx save;\x0a\x09\x09translate: self cell coods x + 45 y: self cell coods y-7;\x0a\x09\x09scale: 1 y: 0.5;\x0a\x09\x09rotate: Number pi / 4 ;\x0a\x09\x09scale: 1.4 y: 1.33.\x0a\x09self displayX: 0 y: 0.\x0a\x09ctx restore.",
messageSends: ["context", "save", "translate:y:", "+", "x", "coods", "cell", "-", "y", "scale:y:", "rotate:", "/", "pi", "displayX:y:", "restore"],
referencedClasses: ["Number"]
}),
smalltalk.Ground);



smalltalk.addClass('OverTile', smalltalk.Ground, ['selector'], 'Easnoth-Core');
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
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.OverTile)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^aVisitor visitOverTile: self",
messageSends: ["visitOverTile:"],
referencedClasses: []
}),
smalltalk.OverTile);

smalltalk.addMethod(
smalltalk.method({
selector: "folderName",
category: 'initializing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "overtiles";
}, function($ctx1) {$ctx1.fill(self,"folderName",{},smalltalk.OverTile)})},
args: [],
source: "folderName\x0a\x09^'overtiles'",
messageSends: [],
referencedClasses: []
}),
smalltalk.OverTile);

smalltalk.addMethod(
smalltalk.method({
selector: "selector",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@selector"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"selector",{},smalltalk.OverTile)})},
args: [],
source: "selector\x0a\x09^selector",
messageSends: [],
referencedClasses: []
}),
smalltalk.OverTile);

smalltalk.addMethod(
smalltalk.method({
selector: "selector:",
category: 'accessing',
fn: function (aBool){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@selector"]=aBool;
return self}, function($ctx1) {$ctx1.fill(self,"selector:",{aBool:aBool},smalltalk.OverTile)})},
args: ["aBool"],
source: "selector: aBool\x0a\x09selector := aBool",
messageSends: [],
referencedClasses: []
}),
smalltalk.OverTile);


smalltalk.addMethod(
smalltalk.method({
selector: "newInCell:jsonOverTile:",
category: 'instance creation',
fn: function (aCell,aJsonOverTile){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._newInCell_jsonOverTile_selector_(aCell,aJsonOverTile,false);
return $1;
}, function($ctx1) {$ctx1.fill(self,"newInCell:jsonOverTile:",{aCell:aCell,aJsonOverTile:aJsonOverTile},smalltalk.OverTile.klass)})},
args: ["aCell", "aJsonOverTile"],
source: "newInCell: aCell jsonOverTile: aJsonOverTile\x0a\x09^self newInCell: aCell jsonOverTile: aJsonOverTile selector: false",
messageSends: ["newInCell:jsonOverTile:selector:"],
referencedClasses: []
}),
smalltalk.OverTile.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "newInCell:jsonOverTile:selector:",
category: 'instance creation',
fn: function (aCell,aJsonOverTile,aBool){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st(self)._new();
_st($2)._initializeCell_imageKey_(aCell,aJsonOverTile);
_st($2)._selector_(aBool);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"newInCell:jsonOverTile:selector:",{aCell:aCell,aJsonOverTile:aJsonOverTile,aBool:aBool},smalltalk.OverTile.klass)})},
args: ["aCell", "aJsonOverTile", "aBool"],
source: "newInCell: aCell jsonOverTile: aJsonOverTile selector: aBool\x0a\x09^self new\x0a\x09\x09initializeCell: aCell imageKey: aJsonOverTile;\x0a\x09\x09selector: aBool;\x0a\x09\x09yourself.",
messageSends: ["initializeCell:imageKey:", "new", "selector:", "yourself"],
referencedClasses: []
}),
smalltalk.OverTile.klass);


smalltalk.addClass('Tile', smalltalk.Ground, ['isWall'], 'Easnoth-Core');
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
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.Tile)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^aVisitor visitTile: self",
messageSends: ["visitTile:"],
referencedClasses: []
}),
smalltalk.Tile);

smalltalk.addMethod(
smalltalk.method({
selector: "folderName",
category: 'initializing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "tiles";
}, function($ctx1) {$ctx1.fill(self,"folderName",{},smalltalk.Tile)})},
args: [],
source: "folderName\x0a\x09^'tiles'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Tile);

smalltalk.addMethod(
smalltalk.method({
selector: "isWall",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@isWall"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"isWall",{},smalltalk.Tile)})},
args: [],
source: "isWall\x0a\x09^isWall",
messageSends: [],
referencedClasses: []
}),
smalltalk.Tile);

smalltalk.addMethod(
smalltalk.method({
selector: "isWall:",
category: 'accessing',
fn: function (aBoolean){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@isWall"]=aBoolean;
return self}, function($ctx1) {$ctx1.fill(self,"isWall:",{aBoolean:aBoolean},smalltalk.Tile)})},
args: ["aBoolean"],
source: "isWall: aBoolean\x0a\x09isWall := aBoolean",
messageSends: [],
referencedClasses: []
}),
smalltalk.Tile);


smalltalk.addMethod(
smalltalk.method({
selector: "newInCell:jsonTile:",
category: 'instance creation',
fn: function (aCell,aJsonTile){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st(self)._new();
_st($2)._initializeCell_imageKey_(aCell,aJsonTile);
_st($2)._isWall_(false);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"newInCell:jsonTile:",{aCell:aCell,aJsonTile:aJsonTile},smalltalk.Tile.klass)})},
args: ["aCell", "aJsonTile"],
source: "newInCell: aCell jsonTile: aJsonTile\x0a\x09^self new\x0a\x09\x09initializeCell: aCell imageKey: aJsonTile;\x0a\x09\x09isWall: false;\x0a\x09\x09yourself.",
messageSends: ["initializeCell:imageKey:", "new", "isWall:", "yourself"],
referencedClasses: []
}),
smalltalk.Tile.klass);


smalltalk.addClass('OverGround', smalltalk.DrawedObject, ['hp'], 'Easnoth-Core');
smalltalk.OverGround.comment="\x22abstract implementation of drawedObject Building and monster. Share some instance variables\x22"
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
}, function($ctx1) {$ctx1.fill(self,"hp",{},smalltalk.OverGround)})},
args: [],
source: "hp\x0a\x09^hp",
messageSends: [],
referencedClasses: []
}),
smalltalk.OverGround);

smalltalk.addMethod(
smalltalk.method({
selector: "hp:",
category: 'accessing',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@hp"]=aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"hp:",{aNumber:aNumber},smalltalk.OverGround)})},
args: ["aNumber"],
source: "hp: aNumber\x0a\x09hp := aNumber",
messageSends: [],
referencedClasses: []
}),
smalltalk.OverGround);



smalltalk.addClass('Building', smalltalk.OverGround, [], 'Easnoth-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitBuilding_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.Building)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^aVisitor visitBuilding: self",
messageSends: ["visitBuilding:"],
referencedClasses: []
}),
smalltalk.Building);

smalltalk.addMethod(
smalltalk.method({
selector: "folderName",
category: 'initializing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "buildings";
}, function($ctx1) {$ctx1.fill(self,"folderName",{},smalltalk.Building)})},
args: [],
source: "folderName\x0a\x09^'buildings'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Building);



smalltalk.addClass('Monster', smalltalk.OverGround, ['move', 'attack', 'knockback', 'range', 'heros', 'special', 'dices', 'side', 'state'], 'Easnoth-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitMonster_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.Monster)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^aVisitor visitMonster: self",
messageSends: ["visitMonster:"],
referencedClasses: []
}),
smalltalk.Monster);

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
}, function($ctx1) {$ctx1.fill(self,"attack",{},smalltalk.Monster)})},
args: [],
source: "attack\x0a\x09^attack",
messageSends: [],
referencedClasses: []
}),
smalltalk.Monster);

smalltalk.addMethod(
smalltalk.method({
selector: "attack:",
category: 'accessing',
fn: function (somePercent){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@attack"]=somePercent;
return self}, function($ctx1) {$ctx1.fill(self,"attack:",{somePercent:somePercent},smalltalk.Monster)})},
args: ["somePercent"],
source: "attack: somePercent\x0a\x09attack := somePercent",
messageSends: [],
referencedClasses: []
}),
smalltalk.Monster);

smalltalk.addMethod(
smalltalk.method({
selector: "attackTo:",
category: 'state-delegation',
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._state())._attackTo_(aCell);
return self}, function($ctx1) {$ctx1.fill(self,"attackTo:",{aCell:aCell},smalltalk.Monster)})},
args: ["aCell"],
source: "attackTo: aCell\x0a\x09self state attackTo: aCell",
messageSends: ["attackTo:", "state"],
referencedClasses: []
}),
smalltalk.Monster);

smalltalk.addMethod(
smalltalk.method({
selector: "changeState:",
category: 'state-delegation',
fn: function (aState){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._state())._newState_for_(aState,self);
return self}, function($ctx1) {$ctx1.fill(self,"changeState:",{aState:aState},smalltalk.Monster)})},
args: ["aState"],
source: "changeState: aState\x0a\x09self state newState: aState for: self",
messageSends: ["newState:for:", "state"],
referencedClasses: []
}),
smalltalk.Monster);

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
}, function($ctx1) {$ctx1.fill(self,"dices",{},smalltalk.Monster)})},
args: [],
source: "dices\x0a\x09^dices",
messageSends: [],
referencedClasses: []
}),
smalltalk.Monster);

smalltalk.addMethod(
smalltalk.method({
selector: "dices:",
category: 'accessing',
fn: function (anInt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@dices"]=anInt;
return self}, function($ctx1) {$ctx1.fill(self,"dices:",{anInt:anInt},smalltalk.Monster)})},
args: ["anInt"],
source: "dices: anInt\x0a\x09dices := anInt",
messageSends: [],
referencedClasses: []
}),
smalltalk.Monster);

smalltalk.addMethod(
smalltalk.method({
selector: "draw",
category: 'displaying',
fn: function (){
var self=this;
var aX,aY;
function $Error(){return smalltalk.Error||(typeof Error=="undefined"?nil:Error)}
return smalltalk.withContext(function($ctx1) { 
var $1;
_st((function(){
return smalltalk.withContext(function($ctx2) {
aX=_st(_st(_st(self)._cell())._coods())._x();
aX;
aY=_st(_st(_st(self)._cell())._coods())._y();
aY;
$1=_st(self)._heros();
if(smalltalk.assert($1)){
return _st(self)._drawAsHeroX_y_(aX,aY);
} else {
return _st(self)._drawAsUnitX_y_(aX,aY);
};
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._on_do_($Error(),(function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"draw",{aX:aX,aY:aY},smalltalk.Monster)})},
args: [],
source: "draw\x0a\x09\x22drawAsHero ou drawAsUnit\x22\x0a\x09\x22on Error for release\x22\x0a    |aX aY|   \x0a\x09[\x0a    aX := self cell coods x.\x0a    aY := self cell coods y.\x0a\x09self heros ifTrue: [\x0a\x09\x09self drawAsHeroX: aX y: aY\x0a\x09] ifFalse: [\x0a\x09\x09self drawAsUnitX: aX y: aY\x0a\x09]\x0a\x09] on: Error do: []",
messageSends: ["on:do:", "x", "coods", "cell", "y", "ifTrue:ifFalse:", "drawAsHeroX:y:", "drawAsUnitX:y:", "heros"],
referencedClasses: ["Error"]
}),
smalltalk.Monster);

smalltalk.addMethod(
smalltalk.method({
selector: "drawAsHeroX:y:",
category: 'displaying',
fn: function (aX,aY){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=_st(_st(self)._side())._negative();
if(smalltalk.assert($1)){
$2=_st(self)._context();
_st($2)._save();
_st($2)._translate_y_(_st(aX).__plus((87)),(0));
$3=_st($2)._scale_y_((-1),(1));
$3;
_st(self)._displayX_y_((0),_st(aY).__minus((28)));
_st(_st(self)._context())._restore();
} else {
_st(self)._displayX_y_(_st(aX).__plus((15)),_st(aY).__minus((28)));
};
return self}, function($ctx1) {$ctx1.fill(self,"drawAsHeroX:y:",{aX:aX,aY:aY},smalltalk.Monster)})},
args: ["aX", "aY"],
source: "drawAsHeroX: aX y: aY\x0a\x09\x2287 = 72 (width image + 15\x22\x0a\x09(self side negative) ifTrue: [\x0a\x09\x09self context save;\x0a\x09\x09\x09translate: aX + 87 y: 0;\x0a\x09\x09\x09scale: -1 y: 1.\x0a\x09\x09self displayX: 0 y: aY - 28.\x0a\x09\x09self context restore.\x0a\x09] ifFalse: [\x0a\x09\x09self displayX: aX + 15 y: aY - 28.\x0a\x09]",
messageSends: ["ifTrue:ifFalse:", "save", "context", "translate:y:", "+", "scale:y:", "displayX:y:", "-", "restore", "negative", "side"],
referencedClasses: []
}),
smalltalk.Monster);

smalltalk.addMethod(
smalltalk.method({
selector: "drawAsUnitX:y:",
category: 'displaying',
fn: function (aX,aY){
var self=this;
var xArray,yArray;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
xArray=[(17), (37), (-11), (9)];
yArray=[(33), (23), (26), (15)];
$1=_st(_st(self)._side())._negative();
if(smalltalk.assert($1)){
_st(_st((1))._to_(_st(self)._hp()))._do_((function(i){
return smalltalk.withContext(function($ctx2) {
$2=_st(self)._context();
_st($2)._save();
_st($2)._translate_y_(_st(_st(aX).__plus((72))).__plus(_st(xArray)._at_(i)),(0));
$3=_st($2)._scale_y_((-1),(1));
$3;
_st(self)._displayX_y_((0),_st(aY).__minus(_st(yArray)._at_(i)));
return _st(_st(self)._context())._restore();
}, function($ctx2) {$ctx2.fillBlock({i:i},$ctx1)})}));
} else {
_st(_st((1))._to_(_st(self)._hp()))._do_((function(i){
return smalltalk.withContext(function($ctx2) {
return _st(self)._displayX_y_(_st(aX).__plus(_st(xArray)._at_(i)),_st(aY).__minus(_st(yArray)._at_(i)));
}, function($ctx2) {$ctx2.fillBlock({i:i},$ctx1)})}));
};
return self}, function($ctx1) {$ctx1.fill(self,"drawAsUnitX:y:",{aX:aX,aY:aY,xArray:xArray,yArray:yArray},smalltalk.Monster)})},
args: ["aX", "aY"],
source: "drawAsUnitX: aX y: aY\x0a\x09|xArray yArray|\x0a\x0a\x09xArray := #(17 37 -11 9).\x0a\x09yArray := #(33 23 26 15).\x0a\x0a\x09(self side negative) ifTrue: [\x0a\x09\x09(1 to: self hp) do: [ :i |\x0a\x09\x09\x09self context save;\x0a\x09\x09\x09translate: aX + 72 + (xArray at: i) y: 0;\x0a\x09\x09\x09scale: -1 y: 1.\x0a\x09\x09\x09self displayX: 0 y: aY - (yArray at: i).\x0a\x09\x09\x09self context restore.\x0a\x09\x09].\x0a\x09] ifFalse: [\x0a\x09\x09(1 to: self hp) do: [ :i |\x0a\x09\x09\x09self displayX: aX + (xArray at: i) y: aY - (yArray at: i).\x0a\x09\x09]\x0a\x09]",
messageSends: ["ifTrue:ifFalse:", "do:", "save", "context", "translate:y:", "+", "at:", "scale:y:", "displayX:y:", "-", "restore", "to:", "hp", "negative", "side"],
referencedClasses: []
}),
smalltalk.Monster);

smalltalk.addMethod(
smalltalk.method({
selector: "folderName",
category: 'initializing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "monsters";
}, function($ctx1) {$ctx1.fill(self,"folderName",{},smalltalk.Monster)})},
args: [],
source: "folderName\x0a\x09^'monsters'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Monster);

smalltalk.addMethod(
smalltalk.method({
selector: "heros",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@heros"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"heros",{},smalltalk.Monster)})},
args: [],
source: "heros\x0a\x09^heros",
messageSends: [],
referencedClasses: []
}),
smalltalk.Monster);

smalltalk.addMethod(
smalltalk.method({
selector: "heros:",
category: 'accessing',
fn: function (aBoolean){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@heros"]=aBoolean;
return self}, function($ctx1) {$ctx1.fill(self,"heros:",{aBoolean:aBoolean},smalltalk.Monster)})},
args: ["aBoolean"],
source: "heros: aBoolean\x0a\x09heros := aBoolean",
messageSends: [],
referencedClasses: []
}),
smalltalk.Monster);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initializing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.Monster)})},
args: [],
source: "initialize",
messageSends: [],
referencedClasses: []
}),
smalltalk.Monster);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeSide:",
category: 'initializing',
fn: function (aSide){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._side_(aSide);
return self}, function($ctx1) {$ctx1.fill(self,"initializeSide:",{aSide:aSide},smalltalk.Monster)})},
args: ["aSide"],
source: "initializeSide: aSide\x0a\x09self side: aSide",
messageSends: ["side:"],
referencedClasses: []
}),
smalltalk.Monster);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeStats:",
category: 'initializing',
fn: function (aJsonMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(_st(_st(_st(self)._cell())._map())._cache())._monsters())._putStatsWithKey_inMonster_(aJsonMonster,self);
return self}, function($ctx1) {$ctx1.fill(self,"initializeStats:",{aJsonMonster:aJsonMonster},smalltalk.Monster)})},
args: ["aJsonMonster"],
source: "initializeStats: aJsonMonster\x0a\x09self cell map cache monsters putStatsWithKey: aJsonMonster inMonster: self",
messageSends: ["putStatsWithKey:inMonster:", "monsters", "cache", "map", "cell"],
referencedClasses: []
}),
smalltalk.Monster);

smalltalk.addMethod(
smalltalk.method({
selector: "knockback",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@knockback"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"knockback",{},smalltalk.Monster)})},
args: [],
source: "knockback\x0a\x09^knockback",
messageSends: [],
referencedClasses: []
}),
smalltalk.Monster);

smalltalk.addMethod(
smalltalk.method({
selector: "knockback:",
category: 'accessing',
fn: function (somePercent){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@knockback"]=somePercent;
return self}, function($ctx1) {$ctx1.fill(self,"knockback:",{somePercent:somePercent},smalltalk.Monster)})},
args: ["somePercent"],
source: "knockback: somePercent\x0a\x09knockback := somePercent",
messageSends: [],
referencedClasses: []
}),
smalltalk.Monster);

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
}, function($ctx1) {$ctx1.fill(self,"move",{},smalltalk.Monster)})},
args: [],
source: "move\x0a\x09^move",
messageSends: [],
referencedClasses: []
}),
smalltalk.Monster);

smalltalk.addMethod(
smalltalk.method({
selector: "move:",
category: 'accessing',
fn: function (aNumberOfCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@move"]=aNumberOfCell;
return self}, function($ctx1) {$ctx1.fill(self,"move:",{aNumberOfCell:aNumberOfCell},smalltalk.Monster)})},
args: ["aNumberOfCell"],
source: "move: aNumberOfCell\x0a\x09move := aNumberOfCell",
messageSends: [],
referencedClasses: []
}),
smalltalk.Monster);

smalltalk.addMethod(
smalltalk.method({
selector: "moveTo:",
category: 'state-delegation',
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._state())._moveTo_(aCell);
return self}, function($ctx1) {$ctx1.fill(self,"moveTo:",{aCell:aCell},smalltalk.Monster)})},
args: ["aCell"],
source: "moveTo: aCell\x0a\x09self state moveTo: aCell",
messageSends: ["moveTo:", "state"],
referencedClasses: []
}),
smalltalk.Monster);

smalltalk.addMethod(
smalltalk.method({
selector: "range",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@range"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"range",{},smalltalk.Monster)})},
args: [],
source: "range\x0a\x09^range",
messageSends: [],
referencedClasses: []
}),
smalltalk.Monster);

smalltalk.addMethod(
smalltalk.method({
selector: "range:",
category: 'accessing',
fn: function (aNumberOfCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@range"]=aNumberOfCell;
return self}, function($ctx1) {$ctx1.fill(self,"range:",{aNumberOfCell:aNumberOfCell},smalltalk.Monster)})},
args: ["aNumberOfCell"],
source: "range: aNumberOfCell\x0a\x09range := aNumberOfCell",
messageSends: [],
referencedClasses: []
}),
smalltalk.Monster);

smalltalk.addMethod(
smalltalk.method({
selector: "removeHP:",
category: 'fighting',
fn: function (anInt){
var self=this;
function $Free(){return smalltalk.Free||(typeof Free=="undefined"?nil:Free)}
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(self)._hp_(_st(_st(self)._hp()).__minus(anInt));
$1=_st(_st(self)._hp()).__lt((1));
if(smalltalk.assert($1)){
_st(_st(self)._cell())._removeMonster();
_st(_st(self)._cell())._changeState_(_st($Free())._new());
};
return self}, function($ctx1) {$ctx1.fill(self,"removeHP:",{anInt:anInt},smalltalk.Monster)})},
args: ["anInt"],
source: "removeHP: anInt\x0a        self hp: self hp - anInt.\x0a        (self hp < 1) ifTrue: [\x0a                self cell removeMonster.\x0a                self cell changeState: Free new\x0a        ].",
messageSends: ["hp:", "-", "hp", "ifTrue:", "removeMonster", "cell", "changeState:", "new", "<"],
referencedClasses: ["Free"]
}),
smalltalk.Monster);

smalltalk.addMethod(
smalltalk.method({
selector: "rollDices",
category: 'fighting',
fn: function (){
var self=this;
var kill,knockBack,tmp;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
kill=(0);
knockBack=(0);
_st((1))._to_do_(_st(self)._dices(),(function(){
return smalltalk.withContext(function($ctx2) {
tmp=_st((100))._atRandom();
tmp;
$1=_st(tmp).__lt(_st(self)._attack());
if(smalltalk.assert($1)){
kill=_st(kill).__plus((1));
kill;
};
$2=_st(_st(tmp).__gt(_st(self)._attack())).__and(_st(tmp).__lt(_st(_st(self)._attack()).__plus(_st(self)._knockback())));
if(smalltalk.assert($2)){
knockBack=_st(knockBack).__plus((1));
return knockBack;
};
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$3=_st(kill).__at(knockBack);
return $3;
}, function($ctx1) {$ctx1.fill(self,"rollDices",{kill:kill,knockBack:knockBack,tmp:tmp},smalltalk.Monster)})},
args: [],
source: "rollDices\x0a\x09|kill knockBack tmp|\x0a\x09\x0a\x09kill := 0.\x0a\x09knockBack := 0.\x0a\x0a\x091 to: self dices do: [\x0a\x09\x09tmp := 100 atRandom.\x0a\x09\x09(tmp < self attack) ifTrue: [kill := kill + 1].\x0a\x09\x09(tmp > self attack & (tmp < (self attack + self knockback))) ifTrue: [knockBack := knockBack + 1].\x0a\x09].\x0a\x0a\x09^kill @ knockBack",
messageSends: ["to:do:", "dices", "atRandom", "ifTrue:", "+", "<", "attack", "&", "knockback", ">", "@"],
referencedClasses: []
}),
smalltalk.Monster);

smalltalk.addMethod(
smalltalk.method({
selector: "rollDicesCallBack:",
category: 'fighting',
fn: function (callback){
var self=this;
var kill,knockBack,tmp;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
kill=(0);
knockBack=(0);
_st((1))._to_do_(_st(self)._dices(),(function(){
return smalltalk.withContext(function($ctx2) {
tmp=_st((100))._atRandom();
tmp;
$1=_st(tmp).__lt(_st(self)._attack());
if(smalltalk.assert($1)){
kill=_st(kill).__plus((1));
kill;
};
$2=_st(_st(tmp).__gt(_st(self)._attack())).__and(_st(tmp).__lt(_st(_st(self)._attack()).__plus(_st(self)._knockback())));
if(smalltalk.assert($2)){
knockBack=_st(knockBack).__plus((1));
return knockBack;
};
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(_st(_st(_st(_st(self)._cell())._map())._actionMenu())._dices())._showDices_callback_(_st(kill).__at(knockBack),callback);
$3=_st(kill).__at(knockBack);
return $3;
}, function($ctx1) {$ctx1.fill(self,"rollDicesCallBack:",{callback:callback,kill:kill,knockBack:knockBack,tmp:tmp},smalltalk.Monster)})},
args: ["callback"],
source: "rollDicesCallBack: callback\x0a\x09|kill knockBack tmp|\x0a\x09\x0a\x09kill := 0.\x0a\x09knockBack := 0.\x0a\x0a\x091 to: self dices do: [\x0a\x09\x09tmp := 100 atRandom.\x0a\x09\x09(tmp < self attack) ifTrue: [kill := kill + 1].\x0a\x09\x09(tmp > self attack & (tmp < (self attack + self knockback))) ifTrue: [knockBack := knockBack + 1].\x0a\x09].\x0a\x0a\x09self cell map actionMenu dices showDices: kill @ knockBack callback: callback.\x0a\x0a\x09^kill @ knockBack",
messageSends: ["to:do:", "dices", "atRandom", "ifTrue:", "+", "<", "attack", "&", "knockback", ">", "showDices:callback:", "@", "actionMenu", "map", "cell"],
referencedClasses: []
}),
smalltalk.Monster);

smalltalk.addMethod(
smalltalk.method({
selector: "select",
category: 'state-delegation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._state())._select();
return self}, function($ctx1) {$ctx1.fill(self,"select",{},smalltalk.Monster)})},
args: [],
source: "select\x0a\x09self state select",
messageSends: ["select", "state"],
referencedClasses: []
}),
smalltalk.Monster);

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
}, function($ctx1) {$ctx1.fill(self,"side",{},smalltalk.Monster)})},
args: [],
source: "side\x0a\x09^side",
messageSends: [],
referencedClasses: []
}),
smalltalk.Monster);

smalltalk.addMethod(
smalltalk.method({
selector: "side:",
category: 'accessing',
fn: function (anInt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@side"]=anInt;
return self}, function($ctx1) {$ctx1.fill(self,"side:",{anInt:anInt},smalltalk.Monster)})},
args: ["anInt"],
source: "side: anInt\x0a\x09side := anInt",
messageSends: [],
referencedClasses: []
}),
smalltalk.Monster);

smalltalk.addMethod(
smalltalk.method({
selector: "special",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@special"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"special",{},smalltalk.Monster)})},
args: [],
source: "special\x0a\x09^special",
messageSends: [],
referencedClasses: []
}),
smalltalk.Monster);

smalltalk.addMethod(
smalltalk.method({
selector: "special:",
category: 'accessing',
fn: function (something){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@special"]=something;
return self}, function($ctx1) {$ctx1.fill(self,"special:",{something:something},smalltalk.Monster)})},
args: ["something"],
source: "special: something\x0a\x09special := something",
messageSends: [],
referencedClasses: []
}),
smalltalk.Monster);

smalltalk.addMethod(
smalltalk.method({
selector: "state",
category: 'accessing',
fn: function (){
var self=this;
function $Inactive(){return smalltalk.Inactive||(typeof Inactive=="undefined"?nil:Inactive)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@state"];
if(($receiver = $2) == nil || $receiver == undefined){
$1=_st($Inactive())._newFor_(self);
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"state",{},smalltalk.Monster)})},
args: [],
source: "state\x0a\x09^state ifNil: [Inactive newFor: self]",
messageSends: ["ifNil:", "newFor:"],
referencedClasses: ["Inactive"]
}),
smalltalk.Monster);

smalltalk.addMethod(
smalltalk.method({
selector: "state:",
category: 'accessing',
fn: function (aState){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@state"]=aState;
return self}, function($ctx1) {$ctx1.fill(self,"state:",{aState:aState},smalltalk.Monster)})},
args: ["aState"],
source: "state: aState\x0a\x09state := aState",
messageSends: [],
referencedClasses: []
}),
smalltalk.Monster);

smalltalk.addMethod(
smalltalk.method({
selector: "stats:",
category: 'initializing',
fn: function (jsonStats){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(self)._move_(_st(jsonStats)._move());
_st(self)._range_(_st(jsonStats)._range());
_st(self)._attack_(_st(jsonStats)._attack());
_st(self)._knockback_(_st(jsonStats)._knockback());
_st(self)._heros_(_st(jsonStats)._heros());
_st(self)._dices_(_st(jsonStats)._dices());
_st(self)._special_(_st(jsonStats)._special());
$1=_st(self)._heros();
if(smalltalk.assert($1)){
_st(self)._hp_((2));
} else {
_st(self)._hp_((4));
};
return self}, function($ctx1) {$ctx1.fill(self,"stats:",{jsonStats:jsonStats},smalltalk.Monster)})},
args: ["jsonStats"],
source: "stats: jsonStats\x0a\x09self move: jsonStats move.\x0a\x09self range: jsonStats range.\x0a\x09self attack: jsonStats attack.\x0a\x09self knockback: jsonStats knockback.\x0a\x09self heros: jsonStats heros.\x0a\x09self dices: jsonStats dices.\x0a\x09self special: jsonStats special.\x0a\x09self heros ifTrue: [self hp: 2] ifFalse: [self hp: 4].",
messageSends: ["move:", "move", "range:", "range", "attack:", "attack", "knockback:", "knockback", "heros:", "heros", "dices:", "dices", "special:", "special", "ifTrue:ifFalse:", "hp:"],
referencedClasses: []
}),
smalltalk.Monster);


smalltalk.addMethod(
smalltalk.method({
selector: "newInCell:jsonMonster:",
category: 'instance creation',
fn: function (aCell,aJsonMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st(self)._new();
_st($2)._initializeCell_imageKey_(aCell,_st(aJsonMonster)._name());
_st($2)._initializeStats_(_st(aJsonMonster)._name());
_st($2)._initializeSide_(_st(aJsonMonster)._side());
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"newInCell:jsonMonster:",{aCell:aCell,aJsonMonster:aJsonMonster},smalltalk.Monster.klass)})},
args: ["aCell", "aJsonMonster"],
source: "newInCell: aCell jsonMonster: aJsonMonster\x0a\x09^self new\x0a\x09\x09initializeCell: aCell imageKey: aJsonMonster name;\x0a\x09\x09initializeStats: aJsonMonster name;\x0a\x09\x09initializeSide: aJsonMonster side;\x0a\x09\x09yourself.",
messageSends: ["initializeCell:imageKey:", "name", "new", "initializeStats:", "initializeSide:", "side", "yourself"],
referencedClasses: []
}),
smalltalk.Monster.klass);


smalltalk.addClass('Map', smalltalk.Object, ['mapCoods', 'cells', 'canvas', 'actionMenu', 'cache'], 'Easnoth-Core');
smalltalk.Map.comment="\x22singleton Map, represents all the map drawed in the canvas\x22"
smalltalk.addMethod(
smalltalk.method({
selector: "actionMenu",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@actionMenu"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"actionMenu",{},smalltalk.Map)})},
args: [],
source: "actionMenu\x0a\x09^actionMenu",
messageSends: [],
referencedClasses: []
}),
smalltalk.Map);

smalltalk.addMethod(
smalltalk.method({
selector: "actionMenu:",
category: 'accessing',
fn: function (aMenu){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@actionMenu"]=aMenu;
return self}, function($ctx1) {$ctx1.fill(self,"actionMenu:",{aMenu:aMenu},smalltalk.Map)})},
args: ["aMenu"],
source: "actionMenu: aMenu\x0a\x09actionMenu := aMenu",
messageSends: [],
referencedClasses: []
}),
smalltalk.Map);

smalltalk.addMethod(
smalltalk.method({
selector: "attackableCellsNextTo:side:",
category: 'cell-delegate',
fn: function (aCell,aSide){
var self=this;
var attackableCells;
return smalltalk.withContext(function($ctx1) { 
var $1;
attackableCells=_st(_st(self)._cellsNextTo_(aCell))._select_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._canAttack_(aSide);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
_st(attackableCells)._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._addSelector();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$1=attackableCells;
return $1;
}, function($ctx1) {$ctx1.fill(self,"attackableCellsNextTo:side:",{aCell:aCell,aSide:aSide,attackableCells:attackableCells},smalltalk.Map)})},
args: ["aCell", "aSide"],
source: "attackableCellsNextTo: aCell side: aSide\x0a\x09|attackableCells|\x0a\x09attackableCells := (self cellsNextTo: aCell) select: [:each | \x0a\x09\x09\x09\x09\x09each canAttack: aSide].\x0a\x09attackableCells collect: [:each |\x0a\x09\x09\x09each addSelector].\x0a\x09^attackableCells",
messageSends: ["select:", "canAttack:", "cellsNextTo:", "collect:", "addSelector"],
referencedClasses: []
}),
smalltalk.Map);

smalltalk.addMethod(
smalltalk.method({
selector: "attackableCellsNextTo:side:cycle:",
category: 'cell-delegate',
fn: function (aCell,aSide,cycleNumber){
var self=this;
var attackableCells;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(self)._removeSelection();
attackableCells=_st(self)._attackableCellsNextTo_side_(aCell,aSide);
$1=attackableCells;
return $1;
}, function($ctx1) {$ctx1.fill(self,"attackableCellsNextTo:side:cycle:",{aCell:aCell,aSide:aSide,cycleNumber:cycleNumber,attackableCells:attackableCells},smalltalk.Map)})},
args: ["aCell", "aSide", "cycleNumber"],
source: "attackableCellsNextTo: aCell side: aSide cycle: cycleNumber\x0a\x09|attackableCells|\x0a\x0a\x09self removeSelection.\x0a\x0a\x09attackableCells := self attackableCellsNextTo: aCell side: aSide.\x0a\x0a\x09^attackableCells",
messageSends: ["removeSelection", "attackableCellsNextTo:side:"],
referencedClasses: []
}),
smalltalk.Map);

smalltalk.addMethod(
smalltalk.method({
selector: "cache",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@cache"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"cache",{},smalltalk.Map)})},
args: [],
source: "cache\x0a\x09^cache",
messageSends: [],
referencedClasses: []
}),
smalltalk.Map);

smalltalk.addMethod(
smalltalk.method({
selector: "cache:",
category: 'accessing',
fn: function (aCache){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@cache"]=aCache;
return self}, function($ctx1) {$ctx1.fill(self,"cache:",{aCache:aCache},smalltalk.Map)})},
args: ["aCache"],
source: "cache: aCache\x0a\x09cache := aCache",
messageSends: [],
referencedClasses: []
}),
smalltalk.Map);

smalltalk.addMethod(
smalltalk.method({
selector: "calculX:y:",
category: 'displaying',
fn: function (i,j){
var self=this;
var xpos,ypos,temp,cood,sin45,sin15,sin135,sin75;
return smalltalk.withContext(function($ctx1) { 
var $1;
sin45=(0.707106781);
sin15=(0.258819045);
sin135=(0.233445364);
sin75=(0.965925826);
temp=_st(_st(j).__plus(_st(_st(i).__plus((1))).__slash((2))))._truncated();
xpos=_st(_st(_st(_st(i).__star(_st(sin45).__plus(sin75))).__minus(_st(temp).__star(_st(sin15).__plus(sin75)))).__star(_st(self)._tileUnit())).__plus(_st(_st(self)._coods())._x());
ypos=_st(_st(_st(_st(_st(temp).__star(_st(sin15).__plus(sin75))).__slash((2))).__plus(_st(i).__star(sin135))).__star(_st(self)._tileUnit())).__plus(_st(_st(self)._coods())._y());
cood=_st(xpos).__at(ypos);
$1=cood;
return $1;
}, function($ctx1) {$ctx1.fill(self,"calculX:y:",{i:i,j:j,xpos:xpos,ypos:ypos,temp:temp,cood:cood,sin45:sin45,sin15:sin15,sin135:sin135,sin75:sin75},smalltalk.Map)})},
args: ["i", "j"],
source: "calculX: i y: j\x0a\x09|xpos ypos temp cood sin45 sin15 sin135 sin75 |\x0a\x0a\x09sin45 := 0.707106781. \x22Pi/4\x22\x0a\x09sin15 := 0.258819045. \x22Pi/12\x22\x0a\x09sin135 := 0.233445364. \x22???->I used Approximation\x22\x0a\x09sin75 := 0.965925826. \x225*Pi/12\x22\x0a\x0a\x09temp := (j + ((i + 1)/2)) truncated.\x0a\x09xpos := (i * (sin45 + sin75) - (temp* (sin15 + sin75))) * self tileUnit + self coods x.\x0a\x09ypos := (temp * (sin15 + sin75) / 2 + (i * sin135)) * self tileUnit + self coods y.\x0a\x09cood := xpos @ ypos.\x0a\x09\x0a\x09^cood",
messageSends: ["truncated", "+", "/", "x", "coods", "*", "tileUnit", "-", "y", "@"],
referencedClasses: []
}),
smalltalk.Map);

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
}, function($ctx1) {$ctx1.fill(self,"canvas",{},smalltalk.Map)})},
args: [],
source: "canvas\x0a\x09^canvas",
messageSends: [],
referencedClasses: []
}),
smalltalk.Map);

smalltalk.addMethod(
smalltalk.method({
selector: "canvas:",
category: 'accessing',
fn: function (aCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@canvas"]=aCanvas;
return self}, function($ctx1) {$ctx1.fill(self,"canvas:",{aCanvas:aCanvas},smalltalk.Map)})},
args: ["aCanvas"],
source: "canvas: aCanvas\x0a\x09canvas := aCanvas",
messageSends: [],
referencedClasses: []
}),
smalltalk.Map);

smalltalk.addMethod(
smalltalk.method({
selector: "canvasId",
category: 'initialize-release',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "#main";
}, function($ctx1) {$ctx1.fill(self,"canvasId",{},smalltalk.Map)})},
args: [],
source: "canvasId\x0a\x09^'#main'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Map);

smalltalk.addMethod(
smalltalk.method({
selector: "canvasPadding",
category: 'initialize-release',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(40);
return $1;
}, function($ctx1) {$ctx1.fill(self,"canvasPadding",{},smalltalk.Map)})},
args: [],
source: "canvasPadding\x0a\x09^40",
messageSends: [],
referencedClasses: []
}),
smalltalk.Map);

smalltalk.addMethod(
smalltalk.method({
selector: "cells",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@cells"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"cells",{},smalltalk.Map)})},
args: [],
source: "cells\x0a\x09^cells",
messageSends: [],
referencedClasses: []
}),
smalltalk.Map);

smalltalk.addMethod(
smalltalk.method({
selector: "cells:",
category: 'accessing',
fn: function (anArray){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@cells"]=anArray;
return self}, function($ctx1) {$ctx1.fill(self,"cells:",{anArray:anArray},smalltalk.Map)})},
args: ["anArray"],
source: "cells: anArray\x0a\x09cells := anArray.",
messageSends: [],
referencedClasses: []
}),
smalltalk.Map);

smalltalk.addMethod(
smalltalk.method({
selector: "cellsDo:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._cells())._collect_((function(row){
return smalltalk.withContext(function($ctx2) {
return _st(row)._collect_((function(cell){
return smalltalk.withContext(function($ctx3) {
return _st(aBlock)._value_(cell);
}, function($ctx3) {$ctx3.fillBlock({cell:cell},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({row:row},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"cellsDo:",{aBlock:aBlock},smalltalk.Map)})},
args: ["aBlock"],
source: "cellsDo: aBlock\x0a\x09self cells collect: [:row |\x0a\x09\x09row collect: [:cell | \x0a\x09\x09\x09aBlock value: cell.\x0a\x09\x09]\x0a\x09]",
messageSends: ["collect:", "value:", "cells"],
referencedClasses: []
}),
smalltalk.Map);

smalltalk.addMethod(
smalltalk.method({
selector: "cellsNextTo:",
category: 'cell-delegate',
fn: function (aCell){
var self=this;
var coods;
return smalltalk.withContext(function($ctx1) { 
var $1;
coods=_st(self)._coodsOf_(aCell);
$1=_st(self)._cellsNextToI_j_(_st(coods)._x(),_st(coods)._y());
return $1;
}, function($ctx1) {$ctx1.fill(self,"cellsNextTo:",{aCell:aCell,coods:coods},smalltalk.Map)})},
args: ["aCell"],
source: "cellsNextTo: aCell\x0a\x09|coods|\x0a\x0a\x09coods := self coodsOf: aCell.\x0a\x09^self cellsNextToI: coods x j: coods y",
messageSends: ["coodsOf:", "cellsNextToI:j:", "x", "y"],
referencedClasses: []
}),
smalltalk.Map);

smalltalk.addMethod(
smalltalk.method({
selector: "cellsNextTo:cycle:",
category: 'cell-delegate',
fn: function (aCell,cycleNumber){
var self=this;
var cellsNext,tempSet;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"cellsNextTo:cycle:",{aCell:aCell,cycleNumber:cycleNumber,cellsNext:cellsNext,tempSet:tempSet},smalltalk.Map)})},
args: ["aCell", "cycleNumber"],
source: "cellsNextTo: aCell cycle: cycleNumber\x0a\x09|cellsNext tempSet|\x0a\x0a\x09\x22issue : Would be able to move/attack through walls. Not used\x22\x0a\x09\x22cellsNext := self cellsNextTo: aCell.\x0a\x09(1 to: (cycleNumber - 1)) do: [\x0a\x09\x09tempSet := Set new.\x0a\x09\x09cellsNext collect: [ :each |\x0a\x09\x09\x09tempSet addAll: (self cellsNextTo: each)\x0a\x09\x09].\x0a\x09\x09cellsNext addAll: tempSet\x0a\x09].\x0a\x09^cellsNext\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.Map);

smalltalk.addMethod(
smalltalk.method({
selector: "cellsNextToI:j:",
category: 'cell-delegate',
fn: function (i,j){
var self=this;
var neighbours;
function $Set(){return smalltalk.Set||(typeof Set=="undefined"?nil:Set)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7,$8,$9,$10;
neighbours=_st($Set())._new();
$1=_st(j).__lt(_st(_st(_st(self)._cells())._at_(i))._size());
if(smalltalk.assert($1)){
_st(neighbours)._add_(_st(_st(_st(self)._cells())._at_(i))._at_(_st(j).__plus((1))));
};
$2=_st(j).__gt((1));
if(smalltalk.assert($2)){
_st(neighbours)._add_(_st(_st(_st(self)._cells())._at_(i))._at_(_st(j).__minus((1))));
};
$3=_st(i).__lt(_st(_st(self)._cells())._size());
if(smalltalk.assert($3)){
_st(neighbours)._add_(_st(_st(_st(self)._cells())._at_(_st(i).__plus((1))))._at_(j));
};
$4=_st(i).__gt((1));
if(smalltalk.assert($4)){
_st(neighbours)._add_(_st(_st(_st(self)._cells())._at_(_st(i).__minus((1))))._at_(j));
};
$5=_st(_st(i).__backslash_backslash((2))).__eq((0));
if(smalltalk.assert($5)){
$8=_st(_st(j).__gt((1))).__and(_st(i).__lt(_st(_st(self)._cells())._size()));
if(smalltalk.assert($8)){
_st(neighbours)._add_(_st(_st(_st(self)._cells())._at_(_st(i).__plus((1))))._at_(_st(j).__minus((1))));
};
$9=_st(_st(j).__gt((1))).__and(_st(i).__gt((1)));
if(smalltalk.assert($9)){
_st(neighbours)._add_(_st(_st(_st(self)._cells())._at_(_st(i).__minus((1))))._at_(_st(j).__minus((1))));
};
} else {
$6=_st(_st(j).__lt(_st(_st(_st(self)._cells())._at_(i))._size())).__and(_st(i).__lt(_st(_st(self)._cells())._size()));
if(smalltalk.assert($6)){
_st(neighbours)._add_(_st(_st(_st(self)._cells())._at_(_st(i).__plus((1))))._at_(_st(j).__plus((1))));
};
$7=_st(_st(j).__lt(_st(_st(_st(self)._cells())._at_(i))._size())).__and(_st(i).__gt((1)));
if(smalltalk.assert($7)){
_st(neighbours)._add_(_st(_st(_st(self)._cells())._at_(_st(i).__minus((1))))._at_(_st(j).__plus((1))));
};
};
$10=neighbours;
return $10;
}, function($ctx1) {$ctx1.fill(self,"cellsNextToI:j:",{i:i,j:j,neighbours:neighbours},smalltalk.Map)})},
args: ["i", "j"],
source: "cellsNextToI: i j: j\x0a\x09|neighbours|\x0a\x09\x0a\x09neighbours := Set new.\x0a\x09(j < (self cells at: i) size) ifTrue: [neighbours add: ((self cells at: i) at: j + 1)].\x0a\x09(j > 1) ifTrue: [neighbours add: ((self cells at: i) at: j - 1)].\x0a\x09(i < self cells size) ifTrue: [neighbours add: ((self cells at: i + 1) at: j)].\x0a\x09(i > 1) ifTrue: [neighbours add: ((self cells at: i - 1) at: j)].\x0a\x09\x0a\x09(i \x5c\x5c 2 = 0) ifFalse: [\x0a\x09\x09((j < (self cells at: i) size) & (i < self cells size)) ifTrue: [neighbours add: ((self cells at: i + 1) at: j + 1)].\x0a\x09\x09((j < (self cells at: i) size) & (i > 1)) ifTrue: [neighbours add: ((self cells at: i - 1) at: j + 1)].\x0a\x09] ifTrue: [\x0a\x09\x09((j > 1) & (i < self cells size)) ifTrue: [neighbours add: ((self cells at: i + 1) at: j - 1)].\x0a\x09\x09((j > 1) & (i > 1)) ifTrue: [neighbours add: ((self cells at: i - 1) at: j - 1)].\x0a\x09].\x0a\x0a\x09^neighbours",
messageSends: ["new", "ifTrue:", "add:", "at:", "+", "cells", "<", "size", "-", ">", "ifFalse:ifTrue:", "&", "=", "\x5c\x5c"],
referencedClasses: ["Set"]
}),
smalltalk.Map);

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
}, function($ctx1) {$ctx1.fill(self,"context",{},smalltalk.Map)})},
args: [],
source: "context\x0a\x09^canvas element getContext: '2d'",
messageSends: ["getContext:", "element"],
referencedClasses: []
}),
smalltalk.Map);

smalltalk.addMethod(
smalltalk.method({
selector: "coods",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@mapCoods"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"coods",{},smalltalk.Map)})},
args: [],
source: "coods\x0a\x09^mapCoods",
messageSends: [],
referencedClasses: []
}),
smalltalk.Map);

smalltalk.addMethod(
smalltalk.method({
selector: "coods:",
category: 'accessing',
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@mapCoods"]=aPoint;
return self}, function($ctx1) {$ctx1.fill(self,"coods:",{aPoint:aPoint},smalltalk.Map)})},
args: ["aPoint"],
source: "coods: aPoint\x0a\x09mapCoods := aPoint",
messageSends: [],
referencedClasses: []
}),
smalltalk.Map);

smalltalk.addMethod(
smalltalk.method({
selector: "coodsOf:",
category: 'cell-delegate',
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
var $early={};
try {
_st(_st(self)._cells())._withIndexDo_((function(row,i){
return smalltalk.withContext(function($ctx2) {
return _st(row)._withIndexDo_((function(cell,j){
return smalltalk.withContext(function($ctx3) {
$1=_st(cell).__eq(aCell);
if(smalltalk.assert($1)){
$2=_st(i).__at(j);
throw $early=[$2];
};
}, function($ctx3) {$ctx3.fillBlock({cell:cell,j:j},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({row:row,i:i},$ctx1)})}));
return self}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"coodsOf:",{aCell:aCell},smalltalk.Map)})},
args: ["aCell"],
source: "coodsOf: aCell\x0a\x09self cells withIndexDo: [:row :i |\x0a\x09\x09row withIndexDo: [ :cell :j |\x0a\x09\x09\x09(cell = aCell) ifTrue:[^i @ j]\x0a\x09\x09]\x0a\x09]",
messageSends: ["withIndexDo:", "ifTrue:", "@", "=", "cells"],
referencedClasses: []
}),
smalltalk.Map);

smalltalk.addMethod(
smalltalk.method({
selector: "currentCell:",
category: 'accessing',
fn: function (anEvent){
var self=this;
var x,y,cood;
function $Error(){return smalltalk.Error||(typeof Error=="undefined"?nil:Error)}
return smalltalk.withContext(function($ctx1) { 
var $1;
x=_st(_st(anEvent)._pageX()).__minus(_st(_st(_st(self)._canvas())._element())._offsetLeft());
y=_st(_st(anEvent)._pageY()).__minus(_st(_st(_st(self)._canvas())._element())._offsetTop());
cood=_st(self)._mouseCoodToHexCoodX_y_(x,y);
$1=_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(_st(self)._cells())._at_(_st(cood)._x()))._at_(_st(cood)._y());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._on_do_($Error(),(function(){
return smalltalk.withContext(function($ctx2) {
return nil;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"currentCell:",{anEvent:anEvent,x:x,y:y,cood:cood},smalltalk.Map)})},
args: ["anEvent"],
source: "currentCell: anEvent\x0a\x09|x y cood|\x0a\x09\x0a        x := anEvent pageX - self canvas element offsetLeft.\x0a        y := anEvent pageY - self canvas element offsetTop.\x0a\x0a        cood := self mouseCoodToHexCoodX: x y: y.\x0a\x09\x0a\x09\x22if out of map then nil\x22\x0a\x09^[(self cells at: cood x) at: cood y] on: Error do: [nil].",
messageSends: ["-", "offsetLeft", "element", "canvas", "pageX", "offsetTop", "pageY", "mouseCoodToHexCoodX:y:", "on:do:", "at:", "y", "x", "cells"],
referencedClasses: ["Error"]
}),
smalltalk.Map);

smalltalk.addMethod(
smalltalk.method({
selector: "goDown",
category: 'eventHandling',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._coods_(_st(_st(self)._coods()).__plus(_st((0)).__at((100))));
_st(self)._updateCellsCoods();
_st(self)._update();
return self}, function($ctx1) {$ctx1.fill(self,"goDown",{},smalltalk.Map)})},
args: [],
source: "goDown\x0a\x09self coods: self coods + (0 @ 100).\x0a\x09self updateCellsCoods.\x0a\x09self update",
messageSends: ["coods:", "+", "@", "coods", "updateCellsCoods", "update"],
referencedClasses: []
}),
smalltalk.Map);

smalltalk.addMethod(
smalltalk.method({
selector: "goLeft",
category: 'eventHandling',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._coods_(_st(_st(self)._coods()).__minus(_st((100)).__at((0))));
_st(self)._updateCellsCoods();
_st(self)._update();
return self}, function($ctx1) {$ctx1.fill(self,"goLeft",{},smalltalk.Map)})},
args: [],
source: "goLeft\x0a\x09self coods: self coods - (100 @ 0).\x0a\x09self updateCellsCoods.\x0a\x09self update",
messageSends: ["coods:", "-", "@", "coods", "updateCellsCoods", "update"],
referencedClasses: []
}),
smalltalk.Map);

smalltalk.addMethod(
smalltalk.method({
selector: "goRight",
category: 'eventHandling',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._coods_(_st(_st(self)._coods()).__plus(_st((100)).__at((0))));
_st(self)._updateCellsCoods();
_st(self)._update();
return self}, function($ctx1) {$ctx1.fill(self,"goRight",{},smalltalk.Map)})},
args: [],
source: "goRight\x0a\x09self coods: self coods + (100 @ 0).\x0a\x09self updateCellsCoods.\x0a\x09self update",
messageSends: ["coods:", "+", "@", "coods", "updateCellsCoods", "update"],
referencedClasses: []
}),
smalltalk.Map);

smalltalk.addMethod(
smalltalk.method({
selector: "goUp",
category: 'eventHandling',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._coods_(_st(_st(self)._coods()).__minus(_st((0)).__at((100))));
_st(self)._updateCellsCoods();
_st(self)._update();
return self}, function($ctx1) {$ctx1.fill(self,"goUp",{},smalltalk.Map)})},
args: [],
source: "goUp\x0a\x09self coods: self coods - (0 @ 100).\x0a\x09self updateCellsCoods.\x0a\x09self update",
messageSends: ["coods:", "-", "@", "coods", "updateCellsCoods", "update"],
referencedClasses: []
}),
smalltalk.Map);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function (){
var self=this;
function $HTMLCanvas(){return smalltalk.HTMLCanvas||(typeof HTMLCanvas=="undefined"?nil:HTMLCanvas)}
function $TagBrush(){return smalltalk.TagBrush||(typeof TagBrush=="undefined"?nil:TagBrush)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.Object.fn.prototype._initialize.apply(_st(self), []);
_st(self)._canvas_(_st($TagBrush())._fromJQuery_canvas_(_st(_st(self)._canvasId())._asJQuery(),_st($HTMLCanvas())._onJQuery_(_st("body")._asJQuery())));
_st(self)._coods_(_st(_st(self)._canvasPadding()).__at(_st(self)._canvasPadding()));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.Map)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x0a\x09\x22set html5 canvas to map canvas\x22\x0a\x09self canvas: (TagBrush fromJQuery: self canvasId asJQuery canvas: (HTMLCanvas onJQuery: 'body' asJQuery)).\x0a\x09self coods: self canvasPadding @ self canvasPadding.",
messageSends: ["initialize", "canvas:", "fromJQuery:canvas:", "asJQuery", "canvasId", "onJQuery:", "coods:", "@", "canvasPadding"],
referencedClasses: ["HTMLCanvas", "TagBrush"]
}),
smalltalk.Map);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeCache",
category: 'initialize-release',
fn: function (){
var self=this;
function $Cache(){return smalltalk.Cache||(typeof Cache=="undefined"?nil:Cache)}
return smalltalk.withContext(function($ctx1) { 
_st(self)._cache_(_st($Cache())._getSingleton());
_st(_st(self)._cache())._onload_((function(){
return smalltalk.withContext(function($ctx2) {
_st(self)._update();
_st(_st(_st(self)._actionMenu())._turnWatcher())._firstTurn();
return _st(_st(".loading")._asJQuery())._animate_duration_(smalltalk.HashedCollection._fromPairs_([_st("top").__minus_gt("-60%")]),(2500));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(_st(_st(self)._cache())._images())._preloadImages_(_st(self)._imagesToPreload());
return self}, function($ctx1) {$ctx1.fill(self,"initializeCache",{},smalltalk.Map)})},
args: [],
source: "initializeCache\x0a\x09\x0a\x09\x22cache initializing\x22\x0a\x09self cache: Cache getSingleton.\x0a\x09self cache onload: [\x0a\x09\x09\x09self update. \x0a\x09\x09\x09self actionMenu turnWatcher firstTurn.\x0a\x09\x09\x09'.loading' asJQuery animate: #{ 'top' -> '-60%'} duration: 2500].\x0a\x0a\x09self cache images preloadImages: self imagesToPreload",
messageSends: ["cache:", "getSingleton", "onload:", "update", "firstTurn", "turnWatcher", "actionMenu", "animate:duration:", "->", "asJQuery", "cache", "preloadImages:", "imagesToPreload", "images"],
referencedClasses: ["Cache"]
}),
smalltalk.Map);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeCellsFromJson:",
category: 'initialize-release',
fn: function (jsonObject){
var self=this;
var cood;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
function $Cell(){return smalltalk.Cell||(typeof Cell=="undefined"?nil:Cell)}
return smalltalk.withContext(function($ctx1) { 
_st(self)._cells_(_st($Array())._new_(_st(_st(jsonObject)._row())._size()));
_st(_st(jsonObject)._row())._withIndexDo_((function(row,i){
return smalltalk.withContext(function($ctx2) {
_st(_st(self)._cells())._at_put_(i,_st($Array())._new_(_st(_st(row)._cells())._size()));
return _st(_st(row)._cells())._withIndexDo_((function(cell,j){
return smalltalk.withContext(function($ctx3) {
cood=_st(self)._calculX_y_(i,j);
cood;
return _st(_st(_st(self)._cells())._at_(i))._at_put_(j,_st($Cell())._newInMap_jsoncell_coods_(self,cell,cood));
}, function($ctx3) {$ctx3.fillBlock({cell:cell,j:j},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({row:row,i:i},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initializeCellsFromJson:",{jsonObject:jsonObject,cood:cood},smalltalk.Map)})},
args: ["jsonObject"],
source: "initializeCellsFromJson: jsonObject\x0a\x09|cood|\x0a\x0a\x09self cells: (Array new: (jsonObject row size)).\x0a\x09jsonObject row withIndexDo: [:row :i |\x0a\x09\x09self cells at: i put: (Array new: (row cells size)).\x0a\x09\x09row cells withIndexDo: [ :cell :j |\x0a\x09\x09\x09cood := self calculX: i y: j.\x0a\x09\x09\x09(self cells at: i) at: j put: (Cell newInMap: self jsoncell: cell coods: cood)\x0a\x09\x09]\x0a\x09]",
messageSends: ["cells:", "new:", "size", "row", "withIndexDo:", "at:put:", "cells", "calculX:y:", "newInMap:jsoncell:coods:", "at:"],
referencedClasses: ["Array", "Cell"]
}),
smalltalk.Map);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeEventHandling",
category: 'initialize-release',
fn: function (){
var self=this;
var canvasMouse;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._canvas())._onMouseUp_((function(e){
return smalltalk.withContext(function($ctx2) {
return _st(self)._mouseClick_(e);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
_st(_st(self)._canvas())._onMouseMove_((function(e){
return smalltalk.withContext(function($ctx2) {
return _st(self)._mouseMove_(e);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
_st(_st("window")._asJQuery())._resize_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self)._update();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initializeEventHandling",{canvasMouse:canvasMouse},smalltalk.Map)})},
args: [],
source: "initializeEventHandling\x0a\x09|canvasMouse|\x0a\x09\x22onMouseUp instead of onClick for performance purpose\x22\x0a\x09self canvas onMouseUp: [:e | self mouseClick: e].\x0a\x09self canvas onMouseMove: [:e | self mouseMove: e].\x0a\x09\x0a\x09'window' asJQuery resize: [self update].",
messageSends: ["onMouseUp:", "mouseClick:", "canvas", "onMouseMove:", "mouseMove:", "resize:", "update", "asJQuery"],
referencedClasses: []
}),
smalltalk.Map);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeFromJson:",
category: 'initialize-release',
fn: function (jsonObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._initializeCache();
_st(_st(self)._coods())._x_(_st(_st(_st(self)._coods())._x()).__plus(_st(_st(_st(_st(_st(_st(jsonObject)._row())._at_((1)))._cells())._size()).__star(_st(self)._tileUnit())).__star((1.17))));
_st(self)._initializeCellsFromJson_(jsonObject);
_st(self)._initializeEventHandling();
_st(self)._actionMenu_(_st(self)._initializeActionMenu());
_st(_st(self)._actionMenu())._appendToJQuery_(_st(".menuEditor")._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"initializeFromJson:",{jsonObject:jsonObject},smalltalk.Map)})},
args: ["jsonObject"],
source: "initializeFromJson: jsonObject\x0a\x09\x0a\x09self initializeCache.\x0a\x09\x0a\x09\x22mapX adjustment according to mapSize\x22\x0a\x09self coods x: self coods x + ((jsonObject row at:1) cells size * self tileUnit * 1.17).\x0a\x0a\x09\x22cells initializing\x22\x0a\x09self initializeCellsFromJson: jsonObject.\x0a\x09\x0a\x09\x22events management\x22\x0a\x09self initializeEventHandling.\x0a\x0a\x09\x22menu initializing\x22\x0a\x09self actionMenu: self initializeActionMenu.\x0a\x09self actionMenu appendToJQuery: '.menuEditor' asJQuery.",
messageSends: ["initializeCache", "x:", "+", "*", "tileUnit", "size", "cells", "at:", "row", "x", "coods", "initializeCellsFromJson:", "initializeEventHandling", "actionMenu:", "initializeActionMenu", "appendToJQuery:", "asJQuery", "actionMenu"],
referencedClasses: []
}),
smalltalk.Map);

smalltalk.addMethod(
smalltalk.method({
selector: "mirrorHorizontal",
category: 'eventHandling',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(_st(_st(self)._canvas())._element())._getContext_("2d");
_st($1)._translate_y_(_st(_st(_st(self)._canvas())._element())._width(),(0));
$2=_st($1)._scale_y_(_st((1))._negated(),(1));
_st(self)._update();
return self}, function($ctx1) {$ctx1.fill(self,"mirrorHorizontal",{},smalltalk.Map)})},
args: [],
source: "mirrorHorizontal\x0a\x09(self canvas element getContext: '2d') translate: self canvas element width y: 0;\x0a\x09\x09scale: 1 negated y: 1.\x0a\x09self update.",
messageSends: ["translate:y:", "width", "element", "canvas", "getContext:", "scale:y:", "negated", "update"],
referencedClasses: []
}),
smalltalk.Map);

smalltalk.addMethod(
smalltalk.method({
selector: "mirrorVertical",
category: 'eventHandling',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(_st(_st(self)._canvas())._element())._getContext_("2d");
_st($1)._translate_y_((0),_st(_st(_st(self)._canvas())._element())._height());
$2=_st($1)._scale_y_((1),_st((1))._negated());
_st(self)._update();
return self}, function($ctx1) {$ctx1.fill(self,"mirrorVertical",{},smalltalk.Map)})},
args: [],
source: "mirrorVertical\x0a\x09(self canvas element getContext: '2d') translate: 0 y: self canvas element height;\x0a\x09\x09scale: 1 y: 1 negated.\x0a\x09self update.",
messageSends: ["translate:y:", "height", "element", "canvas", "getContext:", "scale:y:", "negated", "update"],
referencedClasses: []
}),
smalltalk.Map);

smalltalk.addMethod(
smalltalk.method({
selector: "monsters",
category: 'selection',
fn: function (){
var self=this;
var monsters;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
monsters=_st($Array())._new();
_st(self)._cellsDo_((function(cell){
return smalltalk.withContext(function($ctx2) {
$1=_st(cell)._hasMonster();
if(smalltalk.assert($1)){
return _st(monsters)._add_(_st(cell)._monster());
};
}, function($ctx2) {$ctx2.fillBlock({cell:cell},$ctx1)})}));
$2=monsters;
return $2;
}, function($ctx1) {$ctx1.fill(self,"monsters",{monsters:monsters},smalltalk.Map)})},
args: [],
source: "monsters\x0a\x09|monsters|\x0a\x09monsters := Array new.\x0a\x09self cellsDo: [:cell |\x0a\x09\x09\x09cell hasMonster ifTrue: [monsters add: cell monster]\x0a\x09].\x0a\x09^monsters",
messageSends: ["new", "cellsDo:", "ifTrue:", "add:", "monster", "hasMonster"],
referencedClasses: ["Array"]
}),
smalltalk.Map);

smalltalk.addMethod(
smalltalk.method({
selector: "monstersFromSide:",
category: 'selection',
fn: function (aSide){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._monsters())._select_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(each)._side()).__eq(aSide);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"monstersFromSide:",{aSide:aSide},smalltalk.Map)})},
args: ["aSide"],
source: "monstersFromSide: aSide\x0a\x09^self monsters select: [:each | each side = aSide].",
messageSends: ["select:", "=", "side", "monsters"],
referencedClasses: []
}),
smalltalk.Map);

smalltalk.addMethod(
smalltalk.method({
selector: "mouseClick:",
category: 'eventHandling',
fn: function (anEvent){
var self=this;
var cc;
return smalltalk.withContext(function($ctx1) { 
var $1;
cc=_st(self)._currentCell_(anEvent);
$1=cc;
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
_st(cc)._mouseClick_(_st(_st(self)._actionMenu())._actionCell());
};
_st(self)._update();
return self}, function($ctx1) {$ctx1.fill(self,"mouseClick:",{anEvent:anEvent,cc:cc},smalltalk.Map)})},
args: ["anEvent"],
source: "mouseClick: anEvent\x0a\x09|cc|\x0a\x09cc := self currentCell: anEvent.\x0a\x09cc ifNotNil: [ \x0a\x09\x09cc mouseClick: self actionMenu actionCell\x0a\x09].\x0a\x09self update",
messageSends: ["currentCell:", "ifNotNil:", "mouseClick:", "actionCell", "actionMenu", "update"],
referencedClasses: []
}),
smalltalk.Map);

smalltalk.addMethod(
smalltalk.method({
selector: "mouseCoodToHexCoodX:y:",
category: 'eventHandling',
fn: function (x,y){
var self=this;
var xHex,yHex,array,mapDisplayX,mapDisplayY;
return smalltalk.withContext(function($ctx1) { 
var $1;
mapDisplayX=_st(_st(self)._coods())._x();
mapDisplayY=_st(_st(self)._coods())._y();
array=_st(self)._mouseCoodToHexCoodX_y_mapX_mapY_(x,y,mapDisplayX,mapDisplayY);
xHex=_st(array)._at_((1));
yHex=_st(array)._at_((2));
$1=_st(xHex).__at(yHex);
return $1;
}, function($ctx1) {$ctx1.fill(self,"mouseCoodToHexCoodX:y:",{x:x,y:y,xHex:xHex,yHex:yHex,array:array,mapDisplayX:mapDisplayX,mapDisplayY:mapDisplayY},smalltalk.Map)})},
args: ["x", "y"],
source: "mouseCoodToHexCoodX: x y: y\x0a\x09\x22function that take mouse cood in pixel and return the coods of the tile selected\x22\x0a\x09\x0a\x09\x22there are issues from Amber kernel : the order of operations sometimes goes wrong in long lines :  inline compiler issue\x22\x0a\x09\x22so this algo is back to javascript. Moreover js make it faster\x22\x0a\x0a\x09| xHex yHex array mapDisplayX mapDisplayY|\x0a                \x0a\x09mapDisplayX := self coods x.\x0a\x09mapDisplayY := self coods y.\x0a\x0a\x09array:= self mouseCoodToHexCoodX: x y: y mapX: mapDisplayX mapY: mapDisplayY.\x0a    \x0a    xHex := array at: 1.\x0a    yHex := array at: 2.\x0a    \x0a\x09^xHex @ yHex.",
messageSends: ["x", "coods", "y", "mouseCoodToHexCoodX:y:mapX:mapY:", "at:", "@"],
referencedClasses: []
}),
smalltalk.Map);

smalltalk.addMethod(
smalltalk.method({
selector: "mouseCoodToHexCoodX:y:mapX:mapY:",
category: 'eventHandling',
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
return self}, function($ctx1) {$ctx1.fill(self,"mouseCoodToHexCoodX:y:mapX:mapY:",{x:x,y:y,mapDisplayX:mapDisplayX,mapDisplayY:mapDisplayY},smalltalk.Map)})},
args: ["x", "y", "mapDisplayX", "mapDisplayY"],
source: "mouseCoodToHexCoodX: x y: y mapX: mapDisplayX mapY: mapDisplayY\x0a\x09\x22function that take mouse cood in pixel and return the coods of the tile selected\x22\x0a\x09\x22so this algo is back to javascript. Moreover js make it faster\x22\x0a\x0a\x09\x09<function mod(n, mod) {\x0a\x09\x09\x09return ((mod+(n%mod))%mod);\x0a\x09\x09}\x0a\x0a\x09\x09var cosmaingridx = 0.882947593;\x0a\x09\x09var sinmaingridx = 0.469471563;\x0a\x09\x09var cosmaingridy = -0.130526192;\x0a\x09\x09var sinmaingridy = 0.991444861;\x0a\x09\x09\x0a\x09\x09var cosothergridx = 0.4539905;\x0a\x09\x09var sinothergridx = 0.891006524;\x0a\x09\x09var cosothergridy = -0.882947593;\x0a\x09\x09var sinothergridy = 0.469471563;\x0a\x09\x09\x0a\x09\x09var nb = Math.floor(((y-(cosmaingridx/sinmaingridx)*x-(mapDisplayY+0)+(cosmaingridx/sinmaingridx)*(mapDisplayX+320))/(55*cosmaingridx)));\x0a\x09\x09var nb2 = Math.floor(((y-(cosmaingridy/sinmaingridy)*x-(mapDisplayY+480)+(cosmaingridy/sinmaingridy)*(mapDisplayX+206))/(173.2*cosmaingridy)));\x0a\x09\x09\x0a\x09\x09var xConstante = 9 + (mod(nb,3));\x0a\x09\x09var yConstante = 20 + (mod(nb2,2));\x0a\x09\x09if (nb2%2 == 0) {yConstante += mod(nb+1,2);}\x0a\x09\x09\x0a\x09\x09xHex = Math.floor(((xConstante-nb)/6)+((yConstante-nb2)/2));\x0a\x09\x09yHex = Math.floor(((nb-xConstante)/4)+((yConstante-nb2)/4));\x0a\x09\x09\x0a\x09\x09if (mod(nb,6)==1 && nb2%2==0){\x0a\x09\x09\x09xHex++;\x0a\x09\x09\x09if (nb2%4==0 && mod(nb,12)!=7){yHex++;}\x0a\x09\x09\x09if (mod(nb2,4)==2 && mod(nb,12)==7){yHex++;}\x0a\x09\x09}\x0a\x09\x09\x0a\x09\x09if (nb%3==0) {\x09\x09\x0a\x09\x09\x09if ((nb2%2==0 && nb%6==0) || (mod(nb2,2)==1 && mod(nb,6)==3)) {\x0a\x09\x09\x09\x09var nb3 = Math.floor(((y-(cosothergridx/sinothergridx)*x-(mapDisplayY+0)+(cosothergridx/sinothergridx)*(mapDisplayX+301))/(68*cosothergridx)));\x0a\x09\x09\x09\x09var nbCheck = 3+2*yHex+(xHex%2);\x0a\x09\x09\x09\x09if (nb3 == nbCheck) {yHex--;}\x0a\x09\x09\x09}\x0a\x09\x09\x09else {\x0a\x09\x09\x09\x09var nb4 = Math.floor(((y-(cosothergridy/sinothergridy)*x-(mapDisplayY+480)+(cosothergridy/sinothergridy)*(mapDisplayX+212.5))/(95.75*cosothergridy)));\x0a\x09\x09\x09\x09var nbCheck = 7-Math.floor(3*xHex/2)+yHex;\x0a\x09\x09\x09\x09if (nb4 == nbCheck) {\x0a\x09\x09\x09\x09\x09if (xHex%2 == 0) {yHex--;}\x0a\x09\x09\x09\x09\x09xHex++;\x0a\x09\x09\x09\x09}\x0a\x09\x09\x09}\x0a\x09\x09}\x0a        var a = new Array(2);\x0a        a[0] = xHex;\x0a        a[1] = yHex;\x0a        return a>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Map);

smalltalk.addMethod(
smalltalk.method({
selector: "mouseMove:",
category: 'eventHandling',
fn: function (anEvent){
var self=this;
var cc;
return smalltalk.withContext(function($ctx1) { 
var $1;
cc=_st(self)._currentCell_(anEvent);
$1=cc;
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
_st(_st(_st(_st(self)._actionMenu())._tileWatcher())._tile_(_st(cc)._tile()))._update();
};
return self}, function($ctx1) {$ctx1.fill(self,"mouseMove:",{anEvent:anEvent,cc:cc},smalltalk.Map)})},
args: ["anEvent"],
source: "mouseMove: anEvent\x0a\x09|cc|\x0a\x0a\x09\x22to refactor\x22\x0a\x09cc := self currentCell: anEvent.\x0a\x09cc ifNotNil: [ \x0a\x09\x09(self actionMenu tileWatcher tile: cc tile) update\x0a\x09].",
messageSends: ["currentCell:", "ifNotNil:", "update", "tile:", "tile", "tileWatcher", "actionMenu"],
referencedClasses: []
}),
smalltalk.Map);

smalltalk.addMethod(
smalltalk.method({
selector: "movableCellsNextTo:",
category: 'cell-delegate',
fn: function (aCell){
var self=this;
var movableCells;
return smalltalk.withContext(function($ctx1) { 
var $1;
movableCells=_st(_st(self)._cellsNextTo_(aCell))._select_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._canMoveTo();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
_st(movableCells)._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
_st(each)._addSelector();
return _st(each)._prevCell_(aCell);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$1=movableCells;
return $1;
}, function($ctx1) {$ctx1.fill(self,"movableCellsNextTo:",{aCell:aCell,movableCells:movableCells},smalltalk.Map)})},
args: ["aCell"],
source: "movableCellsNextTo: aCell\x0a\x09|movableCells|\x0a\x09movableCells := (self cellsNextTo: aCell) select: [:each | \x0a\x09\x09\x09\x09\x09each canMoveTo].\x0a\x09movableCells collect: [:each |\x0a\x09\x09\x09each addSelector.\x0a\x09\x09\x09each prevCell: aCell].\x0a\x09^movableCells",
messageSends: ["select:", "canMoveTo", "cellsNextTo:", "collect:", "addSelector", "prevCell:"],
referencedClasses: []
}),
smalltalk.Map);

smalltalk.addMethod(
smalltalk.method({
selector: "movableCellsNextTo:cycle:",
category: 'cell-delegate',
fn: function (aCell,cycleNumber){
var self=this;
var movableCells,tempSet;
function $Set(){return smalltalk.Set||(typeof Set=="undefined"?nil:Set)}
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(self)._removeSelection();
movableCells=_st(self)._movableCellsNextTo_(aCell);
_st(_st((1))._to_(_st(cycleNumber).__minus((1))))._do_((function(){
return smalltalk.withContext(function($ctx2) {
tempSet=_st($Set())._new();
tempSet;
_st(movableCells)._collect_((function(each){
return smalltalk.withContext(function($ctx3) {
return _st(tempSet)._addAll_(_st(self)._movableCellsNextTo_(each));
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx1)})}));
return _st(movableCells)._addAll_(tempSet);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$1=movableCells;
return $1;
}, function($ctx1) {$ctx1.fill(self,"movableCellsNextTo:cycle:",{aCell:aCell,cycleNumber:cycleNumber,movableCells:movableCells,tempSet:tempSet},smalltalk.Map)})},
args: ["aCell", "cycleNumber"],
source: "movableCellsNextTo: aCell cycle: cycleNumber\x0a\x09|movableCells tempSet|\x0a\x0a\x09self removeSelection.\x0a\x0a\x09movableCells := self movableCellsNextTo: aCell.\x0a\x09(1 to: (cycleNumber - 1)) do: [\x0a\x09\x09tempSet := Set new.\x0a\x09\x09movableCells collect: [ :each |\x0a\x09\x09\x09tempSet addAll: (self movableCellsNextTo: each)\x0a\x09\x09].\x0a\x09\x09movableCells addAll: tempSet\x0a\x09].\x0a\x0a\x09^movableCells",
messageSends: ["removeSelection", "movableCellsNextTo:", "do:", "new", "collect:", "addAll:", "to:", "-"],
referencedClasses: ["Set"]
}),
smalltalk.Map);

smalltalk.addMethod(
smalltalk.method({
selector: "oldAlgoMouseCoodToHexCoodX:y:inMap:",
category: 'eventHandling',
fn: function (x,y,aMap){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"oldAlgoMouseCoodToHexCoodX:y:inMap:",{x:x,y:y,aMap:aMap},smalltalk.Map)})},
args: ["x", "y", "aMap"],
source: "oldAlgoMouseCoodToHexCoodX: x y: y inMap: aMap\x0a\x09\x22function that take mouse cood in pixel and return the coods of the tile selected\x22\x0a\x09\x0a\x09\x22there are issues from Amber kernel : the order of operations sometimes goes wrong in long lines\x22\x0a\x09\x22so this algo is back to javascript\x22\x0a\x0a\x09\x22| xHex yHex cosmaingridx sinmaingridx cosmaingridy sinmaingridy cosothergridx sinothergridx cosothergridy sinothergridy nb nb2 nb3 nb4 nbCheck xConstante yConstante mapX mapY res temp1 temp2 k m|\x0a\x09cosmaingridx := 0.882947593.\x0a\x09sinmaingridx := 0.469471563.\x0a\x09cosmaingridy := 0.130526192 negated.\x0a\x09sinmaingridy := 0.991444861.\x0a\x0a\x09cosothergridx := 0.4539905.\x0a\x09sinothergridx := 0.891006524.\x0a\x09cosothergridy := 0.882947593 negated.\x0a\x09sinothergridy := 0.469471563.\x0a                \x0a\x09mapX := aMap mapX.\x0a\x09mapY := aMap mapY.\x0a\x09\x0a\x09nb := (y-(cosmaingridx/sinmaingridx*x)-mapY+0+(cosmaingridx/sinmaingridx*(mapX+320))/((55*cosmaingridx))) floor.\x0a\x09nb2 := (y-(cosmaingridy/sinmaingridy*x)-mapY+480+(cosmaingridy/sinmaingridy*(mapX+206))/(173.2*cosmaingridy)) floor.\x22\x0a\x09\x0a\x09\x22temp1 := cosmaingridx/sinmaingridx.\x0a\x09temp2 := cosmaingridy/sinmaingridy.\x0a\x09\x0a\x09k := 55*cosmaingridx.\x0a\x09m := 173.2*cosmaingridy.\x22\x0a\x0a\x09\x22nb pb vient du denominateur a calculer avant\x22\x0a\x09\x22nb2 probleme d'origine inconnu\x22\x0a\x09\x22nb := (((y-(temp1*x)-mapY+(temp1*(mapX+320)))/(k))) floor.\x0a\x09nb2 := (((y-(temp2*x)-mapY+480+(temp2*(mapX+206)))/(m))) floor.\x0a\x09\x0a\x09Transcript show: 'ST : nb',nb,'---nb2',nb2.\x0a\x09Transcript show: 'ST : k',k,'---m',m.\x0a\x09Transcript show: 'ST : t1',temp1,'---t2',temp2; cr.\x22\x0a\x0a\x09\x22<temp1 = cosmaingridx/sinmaingridx;\x0a\x09temp2 = cosmaingridy/sinmaingridy;\x0a\x09k = 55*cosmaingridx;\x0a\x09m = 173.2*cosmaingridy;>\x22\x0a\x09\x22<nb = Math.floor(((y-(temp1)*x-(mapY+0)+(temp1)*(mapX+320))/(k)));\x0a\x09nb2 = Math.floor(((y-(temp2)*x-(mapY+480)+(temp2)*(mapX+206))/(m)));>.\x22\x0a\x0a\x09\x22Transcript show: 'JS : nb',nb,'---nb2',nb2.\x0a\x09Transcript show: 'JS : k',k,'---m',m.\x0a\x09Transcript show: 'JS : t1',temp1,'---t2',temp2; cr.\x22\x0a\x0a\x09\x22xConstante := 9 + (nb mod: 3).\x0a\x09yConstante := 20 + (nb2 mod: 2).\x0a\x09(nb2\x5c\x5c2 = 0) ifTrue:[yConstante := yConstante + ((nb+1) mod: 2)].\x0a\x09\x0a\x09xHex := (xConstante-nb/6+(yConstante-nb2/2)) floor.\x0a\x09yHex := (nb-xConstante/4+(yConstante-nb2/4)) floor.\x0a\x09\x0a\x09(((nb mod: 6)=1) & ((nb2 \x5c\x5c 2)=0)) ifTrue:[\x0a\x09\x09xHex := xHex + 1.\x0a\x09\x09(((nb2 \x5c\x5c 4)=0) & (((nb mod: 12)=7) not)) ifTrue:[yHex := yHex + 1].\x0a\x09\x09(((nb2 mod: 4)=2) & ((nb mod: 12)=7)) ifTrue:[yHex := yHex + 1].\x0a\x09].\x0a\x09\x0a\x09((nb \x5c\x5c 3) = 0) ifTrue:[       \x0a\x09\x09((((nb2 \x5c\x5c 2) = 0) & ((nb \x5c\x5c 6)=0)) | (((nb2 mod: 2)=1) & ((nb mod: 6)=3))) ifTrue:[\x0a\x09\x09\x09nb3 := ((y-(cosothergridx/sinothergridx)*x-(mapY+0)+(cosothergridx/sinothergridx)*(mapX+301))/(68*cosothergridx)) floor.\x0a\x09\x09\x09nbCheck := 3 + (2 * yHex) +(xHex \x5c\x5c 2).\x0a\x09\x09\x09(nb3 = nbCheck) ifTrue:[yHex := yHex - 1].\x0a\x09\x09]\x0a\x09\x09ifFalse:[\x0a\x09\x09\x09nb4 :=((y-(cosothergridy/sinothergridy)*x-(mapY+480)+(cosothergridy/sinothergridy)*(mapX+212.5))/(95.75*cosothergridy)) floor.\x0a\x09\x09\x09nbCheck := 7 -((3*xHex/2) floor) + yHex.\x0a\x09\x09\x09(nb4 = nbCheck) ifTrue:[\x0a\x09\x09\x09\x09((xHex \x5c\x5c 2) = 0) ifTrue:[yHex := yHex - 1].\x0a\x09\x09\x09\x09xHex := xHex + 1.\x0a\x09\x09\x09].\x0a\x09\x09].\x0a\x09].\x0a\x09\x0a\x09res := Array with: xHex with: yHex.\x0a\x09\x0a\x09^res\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.Map);

smalltalk.addMethod(
smalltalk.method({
selector: "printString",
category: 'printing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(_st("Map (").__comma(_st(_st(self)._cells())._size())).__comma("x")).__comma(_st(_st(_st(self)._cells())._at_((1)))._size())).__comma(")");
return $1;
}, function($ctx1) {$ctx1.fill(self,"printString",{},smalltalk.Map)})},
args: [],
source: "printString\x0a\x09^'Map (' , self cells size , 'x' , (self cells at: 1) size, ')'",
messageSends: [",", "size", "at:", "cells"],
referencedClasses: []
}),
smalltalk.Map);

smalltalk.addMethod(
smalltalk.method({
selector: "removeSelection",
category: 'selection',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._cellsDo_((function(cell){
return smalltalk.withContext(function($ctx2) {
return _st(cell)._removeSelector();
}, function($ctx2) {$ctx2.fillBlock({cell:cell},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"removeSelection",{},smalltalk.Map)})},
args: [],
source: "removeSelection\x0a\x09self cellsDo: [:cell |\x0a\x09\x09cell removeSelector]",
messageSends: ["cellsDo:", "removeSelector"],
referencedClasses: []
}),
smalltalk.Map);

smalltalk.addMethod(
smalltalk.method({
selector: "selectableCellsNextTo:side:cycle:",
category: 'cell-delegate',
fn: function (aCell,aSide,cycleNumber){
var self=this;
var selectableCells,tempSet;
function $Set(){return smalltalk.Set||(typeof Set=="undefined"?nil:Set)}
return smalltalk.withContext(function($ctx1) { 
var $1;
selectableCells=_st(self)._movableCellsNextTo_cycle_(aCell,cycleNumber);
tempSet=_st($Set())._new();
_st(selectableCells)._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(tempSet)._addAll_(_st(self)._attackableCellsNextTo_side_(each,aSide));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
_st(selectableCells)._addAll_(tempSet);
_st(selectableCells)._addAll_(_st(self)._attackableCellsNextTo_side_(aCell,aSide));
$1=selectableCells;
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectableCellsNextTo:side:cycle:",{aCell:aCell,aSide:aSide,cycleNumber:cycleNumber,selectableCells:selectableCells,tempSet:tempSet},smalltalk.Map)})},
args: ["aCell", "aSide", "cycleNumber"],
source: "selectableCellsNextTo: aCell side: aSide cycle: cycleNumber\x0a\x09|selectableCells tempSet|\x0a\x0a\x09\x22movable cells\x22\x0a\x09selectableCells := self movableCellsNextTo: aCell cycle: cycleNumber.\x0a\x0a\x09\x22all attackable cells from any movable cell\x22\x0a\x09tempSet := Set new.\x0a\x09\x09selectableCells collect: [ :each |\x0a\x09\x09\x09tempSet addAll: (self attackableCellsNextTo: each side: aSide)\x0a\x09\x09].\x0a\x09selectableCells addAll: tempSet.\x0a\x0a\x09\x22cell attackable from departure\x22\x0a\x09selectableCells addAll: (self attackableCellsNextTo: aCell side: aSide).\x0a\x0a\x09^selectableCells",
messageSends: ["movableCellsNextTo:cycle:", "new", "collect:", "addAll:", "attackableCellsNextTo:side:"],
referencedClasses: ["Set"]
}),
smalltalk.Map);

smalltalk.addMethod(
smalltalk.method({
selector: "showActiveMonsters",
category: 'selection',
fn: function (){
var self=this;
function $Inactive(){return smalltalk.Inactive||(typeof Inactive=="undefined"?nil:Inactive)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st(self)._removeSelection();
_st(self)._cellsDo_((function(cell){
return smalltalk.withContext(function($ctx2) {
$1=_st(cell)._monster();
if(($receiver = $1) == nil || $receiver == undefined){
return $1;
} else {
$2=_st(_st(_st(cell)._monster())._state())._isKindOf_($Inactive());
if(! smalltalk.assert($2)){
return _st(cell)._addSelectorColored_("white");
};
};
}, function($ctx2) {$ctx2.fillBlock({cell:cell},$ctx1)})}));
_st(_st(self)._actionMenu())._unshowMonster();
return self}, function($ctx1) {$ctx1.fill(self,"showActiveMonsters",{},smalltalk.Map)})},
args: [],
source: "showActiveMonsters\x0a\x0a\x09self removeSelection.\x0a\x0a\x09self cellsDo: [ :cell | \x0a                cell monster ifNotNil: [\x0a                        (cell monster state isKindOf: Inactive) ifFalse:[cell addSelectorColored: 'white'].\x09\x09\x09\x09\x0a                ]\x0a\x09].\x0a\x0a\x09self actionMenu unshowMonster.",
messageSends: ["removeSelection", "cellsDo:", "ifNotNil:", "ifFalse:", "addSelectorColored:", "isKindOf:", "state", "monster", "unshowMonster", "actionMenu"],
referencedClasses: ["Inactive"]
}),
smalltalk.Map);

smalltalk.addMethod(
smalltalk.method({
selector: "tileUnit",
category: 'initialize-release',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(50);
return $1;
}, function($ctx1) {$ctx1.fill(self,"tileUnit",{},smalltalk.Map)})},
args: [],
source: "tileUnit\x0a\x09^50",
messageSends: [],
referencedClasses: []
}),
smalltalk.Map);

smalltalk.addMethod(
smalltalk.method({
selector: "update",
category: 'displaying',
fn: function (){
var self=this;
var elem;
return smalltalk.withContext(function($ctx1) { 
elem=_st(_st(self)._canvas())._element();
_st(_st(elem)._getContext_("2d"))._clearRect_y_width_height_((0),(0),_st(elem)._width(),_st(elem)._height());
_st(self)._cellsDo_((function(cell){
return smalltalk.withContext(function($ctx2) {
return _st(cell)._draw();
}, function($ctx2) {$ctx2.fillBlock({cell:cell},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"update",{elem:elem},smalltalk.Map)})},
args: [],
source: "update\x0a\x09\x22drawer updateMap: self.\x22\x0a\x09|elem|\x0a\x0a\x09elem := self canvas element.\x0a\x09(elem getContext: '2d') clearRect: 0 y: 0 width: elem width height: elem height.\x0a\x0a\x09self cellsDo: [:cell | cell draw]",
messageSends: ["element", "canvas", "clearRect:y:width:height:", "width", "height", "getContext:", "cellsDo:", "draw"],
referencedClasses: []
}),
smalltalk.Map);

smalltalk.addMethod(
smalltalk.method({
selector: "updateCellsCoods",
category: 'cell-delegate',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._cells())._withIndexDo_((function(row,i){
return smalltalk.withContext(function($ctx2) {
return _st(row)._withIndexDo_((function(cell,j){
return smalltalk.withContext(function($ctx3) {
return _st(cell)._updateCoods_(_st(self)._calculX_y_(i,j));
}, function($ctx3) {$ctx3.fillBlock({cell:cell,j:j},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({row:row,i:i},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"updateCellsCoods",{},smalltalk.Map)})},
args: [],
source: "updateCellsCoods\x0a\x09self cells withIndexDo: [:row :i |\x0a\x09\x09row withIndexDo: [ :cell :j |\x0a\x09\x09\x09cell updateCoods: (self calculX: i y: j).\x0a\x09\x09]\x0a\x09]",
messageSends: ["withIndexDo:", "updateCoods:", "calculX:y:", "cells"],
referencedClasses: []
}),
smalltalk.Map);


smalltalk.Map.klass.iVarNames = ['map'];
smalltalk.addMethod(
smalltalk.method({
selector: "getSingleton",
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@map"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@map"]=_st(self)._new();
$1=self["@map"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"getSingleton",{},smalltalk.Map.klass)})},
args: [],
source: "getSingleton\x0a\x09^map ifNil:[map := self new.]",
messageSends: ["ifNil:", "new"],
referencedClasses: []
}),
smalltalk.Map.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "jsCall:cb:",
category: 'instance creation',
fn: function (aMapIndex,success){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(jQuery)._getJSON_onSuccess_(_st(_st("ressources/json/maps/map").__comma(aMapIndex)).__comma(".json"),success);
return self}, function($ctx1) {$ctx1.fill(self,"jsCall:cb:",{aMapIndex:aMapIndex,success:success},smalltalk.Map.klass)})},
args: ["aMapIndex", "success"],
source: "jsCall: aMapIndex cb: success\x0a\x09jQuery getJSON: 'ressources/json/maps/map', aMapIndex, '.json' onSuccess: success",
messageSends: ["getJSON:onSuccess:", ","],
referencedClasses: []
}),
smalltalk.Map.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "newWithMapIndex:",
category: 'instance creation',
fn: function (aMapIndex){
var self=this;
var success,map1;
return smalltalk.withContext(function($ctx1) { 
var $1;
map1=_st(self)._getSingleton();
success=(function(data){
return smalltalk.withContext(function($ctx2) {
return _st(map1)._initializeFromJson_(data);
}, function($ctx2) {$ctx2.fillBlock({data:data},$ctx1)})});
_st(self)._jsCall_cb_(aMapIndex,success);
$1=map1;
return $1;
}, function($ctx1) {$ctx1.fill(self,"newWithMapIndex:",{aMapIndex:aMapIndex,success:success,map1:map1},smalltalk.Map.klass)})},
args: ["aMapIndex"],
source: "newWithMapIndex: aMapIndex\x0a\x09|success map1|\x0a\x09\x0a\x09map1 := self getSingleton.\x0a\x09success := [:data | map1 initializeFromJson: data].\x0a    self jsCall: aMapIndex cb: success.\x0a\x0a\x09^map1",
messageSends: ["getSingleton", "initializeFromJson:", "jsCall:cb:"],
referencedClasses: []
}),
smalltalk.Map.klass);


smalltalk.addMethod(
smalltalk.method({
selector: "addIfNotNil:",
category: '*Easnoth-Core',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=anObject;
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
_st(self)._add_(anObject);
};
return self}, function($ctx1) {$ctx1.fill(self,"addIfNotNil:",{anObject:anObject},smalltalk.Array)})},
args: ["anObject"],
source: "addIfNotNil: anObject\x0a\x09anObject ifNotNil: [ self add: anObject ]",
messageSends: ["ifNotNil:", "add:"],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
smalltalk.method({
selector: "keys",
category: '*Easnoth-Core',
fn: function (){
var self=this;
var col;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1;
col=_st($Array())._new();
_st(self)._keysDo_((function(key){
return smalltalk.withContext(function($ctx2) {
return _st(col)._add_(key);
}, function($ctx2) {$ctx2.fillBlock({key:key},$ctx1)})}));
$1=col;
return $1;
}, function($ctx1) {$ctx1.fill(self,"keys",{col:col},smalltalk.JSObjectProxy)})},
args: [],
source: "keys\x0a\x09| col |\x0a    col := Array new.\x0a\x09self keysDo: [:key |\x0a    \x09col add: key ].\x0a       ^ col",
messageSends: ["new", "keysDo:", "add:"],
referencedClasses: ["Array"]
}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "keysDo:",
category: '*Easnoth-Core',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 

    	var o = self['@jsObject'];
    	for(var i in o) {
			aBlock(i);
		}
    ;
return self}, function($ctx1) {$ctx1.fill(self,"keysDo:",{aBlock:aBlock},smalltalk.JSObjectProxy)})},
args: ["aBlock"],
source: "keysDo: aBlock\x0a\x09<\x0a    \x09var o = self['@jsObject'];\x0a    \x09for(var i in o) {\x0a\x09\x09\x09aBlock(i);\x0a\x09\x09}\x0a    >",
messageSends: [],
referencedClasses: []
}),
smalltalk.JSObjectProxy);

