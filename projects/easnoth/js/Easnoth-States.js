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
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"canMoveTo:",{cell:cell},smalltalk.CWCellState)})},
args: ["cell"],
source: "canMoveTo: cell\x0a\x09self subclassResponsibility",
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
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"cell:canBeAttackedBy:",{aCell:aCell,side:side},smalltalk.CWCellState)})},
args: ["aCell", "side"],
source: "cell: aCell canBeAttackedBy: side\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
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
return self}, function($ctx1) {$ctx1.fill(self,"removeSelector:",{aCell:aCell},smalltalk.CWCellState)})},
args: ["aCell"],
source: "removeSelector: aCell",
messageSends: [],
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
selector: "mouseClick:context:",
category: 'cell state API',
fn: function (aCell,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(aCell)._root())._showActiveMonsters();
return self}, function($ctx1) {$ctx1.fill(self,"mouseClick:context:",{aCell:aCell,gameContext:gameContext},smalltalk.CWFree)})},
args: ["aCell", "gameContext"],
source: "mouseClick: aCell context: gameContext\x0a\x09aCell root showActiveMonsters",
messageSends: ["showActiveMonsters", "root"],
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
_st(_st(gameContext)._currentMonster())._moveTo_(aCell);
return self}, function($ctx1) {$ctx1.fill(self,"mouseClick:context:",{aCell:aCell,gameContext:gameContext},smalltalk.CWFreeSelected)})},
args: ["aCell", "gameContext"],
source: "mouseClick: aCell context: gameContext\x0a\x09gameContext currentMonster moveTo: aCell",
messageSends: ["moveTo:", "currentMonster"],
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
_st(aCell)._removeGameOverTile();
_st(aCell)._changeState_($CWFree());
return self}, function($ctx1) {$ctx1.fill(self,"removeSelector:",{aCell:aCell},smalltalk.CWFreeSelected)})},
args: ["aCell"],
source: "removeSelector: aCell\x0a\x09aCell removeGameOverTile.\x0a\x09aCell changeState: CWFree",
messageSends: ["removeGameOverTile", "changeState:"],
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
_st(aCell)._removeGameOverTile();
_st(aCell)._changeState_($CWHasMonster());
return self}, function($ctx1) {$ctx1.fill(self,"removeSelector:",{aCell:aCell},smalltalk.CWHasMonsterSelected)})},
args: ["aCell"],
source: "removeSelector: aCell\x0a\x09aCell removeGameOverTile.\x0a\x09aCell changeState: CWHasMonster",
messageSends: ["removeGameOverTile", "changeState:"],
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


smalltalk.addClass('CWHasAttacked', smalltalk.CWMonsterState, [], 'Easnoth-States');
smalltalk.CWHasAttacked.comment="Monster can only move"


smalltalk.addClass('CWInactive', smalltalk.CWMonsterState, [], 'Easnoth-States');
smalltalk.CWInactive.comment="Monster cannot do anything :)"
smalltalk.addMethod(
smalltalk.method({
selector: "select:inContext:",
category: 'monster state API',
fn: function (aMonster,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(aMonster)._root())._showActiveMonsters();
_st(gameContext)._currentMonster_(aMonster);
return self}, function($ctx1) {$ctx1.fill(self,"select:inContext:",{aMonster:aMonster,gameContext:gameContext},smalltalk.CWInactive)})},
args: ["aMonster", "gameContext"],
source: "select: aMonster inContext: gameContext\x0a\x09aMonster root showActiveMonsters.\x0a\x09gameContext currentMonster: aMonster.",
messageSends: ["showActiveMonsters", "root", "currentMonster:"],
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
selector: "select:inContext:",
category: 'not yet classified',
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
args: ["aMonster", "gameContext"],
source: "select: aMonster inContext: gameContext\x0a\x09(aMonster root monstersFromSide: aMonster side) do: [ :each |\x0a\x09\x09each changeState: CWInactive ].\x0a\x09aMonster changeState: CWActive.\x0a\x09aMonster select: gameContext",
messageSends: ["do:", "changeState:", "monstersFromSide:", "side", "root", "select:"],
referencedClasses: ["CWInactive", "CWActive"]
}),
smalltalk.CWToPick);



