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
selector: "key",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.CWMonsterTypeStrategy)})},
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



smalltalk.addClass('CWRangeStrategy', smalltalk.CWMonsterTypeStrategy, [], 'Easnoth-Monsters');
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



