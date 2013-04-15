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
selector: "cell:addMonster:",
category: 'cell state API',
fn: function (aCell,aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"cell:addMonster:",{aCell:aCell,aMonster:aMonster},smalltalk.CWCellState)})},
args: ["aCell", "aMonster"],
source: "cell: aCell addMonster: aMonster\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
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
selector: "removeMonster:",
category: 'cell state API',
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"removeMonster:",{aCell:aCell},smalltalk.CWCellState)})},
args: ["aCell"],
source: "removeMonster: aCell\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
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
selector: "cell:addMonster:",
category: 'cell state API',
fn: function (aCell,aMonster){
var self=this;
function $CWHasMonster(){return smalltalk.CWHasMonster||(typeof CWHasMonster=="undefined"?nil:CWHasMonster)}
return smalltalk.withContext(function($ctx1) { 
_st(aMonster)._parent_(aCell);
_st(aCell)._monster_(aMonster);
_st(aCell)._changeState_($CWHasMonster());
return self}, function($ctx1) {$ctx1.fill(self,"cell:addMonster:",{aCell:aCell,aMonster:aMonster},smalltalk.CWFree)})},
args: ["aCell", "aMonster"],
source: "cell: aCell addMonster: aMonster\x0a\x09aMonster parent: aCell.\x0a\x09aCell monster: aMonster.\x0a\x09aCell changeState: CWHasMonster",
messageSends: ["parent:", "monster:", "changeState:"],
referencedClasses: ["CWHasMonster"]
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
selector: "removeMonster:",
category: 'cell state API',
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("cannot remove a monster from a cell that has no monster on it");
return self}, function($ctx1) {$ctx1.fill(self,"removeMonster:",{aCell:aCell},smalltalk.CWFree)})},
args: ["aCell"],
source: "removeMonster: aCell\x0a\x09self error: 'cannot remove a monster from a cell that has no monster on it'",
messageSends: ["error:"],
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
_st(self)._error_("cannot add a selector to a cell that has already a *green* selector");
return self}, function($ctx1) {$ctx1.fill(self,"addSelector:",{aCell:aCell},smalltalk.CWFreeSelected)})},
args: ["aCell"],
source: "addSelector: aCell\x0a\x09self error: 'cannot add a selector to a cell that has already a *green* selector'.",
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.CWFreeSelected);

smalltalk.addMethod(
smalltalk.method({
selector: "cell:addMonster:",
category: 'cell state API',
fn: function (aCell,aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("cannot add a monster to a cell that has already a *green* selector (case not specified in state machine)");
return self}, function($ctx1) {$ctx1.fill(self,"cell:addMonster:",{aCell:aCell,aMonster:aMonster},smalltalk.CWFreeSelected)})},
args: ["aCell", "aMonster"],
source: "cell: aCell addMonster: aMonster\x0a\x09self error: 'cannot add a monster to a cell that has already a *green* selector (case not specified in state machine)'.",
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
selector: "removeMonster:",
category: 'cell state API',
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("cannot remove a monster from a cell that has no monster on it");
return self}, function($ctx1) {$ctx1.fill(self,"removeMonster:",{aCell:aCell},smalltalk.CWFreeSelected)})},
args: ["aCell"],
source: "removeMonster: aCell\x0a\x09\x09self error: 'cannot remove a monster from a cell that has no monster on it'",
messageSends: ["error:"],
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
_st(self)._error_("try to show the monster whereas this cell has already a *green* selector and has no monster on it. (not specified in the state machine)");
return self}, function($ctx1) {$ctx1.fill(self,"showActiveMonster:",{aCell:aCell},smalltalk.CWFreeSelected)})},
args: ["aCell"],
source: "showActiveMonster: aCell\x0a\x09self error: 'try to show the monster whereas this cell has already a *green* selector and has no monster on it. (not specified in the state machine)'.",
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
selector: "cell:addMonster:",
category: 'cell state API',
fn: function (aCell,aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("cannot add a monster on a cell that has already one");
return self}, function($ctx1) {$ctx1.fill(self,"cell:addMonster:",{aCell:aCell,aMonster:aMonster},smalltalk.CWHasMonster)})},
args: ["aCell", "aMonster"],
source: "cell: aCell addMonster: aMonster\x0a\x09self error: 'cannot add a monster on a cell that has already one'.",
messageSends: ["error:"],
referencedClasses: []
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
selector: "removeMonster:",
category: 'cell state API',
fn: function (aCell){
var self=this;
function $CWFree(){return smalltalk.CWFree||(typeof CWFree=="undefined"?nil:CWFree)}
return smalltalk.withContext(function($ctx1) { 
_st(aCell)._monster_(nil);
_st(aCell)._changeState_($CWFree());
return self}, function($ctx1) {$ctx1.fill(self,"removeMonster:",{aCell:aCell},smalltalk.CWHasMonster)})},
args: ["aCell"],
source: "removeMonster: aCell\x0a\x09aCell monster: nil.\x0a\x09aCell changeState: CWFree",
messageSends: ["monster:", "changeState:"],
referencedClasses: ["CWFree"]
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
_st(self)._error_("cannot add a selector to a cell that has already a *red* selector");
return self}, function($ctx1) {$ctx1.fill(self,"addSelector:",{aCell:aCell},smalltalk.CWHasMonsterSelected)})},
args: ["aCell"],
source: "addSelector: aCell\x0a\x09self error: 'cannot add a selector to a cell that has already a *red* selector'.",
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.CWHasMonsterSelected);

smalltalk.addMethod(
smalltalk.method({
selector: "cell:addMonster:",
category: 'cell state API',
fn: function (aCell,aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("cannot add a monster to a cell that has already a monster and a *red* selector");
return self}, function($ctx1) {$ctx1.fill(self,"cell:addMonster:",{aCell:aCell,aMonster:aMonster},smalltalk.CWHasMonsterSelected)})},
args: ["aCell", "aMonster"],
source: "cell: aCell addMonster: aMonster\x0a\x09self error: 'cannot add a monster to a cell that has already a monster and a *red* selector'.",
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
_st(_st(gameContext)._currentMonster())._attackTo_inContext_(aCell,gameContext);
return self}, function($ctx1) {$ctx1.fill(self,"mouseClick:context:",{aCell:aCell,gameContext:gameContext},smalltalk.CWHasMonsterSelected)})},
args: ["aCell", "gameContext"],
source: "mouseClick: aCell context: gameContext\x0a\x09gameContext currentMonster attackTo: aCell inContext: gameContext",
messageSends: ["attackTo:inContext:", "currentMonster"],
referencedClasses: []
}),
smalltalk.CWHasMonsterSelected);

smalltalk.addMethod(
smalltalk.method({
selector: "removeMonster:",
category: 'cell state API',
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("cannot remove a monster from a cell that has already a *red* selector. (case not specified in state machine)");
return self}, function($ctx1) {$ctx1.fill(self,"removeMonster:",{aCell:aCell},smalltalk.CWHasMonsterSelected)})},
args: ["aCell"],
source: "removeMonster: aCell\x0a\x09self error: 'cannot remove a monster from a cell that has already a *red* selector. (case not specified in state machine)'",
messageSends: ["error:"],
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
_st(self)._error_("try to show the monster whereas this cell has already a *red* selector and a monster from the other player. (not specified in the state machine)");
return self}, function($ctx1) {$ctx1.fill(self,"showActiveMonster:",{aCell:aCell},smalltalk.CWHasMonsterSelected)})},
args: ["aCell"],
source: "showActiveMonster: aCell\x0a\x09self error: 'try to show the monster whereas this cell has already a *red* selector and a monster from the other player. (not specified in the state machine)'.",
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.CWHasMonsterSelected);



smalltalk.addClass('CWMonsterState', smalltalk.CWState, [], 'Easnoth-States');
smalltalk.addMethod(
smalltalk.method({
selector: "activate:",
category: 'monster state API',
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("cannot activate a non inactive monster");
return self}, function($ctx1) {$ctx1.fill(self,"activate:",{aMonster:aMonster},smalltalk.CWMonsterState)})},
args: ["aMonster"],
source: "activate: aMonster\x0a\x09self error: 'cannot activate a non inactive monster'.",
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.CWMonsterState);

smalltalk.addMethod(
smalltalk.method({
selector: "changeStateAfterAttacking:",
category: 'private',
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"changeStateAfterAttacking:",{aMonster:aMonster},smalltalk.CWMonsterState)})},
args: ["aMonster"],
source: "changeStateAfterAttacking: aMonster\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.CWMonsterState);

smalltalk.addMethod(
smalltalk.method({
selector: "changeStateAfterMoving:",
category: 'private',
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"changeStateAfterMoving:",{aMonster:aMonster},smalltalk.CWMonsterState)})},
args: ["aMonster"],
source: "changeStateAfterMoving: aMonster\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.CWMonsterState);

smalltalk.addMethod(
smalltalk.method({
selector: "checkForNextTurn:",
category: 'monster state API',
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"checkForNextTurn:",{aMonster:aMonster},smalltalk.CWMonsterState)})},
args: ["aMonster"],
source: "checkForNextTurn: aMonster\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.CWMonsterState);

smalltalk.addMethod(
smalltalk.method({
selector: "desactivate:",
category: 'monster state API',
fn: function (aMonster){
var self=this;
function $CWInactive(){return smalltalk.CWInactive||(typeof CWInactive=="undefined"?nil:CWInactive)}
return smalltalk.withContext(function($ctx1) { 
_st(aMonster)._changeState_($CWInactive());
return self}, function($ctx1) {$ctx1.fill(self,"desactivate:",{aMonster:aMonster},smalltalk.CWMonsterState)})},
args: ["aMonster"],
source: "desactivate: aMonster\x0a\x09aMonster changeState: CWInactive",
messageSends: ["changeState:"],
referencedClasses: ["CWInactive"]
}),
smalltalk.CWMonsterState);

smalltalk.addMethod(
smalltalk.method({
selector: "monster:attackNeighbour:inContext:",
category: 'private',
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
args: ["aMonster", "anotherMonster", "gameContext"],
source: "monster: aMonster attackNeighbour: anotherMonster inContext: gameContext\x0a\x09\x0a\x09self changeStateAfterAttacking: aMonster.\x0a    aMonster root removeSelection.\x0a\x0a\x09aMonster rollDicesCallBack: [ :diceRes |\x0a\x09\x09anotherMonster removeHP: diceRes kills.\x0a        aMonster select: gameContext.\x0a\x09\x09aMonster checkForNextTurn.\x0a\x09\x09aMonster updateMonstersAndGOTs ]",
messageSends: ["changeStateAfterAttacking:", "removeSelection", "root", "rollDicesCallBack:", "removeHP:", "kills", "select:", "checkForNextTurn", "updateMonstersAndGOTs"],
referencedClasses: []
}),
smalltalk.CWMonsterState);

smalltalk.addMethod(
smalltalk.method({
selector: "monster:attackTo:inContext:",
category: 'monster state API',
fn: function (aMonster,aCell,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"monster:attackTo:inContext:",{aMonster:aMonster,aCell:aCell,gameContext:gameContext},smalltalk.CWMonsterState)})},
args: ["aMonster", "aCell", "gameContext"],
source: "monster: aMonster attackTo: aCell inContext: gameContext\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.CWMonsterState);

smalltalk.addMethod(
smalltalk.method({
selector: "monster:moveTo:inContext:",
category: 'monster state API',
fn: function (aMonster,aCell,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aMonster)._moveTo_inContext_callback_(aCell,gameContext,(function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"monster:moveTo:inContext:",{aMonster:aMonster,aCell:aCell,gameContext:gameContext},smalltalk.CWMonsterState)})},
args: ["aMonster", "aCell", "gameContext"],
source: "monster: aMonster moveTo: aCell inContext: gameContext\x0a\x09aMonster moveTo: aCell inContext: gameContext callback: []",
messageSends: ["moveTo:inContext:callback:"],
referencedClasses: []
}),
smalltalk.CWMonsterState);

smalltalk.addMethod(
smalltalk.method({
selector: "readyToPick:",
category: 'monster state API',
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("cannot prepare a monster for picking if he is not Inactive");
return self}, function($ctx1) {$ctx1.fill(self,"readyToPick:",{aMonster:aMonster},smalltalk.CWMonsterState)})},
args: ["aMonster"],
source: "readyToPick: aMonster\x0a\x09self error: 'cannot prepare a monster for picking if he is not Inactive'.",
messageSends: ["error:"],
referencedClasses: []
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



smalltalk.addClass('CWActive', smalltalk.CWMonsterState, [], 'Easnoth-States');
smalltalk.CWActive.comment="Monster can move and attack"
smalltalk.addMethod(
smalltalk.method({
selector: "cell:ToMoveBeforeAttack:",
category: 'monster state API',
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
args: ["cell1", "cellLast"],
source: "cell: cell1 ToMoveBeforeAttack: cellLast\x0a\x09\x22Assumes that the monster is at cell1 and want to attack cellLast, which is not a neighbour.\x0a\x09Answers the closest cell from cell1 that the current monster can reach to attack cellLast's monster\x22\x0a\x0a\x09| possibleCells closestCell shortestPath |\x0a\x09possibleCells := cellLast neighbours select: [:each |\x0a\x09\x09each state = CWFreeSelected default ].\x0a\x09shortestPath := 9999.\x0a\x09possibleCells do: [ :each | \x0a\x09\x09| pathSize |\x0a\x09\x09pathSize := (cell1 pathTo: each) size.\x0a\x09\x09pathSize < shortestPath \x0a\x09\x09\x09ifTrue: [ \x0a\x09\x09\x09\x09shortestPath := pathSize.\x0a\x09\x09\x09\x09closestCell := each ] ].\x0a\x09^ closestCell",
messageSends: ["select:", "=", "default", "state", "neighbours", "do:", "size", "pathTo:", "ifTrue:", "<"],
referencedClasses: ["CWFreeSelected"]
}),
smalltalk.CWActive);

smalltalk.addMethod(
smalltalk.method({
selector: "changeStateAfterAttacking:",
category: 'private',
fn: function (aMonster){
var self=this;
function $CWHasAttacked(){return smalltalk.CWHasAttacked||(typeof CWHasAttacked=="undefined"?nil:CWHasAttacked)}
return smalltalk.withContext(function($ctx1) { 
_st(aMonster)._changeState_($CWHasAttacked());
return self}, function($ctx1) {$ctx1.fill(self,"changeStateAfterAttacking:",{aMonster:aMonster},smalltalk.CWActive)})},
args: ["aMonster"],
source: "changeStateAfterAttacking: aMonster\x0a\x09aMonster changeState: CWHasAttacked",
messageSends: ["changeState:"],
referencedClasses: ["CWHasAttacked"]
}),
smalltalk.CWActive);

smalltalk.addMethod(
smalltalk.method({
selector: "changeStateAfterMoving:",
category: 'private',
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
args: ["aMonster"],
source: "changeStateAfterMoving: aMonster\x0a\x09aMonster currentMove = 0 \x0a\x09\x09ifTrue: [ aMonster changeState: CWHasMoved ]",
messageSends: ["ifTrue:", "changeState:", "=", "currentMove"],
referencedClasses: ["CWHasMoved"]
}),
smalltalk.CWActive);

smalltalk.addMethod(
smalltalk.method({
selector: "checkForNextTurn:",
category: 'monster state API',
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"checkForNextTurn:",{aMonster:aMonster},smalltalk.CWActive)})},
args: ["aMonster"],
source: "checkForNextTurn: aMonster\x0a\x09\x22do nothing for now\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWActive);

smalltalk.addMethod(
smalltalk.method({
selector: "monster:attackTo:inContext:",
category: 'monster state API',
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
return _st(aMonster)._updateMonstersAndGOTs();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
};
return self}, function($ctx1) {$ctx1.fill(self,"monster:attackTo:inContext:",{aMonster:aMonster,aCell:aCell,gameContext:gameContext,toMoveCell:toMoveCell},smalltalk.CWActive)})},
args: ["aMonster", "aCell", "gameContext"],
source: "monster: aMonster attackTo: aCell inContext: gameContext\x0a\x09| toMoveCell |\x0a\x09(aCell neighbours includes: aMonster parent) \x0a\x09\x09ifFalse: [ \x0a\x09\x09\x09toMoveCell := self cell: aMonster parent ToMoveBeforeAttack: aCell.\x0a\x09\x09\x09aMonster moveTo: toMoveCell inContext: gameContext callback: [\x0a\x09\x09\x09\x09aMonster attackTo: aCell inContext: gameContext.\x0a\x09\x09\x09\x09aMonster updateMonstersAndGOTs ] ] \x0a\x09\x09ifTrue: [ aMonster attackNeighbour: aCell monster inContext: gameContext ]",
messageSends: ["ifFalse:ifTrue:", "cell:ToMoveBeforeAttack:", "parent", "moveTo:inContext:callback:", "attackTo:inContext:", "updateMonstersAndGOTs", "attackNeighbour:inContext:", "monster", "includes:", "neighbours"],
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
selector: "changeStateAfterAttacking:",
category: 'private',
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("seemingly the monster attacked whereas he had already attacked previously in his turn. cannot happen");
return self}, function($ctx1) {$ctx1.fill(self,"changeStateAfterAttacking:",{aMonster:aMonster},smalltalk.CWHasAttacked)})},
args: ["aMonster"],
source: "changeStateAfterAttacking: aMonster\x0a\x09self error: 'seemingly the monster attacked whereas he had already attacked previously in his turn. cannot happen'",
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.CWHasAttacked);

smalltalk.addMethod(
smalltalk.method({
selector: "changeStateAfterMoving:",
category: 'private',
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
args: ["aMonster"],
source: "changeStateAfterMoving: aMonster\x0a\x09aMonster currentMove = 0 \x0a\x09\x09ifTrue: [ aMonster changeState: CWInactive ]",
messageSends: ["ifTrue:", "changeState:", "=", "currentMove"],
referencedClasses: ["CWInactive"]
}),
smalltalk.CWHasAttacked);

smalltalk.addMethod(
smalltalk.method({
selector: "checkForNextTurn:",
category: 'monster state API',
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"checkForNextTurn:",{aMonster:aMonster},smalltalk.CWHasAttacked)})},
args: ["aMonster"],
source: "checkForNextTurn: aMonster\x0a\x09\x22do nothing for now\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWHasAttacked);

smalltalk.addMethod(
smalltalk.method({
selector: "monster:attackTo:inContext:",
category: 'monster state API',
fn: function (aMonster,aCell,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("seemingly the monster is trying to attack whereas he has already attacked previously in this turn. cannot happen");
return self}, function($ctx1) {$ctx1.fill(self,"monster:attackTo:inContext:",{aMonster:aMonster,aCell:aCell,gameContext:gameContext},smalltalk.CWHasAttacked)})},
args: ["aMonster", "aCell", "gameContext"],
source: "monster: aMonster attackTo: aCell inContext: gameContext\x0a\x09self error: 'seemingly the monster is trying to attack whereas he has already attacked previously in this turn. cannot happen'.",
messageSends: ["error:"],
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



smalltalk.addClass('CWHasMoved', smalltalk.CWMonsterState, [], 'Easnoth-States');
smalltalk.CWHasMoved.comment="The monster has moved its full moved there. (currentMove = 0)"
smalltalk.addMethod(
smalltalk.method({
selector: "changeStateAfterAttacking:",
category: 'private',
fn: function (aMonster){
var self=this;
function $CWInactive(){return smalltalk.CWInactive||(typeof CWInactive=="undefined"?nil:CWInactive)}
return smalltalk.withContext(function($ctx1) { 
_st(aMonster)._changeState_($CWInactive());
return self}, function($ctx1) {$ctx1.fill(self,"changeStateAfterAttacking:",{aMonster:aMonster},smalltalk.CWHasMoved)})},
args: ["aMonster"],
source: "changeStateAfterAttacking: aMonster\x0a\x09aMonster changeState: CWInactive",
messageSends: ["changeState:"],
referencedClasses: ["CWInactive"]
}),
smalltalk.CWHasMoved);

smalltalk.addMethod(
smalltalk.method({
selector: "changeStateAfterMoving:",
category: 'private',
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("seemingly the monster moved whereas he had already moved its full move previously in his turn. cannot happen");
return self}, function($ctx1) {$ctx1.fill(self,"changeStateAfterMoving:",{aMonster:aMonster},smalltalk.CWHasMoved)})},
args: ["aMonster"],
source: "changeStateAfterMoving: aMonster\x0a\x09self error: 'seemingly the monster moved whereas he had already moved its full move previously in his turn. cannot happen'",
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.CWHasMoved);

smalltalk.addMethod(
smalltalk.method({
selector: "checkForNextTurn:",
category: 'monster state public API',
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
args: ["aMonster"],
source: "checkForNextTurn: aMonster\x0a\x09| col |\x0a\x09col := \x09aMonster parent attackableNeighboursCycle: aMonster range fromSide: aMonster side.\x0a\x09col ifEmpty: [ aMonster announce: CWNextTurnEvent new ]",
messageSends: ["attackableNeighboursCycle:fromSide:", "range", "side", "parent", "ifEmpty:", "announce:", "new"],
referencedClasses: ["CWNextTurnEvent"]
}),
smalltalk.CWHasMoved);

smalltalk.addMethod(
smalltalk.method({
selector: "monster:attackTo:inContext:",
category: 'monster state public API',
fn: function (aMonster,aCell,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aMonster)._attackNeighbour_inContext_(_st(aCell)._monster(),gameContext);
return self}, function($ctx1) {$ctx1.fill(self,"monster:attackTo:inContext:",{aMonster:aMonster,aCell:aCell,gameContext:gameContext},smalltalk.CWHasMoved)})},
args: ["aMonster", "aCell", "gameContext"],
source: "monster: aMonster attackTo: aCell inContext: gameContext\x0a\x09aMonster attackNeighbour: aCell monster inContext: gameContext",
messageSends: ["attackNeighbour:inContext:", "monster"],
referencedClasses: []
}),
smalltalk.CWHasMoved);

smalltalk.addMethod(
smalltalk.method({
selector: "monster:moveTo:inContext:",
category: 'monster state public API',
fn: function (aMonster,aCell,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("seemingly the monster is trying to move whereas he has already moved his full move stat. cannot happen");
return self}, function($ctx1) {$ctx1.fill(self,"monster:moveTo:inContext:",{aMonster:aMonster,aCell:aCell,gameContext:gameContext},smalltalk.CWHasMoved)})},
args: ["aMonster", "aCell", "gameContext"],
source: "monster: aMonster moveTo: aCell inContext: gameContext\x0a\x09self error: 'seemingly the monster is trying to move whereas he has already moved his full move stat. cannot happen'.",
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.CWHasMoved);

smalltalk.addMethod(
smalltalk.method({
selector: "select:inContext:",
category: 'monster state public API',
fn: function (aMonster,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(aMonster)._parent())._attackableNeighboursCycle_fromSide_(_st(aMonster)._range(),_st(aMonster)._side());
_st(gameContext)._currentMonster_(aMonster);
return self}, function($ctx1) {$ctx1.fill(self,"select:inContext:",{aMonster:aMonster,gameContext:gameContext},smalltalk.CWHasMoved)})},
args: ["aMonster", "gameContext"],
source: "select: aMonster inContext: gameContext\x0a\x09aMonster parent attackableNeighboursCycle: aMonster range fromSide: aMonster side.\x0a\x09gameContext currentMonster: aMonster",
messageSends: ["attackableNeighboursCycle:fromSide:", "range", "side", "parent", "currentMonster:"],
referencedClasses: []
}),
smalltalk.CWHasMoved);



smalltalk.addClass('CWInactive', smalltalk.CWMonsterState, [], 'Easnoth-States');
smalltalk.CWInactive.comment="Monster cannot do anything :)"
smalltalk.addMethod(
smalltalk.method({
selector: "activate:",
category: 'monster state API',
fn: function (aMonster){
var self=this;
function $CWActive(){return smalltalk.CWActive||(typeof CWActive=="undefined"?nil:CWActive)}
return smalltalk.withContext(function($ctx1) { 
_st(aMonster)._changeState_($CWActive());
_st(aMonster)._currentMove_(_st(aMonster)._move());
return self}, function($ctx1) {$ctx1.fill(self,"activate:",{aMonster:aMonster},smalltalk.CWInactive)})},
args: ["aMonster"],
source: "activate: aMonster\x0a\x09aMonster changeState: CWActive.\x0a\x09aMonster currentMove: aMonster move",
messageSends: ["changeState:", "currentMove:", "move"],
referencedClasses: ["CWActive"]
}),
smalltalk.CWInactive);

smalltalk.addMethod(
smalltalk.method({
selector: "changeStateAfterAttacking:",
category: 'private',
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("seemingly the monster has attacked whereas he is Inactive. cannot happen");
return self}, function($ctx1) {$ctx1.fill(self,"changeStateAfterAttacking:",{aMonster:aMonster},smalltalk.CWInactive)})},
args: ["aMonster"],
source: "changeStateAfterAttacking: aMonster\x0a\x09self error: 'seemingly the monster has attacked whereas he is Inactive. cannot happen'.",
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.CWInactive);

smalltalk.addMethod(
smalltalk.method({
selector: "changeStateAfterMoving:",
category: 'private',
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("seemingly the monster has moved whereas he is Inactive. cannot happen");
return self}, function($ctx1) {$ctx1.fill(self,"changeStateAfterMoving:",{aMonster:aMonster},smalltalk.CWInactive)})},
args: ["aMonster"],
source: "changeStateAfterMoving: aMonster\x0a\x09self error: 'seemingly the monster has moved whereas he is Inactive. cannot happen'.",
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.CWInactive);

smalltalk.addMethod(
smalltalk.method({
selector: "checkForNextTurn:",
category: 'monster state API',
fn: function (aMonster){
var self=this;
function $CWNextTurnEvent(){return smalltalk.CWNextTurnEvent||(typeof CWNextTurnEvent=="undefined"?nil:CWNextTurnEvent)}
return smalltalk.withContext(function($ctx1) { 
_st(aMonster)._announce_(_st($CWNextTurnEvent())._new());
return self}, function($ctx1) {$ctx1.fill(self,"checkForNextTurn:",{aMonster:aMonster},smalltalk.CWInactive)})},
args: ["aMonster"],
source: "checkForNextTurn: aMonster\x0a\x09aMonster announce: CWNextTurnEvent new",
messageSends: ["announce:", "new"],
referencedClasses: ["CWNextTurnEvent"]
}),
smalltalk.CWInactive);

smalltalk.addMethod(
smalltalk.method({
selector: "desactivate:",
category: 'monster state API',
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"desactivate:",{aMonster:aMonster},smalltalk.CWInactive)})},
args: ["aMonster"],
source: "desactivate: aMonster\x0a\x09\x22Do nothing already inactive\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWInactive);

smalltalk.addMethod(
smalltalk.method({
selector: "monster:attackTo:inContext:",
category: 'monster state API',
fn: function (aMonster,aCell,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("seemingly the monster is trying to attack whereas he is inactive. cannot happen");
return self}, function($ctx1) {$ctx1.fill(self,"monster:attackTo:inContext:",{aMonster:aMonster,aCell:aCell,gameContext:gameContext},smalltalk.CWInactive)})},
args: ["aMonster", "aCell", "gameContext"],
source: "monster: aMonster attackTo: aCell inContext: gameContext\x0a\x09self error: 'seemingly the monster is trying to attack whereas he is inactive. cannot happen'.",
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.CWInactive);

smalltalk.addMethod(
smalltalk.method({
selector: "monster:moveTo:inContext:",
category: 'monster state API',
fn: function (aMonster,aCell,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("seemingly the monster is trying to move whereas he is inactive. cannot happen");
return self}, function($ctx1) {$ctx1.fill(self,"monster:moveTo:inContext:",{aMonster:aMonster,aCell:aCell,gameContext:gameContext},smalltalk.CWInactive)})},
args: ["aMonster", "aCell", "gameContext"],
source: "monster: aMonster moveTo: aCell inContext: gameContext\x0a\x09self error: 'seemingly the monster is trying to move whereas he is inactive. cannot happen'.",
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.CWInactive);

smalltalk.addMethod(
smalltalk.method({
selector: "readyToPick:",
category: 'monster state API',
fn: function (aMonster){
var self=this;
function $CWToPick(){return smalltalk.CWToPick||(typeof CWToPick=="undefined"?nil:CWToPick)}
return smalltalk.withContext(function($ctx1) { 
_st(aMonster)._changeState_($CWToPick());
return self}, function($ctx1) {$ctx1.fill(self,"readyToPick:",{aMonster:aMonster},smalltalk.CWInactive)})},
args: ["aMonster"],
source: "readyToPick: aMonster\x0a\x09aMonster changeState: CWToPick",
messageSends: ["changeState:"],
referencedClasses: ["CWToPick"]
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
selector: "changeStateAfterAttacking:",
category: 'private',
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("seemingly the monster has attacked whereas the game is in a picking phase. cannot happen");
return self}, function($ctx1) {$ctx1.fill(self,"changeStateAfterAttacking:",{aMonster:aMonster},smalltalk.CWToPick)})},
args: ["aMonster"],
source: "changeStateAfterAttacking: aMonster\x0a\x09self error: 'seemingly the monster has attacked whereas the game is in a picking phase. cannot happen'.",
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.CWToPick);

smalltalk.addMethod(
smalltalk.method({
selector: "changeStateAfterMoving:",
category: 'private',
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("seemingly the monster has moved whereas the game is in a picking phase. cannot happen");
return self}, function($ctx1) {$ctx1.fill(self,"changeStateAfterMoving:",{aMonster:aMonster},smalltalk.CWToPick)})},
args: ["aMonster"],
source: "changeStateAfterMoving: aMonster\x0a\x09self error: 'seemingly the monster has moved whereas the game is in a picking phase. cannot happen'.",
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.CWToPick);

smalltalk.addMethod(
smalltalk.method({
selector: "checkForNextTurn:",
category: 'monster state public API',
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("seemingly the game is checking if the player has finished to play whereas the game is in a picking phase. cannot happen");
return self}, function($ctx1) {$ctx1.fill(self,"checkForNextTurn:",{aMonster:aMonster},smalltalk.CWToPick)})},
args: ["aMonster"],
source: "checkForNextTurn: aMonster\x0a\x09self error: 'seemingly the game is checking if the player has finished to play whereas the game is in a picking phase. cannot happen'.",
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.CWToPick);

smalltalk.addMethod(
smalltalk.method({
selector: "monster:attackTo:inContext:",
category: 'monster state public API',
fn: function (aMonster,aCell,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("seemingly the monster is trying to attack whereas the game is in a picking phase. cannot happen");
return self}, function($ctx1) {$ctx1.fill(self,"monster:attackTo:inContext:",{aMonster:aMonster,aCell:aCell,gameContext:gameContext},smalltalk.CWToPick)})},
args: ["aMonster", "aCell", "gameContext"],
source: "monster: aMonster attackTo: aCell inContext: gameContext\x0a\x09self error: 'seemingly the monster is trying to attack whereas the game is in a picking phase. cannot happen'.",
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.CWToPick);

smalltalk.addMethod(
smalltalk.method({
selector: "monster:moveTo:inContext:",
category: 'monster state public API',
fn: function (aMonster,aCell,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("seemingly the monster is trying to move whereas the game is in a picking phase. cannot happen");
return self}, function($ctx1) {$ctx1.fill(self,"monster:moveTo:inContext:",{aMonster:aMonster,aCell:aCell,gameContext:gameContext},smalltalk.CWToPick)})},
args: ["aMonster", "aCell", "gameContext"],
source: "monster: aMonster moveTo: aCell inContext: gameContext\x0a\x09self error: 'seemingly the monster is trying to move whereas the game is in a picking phase. cannot happen'.",
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.CWToPick);

smalltalk.addMethod(
smalltalk.method({
selector: "select:inContext:",
category: 'monster state public API',
fn: function (aMonster,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(aMonster)._root())._removeSelection();
_st(_st(aMonster)._root())._desactivateMonsters();
_st(aMonster)._activate();
_st(aMonster)._select_(gameContext);
return self}, function($ctx1) {$ctx1.fill(self,"select:inContext:",{aMonster:aMonster,gameContext:gameContext},smalltalk.CWToPick)})},
args: ["aMonster", "gameContext"],
source: "select: aMonster inContext: gameContext\x0a\x09aMonster root removeSelection.\x0a\x09aMonster root desactivateMonsters.\x0a\x09aMonster activate.\x0a\x09aMonster select: gameContext",
messageSends: ["removeSelection", "root", "desactivateMonsters", "activate", "select:"],
referencedClasses: []
}),
smalltalk.CWToPick);



