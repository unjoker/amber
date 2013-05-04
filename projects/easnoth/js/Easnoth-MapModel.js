smalltalk.addPackage('Easnoth-MapModel');
smalltalk.addClass('CWComponent', smalltalk.Object, ['parent'], 'Easnoth-MapModel');
smalltalk.CWComponent.comment="I represent a business object of the game. The business objects are managed in a tree : you have a root object that has children (and children can also have children).\x0a\x0aGame logic is implemented in my subclasses. For Displaying, look at CWDrawer."
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.CWComponent)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.CWComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "announce:",
category: 'event',
fn: function (anEvent){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._announcer())._announce_(anEvent);
return self}, function($ctx1) {$ctx1.fill(self,"announce:",{anEvent:anEvent},smalltalk.CWComponent)})},
args: ["anEvent"],
source: "announce: anEvent\x0a\x09self announcer announce: anEvent",
messageSends: ["announce:", "announcer"],
referencedClasses: []
}),
smalltalk.CWComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "announcer",
category: 'accessing',
fn: function (){
var self=this;
function $CWEasnothAnnouncer(){return smalltalk.CWEasnothAnnouncer||(typeof CWEasnothAnnouncer=="undefined"?nil:CWEasnothAnnouncer)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($CWEasnothAnnouncer())._current();
return $1;
}, function($ctx1) {$ctx1.fill(self,"announcer",{},smalltalk.CWComponent)})},
args: [],
source: "announcer\x0a\x09^ CWEasnothAnnouncer current",
messageSends: ["current"],
referencedClasses: ["CWEasnothAnnouncer"]
}),
smalltalk.CWComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "children",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"children",{},smalltalk.CWComponent)})},
args: [],
source: "children\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.CWComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "desactivateMonsters",
category: 'selection',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._children())._do_((function(child){
return smalltalk.withContext(function($ctx2) {
return _st(child)._desactivateMonsters();
}, function($ctx2) {$ctx2.fillBlock({child:child},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"desactivateMonsters",{},smalltalk.CWComponent)})},
args: [],
source: "desactivateMonsters\x0a\x09self children do: [ :child |\x0a\x09\x09child desactivateMonsters ]",
messageSends: ["do:", "desactivateMonsters", "children"],
referencedClasses: []
}),
smalltalk.CWComponent);

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
}, function($ctx1) {$ctx1.fill(self,"parent",{},smalltalk.CWComponent)})},
args: [],
source: "parent\x0a\x09^ parent",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "parent:",
category: 'accessing',
fn: function (object){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@parent"]=object;
return self}, function($ctx1) {$ctx1.fill(self,"parent:",{object:object},smalltalk.CWComponent)})},
args: ["object"],
source: "parent: object\x0a\x09parent := object",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "removeSelection",
category: 'selection',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._children())._do_((function(child){
return smalltalk.withContext(function($ctx2) {
return _st(child)._removeSelection();
}, function($ctx2) {$ctx2.fillBlock({child:child},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"removeSelection",{},smalltalk.CWComponent)})},
args: [],
source: "removeSelection\x0a\x09self children do: [ :child |\x0a\x09\x09child removeSelection ]",
messageSends: ["do:", "removeSelection", "children"],
referencedClasses: []
}),
smalltalk.CWComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "root",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._parent())._root();
return $1;
}, function($ctx1) {$ctx1.fill(self,"root",{},smalltalk.CWComponent)})},
args: [],
source: "root\x0a\x09^ self parent root",
messageSends: ["root", "parent"],
referencedClasses: []
}),
smalltalk.CWComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "showActiveMonsters",
category: 'selection',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._children())._do_((function(child){
return smalltalk.withContext(function($ctx2) {
return _st(child)._showActiveMonsters();
}, function($ctx2) {$ctx2.fillBlock({child:child},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"showActiveMonsters",{},smalltalk.CWComponent)})},
args: [],
source: "showActiveMonsters\x0a\x09self children do: [ :child |\x0a\x09\x09child showActiveMonsters ]",
messageSends: ["do:", "showActiveMonsters", "children"],
referencedClasses: []
}),
smalltalk.CWComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "unmark",
category: 'selection',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._children())._do_((function(child){
return smalltalk.withContext(function($ctx2) {
return _st(child)._unmark();
}, function($ctx2) {$ctx2.fillBlock({child:child},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"unmark",{},smalltalk.CWComponent)})},
args: [],
source: "unmark\x0a\x09self children do: [ :child |\x0a\x09\x09child unmark ]",
messageSends: ["do:", "unmark", "children"],
referencedClasses: []
}),
smalltalk.CWComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "updateGOTs",
category: 'rendering',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._root())._updateGOTs();
return self}, function($ctx1) {$ctx1.fill(self,"updateGOTs",{},smalltalk.CWComponent)})},
args: [],
source: "updateGOTs\x0a\x09self root updateGOTs",
messageSends: ["updateGOTs", "root"],
referencedClasses: []
}),
smalltalk.CWComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "updateMap",
category: 'rendering',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._root())._updateMap();
return self}, function($ctx1) {$ctx1.fill(self,"updateMap",{},smalltalk.CWComponent)})},
args: [],
source: "updateMap\x0a\x09self root updateMap",
messageSends: ["updateMap", "root"],
referencedClasses: []
}),
smalltalk.CWComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "updateMonstersAndGOTs",
category: 'rendering',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._root())._updateMonstersAndGOTs();
return self}, function($ctx1) {$ctx1.fill(self,"updateMonstersAndGOTs",{},smalltalk.CWComponent)})},
args: [],
source: "updateMonstersAndGOTs\x0a\x09self root updateMonstersAndGOTs",
messageSends: ["updateMonstersAndGOTs", "root"],
referencedClasses: []
}),
smalltalk.CWComponent);



smalltalk.addClass('CWComposite', smalltalk.CWComponent, [], 'Easnoth-MapModel');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.CWComposite)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.CWComposite);

smalltalk.addMethod(
smalltalk.method({
selector: "childAt:",
category: 'children management',
fn: function (index){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._children())._at_(index);
return $1;
}, function($ctx1) {$ctx1.fill(self,"childAt:",{index:index},smalltalk.CWComposite)})},
args: ["index"],
source: "childAt: index \x0a\x09^ self children at: index",
messageSends: ["at:", "children"],
referencedClasses: []
}),
smalltalk.CWComposite);

smalltalk.addMethod(
smalltalk.method({
selector: "childAt:ifPresent:",
category: 'children management',
fn: function (index,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._children())._at_ifPresent_(index,aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"childAt:ifPresent:",{index:index,aBlock:aBlock},smalltalk.CWComposite)})},
args: ["index", "aBlock"],
source: "childAt: index ifPresent: aBlock\x0a\x09^ self children at: index ifPresent: aBlock",
messageSends: ["at:ifPresent:", "children"],
referencedClasses: []
}),
smalltalk.CWComposite);

smalltalk.addMethod(
smalltalk.method({
selector: "children",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"children",{},smalltalk.CWComposite)})},
args: [],
source: "children\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.CWComposite);

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
}, function($ctx1) {$ctx1.fill(self,"newChild:",{aClass:aClass},smalltalk.CWComposite)})},
args: ["aClass"],
source: "newChild: aClass\x0a\x09^ aClass new parent: self",
messageSends: ["parent:", "new"],
referencedClasses: []
}),
smalltalk.CWComposite);



smalltalk.addClass('CWCell', smalltalk.CWComposite, ['neighboursCache', 'background', 'gameOverTile', 'monster', 'state', 'properties'], 'Easnoth-MapModel');
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
source: "accept: aVisitor\x0a\x09^ aVisitor visitCell: self ",
messageSends: ["visitCell:"],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "addMonster:",
category: 'state delegation',
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._state())._cell_addMonster_(self,aMonster);
return self}, function($ctx1) {$ctx1.fill(self,"addMonster:",{aMonster:aMonster},smalltalk.CWCell)})},
args: ["aMonster"],
source: "addMonster: aMonster\x0a\x09self state cell: self addMonster: aMonster",
messageSends: ["cell:addMonster:", "state"],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "addSelector",
category: 'state delegation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._state())._addSelector_(self);
return self}, function($ctx1) {$ctx1.fill(self,"addSelector",{},smalltalk.CWCell)})},
args: [],
source: "addSelector\x0a\x09self state addSelector: self",
messageSends: ["addSelector:", "state"],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "addSelectorColored:",
category: 'selection',
fn: function (aColor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._gameOverTile_(_st(_st(self)._newGameOverTile())._initializeFromKey_(aColor));
return self}, function($ctx1) {$ctx1.fill(self,"addSelectorColored:",{aColor:aColor},smalltalk.CWCell)})},
args: ["aColor"],
source: "addSelectorColored: aColor\x0a\x09self gameOverTile: (self newGameOverTile initializeFromKey: aColor)",
messageSends: ["gameOverTile:", "initializeFromKey:", "newGameOverTile"],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "attackableNeighboursConsideringMoveForMonster:",
category: 'neighbourhood',
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
args: ["aMonster"],
source: "attackableNeighboursConsideringMoveForMonster: aMonster\x0a\x09\x22for AI. Answers the collection of attackable ennemies considering the move of the monster\x22\x0a\x09\x0a\x09| selectableCells |\x0a\x09selectableCells := self selectableNeighboursForMonster: aMonster.\x0a\x09^ selectableCells select: [ :each | each hasMonster ]",
messageSends: ["selectableNeighboursForMonster:", "select:", "hasMonster"],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "attackableNeighboursForMonster:",
category: 'neighbourhood',
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
args: ["aMonster"],
source: "attackableNeighboursForMonster: aMonster\x0a\x09\x0a\x09| attackableCells tempCells |\x0a\x09\x0a\x09attackableCells := Set new.\x0a\x09tempCells := self movableNeighboursCycle: aMonster range - 1.\x0a\x09\x0a\x09tempCells do: [ :each |\x0a\x09\x09attackableCells addAll: (each attackableNeighboursFrom: aMonster side) ].\x0a\x0a\x09^ attackableCells",
messageSends: ["new", "movableNeighboursCycle:", "-", "range", "do:", "addAll:", "attackableNeighboursFrom:", "side"],
referencedClasses: ["Set"]
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "attackableNeighboursFrom:",
category: 'neighbourhood',
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
args: ["side"],
source: "attackableNeighboursFrom: side\x0a\x09|attackableCells|\x0a\x09attackableCells := self neighbours select: [ :each | \x0a\x09\x09\x09\x09\x09each canBeAttackedBy: side ].\x0a\x09^ attackableCells",
messageSends: ["select:", "canBeAttackedBy:", "neighbours"],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "background",
category: 'accessing',
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
args: [],
source: "background\x0a\x09^ background ifNil: [ self error: 'should be initialized' ]",
messageSends: ["ifNil:", "error:"],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "backgroundAdd:",
category: 'accessing',
fn: function (aBackground){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._background())._add_(aBackground);
return $1;
}, function($ctx1) {$ctx1.fill(self,"backgroundAdd:",{aBackground:aBackground},smalltalk.CWCell)})},
args: ["aBackground"],
source: "backgroundAdd: aBackground\x0a\x09^ self background add: aBackground",
messageSends: ["add:", "background"],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "backgroundAddAll:",
category: 'accessing',
fn: function (aCol){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._background())._addAll_(aCol);
return $1;
}, function($ctx1) {$ctx1.fill(self,"backgroundAddAll:",{aCol:aCol},smalltalk.CWCell)})},
args: ["aCol"],
source: "backgroundAddAll: aCol\x0a\x09^ self background addAll: aCol",
messageSends: ["addAll:", "background"],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "canBeAttackedBy:",
category: 'state delegation',
fn: function (side){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._state())._cell_canBeAttackedBy_(self,side);
return $1;
}, function($ctx1) {$ctx1.fill(self,"canBeAttackedBy:",{side:side},smalltalk.CWCell)})},
args: ["side"],
source: "canBeAttackedBy: side\x0a\x09^ self state cell: self canBeAttackedBy: side",
messageSends: ["cell:canBeAttackedBy:", "state"],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "cellToMoveBeforeAttack:",
category: 'pathfinding',
fn: function (cellLast){
var self=this;
var possibleCells,closestCell,shortestPath;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
$1=_st(_st(self)._monster())._isRanged();
if(smalltalk.assert($1)){
$2=_st(self)._cellToMoveBeforeRangeAttack_(cellLast);
return $2;
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
$3=_st(pathSize).__lt(shortestPath);
if(smalltalk.assert($3)){
shortestPath=pathSize;
shortestPath;
closestCell=each;
return closestCell;
};
}, function($ctx2) {$ctx2.fillBlock({each:each,pathSize:pathSize},$ctx1)})}));
$4=closestCell;
return $4;
}, function($ctx1) {$ctx1.fill(self,"cellToMoveBeforeAttack:",{cellLast:cellLast,possibleCells:possibleCells,closestCell:closestCell,shortestPath:shortestPath},smalltalk.CWCell)})},
args: ["cellLast"],
source: "cellToMoveBeforeAttack: cellLast\x0a\x09\x22Assumes that a monster is at self and want to attack cellLast's monster, which is not a neighbour.\x0a\x09Answers the closest cell from cell1 that the current monster can reach to attack cellLast's monster\x22\x0a\x0a\x09| possibleCells closestCell shortestPath |\x0a\x09self monster isRanged ifTrue: [ ^ self cellToMoveBeforeRangeAttack: cellLast ].\x0a\x09possibleCells := cellLast neighbours select: [:each | each isMarked ].\x0a\x09shortestPath := 9999.\x0a\x09possibleCells do: [ :each | \x0a\x09\x09| pathSize |\x0a\x09\x09pathSize := (self pathTo: each) size.\x0a\x09\x09pathSize < shortestPath \x0a\x09\x09\x09ifTrue: [ \x0a\x09\x09\x09\x09shortestPath := pathSize.\x0a\x09\x09\x09\x09closestCell := each ] ].\x0a\x09^ closestCell",
messageSends: ["ifTrue:", "cellToMoveBeforeRangeAttack:", "isRanged", "monster", "select:", "isMarked", "neighbours", "do:", "size", "pathTo:", "<"],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "cellToMoveBeforeRangeAttack:",
category: 'pathfinding',
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
args: ["cellLast"],
source: "cellToMoveBeforeRangeAttack: cellLast\x0a\x09| possibleCells closestCell shortestPath |\x0a\x09\x22hacky for now ...\x22\x0a\x09self movableNeighboursCycle: self monster range + self monster currentMove. \x22create fake tracks to ennemy\x22\x0a\x09possibleCells := cellLast neighbours select: [:each | each isMarked ].\x0a\x09shortestPath := 9999.\x0a\x09possibleCells do: [ :each | \x0a\x09\x09| pathSize |\x0a\x09\x09pathSize := (self pathTo: each) size.\x0a\x09\x09pathSize < shortestPath \x0a\x09\x09\x09ifTrue: [ \x0a\x09\x09\x09\x09shortestPath := pathSize.\x0a\x09\x09\x09\x09closestCell := each ] ].\x0a\x09\x0a\x09shortestPath := self pathTo: closestCell. \x22shortest fake track to ennemy\x22\x0a\x09shortestPath size < self monster range ifTrue: [ ^ self ]. \x22for AI move calculs only\x22\x0a\x09^ shortestPath at: self monster range. \x22in fake track, get furthest from ennemy cell where you can attack him\x22",
messageSends: ["movableNeighboursCycle:", "+", "currentMove", "monster", "range", "select:", "isMarked", "neighbours", "do:", "size", "pathTo:", "ifTrue:", "<", "at:"],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "changeState:",
category: 'state machine',
fn: function (stateClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._state_(_st(stateClass)._default());
return self}, function($ctx1) {$ctx1.fill(self,"changeState:",{stateClass:stateClass},smalltalk.CWCell)})},
args: ["stateClass"],
source: "changeState: stateClass\x0a\x09self state: stateClass default",
messageSends: ["state:", "default"],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "children",
category: 'accessing',
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
args: [],
source: "children\x0a\x09| children | \x0a\x09children := Array new.\x0a\x09self monster ifNotNil: [ :var |\x0a\x09\x09children add: var ].\x0a\x09self gameOverTile ifNotNil: [ :var2 |\x0a\x09\x09children add: var2 ].\x0a\x09^ children\x0a\x09\x09addAll: self background;\x0a\x09\x09yourself",
messageSends: ["new", "ifNotNil:", "add:", "monster", "gameOverTile", "addAll:", "background", "yourself"],
referencedClasses: ["Array"]
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "free",
category: 'initialize-release',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._monster())._isNil();
return $1;
}, function($ctx1) {$ctx1.fill(self,"free",{},smalltalk.CWCell)})},
args: [],
source: "free\x0a\x09\x22used to initialize State, so should not rely on state. see isFree\x22\x0a\x09^ self monster isNil",
messageSends: ["isNil", "monster"],
referencedClasses: []
}),
smalltalk.CWCell);

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
}, function($ctx1) {$ctx1.fill(self,"gameOverTile",{},smalltalk.CWCell)})},
args: [],
source: "gameOverTile\x0a\x09^ gameOverTile",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "gameOverTile:",
category: 'accessing',
fn: function (aGOT){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@gameOverTile"]=aGOT;
return self}, function($ctx1) {$ctx1.fill(self,"gameOverTile:",{aGOT:aGOT},smalltalk.CWCell)})},
args: ["aGOT"],
source: "gameOverTile: aGOT\x0a\x09gameOverTile := aGOT",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "gameOverTileClass",
category: 'factory',
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
selector: "hasMonster",
category: 'state delegation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._isFree())._not();
return $1;
}, function($ctx1) {$ctx1.fill(self,"hasMonster",{},smalltalk.CWCell)})},
args: [],
source: "hasMonster\x0a\x09^ self isFree not",
messageSends: ["not", "isFree"],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeFromJson:",
category: 'initialize-release',
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
args: ["aJsonCell"],
source: "initializeFromJson: aJsonCell\x0a    | elements ots |\x0a    \x0a    elements := aJsonCell keys.\x0a    background := Array new.\x0a\x09\x0a\x09(elements includes: 'tile') \x0a    \x09ifTrue: [ self backgroundAdd: (self newTile initializeFromKey: aJsonCell tile) ].\x0a\x09\x22replace match: with beginsWith: later ...\x22\x0a\x09ots := aJsonCell keys select: [ :each | each match: 'overtile' ].\x0a\x09ots do: [ :each |\x0a\x09\x09self backgroundAdd: (self newOverTile initializeFromKey: (aJsonCell at: each) ) ].",
messageSends: ["keys", "new", "ifTrue:", "backgroundAdd:", "initializeFromKey:", "tile", "newTile", "includes:", "select:", "match:", "do:", "at:", "newOverTile"],
referencedClasses: ["Array"]
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeState",
category: 'state machine',
fn: function (){
var self=this;
function $CWCellState(){return smalltalk.CWCellState||(typeof CWCellState=="undefined"?nil:CWCellState)}
return smalltalk.withContext(function($ctx1) { 
_st($CWCellState())._initializeStateFor_(self);
return self}, function($ctx1) {$ctx1.fill(self,"initializeState",{},smalltalk.CWCell)})},
args: [],
source: "initializeState\x0a\x09CWCellState initializeStateFor: self",
messageSends: ["initializeStateFor:"],
referencedClasses: ["CWCellState"]
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "isFree",
category: 'state delegation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._state())._isFree();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isFree",{},smalltalk.CWCell)})},
args: [],
source: "isFree\x0a\x09\x22Answers true if cell free or freeselected\x22\x0a\x09^ self state isFree",
messageSends: ["isFree", "state"],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "isMarked",
category: 'accessing - properties',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._propertyAt_ifAbsent_("mark",(function(){
return smalltalk.withContext(function($ctx2) {
return false;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"isMarked",{},smalltalk.CWCell)})},
args: [],
source: "isMarked\x0a\x09^ self propertyAt: #mark ifAbsent: [ false ]",
messageSends: ["propertyAt:ifAbsent:"],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "mark",
category: 'accessing - properties',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._propertyAt_put_("mark",true);
return self}, function($ctx1) {$ctx1.fill(self,"mark",{},smalltalk.CWCell)})},
args: [],
source: "mark\x0a\x09self propertyAt: #mark put: true",
messageSends: ["propertyAt:put:"],
referencedClasses: []
}),
smalltalk.CWCell);

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
}, function($ctx1) {$ctx1.fill(self,"monster",{},smalltalk.CWCell)})},
args: [],
source: "monster\x0a\x09^ monster",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "monster:",
category: 'accessing',
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@monster"]=aMonster;
return self}, function($ctx1) {$ctx1.fill(self,"monster:",{aMonster:aMonster},smalltalk.CWCell)})},
args: ["aMonster"],
source: "monster: aMonster\x0a\x09monster := aMonster",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "mouseClick:",
category: 'state delegation',
fn: function (gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._state())._mouseClick_context_(self,gameContext);
return self}, function($ctx1) {$ctx1.fill(self,"mouseClick:",{gameContext:gameContext},smalltalk.CWCell)})},
args: ["gameContext"],
source: "mouseClick: gameContext\x0a\x09self state mouseClick: self context: gameContext.",
messageSends: ["mouseClick:context:", "state"],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "movableNeighbours",
category: 'neighbourhood',
fn: function (){
var self=this;
var movableCells;
return smalltalk.withContext(function($ctx1) { 
var $1;
movableCells=_st(_st(self)._neighbours())._select_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(each)._isFree())._and_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(_st(each)._isMarked())._not();
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
_st(movableCells)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
_st(each)._prevCell_(self);
return _st(each)._mark();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$1=movableCells;
return $1;
}, function($ctx1) {$ctx1.fill(self,"movableNeighbours",{movableCells:movableCells},smalltalk.CWCell)})},
args: [],
source: "movableNeighbours\x0a\x09|movableCells|\x0a\x0a\x09movableCells := self neighbours select: [:each | each isFree and: [ each isMarked not ] ].\x0a\x09\x0a\x09\x22this add a track for pathfinding\x22\x0a\x09movableCells do: [ :each |\x0a\x09\x09\x09each prevCell: self.\x0a\x09\x09\x09each mark].\x0a\x09\x09\x09\x0a\x09^ movableCells",
messageSends: ["select:", "and:", "not", "isMarked", "isFree", "neighbours", "do:", "prevCell:", "mark"],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "movableNeighboursCycle:",
category: 'neighbourhood',
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
args: ["cycleNumber"],
source: "movableNeighboursCycle: cycleNumber\x0a\x09| movableCells tempSet |\x0a\x09\x0a\x09self root unmark.\x0a\x09\x0a\x09movableCells := { self } asSet.\x0a\x091 to: cycleNumber do: [ :i |\x0a\x09\x09tempSet := Set new.\x0a\x09\x09movableCells do: [ :each | tempSet addAll: each movableNeighbours ].\x0a\x09\x09movableCells addAll: tempSet].\x0a\x09\x0a\x09^ movableCells",
messageSends: ["unmark", "root", "asSet", "to:do:", "new", "do:", "addAll:", "movableNeighbours"],
referencedClasses: ["Set"]
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "neighbours",
category: 'neighbourhood',
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
args: [],
source: "neighbours\x0a\x09^ neighboursCache ifNil: [ neighboursCache := self parent neighboursOf: self ]",
messageSends: ["ifNil:", "neighboursOf:", "parent"],
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
selector: "overTileClass",
category: 'factory',
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
selector: "pathTo:",
category: 'pathfinding',
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
args: ["cellLast"],
source: "pathTo: cellLast\x0a\x09\x22Assumes that some cells are selected and that the player clicked on a selected cell.\x0a\x09Answers the shortest path from the current cell to the cell clicked\x22\x0a\x0a\x09| path |\x0a\x09path := Array with: cellLast.\x0a\x09[ self = path last ] whileFalse: [ path add: path last prevCell ].\x0a\x09^ path",
messageSends: ["with:", "whileFalse:", "add:", "prevCell", "last", "="],
referencedClasses: ["Array"]
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "prevCell",
category: 'accessing - properties',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._propertyAt_("prevCell");
return $1;
}, function($ctx1) {$ctx1.fill(self,"prevCell",{},smalltalk.CWCell)})},
args: [],
source: "prevCell\x0a\x09^ self propertyAt: #prevCell ",
messageSends: ["propertyAt:"],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "prevCell:",
category: 'accessing - properties',
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._propertyAt_put_("prevCell",aCell);
return self}, function($ctx1) {$ctx1.fill(self,"prevCell:",{aCell:aCell},smalltalk.CWCell)})},
args: ["aCell"],
source: "prevCell: aCell \x0a\x09self propertyAt: #prevCell put: aCell",
messageSends: ["propertyAt:put:"],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
category: 'printing',
fn: function (aStream){
var self=this;
var rowNumber,row,cellIndex;
return smalltalk.withContext(function($ctx1) { 
row=_st(self)._parent();
cellIndex=_st(_st(row)._cells())._indexOf_(self);
rowNumber=_st(_st(_st(row)._parent())._rows())._indexOf_(row);
_st(_st(_st(_st(_st(aStream).__lt_lt("a Cell(")).__lt_lt(_st(rowNumber)._printString())).__lt_lt("-")).__lt_lt(_st(cellIndex)._printString())).__lt_lt(")");
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream,rowNumber:rowNumber,row:row,cellIndex:cellIndex},smalltalk.CWCell)})},
args: ["aStream"],
source: "printOn: aStream\x0a\x09\x22to debug only\x22\x0a\x0a\x09| rowNumber row cellIndex |\x0a\x09row := self parent.\x0a\x09cellIndex := row cells indexOf: self.\x0a\x09rowNumber := row parent rows indexOf: row.\x0a\x09aStream << 'a Cell(' << rowNumber printString << '-' << cellIndex printString << ')'",
messageSends: ["parent", "indexOf:", "cells", "rows", "<<", "printString"],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "properties",
category: 'accessing - properties',
fn: function (){
var self=this;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@properties"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@properties"]=_st($Dictionary())._new();
$1=self["@properties"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"properties",{},smalltalk.CWCell)})},
args: [],
source: "properties\x0a\x09^ properties ifNil: [ properties := Dictionary new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Dictionary"]
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "propertyAt:",
category: 'accessing - properties',
fn: function (key){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._properties())._at_(key);
return $1;
}, function($ctx1) {$ctx1.fill(self,"propertyAt:",{key:key},smalltalk.CWCell)})},
args: ["key"],
source: "propertyAt: key\x0a\x09^ self properties at: key",
messageSends: ["at:", "properties"],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "propertyAt:ifAbsent:",
category: 'accessing - properties',
fn: function (key,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._properties())._at_ifAbsent_(key,aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"propertyAt:ifAbsent:",{key:key,aBlock:aBlock},smalltalk.CWCell)})},
args: ["key", "aBlock"],
source: "propertyAt: key ifAbsent: aBlock\x0a\x09^ self properties at: key ifAbsent: aBlock",
messageSends: ["at:ifAbsent:", "properties"],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "propertyAt:put:",
category: 'accessing - properties',
fn: function (key,value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._properties())._at_put_(key,value);
return self}, function($ctx1) {$ctx1.fill(self,"propertyAt:put:",{key:key,value:value},smalltalk.CWCell)})},
args: ["key", "value"],
source: "propertyAt: key put: value\x0a\x09self properties at: key put: value",
messageSends: ["at:put:", "properties"],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "removeGameOverTile",
category: 'selection',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._gameOverTile_(nil);
return self}, function($ctx1) {$ctx1.fill(self,"removeGameOverTile",{},smalltalk.CWCell)})},
args: [],
source: "removeGameOverTile\x0a\x09self gameOverTile: nil",
messageSends: ["gameOverTile:"],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "removeMonster",
category: 'state delegation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._state())._removeMonster_(self);
return self}, function($ctx1) {$ctx1.fill(self,"removeMonster",{},smalltalk.CWCell)})},
args: [],
source: "removeMonster\x0a\x09self state removeMonster: self",
messageSends: ["removeMonster:", "state"],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "removeSelection",
category: 'state delegation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._state())._removeSelector_(self);
return self}, function($ctx1) {$ctx1.fill(self,"removeSelection",{},smalltalk.CWCell)})},
args: [],
source: "removeSelection\x0a\x09self state removeSelector: self",
messageSends: ["removeSelector:", "state"],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "selectableNeighboursForMonster:",
category: 'neighbourhood',
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
args: ["aMonster"],
source: "selectableNeighboursForMonster: aMonster\x0a\x09| selectableCells tempSet |\x0a\x0a\x09selectableCells := self movableNeighboursCycle: aMonster currentMove.\x0a\x0a\x09 tempSet := Set new.\x0a\x09 selectableCells do: [ :each | tempSet addAll: (each attackableNeighboursForMonster: aMonster) ].\x0a\x09 selectableCells addAll: tempSet.\x0a\x09 ^ selectableCells remove: self",
messageSends: ["movableNeighboursCycle:", "currentMove", "new", "do:", "addAll:", "attackableNeighboursForMonster:", "remove:"],
referencedClasses: ["Set"]
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "showActiveMonsters",
category: 'state delegation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._state())._showActiveMonster_(self);
return self}, function($ctx1) {$ctx1.fill(self,"showActiveMonsters",{},smalltalk.CWCell)})},
args: [],
source: "showActiveMonsters\x0a\x09self state showActiveMonster: self.",
messageSends: ["showActiveMonster:", "state"],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "side",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._monster())._side();
return $1;
}, function($ctx1) {$ctx1.fill(self,"side",{},smalltalk.CWCell)})},
args: [],
source: "side\x0a\x09^ self monster side",
messageSends: ["side", "monster"],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "state",
category: 'state machine',
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
args: [],
source: "state\x0a\x09state ifNil: [self initializeState].\x0a\x09^state",
messageSends: ["ifNil:", "initializeState"],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "state:",
category: 'state machine',
fn: function (aState){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@state"]=aState;
return self}, function($ctx1) {$ctx1.fill(self,"state:",{aState:aState},smalltalk.CWCell)})},
args: ["aState"],
source: "state: aState\x0a\x09state := aState",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "tileClass",
category: 'factory',
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
selector: "unmark",
category: 'accessing - properties',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._propertyAt_put_("mark",false);
return self}, function($ctx1) {$ctx1.fill(self,"unmark",{},smalltalk.CWCell)})},
args: [],
source: "unmark\x0a\x09self propertyAt: #mark put: false",
messageSends: ["propertyAt:put:"],
referencedClasses: []
}),
smalltalk.CWCell);



smalltalk.addClass('CWOneChildClass', smalltalk.CWComposite, [], 'Easnoth-MapModel');
smalltalk.CWOneChildClass.comment="I am a standard composite except that all my children have the same class."
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.CWOneChildClass)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.CWOneChildClass);

smalltalk.addMethod(
smalltalk.method({
selector: "addChild:",
category: 'children management',
fn: function (object){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._children())._add_(object);
return $1;
}, function($ctx1) {$ctx1.fill(self,"addChild:",{object:object},smalltalk.CWOneChildClass)})},
args: ["object"],
source: "addChild: object\x0a\x09^ self children add: object",
messageSends: ["add:", "children"],
referencedClasses: []
}),
smalltalk.CWOneChildClass);

smalltalk.addMethod(
smalltalk.method({
selector: "childAt:put:",
category: 'children management',
fn: function (index,object){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._children())._at_put_(index,object);
return $1;
}, function($ctx1) {$ctx1.fill(self,"childAt:put:",{index:index,object:object},smalltalk.CWOneChildClass)})},
args: ["index", "object"],
source: "childAt: index put: object\x0a\x09^ self children at: index put: object",
messageSends: ["at:put:", "children"],
referencedClasses: []
}),
smalltalk.CWOneChildClass);

smalltalk.addMethod(
smalltalk.method({
selector: "childBasicClass",
category: 'factory',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"childBasicClass",{},smalltalk.CWOneChildClass)})},
args: [],
source: "childBasicClass\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.CWOneChildClass);

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
}, function($ctx1) {$ctx1.fill(self,"newChild",{},smalltalk.CWOneChildClass)})},
args: [],
source: "newChild\x0a\x09^ self newChild: self childBasicClass",
messageSends: ["newChild:", "childBasicClass"],
referencedClasses: []
}),
smalltalk.CWOneChildClass);

smalltalk.addMethod(
smalltalk.method({
selector: "removeChild:",
category: 'children management',
fn: function (object){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._children())._remove_(object);
return $1;
}, function($ctx1) {$ctx1.fill(self,"removeChild:",{object:object},smalltalk.CWOneChildClass)})},
args: ["object"],
source: "removeChild: object\x0a\x09^ self children remove: object",
messageSends: ["remove:", "children"],
referencedClasses: []
}),
smalltalk.CWOneChildClass);



smalltalk.addClass('CWMap', smalltalk.CWOneChildClass, ['rows', 'drawer'], 'Easnoth-MapModel');
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
selector: "childBasicClass",
category: 'factory',
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
selector: "children",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._rows();
return $1;
}, function($ctx1) {$ctx1.fill(self,"children",{},smalltalk.CWMap)})},
args: [],
source: "children\x0a\x09^ self rows",
messageSends: ["rows"],
referencedClasses: []
}),
smalltalk.CWMap);

smalltalk.addMethod(
smalltalk.method({
selector: "drawer",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@drawer"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"drawer",{},smalltalk.CWMap)})},
args: [],
source: "drawer\x0a\x09^ drawer",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWMap);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeDrawer",
category: 'initialize-release',
fn: function (){
var self=this;
function $CWMapDrawer(){return smalltalk.CWMapDrawer||(typeof CWMapDrawer=="undefined"?nil:CWMapDrawer)}
return smalltalk.withContext(function($ctx1) { 
self["@drawer"]=_st(_st($CWMapDrawer())._new())._initializeForMap_(self);
return self}, function($ctx1) {$ctx1.fill(self,"initializeDrawer",{},smalltalk.CWMap)})},
args: [],
source: "initializeDrawer\x0a\x09drawer := CWMapDrawer new initializeForMap: self",
messageSends: ["initializeForMap:", "new"],
referencedClasses: ["CWMapDrawer"]
}),
smalltalk.CWMap);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeFromJson:",
category: 'initialize-release',
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
args: ["jsonMap"],
source: "initializeFromJson: jsonMap\x0a\x09\x22initialize the rows of the map, \x0a\x09the announcement is in case everything was already cached (page refresh for example)\x22\x0a\x09\x0a\x09| child rows1 |\x0a\x09\x0a\x09self announce: CWWaitForObject new.\x0a\x09\x0a\x09rows1 := jsonMap row.\x0a\x09rows := Array new: rows1 size.\x0a\x09\x0a\x09rows1 withIndexDo: [:row :i |\x0a\x09\x09child := self newChild.\x0a\x09\x09self childAt: i put: child.\x0a\x09\x09child initializeFromJson: row ].\x0a\x09\x09\x0a\x09self announce: CWObjectLoaded new.",
messageSends: ["announce:", "new", "row", "new:", "size", "withIndexDo:", "newChild", "childAt:put:", "initializeFromJson:"],
referencedClasses: ["CWWaitForObject", "Array", "CWObjectLoaded"]
}),
smalltalk.CWMap);

smalltalk.addMethod(
smalltalk.method({
selector: "neighboursOf:cellIndex:",
category: 'neighbours',
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
args: ["row", "cellIndex"],
source: "neighboursOf: row cellIndex: cellIndex\x0a\x09| rowIndex neighbours |\x0a\x09rowIndex :=  self rows indexOf: row.\x0a\x09neighbours := Array new.\x0a\x09rowIndex = 1 \x0a\x09\x09ifFalse: [ neighbours addAll: ((self childAt: rowIndex - 1) cellsNextToI: rowIndex j: cellIndex) ].\x0a\x09rowIndex = self rows size \x0a\x09\x09ifFalse: [ neighbours addAll: ((self childAt: rowIndex + 1) cellsNextToI: rowIndex j: cellIndex) ].\x0a\x09^ neighbours",
messageSends: ["indexOf:", "rows", "new", "ifFalse:", "addAll:", "cellsNextToI:j:", "childAt:", "-", "=", "+", "size"],
referencedClasses: ["Array"]
}),
smalltalk.CWMap);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
category: 'printing',
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=aStream;
_st($1)._nextPutAll_("a Map (");
_st($1)._nextPutAll_(_st(_st(self["@rows"])._size())._printString());
$2=_st($1)._nextPutAll_(" rows)");
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},smalltalk.CWMap)})},
args: ["aStream"],
source: "printOn: aStream\x0a\x09aStream\x0a\x09\x09nextPutAll: 'a Map (';\x0a\x09\x09nextPutAll: rows size printString;\x0a\x09\x09nextPutAll: ' rows)'",
messageSends: ["nextPutAll:", "printString", "size"],
referencedClasses: []
}),
smalltalk.CWMap);

smalltalk.addMethod(
smalltalk.method({
selector: "root",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"root",{},smalltalk.CWMap)})},
args: [],
source: "root\x0a\x09^ self",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWMap);

smalltalk.addMethod(
smalltalk.method({
selector: "rows",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@rows"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"rows",{},smalltalk.CWMap)})},
args: [],
source: "rows\x0a\x09^ rows",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWMap);

smalltalk.addMethod(
smalltalk.method({
selector: "showActiveMonsters",
category: 'selection',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._removeSelection();
smalltalk.CWOneChildClass.fn.prototype._showActiveMonsters.apply(_st(self), []);
return self}, function($ctx1) {$ctx1.fill(self,"showActiveMonsters",{},smalltalk.CWMap)})},
args: [],
source: "showActiveMonsters\x0a\x09self removeSelection.\x0a\x09super showActiveMonsters",
messageSends: ["removeSelection", "showActiveMonsters"],
referencedClasses: []
}),
smalltalk.CWMap);

smalltalk.addMethod(
smalltalk.method({
selector: "updateGOTs",
category: 'rendering',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@drawer"])._updateGOTs();
return self}, function($ctx1) {$ctx1.fill(self,"updateGOTs",{},smalltalk.CWMap)})},
args: [],
source: "updateGOTs\x0a\x09drawer updateGOTs",
messageSends: ["updateGOTs"],
referencedClasses: []
}),
smalltalk.CWMap);

smalltalk.addMethod(
smalltalk.method({
selector: "updateMap",
category: 'rendering',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@drawer"])._updateMap();
return self}, function($ctx1) {$ctx1.fill(self,"updateMap",{},smalltalk.CWMap)})},
args: [],
source: "updateMap\x0a\x09drawer updateMap",
messageSends: ["updateMap"],
referencedClasses: []
}),
smalltalk.CWMap);

smalltalk.addMethod(
smalltalk.method({
selector: "updateMonstersAndGOTs",
category: 'rendering',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@drawer"])._updateMonstersAndGOTs();
return self}, function($ctx1) {$ctx1.fill(self,"updateMonstersAndGOTs",{},smalltalk.CWMap)})},
args: [],
source: "updateMonstersAndGOTs\x0a\x09drawer updateMonstersAndGOTs",
messageSends: ["updateMonstersAndGOTs"],
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


smalltalk.addClass('CWRow', smalltalk.CWOneChildClass, ['cells'], 'Easnoth-MapModel');
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
selector: "cells",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@cells"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"cells",{},smalltalk.CWRow)})},
args: [],
source: "cells\x0a\x09^ cells",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWRow);

smalltalk.addMethod(
smalltalk.method({
selector: "cellsNextToI:j:",
category: 'neighbours',
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
args: ["i", "j"],
source: "cellsNextToI: i j: j \x0a\x09| neighbours |\x0a\x09neighbours := Array new.\x0a\x09self childAt: j  ifPresent: [ :child | neighbours add: child ] .\x0a\x09i \x5c\x5c 2 = 0 ifFalse: [\x0a\x09\x09j < self cells size ifTrue: [ self childAt: j + 1 ifPresent: [ :child | neighbours add: child ] ].\x0a\x09] ifTrue: [\x0a\x09\x09j > 1 ifTrue: [ self childAt: j - 1 ifPresent: [ :child | neighbours add: child ] ].\x0a\x09].\x0a\x09^ neighbours",
messageSends: ["new", "childAt:ifPresent:", "add:", "ifFalse:ifTrue:", "ifTrue:", "+", "<", "size", "cells", "-", ">", "=", "\x5c\x5c"],
referencedClasses: ["Array"]
}),
smalltalk.CWRow);

smalltalk.addMethod(
smalltalk.method({
selector: "childBasicClass",
category: 'factory',
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
selector: "children",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._cells();
return $1;
}, function($ctx1) {$ctx1.fill(self,"children",{},smalltalk.CWRow)})},
args: [],
source: "children\x0a\x09^ self cells",
messageSends: ["cells"],
referencedClasses: []
}),
smalltalk.CWRow);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeFromJson:",
category: 'initialize',
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
args: ["jsonRow"],
source: "initializeFromJson: jsonRow\x0a\x09| cells1 child |\x0a\x0a\x09cells1 := jsonRow cells.\x0a\x09cells := Array new: cells1 size.\x0a\x09\x0a\x09cells1 withIndexDo: [:cell :i |\x0a\x09\x09child :=  self newChild.\x0a\x09\x09child initializeFromJson: cell. \x0a\x09\x09self childAt: i put: child ].",
messageSends: ["cells", "new:", "size", "withIndexDo:", "newChild", "initializeFromJson:", "childAt:put:"],
referencedClasses: ["Array"]
}),
smalltalk.CWRow);

smalltalk.addMethod(
smalltalk.method({
selector: "neighboursOf:",
category: 'neighbours',
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
args: ["aCell"],
source: "neighboursOf: aCell\x0a\x09\x22Here we give a Set to simplify game logic later (no twice the cell in the set)\x22\x0a\x0a\x09| cellIndex neighbours |\x0a\x09neighbours := Set new.\x0a\x09cellIndex := self cells indexOf: aCell.\x0a\x09cellIndex = 1 \x0a\x09\x09ifFalse: [ self childAt: cellIndex - 1 ifPresent: [ :child | neighbours add: child ] ].\x0a\x09cellIndex = self cells size \x0a\x09\x09ifFalse: [ self childAt: cellIndex + 1  ifPresent: [ :child | neighbours add: child ] ].\x0a\x09neighbours addAll: (self parent neighboursOf: self cellIndex: cellIndex).\x0a\x09^ neighbours",
messageSends: ["new", "indexOf:", "cells", "ifFalse:", "childAt:ifPresent:", "-", "add:", "=", "+", "size", "addAll:", "neighboursOf:cellIndex:", "parent"],
referencedClasses: ["Set"]
}),
smalltalk.CWRow);

smalltalk.addMethod(
smalltalk.method({
selector: "printString",
category: 'printing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st("a Row (").__comma(_st(self["@cells"])._size())).__comma(" cells)");
return $1;
}, function($ctx1) {$ctx1.fill(self,"printString",{},smalltalk.CWRow)})},
args: [],
source: "printString\x0a\x09^ 'a Row (', cells size, ' cells)'",
messageSends: [",", "size"],
referencedClasses: []
}),
smalltalk.CWRow);



smalltalk.addClass('CWLeaf', smalltalk.CWComponent, [], 'Easnoth-MapModel');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.CWLeaf)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.CWLeaf);

smalltalk.addMethod(
smalltalk.method({
selector: "children",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=[];
return $1;
}, function($ctx1) {$ctx1.fill(self,"children",{},smalltalk.CWLeaf)})},
args: [],
source: "children\x0a\x09^ #()",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWLeaf);



smalltalk.addClass('CWImageLeaf', smalltalk.CWLeaf, ['image'], 'Easnoth-MapModel');
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
selector: "image:",
category: 'accessing',
fn: function (anImage){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@image"]=anImage;
return self}, function($ctx1) {$ctx1.fill(self,"image:",{anImage:anImage},smalltalk.CWImageLeaf)})},
args: ["anImage"],
source: "image: anImage\x0a\x09image := anImage",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWImageLeaf);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeFromKey:",
category: 'initialize-release',
fn: function (aKey){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@image"]=_st(_st(self)._class())._imageCacheAt_(aKey);
return self}, function($ctx1) {$ctx1.fill(self,"initializeFromKey:",{aKey:aKey},smalltalk.CWImageLeaf)})},
args: ["aKey"],
source: "initializeFromKey: aKey\x0a\x09image := self class imageCacheAt: aKey",
messageSends: ["imageCacheAt:", "class"],
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


smalltalk.CWImageLeaf.klass.iVarNames = ['imageCache'];
smalltalk.addMethod(
smalltalk.method({
selector: "folderName",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"folderName",{},smalltalk.CWImageLeaf.klass)})},
args: [],
source: "folderName\x0a\x09self subclassResponsibility\x0a\x09",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.CWImageLeaf.klass);

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
source: "imageCache\x0a\x09^ imageCache ifNil: [ imageCache := Dictionary new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Dictionary"]
}),
smalltalk.CWImageLeaf.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "imageCacheAt:",
category: 'caching',
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
args: ["aKey"],
source: "imageCacheAt: aKey\x0a\x09^ self imageCache at: aKey ifAbsentPut: [ self newImageFrom: aKey ]\x0a\x09",
messageSends: ["at:ifAbsentPut:", "newImageFrom:", "imageCache"],
referencedClasses: []
}),
smalltalk.CWImageLeaf.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "newImageFrom:",
category: 'caching',
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
args: ["aKey"],
source: "newImageFrom: aKey\x0a\x09\x22Create a new image and cache it. Announce start and end of asynchronous task\x22\x0a\x09\x0a\x09| announcer image |\x0a\x09\x0a\x09announcer := CWEasnothAnnouncer current.\x0a\x09image := NativeFunction constructor: 'Image'.\x0a\x09self imageCache at: aKey put: image.\x0a\x09announcer announce: CWWaitForObject new.\x0a\x09image at: 'onload' put: [ announcer announce: CWObjectLoaded new ].\x0a    image at: 'src' put:  'ressources/images/', self folderName, '/', aKey, '.png'.\x0a\x09\x0a\x09^ image",
messageSends: ["current", "constructor:", "at:put:", "imageCache", "announce:", "new", ",", "folderName"],
referencedClasses: ["CWEasnothAnnouncer", "NativeFunction", "CWWaitForObject", "CWObjectLoaded"]
}),
smalltalk.CWImageLeaf.klass);


smalltalk.addClass('CWBackground', smalltalk.CWImageLeaf, [], 'Easnoth-MapModel');
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


smalltalk.addMethod(
smalltalk.method({
selector: "folderName",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "back";
}, function($ctx1) {$ctx1.fill(self,"folderName",{},smalltalk.CWBackground.klass)})},
args: [],
source: "folderName\x0a\x09^ 'back'",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWBackground.klass);


smalltalk.addClass('CWOverTile', smalltalk.CWBackground, [], 'Easnoth-MapModel');
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
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "overtiles";
}, function($ctx1) {$ctx1.fill(self,"folderName",{},smalltalk.CWOverTile.klass)})},
args: [],
source: "folderName\x0a\x09^ 'overtiles'",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWOverTile.klass);


smalltalk.addClass('CWGameOverTile', smalltalk.CWOverTile, [], 'Easnoth-MapModel');
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



smalltalk.addClass('CWTile', smalltalk.CWBackground, [], 'Easnoth-MapModel');
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
selector: "isWall",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isWall",{},smalltalk.CWTile)})},
args: [],
source: "isWall\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWTile);


smalltalk.addMethod(
smalltalk.method({
selector: "folderName",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "tiles";
}, function($ctx1) {$ctx1.fill(self,"folderName",{},smalltalk.CWTile.klass)})},
args: [],
source: "folderName\x0a\x09^ 'tiles'",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWTile.klass);


smalltalk.addClass('CWWall', smalltalk.CWTile, [], 'Easnoth-MapModel');
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

smalltalk.addMethod(
smalltalk.method({
selector: "isWall",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isWall",{},smalltalk.CWWall)})},
args: [],
source: "isWall\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWWall);



smalltalk.addClass('CWMonster', smalltalk.CWImageLeaf, ['currentMove', 'move', 'attack', 'dices', 'hp', 'range', 'state', 'player', 'special', 'strategy', 'typeStrategy'], 'Easnoth-MapModel');
smalltalk.CWMonster.comment="I represent people on the map. My instances variables are the stats of the guy I represent."
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
category: 'strategy delegation',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@strategy"])._accept_for_(aVisitor,self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.CWMonster)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ strategy accept: aVisitor for: self",
messageSends: ["accept:for:"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "activate",
category: 'state delegation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._state())._activate_(self);
return self}, function($ctx1) {$ctx1.fill(self,"activate",{},smalltalk.CWMonster)})},
args: [],
source: "activate\x0a\x09self state activate: self",
messageSends: ["activate:", "state"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "addSelectorsTo:",
category: 'selection',
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
args: ["cells"],
source: "addSelectorsTo: cells\x0a\x09\x0a\x09self root removeSelection.\x0a\x09cells do: [:each | each addSelector ].\x0a\x09\x0a\x09\x22HACKY, to recalcul prevCell, need true pathfinding for this to be fine\x22\x0a\x09self parent movableNeighboursCycle: self currentMove.\x0a\x09\x0a\x09^ cells",
messageSends: ["removeSelection", "root", "do:", "addSelector", "movableNeighboursCycle:", "currentMove", "parent"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "animationMoveFrom:to:callback:",
category: 'animation',
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
args: ["cell1", "cellLast", "callback"],
source: "animationMoveFrom: cell1 to: cellLast callback: callback\x0a\x09\x0a\x09| path moveNumber |\x0a\x09\x0a\x09path := cell1 pathTo: cellLast.\x0a\x09moveNumber := path size - 1.\x0a \x0a\x09cell1 root removeSelection.\x0a\x09cell1 updateGOTs.\x0a\x0a\x091 to: moveNumber do: [ :j |\x0a\x09\x09[ (path at: path size - j) addMonster: self.\x0a        (path at: path size + 1 - j) removeMonster.\x0a\x09\x09cell1 root updateMonstersAndGOTs.\x0a\x09\x09self currentMove: self currentMove - 1.\x0a\x09\x09self announceUpdate ] valueWithTimeout: 300 * j ].\x0a\x09\x0a\x09callback valueWithTimeout: 300 * moveNumber",
messageSends: ["pathTo:", "-", "size", "removeSelection", "root", "updateGOTs", "to:do:", "valueWithTimeout:", "*", "addMonster:", "at:", "removeMonster", "+", "updateMonstersAndGOTs", "currentMove:", "currentMove", "announceUpdate"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "announceUpdate",
category: 'animation',
fn: function (){
var self=this;
function $CWMonsterUpdateEvent(){return smalltalk.CWMonsterUpdateEvent||(typeof CWMonsterUpdateEvent=="undefined"?nil:CWMonsterUpdateEvent)}
return smalltalk.withContext(function($ctx1) { 
_st(self)._announce_(_st(_st($CWMonsterUpdateEvent())._new())._monster_(self));
return self}, function($ctx1) {$ctx1.fill(self,"announceUpdate",{},smalltalk.CWMonster)})},
args: [],
source: "announceUpdate\x0a\x09self announce: (CWMonsterUpdateEvent new monster: self)",
messageSends: ["announce:", "monster:", "new"],
referencedClasses: ["CWMonsterUpdateEvent"]
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
selector: "attack:inContext:",
category: 'fighting',
fn: function (anotherMonster,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@typeStrategy"])._monster_attackNeighbour_inContext_(self,anotherMonster,gameContext);
return $1;
}, function($ctx1) {$ctx1.fill(self,"attack:inContext:",{anotherMonster:anotherMonster,gameContext:gameContext},smalltalk.CWMonster)})},
args: ["anotherMonster", "gameContext"],
source: "attack: anotherMonster inContext: gameContext\x0a\x09\x22Dispatch to type strategy for advantages of attacks and goes to attack:InContext:bonus:\x22\x0a\x09\x0a\x09^ typeStrategy monster: self attackNeighbour: anotherMonster inContext: gameContext",
messageSends: ["monster:attackNeighbour:inContext:"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "attack:inContext:bonus:",
category: 'fighting',
fn: function (anotherMonster,gameContext,int){
var self=this;
var ennemySupport,ennemyHerosSupport,ennemyUnitSupport,support,herosSupport,unitSupport,bonusDices,bonusAttack;
return smalltalk.withContext(function($ctx1) { 
ennemySupport=_st(self)._support();
ennemyHerosSupport=_st(_st(ennemySupport)._select_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(each)._monster())._isHeros();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})})))._size();
ennemyUnitSupport=_st(_st(ennemySupport)._size()).__minus(ennemyHerosSupport);
support=_st(anotherMonster)._support();
herosSupport=_st(_st(support)._select_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(each)._monster())._isHeros();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})})))._size();
unitSupport=_st(_st(support)._size()).__minus(herosSupport);
bonusDices=_st(_st(int).__plus(herosSupport)).__minus(ennemyHerosSupport);
bonusAttack=_st(_st(_st(int).__plus(unitSupport)).__minus(ennemyUnitSupport)).__star((10));
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
return self}, function($ctx1) {$ctx1.fill(self,"attack:inContext:bonus:",{anotherMonster:anotherMonster,gameContext:gameContext,int:int,ennemySupport:ennemySupport,ennemyHerosSupport:ennemyHerosSupport,ennemyUnitSupport:ennemyUnitSupport,support:support,herosSupport:herosSupport,unitSupport:unitSupport,bonusDices:bonusDices,bonusAttack:bonusAttack},smalltalk.CWMonster)})},
args: ["anotherMonster", "gameContext", "int"],
source: "attack: anotherMonster inContext: gameContext bonus: int\x0a\x09\x22int is for now -1 0 or 1 and represents the advantages / disadvantages of attacks\x22\x0a\x09\x0a\x09| ennemySupport ennemyHerosSupport ennemyUnitSupport support herosSupport unitSupport bonusDices bonusAttack |\x0a\x09\x0a\x09ennemySupport := self support.\x0a\x09ennemyHerosSupport := ( ennemySupport select: [ :each | each monster isHeros ] ) size.\x0a\x09ennemyUnitSupport := ennemySupport size - ennemyHerosSupport.\x0a\x09\x0a\x09support := anotherMonster support.\x0a\x09herosSupport := ( support select: [ :each | each monster isHeros ] ) size.\x0a\x09unitSupport := support size - herosSupport.\x0a\x09\x0a\x09bonusDices := int + herosSupport - ennemyHerosSupport.\x0a\x09bonusAttack := ( int + unitSupport - ennemyUnitSupport ) * 10.\x0a\x09\x0a\x09self state changeStateAfterAttacking: self.\x0a    self root removeSelection.\x0a\x09self updateGOTs.\x0a\x0a\x09self rollDicesCallBack: [ :diceRes |\x0a\x09\x09anotherMonster removeHP: diceRes kills.\x0a        self selectInContext: gameContext.\x0a\x09\x09self checkForNextTurn.\x0a\x09\x09self updateMonstersAndGOTs ] bonusDices: bonusDices bonusAttack: bonusAttack",
messageSends: ["support", "size", "select:", "isHeros", "monster", "-", "+", "*", "changeStateAfterAttacking:", "state", "removeSelection", "root", "updateGOTs", "rollDicesCallBack:bonusDices:bonusAttack:", "removeHP:", "kills", "selectInContext:", "checkForNextTurn", "updateMonstersAndGOTs"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "attackPotential",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@attack"]).__star(self["@dices"]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"attackPotential",{},smalltalk.CWMonster)})},
args: [],
source: "attackPotential\x0a\x09\x22Answers the power of attack of the monster\x22\x0a\x09^ attack * dices",
messageSends: ["*"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "attackTo:inContext:",
category: 'state delegation',
fn: function (aCell,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._state())._monster_attackTo_inContext_(self,aCell,gameContext);
return self}, function($ctx1) {$ctx1.fill(self,"attackTo:inContext:",{aCell:aCell,gameContext:gameContext},smalltalk.CWMonster)})},
args: ["aCell", "gameContext"],
source: "attackTo: aCell inContext: gameContext\x0a\x09self state monster: self attackTo: aCell inContext: gameContext",
messageSends: ["monster:attackTo:inContext:", "state"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "attackableTargets",
category: 'selection',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._parent())._attackableNeighboursConsideringMoveForMonster_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"attackableTargets",{},smalltalk.CWMonster)})},
args: [],
source: "attackableTargets\x0a\x09\x22Answers the list of monsters this monster can attack, including the ones he needs to move before attack\x22\x0a\x09^ self parent attackableNeighboursConsideringMoveForMonster: self.",
messageSends: ["attackableNeighboursConsideringMoveForMonster:", "parent"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "changeState:",
category: 'state machine',
fn: function (stateClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._state_(_st(stateClass)._default());
return self}, function($ctx1) {$ctx1.fill(self,"changeState:",{stateClass:stateClass},smalltalk.CWMonster)})},
args: ["stateClass"],
source: "changeState: stateClass\x0a\x09self state: stateClass default",
messageSends: ["state:", "default"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "checkForNextTurn",
category: 'state delegation',
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
args: [],
source: "checkForNextTurn\x0a\x09self currentMove > 0 ifTrue: [ ^ self ].\x0a\x09self state checkForNextTurn: self",
messageSends: ["ifTrue:", ">", "currentMove", "checkForNextTurn:", "state"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "currentMove",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@currentMove"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"currentMove",{},smalltalk.CWMonster)})},
args: [],
source: "currentMove\x0a\x09^ currentMove",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "currentMove:",
category: 'accessing',
fn: function (int){
var self=this;
function $CWMonsterUpdateEvent(){return smalltalk.CWMonsterUpdateEvent||(typeof CWMonsterUpdateEvent=="undefined"?nil:CWMonsterUpdateEvent)}
return smalltalk.withContext(function($ctx1) { 
self["@currentMove"]=int;
_st(self)._announce_(_st($CWMonsterUpdateEvent())._new());
return self}, function($ctx1) {$ctx1.fill(self,"currentMove:",{int:int},smalltalk.CWMonster)})},
args: ["int"],
source: "currentMove: int\x0a\x09currentMove := int.\x0a\x09self announce: CWMonsterUpdateEvent new",
messageSends: ["announce:", "new"],
referencedClasses: ["CWMonsterUpdateEvent"]
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultHp",
category: 'strategy delegation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@strategy"])._defaultHP();
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultHp",{},smalltalk.CWMonster)})},
args: [],
source: "defaultHp\x0a\x09^ strategy defaultHP",
messageSends: ["defaultHP"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultState",
category: 'accessing',
fn: function (){
var self=this;
function $CWInactive(){return smalltalk.CWInactive||(typeof CWInactive=="undefined"?nil:CWInactive)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=$CWInactive();
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultState",{},smalltalk.CWMonster)})},
args: [],
source: "defaultState\x0a\x09\x22When map is initialized the monster will get this state by default\x22\x0a\x09^ CWInactive",
messageSends: [],
referencedClasses: ["CWInactive"]
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "defensePotential",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@hp"]).__star((100));
return $1;
}, function($ctx1) {$ctx1.fill(self,"defensePotential",{},smalltalk.CWMonster)})},
args: [],
source: "defensePotential\x0a\x09\x22Answers the power of defense of the monster\x22\x0a\x09^ hp * 100",
messageSends: ["*"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "desactivateMonsters",
category: 'state delegation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._state())._desactivate_(self);
return self}, function($ctx1) {$ctx1.fill(self,"desactivateMonsters",{},smalltalk.CWMonster)})},
args: [],
source: "desactivateMonsters\x0a\x09self state desactivate: self",
messageSends: ["desactivate:", "state"],
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
selector: "die",
category: 'fighting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._parent())._removeMonster();
_st(_st(self)._player())._removeMonster_(self);
return self}, function($ctx1) {$ctx1.fill(self,"die",{},smalltalk.CWMonster)})},
args: [],
source: "die\x0a\x09self parent removeMonster.\x0a\x09self player removeMonster: self.",
messageSends: ["removeMonster", "parent", "removeMonster:", "player"],
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
selector: "initialize",
category: 'initialize-release',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.CWImageLeaf.fn.prototype._initialize.apply(_st(self), []);
_st(self)._currentMove_((0));
_st(self)._initializeState();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.CWMonster)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self currentMove: 0.\x0a\x09self initializeState",
messageSends: ["initialize", "currentMove:", "initializeState"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeState",
category: 'state machine',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._changeState_(_st(self)._defaultState());
return self}, function($ctx1) {$ctx1.fill(self,"initializeState",{},smalltalk.CWMonster)})},
args: [],
source: "initializeState\x0a\x09self changeState: self defaultState",
messageSends: ["changeState:", "defaultState"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeWithStat:army:player:heros:type:",
category: 'initialize-release',
fn: function (jsonStat,army,aPlayer,strat,aType){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._player_(aPlayer);
self["@strategy"]=_st(strat)._default();
self["@typeStrategy"]=_st(aType)._default();
_st(self)._stats_(jsonStat);
smalltalk.CWImageLeaf.fn.prototype._initializeFromKey_.apply(_st(self), [_st(_st(army).__comma("/")).__comma(_st(self)._key())]);
return self}, function($ctx1) {$ctx1.fill(self,"initializeWithStat:army:player:heros:type:",{jsonStat:jsonStat,army:army,aPlayer:aPlayer,strat:strat,aType:aType},smalltalk.CWMonster)})},
args: ["jsonStat", "army", "aPlayer", "strat", "aType"],
source: "initializeWithStat: jsonStat army: army player: aPlayer heros: strat type: aType\x0a\x09self player: aPlayer.\x0a\x09strategy := strat default.\x0a\x09typeStrategy := aType default.\x0a\x09self stats: jsonStat.\x0a\x09super initializeFromKey: army, '/', self key.",
messageSends: ["player:", "default", "stats:", "initializeFromKey:", ",", "key"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "isAttackedByCavalry:inContext:",
category: 'fighting',
fn: function (aMonster,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@typeStrategy"])._monster_isAttackedByCavalry_inContext_(self,aMonster,gameContext);
return $1;
}, function($ctx1) {$ctx1.fill(self,"isAttackedByCavalry:inContext:",{aMonster:aMonster,gameContext:gameContext},smalltalk.CWMonster)})},
args: ["aMonster", "gameContext"],
source: "isAttackedByCavalry: aMonster inContext: gameContext\x0a\x09^ typeStrategy monster: self isAttackedByCavalry: aMonster inContext: gameContext",
messageSends: ["monster:isAttackedByCavalry:inContext:"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "isAttackedByRange:inContext:",
category: 'fighting',
fn: function (aMonster,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@typeStrategy"])._monster_isAttackedByRange_inContext_(self,aMonster,gameContext);
return $1;
}, function($ctx1) {$ctx1.fill(self,"isAttackedByRange:inContext:",{aMonster:aMonster,gameContext:gameContext},smalltalk.CWMonster)})},
args: ["aMonster", "gameContext"],
source: "isAttackedByRange: aMonster inContext: gameContext\x0a\x09^ typeStrategy monster: self isAttackedByRange: aMonster inContext: gameContext",
messageSends: ["monster:isAttackedByRange:inContext:"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "isAttackedByTroop:inContext:",
category: 'fighting',
fn: function (aMonster,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@typeStrategy"])._monster_isAttackedByTroop_inContext_(self,aMonster,gameContext);
return $1;
}, function($ctx1) {$ctx1.fill(self,"isAttackedByTroop:inContext:",{aMonster:aMonster,gameContext:gameContext},smalltalk.CWMonster)})},
args: ["aMonster", "gameContext"],
source: "isAttackedByTroop: aMonster inContext: gameContext\x0a\x09^ typeStrategy monster: self isAttackedByTroop: aMonster inContext: gameContext",
messageSends: ["monster:isAttackedByTroop:inContext:"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "isHeros",
category: 'strategy delegation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@strategy"])._isHeros();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isHeros",{},smalltalk.CWMonster)})},
args: [],
source: "isHeros\x0a\x09^ strategy isHeros",
messageSends: ["isHeros"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "isInactive",
category: 'state delegation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._state())._isInactive();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isInactive",{},smalltalk.CWMonster)})},
args: [],
source: "isInactive\x0a\x09^ self state isInactive",
messageSends: ["isInactive", "state"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "isRanged",
category: 'strategy delegation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@typeStrategy"])._isRanged();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isRanged",{},smalltalk.CWMonster)})},
args: [],
source: "isRanged\x0a\x09^ typeStrategy isRanged",
messageSends: ["isRanged"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "isUnit",
category: 'strategy delegation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._isHeros())._not();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isUnit",{},smalltalk.CWMonster)})},
args: [],
source: "isUnit\x0a\x09^ self isHeros not",
messageSends: ["not", "isHeros"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "key",
category: 'strategy delegation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@typeStrategy"])._key()).__comma(_st(self["@strategy"])._key());
return $1;
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.CWMonster)})},
args: [],
source: "key\x0a\x09^ typeStrategy key, strategy key",
messageSends: [",", "key"],
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
selector: "moveTo:inContext:",
category: 'state delegation',
fn: function (aCell,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._state())._monster_moveTo_inContext_(self,aCell,gameContext);
return self}, function($ctx1) {$ctx1.fill(self,"moveTo:inContext:",{aCell:aCell,gameContext:gameContext},smalltalk.CWMonster)})},
args: ["aCell", "gameContext"],
source: "moveTo: aCell inContext: gameContext\x0a\x09self state monster: self moveTo: aCell inContext: gameContext",
messageSends: ["monster:moveTo:inContext:", "state"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "moveTo:inContext:callback:",
category: 'animation',
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
args: ["aCell", "gameContext", "callback"],
source: "moveTo: aCell inContext: gameContext callback: callback\x0a\x09\x22triggers the animation for the monster move\x22\x0a\x09\x0a\x09self animationMoveFrom: gameContext currentCell to: aCell callback: [\x09\x0a\x09\x09self state changeStateAfterMoving: self.\x0a\x09\x09self selectInContext: gameContext.\x0a\x09\x09self checkForNextTurn.\x0a\x09\x09callback value.\x0a\x09].",
messageSends: ["animationMoveFrom:to:callback:", "currentCell", "changeStateAfterMoving:", "state", "selectInContext:", "checkForNextTurn", "value"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "player",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@player"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"player",{},smalltalk.CWMonster)})},
args: [],
source: "player\x0a\x09^ player",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "player:",
category: 'accessing',
fn: function (aPlayer){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@player"]=aPlayer;
return self}, function($ctx1) {$ctx1.fill(self,"player:",{aPlayer:aPlayer},smalltalk.CWMonster)})},
args: ["aPlayer"],
source: "player: aPlayer\x0a\x09player := aPlayer",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
category: 'printing',
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aStream)._nextPutAll_("a Monster(");
_st(aStream)._nextPutAll_(_st(_st(self)._parent())._printString());
_st(aStream)._nextPutAll_(")");
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},smalltalk.CWMonster)})},
args: ["aStream"],
source: "printOn: aStream\x0a\x09aStream nextPutAll: 'a Monster('.\x0a\x09aStream nextPutAll: self parent printString.\x0a\x09aStream nextPutAll: ')'.",
messageSends: ["nextPutAll:", "printString", "parent"],
referencedClasses: []
}),
smalltalk.CWMonster);

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
}, function($ctx1) {$ctx1.fill(self,"range",{},smalltalk.CWMonster)})},
args: [],
source: "range\x0a\x09^ range",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "range:",
category: 'accessing',
fn: function (int){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@range"]=int;
return self}, function($ctx1) {$ctx1.fill(self,"range:",{int:int},smalltalk.CWMonster)})},
args: ["int"],
source: "range: int\x0a\x09range := int",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "readyToBePicked",
category: 'state delegation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._state())._readyToPick_(self);
return self}, function($ctx1) {$ctx1.fill(self,"readyToBePicked",{},smalltalk.CWMonster)})},
args: [],
source: "readyToBePicked\x0a\x09self state readyToPick: self",
messageSends: ["readyToPick:", "state"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "removeHP:",
category: 'fighting',
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
args: ["anInt"],
source: "removeHP: anInt\x0a     self hp: self hp - anInt.\x0a     self hp < 1 ifTrue: [\x0a           self die ].",
messageSends: ["hp:", "-", "hp", "ifTrue:", "die", "<"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "rollDicesCallBack:bonusDices:bonusAttack:",
category: 'fighting',
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
args: ["aBlock", "bonusDices", "bonusAttack"],
source: "rollDicesCallBack: aBlock bonusDices: bonusDices bonusAttack: bonusAttack\x0a\x09\x22roll the dices to attack an ennemy\x22\x0a\x09\x0a\x09| kill dicesRolledEvent |\x0a\x09kill := (1 to: self dices + bonusDices) inject: 0 into: [ :acc :index | \x0a\x09\x09100 atRandom < (self attack + bonusAttack)\x0a\x09\x09\x09ifTrue: [ acc + 1 ] \x0a\x09\x09\x09ifFalse: [ acc ] ]. \x0a\x09dicesRolledEvent := CWDicesRolledEvent new\x0a\x09\x09kills: kill;\x0a\x09\x09dices: self dices + bonusDices;\x0a\x09\x09callback: aBlock;\x0a\x09\x09yourself.\x0a\x09self announce: dicesRolledEvent",
messageSends: ["inject:into:", "ifTrue:ifFalse:", "+", "<", "attack", "atRandom", "to:", "dices", "kills:", "new", "dices:", "callback:", "yourself", "announce:"],
referencedClasses: ["CWDicesRolledEvent"]
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "selectActionCells",
category: 'selection',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._addSelectorsTo_(_st(_st(self)._parent())._selectableNeighboursForMonster_(self));
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectActionCells",{},smalltalk.CWMonster)})},
args: [],
source: "selectActionCells\x0a\x09^ self addSelectorsTo: (self parent selectableNeighboursForMonster: self).",
messageSends: ["addSelectorsTo:", "selectableNeighboursForMonster:", "parent"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "selectAttackableCells",
category: 'selection',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._addSelectorsTo_(_st(_st(self)._parent())._attackableNeighboursForMonster_(self));
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectAttackableCells",{},smalltalk.CWMonster)})},
args: [],
source: "selectAttackableCells\x0a\x09^ self addSelectorsTo: (self parent attackableNeighboursForMonster: self)",
messageSends: ["addSelectorsTo:", "attackableNeighboursForMonster:", "parent"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "selectInContext:",
category: 'state delegation',
fn: function (gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(self)._announceUpdate();
$1=_st(_st(self)._state())._select_inContext_(self,gameContext);
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectInContext:",{gameContext:gameContext},smalltalk.CWMonster)})},
args: ["gameContext"],
source: "selectInContext: gameContext\x0a\x09self announceUpdate.\x0a\x09^ self state select: self inContext: gameContext",
messageSends: ["announceUpdate", "select:inContext:", "state"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "selectMovableCells",
category: 'selection',
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
args: [],
source: "selectMovableCells\x0a\x09^ self addSelectorsTo: ((self parent movableNeighboursCycle: self currentMove) remove: self parent; yourself )",
messageSends: ["addSelectorsTo:", "remove:", "parent", "movableNeighboursCycle:", "currentMove", "yourself"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "showActiveMonster",
category: 'state delegation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._state())._showActiveMonster_(self);
return self}, function($ctx1) {$ctx1.fill(self,"showActiveMonster",{},smalltalk.CWMonster)})},
args: [],
source: "showActiveMonster\x0a\x09self state showActiveMonster: self",
messageSends: ["showActiveMonster:", "state"],
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
$1=_st(self["@player"])._side();
return $1;
}, function($ctx1) {$ctx1.fill(self,"side",{},smalltalk.CWMonster)})},
args: [],
source: "side\x0a\x09^ player side",
messageSends: ["side"],
referencedClasses: []
}),
smalltalk.CWMonster);

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
}, function($ctx1) {$ctx1.fill(self,"special",{},smalltalk.CWMonster)})},
args: [],
source: "special\x0a\x09^ special",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "special:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@special"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"special:",{aString:aString},smalltalk.CWMonster)})},
args: ["aString"],
source: "special: aString\x0a\x09special := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "state",
category: 'state machine',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@state"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"state",{},smalltalk.CWMonster)})},
args: [],
source: "state\x0a\x09^ state",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "state:",
category: 'state machine',
fn: function (aState){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@state"]=aState;
return self}, function($ctx1) {$ctx1.fill(self,"state:",{aState:aState},smalltalk.CWMonster)})},
args: ["aState"],
source: "state: aState\x0a\x09state := aState",
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
_st(self)._range_(_st(jsonStats)._range());
_st(self)._attack_(_st(jsonStats)._attack());
_st(self)._dices_(_st(jsonStats)._dices());
_st(self)._special_(_st(jsonStats)._special());
_st(self)._hp_(_st(self)._defaultHp());
return self}, function($ctx1) {$ctx1.fill(self,"stats:",{jsonStats:jsonStats},smalltalk.CWMonster)})},
args: ["jsonStats"],
source: "stats: jsonStats\x0a\x09self move: jsonStats move.\x0a\x09self range: jsonStats range.\x0a\x09self attack: jsonStats attack.\x0a\x09self dices: jsonStats dices.\x0a\x09self special: jsonStats special.\x0a\x09self hp: self defaultHp.",
messageSends: ["move:", "move", "range:", "range", "attack:", "attack", "dices:", "dices", "special:", "special", "hp:", "defaultHp"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "support",
category: 'fighting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._parent())._attackableNeighboursFrom_(_st(self)._side());
return $1;
}, function($ctx1) {$ctx1.fill(self,"support",{},smalltalk.CWMonster)})},
args: [],
source: "support\x0a\x09\x22Answers the ennemies near you to calculate how they support the attacker / the defender\x22\x0a\x09\x0a\x09^ self parent attackableNeighboursFrom: self side",
messageSends: ["attackableNeighboursFrom:", "side", "parent"],
referencedClasses: []
}),
smalltalk.CWMonster);


smalltalk.CWMonster.klass.iVarNames = ['jsonStatCache'];
smalltalk.addMethod(
smalltalk.method({
selector: "emptyMonster",
category: 'instance creation',
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
args: [],
source: "emptyMonster\x0a\x09\x22Answers a fake instance of a monster with empty stats.\x0a\x09Displayed by the menu when no monster is selected\x22\x0a\x09\x0a\x09| fakeImage |\x0a\x09fakeImage := NativeFunction constructor: 'Image'.\x0a\x09fakeImage at: 'src' put:'ressources/images/interro.png'.\x0a\x09^ self new\x0a\x09\x09image: fakeImage;\x0a\x09\x09hp: 0;\x0a\x09\x09move: 0;\x0a\x09\x09range: 0;\x0a\x09\x09dices: 0;\x0a\x09\x09attack: 0;\x0a\x09\x09special:'none'.",
messageSends: ["constructor:", "at:put:", "image:", "new", "hp:", "move:", "range:", "dices:", "attack:", "special:"],
referencedClasses: ["NativeFunction"]
}),
smalltalk.CWMonster.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "folderName",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "monsters";
}, function($ctx1) {$ctx1.fill(self,"folderName",{},smalltalk.CWMonster.klass)})},
args: [],
source: "folderName\x0a\x09^ 'monsters'",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWMonster.klass);


smalltalk.addClass('CWVisitor', smalltalk.Object, [], 'Easnoth-MapModel');
smalltalk.CWVisitor.comment="I am an abstract visitor that can visit the whole tree of map model objects."
smalltalk.addMethod(
smalltalk.method({
selector: "visitCell:",
category: 'visiting',
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"visitCell:",{aCell:aCell},smalltalk.CWVisitor)})},
args: ["aCell"],
source: "visitCell: aCell\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.CWVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitChildTrees:",
category: 'visiting - public',
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
category: 'visiting - public',
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
return self}, function($ctx1) {$ctx1.fill(self,"visitGameOverTile:",{aGameOverTile:aGameOverTile},smalltalk.CWVisitor)})},
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
return self}, function($ctx1) {$ctx1.fill(self,"visitHeros:",{aHeros:aHeros},smalltalk.CWVisitor)})},
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
return self}, function($ctx1) {$ctx1.fill(self,"visitMap:",{aMap:aMap},smalltalk.CWVisitor)})},
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
return self}, function($ctx1) {$ctx1.fill(self,"visitOverTile:",{anOverTile:anOverTile},smalltalk.CWVisitor)})},
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
return self}, function($ctx1) {$ctx1.fill(self,"visitRow:",{aRow:aRow},smalltalk.CWVisitor)})},
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
return self}, function($ctx1) {$ctx1.fill(self,"visitTile:",{aTile:aTile},smalltalk.CWVisitor)})},
args: ["aTile"],
source: "visitTile: aTile\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.CWVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitTree:",
category: 'visiting - public',
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
selector: "visitUnit:",
category: 'visiting',
fn: function (aUnit){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"visitUnit:",{aUnit:aUnit},smalltalk.CWVisitor)})},
args: ["aUnit"],
source: "visitUnit: aUnit\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.CWVisitor);


smalltalk.CWVisitor.klass.iVarNames = ['singleton'];

smalltalk.addClass('CWJsonWriter', smalltalk.CWVisitor, ['stream', 'indentLevel', 'otNumber'], 'Easnoth-MapModel');
smalltalk.CWJsonWriter.comment="I can export the current map to json data fromat.\x0a\x0aCWJsonWriter new exportMap: CWMap default"
smalltalk.addMethod(
smalltalk.method({
selector: "commaCr",
category: 'stream HL API',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self;
_st($1)._nextPutAll_(",");
$2=_st($1)._cr();
return self}, function($ctx1) {$ctx1.fill(self,"commaCr",{},smalltalk.CWJsonWriter)})},
args: [],
source: "commaCr\x0a\x09self \x0a\x09\x09nextPutAll: ',';\x0a\x09\x09cr",
messageSends: ["nextPutAll:", "cr"],
referencedClasses: []
}),
smalltalk.CWJsonWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "cr",
category: 'stream API',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@stream"])._cr();
_st((1))._to_do_(self["@indentLevel"],(function(each){
return smalltalk.withContext(function($ctx2) {
return _st(self["@stream"])._tab();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"cr",{},smalltalk.CWJsonWriter)})},
args: [],
source: "cr\x0a\x09stream cr.\x0a\x091 to: indentLevel do: [ :each | stream tab ]",
messageSends: ["cr", "to:do:", "tab"],
referencedClasses: []
}),
smalltalk.CWJsonWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "crIndentDecr",
category: 'stream API',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._decreaseIndent();
_st(self)._cr();
return self}, function($ctx1) {$ctx1.fill(self,"crIndentDecr",{},smalltalk.CWJsonWriter)})},
args: [],
source: "crIndentDecr\x0a\x09self decreaseIndent.\x0a\x09self cr.",
messageSends: ["decreaseIndent", "cr"],
referencedClasses: []
}),
smalltalk.CWJsonWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "crIndentIncr",
category: 'stream API',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._increaseIndent();
_st(self)._cr();
return self}, function($ctx1) {$ctx1.fill(self,"crIndentIncr",{},smalltalk.CWJsonWriter)})},
args: [],
source: "crIndentIncr\x0a\x09self increaseIndent.\x0a\x09self cr.",
messageSends: ["increaseIndent", "cr"],
referencedClasses: []
}),
smalltalk.CWJsonWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "decreaseIndent",
category: 'stream API',
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
args: [],
source: "decreaseIndent\x0a\x09indentLevel := indentLevel - 1.\x0a\x09indentLevel < 0 ifTrue: [ self error: 'indentation problem' ]",
messageSends: ["-", "ifTrue:", "error:", "<"],
referencedClasses: []
}),
smalltalk.CWJsonWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "endArray",
category: 'stream HL API',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self;
_st($1)._crIndentDecr();
$2=_st($1)._nextPutAll_("]");
return self}, function($ctx1) {$ctx1.fill(self,"endArray",{},smalltalk.CWJsonWriter)})},
args: [],
source: "endArray\x0a\x09self \x0a\x09\x09crIndentDecr;\x0a\x09\x09nextPutAll: ']'",
messageSends: ["crIndentDecr", "nextPutAll:"],
referencedClasses: []
}),
smalltalk.CWJsonWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "endObject",
category: 'stream HL API',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self;
_st($1)._crIndentDecr();
$2=_st($1)._nextPutAll_("}");
return self}, function($ctx1) {$ctx1.fill(self,"endObject",{},smalltalk.CWJsonWriter)})},
args: [],
source: "endObject\x0a\x09self \x0a\x09\x09crIndentDecr;\x0a\x09\x09nextPutAll: '}'.",
messageSends: ["crIndentDecr", "nextPutAll:"],
referencedClasses: []
}),
smalltalk.CWJsonWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "exportMap:",
category: 'public',
fn: function (aMap){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(aMap)._removeSelection();
_st(self)._visitMap_(aMap);
$1=_st(_st(self["@stream"])._collection())._asString();
return $1;
}, function($ctx1) {$ctx1.fill(self,"exportMap:",{aMap:aMap},smalltalk.CWJsonWriter)})},
args: ["aMap"],
source: "exportMap: aMap\x0a\x09\x22returns the string to write down in the json file\x22\x0a\x0a\x09aMap removeSelection.\x0a\x09self visitMap: aMap.\x0a\x09^ stream collection asString",
messageSends: ["removeSelection", "visitMap:", "asString", "collection"],
referencedClasses: []
}),
smalltalk.CWJsonWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "extractKeyFrom:",
category: 'helper',
fn: function (url){
var self=this;
var imageName;
return smalltalk.withContext(function($ctx1) { 
var $1;
imageName=_st(_st(url)._tokenize_("/"))._last();
$1=_st(_st(imageName)._tokenize_("."))._first();
return $1;
}, function($ctx1) {$ctx1.fill(self,"extractKeyFrom:",{url:url,imageName:imageName},smalltalk.CWJsonWriter)})},
args: ["url"],
source: "extractKeyFrom: url\x0a\x09| imageName |\x0a\x09imageName := (url tokenize: '/') last.\x0a\x09^ (imageName tokenize: '.') first",
messageSends: ["last", "tokenize:", "first"],
referencedClasses: []
}),
smalltalk.CWJsonWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "increaseIndent",
category: 'stream API',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@indentLevel"]=_st(self["@indentLevel"]).__plus((1));
return self}, function($ctx1) {$ctx1.fill(self,"increaseIndent",{},smalltalk.CWJsonWriter)})},
args: [],
source: "increaseIndent\x0a\x09indentLevel := indentLevel + 1",
messageSends: ["+"],
referencedClasses: []
}),
smalltalk.CWJsonWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function (){
var self=this;
function $StringStream(){return smalltalk.StringStream||(typeof StringStream=="undefined"?nil:StringStream)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.CWVisitor.fn.prototype._initialize.apply(_st(self), []);
self["@stream"]=_st($StringStream())._on_("");
self["@indentLevel"]=(0);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.CWJsonWriter)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09stream := StringStream on: ''.\x0a\x09indentLevel := 0.",
messageSends: ["initialize", "on:"],
referencedClasses: ["StringStream"]
}),
smalltalk.CWJsonWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "nextPutAll:",
category: 'stream API',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@stream"])._nextPutAll_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"nextPutAll:",{aString:aString},smalltalk.CWJsonWriter)})},
args: ["aString"],
source: "nextPutAll: aString\x0a\x09stream nextPutAll: aString",
messageSends: ["nextPutAll:"],
referencedClasses: []
}),
smalltalk.CWJsonWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "objectFieldName:intValue:",
category: 'stream HL API',
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
args: ["aName", "anInt"],
source: "objectFieldName: aName intValue: anInt\x0a\x09\x22 \x22\x22aName\x22\x22: anInt \x22\x0a\x0a\x09self \x0a\x09\x09nextPutAll: '\x22';\x0a\x09\x09nextPutAll: aName;\x0a\x09\x09nextPutAll: '\x22: ';\x0a\x09\x09nextPutAll: anInt printString",
messageSends: ["nextPutAll:", "printString"],
referencedClasses: []
}),
smalltalk.CWJsonWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "objectFieldName:stringValue:",
category: 'stream HL API',
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
args: ["aName", "aString"],
source: "objectFieldName: aName stringValue: aString\x0a\x09\x22 \x22\x22aName\x22\x22: \x22\x22aString\x22\x22 \x22\x0a\x0a\x09self \x0a\x09\x09nextPutAll: '\x22';\x0a\x09\x09nextPutAll: aName;\x0a\x09\x09nextPutAll: '\x22: \x22';\x0a\x09\x09nextPutAll: aString;\x0a\x09\x09nextPutAll: '\x22'",
messageSends: ["nextPutAll:"],
referencedClasses: []
}),
smalltalk.CWJsonWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "space",
category: 'stream API',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@stream"])._space();
return self}, function($ctx1) {$ctx1.fill(self,"space",{},smalltalk.CWJsonWriter)})},
args: [],
source: "space\x0a\x09stream space",
messageSends: ["space"],
referencedClasses: []
}),
smalltalk.CWJsonWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "startArrayNamed:",
category: 'stream HL API',
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
args: ["aString"],
source: "startArrayNamed: aString\x0a\x09self \x0a\x09\x09nextPutAll: '\x22';\x0a\x09\x09nextPutAll: aString;\x0a\x09\x09nextPutAll: '\x22: [';\x0a\x09\x09crIndentIncr",
messageSends: ["nextPutAll:", "crIndentIncr"],
referencedClasses: []
}),
smalltalk.CWJsonWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "startObject",
category: 'stream HL API',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self;
_st($1)._nextPutAll_("{");
$2=_st($1)._crIndentIncr();
return self}, function($ctx1) {$ctx1.fill(self,"startObject",{},smalltalk.CWJsonWriter)})},
args: [],
source: "startObject\x0a\x09self \x0a\x09\x09nextPutAll: '{';\x0a\x09\x09crIndentIncr",
messageSends: ["nextPutAll:", "crIndentIncr"],
referencedClasses: []
}),
smalltalk.CWJsonWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "startObjectNamed:",
category: 'stream HL API',
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
args: ["aName"],
source: "startObjectNamed: aName\x0a\x09self \x0a\x09\x09nextPutAll: '\x22';\x0a\x09\x09nextPutAll: aName;\x0a\x09\x09nextPutAll: '\x22: ';\x0a\x09\x09startObject",
messageSends: ["nextPutAll:", "startObject"],
referencedClasses: []
}),
smalltalk.CWJsonWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "visitCell:",
category: 'visiting',
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
args: ["aCell"],
source: "visitCell: aCell\x0a\x09otNumber := 0.\x0a\x09self \x0a\x09\x09startObject;\x0a\x09\x09visitChildren: aCell;\x0a\x09\x09endObject.",
messageSends: ["startObject", "visitChildren:", "endObject"],
referencedClasses: []
}),
smalltalk.CWJsonWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "visitChildren:",
category: 'visiting',
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
args: ["aBusinessObject"],
source: "visitChildren: aBusinessObject\x0a\x09aBusinessObject children withIndexDo: [ :child :i |\x0a\x09\x09\x09child accept: self.\x0a\x09\x09\x09i = aBusinessObject children size \x0a\x09\x09\x09\x09ifFalse: [ self commaCr ] ].",
messageSends: ["withIndexDo:", "accept:", "ifFalse:", "commaCr", "=", "size", "children"],
referencedClasses: []
}),
smalltalk.CWJsonWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "visitGameOverTile:",
category: 'visiting',
fn: function (aGameOverTile){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("gameOverTile should have been removed before exportation");
return self}, function($ctx1) {$ctx1.fill(self,"visitGameOverTile:",{aGameOverTile:aGameOverTile},smalltalk.CWJsonWriter)})},
args: ["aGameOverTile"],
source: "visitGameOverTile: aGameOverTile\x0a\x09self error: 'gameOverTile should have been removed before exportation'",
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.CWJsonWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "visitHeros:",
category: 'visiting',
fn: function (aHeros){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self;
_st($1)._startObjectNamed_("heros");
$2=_st($1)._visitMonster_(aHeros);
return self}, function($ctx1) {$ctx1.fill(self,"visitHeros:",{aHeros:aHeros},smalltalk.CWJsonWriter)})},
args: ["aHeros"],
source: "visitHeros: aHeros\x0a\x09self\x0a\x09\x09startObjectNamed: 'heros';\x0a\x09\x09visitMonster: aHeros",
messageSends: ["startObjectNamed:", "visitMonster:"],
referencedClasses: []
}),
smalltalk.CWJsonWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "visitMap:",
category: 'visiting',
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
args: ["aMap"],
source: "visitMap: aMap\x0a\x09self \x0a\x09\x09startObject;\x0a\x09\x09objectFieldName: 'name' stringValue: 'foo';\x0a\x09\x09commaCr;\x0a\x09\x09startArrayNamed: 'row';\x0a\x09\x09visitChildren: aMap;\x0a\x09\x09endArray;\x0a\x09\x09endObject.",
messageSends: ["startObject", "objectFieldName:stringValue:", "commaCr", "startArrayNamed:", "visitChildren:", "endArray", "endObject"],
referencedClasses: []
}),
smalltalk.CWJsonWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "visitMonster:",
category: 'visiting',
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
args: ["aMonster"],
source: "visitMonster: aMonster\x0a\x09self\x0a\x09\x09objectFieldName: 'name' stringValue: (self extractKeyFrom: aMonster image src);\x0a\x09\x09commaCr;\x0a\x09\x09objectFieldName: 'side' intValue: aMonster side;\x0a\x09\x09endObject",
messageSends: ["objectFieldName:stringValue:", "extractKeyFrom:", "src", "image", "commaCr", "objectFieldName:intValue:", "side", "endObject"],
referencedClasses: []
}),
smalltalk.CWJsonWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "visitOverTile:",
category: 'visiting',
fn: function (anOverTile){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@otNumber"]=_st(self["@otNumber"]).__plus((1));
_st(self)._objectFieldName_stringValue_(_st("overtile").__comma(self["@otNumber"]),_st(self)._extractKeyFrom_(_st(_st(anOverTile)._image())._src()));
return self}, function($ctx1) {$ctx1.fill(self,"visitOverTile:",{anOverTile:anOverTile},smalltalk.CWJsonWriter)})},
args: ["anOverTile"],
source: "visitOverTile: anOverTile\x0a\x09otNumber := otNumber + 1.\x0a\x09self objectFieldName: 'overtile', otNumber stringValue: (self extractKeyFrom: anOverTile image src).",
messageSends: ["+", "objectFieldName:stringValue:", ",", "extractKeyFrom:", "src", "image"],
referencedClasses: []
}),
smalltalk.CWJsonWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "visitRow:",
category: 'visiting',
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
args: ["aRow"],
source: "visitRow: aRow\x0a\x09self \x0a\x09\x09startObject;\x0a\x09\x09startArrayNamed: 'cells';\x0a\x09\x09visitChildren: aRow;\x0a\x09\x09endArray;\x0a\x09\x09endObject.",
messageSends: ["startObject", "startArrayNamed:", "visitChildren:", "endArray", "endObject"],
referencedClasses: []
}),
smalltalk.CWJsonWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "visitTile:",
category: 'visiting',
fn: function (aTile){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._objectFieldName_stringValue_("tile",_st(self)._extractKeyFrom_(_st(_st(aTile)._image())._src()));
return self}, function($ctx1) {$ctx1.fill(self,"visitTile:",{aTile:aTile},smalltalk.CWJsonWriter)})},
args: ["aTile"],
source: "visitTile: aTile\x0a\x09self objectFieldName: 'tile' stringValue: (self extractKeyFrom: aTile image src)",
messageSends: ["objectFieldName:stringValue:", "extractKeyFrom:", "src", "image"],
referencedClasses: []
}),
smalltalk.CWJsonWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "visitUnit:",
category: 'visiting',
fn: function (aUnit){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self;
_st($1)._startObjectNamed_("unit");
$2=_st($1)._visitMonster_(aUnit);
return self}, function($ctx1) {$ctx1.fill(self,"visitUnit:",{aUnit:aUnit},smalltalk.CWJsonWriter)})},
args: ["aUnit"],
source: "visitUnit: aUnit\x0a\x09self\x0a\x09\x09startObjectNamed: 'unit';\x0a\x09\x09visitMonster: aUnit",
messageSends: ["startObjectNamed:", "visitMonster:"],
referencedClasses: []
}),
smalltalk.CWJsonWriter);



smalltalk.addMethod(
smalltalk.method({
selector: "keys",
category: '*Easnoth-MapModel',
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
category: '*Easnoth-MapModel',
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

