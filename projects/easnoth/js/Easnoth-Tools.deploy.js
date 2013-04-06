smalltalk.addPackage('Easnoth-Tools');
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



