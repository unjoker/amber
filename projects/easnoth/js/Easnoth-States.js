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
selector: "mouseClick:",
category: 'cell state API',
fn: function (actionCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subClassResponsbility();
return self}, function($ctx1) {$ctx1.fill(self,"mouseClick:",{actionCell:actionCell},smalltalk.CWCellState)})},
args: ["actionCell"],
source: "mouseClick: actionCell\x0a\x09self subClassResponsbility",
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
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"removeSelector:",{aCell:aCell},smalltalk.CWCellState)})},
args: ["aCell"],
source: "removeSelector: aCell\x0a\x09self subclassResponsibility",
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



smalltalk.addClass('CWFreeSelected', smalltalk.CWCellState, [], 'Easnoth-States');
smalltalk.CWFreeSelected.comment="I am the state of a cell that has no monsters on it, that has a game selector on it.\x0aThe cell cannot be a wall."
smalltalk.addMethod(
smalltalk.method({
selector: "addSelector:",
category: 'cell state API',
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"addSelector:",{aCell:aCell},smalltalk.CWFreeSelected)})},
args: ["aCell"],
source: "addSelector: aCell\x0a\x09\x22self error: 'should not happen'.\x22",
messageSends: [],
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



smalltalk.addClass('CWHasMonsterSelected', smalltalk.CWCellState, [], 'Easnoth-States');
smalltalk.CWHasMonsterSelected.comment="I am the state of a cell that has a monsters on it and a game selector.\x0aThe monster has to be on the opposite side of the current playing monster."
smalltalk.addMethod(
smalltalk.method({
selector: "addSelector:",
category: 'cell state API',
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"addSelector:",{aCell:aCell},smalltalk.CWHasMonsterSelected)})},
args: ["aCell"],
source: "addSelector: aCell\x0a\x09\x22self error: 'should not happen'.\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWHasMonsterSelected);



smalltalk.addClass('CWMonsterState', smalltalk.CWState, [], 'Easnoth-States');


smalltalk.addClass('CWActive', smalltalk.CWMonsterState, [], 'Easnoth-States');
smalltalk.CWActive.comment="Monster can move and attack"


smalltalk.addClass('CWHasAttacked', smalltalk.CWMonsterState, [], 'Easnoth-States');
smalltalk.CWHasAttacked.comment="Monster can only move"


smalltalk.addClass('CWInactive', smalltalk.CWMonsterState, [], 'Easnoth-States');
smalltalk.CWInactive.comment="Monster cannot do anything :)"


smalltalk.addClass('CWToPick', smalltalk.CWMonsterState, [], 'Easnoth-States');
smalltalk.CWToPick.comment="The player has to choice one of the toPick monster to activate them"


