smalltalk.addPackage('Easnoth-Bootstrap');
smalltalk.addClass('CWBootstrapper', smalltalk.Object, ['objectToLoad', 'objectLoaded', 'loadingBar', 'hasStarted'], 'Easnoth-Bootstrap');
smalltalk.CWBootstrapper.comment="Bootstrap the system. Currently work only for games, not for the map editor"
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
}, function($ctx1) {$ctx1.fill(self,"announcer",{},smalltalk.CWBootstrapper)})},
args: [],
source: "announcer\x0a\x09^ CWEasnothAnnouncer current",
messageSends: ["current"],
referencedClasses: ["CWEasnothAnnouncer"]
}),
smalltalk.CWBootstrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "bootstrap:",
category: 'initialize-release',
fn: function (gameSettings){
var self=this;
function $CWLoadingBar(){return smalltalk.CWLoadingBar||(typeof CWLoadingBar=="undefined"?nil:CWLoadingBar)}
function $CWGame(){return smalltalk.CWGame||(typeof CWGame=="undefined"?nil:CWGame)}
return smalltalk.withContext(function($ctx1) { 
self["@loadingBar"]=_st(_st($CWLoadingBar())._new())._appendToJQuery_(_st("#global")._asJQuery());
_st(_st($CWGame())._new())._initializeWithSettings_(gameSettings);
self["@hasStarted"]=false;
return self}, function($ctx1) {$ctx1.fill(self,"bootstrap:",{gameSettings:gameSettings},smalltalk.CWBootstrapper)})},
args: ["gameSettings"],
source: "bootstrap: gameSettings\x0a\x09loadingBar := CWLoadingBar new appendToJQuery: '#global' asJQuery.\x0a\x09CWGame new initializeWithSettings: gameSettings.\x0a\x09hasStarted := false.",
messageSends: ["appendToJQuery:", "asJQuery", "new", "initializeWithSettings:"],
referencedClasses: ["CWLoadingBar", "CWGame"]
}),
smalltalk.CWBootstrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "checkIfReady",
category: 'events',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@objectToLoad"]).__eq(self["@objectLoaded"])).__and(_st(self["@hasStarted"])._not());
if(smalltalk.assert($1)){
_st(self)._startGame();
};
return self}, function($ctx1) {$ctx1.fill(self,"checkIfReady",{},smalltalk.CWBootstrapper)})},
args: [],
source: "checkIfReady\x0a\x09objectToLoad = objectLoaded & hasStarted not\x0a\x09\x09ifTrue: [ self startGame ]",
messageSends: ["ifTrue:", "startGame", "&", "not", "="],
referencedClasses: []
}),
smalltalk.CWBootstrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "imagesToPreload",
category: 'accessing',
fn: function (){
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st($Array())._new();
_st($2)._add_("red");
_st($2)._add_("green");
_st($2)._add_("white");
_st($2)._add_("invis");
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"imagesToPreload",{},smalltalk.CWBootstrapper)})},
args: [],
source: "imagesToPreload\x0a\x09^ Array new\x0a\x09\x09add: 'red';\x0a\x09\x09add: 'green';\x0a\x09\x09add: 'white';\x0a\x09\x09add: 'invis';\x0a\x09\x09yourself",
messageSends: ["add:", "new", "yourself"],
referencedClasses: ["Array"]
}),
smalltalk.CWBootstrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.Object.fn.prototype._initialize.apply(_st(self), []);
self["@hasStarted"]=true;
self["@objectToLoad"]=(0);
self["@objectLoaded"]=(0);
_st(self)._initializeEventHandling();
_st(self)._preloadImages();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.CWBootstrapper)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09hasStarted := true.\x0a\x09objectToLoad := 0.\x0a\x09objectLoaded := 0.\x0a\x09self initializeEventHandling.\x0a\x09self preloadImages",
messageSends: ["initialize", "initializeEventHandling", "preloadImages"],
referencedClasses: []
}),
smalltalk.CWBootstrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeEventHandling",
category: 'initialize-release',
fn: function (){
var self=this;
function $CWWaitForObject(){return smalltalk.CWWaitForObject||(typeof CWWaitForObject=="undefined"?nil:CWWaitForObject)}
function $CWObjectLoaded(){return smalltalk.CWObjectLoaded||(typeof CWObjectLoaded=="undefined"?nil:CWObjectLoaded)}
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
return self}, function($ctx1) {$ctx1.fill(self,"initializeEventHandling",{},smalltalk.CWBootstrapper)})},
args: [],
source: "initializeEventHandling\x0a\x09self announcer \x0a\x09\x09on: CWWaitForObject \x0a\x09\x09do: [ objectToLoad := objectToLoad + 1 ].\x0a\x09self announcer \x0a\x09\x09on: CWObjectLoaded \x0a\x09\x09\x09do: [ objectLoaded := objectLoaded + 1.\x0a\x09\x09\x09\x09self checkIfReady].",
messageSends: ["on:do:", "+", "announcer", "checkIfReady"],
referencedClasses: ["CWWaitForObject", "CWObjectLoaded"]
}),
smalltalk.CWBootstrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "preloadImages",
category: 'initialize-release',
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
args: [],
source: "preloadImages\x0a\x09self imagesToPreload do: [ :key |\x0a\x09\x09CWGameOverTile newImageFrom: key ].\x0a\x09CWBackground newImageFrom: 'back'.",
messageSends: ["do:", "newImageFrom:", "imagesToPreload"],
referencedClasses: ["CWGameOverTile", "CWBackground"]
}),
smalltalk.CWBootstrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "startGame",
category: 'events',
fn: function (){
var self=this;
function $CWGameStart(){return smalltalk.CWGameStart||(typeof CWGameStart=="undefined"?nil:CWGameStart)}
return smalltalk.withContext(function($ctx1) { 
self["@hasStarted"]=true;
_st(self["@loadingBar"])._hide();
_st(_st(self)._announcer())._announce_(_st($CWGameStart())._new());
return self}, function($ctx1) {$ctx1.fill(self,"startGame",{},smalltalk.CWBootstrapper)})},
args: [],
source: "startGame\x0a\x09hasStarted := true.\x0a\x09loadingBar hide.\x0a\x09self announcer announce: CWGameStart new.",
messageSends: ["hide", "announce:", "new", "announcer"],
referencedClasses: ["CWGameStart"]
}),
smalltalk.CWBootstrapper);


smalltalk.addMethod(
smalltalk.method({
selector: "bootstrap:",
category: 'instance creation',
fn: function (gameSettings){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._new())._bootstrap_(gameSettings);
return $1;
}, function($ctx1) {$ctx1.fill(self,"bootstrap:",{gameSettings:gameSettings},smalltalk.CWBootstrapper.klass)})},
args: ["gameSettings"],
source: "bootstrap: gameSettings\x0a\x09^ self new\x0a\x09\x09bootstrap: gameSettings",
messageSends: ["bootstrap:", "new"],
referencedClasses: []
}),
smalltalk.CWBootstrapper.klass);


smalltalk.addClass('CWGameSettings', smalltalk.Object, ['players', 'mapNumber'], 'Easnoth-Bootstrap');
smalltalk.CWGameSettings.comment="I represent the game settings. My instance variables are set before the game, in the start menus. Then, the CWBootstrapper handles my data to launch corectly the game."
smalltalk.addMethod(
smalltalk.method({
selector: "addPlayer:",
category: 'accessing',
fn: function (aPlayer){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@players"])._add_(aPlayer);
return self}, function($ctx1) {$ctx1.fill(self,"addPlayer:",{aPlayer:aPlayer},smalltalk.CWGameSettings)})},
args: ["aPlayer"],
source: "addPlayer: aPlayer\x0a\x09players add: aPlayer",
messageSends: ["add:"],
referencedClasses: []
}),
smalltalk.CWGameSettings);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'intialize-release',
fn: function (){
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.Object.fn.prototype._initialize.apply(_st(self), []);
self["@players"]=_st($Array())._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.CWGameSettings)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09players := Array new",
messageSends: ["initialize", "new"],
referencedClasses: ["Array"]
}),
smalltalk.CWGameSettings);

smalltalk.addMethod(
smalltalk.method({
selector: "mapNumber",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@mapNumber"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"mapNumber",{},smalltalk.CWGameSettings)})},
args: [],
source: "mapNumber\x0a\x09^ mapNumber",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWGameSettings);

smalltalk.addMethod(
smalltalk.method({
selector: "mapNumber:",
category: 'accessing',
fn: function (int){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@mapNumber"]=int;
return self}, function($ctx1) {$ctx1.fill(self,"mapNumber:",{int:int},smalltalk.CWGameSettings)})},
args: ["int"],
source: "mapNumber: int\x0a\x09mapNumber := int",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWGameSettings);

smalltalk.addMethod(
smalltalk.method({
selector: "players",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@players"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"players",{},smalltalk.CWGameSettings)})},
args: [],
source: "players\x0a\x09^ players",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWGameSettings);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
category: 'intialize-release',
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
args: ["aStream"],
source: "printOn: aStream\x0a\x09aStream \x0a\x09\x09nextPutAll: 'settings(map n.';\x0a\x09\x09nextPutAll: mapNumber printString;\x0a\x09\x09nextPutAll: '; '.\x0a\x09players do: [ :each |\x0a\x09\x09each printOn: aStream ].\x0a\x09aStream nextPutAll: ')'.",
messageSends: ["nextPutAll:", "printString", "do:", "printOn:"],
referencedClasses: []
}),
smalltalk.CWGameSettings);



smalltalk.addClass('CWLoadingBar', smalltalk.Widget, ['box'], 'Easnoth-Bootstrap');
smalltalk.addMethod(
smalltalk.method({
selector: "hide",
category: 'rendering',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@box"])._hidden();
return self}, function($ctx1) {$ctx1.fill(self,"hide",{},smalltalk.CWLoadingBar)})},
args: [],
source: "hide\x0a\x09box hidden",
messageSends: ["hidden"],
referencedClasses: []
}),
smalltalk.CWLoadingBar);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._img();
_st($1)._class_("loadBar");
$2=_st($1)._src_("ressources/images/loading.png");
self["@box"]=$2;
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.CWLoadingBar)})},
args: ["html"],
source: "renderOn: html\x0a\x09box := html img\x0a\x09\x09class: 'loadBar';\x0a\x09\x09src: 'ressources/images/loading.png'.",
messageSends: ["class:", "img", "src:"],
referencedClasses: []
}),
smalltalk.CWLoadingBar);



smalltalk.addClass('CWStartMenu', smalltalk.Widget, ['box', 'subBox', 'gameSettings'], 'Easnoth-Bootstrap');
smalltalk.CWStartMenu.comment="Should implement the menu with multiplayer and stuff here"
smalltalk.addMethod(
smalltalk.method({
selector: "armySelectBox:on:",
category: 'rendering',
fn: function (playerNumber,html){
var self=this;
var selectBox;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
selectBox=_st(html)._select();
$1=selectBox;
_st($1)._onChange_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(_st(self["@gameSettings"])._players())._at_(playerNumber))._team_(_st(_st(selectBox)._asJQuery())._val());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
_st(_st(html)._option())._with_("elves");
_st(_st(html)._option())._with_("human-kingdom");
_st(_st(html)._option())._with_("merfolks");
_st(_st(html)._option())._with_("dwarves");
return _st(_st(html)._option())._with_("human-outlaws");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"armySelectBox:on:",{playerNumber:playerNumber,html:html,selectBox:selectBox},smalltalk.CWStartMenu)})},
args: ["playerNumber", "html"],
source: "armySelectBox: playerNumber on: html\x0a\x09| selectBox |\x0a\x09selectBox := html select.\x0a\x09selectBox\x0a\x09\x09onChange: [ (gameSettings players at: playerNumber) team: selectBox asJQuery val ];\x0a\x09\x09with: [\x0a\x09\x09\x09html option with: 'elves'.\x0a\x09\x09\x09html option with: 'human-kingdom'.\x0a\x09\x09\x09html option with: 'merfolks'.\x0a\x09\x09\x09html option with: 'dwarves'.\x0a\x09\x09\x09html option with: 'human-outlaws' ].",
messageSends: ["select", "onChange:", "team:", "val", "asJQuery", "at:", "players", "with:", "option"],
referencedClasses: []
}),
smalltalk.CWStartMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "choosePlayers",
category: 'game settings',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@gameSettings"])._addPlayer_(_st(self)._defaultPlayer());
_st(self["@gameSettings"])._addPlayer_(_st(self)._defaultPlayer());
_st(self)._playerMenu();
return self}, function($ctx1) {$ctx1.fill(self,"choosePlayers",{},smalltalk.CWStartMenu)})},
args: [],
source: "choosePlayers\x0a\x09gameSettings addPlayer: self defaultPlayer.\x0a\x09gameSettings addPlayer: self defaultPlayer.\x0a\x09self playerMenu",
messageSends: ["addPlayer:", "defaultPlayer", "playerMenu"],
referencedClasses: []
}),
smalltalk.CWStartMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "credits",
category: 'rendering',
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
$4=_st($3)._href_("http://clementbera.wordpress.com/");
return $4;
}, function($ctx4) {$ctx4.fillBlock({},$ctx1)})}));
_st(_st(html)._li())._with_((function(){
return smalltalk.withContext(function($ctx4) {
_st(_st(html)._strong())._with_("Graphics : ");
_st(html)._br();
$5=_st(html)._a();
_st($5)._with_("Lusy Dolia");
$6=_st($5)._href_("#");
$6;
_st(html)._br();
$7=_st(html)._a();
_st($7)._with_("Battle for Wesnoth");
$8=_st($7)._href_("http://www.wesnoth.org/");
return $8;
}, function($ctx4) {$ctx4.fillBlock({},$ctx1)})}));
_st(_st(html)._li())._with_((function(){
return smalltalk.withContext(function($ctx4) {
_st(_st(html)._strong())._with_("Thanks to : ");
_st(html)._br();
$9=_st(html)._a();
_st($9)._with_("Amber web framework");
$10=_st($9)._href_("http://amber-lang.net/");
$10;
_st(html)._br();
$11=_st(html)._a();
_st($11)._with_("Nicolas Petton (Amber core developer)");
$12=_st($11)._href_("www.nicolas-petton.fr/");
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
args: [],
source: "credits\x0a\x09subBox \x0a\x09\x09contents: [ :html | \x0a\x09\x09\x09\x09html ul \x0a\x09\x09\x09\x09\x09class: 'menu';\x0a\x09\x09\x09\x09\x09style: 'font-size: 16px;\x0a\x09\x09\x09\x09\x09margin-top: -0.5%';\x0a\x09\x09\x09\x09\x09with: [\x0a\x09\x09\x09\x09\x09\x09html li with: [\x0a\x09\x09\x09\x09\x09\x09\x09html strong with: 'Development : '.\x0a\x09\x09\x09\x09\x09\x09\x09html br.\x0a\x09\x09\x09\x09\x09\x09\x09html a \x0a\x09\x09\x09\x09\x09\x09\x09\x09with: 'Clément Béra';\x0a\x09\x09\x09\x09\x09\x09\x09\x09href: 'http://clementbera.wordpress.com/' ].\x0a\x09\x09\x09\x09\x09\x09html li with: [\x0a\x09\x09\x09\x09\x09\x09\x09html strong with: 'Graphics : '.\x0a\x09\x09\x09\x09\x09\x09\x09html br.\x0a\x09\x09\x09\x09\x09\x09\x09html a\x0a\x09\x09\x09\x09\x09\x09\x09\x09with: 'Lusy Dolia';\x0a\x09\x09\x09\x09\x09\x09\x09\x09href: '#'.\x0a\x09\x09\x09\x09\x09\x09\x09html br.\x0a\x09\x09\x09\x09\x09\x09\x09html a\x0a\x09\x09\x09\x09\x09\x09\x09\x09with: 'Battle for Wesnoth';\x0a\x09\x09\x09\x09\x09\x09\x09\x09href: 'http://www.wesnoth.org/' ].\x0a\x09\x09\x09\x09\x09\x09html li with: [\x0a\x09\x09\x09\x09\x09\x09\x09html strong with: 'Thanks to : '.\x0a\x09\x09\x09\x09\x09\x09\x09html br.\x0a\x09\x09\x09\x09\x09\x09\x09html a\x0a\x09\x09\x09\x09\x09\x09\x09\x09with: 'Amber web framework';\x0a\x09\x09\x09\x09\x09\x09\x09\x09href: 'http://amber-lang.net/'.\x0a\x09\x09\x09\x09\x09\x09\x09html br.\x0a\x09\x09\x09\x09\x09\x09\x09html a\x0a\x09\x09\x09\x09\x09\x09\x09\x09with: 'Nicolas Petton (Amber core developer)';\x0a\x09\x09\x09\x09\x09\x09\x09\x09href: 'www.nicolas-petton.fr/' ].\x0a\x09\x09\x09\x09\x09\x09html li with: [\x0a\x09\x09\x09\x09\x09\x09\x09html button\x0a\x09\x09\x09\x09\x09\x09\x09\x09with: '> back <';\x0a\x09\x09\x09\x09\x09\x09\x09\x09onClick: [ self menuOn: html with: self startingMenuDict. ] ] ] ] ",
messageSends: ["contents:", "class:", "ul", "style:", "with:", "strong", "br", "a", "href:", "li", "button", "onClick:", "menuOn:with:", "startingMenuDict"],
referencedClasses: []
}),
smalltalk.CWStartMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultPlayer",
category: 'accessing',
fn: function (){
var self=this;
function $CWHuman(){return smalltalk.CWHuman||(typeof CWHuman=="undefined"?nil:CWHuman)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st($CWHuman())._new())._team_("elves");
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultPlayer",{},smalltalk.CWStartMenu)})},
args: [],
source: "defaultPlayer\x0a\x09^ CWHuman new team: 'elves'",
messageSends: ["team:", "new"],
referencedClasses: ["CWHuman"]
}),
smalltalk.CWStartMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initalize-release',
fn: function (){
var self=this;
function $CWGameSettings(){return smalltalk.CWGameSettings||(typeof CWGameSettings=="undefined"?nil:CWGameSettings)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.Widget.fn.prototype._initialize.apply(_st(self), []);
self["@gameSettings"]=_st($CWGameSettings())._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.CWStartMenu)})},
args: [],
source: "initialize\x0a\x09super initialize. \x0a\x09gameSettings := CWGameSettings new",
messageSends: ["initialize", "new"],
referencedClasses: ["CWGameSettings"]
}),
smalltalk.CWStartMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "menuOn:with:",
category: 'rendering',
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
args: ["html", "dict"],
source: "menuOn: html with: dict\x0a\x09^ subBox\x0a\x09\x09\x09\x09contents: [\x0a\x09\x09\x09\x09\x09html ul \x0a\x09\x09\x09\x09\x09\x09class: 'menu';\x0a\x09\x09\x09\x09\x09\x09style: 'margin-top: 5%';\x0a\x09\x09\x09\x09\x09\x09with: [\x0a\x09\x09\x09\x09\x09\x09\x09dict keysAndValuesDo: [ :key :value |\x0a\x09\x09\x09\x09\x09\x09\x09html li\x0a\x09\x09\x09\x09\x09\x09\x09\x09with: [ html a \x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09href: '#';\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09with: key; \x0a\x09\x09\x09\x09\x09\x09\x09\x09onClick: value ] ] ] ];\x0a\x09\x09yourself",
messageSends: ["contents:", "class:", "ul", "style:", "with:", "keysAndValuesDo:", "href:", "a", "onClick:", "li", "yourself"],
referencedClasses: []
}),
smalltalk.CWStartMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "playerMenu",
category: 'rendering',
fn: function (){
var self=this;
var selectBox;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$2;
_st(self["@subBox"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) {
$1=_st(html)._ul();
_st($1)._class_("menu");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx3) {
_st((1))._to_do_((2),(function(n){
return smalltalk.withContext(function($ctx4) {
return _st(self)._playerSelection_on_(n,html);
}, function($ctx4) {$ctx4.fillBlock({n:n},$ctx1)})}));
return _st(_st(html)._li())._with_((function(){
return smalltalk.withContext(function($ctx4) {
$3=_st(html)._button();
_st($3)._with_("start");
$4=_st($3)._onClick_((function(){
return smalltalk.withContext(function($ctx5) {
return _st(self)._startBeta();
}, function($ctx5) {$ctx5.fillBlock({},$ctx1)})}));
return $4;
}, function($ctx4) {$ctx4.fillBlock({},$ctx1)})}));
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
return $2;
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"playerMenu",{selectBox:selectBox},smalltalk.CWStartMenu)})},
args: [],
source: "playerMenu\x0a\x09| selectBox |\x0a\x09subBox contents: [ :html | \x0a\x09\x09\x09\x09html ul \x0a\x09\x09\x09\x09\x09class: 'menu';\x0a\x09\x09\x09\x09\x09with: [\x0a\x09\x09\x09\x09\x09\x091 to: 2 do: [ :n |\x0a\x09\x09\x09\x09\x09\x09\x09self playerSelection: n on: html ].\x0a\x09\x09\x09\x09\x09\x09html li with: [\x0a\x09\x09\x09\x09\x09\x09\x09html button\x0a\x09\x09\x09\x09\x09\x09\x09\x09with: 'start';\x0a\x09\x09\x09\x09\x09\x09\x09\x09onClick: [ self startBeta ] ] ] ] ",
messageSends: ["contents:", "class:", "ul", "with:", "to:do:", "playerSelection:on:", "button", "onClick:", "startBeta", "li"],
referencedClasses: []
}),
smalltalk.CWStartMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "playerSelectBox:on:",
category: 'rendering',
fn: function (playerNumber,html){
var self=this;
var selectBox;
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$5,$6,$2;
selectBox=_st(html)._select();
$1=selectBox;
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
args: ["playerNumber", "html"],
source: "playerSelectBox: playerNumber on: html\x0a\x09| selectBox |\x0a\x09selectBox := html select. \x0a\x09selectBox \x0a\x09\x09onChange: [ \x0a\x09\x09\x09| oldTeam |\x0a\x09\x09\x09oldTeam := (gameSettings players at: playerNumber) team.\x0a\x09\x09\x09gameSettings players at: playerNumber put: (Smalltalk current at: selectBox asJQuery val) new.\x0a\x09\x09\x09(gameSettings players at: playerNumber) team: oldTeam ];\x0a\x09\x09with: [\x0a\x09\x09\x09html option \x0a\x09\x09\x09\x09with: 'human';\x0a\x09\x09\x09\x09value: 'CWHuman'.\x0a\x09\x09\x09html option \x0a\x09\x09\x09\x09with: 'AI type 1';\x0a\x09\x09\x09\x09value: 'CWAggressWeakestAI'].",
messageSends: ["select", "onChange:", "team", "at:", "players", "at:put:", "new", "val", "asJQuery", "current", "team:", "with:", "option", "value:"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.CWStartMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "playerSelection:on:",
category: 'rendering',
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
args: ["playerNumber", "html"],
source: "playerSelection: playerNumber on: html\x0a\x09html li with: 'Player ', playerNumber.\x0a\x09html li with: [\x0a\x09\x09self playerSelectBox: playerNumber on: html.\x0a\x09\x09self armySelectBox: playerNumber on: html ].",
messageSends: ["with:", ",", "li", "playerSelectBox:on:", "armySelectBox:on:"],
referencedClasses: []
}),
smalltalk.CWStartMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
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
args: ["html"],
source: "renderOn: html\x0a\x09box := html div\x0a\x09\x09class: 'intro';\x0a\x09\x09with: [ subBox := html div class: 'introMenu' ].\x0a\x09self menuOn: html with: self startingMenuDict",
messageSends: ["class:", "div", "with:", "menuOn:with:", "startingMenuDict"],
referencedClasses: []
}),
smalltalk.CWStartMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "startBeta",
category: 'game settings',
fn: function (){
var self=this;
function $CWBootstrapper(){return smalltalk.CWBootstrapper||(typeof CWBootstrapper=="undefined"?nil:CWBootstrapper)}
return smalltalk.withContext(function($ctx1) { 
_st(self["@box"])._hidden();
_st(self["@gameSettings"])._mapNumber_((8));
_st($CWBootstrapper())._bootstrap_(self["@gameSettings"]);
return self}, function($ctx1) {$ctx1.fill(self,"startBeta",{},smalltalk.CWStartMenu)})},
args: [],
source: "startBeta\x0a\x09box hidden.\x0a\x09gameSettings mapNumber: 8.\x0a\x09CWBootstrapper bootstrap: gameSettings",
messageSends: ["hidden", "mapNumber:", "bootstrap:"],
referencedClasses: ["CWBootstrapper"]
}),
smalltalk.CWStartMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "startingMenuDict",
category: 'accessing',
fn: function (){
var self=this;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st($Dictionary())._new();
_st($2)._at_put_("Tutorial",(function(){
return smalltalk.withContext(function($ctx2) {
return _st(window)._alert_("for future use, click on custom game");
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
args: [],
source: "startingMenuDict\x0a\x09^ Dictionary new\x0a\x09\x09at: 'Tutorial' put: [window alert: 'for future use, click on custom game' ];\x0a\x09\x09at: 'Campaign' put: [window alert: 'for future use, click on custom game' ];\x0a\x09\x09at: 'Custom game' put: [ self choosePlayers ];\x0a\x09\x09\x22at: 'Network game' put: [window alert: 'for future use, click on custom game' ];\x0a\x09\x09at: 'Map Editor' put: [window alert: 'for future use, click on custom game' ];\x22\x0a\x09\x09at: 'Credits' put: [ self credits ];\x0a\x09\x09yourself",
messageSends: ["at:put:", "alert:", "new", "choosePlayers", "credits", "yourself"],
referencedClasses: ["Dictionary"]
}),
smalltalk.CWStartMenu);


smalltalk.addMethod(
smalltalk.method({
selector: "start",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._new())._appendToJQuery_(_st("#global")._asJQuery());
return $1;
}, function($ctx1) {$ctx1.fill(self,"start",{},smalltalk.CWStartMenu.klass)})},
args: [],
source: "start\x0a\x09^ self new appendToJQuery: '#global' asJQuery ",
messageSends: ["appendToJQuery:", "asJQuery", "new"],
referencedClasses: []
}),
smalltalk.CWStartMenu.klass);


