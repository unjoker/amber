smalltalk.addPackage('Easnoth-Cache', {});
smalltalk.addClass('Cache', smalltalk.Dictionary, ['onload', 'images', 'monsters'], 'Easnoth-Cache');
smalltalk.addMethod(
"_images",
smalltalk.method({
selector: "images",
fn: function () {
    var self = this;
    return self['@images'];
    return self;
}
}),
smalltalk.Cache);

smalltalk.addMethod(
"_images_",
smalltalk.method({
selector: "images:",
fn: function (anImageCache) {
    var self = this;
    self['@images'] = anImageCache;
    return self;
}
}),
smalltalk.Cache);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function () {
    var self = this;
    smalltalk.send(self, "_initialize", [], smalltalk.Cache.superclass || nil);
    smalltalk.send(self, "_images_", [smalltalk.send(smalltalk.ImageCache || ImageCache, "_newFor_", [self])]);
    smalltalk.send(self, "_monsters_", [smalltalk.send(smalltalk.MonsterCache || MonsterCache, "_newFor_", [self])]);
    return self;
}
}),
smalltalk.Cache);

smalltalk.addMethod(
"_isLoaded",
smalltalk.method({
selector: "isLoaded",
fn: function () {
    var self = this;
    var loaded = nil;
    loaded = true;
    smalltalk.send(smalltalk.send(self, "_images", []), "_collect_", [function (each) {return loaded = smalltalk.send(loaded, "_&", [smalltalk.send(each, "_at_", ["complete"])]);}]);
    loaded = smalltalk.send(loaded, "_&", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_monsters", []), "_keys", []), "_size", []), "_even", [])]);
    ($receiver = loaded).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(smalltalk.send(self, "_onload", []), "_value", []);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return smalltalk.send(smalltalk.send(self, "_onload", []), "_value", []);}]);
    return self;
}
}),
smalltalk.Cache);

smalltalk.addMethod(
"_monsters",
smalltalk.method({
selector: "monsters",
fn: function () {
    var self = this;
    return self['@monsters'];
    return self;
}
}),
smalltalk.Cache);

smalltalk.addMethod(
"_monsters_",
smalltalk.method({
selector: "monsters:",
fn: function (aMonsterCache) {
    var self = this;
    self['@monsters'] = aMonsterCache;
    return self;
}
}),
smalltalk.Cache);

smalltalk.addMethod(
"_onload",
smalltalk.method({
selector: "onload",
fn: function () {
    var self = this;
    return self['@onload'];
    return self;
}
}),
smalltalk.Cache);

smalltalk.addMethod(
"_onload_",
smalltalk.method({
selector: "onload:",
fn: function (aBlock) {
    var self = this;
    self['@onload'] = aBlock;
    return self;
}
}),
smalltalk.Cache);


smalltalk.Cache.klass.iVarNames = ['cache'];
smalltalk.addMethod(
"_getSingleton",
smalltalk.method({
selector: "getSingleton",
fn: function () {
    var self = this;
    return ($receiver = self['@cache']) == nil || $receiver == undefined ? function () {return self['@cache'] = smalltalk.send(self, "_new", []);}() : $receiver;
    return self;
}
}),
smalltalk.Cache.klass);


smalltalk.addClass('CacheComponent', smalltalk.Dictionary, ['cache'], 'Easnoth-Cache');
smalltalk.addMethod(
"_cache",
smalltalk.method({
selector: "cache",
fn: function () {
    var self = this;
    return self['@cache'];
    return self;
}
}),
smalltalk.CacheComponent);

smalltalk.addMethod(
"_cache_",
smalltalk.method({
selector: "cache:",
fn: function (aCache) {
    var self = this;
    self['@cache'] = aCache;
    return self;
}
}),
smalltalk.CacheComponent);


smalltalk.addMethod(
"_newFor_",
smalltalk.method({
selector: "newFor:",
fn: function (aCache) {
    var self = this;
    return function ($rec) {smalltalk.send($rec, "_cache_", [aCache]);return smalltalk.send($rec, "_yourself", []);}(smalltalk.send(self, "_new", []));
    return self;
}
}),
smalltalk.CacheComponent.klass);


smalltalk.addClass('ImageCache', smalltalk.CacheComponent, [], 'Easnoth-Cache');
smalltalk.addMethod(
"_addImageFromKey_fromDrawedObject_",
smalltalk.method({
selector: "addImageFromKey:fromDrawedObject:",
fn: function (aKey, aDrawedObject) {
    var self = this;
    var imageNew = nil;
    imageNew = new Image;
    smalltalk.send(self, "_at_put_", [aKey, imageNew]);
    smalltalk.send(imageNew, "_at_put_", ["onload", function () {return smalltalk.send(smalltalk.send(self, "_cache", []), "_isLoaded", []);}]);
    smalltalk.send(imageNew, "_at_put_", ["src", smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("ressources/images/", "__comma", [smalltalk.send(aDrawedObject, "_folderName", [])]), "__comma", ["/"]), "__comma", [aKey]), "__comma", [".png"])]);
    return imageNew;
    return self;
}
}),
smalltalk.ImageCache);

smalltalk.addMethod(
"_putImageWithKey_inDrawedObject_",
smalltalk.method({
selector: "putImageWithKey:inDrawedObject:",
fn: function (aKey, aDrawedObject) {
    var self = this;
    smalltalk.send(aDrawedObject, "_image_", [smalltalk.send(self, "_at_ifAbsent_", [aKey, function () {return smalltalk.send(self, "_addImageFromKey_fromDrawedObject_", [aKey, aDrawedObject]);}])]);
    return self;
}
}),
smalltalk.ImageCache);



smalltalk.addClass('MonsterCache', smalltalk.CacheComponent, [], 'Easnoth-Cache');
smalltalk.addMethod(
"_addStatsFromKey_inMonster_",
smalltalk.method({
selector: "addStatsFromKey:inMonster:",
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
}
}),
smalltalk.MonsterCache);

smalltalk.addMethod(
"_putStatsWithKey_inMonster_",
smalltalk.method({
selector: "putStatsWithKey:inMonster:",
fn: function (aKey, aMonster) {
    var self = this;
    ($receiver = smalltalk.send(self, "_includesKey_", [smalltalk.send(aKey, "__comma", ["success"])])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(self, "_updateStatsFromKey_inMonster_", [aKey, aMonster]);}() : function () {return smalltalk.send(self, "_addStatsFromKey_inMonster_", [aKey, aMonster]);}() : smalltalk.send($receiver, "_ifTrue_ifFalse_", [function () {return smalltalk.send(self, "_updateStatsFromKey_inMonster_", [aKey, aMonster]);}, function () {return smalltalk.send(self, "_addStatsFromKey_inMonster_", [aKey, aMonster]);}]);
    return self;
}
}),
smalltalk.MonsterCache);

smalltalk.addMethod(
"_updateStatsFromKey_inMonster_",
smalltalk.method({
selector: "updateStatsFromKey:inMonster:",
fn: function (aKey, aMonster) {
    var self = this;
    var keySuccess = nil;
    var oldCallBack = nil;
    keySuccess = smalltalk.send(aKey, "__comma", ["success"]);
    oldCallBack = smalltalk.send(self, "_at_", [keySuccess]);
    smalltalk.send(self, "_at_put_", [keySuccess, function (statsNew) {smalltalk.send(aMonster, "_stats_", [statsNew]);smalltalk.send(oldCallBack, "_value_", [statsNew]);return smalltalk.send(smalltalk.send(self, "_cache", []), "_isLoaded", []);}]);
    ($receiver = smalltalk.send(self, "_includesKey_", [aKey])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(aMonster, "_stats_", [smalltalk.send(self, "_at_", [aKey])]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return smalltalk.send(aMonster, "_stats_", [smalltalk.send(self, "_at_", [aKey])]);}]);
    return self;
}
}),
smalltalk.MonsterCache);



