smalltalk.addPackage('Easnoth-States');
smalltalk.addClass('CWState', smalltalk.Object, [], 'Easnoth-States');

smalltalk.CWState.klass.iVarNames = ['default'];
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
}, function($ctx1) {$ctx1.fill(self,"default",{},smalltalk.CWState.klass)})},
args: [],
source: "default\x0a\x09^ default ifNil: [ default := self new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: []
}),
smalltalk.CWState.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeStateFor:",
category: 'instance creation',
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsbility();
return self}, function($ctx1) {$ctx1.fill(self,"initializeStateFor:",{aCell:aCell},smalltalk.CWState.klass)})},
args: ["aCell"],
source: "initializeStateFor: aCell\x0a\x09self subclassResponsbility",
messageSends: ["subclassResponsbility"],
referencedClasses: []
}),
smalltalk.CWState.klass);


smalltalk.addClass('CWCellState', smalltalk.CWState, [], 'Easnoth-States');
smalltalk.addMethod(
smalltalk.method({
selector: "addSelector:",
category: 'cell state API',
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"addSelector:",{aCell:aCell},smalltalk.CWCellState)})},
args: ["aCell"],
source: "addSelector: aCell\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.CWCellState);

smalltalk.addMethod(
smalltalk.method({
selector: "canMoveTo:",
category: 'cell state API',
fn: function (cell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"canMoveTo:",{cell:cell},smalltalk.CWCellState)})},
args: ["cell"],
source: "canMoveTo: cell\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWCellState);

smalltalk.addMethod(
smalltalk.method({
selector: "cell:canBeAttackedBy:",
category: 'cell state API',
fn: function (aCell,side){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"cell:canBeAttackedBy:",{aCell:aCell,side:side},smalltalk.CWCellState)})},
args: ["aCell", "side"],
source: "cell: aCell canBeAttackedBy: side\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWCellState);

smalltalk.addMethod(
smalltalk.method({
selector: "mouseClick:context:",
category: 'cell state API',
fn: function (aCell,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subClassResponsbility();
return self}, function($ctx1) {$ctx1.fill(self,"mouseClick:context:",{aCell:aCell,gameContext:gameContext},smalltalk.CWCellState)})},
args: ["aCell", "gameContext"],
source: "mouseClick: aCell context: gameContext\x0a\x09self subClassResponsbility",
messageSends: ["subClassResponsbility"],
referencedClasses: []
}),
smalltalk.CWCellState);

smalltalk.addMethod(
smalltalk.method({
selector: "removeSelector:",
category: 'cell state API',
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aCell)._removeGameOverTile();
return self}, function($ctx1) {$ctx1.fill(self,"removeSelector:",{aCell:aCell},smalltalk.CWCellState)})},
args: ["aCell"],
source: "removeSelector: aCell\x0a\x09aCell removeGameOverTile",
messageSends: ["removeGameOverTile"],
referencedClasses: []
}),
smalltalk.CWCellState);

smalltalk.addMethod(
smalltalk.method({
selector: "showActiveMonster:",
category: 'cell state API',
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"showActiveMonster:",{aCell:aCell},smalltalk.CWCellState)})},
args: ["aCell"],
source: "showActiveMonster: aCell\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.CWCellState);


smalltalk.addMethod(
smalltalk.method({
selector: "initializeStateFor:",
category: 'instance creation',
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
args: ["aCell"],
source: "initializeStateFor: aCell\x0a\x09aCell free \x0a\x09\x09ifTrue: [ aCell changeState: CWFree ] \x0a\x09\x09ifFalse: [ aCell changeState: CWHasMonster ]",
messageSends: ["ifTrue:ifFalse:", "changeState:", "free"],
referencedClasses: ["CWFree", "CWHasMonster"]
}),
smalltalk.CWCellState.klass);


smalltalk.addClass('CWFree', smalltalk.CWCellState, [], 'Easnoth-States');
smalltalk.CWFree.comment="I am the state of a cell that has no monsters on it and that has no game selector on it."
smalltalk.addMethod(
smalltalk.method({
selector: "addSelector:",
category: 'cell state API',
fn: function (aCell){
var self=this;
function $CWFreeSelected(){return smalltalk.CWFreeSelected||(typeof CWFreeSelected=="undefined"?nil:CWFreeSelected)}
return smalltalk.withContext(function($ctx1) { 
_st(aCell)._addSelectorColored_("green");
_st(aCell)._changeState_($CWFreeSelected());
return self}, function($ctx1) {$ctx1.fill(self,"addSelector:",{aCell:aCell},smalltalk.CWFree)})},
args: ["aCell"],
source: "addSelector: aCell\x0a\x09aCell addSelectorColored: 'green'.\x0a\x09aCell changeState: CWFreeSelected",
messageSends: ["addSelectorColored:", "changeState:"],
referencedClasses: ["CWFreeSelected"]
}),
smalltalk.CWFree);

smalltalk.addMethod(
smalltalk.method({
selector: "canMoveTo:",
category: 'cell state API',
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"canMoveTo:",{aCell:aCell},smalltalk.CWFree)})},
args: ["aCell"],
source: "canMoveTo: aCell\x0a\x09\x22should dispatch but as it is not used...\x22\x0a\x09\x22^ aCell tile isWall not\x22\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWFree);

smalltalk.addMethod(
smalltalk.method({
selector: "mouseClick:context:",
category: 'cell state API',
fn: function (aCell,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(aCell)._root();
_st($1)._removeSelection();
$2=_st($1)._showActiveMonsters();
return self}, function($ctx1) {$ctx1.fill(self,"mouseClick:context:",{aCell:aCell,gameContext:gameContext},smalltalk.CWFree)})},
args: ["aCell", "gameContext"],
source: "mouseClick: aCell context: gameContext\x0a\x09aCell root \x0a\x09\x09removeSelection;\x0a\x09\x09showActiveMonsters",
messageSends: ["removeSelection", "root", "showActiveMonsters"],
referencedClasses: []
}),
smalltalk.CWFree);

smalltalk.addMethod(
smalltalk.method({
selector: "showActiveMonster:",
category: 'cell state API',
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"showActiveMonster:",{aCell:aCell},smalltalk.CWFree)})},
args: ["aCell"],
source: "showActiveMonster: aCell",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWFree);



smalltalk.addClass('CWFreeSelected', smalltalk.CWCellState, [], 'Easnoth-States');
smalltalk.CWFreeSelected.comment="I am the state of a cell that has no monsters on it, that has a game selector on it.\x0aThe cell cannot be a wall."
smalltalk.addMethod(
smalltalk.method({
selector: "addSelector:",
category: 'cell state API',
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("should not happen");
return self}, function($ctx1) {$ctx1.fill(self,"addSelector:",{aCell:aCell},smalltalk.CWFreeSelected)})},
args: ["aCell"],
source: "addSelector: aCell\x0a\x09self error: 'should not happen'.",
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.CWFreeSelected);

smalltalk.addMethod(
smalltalk.method({
selector: "mouseClick:context:",
category: 'cell state API',
fn: function (aCell,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(gameContext)._currentMonster())._moveTo_inContext_(aCell,gameContext);
return self}, function($ctx1) {$ctx1.fill(self,"mouseClick:context:",{aCell:aCell,gameContext:gameContext},smalltalk.CWFreeSelected)})},
args: ["aCell", "gameContext"],
source: "mouseClick: aCell context: gameContext\x0a\x09gameContext currentMonster moveTo: aCell inContext: gameContext",
messageSends: ["moveTo:inContext:", "currentMonster"],
referencedClasses: []
}),
smalltalk.CWFreeSelected);

smalltalk.addMethod(
smalltalk.method({
selector: "removeSelector:",
category: 'cell state API',
fn: function (aCell){
var self=this;
function $CWFree(){return smalltalk.CWFree||(typeof CWFree=="undefined"?nil:CWFree)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.CWCellState.fn.prototype._removeSelector_.apply(_st(self), [aCell]);
_st(aCell)._changeState_($CWFree());
return self}, function($ctx1) {$ctx1.fill(self,"removeSelector:",{aCell:aCell},smalltalk.CWFreeSelected)})},
args: ["aCell"],
source: "removeSelector: aCell\x0a\x09super removeSelector: aCell.\x0a\x09aCell changeState: CWFree",
messageSends: ["removeSelector:", "changeState:"],
referencedClasses: ["CWFree"]
}),
smalltalk.CWFreeSelected);

smalltalk.addMethod(
smalltalk.method({
selector: "showActiveMonster:",
category: 'cell state API',
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("should not happen");
return self}, function($ctx1) {$ctx1.fill(self,"showActiveMonster:",{aCell:aCell},smalltalk.CWFreeSelected)})},
args: ["aCell"],
source: "showActiveMonster: aCell\x0a\x09self error: 'should not happen'.",
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.CWFreeSelected);



smalltalk.addClass('CWHasMonster', smalltalk.CWCellState, [], 'Easnoth-States');
smalltalk.CWHasMonster.comment="I am the state of a cell that has some monsters on it and that has no game selector on it."
smalltalk.addMethod(
smalltalk.method({
selector: "addSelector:",
category: 'cell state API',
fn: function (aCell){
var self=this;
function $CWHasMonsterSelected(){return smalltalk.CWHasMonsterSelected||(typeof CWHasMonsterSelected=="undefined"?nil:CWHasMonsterSelected)}
return smalltalk.withContext(function($ctx1) { 
_st(aCell)._addSelectorColored_("red");
_st(aCell)._changeState_($CWHasMonsterSelected());
return self}, function($ctx1) {$ctx1.fill(self,"addSelector:",{aCell:aCell},smalltalk.CWHasMonster)})},
args: ["aCell"],
source: "addSelector: aCell\x0a\x09aCell addSelectorColored: 'red'.\x0a\x09aCell changeState: CWHasMonsterSelected",
messageSends: ["addSelectorColored:", "changeState:"],
referencedClasses: ["CWHasMonsterSelected"]
}),
smalltalk.CWHasMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "cell:canBeAttackedBy:",
category: 'cell state API',
fn: function (aCell,side){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(aCell)._side()).__eq(side))._not();
return $1;
}, function($ctx1) {$ctx1.fill(self,"cell:canBeAttackedBy:",{aCell:aCell,side:side},smalltalk.CWHasMonster)})},
args: ["aCell", "side"],
source: "cell: aCell canBeAttackedBy: side\x0a\x09^ (aCell side = side) not",
messageSends: ["not", "=", "side"],
referencedClasses: []
}),
smalltalk.CWHasMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "mouseClick:context:",
category: 'cell state API',
fn: function (aCell,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(aCell)._monster())._select_(gameContext);
return self}, function($ctx1) {$ctx1.fill(self,"mouseClick:context:",{aCell:aCell,gameContext:gameContext},smalltalk.CWHasMonster)})},
args: ["aCell", "gameContext"],
source: "mouseClick: aCell context: gameContext\x0a\x09aCell monster select: gameContext",
messageSends: ["select:", "monster"],
referencedClasses: []
}),
smalltalk.CWHasMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "showActiveMonster:",
category: 'cell state API',
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(aCell)._monster())._showActiveMonster();
return self}, function($ctx1) {$ctx1.fill(self,"showActiveMonster:",{aCell:aCell},smalltalk.CWHasMonster)})},
args: ["aCell"],
source: "showActiveMonster: aCell\x0a\x09aCell monster showActiveMonster.",
messageSends: ["showActiveMonster", "monster"],
referencedClasses: []
}),
smalltalk.CWHasMonster);



smalltalk.addClass('CWHasMonsterSelected', smalltalk.CWCellState, [], 'Easnoth-States');
smalltalk.CWHasMonsterSelected.comment="I am the state of a cell that has a monsters on it and a game selector.\x0aThe monster has to be on the opposite side of the current playing monster."
smalltalk.addMethod(
smalltalk.method({
selector: "addSelector:",
category: 'cell state API',
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("should not happen");
return self}, function($ctx1) {$ctx1.fill(self,"addSelector:",{aCell:aCell},smalltalk.CWHasMonsterSelected)})},
args: ["aCell"],
source: "addSelector: aCell\x0a\x09self error: 'should not happen'.",
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.CWHasMonsterSelected);

smalltalk.addMethod(
smalltalk.method({
selector: "mouseClick:context:",
category: 'cell state API',
fn: function (aCell,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(gameContext)._currentMonster())._attackTo_(aCell);
return self}, function($ctx1) {$ctx1.fill(self,"mouseClick:context:",{aCell:aCell,gameContext:gameContext},smalltalk.CWHasMonsterSelected)})},
args: ["aCell", "gameContext"],
source: "mouseClick: aCell context: gameContext\x0a\x09gameContext currentMonster attackTo: aCell.",
messageSends: ["attackTo:", "currentMonster"],
referencedClasses: []
}),
smalltalk.CWHasMonsterSelected);

smalltalk.addMethod(
smalltalk.method({
selector: "removeSelector:",
category: 'cell state API',
fn: function (aCell){
var self=this;
function $CWHasMonster(){return smalltalk.CWHasMonster||(typeof CWHasMonster=="undefined"?nil:CWHasMonster)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.CWCellState.fn.prototype._removeSelector_.apply(_st(self), [aCell]);
_st(aCell)._changeState_($CWHasMonster());
return self}, function($ctx1) {$ctx1.fill(self,"removeSelector:",{aCell:aCell},smalltalk.CWHasMonsterSelected)})},
args: ["aCell"],
source: "removeSelector: aCell\x0a\x09super removeSelector: aCell.\x0a\x09aCell changeState: CWHasMonster",
messageSends: ["removeSelector:", "changeState:"],
referencedClasses: ["CWHasMonster"]
}),
smalltalk.CWHasMonsterSelected);

smalltalk.addMethod(
smalltalk.method({
selector: "showActiveMonster:",
category: 'cell state API',
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("should not happen");
return self}, function($ctx1) {$ctx1.fill(self,"showActiveMonster:",{aCell:aCell},smalltalk.CWHasMonsterSelected)})},
args: ["aCell"],
source: "showActiveMonster: aCell\x0a\x09self error: 'should not happen'.",
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.CWHasMonsterSelected);



smalltalk.addClass('CWMonsterState', smalltalk.CWState, [], 'Easnoth-States');
smalltalk.addMethod(
smalltalk.method({
selector: "checkForNextTurn",
category: 'monster state API',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"checkForNextTurn",{},smalltalk.CWMonsterState)})},
args: [],
source: "checkForNextTurn\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.CWMonsterState);

smalltalk.addMethod(
smalltalk.method({
selector: "monster:animationMoveFrom:to:callback:",
category: 'private',
fn: function (aMonster,cell1,cellLast,callback){
var self=this;
var path,moveNumber;
return smalltalk.withContext(function($ctx1) { 
path=_st(self)._pathFrom_to_(cell1,cellLast);
moveNumber=_st(_st(path)._size()).__minus((1));
_st(_st(cell1)._root())._removeSelection();
_st((1))._to_do_(moveNumber,(function(j){
return smalltalk.withContext(function($ctx2) {
return _st((function(){
return smalltalk.withContext(function($ctx3) {
_st(_st(path)._at_(_st(_st(path)._size()).__minus(j)))._monster_(aMonster);
_st(_st(path)._at_(_st(_st(_st(path)._size()).__plus((1))).__minus(j)))._removeMonster();
return _st(_st(cell1)._root())._updateMonstersAndGOTs();
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}))._valueWithTimeout_(_st((300)).__star(j));
}, function($ctx2) {$ctx2.fillBlock({j:j},$ctx1)})}));
_st(aMonster)._currentMove_(_st(_st(aMonster)._currentMove()).__minus(moveNumber));
_st(callback)._valueWithTimeout_(_st((300)).__star(moveNumber));
return self}, function($ctx1) {$ctx1.fill(self,"monster:animationMoveFrom:to:callback:",{aMonster:aMonster,cell1:cell1,cellLast:cellLast,callback:callback,path:path,moveNumber:moveNumber},smalltalk.CWMonsterState)})},
args: ["aMonster", "cell1", "cellLast", "callback"],
source: "monster: aMonster animationMoveFrom: cell1 to: cellLast callback: callback\x0a\x09| path moveNumber |\x0a\x09\x0a\x09path := self pathFrom: cell1 to: cellLast.\x0a\x09moveNumber := path size - 1.\x0a\x0a\x09cell1 root removeSelection.\x0a\x0a\x091 to: moveNumber do: [ :j |\x0a\x09\x09[ (path at: path size - j) monster: aMonster.\x0a        (path at: path size + 1 - j) removeMonster.\x0a        cell1 root updateMonstersAndGOTs ] valueWithTimeout: 300 * j ].\x0a\x0a\x09aMonster currentMove: aMonster currentMove - moveNumber.\x0a\x09callback valueWithTimeout: 300 * moveNumber",
messageSends: ["pathFrom:to:", "-", "size", "removeSelection", "root", "to:do:", "valueWithTimeout:", "*", "monster:", "at:", "removeMonster", "+", "updateMonstersAndGOTs", "currentMove:", "currentMove"],
referencedClasses: []
}),
smalltalk.CWMonsterState);

smalltalk.addMethod(
smalltalk.method({
selector: "monster:moveTo:inContext:callback:",
category: 'private',
fn: function (aMonster,aCell,gameContext,callback){
var self=this;
function $CWFree(){return smalltalk.CWFree||(typeof CWFree=="undefined"?nil:CWFree)}
function $CWHasMonster(){return smalltalk.CWHasMonster||(typeof CWHasMonster=="undefined"?nil:CWHasMonster)}
return smalltalk.withContext(function($ctx1) { 
_st(self)._monster_animationMoveFrom_to_callback_(aMonster,_st(gameContext)._currentCell(),aCell,(function(){
return smalltalk.withContext(function($ctx2) {
_st(_st(gameContext)._currentCell())._changeState_($CWFree());
_st(aCell)._changeState_($CWHasMonster());
_st(_st(aCell)._root())._updateMonstersAndGOTs();
_st(aMonster)._checkForNextTurn();
return _st(callback)._value();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"monster:moveTo:inContext:callback:",{aMonster:aMonster,aCell:aCell,gameContext:gameContext,callback:callback},smalltalk.CWMonsterState)})},
args: ["aMonster", "aCell", "gameContext", "callback"],
source: "monster: aMonster moveTo: aCell inContext: gameContext callback: callback\x0a\x09\x22triggers the animation for the monster move\x22\x0a\x09\x0a\x09\x22should stop the events here\x22\x0a\x0a\x09\x22animation\x22\x0a\x09self monster: aMonster animationMoveFrom: gameContext currentCell to: aCell callback:[\x09\x0a        gameContext currentCell changeState: CWFree.\x0a        aCell changeState: CWHasMonster.\x0a\x09\x09aCell root updateMonstersAndGOTs.\x0a\x09\x09aMonster checkForNextTurn.\x0a\x09\x09callback value.\x0a\x09\x09\x22should restart the events here\x22\x0a\x09].",
messageSends: ["monster:animationMoveFrom:to:callback:", "currentCell", "changeState:", "updateMonstersAndGOTs", "root", "checkForNextTurn", "value"],
referencedClasses: ["CWFree", "CWHasMonster"]
}),
smalltalk.CWMonsterState);

smalltalk.addMethod(
smalltalk.method({
selector: "pathFrom:to:",
category: 'private',
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
args: ["cell1", "cellLast"],
source: "pathFrom: cell1 to: cellLast\x0a\x09| path |\x0a\x09path := Array with: cellLast.\x0a\x09[cell1 = path last] whileFalse: [path add: path last prevCell].\x0a\x09^ path",
messageSends: ["with:", "whileFalse:", "add:", "prevCell", "last", "="],
referencedClasses: ["Array"]
}),
smalltalk.CWMonsterState);

smalltalk.addMethod(
smalltalk.method({
selector: "select:inContext:",
category: 'monster state API',
fn: function (aMonster,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"select:inContext:",{aMonster:aMonster,gameContext:gameContext},smalltalk.CWMonsterState)})},
args: ["aMonster", "gameContext"],
source: "select: aMonster inContext: gameContext\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.CWMonsterState);

smalltalk.addMethod(
smalltalk.method({
selector: "showActiveMonster:",
category: 'monster state API',
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(aMonster)._parent())._addSelectorColored_("white");
return self}, function($ctx1) {$ctx1.fill(self,"showActiveMonster:",{aMonster:aMonster},smalltalk.CWMonsterState)})},
args: ["aMonster"],
source: "showActiveMonster: aMonster\x0a\x09aMonster parent addSelectorColored: 'white'",
messageSends: ["addSelectorColored:", "parent"],
referencedClasses: []
}),
smalltalk.CWMonsterState);


smalltalk.addMethod(
smalltalk.method({
selector: "initializeStateFor:",
category: 'instance creation',
fn: function (aMonster){
var self=this;
function $CWInactive(){return smalltalk.CWInactive||(typeof CWInactive=="undefined"?nil:CWInactive)}
return smalltalk.withContext(function($ctx1) { 
_st(aMonster)._changeState_($CWInactive());
return self}, function($ctx1) {$ctx1.fill(self,"initializeStateFor:",{aMonster:aMonster},smalltalk.CWMonsterState.klass)})},
args: ["aMonster"],
source: "initializeStateFor: aMonster\x0a\x09aMonster changeState: CWInactive",
messageSends: ["changeState:"],
referencedClasses: ["CWInactive"]
}),
smalltalk.CWMonsterState.klass);


smalltalk.addClass('CWActive', smalltalk.CWMonsterState, [], 'Easnoth-States');
smalltalk.CWActive.comment="Monster can move and attack"
smalltalk.addMethod(
smalltalk.method({
selector: "checkForNextTurn",
category: 'monster state API',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"checkForNextTurn",{},smalltalk.CWActive)})},
args: [],
source: "checkForNextTurn\x0a\x09\x22do nothing\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWActive);

smalltalk.addMethod(
smalltalk.method({
selector: "monster:moveTo:inContext:",
category: 'monster state API',
fn: function (aMonster,aCell,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._monster_moveTo_inContext_callback_(aMonster,aCell,gameContext,(function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"monster:moveTo:inContext:",{aMonster:aMonster,aCell:aCell,gameContext:gameContext},smalltalk.CWActive)})},
args: ["aMonster", "aCell", "gameContext"],
source: "monster: aMonster moveTo: aCell inContext: gameContext\x0a\x09self monster: aMonster moveTo: aCell inContext: gameContext callback: []",
messageSends: ["monster:moveTo:inContext:callback:"],
referencedClasses: []
}),
smalltalk.CWActive);

smalltalk.addMethod(
smalltalk.method({
selector: "select:inContext:",
category: 'monster state API',
fn: function (aMonster,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(aMonster)._parent())._selectableNeighboursMoveCycle_attackCycle_fromSide_(_st(aMonster)._currentMove(),_st(aMonster)._range(),_st(aMonster)._side());
_st(gameContext)._currentMonster_(aMonster);
return self}, function($ctx1) {$ctx1.fill(self,"select:inContext:",{aMonster:aMonster,gameContext:gameContext},smalltalk.CWActive)})},
args: ["aMonster", "gameContext"],
source: "select: aMonster inContext: gameContext\x0a\x09aMonster parent selectableNeighboursMoveCycle: aMonster currentMove attackCycle: aMonster range fromSide: aMonster side.\x0a\x09gameContext currentMonster: aMonster",
messageSends: ["selectableNeighboursMoveCycle:attackCycle:fromSide:", "currentMove", "range", "side", "parent", "currentMonster:"],
referencedClasses: []
}),
smalltalk.CWActive);



smalltalk.addClass('CWHasAttacked', smalltalk.CWMonsterState, [], 'Easnoth-States');
smalltalk.CWHasAttacked.comment="Monster can only move"
smalltalk.addMethod(
smalltalk.method({
selector: "checkForNextTurn",
category: 'monster state API',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"checkForNextTurn",{},smalltalk.CWHasAttacked)})},
args: [],
source: "checkForNextTurn\x0a\x09\x22do nothing\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWHasAttacked);

smalltalk.addMethod(
smalltalk.method({
selector: "select:inContext:",
category: 'monster state API',
fn: function (aMonster,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(aMonster)._parent())._movableNeighboursCycle_(_st(aMonster)._currentMove());
_st(gameContext)._currentMonster_(aMonster);
return self}, function($ctx1) {$ctx1.fill(self,"select:inContext:",{aMonster:aMonster,gameContext:gameContext},smalltalk.CWHasAttacked)})},
args: ["aMonster", "gameContext"],
source: "select: aMonster inContext: gameContext\x0a\x09aMonster parent movableNeighboursCycle: aMonster currentMove.\x0a\x09gameContext currentMonster: aMonster",
messageSends: ["movableNeighboursCycle:", "currentMove", "parent", "currentMonster:"],
referencedClasses: []
}),
smalltalk.CWHasAttacked);



smalltalk.addClass('CWInactive', smalltalk.CWMonsterState, [], 'Easnoth-States');
smalltalk.CWInactive.comment="Monster cannot do anything :)"
smalltalk.addMethod(
smalltalk.method({
selector: "checkForNextTurn",
category: 'monster state API',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"checkForNextTurn",{},smalltalk.CWInactive)})},
args: [],
source: "checkForNextTurn\x0a\x09\x22CALL THE NEXT TURN TO IMPLEMENT\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWInactive);

smalltalk.addMethod(
smalltalk.method({
selector: "select:inContext:",
category: 'monster state API',
fn: function (aMonster,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(aMonster)._root();
_st($1)._removeSelection();
$2=_st($1)._showActiveMonsters();
_st(gameContext)._currentMonster_(aMonster);
return self}, function($ctx1) {$ctx1.fill(self,"select:inContext:",{aMonster:aMonster,gameContext:gameContext},smalltalk.CWInactive)})},
args: ["aMonster", "gameContext"],
source: "select: aMonster inContext: gameContext\x0a\x09aMonster root \x0a\x09\x09removeSelection;\x0a\x09\x09showActiveMonsters.\x0a\x09gameContext currentMonster: aMonster.",
messageSends: ["removeSelection", "root", "showActiveMonsters", "currentMonster:"],
referencedClasses: []
}),
smalltalk.CWInactive);

smalltalk.addMethod(
smalltalk.method({
selector: "showActiveMonster:",
category: 'monster state API',
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"showActiveMonster:",{aMonster:aMonster},smalltalk.CWInactive)})},
args: ["aMonster"],
source: "showActiveMonster: aMonster\x0a\x09\x22Just do nothing, this monster is not actve\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWInactive);



smalltalk.addClass('CWToPick', smalltalk.CWMonsterState, [], 'Easnoth-States');
smalltalk.CWToPick.comment="The player has to choice one of the toPick monster to activate them"
smalltalk.addMethod(
smalltalk.method({
selector: "checkForNextTurn",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("should not happen");
return self}, function($ctx1) {$ctx1.fill(self,"checkForNextTurn",{},smalltalk.CWToPick)})},
args: [],
source: "checkForNextTurn\x0a\x09self error: 'should not happen'",
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.CWToPick);

smalltalk.addMethod(
smalltalk.method({
selector: "select:inContext:",
category: 'not yet classified',
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
args: ["aMonster", "gameContext"],
source: "select: aMonster inContext: gameContext\x0a\x09aMonster root removeSelection.\x0a\x09(aMonster root monstersFromSide: aMonster side) do: [ :each |\x0a\x09\x09each changeState: CWInactive ].\x0a\x09aMonster changeState: CWActive.\x0a\x09aMonster currentMove: aMonster move.\x0a\x09aMonster select: gameContext",
messageSends: ["removeSelection", "root", "do:", "changeState:", "monstersFromSide:", "side", "currentMove:", "move", "select:"],
referencedClasses: ["CWInactive", "CWActive"]
}),
smalltalk.CWToPick);



