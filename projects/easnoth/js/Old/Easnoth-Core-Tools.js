smalltalk.addPackage('Easnoth-Core-Tools', {});
smalltalk.addClass('Cache', smalltalk.Dictionary, ['onload'], 'Easnoth-Core-Tools');
smalltalk.Cache.comment="\x22singleton cache for images\x22"
smalltalk.addMethod(
"_isLoaded",
smalltalk.method({
selector: "isLoaded",
category: 'accessing',
fn: function () {
    var self = this;
    var loaded = nil;
    var ic = nil;
    var mc = nil;
    ic = smalltalk.send(smalltalk.ImageCache || ImageCache, "_getSingleton", []);
    mc = smalltalk.send(smalltalk.MonsterCache || MonsterCache, "_getSingleton", []);
    loaded = true;
    smalltalk.send(ic, "_collect_", [function (each) {return loaded = smalltalk.send(loaded, "_&", [smalltalk.send(each, "_at_", ["complete"])]);}]);
    loaded = smalltalk.send(loaded, "_&", [smalltalk.send(smalltalk.send(smalltalk.send(mc, "_keys", []), "_size", []), "_even", [])]);
    ($receiver = loaded).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(smalltalk.send(ic, "_onload", []), "_value", []);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return smalltalk.send(smalltalk.send(ic, "_onload", []), "_value", []);}]);
    return self;
},
args: [],
source: "isLoaded\x0a\x09|loaded ic mc|\x0a\x09\x0a\x09ic := ImageCache getSingleton.\x0a\x09mc := MonsterCache getSingleton.\x0a\x09loaded := true.\x0a\x0a\x09ic collect:[ :each|\x0a\x09\x09\x09\x09loaded := loaded & (each at: 'complete')].\x0a\x09loaded := loaded & mc keys size even.\x0a\x09loaded ifTrue:[ic onload value.].",
messageSends: ["getSingleton", "collect:", "&", "at:", "even", "size", "keys", "ifTrue:", "value", "onload"],
referencedClasses: ["ImageCache", "MonsterCache"]
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


smalltalk.addClass('ImageCache', smalltalk.Cache, [], 'Easnoth-Core-Tools');
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
    smalltalk.send(imageNew, "_at_put_", ["onload", function () {return smalltalk.send(self, "_isLoaded", []);}]);
    smalltalk.send(imageNew, "_at_put_", ["src", smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("ressources/images/", "__comma", [smalltalk.send(aDrawedObject, "_folderName", [])]), "__comma", ["/"]), "__comma", [aKey]), "__comma", [".png"])]);
    return imageNew;
    return self;
},
args: ["aKey", "aDrawedObject"],
source: "addImageFromKey: aKey fromDrawedObject: aDrawedObject\x0a\x09|imageNew|\x0a\x0a\x09imageNew := <new Image()>.\x0a       \x09self at: aKey put: imageNew.\x0a        imageNew at: 'onload' put: [self isLoaded].\x0a        imageNew at: 'src' put:  'ressources/images/', aDrawedObject folderName, '/', aKey, '.png'.\x0a\x0a\x09^imageNew",
messageSends: ["at:put:", "isLoaded", ",", "folderName"],
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



smalltalk.addClass('MonsterCache', smalltalk.Cache, [], 'Easnoth-Core-Tools');
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
    success = function (statsNew) {smalltalk.send(self, "_at_put_", [aKey, statsNew]);smalltalk.send(aMonster, "_stats_", [smalltalk.send(self, "_at_", [aKey])]);return smalltalk.send(self, "_isLoaded", []);};
    keySuccess = smalltalk.send(aKey, "__comma", ["success"]);
    smalltalk.send(self, "_at_put_", [keySuccess, success]);
    callBack = function (data) {return smalltalk.send(smalltalk.send(function () {return smalltalk.send(self, "_at_", [keySuccess]);}, "_value", []), "_value_", [data]);};
    $.getJSON("ressources/json/monsters/" + aKey + ".json", callBack);
    return self;
},
args: ["aKey", "aMonster"],
source: "addStatsFromKey: aKey inMonster: aMonster\x0a\x09|success keySuccess callBack|\x0a\x09\x0a        success := [:statsNew | \x0a\x09\x09self at: aKey put: statsNew.\x0a                aMonster stats: (self at: aKey).\x0a                self isLoaded.\x0a        ].\x0a\x09\x0a\x09keySuccess := aKey,'success'.\x0a       \x09self at: keySuccess put: success.\x0a\x09callBack := [:data | [self at: keySuccess] value value: data].\x0a\x0a\x09<$.getJSON('ressources/json/monsters/' + aKey + '.json', callBack)>.",
messageSends: ["at:put:", "stats:", "at:", "isLoaded", ",", "value:", "value"],
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
    smalltalk.send(self, "_at_put_", [keySuccess, function (statsNew) {smalltalk.send(aMonster, "_stats_", [statsNew]);smalltalk.send(oldCallBack, "_value_", [statsNew]);return smalltalk.send(self, "_isLoaded", []);}]);
    ($receiver = smalltalk.send(self, "_includesKey_", [aKey])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(aMonster, "_stats_", [smalltalk.send(self, "_at_", [aKey])]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return smalltalk.send(aMonster, "_stats_", [smalltalk.send(self, "_at_", [aKey])]);}]);
    return self;
},
args: ["aKey", "aMonster"],
source: "updateStatsFromKey: aKey inMonster: aMonster\x0a\x09|keySuccess oldCallBack|\x0a\x0a\x09keySuccess := aKey,'success'.\x0a\x09oldCallBack := self at: keySuccess.\x0a\x09self at: keySuccess put: [:statsNew | \x0a\x09\x09\x09aMonster stats: statsNew. \x0a\x09\x09\x09oldCallBack value: statsNew. \x0a\x09\x09\x09self isLoaded].\x0a\x09(self includesKey: aKey) ifTrue: [aMonster stats: (self at: aKey)].",
messageSends: [",", "at:", "at:put:", "stats:", "value:", "isLoaded", "ifTrue:", "includesKey:"],
referencedClasses: []
}),
smalltalk.MonsterCache);



