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
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"cell:canBeAttackedBy:",{aCell:aCell,side:side},smalltalk.CWCellState)})},
messageSends: ["subclassResponsibility"]}),
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
return self}, function($ctx1) {$ctx1.fill(self,"removeSelector:",{aCell:aCell},smalltalk.CWCellState)})},
messageSends: []}),
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
_st(_st(aCell)._root())._showActiveMonsters();
return self}, function($ctx1) {$ctx1.fill(self,"mouseClick:context:",{aCell:aCell,gameContext:gameContext},smalltalk.CWFree)})},
messageSends: ["showActiveMonsters", "root"]}),
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
_st(_st(gameContext)._currentMonster())._moveTo_(aCell);
return self}, function($ctx1) {$ctx1.fill(self,"mouseClick:context:",{aCell:aCell,gameContext:gameContext},smalltalk.CWFreeSelected)})},
messageSends: ["moveTo:", "currentMonster"]}),
smalltalk.CWFreeSelected);

smalltalk.addMethod(
smalltalk.method({
selector: "removeSelector:",
fn: function (aCell){
var self=this;
function $CWFree(){return smalltalk.CWFree||(typeof CWFree=="undefined"?nil:CWFree)}
return smalltalk.withContext(function($ctx1) { 
_st(aCell)._removeGameOverTile();
_st(aCell)._changeState_($CWFree());
return self}, function($ctx1) {$ctx1.fill(self,"removeSelector:",{aCell:aCell},smalltalk.CWFreeSelected)})},
messageSends: ["removeGameOverTile", "changeState:"]}),
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
_st(_st(gameContext)._currentMonster())._attackTo_(aCell);
return self}, function($ctx1) {$ctx1.fill(self,"mouseClick:context:",{aCell:aCell,gameContext:gameContext},smalltalk.CWHasMonsterSelected)})},
messageSends: ["attackTo:", "currentMonster"]}),
smalltalk.CWHasMonsterSelected);

smalltalk.addMethod(
smalltalk.method({
selector: "removeSelector:",
fn: function (aCell){
var self=this;
function $CWHasMonster(){return smalltalk.CWHasMonster||(typeof CWHasMonster=="undefined"?nil:CWHasMonster)}
return smalltalk.withContext(function($ctx1) { 
_st(aCell)._removeGameOverTile();
_st(aCell)._changeState_($CWHasMonster());
return self}, function($ctx1) {$ctx1.fill(self,"removeSelector:",{aCell:aCell},smalltalk.CWHasMonsterSelected)})},
messageSends: ["removeGameOverTile", "changeState:"]}),
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
selector: "select:inContext:",
fn: function (aMonster,gameContext){
var self=this;
var cells;
return smalltalk.withContext(function($ctx1) { 
cells=_st(_st(aMonster)._parent())._selectableNeighboursMoveCycle_attackCycle_(_st(aMonster)._move(),_st(aMonster)._range());
_st((1))._halt();
_st(cells)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._addSelector();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
_st(gameContext)._currentMonster_(aMonster);
return self}, function($ctx1) {$ctx1.fill(self,"select:inContext:",{aMonster:aMonster,gameContext:gameContext,cells:cells},smalltalk.CWActive)})},
messageSends: ["selectableNeighboursMoveCycle:attackCycle:", "move", "range", "parent", "halt", "do:", "addSelector", "currentMonster:"]}),
smalltalk.CWActive);



smalltalk.addClass('CWHasAttacked', smalltalk.CWMonsterState, [], 'Easnoth-States');


smalltalk.addClass('CWInactive', smalltalk.CWMonsterState, [], 'Easnoth-States');
smalltalk.addMethod(
smalltalk.method({
selector: "select:inContext:",
fn: function (aMonster,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(aMonster)._root())._showActiveMonsters();
_st(gameContext)._currentMonster_(aMonster);
return self}, function($ctx1) {$ctx1.fill(self,"select:inContext:",{aMonster:aMonster,gameContext:gameContext},smalltalk.CWInactive)})},
messageSends: ["showActiveMonsters", "root", "currentMonster:"]}),
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
selector: "select:inContext:",
fn: function (aMonster,gameContext){
var self=this;
function $CWInactive(){return smalltalk.CWInactive||(typeof CWInactive=="undefined"?nil:CWInactive)}
function $CWActive(){return smalltalk.CWActive||(typeof CWActive=="undefined"?nil:CWActive)}
return smalltalk.withContext(function($ctx1) { 
_st(_st(_st(aMonster)._root())._monstersFromSide_(_st(aMonster)._side()))._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._changeState_($CWInactive());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
_st(aMonster)._changeState_($CWActive());
_st(aMonster)._select_(gameContext);
return self}, function($ctx1) {$ctx1.fill(self,"select:inContext:",{aMonster:aMonster,gameContext:gameContext},smalltalk.CWToPick)})},
messageSends: ["do:", "changeState:", "monstersFromSide:", "side", "root", "select:"]}),
smalltalk.CWToPick);



