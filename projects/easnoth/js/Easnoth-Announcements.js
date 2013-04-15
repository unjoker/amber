smalltalk.addPackage('Easnoth-Announcements');
smalltalk.addClass('CWEasnothAnnouncement', smalltalk.SystemAnnouncement, [], 'Easnoth-Announcements');


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


smalltalk.addClass('CWEasnothAnnouncer', smalltalk.SystemAnnouncer, ['suspended'], 'Easnoth-Announcements');


