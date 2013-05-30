smalltalk.addPackage('Easnoth-MapModel');
smalltalk.addClass('CWComponent', smalltalk.Object, ['parent'], 'Easnoth-MapModel');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.CWComponent)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.CWComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "announce:",
fn: function (anEvent){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._announcer())._announce_(anEvent);
return self}, function($ctx1) {$ctx1.fill(self,"announce:",{anEvent:anEvent},smalltalk.CWComponent)})},
messageSends: ["announce:", "announcer"]}),
smalltalk.CWComponent);

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
}, function($ctx1) {$ctx1.fill(self,"announcer",{},smalltalk.CWComponent)})},
messageSends: ["current"]}),
smalltalk.CWComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "children",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"children",{},smalltalk.CWComponent)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.CWComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "desactivateMonsters",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._children())._do_((function(child){
return smalltalk.withContext(function($ctx2) {
return _st(child)._desactivateMonsters();
}, function($ctx2) {$ctx2.fillBlock({child:child},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"desactivateMonsters",{},smalltalk.CWComponent)})},
messageSends: ["do:", "desactivateMonsters", "children"]}),
smalltalk.CWComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "lighten",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._children())._do_((function(child){
return smalltalk.withContext(function($ctx2) {
return _st(child)._lighten();
}, function($ctx2) {$ctx2.fillBlock({child:child},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"lighten",{},smalltalk.CWComponent)})},
messageSends: ["do:", "lighten", "children"]}),
smalltalk.CWComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "parent",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@parent"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"parent",{},smalltalk.CWComponent)})},
messageSends: []}),
smalltalk.CWComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "parent:",
fn: function (object){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@parent"]=object;
return self}, function($ctx1) {$ctx1.fill(self,"parent:",{object:object},smalltalk.CWComponent)})},
messageSends: []}),
smalltalk.CWComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "removeSelection",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._children())._do_((function(child){
return smalltalk.withContext(function($ctx2) {
return _st(child)._removeSelection();
}, function($ctx2) {$ctx2.fillBlock({child:child},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"removeSelection",{},smalltalk.CWComponent)})},
messageSends: ["do:", "removeSelection", "children"]}),
smalltalk.CWComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "root",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._parent())._root();
return $1;
}, function($ctx1) {$ctx1.fill(self,"root",{},smalltalk.CWComponent)})},
messageSends: ["root", "parent"]}),
smalltalk.CWComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "showActiveMonsters",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._children())._do_((function(child){
return smalltalk.withContext(function($ctx2) {
return _st(child)._showActiveMonsters();
}, function($ctx2) {$ctx2.fillBlock({child:child},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"showActiveMonsters",{},smalltalk.CWComponent)})},
messageSends: ["do:", "showActiveMonsters", "children"]}),
smalltalk.CWComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "unmark",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._children())._do_((function(child){
return smalltalk.withContext(function($ctx2) {
return _st(child)._unmark();
}, function($ctx2) {$ctx2.fillBlock({child:child},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"unmark",{},smalltalk.CWComponent)})},
messageSends: ["do:", "unmark", "children"]}),
smalltalk.CWComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "updateGOTs",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._root())._updateGOTs();
return self}, function($ctx1) {$ctx1.fill(self,"updateGOTs",{},smalltalk.CWComponent)})},
messageSends: ["updateGOTs", "root"]}),
smalltalk.CWComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "updateMap",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._root())._updateMap();
return self}, function($ctx1) {$ctx1.fill(self,"updateMap",{},smalltalk.CWComponent)})},
messageSends: ["updateMap", "root"]}),
smalltalk.CWComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "updateMonstersAndGOTs",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._root())._updateMonstersAndGOTs();
return self}, function($ctx1) {$ctx1.fill(self,"updateMonstersAndGOTs",{},smalltalk.CWComponent)})},
messageSends: ["updateMonstersAndGOTs", "root"]}),
smalltalk.CWComponent);



smalltalk.addClass('CWComposite', smalltalk.CWComponent, [], 'Easnoth-MapModel');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.CWComposite)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.CWComposite);

smalltalk.addMethod(
smalltalk.method({
selector: "childAt:",
fn: function (index){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._children())._at_(index);
return $1;
}, function($ctx1) {$ctx1.fill(self,"childAt:",{index:index},smalltalk.CWComposite)})},
messageSends: ["at:", "children"]}),
smalltalk.CWComposite);

smalltalk.addMethod(
smalltalk.method({
selector: "childAt:ifPresent:",
fn: function (index,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._children())._at_ifPresent_(index,aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"childAt:ifPresent:",{index:index,aBlock:aBlock},smalltalk.CWComposite)})},
messageSends: ["at:ifPresent:", "children"]}),
smalltalk.CWComposite);

smalltalk.addMethod(
smalltalk.method({
selector: "children",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"children",{},smalltalk.CWComposite)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.CWComposite);

smalltalk.addMethod(
smalltalk.method({
selector: "newChild:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(aClass)._new())._parent_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"newChild:",{aClass:aClass},smalltalk.CWComposite)})},
messageSends: ["parent:", "new"]}),
smalltalk.CWComposite);



smalltalk.addClass('CWCell', smalltalk.CWComposite, ['neighboursCache', 'background', 'gameOverTile', 'monster', 'state', 'prevCell', 'mark'], 'Easnoth-MapModel');
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
selector: "addGreenSelector",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._gameOverTile_(_st(self)._newGreenGOT());
return self}, function($ctx1) {$ctx1.fill(self,"addGreenSelector",{},smalltalk.CWCell)})},
messageSends: ["gameOverTile:", "newGreenGOT"]}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "addMonster:",
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._state())._cell_addMonster_(self,aMonster);
return self}, function($ctx1) {$ctx1.fill(self,"addMonster:",{aMonster:aMonster},smalltalk.CWCell)})},
messageSends: ["cell:addMonster:", "state"]}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "addRedSelector",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._gameOverTile_(_st(self)._newRedGOT());
return self}, function($ctx1) {$ctx1.fill(self,"addRedSelector",{},smalltalk.CWCell)})},
messageSends: ["gameOverTile:", "newRedGOT"]}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "addSelector",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._state())._addSelector_(self);
return self}, function($ctx1) {$ctx1.fill(self,"addSelector",{},smalltalk.CWCell)})},
messageSends: ["addSelector:", "state"]}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "addSelectorColored:",
fn: function (aColor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._gameOverTile_(_st(_st(self)._newGameOverTile())._initializeFromKey_(aColor));
return self}, function($ctx1) {$ctx1.fill(self,"addSelectorColored:",{aColor:aColor},smalltalk.CWCell)})},
messageSends: ["gameOverTile:", "initializeFromKey:", "newGameOverTile"]}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "addWhiteSelector",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._gameOverTile_(_st(self)._newWhiteGOT());
return self}, function($ctx1) {$ctx1.fill(self,"addWhiteSelector",{},smalltalk.CWCell)})},
messageSends: ["gameOverTile:", "newWhiteGOT"]}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "attackableNeighboursConsideringMoveForMonster:",
fn: function (aMonster){
var self=this;
var selectableCells;
return smalltalk.withContext(function($ctx1) { 
var $1;
selectableCells=_st(self)._selectableNeighboursForMonster_(aMonster);
$1=_st(selectableCells)._select_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._hasMonster();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"attackableNeighboursConsideringMoveForMonster:",{aMonster:aMonster,selectableCells:selectableCells},smalltalk.CWCell)})},
messageSends: ["selectableNeighboursForMonster:", "select:", "hasMonster"]}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "attackableNeighboursForMonster:",
fn: function (aMonster){
var self=this;
var attackableCells,tempCells;
function $Set(){return smalltalk.Set||(typeof Set=="undefined"?nil:Set)}
return smalltalk.withContext(function($ctx1) { 
var $1;
attackableCells=_st($Set())._new();
tempCells=_st(self)._movableNeighboursCycle_(_st(_st(aMonster)._range()).__minus((1)));
_st(tempCells)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(attackableCells)._addAll_(_st(each)._attackableNeighboursFrom_(_st(aMonster)._side()));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$1=attackableCells;
return $1;
}, function($ctx1) {$ctx1.fill(self,"attackableNeighboursForMonster:",{aMonster:aMonster,attackableCells:attackableCells,tempCells:tempCells},smalltalk.CWCell)})},
messageSends: ["new", "movableNeighboursCycle:", "-", "range", "do:", "addAll:", "attackableNeighboursFrom:", "side"]}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "attackableNeighboursFrom:",
fn: function (side){
var self=this;
var attackableCells;
return smalltalk.withContext(function($ctx1) { 
var $1;
attackableCells=_st(_st(self)._neighbours())._select_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._canBeAttackedBy_(side);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$1=attackableCells;
return $1;
}, function($ctx1) {$ctx1.fill(self,"attackableNeighboursFrom:",{side:side,attackableCells:attackableCells},smalltalk.CWCell)})},
messageSends: ["select:", "canBeAttackedBy:", "neighbours"]}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "background",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@background"];
if(($receiver = $2) == nil || $receiver == undefined){
$1=_st(self)._error_("should be initialized");
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"background",{},smalltalk.CWCell)})},
messageSends: ["ifNil:", "error:"]}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "backgroundAdd:",
fn: function (aBackground){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._background())._add_(aBackground);
return $1;
}, function($ctx1) {$ctx1.fill(self,"backgroundAdd:",{aBackground:aBackground},smalltalk.CWCell)})},
messageSends: ["add:", "background"]}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "backgroundAddAll:",
fn: function (aCol){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._background())._addAll_(aCol);
return $1;
}, function($ctx1) {$ctx1.fill(self,"backgroundAddAll:",{aCol:aCol},smalltalk.CWCell)})},
messageSends: ["addAll:", "background"]}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "canBeAttackedBy:",
fn: function (side){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._state())._cell_canBeAttackedBy_(self,side);
return $1;
}, function($ctx1) {$ctx1.fill(self,"canBeAttackedBy:",{side:side},smalltalk.CWCell)})},
messageSends: ["cell:canBeAttackedBy:", "state"]}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "cellToMoveBeforeAttack:context:",
fn: function (cellLast,gameContext){
var self=this;
var possibleCells,closestCell,shortestPath;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7,$8;
$1=_st(_st(self)._monster())._isRanged();
if(smalltalk.assert($1)){
$2=_st(self)._cellToMoveBeforeRangeAttack_(cellLast);
return $2;
};
$3=_st(_st(gameContext)._relatedCell())._isMarked();
if(smalltalk.assert($3)){
$4=_st(gameContext)._relatedCell();
return $4;
};
$5=_st(_st(cellLast)._neighbours())._includes_(self);
if(smalltalk.assert($5)){
$6=self;
return $6;
};
possibleCells=_st(_st(cellLast)._neighbours())._select_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._isMarked();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
shortestPath=(9999);
_st(possibleCells)._do_((function(each){
var pathSize;
return smalltalk.withContext(function($ctx2) {
pathSize=_st(_st(self)._pathTo_(each))._size();
pathSize;
$7=_st(pathSize).__lt(shortestPath);
if(smalltalk.assert($7)){
shortestPath=pathSize;
shortestPath;
closestCell=each;
return closestCell;
};
}, function($ctx2) {$ctx2.fillBlock({each:each,pathSize:pathSize},$ctx1)})}));
$8=closestCell;
return $8;
}, function($ctx1) {$ctx1.fill(self,"cellToMoveBeforeAttack:context:",{cellLast:cellLast,gameContext:gameContext,possibleCells:possibleCells,closestCell:closestCell,shortestPath:shortestPath},smalltalk.CWCell)})},
messageSends: ["ifTrue:", "cellToMoveBeforeRangeAttack:", "isRanged", "monster", "relatedCell", "isMarked", "includes:", "neighbours", "select:", "do:", "size", "pathTo:", "<"]}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "cellToMoveBeforeRangeAttack:",
fn: function (cellLast){
var self=this;
var possibleCells,closestCell,shortestPath;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
_st(self)._movableNeighboursCycle_(_st(_st(_st(self)._monster())._range()).__plus(_st(_st(self)._monster())._currentMove()));
possibleCells=_st(_st(cellLast)._neighbours())._select_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._isMarked();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
shortestPath=(9999);
_st(possibleCells)._do_((function(each){
var pathSize;
return smalltalk.withContext(function($ctx2) {
pathSize=_st(_st(self)._pathTo_(each))._size();
pathSize;
$1=_st(pathSize).__lt(shortestPath);
if(smalltalk.assert($1)){
shortestPath=pathSize;
shortestPath;
closestCell=each;
return closestCell;
};
}, function($ctx2) {$ctx2.fillBlock({each:each,pathSize:pathSize},$ctx1)})}));
shortestPath=_st(self)._pathTo_(closestCell);
$2=_st(_st(shortestPath)._size()).__lt(_st(_st(self)._monster())._range());
if(smalltalk.assert($2)){
$3=self;
return $3;
};
$4=_st(shortestPath)._at_(_st(_st(self)._monster())._range());
return $4;
}, function($ctx1) {$ctx1.fill(self,"cellToMoveBeforeRangeAttack:",{cellLast:cellLast,possibleCells:possibleCells,closestCell:closestCell,shortestPath:shortestPath},smalltalk.CWCell)})},
messageSends: ["movableNeighboursCycle:", "+", "currentMove", "monster", "range", "select:", "isMarked", "neighbours", "do:", "size", "pathTo:", "ifTrue:", "<", "at:"]}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "changeState:",
fn: function (stateClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._state_(_st(stateClass)._default());
return self}, function($ctx1) {$ctx1.fill(self,"changeState:",{stateClass:stateClass},smalltalk.CWCell)})},
messageSends: ["state:", "default"]}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "children",
fn: function (){
var self=this;
var children;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$5,$3;
children=_st($Array())._new();
$1=_st(self)._monster();
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
var var_;
var_=$receiver;
_st(children)._add_(var_);
};
$2=_st(self)._gameOverTile();
if(($receiver = $2) == nil || $receiver == undefined){
$2;
} else {
var var2;
var2=$receiver;
_st(children)._add_(var2);
};
$4=children;
_st($4)._addAll_(_st(self)._background());
$5=_st($4)._yourself();
$3=$5;
return $3;
}, function($ctx1) {$ctx1.fill(self,"children",{children:children},smalltalk.CWCell)})},
messageSends: ["new", "ifNotNil:", "add:", "monster", "gameOverTile", "addAll:", "background", "yourself"]}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "darken",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@gameOverTile"];
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
var got;
got=$receiver;
_st(got)._darken();
};
return self}, function($ctx1) {$ctx1.fill(self,"darken",{},smalltalk.CWCell)})},
messageSends: ["ifNotNil:", "darken"]}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "free",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._monster())._isNil();
return $1;
}, function($ctx1) {$ctx1.fill(self,"free",{},smalltalk.CWCell)})},
messageSends: ["isNil", "monster"]}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "gameOverTile",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@gameOverTile"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"gameOverTile",{},smalltalk.CWCell)})},
messageSends: []}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "gameOverTile:",
fn: function (aGOT){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@gameOverTile"]=aGOT;
return self}, function($ctx1) {$ctx1.fill(self,"gameOverTile:",{aGOT:aGOT},smalltalk.CWCell)})},
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
selector: "hasMonster",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._isFree())._not();
return $1;
}, function($ctx1) {$ctx1.fill(self,"hasMonster",{},smalltalk.CWCell)})},
messageSends: ["not", "isFree"]}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.CWComposite.fn.prototype._initialize.apply(_st(self), []);
self["@mark"]=false;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.CWCell)})},
messageSends: ["initialize"]}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeFromJson:",
fn: function (aJsonCell){
var self=this;
var elements,ots;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1;
elements=_st(aJsonCell)._keys();
self["@background"]=_st($Array())._new();
$1=_st(elements)._includes_("tile");
if(smalltalk.assert($1)){
_st(self)._backgroundAdd_(_st(_st(self)._newTile())._initializeFromKey_(_st(aJsonCell)._tile()));
};
ots=_st(_st(aJsonCell)._keys())._select_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._match_("overtile");
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
_st(ots)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(self)._backgroundAdd_(_st(_st(self)._newOverTile())._initializeFromKey_(_st(aJsonCell)._at_(each)));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initializeFromJson:",{aJsonCell:aJsonCell,elements:elements,ots:ots},smalltalk.CWCell)})},
messageSends: ["keys", "new", "ifTrue:", "backgroundAdd:", "initializeFromKey:", "tile", "newTile", "includes:", "select:", "match:", "do:", "at:", "newOverTile"]}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeState",
fn: function (){
var self=this;
function $CWCellState(){return smalltalk.CWCellState||(typeof CWCellState=="undefined"?nil:CWCellState)}
return smalltalk.withContext(function($ctx1) { 
_st($CWCellState())._initializeStateFor_(self);
return self}, function($ctx1) {$ctx1.fill(self,"initializeState",{},smalltalk.CWCell)})},
messageSends: ["initializeStateFor:"]}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "isFree",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._state())._isFree();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isFree",{},smalltalk.CWCell)})},
messageSends: ["isFree", "state"]}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "isMarked",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@mark"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"isMarked",{},smalltalk.CWCell)})},
messageSends: []}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "lighten",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(self)._isFree();
if(smalltalk.assert($1)){
$2=self["@gameOverTile"];
if(($receiver = $2) == nil || $receiver == undefined){
$2;
} else {
var got;
got=$receiver;
_st(got)._lighten();
};
};
return self}, function($ctx1) {$ctx1.fill(self,"lighten",{},smalltalk.CWCell)})},
messageSends: ["ifTrue:", "ifNotNil:", "lighten", "isFree"]}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "mark",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@mark"]=true;
return self}, function($ctx1) {$ctx1.fill(self,"mark",{},smalltalk.CWCell)})},
messageSends: []}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "monster",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@monster"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"monster",{},smalltalk.CWCell)})},
messageSends: []}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "monster:",
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@monster"]=aMonster;
return self}, function($ctx1) {$ctx1.fill(self,"monster:",{aMonster:aMonster},smalltalk.CWCell)})},
messageSends: []}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "mouseClick:",
fn: function (gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._state())._mouseClick_context_(self,gameContext);
return self}, function($ctx1) {$ctx1.fill(self,"mouseClick:",{gameContext:gameContext},smalltalk.CWCell)})},
messageSends: ["mouseClick:context:", "state"]}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "mouseMove:",
fn: function (gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._state())._mouseMove_context_(self,gameContext);
return self}, function($ctx1) {$ctx1.fill(self,"mouseMove:",{gameContext:gameContext},smalltalk.CWCell)})},
messageSends: ["mouseMove:context:", "state"]}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "movableNeighbours",
fn: function (){
var self=this;
var movableCells;
return smalltalk.withContext(function($ctx1) { 
var $1;
movableCells=_st(_st(self)._neighbours())._select_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(each)._isFree()).__and(_st(_st(each)._isMarked())._not());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
_st(movableCells)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
_st(each)._prevCell_(self);
return _st(each)._mark();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$1=movableCells;
return $1;
}, function($ctx1) {$ctx1.fill(self,"movableNeighbours",{movableCells:movableCells},smalltalk.CWCell)})},
messageSends: ["select:", "&", "not", "isMarked", "isFree", "neighbours", "do:", "prevCell:", "mark"]}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "movableNeighboursCycle:",
fn: function (cycleNumber){
var self=this;
var movableCells,tempSet;
function $Set(){return smalltalk.Set||(typeof Set=="undefined"?nil:Set)}
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(_st(self)._root())._unmark();
movableCells=_st([self])._asSet();
_st((1))._to_do_(cycleNumber,(function(i){
return smalltalk.withContext(function($ctx2) {
tempSet=_st($Set())._new();
tempSet;
_st(movableCells)._do_((function(each){
return smalltalk.withContext(function($ctx3) {
return _st(tempSet)._addAll_(_st(each)._movableNeighbours());
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx1)})}));
return _st(movableCells)._addAll_(tempSet);
}, function($ctx2) {$ctx2.fillBlock({i:i},$ctx1)})}));
$1=movableCells;
return $1;
}, function($ctx1) {$ctx1.fill(self,"movableNeighboursCycle:",{cycleNumber:cycleNumber,movableCells:movableCells,tempSet:tempSet},smalltalk.CWCell)})},
messageSends: ["unmark", "root", "asSet", "to:do:", "new", "do:", "addAll:", "movableNeighbours"]}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "neighbours",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@neighboursCache"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@neighboursCache"]=_st(_st(self)._parent())._neighboursOf_(self);
$1=self["@neighboursCache"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"neighbours",{},smalltalk.CWCell)})},
messageSends: ["ifNil:", "neighboursOf:", "parent"]}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "newGreenGOT",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._gameOverTileClass())._green();
return $1;
}, function($ctx1) {$ctx1.fill(self,"newGreenGOT",{},smalltalk.CWCell)})},
messageSends: ["green", "gameOverTileClass"]}),
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
selector: "newRedGOT",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._gameOverTileClass())._red();
return $1;
}, function($ctx1) {$ctx1.fill(self,"newRedGOT",{},smalltalk.CWCell)})},
messageSends: ["red", "gameOverTileClass"]}),
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
selector: "newWhiteGOT",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._gameOverTileClass())._white();
return $1;
}, function($ctx1) {$ctx1.fill(self,"newWhiteGOT",{},smalltalk.CWCell)})},
messageSends: ["white", "gameOverTileClass"]}),
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
selector: "pathTo:",
fn: function (cellLast){
var self=this;
var path;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1;
path=_st($Array())._with_(cellLast);
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self).__eq(_st(path)._last());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileFalse_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(path)._add_(_st(_st(path)._last())._prevCell());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$1=path;
return $1;
}, function($ctx1) {$ctx1.fill(self,"pathTo:",{cellLast:cellLast,path:path},smalltalk.CWCell)})},
messageSends: ["with:", "whileFalse:", "add:", "prevCell", "last", "="]}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "prevCell",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@prevCell"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"prevCell",{},smalltalk.CWCell)})},
messageSends: []}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "prevCell:",
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@prevCell"]=aCell;
return self}, function($ctx1) {$ctx1.fill(self,"prevCell:",{aCell:aCell},smalltalk.CWCell)})},
messageSends: []}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
fn: function (aStream){
var self=this;
var rowNumber,row,cellIndex;
return smalltalk.withContext(function($ctx1) { 
row=_st(self)._parent();
cellIndex=_st(_st(row)._cells())._indexOf_(self);
rowNumber=_st(_st(_st(row)._parent())._rows())._indexOf_(row);
_st(_st(_st(_st(_st(aStream).__lt_lt("a Cell(")).__lt_lt(_st(rowNumber)._printString())).__lt_lt("-")).__lt_lt(_st(cellIndex)._printString())).__lt_lt(")");
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream,rowNumber:rowNumber,row:row,cellIndex:cellIndex},smalltalk.CWCell)})},
messageSends: ["parent", "indexOf:", "cells", "rows", "<<", "printString"]}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "removeGameOverTile",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._gameOverTile_(nil);
return self}, function($ctx1) {$ctx1.fill(self,"removeGameOverTile",{},smalltalk.CWCell)})},
messageSends: ["gameOverTile:"]}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "removeMonster",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._state())._removeMonster_(self);
return self}, function($ctx1) {$ctx1.fill(self,"removeMonster",{},smalltalk.CWCell)})},
messageSends: ["removeMonster:", "state"]}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "removeSelection",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._state())._removeSelector_(self);
return self}, function($ctx1) {$ctx1.fill(self,"removeSelection",{},smalltalk.CWCell)})},
messageSends: ["removeSelector:", "state"]}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "selectableNeighboursForMonster:",
fn: function (aMonster){
var self=this;
var selectableCells,tempSet;
function $Set(){return smalltalk.Set||(typeof Set=="undefined"?nil:Set)}
return smalltalk.withContext(function($ctx1) { 
var $1;
selectableCells=_st(self)._movableNeighboursCycle_(_st(aMonster)._currentMove());
tempSet=_st($Set())._new();
_st(selectableCells)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(tempSet)._addAll_(_st(each)._attackableNeighboursForMonster_(aMonster));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
_st(selectableCells)._addAll_(tempSet);
$1=_st(selectableCells)._remove_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectableNeighboursForMonster:",{aMonster:aMonster,selectableCells:selectableCells,tempSet:tempSet},smalltalk.CWCell)})},
messageSends: ["movableNeighboursCycle:", "currentMove", "new", "do:", "addAll:", "attackableNeighboursForMonster:", "remove:"]}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "showActiveMonsters",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._state())._showActiveMonster_(self);
return self}, function($ctx1) {$ctx1.fill(self,"showActiveMonsters",{},smalltalk.CWCell)})},
messageSends: ["showActiveMonster:", "state"]}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "side",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._monster())._side();
return $1;
}, function($ctx1) {$ctx1.fill(self,"side",{},smalltalk.CWCell)})},
messageSends: ["side", "monster"]}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "state",
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
}, function($ctx1) {$ctx1.fill(self,"state",{},smalltalk.CWCell)})},
messageSends: ["ifNil:", "initializeState"]}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "state:",
fn: function (aState){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@state"]=aState;
return self}, function($ctx1) {$ctx1.fill(self,"state:",{aState:aState},smalltalk.CWCell)})},
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
selector: "unmark",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@mark"]=false;
return self}, function($ctx1) {$ctx1.fill(self,"unmark",{},smalltalk.CWCell)})},
messageSends: []}),
smalltalk.CWCell);



smalltalk.addClass('CWOneChildClass', smalltalk.CWComposite, [], 'Easnoth-MapModel');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.CWOneChildClass)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.CWOneChildClass);

smalltalk.addMethod(
smalltalk.method({
selector: "addChild:",
fn: function (object){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._children())._add_(object);
return $1;
}, function($ctx1) {$ctx1.fill(self,"addChild:",{object:object},smalltalk.CWOneChildClass)})},
messageSends: ["add:", "children"]}),
smalltalk.CWOneChildClass);

smalltalk.addMethod(
smalltalk.method({
selector: "childAt:put:",
fn: function (index,object){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._children())._at_put_(index,object);
return $1;
}, function($ctx1) {$ctx1.fill(self,"childAt:put:",{index:index,object:object},smalltalk.CWOneChildClass)})},
messageSends: ["at:put:", "children"]}),
smalltalk.CWOneChildClass);

smalltalk.addMethod(
smalltalk.method({
selector: "childBasicClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"childBasicClass",{},smalltalk.CWOneChildClass)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.CWOneChildClass);

smalltalk.addMethod(
smalltalk.method({
selector: "newChild",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._newChild_(_st(self)._childBasicClass());
return $1;
}, function($ctx1) {$ctx1.fill(self,"newChild",{},smalltalk.CWOneChildClass)})},
messageSends: ["newChild:", "childBasicClass"]}),
smalltalk.CWOneChildClass);

smalltalk.addMethod(
smalltalk.method({
selector: "removeChild:",
fn: function (object){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._children())._remove_(object);
return $1;
}, function($ctx1) {$ctx1.fill(self,"removeChild:",{object:object},smalltalk.CWOneChildClass)})},
messageSends: ["remove:", "children"]}),
smalltalk.CWOneChildClass);



smalltalk.addClass('CWMap', smalltalk.CWOneChildClass, ['rows', 'drawer'], 'Easnoth-MapModel');
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
selector: "children",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._rows();
return $1;
}, function($ctx1) {$ctx1.fill(self,"children",{},smalltalk.CWMap)})},
messageSends: ["rows"]}),
smalltalk.CWMap);

smalltalk.addMethod(
smalltalk.method({
selector: "clean",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@drawer"])._clean();
return self}, function($ctx1) {$ctx1.fill(self,"clean",{},smalltalk.CWMap)})},
messageSends: ["clean"]}),
smalltalk.CWMap);

smalltalk.addMethod(
smalltalk.method({
selector: "drawer",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@drawer"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"drawer",{},smalltalk.CWMap)})},
messageSends: []}),
smalltalk.CWMap);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeDrawer",
fn: function (){
var self=this;
function $CWMapDrawer(){return smalltalk.CWMapDrawer||(typeof CWMapDrawer=="undefined"?nil:CWMapDrawer)}
return smalltalk.withContext(function($ctx1) { 
self["@drawer"]=_st(_st($CWMapDrawer())._new())._initializeForMap_(self);
return self}, function($ctx1) {$ctx1.fill(self,"initializeDrawer",{},smalltalk.CWMap)})},
messageSends: ["initializeForMap:", "new"]}),
smalltalk.CWMap);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeFromJson:",
fn: function (jsonMap){
var self=this;
var child,rows1;
function $CWWaitForObject(){return smalltalk.CWWaitForObject||(typeof CWWaitForObject=="undefined"?nil:CWWaitForObject)}
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
function $CWObjectLoaded(){return smalltalk.CWObjectLoaded||(typeof CWObjectLoaded=="undefined"?nil:CWObjectLoaded)}
return smalltalk.withContext(function($ctx1) { 
_st(self)._announce_(_st($CWWaitForObject())._new());
rows1=_st(jsonMap)._row();
self["@rows"]=_st($Array())._new_(_st(rows1)._size());
_st(rows1)._withIndexDo_((function(row,i){
return smalltalk.withContext(function($ctx2) {
child=_st(self)._newChild();
child;
_st(self)._childAt_put_(i,child);
return _st(child)._initializeFromJson_(row);
}, function($ctx2) {$ctx2.fillBlock({row:row,i:i},$ctx1)})}));
_st(self)._announce_(_st($CWObjectLoaded())._new());
return self}, function($ctx1) {$ctx1.fill(self,"initializeFromJson:",{jsonMap:jsonMap,child:child,rows1:rows1},smalltalk.CWMap)})},
messageSends: ["announce:", "new", "row", "new:", "size", "withIndexDo:", "newChild", "childAt:put:", "initializeFromJson:"]}),
smalltalk.CWMap);

smalltalk.addMethod(
smalltalk.method({
selector: "neighboursOf:cellIndex:",
fn: function (row,cellIndex){
var self=this;
var rowIndex,neighbours;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
rowIndex=_st(_st(self)._rows())._indexOf_(row);
neighbours=_st($Array())._new();
$1=_st(rowIndex).__eq((1));
if(! smalltalk.assert($1)){
_st(neighbours)._addAll_(_st(_st(self)._childAt_(_st(rowIndex).__minus((1))))._cellsNextToI_j_(rowIndex,cellIndex));
};
$2=_st(rowIndex).__eq(_st(_st(self)._rows())._size());
if(! smalltalk.assert($2)){
_st(neighbours)._addAll_(_st(_st(self)._childAt_(_st(rowIndex).__plus((1))))._cellsNextToI_j_(rowIndex,cellIndex));
};
$3=neighbours;
return $3;
}, function($ctx1) {$ctx1.fill(self,"neighboursOf:cellIndex:",{row:row,cellIndex:cellIndex,rowIndex:rowIndex,neighbours:neighbours},smalltalk.CWMap)})},
messageSends: ["indexOf:", "rows", "new", "ifFalse:", "addAll:", "cellsNextToI:j:", "childAt:", "-", "=", "+", "size"]}),
smalltalk.CWMap);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=aStream;
_st($1)._nextPutAll_("a Map (");
_st($1)._nextPutAll_(_st(_st(self["@rows"])._size())._printString());
$2=_st($1)._nextPutAll_(" rows)");
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},smalltalk.CWMap)})},
messageSends: ["nextPutAll:", "printString", "size"]}),
smalltalk.CWMap);

smalltalk.addMethod(
smalltalk.method({
selector: "root",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"root",{},smalltalk.CWMap)})},
messageSends: []}),
smalltalk.CWMap);

smalltalk.addMethod(
smalltalk.method({
selector: "rows",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@rows"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"rows",{},smalltalk.CWMap)})},
messageSends: []}),
smalltalk.CWMap);

smalltalk.addMethod(
smalltalk.method({
selector: "showActiveMonsters",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._removeSelection();
smalltalk.CWOneChildClass.fn.prototype._showActiveMonsters.apply(_st(self), []);
return self}, function($ctx1) {$ctx1.fill(self,"showActiveMonsters",{},smalltalk.CWMap)})},
messageSends: ["removeSelection", "showActiveMonsters"]}),
smalltalk.CWMap);

smalltalk.addMethod(
smalltalk.method({
selector: "updateGOTs",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@drawer"])._updateGOTs();
return self}, function($ctx1) {$ctx1.fill(self,"updateGOTs",{},smalltalk.CWMap)})},
messageSends: ["updateGOTs"]}),
smalltalk.CWMap);

smalltalk.addMethod(
smalltalk.method({
selector: "updateMap",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@drawer"])._updateMap();
return self}, function($ctx1) {$ctx1.fill(self,"updateMap",{},smalltalk.CWMap)})},
messageSends: ["updateMap"]}),
smalltalk.CWMap);

smalltalk.addMethod(
smalltalk.method({
selector: "updateMonstersAndGOTs",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@drawer"])._updateMonstersAndGOTs();
return self}, function($ctx1) {$ctx1.fill(self,"updateMonstersAndGOTs",{},smalltalk.CWMap)})},
messageSends: ["updateMonstersAndGOTs"]}),
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


smalltalk.addClass('CWRow', smalltalk.CWOneChildClass, ['cells'], 'Easnoth-MapModel');
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
selector: "cells",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@cells"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"cells",{},smalltalk.CWRow)})},
messageSends: []}),
smalltalk.CWRow);

smalltalk.addMethod(
smalltalk.method({
selector: "cellsNextToI:j:",
fn: function (i,j){
var self=this;
var neighbours;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
neighbours=_st($Array())._new();
_st(self)._childAt_ifPresent_(j,(function(child){
return smalltalk.withContext(function($ctx2) {
return _st(neighbours)._add_(child);
}, function($ctx2) {$ctx2.fillBlock({child:child},$ctx1)})}));
$1=_st(_st(i).__backslash_backslash((2))).__eq((0));
if(smalltalk.assert($1)){
$3=_st(j).__gt((1));
if(smalltalk.assert($3)){
_st(self)._childAt_ifPresent_(_st(j).__minus((1)),(function(child){
return smalltalk.withContext(function($ctx2) {
return _st(neighbours)._add_(child);
}, function($ctx2) {$ctx2.fillBlock({child:child},$ctx1)})}));
};
} else {
$2=_st(j).__lt(_st(_st(self)._cells())._size());
if(smalltalk.assert($2)){
_st(self)._childAt_ifPresent_(_st(j).__plus((1)),(function(child){
return smalltalk.withContext(function($ctx2) {
return _st(neighbours)._add_(child);
}, function($ctx2) {$ctx2.fillBlock({child:child},$ctx1)})}));
};
};
$4=neighbours;
return $4;
}, function($ctx1) {$ctx1.fill(self,"cellsNextToI:j:",{i:i,j:j,neighbours:neighbours},smalltalk.CWRow)})},
messageSends: ["new", "childAt:ifPresent:", "add:", "ifFalse:ifTrue:", "ifTrue:", "+", "<", "size", "cells", "-", ">", "=", "\x5c\x5c"]}),
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
selector: "children",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._cells();
return $1;
}, function($ctx1) {$ctx1.fill(self,"children",{},smalltalk.CWRow)})},
messageSends: ["cells"]}),
smalltalk.CWRow);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeFromJson:",
fn: function (jsonRow){
var self=this;
var cells1,child;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
cells1=_st(jsonRow)._cells();
self["@cells"]=_st($Array())._new_(_st(cells1)._size());
_st(cells1)._withIndexDo_((function(cell,i){
return smalltalk.withContext(function($ctx2) {
child=_st(self)._newChild();
child;
_st(child)._initializeFromJson_(cell);
return _st(self)._childAt_put_(i,child);
}, function($ctx2) {$ctx2.fillBlock({cell:cell,i:i},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initializeFromJson:",{jsonRow:jsonRow,cells1:cells1,child:child},smalltalk.CWRow)})},
messageSends: ["cells", "new:", "size", "withIndexDo:", "newChild", "initializeFromJson:", "childAt:put:"]}),
smalltalk.CWRow);

smalltalk.addMethod(
smalltalk.method({
selector: "neighboursOf:",
fn: function (aCell){
var self=this;
var cellIndex,neighbours;
function $Set(){return smalltalk.Set||(typeof Set=="undefined"?nil:Set)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
neighbours=_st($Set())._new();
cellIndex=_st(_st(self)._cells())._indexOf_(aCell);
$1=_st(cellIndex).__eq((1));
if(! smalltalk.assert($1)){
_st(self)._childAt_ifPresent_(_st(cellIndex).__minus((1)),(function(child){
return smalltalk.withContext(function($ctx2) {
return _st(neighbours)._add_(child);
}, function($ctx2) {$ctx2.fillBlock({child:child},$ctx1)})}));
};
$2=_st(cellIndex).__eq(_st(_st(self)._cells())._size());
if(! smalltalk.assert($2)){
_st(self)._childAt_ifPresent_(_st(cellIndex).__plus((1)),(function(child){
return smalltalk.withContext(function($ctx2) {
return _st(neighbours)._add_(child);
}, function($ctx2) {$ctx2.fillBlock({child:child},$ctx1)})}));
};
_st(neighbours)._addAll_(_st(_st(self)._parent())._neighboursOf_cellIndex_(self,cellIndex));
$3=neighbours;
return $3;
}, function($ctx1) {$ctx1.fill(self,"neighboursOf:",{aCell:aCell,cellIndex:cellIndex,neighbours:neighbours},smalltalk.CWRow)})},
messageSends: ["new", "indexOf:", "cells", "ifFalse:", "childAt:ifPresent:", "-", "add:", "=", "+", "size", "addAll:", "neighboursOf:cellIndex:", "parent"]}),
smalltalk.CWRow);

smalltalk.addMethod(
smalltalk.method({
selector: "printString",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st("a Row (").__comma(_st(self["@cells"])._size())).__comma(" cells)");
return $1;
}, function($ctx1) {$ctx1.fill(self,"printString",{},smalltalk.CWRow)})},
messageSends: [",", "size"]}),
smalltalk.CWRow);



smalltalk.addClass('CWLeaf', smalltalk.CWComponent, [], 'Easnoth-MapModel');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.CWLeaf)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.CWLeaf);

smalltalk.addMethod(
smalltalk.method({
selector: "children",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=[];
return $1;
}, function($ctx1) {$ctx1.fill(self,"children",{},smalltalk.CWLeaf)})},
messageSends: []}),
smalltalk.CWLeaf);



smalltalk.addClass('CWImageLeaf', smalltalk.CWLeaf, ['image'], 'Easnoth-MapModel');
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
selector: "image:",
fn: function (anImage){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@image"]=anImage;
return self}, function($ctx1) {$ctx1.fill(self,"image:",{anImage:anImage},smalltalk.CWImageLeaf)})},
messageSends: []}),
smalltalk.CWImageLeaf);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeFromKey:",
fn: function (aKey){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@image"]=_st(_st(self)._class())._imageCacheAt_(aKey);
return self}, function($ctx1) {$ctx1.fill(self,"initializeFromKey:",{aKey:aKey},smalltalk.CWImageLeaf)})},
messageSends: ["imageCacheAt:", "class"]}),
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


smalltalk.CWImageLeaf.klass.iVarNames = ['imageCache'];
smalltalk.addMethod(
smalltalk.method({
selector: "folderName",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"folderName",{},smalltalk.CWImageLeaf.klass)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.CWImageLeaf.klass);

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
selector: "imageCacheAt:",
fn: function (aKey){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._imageCache())._at_ifAbsentPut_(aKey,(function(){
return smalltalk.withContext(function($ctx2) {
return _st(self)._newImageFrom_(aKey);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"imageCacheAt:",{aKey:aKey},smalltalk.CWImageLeaf.klass)})},
messageSends: ["at:ifAbsentPut:", "newImageFrom:", "imageCache"]}),
smalltalk.CWImageLeaf.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "newImageFrom:",
fn: function (aKey){
var self=this;
var announcer,image;
function $CWEasnothAnnouncer(){return smalltalk.CWEasnothAnnouncer||(typeof CWEasnothAnnouncer=="undefined"?nil:CWEasnothAnnouncer)}
function $NativeFunction(){return smalltalk.NativeFunction||(typeof NativeFunction=="undefined"?nil:NativeFunction)}
function $CWWaitForObject(){return smalltalk.CWWaitForObject||(typeof CWWaitForObject=="undefined"?nil:CWWaitForObject)}
function $CWObjectLoaded(){return smalltalk.CWObjectLoaded||(typeof CWObjectLoaded=="undefined"?nil:CWObjectLoaded)}
return smalltalk.withContext(function($ctx1) { 
var $1;
announcer=_st($CWEasnothAnnouncer())._current();
image=_st($NativeFunction())._constructor_("Image");
_st(_st(self)._imageCache())._at_put_(aKey,image);
_st(announcer)._announce_(_st($CWWaitForObject())._new());
_st(image)._at_put_("onload",(function(){
return smalltalk.withContext(function($ctx2) {
return _st(announcer)._announce_(_st($CWObjectLoaded())._new());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(image)._at_put_("src",_st(_st(_st(_st("ressources/images/").__comma(_st(self)._folderName())).__comma("/")).__comma(aKey)).__comma(".png"));
$1=image;
return $1;
}, function($ctx1) {$ctx1.fill(self,"newImageFrom:",{aKey:aKey,announcer:announcer,image:image},smalltalk.CWImageLeaf.klass)})},
messageSends: ["current", "constructor:", "at:put:", "imageCache", "announce:", "new", ",", "folderName"]}),
smalltalk.CWImageLeaf.klass);


smalltalk.addClass('CWBackground', smalltalk.CWImageLeaf, [], 'Easnoth-MapModel');
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


smalltalk.addMethod(
smalltalk.method({
selector: "folderName",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "back";
}, function($ctx1) {$ctx1.fill(self,"folderName",{},smalltalk.CWBackground.klass)})},
messageSends: []}),
smalltalk.CWBackground.klass);


smalltalk.addClass('CWOverTile', smalltalk.CWBackground, [], 'Easnoth-MapModel');
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
}, function($ctx1) {$ctx1.fill(self,"folderName",{},smalltalk.CWOverTile.klass)})},
messageSends: []}),
smalltalk.CWOverTile.klass);


smalltalk.addClass('CWGameOverTile', smalltalk.CWOverTile, [], 'Easnoth-MapModel');
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

smalltalk.addMethod(
smalltalk.method({
selector: "darken",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._image_(_st(_st(_st(self)._class())._imageArray())._at_(_st(_st(self)._class())._darkGreenIndex()));
return self}, function($ctx1) {$ctx1.fill(self,"darken",{},smalltalk.CWGameOverTile)})},
messageSends: ["image:", "at:", "darkGreenIndex", "class", "imageArray"]}),
smalltalk.CWGameOverTile);

smalltalk.addMethod(
smalltalk.method({
selector: "lighten",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._image_(_st(_st(_st(self)._class())._imageArray())._at_(_st(_st(self)._class())._greenIndex()));
return self}, function($ctx1) {$ctx1.fill(self,"lighten",{},smalltalk.CWGameOverTile)})},
messageSends: ["image:", "at:", "greenIndex", "class", "imageArray"]}),
smalltalk.CWGameOverTile);


smalltalk.CWGameOverTile.klass.iVarNames = ['imageArray'];
smalltalk.addMethod(
smalltalk.method({
selector: "createImageArray",
fn: function (){
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
self["@imageArray"]=_st($Array())._new_((5));
$1=self["@imageArray"];
_st($1)._at_put_(_st(self)._greenIndex(),_st(self)._imageCacheAt_("green"));
_st($1)._at_put_(_st(self)._darkGreenIndex(),_st(self)._imageCacheAt_("darkGreen"));
_st($1)._at_put_(_st(self)._redIndex(),_st(self)._imageCacheAt_("red"));
_st($1)._at_put_(_st(self)._whiteIndex(),_st(self)._imageCacheAt_("white"));
$2=_st($1)._at_put_(_st(self)._invisIndex(),_st(self)._imageCacheAt_("invis"));
$3=self["@imageArray"];
return $3;
}, function($ctx1) {$ctx1.fill(self,"createImageArray",{},smalltalk.CWGameOverTile.klass)})},
messageSends: ["new:", "at:put:", "greenIndex", "imageCacheAt:", "darkGreenIndex", "redIndex", "whiteIndex", "invisIndex"]}),
smalltalk.CWGameOverTile.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "darkGreenIndex",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(5);
return $1;
}, function($ctx1) {$ctx1.fill(self,"darkGreenIndex",{},smalltalk.CWGameOverTile.klass)})},
messageSends: []}),
smalltalk.CWGameOverTile.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "green",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._new())._image_(_st(_st(self)._imageArray())._at_(_st(self)._greenIndex()));
return $1;
}, function($ctx1) {$ctx1.fill(self,"green",{},smalltalk.CWGameOverTile.klass)})},
messageSends: ["image:", "at:", "greenIndex", "imageArray", "new"]}),
smalltalk.CWGameOverTile.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "greenIndex",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(1);
return $1;
}, function($ctx1) {$ctx1.fill(self,"greenIndex",{},smalltalk.CWGameOverTile.klass)})},
messageSends: []}),
smalltalk.CWGameOverTile.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "imageArray",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@imageArray"];
if(($receiver = $2) == nil || $receiver == undefined){
$1=_st(self)._createImageArray();
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"imageArray",{},smalltalk.CWGameOverTile.klass)})},
messageSends: ["ifNil:", "createImageArray"]}),
smalltalk.CWGameOverTile.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "invis",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._new())._image_(_st(_st(self)._imageArray())._at_(_st(self)._invisIndex()));
return $1;
}, function($ctx1) {$ctx1.fill(self,"invis",{},smalltalk.CWGameOverTile.klass)})},
messageSends: ["image:", "at:", "invisIndex", "imageArray", "new"]}),
smalltalk.CWGameOverTile.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "invisIndex",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(4);
return $1;
}, function($ctx1) {$ctx1.fill(self,"invisIndex",{},smalltalk.CWGameOverTile.klass)})},
messageSends: []}),
smalltalk.CWGameOverTile.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "red",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._new())._image_(_st(_st(self)._imageArray())._at_(_st(self)._redIndex()));
return $1;
}, function($ctx1) {$ctx1.fill(self,"red",{},smalltalk.CWGameOverTile.klass)})},
messageSends: ["image:", "at:", "redIndex", "imageArray", "new"]}),
smalltalk.CWGameOverTile.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "redIndex",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(2);
return $1;
}, function($ctx1) {$ctx1.fill(self,"redIndex",{},smalltalk.CWGameOverTile.klass)})},
messageSends: []}),
smalltalk.CWGameOverTile.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "white",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._new())._image_(_st(_st(self)._imageArray())._at_(_st(self)._whiteIndex()));
return $1;
}, function($ctx1) {$ctx1.fill(self,"white",{},smalltalk.CWGameOverTile.klass)})},
messageSends: ["image:", "at:", "whiteIndex", "imageArray", "new"]}),
smalltalk.CWGameOverTile.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "whiteIndex",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(3);
return $1;
}, function($ctx1) {$ctx1.fill(self,"whiteIndex",{},smalltalk.CWGameOverTile.klass)})},
messageSends: []}),
smalltalk.CWGameOverTile.klass);


smalltalk.addClass('CWTile', smalltalk.CWBackground, [], 'Easnoth-MapModel');
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
selector: "isWall",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isWall",{},smalltalk.CWTile)})},
messageSends: []}),
smalltalk.CWTile);


smalltalk.addMethod(
smalltalk.method({
selector: "folderName",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "tiles";
}, function($ctx1) {$ctx1.fill(self,"folderName",{},smalltalk.CWTile.klass)})},
messageSends: []}),
smalltalk.CWTile.klass);


smalltalk.addClass('CWWall', smalltalk.CWTile, [], 'Easnoth-MapModel');
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

smalltalk.addMethod(
smalltalk.method({
selector: "isWall",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isWall",{},smalltalk.CWWall)})},
messageSends: []}),
smalltalk.CWWall);



smalltalk.addClass('CWMonster', smalltalk.CWImageLeaf, ['currentMove', 'move', 'attack', 'dices', 'hp', 'range', 'state', 'player', 'special', 'strategy', 'typeStrategy'], 'Easnoth-MapModel');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@strategy"])._accept_for_(aVisitor,self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.CWMonster)})},
messageSends: ["accept:for:"]}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "activate",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._state())._activate_(self);
return self}, function($ctx1) {$ctx1.fill(self,"activate",{},smalltalk.CWMonster)})},
messageSends: ["activate:", "state"]}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "addSelectorsTo:",
fn: function (cells){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(_st(self)._root())._removeSelection();
_st(cells)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._addSelector();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
_st(_st(self)._parent())._movableNeighboursCycle_(_st(self)._currentMove());
$1=cells;
return $1;
}, function($ctx1) {$ctx1.fill(self,"addSelectorsTo:",{cells:cells},smalltalk.CWMonster)})},
messageSends: ["removeSelection", "root", "do:", "addSelector", "movableNeighboursCycle:", "currentMove", "parent"]}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "animationMoveFrom:to:callback:",
fn: function (cell1,cellLast,callback){
var self=this;
var path,moveNumber;
return smalltalk.withContext(function($ctx1) { 
path=_st(cell1)._pathTo_(cellLast);
moveNumber=_st(_st(path)._size()).__minus((1));
_st(_st(cell1)._root())._removeSelection();
_st(cell1)._updateGOTs();
_st((1))._to_do_(moveNumber,(function(j){
return smalltalk.withContext(function($ctx2) {
return _st((function(){
return smalltalk.withContext(function($ctx3) {
_st(_st(path)._at_(_st(_st(path)._size()).__minus(j)))._addMonster_(self);
_st(_st(path)._at_(_st(_st(_st(path)._size()).__plus((1))).__minus(j)))._removeMonster();
_st(_st(cell1)._root())._updateMonstersAndGOTs();
_st(self)._currentMove_(_st(_st(self)._currentMove()).__minus((1)));
return _st(self)._announceUpdate();
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}))._valueWithTimeout_(_st((300)).__star(j));
}, function($ctx2) {$ctx2.fillBlock({j:j},$ctx1)})}));
_st(callback)._valueWithTimeout_(_st((300)).__star(moveNumber));
return self}, function($ctx1) {$ctx1.fill(self,"animationMoveFrom:to:callback:",{cell1:cell1,cellLast:cellLast,callback:callback,path:path,moveNumber:moveNumber},smalltalk.CWMonster)})},
messageSends: ["pathTo:", "-", "size", "removeSelection", "root", "updateGOTs", "to:do:", "valueWithTimeout:", "*", "addMonster:", "at:", "removeMonster", "+", "updateMonstersAndGOTs", "currentMove:", "currentMove", "announceUpdate"]}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "announceUpdate",
fn: function (){
var self=this;
function $CWMonsterUpdateEvent(){return smalltalk.CWMonsterUpdateEvent||(typeof CWMonsterUpdateEvent=="undefined"?nil:CWMonsterUpdateEvent)}
return smalltalk.withContext(function($ctx1) { 
_st(self)._announce_(_st(_st($CWMonsterUpdateEvent())._new())._monster_(self));
return self}, function($ctx1) {$ctx1.fill(self,"announceUpdate",{},smalltalk.CWMonster)})},
messageSends: ["announce:", "monster:", "new"]}),
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
selector: "attack:inContext:",
fn: function (anotherMonster,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@typeStrategy"])._monster_attackNeighbour_inContext_(self,anotherMonster,gameContext);
return $1;
}, function($ctx1) {$ctx1.fill(self,"attack:inContext:",{anotherMonster:anotherMonster,gameContext:gameContext},smalltalk.CWMonster)})},
messageSends: ["monster:attackNeighbour:inContext:"]}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "attack:inContext:bonus:",
fn: function (anotherMonster,gameContext,int){
var self=this;
var ennemySupport,ennemyHerosSupport,ennemyUnitSupport,support,herosSupport,unitSupport,bonusDices,bonusAttack;
return smalltalk.withContext(function($ctx1) { 
var $1;
bonusDices=int;
bonusAttack=_st(int).__star((10));
$1=_st(_st(bonusDices).__plus(_st(self)._dices())).__lt((1));
if(smalltalk.assert($1)){
bonusDices=_st(_st(_st(self)._dices()).__minus((1)))._negated();
bonusDices;
};
_st(self)._resolveAttack_inContext_bonusDices_bonusAttack_(anotherMonster,gameContext,bonusDices,bonusAttack);
return self}, function($ctx1) {$ctx1.fill(self,"attack:inContext:bonus:",{anotherMonster:anotherMonster,gameContext:gameContext,int:int,ennemySupport:ennemySupport,ennemyHerosSupport:ennemyHerosSupport,ennemyUnitSupport:ennemyUnitSupport,support:support,herosSupport:herosSupport,unitSupport:unitSupport,bonusDices:bonusDices,bonusAttack:bonusAttack},smalltalk.CWMonster)})},
messageSends: ["*", "ifTrue:", "negated", "-", "dices", "<", "+", "resolveAttack:inContext:bonusDices:bonusAttack:"]}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "attackPotential",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@attack"]).__star(self["@dices"]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"attackPotential",{},smalltalk.CWMonster)})},
messageSends: ["*"]}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "attackPotentialFor:",
fn: function (target){
var self=this;
var adv;
return smalltalk.withContext(function($ctx1) { 
var $1;
adv=_st(self["@typeStrategy"])._bonusVS_(target);
$1=_st(_st(_st(self["@attack"]).__plus((10))).__star(adv)).__star(_st(self["@dices"]).__plus(adv));
return $1;
}, function($ctx1) {$ctx1.fill(self,"attackPotentialFor:",{target:target,adv:adv},smalltalk.CWMonster)})},
messageSends: ["bonusVS:", "*", "+"]}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "attackTo:inContext:",
fn: function (aCell,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._state())._monster_attackTo_inContext_(self,aCell,gameContext);
return self}, function($ctx1) {$ctx1.fill(self,"attackTo:inContext:",{aCell:aCell,gameContext:gameContext},smalltalk.CWMonster)})},
messageSends: ["monster:attackTo:inContext:", "state"]}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "attackableTargets",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._parent())._attackableNeighboursConsideringMoveForMonster_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"attackableTargets",{},smalltalk.CWMonster)})},
messageSends: ["attackableNeighboursConsideringMoveForMonster:", "parent"]}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "bonusVSCavalry",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@typeStrategy"])._bonusVSCavalry();
return $1;
}, function($ctx1) {$ctx1.fill(self,"bonusVSCavalry",{},smalltalk.CWMonster)})},
messageSends: ["bonusVSCavalry"]}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "bonusVSRange",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@typeStrategy"])._bonusVSRange();
return $1;
}, function($ctx1) {$ctx1.fill(self,"bonusVSRange",{},smalltalk.CWMonster)})},
messageSends: ["bonusVSRange"]}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "bonusVSTroop",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@typeStrategy"])._bonusVSTroop();
return $1;
}, function($ctx1) {$ctx1.fill(self,"bonusVSTroop",{},smalltalk.CWMonster)})},
messageSends: ["bonusVSTroop"]}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "changeState:",
fn: function (stateClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._state_(_st(stateClass)._default());
return self}, function($ctx1) {$ctx1.fill(self,"changeState:",{stateClass:stateClass},smalltalk.CWMonster)})},
messageSends: ["state:", "default"]}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "checkForNextTurn",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(_st(self)._currentMove()).__gt((0));
if(smalltalk.assert($1)){
$2=self;
return $2;
};
_st(_st(self)._state())._checkForNextTurn_(self);
return self}, function($ctx1) {$ctx1.fill(self,"checkForNextTurn",{},smalltalk.CWMonster)})},
messageSends: ["ifTrue:", ">", "currentMove", "checkForNextTurn:", "state"]}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "currentMove",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@currentMove"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"currentMove",{},smalltalk.CWMonster)})},
messageSends: []}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "currentMove:",
fn: function (int){
var self=this;
function $CWMonsterUpdateEvent(){return smalltalk.CWMonsterUpdateEvent||(typeof CWMonsterUpdateEvent=="undefined"?nil:CWMonsterUpdateEvent)}
return smalltalk.withContext(function($ctx1) { 
self["@currentMove"]=int;
_st(self)._announce_(_st($CWMonsterUpdateEvent())._new());
return self}, function($ctx1) {$ctx1.fill(self,"currentMove:",{int:int},smalltalk.CWMonster)})},
messageSends: ["announce:", "new"]}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultHp",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@strategy"])._defaultHP();
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultHp",{},smalltalk.CWMonster)})},
messageSends: ["defaultHP"]}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultState",
fn: function (){
var self=this;
function $CWInactive(){return smalltalk.CWInactive||(typeof CWInactive=="undefined"?nil:CWInactive)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=$CWInactive();
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultState",{},smalltalk.CWMonster)})},
messageSends: []}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "defensePotential",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@hp"]).__star((100));
return $1;
}, function($ctx1) {$ctx1.fill(self,"defensePotential",{},smalltalk.CWMonster)})},
messageSends: ["*"]}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "desactivateMonsters",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._state())._desactivate_(self);
return self}, function($ctx1) {$ctx1.fill(self,"desactivateMonsters",{},smalltalk.CWMonster)})},
messageSends: ["desactivate:", "state"]}),
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
selector: "die",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._parent())._removeMonster();
_st(_st(self)._player())._removeMonster_(self);
return self}, function($ctx1) {$ctx1.fill(self,"die",{},smalltalk.CWMonster)})},
messageSends: ["removeMonster", "parent", "removeMonster:", "player"]}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "hasPlayed",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._state())._hasPlayed_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"hasPlayed",{},smalltalk.CWMonster)})},
messageSends: ["hasPlayed:", "state"]}),
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
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.CWImageLeaf.fn.prototype._initialize.apply(_st(self), []);
_st(self)._currentMove_((0));
_st(self)._initializeState();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.CWMonster)})},
messageSends: ["initialize", "currentMove:", "initializeState"]}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeState",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._changeState_(_st(self)._defaultState());
return self}, function($ctx1) {$ctx1.fill(self,"initializeState",{},smalltalk.CWMonster)})},
messageSends: ["changeState:", "defaultState"]}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeWithStat:army:player:heros:type:",
fn: function (jsonStat,army,aPlayer,strat,aType){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._player_(aPlayer);
self["@strategy"]=_st(strat)._default();
self["@typeStrategy"]=_st(aType)._default();
_st(self)._stats_(jsonStat);
smalltalk.CWImageLeaf.fn.prototype._initializeFromKey_.apply(_st(self), [_st(_st(army).__comma("/")).__comma(_st(self)._key())]);
return self}, function($ctx1) {$ctx1.fill(self,"initializeWithStat:army:player:heros:type:",{jsonStat:jsonStat,army:army,aPlayer:aPlayer,strat:strat,aType:aType},smalltalk.CWMonster)})},
messageSends: ["player:", "default", "stats:", "initializeFromKey:", ",", "key"]}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "isAttackedByCavalry:inContext:",
fn: function (aMonster,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@typeStrategy"])._monster_isAttackedByCavalry_inContext_(self,aMonster,gameContext);
return $1;
}, function($ctx1) {$ctx1.fill(self,"isAttackedByCavalry:inContext:",{aMonster:aMonster,gameContext:gameContext},smalltalk.CWMonster)})},
messageSends: ["monster:isAttackedByCavalry:inContext:"]}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "isAttackedByRange:inContext:",
fn: function (aMonster,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@typeStrategy"])._monster_isAttackedByRange_inContext_(self,aMonster,gameContext);
return $1;
}, function($ctx1) {$ctx1.fill(self,"isAttackedByRange:inContext:",{aMonster:aMonster,gameContext:gameContext},smalltalk.CWMonster)})},
messageSends: ["monster:isAttackedByRange:inContext:"]}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "isAttackedByTroop:inContext:",
fn: function (aMonster,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@typeStrategy"])._monster_isAttackedByTroop_inContext_(self,aMonster,gameContext);
return $1;
}, function($ctx1) {$ctx1.fill(self,"isAttackedByTroop:inContext:",{aMonster:aMonster,gameContext:gameContext},smalltalk.CWMonster)})},
messageSends: ["monster:isAttackedByTroop:inContext:"]}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "isHeros",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@strategy"])._isHeros();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isHeros",{},smalltalk.CWMonster)})},
messageSends: ["isHeros"]}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "isInactive",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._state())._isInactive();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isInactive",{},smalltalk.CWMonster)})},
messageSends: ["isInactive", "state"]}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "isRanged",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@typeStrategy"])._isRanged();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isRanged",{},smalltalk.CWMonster)})},
messageSends: ["isRanged"]}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "isUnit",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._isHeros())._not();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isUnit",{},smalltalk.CWMonster)})},
messageSends: ["not", "isHeros"]}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "key",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@typeStrategy"])._key()).__comma(_st(self["@strategy"])._key());
return $1;
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.CWMonster)})},
messageSends: [",", "key"]}),
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
selector: "moveTo:inContext:",
fn: function (aCell,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._state())._monster_moveTo_inContext_(self,aCell,gameContext);
return self}, function($ctx1) {$ctx1.fill(self,"moveTo:inContext:",{aCell:aCell,gameContext:gameContext},smalltalk.CWMonster)})},
messageSends: ["monster:moveTo:inContext:", "state"]}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "moveTo:inContext:callback:",
fn: function (aCell,gameContext,callback){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._animationMoveFrom_to_callback_(_st(gameContext)._currentCell(),aCell,(function(){
return smalltalk.withContext(function($ctx2) {
_st(_st(self)._state())._changeStateAfterMoving_(self);
_st(self)._selectInContext_(gameContext);
_st(self)._checkForNextTurn();
return _st(callback)._value();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"moveTo:inContext:callback:",{aCell:aCell,gameContext:gameContext,callback:callback},smalltalk.CWMonster)})},
messageSends: ["animationMoveFrom:to:callback:", "currentCell", "changeStateAfterMoving:", "state", "selectInContext:", "checkForNextTurn", "value"]}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "player",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@player"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"player",{},smalltalk.CWMonster)})},
messageSends: []}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "player:",
fn: function (aPlayer){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@player"]=aPlayer;
return self}, function($ctx1) {$ctx1.fill(self,"player:",{aPlayer:aPlayer},smalltalk.CWMonster)})},
messageSends: []}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aStream)._nextPutAll_("a Monster(");
_st(aStream)._nextPutAll_(_st(_st(self)._parent())._printString());
_st(aStream)._nextPutAll_(")");
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},smalltalk.CWMonster)})},
messageSends: ["nextPutAll:", "printString", "parent"]}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "range",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@range"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"range",{},smalltalk.CWMonster)})},
messageSends: []}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "range:",
fn: function (int){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@range"]=int;
return self}, function($ctx1) {$ctx1.fill(self,"range:",{int:int},smalltalk.CWMonster)})},
messageSends: []}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "readyToBePicked",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._state())._readyToPick_(self);
return self}, function($ctx1) {$ctx1.fill(self,"readyToBePicked",{},smalltalk.CWMonster)})},
messageSends: ["readyToPick:", "state"]}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "removeHP:",
fn: function (anInt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(self)._hp_(_st(_st(self)._hp()).__minus(anInt));
$1=_st(_st(self)._hp()).__lt((1));
if(smalltalk.assert($1)){
_st(self)._die();
};
return self}, function($ctx1) {$ctx1.fill(self,"removeHP:",{anInt:anInt},smalltalk.CWMonster)})},
messageSends: ["hp:", "-", "hp", "ifTrue:", "die", "<"]}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "resolveAttack:inContext:bonusDices:bonusAttack:",
fn: function (anotherMonster,gameContext,bonusDices,bonusAttack){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._state())._changeStateAfterAttacking_(self);
_st(_st(self)._root())._removeSelection();
_st(self)._updateGOTs();
_st(self)._rollDicesCallBack_bonusDices_bonusAttack_((function(diceRes){
return smalltalk.withContext(function($ctx2) {
_st(anotherMonster)._removeHP_(_st(diceRes)._kills());
_st(self)._selectInContext_(gameContext);
_st(self)._checkForNextTurn();
return _st(self)._updateMonstersAndGOTs();
}, function($ctx2) {$ctx2.fillBlock({diceRes:diceRes},$ctx1)})}),bonusDices,bonusAttack);
return self}, function($ctx1) {$ctx1.fill(self,"resolveAttack:inContext:bonusDices:bonusAttack:",{anotherMonster:anotherMonster,gameContext:gameContext,bonusDices:bonusDices,bonusAttack:bonusAttack},smalltalk.CWMonster)})},
messageSends: ["changeStateAfterAttacking:", "state", "removeSelection", "root", "updateGOTs", "rollDicesCallBack:bonusDices:bonusAttack:", "removeHP:", "kills", "selectInContext:", "checkForNextTurn", "updateMonstersAndGOTs"]}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "rollDicesCallBack:bonusDices:bonusAttack:",
fn: function (aBlock,bonusDices,bonusAttack){
var self=this;
var kill,dicesRolledEvent;
function $CWDicesRolledEvent(){return smalltalk.CWDicesRolledEvent||(typeof CWDicesRolledEvent=="undefined"?nil:CWDicesRolledEvent)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
kill=_st(_st((1))._to_(_st(_st(self)._dices()).__plus(bonusDices)))._inject_into_((0),(function(acc,index){
return smalltalk.withContext(function($ctx2) {
$1=_st(_st((100))._atRandom()).__lt(_st(_st(self)._attack()).__plus(bonusAttack));
if(smalltalk.assert($1)){
return _st(acc).__plus((1));
} else {
return acc;
};
}, function($ctx2) {$ctx2.fillBlock({acc:acc,index:index},$ctx1)})}));
$2=_st($CWDicesRolledEvent())._new();
_st($2)._kills_(kill);
_st($2)._dices_(_st(_st(self)._dices()).__plus(bonusDices));
_st($2)._callback_(aBlock);
$3=_st($2)._yourself();
dicesRolledEvent=$3;
_st(self)._announce_(dicesRolledEvent);
return self}, function($ctx1) {$ctx1.fill(self,"rollDicesCallBack:bonusDices:bonusAttack:",{aBlock:aBlock,bonusDices:bonusDices,bonusAttack:bonusAttack,kill:kill,dicesRolledEvent:dicesRolledEvent},smalltalk.CWMonster)})},
messageSends: ["inject:into:", "ifTrue:ifFalse:", "+", "<", "attack", "atRandom", "to:", "dices", "kills:", "new", "dices:", "callback:", "yourself", "announce:"]}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "selectActionCells",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._addSelectorsTo_(_st(_st(self)._parent())._selectableNeighboursForMonster_(self));
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectActionCells",{},smalltalk.CWMonster)})},
messageSends: ["addSelectorsTo:", "selectableNeighboursForMonster:", "parent"]}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "selectAttackableCells",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._addSelectorsTo_(_st(_st(self)._parent())._attackableNeighboursForMonster_(self));
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectAttackableCells",{},smalltalk.CWMonster)})},
messageSends: ["addSelectorsTo:", "attackableNeighboursForMonster:", "parent"]}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "selectInContext:",
fn: function (gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(self)._announceUpdate();
$1=_st(_st(self)._state())._select_inContext_(self,gameContext);
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectInContext:",{gameContext:gameContext},smalltalk.CWMonster)})},
messageSends: ["announceUpdate", "select:inContext:", "state"]}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "selectMovableCells",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st(_st(self)._parent())._movableNeighboursCycle_(_st(self)._currentMove());
_st($2)._remove_(_st(self)._parent());
$3=_st($2)._yourself();
$1=_st(self)._addSelectorsTo_($3);
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectMovableCells",{},smalltalk.CWMonster)})},
messageSends: ["addSelectorsTo:", "remove:", "parent", "movableNeighboursCycle:", "currentMove", "yourself"]}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "showActiveMonster",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._state())._showActiveMonster_(self);
return self}, function($ctx1) {$ctx1.fill(self,"showActiveMonster",{},smalltalk.CWMonster)})},
messageSends: ["showActiveMonster:", "state"]}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "side",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@player"])._side();
return $1;
}, function($ctx1) {$ctx1.fill(self,"side",{},smalltalk.CWMonster)})},
messageSends: ["side"]}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "special",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@special"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"special",{},smalltalk.CWMonster)})},
messageSends: []}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "special:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@special"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"special:",{aString:aString},smalltalk.CWMonster)})},
messageSends: []}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "state",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@state"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"state",{},smalltalk.CWMonster)})},
messageSends: []}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "state:",
fn: function (aState){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@state"]=aState;
return self}, function($ctx1) {$ctx1.fill(self,"state:",{aState:aState},smalltalk.CWMonster)})},
messageSends: []}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "stats:",
fn: function (jsonStats){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._move_(_st(jsonStats)._move());
_st(self)._range_(_st(jsonStats)._range());
_st(self)._attack_(_st(jsonStats)._attack());
_st(self)._dices_(_st(jsonStats)._dices());
_st(self)._special_(_st(jsonStats)._special());
_st(self)._hp_(_st(self)._defaultHp());
return self}, function($ctx1) {$ctx1.fill(self,"stats:",{jsonStats:jsonStats},smalltalk.CWMonster)})},
messageSends: ["move:", "move", "range:", "range", "attack:", "attack", "dices:", "dices", "special:", "special", "hp:", "defaultHp"]}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "support",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._parent())._attackableNeighboursFrom_(_st(self)._side());
return $1;
}, function($ctx1) {$ctx1.fill(self,"support",{},smalltalk.CWMonster)})},
messageSends: ["attackableNeighboursFrom:", "side", "parent"]}),
smalltalk.CWMonster);


smalltalk.CWMonster.klass.iVarNames = ['jsonStatCache'];
smalltalk.addMethod(
smalltalk.method({
selector: "emptyMonster",
fn: function (){
var self=this;
var fakeImage;
function $NativeFunction(){return smalltalk.NativeFunction||(typeof NativeFunction=="undefined"?nil:NativeFunction)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
fakeImage=_st($NativeFunction())._constructor_("Image");
_st(fakeImage)._at_put_("src","ressources/images/interro.png");
$2=_st(self)._new();
_st($2)._image_(fakeImage);
_st($2)._hp_((0));
_st($2)._move_((0));
_st($2)._range_((0));
_st($2)._dices_((0));
_st($2)._attack_((0));
$3=_st($2)._special_("none");
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"emptyMonster",{fakeImage:fakeImage},smalltalk.CWMonster.klass)})},
messageSends: ["constructor:", "at:put:", "image:", "new", "hp:", "move:", "range:", "dices:", "attack:", "special:"]}),
smalltalk.CWMonster.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "folderName",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "monsters";
}, function($ctx1) {$ctx1.fill(self,"folderName",{},smalltalk.CWMonster.klass)})},
messageSends: []}),
smalltalk.CWMonster.klass);


smalltalk.addMethod(
smalltalk.method({
selector: "keys",
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
messageSends: ["new", "keysDo:", "add:"]}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "keysDo:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 

    	var o = self['@jsObject'];
    	for(var i in o) {
			aBlock(i);
		}
    ;
return self}, function($ctx1) {$ctx1.fill(self,"keysDo:",{aBlock:aBlock},smalltalk.JSObjectProxy)})},
messageSends: []}),
smalltalk.JSObjectProxy);
