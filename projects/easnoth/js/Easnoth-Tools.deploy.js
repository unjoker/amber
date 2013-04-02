smalltalk.addPackage('Easnoth-Tools', {});
smalltalk.addClass('ActionMenu', smalltalk.Widget, ['map', 'components'], 'Easnoth-Tools');
smalltalk.addMethod(
"_addComponent_",
smalltalk.method({
selector: "addComponent:",
fn: function (aComponent){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aComponent)._actionMenu_(self);
return self}, function($ctx1) {$ctx1.fill(self,"addComponent:",{aComponent:aComponent}, smalltalk.ActionMenu)})}
}),
smalltalk.ActionMenu);

smalltalk.addMethod(
"_components",
smalltalk.method({
selector: "components",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=self["@components"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"components",{}, smalltalk.ActionMenu)})}
}),
smalltalk.ActionMenu);

smalltalk.addMethod(
"_components_",
smalltalk.method({
selector: "components:",
fn: function (aCol){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"components:",{aCol:aCol}, smalltalk.ActionMenu)})}
}),
smalltalk.ActionMenu);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.ActionMenu)})}
}),
smalltalk.ActionMenu);

smalltalk.addMethod(
"_map",
smalltalk.method({
selector: "map",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=self["@map"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"map",{}, smalltalk.ActionMenu)})}
}),
smalltalk.ActionMenu);

smalltalk.addMethod(
"_map_",
smalltalk.method({
selector: "map:",
fn: function (aMap){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"map:",{aMap:aMap}, smalltalk.ActionMenu)})}
}),
smalltalk.ActionMenu);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html}, smalltalk.ActionMenu)})}
}),
smalltalk.ActionMenu);


smalltalk.addMethod(
"_newFor_",
smalltalk.method({
selector: "newFor:",
fn: function (aMap){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$2=_st(self)._new();
_st($2)._map_(aMap);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"newFor:",{aMap:aMap}, smalltalk.ActionMenu.klass)})}
}),
smalltalk.ActionMenu.klass);


smalltalk.addClass('ActionMenuComponent', smalltalk.Widget, ['actionMenu'], 'Easnoth-Tools');
smalltalk.addMethod(
"_actionMenu",
smalltalk.method({
selector: "actionMenu",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=self["@actionMenu"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"actionMenu",{}, smalltalk.ActionMenuComponent)})}
}),
smalltalk.ActionMenuComponent);

smalltalk.addMethod(
"_actionMenu_",
smalltalk.method({
selector: "actionMenu:",
fn: function (aMenu){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"actionMenu:",{aMenu:aMenu}, smalltalk.ActionMenuComponent)})}
}),
smalltalk.ActionMenuComponent);


smalltalk.addMethod(
"_newFor_",
smalltalk.method({
selector: "newFor:",
fn: function (aMenu){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$2=_st(self)._new();
_st($2)._actionMenu_(aMenu);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"newFor:",{aMenu:aMenu}, smalltalk.ActionMenuComponent.klass)})}
}),
smalltalk.ActionMenuComponent.klass);


smalltalk.addClass('MapControls', smalltalk.ActionMenuComponent, [], 'Easnoth-Tools');
smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st(html)._div();
_st($1)._class_("mapWatcher");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._button();
_st($3)._with_("left");
$4=_st($3)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
$4;
$5=_st(html)._button();
_st($5)._with_("right");
$6=_st($5)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
$6;
$7=_st(html)._button();
_st($7)._with_("down");
$8=_st($7)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
$8;
$9=_st(html)._button();
_st($9)._with_("up");
$10=_st($9)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
$10;
_st(_st(html)._span())._with_("-");
$11=_st(html)._button();
_st($11)._with_("mh");
$12=_st($11)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
$12;
$13=_st(html)._button();
_st($13)._with_("vh");
$14=_st($13)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
return $14;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html}, smalltalk.MapControls)})}
}),
smalltalk.MapControls);



smalltalk.addClass('Cache', smalltalk.Dictionary, ['onload', 'images', 'monsters'], 'Easnoth-Tools');
smalltalk.addMethod(
"_images",
smalltalk.method({
selector: "images",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=self["@images"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"images",{}, smalltalk.Cache)})}
}),
smalltalk.Cache);

smalltalk.addMethod(
"_images_",
smalltalk.method({
selector: "images:",
fn: function (anImageCache){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"images:",{anImageCache:anImageCache}, smalltalk.Cache)})}
}),
smalltalk.Cache);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._images_(_st((smalltalk.ImageCache || ImageCache))._newFor_(self));
_st(self)._monsters_(_st((smalltalk.MonsterCache || MonsterCache))._newFor_(self));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.Cache)})}
}),
smalltalk.Cache);

smalltalk.addMethod(
"_isLoaded",
smalltalk.method({
selector: "isLoaded",
fn: function (){
var self=this;
var loaded;
return smalltalk.withContext(function($ctx1) { 
loaded=true;
_st(_st(self)._images())._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return loaded;
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
loaded=_st(loaded).__and(_st(_st(_st(_st(self)._monsters())._keys())._size())._even());
$1=loaded;
if(smalltalk.assert($1)){
_st(_st(self)._onload())._value();
};
return self}, function($ctx1) {$ctx1.fill(self,"isLoaded",{loaded:loaded}, smalltalk.Cache)})}
}),
smalltalk.Cache);

smalltalk.addMethod(
"_monsters",
smalltalk.method({
selector: "monsters",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=self["@monsters"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"monsters",{}, smalltalk.Cache)})}
}),
smalltalk.Cache);

smalltalk.addMethod(
"_monsters_",
smalltalk.method({
selector: "monsters:",
fn: function (aMonsterCache){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"monsters:",{aMonsterCache:aMonsterCache}, smalltalk.Cache)})}
}),
smalltalk.Cache);

smalltalk.addMethod(
"_onload",
smalltalk.method({
selector: "onload",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=self["@onload"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"onload",{}, smalltalk.Cache)})}
}),
smalltalk.Cache);

smalltalk.addMethod(
"_onload_",
smalltalk.method({
selector: "onload:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"onload:",{aBlock:aBlock}, smalltalk.Cache)})}
}),
smalltalk.Cache);


smalltalk.Cache.klass.iVarNames = ['cache'];
smalltalk.addMethod(
"_getSingleton",
smalltalk.method({
selector: "getSingleton",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$2=self["@cache"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@cache"]=_st(self)._new();
$1=self["@cache"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"getSingleton",{}, smalltalk.Cache.klass)})}
}),
smalltalk.Cache.klass);


smalltalk.addClass('CacheComponent', smalltalk.Dictionary, ['cache'], 'Easnoth-Tools');
smalltalk.addMethod(
"_cache",
smalltalk.method({
selector: "cache",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=self["@cache"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"cache",{}, smalltalk.CacheComponent)})}
}),
smalltalk.CacheComponent);

smalltalk.addMethod(
"_cache_",
smalltalk.method({
selector: "cache:",
fn: function (aCache){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"cache:",{aCache:aCache}, smalltalk.CacheComponent)})}
}),
smalltalk.CacheComponent);


smalltalk.addMethod(
"_newFor_",
smalltalk.method({
selector: "newFor:",
fn: function (aCache){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$2=_st(self)._new();
_st($2)._cache_(aCache);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"newFor:",{aCache:aCache}, smalltalk.CacheComponent.klass)})}
}),
smalltalk.CacheComponent.klass);


smalltalk.addClass('ImageCache', smalltalk.CacheComponent, [], 'Easnoth-Tools');
smalltalk.addMethod(
"_addImageFromKey_fromDrawedObject_",
smalltalk.method({
selector: "addImageFromKey:fromDrawedObject:",
fn: function (aKey,aDrawedObject){
var self=this;
var imageNew;
return smalltalk.withContext(function($ctx1) { 
imageNew=_st((smalltalk.NativeFunction || NativeFunction))._constructor_("Image");
_st(self)._at_put_(aKey,imageNew);
_st(imageNew)._at_put_("onload",(function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(imageNew)._at_put_("src",_st(_st(_st(_st("ressources/images/").__comma(_st(aDrawedObject)._folderName())).__comma("/")).__comma(aKey)).__comma(".png"));
$1=imageNew;
return $1;
}, function($ctx1) {$ctx1.fill(self,"addImageFromKey:fromDrawedObject:",{aKey:aKey,aDrawedObject:aDrawedObject,imageNew:imageNew}, smalltalk.ImageCache)})}
}),
smalltalk.ImageCache);

smalltalk.addMethod(
"_preloadImages_",
smalltalk.method({
selector: "preloadImages:",
fn: function (anImageCol){
var self=this;
var imageNew;
return smalltalk.withContext(function($ctx1) { 
return smalltalk.withContext(function($ctx2) {
imageNew;
_st(self)._at_put_(_st(assoc)._key(),imageNew);
return _st(imageNew)._at_put_("src",_st(_st("ressources/images/").__comma(_st(assoc)._value())).__comma(".png"));
}, function($ctx2) {$ctx2.fillBlock({assoc:assoc},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"preloadImages:",{anImageCol:anImageCol,imageNew:imageNew}, smalltalk.ImageCache)})}
}),
smalltalk.ImageCache);

smalltalk.addMethod(
"_putImageWithKey_inDrawedObject_",
smalltalk.method({
selector: "putImageWithKey:inDrawedObject:",
fn: function (aKey,aDrawedObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})));
return self}, function($ctx1) {$ctx1.fill(self,"putImageWithKey:inDrawedObject:",{aKey:aKey,aDrawedObject:aDrawedObject}, smalltalk.ImageCache)})}
}),
smalltalk.ImageCache);



smalltalk.addClass('MonsterCache', smalltalk.CacheComponent, [], 'Easnoth-Tools');
smalltalk.addMethod(
"_addStatsFromKey_inMonster_",
smalltalk.method({
selector: "addStatsFromKey:inMonster:",
fn: function (aKey,aMonster){
var self=this;
var success,keySuccess,callBack;
return smalltalk.withContext(function($ctx1) { 
return smalltalk.withContext(function($ctx2) {
_st(aMonster)._stats_(_st(self)._at_(aKey));
return _st(_st(self)._cache())._isLoaded();
}, function($ctx2) {$ctx2.fillBlock({statsNew:statsNew},$ctx1)})});
keySuccess=_st(aKey).__comma("success");
_st(self)._at_put_(keySuccess,success);
callBack=(function(data){
return smalltalk.withContext(function($ctx2) {
return smalltalk.withContext(function($ctx3) {
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}))._value())._value_(data);
}, function($ctx2) {$ctx2.fillBlock({data:data},$ctx1)})});
_st(self)._jsCall_cb_(aKey,callBack);
return self}, function($ctx1) {$ctx1.fill(self,"addStatsFromKey:inMonster:",{aKey:aKey,aMonster:aMonster,success:success,keySuccess:keySuccess,callBack:callBack}, smalltalk.MonsterCache)})}
}),
smalltalk.MonsterCache);

smalltalk.addMethod(
"_jsCall_cb_",
smalltalk.method({
selector: "jsCall:cb:",
fn: function (aKey,callBack){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"jsCall:cb:",{aKey:aKey,callBack:callBack}, smalltalk.MonsterCache)})}
}),
smalltalk.MonsterCache);

smalltalk.addMethod(
"_putStatsWithKey_inMonster_",
smalltalk.method({
selector: "putStatsWithKey:inMonster:",
fn: function (aKey,aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st(self)._includesKey_(_st(aKey).__comma("success"));
if(smalltalk.assert($1)){
_st(self)._updateStatsFromKey_inMonster_(aKey,aMonster);
} else {
_st(self)._addStatsFromKey_inMonster_(aKey,aMonster);
};
return self}, function($ctx1) {$ctx1.fill(self,"putStatsWithKey:inMonster:",{aKey:aKey,aMonster:aMonster}, smalltalk.MonsterCache)})}
}),
smalltalk.MonsterCache);

smalltalk.addMethod(
"_updateStatsFromKey_inMonster_",
smalltalk.method({
selector: "updateStatsFromKey:inMonster:",
fn: function (aKey,aMonster){
var self=this;
var keySuccess,oldCallBack;
return smalltalk.withContext(function($ctx1) { 
keySuccess=_st(aKey).__comma("success");
oldCallBack=_st(self)._at_(keySuccess);
_st(self)._at_put_(keySuccess,(function(statsNew){
return smalltalk.withContext(function($ctx2) {
_st(oldCallBack)._value_(statsNew);
return _st(_st(self)._cache())._isLoaded();
}, function($ctx2) {$ctx2.fillBlock({statsNew:statsNew},$ctx1)})}));
$1=_st(self)._includesKey_(aKey);
if(smalltalk.assert($1)){
_st(aMonster)._stats_(_st(self)._at_(aKey));
};
return self}, function($ctx1) {$ctx1.fill(self,"updateStatsFromKey:inMonster:",{aKey:aKey,aMonster:aMonster,keySuccess:keySuccess,oldCallBack:oldCallBack}, smalltalk.MonsterCache)})}
}),
smalltalk.MonsterCache);



smalltalk.addClass('State', smalltalk.Object, ['object'], 'Easnoth-Tools');
smalltalk.addMethod(
"_newState_for_",
smalltalk.method({
selector: "newState:for:",
fn: function (aState,anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(anObject)._state_(aState);
return self}, function($ctx1) {$ctx1.fill(self,"newState:for:",{aState:aState,anObject:anObject}, smalltalk.State)})}
}),
smalltalk.State);

smalltalk.addMethod(
"_object",
smalltalk.method({
selector: "object",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=self["@object"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"object",{}, smalltalk.State)})}
}),
smalltalk.State);

smalltalk.addMethod(
"_object_",
smalltalk.method({
selector: "object:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"object:",{anObject:anObject}, smalltalk.State)})}
}),
smalltalk.State);

smalltalk.addMethod(
"_setUp",
smalltalk.method({
selector: "setUp",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}),
smalltalk.State);

smalltalk.addMethod(
"_tearDown",
smalltalk.method({
selector: "tearDown",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}),
smalltalk.State);


smalltalk.addMethod(
"_newFor_",
smalltalk.method({
selector: "newFor:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$2=_st(self)._new();
_st($2)._object_(anObject);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"newFor:",{anObject:anObject}, smalltalk.State.klass)})}
}),
smalltalk.State.klass);

