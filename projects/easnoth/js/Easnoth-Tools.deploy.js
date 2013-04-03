smalltalk.addPackage('Easnoth-Tools');
smalltalk.addClass('ActionMenu', smalltalk.Widget, ['map', 'components'], 'Easnoth-Tools');
smalltalk.addMethod(
smalltalk.method({
selector: "addComponent:",
fn: function (aComponent){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._components())._add_(aComponent);
_st(aComponent)._actionMenu_(self);
return self}, function($ctx1) {$ctx1.fill(self,"addComponent:",{aComponent:aComponent},smalltalk.ActionMenu)})},
messageSends: ["add:", "components", "actionMenu:"]}),
smalltalk.ActionMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "components",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@components"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"components",{},smalltalk.ActionMenu)})},
messageSends: []}),
smalltalk.ActionMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "components:",
fn: function (aCol){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@components"]=aCol;
return self}, function($ctx1) {$ctx1.fill(self,"components:",{aCol:aCol},smalltalk.ActionMenu)})},
messageSends: []}),
smalltalk.ActionMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
_st(self)._components_(_st($Array())._new());
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ActionMenu)})},
messageSends: ["components:", "new"]}),
smalltalk.ActionMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "map",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@map"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"map",{},smalltalk.ActionMenu)})},
messageSends: []}),
smalltalk.ActionMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "map:",
fn: function (aMap){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@map"]=aMap;
return self}, function($ctx1) {$ctx1.fill(self,"map:",{aMap:aMap},smalltalk.ActionMenu)})},
messageSends: []}),
smalltalk.ActionMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._components())._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._renderOn_(html);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.ActionMenu)})},
messageSends: ["collect:", "renderOn:", "components"]}),
smalltalk.ActionMenu);


smalltalk.addMethod(
smalltalk.method({
selector: "newFor:",
fn: function (aMap){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st(self)._new();
_st($2)._map_(aMap);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"newFor:",{aMap:aMap},smalltalk.ActionMenu.klass)})},
messageSends: ["map:", "new", "yourself"]}),
smalltalk.ActionMenu.klass);


smalltalk.addClass('ActionMenuComponent', smalltalk.Widget, ['actionMenu'], 'Easnoth-Tools');
smalltalk.addMethod(
smalltalk.method({
selector: "actionMenu",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@actionMenu"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"actionMenu",{},smalltalk.ActionMenuComponent)})},
messageSends: []}),
smalltalk.ActionMenuComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "actionMenu:",
fn: function (aMenu){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@actionMenu"]=aMenu;
return self}, function($ctx1) {$ctx1.fill(self,"actionMenu:",{aMenu:aMenu},smalltalk.ActionMenuComponent)})},
messageSends: []}),
smalltalk.ActionMenuComponent);


smalltalk.addMethod(
smalltalk.method({
selector: "newFor:",
fn: function (aMenu){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st(self)._new();
_st($2)._actionMenu_(aMenu);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"newFor:",{aMenu:aMenu},smalltalk.ActionMenuComponent.klass)})},
messageSends: ["actionMenu:", "new", "yourself"]}),
smalltalk.ActionMenuComponent.klass);


smalltalk.addClass('MapControls', smalltalk.ActionMenuComponent, [], 'Easnoth-Tools');
smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$2;
$1=_st(html)._div();
_st($1)._class_("mapWatcher");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
_st(_st(html)._h4())._with_("map controls");
$3=_st(html)._button();
_st($3)._with_("left");
$4=_st($3)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(_st(_st(self)._actionMenu())._map())._goLeft();
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
$4;
$5=_st(html)._button();
_st($5)._with_("right");
$6=_st($5)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(_st(_st(self)._actionMenu())._map())._goRight();
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
$6;
$7=_st(html)._button();
_st($7)._with_("down");
$8=_st($7)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(_st(_st(self)._actionMenu())._map())._goDown();
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
$8;
$9=_st(html)._button();
_st($9)._with_("up");
$10=_st($9)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(_st(_st(self)._actionMenu())._map())._goUp();
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
$10;
_st(_st(html)._span())._with_("-");
$11=_st(html)._button();
_st($11)._with_("mh");
$12=_st($11)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(_st(_st(self)._actionMenu())._map())._mirrorHorizontal();
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
$12;
$13=_st(html)._button();
_st($13)._with_("vh");
$14=_st($13)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(_st(_st(self)._actionMenu())._map())._mirrorVertical();
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
return $14;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.MapControls)})},
messageSends: ["class:", "div", "with:", "h4", "button", "onClick:", "goLeft", "map", "actionMenu", "goRight", "goDown", "goUp", "span", "mirrorHorizontal", "mirrorVertical"]}),
smalltalk.MapControls);



smalltalk.addClass('Cache', smalltalk.Dictionary, ['onload', 'images', 'monsters'], 'Easnoth-Tools');
smalltalk.addMethod(
smalltalk.method({
selector: "images",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@images"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"images",{},smalltalk.Cache)})},
messageSends: []}),
smalltalk.Cache);

smalltalk.addMethod(
smalltalk.method({
selector: "images:",
fn: function (anImageCache){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@images"]=anImageCache;
return self}, function($ctx1) {$ctx1.fill(self,"images:",{anImageCache:anImageCache},smalltalk.Cache)})},
messageSends: []}),
smalltalk.Cache);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
function $ImageCache(){return smalltalk.ImageCache||(typeof ImageCache=="undefined"?nil:ImageCache)}
function $MonsterCache(){return smalltalk.MonsterCache||(typeof MonsterCache=="undefined"?nil:MonsterCache)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.Dictionary.fn.prototype._initialize.apply(_st(self), []);
_st(self)._images_(_st($ImageCache())._newFor_(self));
_st(self)._monsters_(_st($MonsterCache())._newFor_(self));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.Cache)})},
messageSends: ["initialize", "images:", "newFor:", "monsters:"]}),
smalltalk.Cache);

smalltalk.addMethod(
smalltalk.method({
selector: "isLoaded",
fn: function (){
var self=this;
var loaded;
return smalltalk.withContext(function($ctx1) { 
var $1;
loaded=true;
_st(_st(self)._images())._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
loaded=_st(loaded).__and(_st(each)._at_("complete"));
return loaded;
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
loaded=_st(loaded).__and(_st(_st(_st(_st(self)._monsters())._keys())._size())._even());
$1=loaded;
if(smalltalk.assert($1)){
_st(_st(self)._onload())._value();
};
return self}, function($ctx1) {$ctx1.fill(self,"isLoaded",{loaded:loaded},smalltalk.Cache)})},
messageSends: ["collect:", "&", "at:", "images", "even", "size", "keys", "monsters", "ifTrue:", "value", "onload"]}),
smalltalk.Cache);

smalltalk.addMethod(
smalltalk.method({
selector: "monsters",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@monsters"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"monsters",{},smalltalk.Cache)})},
messageSends: []}),
smalltalk.Cache);

smalltalk.addMethod(
smalltalk.method({
selector: "monsters:",
fn: function (aMonsterCache){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@monsters"]=aMonsterCache;
return self}, function($ctx1) {$ctx1.fill(self,"monsters:",{aMonsterCache:aMonsterCache},smalltalk.Cache)})},
messageSends: []}),
smalltalk.Cache);

smalltalk.addMethod(
smalltalk.method({
selector: "onload",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@onload"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"onload",{},smalltalk.Cache)})},
messageSends: []}),
smalltalk.Cache);

smalltalk.addMethod(
smalltalk.method({
selector: "onload:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@onload"]=aBlock;
return self}, function($ctx1) {$ctx1.fill(self,"onload:",{aBlock:aBlock},smalltalk.Cache)})},
messageSends: []}),
smalltalk.Cache);


smalltalk.Cache.klass.iVarNames = ['cache'];
smalltalk.addMethod(
smalltalk.method({
selector: "getSingleton",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@cache"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@cache"]=_st(self)._new();
$1=self["@cache"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"getSingleton",{},smalltalk.Cache.klass)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.Cache.klass);


smalltalk.addClass('CacheComponent', smalltalk.Dictionary, ['cache'], 'Easnoth-Tools');
smalltalk.addMethod(
smalltalk.method({
selector: "cache",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@cache"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"cache",{},smalltalk.CacheComponent)})},
messageSends: []}),
smalltalk.CacheComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "cache:",
fn: function (aCache){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@cache"]=aCache;
return self}, function($ctx1) {$ctx1.fill(self,"cache:",{aCache:aCache},smalltalk.CacheComponent)})},
messageSends: []}),
smalltalk.CacheComponent);


smalltalk.addMethod(
smalltalk.method({
selector: "newFor:",
fn: function (aCache){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st(self)._new();
_st($2)._cache_(aCache);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"newFor:",{aCache:aCache},smalltalk.CacheComponent.klass)})},
messageSends: ["cache:", "new", "yourself"]}),
smalltalk.CacheComponent.klass);


smalltalk.addClass('ImageCache', smalltalk.CacheComponent, [], 'Easnoth-Tools');
smalltalk.addMethod(
smalltalk.method({
selector: "addImageFromKey:fromDrawedObject:",
fn: function (aKey,aDrawedObject){
var self=this;
var imageNew;
function $NativeFunction(){return smalltalk.NativeFunction||(typeof NativeFunction=="undefined"?nil:NativeFunction)}
return smalltalk.withContext(function($ctx1) { 
var $1;
imageNew=_st($NativeFunction())._constructor_("Image");
_st(self)._at_put_(aKey,imageNew);
_st(imageNew)._at_put_("onload",(function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(self)._cache())._isLoaded();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(imageNew)._at_put_("src",_st(_st(_st(_st("ressources/images/").__comma(_st(aDrawedObject)._folderName())).__comma("/")).__comma(aKey)).__comma(".png"));
$1=imageNew;
return $1;
}, function($ctx1) {$ctx1.fill(self,"addImageFromKey:fromDrawedObject:",{aKey:aKey,aDrawedObject:aDrawedObject,imageNew:imageNew},smalltalk.ImageCache)})},
messageSends: ["constructor:", "at:put:", "isLoaded", "cache", ",", "folderName"]}),
smalltalk.ImageCache);

smalltalk.addMethod(
smalltalk.method({
selector: "preloadImages:",
fn: function (anImageCol){
var self=this;
var imageNew;
function $NativeFunction(){return smalltalk.NativeFunction||(typeof NativeFunction=="undefined"?nil:NativeFunction)}
return smalltalk.withContext(function($ctx1) { 
_st(anImageCol)._associationsDo_((function(assoc){
return smalltalk.withContext(function($ctx2) {
imageNew=_st($NativeFunction())._constructor_("Image");
imageNew;
_st(self)._at_put_(_st(assoc)._key(),imageNew);
return _st(imageNew)._at_put_("src",_st(_st("ressources/images/").__comma(_st(assoc)._value())).__comma(".png"));
}, function($ctx2) {$ctx2.fillBlock({assoc:assoc},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"preloadImages:",{anImageCol:anImageCol,imageNew:imageNew},smalltalk.ImageCache)})},
messageSends: ["associationsDo:", "constructor:", "at:put:", "key", ",", "value"]}),
smalltalk.ImageCache);

smalltalk.addMethod(
smalltalk.method({
selector: "putImageWithKey:inDrawedObject:",
fn: function (aKey,aDrawedObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aDrawedObject)._image_(_st(self)._at_ifAbsent_(aKey,(function(){
return smalltalk.withContext(function($ctx2) {
return _st(self)._addImageFromKey_fromDrawedObject_(aKey,aDrawedObject);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})));
return self}, function($ctx1) {$ctx1.fill(self,"putImageWithKey:inDrawedObject:",{aKey:aKey,aDrawedObject:aDrawedObject},smalltalk.ImageCache)})},
messageSends: ["image:", "at:ifAbsent:", "addImageFromKey:fromDrawedObject:"]}),
smalltalk.ImageCache);



smalltalk.addClass('MonsterCache', smalltalk.CacheComponent, [], 'Easnoth-Tools');
smalltalk.addMethod(
smalltalk.method({
selector: "addStatsFromKey:inMonster:",
fn: function (aKey,aMonster){
var self=this;
var success,keySuccess,callBack;
return smalltalk.withContext(function($ctx1) { 
success=(function(statsNew){
return smalltalk.withContext(function($ctx2) {
_st(self)._at_put_(aKey,statsNew);
_st(aMonster)._stats_(_st(self)._at_(aKey));
return _st(_st(self)._cache())._isLoaded();
}, function($ctx2) {$ctx2.fillBlock({statsNew:statsNew},$ctx1)})});
keySuccess=_st(aKey).__comma("success");
_st(self)._at_put_(keySuccess,success);
callBack=(function(data){
return smalltalk.withContext(function($ctx2) {
return _st(_st((function(){
return smalltalk.withContext(function($ctx3) {
return _st(self)._at_(keySuccess);
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}))._value())._value_(data);
}, function($ctx2) {$ctx2.fillBlock({data:data},$ctx1)})});
_st(self)._jsCall_cb_(aKey,callBack);
return self}, function($ctx1) {$ctx1.fill(self,"addStatsFromKey:inMonster:",{aKey:aKey,aMonster:aMonster,success:success,keySuccess:keySuccess,callBack:callBack},smalltalk.MonsterCache)})},
messageSends: ["at:put:", "stats:", "at:", "isLoaded", "cache", ",", "value:", "value", "jsCall:cb:"]}),
smalltalk.MonsterCache);

smalltalk.addMethod(
smalltalk.method({
selector: "jsCall:cb:",
fn: function (aKey,callBack){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$.getJSON('ressources/json/monsters/' + aKey + '.json', callBack);
return self}, function($ctx1) {$ctx1.fill(self,"jsCall:cb:",{aKey:aKey,callBack:callBack},smalltalk.MonsterCache)})},
messageSends: []}),
smalltalk.MonsterCache);

smalltalk.addMethod(
smalltalk.method({
selector: "putStatsWithKey:inMonster:",
fn: function (aKey,aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._includesKey_(_st(aKey).__comma("success"));
if(smalltalk.assert($1)){
_st(self)._updateStatsFromKey_inMonster_(aKey,aMonster);
} else {
_st(self)._addStatsFromKey_inMonster_(aKey,aMonster);
};
return self}, function($ctx1) {$ctx1.fill(self,"putStatsWithKey:inMonster:",{aKey:aKey,aMonster:aMonster},smalltalk.MonsterCache)})},
messageSends: ["ifTrue:ifFalse:", "updateStatsFromKey:inMonster:", "addStatsFromKey:inMonster:", "includesKey:", ","]}),
smalltalk.MonsterCache);

smalltalk.addMethod(
smalltalk.method({
selector: "updateStatsFromKey:inMonster:",
fn: function (aKey,aMonster){
var self=this;
var keySuccess,oldCallBack;
return smalltalk.withContext(function($ctx1) { 
var $1;
keySuccess=_st(aKey).__comma("success");
oldCallBack=_st(self)._at_(keySuccess);
_st(self)._at_put_(keySuccess,(function(statsNew){
return smalltalk.withContext(function($ctx2) {
_st(aMonster)._stats_(statsNew);
_st(oldCallBack)._value_(statsNew);
return _st(_st(self)._cache())._isLoaded();
}, function($ctx2) {$ctx2.fillBlock({statsNew:statsNew},$ctx1)})}));
$1=_st(self)._includesKey_(aKey);
if(smalltalk.assert($1)){
_st(aMonster)._stats_(_st(self)._at_(aKey));
};
return self}, function($ctx1) {$ctx1.fill(self,"updateStatsFromKey:inMonster:",{aKey:aKey,aMonster:aMonster,keySuccess:keySuccess,oldCallBack:oldCallBack},smalltalk.MonsterCache)})},
messageSends: [",", "at:", "at:put:", "stats:", "value:", "isLoaded", "cache", "ifTrue:", "includesKey:"]}),
smalltalk.MonsterCache);



smalltalk.addClass('MapVisitor', smalltalk.Object, [], 'Easnoth-Tools');
smalltalk.addMethod(
smalltalk.method({
selector: "visitBuilding:",
fn: function (aBuilding){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"visitBuilding:",{aBuilding:aBuilding},smalltalk.MapVisitor)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.MapVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitGameOverTiles:",
fn: function (aMap){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aMap)._cellsDo_((function(cell){
return smalltalk.withContext(function($ctx2) {
return _st(_st(cell)._gameOverTile())._accept_(self);
}, function($ctx2) {$ctx2.fillBlock({cell:cell},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"visitGameOverTiles:",{aMap:aMap},smalltalk.MapVisitor)})},
messageSends: ["cellsDo:", "accept:", "gameOverTile"]}),
smalltalk.MapVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitMap:",
fn: function (aMap){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aMap)._cellsDo_((function(cell){
return smalltalk.withContext(function($ctx2) {
return _st(_st(cell)._drawedObjects())._do_((function(each){
return smalltalk.withContext(function($ctx3) {
return _st(each)._accept_(self);
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({cell:cell},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"visitMap:",{aMap:aMap},smalltalk.MapVisitor)})},
messageSends: ["cellsDo:", "do:", "accept:", "drawedObjects"]}),
smalltalk.MapVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitMonster:",
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"visitMonster:",{aMonster:aMonster},smalltalk.MapVisitor)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.MapVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitMonsters:",
fn: function (aMap){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aMap)._cellsDo_((function(cell){
return smalltalk.withContext(function($ctx2) {
return _st(_st(cell)._monster())._accept_(self);
}, function($ctx2) {$ctx2.fillBlock({cell:cell},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"visitMonsters:",{aMap:aMap},smalltalk.MapVisitor)})},
messageSends: ["cellsDo:", "accept:", "monster"]}),
smalltalk.MapVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitOverTile:",
fn: function (anOverTile){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"visitOverTile:",{anOverTile:anOverTile},smalltalk.MapVisitor)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.MapVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitOverTiles:",
fn: function (aMap){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aMap)._cellsDo_((function(cell){
return smalltalk.withContext(function($ctx2) {
return _st(_st(cell)._overTiles())._do_((function(each){
return smalltalk.withContext(function($ctx3) {
return _st(each)._accept_(self);
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({cell:cell},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"visitOverTiles:",{aMap:aMap},smalltalk.MapVisitor)})},
messageSends: ["cellsDo:", "do:", "accept:", "overTiles"]}),
smalltalk.MapVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitTile:",
fn: function (aTile){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"visitTile:",{aTile:aTile},smalltalk.MapVisitor)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.MapVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitTiles:",
fn: function (aMap){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aMap)._cellsDo_((function(cell){
return smalltalk.withContext(function($ctx2) {
return _st(_st(cell)._tile())._accept_(self);
}, function($ctx2) {$ctx2.fillBlock({cell:cell},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"visitTiles:",{aMap:aMap},smalltalk.MapVisitor)})},
messageSends: ["cellsDo:", "accept:", "tile"]}),
smalltalk.MapVisitor);


smalltalk.MapVisitor.klass.iVarNames = ['singleton'];
smalltalk.addMethod(
smalltalk.method({
selector: "singleton",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@singleton"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@singleton"]=_st(self)._new();
$1=self["@singleton"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"singleton",{},smalltalk.MapVisitor.klass)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.MapVisitor.klass);


smalltalk.addClass('MapDrawer', smalltalk.MapVisitor, [], 'Easnoth-Tools');
smalltalk.addMethod(
smalltalk.method({
selector: "cleanMap:",
fn: function (aMap){
var self=this;
var elem;
return smalltalk.withContext(function($ctx1) { 
elem=_st(_st(aMap)._canvas())._element();
_st(_st(elem)._getContext_("2d"))._clearRect_y_width_height_((0),(0),_st(elem)._width(),_st(elem)._height());
return self}, function($ctx1) {$ctx1.fill(self,"cleanMap:",{aMap:aMap,elem:elem},smalltalk.MapDrawer)})},
messageSends: ["element", "canvas", "clearRect:y:width:height:", "width", "height", "getContext:"]}),
smalltalk.MapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "updateMap:",
fn: function (aMap){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._cleanMap_(aMap);
_st(self)._visitMap_(aMap);
return self}, function($ctx1) {$ctx1.fill(self,"updateMap:",{aMap:aMap},smalltalk.MapDrawer)})},
messageSends: ["cleanMap:", "visitMap:"]}),
smalltalk.MapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "visitMonster:",
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aMonster)._draw();
return self}, function($ctx1) {$ctx1.fill(self,"visitMonster:",{aMonster:aMonster},smalltalk.MapDrawer)})},
messageSends: ["draw"]}),
smalltalk.MapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "visitOverTile:",
fn: function (anOverTile){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(anOverTile)._draw();
return self}, function($ctx1) {$ctx1.fill(self,"visitOverTile:",{anOverTile:anOverTile},smalltalk.MapDrawer)})},
messageSends: ["draw"]}),
smalltalk.MapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "visitTile:",
fn: function (aTile){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aTile)._draw();
return self}, function($ctx1) {$ctx1.fill(self,"visitTile:",{aTile:aTile},smalltalk.MapDrawer)})},
messageSends: ["draw"]}),
smalltalk.MapDrawer);



smalltalk.addClass('State', smalltalk.Object, ['object'], 'Easnoth-Tools');
smalltalk.addMethod(
smalltalk.method({
selector: "newState:for:",
fn: function (aState,anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aState)._object_(anObject);
_st(anObject)._state_(aState);
return self}, function($ctx1) {$ctx1.fill(self,"newState:for:",{aState:aState,anObject:anObject},smalltalk.State)})},
messageSends: ["object:", "state:"]}),
smalltalk.State);

smalltalk.addMethod(
smalltalk.method({
selector: "object",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@object"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"object",{},smalltalk.State)})},
messageSends: []}),
smalltalk.State);

smalltalk.addMethod(
smalltalk.method({
selector: "object:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@object"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"object:",{anObject:anObject},smalltalk.State)})},
messageSends: []}),
smalltalk.State);

smalltalk.addMethod(
smalltalk.method({
selector: "setUp",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"setUp",{},smalltalk.State)})},
messageSends: []}),
smalltalk.State);

smalltalk.addMethod(
smalltalk.method({
selector: "tearDown",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"tearDown",{},smalltalk.State)})},
messageSends: []}),
smalltalk.State);


smalltalk.addMethod(
smalltalk.method({
selector: "newFor:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st(self)._new();
_st($2)._object_(anObject);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"newFor:",{anObject:anObject},smalltalk.State.klass)})},
messageSends: ["object:", "new", "yourself"]}),
smalltalk.State.klass);


