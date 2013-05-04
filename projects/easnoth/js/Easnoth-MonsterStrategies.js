smalltalk.addPackage('Easnoth-MonsterStrategies');
smalltalk.addClass('CWStrategy', smalltalk.Object, [], 'Easnoth-MonsterStrategies');
smalltalk.CWStrategy.comment="Just here for the sngleton pattern :)"

smalltalk.CWStrategy.klass.iVarNames = ['default'];
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
}, function($ctx1) {$ctx1.fill(self,"default",{},smalltalk.CWStrategy.klass)})},
args: [],
source: "default\x0a\x09^ default ifNil: [ default := self new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: []
}),
smalltalk.CWStrategy.klass);


smalltalk.addClass('CWMonsterStrategy', smalltalk.CWStrategy, [], 'Easnoth-MonsterStrategies');
smalltalk.CWMonsterStrategy.comment="Implements different strategies if the monster is a heros or a unit"
smalltalk.addMethod(
smalltalk.method({
selector: "accept:for:",
category: 'monster strategy API',
fn: function (aVisitor,aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"accept:for:",{aVisitor:aVisitor,aMonster:aMonster},smalltalk.CWMonsterStrategy)})},
args: ["aVisitor", "aMonster"],
source: "accept: aVisitor for: aMonster\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.CWMonsterStrategy);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultHP",
category: 'monster strategy API',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"defaultHP",{},smalltalk.CWMonsterStrategy)})},
args: [],
source: "defaultHP\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.CWMonsterStrategy);

smalltalk.addMethod(
smalltalk.method({
selector: "isHeros",
category: 'monster strategy API',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"isHeros",{},smalltalk.CWMonsterStrategy)})},
args: [],
source: "isHeros\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.CWMonsterStrategy);

smalltalk.addMethod(
smalltalk.method({
selector: "key",
category: 'monster strategy API',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.CWMonsterStrategy)})},
args: [],
source: "key\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.CWMonsterStrategy);



smalltalk.addClass('CWHerosStrategy', smalltalk.CWMonsterStrategy, [], 'Easnoth-MonsterStrategies');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:for:",
category: 'monster strategy API',
fn: function (aVisitor,aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitHeros_(aMonster);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:for:",{aVisitor:aVisitor,aMonster:aMonster},smalltalk.CWHerosStrategy)})},
args: ["aVisitor", "aMonster"],
source: "accept: aVisitor for: aMonster\x0a\x09^ aVisitor visitHeros: aMonster",
messageSends: ["visitHeros:"],
referencedClasses: []
}),
smalltalk.CWHerosStrategy);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultHP",
category: 'monster strategy API',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(2);
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultHP",{},smalltalk.CWHerosStrategy)})},
args: [],
source: "defaultHP\x0a\x09^ 2",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWHerosStrategy);

smalltalk.addMethod(
smalltalk.method({
selector: "isHeros",
category: 'monster strategy API',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isHeros",{},smalltalk.CWHerosStrategy)})},
args: [],
source: "isHeros\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWHerosStrategy);

smalltalk.addMethod(
smalltalk.method({
selector: "key",
category: 'monster strategy API',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "-heros";
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.CWHerosStrategy)})},
args: [],
source: "key\x0a\x09^ '-heros'",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWHerosStrategy);



smalltalk.addClass('CWUnitStrategy', smalltalk.CWMonsterStrategy, [], 'Easnoth-MonsterStrategies');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:for:",
category: 'monster strategy API',
fn: function (aVisitor,aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitUnit_(aMonster);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:for:",{aVisitor:aVisitor,aMonster:aMonster},smalltalk.CWUnitStrategy)})},
args: ["aVisitor", "aMonster"],
source: "accept: aVisitor for: aMonster\x0a\x09^ aVisitor visitUnit: aMonster",
messageSends: ["visitUnit:"],
referencedClasses: []
}),
smalltalk.CWUnitStrategy);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultHP",
category: 'monster strategy API',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(4);
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultHP",{},smalltalk.CWUnitStrategy)})},
args: [],
source: "defaultHP\x0a\x09^ 4",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWUnitStrategy);

smalltalk.addMethod(
smalltalk.method({
selector: "isHeros",
category: 'monster strategy API',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isHeros",{},smalltalk.CWUnitStrategy)})},
args: [],
source: "isHeros\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWUnitStrategy);

smalltalk.addMethod(
smalltalk.method({
selector: "key",
category: 'monster strategy API',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "";
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.CWUnitStrategy)})},
args: [],
source: "key\x0a\x09^ ''",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWUnitStrategy);



smalltalk.addClass('CWMonsterTypeStrategy', smalltalk.CWStrategy, [], 'Easnoth-MonsterStrategies');
smalltalk.CWMonsterTypeStrategy.comment="Implements different strategies if the heros is archer, troop or cavalry"
smalltalk.addMethod(
smalltalk.method({
selector: "isRanged",
category: 'type strategy API',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isRanged",{},smalltalk.CWMonsterTypeStrategy)})},
args: [],
source: "isRanged\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWMonsterTypeStrategy);

smalltalk.addMethod(
smalltalk.method({
selector: "key",
category: 'type strategy API',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.CWMonsterTypeStrategy)})},
args: [],
source: "key\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.CWMonsterTypeStrategy);

smalltalk.addMethod(
smalltalk.method({
selector: "monster:attackNeighbour:inContext:",
category: 'type strategy API',
fn: function (aMonster,anotherMonster,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"monster:attackNeighbour:inContext:",{aMonster:aMonster,anotherMonster:anotherMonster,gameContext:gameContext},smalltalk.CWMonsterTypeStrategy)})},
args: ["aMonster", "anotherMonster", "gameContext"],
source: "monster: aMonster attackNeighbour: anotherMonster inContext: gameContext\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.CWMonsterTypeStrategy);

smalltalk.addMethod(
smalltalk.method({
selector: "monster:isAttackedByCavalry:inContext:",
category: 'type strategy API',
fn: function (targetMonster,aMonster,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"monster:isAttackedByCavalry:inContext:",{targetMonster:targetMonster,aMonster:aMonster,gameContext:gameContext},smalltalk.CWMonsterTypeStrategy)})},
args: ["targetMonster", "aMonster", "gameContext"],
source: "monster: targetMonster isAttackedByCavalry: aMonster inContext: gameContext\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.CWMonsterTypeStrategy);

smalltalk.addMethod(
smalltalk.method({
selector: "monster:isAttackedByRange:inContext:",
category: 'type strategy API',
fn: function (targetMonster,aMonster,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"monster:isAttackedByRange:inContext:",{targetMonster:targetMonster,aMonster:aMonster,gameContext:gameContext},smalltalk.CWMonsterTypeStrategy)})},
args: ["targetMonster", "aMonster", "gameContext"],
source: "monster: targetMonster isAttackedByRange: aMonster inContext: gameContext\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.CWMonsterTypeStrategy);

smalltalk.addMethod(
smalltalk.method({
selector: "monster:isAttackedByTroop:inContext:",
category: 'type strategy API',
fn: function (targetMonster,aMonster,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"monster:isAttackedByTroop:inContext:",{targetMonster:targetMonster,aMonster:aMonster,gameContext:gameContext},smalltalk.CWMonsterTypeStrategy)})},
args: ["targetMonster", "aMonster", "gameContext"],
source: "monster: targetMonster isAttackedByTroop: aMonster inContext: gameContext\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.CWMonsterTypeStrategy);



smalltalk.addClass('CWCavalryStrategy', smalltalk.CWMonsterTypeStrategy, [], 'Easnoth-MonsterStrategies');
smalltalk.addMethod(
smalltalk.method({
selector: "key",
category: 'type strategy API',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "cavalry";
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.CWCavalryStrategy)})},
args: [],
source: "key\x0a\x09^ 'cavalry'",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWCavalryStrategy);

smalltalk.addMethod(
smalltalk.method({
selector: "monster:attackNeighbour:inContext:",
category: 'type strategy API',
fn: function (aCavalry,anotherMonster,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(anotherMonster)._isAttackedByCavalry_inContext_(aCavalry,gameContext);
return $1;
}, function($ctx1) {$ctx1.fill(self,"monster:attackNeighbour:inContext:",{aCavalry:aCavalry,anotherMonster:anotherMonster,gameContext:gameContext},smalltalk.CWCavalryStrategy)})},
args: ["aCavalry", "anotherMonster", "gameContext"],
source: "monster: aCavalry attackNeighbour: anotherMonster inContext: gameContext\x0a\x09^ anotherMonster isAttackedByCavalry: aCavalry inContext: gameContext",
messageSends: ["isAttackedByCavalry:inContext:"],
referencedClasses: []
}),
smalltalk.CWCavalryStrategy);

smalltalk.addMethod(
smalltalk.method({
selector: "monster:isAttackedByCavalry:inContext:",
category: 'type strategy API',
fn: function (targetMonster,aMonster,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aMonster)._attack_inContext_bonus_(targetMonster,gameContext,(0));
return $1;
}, function($ctx1) {$ctx1.fill(self,"monster:isAttackedByCavalry:inContext:",{targetMonster:targetMonster,aMonster:aMonster,gameContext:gameContext},smalltalk.CWCavalryStrategy)})},
args: ["targetMonster", "aMonster", "gameContext"],
source: "monster: targetMonster isAttackedByCavalry: aMonster inContext: gameContext\x0a\x09^ aMonster attack: targetMonster inContext: gameContext bonus: 0",
messageSends: ["attack:inContext:bonus:"],
referencedClasses: []
}),
smalltalk.CWCavalryStrategy);

smalltalk.addMethod(
smalltalk.method({
selector: "monster:isAttackedByRange:inContext:",
category: 'type strategy API',
fn: function (targetMonster,aMonster,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aMonster)._attack_inContext_bonus_(targetMonster,gameContext,(-1));
return $1;
}, function($ctx1) {$ctx1.fill(self,"monster:isAttackedByRange:inContext:",{targetMonster:targetMonster,aMonster:aMonster,gameContext:gameContext},smalltalk.CWCavalryStrategy)})},
args: ["targetMonster", "aMonster", "gameContext"],
source: "monster: targetMonster isAttackedByRange: aMonster inContext: gameContext\x0a\x09^ aMonster attack: targetMonster inContext: gameContext bonus: -1",
messageSends: ["attack:inContext:bonus:"],
referencedClasses: []
}),
smalltalk.CWCavalryStrategy);

smalltalk.addMethod(
smalltalk.method({
selector: "monster:isAttackedByTroop:inContext:",
category: 'type strategy API',
fn: function (targetMonster,aMonster,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aMonster)._attack_inContext_bonus_(targetMonster,gameContext,(1));
return $1;
}, function($ctx1) {$ctx1.fill(self,"monster:isAttackedByTroop:inContext:",{targetMonster:targetMonster,aMonster:aMonster,gameContext:gameContext},smalltalk.CWCavalryStrategy)})},
args: ["targetMonster", "aMonster", "gameContext"],
source: "monster: targetMonster isAttackedByTroop: aMonster inContext: gameContext\x0a\x09^ aMonster attack: targetMonster inContext: gameContext bonus: 1",
messageSends: ["attack:inContext:bonus:"],
referencedClasses: []
}),
smalltalk.CWCavalryStrategy);



smalltalk.addClass('CWRangeStrategy', smalltalk.CWMonsterTypeStrategy, [], 'Easnoth-MonsterStrategies');
smalltalk.addMethod(
smalltalk.method({
selector: "isRanged",
category: 'type strategy API',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isRanged",{},smalltalk.CWRangeStrategy)})},
args: [],
source: "isRanged\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWRangeStrategy);

smalltalk.addMethod(
smalltalk.method({
selector: "key",
category: 'type strategy API',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "range";
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.CWRangeStrategy)})},
args: [],
source: "key\x0a\x09^ 'range'",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWRangeStrategy);

smalltalk.addMethod(
smalltalk.method({
selector: "monster:attackNeighbour:inContext:",
category: 'type strategy API',
fn: function (aRange,anotherMonster,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(anotherMonster)._isAttackedByRange_inContext_(aRange,gameContext);
return $1;
}, function($ctx1) {$ctx1.fill(self,"monster:attackNeighbour:inContext:",{aRange:aRange,anotherMonster:anotherMonster,gameContext:gameContext},smalltalk.CWRangeStrategy)})},
args: ["aRange", "anotherMonster", "gameContext"],
source: "monster: aRange attackNeighbour: anotherMonster inContext: gameContext\x0a\x09^ anotherMonster isAttackedByRange: aRange inContext: gameContext",
messageSends: ["isAttackedByRange:inContext:"],
referencedClasses: []
}),
smalltalk.CWRangeStrategy);

smalltalk.addMethod(
smalltalk.method({
selector: "monster:isAttackedByCavalry:inContext:",
category: 'type strategy API',
fn: function (targetMonster,aMonster,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aMonster)._attack_inContext_bonus_(targetMonster,gameContext,(1));
return $1;
}, function($ctx1) {$ctx1.fill(self,"monster:isAttackedByCavalry:inContext:",{targetMonster:targetMonster,aMonster:aMonster,gameContext:gameContext},smalltalk.CWRangeStrategy)})},
args: ["targetMonster", "aMonster", "gameContext"],
source: "monster: targetMonster isAttackedByCavalry: aMonster inContext: gameContext\x0a\x09^ aMonster attack: targetMonster inContext: gameContext bonus: 1",
messageSends: ["attack:inContext:bonus:"],
referencedClasses: []
}),
smalltalk.CWRangeStrategy);

smalltalk.addMethod(
smalltalk.method({
selector: "monster:isAttackedByRange:inContext:",
category: 'type strategy API',
fn: function (targetMonster,aMonster,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aMonster)._attack_inContext_bonus_(targetMonster,gameContext,(0));
return $1;
}, function($ctx1) {$ctx1.fill(self,"monster:isAttackedByRange:inContext:",{targetMonster:targetMonster,aMonster:aMonster,gameContext:gameContext},smalltalk.CWRangeStrategy)})},
args: ["targetMonster", "aMonster", "gameContext"],
source: "monster: targetMonster isAttackedByRange: aMonster inContext: gameContext\x0a\x09^ aMonster attack: targetMonster inContext: gameContext bonus: 0",
messageSends: ["attack:inContext:bonus:"],
referencedClasses: []
}),
smalltalk.CWRangeStrategy);

smalltalk.addMethod(
smalltalk.method({
selector: "monster:isAttackedByTroop:inContext:",
category: 'type strategy API',
fn: function (targetMonster,aMonster,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aMonster)._attack_inContext_bonus_(targetMonster,gameContext,(-1));
return $1;
}, function($ctx1) {$ctx1.fill(self,"monster:isAttackedByTroop:inContext:",{targetMonster:targetMonster,aMonster:aMonster,gameContext:gameContext},smalltalk.CWRangeStrategy)})},
args: ["targetMonster", "aMonster", "gameContext"],
source: "monster: targetMonster isAttackedByTroop: aMonster inContext: gameContext\x0a\x09^ aMonster attack: targetMonster inContext: gameContext bonus: -1",
messageSends: ["attack:inContext:bonus:"],
referencedClasses: []
}),
smalltalk.CWRangeStrategy);



smalltalk.addClass('CWTroopStrategy', smalltalk.CWMonsterTypeStrategy, [], 'Easnoth-MonsterStrategies');
smalltalk.addMethod(
smalltalk.method({
selector: "key",
category: 'type strategy API',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "troop";
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.CWTroopStrategy)})},
args: [],
source: "key\x0a\x09^ 'troop'",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWTroopStrategy);

smalltalk.addMethod(
smalltalk.method({
selector: "monster:attackNeighbour:inContext:",
category: 'type strategy API',
fn: function (aTroop,anotherMonster,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(anotherMonster)._isAttackedByTroop_inContext_(aTroop,gameContext);
return $1;
}, function($ctx1) {$ctx1.fill(self,"monster:attackNeighbour:inContext:",{aTroop:aTroop,anotherMonster:anotherMonster,gameContext:gameContext},smalltalk.CWTroopStrategy)})},
args: ["aTroop", "anotherMonster", "gameContext"],
source: "monster: aTroop attackNeighbour: anotherMonster inContext: gameContext\x0a\x09^ anotherMonster isAttackedByTroop: aTroop inContext: gameContext",
messageSends: ["isAttackedByTroop:inContext:"],
referencedClasses: []
}),
smalltalk.CWTroopStrategy);

smalltalk.addMethod(
smalltalk.method({
selector: "monster:isAttackedByCavalry:inContext:",
category: 'type strategy API',
fn: function (targetMonster,aMonster,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aMonster)._attack_inContext_bonus_(targetMonster,gameContext,(-1));
return $1;
}, function($ctx1) {$ctx1.fill(self,"monster:isAttackedByCavalry:inContext:",{targetMonster:targetMonster,aMonster:aMonster,gameContext:gameContext},smalltalk.CWTroopStrategy)})},
args: ["targetMonster", "aMonster", "gameContext"],
source: "monster: targetMonster isAttackedByCavalry: aMonster inContext: gameContext\x0a\x09^ aMonster attack: targetMonster inContext: gameContext bonus: -1",
messageSends: ["attack:inContext:bonus:"],
referencedClasses: []
}),
smalltalk.CWTroopStrategy);

smalltalk.addMethod(
smalltalk.method({
selector: "monster:isAttackedByRange:inContext:",
category: 'type strategy API',
fn: function (targetMonster,aMonster,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aMonster)._attack_inContext_bonus_(targetMonster,gameContext,(1));
return $1;
}, function($ctx1) {$ctx1.fill(self,"monster:isAttackedByRange:inContext:",{targetMonster:targetMonster,aMonster:aMonster,gameContext:gameContext},smalltalk.CWTroopStrategy)})},
args: ["targetMonster", "aMonster", "gameContext"],
source: "monster: targetMonster isAttackedByRange: aMonster inContext: gameContext\x0a\x09^ aMonster attack: targetMonster inContext: gameContext bonus: 1",
messageSends: ["attack:inContext:bonus:"],
referencedClasses: []
}),
smalltalk.CWTroopStrategy);

smalltalk.addMethod(
smalltalk.method({
selector: "monster:isAttackedByTroop:inContext:",
category: 'type strategy API',
fn: function (targetMonster,aMonster,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aMonster)._attack_inContext_bonus_(targetMonster,gameContext,(0));
return $1;
}, function($ctx1) {$ctx1.fill(self,"monster:isAttackedByTroop:inContext:",{targetMonster:targetMonster,aMonster:aMonster,gameContext:gameContext},smalltalk.CWTroopStrategy)})},
args: ["targetMonster", "aMonster", "gameContext"],
source: "monster: targetMonster isAttackedByTroop: aMonster inContext: gameContext\x0a\x09^ aMonster attack: targetMonster inContext: gameContext bonus: 0",
messageSends: ["attack:inContext:bonus:"],
referencedClasses: []
}),
smalltalk.CWTroopStrategy);



