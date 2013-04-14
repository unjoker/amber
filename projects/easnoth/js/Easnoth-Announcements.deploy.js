smalltalk.addPackage('Easnoth-Announcements');
smalltalk.addClass('CWEasnothAnnouncement', smalltalk.SystemAnnouncement, [], 'Easnoth-Announcements');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aVisitor)._announceSafely_(self);
return self}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.CWEasnothAnnouncement)})},
messageSends: ["announceSafely:"]}),
smalltalk.CWEasnothAnnouncement);

smalltalk.addMethod(
smalltalk.method({
selector: "requiresSuspension",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"requiresSuspension",{},smalltalk.CWEasnothAnnouncement)})},
messageSends: []}),
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
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@callback"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"callback",{},smalltalk.CWDicesRolledEvent)})},
messageSends: []}),
smalltalk.CWDicesRolledEvent);

smalltalk.addMethod(
smalltalk.method({
selector: "callback:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@callback"]=aBlock;
return self}, function($ctx1) {$ctx1.fill(self,"callback:",{aBlock:aBlock},smalltalk.CWDicesRolledEvent)})},
messageSends: []}),
smalltalk.CWDicesRolledEvent);

smalltalk.addMethod(
smalltalk.method({
selector: "dices",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@dices"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"dices",{},smalltalk.CWDicesRolledEvent)})},
messageSends: []}),
smalltalk.CWDicesRolledEvent);

smalltalk.addMethod(
smalltalk.method({
selector: "dices:",
fn: function (int){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@dices"]=int;
return self}, function($ctx1) {$ctx1.fill(self,"dices:",{int:int},smalltalk.CWDicesRolledEvent)})},
messageSends: []}),
smalltalk.CWDicesRolledEvent);

smalltalk.addMethod(
smalltalk.method({
selector: "kills",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@kills"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"kills",{},smalltalk.CWDicesRolledEvent)})},
messageSends: []}),
smalltalk.CWDicesRolledEvent);

smalltalk.addMethod(
smalltalk.method({
selector: "kills:",
fn: function (int){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@kills"]=int;
return self}, function($ctx1) {$ctx1.fill(self,"kills:",{int:int},smalltalk.CWDicesRolledEvent)})},
messageSends: []}),
smalltalk.CWDicesRolledEvent);



smalltalk.addClass('CWMonsterUpdateEvent', smalltalk.CWMenuUpdateEvent, ['monster'], 'Easnoth-Announcements');
smalltalk.addMethod(
smalltalk.method({
selector: "monster",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@monster"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"monster",{},smalltalk.CWMonsterUpdateEvent)})},
messageSends: []}),
smalltalk.CWMonsterUpdateEvent);

smalltalk.addMethod(
smalltalk.method({
selector: "monster:",
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@monster"]=aMonster;
return self}, function($ctx1) {$ctx1.fill(self,"monster:",{aMonster:aMonster},smalltalk.CWMonsterUpdateEvent)})},
messageSends: []}),
smalltalk.CWMonsterUpdateEvent);



smalltalk.addClass('CWNextTurnEvent', smalltalk.CWEasnothAnnouncement, [], 'Easnoth-Announcements');


smalltalk.addClass('CWUserAnnouncement', smalltalk.CWEasnothAnnouncement, [], 'Easnoth-Announcements');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._isSuspended();
if(! smalltalk.assert($1)){
_st(aVisitor)._announceSafely_(self);
};
return self}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.CWUserAnnouncement)})},
messageSends: ["ifFalse:", "announceSafely:", "isSuspended"]}),
smalltalk.CWUserAnnouncement);

smalltalk.addMethod(
smalltalk.method({
selector: "requiresSuspension",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"requiresSuspension",{},smalltalk.CWUserAnnouncement)})},
messageSends: []}),
smalltalk.CWUserAnnouncement);



smalltalk.addClass('CWEasnothAnnouncer', smalltalk.SystemAnnouncer, ['suspended'], 'Easnoth-Announcements');
smalltalk.addMethod(
smalltalk.method({
selector: "announce:",
fn: function (anAnnouncement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(anAnnouncement)._accept_(self);
return self}, function($ctx1) {$ctx1.fill(self,"announce:",{anAnnouncement:anAnnouncement},smalltalk.CWEasnothAnnouncer)})},
messageSends: ["accept:"]}),
smalltalk.CWEasnothAnnouncer);

smalltalk.addMethod(
smalltalk.method({
selector: "announceSafely:",
fn: function (anAnnouncement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@suspended"]=_st(anAnnouncement)._requiresSuspension();
smalltalk.SystemAnnouncer.fn.prototype._announce_.apply(_st(self), [anAnnouncement]);
return self}, function($ctx1) {$ctx1.fill(self,"announceSafely:",{anAnnouncement:anAnnouncement},smalltalk.CWEasnothAnnouncer)})},
messageSends: ["requiresSuspension", "announce:"]}),
smalltalk.CWEasnothAnnouncer);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.SystemAnnouncer.fn.prototype._initialize.apply(_st(self), []);
self["@suspended"]=false;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.CWEasnothAnnouncer)})},
messageSends: ["initialize"]}),
smalltalk.CWEasnothAnnouncer);

smalltalk.addMethod(
smalltalk.method({
selector: "isSuspended",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@suspended"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"isSuspended",{},smalltalk.CWEasnothAnnouncer)})},
messageSends: []}),
smalltalk.CWEasnothAnnouncer);

smalltalk.addMethod(
smalltalk.method({
selector: "reactivate",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@suspended"]=false;
return self}, function($ctx1) {$ctx1.fill(self,"reactivate",{},smalltalk.CWEasnothAnnouncer)})},
messageSends: []}),
smalltalk.CWEasnothAnnouncer);



