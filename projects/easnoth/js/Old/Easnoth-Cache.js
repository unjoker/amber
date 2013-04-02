smalltalk.addPackage('Easnoth-Cache', {});
smalltalk.addClass('Cache', smalltalk.Dictionary, ['onload', 'images', 'monsters'], 'Easnoth-Cache');
smalltalk.Cache.comment="\x22singleton cache\x22"
smalltalk.addMethod(
"_images",
smalltalk.method({
selector: "images",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@images'];
    return self;
},
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
fn: function (anImageCache) {
    var self = this;
    self['@images'] = anImageCache;
    return self;
},
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
fn: function () {
    var self = this;
    smalltalk.send(self, "_initialize", [], smalltalk.Cache.superclass || nil);
    smalltalk.send(self, "_images_", [smalltalk.send(smalltalk.ImageCache || ImageCache, "_newFor_", [self])]);
    smalltalk.send(self, "_monsters_", [smalltalk.send(smalltalk.MonsterCache || MonsterCache, "_newFor_", [self])]);
    return self;
},
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
fn: function () {
    var self = this;
    var loaded = nil;
    loaded = true;
    smalltalk.send(smalltalk.send(self, "_images", []), "_collect_", [function (each) {return loaded = smalltalk.send(loaded, "_&", [smalltalk.send(each, "_at_", ["complete"])]);}]);
    loaded = smalltalk.send(loaded, "_&", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_monsters", []), "_keys", []), "_size", []), "_even", [])]);
    ($receiver = loaded).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(smalltalk.send(self, "_onload", []), "_value", []);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return smalltalk.send(smalltalk.send(self, "_onload", []), "_value", []);}]);
    return self;
},
args: [],
source: "isLoaded\x0a\x09|loaded|\x0a\x09\x0a\x09loaded := true.\x0a\x0a\x09self images collect:[ :each|\x0a\x09\x09\x09\x09loaded := loaded & (each at: 'complete')].\x0a\x09loaded := loaded & self monsters keys size even.\x0a\x0a\x09loaded ifTrue:[self onload value.].",
messageSends: ["collect:", "images", "&", "at:", "even", "size", "keys", "monsters", "ifTrue:", "value", "onload"],
referencedClasses: []
}),
smalltalk.Cache);

smalltalk.addMethod(
"_monsters",
smalltalk.method({
selector: "monsters",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@monsters'];
    return self;
},
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
fn: function (aMonsterCache) {
    var self = this;
    self['@monsters'] = aMonsterCache;
    return self;
},
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
fn: function () {
    var self = this;
    return self['@onload'];
    return self;
},
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
fn: function (aBlock) {
    var self = this;
    self['@onload'] = aBlock;
    return self;
},
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
fn: function () {
    var self = this;
    return ($receiver = self['@cache']) == nil || $receiver == undefined ? function () {return self['@cache'] = smalltalk.send(self, "_new", []);}() : $receiver;
    return self;
},
args: [],
source: "getSingleton\x0a\x09^cache ifNil:[cache := self new.]",
messageSends: ["ifNil:", "new"],
referencedClasses: []
}),
smalltalk.Cache.klass);


smalltalk.addClass('CacheComponent', smalltalk.Dictionary, ['cache'], 'Easnoth-Cache');
smalltalk.addMethod(
"_cache",
smalltalk.method({
selector: "cache",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@cache'];
    return self;
},
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
fn: function (aCache) {
    var self = this;
    self['@cache'] = aCache;
    return self;
},
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
fn: function (aCache) {
    var self = this;
    return function ($rec) {smalltalk.send($rec, "_cache_", [aCache]);return smalltalk.send($rec, "_yourself", []);}(smalltalk.send(self, "_new", []));
    return self;
},
args: ["aCache"],
source: "newFor: aCache\x0a\x09^self new\x0a\x09\x09cache: aCache;\x0a\x09\x09yourself",
messageSends: ["cache:", "yourself", "new"],
referencedClasses: []
}),
smalltalk.CacheComponent.klass);


smalltalk.addClass('ImageCache', smalltalk.CacheComponent, [], 'Easnoth-Cache');
smalltalk.addMethod(
"_addImageFromKey_fromDrawedObject_",
smalltalk.method({
selector: "addImageFromKey:fromDrawedObject:",
category: 'caching',
fn: function (aKey, aDrawedObject) {
    var self = this;
    var imageNew = nil;
    imageNew = new Image;
    smalltalk.send(self, "_at_put_", [aKey, imageNew]);
    smalltalk.send(imageNew, "_at_put_", ["onload", function () {return smalltalk.send(smalltalk.send(self, "_cache", []), "_isLoaded", []);}]);
    smalltalk.send(imageNew, "_at_put_", ["src", smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("ressources/images/", "__comma", [smalltalk.send(aDrawedObject, "_folderName", [])]), "__comma", ["/"]), "__comma", [aKey]), "__comma", [".png"])]);
    return imageNew;
    return self;
},
args: ["aKey", "aDrawedObject"],
source: "addImageFromKey: aKey fromDrawedObject: aDrawedObject\x0a\x09|imageNew|\x0a\x0a\x09imageNew := <new Image()>.\x0a       \x09self at: aKey put: imageNew.\x0a        imageNew at: 'onload' put: [self cache isLoaded].\x0a        imageNew at: 'src' put:  'ressources/images/', aDrawedObject folderName, '/', aKey, '.png'.\x0a\x0a\x09^imageNew",
messageSends: ["at:put:", "isLoaded", "cache", ",", "folderName"],
referencedClasses: []
}),
smalltalk.ImageCache);

smalltalk.addMethod(
"_putImageWithKey_inDrawedObject_",
smalltalk.method({
selector: "putImageWithKey:inDrawedObject:",
category: 'caching',
fn: function (aKey, aDrawedObject) {
    var self = this;
    smalltalk.send(aDrawedObject, "_image_", [smalltalk.send(self, "_at_ifAbsent_", [aKey, function () {return smalltalk.send(self, "_addImageFromKey_fromDrawedObject_", [aKey, aDrawedObject]);}])]);
    return self;
},
args: ["aKey", "aDrawedObject"],
source: "putImageWithKey: aKey inDrawedObject: aDrawedObject\x0a\x09aDrawedObject image: (self at: aKey ifAbsent:[\x0a\x09\x09self addImageFromKey: aKey fromDrawedObject: aDrawedObject])",
messageSends: ["image:", "at:ifAbsent:", "addImageFromKey:fromDrawedObject:"],
referencedClasses: []
}),
smalltalk.ImageCache);



smalltalk.addClass('MonsterCache', smalltalk.CacheComponent, [], 'Easnoth-Cache');
smalltalk.addMethod(
"_addStatsFromKey_inMonster_",
smalltalk.method({
selector: "addStatsFromKey:inMonster:",
category: 'caching',
fn: function (aKey, aMonster) {
    var self = this;
    var success = nil;
    var keySuccess = nil;
    var callBack = nil;
    success = function (statsNew) {smalltalk.send(self, "_at_put_", [aKey, statsNew]);smalltalk.send(aMonster, "_stats_", [smalltalk.send(self, "_at_", [aKey])]);return smalltalk.send(smalltalk.send(self, "_cache", []), "_isLoaded", []);};
    keySuccess = smalltalk.send(aKey, "__comma", ["success"]);
    smalltalk.send(self, "_at_put_", [keySuccess, success]);
    callBack = function (data) {return smalltalk.send(smalltalk.send(function () {return smalltalk.send(self, "_at_", [keySuccess]);}, "_value", []), "_value_", [data]);};
    $.getJSON("ressources/json/monsters/" + aKey + ".json", callBack);
    return self;
},
args: ["aKey", "aMonster"],
source: "addStatsFromKey: aKey inMonster: aMonster\x0a\x09|success keySuccess callBack|\x0a\x09\x0a        success := [:statsNew | \x0a\x09\x09self at: aKey put: statsNew.\x0a                aMonster stats: (self at: aKey).\x0a                self cache isLoaded.\x0a        ].\x0a\x09\x0a\x09keySuccess := aKey,'success'.\x0a       \x09self at: keySuccess put: success.\x0a\x09callBack := [:data | [self at: keySuccess] value value: data].\x0a\x0a\x09<$.getJSON('ressources/json/monsters/' + aKey + '.json', callBack)>.",
messageSends: ["at:put:", "stats:", "at:", "isLoaded", "cache", ",", "value:", "value"],
referencedClasses: []
}),
smalltalk.MonsterCache);

smalltalk.addMethod(
"_putStatsWithKey_inMonster_",
smalltalk.method({
selector: "putStatsWithKey:inMonster:",
category: 'caching',
fn: function (aKey, aMonster) {
    var self = this;
    ($receiver = smalltalk.send(self, "_includesKey_", [smalltalk.send(aKey, "__comma", ["success"])])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(self, "_updateStatsFromKey_inMonster_", [aKey, aMonster]);}() : function () {return smalltalk.send(self, "_addStatsFromKey_inMonster_", [aKey, aMonster]);}() : smalltalk.send($receiver, "_ifTrue_ifFalse_", [function () {return smalltalk.send(self, "_updateStatsFromKey_inMonster_", [aKey, aMonster]);}, function () {return smalltalk.send(self, "_addStatsFromKey_inMonster_", [aKey, aMonster]);}]);
    return self;
},
args: ["aKey", "aMonster"],
source: "putStatsWithKey: aKey inMonster: aMonster\x0a\x09(self includesKey: aKey,'success') ifTrue: [\x0a\x09\x09self updateStatsFromKey: aKey inMonster: aMonster.\x0a\x09] ifFalse: [\x0a\x09\x09self addStatsFromKey: aKey inMonster: aMonster.\x0a\x09]",
messageSends: ["ifTrue:ifFalse:", "includesKey:", ",", "updateStatsFromKey:inMonster:", "addStatsFromKey:inMonster:"],
referencedClasses: []
}),
smalltalk.MonsterCache);

smalltalk.addMethod(
"_updateStatsFromKey_inMonster_",
smalltalk.method({
selector: "updateStatsFromKey:inMonster:",
category: 'caching',
fn: function (aKey, aMonster) {
    var self = this;
    var keySuccess = nil;
    var oldCallBack = nil;
    keySuccess = smalltalk.send(aKey, "__comma", ["success"]);
    oldCallBack = smalltalk.send(self, "_at_", [keySuccess]);
    smalltalk.send(self, "_at_put_", [keySuccess, function (statsNew) {smalltalk.send(aMonster, "_stats_", [statsNew]);smalltalk.send(oldCallBack, "_value_", [statsNew]);return smalltalk.send(smalltalk.send(self, "_cache", []), "_isLoaded", []);}]);
    ($receiver = smalltalk.send(self, "_includesKey_", [aKey])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(aMonster, "_stats_", [smalltalk.send(self, "_at_", [aKey])]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return smalltalk.send(aMonster, "_stats_", [smalltalk.send(self, "_at_", [aKey])]);}]);
    return self;
},
args: ["aKey", "aMonster"],
source: "updateStatsFromKey: aKey inMonster: aMonster\x0a\x09|keySuccess oldCallBack|\x0a\x0a\x09keySuccess := aKey,'success'.\x0a\x09oldCallBack := self at: keySuccess.\x0a\x09self at: keySuccess put: [:statsNew | \x0a\x09\x09\x09aMonster stats: statsNew. \x0a\x09\x09\x09oldCallBack value: statsNew. \x0a\x09\x09\x09self cache isLoaded].\x0a\x09(self includesKey: aKey) ifTrue: [aMonster stats: (self at: aKey)].",
messageSends: [",", "at:", "at:put:", "stats:", "value:", "isLoaded", "cache", "ifTrue:", "includesKey:"],
referencedClasses: []
}),
smalltalk.MonsterCache);


