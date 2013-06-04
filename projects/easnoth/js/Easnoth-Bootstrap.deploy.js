smalltalk.addPackage('Easnoth-Bootstrap');
smalltalk.addClass('CWBootstrapper', smalltalk.Object, ['objectToLoad', 'objectLoaded', 'loadingBar', 'hasStarted', 'sidePanels'], 'Easnoth-Bootstrap');
smalltalk.addMethod(
smalltalk.method({
selector: "announcer",
fn: function (){
var self=this;
function $CWEasnothAnnouncer(){return smalltalk.CWEasnothAnnouncer||(typeof CWEasnothAnnouncer=="undefined"?nil:CWEasnothAnnouncer)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($CWEasnothAnnouncer())._current();
return $1;
}, function($ctx1) {$ctx1.fill(self,"announcer",{},smalltalk.CWBootstrapper)})},
messageSends: ["current"]}),
smalltalk.CWBootstrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "bootstrap:",
fn: function (gameSettings){
var self=this;
function $CWLoadingBar(){return smalltalk.CWLoadingBar||(typeof CWLoadingBar=="undefined"?nil:CWLoadingBar)}
function $CWGame(){return smalltalk.CWGame||(typeof CWGame=="undefined"?nil:CWGame)}
return smalltalk.withContext(function($ctx1) { 
self["@loadingBar"]=_st(_st($CWLoadingBar())._new())._appendToJQuery_(_st("#global")._asJQuery());
_st(_st($CWGame())._new())._initializeWithSettings_(gameSettings);
self["@hasStarted"]=false;
return self}, function($ctx1) {$ctx1.fill(self,"bootstrap:",{gameSettings:gameSettings},smalltalk.CWBootstrapper)})},
messageSends: ["appendToJQuery:", "asJQuery", "new", "initializeWithSettings:"]}),
smalltalk.CWBootstrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "checkIfReady",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@objectToLoad"]).__eq(self["@objectLoaded"])).__and(_st(self["@hasStarted"])._not());
if(smalltalk.assert($1)){
_st(self)._startGame();
};
return self}, function($ctx1) {$ctx1.fill(self,"checkIfReady",{},smalltalk.CWBootstrapper)})},
messageSends: ["ifTrue:", "startGame", "&", "not", "="]}),
smalltalk.CWBootstrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "imagesToPreload",
fn: function (){
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st($Array())._new_((5));
_st($2)._at_put_((1),"red");
_st($2)._at_put_((2),"green");
_st($2)._at_put_((3),"white");
_st($2)._at_put_((4),"invis");
_st($2)._at_put_((5),"darkGreen");
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"imagesToPreload",{},smalltalk.CWBootstrapper)})},
messageSends: ["at:put:", "new:", "yourself"]}),
smalltalk.CWBootstrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.Object.fn.prototype._initialize.apply(_st(self), []);
self["@hasStarted"]=true;
self["@objectToLoad"]=(0);
self["@objectLoaded"]=(0);
_st(self)._initializeSidePanels();
_st(self)._initializeEventHandling();
_st(self)._preloadImages();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.CWBootstrapper)})},
messageSends: ["initialize", "initializeSidePanels", "initializeEventHandling", "preloadImages"]}),
smalltalk.CWBootstrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeEventHandling",
fn: function (){
var self=this;
function $CWWaitForObject(){return smalltalk.CWWaitForObject||(typeof CWWaitForObject=="undefined"?nil:CWWaitForObject)}
function $CWObjectLoaded(){return smalltalk.CWObjectLoaded||(typeof CWObjectLoaded=="undefined"?nil:CWObjectLoaded)}
function $CWMapMoveEvent(){return smalltalk.CWMapMoveEvent||(typeof CWMapMoveEvent=="undefined"?nil:CWMapMoveEvent)}
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._announcer())._on_do_($CWWaitForObject(),(function(){
return smalltalk.withContext(function($ctx2) {
self["@objectToLoad"]=_st(self["@objectToLoad"]).__plus((1));
return self["@objectToLoad"];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(_st(self)._announcer())._on_do_($CWObjectLoaded(),(function(){
return smalltalk.withContext(function($ctx2) {
self["@objectLoaded"]=_st(self["@objectLoaded"]).__plus((1));
self["@objectLoaded"];
return _st(self)._checkIfReady();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(_st(self)._announcer())._on_do_($CWMapMoveEvent(),(function(){
return smalltalk.withContext(function($ctx2) {
return _st(self)._updateSidePanels();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(self)._onWindowResize_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self)._updateSidePanels();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initializeEventHandling",{},smalltalk.CWBootstrapper)})},
messageSends: ["on:do:", "+", "announcer", "checkIfReady", "updateSidePanels", "onWindowResize:"]}),
smalltalk.CWBootstrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeSidePanels",
fn: function (){
var self=this;
var html,global;
function $HTMLCanvas(){return smalltalk.HTMLCanvas||(typeof HTMLCanvas=="undefined"?nil:HTMLCanvas)}
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
html=_st($HTMLCanvas())._onJQuery_(_st("body")._asJQuery());
global=_st("#global")._asJQuery();
self["@sidePanels"]=_st($Array())._new();
_st(self["@sidePanels"])._add_(_st(_st(html)._div())._class_("sidePanel"));
_st(self["@sidePanels"])._add_(_st(_st(html)._div())._class_("sidePanel"));
_st(self["@sidePanels"])._add_(_st(_st(html)._div())._class_("sidePanel"));
_st(self["@sidePanels"])._add_(_st(_st(html)._div())._class_("sidePanel"));
_st(self)._updateSidePanels();
return self}, function($ctx1) {$ctx1.fill(self,"initializeSidePanels",{html:html,global:global},smalltalk.CWBootstrapper)})},
messageSends: ["onJQuery:", "asJQuery", "new", "add:", "class:", "div", "updateSidePanels"]}),
smalltalk.CWBootstrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "onWindowResize:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
jQuery(window).resize(aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onWindowResize:",{aBlock:aBlock},smalltalk.CWBootstrapper)})},
messageSends: []}),
smalltalk.CWBootstrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "preloadImages",
fn: function (){
var self=this;
function $CWGameOverTile(){return smalltalk.CWGameOverTile||(typeof CWGameOverTile=="undefined"?nil:CWGameOverTile)}
function $CWBackground(){return smalltalk.CWBackground||(typeof CWBackground=="undefined"?nil:CWBackground)}
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._imagesToPreload())._do_((function(key){
return smalltalk.withContext(function($ctx2) {
return _st($CWGameOverTile())._newImageFrom_(key);
}, function($ctx2) {$ctx2.fillBlock({key:key},$ctx1)})}));
_st($CWBackground())._newImageFrom_("back");
return self}, function($ctx1) {$ctx1.fill(self,"preloadImages",{},smalltalk.CWBootstrapper)})},
messageSends: ["do:", "newImageFrom:", "imagesToPreload"]}),
smalltalk.CWBootstrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "startGame",
fn: function (){
var self=this;
function $CWGameStart(){return smalltalk.CWGameStart||(typeof CWGameStart=="undefined"?nil:CWGameStart)}
return smalltalk.withContext(function($ctx1) { 
self["@hasStarted"]=true;
_st(self["@loadingBar"])._hide();
_st(_st(self)._announcer())._announce_(_st($CWGameStart())._new());
return self}, function($ctx1) {$ctx1.fill(self,"startGame",{},smalltalk.CWBootstrapper)})},
messageSends: ["hide", "announce:", "new", "announcer"]}),
smalltalk.CWBootstrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "updateSidePanels",
fn: function (){
var self=this;
var global;
return smalltalk.withContext(function($ctx1) { 
global=_st("#global")._asJQuery();
_st(global)._css_put_("margin-top",_st(_st(_st(_st(_st(window)._innerHeight()).__minus((640))).__slash((2)))._asString()).__comma("px"));
_st(_st(self["@sidePanels"])._at_((1)))._style_(_st(_st(_st("position: absolute; top: 0; left: 0; height: ").__comma(_st(window)._innerHeight())).__comma("px; width:")).__comma(_st(global)._css_("margin-left")));
_st(_st(self["@sidePanels"])._at_((2)))._style_(_st(_st(_st("position: absolute; top: 0; right: 0; height: ").__comma(_st(window)._innerHeight())).__comma("px; width:")).__comma(_st(global)._css_("margin-right")));
_st(_st(self["@sidePanels"])._at_((3)))._style_(_st(_st(_st(_st("position: absolute; top: 0; left: 0; height: ").__comma(_st(global)._css_("margin-top"))).__comma("; width:")).__comma(_st(window)._innerWidth())).__comma("px"));
_st(_st(self["@sidePanels"])._at_((4)))._style_(_st(_st(_st(_st("position: absolute; bottom: 0; left: 0; height: ").__comma(_st(global)._css_("margin-bottom"))).__comma("; width:")).__comma(_st(window)._innerWidth())).__comma("px"));
return self}, function($ctx1) {$ctx1.fill(self,"updateSidePanels",{global:global},smalltalk.CWBootstrapper)})},
messageSends: ["asJQuery", "css:put:", ",", "asString", "/", "-", "innerHeight", "style:", "css:", "at:", "innerWidth"]}),
smalltalk.CWBootstrapper);


smalltalk.addMethod(
smalltalk.method({
selector: "bootstrap:",
fn: function (gameSettings){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._new())._bootstrap_(gameSettings);
return $1;
}, function($ctx1) {$ctx1.fill(self,"bootstrap:",{gameSettings:gameSettings},smalltalk.CWBootstrapper.klass)})},
messageSends: ["bootstrap:", "new"]}),
smalltalk.CWBootstrapper.klass);


smalltalk.addClass('CWGameSettings', smalltalk.Object, ['players', 'mapNumber'], 'Easnoth-Bootstrap');
smalltalk.addMethod(
smalltalk.method({
selector: "addPlayer:",
fn: function (aPlayer){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@players"])._add_(aPlayer);
return self}, function($ctx1) {$ctx1.fill(self,"addPlayer:",{aPlayer:aPlayer},smalltalk.CWGameSettings)})},
messageSends: ["add:"]}),
smalltalk.CWGameSettings);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.Object.fn.prototype._initialize.apply(_st(self), []);
self["@players"]=_st($Array())._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.CWGameSettings)})},
messageSends: ["initialize", "new"]}),
smalltalk.CWGameSettings);

smalltalk.addMethod(
smalltalk.method({
selector: "mapNumber",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@mapNumber"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"mapNumber",{},smalltalk.CWGameSettings)})},
messageSends: []}),
smalltalk.CWGameSettings);

smalltalk.addMethod(
smalltalk.method({
selector: "mapNumber:",
fn: function (int){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@mapNumber"]=int;
return self}, function($ctx1) {$ctx1.fill(self,"mapNumber:",{int:int},smalltalk.CWGameSettings)})},
messageSends: []}),
smalltalk.CWGameSettings);

smalltalk.addMethod(
smalltalk.method({
selector: "players",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@players"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"players",{},smalltalk.CWGameSettings)})},
messageSends: []}),
smalltalk.CWGameSettings);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=aStream;
_st($1)._nextPutAll_("settings(map n.");
_st($1)._nextPutAll_(_st(self["@mapNumber"])._printString());
$2=_st($1)._nextPutAll_("; ");
_st(self["@players"])._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._printOn_(aStream);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
_st(aStream)._nextPutAll_(")");
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},smalltalk.CWGameSettings)})},
messageSends: ["nextPutAll:", "printString", "do:", "printOn:"]}),
smalltalk.CWGameSettings);



smalltalk.addClass('CWLoadingBar', smalltalk.Widget, ['box'], 'Easnoth-Bootstrap');
smalltalk.addMethod(
smalltalk.method({
selector: "hide",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@box"])._hidden();
return self}, function($ctx1) {$ctx1.fill(self,"hide",{},smalltalk.CWLoadingBar)})},
messageSends: ["hidden"]}),
smalltalk.CWLoadingBar);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._img();
_st($1)._class_("loadBar");
$2=_st($1)._src_("ressources/images/loading.png");
self["@box"]=$2;
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.CWLoadingBar)})},
messageSends: ["class:", "img", "src:"]}),
smalltalk.CWLoadingBar);



smalltalk.addClass('CWStartMenu', smalltalk.Widget, ['box', 'subBox', 'gameSettings'], 'Easnoth-Bootstrap');
smalltalk.addMethod(
smalltalk.method({
selector: "armySelectBox:on:",
fn: function (playerNumber,html){
var self=this;
var selectBox;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
selectBox=_st(html)._select();
$1=selectBox;
_st($1)._class_(_st(_st(self)._selectBoxClasses())._at_(playerNumber));
_st($1)._onChange_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(_st(self["@gameSettings"])._players())._at_(playerNumber))._team_(_st(_st(selectBox)._asJQuery())._val());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
_st(_st(html)._option())._with_("elves");
_st(_st(html)._option())._with_("kingdom");
_st(_st(html)._option())._with_("merfolks");
_st(_st(html)._option())._with_("dwarves");
return _st(_st(html)._option())._with_("outlaws");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"armySelectBox:on:",{playerNumber:playerNumber,html:html,selectBox:selectBox},smalltalk.CWStartMenu)})},
messageSends: ["select", "class:", "at:", "selectBoxClasses", "onChange:", "team:", "val", "asJQuery", "players", "with:", "option"]}),
smalltalk.CWStartMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "choosePlayers",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@gameSettings"])._addPlayer_(_st(self)._defaultPlayer());
_st(self["@gameSettings"])._addPlayer_(_st(self)._defaultPlayer());
_st(self)._playerMenu();
return self}, function($ctx1) {$ctx1.fill(self,"choosePlayers",{},smalltalk.CWStartMenu)})},
messageSends: ["addPlayer:", "defaultPlayer", "playerMenu"]}),
smalltalk.CWStartMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "credits",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$2;
_st(self["@subBox"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) {
$1=_st(html)._ul();
_st($1)._class_("menu");
_st($1)._style_("font-size: 16px;\x0a\x09\x09\x09\x09\x09margin-top: -0.5%");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx3) {
_st(_st(html)._li())._with_((function(){
return smalltalk.withContext(function($ctx4) {
_st(_st(html)._strong())._with_("Development : ");
_st(html)._br();
$3=_st(html)._a();
_st($3)._with_("Clément Béra");
_st($3)._target_("_blank");
$4=_st($3)._href_("http://clementbera.wordpress.com/");
return $4;
}, function($ctx4) {$ctx4.fillBlock({},$ctx1)})}));
_st(_st(html)._li())._with_((function(){
return smalltalk.withContext(function($ctx4) {
_st(_st(html)._strong())._with_("Graphics : ");
_st(html)._br();
$5=_st(html)._a();
_st($5)._with_("Lusy Dolia");
_st($5)._target_("_blank");
$6=_st($5)._href_("https://www.facebook.com/lusy.dolya");
$6;
_st(html)._br();
$7=_st(html)._a();
_st($7)._with_("Battle for Wesnoth");
_st($7)._target_("_blank");
$8=_st($7)._href_("http://www.wesnoth.org/");
return $8;
}, function($ctx4) {$ctx4.fillBlock({},$ctx1)})}));
_st(_st(html)._li())._with_((function(){
return smalltalk.withContext(function($ctx4) {
_st(_st(html)._strong())._with_("Thanks to : ");
_st(html)._br();
$9=_st(html)._a();
_st($9)._with_("Amber web framework");
_st($9)._target_("_blank");
$10=_st($9)._href_("http://amber-lang.net/");
$10;
_st(html)._br();
$11=_st(html)._a();
_st($11)._with_("Nicolas Petton (Amber core developer)");
_st($11)._target_("_blank");
$12=_st($11)._href_("http://www.nicolas-petton.fr/");
return $12;
}, function($ctx4) {$ctx4.fillBlock({},$ctx1)})}));
return _st(_st(html)._li())._with_((function(){
return smalltalk.withContext(function($ctx4) {
$13=_st(html)._button();
_st($13)._with_("> back <");
$14=_st($13)._onClick_((function(){
return smalltalk.withContext(function($ctx5) {
return _st(self)._menuOn_with_(html,_st(self)._startingMenuDict());
}, function($ctx5) {$ctx5.fillBlock({},$ctx1)})}));
return $14;
}, function($ctx4) {$ctx4.fillBlock({},$ctx1)})}));
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
return $2;
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"credits",{},smalltalk.CWStartMenu)})},
messageSends: ["contents:", "class:", "ul", "style:", "with:", "strong", "br", "a", "target:", "href:", "li", "button", "onClick:", "menuOn:with:", "startingMenuDict"]}),
smalltalk.CWStartMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultPlayer",
fn: function (){
var self=this;
function $CWHuman(){return smalltalk.CWHuman||(typeof CWHuman=="undefined"?nil:CWHuman)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st($CWHuman())._new())._team_("elves");
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultPlayer",{},smalltalk.CWStartMenu)})},
messageSends: ["team:", "new"]}),
smalltalk.CWStartMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
function $CWGameSettings(){return smalltalk.CWGameSettings||(typeof CWGameSettings=="undefined"?nil:CWGameSettings)}
function $CWBootstrapper(){return smalltalk.CWBootstrapper||(typeof CWBootstrapper=="undefined"?nil:CWBootstrapper)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.Widget.fn.prototype._initialize.apply(_st(self), []);
self["@gameSettings"]=_st($CWGameSettings())._new();
_st($CWBootstrapper())._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.CWStartMenu)})},
messageSends: ["initialize", "new"]}),
smalltalk.CWStartMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "menuOn:with:",
fn: function (html,dict){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$5,$6,$4,$7,$1;
$2=self["@subBox"];
_st($2)._contents_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._ul();
_st($3)._class_("menu");
_st($3)._style_("margin-top: 5%");
$4=_st($3)._with_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(dict)._keysAndValuesDo_((function(key,value){
return smalltalk.withContext(function($ctx4) {
return _st(_st(html)._li())._with_((function(){
return smalltalk.withContext(function($ctx5) {
$5=_st(html)._a();
_st($5)._href_("#");
_st($5)._with_(key);
$6=_st($5)._onClick_(value);
return $6;
}, function($ctx5) {$ctx5.fillBlock({},$ctx1)})}));
}, function($ctx4) {$ctx4.fillBlock({key:key,value:value},$ctx1)})}));
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
return $4;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$7=_st($2)._yourself();
$1=$7;
return $1;
}, function($ctx1) {$ctx1.fill(self,"menuOn:with:",{html:html,dict:dict},smalltalk.CWStartMenu)})},
messageSends: ["contents:", "class:", "ul", "style:", "with:", "keysAndValuesDo:", "href:", "a", "onClick:", "li", "yourself"]}),
smalltalk.CWStartMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "playerMenu",
fn: function (){
var self=this;
var selectBox;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
_st(self["@subBox"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) {
$1=_st(html)._ul();
_st($1)._class_("menu");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx3) {
return _st((1))._to_do_((2),(function(n){
return smalltalk.withContext(function($ctx4) {
return _st(self)._playerSelection_on_(n,html);
}, function($ctx4) {$ctx4.fillBlock({n:n},$ctx1)})}));
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
$2;
$3=_st(html)._button();
_st($3)._class_("startButton");
$4=_st($3)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(self)._startBeta();
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
return $4;
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"playerMenu",{selectBox:selectBox},smalltalk.CWStartMenu)})},
messageSends: ["contents:", "class:", "ul", "with:", "to:do:", "playerSelection:on:", "button", "onClick:", "startBeta"]}),
smalltalk.CWStartMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "playerSelectBox:on:",
fn: function (playerNumber,html){
var self=this;
var selectBox;
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$5,$6,$2;
selectBox=_st(html)._select();
$1=selectBox;
_st($1)._class_(_st(_st(self)._selectBoxClasses())._at_(playerNumber));
_st($1)._onChange_((function(){
var oldTeam;
return smalltalk.withContext(function($ctx2) {
oldTeam=_st(_st(_st(self["@gameSettings"])._players())._at_(playerNumber))._team();
oldTeam;
_st(_st(self["@gameSettings"])._players())._at_put_(playerNumber,_st(_st(_st($Smalltalk())._current())._at_(_st(_st(selectBox)._asJQuery())._val()))._new());
return _st(_st(_st(self["@gameSettings"])._players())._at_(playerNumber))._team_(oldTeam);
}, function($ctx2) {$ctx2.fillBlock({oldTeam:oldTeam},$ctx1)})}));
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._option();
_st($3)._with_("human");
$4=_st($3)._value_("CWHuman");
$4;
$5=_st(html)._option();
_st($5)._with_("AI type 1");
$6=_st($5)._value_("CWAggressWeakestAI");
return $6;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"playerSelectBox:on:",{playerNumber:playerNumber,html:html,selectBox:selectBox},smalltalk.CWStartMenu)})},
messageSends: ["select", "class:", "at:", "selectBoxClasses", "onChange:", "team", "players", "at:put:", "new", "val", "asJQuery", "current", "team:", "with:", "option", "value:"]}),
smalltalk.CWStartMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "playerSelection:on:",
fn: function (playerNumber,html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(html)._li())._with_(_st("Player ").__comma(playerNumber));
_st(_st(html)._li())._with_((function(){
return smalltalk.withContext(function($ctx2) {
_st(self)._playerSelectBox_on_(playerNumber,html);
return _st(self)._armySelectBox_on_(playerNumber,html);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"playerSelection:on:",{playerNumber:playerNumber,html:html},smalltalk.CWStartMenu)})},
messageSends: ["with:", ",", "li", "playerSelectBox:on:", "armySelectBox:on:"]}),
smalltalk.CWStartMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._div();
_st($1)._class_("intro");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
self["@subBox"]=_st(_st(html)._div())._class_("introMenu");
return self["@subBox"];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
self["@box"]=$2;
_st(self)._menuOn_with_(html,_st(self)._startingMenuDict());
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.CWStartMenu)})},
messageSends: ["class:", "div", "with:", "menuOn:with:", "startingMenuDict"]}),
smalltalk.CWStartMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "selectBoxClasses",
fn: function (){
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st($Array())._new_((2));
_st($2)._at_put_((1),"styledSelectGreen");
_st($2)._at_put_((2),"styledSelectRed");
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectBoxClasses",{},smalltalk.CWStartMenu)})},
messageSends: ["at:put:", "new:", "yourself"]}),
smalltalk.CWStartMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "startBeta",
fn: function (){
var self=this;
function $CWBootstrapper(){return smalltalk.CWBootstrapper||(typeof CWBootstrapper=="undefined"?nil:CWBootstrapper)}
return smalltalk.withContext(function($ctx1) { 
_st(self["@box"])._hidden();
_st(self["@gameSettings"])._mapNumber_((8));
_st($CWBootstrapper())._bootstrap_(self["@gameSettings"]);
return self}, function($ctx1) {$ctx1.fill(self,"startBeta",{},smalltalk.CWStartMenu)})},
messageSends: ["hidden", "mapNumber:", "bootstrap:"]}),
smalltalk.CWStartMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "startingMenuDict",
fn: function (){
var self=this;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st($Dictionary())._new();
_st($2)._at_put_("Tutorial",(function(){
return smalltalk.withContext(function($ctx2) {
return _st(self)._tutorial();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st($2)._at_put_("Campaign",(function(){
return smalltalk.withContext(function($ctx2) {
return _st(window)._alert_("for future use, click on custom game");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st($2)._at_put_("Custom game",(function(){
return smalltalk.withContext(function($ctx2) {
return _st(self)._choosePlayers();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st($2)._at_put_("Credits",(function(){
return smalltalk.withContext(function($ctx2) {
return _st(self)._credits();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"startingMenuDict",{},smalltalk.CWStartMenu)})},
messageSends: ["at:put:", "tutorial", "new", "alert:", "choosePlayers", "credits", "yourself"]}),
smalltalk.CWStartMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "tutorial",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$2;
_st(_st(self["@box"])._asJQuery())._css_value_("background-image","url(ressources/images/coverempty.jpg)");
_st(self["@subBox"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) {
$1=_st(html)._ul();
_st($1)._class_("menu");
_st($1)._style_("font-size: 16px;\x0a\x09\x09\x09\x09\x09margin-top: -0.5%");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx3) {
$3=_st(html)._button();
_st($3)._with_("> back <");
$4=_st($3)._onClick_((function(){
return smalltalk.withContext(function($ctx4) {
_st(_st(self["@box"])._asJQuery())._css_value_("background-image","url(ressources/images/covergame.jpg)");
return _st(self)._menuOn_with_(html,_st(self)._startingMenuDict());
}, function($ctx4) {$ctx4.fillBlock({},$ctx1)})}));
return $4;
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
return $2;
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"tutorial",{},smalltalk.CWStartMenu)})},
messageSends: ["css:value:", "asJQuery", "contents:", "class:", "ul", "style:", "with:", "button", "onClick:", "menuOn:with:", "startingMenuDict"]}),
smalltalk.CWStartMenu);


smalltalk.addMethod(
smalltalk.method({
selector: "start",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._new())._appendToJQuery_(_st("#global")._asJQuery());
return $1;
}, function($ctx1) {$ctx1.fill(self,"start",{},smalltalk.CWStartMenu.klass)})},
messageSends: ["appendToJQuery:", "asJQuery", "new"]}),
smalltalk.CWStartMenu.klass);


