smalltalk.addPackage('Easnoth-States');
smalltalk.addClass('CWState', smalltalk.Object, [], 'Easnoth-States');

smalltalk.CWState.klass.iVarNames = ['default'];
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
}, function($ctx1) {$ctx1.fill(self,"default",{},smalltalk.CWState.klass)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.CWState.klass);


smalltalk.addClass('CWCellState', smalltalk.CWState, [], 'Easnoth-States');
smalltalk.addMethod(
smalltalk.method({
selector: "addSelector:",
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"addSelector:",{aCell:aCell},smalltalk.CWCellState)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.CWCellState);

smalltalk.addMethod(
smalltalk.method({
selector: "canMoveTo:",
fn: function (cell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"canMoveTo:",{cell:cell},smalltalk.CWCellState)})},
messageSends: []}),
smalltalk.CWCellState);

smalltalk.addMethod(
smalltalk.method({
selector: "cell:addMonster:",
fn: function (aCell,aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"cell:addMonster:",{aCell:aCell,aMonster:aMonster},smalltalk.CWCellState)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.CWCellState);

smalltalk.addMethod(
smalltalk.method({
selector: "cell:canBeAttackedBy:",
fn: function (aCell,side){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"cell:canBeAttackedBy:",{aCell:aCell,side:side},smalltalk.CWCellState)})},
messageSends: []}),
smalltalk.CWCellState);

smalltalk.addMethod(
smalltalk.method({
selector: "mouseClick:context:",
fn: function (aCell,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subClassResponsbility();
return self}, function($ctx1) {$ctx1.fill(self,"mouseClick:context:",{aCell:aCell,gameContext:gameContext},smalltalk.CWCellState)})},
messageSends: ["subClassResponsbility"]}),
smalltalk.CWCellState);

smalltalk.addMethod(
smalltalk.method({
selector: "removeMonster:",
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"removeMonster:",{aCell:aCell},smalltalk.CWCellState)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.CWCellState);

smalltalk.addMethod(
smalltalk.method({
selector: "removeSelector:",
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aCell)._removeGameOverTile();
return self}, function($ctx1) {$ctx1.fill(self,"removeSelector:",{aCell:aCell},smalltalk.CWCellState)})},
messageSends: ["removeGameOverTile"]}),
smalltalk.CWCellState);

smalltalk.addMethod(
smalltalk.method({
selector: "showActiveMonster:",
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"showActiveMonster:",{aCell:aCell},smalltalk.CWCellState)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.CWCellState);


smalltalk.addMethod(
smalltalk.method({
selector: "initializeStateFor:",
fn: function (aCell){
var self=this;
function $CWFree(){return smalltalk.CWFree||(typeof CWFree=="undefined"?nil:CWFree)}
function $CWHasMonster(){return smalltalk.CWHasMonster||(typeof CWHasMonster=="undefined"?nil:CWHasMonster)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aCell)._free();
if(smalltalk.assert($1)){
_st(aCell)._changeState_($CWFree());
} else {
_st(aCell)._changeState_($CWHasMonster());
};
return self}, function($ctx1) {$ctx1.fill(self,"initializeStateFor:",{aCell:aCell},smalltalk.CWCellState.klass)})},
messageSends: ["ifTrue:ifFalse:", "changeState:", "free"]}),
smalltalk.CWCellState.klass);


smalltalk.addClass('CWFree', smalltalk.CWCellState, [], 'Easnoth-States');
smalltalk.addMethod(
smalltalk.method({
selector: "addSelector:",
fn: function (aCell){
var self=this;
function $CWFreeSelected(){return smalltalk.CWFreeSelected||(typeof CWFreeSelected=="undefined"?nil:CWFreeSelected)}
return smalltalk.withContext(function($ctx1) { 
_st(aCell)._addSelectorColored_("green");
_st(aCell)._changeState_($CWFreeSelected());
return self}, function($ctx1) {$ctx1.fill(self,"addSelector:",{aCell:aCell},smalltalk.CWFree)})},
messageSends: ["addSelectorColored:", "changeState:"]}),
smalltalk.CWFree);

smalltalk.addMethod(
smalltalk.method({
selector: "canMoveTo:",
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"canMoveTo:",{aCell:aCell},smalltalk.CWFree)})},
messageSends: []}),
smalltalk.CWFree);

smalltalk.addMethod(
smalltalk.method({
selector: "cell:addMonster:",
fn: function (aCell,aMonster){
var self=this;
function $CWHasMonster(){return smalltalk.CWHasMonster||(typeof CWHasMonster=="undefined"?nil:CWHasMonster)}
return smalltalk.withContext(function($ctx1) { 
_st(aMonster)._parent_(aCell);
_st(aCell)._monster_(aMonster);
_st(aCell)._changeState_($CWHasMonster());
return self}, function($ctx1) {$ctx1.fill(self,"cell:addMonster:",{aCell:aCell,aMonster:aMonster},smalltalk.CWFree)})},
messageSends: ["parent:", "monster:", "changeState:"]}),
smalltalk.CWFree);

smalltalk.addMethod(
smalltalk.method({
selector: "mouseClick:context:",
fn: function (aCell,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(aCell)._root();
_st($1)._removeSelection();
_st($1)._showActiveMonsters();
$2=_st($1)._updateGOTs();
return self}, function($ctx1) {$ctx1.fill(self,"mouseClick:context:",{aCell:aCell,gameContext:gameContext},smalltalk.CWFree)})},
messageSends: ["removeSelection", "root", "showActiveMonsters", "updateGOTs"]}),
smalltalk.CWFree);

smalltalk.addMethod(
smalltalk.method({
selector: "removeMonster:",
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("cannot remove a monster from a cell that has no monster on it");
return self}, function($ctx1) {$ctx1.fill(self,"removeMonster:",{aCell:aCell},smalltalk.CWFree)})},
messageSends: ["error:"]}),
smalltalk.CWFree);

smalltalk.addMethod(
smalltalk.method({
selector: "showActiveMonster:",
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"showActiveMonster:",{aCell:aCell},smalltalk.CWFree)})},
messageSends: []}),
smalltalk.CWFree);



smalltalk.addClass('CWFreeSelected', smalltalk.CWCellState, [], 'Easnoth-States');
smalltalk.addMethod(
smalltalk.method({
selector: "addSelector:",
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("cannot add a selector to a cell that has already a *green* selector");
return self}, function($ctx1) {$ctx1.fill(self,"addSelector:",{aCell:aCell},smalltalk.CWFreeSelected)})},
messageSends: ["error:"]}),
smalltalk.CWFreeSelected);

smalltalk.addMethod(
smalltalk.method({
selector: "cell:addMonster:",
fn: function (aCell,aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("cannot add a monster to a cell that has already a *green* selector (case not specified in state machine)");
return self}, function($ctx1) {$ctx1.fill(self,"cell:addMonster:",{aCell:aCell,aMonster:aMonster},smalltalk.CWFreeSelected)})},
messageSends: ["error:"]}),
smalltalk.CWFreeSelected);

smalltalk.addMethod(
smalltalk.method({
selector: "mouseClick:context:",
fn: function (aCell,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(gameContext)._currentMonster())._moveTo_inContext_(aCell,gameContext);
return self}, function($ctx1) {$ctx1.fill(self,"mouseClick:context:",{aCell:aCell,gameContext:gameContext},smalltalk.CWFreeSelected)})},
messageSends: ["moveTo:inContext:", "currentMonster"]}),
smalltalk.CWFreeSelected);

smalltalk.addMethod(
smalltalk.method({
selector: "removeMonster:",
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("cannot remove a monster from a cell that has no monster on it");
return self}, function($ctx1) {$ctx1.fill(self,"removeMonster:",{aCell:aCell},smalltalk.CWFreeSelected)})},
messageSends: ["error:"]}),
smalltalk.CWFreeSelected);

smalltalk.addMethod(
smalltalk.method({
selector: "removeSelector:",
fn: function (aCell){
var self=this;
function $CWFree(){return smalltalk.CWFree||(typeof CWFree=="undefined"?nil:CWFree)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.CWCellState.fn.prototype._removeSelector_.apply(_st(self), [aCell]);
_st(aCell)._changeState_($CWFree());
return self}, function($ctx1) {$ctx1.fill(self,"removeSelector:",{aCell:aCell},smalltalk.CWFreeSelected)})},
messageSends: ["removeSelector:", "changeState:"]}),
smalltalk.CWFreeSelected);

smalltalk.addMethod(
smalltalk.method({
selector: "showActiveMonster:",
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("try to show the monster whereas this cell has already a *green* selector and has no monster on it. (not specified in the state machine)");
return self}, function($ctx1) {$ctx1.fill(self,"showActiveMonster:",{aCell:aCell},smalltalk.CWFreeSelected)})},
messageSends: ["error:"]}),
smalltalk.CWFreeSelected);



smalltalk.addClass('CWHasMonster', smalltalk.CWCellState, [], 'Easnoth-States');
smalltalk.addMethod(
smalltalk.method({
selector: "addSelector:",
fn: function (aCell){
var self=this;
function $CWHasMonsterSelected(){return smalltalk.CWHasMonsterSelected||(typeof CWHasMonsterSelected=="undefined"?nil:CWHasMonsterSelected)}
return smalltalk.withContext(function($ctx1) { 
_st(aCell)._addSelectorColored_("red");
_st(aCell)._changeState_($CWHasMonsterSelected());
return self}, function($ctx1) {$ctx1.fill(self,"addSelector:",{aCell:aCell},smalltalk.CWHasMonster)})},
messageSends: ["addSelectorColored:", "changeState:"]}),
smalltalk.CWHasMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "cell:addMonster:",
fn: function (aCell,aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("cannot add a monster on a cell that has already one");
return self}, function($ctx1) {$ctx1.fill(self,"cell:addMonster:",{aCell:aCell,aMonster:aMonster},smalltalk.CWHasMonster)})},
messageSends: ["error:"]}),
smalltalk.CWHasMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "cell:canBeAttackedBy:",
fn: function (aCell,side){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(aCell)._side()).__eq(side))._not();
return $1;
}, function($ctx1) {$ctx1.fill(self,"cell:canBeAttackedBy:",{aCell:aCell,side:side},smalltalk.CWHasMonster)})},
messageSends: ["not", "=", "side"]}),
smalltalk.CWHasMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "mouseClick:context:",
fn: function (aCell,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(aCell)._monster())._select_(gameContext);
return self}, function($ctx1) {$ctx1.fill(self,"mouseClick:context:",{aCell:aCell,gameContext:gameContext},smalltalk.CWHasMonster)})},
messageSends: ["select:", "monster"]}),
smalltalk.CWHasMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "removeMonster:",
fn: function (aCell){
var self=this;
function $CWFree(){return smalltalk.CWFree||(typeof CWFree=="undefined"?nil:CWFree)}
return smalltalk.withContext(function($ctx1) { 
_st(aCell)._monster_(nil);
_st(aCell)._changeState_($CWFree());
return self}, function($ctx1) {$ctx1.fill(self,"removeMonster:",{aCell:aCell},smalltalk.CWHasMonster)})},
messageSends: ["monster:", "changeState:"]}),
smalltalk.CWHasMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "showActiveMonster:",
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(aCell)._monster())._showActiveMonster();
return self}, function($ctx1) {$ctx1.fill(self,"showActiveMonster:",{aCell:aCell},smalltalk.CWHasMonster)})},
messageSends: ["showActiveMonster", "monster"]}),
smalltalk.CWHasMonster);



smalltalk.addClass('CWHasMonsterSelected', smalltalk.CWCellState, [], 'Easnoth-States');
smalltalk.addMethod(
smalltalk.method({
selector: "addSelector:",
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("cannot add a selector to a cell that has already a *red* selector");
return self}, function($ctx1) {$ctx1.fill(self,"addSelector:",{aCell:aCell},smalltalk.CWHasMonsterSelected)})},
messageSends: ["error:"]}),
smalltalk.CWHasMonsterSelected);

smalltalk.addMethod(
smalltalk.method({
selector: "cell:addMonster:",
fn: function (aCell,aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("cannot add a monster to a cell that has already a monster and a *red* selector");
return self}, function($ctx1) {$ctx1.fill(self,"cell:addMonster:",{aCell:aCell,aMonster:aMonster},smalltalk.CWHasMonsterSelected)})},
messageSends: ["error:"]}),
smalltalk.CWHasMonsterSelected);

smalltalk.addMethod(
smalltalk.method({
selector: "mouseClick:context:",
fn: function (aCell,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(gameContext)._currentMonster())._attackTo_inContext_(aCell,gameContext);
return self}, function($ctx1) {$ctx1.fill(self,"mouseClick:context:",{aCell:aCell,gameContext:gameContext},smalltalk.CWHasMonsterSelected)})},
messageSends: ["attackTo:inContext:", "currentMonster"]}),
smalltalk.CWHasMonsterSelected);

smalltalk.addMethod(
smalltalk.method({
selector: "removeMonster:",
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("cannot remove a monster from a cell that has already a *red* selector. (case not specified in state machine)");
return self}, function($ctx1) {$ctx1.fill(self,"removeMonster:",{aCell:aCell},smalltalk.CWHasMonsterSelected)})},
messageSends: ["error:"]}),
smalltalk.CWHasMonsterSelected);

smalltalk.addMethod(
smalltalk.method({
selector: "removeSelector:",
fn: function (aCell){
var self=this;
function $CWHasMonster(){return smalltalk.CWHasMonster||(typeof CWHasMonster=="undefined"?nil:CWHasMonster)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.CWCellState.fn.prototype._removeSelector_.apply(_st(self), [aCell]);
_st(aCell)._changeState_($CWHasMonster());
return self}, function($ctx1) {$ctx1.fill(self,"removeSelector:",{aCell:aCell},smalltalk.CWHasMonsterSelected)})},
messageSends: ["removeSelector:", "changeState:"]}),
smalltalk.CWHasMonsterSelected);

smalltalk.addMethod(
smalltalk.method({
selector: "showActiveMonster:",
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("try to show the monster whereas this cell has already a *red* selector and a monster from the other player. (not specified in the state machine)");
return self}, function($ctx1) {$ctx1.fill(self,"showActiveMonster:",{aCell:aCell},smalltalk.CWHasMonsterSelected)})},
messageSends: ["error:"]}),
smalltalk.CWHasMonsterSelected);



smalltalk.addClass('CWMonsterState', smalltalk.CWState, [], 'Easnoth-States');
smalltalk.addMethod(
smalltalk.method({
selector: "activate:",
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("cannot activate a non inactive monster");
return self}, function($ctx1) {$ctx1.fill(self,"activate:",{aMonster:aMonster},smalltalk.CWMonsterState)})},
messageSends: ["error:"]}),
smalltalk.CWMonsterState);

smalltalk.addMethod(
smalltalk.method({
selector: "changeStateAfterAttacking:",
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"changeStateAfterAttacking:",{aMonster:aMonster},smalltalk.CWMonsterState)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.CWMonsterState);

smalltalk.addMethod(
smalltalk.method({
selector: "changeStateAfterMoving:",
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"changeStateAfterMoving:",{aMonster:aMonster},smalltalk.CWMonsterState)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.CWMonsterState);

smalltalk.addMethod(
smalltalk.method({
selector: "checkForNextTurn:",
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"checkForNextTurn:",{aMonster:aMonster},smalltalk.CWMonsterState)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.CWMonsterState);

smalltalk.addMethod(
smalltalk.method({
selector: "desactivate:",
fn: function (aMonster){
var self=this;
function $CWInactive(){return smalltalk.CWInactive||(typeof CWInactive=="undefined"?nil:CWInactive)}
return smalltalk.withContext(function($ctx1) { 
_st(aMonster)._changeState_($CWInactive());
return self}, function($ctx1) {$ctx1.fill(self,"desactivate:",{aMonster:aMonster},smalltalk.CWMonsterState)})},
messageSends: ["changeState:"]}),
smalltalk.CWMonsterState);

smalltalk.addMethod(
smalltalk.method({
selector: "monster:attackTo:inContext:",
fn: function (aMonster,aCell,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"monster:attackTo:inContext:",{aMonster:aMonster,aCell:aCell,gameContext:gameContext},smalltalk.CWMonsterState)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.CWMonsterState);

smalltalk.addMethod(
smalltalk.method({
selector: "monster:moveTo:inContext:",
fn: function (aMonster,aCell,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aMonster)._moveTo_inContext_callback_(aCell,gameContext,(function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"monster:moveTo:inContext:",{aMonster:aMonster,aCell:aCell,gameContext:gameContext},smalltalk.CWMonsterState)})},
messageSends: ["moveTo:inContext:callback:"]}),
smalltalk.CWMonsterState);

smalltalk.addMethod(
smalltalk.method({
selector: "readyToPick:",
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("cannot prepare a monster for picking if he is not Inactive");
return self}, function($ctx1) {$ctx1.fill(self,"readyToPick:",{aMonster:aMonster},smalltalk.CWMonsterState)})},
messageSends: ["error:"]}),
smalltalk.CWMonsterState);

smalltalk.addMethod(
smalltalk.method({
selector: "select:inContext:",
fn: function (aMonster,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"select:inContext:",{aMonster:aMonster,gameContext:gameContext},smalltalk.CWMonsterState)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.CWMonsterState);

smalltalk.addMethod(
smalltalk.method({
selector: "showActiveMonster:",
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(aMonster)._parent())._addSelectorColored_("white");
return self}, function($ctx1) {$ctx1.fill(self,"showActiveMonster:",{aMonster:aMonster},smalltalk.CWMonsterState)})},
messageSends: ["addSelectorColored:", "parent"]}),
smalltalk.CWMonsterState);



smalltalk.addClass('CWActive', smalltalk.CWMonsterState, [], 'Easnoth-States');
smalltalk.addMethod(
smalltalk.method({
selector: "cell:ToMoveBeforeAttack:",
fn: function (cell1,cellLast){
var self=this;
var possibleCells,closestCell,shortestPath;
function $CWFreeSelected(){return smalltalk.CWFreeSelected||(typeof CWFreeSelected=="undefined"?nil:CWFreeSelected)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
possibleCells=_st(_st(cellLast)._neighbours())._select_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(each)._state()).__eq(_st($CWFreeSelected())._default());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
shortestPath=(9999);
_st(possibleCells)._do_((function(each){
var pathSize;
return smalltalk.withContext(function($ctx2) {
pathSize=_st(_st(cell1)._pathTo_(each))._size();
pathSize;
$1=_st(pathSize).__lt(shortestPath);
if(smalltalk.assert($1)){
shortestPath=pathSize;
shortestPath;
closestCell=each;
return closestCell;
};
}, function($ctx2) {$ctx2.fillBlock({each:each,pathSize:pathSize},$ctx1)})}));
$2=closestCell;
return $2;
}, function($ctx1) {$ctx1.fill(self,"cell:ToMoveBeforeAttack:",{cell1:cell1,cellLast:cellLast,possibleCells:possibleCells,closestCell:closestCell,shortestPath:shortestPath},smalltalk.CWActive)})},
messageSends: ["select:", "=", "default", "state", "neighbours", "do:", "size", "pathTo:", "ifTrue:", "<"]}),
smalltalk.CWActive);

smalltalk.addMethod(
smalltalk.method({
selector: "changeStateAfterAttacking:",
fn: function (aMonster){
var self=this;
function $CWHasAttacked(){return smalltalk.CWHasAttacked||(typeof CWHasAttacked=="undefined"?nil:CWHasAttacked)}
return smalltalk.withContext(function($ctx1) { 
_st(aMonster)._changeState_($CWHasAttacked());
return self}, function($ctx1) {$ctx1.fill(self,"changeStateAfterAttacking:",{aMonster:aMonster},smalltalk.CWActive)})},
messageSends: ["changeState:"]}),
smalltalk.CWActive);

smalltalk.addMethod(
smalltalk.method({
selector: "changeStateAfterMoving:",
fn: function (aMonster){
var self=this;
function $CWHasMoved(){return smalltalk.CWHasMoved||(typeof CWHasMoved=="undefined"?nil:CWHasMoved)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(aMonster)._currentMove()).__eq((0));
if(smalltalk.assert($1)){
_st(aMonster)._changeState_($CWHasMoved());
};
return self}, function($ctx1) {$ctx1.fill(self,"changeStateAfterMoving:",{aMonster:aMonster},smalltalk.CWActive)})},
messageSends: ["ifTrue:", "changeState:", "=", "currentMove"]}),
smalltalk.CWActive);

smalltalk.addMethod(
smalltalk.method({
selector: "checkForNextTurn:",
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"checkForNextTurn:",{aMonster:aMonster},smalltalk.CWActive)})},
messageSends: []}),
smalltalk.CWActive);

smalltalk.addMethod(
smalltalk.method({
selector: "monster:attackTo:inContext:",
fn: function (aMonster,aCell,gameContext){
var self=this;
var toMoveCell;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(aCell)._neighbours())._includes_(_st(aMonster)._parent());
if(smalltalk.assert($1)){
_st(aMonster)._attackNeighbour_inContext_(_st(aCell)._monster(),gameContext);
} else {
toMoveCell=_st(self)._cell_ToMoveBeforeAttack_(_st(aMonster)._parent(),aCell);
toMoveCell;
_st(aMonster)._moveTo_inContext_callback_(toMoveCell,gameContext,(function(){
return smalltalk.withContext(function($ctx2) {
_st(aMonster)._attackTo_inContext_(aCell,gameContext);
return _st(aMonster)._updateGOTs();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
};
return self}, function($ctx1) {$ctx1.fill(self,"monster:attackTo:inContext:",{aMonster:aMonster,aCell:aCell,gameContext:gameContext,toMoveCell:toMoveCell},smalltalk.CWActive)})},
messageSends: ["ifFalse:ifTrue:", "cell:ToMoveBeforeAttack:", "parent", "moveTo:inContext:callback:", "attackTo:inContext:", "updateGOTs", "attackNeighbour:inContext:", "monster", "includes:", "neighbours"]}),
smalltalk.CWActive);

smalltalk.addMethod(
smalltalk.method({
selector: "select:inContext:",
fn: function (aMonster,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(aMonster)._parent())._selectableNeighboursMoveCycle_attackCycle_fromSide_(_st(aMonster)._currentMove(),_st(aMonster)._range(),_st(aMonster)._side());
_st(gameContext)._currentMonster_(aMonster);
_st(aMonster)._updateGOTs();
return self}, function($ctx1) {$ctx1.fill(self,"select:inContext:",{aMonster:aMonster,gameContext:gameContext},smalltalk.CWActive)})},
messageSends: ["selectableNeighboursMoveCycle:attackCycle:fromSide:", "currentMove", "range", "side", "parent", "currentMonster:", "updateGOTs"]}),
smalltalk.CWActive);



smalltalk.addClass('CWHasAttacked', smalltalk.CWMonsterState, [], 'Easnoth-States');
smalltalk.addMethod(
smalltalk.method({
selector: "changeStateAfterAttacking:",
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("seemingly the monster attacked whereas he had already attacked previously in his turn. cannot happen");
return self}, function($ctx1) {$ctx1.fill(self,"changeStateAfterAttacking:",{aMonster:aMonster},smalltalk.CWHasAttacked)})},
messageSends: ["error:"]}),
smalltalk.CWHasAttacked);

smalltalk.addMethod(
smalltalk.method({
selector: "changeStateAfterMoving:",
fn: function (aMonster){
var self=this;
function $CWInactive(){return smalltalk.CWInactive||(typeof CWInactive=="undefined"?nil:CWInactive)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(aMonster)._currentMove()).__eq((0));
if(smalltalk.assert($1)){
_st(aMonster)._changeState_($CWInactive());
};
return self}, function($ctx1) {$ctx1.fill(self,"changeStateAfterMoving:",{aMonster:aMonster},smalltalk.CWHasAttacked)})},
messageSends: ["ifTrue:", "changeState:", "=", "currentMove"]}),
smalltalk.CWHasAttacked);

smalltalk.addMethod(
smalltalk.method({
selector: "checkForNextTurn:",
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"checkForNextTurn:",{aMonster:aMonster},smalltalk.CWHasAttacked)})},
messageSends: []}),
smalltalk.CWHasAttacked);

smalltalk.addMethod(
smalltalk.method({
selector: "monster:attackTo:inContext:",
fn: function (aMonster,aCell,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("seemingly the monster is trying to attack whereas he has already attacked previously in this turn. cannot happen");
return self}, function($ctx1) {$ctx1.fill(self,"monster:attackTo:inContext:",{aMonster:aMonster,aCell:aCell,gameContext:gameContext},smalltalk.CWHasAttacked)})},
messageSends: ["error:"]}),
smalltalk.CWHasAttacked);

smalltalk.addMethod(
smalltalk.method({
selector: "select:inContext:",
fn: function (aMonster,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(aMonster)._parent())._movableNeighboursCycle_(_st(aMonster)._currentMove());
_st(aMonster)._updateGOTs();
_st(gameContext)._currentMonster_(aMonster);
return self}, function($ctx1) {$ctx1.fill(self,"select:inContext:",{aMonster:aMonster,gameContext:gameContext},smalltalk.CWHasAttacked)})},
messageSends: ["movableNeighboursCycle:", "currentMove", "parent", "updateGOTs", "currentMonster:"]}),
smalltalk.CWHasAttacked);



smalltalk.addClass('CWHasMoved', smalltalk.CWMonsterState, [], 'Easnoth-States');
smalltalk.addMethod(
smalltalk.method({
selector: "changeStateAfterAttacking:",
fn: function (aMonster){
var self=this;
function $CWInactive(){return smalltalk.CWInactive||(typeof CWInactive=="undefined"?nil:CWInactive)}
return smalltalk.withContext(function($ctx1) { 
_st(aMonster)._changeState_($CWInactive());
return self}, function($ctx1) {$ctx1.fill(self,"changeStateAfterAttacking:",{aMonster:aMonster},smalltalk.CWHasMoved)})},
messageSends: ["changeState:"]}),
smalltalk.CWHasMoved);

smalltalk.addMethod(
smalltalk.method({
selector: "changeStateAfterMoving:",
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("seemingly the monster moved whereas he had already moved its full move previously in his turn. cannot happen");
return self}, function($ctx1) {$ctx1.fill(self,"changeStateAfterMoving:",{aMonster:aMonster},smalltalk.CWHasMoved)})},
messageSends: ["error:"]}),
smalltalk.CWHasMoved);

smalltalk.addMethod(
smalltalk.method({
selector: "checkForNextTurn:",
fn: function (aMonster){
var self=this;
var col;
function $CWNextTurnEvent(){return smalltalk.CWNextTurnEvent||(typeof CWNextTurnEvent=="undefined"?nil:CWNextTurnEvent)}
return smalltalk.withContext(function($ctx1) { 
col=_st(_st(aMonster)._parent())._attackableNeighboursCycle_fromSide_(_st(aMonster)._range(),_st(aMonster)._side());
_st(col)._ifEmpty_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(aMonster)._announce_(_st($CWNextTurnEvent())._new());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"checkForNextTurn:",{aMonster:aMonster,col:col},smalltalk.CWHasMoved)})},
messageSends: ["attackableNeighboursCycle:fromSide:", "range", "side", "parent", "ifEmpty:", "announce:", "new"]}),
smalltalk.CWHasMoved);

smalltalk.addMethod(
smalltalk.method({
selector: "monster:attackTo:inContext:",
fn: function (aMonster,aCell,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aMonster)._attackNeighbour_inContext_(_st(aCell)._monster(),gameContext);
return self}, function($ctx1) {$ctx1.fill(self,"monster:attackTo:inContext:",{aMonster:aMonster,aCell:aCell,gameContext:gameContext},smalltalk.CWHasMoved)})},
messageSends: ["attackNeighbour:inContext:", "monster"]}),
smalltalk.CWHasMoved);

smalltalk.addMethod(
smalltalk.method({
selector: "monster:moveTo:inContext:",
fn: function (aMonster,aCell,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("seemingly the monster is trying to move whereas he has already moved his full move stat. cannot happen");
return self}, function($ctx1) {$ctx1.fill(self,"monster:moveTo:inContext:",{aMonster:aMonster,aCell:aCell,gameContext:gameContext},smalltalk.CWHasMoved)})},
messageSends: ["error:"]}),
smalltalk.CWHasMoved);

smalltalk.addMethod(
smalltalk.method({
selector: "select:inContext:",
fn: function (aMonster,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(aMonster)._parent())._attackableNeighboursCycle_fromSide_(_st(aMonster)._range(),_st(aMonster)._side());
_st(aMonster)._updateGOTs();
_st(gameContext)._currentMonster_(aMonster);
return self}, function($ctx1) {$ctx1.fill(self,"select:inContext:",{aMonster:aMonster,gameContext:gameContext},smalltalk.CWHasMoved)})},
messageSends: ["attackableNeighboursCycle:fromSide:", "range", "side", "parent", "updateGOTs", "currentMonster:"]}),
smalltalk.CWHasMoved);



smalltalk.addClass('CWInactive', smalltalk.CWMonsterState, [], 'Easnoth-States');
smalltalk.addMethod(
smalltalk.method({
selector: "activate:",
fn: function (aMonster){
var self=this;
function $CWActive(){return smalltalk.CWActive||(typeof CWActive=="undefined"?nil:CWActive)}
return smalltalk.withContext(function($ctx1) { 
_st(aMonster)._changeState_($CWActive());
_st(aMonster)._currentMove_(_st(aMonster)._move());
return self}, function($ctx1) {$ctx1.fill(self,"activate:",{aMonster:aMonster},smalltalk.CWInactive)})},
messageSends: ["changeState:", "currentMove:", "move"]}),
smalltalk.CWInactive);

smalltalk.addMethod(
smalltalk.method({
selector: "changeStateAfterAttacking:",
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("seemingly the monster has attacked whereas he is Inactive. cannot happen");
return self}, function($ctx1) {$ctx1.fill(self,"changeStateAfterAttacking:",{aMonster:aMonster},smalltalk.CWInactive)})},
messageSends: ["error:"]}),
smalltalk.CWInactive);

smalltalk.addMethod(
smalltalk.method({
selector: "changeStateAfterMoving:",
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("seemingly the monster has moved whereas he is Inactive. cannot happen");
return self}, function($ctx1) {$ctx1.fill(self,"changeStateAfterMoving:",{aMonster:aMonster},smalltalk.CWInactive)})},
messageSends: ["error:"]}),
smalltalk.CWInactive);

smalltalk.addMethod(
smalltalk.method({
selector: "checkForNextTurn:",
fn: function (aMonster){
var self=this;
function $CWNextTurnEvent(){return smalltalk.CWNextTurnEvent||(typeof CWNextTurnEvent=="undefined"?nil:CWNextTurnEvent)}
return smalltalk.withContext(function($ctx1) { 
_st(aMonster)._announce_(_st($CWNextTurnEvent())._new());
return self}, function($ctx1) {$ctx1.fill(self,"checkForNextTurn:",{aMonster:aMonster},smalltalk.CWInactive)})},
messageSends: ["announce:", "new"]}),
smalltalk.CWInactive);

smalltalk.addMethod(
smalltalk.method({
selector: "desactivate:",
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"desactivate:",{aMonster:aMonster},smalltalk.CWInactive)})},
messageSends: []}),
smalltalk.CWInactive);

smalltalk.addMethod(
smalltalk.method({
selector: "monster:attackTo:inContext:",
fn: function (aMonster,aCell,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("seemingly the monster is trying to attack whereas he is inactive. cannot happen");
return self}, function($ctx1) {$ctx1.fill(self,"monster:attackTo:inContext:",{aMonster:aMonster,aCell:aCell,gameContext:gameContext},smalltalk.CWInactive)})},
messageSends: ["error:"]}),
smalltalk.CWInactive);

smalltalk.addMethod(
smalltalk.method({
selector: "monster:moveTo:inContext:",
fn: function (aMonster,aCell,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("seemingly the monster is trying to move whereas he is inactive. cannot happen");
return self}, function($ctx1) {$ctx1.fill(self,"monster:moveTo:inContext:",{aMonster:aMonster,aCell:aCell,gameContext:gameContext},smalltalk.CWInactive)})},
messageSends: ["error:"]}),
smalltalk.CWInactive);

smalltalk.addMethod(
smalltalk.method({
selector: "readyToPick:",
fn: function (aMonster){
var self=this;
function $CWToPick(){return smalltalk.CWToPick||(typeof CWToPick=="undefined"?nil:CWToPick)}
return smalltalk.withContext(function($ctx1) { 
_st(aMonster)._changeState_($CWToPick());
return self}, function($ctx1) {$ctx1.fill(self,"readyToPick:",{aMonster:aMonster},smalltalk.CWInactive)})},
messageSends: ["changeState:"]}),
smalltalk.CWInactive);

smalltalk.addMethod(
smalltalk.method({
selector: "select:inContext:",
fn: function (aMonster,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(aMonster)._root();
_st($1)._removeSelection();
_st($1)._showActiveMonsters();
$2=_st($1)._updateGOTs();
_st(gameContext)._currentMonster_(aMonster);
return self}, function($ctx1) {$ctx1.fill(self,"select:inContext:",{aMonster:aMonster,gameContext:gameContext},smalltalk.CWInactive)})},
messageSends: ["removeSelection", "root", "showActiveMonsters", "updateGOTs", "currentMonster:"]}),
smalltalk.CWInactive);

smalltalk.addMethod(
smalltalk.method({
selector: "showActiveMonster:",
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"showActiveMonster:",{aMonster:aMonster},smalltalk.CWInactive)})},
messageSends: []}),
smalltalk.CWInactive);



smalltalk.addClass('CWToPick', smalltalk.CWMonsterState, [], 'Easnoth-States');
smalltalk.addMethod(
smalltalk.method({
selector: "changeStateAfterAttacking:",
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("seemingly the monster has attacked whereas the game is in a picking phase. cannot happen");
return self}, function($ctx1) {$ctx1.fill(self,"changeStateAfterAttacking:",{aMonster:aMonster},smalltalk.CWToPick)})},
messageSends: ["error:"]}),
smalltalk.CWToPick);

smalltalk.addMethod(
smalltalk.method({
selector: "changeStateAfterMoving:",
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("seemingly the monster has moved whereas the game is in a picking phase. cannot happen");
return self}, function($ctx1) {$ctx1.fill(self,"changeStateAfterMoving:",{aMonster:aMonster},smalltalk.CWToPick)})},
messageSends: ["error:"]}),
smalltalk.CWToPick);

smalltalk.addMethod(
smalltalk.method({
selector: "checkForNextTurn:",
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("seemingly the game is checking if the player has finished to play whereas the game is in a picking phase. cannot happen");
return self}, function($ctx1) {$ctx1.fill(self,"checkForNextTurn:",{aMonster:aMonster},smalltalk.CWToPick)})},
messageSends: ["error:"]}),
smalltalk.CWToPick);

smalltalk.addMethod(
smalltalk.method({
selector: "monster:attackTo:inContext:",
fn: function (aMonster,aCell,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("seemingly the monster is trying to attack whereas the game is in a picking phase. cannot happen");
return self}, function($ctx1) {$ctx1.fill(self,"monster:attackTo:inContext:",{aMonster:aMonster,aCell:aCell,gameContext:gameContext},smalltalk.CWToPick)})},
messageSends: ["error:"]}),
smalltalk.CWToPick);

smalltalk.addMethod(
smalltalk.method({
selector: "monster:moveTo:inContext:",
fn: function (aMonster,aCell,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("seemingly the monster is trying to move whereas the game is in a picking phase. cannot happen");
return self}, function($ctx1) {$ctx1.fill(self,"monster:moveTo:inContext:",{aMonster:aMonster,aCell:aCell,gameContext:gameContext},smalltalk.CWToPick)})},
messageSends: ["error:"]}),
smalltalk.CWToPick);

smalltalk.addMethod(
smalltalk.method({
selector: "select:inContext:",
fn: function (aMonster,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(aMonster)._root())._removeSelection();
_st(_st(aMonster)._root())._desactivateMonsters();
_st(aMonster)._activate();
_st(aMonster)._select_(gameContext);
return self}, function($ctx1) {$ctx1.fill(self,"select:inContext:",{aMonster:aMonster,gameContext:gameContext},smalltalk.CWToPick)})},
messageSends: ["removeSelection", "root", "desactivateMonsters", "activate", "select:"]}),
smalltalk.CWToPick);



