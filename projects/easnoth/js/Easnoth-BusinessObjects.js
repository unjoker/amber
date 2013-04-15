smalltalk.addPackage('Easnoth-BusinessObjects');
smalltalk.addClass('CWComponent', smalltalk.Object, ['parent'], 'Easnoth-BusinessObjects');
smalltalk.CWComponent.comment="I represent a business object of the game. The business objects are managed in a tree : you have a root object that has children (and children can also have children).\x0a\x0aGame logic is implemented in my subclasses. For Displaying, look at CWDrawer."
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.CoreWidget)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.CWComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "announce:",
category: 'event',
fn: function (anEvent){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._announcer())._announce_(anEvent);
return self}, function($ctx1) {$ctx1.fill(self,"announce:",{anEvent:anEvent},smalltalk.CWComponent)})},
args: ["anEvent"],
source: "announce: anEvent\x0a\x09self announcer announce: anEvent",
messageSends: ["announce:", "announcer"],
referencedClasses: []
}),
smalltalk.CWComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "announcer",
category: 'accessing',
fn: function (){
var self=this;
function $CWEasnothAnnouncer(){return smalltalk.CWEasnothAnnouncer||(typeof CWEasnothAnnouncer=="undefined"?nil:CWEasnothAnnouncer)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($CWEasnothAnnouncer())._current();
return $1;
}, function($ctx1) {$ctx1.fill(self,"announcer",{},smalltalk.CWComponent)})},
args: [],
source: "announcer\x0a\x09^ CWEasnothAnnouncer current",
messageSends: ["current"],
referencedClasses: ["CWEasnothAnnouncer"]
}),
smalltalk.CWComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "children",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"children",{},smalltalk.CWComponent)})},
args: [],
source: "children\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.CWComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "desactivateMonsters",
category: 'selection',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._children())._do_((function(child){
return smalltalk.withContext(function($ctx2) {
return _st(child)._desactivateMonsters();
}, function($ctx2) {$ctx2.fillBlock({child:child},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"desactivateMonsters",{},smalltalk.CWComponent)})},
args: [],
source: "desactivateMonsters\x0a\x09self children do: [ :child |\x0a\x09\x09child desactivateMonsters ]",
messageSends: ["do:", "desactivateMonsters", "children"],
referencedClasses: []
}),
smalltalk.CWComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "isLeaf",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isLeaf",{},smalltalk.CWComponent)})},
args: [],
source: "isLeaf\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "isRoot",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isRoot",{},smalltalk.CWComponent)})},
args: [],
source: "isRoot\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "monstersFromSide:",
category: 'selection',
fn: function (aSide){
var self=this;
var col;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1;
col=_st($Array())._new();
_st(_st(self)._children())._collect_((function(child){
return smalltalk.withContext(function($ctx2) {
return _st(col)._addAll_(_st(child)._monstersFromSide_(aSide));
}, function($ctx2) {$ctx2.fillBlock({child:child},$ctx1)})}));
$1=col;
return $1;
}, function($ctx1) {$ctx1.fill(self,"monstersFromSide:",{aSide:aSide,col:col},smalltalk.CWComponent)})},
args: ["aSide"],
source: "monstersFromSide: aSide\x0a\x09| col |\x0a\x09col := Array new.\x0a\x09self children collect: [ :child |\x0a\x09\x09col addAll: (child monstersFromSide: aSide) ].\x0a\x09^ col",
messageSends: ["new", "collect:", "addAll:", "monstersFromSide:", "children"],
referencedClasses: ["Array"]
}),
smalltalk.CWComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "parent",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@parent"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"parent",{},smalltalk.CoreWidget)})},
args: [],
source: "parent\x0a\x09^ parent",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "parent:",
category: 'accessing',
fn: function (object){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@parent"]=object;
return self}, function($ctx1) {$ctx1.fill(self,"parent:",{object:object},smalltalk.CWBusinessObject)})},
args: ["object"],
source: "parent: object\x0a\x09parent := object",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "readyToPickMonsters:",
category: 'selection',
fn: function (playerSide){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._children())._do_((function(child){
return smalltalk.withContext(function($ctx2) {
return _st(child)._readyToPickMonsters_(playerSide);
}, function($ctx2) {$ctx2.fillBlock({child:child},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"readyToPickMonsters:",{playerSide:playerSide},smalltalk.CWComponent)})},
args: ["playerSide"],
source: "readyToPickMonsters: playerSide\x0a\x09self children do: [ :child |\x0a\x09\x09child readyToPickMonsters: playerSide ]",
messageSends: ["do:", "readyToPickMonsters:", "children"],
referencedClasses: []
}),
smalltalk.CWComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "removeSelection",
category: 'selection',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._children())._do_((function(child){
return smalltalk.withContext(function($ctx2) {
return _st(child)._removeSelection();
}, function($ctx2) {$ctx2.fillBlock({child:child},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"removeSelection",{},smalltalk.CWComponent)})},
args: [],
source: "removeSelection\x0a\x09self children do: [ :child |\x0a\x09\x09child removeSelection ]",
messageSends: ["do:", "removeSelection", "children"],
referencedClasses: []
}),
smalltalk.CWComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "root",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=_st(self)._isRoot();
if(smalltalk.assert($1)){
$2=self;
return $2;
};
$3=_st(_st(self)._parent())._root();
return $3;
}, function($ctx1) {$ctx1.fill(self,"root",{},smalltalk.CWComponent)})},
args: [],
source: "root\x0a\x09self isRoot ifTrue: [ ^ self ].\x0a\x09^ self parent root",
messageSends: ["ifTrue:", "isRoot", "root", "parent"],
referencedClasses: []
}),
smalltalk.CWComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "showActiveMonsters",
category: 'selection',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._children())._do_((function(child){
return smalltalk.withContext(function($ctx2) {
return _st(child)._showActiveMonsters();
}, function($ctx2) {$ctx2.fillBlock({child:child},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"showActiveMonsters",{},smalltalk.CWComponent)})},
args: [],
source: "showActiveMonsters\x0a\x09self children do: [ :child |\x0a\x09\x09child showActiveMonsters ]",
messageSends: ["do:", "showActiveMonsters", "children"],
referencedClasses: []
}),
smalltalk.CWComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "updateGOTs",
category: 'event',
fn: function (){
var self=this;
function $CWGOTDrawingEvent(){return smalltalk.CWGOTDrawingEvent||(typeof CWGOTDrawingEvent=="undefined"?nil:CWGOTDrawingEvent)}
return smalltalk.withContext(function($ctx1) { 
_st(self)._announce_(_st($CWGOTDrawingEvent())._new());
return self}, function($ctx1) {$ctx1.fill(self,"updateGOTs",{},smalltalk.CWComponent)})},
args: [],
source: "updateGOTs\x0a\x09self announce: CWGOTDrawingEvent new.",
messageSends: ["announce:", "new"],
referencedClasses: ["CWGOTDrawingEvent"]
}),
smalltalk.CWComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "updateMap",
category: 'event',
fn: function (){
var self=this;
function $CWGlobalDrawingEvent(){return smalltalk.CWGlobalDrawingEvent||(typeof CWGlobalDrawingEvent=="undefined"?nil:CWGlobalDrawingEvent)}
return smalltalk.withContext(function($ctx1) { 
_st(self)._announce_(_st($CWGlobalDrawingEvent())._new());
return self}, function($ctx1) {$ctx1.fill(self,"updateMap",{},smalltalk.CWComponent)})},
args: [],
source: "updateMap\x0a\x09self announce: CWGlobalDrawingEvent new.",
messageSends: ["announce:", "new"],
referencedClasses: ["CWGlobalDrawingEvent"]
}),
smalltalk.CWComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "updateMonstersAndGOTs",
category: 'event',
fn: function (){
var self=this;
function $CWMonsterAndGOTDrawingEvent(){return smalltalk.CWMonsterAndGOTDrawingEvent||(typeof CWMonsterAndGOTDrawingEvent=="undefined"?nil:CWMonsterAndGOTDrawingEvent)}
return smalltalk.withContext(function($ctx1) { 
_st(self)._announce_(_st($CWMonsterAndGOTDrawingEvent())._new());
return self}, function($ctx1) {$ctx1.fill(self,"updateMonstersAndGOTs",{},smalltalk.CWComponent)})},
args: [],
source: "updateMonstersAndGOTs\x0a\x09self announce: CWMonsterAndGOTDrawingEvent new.",
messageSends: ["announce:", "new"],
referencedClasses: ["CWMonsterAndGOTDrawingEvent"]
}),
smalltalk.CWComponent);



smalltalk.addClass('CWComposite', smalltalk.CWComponent, [], 'Easnoth-BusinessObjects');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.CWComposite)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.CWComposite);

smalltalk.addMethod(
smalltalk.method({
selector: "childAt:",
category: 'children management',
fn: function (index){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._children())._at_(index);
return $1;
}, function($ctx1) {$ctx1.fill(self,"childAt:",{index:index},smalltalk.CWComposite)})},
args: ["index"],
source: "childAt: index \x0a\x09^ self children at: index",
messageSends: ["at:", "children"],
referencedClasses: []
}),
smalltalk.CWComposite);

smalltalk.addMethod(
smalltalk.method({
selector: "children",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"children",{},smalltalk.CWComposite)})},
args: [],
source: "children\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.CWComposite);

smalltalk.addMethod(
smalltalk.method({
selector: "newChild:",
category: 'factory',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(aClass)._new())._parent_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"newChild:",{aClass:aClass},smalltalk.CWComposite)})},
args: ["aClass"],
source: "newChild: aClass\x0a\x09^ aClass new parent: self",
messageSends: ["parent:", "new"],
referencedClasses: []
}),
smalltalk.CWComposite);



smalltalk.addClass('CWCell', smalltalk.CWComposite, ['neighboursCache', 'background', 'gameOverTile', 'monster', 'state', 'prevCell'], 'Easnoth-BusinessObjects');
smalltalk.CWCell.comment="I represent an hexagon cell in the map."
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitCell_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.CWCell)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitCell: self ",
messageSends: ["visitCell:"],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "addMonster:",
category: 'state delegation',
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._state())._cell_addMonster_(self,aMonster);
return self}, function($ctx1) {$ctx1.fill(self,"addMonster:",{aMonster:aMonster},smalltalk.CWCell)})},
args: ["aMonster"],
source: "addMonster: aMonster\x0a\x09self state cell: self addMonster: aMonster",
messageSends: ["cell:addMonster:", "state"],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "addSelector",
category: 'state delegation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._state())._addSelector_(self);
return self}, function($ctx1) {$ctx1.fill(self,"addSelector",{},smalltalk.CWCell)})},
args: [],
source: "addSelector\x0a\x09self state addSelector: self",
messageSends: ["addSelector:", "state"],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "addSelectorColored:",
category: 'selection',
fn: function (aColor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._gameOverTile_(_st(_st(self)._newGameOverTile())._initializeFromKey_(aColor));
return self}, function($ctx1) {$ctx1.fill(self,"addSelectorColored:",{aColor:aColor},smalltalk.CWCell)})},
args: ["aColor"],
source: "addSelectorColored: aColor\x0a\x09self gameOverTile: (self newGameOverTile initializeFromKey: aColor)",
messageSends: ["gameOverTile:", "initializeFromKey:", "newGameOverTile"],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "attackableNeighboursCycle:fromSide:",
category: 'neighbourhood',
fn: function (cycleNumber,side){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(_st(self)._root())._removeSelection();
$1=_st(self)._attackableNeighboursFrom_(side);
return $1;
}, function($ctx1) {$ctx1.fill(self,"attackableNeighboursCycle:fromSide:",{cycleNumber:cycleNumber,side:side},smalltalk.CWCell)})},
args: ["cycleNumber", "side"],
source: "attackableNeighboursCycle: cycleNumber fromSide: side\x0a\x09\x22no range attack for now\x22\x0a\x09\x0a\x09self root removeSelection.\x0a\x09\x0a\x09^ self attackableNeighboursFrom: side",
messageSends: ["removeSelection", "root", "attackableNeighboursFrom:"],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "attackableNeighboursFrom:",
category: 'neighbourhood',
fn: function (side){
var self=this;
var attackableCells;
return smalltalk.withContext(function($ctx1) { 
var $1;
attackableCells=_st(_st(self)._neighbours())._select_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._canBeAttackedBy_(side);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
_st(attackableCells)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._addSelector();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$1=attackableCells;
return $1;
}, function($ctx1) {$ctx1.fill(self,"attackableNeighboursFrom:",{side:side,attackableCells:attackableCells},smalltalk.CWCell)})},
args: ["side"],
source: "attackableNeighboursFrom: side\x0a\x09|attackableCells|\x0a\x09attackableCells := self neighbours select: [ :each | \x0a\x09\x09\x09\x09\x09each canBeAttackedBy: side ].\x0a\x09attackableCells do: [ :each |\x0a\x09\x09\x09each addSelector ].\x0a\x09^ attackableCells",
messageSends: ["select:", "canBeAttackedBy:", "neighbours", "do:", "addSelector"],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "background",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@background"];
if(($receiver = $2) == nil || $receiver == undefined){
$1=_st(self)._error_("should be initialized");
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"background",{},smalltalk.CWCell)})},
args: [],
source: "background\x0a\x09^ background ifNil: [ self error: 'should be initialized' ]",
messageSends: ["ifNil:", "error:"],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "backgroundAdd:",
category: 'accessing',
fn: function (aBackground){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._background())._add_(aBackground);
return $1;
}, function($ctx1) {$ctx1.fill(self,"backgroundAdd:",{aBackground:aBackground},smalltalk.CWCell)})},
args: ["aBackground"],
source: "backgroundAdd: aBackground\x0a\x09^ self background add: aBackground",
messageSends: ["add:", "background"],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "backgroundAddAll:",
category: 'accessing',
fn: function (aCol){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._background())._addAll_(aCol);
return $1;
}, function($ctx1) {$ctx1.fill(self,"backgroundAddAll:",{aCol:aCol},smalltalk.CWCell)})},
args: ["aCol"],
source: "backgroundAddAll: aCol\x0a\x09^ self background addAll: aCol",
messageSends: ["addAll:", "background"],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "canBeAttackedBy:",
category: 'state delegation',
fn: function (side){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._state())._cell_canBeAttackedBy_(self,side);
return $1;
}, function($ctx1) {$ctx1.fill(self,"canBeAttackedBy:",{side:side},smalltalk.CWCell)})},
args: ["side"],
source: "canBeAttackedBy: side\x0a\x09^ self state cell: self canBeAttackedBy: side",
messageSends: ["cell:canBeAttackedBy:", "state"],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "canMoveTo",
category: 'state delegation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._state())._canMoveTo_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"canMoveTo",{},smalltalk.CWCell)})},
args: [],
source: "canMoveTo\x0a\x09^ self state canMoveTo: self",
messageSends: ["canMoveTo:", "state"],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "changeState:",
category: 'state machine',
fn: function (stateClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._state_(_st(stateClass)._default());
return self}, function($ctx1) {$ctx1.fill(self,"changeState:",{stateClass:stateClass},smalltalk.CWCell)})},
args: ["stateClass"],
source: "changeState: stateClass\x0a\x09self state: stateClass default",
messageSends: ["state:", "default"],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "children",
category: 'accessing',
fn: function (){
var self=this;
var children;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$5,$3;
children=_st($Array())._new();
$1=_st(self)._monster();
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
var var_;
var_=$receiver;
_st(children)._add_(var_);
};
$2=_st(self)._gameOverTile();
if(($receiver = $2) == nil || $receiver == undefined){
$2;
} else {
var var2;
var2=$receiver;
_st(children)._add_(var2);
};
$4=children;
_st($4)._addAll_(_st(self)._background());
$5=_st($4)._yourself();
$3=$5;
return $3;
}, function($ctx1) {$ctx1.fill(self,"children",{children:children},smalltalk.CWCell)})},
args: [],
source: "children\x0a\x09| children | \x0a\x09children := Array new.\x0a\x09self monster ifNotNil: [ :var |\x0a\x09\x09children add: var ].\x0a\x09self gameOverTile ifNotNil: [ :var2 |\x0a\x09\x09children add: var2 ].\x0a\x09^ children\x0a\x09\x09addAll: self background;\x0a\x09\x09yourself",
messageSends: ["new", "ifNotNil:", "add:", "monster", "gameOverTile", "addAll:", "background", "yourself"],
referencedClasses: ["Array"]
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "free",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._monster())._isNil();
return $1;
}, function($ctx1) {$ctx1.fill(self,"free",{},smalltalk.CWCell)})},
args: [],
source: "free\x0a\x09^ self monster isNil",
messageSends: ["isNil", "monster"],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "gameOverTile",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@gameOverTile"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"gameOverTile",{},smalltalk.CWCell)})},
args: [],
source: "gameOverTile\x0a\x09^ gameOverTile",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "gameOverTile:",
category: 'accessing',
fn: function (aGOT){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@gameOverTile"]=aGOT;
return self}, function($ctx1) {$ctx1.fill(self,"gameOverTile:",{aGOT:aGOT},smalltalk.CWCell)})},
args: ["aGOT"],
source: "gameOverTile: aGOT\x0a\x09gameOverTile := aGOT",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "gameOverTileClass",
category: 'factory',
fn: function (){
var self=this;
function $CWGameOverTile(){return smalltalk.CWGameOverTile||(typeof CWGameOverTile=="undefined"?nil:CWGameOverTile)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=$CWGameOverTile();
return $1;
}, function($ctx1) {$ctx1.fill(self,"gameOverTileClass",{},smalltalk.CWCell)})},
args: [],
source: "gameOverTileClass\x0a\x09^ CWGameOverTile",
messageSends: [],
referencedClasses: ["CWGameOverTile"]
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "herosClass",
category: 'factory',
fn: function (){
var self=this;
function $CWHeros(){return smalltalk.CWHeros||(typeof CWHeros=="undefined"?nil:CWHeros)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=$CWHeros();
return $1;
}, function($ctx1) {$ctx1.fill(self,"herosClass",{},smalltalk.CWCell)})},
args: [],
source: "herosClass\x0a\x09^ CWHeros",
messageSends: [],
referencedClasses: ["CWHeros"]
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeFromJson:",
category: 'initialize-release',
fn: function (aJsonCell){
var self=this;
var elements;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
elements=_st(aJsonCell)._keys();
self["@background"]=_st($Array())._new();
$1=_st(_st(elements)._first()).__eq("tile");
if(smalltalk.assert($1)){
_st(self)._backgroundAdd_(_st(_st(self)._newTile())._initializeFromKey_(_st(aJsonCell)._tile()));
};
$2=_st(elements)._includes_("overtiles");
if(smalltalk.assert($2)){
_st(self)._backgroundAddAll_(_st(_st(aJsonCell)._overtiles())._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(self)._newOverTile())._initializeFromKey_(_st(each)._overtile());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})})));
};
$3=_st(_st(elements)._last()).__eq("heros");
if(smalltalk.assert($3)){
_st(self)._monster_(_st(_st(self)._newHeros())._initializeFromJson_(_st(aJsonCell)._heros()));
};
$4=_st(_st(elements)._last()).__eq("troop");
if(smalltalk.assert($4)){
_st(self)._monster_(_st(_st(self)._newTroop())._initializeFromJson_(_st(aJsonCell)._troop()));
};
return self}, function($ctx1) {$ctx1.fill(self,"initializeFromJson:",{aJsonCell:aJsonCell,elements:elements},smalltalk.CWCell)})},
args: ["aJsonCell"],
source: "initializeFromJson: aJsonCell\x0a    | elements |\x0a    \x0a    elements := aJsonCell keys.\x0a    background := Array new.\x0a\x09\x0a    elements first = 'tile'\x0a    \x09ifTrue: [ self backgroundAdd: (self newTile initializeFromKey: aJsonCell tile) ].\x0a    (elements includes: 'overtiles') \x0a    \x09ifTrue: [ self backgroundAddAll: (aJsonCell overtiles collect: [:each | \x0a\x09\x09\x09self newOverTile initializeFromKey: each overtile] ) ].\x0a    elements last = 'heros'\x0a    \x09ifTrue: [ self monster: (self newHeros initializeFromJson: aJsonCell heros) ].\x0a    elements last = 'troop'\x0a    \x09ifTrue: [ self monster: (self newTroop initializeFromJson: aJsonCell troop) ].",
messageSends: ["keys", "new", "ifTrue:", "backgroundAdd:", "initializeFromKey:", "tile", "newTile", "=", "first", "backgroundAddAll:", "collect:", "overtile", "newOverTile", "overtiles", "includes:", "monster:", "initializeFromJson:", "heros", "newHeros", "last", "troop", "newTroop"],
referencedClasses: ["Array"]
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeState",
category: 'state machine',
fn: function (){
var self=this;
function $CWCellState(){return smalltalk.CWCellState||(typeof CWCellState=="undefined"?nil:CWCellState)}
return smalltalk.withContext(function($ctx1) { 
_st($CWCellState())._initializeStateFor_(self);
return self}, function($ctx1) {$ctx1.fill(self,"initializeState",{},smalltalk.CWCell)})},
args: [],
source: "initializeState\x0a\x09CWCellState initializeStateFor: self",
messageSends: ["initializeStateFor:"],
referencedClasses: ["CWCellState"]
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "mapCoods",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@mapCoods"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"mapCoods",{},smalltalk.CWCell)})},
args: [],
source: "mapCoods\x0a\x09^ mapCoods",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "mapCoods:",
category: 'accessing',
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@mapCoods"]=aPoint;
return self}, function($ctx1) {$ctx1.fill(self,"mapCoods:",{aPoint:aPoint},smalltalk.CWCell)})},
args: ["aPoint"],
source: "mapCoods: aPoint\x0a\x09mapCoods := aPoint.",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "monster",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@monster"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"monster",{},smalltalk.CWCell)})},
args: [],
source: "monster\x0a\x09^ monster",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "monster:",
category: 'accessing',
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@monster"]=aMonster;
return self}, function($ctx1) {$ctx1.fill(self,"monster:",{aMonster:aMonster},smalltalk.CWCell)})},
args: ["aMonster"],
source: "monster: aMonster\x0a\x09monster := aMonster",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "mouseClick:",
category: 'state delegation',
fn: function (gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._state())._mouseClick_context_(self,gameContext);
return self}, function($ctx1) {$ctx1.fill(self,"mouseClick:",{gameContext:gameContext},smalltalk.CWCell)})},
args: ["gameContext"],
source: "mouseClick: gameContext\x0a\x09self state mouseClick: self context: gameContext.",
messageSends: ["mouseClick:context:", "state"],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "movableNeighbours",
category: 'neighbourhood',
fn: function (){
var self=this;
var movableCells;
return smalltalk.withContext(function($ctx1) { 
var $1;
movableCells=_st(_st(self)._neighbours())._select_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._canMoveTo();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
_st(movableCells)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
_st(each)._addSelector();
return _st(each)._prevCell_(self);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$1=movableCells;
return $1;
}, function($ctx1) {$ctx1.fill(self,"movableNeighbours",{movableCells:movableCells},smalltalk.CWCell)})},
args: [],
source: "movableNeighbours\x0a\x09|movableCells|\x0a\x09movableCells := self neighbours select: [ :each | \x0a\x09\x09\x09each canMoveTo ].\x0a\x09movableCells do: [ :each |\x0a\x09\x09\x09each addSelector.\x0a\x09\x09\x09each prevCell: self ].\x0a\x09\x09\x09\x0a\x09^ movableCells",
messageSends: ["select:", "canMoveTo", "neighbours", "do:", "addSelector", "prevCell:"],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "movableNeighboursCycle:",
category: 'neighbourhood',
fn: function (cycleNumber){
var self=this;
var movableCells,tempSet;
function $Set(){return smalltalk.Set||(typeof Set=="undefined"?nil:Set)}
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(_st(self)._root())._removeSelection();
movableCells=[self];
_st((1))._to_do_(cycleNumber,(function(i){
return smalltalk.withContext(function($ctx2) {
tempSet=_st($Set())._new();
tempSet;
_st(movableCells)._do_((function(each){
return smalltalk.withContext(function($ctx3) {
return _st(tempSet)._addAll_(_st(each)._movableNeighbours());
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx1)})}));
return _st(movableCells)._addAll_(tempSet);
}, function($ctx2) {$ctx2.fillBlock({i:i},$ctx1)})}));
$1=movableCells;
return $1;
}, function($ctx1) {$ctx1.fill(self,"movableNeighboursCycle:",{cycleNumber:cycleNumber,movableCells:movableCells,tempSet:tempSet},smalltalk.CWCell)})},
args: ["cycleNumber"],
source: "movableNeighboursCycle: cycleNumber\x0a\x09| movableCells tempSet |\x0a\x09\x0a\x09self root removeSelection.\x0a\x09\x0a\x09movableCells := { self }.\x0a\x091 to: cycleNumber do: [ :i |\x0a\x09\x09tempSet := Set new.\x0a\x09\x09movableCells do: [ :each | tempSet addAll: each movableNeighbours ].\x0a\x09\x09movableCells addAll: tempSet].\x0a\x09\x0a\x09^ movableCells",
messageSends: ["removeSelection", "root", "to:do:", "new", "do:", "addAll:", "movableNeighbours"],
referencedClasses: ["Set"]
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "neighbours",
category: 'neighbourhood',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@neighboursCache"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@neighboursCache"]=_st(_st(self)._parent())._neighboursOf_(self);
$1=self["@neighboursCache"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"neighbours",{},smalltalk.CWCell)})},
args: [],
source: "neighbours\x0a\x09^ neighboursCache ifNil: [ neighboursCache := self parent neighboursOf: self ]",
messageSends: ["ifNil:", "neighboursOf:", "parent"],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "newGameOverTile",
category: 'factory',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._newChild_(_st(self)._gameOverTileClass());
return $1;
}, function($ctx1) {$ctx1.fill(self,"newGameOverTile",{},smalltalk.CWCell)})},
args: [],
source: "newGameOverTile\x0a\x09 ^ self newChild: self gameOverTileClass",
messageSends: ["newChild:", "gameOverTileClass"],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "newHeros",
category: 'factory',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._newChild_(_st(self)._herosClass());
return $1;
}, function($ctx1) {$ctx1.fill(self,"newHeros",{},smalltalk.CWCell)})},
args: [],
source: "newHeros\x0a\x09 ^ self newChild: self herosClass",
messageSends: ["newChild:", "herosClass"],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "newOverTile",
category: 'factory',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._newChild_(_st(self)._overTileClass());
return $1;
}, function($ctx1) {$ctx1.fill(self,"newOverTile",{},smalltalk.CWCell)})},
args: [],
source: "newOverTile\x0a\x09 ^ self newChild: self overTileClass",
messageSends: ["newChild:", "overTileClass"],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "newTile",
category: 'factory',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._newChild_(_st(self)._tileClass());
return $1;
}, function($ctx1) {$ctx1.fill(self,"newTile",{},smalltalk.CWCell)})},
args: [],
source: "newTile\x0a\x09 ^ self newChild: self tileClass ",
messageSends: ["newChild:", "tileClass"],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "newTroop",
category: 'factory',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._newChild_(_st(self)._troopClass());
return $1;
}, function($ctx1) {$ctx1.fill(self,"newTroop",{},smalltalk.CWCell)})},
args: [],
source: "newTroop\x0a\x09 ^ self newChild: self troopClass",
messageSends: ["newChild:", "troopClass"],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "overTileClass",
category: 'factory',
fn: function (){
var self=this;
function $CWOverTile(){return smalltalk.CWOverTile||(typeof CWOverTile=="undefined"?nil:CWOverTile)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=$CWOverTile();
return $1;
}, function($ctx1) {$ctx1.fill(self,"overTileClass",{},smalltalk.CWCell)})},
args: [],
source: "overTileClass\x0a\x09^ CWOverTile",
messageSends: [],
referencedClasses: ["CWOverTile"]
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "pathTo:",
category: 'neighbourhood',
fn: function (cellLast){
var self=this;
var path;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1;
path=_st($Array())._with_(cellLast);
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self).__eq(_st(path)._last());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileFalse_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(path)._add_(_st(_st(path)._last())._prevCell());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$1=path;
return $1;
}, function($ctx1) {$ctx1.fill(self,"pathTo:",{cellLast:cellLast,path:path},smalltalk.CWCell)})},
args: ["cellLast"],
source: "pathTo: cellLast\x0a\x09\x22Assumes that some cells are selected and that the player clicked on a selected cell.\x0a\x09Answers the shortest path from the current cell to the cell clicked\x22\x0a\x0a\x09| path |\x0a\x09path := Array with: cellLast.\x0a\x09[ self = path last ] whileFalse: [ path add: path last prevCell ].\x0a\x09^ path",
messageSends: ["with:", "whileFalse:", "add:", "prevCell", "last", "="],
referencedClasses: ["Array"]
}),
smalltalk.CWCell);

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
}, function($ctx1) {$ctx1.fill(self,"prevCell",{},smalltalk.CWCell)})},
args: [],
source: "prevCell\x0a\x09^ prevCell",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "prevCell:",
category: 'accessing',
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@prevCell"]=aCell;
return self}, function($ctx1) {$ctx1.fill(self,"prevCell:",{aCell:aCell},smalltalk.CWCell)})},
args: ["aCell"],
source: "prevCell: aCell\x0a\x09prevCell := aCell",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
category: 'printing',
fn: function (aStream){
var self=this;
var rowNumber,row,cellIndex;
return smalltalk.withContext(function($ctx1) { 
row=_st(self)._parent();
cellIndex=_st(_st(row)._cells())._indexOf_(self);
rowNumber=_st(_st(_st(row)._parent())._rows())._indexOf_(row);
_st(_st(_st(_st(_st(aStream).__lt_lt("a Cell(")).__lt_lt(_st(rowNumber)._printString())).__lt_lt("-")).__lt_lt(_st(cellIndex)._printString())).__lt_lt(")");
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream,rowNumber:rowNumber,row:row,cellIndex:cellIndex},smalltalk.CWCell)})},
args: ["aStream"],
source: "printOn: aStream\x0a\x09\x22to debug only\x22\x0a\x0a\x09| rowNumber row cellIndex |\x0a\x09row := self parent.\x0a\x09cellIndex := row cells indexOf: self.\x0a\x09rowNumber := row parent rows indexOf: row.\x0a\x09aStream << 'a Cell(' << rowNumber printString << '-' << cellIndex printString << ')'",
messageSends: ["parent", "indexOf:", "cells", "rows", "<<", "printString"],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "removeGameOverTile",
category: 'selection',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._gameOverTile_(nil);
return self}, function($ctx1) {$ctx1.fill(self,"removeGameOverTile",{},smalltalk.CWCell)})},
args: [],
source: "removeGameOverTile\x0a\x09self gameOverTile: nil",
messageSends: ["gameOverTile:"],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "removeMonster",
category: 'state delegation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._state())._removeMonster_(self);
return self}, function($ctx1) {$ctx1.fill(self,"removeMonster",{},smalltalk.CWCell)})},
args: [],
source: "removeMonster\x0a\x09self state removeMonster: self",
messageSends: ["removeMonster:", "state"],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "removeSelection",
category: 'state delegation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._state())._removeSelector_(self);
return self}, function($ctx1) {$ctx1.fill(self,"removeSelection",{},smalltalk.CWCell)})},
args: [],
source: "removeSelection\x0a\x09self state removeSelector: self",
messageSends: ["removeSelector:", "state"],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "selectableNeighboursMoveCycle:attackCycle:fromSide:",
category: 'neighbourhood',
fn: function (cycleNumber,cycleNumber2,side){
var self=this;
var selectableCells,tempSet;
function $Set(){return smalltalk.Set||(typeof Set=="undefined"?nil:Set)}
return smalltalk.withContext(function($ctx1) { 
var $1;
selectableCells=_st(self)._movableNeighboursCycle_(cycleNumber);
tempSet=_st($Set())._new();
_st(selectableCells)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(tempSet)._addAll_(_st(each)._attackableNeighboursFrom_(side));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
_st(selectableCells)._addAll_(tempSet);
$1=selectableCells;
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectableNeighboursMoveCycle:attackCycle:fromSide:",{cycleNumber:cycleNumber,cycleNumber2:cycleNumber2,side:side,selectableCells:selectableCells,tempSet:tempSet},smalltalk.CWCell)})},
args: ["cycleNumber", "cycleNumber2", "side"],
source: "selectableNeighboursMoveCycle: cycleNumber attackCycle: cycleNumber2 fromSide: side\x0a\x09| selectableCells tempSet |\x0a\x0a\x09\x22movable cells\x22\x0a\x09selectableCells := self movableNeighboursCycle: cycleNumber.\x0a\x0a\x09 \x22all attackable cells from any movable cell\x22\x0a\x09 tempSet := Set new.\x0a\x09 selectableCells do: [ :each | tempSet addAll: (each attackableNeighboursFrom: side) ].\x0a\x09 selectableCells addAll: tempSet.\x0a\x0a\x09^ selectableCells",
messageSends: ["movableNeighboursCycle:", "new", "do:", "addAll:", "attackableNeighboursFrom:"],
referencedClasses: ["Set"]
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "showActiveMonsters",
category: 'state delegation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._state())._showActiveMonster_(self);
return self}, function($ctx1) {$ctx1.fill(self,"showActiveMonsters",{},smalltalk.CWCell)})},
args: [],
source: "showActiveMonsters\x0a\x09self state showActiveMonster: self.",
messageSends: ["showActiveMonster:", "state"],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "side",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._monster())._side();
return $1;
}, function($ctx1) {$ctx1.fill(self,"side",{},smalltalk.CWCell)})},
args: [],
source: "side\x0a\x09^ self monster side",
messageSends: ["side", "monster"],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "state",
category: 'state machine',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@state"];
if(($receiver = $1) == nil || $receiver == undefined){
_st(self)._initializeState();
} else {
$1;
};
$2=self["@state"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"state",{},smalltalk.CWCell)})},
args: [],
source: "state\x0a\x09state ifNil: [self initializeState].\x0a\x09^state",
messageSends: ["ifNil:", "initializeState"],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "state:",
category: 'state machine',
fn: function (aState){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@state"]=aState;
return self}, function($ctx1) {$ctx1.fill(self,"state:",{aState:aState},smalltalk.CWCell)})},
args: ["aState"],
source: "state: aState\x0a\x09state := aState",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "tileClass",
category: 'factory',
fn: function (){
var self=this;
function $CWTile(){return smalltalk.CWTile||(typeof CWTile=="undefined"?nil:CWTile)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=$CWTile();
return $1;
}, function($ctx1) {$ctx1.fill(self,"tileClass",{},smalltalk.CWCell)})},
args: [],
source: "tileClass\x0a\x09^ CWTile",
messageSends: [],
referencedClasses: ["CWTile"]
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "troopClass",
category: 'factory',
fn: function (){
var self=this;
function $CWTroop(){return smalltalk.CWTroop||(typeof CWTroop=="undefined"?nil:CWTroop)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=$CWTroop();
return $1;
}, function($ctx1) {$ctx1.fill(self,"troopClass",{},smalltalk.CWCell)})},
args: [],
source: "troopClass\x0a\x09^ CWTroop",
messageSends: [],
referencedClasses: ["CWTroop"]
}),
smalltalk.CWCell);



smalltalk.addClass('CWOneChildClass', smalltalk.CWComposite, [], 'Easnoth-BusinessObjects');
smalltalk.CWOneChildClass.comment="I am a standard composite except that all my children have the same class."
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.CWOneChildClass)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.CWOneChildClass);

smalltalk.addMethod(
smalltalk.method({
selector: "addChild:",
category: 'children management',
fn: function (object){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._children())._add_(object);
return $1;
}, function($ctx1) {$ctx1.fill(self,"addChild:",{object:object},smalltalk.CWOneChildClass)})},
args: ["object"],
source: "addChild: object\x0a\x09^ self children add: object",
messageSends: ["add:", "children"],
referencedClasses: []
}),
smalltalk.CWOneChildClass);

smalltalk.addMethod(
smalltalk.method({
selector: "childAt:put:",
category: 'children management',
fn: function (index,object){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._children())._at_put_(index,object);
return $1;
}, function($ctx1) {$ctx1.fill(self,"childAt:put:",{index:index,object:object},smalltalk.CWOneChildClass)})},
args: ["index", "object"],
source: "childAt: index put: object\x0a\x09^ self children at: index put: object",
messageSends: ["at:put:", "children"],
referencedClasses: []
}),
smalltalk.CWOneChildClass);

smalltalk.addMethod(
smalltalk.method({
selector: "childBasicClass",
category: 'factory',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"childBasicClass",{},smalltalk.CWOneChildClass)})},
args: [],
source: "childBasicClass\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.CWOneChildClass);

smalltalk.addMethod(
smalltalk.method({
selector: "newChild",
category: 'factory',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._newChild_(_st(self)._childBasicClass());
return $1;
}, function($ctx1) {$ctx1.fill(self,"newChild",{},smalltalk.CWOneChildClass)})},
args: [],
source: "newChild\x0a\x09^ self newChild: self childBasicClass",
messageSends: ["newChild:", "childBasicClass"],
referencedClasses: []
}),
smalltalk.CWOneChildClass);

smalltalk.addMethod(
smalltalk.method({
selector: "removeChild:",
category: 'children management',
fn: function (object){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._children())._remove_(object);
return $1;
}, function($ctx1) {$ctx1.fill(self,"removeChild:",{object:object},smalltalk.CWOneChildClass)})},
args: ["object"],
source: "removeChild: object\x0a\x09^ self children remove: object",
messageSends: ["remove:", "children"],
referencedClasses: []
}),
smalltalk.CWOneChildClass);



smalltalk.addClass('CWMap', smalltalk.CWOneChildClass, ['rows'], 'Easnoth-BusinessObjects');
smalltalk.CWMap.comment="I represent the whole map in the game. "
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitMap_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.CWMap)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitMap: self",
messageSends: ["visitMap:"],
referencedClasses: []
}),
smalltalk.CWMap);

smalltalk.addMethod(
smalltalk.method({
selector: "childBasicClass",
category: 'factory',
fn: function (){
var self=this;
function $CWRow(){return smalltalk.CWRow||(typeof CWRow=="undefined"?nil:CWRow)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=$CWRow();
return $1;
}, function($ctx1) {$ctx1.fill(self,"childBasicClass",{},smalltalk.CWMap)})},
args: [],
source: "childBasicClass\x0a\x09^ CWRow",
messageSends: [],
referencedClasses: ["CWRow"]
}),
smalltalk.CWMap);

smalltalk.addMethod(
smalltalk.method({
selector: "children",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._rows();
return $1;
}, function($ctx1) {$ctx1.fill(self,"children",{},smalltalk.CWMap)})},
args: [],
source: "children\x0a\x09^ self rows",
messageSends: ["rows"],
referencedClasses: []
}),
smalltalk.CWMap);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.CWOneChildClass.fn.prototype._initialize.apply(_st(self), []);
_st(self)._initializeEventHandling();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.CWMap)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self initializeEventHandling.",
messageSends: ["initialize", "initializeEventHandling"],
referencedClasses: []
}),
smalltalk.CWMap);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeEventHandling",
category: 'initialize-release',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"initializeEventHandling",{},smalltalk.CWMap)})},
args: [],
source: "initializeEventHandling",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWMap);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeFromJson:",
category: 'initialize-release',
fn: function (jsonMap){
var self=this;
var child,rows1;
function $CWWaitForObject(){return smalltalk.CWWaitForObject||(typeof CWWaitForObject=="undefined"?nil:CWWaitForObject)}
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
function $CWObjectLoaded(){return smalltalk.CWObjectLoaded||(typeof CWObjectLoaded=="undefined"?nil:CWObjectLoaded)}
return smalltalk.withContext(function($ctx1) { 
_st(self)._announce_(_st($CWWaitForObject())._new());
rows1=_st(jsonMap)._row();
self["@rows"]=_st($Array())._new_(_st(rows1)._size());
_st(rows1)._withIndexDo_((function(row,i){
return smalltalk.withContext(function($ctx2) {
child=_st(self)._newChild();
child;
_st(self)._childAt_put_(i,child);
return _st(child)._initializeFromJson_(row);
}, function($ctx2) {$ctx2.fillBlock({row:row,i:i},$ctx1)})}));
_st(self)._announce_(_st($CWObjectLoaded())._new());
return self}, function($ctx1) {$ctx1.fill(self,"initializeFromJson:",{jsonMap:jsonMap,child:child,rows1:rows1},smalltalk.CWMap)})},
args: ["jsonMap"],
source: "initializeFromJson: jsonMap\x0a\x09\x22initialize the rows of the map, \x0a\x09the announcement is in case everything was already cached (page refresh for example)\x22\x0a\x09\x0a\x09| child rows1 |\x0a\x09\x0a\x09self announce: CWWaitForObject new.\x0a\x09\x0a\x09rows1 := jsonMap row.\x0a\x09rows := Array new: rows1 size.\x0a\x09\x0a\x09rows1 withIndexDo: [:row :i |\x0a\x09\x09child := self newChild.\x0a\x09\x09self childAt: i put: child.\x0a\x09\x09child initializeFromJson: row ].\x0a\x09\x09\x0a\x09self announce: CWObjectLoaded new.",
messageSends: ["announce:", "new", "row", "new:", "size", "withIndexDo:", "newChild", "childAt:put:", "initializeFromJson:"],
referencedClasses: ["CWWaitForObject", "Array", "CWObjectLoaded"]
}),
smalltalk.CWMap);

smalltalk.addMethod(
smalltalk.method({
selector: "isRoot",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isRoot",{},smalltalk.CWMap)})},
args: [],
source: "isRoot\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWMap);

smalltalk.addMethod(
smalltalk.method({
selector: "neighboursOf:cellIndex:",
category: 'neighbours',
fn: function (row,cellIndex){
var self=this;
var rowIndex,neighbours;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
rowIndex=_st(_st(self)._rows())._indexOf_(row);
neighbours=_st($Array())._new();
$1=_st(rowIndex).__eq((1));
if(! smalltalk.assert($1)){
_st(neighbours)._addAll_(_st(_st(self)._childAt_(_st(rowIndex).__minus((1))))._cellsNextToI_j_(rowIndex,cellIndex));
};
$2=_st(rowIndex).__eq(_st(_st(self)._rows())._size());
if(! smalltalk.assert($2)){
_st(neighbours)._addAll_(_st(_st(self)._childAt_(_st(rowIndex).__plus((1))))._cellsNextToI_j_(rowIndex,cellIndex));
};
$3=neighbours;
return $3;
}, function($ctx1) {$ctx1.fill(self,"neighboursOf:cellIndex:",{row:row,cellIndex:cellIndex,rowIndex:rowIndex,neighbours:neighbours},smalltalk.CWMap)})},
args: ["row", "cellIndex"],
source: "neighboursOf: row cellIndex: cellIndex\x0a\x09| rowIndex neighbours |\x0a\x09rowIndex :=  self rows indexOf: row.\x0a\x09neighbours := Array new.\x0a\x09rowIndex = 1 \x0a\x09\x09ifFalse: [ neighbours addAll: ((self childAt: rowIndex - 1) cellsNextToI: rowIndex j: cellIndex) ].\x0a\x09rowIndex = self rows size \x0a\x09\x09ifFalse: [ neighbours addAll: ((self childAt: rowIndex + 1) cellsNextToI: rowIndex j: cellIndex) ].\x0a\x09^ neighbours",
messageSends: ["indexOf:", "rows", "new", "ifFalse:", "addAll:", "cellsNextToI:j:", "childAt:", "-", "=", "+", "size"],
referencedClasses: ["Array"]
}),
smalltalk.CWMap);

smalltalk.addMethod(
smalltalk.method({
selector: "printString",
category: 'printing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st("a Map (").__comma(_st(self["@rows"])._size())).__comma(" rows)");
return $1;
}, function($ctx1) {$ctx1.fill(self,"printString",{},smalltalk.CWMap)})},
args: [],
source: "printString\x0a\x09^ 'a Map (', rows size, ' rows)'",
messageSends: [",", "size"],
referencedClasses: []
}),
smalltalk.CWMap);

smalltalk.addMethod(
smalltalk.method({
selector: "rows",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@rows"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"rows",{},smalltalk.CWMap)})},
args: [],
source: "rows\x0a\x09^ rows",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWMap);


smalltalk.CWMap.klass.iVarNames = ['default'];
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
}, function($ctx1) {$ctx1.fill(self,"default",{},smalltalk.CWMap.klass)})},
args: [],
source: "default\x0a\x09^ default ifNil: [ default := self new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: []
}),
smalltalk.CWMap.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "newWithMapIndex:",
category: 'instance creation',
fn: function (aMapIndex){
var self=this;
var map;
return smalltalk.withContext(function($ctx1) { 
var $1;
map=_st(self)._default();
_st(jQuery)._getJSON_onSuccess_(_st(_st("ressources/json/maps/map").__comma(aMapIndex)).__comma(".json"),(function(data){
return smalltalk.withContext(function($ctx2) {
return _st(map)._initializeFromJson_(data);
}, function($ctx2) {$ctx2.fillBlock({data:data},$ctx1)})}));
$1=map;
return $1;
}, function($ctx1) {$ctx1.fill(self,"newWithMapIndex:",{aMapIndex:aMapIndex,map:map},smalltalk.CWMap.klass)})},
args: ["aMapIndex"],
source: "newWithMapIndex: aMapIndex\x0a\x09| map |\x0a\x09\x0a\x09map := self default.\x0a    jQuery \x0a\x09\x09getJSON: 'ressources/json/maps/map', aMapIndex, '.json' \x0a\x09\x09onSuccess: [:data | \x0a\x09\x09\x09map initializeFromJson: data].\x0a\x0a\x09^ map",
messageSends: ["default", "getJSON:onSuccess:", ",", "initializeFromJson:"],
referencedClasses: []
}),
smalltalk.CWMap.klass);


smalltalk.addClass('CWRow', smalltalk.CWOneChildClass, ['cells'], 'Easnoth-BusinessObjects');
smalltalk.CWRow.comment="I represent a row of cells in the map."
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitRow_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.CWRow)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitRow: self",
messageSends: ["visitRow:"],
referencedClasses: []
}),
smalltalk.CWRow);

smalltalk.addMethod(
smalltalk.method({
selector: "cells",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@cells"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"cells",{},smalltalk.CWRow)})},
args: [],
source: "cells\x0a\x09^ cells",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWRow);

smalltalk.addMethod(
smalltalk.method({
selector: "cellsNextToI:j:",
category: 'neighbours',
fn: function (i,j){
var self=this;
var neighbours;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
neighbours=_st($Array())._new();
_st(neighbours)._add_(_st(self)._childAt_(j));
$1=_st(_st(i).__backslash_backslash((2))).__eq((0));
if(smalltalk.assert($1)){
$3=_st(j).__gt((1));
if(smalltalk.assert($3)){
_st(neighbours)._add_(_st(self)._childAt_(_st(j).__minus((1))));
};
} else {
$2=_st(j).__lt(_st(_st(self)._cells())._size());
if(smalltalk.assert($2)){
_st(neighbours)._add_(_st(self)._childAt_(_st(j).__plus((1))));
};
};
$4=neighbours;
return $4;
}, function($ctx1) {$ctx1.fill(self,"cellsNextToI:j:",{i:i,j:j,neighbours:neighbours},smalltalk.CWRow)})},
args: ["i", "j"],
source: "cellsNextToI: i j: j \x0a\x09| neighbours |\x0a\x09neighbours := Array new.\x0a\x09neighbours add: (self childAt: j).\x0a\x09i \x5c\x5c 2 = 0 ifFalse: [\x0a\x09\x09j < self cells size ifTrue: [neighbours add: (self childAt: j + 1)].\x0a\x09] ifTrue: [\x0a\x09\x09j > 1 ifTrue: [neighbours add: (self childAt: j - 1)].\x0a\x09].\x0a\x09^ neighbours",
messageSends: ["new", "add:", "childAt:", "ifFalse:ifTrue:", "ifTrue:", "+", "<", "size", "cells", "-", ">", "=", "\x5c\x5c"],
referencedClasses: ["Array"]
}),
smalltalk.CWRow);

smalltalk.addMethod(
smalltalk.method({
selector: "childBasicClass",
category: 'factory',
fn: function (){
var self=this;
function $CWCell(){return smalltalk.CWCell||(typeof CWCell=="undefined"?nil:CWCell)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=$CWCell();
return $1;
}, function($ctx1) {$ctx1.fill(self,"childBasicClass",{},smalltalk.CWRow)})},
args: [],
source: "childBasicClass\x0a\x09^ CWCell",
messageSends: [],
referencedClasses: ["CWCell"]
}),
smalltalk.CWRow);

smalltalk.addMethod(
smalltalk.method({
selector: "children",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._cells();
return $1;
}, function($ctx1) {$ctx1.fill(self,"children",{},smalltalk.CWRow)})},
args: [],
source: "children\x0a\x09^ self cells",
messageSends: ["cells"],
referencedClasses: []
}),
smalltalk.CWRow);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeFromJson:",
category: 'initialize',
fn: function (jsonRow){
var self=this;
var cells1,child;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
cells1=_st(jsonRow)._cells();
self["@cells"]=_st($Array())._new_(_st(cells1)._size());
_st(cells1)._withIndexDo_((function(cell,i){
return smalltalk.withContext(function($ctx2) {
child=_st(self)._newChild();
child;
_st(child)._initializeFromJson_(cell);
return _st(self)._childAt_put_(i,child);
}, function($ctx2) {$ctx2.fillBlock({cell:cell,i:i},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initializeFromJson:",{jsonRow:jsonRow,cells1:cells1,child:child},smalltalk.CWRow)})},
args: ["jsonRow"],
source: "initializeFromJson: jsonRow\x0a\x09| cells1 child |\x0a\x0a\x09cells1 := jsonRow cells.\x0a\x09cells := Array new: cells1 size.\x0a\x09\x0a\x09cells1 withIndexDo: [:cell :i |\x0a\x09\x09child :=  self newChild.\x0a\x09\x09child initializeFromJson: cell. \x0a\x09\x09self childAt: i put: child ].",
messageSends: ["cells", "new:", "size", "withIndexDo:", "newChild", "initializeFromJson:", "childAt:put:"],
referencedClasses: ["Array"]
}),
smalltalk.CWRow);

smalltalk.addMethod(
smalltalk.method({
selector: "neighboursOf:",
category: 'neighbours',
fn: function (aCell){
var self=this;
var cellIndex,neighbours;
function $Set(){return smalltalk.Set||(typeof Set=="undefined"?nil:Set)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
neighbours=_st($Set())._new();
cellIndex=_st(_st(self)._cells())._indexOf_(aCell);
$1=_st(cellIndex).__eq((1));
if(! smalltalk.assert($1)){
_st(neighbours)._add_(_st(self)._childAt_(_st(cellIndex).__minus((1))));
};
$2=_st(cellIndex).__eq(_st(_st(self)._cells())._size());
if(! smalltalk.assert($2)){
_st(neighbours)._add_(_st(self)._childAt_(_st(cellIndex).__plus((1))));
};
_st(neighbours)._addAll_(_st(_st(self)._parent())._neighboursOf_cellIndex_(self,cellIndex));
$3=neighbours;
return $3;
}, function($ctx1) {$ctx1.fill(self,"neighboursOf:",{aCell:aCell,cellIndex:cellIndex,neighbours:neighbours},smalltalk.CWRow)})},
args: ["aCell"],
source: "neighboursOf: aCell\x0a\x09\x22Here we give a Set to simply game logic later (no twice the cell in the set)\x22\x0a\x0a\x09| cellIndex neighbours |\x0a\x09neighbours := Set new.\x0a\x09cellIndex := self cells indexOf: aCell.\x0a\x09cellIndex = 1 \x0a\x09\x09ifFalse: [ neighbours add: (self childAt: cellIndex - 1) ].\x0a\x09cellIndex = self cells size \x0a\x09\x09ifFalse: [ neighbours add: (self childAt: cellIndex + 1) ].\x0a\x09neighbours addAll: (self parent neighboursOf: self cellIndex: cellIndex).\x0a\x09^ neighbours",
messageSends: ["new", "indexOf:", "cells", "ifFalse:", "add:", "childAt:", "-", "=", "+", "size", "addAll:", "neighboursOf:cellIndex:", "parent"],
referencedClasses: ["Set"]
}),
smalltalk.CWRow);

smalltalk.addMethod(
smalltalk.method({
selector: "printString",
category: 'printing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st("a Row (").__comma(_st(self["@cells"])._size())).__comma(" cells)");
return $1;
}, function($ctx1) {$ctx1.fill(self,"printString",{},smalltalk.CWRow)})},
args: [],
source: "printString\x0a\x09^ 'a Row (', cells size, ' cells)'",
messageSends: [",", "size"],
referencedClasses: []
}),
smalltalk.CWRow);



smalltalk.addClass('CWLeaf', smalltalk.CWComponent, [], 'Easnoth-BusinessObjects');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.CWLeaf)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.CWLeaf);

smalltalk.addMethod(
smalltalk.method({
selector: "children",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=[];
return $1;
}, function($ctx1) {$ctx1.fill(self,"children",{},smalltalk.CWLeaf)})},
args: [],
source: "children\x0a\x09^ #()",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWLeaf);

smalltalk.addMethod(
smalltalk.method({
selector: "isLeaf",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isLeaf",{},smalltalk.CWLeaf)})},
args: [],
source: "isLeaf\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWLeaf);



smalltalk.addClass('CWImageLeaf', smalltalk.CWLeaf, ['image'], 'Easnoth-BusinessObjects');
smalltalk.CWImageLeaf.comment="I represent a leaf of the business objects tree that has an image. Usually only my instances are rendered when the CWDrawer visits the business object graph."
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._shouldNotImplement();
return self}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.CWImageLeaf)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09self shouldNotImplement",
messageSends: ["shouldNotImplement"],
referencedClasses: []
}),
smalltalk.CWImageLeaf);

smalltalk.addMethod(
smalltalk.method({
selector: "image",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@image"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"image",{},smalltalk.CWImageLeaf)})},
args: [],
source: "image\x0a\x09^ image",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWImageLeaf);

smalltalk.addMethod(
smalltalk.method({
selector: "image:",
category: 'accessing',
fn: function (anImage){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@image"]=anImage;
return self}, function($ctx1) {$ctx1.fill(self,"image:",{anImage:anImage},smalltalk.CWImageLeaf)})},
args: ["anImage"],
source: "image: anImage\x0a\x09image := anImage",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWImageLeaf);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeFromKey:",
category: 'initialize-release',
fn: function (aKey){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@image"]=_st(_st(self)._class())._imageCacheAt_(aKey);
return self}, function($ctx1) {$ctx1.fill(self,"initializeFromKey:",{aKey:aKey},smalltalk.CWImageLeaf)})},
args: ["aKey"],
source: "initializeFromKey: aKey\x0a\x09image := self class imageCacheAt: aKey",
messageSends: ["imageCacheAt:", "class"],
referencedClasses: []
}),
smalltalk.CWImageLeaf);

smalltalk.addMethod(
smalltalk.method({
selector: "isLeaf",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isLeaf",{},smalltalk.CWImageLeaf)})},
args: [],
source: "isLeaf\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWImageLeaf);


smalltalk.CWImageLeaf.klass.iVarNames = ['imageCache'];
smalltalk.addMethod(
smalltalk.method({
selector: "folderName",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"folderName",{},smalltalk.CWImageLeaf.klass)})},
args: [],
source: "folderName\x0a\x09self subclassResponsibility\x0a\x09",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.CWImageLeaf.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "imageCache",
category: 'caching',
fn: function (){
var self=this;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@imageCache"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@imageCache"]=_st($Dictionary())._new();
$1=self["@imageCache"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"imageCache",{},smalltalk.CWImageLeaf.klass)})},
args: [],
source: "imageCache\x0a\x09^ imageCache ifNil: [ imageCache := Dictionary new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Dictionary"]
}),
smalltalk.CWImageLeaf.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "imageCacheAt:",
category: 'caching',
fn: function (aKey){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._imageCache())._at_ifAbsentPut_(aKey,(function(){
return smalltalk.withContext(function($ctx2) {
return _st(self)._newImageFrom_(aKey);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"imageCacheAt:",{aKey:aKey},smalltalk.CWImageLeaf.klass)})},
args: ["aKey"],
source: "imageCacheAt: aKey\x0a\x09^ self imageCache at: aKey ifAbsentPut: [ self newImageFrom: aKey ]\x0a\x09",
messageSends: ["at:ifAbsentPut:", "newImageFrom:", "imageCache"],
referencedClasses: []
}),
smalltalk.CWImageLeaf.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "newImageFrom:",
category: 'caching',
fn: function (aKey){
var self=this;
var announcer,image;
function $CWEasnothAnnouncer(){return smalltalk.CWEasnothAnnouncer||(typeof CWEasnothAnnouncer=="undefined"?nil:CWEasnothAnnouncer)}
function $NativeFunction(){return smalltalk.NativeFunction||(typeof NativeFunction=="undefined"?nil:NativeFunction)}
function $CWWaitForObject(){return smalltalk.CWWaitForObject||(typeof CWWaitForObject=="undefined"?nil:CWWaitForObject)}
function $CWObjectLoaded(){return smalltalk.CWObjectLoaded||(typeof CWObjectLoaded=="undefined"?nil:CWObjectLoaded)}
return smalltalk.withContext(function($ctx1) { 
var $1;
announcer=_st($CWEasnothAnnouncer())._current();
image=_st($NativeFunction())._constructor_("Image");
_st(_st(self)._imageCache())._at_put_(aKey,image);
_st(announcer)._announce_(_st($CWWaitForObject())._new());
_st(image)._at_put_("onload",(function(){
return smalltalk.withContext(function($ctx2) {
return _st(announcer)._announce_(_st($CWObjectLoaded())._new());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(image)._at_put_("src",_st(_st(_st(_st("ressources/images/").__comma(_st(self)._folderName())).__comma("/")).__comma(aKey)).__comma(".png"));
$1=image;
return $1;
}, function($ctx1) {$ctx1.fill(self,"newImageFrom:",{aKey:aKey,announcer:announcer,image:image},smalltalk.CWImageLeaf.klass)})},
args: ["aKey"],
source: "newImageFrom: aKey\x0a\x09\x22Create a new image and cache it. Announce start and end of asynchronous task\x22\x0a\x09\x0a\x09| announcer image |\x0a\x09\x0a\x09announcer := CWEasnothAnnouncer current.\x0a\x09image := NativeFunction constructor: 'Image'.\x0a\x09self imageCache at: aKey put: image.\x0a\x09announcer announce: CWWaitForObject new.\x0a\x09image at: 'onload' put: [ announcer announce: CWObjectLoaded new ].\x0a    image at: 'src' put:  'ressources/images/', self folderName, '/', aKey, '.png'.\x0a\x09\x0a\x09^ image",
messageSends: ["current", "constructor:", "at:put:", "imageCache", "announce:", "new", ",", "folderName"],
referencedClasses: ["CWEasnothAnnouncer", "NativeFunction", "CWWaitForObject", "CWObjectLoaded"]
}),
smalltalk.CWImageLeaf.klass);


smalltalk.addClass('CWBackground', smalltalk.CWImageLeaf, [], 'Easnoth-BusinessObjects');
smalltalk.CWBackground.comment="I represent an element of the background (tiles, overtiles, ...). "
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._shouldNotImplement();
return self}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.CWBackground)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09self shouldNotImplement",
messageSends: ["shouldNotImplement"],
referencedClasses: []
}),
smalltalk.CWBackground);



smalltalk.addClass('CWOverTile', smalltalk.CWBackground, [], 'Easnoth-BusinessObjects');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitOverTile_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.CWOverTile)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitOverTile: self",
messageSends: ["visitOverTile:"],
referencedClasses: []
}),
smalltalk.CWOverTile);


smalltalk.addMethod(
smalltalk.method({
selector: "folderName",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "overtiles";
}, function($ctx1) {$ctx1.fill(self,"folderName",{},smalltalk.CWOverTile.klass)})},
args: [],
source: "folderName\x0a\x09^ 'overtiles'",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWOverTile.klass);


smalltalk.addClass('CWGameOverTile', smalltalk.CWOverTile, [], 'Easnoth-BusinessObjects');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitGameOverTile_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.CWGameOverTile)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitGameOverTile: self",
messageSends: ["visitGameOverTile:"],
referencedClasses: []
}),
smalltalk.CWGameOverTile);



smalltalk.addClass('CWTile', smalltalk.CWBackground, [], 'Easnoth-BusinessObjects');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitTile_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.CWTile)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitTile: self",
messageSends: ["visitTile:"],
referencedClasses: []
}),
smalltalk.CWTile);

smalltalk.addMethod(
smalltalk.method({
selector: "isWall",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isWall",{},smalltalk.CWTile)})},
args: [],
source: "isWall\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWTile);


smalltalk.addMethod(
smalltalk.method({
selector: "folderName",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "tiles";
}, function($ctx1) {$ctx1.fill(self,"folderName",{},smalltalk.CWTile.klass)})},
args: [],
source: "folderName\x0a\x09^ 'tiles'",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWTile.klass);


smalltalk.addClass('CWWall', smalltalk.CWTile, [], 'Easnoth-BusinessObjects');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitWall_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.CWWall)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitWall: self",
messageSends: ["visitWall:"],
referencedClasses: []
}),
smalltalk.CWWall);

smalltalk.addMethod(
smalltalk.method({
selector: "isWall",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isWall",{},smalltalk.CWWall)})},
args: [],
source: "isWall\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWWall);



smalltalk.addClass('CWMonster', smalltalk.CWImageLeaf, ['side', 'currentMove', 'move', 'attack', 'dices', 'hp', 'range', 'state'], 'Easnoth-BusinessObjects');
smalltalk.CWMonster.comment="I represent people on the map. My instances variables are the stats of the guy I represent."
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._shouldNotImplement();
return self}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.CWMonster)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09self shouldNotImplement",
messageSends: ["shouldNotImplement"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "activate",
category: 'state delegation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._state())._activate_(self);
return self}, function($ctx1) {$ctx1.fill(self,"activate",{},smalltalk.CWMonster)})},
args: [],
source: "activate\x0a\x09self state activate: self",
messageSends: ["activate:", "state"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "addStats:",
category: 'initialize-release',
fn: function (aKey){
var self=this;
var keySuccess;
function $CWWaitForObject(){return smalltalk.CWWaitForObject||(typeof CWWaitForObject=="undefined"?nil:CWWaitForObject)}
function $CWObjectLoaded(){return smalltalk.CWObjectLoaded||(typeof CWObjectLoaded=="undefined"?nil:CWObjectLoaded)}
return smalltalk.withContext(function($ctx1) { 
keySuccess=_st(aKey).__comma("success");
_st(self)._announce_(_st($CWWaitForObject())._new());
_st(_st(self)._class())._jsonStatCacheAt_put_(keySuccess,(function(statsNew){
return smalltalk.withContext(function($ctx2) {
_st(_st(self)._class())._jsonStatCacheAt_put_(aKey,statsNew);
return _st(self)._stats_(statsNew);
}, function($ctx2) {$ctx2.fillBlock({statsNew:statsNew},$ctx1)})}));
_st(jQuery)._getJSON_onSuccess_(_st(_st("ressources/json/monsters/").__comma(aKey)).__comma(".json"),(function(data){
return smalltalk.withContext(function($ctx2) {
_st(_st(_st(self)._class())._jsonStatCacheAt_(keySuccess))._value_(data);
return _st(self)._announce_(_st($CWObjectLoaded())._new());
}, function($ctx2) {$ctx2.fillBlock({data:data},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"addStats:",{aKey:aKey,keySuccess:keySuccess},smalltalk.CWMonster)})},
args: ["aKey"],
source: "addStats: aKey\x0a\x09| keySuccess |\x0a\x09\x0a\x09keySuccess := aKey,'success'.\x0a\x09\x0a\x09self announce: CWWaitForObject new.\x0a\x09\x0a    self class \x0a\x09\x09jsonStatCacheAt: keySuccess \x0a\x09\x09put: [:statsNew | \x0a\x09\x09\x09self class jsonStatCacheAt: aKey put: statsNew.\x0a       \x09\x09self stats: statsNew ].\x0a\x0a\x09jQuery \x0a\x09\x09getJSON: 'ressources/json/monsters/', aKey, '.json' \x0a\x09\x09onSuccess: [:data | \x0a\x09\x09\x09(self class jsonStatCacheAt: keySuccess) value: data.\x0a\x09\x09\x09self announce: CWObjectLoaded new]",
messageSends: [",", "announce:", "new", "jsonStatCacheAt:put:", "class", "stats:", "getJSON:onSuccess:", "value:", "jsonStatCacheAt:"],
referencedClasses: ["CWWaitForObject", "CWObjectLoaded"]
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "animationMoveFrom:to:callback:",
category: 'animation',
fn: function (cell1,cellLast,callback){
var self=this;
var path,moveNumber;
return smalltalk.withContext(function($ctx1) { 
path=_st(cell1)._pathTo_(cellLast);
moveNumber=_st(_st(path)._size()).__minus((1));
_st(_st(cell1)._root())._removeSelection();
_st((1))._to_do_(moveNumber,(function(j){
return smalltalk.withContext(function($ctx2) {
return _st((function(){
return smalltalk.withContext(function($ctx3) {
_st(_st(path)._at_(_st(_st(path)._size()).__minus(j)))._addMonster_(self);
_st(_st(path)._at_(_st(_st(_st(path)._size()).__plus((1))).__minus(j)))._removeMonster();
return _st(_st(cell1)._root())._updateMonstersAndGOTs();
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}))._valueWithTimeout_(_st((300)).__star(j));
}, function($ctx2) {$ctx2.fillBlock({j:j},$ctx1)})}));
_st(self)._currentMove_(_st(_st(self)._currentMove()).__minus(moveNumber));
_st(callback)._valueWithTimeout_(_st((300)).__star(moveNumber));
return self}, function($ctx1) {$ctx1.fill(self,"animationMoveFrom:to:callback:",{cell1:cell1,cellLast:cellLast,callback:callback,path:path,moveNumber:moveNumber},smalltalk.CWMonster)})},
args: ["cell1", "cellLast", "callback"],
source: "animationMoveFrom: cell1 to: cellLast callback: callback\x0a\x09\x0a\x09| path moveNumber |\x0a\x09\x0a\x09path := cell1 pathTo: cellLast.\x0a\x09moveNumber := path size - 1.\x0a \x0a\x09cell1 root removeSelection.\x0a\x0a\x091 to: moveNumber do: [ :j |\x0a\x09\x09[ (path at: path size - j) addMonster: self.\x0a        (path at: path size + 1 - j) removeMonster.\x0a        cell1 root updateMonstersAndGOTs ] valueWithTimeout: 300 * j ].\x0a\x0a\x09self currentMove: self currentMove - moveNumber.\x0a\x09callback valueWithTimeout: 300 * moveNumber",
messageSends: ["pathTo:", "-", "size", "removeSelection", "root", "to:do:", "valueWithTimeout:", "*", "addMonster:", "at:", "removeMonster", "+", "updateMonstersAndGOTs", "currentMove:", "currentMove"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "attack",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@attack"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"attack",{},smalltalk.CWMonster)})},
args: [],
source: "attack\x0a\x09^ attack",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "attack:",
category: 'accessing',
fn: function (int){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@attack"]=int;
return self}, function($ctx1) {$ctx1.fill(self,"attack:",{int:int},smalltalk.CWMonster)})},
args: ["int"],
source: "attack: int\x0a\x09attack := int",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "attackNeighbour:inContext:",
category: 'fighting',
fn: function (anotherMonster,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._state())._changeStateAfterAttacking_(self);
_st(_st(self)._root())._removeSelection();
_st(self)._rollDicesCallBack_((function(diceRes){
return smalltalk.withContext(function($ctx2) {
_st(anotherMonster)._removeHP_(_st(diceRes)._kills());
_st(self)._select_(gameContext);
_st(self)._checkForNextTurn();
return _st(self)._updateMonstersAndGOTs();
}, function($ctx2) {$ctx2.fillBlock({diceRes:diceRes},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"attackNeighbour:inContext:",{anotherMonster:anotherMonster,gameContext:gameContext},smalltalk.CWMonster)})},
args: ["anotherMonster", "gameContext"],
source: "attackNeighbour: anotherMonster inContext: gameContext\x0a\x09\x0a\x09self state changeStateAfterAttacking: self.\x0a    self root removeSelection.\x0a\x0a\x09self rollDicesCallBack: [ :diceRes |\x0a\x09\x09anotherMonster removeHP: diceRes kills.\x0a        self select: gameContext.\x0a\x09\x09self checkForNextTurn.\x0a\x09\x09self updateMonstersAndGOTs ]",
messageSends: ["changeStateAfterAttacking:", "state", "removeSelection", "root", "rollDicesCallBack:", "removeHP:", "kills", "select:", "checkForNextTurn", "updateMonstersAndGOTs"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "attackTo:inContext:",
category: 'state delegation',
fn: function (aCell,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._state())._monster_attackTo_inContext_(self,aCell,gameContext);
return self}, function($ctx1) {$ctx1.fill(self,"attackTo:inContext:",{aCell:aCell,gameContext:gameContext},smalltalk.CWMonster)})},
args: ["aCell", "gameContext"],
source: "attackTo: aCell inContext: gameContext\x0a\x09self state monster: self attackTo: aCell inContext: gameContext",
messageSends: ["monster:attackTo:inContext:", "state"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "changeState:",
category: 'state machine',
fn: function (stateClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._state_(_st(stateClass)._default());
return self}, function($ctx1) {$ctx1.fill(self,"changeState:",{stateClass:stateClass},smalltalk.CWMonster)})},
args: ["stateClass"],
source: "changeState: stateClass\x0a\x09self state: stateClass default",
messageSends: ["state:", "default"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "checkForNextTurn",
category: 'state delegation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(_st(self)._currentMove()).__gt((0));
if(smalltalk.assert($1)){
$2=self;
return $2;
};
_st(_st(self)._state())._checkForNextTurn_(self);
return self}, function($ctx1) {$ctx1.fill(self,"checkForNextTurn",{},smalltalk.CWMonster)})},
args: [],
source: "checkForNextTurn\x0a\x09self currentMove > 0 ifTrue: [ ^ self ].\x0a\x09self state checkForNextTurn: self",
messageSends: ["ifTrue:", ">", "currentMove", "checkForNextTurn:", "state"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "currentMove",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@currentMove"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"currentMove",{},smalltalk.CWMonster)})},
args: [],
source: "currentMove\x0a\x09^ currentMove",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "currentMove:",
category: 'accessing',
fn: function (int){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@currentMove"]=int;
return self}, function($ctx1) {$ctx1.fill(self,"currentMove:",{int:int},smalltalk.CWMonster)})},
args: ["int"],
source: "currentMove: int\x0a\x09currentMove := int",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultHp",
category: 'initialize-release',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"defaultHp",{},smalltalk.CWMonster)})},
args: [],
source: "defaultHp\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultState",
category: 'accessing',
fn: function (){
var self=this;
function $CWInactive(){return smalltalk.CWInactive||(typeof CWInactive=="undefined"?nil:CWInactive)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=$CWInactive();
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultState",{},smalltalk.CWMonster)})},
args: [],
source: "defaultState\x0a\x09\x22When map is initialized the monster will get this state by default\x22\x0a\x09^ CWInactive",
messageSends: [],
referencedClasses: ["CWInactive"]
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "desactivateMonsters",
category: 'state delegation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._state())._desactivate_(self);
return self}, function($ctx1) {$ctx1.fill(self,"desactivateMonsters",{},smalltalk.CWMonster)})},
args: [],
source: "desactivateMonsters\x0a\x09self state desactivate: self",
messageSends: ["desactivate:", "state"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "dices",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@dices"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"dices",{},smalltalk.CWMonster)})},
args: [],
source: "dices\x0a\x09^ dices",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "dices:",
category: 'accessing',
fn: function (int){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@dices"]=int;
return self}, function($ctx1) {$ctx1.fill(self,"dices:",{int:int},smalltalk.CWMonster)})},
args: ["int"],
source: "dices: int\x0a\x09dices := int",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "hp",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@hp"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"hp",{},smalltalk.CWMonster)})},
args: [],
source: "hp\x0a\x09^ hp",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "hp:",
category: 'accessing',
fn: function (int){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@hp"]=int;
return self}, function($ctx1) {$ctx1.fill(self,"hp:",{int:int},smalltalk.CWMonster)})},
args: ["int"],
source: "hp: int\x0a\x09hp := int",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.CWImageLeaf.fn.prototype._initialize.apply(_st(self), []);
_st(self)._initializeState();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.CWMonster)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self initializeState",
messageSends: ["initialize", "initializeState"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeFromJson:",
category: 'initialize-release',
fn: function (aJson){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.CWImageLeaf.fn.prototype._initializeFromKey_.apply(_st(self), [_st(aJson)._name()]);
_st(self)._side_(_st(aJson)._side());
_st(self)._loadStats_(_st(aJson)._name());
return self}, function($ctx1) {$ctx1.fill(self,"initializeFromJson:",{aJson:aJson},smalltalk.CWMonster)})},
args: ["aJson"],
source: "initializeFromJson: aJson\x0a\x09super initializeFromKey: aJson name.\x0a\x09self side: aJson side.\x0a\x09self loadStats: aJson name.",
messageSends: ["initializeFromKey:", "name", "side:", "side", "loadStats:"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeState",
category: 'state machine',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._changeState_(_st(self)._defaultState());
return self}, function($ctx1) {$ctx1.fill(self,"initializeState",{},smalltalk.CWMonster)})},
args: [],
source: "initializeState\x0a\x09self changeState: self defaultState",
messageSends: ["changeState:", "defaultState"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "loadStats:",
category: 'initialize-release',
fn: function (aJson){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self)._class())._jsonStatCache())._includesKey_(_st(aJson).__comma("success"));
if(smalltalk.assert($1)){
_st(self)._updateStats_(aJson);
} else {
_st(self)._addStats_(aJson);
};
return self}, function($ctx1) {$ctx1.fill(self,"loadStats:",{aJson:aJson},smalltalk.CWMonster)})},
args: ["aJson"],
source: "loadStats: aJson\x0a\x09(self class jsonStatCache includesKey: aJson,'success') \x0a\x09\x09ifTrue: [ self updateStats: aJson ] \x0a\x09\x09ifFalse: [ self addStats: aJson ].",
messageSends: ["ifTrue:ifFalse:", "updateStats:", "addStats:", "includesKey:", ",", "jsonStatCache", "class"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "monstersFromSide:",
category: 'selection',
fn: function (aSide){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=_st(_st(self)._side()).__eq(aSide);
if(smalltalk.assert($2)){
$1=[self];
} else {
$1=[];
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"monstersFromSide:",{aSide:aSide},smalltalk.CWMonster)})},
args: ["aSide"],
source: "monstersFromSide: aSide\x0a\x09^ self side = aSide \x0a\x09\x09ifTrue: [ { self } ]\x0a\x09\x09ifFalse: [ #() ]",
messageSends: ["ifTrue:ifFalse:", "=", "side"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "move",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@move"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"move",{},smalltalk.CWMonster)})},
args: [],
source: "move\x0a\x09^ move",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "move:",
category: 'accessing',
fn: function (int){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@move"]=int;
return self}, function($ctx1) {$ctx1.fill(self,"move:",{int:int},smalltalk.CWMonster)})},
args: ["int"],
source: "move: int\x0a\x09move := int",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "moveTo:inContext:",
category: 'state delegation',
fn: function (aCell,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._state())._monster_moveTo_inContext_(self,aCell,gameContext);
return self}, function($ctx1) {$ctx1.fill(self,"moveTo:inContext:",{aCell:aCell,gameContext:gameContext},smalltalk.CWMonster)})},
args: ["aCell", "gameContext"],
source: "moveTo: aCell inContext: gameContext\x0a\x09self state monster: self moveTo: aCell inContext: gameContext",
messageSends: ["monster:moveTo:inContext:", "state"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "moveTo:inContext:callback:",
category: 'animation',
fn: function (aCell,gameContext,callback){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._animationMoveFrom_to_callback_(_st(gameContext)._currentCell(),aCell,(function(){
return smalltalk.withContext(function($ctx2) {
_st(_st(self)._state())._changeStateAfterMoving_(self);
_st(self)._select_(gameContext);
_st(_st(aCell)._root())._updateMonstersAndGOTs();
_st(self)._checkForNextTurn();
return _st(callback)._value();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"moveTo:inContext:callback:",{aCell:aCell,gameContext:gameContext,callback:callback},smalltalk.CWMonster)})},
args: ["aCell", "gameContext", "callback"],
source: "moveTo: aCell inContext: gameContext callback: callback\x0a\x09\x22triggers the animation for the monster move\x22\x0a\x09\x0a\x09self animationMoveFrom: gameContext currentCell to: aCell callback: [\x09\x0a\x09\x09self state changeStateAfterMoving: self.\x0a\x09\x09self select: gameContext.\x0a\x09\x09aCell root updateMonstersAndGOTs.\x0a\x09\x09self checkForNextTurn.\x0a\x09\x09callback value.\x0a\x09].",
messageSends: ["animationMoveFrom:to:callback:", "currentCell", "changeStateAfterMoving:", "state", "select:", "updateMonstersAndGOTs", "root", "checkForNextTurn", "value"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "range",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@range"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"range",{},smalltalk.CWMonster)})},
args: [],
source: "range\x0a\x09^ range",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "range:",
category: 'accessing',
fn: function (int){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@range"]=int;
return self}, function($ctx1) {$ctx1.fill(self,"range:",{int:int},smalltalk.CWMonster)})},
args: ["int"],
source: "range: int\x0a\x09range := int",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "readyToBePicked",
category: 'state delegation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._state())._readyToPick_(self);
return self}, function($ctx1) {$ctx1.fill(self,"readyToBePicked",{},smalltalk.CWMonster)})},
args: [],
source: "readyToBePicked\x0a\x09self state readyToPick: self",
messageSends: ["readyToPick:", "state"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "readyToPickMonsters:",
category: 'selection',
fn: function (playerSide){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._side()).__eq(playerSide);
if(smalltalk.assert($1)){
_st(self)._readyToBePicked();
};
return self}, function($ctx1) {$ctx1.fill(self,"readyToPickMonsters:",{playerSide:playerSide},smalltalk.CWMonster)})},
args: ["playerSide"],
source: "readyToPickMonsters: playerSide\x0a\x09self side = playerSide \x0a\x09\x09ifTrue: [ self readyToBePicked ]",
messageSends: ["ifTrue:", "readyToBePicked", "=", "side"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "removeHP:",
category: 'fighting',
fn: function (anInt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(self)._hp_(_st(_st(self)._hp()).__minus(anInt));
$1=_st(_st(self)._hp()).__lt((1));
if(smalltalk.assert($1)){
_st(_st(self)._parent())._removeMonster();
};
return self}, function($ctx1) {$ctx1.fill(self,"removeHP:",{anInt:anInt},smalltalk.CWMonster)})},
args: ["anInt"],
source: "removeHP: anInt\x0a     self hp: self hp - anInt.\x0a     self hp < 1 ifTrue: [\x0a           self parent removeMonster ].",
messageSends: ["hp:", "-", "hp", "ifTrue:", "removeMonster", "parent", "<"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "rollDicesCallBack:",
category: 'fighting',
fn: function (aBlock){
var self=this;
var kill,dicesRolledEvent;
function $CWDicesRolledEvent(){return smalltalk.CWDicesRolledEvent||(typeof CWDicesRolledEvent=="undefined"?nil:CWDicesRolledEvent)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
kill=_st(_st((1))._to_(_st(self)._dices()))._inject_into_((0),(function(acc,index){
return smalltalk.withContext(function($ctx2) {
$1=_st(_st((100))._atRandom()).__lt(_st(self)._attack());
if(smalltalk.assert($1)){
return _st(acc).__plus((1));
} else {
return acc;
};
}, function($ctx2) {$ctx2.fillBlock({acc:acc,index:index},$ctx1)})}));
$2=_st($CWDicesRolledEvent())._new();
_st($2)._kills_(kill);
_st($2)._dices_(_st(self)._dices());
_st($2)._callback_(aBlock);
$3=_st($2)._yourself();
dicesRolledEvent=$3;
_st(self)._announce_(dicesRolledEvent);
return self}, function($ctx1) {$ctx1.fill(self,"rollDicesCallBack:",{aBlock:aBlock,kill:kill,dicesRolledEvent:dicesRolledEvent},smalltalk.CWMonster)})},
args: ["aBlock"],
source: "rollDicesCallBack: aBlock\x0a\x09\x22roll the dices to attack an ennemy\x22\x0a\x09\x0a\x09| kill dicesRolledEvent |\x0a\x09kill := (1 to: self dices) inject: 0 into: [ :acc :index | \x0a\x09\x09100 atRandom < self attack \x0a\x09\x09\x09ifTrue: [ acc + 1 ] \x0a\x09\x09\x09ifFalse: [ acc ] ]. \x0a\x09dicesRolledEvent := CWDicesRolledEvent new\x0a\x09\x09kills: kill;\x0a\x09\x09dices: self dices;\x0a\x09\x09callback: aBlock;\x0a\x09\x09yourself.\x0a\x09self announce: dicesRolledEvent",
messageSends: ["inject:into:", "ifTrue:ifFalse:", "+", "<", "attack", "atRandom", "to:", "dices", "kills:", "new", "dices:", "callback:", "yourself", "announce:"],
referencedClasses: ["CWDicesRolledEvent"]
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "select:",
category: 'state delegation',
fn: function (gameContext){
var self=this;
function $CWMonsterUpdateEvent(){return smalltalk.CWMonsterUpdateEvent||(typeof CWMonsterUpdateEvent=="undefined"?nil:CWMonsterUpdateEvent)}
return smalltalk.withContext(function($ctx1) { 
_st(self)._announce_(_st(_st($CWMonsterUpdateEvent())._new())._monster_(self));
_st(_st(self)._state())._select_inContext_(self,gameContext);
return self}, function($ctx1) {$ctx1.fill(self,"select:",{gameContext:gameContext},smalltalk.CWMonster)})},
args: ["gameContext"],
source: "select: gameContext\x0a\x09self announce: (CWMonsterUpdateEvent new monster: self).\x0a\x09self state select: self inContext: gameContext.",
messageSends: ["announce:", "monster:", "new", "select:inContext:", "state"],
referencedClasses: ["CWMonsterUpdateEvent"]
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "showActiveMonster",
category: 'state delegation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._state())._showActiveMonster_(self);
return self}, function($ctx1) {$ctx1.fill(self,"showActiveMonster",{},smalltalk.CWMonster)})},
args: [],
source: "showActiveMonster\x0a\x09self state showActiveMonster: self",
messageSends: ["showActiveMonster:", "state"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "side",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@side"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"side",{},smalltalk.CWMonster)})},
args: [],
source: "side\x0a\x09^ side",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "side:",
category: 'accessing',
fn: function (int){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@side"]=int;
return self}, function($ctx1) {$ctx1.fill(self,"side:",{int:int},smalltalk.CWMonster)})},
args: ["int"],
source: "side: int\x0a\x09side := int",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "state",
category: 'state machine',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@state"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"state",{},smalltalk.CWMonster)})},
args: [],
source: "state\x0a\x09^ state",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "state:",
category: 'state machine',
fn: function (aState){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@state"]=aState;
return self}, function($ctx1) {$ctx1.fill(self,"state:",{aState:aState},smalltalk.CWMonster)})},
args: ["aState"],
source: "state: aState\x0a\x09state := aState",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "stats:",
category: 'initialize-release',
fn: function (jsonStats){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._move_(_st(jsonStats)._move());
_st(self)._range_(_st(jsonStats)._range());
_st(self)._attack_(_st(jsonStats)._attack());
_st(self)._dices_(_st(jsonStats)._dices());
_st(self)._hp_(_st(self)._defaultHp());
return self}, function($ctx1) {$ctx1.fill(self,"stats:",{jsonStats:jsonStats},smalltalk.CWMonster)})},
args: ["jsonStats"],
source: "stats: jsonStats\x0a\x09self move: jsonStats move.\x0a\x09self range: jsonStats range.\x0a\x09self attack: jsonStats attack.\x0a\x09\x22self knockback: jsonStats knockback.\x22\x0a\x09self dices: jsonStats dices.\x0a\x09\x22self special: jsonStats special.\x22\x0a\x09self hp: self defaultHp.",
messageSends: ["move:", "move", "range:", "range", "attack:", "attack", "dices:", "dices", "hp:", "defaultHp"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "updateStats:",
category: 'initialize-release',
fn: function (aKey){
var self=this;
var keySuccess,oldCallBack;
return smalltalk.withContext(function($ctx1) { 
var $1;
keySuccess=_st(aKey).__comma("success");
oldCallBack=_st(_st(self)._class())._jsonStatCacheAt_(keySuccess);
_st(_st(self)._class())._jsonStatCacheAt_put_(keySuccess,(function(statsNew){
return smalltalk.withContext(function($ctx2) {
_st(self)._stats_(statsNew);
return _st(oldCallBack)._value_(statsNew);
}, function($ctx2) {$ctx2.fillBlock({statsNew:statsNew},$ctx1)})}));
$1=_st(_st(_st(self)._class())._jsonStatCache())._includesKey_(aKey);
if(smalltalk.assert($1)){
_st(self)._stats_(_st(_st(self)._class())._jsonStatCacheAt_(aKey));
};
return self}, function($ctx1) {$ctx1.fill(self,"updateStats:",{aKey:aKey,keySuccess:keySuccess,oldCallBack:oldCallBack},smalltalk.CWMonster)})},
args: ["aKey"],
source: "updateStats: aKey \x0a\x09|keySuccess oldCallBack|\x0a\x0a\x09keySuccess := aKey,'success'.\x0a\x09oldCallBack := self class jsonStatCacheAt: keySuccess.\x0a\x09self class jsonStatCacheAt: keySuccess put: [:statsNew | \x0a\x09\x09\x09self stats: statsNew. \x0a\x09\x09\x09oldCallBack value: statsNew ].\x0a\x09\x09\x09\x0a\x09\x22Case where the json file finished loading during the execution of this method but before the new call back was set up\x22\x0a\x09(self class jsonStatCache includesKey: aKey) \x0a\x09\x09ifTrue: [self stats: (self class jsonStatCacheAt: aKey)].",
messageSends: [",", "jsonStatCacheAt:", "class", "jsonStatCacheAt:put:", "stats:", "value:", "ifTrue:", "includesKey:", "jsonStatCache"],
referencedClasses: []
}),
smalltalk.CWMonster);


smalltalk.CWMonster.klass.iVarNames = ['jsonStatCache'];
smalltalk.addMethod(
smalltalk.method({
selector: "emptyMonster",
category: 'instance creation',
fn: function (){
var self=this;
var fakeImage;
function $NativeFunction(){return smalltalk.NativeFunction||(typeof NativeFunction=="undefined"?nil:NativeFunction)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
fakeImage=_st($NativeFunction())._constructor_("Image");
_st(fakeImage)._at_put_("src","ressources/images/interro.png");
$2=_st(self)._new();
_st($2)._image_(fakeImage);
_st($2)._hp_((0));
_st($2)._move_((0));
_st($2)._range_((0));
_st($2)._dices_((0));
$3=_st($2)._attack_((0));
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"emptyMonster",{fakeImage:fakeImage},smalltalk.CWMonster.klass)})},
args: [],
source: "emptyMonster\x0a\x09\x22Answers a fake instance of a monster with empty stats.\x0a\x09Displayed by the menu when no monster is selected\x22\x0a\x09\x0a\x09| fakeImage |\x0a\x09fakeImage := NativeFunction constructor: 'Image'.\x0a\x09fakeImage at: 'src' put:'ressources/images/interro.png'.\x0a\x09^ self new\x0a\x09\x09image: fakeImage;\x0a\x09\x09hp: 0;\x0a\x09\x09move: 0;\x0a\x09\x09range: 0;\x0a\x09\x09dices: 0;\x0a\x09\x09attack: 0\x22;\x0a\x09\x09knockback: 0;\x0a\x09\x09special:'none'.\x22",
messageSends: ["constructor:", "at:put:", "image:", "new", "hp:", "move:", "range:", "dices:", "attack:"],
referencedClasses: ["NativeFunction"]
}),
smalltalk.CWMonster.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "folderName",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "monsters";
}, function($ctx1) {$ctx1.fill(self,"folderName",{},smalltalk.CWMonster.klass)})},
args: [],
source: "folderName\x0a\x09^ 'monsters'",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWMonster.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "jsonStatCache",
category: 'caching',
fn: function (){
var self=this;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@jsonStatCache"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@jsonStatCache"]=_st($Dictionary())._new();
$1=self["@jsonStatCache"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"jsonStatCache",{},smalltalk.CWMonster.klass)})},
args: [],
source: "jsonStatCache\x0a\x09^ jsonStatCache ifNil: [ jsonStatCache := Dictionary new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Dictionary"]
}),
smalltalk.CWMonster.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "jsonStatCacheAt:",
category: 'caching',
fn: function (aKey){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._jsonStatCache())._at_(aKey);
return $1;
}, function($ctx1) {$ctx1.fill(self,"jsonStatCacheAt:",{aKey:aKey},smalltalk.CWMonster.klass)})},
args: ["aKey"],
source: "jsonStatCacheAt: aKey\x0a\x09^ self jsonStatCache at: aKey",
messageSends: ["at:", "jsonStatCache"],
referencedClasses: []
}),
smalltalk.CWMonster.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "jsonStatCacheAt:ifAbsent:",
category: 'caching',
fn: function (aKey,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._jsonStatCache())._at_ifAbsent_(aKey,aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"jsonStatCacheAt:ifAbsent:",{aKey:aKey,aBlock:aBlock},smalltalk.CWMonster.klass)})},
args: ["aKey", "aBlock"],
source: "jsonStatCacheAt: aKey ifAbsent: aBlock\x0a\x09^ self jsonStatCache at: aKey ifAbsent: aBlock",
messageSends: ["at:ifAbsent:", "jsonStatCache"],
referencedClasses: []
}),
smalltalk.CWMonster.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "jsonStatCacheAt:put:",
category: 'caching',
fn: function (aKey,aJson){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._jsonStatCache())._at_put_(aKey,aJson);
return $1;
}, function($ctx1) {$ctx1.fill(self,"jsonStatCacheAt:put:",{aKey:aKey,aJson:aJson},smalltalk.CWMonster.klass)})},
args: ["aKey", "aJson"],
source: "jsonStatCacheAt: aKey put: aJson\x0a\x09^ self jsonStatCache at: aKey put: aJson",
messageSends: ["at:put:", "jsonStatCache"],
referencedClasses: []
}),
smalltalk.CWMonster.klass);


smalltalk.addClass('CWHeros', smalltalk.CWMonster, [], 'Easnoth-BusinessObjects');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitHeros_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.CWHeros)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitHeros: self",
messageSends: ["visitHeros:"],
referencedClasses: []
}),
smalltalk.CWHeros);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultHp",
category: 'initialize-release',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(2);
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultHp",{},smalltalk.CWHeros)})},
args: [],
source: "defaultHp\x0a\x09^ 2",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWHeros);



smalltalk.addClass('CWTroop', smalltalk.CWMonster, [], 'Easnoth-BusinessObjects');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitTroop_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.CWTroop)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitTroop: self",
messageSends: ["visitTroop:"],
referencedClasses: []
}),
smalltalk.CWTroop);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultHp",
category: 'initialize-release',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(4);
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultHp",{},smalltalk.CWTroop)})},
args: [],
source: "defaultHp\x0a\x09^ 4",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWTroop);



smalltalk.addMethod(
smalltalk.method({
selector: "keys",
category: '*Easnoth-BusinessObjects',
fn: function (){
var self=this;
var col;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1;
col=_st($Array())._new();
_st(self)._keysDo_((function(key){
return smalltalk.withContext(function($ctx2) {
return _st(col)._add_(key);
}, function($ctx2) {$ctx2.fillBlock({key:key},$ctx1)})}));
$1=col;
return $1;
}, function($ctx1) {$ctx1.fill(self,"keys",{col:col},smalltalk.JSObjectProxy)})},
args: [],
source: "keys\x0a\x09| col |\x0a    col := Array new.\x0a\x09self keysDo: [:key |\x0a    \x09col add: key ].\x0a       ^ col",
messageSends: ["new", "keysDo:", "add:"],
referencedClasses: ["Array"]
}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "keysDo:",
category: '*Easnoth-BusinessObjects',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 

    	var o = self['@jsObject'];
    	for(var i in o) {
			aBlock(i);
		}
    ;
return self}, function($ctx1) {$ctx1.fill(self,"keysDo:",{aBlock:aBlock},smalltalk.JSObjectProxy)})},
args: ["aBlock"],
source: "keysDo: aBlock\x0a\x09<\x0a    \x09var o = self['@jsObject'];\x0a    \x09for(var i in o) {\x0a\x09\x09\x09aBlock(i);\x0a\x09\x09}\x0a    >",
messageSends: [],
referencedClasses: []
}),
smalltalk.JSObjectProxy);

