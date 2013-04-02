smalltalk.addPackage('Easnoth-Fight-States');
smalltalk.addClass('CellState', smalltalk.State, [], 'Easnoth-Fight-States');
smalltalk.addMethod(
smalltalk.method({
selector: "addSelector",
category: 'eventHandling',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"addSelector",{},smalltalk.CellState)})},
args: [],
source: "addSelector\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.CellState);

smalltalk.addMethod(
smalltalk.method({
selector: "canAttack:",
category: 'eventHandling',
fn: function (aSidePlayed){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"canAttack:",{aSidePlayed:aSidePlayed},smalltalk.CellState)})},
args: ["aSidePlayed"],
source: "canAttack: aSidePlayed\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.CellState);

smalltalk.addMethod(
smalltalk.method({
selector: "canMoveTo",
category: 'eventHandling',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"canMoveTo",{},smalltalk.CellState)})},
args: [],
source: "canMoveTo\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.CellState);

smalltalk.addMethod(
smalltalk.method({
selector: "mouseClick",
category: 'eventHandling',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"mouseClick",{},smalltalk.CellState)})},
args: [],
source: "mouseClick\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.CellState);

smalltalk.addMethod(
smalltalk.method({
selector: "removeSelector",
category: 'eventHandling',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._object())._removeGameOverTile();
return self}, function($ctx1) {$ctx1.fill(self,"removeSelector",{},smalltalk.CellState)})},
args: [],
source: "removeSelector\x0a\x09self object removeGameOverTile",
messageSends: ["removeGameOverTile", "object"],
referencedClasses: []
}),
smalltalk.CellState);


smalltalk.addMethod(
smalltalk.method({
selector: "initializeStateFor:",
category: 'instance creation',
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
args: ["aCell"],
source: "initializeStateFor: aCell\x0a\x09aCell free ifTrue: [\x0a\x09\x09aCell state: (Free newFor: aCell)\x0a\x09] ifFalse: [\x0a\x09\x09aCell state: (HasMonster newFor: aCell)\x0a\x09]",
messageSends: ["ifTrue:ifFalse:", "state:", "newFor:", "free"],
referencedClasses: ["Free", "HasMonster"]
}),
smalltalk.CellState.klass);


smalltalk.addClass('Free', smalltalk.CellState, [], 'Easnoth-Fight-States');
smalltalk.Free.comment="\x22no monster on it\x22"
smalltalk.addMethod(
smalltalk.method({
selector: "addSelector",
category: 'eventHandling',
fn: function (){
var self=this;
function $FreeSelected(){return smalltalk.FreeSelected||(typeof FreeSelected=="undefined"?nil:FreeSelected)}
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._object())._addSelectorColored_("green");
_st(_st(self)._object())._changeState_(_st($FreeSelected())._new());
return self}, function($ctx1) {$ctx1.fill(self,"addSelector",{},smalltalk.Free)})},
args: [],
source: "addSelector\x0a\x09self object addSelectorColored: 'green'.\x0a\x09self object changeState: (FreeSelected new).",
messageSends: ["addSelectorColored:", "object", "changeState:", "new"],
referencedClasses: ["FreeSelected"]
}),
smalltalk.Free);

smalltalk.addMethod(
smalltalk.method({
selector: "canAttack:",
category: 'eventHandling',
fn: function (aSidePlayed){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"canAttack:",{aSidePlayed:aSidePlayed},smalltalk.Free)})},
args: ["aSidePlayed"],
source: "canAttack: aSidePlayed\x0a\x09^false",
messageSends: [],
referencedClasses: []
}),
smalltalk.Free);

smalltalk.addMethod(
smalltalk.method({
selector: "canMoveTo",
category: 'eventHandling',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(_st(self)._object())._tile())._isWall())._not();
return $1;
}, function($ctx1) {$ctx1.fill(self,"canMoveTo",{},smalltalk.Free)})},
args: [],
source: "canMoveTo\x0a\x09^self object tile isWall not",
messageSends: ["not", "isWall", "tile", "object"],
referencedClasses: []
}),
smalltalk.Free);

smalltalk.addMethod(
smalltalk.method({
selector: "mouseClick:",
category: 'eventHandling',
fn: function (actionCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(_st(self)._object())._map())._showActiveMonsters();
return self}, function($ctx1) {$ctx1.fill(self,"mouseClick:",{actionCell:actionCell},smalltalk.Free)})},
args: ["actionCell"],
source: "mouseClick: actionCell\x0a\x09self object map showActiveMonsters",
messageSends: ["showActiveMonsters", "map", "object"],
referencedClasses: []
}),
smalltalk.Free);

smalltalk.addMethod(
smalltalk.method({
selector: "removeSelector",
category: 'eventHandling',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.CellState.fn.prototype._removeSelector.apply(_st(self), []);
return self}, function($ctx1) {$ctx1.fill(self,"removeSelector",{},smalltalk.Free)})},
args: [],
source: "removeSelector\x0a\x09super removeSelector.",
messageSends: ["removeSelector"],
referencedClasses: []
}),
smalltalk.Free);



smalltalk.addClass('FreeSelected', smalltalk.CellState, ['prevCell'], 'Easnoth-Fight-States');
smalltalk.FreeSelected.comment="\x22free not wall selected\x22"
smalltalk.addMethod(
smalltalk.method({
selector: "addSelector",
category: 'eventHandling',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("shouldnt be possible to add selector on this cell");
return self}, function($ctx1) {$ctx1.fill(self,"addSelector",{},smalltalk.FreeSelected)})},
args: [],
source: "addSelector\x0a\x09self error: 'shouldnt be possible to add selector on this cell'",
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.FreeSelected);

smalltalk.addMethod(
smalltalk.method({
selector: "canAttack:",
category: 'eventHandling',
fn: function (aSidePlayed){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"canAttack:",{aSidePlayed:aSidePlayed},smalltalk.FreeSelected)})},
args: ["aSidePlayed"],
source: "canAttack: aSidePlayed\x0a\x09^false",
messageSends: [],
referencedClasses: []
}),
smalltalk.FreeSelected);

smalltalk.addMethod(
smalltalk.method({
selector: "canMoveTo",
category: 'eventHandling',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"canMoveTo",{},smalltalk.FreeSelected)})},
args: [],
source: "canMoveTo\x0a\x09^false",
messageSends: [],
referencedClasses: []
}),
smalltalk.FreeSelected);

smalltalk.addMethod(
smalltalk.method({
selector: "mouseClick:",
category: 'eventHandling',
fn: function (actionCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(actionCell)._monster())._moveTo_(_st(self)._object());
return self}, function($ctx1) {$ctx1.fill(self,"mouseClick:",{actionCell:actionCell},smalltalk.FreeSelected)})},
args: ["actionCell"],
source: "mouseClick: actionCell\x0a\x09actionCell monster moveTo: self object.",
messageSends: ["moveTo:", "object", "monster"],
referencedClasses: []
}),
smalltalk.FreeSelected);

smalltalk.addMethod(
smalltalk.method({
selector: "prevCell",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@prevCell"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"prevCell",{},smalltalk.FreeSelected)})},
args: [],
source: "prevCell\x0a\x09^prevCell",
messageSends: [],
referencedClasses: []
}),
smalltalk.FreeSelected);

smalltalk.addMethod(
smalltalk.method({
selector: "prevCell:",
category: 'accessing',
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@prevCell"]=aCell;
return self}, function($ctx1) {$ctx1.fill(self,"prevCell:",{aCell:aCell},smalltalk.FreeSelected)})},
args: ["aCell"],
source: "prevCell: aCell\x0a\x09prevCell := aCell",
messageSends: [],
referencedClasses: []
}),
smalltalk.FreeSelected);

smalltalk.addMethod(
smalltalk.method({
selector: "removeSelector",
category: 'eventHandling',
fn: function (){
var self=this;
function $Free(){return smalltalk.Free||(typeof Free=="undefined"?nil:Free)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.CellState.fn.prototype._removeSelector.apply(_st(self), []);
_st(_st(self)._object())._changeState_(_st($Free())._new());
return self}, function($ctx1) {$ctx1.fill(self,"removeSelector",{},smalltalk.FreeSelected)})},
args: [],
source: "removeSelector\x0a\x09super removeSelector.\x0a\x09self object changeState: Free new",
messageSends: ["removeSelector", "changeState:", "new", "object"],
referencedClasses: ["Free"]
}),
smalltalk.FreeSelected);


smalltalk.addMethod(
smalltalk.method({
selector: "newPreviousCell:",
category: 'instance creation',
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
args: ["aCell"],
source: "newPreviousCell: aCell\x0a\x09^self new \x0a\x09\x09prevCell: aCell;\x0a\x09\x09yourself",
messageSends: ["prevCell:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.FreeSelected.klass);


smalltalk.addClass('HasMonster', smalltalk.CellState, [], 'Easnoth-Fight-States');
smalltalk.HasMonster.comment="\x22monster on it\x22"
smalltalk.addMethod(
smalltalk.method({
selector: "addSelector",
category: 'eventHandling',
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
args: [],
source: "addSelector\x0a\x09|sidePlaying|\x0a\x09sidePlaying := self object map actionMenu sidePlaying.\x0a\x09(self object monster side = sidePlaying) ifTrue: [\x0a\x09\x09self error: 'shouldnt be able to select because friendly monster'\x0a\x09] ifFalse: [\x0a\x09\x09self object addSelectorColored: 'red'.\x0a\x09\x09self object changeState: HasMonsterSelected new.\x0a\x09].",
messageSends: ["sidePlaying", "actionMenu", "map", "object", "ifTrue:ifFalse:", "error:", "addSelectorColored:", "changeState:", "new", "=", "side", "monster"],
referencedClasses: ["HasMonsterSelected"]
}),
smalltalk.HasMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "canAttack:",
category: 'eventHandling',
fn: function (aSidePlayed){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(_st(_st(_st(self)._object())._map())._actionMenu())._sidePlaying()).__eq(_st(_st(_st(self)._object())._monster())._side()))._not();
return $1;
}, function($ctx1) {$ctx1.fill(self,"canAttack:",{aSidePlayed:aSidePlayed},smalltalk.HasMonster)})},
args: ["aSidePlayed"],
source: "canAttack: aSidePlayed\x0a\x09^(self object map actionMenu sidePlaying = self object monster side) not",
messageSends: ["not", "=", "side", "monster", "object", "sidePlaying", "actionMenu", "map"],
referencedClasses: []
}),
smalltalk.HasMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "canMoveTo",
category: 'eventHandling',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"canMoveTo",{},smalltalk.HasMonster)})},
args: [],
source: "canMoveTo\x0a\x09^false",
messageSends: [],
referencedClasses: []
}),
smalltalk.HasMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "mouseClick:",
category: 'eventHandling',
fn: function (actionCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(_st(self)._object())._monster())._select();
return self}, function($ctx1) {$ctx1.fill(self,"mouseClick:",{actionCell:actionCell},smalltalk.HasMonster)})},
args: ["actionCell"],
source: "mouseClick: actionCell\x0a\x09self object monster select",
messageSends: ["select", "monster", "object"],
referencedClasses: []
}),
smalltalk.HasMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "removeSelector",
category: 'eventHandling',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.CellState.fn.prototype._removeSelector.apply(_st(self), []);
return self}, function($ctx1) {$ctx1.fill(self,"removeSelector",{},smalltalk.HasMonster)})},
args: [],
source: "removeSelector\x0a\x09super removeSelector.",
messageSends: ["removeSelector"],
referencedClasses: []
}),
smalltalk.HasMonster);



smalltalk.addClass('HasMonsterSelected', smalltalk.CellState, [], 'Easnoth-Fight-States');
smalltalk.HasMonsterSelected.comment="\x22ennemy selected\x22"
smalltalk.addMethod(
smalltalk.method({
selector: "addSelector",
category: 'eventHandling',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("shouldnt be possible to add selector on this cell");
return self}, function($ctx1) {$ctx1.fill(self,"addSelector",{},smalltalk.HasMonsterSelected)})},
args: [],
source: "addSelector\x0a\x09self error: 'shouldnt be possible to add selector on this cell'",
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.HasMonsterSelected);

smalltalk.addMethod(
smalltalk.method({
selector: "canAttack:",
category: 'eventHandling',
fn: function (aSidePlayed){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"canAttack:",{aSidePlayed:aSidePlayed},smalltalk.HasMonsterSelected)})},
args: ["aSidePlayed"],
source: "canAttack: aSidePlayed\x0a\x09^false",
messageSends: [],
referencedClasses: []
}),
smalltalk.HasMonsterSelected);

smalltalk.addMethod(
smalltalk.method({
selector: "canMoveTo",
category: 'eventHandling',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"canMoveTo",{},smalltalk.HasMonsterSelected)})},
args: [],
source: "canMoveTo\x0a\x09^false",
messageSends: [],
referencedClasses: []
}),
smalltalk.HasMonsterSelected);

smalltalk.addMethod(
smalltalk.method({
selector: "mouseClick:",
category: 'eventHandling',
fn: function (actionCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(actionCell)._monster())._attackTo_(_st(self)._object());
return self}, function($ctx1) {$ctx1.fill(self,"mouseClick:",{actionCell:actionCell},smalltalk.HasMonsterSelected)})},
args: ["actionCell"],
source: "mouseClick: actionCell\x0a\x09actionCell monster attackTo: self object.",
messageSends: ["attackTo:", "object", "monster"],
referencedClasses: []
}),
smalltalk.HasMonsterSelected);

smalltalk.addMethod(
smalltalk.method({
selector: "removeSelector",
category: 'eventHandling',
fn: function (){
var self=this;
function $HasMonster(){return smalltalk.HasMonster||(typeof HasMonster=="undefined"?nil:HasMonster)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.CellState.fn.prototype._removeSelector.apply(_st(self), []);
_st(_st(self)._object())._changeState_(_st($HasMonster())._new());
return self}, function($ctx1) {$ctx1.fill(self,"removeSelector",{},smalltalk.HasMonsterSelected)})},
args: [],
source: "removeSelector\x0a\x09super removeSelector.\x0a\x09self object changeState: HasMonster new",
messageSends: ["removeSelector", "changeState:", "new", "object"],
referencedClasses: ["HasMonster"]
}),
smalltalk.HasMonsterSelected);



smalltalk.addClass('MonsterState', smalltalk.State, [], 'Easnoth-Fight-States');
smalltalk.addMethod(
smalltalk.method({
selector: "animationMoveFrom:to:callback:",
category: 'animation',
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
args: ["actionCell", "aCell", "callback"],
source: "animationMoveFrom: actionCell to: aCell callback: callback\x0a\x09|monster path movin i|\x0a\x09\x0a\x09path := Array new.\x0a\x09monster := actionCell monster.\x0a\x09i := 0.\x0a\x0a\x09path add: aCell.\x0a\x09[actionCell = path last] whileFalse: [path add: path last prevCell].\x0a\x0a\x09actionCell map removeSelection.\x0a\x091 to: path size - 1 do: [:k | (path at: k) addSelector].\x0a\x09actionCell map update.\x0a\x0a\x09movin := [\x0a                (path at: path size - i - 1) monster: monster.\x0a                (path at: path size - i) removeMonster.\x0a              \x09i := i + 1.\x0a                actionCell map update\x0a\x09].\x0a\x0a\x091 to: path size - 1 do: [ :j |\x0a\x09\x09movin valueWithTimeout: 300*j\x0a\x09].\x0a\x0a\x09callback valueWithTimeout: 300 * (path size - 1)",
messageSends: ["new", "monster", "add:", "whileFalse:", "prevCell", "last", "=", "removeSelection", "map", "to:do:", "-", "size", "addSelector", "at:", "update", "monster:", "removeMonster", "+", "valueWithTimeout:", "*"],
referencedClasses: ["Array"]
}),
smalltalk.MonsterState);

smalltalk.addMethod(
smalltalk.method({
selector: "attackTo:",
category: 'eventHandling',
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"attackTo:",{aCell:aCell},smalltalk.MonsterState)})},
args: ["aCell"],
source: "attackTo: aCell\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.MonsterState);

smalltalk.addMethod(
smalltalk.method({
selector: "attackTo:toState:",
category: 'internal',
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
return _st(_st(actionCell)._map())._update();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"attackTo:toState:",{aCell:aCell,aState:aState,actionCell:actionCell,monster:monster,diceRes:diceRes},smalltalk.MonsterState)})},
args: ["aCell", "aState"],
source: "attackTo: aCell toState: aState\x0a\x09|actionCell monster diceRes|\x0a\x09\x0a\x09\x22variables\x22\x0a\x09monster := self object.\x0a\x09actionCell := monster cell.\x0a\x0a\x09\x22animation\x22\x0a\x09\x22TODO\x22\x0a\x0a\x09\x22states\x22\x0a        monster changeState: aState.\x0a        \x22aCell changeState: Free new. -> moved to Monster>>removeHP\x22\x0a\x0a        \x22selection\x22\x0a        actionCell map removeSelection.\x0a        \x22monster select.\x22\x0a\x0a\x09\x22attackCalcul\x22\x0a\x09diceRes := monster rollDicesCallBack: [\x0a\x09\x09aCell monster removeHP: diceRes x.\x0a\x0a                \x22selection\x22\x0a                actionCell map removeSelection.\x0a                monster select.\x0a\x0a\x09\x09actionCell map update.\x0a\x09].",
messageSends: ["object", "cell", "changeState:", "removeSelection", "map", "rollDicesCallBack:", "removeHP:", "x", "monster", "select", "update"],
referencedClasses: []
}),
smalltalk.MonsterState);

smalltalk.addMethod(
smalltalk.method({
selector: "moveTo:",
category: 'eventHandling',
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"moveTo:",{aCell:aCell},smalltalk.MonsterState)})},
args: ["aCell"],
source: "moveTo: aCell\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.MonsterState);

smalltalk.addMethod(
smalltalk.method({
selector: "moveTo:toState:",
category: 'internal',
fn: function (aCell,aState){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._moveTo_toState_callback_(aCell,aState,(function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"moveTo:toState:",{aCell:aCell,aState:aState},smalltalk.MonsterState)})},
args: ["aCell", "aState"],
source: "moveTo: aCell toState: aState\x0a\x09self moveTo: aCell toState: aState callback: []",
messageSends: ["moveTo:toState:callback:"],
referencedClasses: []
}),
smalltalk.MonsterState);

smalltalk.addMethod(
smalltalk.method({
selector: "moveTo:toState:callback:",
category: 'internal',
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
return _st(callback)._value();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"moveTo:toState:callback:",{aCell:aCell,aState:aState,callback:callback,actionCell:actionCell,monster:monster},smalltalk.MonsterState)})},
args: ["aCell", "aState", "callback"],
source: "moveTo: aCell toState: aState callback: callback\x0a\x09|actionCell monster|\x0a\x0a\x09\x22variables\x22\x0a\x09monster := self object.\x0a\x09actionCell := monster cell.\x0a\x0a\x09\x22selection\x22\x0a\x09self object cell map removeSelection.\x0a\x09monster select.\x0a\x0a\x09\x22animation\x22\x0a\x09self animationMoveFrom: actionCell to: aCell callback:[\x09\x0a                \x22states\x22\x0a                actionCell changeState: Free new.\x0a                monster changeState: aState.\x0a                aCell changeState: HasMonster new.\x0a\x0a\x09\x09\x22selection\x22\x0a\x09\x09self object cell map removeSelection.\x0a\x09\x09monster select.\x0a\x0a\x09\x09actionCell map update.\x0a\x0a\x09\x09callback value\x0a\x09].",
messageSends: ["object", "cell", "removeSelection", "map", "select", "animationMoveFrom:to:callback:", "changeState:", "new", "update", "value"],
referencedClasses: ["Free", "HasMonster"]
}),
smalltalk.MonsterState);

smalltalk.addMethod(
smalltalk.method({
selector: "select",
category: 'eventHandling',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"select",{},smalltalk.MonsterState)})},
args: [],
source: "select\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.MonsterState);



smalltalk.addClass('Active', smalltalk.MonsterState, [], 'Easnoth-Fight-States');
smalltalk.Active.comment="\x22Monster can move and attack\x22"
smalltalk.addMethod(
smalltalk.method({
selector: "attackTo:",
category: 'eventHandling',
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
return _st(_st(_st(self)._object())._state())._attackTo_(aCell);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
};
return self}, function($ctx1) {$ctx1.fill(self,"attackTo:",{aCell:aCell},smalltalk.Active)})},
args: ["aCell"],
source: "attackTo: aCell\x0a\x09(aCell neighbours includes: self object cell) ifFalse: [\x0a\x09\x09self moveTo: ((aCell neighbours select: [:each | each state isKindOf: FreeSelected ]) asArray at: 1) toState: HasMoved new callback: [self object state attackTo: aCell].\x09\x09\x0a\x09] ifTrue: [\x0a\x09\x09self attackTo: aCell toState: HasAttacked new.\x0a\x09]",
messageSends: ["ifFalse:ifTrue:", "moveTo:toState:callback:", "at:", "asArray", "select:", "isKindOf:", "state", "neighbours", "new", "attackTo:", "object", "attackTo:toState:", "includes:", "cell"],
referencedClasses: ["FreeSelected", "HasMoved", "HasAttacked"]
}),
smalltalk.Active);

smalltalk.addMethod(
smalltalk.method({
selector: "moveTo:",
category: 'eventHandling',
fn: function (aCell){
var self=this;
function $HasMoved(){return smalltalk.HasMoved||(typeof HasMoved=="undefined"?nil:HasMoved)}
return smalltalk.withContext(function($ctx1) { 
_st(self)._moveTo_toState_(aCell,_st($HasMoved())._new());
return self}, function($ctx1) {$ctx1.fill(self,"moveTo:",{aCell:aCell},smalltalk.Active)})},
args: ["aCell"],
source: "moveTo: aCell\x0a\x09self moveTo: aCell toState: HasMoved new",
messageSends: ["moveTo:toState:", "new"],
referencedClasses: ["HasMoved"]
}),
smalltalk.Active);

smalltalk.addMethod(
smalltalk.method({
selector: "select",
category: 'eventHandling',
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
args: [],
source: "select\x0a\x09|monster cell map|\x0a\x0a\x09monster := self object.\x0a\x09cell := monster cell.\x0a\x09map := cell map.\x0a\x0a\x09cell selectableNeighboursSide: monster side.\x0a\x09map actionMenu actionCell: cell.",
messageSends: ["object", "cell", "map", "selectableNeighboursSide:", "side", "actionCell:", "actionMenu"],
referencedClasses: []
}),
smalltalk.Active);



smalltalk.addClass('HasAttacked', smalltalk.MonsterState, [], 'Easnoth-Fight-States');
smalltalk.HasAttacked.comment="\x22Monster can only move\x22"
smalltalk.addMethod(
smalltalk.method({
selector: "attackTo:",
category: 'eventHandling',
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("has already attacked");
return self}, function($ctx1) {$ctx1.fill(self,"attackTo:",{aCell:aCell},smalltalk.HasAttacked)})},
args: ["aCell"],
source: "attackTo: aCell\x0a\x09self error:'has already attacked'",
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.HasAttacked);

smalltalk.addMethod(
smalltalk.method({
selector: "moveTo:",
category: 'eventHandling',
fn: function (aCell){
var self=this;
function $Inactive(){return smalltalk.Inactive||(typeof Inactive=="undefined"?nil:Inactive)}
return smalltalk.withContext(function($ctx1) { 
_st(self)._moveTo_toState_(aCell,_st($Inactive())._new());
return self}, function($ctx1) {$ctx1.fill(self,"moveTo:",{aCell:aCell},smalltalk.HasAttacked)})},
args: ["aCell"],
source: "moveTo: aCell\x0a\x09self moveTo: aCell toState: Inactive new",
messageSends: ["moveTo:toState:", "new"],
referencedClasses: ["Inactive"]
}),
smalltalk.HasAttacked);

smalltalk.addMethod(
smalltalk.method({
selector: "select",
category: 'eventHandling',
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
args: [],
source: "select\x0a\x09|monster cell map|\x0a\x0a\x09monster := self object.\x0a\x09cell := monster cell.\x0a\x09map := cell map.\x0a\x0a\x09cell movableNeighbours ifEmpty:[map showActiveMonsters].\x0a\x09map actionMenu actionCell: cell.",
messageSends: ["object", "cell", "map", "ifEmpty:", "showActiveMonsters", "movableNeighbours", "actionCell:", "actionMenu"],
referencedClasses: []
}),
smalltalk.HasAttacked);



smalltalk.addClass('HasMoved', smalltalk.MonsterState, [], 'Easnoth-Fight-States');
smalltalk.HasMoved.comment="\x22Monster can only attack\x22"
smalltalk.addMethod(
smalltalk.method({
selector: "attackTo:",
category: 'not yet classified',
fn: function (aCell){
var self=this;
function $Inactive(){return smalltalk.Inactive||(typeof Inactive=="undefined"?nil:Inactive)}
return smalltalk.withContext(function($ctx1) { 
_st(self)._attackTo_toState_(aCell,_st($Inactive())._new());
return self}, function($ctx1) {$ctx1.fill(self,"attackTo:",{aCell:aCell},smalltalk.HasMoved)})},
args: ["aCell"],
source: "attackTo: aCell\x0a\x09self attackTo: aCell toState: Inactive new.",
messageSends: ["attackTo:toState:", "new"],
referencedClasses: ["Inactive"]
}),
smalltalk.HasMoved);

smalltalk.addMethod(
smalltalk.method({
selector: "moveTo:",
category: 'not yet classified',
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("has already moved");
return self}, function($ctx1) {$ctx1.fill(self,"moveTo:",{aCell:aCell},smalltalk.HasMoved)})},
args: ["aCell"],
source: "moveTo: aCell\x0a\x09self error:'has already moved'",
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.HasMoved);

smalltalk.addMethod(
smalltalk.method({
selector: "select",
category: 'not yet classified',
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
args: [],
source: "select\x0a\x09|monster cell map|\x0a\x0a\x09monster := self object.\x0a\x09cell := monster cell.\x0a\x09map := cell map.\x0a\x0a\x09(cell attackableNeighboursSide: monster side) ifEmpty:[map showActiveMonsters].\x0a\x09map actionMenu actionCell: cell",
messageSends: ["object", "cell", "map", "ifEmpty:", "showActiveMonsters", "attackableNeighboursSide:", "side", "actionCell:", "actionMenu"],
referencedClasses: []
}),
smalltalk.HasMoved);



smalltalk.addClass('Inactive', smalltalk.MonsterState, [], 'Easnoth-Fight-States');
smalltalk.Inactive.comment="\x22monster can't move or attack\x22"
smalltalk.addMethod(
smalltalk.method({
selector: "attackTo:",
category: 'eventHandling',
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("inactive");
return self}, function($ctx1) {$ctx1.fill(self,"attackTo:",{aCell:aCell},smalltalk.Inactive)})},
args: ["aCell"],
source: "attackTo: aCell\x0a\x09self error:'inactive'",
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.Inactive);

smalltalk.addMethod(
smalltalk.method({
selector: "moveTo:",
category: 'eventHandling',
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("inactive");
return self}, function($ctx1) {$ctx1.fill(self,"moveTo:",{aCell:aCell},smalltalk.Inactive)})},
args: ["aCell"],
source: "moveTo: aCell\x0a\x09self error:'inactive'",
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.Inactive);

smalltalk.addMethod(
smalltalk.method({
selector: "select",
category: 'eventHandling',
fn: function (){
var self=this;
var cell;
return smalltalk.withContext(function($ctx1) { 
cell=_st(_st(self)._object())._cell();
_st(_st(cell)._map())._showActiveMonsters();
_st(_st(_st(cell)._map())._actionMenu())._actionCell_(cell);
return self}, function($ctx1) {$ctx1.fill(self,"select",{cell:cell},smalltalk.Inactive)})},
args: [],
source: "select\x0a\x09|cell|\x0a\x0a\x09cell := self object cell.\x0a\x0a\x09cell map showActiveMonsters.\x0a\x09cell map actionMenu actionCell: cell.",
messageSends: ["cell", "object", "showActiveMonsters", "map", "actionCell:", "actionMenu"],
referencedClasses: []
}),
smalltalk.Inactive);



smalltalk.addClass('ToPick', smalltalk.MonsterState, [], 'Easnoth-Fight-States');
smalltalk.ToPick.comment="\x22monster will be activated\x22"
smalltalk.addMethod(
smalltalk.method({
selector: "attackTo:",
category: 'eventHandling',
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("topick monster");
return self}, function($ctx1) {$ctx1.fill(self,"attackTo:",{aCell:aCell},smalltalk.ToPick)})},
args: ["aCell"],
source: "attackTo:aCell\x0a\x09self error: 'topick monster'",
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.ToPick);

smalltalk.addMethod(
smalltalk.method({
selector: "moveTo:",
category: 'eventHandling',
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("topick monster");
return self}, function($ctx1) {$ctx1.fill(self,"moveTo:",{aCell:aCell},smalltalk.ToPick)})},
args: ["aCell"],
source: "moveTo:aCell\x0a\x09self error: 'topick monster'",
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.ToPick);

smalltalk.addMethod(
smalltalk.method({
selector: "select",
category: 'eventHandling',
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
args: [],
source: "select\x0a\x09(self object cell map monstersFromSide: self object side) do:[:each | each changeState: Inactive new].\x0a\x09self object changeState: Active new.\x0a\x09self object cell map actionMenu turnWatcher endPick.",
messageSends: ["do:", "changeState:", "new", "monstersFromSide:", "side", "object", "map", "cell", "endPick", "turnWatcher", "actionMenu"],
referencedClasses: ["Inactive", "Active"]
}),
smalltalk.ToPick);



