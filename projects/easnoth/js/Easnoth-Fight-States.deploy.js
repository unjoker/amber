smalltalk.addPackage('Easnoth-Fight-States', {});
smalltalk.addClass('CellState', smalltalk.State, [], 'Easnoth-Fight-States');
smalltalk.addMethod(
"_addSelector",
smalltalk.method({
selector: "addSelector",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"addSelector",{}, smalltalk.CellState)})}
}),
smalltalk.CellState);

smalltalk.addMethod(
"_canAttack_",
smalltalk.method({
selector: "canAttack:",
fn: function (aSidePlayed){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"canAttack:",{aSidePlayed:aSidePlayed}, smalltalk.CellState)})}
}),
smalltalk.CellState);

smalltalk.addMethod(
"_canMoveTo",
smalltalk.method({
selector: "canMoveTo",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"canMoveTo",{}, smalltalk.CellState)})}
}),
smalltalk.CellState);

smalltalk.addMethod(
"_mouseClick",
smalltalk.method({
selector: "mouseClick",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"mouseClick",{}, smalltalk.CellState)})}
}),
smalltalk.CellState);

smalltalk.addMethod(
"_removeSelector",
smalltalk.method({
selector: "removeSelector",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
_st(_st(_st(self)._object())._overTiles())._do_((function(overTile){
return smalltalk.withContext(function($ctx2) {$1=_st(overTile)._selector();
if(smalltalk.assert($1)){
return _st(_st(_st(self)._object())._drawedObjects())._remove_(overTile);
};
}, function($ctx2) {$ctx2.fillBlock({overTile:overTile},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"removeSelector",{}, smalltalk.CellState)})}
}),
smalltalk.CellState);


smalltalk.addMethod(
"_initializeStateFor_",
smalltalk.method({
selector: "initializeStateFor:",
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(aCell)._free();
if(smalltalk.assert($1)){
_st(aCell)._state_(_st((smalltalk.Free || Free))._newFor_(aCell));
} else {
_st(aCell)._state_(_st((smalltalk.HasMonster || HasMonster))._newFor_(aCell));
};
return self}, function($ctx1) {$ctx1.fill(self,"initializeStateFor:",{aCell:aCell}, smalltalk.CellState.klass)})}
}),
smalltalk.CellState.klass);


smalltalk.addClass('Free', smalltalk.CellState, [], 'Easnoth-Fight-States');
smalltalk.addMethod(
"_addSelector",
smalltalk.method({
selector: "addSelector",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._object())._addSelectorColored_("green");
_st(_st(self)._object())._changeState_(_st((smalltalk.FreeSelected || FreeSelected))._new());
return self}, function($ctx1) {$ctx1.fill(self,"addSelector",{}, smalltalk.Free)})}
}),
smalltalk.Free);

smalltalk.addMethod(
"_canAttack_",
smalltalk.method({
selector: "canAttack:",
fn: function (aSidePlayed){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, function($ctx1) {$ctx1.fill(self,"canAttack:",{aSidePlayed:aSidePlayed}, smalltalk.Free)})}
}),
smalltalk.Free);

smalltalk.addMethod(
"_canMoveTo",
smalltalk.method({
selector: "canMoveTo",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(_st(_st(self)._object())._tile())._isWall())._not();
return $1;
}, function($ctx1) {$ctx1.fill(self,"canMoveTo",{}, smalltalk.Free)})}
}),
smalltalk.Free);

smalltalk.addMethod(
"_mouseClick_",
smalltalk.method({
selector: "mouseClick:",
fn: function (actionCell){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(_st(self)._object())._map())._showActiveMonsters();
return self}, function($ctx1) {$ctx1.fill(self,"mouseClick:",{actionCell:actionCell}, smalltalk.Free)})}
}),
smalltalk.Free);

smalltalk.addMethod(
"_removeSelector",
smalltalk.method({
selector: "removeSelector",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.CellState.fn.prototype._removeSelector.apply(_st(self), []);
return self}, function($ctx1) {$ctx1.fill(self,"removeSelector",{}, smalltalk.Free)})}
}),
smalltalk.Free);



smalltalk.addClass('FreeSelected', smalltalk.CellState, ['prevCell'], 'Easnoth-Fight-States');
smalltalk.addMethod(
"_addSelector",
smalltalk.method({
selector: "addSelector",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._error_("shouldnt be possible to add selector on this cell");
return self}, function($ctx1) {$ctx1.fill(self,"addSelector",{}, smalltalk.FreeSelected)})}
}),
smalltalk.FreeSelected);

smalltalk.addMethod(
"_canAttack_",
smalltalk.method({
selector: "canAttack:",
fn: function (aSidePlayed){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, function($ctx1) {$ctx1.fill(self,"canAttack:",{aSidePlayed:aSidePlayed}, smalltalk.FreeSelected)})}
}),
smalltalk.FreeSelected);

smalltalk.addMethod(
"_canMoveTo",
smalltalk.method({
selector: "canMoveTo",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, function($ctx1) {$ctx1.fill(self,"canMoveTo",{}, smalltalk.FreeSelected)})}
}),
smalltalk.FreeSelected);

smalltalk.addMethod(
"_mouseClick_",
smalltalk.method({
selector: "mouseClick:",
fn: function (actionCell){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(actionCell)._monster())._moveTo_(_st(self)._object());
return self}, function($ctx1) {$ctx1.fill(self,"mouseClick:",{actionCell:actionCell}, smalltalk.FreeSelected)})}
}),
smalltalk.FreeSelected);

smalltalk.addMethod(
"_prevCell",
smalltalk.method({
selector: "prevCell",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@prevCell"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"prevCell",{}, smalltalk.FreeSelected)})}
}),
smalltalk.FreeSelected);

smalltalk.addMethod(
"_prevCell_",
smalltalk.method({
selector: "prevCell:",
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@prevCell"]=aCell;
return self}, function($ctx1) {$ctx1.fill(self,"prevCell:",{aCell:aCell}, smalltalk.FreeSelected)})}
}),
smalltalk.FreeSelected);

smalltalk.addMethod(
"_removeSelector",
smalltalk.method({
selector: "removeSelector",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.CellState.fn.prototype._removeSelector.apply(_st(self), []);
_st(_st(self)._object())._changeState_(_st((smalltalk.Free || Free))._new());
return self}, function($ctx1) {$ctx1.fill(self,"removeSelector",{}, smalltalk.FreeSelected)})}
}),
smalltalk.FreeSelected);


smalltalk.addMethod(
"_newPreviousCell_",
smalltalk.method({
selector: "newPreviousCell:",
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st(self)._new();
_st($2)._prevCell_(aCell);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"newPreviousCell:",{aCell:aCell}, smalltalk.FreeSelected.klass)})}
}),
smalltalk.FreeSelected.klass);


smalltalk.addClass('HasMonster', smalltalk.CellState, [], 'Easnoth-Fight-States');
smalltalk.addMethod(
"_addSelector",
smalltalk.method({
selector: "addSelector",
fn: function (){
var self=this;
var sidePlaying;
return smalltalk.withContext(function($ctx1) { var $1;
sidePlaying=_st(_st(_st(_st(self)._object())._map())._actionMenu())._sidePlaying();
$1=_st(_st(_st(_st(self)._object())._monster())._side()).__eq(sidePlaying);
if(smalltalk.assert($1)){
_st(self)._error_("shouldnt be able to select because friendly monster");
} else {
_st(_st(self)._object())._addSelectorColored_("red");
_st(_st(self)._object())._changeState_(_st((smalltalk.HasMonsterSelected || HasMonsterSelected))._new());
};
return self}, function($ctx1) {$ctx1.fill(self,"addSelector",{sidePlaying:sidePlaying}, smalltalk.HasMonster)})}
}),
smalltalk.HasMonster);

smalltalk.addMethod(
"_canAttack_",
smalltalk.method({
selector: "canAttack:",
fn: function (aSidePlayed){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(_st(_st(_st(_st(self)._object())._map())._actionMenu())._sidePlaying()).__eq(_st(_st(_st(self)._object())._monster())._side()))._not();
return $1;
}, function($ctx1) {$ctx1.fill(self,"canAttack:",{aSidePlayed:aSidePlayed}, smalltalk.HasMonster)})}
}),
smalltalk.HasMonster);

smalltalk.addMethod(
"_canMoveTo",
smalltalk.method({
selector: "canMoveTo",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, function($ctx1) {$ctx1.fill(self,"canMoveTo",{}, smalltalk.HasMonster)})}
}),
smalltalk.HasMonster);

smalltalk.addMethod(
"_mouseClick_",
smalltalk.method({
selector: "mouseClick:",
fn: function (actionCell){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(_st(self)._object())._monster())._select();
return self}, function($ctx1) {$ctx1.fill(self,"mouseClick:",{actionCell:actionCell}, smalltalk.HasMonster)})}
}),
smalltalk.HasMonster);

smalltalk.addMethod(
"_removeSelector",
smalltalk.method({
selector: "removeSelector",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.CellState.fn.prototype._removeSelector.apply(_st(self), []);
return self}, function($ctx1) {$ctx1.fill(self,"removeSelector",{}, smalltalk.HasMonster)})}
}),
smalltalk.HasMonster);



smalltalk.addClass('HasMonsterSelected', smalltalk.CellState, [], 'Easnoth-Fight-States');
smalltalk.addMethod(
"_addSelector",
smalltalk.method({
selector: "addSelector",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._error_("shouldnt be possible to add selector on this cell");
return self}, function($ctx1) {$ctx1.fill(self,"addSelector",{}, smalltalk.HasMonsterSelected)})}
}),
smalltalk.HasMonsterSelected);

smalltalk.addMethod(
"_canAttack_",
smalltalk.method({
selector: "canAttack:",
fn: function (aSidePlayed){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, function($ctx1) {$ctx1.fill(self,"canAttack:",{aSidePlayed:aSidePlayed}, smalltalk.HasMonsterSelected)})}
}),
smalltalk.HasMonsterSelected);

smalltalk.addMethod(
"_canMoveTo",
smalltalk.method({
selector: "canMoveTo",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, function($ctx1) {$ctx1.fill(self,"canMoveTo",{}, smalltalk.HasMonsterSelected)})}
}),
smalltalk.HasMonsterSelected);

smalltalk.addMethod(
"_mouseClick_",
smalltalk.method({
selector: "mouseClick:",
fn: function (actionCell){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(actionCell)._monster())._attackTo_(_st(self)._object());
return self}, function($ctx1) {$ctx1.fill(self,"mouseClick:",{actionCell:actionCell}, smalltalk.HasMonsterSelected)})}
}),
smalltalk.HasMonsterSelected);

smalltalk.addMethod(
"_removeSelector",
smalltalk.method({
selector: "removeSelector",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.CellState.fn.prototype._removeSelector.apply(_st(self), []);
_st(_st(self)._object())._changeState_(_st((smalltalk.HasMonster || HasMonster))._new());
return self}, function($ctx1) {$ctx1.fill(self,"removeSelector",{}, smalltalk.HasMonsterSelected)})}
}),
smalltalk.HasMonsterSelected);



smalltalk.addClass('MonsterState', smalltalk.State, [], 'Easnoth-Fight-States');
smalltalk.addMethod(
"_animationMoveFrom_to_callback_",
smalltalk.method({
selector: "animationMoveFrom:to:callback:",
fn: function (actionCell,aCell,callback){
var self=this;
var monster,path,movin,i;
return smalltalk.withContext(function($ctx1) { path=_st((smalltalk.Array || Array))._new();
monster=_st(actionCell)._monster();
i=(0);
_st(path)._add_(aCell);
_st((function(){
return smalltalk.withContext(function($ctx2) {return _st(actionCell).__eq(_st(path)._last());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileFalse_((function(){
return smalltalk.withContext(function($ctx2) {return _st(path)._add_(_st(_st(path)._last())._prevCell());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(_st(actionCell)._map())._removeSelection();
_st((1))._to_do_(_st(_st(path)._size()).__minus((1)),(function(k){
return smalltalk.withContext(function($ctx2) {return _st(_st(path)._at_(k))._addSelector();
}, function($ctx2) {$ctx2.fillBlock({k:k},$ctx1)})}));
_st(_st(actionCell)._map())._update();
movin=(function(){
return smalltalk.withContext(function($ctx2) {_st(_st(path)._at_(_st(_st(_st(path)._size()).__minus(i)).__minus((1))))._monster_(monster);
_st(_st(path)._at_(_st(_st(path)._size()).__minus(i)))._removeMonster();
i=_st(i).__plus((1));
i;
return _st(_st(actionCell)._map())._update();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})});
_st((1))._to_do_(_st(_st(path)._size()).__minus((1)),(function(j){
return smalltalk.withContext(function($ctx2) {return _st(movin)._valueWithTimeout_(_st((300)).__star(j));
}, function($ctx2) {$ctx2.fillBlock({j:j},$ctx1)})}));
_st(callback)._valueWithTimeout_(_st((300)).__star(_st(_st(path)._size()).__minus((1))));
return self}, function($ctx1) {$ctx1.fill(self,"animationMoveFrom:to:callback:",{actionCell:actionCell,aCell:aCell,callback:callback,monster:monster,path:path,movin:movin,i:i}, smalltalk.MonsterState)})}
}),
smalltalk.MonsterState);

smalltalk.addMethod(
"_attackTo_",
smalltalk.method({
selector: "attackTo:",
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"attackTo:",{aCell:aCell}, smalltalk.MonsterState)})}
}),
smalltalk.MonsterState);

smalltalk.addMethod(
"_attackTo_toState_",
smalltalk.method({
selector: "attackTo:toState:",
fn: function (aCell,aState){
var self=this;
var actionCell,monster,diceRes;
return smalltalk.withContext(function($ctx1) { monster=_st(self)._object();
actionCell=_st(monster)._cell();
_st(monster)._changeState_(aState);
_st(_st(actionCell)._map())._removeSelection();
diceRes=_st(monster)._rollDicesCallBack_((function(){
return smalltalk.withContext(function($ctx2) {_st(_st(aCell)._monster())._removeHP_(_st(diceRes)._x());
_st(_st(actionCell)._map())._removeSelection();
_st(monster)._select();
return _st(_st(actionCell)._map())._update();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"attackTo:toState:",{aCell:aCell,aState:aState,actionCell:actionCell,monster:monster,diceRes:diceRes}, smalltalk.MonsterState)})}
}),
smalltalk.MonsterState);

smalltalk.addMethod(
"_moveTo_",
smalltalk.method({
selector: "moveTo:",
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"moveTo:",{aCell:aCell}, smalltalk.MonsterState)})}
}),
smalltalk.MonsterState);

smalltalk.addMethod(
"_moveTo_toState_",
smalltalk.method({
selector: "moveTo:toState:",
fn: function (aCell,aState){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._moveTo_toState_callback_(aCell,aState,(function(){
return smalltalk.withContext(function($ctx2) {}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"moveTo:toState:",{aCell:aCell,aState:aState}, smalltalk.MonsterState)})}
}),
smalltalk.MonsterState);

smalltalk.addMethod(
"_moveTo_toState_callback_",
smalltalk.method({
selector: "moveTo:toState:callback:",
fn: function (aCell,aState,callback){
var self=this;
var actionCell,monster;
return smalltalk.withContext(function($ctx1) { monster=_st(self)._object();
actionCell=_st(monster)._cell();
_st(_st(_st(_st(self)._object())._cell())._map())._removeSelection();
_st(monster)._select();
_st(self)._animationMoveFrom_to_callback_(actionCell,aCell,(function(){
return smalltalk.withContext(function($ctx2) {_st(actionCell)._changeState_(_st((smalltalk.Free || Free))._new());
_st(monster)._changeState_(aState);
_st(aCell)._changeState_(_st((smalltalk.HasMonster || HasMonster))._new());
_st(_st(_st(_st(self)._object())._cell())._map())._removeSelection();
_st(monster)._select();
_st(_st(actionCell)._map())._update();
return _st(callback)._value();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"moveTo:toState:callback:",{aCell:aCell,aState:aState,callback:callback,actionCell:actionCell,monster:monster}, smalltalk.MonsterState)})}
}),
smalltalk.MonsterState);

smalltalk.addMethod(
"_select",
smalltalk.method({
selector: "select",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"select",{}, smalltalk.MonsterState)})}
}),
smalltalk.MonsterState);



smalltalk.addClass('Active', smalltalk.MonsterState, [], 'Easnoth-Fight-States');
smalltalk.addMethod(
"_attackTo_",
smalltalk.method({
selector: "attackTo:",
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(aCell)._neighbours())._includes_(_st(_st(self)._object())._cell());
if(smalltalk.assert($1)){
_st(self)._attackTo_toState_(aCell,_st((smalltalk.HasAttacked || HasAttacked))._new());
} else {
_st(self)._moveTo_toState_callback_(_st(_st(_st(_st(aCell)._neighbours())._select_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(_st(each)._state())._isKindOf_((smalltalk.FreeSelected || FreeSelected));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})})))._asArray())._at_((1)),_st((smalltalk.HasMoved || HasMoved))._new(),(function(){
return smalltalk.withContext(function($ctx2) {return _st(_st(_st(self)._object())._state())._attackTo_(aCell);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
};
return self}, function($ctx1) {$ctx1.fill(self,"attackTo:",{aCell:aCell}, smalltalk.Active)})}
}),
smalltalk.Active);

smalltalk.addMethod(
"_moveTo_",
smalltalk.method({
selector: "moveTo:",
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._moveTo_toState_(aCell,_st((smalltalk.HasMoved || HasMoved))._new());
return self}, function($ctx1) {$ctx1.fill(self,"moveTo:",{aCell:aCell}, smalltalk.Active)})}
}),
smalltalk.Active);

smalltalk.addMethod(
"_select",
smalltalk.method({
selector: "select",
fn: function (){
var self=this;
var monster,cell,map;
return smalltalk.withContext(function($ctx1) { monster=_st(self)._object();
cell=_st(monster)._cell();
map=_st(cell)._map();
_st(cell)._selectableNeighboursSide_(_st(monster)._side());
_st(_st(map)._actionMenu())._actionCell_(cell);
return self}, function($ctx1) {$ctx1.fill(self,"select",{monster:monster,cell:cell,map:map}, smalltalk.Active)})}
}),
smalltalk.Active);



smalltalk.addClass('HasAttacked', smalltalk.MonsterState, [], 'Easnoth-Fight-States');
smalltalk.addMethod(
"_attackTo_",
smalltalk.method({
selector: "attackTo:",
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._error_("has already attacked");
return self}, function($ctx1) {$ctx1.fill(self,"attackTo:",{aCell:aCell}, smalltalk.HasAttacked)})}
}),
smalltalk.HasAttacked);

smalltalk.addMethod(
"_moveTo_",
smalltalk.method({
selector: "moveTo:",
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._moveTo_toState_(aCell,_st((smalltalk.Inactive || Inactive))._new());
return self}, function($ctx1) {$ctx1.fill(self,"moveTo:",{aCell:aCell}, smalltalk.HasAttacked)})}
}),
smalltalk.HasAttacked);

smalltalk.addMethod(
"_select",
smalltalk.method({
selector: "select",
fn: function (){
var self=this;
var monster,cell,map;
return smalltalk.withContext(function($ctx1) { monster=_st(self)._object();
cell=_st(monster)._cell();
map=_st(cell)._map();
_st(_st(cell)._movableNeighbours())._ifEmpty_((function(){
return smalltalk.withContext(function($ctx2) {return _st(map)._showActiveMonsters();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(_st(map)._actionMenu())._actionCell_(cell);
return self}, function($ctx1) {$ctx1.fill(self,"select",{monster:monster,cell:cell,map:map}, smalltalk.HasAttacked)})}
}),
smalltalk.HasAttacked);



smalltalk.addClass('HasMoved', smalltalk.MonsterState, [], 'Easnoth-Fight-States');
smalltalk.addMethod(
"_attackTo_",
smalltalk.method({
selector: "attackTo:",
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._attackTo_toState_(aCell,_st((smalltalk.Inactive || Inactive))._new());
return self}, function($ctx1) {$ctx1.fill(self,"attackTo:",{aCell:aCell}, smalltalk.HasMoved)})}
}),
smalltalk.HasMoved);

smalltalk.addMethod(
"_moveTo_",
smalltalk.method({
selector: "moveTo:",
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._error_("has already moved");
return self}, function($ctx1) {$ctx1.fill(self,"moveTo:",{aCell:aCell}, smalltalk.HasMoved)})}
}),
smalltalk.HasMoved);

smalltalk.addMethod(
"_select",
smalltalk.method({
selector: "select",
fn: function (){
var self=this;
var monster,cell,map;
return smalltalk.withContext(function($ctx1) { monster=_st(self)._object();
cell=_st(monster)._cell();
map=_st(cell)._map();
_st(_st(cell)._attackableNeighboursSide_(_st(monster)._side()))._ifEmpty_((function(){
return smalltalk.withContext(function($ctx2) {return _st(map)._showActiveMonsters();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(_st(map)._actionMenu())._actionCell_(cell);
return self}, function($ctx1) {$ctx1.fill(self,"select",{monster:monster,cell:cell,map:map}, smalltalk.HasMoved)})}
}),
smalltalk.HasMoved);



smalltalk.addClass('Inactive', smalltalk.MonsterState, [], 'Easnoth-Fight-States');
smalltalk.addMethod(
"_attackTo_",
smalltalk.method({
selector: "attackTo:",
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._error_("inactive");
return self}, function($ctx1) {$ctx1.fill(self,"attackTo:",{aCell:aCell}, smalltalk.Inactive)})}
}),
smalltalk.Inactive);

smalltalk.addMethod(
"_moveTo_",
smalltalk.method({
selector: "moveTo:",
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._error_("inactive");
return self}, function($ctx1) {$ctx1.fill(self,"moveTo:",{aCell:aCell}, smalltalk.Inactive)})}
}),
smalltalk.Inactive);

smalltalk.addMethod(
"_select",
smalltalk.method({
selector: "select",
fn: function (){
var self=this;
var cell;
return smalltalk.withContext(function($ctx1) { cell=_st(_st(self)._object())._cell();
_st(_st(cell)._map())._showActiveMonsters();
_st(_st(_st(cell)._map())._actionMenu())._actionCell_(cell);
return self}, function($ctx1) {$ctx1.fill(self,"select",{cell:cell}, smalltalk.Inactive)})}
}),
smalltalk.Inactive);



smalltalk.addClass('ToPick', smalltalk.MonsterState, [], 'Easnoth-Fight-States');
smalltalk.addMethod(
"_attackTo_",
smalltalk.method({
selector: "attackTo:",
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._error_("topick monster");
return self}, function($ctx1) {$ctx1.fill(self,"attackTo:",{aCell:aCell}, smalltalk.ToPick)})}
}),
smalltalk.ToPick);

smalltalk.addMethod(
"_moveTo_",
smalltalk.method({
selector: "moveTo:",
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._error_("topick monster");
return self}, function($ctx1) {$ctx1.fill(self,"moveTo:",{aCell:aCell}, smalltalk.ToPick)})}
}),
smalltalk.ToPick);

smalltalk.addMethod(
"_select",
smalltalk.method({
selector: "select",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(_st(_st(_st(self)._object())._cell())._map())._monstersFromSide_(_st(_st(self)._object())._side()))._do_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(each)._changeState_(_st((smalltalk.Inactive || Inactive))._new());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
_st(_st(self)._object())._changeState_(_st((smalltalk.Active || Active))._new());
_st(_st(_st(_st(_st(_st(self)._object())._cell())._map())._actionMenu())._turnWatcher())._endPick();
return self}, function($ctx1) {$ctx1.fill(self,"select",{}, smalltalk.ToPick)})}
}),
smalltalk.ToPick);



