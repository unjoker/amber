smalltalk.addPackage('Easnoth-Core', {});
smalltalk.addClass('Cell', smalltalk.Object, ['tile', 'gameOverTile', 'overTiles', 'monster', 'coods', 'state', 'map'], 'Easnoth-Core');
smalltalk.addMethod(
"_addSelector",
smalltalk.method({
selector: "addSelector",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._state())._addSelector();
return self}, function($ctx1) {$ctx1.fill(self,"addSelector",{}, smalltalk.Cell)})}
}),
smalltalk.Cell);

smalltalk.addMethod(
"_addSelectorColored_",
smalltalk.method({
selector: "addSelectorColored:",
fn: function (aSelector){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._gameOverTile_(_st((smalltalk.OverTile || OverTile))._newInCell_jsonOverTile_selector_(self,aSelector,true));
return self}, function($ctx1) {$ctx1.fill(self,"addSelectorColored:",{aSelector:aSelector}, smalltalk.Cell)})}
}),
smalltalk.Cell);

smalltalk.addMethod(
"_attackableNeighboursSide_",
smalltalk.method({
selector: "attackableNeighboursSide:",
fn: function (aSide){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._map())._attackableCellsNextTo_side_cycle_(self,aSide,_st(_st(self)._monster())._range());
return $1;
}, function($ctx1) {$ctx1.fill(self,"attackableNeighboursSide:",{aSide:aSide}, smalltalk.Cell)})}
}),
smalltalk.Cell);

smalltalk.addMethod(
"_canAttack_",
smalltalk.method({
selector: "canAttack:",
fn: function (aSide){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._state())._canAttack_(aSide);
return $1;
}, function($ctx1) {$ctx1.fill(self,"canAttack:",{aSide:aSide}, smalltalk.Cell)})}
}),
smalltalk.Cell);

smalltalk.addMethod(
"_canMoveTo",
smalltalk.method({
selector: "canMoveTo",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._state())._canMoveTo();
return $1;
}, function($ctx1) {$ctx1.fill(self,"canMoveTo",{}, smalltalk.Cell)})}
}),
smalltalk.Cell);

smalltalk.addMethod(
"_changeState_",
smalltalk.method({
selector: "changeState:",
fn: function (aState){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._state())._newState_for_(aState,self);
return self}, function($ctx1) {$ctx1.fill(self,"changeState:",{aState:aState}, smalltalk.Cell)})}
}),
smalltalk.Cell);

smalltalk.addMethod(
"_coods",
smalltalk.method({
selector: "coods",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@coods"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"coods",{}, smalltalk.Cell)})}
}),
smalltalk.Cell);

smalltalk.addMethod(
"_coods_",
smalltalk.method({
selector: "coods:",
fn: function (cood){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@coods"]=_st(_st(_st(cood)._x())._rounded()).__at(_st(_st(cood)._y())._rounded());
return self}, function($ctx1) {$ctx1.fill(self,"coods:",{cood:cood}, smalltalk.Cell)})}
}),
smalltalk.Cell);

smalltalk.addMethod(
"_coodsInMap",
smalltalk.method({
selector: "coodsInMap",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._map())._coodsOf_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"coodsInMap",{}, smalltalk.Cell)})}
}),
smalltalk.Cell);

smalltalk.addMethod(
"_draw",
smalltalk.method({
selector: "draw",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
_st(_st(self)._drawedObjects())._do_((function(drawedObject){
return smalltalk.withContext(function($ctx2) {$1=_st(_st(drawedObject)._notNil()).__and(_st(_st(self)._coods())._notNil());
if(smalltalk.assert($1)){
return _st(drawedObject)._draw();
};
}, function($ctx2) {$ctx2.fillBlock({drawedObject:drawedObject},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"draw",{}, smalltalk.Cell)})}
}),
smalltalk.Cell);

smalltalk.addMethod(
"_drawedObjects",
smalltalk.method({
selector: "drawedObjects",
fn: function (){
var self=this;
var drawedObjects;
return smalltalk.withContext(function($ctx1) { var $1;
drawedObjects=_st((smalltalk.OrderedCollection || OrderedCollection))._new_((8));
_st(drawedObjects)._add_(_st(self)._tile());
_st(drawedObjects)._addAll_(_st(self)._overTiles());
_st(drawedObjects)._add_(_st(self)._gameOverTile());
_st(drawedObjects)._add_(_st(self)._monster());
$1=drawedObjects;
return $1;
}, function($ctx1) {$ctx1.fill(self,"drawedObjects",{drawedObjects:drawedObjects}, smalltalk.Cell)})}
}),
smalltalk.Cell);

smalltalk.addMethod(
"_free",
smalltalk.method({
selector: "free",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._hasMonster())._not();
return $1;
}, function($ctx1) {$ctx1.fill(self,"free",{}, smalltalk.Cell)})}
}),
smalltalk.Cell);

smalltalk.addMethod(
"_gameOverTile",
smalltalk.method({
selector: "gameOverTile",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@gameOverTile"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"gameOverTile",{}, smalltalk.Cell)})}
}),
smalltalk.Cell);

smalltalk.addMethod(
"_gameOverTile_",
smalltalk.method({
selector: "gameOverTile:",
fn: function (anOverTile){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@gameOverTile"]=anOverTile;
_st(anOverTile)._cell_(self);
return self}, function($ctx1) {$ctx1.fill(self,"gameOverTile:",{anOverTile:anOverTile}, smalltalk.Cell)})}
}),
smalltalk.Cell);

smalltalk.addMethod(
"_hasMonster",
smalltalk.method({
selector: "hasMonster",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._monster())._notNil();
return $1;
}, function($ctx1) {$ctx1.fill(self,"hasMonster",{}, smalltalk.Cell)})}
}),
smalltalk.Cell);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.Object.fn.prototype._initialize.apply(_st(self), []);
_st(self)._overTiles_(_st((smalltalk.Array || Array))._new_((5)));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.Cell)})}
}),
smalltalk.Cell);

smalltalk.addMethod(
"_initializeState",
smalltalk.method({
selector: "initializeState",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st((smalltalk.CellState || CellState))._initializeStateFor_(self);
return self}, function($ctx1) {$ctx1.fill(self,"initializeState",{}, smalltalk.Cell)})}
}),
smalltalk.Cell);

smalltalk.addMethod(
"_map",
smalltalk.method({
selector: "map",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@map"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"map",{}, smalltalk.Cell)})}
}),
smalltalk.Cell);

smalltalk.addMethod(
"_map_",
smalltalk.method({
selector: "map:",
fn: function (aMap){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@map"]=aMap;
return self}, function($ctx1) {$ctx1.fill(self,"map:",{aMap:aMap}, smalltalk.Cell)})}
}),
smalltalk.Cell);

smalltalk.addMethod(
"_monster",
smalltalk.method({
selector: "monster",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@monster"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"monster",{}, smalltalk.Cell)})}
}),
smalltalk.Cell);

smalltalk.addMethod(
"_monster_",
smalltalk.method({
selector: "monster:",
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@monster"]=aMonster;
_st(aMonster)._cell_(self);
return self}, function($ctx1) {$ctx1.fill(self,"monster:",{aMonster:aMonster}, smalltalk.Cell)})}
}),
smalltalk.Cell);

smalltalk.addMethod(
"_mouseClick_",
smalltalk.method({
selector: "mouseClick:",
fn: function (actionMenu){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._state())._mouseClick_(actionMenu);
return self}, function($ctx1) {$ctx1.fill(self,"mouseClick:",{actionMenu:actionMenu}, smalltalk.Cell)})}
}),
smalltalk.Cell);

smalltalk.addMethod(
"_movableNeighbours",
smalltalk.method({
selector: "movableNeighbours",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._map())._movableCellsNextTo_cycle_(self,_st(_st(self)._monster())._move());
return $1;
}, function($ctx1) {$ctx1.fill(self,"movableNeighbours",{}, smalltalk.Cell)})}
}),
smalltalk.Cell);

smalltalk.addMethod(
"_neighbours",
smalltalk.method({
selector: "neighbours",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._map())._cellsNextTo_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"neighbours",{}, smalltalk.Cell)})}
}),
smalltalk.Cell);

smalltalk.addMethod(
"_overTiles",
smalltalk.method({
selector: "overTiles",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@overTiles"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"overTiles",{}, smalltalk.Cell)})}
}),
smalltalk.Cell);

smalltalk.addMethod(
"_overTiles_",
smalltalk.method({
selector: "overTiles:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
self["@overTiles"]=aCollection;
_st(aCollection)._do_((function(overtile){
return smalltalk.withContext(function($ctx2) {$1=overtile;
if(($receiver = $1) == nil || $receiver == undefined){
return $1;
} else {
return _st(overtile)._cell_(self);
};
}, function($ctx2) {$ctx2.fillBlock({overtile:overtile},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"overTiles:",{aCollection:aCollection}, smalltalk.Cell)})}
}),
smalltalk.Cell);

smalltalk.addMethod(
"_parseJSONCell_",
smalltalk.method({
selector: "parseJSONCell:",
fn: function (aJsonCell){
var self=this;
return smalltalk.withContext(function($ctx1) { _st((function(){
return smalltalk.withContext(function($ctx2) {return _st(self)._tile_(_st((smalltalk.Tile || Tile))._newInCell_jsonTile_(self,_st(aJsonCell)._tile()));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._on_do_((smalltalk.Error || Error),(function(){
return smalltalk.withContext(function($ctx2) {}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st((function(){
return smalltalk.withContext(function($ctx2) {return _st(self)._overTiles_(_st(_st(aJsonCell)._overtiles())._collect_((function(each){
return smalltalk.withContext(function($ctx3) {return _st((smalltalk.OverTile || OverTile))._newInCell_jsonOverTile_(self,_st(each)._overtile());
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx1)})})));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._on_do_((smalltalk.Error || Error),(function(){
return smalltalk.withContext(function($ctx2) {}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st((function(){
return smalltalk.withContext(function($ctx2) {return _st(self)._monster_(_st((smalltalk.Monster || Monster))._newInCell_jsonMonster_(self,_st(aJsonCell)._monster()));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._on_do_((smalltalk.Error || Error),(function(){
return smalltalk.withContext(function($ctx2) {}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"parseJSONCell:",{aJsonCell:aJsonCell}, smalltalk.Cell)})}
}),
smalltalk.Cell);

smalltalk.addMethod(
"_prevCell",
smalltalk.method({
selector: "prevCell",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._state())._prevCell();
return $1;
}, function($ctx1) {$ctx1.fill(self,"prevCell",{}, smalltalk.Cell)})}
}),
smalltalk.Cell);

smalltalk.addMethod(
"_prevCell_",
smalltalk.method({
selector: "prevCell:",
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._state())._prevCell_(aCell);
return self}, function($ctx1) {$ctx1.fill(self,"prevCell:",{aCell:aCell}, smalltalk.Cell)})}
}),
smalltalk.Cell);

smalltalk.addMethod(
"_printString",
smalltalk.method({
selector: "printString",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(_st("Cell : ").__comma(_st(_st(self)._coodsInMap())._x())).__comma("-")).__comma(_st(_st(self)._coodsInMap())._y());
return $1;
}, function($ctx1) {$ctx1.fill(self,"printString",{}, smalltalk.Cell)})}
}),
smalltalk.Cell);

smalltalk.addMethod(
"_removeGameOverTile",
smalltalk.method({
selector: "removeGameOverTile",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@gameOverTile"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"removeGameOverTile",{}, smalltalk.Cell)})}
}),
smalltalk.Cell);

smalltalk.addMethod(
"_removeMonster",
smalltalk.method({
selector: "removeMonster",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@monster"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"removeMonster",{}, smalltalk.Cell)})}
}),
smalltalk.Cell);

smalltalk.addMethod(
"_removeSelector",
smalltalk.method({
selector: "removeSelector",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._state())._removeSelector();
return self}, function($ctx1) {$ctx1.fill(self,"removeSelector",{}, smalltalk.Cell)})}
}),
smalltalk.Cell);

smalltalk.addMethod(
"_removeTile",
smalltalk.method({
selector: "removeTile",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@tile"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"removeTile",{}, smalltalk.Cell)})}
}),
smalltalk.Cell);

smalltalk.addMethod(
"_selectableNeighboursSide_",
smalltalk.method({
selector: "selectableNeighboursSide:",
fn: function (aSide){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._map())._selectableCellsNextTo_side_cycle_(self,aSide,_st(_st(self)._monster())._move());
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectableNeighboursSide:",{aSide:aSide}, smalltalk.Cell)})}
}),
smalltalk.Cell);

smalltalk.addMethod(
"_state",
smalltalk.method({
selector: "state",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=self["@state"];
if(($receiver = $1) == nil || $receiver == undefined){
_st(self)._initializeState();
} else {
$1;
};
$2=self["@state"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"state",{}, smalltalk.Cell)})}
}),
smalltalk.Cell);

smalltalk.addMethod(
"_state_",
smalltalk.method({
selector: "state:",
fn: function (aState){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@state"]=aState;
return self}, function($ctx1) {$ctx1.fill(self,"state:",{aState:aState}, smalltalk.Cell)})}
}),
smalltalk.Cell);

smalltalk.addMethod(
"_tile",
smalltalk.method({
selector: "tile",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@tile"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"tile",{}, smalltalk.Cell)})}
}),
smalltalk.Cell);

smalltalk.addMethod(
"_tile_",
smalltalk.method({
selector: "tile:",
fn: function (aTile){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@tile"]=aTile;
_st(aTile)._cell_(self);
return self}, function($ctx1) {$ctx1.fill(self,"tile:",{aTile:aTile}, smalltalk.Cell)})}
}),
smalltalk.Cell);

smalltalk.addMethod(
"_updateCoods_",
smalltalk.method({
selector: "updateCoods:",
fn: function (cood){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._coods_(cood);
return self}, function($ctx1) {$ctx1.fill(self,"updateCoods:",{cood:cood}, smalltalk.Cell)})}
}),
smalltalk.Cell);


smalltalk.addMethod(
"_newInMap_jsoncell_coods_",
smalltalk.method({
selector: "newInMap:jsoncell:coods:",
fn: function (aMap,aJsonCell,coods){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st(self)._new();
_st($2)._map_(aMap);
_st($2)._updateCoods_(coods);
_st($2)._parseJSONCell_(aJsonCell);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"newInMap:jsoncell:coods:",{aMap:aMap,aJsonCell:aJsonCell,coods:coods}, smalltalk.Cell.klass)})}
}),
smalltalk.Cell.klass);


smalltalk.addClass('DrawedObject', smalltalk.Object, ['image', 'cell'], 'Easnoth-Core');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor) {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._subclassResponsibilty();
return self}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor}, smalltalk.DrawedObject)});}
}),
smalltalk.DrawedObject);

smalltalk.addMethod(
"_cell",
smalltalk.method({
selector: "cell",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@cell"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"cell",{}, smalltalk.DrawedObject)});}
}),
smalltalk.DrawedObject);

smalltalk.addMethod(
"_cell_",
smalltalk.method({
selector: "cell:",
fn: function (aCell) {
var self=this;
return smalltalk.withContext(function($ctx1) { self["@cell"]=aCell;
return self}, function($ctx1) {$ctx1.fill(self,"cell:",{aCell:aCell}, smalltalk.DrawedObject)});}
}),
smalltalk.DrawedObject);

smalltalk.addMethod(
"_context",
smalltalk.method({
selector: "context",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self["@cell"])._map())._context();
return $1;
}, function($ctx1) {$ctx1.fill(self,"context",{}, smalltalk.DrawedObject)});}
}),
smalltalk.DrawedObject);

smalltalk.addMethod(
"_displayX_y_",
smalltalk.method({
selector: "displayX:y:",
fn: function (aX, aY) {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._context())._drawImage_x_y_(_st(self)._image(),aX,aY);
return self}, function($ctx1) {$ctx1.fill(self,"displayX:y:",{aX:aX,aY:aY}, smalltalk.DrawedObject)});}
}),
smalltalk.DrawedObject);

smalltalk.addMethod(
"_drawX_y_",
smalltalk.method({
selector: "drawX:y:",
fn: function (aX, aY) {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"drawX:y:",{aX:aX,aY:aY}, smalltalk.DrawedObject)});}
}),
smalltalk.DrawedObject);

smalltalk.addMethod(
"_folderName",
smalltalk.method({
selector: "folderName",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"folderName",{}, smalltalk.DrawedObject)});}
}),
smalltalk.DrawedObject);

smalltalk.addMethod(
"_image",
smalltalk.method({
selector: "image",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@image"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"image",{}, smalltalk.DrawedObject)});}
}),
smalltalk.DrawedObject);

smalltalk.addMethod(
"_image_",
smalltalk.method({
selector: "image:",
fn: function (anImage) {
var self=this;
return smalltalk.withContext(function($ctx1) { self["@image"]=anImage;
return self}, function($ctx1) {$ctx1.fill(self,"image:",{anImage:anImage}, smalltalk.DrawedObject)});}
}),
smalltalk.DrawedObject);

smalltalk.addMethod(
"_initializeCell_imageKey_",
smalltalk.method({
selector: "initializeCell:imageKey:",
fn: function (aCell, aKey) {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._cell_(aCell);
_st(_st(_st(_st(aCell)._map())._cache())._images())._putImageWithKey_inDrawedObject_(aKey,self);
return self}, function($ctx1) {$ctx1.fill(self,"initializeCell:imageKey:",{aCell:aCell,aKey:aKey}, smalltalk.DrawedObject)});}
}),
smalltalk.DrawedObject);



smalltalk.addClass('Ground', smalltalk.DrawedObject, [], 'Easnoth-Core');
smalltalk.addMethod(
"_draw",
smalltalk.method({
selector: "draw",
fn: function () {
var self=this;
var ctx;
return smalltalk.withContext(function($ctx1) { var $1,$2;
ctx=_st(self)._context();
$1=ctx;
_st($1)._save();
_st($1)._translate_y_(_st(_st(_st(_st(self)._cell())._coods())._x()).__plus((45)),_st(_st(_st(_st(self)._cell())._coods())._y()).__minus((7)));
_st($1)._scale_y_((1),(0.5));
_st($1)._rotate_(_st(_st((smalltalk.Number || Number))._pi()).__slash((4)));
$2=_st($1)._scale_y_((1.4),(1.23));
_st(self)._displayX_y_((0),(0));
_st(ctx)._restore();
return self}, function($ctx1) {$ctx1.fill(self,"draw",{ctx:ctx}, smalltalk.Ground)});}
}),
smalltalk.Ground);



smalltalk.addClass('OverTile', smalltalk.Ground, ['selector'], 'Easnoth-Core');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(aVisitor)._visitOverTile_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor}, smalltalk.OverTile)});}
}),
smalltalk.OverTile);

smalltalk.addMethod(
"_folderName",
smalltalk.method({
selector: "folderName",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { return "overtiles";
}, function($ctx1) {$ctx1.fill(self,"folderName",{}, smalltalk.OverTile)});}
}),
smalltalk.OverTile);

smalltalk.addMethod(
"_selector",
smalltalk.method({
selector: "selector",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@selector"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"selector",{}, smalltalk.OverTile)});}
}),
smalltalk.OverTile);

smalltalk.addMethod(
"_selector_",
smalltalk.method({
selector: "selector:",
fn: function (aBool) {
var self=this;
return smalltalk.withContext(function($ctx1) { self["@selector"]=aBool;
return self}, function($ctx1) {$ctx1.fill(self,"selector:",{aBool:aBool}, smalltalk.OverTile)});}
}),
smalltalk.OverTile);


smalltalk.addMethod(
"_newInCell_jsonOverTile_",
smalltalk.method({
selector: "newInCell:jsonOverTile:",
fn: function (aCell, aJsonOverTile) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._newInCell_jsonOverTile_selector_(aCell,aJsonOverTile,false);
return $1;
}, function($ctx1) {$ctx1.fill(self,"newInCell:jsonOverTile:",{aCell:aCell,aJsonOverTile:aJsonOverTile}, smalltalk.OverTile.klass)});}
}),
smalltalk.OverTile.klass);

smalltalk.addMethod(
"_newInCell_jsonOverTile_selector_",
smalltalk.method({
selector: "newInCell:jsonOverTile:selector:",
fn: function (aCell, aJsonOverTile, aBool) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st(self)._new();
_st($2)._initializeCell_imageKey_(aCell,aJsonOverTile);
_st($2)._selector_(aBool);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"newInCell:jsonOverTile:selector:",{aCell:aCell,aJsonOverTile:aJsonOverTile,aBool:aBool}, smalltalk.OverTile.klass)});}
}),
smalltalk.OverTile.klass);


smalltalk.addClass('Tile', smalltalk.Ground, ['isWall'], 'Easnoth-Core');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(aVisitor)._visitTile_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor}, smalltalk.Tile)});}
}),
smalltalk.Tile);

smalltalk.addMethod(
"_folderName",
smalltalk.method({
selector: "folderName",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { return "tiles";
}, function($ctx1) {$ctx1.fill(self,"folderName",{}, smalltalk.Tile)});}
}),
smalltalk.Tile);

smalltalk.addMethod(
"_isWall",
smalltalk.method({
selector: "isWall",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@isWall"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"isWall",{}, smalltalk.Tile)});}
}),
smalltalk.Tile);

smalltalk.addMethod(
"_isWall_",
smalltalk.method({
selector: "isWall:",
fn: function (aBoolean) {
var self=this;
return smalltalk.withContext(function($ctx1) { self["@isWall"]=aBoolean;
return self}, function($ctx1) {$ctx1.fill(self,"isWall:",{aBoolean:aBoolean}, smalltalk.Tile)});}
}),
smalltalk.Tile);


smalltalk.addMethod(
"_newInCell_jsonTile_",
smalltalk.method({
selector: "newInCell:jsonTile:",
fn: function (aCell, aJsonTile) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st(self)._new();
_st($2)._initializeCell_imageKey_(aCell,aJsonTile);
_st($2)._isWall_(false);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"newInCell:jsonTile:",{aCell:aCell,aJsonTile:aJsonTile}, smalltalk.Tile.klass)});}
}),
smalltalk.Tile.klass);


smalltalk.addClass('OverGround', smalltalk.DrawedObject, ['hp'], 'Easnoth-Core');
smalltalk.addMethod(
"_hp",
smalltalk.method({
selector: "hp",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@hp"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"hp",{}, smalltalk.OverGround)});}
}),
smalltalk.OverGround);

smalltalk.addMethod(
"_hp_",
smalltalk.method({
selector: "hp:",
fn: function (aNumber) {
var self=this;
return smalltalk.withContext(function($ctx1) { self["@hp"]=aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"hp:",{aNumber:aNumber}, smalltalk.OverGround)});}
}),
smalltalk.OverGround);



smalltalk.addClass('Building', smalltalk.OverGround, [], 'Easnoth-Core');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(aVisitor)._visitBuilding_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor}, smalltalk.Building)});}
}),
smalltalk.Building);

smalltalk.addMethod(
"_folderName",
smalltalk.method({
selector: "folderName",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { return "buildings";
}, function($ctx1) {$ctx1.fill(self,"folderName",{}, smalltalk.Building)});}
}),
smalltalk.Building);



smalltalk.addClass('Monster', smalltalk.OverGround, ['move', 'attack', 'knockback', 'range', 'heros', 'special', 'dices', 'side', 'state'], 'Easnoth-Core');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(aVisitor)._visitMonster_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor}, smalltalk.Monster)});}
}),
smalltalk.Monster);

smalltalk.addMethod(
"_attack",
smalltalk.method({
selector: "attack",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@attack"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"attack",{}, smalltalk.Monster)});}
}),
smalltalk.Monster);

smalltalk.addMethod(
"_attack_",
smalltalk.method({
selector: "attack:",
fn: function (somePercent) {
var self=this;
return smalltalk.withContext(function($ctx1) { self["@attack"]=somePercent;
return self}, function($ctx1) {$ctx1.fill(self,"attack:",{somePercent:somePercent}, smalltalk.Monster)});}
}),
smalltalk.Monster);

smalltalk.addMethod(
"_attackTo_",
smalltalk.method({
selector: "attackTo:",
fn: function (aCell) {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._state())._attackTo_(aCell);
return self}, function($ctx1) {$ctx1.fill(self,"attackTo:",{aCell:aCell}, smalltalk.Monster)});}
}),
smalltalk.Monster);

smalltalk.addMethod(
"_changeState_",
smalltalk.method({
selector: "changeState:",
fn: function (aState) {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._state())._newState_for_(aState,self);
return self}, function($ctx1) {$ctx1.fill(self,"changeState:",{aState:aState}, smalltalk.Monster)});}
}),
smalltalk.Monster);

smalltalk.addMethod(
"_dices",
smalltalk.method({
selector: "dices",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@dices"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"dices",{}, smalltalk.Monster)});}
}),
smalltalk.Monster);

smalltalk.addMethod(
"_dices_",
smalltalk.method({
selector: "dices:",
fn: function (anInt) {
var self=this;
return smalltalk.withContext(function($ctx1) { self["@dices"]=anInt;
return self}, function($ctx1) {$ctx1.fill(self,"dices:",{anInt:anInt}, smalltalk.Monster)});}
}),
smalltalk.Monster);

smalltalk.addMethod(
"_draw",
smalltalk.method({
selector: "draw",
fn: function () {
var self=this;
var aX,aY;
return smalltalk.withContext(function($ctx1) { var $1;
aX=_st(_st(_st(self)._cell())._coods())._x();
aY=_st(_st(_st(self)._cell())._coods())._y();
$1=_st(self)._heros();
if(smalltalk.assert($1)){
_st(self)._drawAsHeroX_y_(aX,aY);
} else {
_st(self)._drawAsUnitX_y_(aX,aY);
};
return self}, function($ctx1) {$ctx1.fill(self,"draw",{aX:aX,aY:aY}, smalltalk.Monster)});}
}),
smalltalk.Monster);

smalltalk.addMethod(
"_drawAsHeroX_y_",
smalltalk.method({
selector: "drawAsHeroX:y:",
fn: function (aX, aY) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3;
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
return self}, function($ctx1) {$ctx1.fill(self,"drawAsHeroX:y:",{aX:aX,aY:aY}, smalltalk.Monster)});}
}),
smalltalk.Monster);

smalltalk.addMethod(
"_drawAsUnitX_y_",
smalltalk.method({
selector: "drawAsUnitX:y:",
fn: function (aX, aY) {
var self=this;
var xArray,yArray;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3;
xArray=[(17), (37), (-11), (9)];
yArray=[(33), (23), (26), (15)];
$1=_st(_st(self)._side())._negative();
if(smalltalk.assert($1)){
_st(_st((1))._to_(_st(self)._hp()))._do_((function(i){
return smalltalk.withContext(function($ctx2) {$2=_st(self)._context();
_st($2)._save();
_st($2)._translate_y_(_st(_st(aX).__plus((72))).__plus(_st(xArray)._at_(i)),(0));
$3=_st($2)._scale_y_((-1),(1));
$3;
_st(self)._displayX_y_((0),_st(aY).__minus(_st(yArray)._at_(i)));
return _st(_st(self)._context())._restore();
}, function($ctx2) {$ctx2.fillBlock({i:i},$ctx1)})}));
} else {
_st(_st((1))._to_(_st(self)._hp()))._do_((function(i){
return smalltalk.withContext(function($ctx2) {return _st(self)._displayX_y_(_st(aX).__plus(_st(xArray)._at_(i)),_st(aY).__minus(_st(yArray)._at_(i)));
}, function($ctx2) {$ctx2.fillBlock({i:i},$ctx1)})}));
};
return self}, function($ctx1) {$ctx1.fill(self,"drawAsUnitX:y:",{aX:aX,aY:aY,xArray:xArray,yArray:yArray}, smalltalk.Monster)});}
}),
smalltalk.Monster);

smalltalk.addMethod(
"_folderName",
smalltalk.method({
selector: "folderName",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { return "monsters";
}, function($ctx1) {$ctx1.fill(self,"folderName",{}, smalltalk.Monster)});}
}),
smalltalk.Monster);

smalltalk.addMethod(
"_heros",
smalltalk.method({
selector: "heros",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@heros"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"heros",{}, smalltalk.Monster)});}
}),
smalltalk.Monster);

smalltalk.addMethod(
"_heros_",
smalltalk.method({
selector: "heros:",
fn: function (aBoolean) {
var self=this;
return smalltalk.withContext(function($ctx1) { self["@heros"]=aBoolean;
return self}, function($ctx1) {$ctx1.fill(self,"heros:",{aBoolean:aBoolean}, smalltalk.Monster)});}
}),
smalltalk.Monster);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { return self}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.Monster)});}
}),
smalltalk.Monster);

smalltalk.addMethod(
"_initializeSide_",
smalltalk.method({
selector: "initializeSide:",
fn: function (aSide) {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._side_(aSide);
return self}, function($ctx1) {$ctx1.fill(self,"initializeSide:",{aSide:aSide}, smalltalk.Monster)});}
}),
smalltalk.Monster);

smalltalk.addMethod(
"_initializeStats_",
smalltalk.method({
selector: "initializeStats:",
fn: function (aJsonMonster) {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(_st(_st(_st(self)._cell())._map())._cache())._monsters())._putStatsWithKey_inMonster_(aJsonMonster,self);
return self}, function($ctx1) {$ctx1.fill(self,"initializeStats:",{aJsonMonster:aJsonMonster}, smalltalk.Monster)});}
}),
smalltalk.Monster);

smalltalk.addMethod(
"_jsdrawAsHeroX_y_",
smalltalk.method({
selector: "jsdrawAsHeroX:y:",
fn: function (aX, aY) {
var self=this;
var ctx;
return smalltalk.withContext(function($ctx1) { ctx=_st(self)._context();
return self}, function($ctx1) {$ctx1.fill(self,"jsdrawAsHeroX:y:",{aX:aX,aY:aY,ctx:ctx}, smalltalk.Monster)});}
}),
smalltalk.Monster);

smalltalk.addMethod(
"_jsdrawAsUnitX_y_",
smalltalk.method({
selector: "jsdrawAsUnitX:y:",
fn: function (aX, aY) {
var self=this;
var xArray,yArray,ctx;
return smalltalk.withContext(function($ctx1) { xArray=[(17), (37), (-11), (9)];
yArray=[(33), (23), (26), (15)];
ctx=_st(self)._context();
return self}, function($ctx1) {$ctx1.fill(self,"jsdrawAsUnitX:y:",{aX:aX,aY:aY,xArray:xArray,yArray:yArray,ctx:ctx}, smalltalk.Monster)});}
}),
smalltalk.Monster);

smalltalk.addMethod(
"_knockback",
smalltalk.method({
selector: "knockback",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@knockback"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"knockback",{}, smalltalk.Monster)});}
}),
smalltalk.Monster);

smalltalk.addMethod(
"_knockback_",
smalltalk.method({
selector: "knockback:",
fn: function (somePercent) {
var self=this;
return smalltalk.withContext(function($ctx1) { self["@knockback"]=somePercent;
return self}, function($ctx1) {$ctx1.fill(self,"knockback:",{somePercent:somePercent}, smalltalk.Monster)});}
}),
smalltalk.Monster);

smalltalk.addMethod(
"_move",
smalltalk.method({
selector: "move",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@move"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"move",{}, smalltalk.Monster)});}
}),
smalltalk.Monster);

smalltalk.addMethod(
"_move_",
smalltalk.method({
selector: "move:",
fn: function (aNumberOfCell) {
var self=this;
return smalltalk.withContext(function($ctx1) { self["@move"]=aNumberOfCell;
return self}, function($ctx1) {$ctx1.fill(self,"move:",{aNumberOfCell:aNumberOfCell}, smalltalk.Monster)});}
}),
smalltalk.Monster);

smalltalk.addMethod(
"_moveTo_",
smalltalk.method({
selector: "moveTo:",
fn: function (aCell) {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._state())._moveTo_(aCell);
return self}, function($ctx1) {$ctx1.fill(self,"moveTo:",{aCell:aCell}, smalltalk.Monster)});}
}),
smalltalk.Monster);

smalltalk.addMethod(
"_range",
smalltalk.method({
selector: "range",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@range"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"range",{}, smalltalk.Monster)});}
}),
smalltalk.Monster);

smalltalk.addMethod(
"_range_",
smalltalk.method({
selector: "range:",
fn: function (aNumberOfCell) {
var self=this;
return smalltalk.withContext(function($ctx1) { self["@range"]=aNumberOfCell;
return self}, function($ctx1) {$ctx1.fill(self,"range:",{aNumberOfCell:aNumberOfCell}, smalltalk.Monster)});}
}),
smalltalk.Monster);

smalltalk.addMethod(
"_removeHP_",
smalltalk.method({
selector: "removeHP:",
fn: function (anInt) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
_st(self)._hp_(_st(_st(self)._hp()).__minus(anInt));
$1=_st(_st(self)._hp()).__lt((1));
if(smalltalk.assert($1)){
_st(_st(self)._cell())._removeMonster();
_st(_st(self)._cell())._changeState_(_st((smalltalk.Free || Free))._new());
};
return self}, function($ctx1) {$ctx1.fill(self,"removeHP:",{anInt:anInt}, smalltalk.Monster)});}
}),
smalltalk.Monster);

smalltalk.addMethod(
"_rollDices",
smalltalk.method({
selector: "rollDices",
fn: function () {
var self=this;
var kill,knockBack,tmp;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3;
kill=(0);
knockBack=(0);
_st((1))._to_do_(_st(self)._dices(),(function(){
return smalltalk.withContext(function($ctx2) {tmp=_st((100))._atRandom();
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
}, function($ctx1) {$ctx1.fill(self,"rollDices",{kill:kill,knockBack:knockBack,tmp:tmp}, smalltalk.Monster)});}
}),
smalltalk.Monster);

smalltalk.addMethod(
"_rollDicesCallBack_",
smalltalk.method({
selector: "rollDicesCallBack:",
fn: function (callback) {
var self=this;
var kill,knockBack,tmp;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3;
kill=(0);
knockBack=(0);
_st((1))._to_do_(_st(self)._dices(),(function(){
return smalltalk.withContext(function($ctx2) {tmp=_st((100))._atRandom();
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
}, function($ctx1) {$ctx1.fill(self,"rollDicesCallBack:",{callback:callback,kill:kill,knockBack:knockBack,tmp:tmp}, smalltalk.Monster)});}
}),
smalltalk.Monster);

smalltalk.addMethod(
"_select",
smalltalk.method({
selector: "select",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._state())._select();
return self}, function($ctx1) {$ctx1.fill(self,"select",{}, smalltalk.Monster)});}
}),
smalltalk.Monster);

smalltalk.addMethod(
"_side",
smalltalk.method({
selector: "side",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@side"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"side",{}, smalltalk.Monster)});}
}),
smalltalk.Monster);

smalltalk.addMethod(
"_side_",
smalltalk.method({
selector: "side:",
fn: function (anInt) {
var self=this;
return smalltalk.withContext(function($ctx1) { self["@side"]=anInt;
return self}, function($ctx1) {$ctx1.fill(self,"side:",{anInt:anInt}, smalltalk.Monster)});}
}),
smalltalk.Monster);

smalltalk.addMethod(
"_special",
smalltalk.method({
selector: "special",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@special"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"special",{}, smalltalk.Monster)});}
}),
smalltalk.Monster);

smalltalk.addMethod(
"_special_",
smalltalk.method({
selector: "special:",
fn: function (something) {
var self=this;
return smalltalk.withContext(function($ctx1) { self["@special"]=something;
return self}, function($ctx1) {$ctx1.fill(self,"special:",{something:something}, smalltalk.Monster)});}
}),
smalltalk.Monster);

smalltalk.addMethod(
"_state",
smalltalk.method({
selector: "state",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@state"];
if(($receiver = $2) == nil || $receiver == undefined){
$1=_st((smalltalk.Inactive || Inactive))._newFor_(self);
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"state",{}, smalltalk.Monster)});}
}),
smalltalk.Monster);

smalltalk.addMethod(
"_state_",
smalltalk.method({
selector: "state:",
fn: function (aState) {
var self=this;
return smalltalk.withContext(function($ctx1) { self["@state"]=aState;
return self}, function($ctx1) {$ctx1.fill(self,"state:",{aState:aState}, smalltalk.Monster)});}
}),
smalltalk.Monster);

smalltalk.addMethod(
"_stats_",
smalltalk.method({
selector: "stats:",
fn: function (jsonStats) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
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
return self}, function($ctx1) {$ctx1.fill(self,"stats:",{jsonStats:jsonStats}, smalltalk.Monster)});}
}),
smalltalk.Monster);


smalltalk.addMethod(
"_newInCell_jsonMonster_",
smalltalk.method({
selector: "newInCell:jsonMonster:",
fn: function (aCell, aJsonMonster) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st(self)._new();
_st($2)._initializeCell_imageKey_(aCell,_st(aJsonMonster)._name());
_st($2)._initializeStats_(_st(aJsonMonster)._name());
_st($2)._initializeSide_(_st(aJsonMonster)._side());
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"newInCell:jsonMonster:",{aCell:aCell,aJsonMonster:aJsonMonster}, smalltalk.Monster.klass)});}
}),
smalltalk.Monster.klass);


smalltalk.addClass('Map', smalltalk.Object, ['mapCoods', 'cells', 'canvas', 'actionMenu', 'cache'], 'Easnoth-Core');
smalltalk.addMethod(
"_actionMenu",
smalltalk.method({
selector: "actionMenu",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@actionMenu"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"actionMenu",{}, smalltalk.Map)});}
}),
smalltalk.Map);

smalltalk.addMethod(
"_actionMenu_",
smalltalk.method({
selector: "actionMenu:",
fn: function (aMenu) {
var self=this;
return smalltalk.withContext(function($ctx1) { self["@actionMenu"]=aMenu;
return self}, function($ctx1) {$ctx1.fill(self,"actionMenu:",{aMenu:aMenu}, smalltalk.Map)});}
}),
smalltalk.Map);

smalltalk.addMethod(
"_attackableCellsNextTo_side_",
smalltalk.method({
selector: "attackableCellsNextTo:side:",
fn: function (aCell, aSide) {
var self=this;
var attackableCells;
return smalltalk.withContext(function($ctx1) { var $1;
attackableCells=_st(_st(self)._cellsNextTo_(aCell))._select_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(each)._canAttack_(aSide);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
_st(attackableCells)._collect_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(each)._addSelector();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$1=attackableCells;
return $1;
}, function($ctx1) {$ctx1.fill(self,"attackableCellsNextTo:side:",{aCell:aCell,aSide:aSide,attackableCells:attackableCells}, smalltalk.Map)});}
}),
smalltalk.Map);

smalltalk.addMethod(
"_attackableCellsNextTo_side_cycle_",
smalltalk.method({
selector: "attackableCellsNextTo:side:cycle:",
fn: function (aCell, aSide, cycleNumber) {
var self=this;
var attackableCells;
return smalltalk.withContext(function($ctx1) { var $1;
_st(self)._removeSelection();
attackableCells=_st(self)._attackableCellsNextTo_side_(aCell,aSide);
$1=attackableCells;
return $1;
}, function($ctx1) {$ctx1.fill(self,"attackableCellsNextTo:side:cycle:",{aCell:aCell,aSide:aSide,cycleNumber:cycleNumber,attackableCells:attackableCells}, smalltalk.Map)});}
}),
smalltalk.Map);

smalltalk.addMethod(
"_cache",
smalltalk.method({
selector: "cache",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@cache"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"cache",{}, smalltalk.Map)});}
}),
smalltalk.Map);

smalltalk.addMethod(
"_cache_",
smalltalk.method({
selector: "cache:",
fn: function (aCache) {
var self=this;
return smalltalk.withContext(function($ctx1) { self["@cache"]=aCache;
return self}, function($ctx1) {$ctx1.fill(self,"cache:",{aCache:aCache}, smalltalk.Map)});}
}),
smalltalk.Map);

smalltalk.addMethod(
"_calculX_y_",
smalltalk.method({
selector: "calculX:y:",
fn: function (i, j) {
var self=this;
var xpos,ypos,temp,cood,sin45,sin15,sin135,sin75;
return smalltalk.withContext(function($ctx1) { var $1;
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
}, function($ctx1) {$ctx1.fill(self,"calculX:y:",{i:i,j:j,xpos:xpos,ypos:ypos,temp:temp,cood:cood,sin45:sin45,sin15:sin15,sin135:sin135,sin75:sin75}, smalltalk.Map)});}
}),
smalltalk.Map);

smalltalk.addMethod(
"_canvas",
smalltalk.method({
selector: "canvas",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@canvas"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"canvas",{}, smalltalk.Map)});}
}),
smalltalk.Map);

smalltalk.addMethod(
"_canvas_",
smalltalk.method({
selector: "canvas:",
fn: function (aCanvas) {
var self=this;
return smalltalk.withContext(function($ctx1) { self["@canvas"]=aCanvas;
return self}, function($ctx1) {$ctx1.fill(self,"canvas:",{aCanvas:aCanvas}, smalltalk.Map)});}
}),
smalltalk.Map);

smalltalk.addMethod(
"_canvasId",
smalltalk.method({
selector: "canvasId",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { return "#main";
}, function($ctx1) {$ctx1.fill(self,"canvasId",{}, smalltalk.Map)});}
}),
smalltalk.Map);

smalltalk.addMethod(
"_canvasPadding",
smalltalk.method({
selector: "canvasPadding",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { return (40);
}, function($ctx1) {$ctx1.fill(self,"canvasPadding",{}, smalltalk.Map)});}
}),
smalltalk.Map);

smalltalk.addMethod(
"_cells",
smalltalk.method({
selector: "cells",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@cells"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"cells",{}, smalltalk.Map)});}
}),
smalltalk.Map);

smalltalk.addMethod(
"_cells_",
smalltalk.method({
selector: "cells:",
fn: function (anArray) {
var self=this;
return smalltalk.withContext(function($ctx1) { self["@cells"]=anArray;
return self}, function($ctx1) {$ctx1.fill(self,"cells:",{anArray:anArray}, smalltalk.Map)});}
}),
smalltalk.Map);

smalltalk.addMethod(
"_cellsDo_",
smalltalk.method({
selector: "cellsDo:",
fn: function (aBlock) {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._cells())._collect_((function(row){
return smalltalk.withContext(function($ctx2) {return _st(row)._collect_((function(cell){
return smalltalk.withContext(function($ctx3) {return _st(aBlock)._value_(cell);
}, function($ctx3) {$ctx3.fillBlock({cell:cell},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({row:row},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"cellsDo:",{aBlock:aBlock}, smalltalk.Map)});}
}),
smalltalk.Map);

smalltalk.addMethod(
"_cellsNextTo_",
smalltalk.method({
selector: "cellsNextTo:",
fn: function (aCell) {
var self=this;
var coods;
return smalltalk.withContext(function($ctx1) { var $1;
coods=_st(self)._coodsOf_(aCell);
$1=_st(self)._cellsNextToI_j_(_st(coods)._x(),_st(coods)._y());
return $1;
}, function($ctx1) {$ctx1.fill(self,"cellsNextTo:",{aCell:aCell,coods:coods}, smalltalk.Map)});}
}),
smalltalk.Map);

smalltalk.addMethod(
"_cellsNextTo_cycle_",
smalltalk.method({
selector: "cellsNextTo:cycle:",
fn: function (aCell, cycleNumber) {
var self=this;
var cellsNext,tempSet;
return smalltalk.withContext(function($ctx1) { return self}, function($ctx1) {$ctx1.fill(self,"cellsNextTo:cycle:",{aCell:aCell,cycleNumber:cycleNumber,cellsNext:cellsNext,tempSet:tempSet}, smalltalk.Map)});}
}),
smalltalk.Map);

smalltalk.addMethod(
"_cellsNextToI_j_",
smalltalk.method({
selector: "cellsNextToI:j:",
fn: function (i, j) {
var self=this;
var neighbours;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4,$5,$6,$7,$8,$9,$10;
neighbours=_st((smalltalk.Set || Set))._new();
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
}, function($ctx1) {$ctx1.fill(self,"cellsNextToI:j:",{i:i,j:j,neighbours:neighbours}, smalltalk.Map)});}
}),
smalltalk.Map);

smalltalk.addMethod(
"_context",
smalltalk.method({
selector: "context",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self["@canvas"])._element())._getContext_("2d");
return $1;
}, function($ctx1) {$ctx1.fill(self,"context",{}, smalltalk.Map)});}
}),
smalltalk.Map);

smalltalk.addMethod(
"_coods",
smalltalk.method({
selector: "coods",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@mapCoods"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"coods",{}, smalltalk.Map)});}
}),
smalltalk.Map);

smalltalk.addMethod(
"_coods_",
smalltalk.method({
selector: "coods:",
fn: function (aPoint) {
var self=this;
return smalltalk.withContext(function($ctx1) { self["@mapCoods"]=aPoint;
return self}, function($ctx1) {$ctx1.fill(self,"coods:",{aPoint:aPoint}, smalltalk.Map)});}
}),
smalltalk.Map);

smalltalk.addMethod(
"_coodsOf_",
smalltalk.method({
selector: "coodsOf:",
fn: function (aCell) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
var $early={};
try {
_st(_st(self)._cells())._withIndexDo_((function(row,i){
return smalltalk.withContext(function($ctx2) {return _st(row)._withIndexDo_((function(cell,j){
return smalltalk.withContext(function($ctx3) {$1=_st(cell).__eq(aCell);
if(smalltalk.assert($1)){
$2=_st(i).__at(j);
throw $early=[$2];
};
}, function($ctx3) {$ctx3.fillBlock({cell:cell,j:j},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({row:row,i:i},$ctx1)})}));
return self}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"coodsOf:",{aCell:aCell}, smalltalk.Map)});}
}),
smalltalk.Map);

smalltalk.addMethod(
"_currentCell_",
smalltalk.method({
selector: "currentCell:",
fn: function (anEvent) {
var self=this;
var x,y,cood;
return smalltalk.withContext(function($ctx1) { var $1;
x=_st(_st(anEvent)._pageX()).__minus(_st(_st(_st(self)._canvas())._element())._offsetLeft());
y=_st(_st(anEvent)._pageY()).__minus(_st(_st(_st(self)._canvas())._element())._offsetTop());
cood=_st(self)._mouseCoodToHexCoodX_y_(x,y);
$1=_st((function(){
return smalltalk.withContext(function($ctx2) {return _st(_st(_st(self)._cells())._at_(_st(cood)._x()))._at_(_st(cood)._y());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._on_do_((smalltalk.Error || Error),(function(){
return smalltalk.withContext(function($ctx2) {return nil;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"currentCell:",{anEvent:anEvent,x:x,y:y,cood:cood}, smalltalk.Map)});}
}),
smalltalk.Map);

smalltalk.addMethod(
"_goDown",
smalltalk.method({
selector: "goDown",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._coods_(_st(_st(self)._coods()).__plus(_st((0)).__at((100))));
_st(self)._updateCellsCoods();
_st(self)._update();
return self}, function($ctx1) {$ctx1.fill(self,"goDown",{}, smalltalk.Map)});}
}),
smalltalk.Map);

smalltalk.addMethod(
"_goLeft",
smalltalk.method({
selector: "goLeft",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._coods_(_st(_st(self)._coods()).__minus(_st((100)).__at((0))));
_st(self)._updateCellsCoods();
_st(self)._update();
return self}, function($ctx1) {$ctx1.fill(self,"goLeft",{}, smalltalk.Map)});}
}),
smalltalk.Map);

smalltalk.addMethod(
"_goRight",
smalltalk.method({
selector: "goRight",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._coods_(_st(_st(self)._coods()).__plus(_st((100)).__at((0))));
_st(self)._updateCellsCoods();
_st(self)._update();
return self}, function($ctx1) {$ctx1.fill(self,"goRight",{}, smalltalk.Map)});}
}),
smalltalk.Map);

smalltalk.addMethod(
"_goUp",
smalltalk.method({
selector: "goUp",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._coods_(_st(_st(self)._coods()).__minus(_st((0)).__at((100))));
_st(self)._updateCellsCoods();
_st(self)._update();
return self}, function($ctx1) {$ctx1.fill(self,"goUp",{}, smalltalk.Map)});}
}),
smalltalk.Map);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.Object.fn.prototype._initialize.apply(_st(self), []);
_st(self)._canvas_(_st((smalltalk.TagBrush || TagBrush))._fromJQuery_canvas_(_st(_st(self)._canvasId())._asJQuery(),_st((smalltalk.HTMLCanvas || HTMLCanvas))._onJQuery_(_st("body")._asJQuery())));
_st(self)._coods_(_st(_st(self)._canvasPadding()).__at(_st(self)._canvasPadding()));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.Map)});}
}),
smalltalk.Map);

smalltalk.addMethod(
"_initializeCache",
smalltalk.method({
selector: "initializeCache",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._cache_(_st((smalltalk.Cache || Cache))._getSingleton());
_st(_st(self)._cache())._onload_((function(){
return smalltalk.withContext(function($ctx2) {_st(self)._update();
_st(_st(_st(self)._actionMenu())._turnWatcher())._firstTurn();
return _st(_st(".loading")._asJQuery())._animate_duration_(smalltalk.HashedCollection._fromPairs_([_st("top").__minus_gt("-60%")]),(2500));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(_st(_st(self)._cache())._images())._preloadImages_(_st(self)._imagesToPreload());
return self}, function($ctx1) {$ctx1.fill(self,"initializeCache",{}, smalltalk.Map)});}
}),
smalltalk.Map);

smalltalk.addMethod(
"_initializeCellsFromJson_",
smalltalk.method({
selector: "initializeCellsFromJson:",
fn: function (jsonObject) {
var self=this;
var cood;
return smalltalk.withContext(function($ctx1) { _st(self)._cells_(_st((smalltalk.Array || Array))._new_(_st(_st(jsonObject)._row())._size()));
_st(_st(jsonObject)._row())._withIndexDo_((function(row,i){
return smalltalk.withContext(function($ctx2) {_st(_st(self)._cells())._at_put_(i,_st((smalltalk.Array || Array))._new_(_st(_st(row)._cells())._size()));
return _st(_st(row)._cells())._withIndexDo_((function(cell,j){
return smalltalk.withContext(function($ctx3) {cood=_st(self)._calculX_y_(i,j);
cood;
return _st(_st(_st(self)._cells())._at_(i))._at_put_(j,_st((smalltalk.Cell || Cell))._newInMap_jsoncell_coods_(self,cell,cood));
}, function($ctx3) {$ctx3.fillBlock({cell:cell,j:j},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({row:row,i:i},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initializeCellsFromJson:",{jsonObject:jsonObject,cood:cood}, smalltalk.Map)});}
}),
smalltalk.Map);

smalltalk.addMethod(
"_initializeEventHandling",
smalltalk.method({
selector: "initializeEventHandling",
fn: function () {
var self=this;
var canvasMouse;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._canvas())._onMouseUp_((function(e){
return smalltalk.withContext(function($ctx2) {return _st(self)._mouseClick_(e);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
_st(_st(self)._canvas())._onMouseMove_((function(e){
return smalltalk.withContext(function($ctx2) {return _st(self)._mouseMove_(e);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
_st(_st("window")._asJQuery())._resize_((function(){
return smalltalk.withContext(function($ctx2) {return _st(self)._update();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initializeEventHandling",{canvasMouse:canvasMouse}, smalltalk.Map)});}
}),
smalltalk.Map);

smalltalk.addMethod(
"_initializeFromJson_",
smalltalk.method({
selector: "initializeFromJson:",
fn: function (jsonObject) {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._initializeCache();
_st(_st(self)._coods())._x_(_st(_st(_st(self)._coods())._x()).__plus(_st(_st(_st(_st(_st(_st(jsonObject)._row())._at_((1)))._cells())._size()).__star(_st(self)._tileUnit())).__star((1.17))));
_st(self)._initializeCellsFromJson_(jsonObject);
_st(self)._initializeEventHandling();
_st(self)._actionMenu_(_st(self)._initializeActionMenu());
_st(_st(self)._actionMenu())._appendToJQuery_(_st(".menuEditor")._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"initializeFromJson:",{jsonObject:jsonObject}, smalltalk.Map)});}
}),
smalltalk.Map);

smalltalk.addMethod(
"_mirrorHorizontal",
smalltalk.method({
selector: "mirrorHorizontal",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st(_st(_st(self)._canvas())._element())._getContext_("2d");
_st($1)._translate_y_(_st(_st(_st(self)._canvas())._element())._width(),(0));
$2=_st($1)._scale_y_(_st((1))._negated(),(1));
_st(self)._update();
return self}, function($ctx1) {$ctx1.fill(self,"mirrorHorizontal",{}, smalltalk.Map)});}
}),
smalltalk.Map);

smalltalk.addMethod(
"_mirrorVertical",
smalltalk.method({
selector: "mirrorVertical",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st(_st(_st(self)._canvas())._element())._getContext_("2d");
_st($1)._translate_y_((0),_st(_st(_st(self)._canvas())._element())._height());
$2=_st($1)._scale_y_((1),_st((1))._negated());
_st(self)._update();
return self}, function($ctx1) {$ctx1.fill(self,"mirrorVertical",{}, smalltalk.Map)});}
}),
smalltalk.Map);

smalltalk.addMethod(
"_monsters",
smalltalk.method({
selector: "monsters",
fn: function () {
var self=this;
var monsters;
return smalltalk.withContext(function($ctx1) { var $1,$2;
monsters=_st((smalltalk.Array || Array))._new();
_st(self)._cellsDo_((function(cell){
return smalltalk.withContext(function($ctx2) {$1=_st(cell)._hasMonster();
if(smalltalk.assert($1)){
return _st(monsters)._add_(_st(cell)._monster());
};
}, function($ctx2) {$ctx2.fillBlock({cell:cell},$ctx1)})}));
$2=monsters;
return $2;
}, function($ctx1) {$ctx1.fill(self,"monsters",{monsters:monsters}, smalltalk.Map)});}
}),
smalltalk.Map);

smalltalk.addMethod(
"_monstersFromSide_",
smalltalk.method({
selector: "monstersFromSide:",
fn: function (aSide) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._monsters())._select_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(_st(each)._side()).__eq(aSide);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"monstersFromSide:",{aSide:aSide}, smalltalk.Map)});}
}),
smalltalk.Map);

smalltalk.addMethod(
"_mouseClick_",
smalltalk.method({
selector: "mouseClick:",
fn: function (anEvent) {
var self=this;
var cc;
return smalltalk.withContext(function($ctx1) { var $1;
cc=_st(self)._currentCell_(anEvent);
$1=cc;
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
_st(cc)._mouseClick_(_st(_st(self)._actionMenu())._actionCell());
};
_st(self)._update();
return self}, function($ctx1) {$ctx1.fill(self,"mouseClick:",{anEvent:anEvent,cc:cc}, smalltalk.Map)});}
}),
smalltalk.Map);

smalltalk.addMethod(
"_mouseCoodToHexCoodX_y_",
smalltalk.method({
selector: "mouseCoodToHexCoodX:y:",
fn: function (x, y) {
var self=this;
var xHex,yHex,array,mapDisplayX,mapDisplayY;
return smalltalk.withContext(function($ctx1) { var $1;
mapDisplayX=_st(_st(self)._coods())._x();
mapDisplayY=_st(_st(self)._coods())._y();
array=_st(self)._mouseCoodToHexCoodX_y_mapX_mapY_(x,y,mapDisplayX,mapDisplayY);
xHex=_st(array)._at_((1));
yHex=_st(array)._at_((2));
$1=_st(xHex).__at(yHex);
return $1;
}, function($ctx1) {$ctx1.fill(self,"mouseCoodToHexCoodX:y:",{x:x,y:y,xHex:xHex,yHex:yHex,array:array,mapDisplayX:mapDisplayX,mapDisplayY:mapDisplayY}, smalltalk.Map)});}
}),
smalltalk.Map);

smalltalk.addMethod(
"_mouseCoodToHexCoodX_y_mapX_mapY_",
smalltalk.method({
selector: "mouseCoodToHexCoodX:y:mapX:mapY:",
fn: function (x, y, mapDisplayX, mapDisplayY) {
var self=this;
return smalltalk.withContext(function($ctx1) { function mod(n, mod) {
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
return self}, function($ctx1) {$ctx1.fill(self,"mouseCoodToHexCoodX:y:mapX:mapY:",{x:x,y:y,mapDisplayX:mapDisplayX,mapDisplayY:mapDisplayY}, smalltalk.Map)});}
}),
smalltalk.Map);

smalltalk.addMethod(
"_mouseMove_",
smalltalk.method({
selector: "mouseMove:",
fn: function (anEvent) {
var self=this;
var cc;
return smalltalk.withContext(function($ctx1) { var $1;
cc=_st(self)._currentCell_(anEvent);
$1=cc;
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
_st(_st(_st(_st(self)._actionMenu())._tileWatcher())._tile_(_st(cc)._tile()))._update();
};
return self}, function($ctx1) {$ctx1.fill(self,"mouseMove:",{anEvent:anEvent,cc:cc}, smalltalk.Map)});}
}),
smalltalk.Map);

smalltalk.addMethod(
"_movableCellsNextTo_",
smalltalk.method({
selector: "movableCellsNextTo:",
fn: function (aCell) {
var self=this;
var movableCells;
return smalltalk.withContext(function($ctx1) { var $1;
movableCells=_st(_st(self)._cellsNextTo_(aCell))._select_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(each)._canMoveTo();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
_st(movableCells)._collect_((function(each){
return smalltalk.withContext(function($ctx2) {_st(each)._addSelector();
return _st(each)._prevCell_(aCell);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$1=movableCells;
return $1;
}, function($ctx1) {$ctx1.fill(self,"movableCellsNextTo:",{aCell:aCell,movableCells:movableCells}, smalltalk.Map)});}
}),
smalltalk.Map);

smalltalk.addMethod(
"_movableCellsNextTo_cycle_",
smalltalk.method({
selector: "movableCellsNextTo:cycle:",
fn: function (aCell, cycleNumber) {
var self=this;
var movableCells,tempSet;
return smalltalk.withContext(function($ctx1) { var $1;
_st(self)._removeSelection();
movableCells=_st(self)._movableCellsNextTo_(aCell);
_st(_st((1))._to_(_st(cycleNumber).__minus((1))))._do_((function(){
return smalltalk.withContext(function($ctx2) {tempSet=_st((smalltalk.Set || Set))._new();
tempSet;
_st(movableCells)._collect_((function(each){
return smalltalk.withContext(function($ctx3) {return _st(tempSet)._addAll_(_st(self)._movableCellsNextTo_(each));
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx1)})}));
return _st(movableCells)._addAll_(tempSet);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$1=movableCells;
return $1;
}, function($ctx1) {$ctx1.fill(self,"movableCellsNextTo:cycle:",{aCell:aCell,cycleNumber:cycleNumber,movableCells:movableCells,tempSet:tempSet}, smalltalk.Map)});}
}),
smalltalk.Map);

smalltalk.addMethod(
"_oldAlgoMouseCoodToHexCoodX_y_inMap_",
smalltalk.method({
selector: "oldAlgoMouseCoodToHexCoodX:y:inMap:",
fn: function (x, y, aMap) {
var self=this;
return smalltalk.withContext(function($ctx1) { return self}, function($ctx1) {$ctx1.fill(self,"oldAlgoMouseCoodToHexCoodX:y:inMap:",{x:x,y:y,aMap:aMap}, smalltalk.Map)});}
}),
smalltalk.Map);

smalltalk.addMethod(
"_printString",
smalltalk.method({
selector: "printString",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(_st(_st("Map (").__comma(_st(_st(self)._cells())._size())).__comma("x")).__comma(_st(_st(_st(self)._cells())._at_((1)))._size())).__comma(")");
return $1;
}, function($ctx1) {$ctx1.fill(self,"printString",{}, smalltalk.Map)});}
}),
smalltalk.Map);

smalltalk.addMethod(
"_removeSelection",
smalltalk.method({
selector: "removeSelection",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._cellsDo_((function(cell){
return smalltalk.withContext(function($ctx2) {return _st(cell)._removeSelector();
}, function($ctx2) {$ctx2.fillBlock({cell:cell},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"removeSelection",{}, smalltalk.Map)});}
}),
smalltalk.Map);

smalltalk.addMethod(
"_selectableCellsNextTo_side_cycle_",
smalltalk.method({
selector: "selectableCellsNextTo:side:cycle:",
fn: function (aCell, aSide, cycleNumber) {
var self=this;
var selectableCells,tempSet;
return smalltalk.withContext(function($ctx1) { var $1;
selectableCells=_st(self)._movableCellsNextTo_cycle_(aCell,cycleNumber);
tempSet=_st((smalltalk.Set || Set))._new();
_st(selectableCells)._collect_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(tempSet)._addAll_(_st(self)._attackableCellsNextTo_side_(each,aSide));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
_st(selectableCells)._addAll_(tempSet);
_st(selectableCells)._addAll_(_st(self)._attackableCellsNextTo_side_(aCell,aSide));
$1=selectableCells;
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectableCellsNextTo:side:cycle:",{aCell:aCell,aSide:aSide,cycleNumber:cycleNumber,selectableCells:selectableCells,tempSet:tempSet}, smalltalk.Map)});}
}),
smalltalk.Map);

smalltalk.addMethod(
"_showActiveMonsters",
smalltalk.method({
selector: "showActiveMonsters",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
_st(self)._removeSelection();
_st(self)._cellsDo_((function(cell){
return smalltalk.withContext(function($ctx2) {$1=_st(cell)._monster();
if(($receiver = $1) == nil || $receiver == undefined){
return $1;
} else {
$2=_st(_st(_st(cell)._monster())._state())._isKindOf_((smalltalk.Inactive || Inactive));
if(! smalltalk.assert($2)){
return _st(cell)._addSelectorColored_("white");
};
};
}, function($ctx2) {$ctx2.fillBlock({cell:cell},$ctx1)})}));
_st(_st(self)._actionMenu())._unshowMonster();
return self}, function($ctx1) {$ctx1.fill(self,"showActiveMonsters",{}, smalltalk.Map)});}
}),
smalltalk.Map);

smalltalk.addMethod(
"_tileUnit",
smalltalk.method({
selector: "tileUnit",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { return (50);
}, function($ctx1) {$ctx1.fill(self,"tileUnit",{}, smalltalk.Map)});}
}),
smalltalk.Map);

smalltalk.addMethod(
"_update",
smalltalk.method({
selector: "update",
fn: function () {
var self=this;
var elem;
return smalltalk.withContext(function($ctx1) { elem=_st(_st(self)._canvas())._element();
_st(_st(elem)._getContext_("2d"))._clearRect_y_width_height_((0),(0),_st(elem)._width(),_st(elem)._height());
_st(self)._cellsDo_((function(cell){
return smalltalk.withContext(function($ctx2) {return _st(cell)._draw();
}, function($ctx2) {$ctx2.fillBlock({cell:cell},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"update",{elem:elem}, smalltalk.Map)});}
}),
smalltalk.Map);

smalltalk.addMethod(
"_updateCellsCoods",
smalltalk.method({
selector: "updateCellsCoods",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._cells())._withIndexDo_((function(row,i){
return smalltalk.withContext(function($ctx2) {return _st(row)._withIndexDo_((function(cell,j){
return smalltalk.withContext(function($ctx3) {return _st(cell)._updateCoods_(_st(self)._calculX_y_(i,j));
}, function($ctx3) {$ctx3.fillBlock({cell:cell,j:j},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({row:row,i:i},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"updateCellsCoods",{}, smalltalk.Map)});}
}),
smalltalk.Map);


smalltalk.Map.klass.iVarNames = ['map'];
smalltalk.addMethod(
"_getSingleton",
smalltalk.method({
selector: "getSingleton",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@map"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@map"]=_st(self)._new();
$1=self["@map"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"getSingleton",{}, smalltalk.Map.klass)});}
}),
smalltalk.Map.klass);

smalltalk.addMethod(
"_jsCall_cb_",
smalltalk.method({
selector: "jsCall:cb:",
fn: function (aMapIndex, success) {
var self=this;
return smalltalk.withContext(function($ctx1) { $.getJSON('ressources/json/maps/map' + aMapIndex + '.json', success);
return self}, function($ctx1) {$ctx1.fill(self,"jsCall:cb:",{aMapIndex:aMapIndex,success:success}, smalltalk.Map.klass)});}
}),
smalltalk.Map.klass);

smalltalk.addMethod(
"_newWithMapIndex_",
smalltalk.method({
selector: "newWithMapIndex:",
fn: function (aMapIndex) {
var self=this;
var success,map1;
return smalltalk.withContext(function($ctx1) { var $1;
map1=_st(self)._getSingleton();
success=(function(data){
return smalltalk.withContext(function($ctx2) {return _st(map1)._initializeFromJson_(data);
}, function($ctx2) {$ctx2.fillBlock({data:data},$ctx1)})});
_st(self)._jsCall_cb_(aMapIndex,success);
$1=map1;
return $1;
}, function($ctx1) {$ctx1.fill(self,"newWithMapIndex:",{aMapIndex:aMapIndex,success:success,map1:map1}, smalltalk.Map.klass)});}
}),
smalltalk.Map.klass);


