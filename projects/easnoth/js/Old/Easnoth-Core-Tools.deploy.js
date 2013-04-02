smalltalk.addPackage('Easnoth-Core-Tools', {});
smalltalk.addClass('Cache', smalltalk.Dictionary, ['onload'], 'Easnoth-Core-Tools');
smalltalk.addMethod(
"_isLoaded",
smalltalk.method({
selector: "isLoaded",
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


smalltalk.addClass('ImageCache', smalltalk.Cache, [], 'Easnoth-Core-Tools');
smalltalk.addMethod(
"_addImageFromKey_fromDrawedObject_",
smalltalk.method({
selector: "addImageFromKey:fromDrawedObject:",
fn: function (aKey, aDrawedObject) {
    var self = this;
    var imageNew = nil;
    imageNew = new Image;
    smalltalk.send(self, "_at_put_", [aKey, imageNew]);
    smalltalk.send(imageNew, "_at_put_", ["onload", function () {return smalltalk.send(self, "_isLoaded", []);}]);
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



smalltalk.addClass('MonsterCache', smalltalk.Cache, [], 'Easnoth-Core-Tools');
smalltalk.addMethod(
"_addStatsFromKey_inMonster_",
smalltalk.method({
selector: "addStatsFromKey:inMonster:",
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
    smalltalk.send(self, "_at_put_", [keySuccess, function (statsNew) {smalltalk.send(aMonster, "_stats_", [statsNew]);smalltalk.send(oldCallBack, "_value_", [statsNew]);return smalltalk.send(self, "_isLoaded", []);}]);
    ($receiver = smalltalk.send(self, "_includesKey_", [aKey])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(aMonster, "_stats_", [smalltalk.send(self, "_at_", [aKey])]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return smalltalk.send(aMonster, "_stats_", [smalltalk.send(self, "_at_", [aKey])]);}]);
    return self;
}
}),
smalltalk.MonsterCache);


