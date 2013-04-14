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

smalltalk.addMethod(
smalltalk.method({
selector: "initializeStateFor:",
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsbility();
return self}, function($ctx1) {$ctx1.fill(self,"initializeStateFor:",{aCell:aCell},smalltalk.CWState.klass)})},
messageSends: ["subclassResponsbility"]}),
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
selector: "mouseClick:context:",
fn: function (aCell,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(aCell)._root();
_st($1)._removeSelection();
$2=_st($1)._showActiveMonsters();
return self}, function($ctx1) {$ctx1.fill(self,"mouseClick:context:",{aCell:aCell,gameContext:gameContext},smalltalk.CWFree)})},
messageSends: ["removeSelection", "root", "showActiveMonsters"]}),
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
_st(self)._error_("should not happen");
return self}, function($ctx1) {$ctx1.fill(self,"addSelector:",{aCell:aCell},smalltalk.CWFreeSelected)})},
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
_st(self)._error_("should not happen");
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
_st(self)._error_("should not happen");
return self}, function($ctx1) {$ctx1.fill(self,"addSelector:",{aCell:aCell},smalltalk.CWHasMonsterSelected)})},
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
_st(self)._error_("should not happen");
return self}, function($ctx1) {$ctx1.fill(self,"showActiveMonster:",{aCell:aCell},smalltalk.CWHasMonsterSelected)})},
messageSends: ["error:"]}),
smalltalk.CWHasMonsterSelected);



smalltalk.addClass('CWMonsterState', smalltalk.CWState, [], 'Easnoth-States');
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
selector: "monster:animationMoveFrom:to:callback:",
fn: function (aMonster,cell1,cellLast,callback){
var self=this;
var path,moveNumber;
function $CWHasMonster(){return smalltalk.CWHasMonster||(typeof CWHasMonster=="undefined"?nil:CWHasMonster)}
function $CWFree(){return smalltalk.CWFree||(typeof CWFree=="undefined"?nil:CWFree)}
return smalltalk.withContext(function($ctx1) { 
path=_st(self)._pathFrom_to_(cell1,cellLast);
moveNumber=_st(_st(path)._size()).__minus((1));
_st(_st(cell1)._root())._removeSelection();
_st((1))._to_do_(moveNumber,(function(j){
return smalltalk.withContext(function($ctx2) {
return _st((function(){
return smalltalk.withContext(function($ctx3) {
_st(_st(path)._at_(_st(_st(path)._size()).__minus(j)))._monster_(aMonster);
_st(_st(path)._at_(_st(_st(path)._size()).__minus(j)))._changeState_($CWHasMonster());
_st(_st(path)._at_(_st(_st(_st(path)._size()).__plus((1))).__minus(j)))._removeMonster();
_st(_st(path)._at_(_st(_st(_st(path)._size()).__plus((1))).__minus(j)))._changeState_($CWFree());
return _st(_st(cell1)._root())._updateMonstersAndGOTs();
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}))._valueWithTimeout_(_st((300)).__star(j));
}, function($ctx2) {$ctx2.fillBlock({j:j},$ctx1)})}));
_st(aMonster)._currentMove_(_st(_st(aMonster)._currentMove()).__minus(moveNumber));
_st(callback)._valueWithTimeout_(_st((300)).__star(moveNumber));
return self}, function($ctx1) {$ctx1.fill(self,"monster:animationMoveFrom:to:callback:",{aMonster:aMonster,cell1:cell1,cellLast:cellLast,callback:callback,path:path,moveNumber:moveNumber},smalltalk.CWMonsterState)})},
messageSends: ["pathFrom:to:", "-", "size", "removeSelection", "root", "to:do:", "valueWithTimeout:", "*", "monster:", "at:", "changeState:", "removeMonster", "+", "updateMonstersAndGOTs", "currentMove:", "currentMove"]}),
smalltalk.CWMonsterState);

smalltalk.addMethod(
smalltalk.method({
selector: "monster:attackNeighbour:inContext:",
fn: function (aMonster,anotherMonster,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._changeStateAfterAttacking_(aMonster);
_st(_st(aMonster)._root())._removeSelection();
_st(aMonster)._rollDicesCallBack_((function(diceRes){
return smalltalk.withContext(function($ctx2) {
_st(anotherMonster)._removeHP_(_st(diceRes)._kills());
_st(aMonster)._select_(gameContext);
_st(aMonster)._checkForNextTurn();
return _st(aMonster)._updateMonstersAndGOTs();
}, function($ctx2) {$ctx2.fillBlock({diceRes:diceRes},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"monster:attackNeighbour:inContext:",{aMonster:aMonster,anotherMonster:anotherMonster,gameContext:gameContext},smalltalk.CWMonsterState)})},
messageSends: ["changeStateAfterAttacking:", "removeSelection", "root", "rollDicesCallBack:", "removeHP:", "kills", "select:", "checkForNextTurn", "updateMonstersAndGOTs"]}),
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
_st(self)._monster_moveTo_inContext_callback_(aMonster,aCell,gameContext,(function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"monster:moveTo:inContext:",{aMonster:aMonster,aCell:aCell,gameContext:gameContext},smalltalk.CWMonsterState)})},
messageSends: ["monster:moveTo:inContext:callback:"]}),
smalltalk.CWMonsterState);

smalltalk.addMethod(
smalltalk.method({
selector: "monster:moveTo:inContext:callback:",
fn: function (aMonster,aCell,gameContext,callback){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._monster_animationMoveFrom_to_callback_(aMonster,_st(gameContext)._currentCell(),aCell,(function(){
return smalltalk.withContext(function($ctx2) {
_st(self)._changeStateAfterMoving_(aMonster);
_st(aMonster)._select_(gameContext);
_st(_st(aCell)._root())._updateMonstersAndGOTs();
_st(aMonster)._checkForNextTurn();
return _st(callback)._value();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"monster:moveTo:inContext:callback:",{aMonster:aMonster,aCell:aCell,gameContext:gameContext,callback:callback},smalltalk.CWMonsterState)})},
messageSends: ["monster:animationMoveFrom:to:callback:", "currentCell", "changeStateAfterMoving:", "select:", "updateMonstersAndGOTs", "root", "checkForNextTurn", "value"]}),
smalltalk.CWMonsterState);

smalltalk.addMethod(
smalltalk.method({
selector: "pathFrom:to:",
fn: function (cell1,cellLast){
var self=this;
var path;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1;
path=_st($Array())._with_(cellLast);
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(cell1).__eq(_st(path)._last());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileFalse_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(path)._add_(_st(_st(path)._last())._prevCell());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$1=path;
return $1;
}, function($ctx1) {$ctx1.fill(self,"pathFrom:to:",{cell1:cell1,cellLast:cellLast,path:path},smalltalk.CWMonsterState)})},
messageSends: ["with:", "whileFalse:", "add:", "prevCell", "last", "="]}),
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


smalltalk.addMethod(
smalltalk.method({
selector: "initializeStateFor:",
fn: function (aMonster){
var self=this;
function $CWInactive(){return smalltalk.CWInactive||(typeof CWInactive=="undefined"?nil:CWInactive)}
return smalltalk.withContext(function($ctx1) { 
_st(aMonster)._changeState_($CWInactive());
return self}, function($ctx1) {$ctx1.fill(self,"initializeStateFor:",{aMonster:aMonster},smalltalk.CWMonsterState.klass)})},
messageSends: ["changeState:"]}),
smalltalk.CWMonsterState.klass);


smalltalk.addClass('CWActive', smalltalk.CWMonsterState, [], 'Easnoth-States');
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
function $CWFreeSelected(){return smalltalk.CWFreeSelected||(typeof CWFreeSelected=="undefined"?nil:CWFreeSelected)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(aCell)._neighbours())._includes_(_st(aMonster)._parent());
if(smalltalk.assert($1)){
_st(self)._monster_attackNeighbour_inContext_(aMonster,_st(aCell)._monster(),gameContext);
} else {
toMoveCell=_st(_st(_st(_st(aCell)._neighbours())._select_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(each)._state()).__eq(_st($CWFreeSelected())._default());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})})))._asArray())._atRandom();
toMoveCell;
_st(self)._monster_moveTo_inContext_callback_(aMonster,toMoveCell,gameContext,(function(){
return smalltalk.withContext(function($ctx2) {
_st(aMonster)._attackTo_inContext_(aCell,gameContext);
return _st(aMonster)._updateMonstersAndGOTs();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
};
return self}, function($ctx1) {$ctx1.fill(self,"monster:attackTo:inContext:",{aMonster:aMonster,aCell:aCell,gameContext:gameContext,toMoveCell:toMoveCell},smalltalk.CWActive)})},
messageSends: ["ifFalse:ifTrue:", "atRandom", "asArray", "select:", "=", "default", "state", "neighbours", "monster:moveTo:inContext:callback:", "attackTo:inContext:", "updateMonstersAndGOTs", "monster:attackNeighbour:inContext:", "monster", "includes:", "parent"]}),
smalltalk.CWActive);

smalltalk.addMethod(
smalltalk.method({
selector: "select:inContext:",
fn: function (aMonster,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(aMonster)._parent())._selectableNeighboursMoveCycle_attackCycle_fromSide_(_st(aMonster)._currentMove(),_st(aMonster)._range(),_st(aMonster)._side());
_st(gameContext)._currentMonster_(aMonster);
return self}, function($ctx1) {$ctx1.fill(self,"select:inContext:",{aMonster:aMonster,gameContext:gameContext},smalltalk.CWActive)})},
messageSends: ["selectableNeighboursMoveCycle:attackCycle:fromSide:", "currentMove", "range", "side", "parent", "currentMonster:"]}),
smalltalk.CWActive);



smalltalk.addClass('CWHasAttacked', smalltalk.CWMonsterState, [], 'Easnoth-States');
smalltalk.addMethod(
smalltalk.method({
selector: "changeStateAfterAttacking:",
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("should not happen");
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
selector: "select:inContext:",
fn: function (aMonster,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(aMonster)._parent())._movableNeighboursCycle_(_st(aMonster)._currentMove());
_st(gameContext)._currentMonster_(aMonster);
return self}, function($ctx1) {$ctx1.fill(self,"select:inContext:",{aMonster:aMonster,gameContext:gameContext},smalltalk.CWHasAttacked)})},
messageSends: ["movableNeighboursCycle:", "currentMove", "parent", "currentMonster:"]}),
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
_st(self)._error_("should not happen");
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
_st(self)._monster_attackNeighbour_inContext_(aMonster,_st(aCell)._monster(),gameContext);
return self}, function($ctx1) {$ctx1.fill(self,"monster:attackTo:inContext:",{aMonster:aMonster,aCell:aCell,gameContext:gameContext},smalltalk.CWHasMoved)})},
messageSends: ["monster:attackNeighbour:inContext:", "monster"]}),
smalltalk.CWHasMoved);

smalltalk.addMethod(
smalltalk.method({
selector: "monster:moveTo:inContext:",
fn: function (aMonster,aCell,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("should not happen");
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
_st(gameContext)._currentMonster_(aMonster);
return self}, function($ctx1) {$ctx1.fill(self,"select:inContext:",{aMonster:aMonster,gameContext:gameContext},smalltalk.CWHasMoved)})},
messageSends: ["attackableNeighboursCycle:fromSide:", "range", "side", "parent", "currentMonster:"]}),
smalltalk.CWHasMoved);



smalltalk.addClass('CWInactive', smalltalk.CWMonsterState, [], 'Easnoth-States');
smalltalk.addMethod(
smalltalk.method({
selector: "changeStateAfterAttacking:",
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("should not happen");
return self}, function($ctx1) {$ctx1.fill(self,"changeStateAfterAttacking:",{aMonster:aMonster},smalltalk.CWInactive)})},
messageSends: ["error:"]}),
smalltalk.CWInactive);

smalltalk.addMethod(
smalltalk.method({
selector: "changeStateAfterMoving:",
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("shouldNotHappen");
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
selector: "monster:moveTo:inContext:",
fn: function (aMonster,aCell,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("should not happen");
return self}, function($ctx1) {$ctx1.fill(self,"monster:moveTo:inContext:",{aMonster:aMonster,aCell:aCell,gameContext:gameContext},smalltalk.CWInactive)})},
messageSends: ["error:"]}),
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
$2=_st($1)._showActiveMonsters();
_st(gameContext)._currentMonster_(aMonster);
return self}, function($ctx1) {$ctx1.fill(self,"select:inContext:",{aMonster:aMonster,gameContext:gameContext},smalltalk.CWInactive)})},
messageSends: ["removeSelection", "root", "showActiveMonsters", "currentMonster:"]}),
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
_st(self)._error_("should not happen");
return self}, function($ctx1) {$ctx1.fill(self,"changeStateAfterAttacking:",{aMonster:aMonster},smalltalk.CWToPick)})},
messageSends: ["error:"]}),
smalltalk.CWToPick);

smalltalk.addMethod(
smalltalk.method({
selector: "changeStateAfterMoving:",
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("should not happen");
return self}, function($ctx1) {$ctx1.fill(self,"changeStateAfterMoving:",{aMonster:aMonster},smalltalk.CWToPick)})},
messageSends: ["error:"]}),
smalltalk.CWToPick);

smalltalk.addMethod(
smalltalk.method({
selector: "checkForNextTurn:",
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("should not happen");
return self}, function($ctx1) {$ctx1.fill(self,"checkForNextTurn:",{aMonster:aMonster},smalltalk.CWToPick)})},
messageSends: ["error:"]}),
smalltalk.CWToPick);

smalltalk.addMethod(
smalltalk.method({
selector: "monster:moveTo:inContext:",
fn: function (aMonster,aCell,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("should not happen");
return self}, function($ctx1) {$ctx1.fill(self,"monster:moveTo:inContext:",{aMonster:aMonster,aCell:aCell,gameContext:gameContext},smalltalk.CWToPick)})},
messageSends: ["error:"]}),
smalltalk.CWToPick);

smalltalk.addMethod(
smalltalk.method({
selector: "select:inContext:",
fn: function (aMonster,gameContext){
var self=this;
function $CWInactive(){return smalltalk.CWInactive||(typeof CWInactive=="undefined"?nil:CWInactive)}
function $CWActive(){return smalltalk.CWActive||(typeof CWActive=="undefined"?nil:CWActive)}
return smalltalk.withContext(function($ctx1) { 
_st(_st(aMonster)._root())._removeSelection();
_st(_st(_st(aMonster)._root())._monstersFromSide_(_st(aMonster)._side()))._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._changeState_($CWInactive());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
_st(aMonster)._changeState_($CWActive());
_st(aMonster)._currentMove_(_st(aMonster)._move());
_st(aMonster)._select_(gameContext);
return self}, function($ctx1) {$ctx1.fill(self,"select:inContext:",{aMonster:aMonster,gameContext:gameContext},smalltalk.CWToPick)})},
messageSends: ["removeSelection", "root", "do:", "changeState:", "monstersFromSide:", "side", "currentMove:", "move", "select:"]}),
smalltalk.CWToPick);



