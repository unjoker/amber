smalltalk.addPackage('Easnoth-Fight-States');
smalltalk.addClass('State', smalltalk.Object, ['object'], 'Easnoth-Fight-States');
smalltalk.addMethod(
smalltalk.method({
selector: "newState:for:",
fn: function (aState,anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aState)._object_(anObject);
_st(anObject)._state_(aState);
return self}, function($ctx1) {$ctx1.fill(self,"newState:for:",{aState:aState,anObject:anObject},smalltalk.State)})},
messageSends: ["object:", "state:"]}),
smalltalk.State);

smalltalk.addMethod(
smalltalk.method({
selector: "object",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@object"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"object",{},smalltalk.State)})},
messageSends: []}),
smalltalk.State);

smalltalk.addMethod(
smalltalk.method({
selector: "object:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@object"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"object:",{anObject:anObject},smalltalk.State)})},
messageSends: []}),
smalltalk.State);

smalltalk.addMethod(
smalltalk.method({
selector: "setUp",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"setUp",{},smalltalk.State)})},
messageSends: []}),
smalltalk.State);

smalltalk.addMethod(
smalltalk.method({
selector: "tearDown",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"tearDown",{},smalltalk.State)})},
messageSends: []}),
smalltalk.State);


smalltalk.addMethod(
smalltalk.method({
selector: "newFor:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st(self)._new();
_st($2)._object_(anObject);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"newFor:",{anObject:anObject},smalltalk.State.klass)})},
messageSends: ["object:", "new", "yourself"]}),
smalltalk.State.klass);


smalltalk.addClass('CellState', smalltalk.State, [], 'Easnoth-Fight-States');
smalltalk.addMethod(
smalltalk.method({
selector: "addSelector",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"addSelector",{},smalltalk.CellState)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.CellState);

smalltalk.addMethod(
smalltalk.method({
selector: "canAttack:",
fn: function (aSidePlayed){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"canAttack:",{aSidePlayed:aSidePlayed},smalltalk.CellState)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.CellState);

smalltalk.addMethod(
smalltalk.method({
selector: "canMoveTo",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"canMoveTo",{},smalltalk.CellState)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.CellState);

smalltalk.addMethod(
smalltalk.method({
selector: "mouseClick",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"mouseClick",{},smalltalk.CellState)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.CellState);

smalltalk.addMethod(
smalltalk.method({
selector: "removeSelector",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._object())._removeGameOverTile();
return self}, function($ctx1) {$ctx1.fill(self,"removeSelector",{},smalltalk.CellState)})},
messageSends: ["removeGameOverTile", "object"]}),
smalltalk.CellState);


smalltalk.addMethod(
smalltalk.method({
selector: "initializeStateFor:",
fn: function (aCell){
var self=this;
function $Free(){return smalltalk.Free||(typeof Free=="undefined"?nil:Free)}
function $HasMonster(){return smalltalk.HasMonster||(typeof HasMonster=="undefined"?nil:HasMonster)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aCell)._free();
if(smalltalk.assert($1)){
_st(aCell)._state_(_st($Free())._newFor_(aCell));
} else {
_st(aCell)._state_(_st($HasMonster())._newFor_(aCell));
};
return self}, function($ctx1) {$ctx1.fill(self,"initializeStateFor:",{aCell:aCell},smalltalk.CellState.klass)})},
messageSends: ["ifTrue:ifFalse:", "state:", "newFor:", "free"]}),
smalltalk.CellState.klass);


smalltalk.addClass('Free', smalltalk.CellState, [], 'Easnoth-Fight-States');
smalltalk.addMethod(
smalltalk.method({
selector: "addSelector",
fn: function (){
var self=this;
function $FreeSelected(){return smalltalk.FreeSelected||(typeof FreeSelected=="undefined"?nil:FreeSelected)}
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._object())._addSelectorColored_("green");
_st(_st(self)._object())._changeState_(_st($FreeSelected())._new());
return self}, function($ctx1) {$ctx1.fill(self,"addSelector",{},smalltalk.Free)})},
messageSends: ["addSelectorColored:", "object", "changeState:", "new"]}),
smalltalk.Free);

smalltalk.addMethod(
smalltalk.method({
selector: "canAttack:",
fn: function (aSidePlayed){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"canAttack:",{aSidePlayed:aSidePlayed},smalltalk.Free)})},
messageSends: []}),
smalltalk.Free);

smalltalk.addMethod(
smalltalk.method({
selector: "canMoveTo",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(_st(self)._object())._tile())._isWall())._not();
return $1;
}, function($ctx1) {$ctx1.fill(self,"canMoveTo",{},smalltalk.Free)})},
messageSends: ["not", "isWall", "tile", "object"]}),
smalltalk.Free);

smalltalk.addMethod(
smalltalk.method({
selector: "mouseClick:",
fn: function (actionCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(_st(self)._object())._map())._showActiveMonsters();
return self}, function($ctx1) {$ctx1.fill(self,"mouseClick:",{actionCell:actionCell},smalltalk.Free)})},
messageSends: ["showActiveMonsters", "map", "object"]}),
smalltalk.Free);

smalltalk.addMethod(
smalltalk.method({
selector: "removeSelector",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.CellState.fn.prototype._removeSelector.apply(_st(self), []);
return self}, function($ctx1) {$ctx1.fill(self,"removeSelector",{},smalltalk.Free)})},
messageSends: ["removeSelector"]}),
smalltalk.Free);



smalltalk.addClass('FreeSelected', smalltalk.CellState, ['prevCell'], 'Easnoth-Fight-States');
smalltalk.addMethod(
smalltalk.method({
selector: "addSelector",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("shouldnt be possible to add selector on this cell");
return self}, function($ctx1) {$ctx1.fill(self,"addSelector",{},smalltalk.FreeSelected)})},
messageSends: ["error:"]}),
smalltalk.FreeSelected);

smalltalk.addMethod(
smalltalk.method({
selector: "canAttack:",
fn: function (aSidePlayed){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"canAttack:",{aSidePlayed:aSidePlayed},smalltalk.FreeSelected)})},
messageSends: []}),
smalltalk.FreeSelected);

smalltalk.addMethod(
smalltalk.method({
selector: "canMoveTo",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"canMoveTo",{},smalltalk.FreeSelected)})},
messageSends: []}),
smalltalk.FreeSelected);

smalltalk.addMethod(
smalltalk.method({
selector: "mouseClick:",
fn: function (actionCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(actionCell)._monster())._moveTo_(_st(self)._object());
return self}, function($ctx1) {$ctx1.fill(self,"mouseClick:",{actionCell:actionCell},smalltalk.FreeSelected)})},
messageSends: ["moveTo:", "object", "monster"]}),
smalltalk.FreeSelected);

smalltalk.addMethod(
smalltalk.method({
selector: "prevCell",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@prevCell"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"prevCell",{},smalltalk.FreeSelected)})},
messageSends: []}),
smalltalk.FreeSelected);

smalltalk.addMethod(
smalltalk.method({
selector: "prevCell:",
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@prevCell"]=aCell;
return self}, function($ctx1) {$ctx1.fill(self,"prevCell:",{aCell:aCell},smalltalk.FreeSelected)})},
messageSends: []}),
smalltalk.FreeSelected);

smalltalk.addMethod(
smalltalk.method({
selector: "removeSelector",
fn: function (){
var self=this;
function $Free(){return smalltalk.Free||(typeof Free=="undefined"?nil:Free)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.CellState.fn.prototype._removeSelector.apply(_st(self), []);
_st(_st(self)._object())._changeState_(_st($Free())._new());
return self}, function($ctx1) {$ctx1.fill(self,"removeSelector",{},smalltalk.FreeSelected)})},
messageSends: ["removeSelector", "changeState:", "new", "object"]}),
smalltalk.FreeSelected);


smalltalk.addMethod(
smalltalk.method({
selector: "newPreviousCell:",
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st(self)._new();
_st($2)._prevCell_(aCell);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"newPreviousCell:",{aCell:aCell},smalltalk.FreeSelected.klass)})},
messageSends: ["prevCell:", "new", "yourself"]}),
smalltalk.FreeSelected.klass);


smalltalk.addClass('HasMonster', smalltalk.CellState, [], 'Easnoth-Fight-States');
smalltalk.addMethod(
smalltalk.method({
selector: "addSelector",
fn: function (){
var self=this;
var sidePlaying;
function $HasMonsterSelected(){return smalltalk.HasMonsterSelected||(typeof HasMonsterSelected=="undefined"?nil:HasMonsterSelected)}
return smalltalk.withContext(function($ctx1) { 
var $1;
sidePlaying=_st(_st(_st(_st(self)._object())._map())._actionMenu())._sidePlaying();
$1=_st(_st(_st(_st(self)._object())._monster())._side()).__eq(sidePlaying);
if(smalltalk.assert($1)){
_st(self)._error_("shouldnt be able to select because friendly monster");
} else {
_st(_st(self)._object())._addSelectorColored_("red");
_st(_st(self)._object())._changeState_(_st($HasMonsterSelected())._new());
};
return self}, function($ctx1) {$ctx1.fill(self,"addSelector",{sidePlaying:sidePlaying},smalltalk.HasMonster)})},
messageSends: ["sidePlaying", "actionMenu", "map", "object", "ifTrue:ifFalse:", "error:", "addSelectorColored:", "changeState:", "new", "=", "side", "monster"]}),
smalltalk.HasMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "canAttack:",
fn: function (aSidePlayed){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(_st(_st(_st(self)._object())._map())._actionMenu())._sidePlaying()).__eq(_st(_st(_st(self)._object())._monster())._side()))._not();
return $1;
}, function($ctx1) {$ctx1.fill(self,"canAttack:",{aSidePlayed:aSidePlayed},smalltalk.HasMonster)})},
messageSends: ["not", "=", "side", "monster", "object", "sidePlaying", "actionMenu", "map"]}),
smalltalk.HasMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "canMoveTo",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"canMoveTo",{},smalltalk.HasMonster)})},
messageSends: []}),
smalltalk.HasMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "mouseClick:",
fn: function (actionCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(_st(self)._object())._monster())._select();
return self}, function($ctx1) {$ctx1.fill(self,"mouseClick:",{actionCell:actionCell},smalltalk.HasMonster)})},
messageSends: ["select", "monster", "object"]}),
smalltalk.HasMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "removeSelector",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.CellState.fn.prototype._removeSelector.apply(_st(self), []);
return self}, function($ctx1) {$ctx1.fill(self,"removeSelector",{},smalltalk.HasMonster)})},
messageSends: ["removeSelector"]}),
smalltalk.HasMonster);



smalltalk.addClass('HasMonsterSelected', smalltalk.CellState, [], 'Easnoth-Fight-States');
smalltalk.addMethod(
smalltalk.method({
selector: "addSelector",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("shouldnt be possible to add selector on this cell");
return self}, function($ctx1) {$ctx1.fill(self,"addSelector",{},smalltalk.HasMonsterSelected)})},
messageSends: ["error:"]}),
smalltalk.HasMonsterSelected);

smalltalk.addMethod(
smalltalk.method({
selector: "canAttack:",
fn: function (aSidePlayed){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"canAttack:",{aSidePlayed:aSidePlayed},smalltalk.HasMonsterSelected)})},
messageSends: []}),
smalltalk.HasMonsterSelected);

smalltalk.addMethod(
smalltalk.method({
selector: "canMoveTo",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"canMoveTo",{},smalltalk.HasMonsterSelected)})},
messageSends: []}),
smalltalk.HasMonsterSelected);

smalltalk.addMethod(
smalltalk.method({
selector: "mouseClick:",
fn: function (actionCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(actionCell)._monster())._attackTo_(_st(self)._object());
return self}, function($ctx1) {$ctx1.fill(self,"mouseClick:",{actionCell:actionCell},smalltalk.HasMonsterSelected)})},
messageSends: ["attackTo:", "object", "monster"]}),
smalltalk.HasMonsterSelected);

smalltalk.addMethod(
smalltalk.method({
selector: "removeSelector",
fn: function (){
var self=this;
function $HasMonster(){return smalltalk.HasMonster||(typeof HasMonster=="undefined"?nil:HasMonster)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.CellState.fn.prototype._removeSelector.apply(_st(self), []);
_st(_st(self)._object())._changeState_(_st($HasMonster())._new());
return self}, function($ctx1) {$ctx1.fill(self,"removeSelector",{},smalltalk.HasMonsterSelected)})},
messageSends: ["removeSelector", "changeState:", "new", "object"]}),
smalltalk.HasMonsterSelected);



smalltalk.addClass('MonsterState', smalltalk.State, [], 'Easnoth-Fight-States');
smalltalk.addMethod(
smalltalk.method({
selector: "animationMoveFrom:to:callback:",
fn: function (actionCell,aCell,callback){
var self=this;
var monster,path,movin,i;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
path=_st($Array())._new();
monster=_st(actionCell)._monster();
i=(0);
_st(path)._add_(aCell);
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(actionCell).__eq(_st(path)._last());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileFalse_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(path)._add_(_st(_st(path)._last())._prevCell());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(_st(actionCell)._map())._removeSelection();
_st((1))._to_do_(_st(_st(path)._size()).__minus((1)),(function(k){
return smalltalk.withContext(function($ctx2) {
return _st(_st(path)._at_(k))._addSelector();
}, function($ctx2) {$ctx2.fillBlock({k:k},$ctx1)})}));
_st(_st(actionCell)._map())._update();
movin=(function(){
return smalltalk.withContext(function($ctx2) {
_st(_st(path)._at_(_st(_st(_st(path)._size()).__minus(i)).__minus((1))))._monster_(monster);
_st(_st(path)._at_(_st(_st(path)._size()).__minus(i)))._removeMonster();
i=_st(i).__plus((1));
i;
return _st(_st(actionCell)._map())._update();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})});
_st((1))._to_do_(_st(_st(path)._size()).__minus((1)),(function(j){
return smalltalk.withContext(function($ctx2) {
return _st(movin)._valueWithTimeout_(_st((300)).__star(j));
}, function($ctx2) {$ctx2.fillBlock({j:j},$ctx1)})}));
_st(callback)._valueWithTimeout_(_st((300)).__star(_st(_st(path)._size()).__minus((1))));
return self}, function($ctx1) {$ctx1.fill(self,"animationMoveFrom:to:callback:",{actionCell:actionCell,aCell:aCell,callback:callback,monster:monster,path:path,movin:movin,i:i},smalltalk.MonsterState)})},
messageSends: ["new", "monster", "add:", "whileFalse:", "prevCell", "last", "=", "removeSelection", "map", "to:do:", "-", "size", "addSelector", "at:", "update", "monster:", "removeMonster", "+", "valueWithTimeout:", "*"]}),
smalltalk.MonsterState);

smalltalk.addMethod(
smalltalk.method({
selector: "attackTo:",
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"attackTo:",{aCell:aCell},smalltalk.MonsterState)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.MonsterState);

smalltalk.addMethod(
smalltalk.method({
selector: "attackTo:toState:",
fn: function (aCell,aState){
var self=this;
var actionCell,monster,diceRes;
return smalltalk.withContext(function($ctx1) { 
monster=_st(self)._object();
actionCell=_st(monster)._cell();
_st(monster)._changeState_(aState);
_st(_st(actionCell)._map())._removeSelection();
diceRes=_st(monster)._rollDicesCallBack_((function(){
return smalltalk.withContext(function($ctx2) {
_st(_st(aCell)._monster())._removeHP_(_st(diceRes)._x());
_st(_st(actionCell)._map())._removeSelection();
_st(monster)._select();
_st(aState)._checkForNextTurn();
return _st(_st(actionCell)._map())._update();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"attackTo:toState:",{aCell:aCell,aState:aState,actionCell:actionCell,monster:monster,diceRes:diceRes},smalltalk.MonsterState)})},
messageSends: ["object", "cell", "changeState:", "removeSelection", "map", "rollDicesCallBack:", "removeHP:", "x", "monster", "select", "checkForNextTurn", "update"]}),
smalltalk.MonsterState);

smalltalk.addMethod(
smalltalk.method({
selector: "moveTo:",
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"moveTo:",{aCell:aCell},smalltalk.MonsterState)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.MonsterState);

smalltalk.addMethod(
smalltalk.method({
selector: "moveTo:toState:",
fn: function (aCell,aState){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._moveTo_toState_callback_(aCell,aState,(function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"moveTo:toState:",{aCell:aCell,aState:aState},smalltalk.MonsterState)})},
messageSends: ["moveTo:toState:callback:"]}),
smalltalk.MonsterState);

smalltalk.addMethod(
smalltalk.method({
selector: "moveTo:toState:callback:",
fn: function (aCell,aState,callback){
var self=this;
var actionCell,monster;
function $Free(){return smalltalk.Free||(typeof Free=="undefined"?nil:Free)}
function $HasMonster(){return smalltalk.HasMonster||(typeof HasMonster=="undefined"?nil:HasMonster)}
return smalltalk.withContext(function($ctx1) { 
monster=_st(self)._object();
actionCell=_st(monster)._cell();
_st(_st(_st(_st(self)._object())._cell())._map())._removeSelection();
_st(monster)._select();
_st(self)._animationMoveFrom_to_callback_(actionCell,aCell,(function(){
return smalltalk.withContext(function($ctx2) {
_st(actionCell)._changeState_(_st($Free())._new());
_st(monster)._changeState_(aState);
_st(aCell)._changeState_(_st($HasMonster())._new());
_st(_st(_st(_st(self)._object())._cell())._map())._removeSelection();
_st(monster)._select();
_st(_st(actionCell)._map())._update();
_st(aState)._checkForNextTurn();
return _st(callback)._value();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"moveTo:toState:callback:",{aCell:aCell,aState:aState,callback:callback,actionCell:actionCell,monster:monster},smalltalk.MonsterState)})},
messageSends: ["object", "cell", "removeSelection", "map", "select", "animationMoveFrom:to:callback:", "changeState:", "new", "update", "checkForNextTurn", "value"]}),
smalltalk.MonsterState);

smalltalk.addMethod(
smalltalk.method({
selector: "select",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"select",{},smalltalk.MonsterState)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.MonsterState);



smalltalk.addClass('Active', smalltalk.MonsterState, [], 'Easnoth-Fight-States');
smalltalk.addMethod(
smalltalk.method({
selector: "attackTo:",
fn: function (aCell){
var self=this;
function $FreeSelected(){return smalltalk.FreeSelected||(typeof FreeSelected=="undefined"?nil:FreeSelected)}
function $HasMoved(){return smalltalk.HasMoved||(typeof HasMoved=="undefined"?nil:HasMoved)}
function $HasAttacked(){return smalltalk.HasAttacked||(typeof HasAttacked=="undefined"?nil:HasAttacked)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(aCell)._neighbours())._includes_(_st(_st(self)._object())._cell());
if(smalltalk.assert($1)){
_st(self)._attackTo_toState_(aCell,_st($HasAttacked())._new());
} else {
_st(self)._moveTo_toState_callback_(_st(_st(_st(_st(aCell)._neighbours())._select_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(each)._state())._isKindOf_($FreeSelected());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})})))._asArray())._at_((1)),_st($HasMoved())._new(),(function(){
return smalltalk.withContext(function($ctx2) {
_st(_st(_st(self)._object())._state())._attackTo_(aCell);
return _st(_st(_st(_st(self)._object())._cell())._map())._update();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
};
return self}, function($ctx1) {$ctx1.fill(self,"attackTo:",{aCell:aCell},smalltalk.Active)})},
messageSends: ["ifFalse:ifTrue:", "moveTo:toState:callback:", "at:", "asArray", "select:", "isKindOf:", "state", "neighbours", "new", "attackTo:", "object", "update", "map", "cell", "attackTo:toState:", "includes:"]}),
smalltalk.Active);

smalltalk.addMethod(
smalltalk.method({
selector: "checkForNextTurn",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("should not happen");
return self}, function($ctx1) {$ctx1.fill(self,"checkForNextTurn",{},smalltalk.Active)})},
messageSends: ["error:"]}),
smalltalk.Active);

smalltalk.addMethod(
smalltalk.method({
selector: "moveTo:",
fn: function (aCell){
var self=this;
function $HasMoved(){return smalltalk.HasMoved||(typeof HasMoved=="undefined"?nil:HasMoved)}
return smalltalk.withContext(function($ctx1) { 
_st(self)._moveTo_toState_(aCell,_st($HasMoved())._new());
return self}, function($ctx1) {$ctx1.fill(self,"moveTo:",{aCell:aCell},smalltalk.Active)})},
messageSends: ["moveTo:toState:", "new"]}),
smalltalk.Active);

smalltalk.addMethod(
smalltalk.method({
selector: "select",
fn: function (){
var self=this;
var monster,cell,map;
return smalltalk.withContext(function($ctx1) { 
monster=_st(self)._object();
cell=_st(monster)._cell();
map=_st(cell)._map();
_st(cell)._selectableNeighboursSide_(_st(monster)._side());
_st(_st(map)._actionMenu())._actionCell_(cell);
return self}, function($ctx1) {$ctx1.fill(self,"select",{monster:monster,cell:cell,map:map},smalltalk.Active)})},
messageSends: ["object", "cell", "map", "selectableNeighboursSide:", "side", "actionCell:", "actionMenu"]}),
smalltalk.Active);



smalltalk.addClass('HasAttacked', smalltalk.MonsterState, [], 'Easnoth-Fight-States');
smalltalk.addMethod(
smalltalk.method({
selector: "attackTo:",
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("has already attacked");
return self}, function($ctx1) {$ctx1.fill(self,"attackTo:",{aCell:aCell},smalltalk.HasAttacked)})},
messageSends: ["error:"]}),
smalltalk.HasAttacked);

smalltalk.addMethod(
smalltalk.method({
selector: "checkForNextTurn",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(_st(_st(self)._object())._cell())._movableNeighbours())._ifEmpty_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(_st(_st(_st(_st(self)._object())._cell())._map())._actionMenu())._turnWatcher())._nextTurn();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"checkForNextTurn",{},smalltalk.HasAttacked)})},
messageSends: ["ifEmpty:", "nextTurn", "turnWatcher", "actionMenu", "map", "cell", "object", "movableNeighbours"]}),
smalltalk.HasAttacked);

smalltalk.addMethod(
smalltalk.method({
selector: "moveTo:",
fn: function (aCell){
var self=this;
function $Inactive(){return smalltalk.Inactive||(typeof Inactive=="undefined"?nil:Inactive)}
return smalltalk.withContext(function($ctx1) { 
_st(self)._moveTo_toState_(aCell,_st($Inactive())._new());
return self}, function($ctx1) {$ctx1.fill(self,"moveTo:",{aCell:aCell},smalltalk.HasAttacked)})},
messageSends: ["moveTo:toState:", "new"]}),
smalltalk.HasAttacked);

smalltalk.addMethod(
smalltalk.method({
selector: "select",
fn: function (){
var self=this;
var monster,cell,map;
return smalltalk.withContext(function($ctx1) { 
monster=_st(self)._object();
cell=_st(monster)._cell();
map=_st(cell)._map();
_st(_st(cell)._movableNeighbours())._ifEmpty_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(map)._showActiveMonsters();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(_st(map)._actionMenu())._actionCell_(cell);
return self}, function($ctx1) {$ctx1.fill(self,"select",{monster:monster,cell:cell,map:map},smalltalk.HasAttacked)})},
messageSends: ["object", "cell", "map", "ifEmpty:", "showActiveMonsters", "movableNeighbours", "actionCell:", "actionMenu"]}),
smalltalk.HasAttacked);



smalltalk.addClass('HasMoved', smalltalk.MonsterState, [], 'Easnoth-Fight-States');
smalltalk.addMethod(
smalltalk.method({
selector: "attackTo:",
fn: function (aCell){
var self=this;
function $Inactive(){return smalltalk.Inactive||(typeof Inactive=="undefined"?nil:Inactive)}
return smalltalk.withContext(function($ctx1) { 
_st(self)._attackTo_toState_(aCell,_st($Inactive())._new());
return self}, function($ctx1) {$ctx1.fill(self,"attackTo:",{aCell:aCell},smalltalk.HasMoved)})},
messageSends: ["attackTo:toState:", "new"]}),
smalltalk.HasMoved);

smalltalk.addMethod(
smalltalk.method({
selector: "checkForNextTurn",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(_st(_st(self)._object())._cell())._attackableNeighboursSide_(_st(_st(self)._object())._side()))._ifEmpty_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(_st(_st(_st(_st(self)._object())._cell())._map())._actionMenu())._turnWatcher())._nextTurn();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"checkForNextTurn",{},smalltalk.HasMoved)})},
messageSends: ["ifEmpty:", "nextTurn", "turnWatcher", "actionMenu", "map", "cell", "object", "attackableNeighboursSide:", "side"]}),
smalltalk.HasMoved);

smalltalk.addMethod(
smalltalk.method({
selector: "moveTo:",
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("has already moved");
return self}, function($ctx1) {$ctx1.fill(self,"moveTo:",{aCell:aCell},smalltalk.HasMoved)})},
messageSends: ["error:"]}),
smalltalk.HasMoved);

smalltalk.addMethod(
smalltalk.method({
selector: "select",
fn: function (){
var self=this;
var monster,cell,map;
return smalltalk.withContext(function($ctx1) { 
monster=_st(self)._object();
cell=_st(monster)._cell();
map=_st(cell)._map();
_st(_st(cell)._attackableNeighboursSide_(_st(monster)._side()))._ifEmpty_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(map)._showActiveMonsters();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(_st(map)._actionMenu())._actionCell_(cell);
return self}, function($ctx1) {$ctx1.fill(self,"select",{monster:monster,cell:cell,map:map},smalltalk.HasMoved)})},
messageSends: ["object", "cell", "map", "ifEmpty:", "showActiveMonsters", "attackableNeighboursSide:", "side", "actionCell:", "actionMenu"]}),
smalltalk.HasMoved);



smalltalk.addClass('Inactive', smalltalk.MonsterState, [], 'Easnoth-Fight-States');
smalltalk.addMethod(
smalltalk.method({
selector: "attackTo:",
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("inactive");
return self}, function($ctx1) {$ctx1.fill(self,"attackTo:",{aCell:aCell},smalltalk.Inactive)})},
messageSends: ["error:"]}),
smalltalk.Inactive);

smalltalk.addMethod(
smalltalk.method({
selector: "checkForNextTurn",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(_st(_st(_st(_st(self)._object())._cell())._map())._actionMenu())._turnWatcher())._nextTurn();
return self}, function($ctx1) {$ctx1.fill(self,"checkForNextTurn",{},smalltalk.Inactive)})},
messageSends: ["nextTurn", "turnWatcher", "actionMenu", "map", "cell", "object"]}),
smalltalk.Inactive);

smalltalk.addMethod(
smalltalk.method({
selector: "moveTo:",
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("inactive");
return self}, function($ctx1) {$ctx1.fill(self,"moveTo:",{aCell:aCell},smalltalk.Inactive)})},
messageSends: ["error:"]}),
smalltalk.Inactive);

smalltalk.addMethod(
smalltalk.method({
selector: "select",
fn: function (){
var self=this;
var cell;
return smalltalk.withContext(function($ctx1) { 
cell=_st(_st(self)._object())._cell();
_st(_st(cell)._map())._showActiveMonsters();
_st(_st(_st(cell)._map())._actionMenu())._actionCell_(cell);
return self}, function($ctx1) {$ctx1.fill(self,"select",{cell:cell},smalltalk.Inactive)})},
messageSends: ["cell", "object", "showActiveMonsters", "map", "actionCell:", "actionMenu"]}),
smalltalk.Inactive);



smalltalk.addClass('ToPick', smalltalk.MonsterState, [], 'Easnoth-Fight-States');
smalltalk.addMethod(
smalltalk.method({
selector: "attackTo:",
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("topick monster");
return self}, function($ctx1) {$ctx1.fill(self,"attackTo:",{aCell:aCell},smalltalk.ToPick)})},
messageSends: ["error:"]}),
smalltalk.ToPick);

smalltalk.addMethod(
smalltalk.method({
selector: "checkForNextTurn",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("this state should ot happen any more");
return self}, function($ctx1) {$ctx1.fill(self,"checkForNextTurn",{},smalltalk.ToPick)})},
messageSends: ["error:"]}),
smalltalk.ToPick);

smalltalk.addMethod(
smalltalk.method({
selector: "moveTo:",
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("topick monster");
return self}, function($ctx1) {$ctx1.fill(self,"moveTo:",{aCell:aCell},smalltalk.ToPick)})},
messageSends: ["error:"]}),
smalltalk.ToPick);

smalltalk.addMethod(
smalltalk.method({
selector: "select",
fn: function (){
var self=this;
function $Inactive(){return smalltalk.Inactive||(typeof Inactive=="undefined"?nil:Inactive)}
function $Active(){return smalltalk.Active||(typeof Active=="undefined"?nil:Active)}
return smalltalk.withContext(function($ctx1) { 
_st(_st(_st(_st(_st(self)._object())._cell())._map())._monstersFromSide_(_st(_st(self)._object())._side()))._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._changeState_(_st($Inactive())._new());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
_st(_st(self)._object())._changeState_(_st($Active())._new());
_st(_st(_st(_st(_st(_st(self)._object())._cell())._map())._actionMenu())._turnWatcher())._endPick();
return self}, function($ctx1) {$ctx1.fill(self,"select",{},smalltalk.ToPick)})},
messageSends: ["do:", "changeState:", "new", "monstersFromSide:", "side", "object", "map", "cell", "endPick", "turnWatcher", "actionMenu"]}),
smalltalk.ToPick);



