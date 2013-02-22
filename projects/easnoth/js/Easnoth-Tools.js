smalltalk.addPackage('Easnoth-Tools', {});
smalltalk.addClass('ActionMenu', smalltalk.Widget, ['map', 'components'], 'Easnoth-Tools');
smalltalk.addMethod(
"_addComponent_",
smalltalk.method({
selector: "addComponent:",
category: 'accessing',
fn: function (aComponent){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._components())._add_(aComponent);
_st(aComponent)._actionMenu_(self);
return self}, function($ctx1) {$ctx1.fill(self,"addComponent:",{aComponent:aComponent}, smalltalk.ActionMenu)})},
args: ["aComponent"],
source: "addComponent: aComponent\x0a\x09self components add: aComponent.\x0a\x09aComponent actionMenu: self",
messageSends: ["add:", "components", "actionMenu:"],
referencedClasses: []
}),
smalltalk.ActionMenu);

smalltalk.addMethod(
"_components",
smalltalk.method({
selector: "components",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@components"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"components",{}, smalltalk.ActionMenu)})},
args: [],
source: "components\x0a\x09^components",
messageSends: [],
referencedClasses: []
}),
smalltalk.ActionMenu);

smalltalk.addMethod(
"_components_",
smalltalk.method({
selector: "components:",
category: 'accessing',
fn: function (aCol){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@components"]=aCol;
return self}, function($ctx1) {$ctx1.fill(self,"components:",{aCol:aCol}, smalltalk.ActionMenu)})},
args: ["aCol"],
source: "components: aCol\x0a\x09components := aCol",
messageSends: [],
referencedClasses: []
}),
smalltalk.ActionMenu);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._components_(_st((smalltalk.Array || Array))._new());
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.ActionMenu)})},
args: [],
source: "initialize\x0a\x09self components: Array new",
messageSends: ["components:", "new"],
referencedClasses: ["Array"]
}),
smalltalk.ActionMenu);

smalltalk.addMethod(
"_map",
smalltalk.method({
selector: "map",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@map"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"map",{}, smalltalk.ActionMenu)})},
args: [],
source: "map\x0a\x09^map",
messageSends: [],
referencedClasses: []
}),
smalltalk.ActionMenu);

smalltalk.addMethod(
"_map_",
smalltalk.method({
selector: "map:",
category: 'accessing',
fn: function (aMap){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@map"]=aMap;
return self}, function($ctx1) {$ctx1.fill(self,"map:",{aMap:aMap}, smalltalk.ActionMenu)})},
args: ["aMap"],
source: "map: aMap\x0a\x09map := aMap",
messageSends: [],
referencedClasses: []
}),
smalltalk.ActionMenu);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
category: 'initialize-release',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._components())._collect_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(each)._renderOn_(html);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html}, smalltalk.ActionMenu)})},
args: ["html"],
source: "renderOn: html\x0a\x09self components collect: [:each |\x0a\x09\x09each renderOn: html ].",
messageSends: ["collect:", "renderOn:", "components"],
referencedClasses: []
}),
smalltalk.ActionMenu);


smalltalk.addMethod(
"_newFor_",
smalltalk.method({
selector: "newFor:",
category: 'instance-creation',
fn: function (aMap){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st(self)._new();
_st($2)._map_(aMap);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"newFor:",{aMap:aMap}, smalltalk.ActionMenu.klass)})},
args: ["aMap"],
source: "newFor: aMap\x0a\x09^self new\x0a\x09\x09map: aMap;\x0a\x09\x09yourself.",
messageSends: ["map:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.ActionMenu.klass);


smalltalk.addClass('ActionMenuComponent', smalltalk.Widget, ['actionMenu'], 'Easnoth-Tools');
smalltalk.addMethod(
"_actionMenu",
smalltalk.method({
selector: "actionMenu",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@actionMenu"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"actionMenu",{}, smalltalk.ActionMenuComponent)})},
args: [],
source: "actionMenu\x0a\x09^actionMenu",
messageSends: [],
referencedClasses: []
}),
smalltalk.ActionMenuComponent);

smalltalk.addMethod(
"_actionMenu_",
smalltalk.method({
selector: "actionMenu:",
category: 'accessing',
fn: function (aMenu){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@actionMenu"]=aMenu;
return self}, function($ctx1) {$ctx1.fill(self,"actionMenu:",{aMenu:aMenu}, smalltalk.ActionMenuComponent)})},
args: ["aMenu"],
source: "actionMenu: aMenu\x0a\x09actionMenu := aMenu",
messageSends: [],
referencedClasses: []
}),
smalltalk.ActionMenuComponent);


smalltalk.addMethod(
"_newFor_",
smalltalk.method({
selector: "newFor:",
category: 'instance-creation',
fn: function (aMenu){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st(self)._new();
_st($2)._actionMenu_(aMenu);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"newFor:",{aMenu:aMenu}, smalltalk.ActionMenuComponent.klass)})},
args: ["aMenu"],
source: "newFor: aMenu\x0a\x09^self new\x0a\x09\x09actionMenu: aMenu;\x0a\x09\x09yourself.",
messageSends: ["actionMenu:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.ActionMenuComponent.klass);


smalltalk.addClass('MapControls', smalltalk.ActionMenuComponent, [], 'Easnoth-Tools');
smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
category: 'displaying',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$2;
$1=_st(html)._div();
_st($1)._class_("mapWatcher");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {_st(_st(html)._h4())._with_("map controls");
$3=_st(html)._button();
_st($3)._with_("left");
$4=_st($3)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {return _st(_st(_st(self)._actionMenu())._map())._goLeft();
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
$4;
$5=_st(html)._button();
_st($5)._with_("right");
$6=_st($5)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {return _st(_st(_st(self)._actionMenu())._map())._goRight();
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
$6;
$7=_st(html)._button();
_st($7)._with_("down");
$8=_st($7)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {return _st(_st(_st(self)._actionMenu())._map())._goDown();
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
$8;
$9=_st(html)._button();
_st($9)._with_("up");
$10=_st($9)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {return _st(_st(_st(self)._actionMenu())._map())._goUp();
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
$10;
_st(_st(html)._span())._with_("-");
$11=_st(html)._button();
_st($11)._with_("mh");
$12=_st($11)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {return _st(_st(_st(self)._actionMenu())._map())._mirrorHorizontal();
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
$12;
$13=_st(html)._button();
_st($13)._with_("vh");
$14=_st($13)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {return _st(_st(_st(self)._actionMenu())._map())._mirrorVertical();
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
return $14;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html}, smalltalk.MapControls)})},
args: ["html"],
source: "renderOn: html\x0a\x09html div \x0a\x09\x09class: 'mapWatcher';\x0a\x09\x09with: [\x0a                html h4\x0a                        with: 'map controls'.\x0a                html button\x0a                        with: 'left';\x0a                        onClick: [self actionMenu map goLeft].\x0a                html button\x0a                        with: 'right';\x0a                        onClick: [self actionMenu map goRight].\x0a                html button\x0a                        with: 'down';\x0a                        onClick: [self actionMenu map goDown].\x0a                html button\x0a                        with: 'up';\x0a                        onClick: [self actionMenu map goUp].\x0a\x09\x09html span \x0a\x09\x09\x09with: '-'.\x0a                html button\x0a                        with: 'mh';\x0a                        onClick: [self actionMenu map mirrorHorizontal].\x0a                html button\x0a                        with: 'vh';\x0a                        onClick: [self actionMenu map mirrorVertical].\x0a\x09].",
messageSends: ["class:", "div", "with:", "h4", "button", "onClick:", "goLeft", "map", "actionMenu", "goRight", "goDown", "goUp", "span", "mirrorHorizontal", "mirrorVertical"],
referencedClasses: []
}),
smalltalk.MapControls);



smalltalk.addClass('Cache', smalltalk.Dictionary, ['onload', 'images', 'monsters'], 'Easnoth-Tools');
smalltalk.Cache.comment="\x22singleton cache\x22"
smalltalk.addMethod(
"_images",
smalltalk.method({
selector: "images",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@images"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"images",{}, smalltalk.Cache)})},
args: [],
source: "images\x0a\x09^images",
messageSends: [],
referencedClasses: []
}),
smalltalk.Cache);

smalltalk.addMethod(
"_images_",
smalltalk.method({
selector: "images:",
category: 'accessing',
fn: function (anImageCache){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@images"]=anImageCache;
return self}, function($ctx1) {$ctx1.fill(self,"images:",{anImageCache:anImageCache}, smalltalk.Cache)})},
args: ["anImageCache"],
source: "images: anImageCache\x0a\x09images := anImageCache",
messageSends: [],
referencedClasses: []
}),
smalltalk.Cache);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.Dictionary.fn.prototype._initialize.apply(_st(self), []);
_st(self)._images_(_st((smalltalk.ImageCache || ImageCache))._newFor_(self));
_st(self)._monsters_(_st((smalltalk.MonsterCache || MonsterCache))._newFor_(self));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.Cache)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self images: (ImageCache newFor: self).\x0a\x09self monsters: (MonsterCache newFor: self).\x0a\x09",
messageSends: ["initialize", "images:", "newFor:", "monsters:"],
referencedClasses: ["ImageCache", "MonsterCache"]
}),
smalltalk.Cache);

smalltalk.addMethod(
"_isLoaded",
smalltalk.method({
selector: "isLoaded",
category: 'accessing',
fn: function (){
var self=this;
var loaded;
return smalltalk.withContext(function($ctx1) { var $1;
loaded=true;
_st(_st(self)._images())._collect_((function(each){
return smalltalk.withContext(function($ctx2) {loaded=_st(loaded).__and(_st(each)._at_("complete"));
return loaded;
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
loaded=_st(loaded).__and(_st(_st(_st(_st(self)._monsters())._keys())._size())._even());
$1=loaded;
if(smalltalk.assert($1)){
_st(_st(self)._onload())._value();
};
return self}, function($ctx1) {$ctx1.fill(self,"isLoaded",{loaded:loaded}, smalltalk.Cache)})},
args: [],
source: "isLoaded\x0a\x09|loaded|\x0a\x09\x0a\x09loaded := true.\x0a\x0a\x09self images collect:[ :each|\x0a\x09\x09\x09\x09loaded := loaded & (each at: 'complete')].\x0a\x09loaded := loaded & self monsters keys size even.\x0a\x0a\x09loaded ifTrue:[self onload value.].",
messageSends: ["collect:", "&", "at:", "images", "even", "size", "keys", "monsters", "ifTrue:", "value", "onload"],
referencedClasses: []
}),
smalltalk.Cache);

smalltalk.addMethod(
"_monsters",
smalltalk.method({
selector: "monsters",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@monsters"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"monsters",{}, smalltalk.Cache)})},
args: [],
source: "monsters\x0a\x09^monsters",
messageSends: [],
referencedClasses: []
}),
smalltalk.Cache);

smalltalk.addMethod(
"_monsters_",
smalltalk.method({
selector: "monsters:",
category: 'accessing',
fn: function (aMonsterCache){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@monsters"]=aMonsterCache;
return self}, function($ctx1) {$ctx1.fill(self,"monsters:",{aMonsterCache:aMonsterCache}, smalltalk.Cache)})},
args: ["aMonsterCache"],
source: "monsters: aMonsterCache\x0a\x09monsters := aMonsterCache",
messageSends: [],
referencedClasses: []
}),
smalltalk.Cache);

smalltalk.addMethod(
"_onload",
smalltalk.method({
selector: "onload",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@onload"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"onload",{}, smalltalk.Cache)})},
args: [],
source: "onload\x0a\x09^onload",
messageSends: [],
referencedClasses: []
}),
smalltalk.Cache);

smalltalk.addMethod(
"_onload_",
smalltalk.method({
selector: "onload:",
category: 'accessing',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@onload"]=aBlock;
return self}, function($ctx1) {$ctx1.fill(self,"onload:",{aBlock:aBlock}, smalltalk.Cache)})},
args: ["aBlock"],
source: "onload: aBlock\x0a\x09onload := aBlock",
messageSends: [],
referencedClasses: []
}),
smalltalk.Cache);


smalltalk.Cache.klass.iVarNames = ['cache'];
smalltalk.addMethod(
"_getSingleton",
smalltalk.method({
selector: "getSingleton",
category: 'initialize',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@cache"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@cache"]=_st(self)._new();
$1=self["@cache"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"getSingleton",{}, smalltalk.Cache.klass)})},
args: [],
source: "getSingleton\x0a\x09^cache ifNil:[cache := self new.]",
messageSends: ["ifNil:", "new"],
referencedClasses: []
}),
smalltalk.Cache.klass);


smalltalk.addClass('CacheComponent', smalltalk.Dictionary, ['cache'], 'Easnoth-Tools');
smalltalk.addMethod(
"_cache",
smalltalk.method({
selector: "cache",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@cache"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"cache",{}, smalltalk.CacheComponent)})},
args: [],
source: "cache \x0a\x09^cache",
messageSends: [],
referencedClasses: []
}),
smalltalk.CacheComponent);

smalltalk.addMethod(
"_cache_",
smalltalk.method({
selector: "cache:",
category: 'accessing',
fn: function (aCache){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@cache"]=aCache;
return self}, function($ctx1) {$ctx1.fill(self,"cache:",{aCache:aCache}, smalltalk.CacheComponent)})},
args: ["aCache"],
source: "cache: aCache\x0a\x09cache := aCache",
messageSends: [],
referencedClasses: []
}),
smalltalk.CacheComponent);


smalltalk.addMethod(
"_newFor_",
smalltalk.method({
selector: "newFor:",
category: 'instance-creation',
fn: function (aCache){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st(self)._new();
_st($2)._cache_(aCache);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"newFor:",{aCache:aCache}, smalltalk.CacheComponent.klass)})},
args: ["aCache"],
source: "newFor: aCache\x0a\x09^self new\x0a\x09\x09cache: aCache;\x0a\x09\x09yourself",
messageSends: ["cache:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.CacheComponent.klass);


smalltalk.addClass('ImageCache', smalltalk.CacheComponent, [], 'Easnoth-Tools');
smalltalk.addMethod(
"_addImageFromKey_fromDrawedObject_",
smalltalk.method({
selector: "addImageFromKey:fromDrawedObject:",
category: 'caching',
fn: function (aKey,aDrawedObject){
var self=this;
var imageNew;
return smalltalk.withContext(function($ctx1) { var $1;
imageNew=_st((smalltalk.NativeFunction || NativeFunction))._constructor_("Image");
_st(self)._at_put_(aKey,imageNew);
_st(imageNew)._at_put_("onload",(function(){
return smalltalk.withContext(function($ctx2) {return _st(_st(self)._cache())._isLoaded();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(imageNew)._at_put_("src",_st(_st(_st(_st("ressources/images/").__comma(_st(aDrawedObject)._folderName())).__comma("/")).__comma(aKey)).__comma(".png"));
$1=imageNew;
return $1;
}, function($ctx1) {$ctx1.fill(self,"addImageFromKey:fromDrawedObject:",{aKey:aKey,aDrawedObject:aDrawedObject,imageNew:imageNew}, smalltalk.ImageCache)})},
args: ["aKey", "aDrawedObject"],
source: "addImageFromKey: aKey fromDrawedObject: aDrawedObject\x0a\x09|imageNew|\x0a\x0a\x09imageNew := NativeFunction constructor: 'Image'.\x0a       \x09self at: aKey put: imageNew.\x0a        imageNew at: 'onload' put: [self cache isLoaded].\x0a        imageNew at: 'src' put:  'ressources/images/', aDrawedObject folderName, '/', aKey, '.png'.\x0a\x0a\x09^imageNew",
messageSends: ["constructor:", "at:put:", "isLoaded", "cache", ",", "folderName"],
referencedClasses: ["NativeFunction"]
}),
smalltalk.ImageCache);

smalltalk.addMethod(
"_preloadImages_",
smalltalk.method({
selector: "preloadImages:",
category: 'caching',
fn: function (anImageCol){
var self=this;
var imageNew;
return smalltalk.withContext(function($ctx1) { _st(anImageCol)._associationsDo_((function(assoc){
return smalltalk.withContext(function($ctx2) {imageNew=_st((smalltalk.NativeFunction || NativeFunction))._constructor_("Image");
imageNew;
_st(self)._at_put_(_st(assoc)._key(),imageNew);
return _st(imageNew)._at_put_("src",_st(_st("ressources/images/").__comma(_st(assoc)._value())).__comma(".png"));
}, function($ctx2) {$ctx2.fillBlock({assoc:assoc},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"preloadImages:",{anImageCol:anImageCol,imageNew:imageNew}, smalltalk.ImageCache)})},
args: ["anImageCol"],
source: "preloadImages: anImageCol\x0a\x09|imageNew|\x0a\x0a\x09anImageCol associationsDo: [ :assoc |\x0a                imageNew := NativeFunction constructor: 'Image'.\x0a                self at: assoc key put: imageNew.\x0a                imageNew at: 'src' put:  'ressources/images/',assoc value,'.png'.\x0a\x09].",
messageSends: ["associationsDo:", "constructor:", "at:put:", "key", ",", "value"],
referencedClasses: ["NativeFunction"]
}),
smalltalk.ImageCache);

smalltalk.addMethod(
"_putImageWithKey_inDrawedObject_",
smalltalk.method({
selector: "putImageWithKey:inDrawedObject:",
category: 'caching',
fn: function (aKey,aDrawedObject){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(aDrawedObject)._image_(_st(self)._at_ifAbsent_(aKey,(function(){
return smalltalk.withContext(function($ctx2) {return _st(self)._addImageFromKey_fromDrawedObject_(aKey,aDrawedObject);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})));
return self}, function($ctx1) {$ctx1.fill(self,"putImageWithKey:inDrawedObject:",{aKey:aKey,aDrawedObject:aDrawedObject}, smalltalk.ImageCache)})},
args: ["aKey", "aDrawedObject"],
source: "putImageWithKey: aKey inDrawedObject: aDrawedObject\x0a\x09aDrawedObject image: (self at: aKey ifAbsent:[\x0a\x09\x09self addImageFromKey: aKey fromDrawedObject: aDrawedObject])",
messageSends: ["image:", "at:ifAbsent:", "addImageFromKey:fromDrawedObject:"],
referencedClasses: []
}),
smalltalk.ImageCache);



smalltalk.addClass('MonsterCache', smalltalk.CacheComponent, [], 'Easnoth-Tools');
smalltalk.addMethod(
"_addStatsFromKey_inMonster_",
smalltalk.method({
selector: "addStatsFromKey:inMonster:",
category: 'caching',
fn: function (aKey,aMonster){
var self=this;
var success,keySuccess,callBack;
return smalltalk.withContext(function($ctx1) { success=(function(statsNew){
return smalltalk.withContext(function($ctx2) {_st(self)._at_put_(aKey,statsNew);
_st(aMonster)._stats_(_st(self)._at_(aKey));
return _st(_st(self)._cache())._isLoaded();
}, function($ctx2) {$ctx2.fillBlock({statsNew:statsNew},$ctx1)})});
keySuccess=_st(aKey).__comma("success");
_st(self)._at_put_(keySuccess,success);
callBack=(function(data){
return smalltalk.withContext(function($ctx2) {return _st(_st((function(){
return smalltalk.withContext(function($ctx3) {return _st(self)._at_(keySuccess);
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}))._value())._value_(data);
}, function($ctx2) {$ctx2.fillBlock({data:data},$ctx1)})});
_st(self)._jsCall_cb_(aKey,callBack);
return self}, function($ctx1) {$ctx1.fill(self,"addStatsFromKey:inMonster:",{aKey:aKey,aMonster:aMonster,success:success,keySuccess:keySuccess,callBack:callBack}, smalltalk.MonsterCache)})},
args: ["aKey", "aMonster"],
source: "addStatsFromKey: aKey inMonster: aMonster\x0a\x09|success keySuccess callBack|\x0a\x09\x0a        success := [:statsNew | \x0a\x09\x09self at: aKey put: statsNew.\x0a                aMonster stats: (self at: aKey).\x0a                self cache isLoaded.\x0a        ].\x0a\x09\x0a\x09keySuccess := aKey,'success'.\x0a       \x09self at: keySuccess put: success.\x0a\x09callBack := [:data | [self at: keySuccess] value value: data].\x0a\x0a\x09self jsCall: aKey cb: callBack.",
messageSends: ["at:put:", "stats:", "at:", "isLoaded", "cache", ",", "value:", "value", "jsCall:cb:"],
referencedClasses: []
}),
smalltalk.MonsterCache);

smalltalk.addMethod(
"_jsCall_cb_",
smalltalk.method({
selector: "jsCall:cb:",
category: 'caching',
fn: function (aKey,callBack){
var self=this;
return smalltalk.withContext(function($ctx1) { $.getJSON('ressources/json/monsters/' + aKey + '.json', callBack);
return self}, function($ctx1) {$ctx1.fill(self,"jsCall:cb:",{aKey:aKey,callBack:callBack}, smalltalk.MonsterCache)})},
args: ["aKey", "callBack"],
source: "jsCall: aKey cb: callBack\x0a\x0a\x09<$.getJSON('ressources/json/monsters/' + aKey + '.json', callBack)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.MonsterCache);

smalltalk.addMethod(
"_putStatsWithKey_inMonster_",
smalltalk.method({
selector: "putStatsWithKey:inMonster:",
category: 'caching',
fn: function (aKey,aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._includesKey_(_st(aKey).__comma("success"));
if(smalltalk.assert($1)){
_st(self)._updateStatsFromKey_inMonster_(aKey,aMonster);
} else {
_st(self)._addStatsFromKey_inMonster_(aKey,aMonster);
};
return self}, function($ctx1) {$ctx1.fill(self,"putStatsWithKey:inMonster:",{aKey:aKey,aMonster:aMonster}, smalltalk.MonsterCache)})},
args: ["aKey", "aMonster"],
source: "putStatsWithKey: aKey inMonster: aMonster\x0a\x09(self includesKey: aKey,'success') ifTrue: [\x0a\x09\x09self updateStatsFromKey: aKey inMonster: aMonster.\x0a\x09] ifFalse: [\x0a\x09\x09self addStatsFromKey: aKey inMonster: aMonster.\x0a\x09]",
messageSends: ["ifTrue:ifFalse:", "updateStatsFromKey:inMonster:", "addStatsFromKey:inMonster:", "includesKey:", ","],
referencedClasses: []
}),
smalltalk.MonsterCache);

smalltalk.addMethod(
"_updateStatsFromKey_inMonster_",
smalltalk.method({
selector: "updateStatsFromKey:inMonster:",
category: 'caching',
fn: function (aKey,aMonster){
var self=this;
var keySuccess,oldCallBack;
return smalltalk.withContext(function($ctx1) { var $1;
keySuccess=_st(aKey).__comma("success");
oldCallBack=_st(self)._at_(keySuccess);
_st(self)._at_put_(keySuccess,(function(statsNew){
return smalltalk.withContext(function($ctx2) {_st(aMonster)._stats_(statsNew);
_st(oldCallBack)._value_(statsNew);
return _st(_st(self)._cache())._isLoaded();
}, function($ctx2) {$ctx2.fillBlock({statsNew:statsNew},$ctx1)})}));
$1=_st(self)._includesKey_(aKey);
if(smalltalk.assert($1)){
_st(aMonster)._stats_(_st(self)._at_(aKey));
};
return self}, function($ctx1) {$ctx1.fill(self,"updateStatsFromKey:inMonster:",{aKey:aKey,aMonster:aMonster,keySuccess:keySuccess,oldCallBack:oldCallBack}, smalltalk.MonsterCache)})},
args: ["aKey", "aMonster"],
source: "updateStatsFromKey: aKey inMonster: aMonster\x0a\x09|keySuccess oldCallBack|\x0a\x0a\x09keySuccess := aKey,'success'.\x0a\x09oldCallBack := self at: keySuccess.\x0a\x09self at: keySuccess put: [:statsNew | \x0a\x09\x09\x09aMonster stats: statsNew. \x0a\x09\x09\x09oldCallBack value: statsNew. \x0a\x09\x09\x09self cache isLoaded].\x0a\x09(self includesKey: aKey) ifTrue: [aMonster stats: (self at: aKey)].",
messageSends: [",", "at:", "at:put:", "stats:", "value:", "isLoaded", "cache", "ifTrue:", "includesKey:"],
referencedClasses: []
}),
smalltalk.MonsterCache);



smalltalk.addClass('State', smalltalk.Object, ['object'], 'Easnoth-Tools');
smalltalk.addMethod(
"_newState_for_",
smalltalk.method({
selector: "newState:for:",
category: 'initialize-release',
fn: function (aState,anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(aState)._object_(anObject);
_st(anObject)._state_(aState);
return self}, function($ctx1) {$ctx1.fill(self,"newState:for:",{aState:aState,anObject:anObject}, smalltalk.State)})},
args: ["aState", "anObject"],
source: "newState: aState for: anObject\x0a\x09\x22anObject state tearDown.\x22\x0a\x09aState object: anObject.\x0a\x09anObject state: aState.\x0a\x09\x22aState setUp.\x22",
messageSends: ["object:", "state:"],
referencedClasses: []
}),
smalltalk.State);

smalltalk.addMethod(
"_object",
smalltalk.method({
selector: "object",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@object"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"object",{}, smalltalk.State)})},
args: [],
source: "object\x0a\x09^object",
messageSends: [],
referencedClasses: []
}),
smalltalk.State);

smalltalk.addMethod(
"_object_",
smalltalk.method({
selector: "object:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@object"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"object:",{anObject:anObject}, smalltalk.State)})},
args: ["anObject"],
source: "object: anObject\x0a\x09object := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.State);

smalltalk.addMethod(
"_setUp",
smalltalk.method({
selector: "setUp",
category: 'initialize-release',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self}, function($ctx1) {$ctx1.fill(self,"setUp",{}, smalltalk.State)})},
args: [],
source: "setUp",
messageSends: [],
referencedClasses: []
}),
smalltalk.State);

smalltalk.addMethod(
"_tearDown",
smalltalk.method({
selector: "tearDown",
category: 'initialize-release',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self}, function($ctx1) {$ctx1.fill(self,"tearDown",{}, smalltalk.State)})},
args: [],
source: "tearDown",
messageSends: [],
referencedClasses: []
}),
smalltalk.State);


smalltalk.addMethod(
"_newFor_",
smalltalk.method({
selector: "newFor:",
category: 'instance creation',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st(self)._new();
_st($2)._object_(anObject);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"newFor:",{anObject:anObject}, smalltalk.State.klass)})},
args: ["anObject"],
source: "newFor: anObject\x0a\x09^self new\x0a\x09\x09object: anObject;\x0a\x09\x09yourself.",
messageSends: ["object:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.State.klass);


