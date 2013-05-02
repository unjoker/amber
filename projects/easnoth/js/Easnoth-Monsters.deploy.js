smalltalk.addPackage('Easnoth-Monsters');
smalltalk.addClass('CWStrategy', smalltalk.Object, [], 'Easnoth-Monsters');

smalltalk.CWStrategy.klass.iVarNames = ['default'];
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
}, function($ctx1) {$ctx1.fill(self,"default",{},smalltalk.CWStrategy.klass)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.CWStrategy.klass);


smalltalk.addClass('CWMonsterStrategy', smalltalk.CWStrategy, [], 'Easnoth-Monsters');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:for:",
fn: function (aVisitor,aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"accept:for:",{aVisitor:aVisitor,aMonster:aMonster},smalltalk.CWMonsterStrategy)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.CWMonsterStrategy);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultHP",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"defaultHP",{},smalltalk.CWMonsterStrategy)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.CWMonsterStrategy);

smalltalk.addMethod(
smalltalk.method({
selector: "isHeros",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"isHeros",{},smalltalk.CWMonsterStrategy)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.CWMonsterStrategy);

smalltalk.addMethod(
smalltalk.method({
selector: "key",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.CWMonsterStrategy)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.CWMonsterStrategy);



smalltalk.addClass('CWHerosStrategy', smalltalk.CWMonsterStrategy, [], 'Easnoth-Monsters');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:for:",
fn: function (aVisitor,aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitHeros_(aMonster);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:for:",{aVisitor:aVisitor,aMonster:aMonster},smalltalk.CWHerosStrategy)})},
messageSends: ["visitHeros:"]}),
smalltalk.CWHerosStrategy);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultHP",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(2);
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultHP",{},smalltalk.CWHerosStrategy)})},
messageSends: []}),
smalltalk.CWHerosStrategy);

smalltalk.addMethod(
smalltalk.method({
selector: "isHeros",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isHeros",{},smalltalk.CWHerosStrategy)})},
messageSends: []}),
smalltalk.CWHerosStrategy);

smalltalk.addMethod(
smalltalk.method({
selector: "key",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "-heros";
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.CWHerosStrategy)})},
messageSends: []}),
smalltalk.CWHerosStrategy);



smalltalk.addClass('CWUnitStrategy', smalltalk.CWMonsterStrategy, [], 'Easnoth-Monsters');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:for:",
fn: function (aVisitor,aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitUnit_(aMonster);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:for:",{aVisitor:aVisitor,aMonster:aMonster},smalltalk.CWUnitStrategy)})},
messageSends: ["visitUnit:"]}),
smalltalk.CWUnitStrategy);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultHP",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(4);
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultHP",{},smalltalk.CWUnitStrategy)})},
messageSends: []}),
smalltalk.CWUnitStrategy);

smalltalk.addMethod(
smalltalk.method({
selector: "isHeros",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isHeros",{},smalltalk.CWUnitStrategy)})},
messageSends: []}),
smalltalk.CWUnitStrategy);

smalltalk.addMethod(
smalltalk.method({
selector: "key",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "";
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.CWUnitStrategy)})},
messageSends: []}),
smalltalk.CWUnitStrategy);



smalltalk.addClass('CWMonsterTypeStrategy', smalltalk.CWStrategy, [], 'Easnoth-Monsters');
smalltalk.addMethod(
smalltalk.method({
selector: "isRanged",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isRanged",{},smalltalk.CWMonsterTypeStrategy)})},
messageSends: []}),
smalltalk.CWMonsterTypeStrategy);

smalltalk.addMethod(
smalltalk.method({
selector: "key",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.CWMonsterTypeStrategy)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.CWMonsterTypeStrategy);

smalltalk.addMethod(
smalltalk.method({
selector: "monster:attackNeighbour:inContext:",
fn: function (aMonster,anotherMonster,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"monster:attackNeighbour:inContext:",{aMonster:aMonster,anotherMonster:anotherMonster,gameContext:gameContext},smalltalk.CWMonsterTypeStrategy)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.CWMonsterTypeStrategy);

smalltalk.addMethod(
smalltalk.method({
selector: "monster:isAttackedByCavalry:inContext:",
fn: function (targetMonster,aMonster,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"monster:isAttackedByCavalry:inContext:",{targetMonster:targetMonster,aMonster:aMonster,gameContext:gameContext},smalltalk.CWMonsterTypeStrategy)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.CWMonsterTypeStrategy);

smalltalk.addMethod(
smalltalk.method({
selector: "monster:isAttackedByRange:inContext:",
fn: function (targetMonster,aMonster,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"monster:isAttackedByRange:inContext:",{targetMonster:targetMonster,aMonster:aMonster,gameContext:gameContext},smalltalk.CWMonsterTypeStrategy)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.CWMonsterTypeStrategy);

smalltalk.addMethod(
smalltalk.method({
selector: "monster:isAttackedByTroop:inContext:",
fn: function (targetMonster,aMonster,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"monster:isAttackedByTroop:inContext:",{targetMonster:targetMonster,aMonster:aMonster,gameContext:gameContext},smalltalk.CWMonsterTypeStrategy)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.CWMonsterTypeStrategy);



smalltalk.addClass('CWCavalryStrategy', smalltalk.CWMonsterTypeStrategy, [], 'Easnoth-Monsters');
smalltalk.addMethod(
smalltalk.method({
selector: "key",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "cavalry";
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.CWCavalryStrategy)})},
messageSends: []}),
smalltalk.CWCavalryStrategy);

smalltalk.addMethod(
smalltalk.method({
selector: "monster:attackNeighbour:inContext:",
fn: function (aCavalry,anotherMonster,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(anotherMonster)._isAttackedByCavalry_inContext_(aCavalry,gameContext);
return $1;
}, function($ctx1) {$ctx1.fill(self,"monster:attackNeighbour:inContext:",{aCavalry:aCavalry,anotherMonster:anotherMonster,gameContext:gameContext},smalltalk.CWCavalryStrategy)})},
messageSends: ["isAttackedByCavalry:inContext:"]}),
smalltalk.CWCavalryStrategy);

smalltalk.addMethod(
smalltalk.method({
selector: "monster:isAttackedByCavalry:inContext:",
fn: function (targetMonster,aMonster,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aMonster)._attack_inContext_bonus_(targetMonster,gameContext,(0));
return $1;
}, function($ctx1) {$ctx1.fill(self,"monster:isAttackedByCavalry:inContext:",{targetMonster:targetMonster,aMonster:aMonster,gameContext:gameContext},smalltalk.CWCavalryStrategy)})},
messageSends: ["attack:inContext:bonus:"]}),
smalltalk.CWCavalryStrategy);

smalltalk.addMethod(
smalltalk.method({
selector: "monster:isAttackedByRange:inContext:",
fn: function (targetMonster,aMonster,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aMonster)._attack_inContext_bonus_(targetMonster,gameContext,(-1));
return $1;
}, function($ctx1) {$ctx1.fill(self,"monster:isAttackedByRange:inContext:",{targetMonster:targetMonster,aMonster:aMonster,gameContext:gameContext},smalltalk.CWCavalryStrategy)})},
messageSends: ["attack:inContext:bonus:"]}),
smalltalk.CWCavalryStrategy);

smalltalk.addMethod(
smalltalk.method({
selector: "monster:isAttackedByTroop:inContext:",
fn: function (targetMonster,aMonster,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aMonster)._attack_inContext_bonus_(targetMonster,gameContext,(1));
return $1;
}, function($ctx1) {$ctx1.fill(self,"monster:isAttackedByTroop:inContext:",{targetMonster:targetMonster,aMonster:aMonster,gameContext:gameContext},smalltalk.CWCavalryStrategy)})},
messageSends: ["attack:inContext:bonus:"]}),
smalltalk.CWCavalryStrategy);



smalltalk.addClass('CWRangeStrategy', smalltalk.CWMonsterTypeStrategy, [], 'Easnoth-Monsters');
smalltalk.addMethod(
smalltalk.method({
selector: "isRanged",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isRanged",{},smalltalk.CWRangeStrategy)})},
messageSends: []}),
smalltalk.CWRangeStrategy);

smalltalk.addMethod(
smalltalk.method({
selector: "key",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "range";
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.CWRangeStrategy)})},
messageSends: []}),
smalltalk.CWRangeStrategy);

smalltalk.addMethod(
smalltalk.method({
selector: "monster:attackNeighbour:inContext:",
fn: function (aRange,anotherMonster,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(anotherMonster)._isAttackedByRange_inContext_(aRange,gameContext);
return $1;
}, function($ctx1) {$ctx1.fill(self,"monster:attackNeighbour:inContext:",{aRange:aRange,anotherMonster:anotherMonster,gameContext:gameContext},smalltalk.CWRangeStrategy)})},
messageSends: ["isAttackedByRange:inContext:"]}),
smalltalk.CWRangeStrategy);

smalltalk.addMethod(
smalltalk.method({
selector: "monster:isAttackedByCavalry:inContext:",
fn: function (targetMonster,aMonster,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aMonster)._attack_inContext_bonus_(targetMonster,gameContext,(1));
return $1;
}, function($ctx1) {$ctx1.fill(self,"monster:isAttackedByCavalry:inContext:",{targetMonster:targetMonster,aMonster:aMonster,gameContext:gameContext},smalltalk.CWRangeStrategy)})},
messageSends: ["attack:inContext:bonus:"]}),
smalltalk.CWRangeStrategy);

smalltalk.addMethod(
smalltalk.method({
selector: "monster:isAttackedByRange:inContext:",
fn: function (targetMonster,aMonster,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aMonster)._attack_inContext_bonus_(targetMonster,gameContext,(0));
return $1;
}, function($ctx1) {$ctx1.fill(self,"monster:isAttackedByRange:inContext:",{targetMonster:targetMonster,aMonster:aMonster,gameContext:gameContext},smalltalk.CWRangeStrategy)})},
messageSends: ["attack:inContext:bonus:"]}),
smalltalk.CWRangeStrategy);

smalltalk.addMethod(
smalltalk.method({
selector: "monster:isAttackedByTroop:inContext:",
fn: function (targetMonster,aMonster,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aMonster)._attack_inContext_bonus_(targetMonster,gameContext,(-1));
return $1;
}, function($ctx1) {$ctx1.fill(self,"monster:isAttackedByTroop:inContext:",{targetMonster:targetMonster,aMonster:aMonster,gameContext:gameContext},smalltalk.CWRangeStrategy)})},
messageSends: ["attack:inContext:bonus:"]}),
smalltalk.CWRangeStrategy);



smalltalk.addClass('CWTroopStrategy', smalltalk.CWMonsterTypeStrategy, [], 'Easnoth-Monsters');
smalltalk.addMethod(
smalltalk.method({
selector: "key",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "troop";
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.CWTroopStrategy)})},
messageSends: []}),
smalltalk.CWTroopStrategy);

smalltalk.addMethod(
smalltalk.method({
selector: "monster:attackNeighbour:inContext:",
fn: function (aTroop,anotherMonster,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(anotherMonster)._isAttackedByTroop_inContext_(aTroop,gameContext);
return $1;
}, function($ctx1) {$ctx1.fill(self,"monster:attackNeighbour:inContext:",{aTroop:aTroop,anotherMonster:anotherMonster,gameContext:gameContext},smalltalk.CWTroopStrategy)})},
messageSends: ["isAttackedByTroop:inContext:"]}),
smalltalk.CWTroopStrategy);

smalltalk.addMethod(
smalltalk.method({
selector: "monster:isAttackedByCavalry:inContext:",
fn: function (targetMonster,aMonster,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aMonster)._attack_inContext_bonus_(targetMonster,gameContext,(-1));
return $1;
}, function($ctx1) {$ctx1.fill(self,"monster:isAttackedByCavalry:inContext:",{targetMonster:targetMonster,aMonster:aMonster,gameContext:gameContext},smalltalk.CWTroopStrategy)})},
messageSends: ["attack:inContext:bonus:"]}),
smalltalk.CWTroopStrategy);

smalltalk.addMethod(
smalltalk.method({
selector: "monster:isAttackedByRange:inContext:",
fn: function (targetMonster,aMonster,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aMonster)._attack_inContext_bonus_(targetMonster,gameContext,(1));
return $1;
}, function($ctx1) {$ctx1.fill(self,"monster:isAttackedByRange:inContext:",{targetMonster:targetMonster,aMonster:aMonster,gameContext:gameContext},smalltalk.CWTroopStrategy)})},
messageSends: ["attack:inContext:bonus:"]}),
smalltalk.CWTroopStrategy);

smalltalk.addMethod(
smalltalk.method({
selector: "monster:isAttackedByTroop:inContext:",
fn: function (targetMonster,aMonster,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aMonster)._attack_inContext_bonus_(targetMonster,gameContext,(0));
return $1;
}, function($ctx1) {$ctx1.fill(self,"monster:isAttackedByTroop:inContext:",{targetMonster:targetMonster,aMonster:aMonster,gameContext:gameContext},smalltalk.CWTroopStrategy)})},
messageSends: ["attack:inContext:bonus:"]}),
smalltalk.CWTroopStrategy);



