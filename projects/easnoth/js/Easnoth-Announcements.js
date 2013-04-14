smalltalk.addPackage('Easnoth-Announcements');
smalltalk.addClass('CWEasnothAnnouncement', smalltalk.SystemAnnouncement, [], 'Easnoth-Announcements');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
category: 'concurrency',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aVisitor)._announceSafely_(self);
return self}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.CWEasnothAnnouncement)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09aVisitor announceSafely: self",
messageSends: ["announceSafely:"],
referencedClasses: []
}),
smalltalk.CWEasnothAnnouncement);

smalltalk.addMethod(
smalltalk.method({
selector: "requiresSuspension",
category: 'concurrency',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"requiresSuspension",{},smalltalk.CWEasnothAnnouncement)})},
args: [],
source: "requiresSuspension\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWEasnothAnnouncement);



smalltalk.addClass('CWBootstrapEvent', smalltalk.CWEasnothAnnouncement, [], 'Easnoth-Announcements');


smalltalk.addClass('CWGameStart', smalltalk.CWBootstrapEvent, [], 'Easnoth-Announcements');


smalltalk.addClass('CWObjectLoaded', smalltalk.CWBootstrapEvent, [], 'Easnoth-Announcements');


smalltalk.addClass('CWWaitForObject', smalltalk.CWBootstrapEvent, [], 'Easnoth-Announcements');


smalltalk.addClass('CWDrawingEvent', smalltalk.CWEasnothAnnouncement, [], 'Easnoth-Announcements');


smalltalk.addClass('CWGOTDrawingEvent', smalltalk.CWDrawingEvent, [], 'Easnoth-Announcements');


smalltalk.addClass('CWGlobalDrawingEvent', smalltalk.CWDrawingEvent, [], 'Easnoth-Announcements');


smalltalk.addClass('CWMonsterAndGOTDrawingEvent', smalltalk.CWDrawingEvent, [], 'Easnoth-Announcements');


smalltalk.addClass('CWMenuUpdateEvent', smalltalk.CWEasnothAnnouncement, [], 'Easnoth-Announcements');


smalltalk.addClass('CWDicesRolledEvent', smalltalk.CWMenuUpdateEvent, ['dices', 'kills', 'callback'], 'Easnoth-Announcements');
smalltalk.addMethod(
smalltalk.method({
selector: "callback",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@callback"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"callback",{},smalltalk.CWDicesRolledEvent)})},
args: [],
source: "callback\x0a\x09^ callback",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWDicesRolledEvent);

smalltalk.addMethod(
smalltalk.method({
selector: "callback:",
category: 'accessing',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@callback"]=aBlock;
return self}, function($ctx1) {$ctx1.fill(self,"callback:",{aBlock:aBlock},smalltalk.CWDicesRolledEvent)})},
args: ["aBlock"],
source: "callback: aBlock\x0a\x09callback := aBlock",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWDicesRolledEvent);

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
}, function($ctx1) {$ctx1.fill(self,"dices",{},smalltalk.CWDicesRolledEvent)})},
args: [],
source: "dices\x0a\x09^ dices",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWDicesRolledEvent);

smalltalk.addMethod(
smalltalk.method({
selector: "dices:",
category: 'accessing',
fn: function (int){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@dices"]=int;
return self}, function($ctx1) {$ctx1.fill(self,"dices:",{int:int},smalltalk.CWDicesRolledEvent)})},
args: ["int"],
source: "dices: int\x0a\x09dices := int",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWDicesRolledEvent);

smalltalk.addMethod(
smalltalk.method({
selector: "kills",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@kills"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"kills",{},smalltalk.CWDicesRolledEvent)})},
args: [],
source: "kills\x0a\x09^ kills",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWDicesRolledEvent);

smalltalk.addMethod(
smalltalk.method({
selector: "kills:",
category: 'accessing',
fn: function (int){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@kills"]=int;
return self}, function($ctx1) {$ctx1.fill(self,"kills:",{int:int},smalltalk.CWDicesRolledEvent)})},
args: ["int"],
source: "kills: int\x0a\x09kills := int",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWDicesRolledEvent);



smalltalk.addClass('CWMonsterUpdateEvent', smalltalk.CWMenuUpdateEvent, ['monster'], 'Easnoth-Announcements');
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
}, function($ctx1) {$ctx1.fill(self,"monster",{},smalltalk.CWMonsterUpdateEvent)})},
args: [],
source: "monster\x0a\x09^ monster",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWMonsterUpdateEvent);

smalltalk.addMethod(
smalltalk.method({
selector: "monster:",
category: 'accessing',
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@monster"]=aMonster;
return self}, function($ctx1) {$ctx1.fill(self,"monster:",{aMonster:aMonster},smalltalk.CWMonsterUpdateEvent)})},
args: ["aMonster"],
source: "monster: aMonster\x0a\x09monster := aMonster",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWMonsterUpdateEvent);



smalltalk.addClass('CWNextTurnEvent', smalltalk.CWEasnothAnnouncement, [], 'Easnoth-Announcements');


smalltalk.addClass('CWUserAnnouncement', smalltalk.CWEasnothAnnouncement, [], 'Easnoth-Announcements');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
category: 'concurrency',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._isSuspended();
if(! smalltalk.assert($1)){
_st(aVisitor)._announceSafely_(self);
};
return self}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.CWUserAnnouncement)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09aVisitor isSuspended ifFalse: [\x0a\x09\x09aVisitor announceSafely: self ]",
messageSends: ["ifFalse:", "announceSafely:", "isSuspended"],
referencedClasses: []
}),
smalltalk.CWUserAnnouncement);

smalltalk.addMethod(
smalltalk.method({
selector: "requiresSuspension",
category: 'concurrency',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"requiresSuspension",{},smalltalk.CWUserAnnouncement)})},
args: [],
source: "requiresSuspension\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWUserAnnouncement);



smalltalk.addClass('CWEasnothAnnouncer', smalltalk.SystemAnnouncer, ['suspended'], 'Easnoth-Announcements');
smalltalk.addMethod(
smalltalk.method({
selector: "announce:",
category: 'events',
fn: function (anAnnouncement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(anAnnouncement)._accept_(self);
return self}, function($ctx1) {$ctx1.fill(self,"announce:",{anAnnouncement:anAnnouncement},smalltalk.CWEasnothAnnouncer)})},
args: ["anAnnouncement"],
source: "announce: anAnnouncement\x0a\x09\x22Transcript \x0a\x09\x09show: '[';\x0a\x09\x09show: Date now minutes; \x0a\x09\x09show: 'min '; \x0a\x09\x09show: Date now seconds; \x0a\x09\x09show: 'sec] '.\x0a\x09Transcript \x0a\x09\x09show: anAnnouncement class; \x0a\x09\x09cr.\x22\x0a\x09anAnnouncement accept: self\x0a\x09\x09",
messageSends: ["accept:"],
referencedClasses: []
}),
smalltalk.CWEasnothAnnouncer);

smalltalk.addMethod(
smalltalk.method({
selector: "announceSafely:",
category: 'events',
fn: function (anAnnouncement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@suspended"]=_st(anAnnouncement)._requiresSuspension();
smalltalk.SystemAnnouncer.fn.prototype._announce_.apply(_st(self), [anAnnouncement]);
return self}, function($ctx1) {$ctx1.fill(self,"announceSafely:",{anAnnouncement:anAnnouncement},smalltalk.CWEasnothAnnouncer)})},
args: ["anAnnouncement"],
source: "announceSafely: anAnnouncement\x0a\x09suspended := anAnnouncement requiresSuspension.\x0a\x09super announce: anAnnouncement\x0a\x09\x09",
messageSends: ["requiresSuspension", "announce:"],
referencedClasses: []
}),
smalltalk.CWEasnothAnnouncer);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.SystemAnnouncer.fn.prototype._initialize.apply(_st(self), []);
self["@suspended"]=false;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.CWEasnothAnnouncer)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09suspended := false.",
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.CWEasnothAnnouncer);

smalltalk.addMethod(
smalltalk.method({
selector: "isSuspended",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@suspended"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"isSuspended",{},smalltalk.CWEasnothAnnouncer)})},
args: [],
source: "isSuspended\x0a\x09^ suspended",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWEasnothAnnouncer);

smalltalk.addMethod(
smalltalk.method({
selector: "reactivate",
category: 'events',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@suspended"]=false;
return self}, function($ctx1) {$ctx1.fill(self,"reactivate",{},smalltalk.CWEasnothAnnouncer)})},
args: [],
source: "reactivate\x0a\x09suspended := false.",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWEasnothAnnouncer);



