smalltalk.addPackage('Easnoth-Tools', {});
smalltalk.addClass('Cache', smalltalk.Dictionary, ['onload'], 'Easnoth-Tools');
smalltalk.addMethod(
"_isLoaded",
smalltalk.method({
selector: "isLoaded",
fn: function () {
    var self = this;
    var loaded = nil;
    loaded = true;
    smalltalk.send(self, "_collect_", [function (each) {return loaded = smalltalk.send(loaded, "_&", [smalltalk.send(each, "_at_", ["complete"])]);}]);
    ($receiver = loaded).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(smalltalk.send(self, "_onload", []), "_value", []);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return smalltalk.send(smalltalk.send(self, "_onload", []), "_value", []);}]);
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


smalltalk.addClass('ImageCache', smalltalk.Cache, [], 'Easnoth-Tools');
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



smalltalk.addClass('MonsterCache', smalltalk.Cache, [], 'Easnoth-Tools');
smalltalk.addMethod(
"_addStatsFromKey_",
smalltalk.method({
selector: "addStatsFromKey:",
fn: function (aKey) {
    var self = this;
    var statsNew = nil;
    statsNew = smalltalk.send(smalltalk.JSON || JSON, "_parse_", [smalltalk.send(smalltalk.send(smalltalk.XMLhttpRequestProxy || XMLhttpRequestProxy, "_getSingleton", []), "_loadJSON_", [smalltalk.send(smalltalk.send("ressources/json/monsters/", "__comma", [aKey]), "__comma", [".json"])])]);
    smalltalk.send(self, "_at_put_", [aKey, statsNew]);
    return statsNew;
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
    smalltalk.send(aMonster, "_stats_", [smalltalk.send(self, "_at_ifAbsent_", [aKey, function () {return smalltalk.send(self, "_addStatsFromKey_", [aKey]);}])]);
    return self;
}
}),
smalltalk.MonsterCache);



smalltalk.addClass('HexMouse', smalltalk.Object, ['xCell', 'yCell'], 'Easnoth-Tools');
smalltalk.addMethod(
"_mouseCoodToHexCoodX_y_inMap_",
smalltalk.method({
selector: "mouseCoodToHexCoodX:y:inMap:",
fn: function (x, y, aMap) {
    var self = this;
    var xHex = nil;
    var yHex = nil;
    var cosmaingridx = nil;
    var sinmaingridx = nil;
    var cosmaingridy = nil;
    var sinmaingridy = nil;
    var cosothergridx = nil;
    var sinothergridx = nil;
    var cosothergridy = nil;
    var sinothergridy = nil;
    var nb = nil;
    var nb2 = nil;
    var nb3 = nil;
    var nb4 = nil;
    var nbCheck = nil;
    var xConstante = nil;
    var yConstante = nil;
    var mapX = nil;
    var mapY = nil;
    var res = nil;
    cosmaingridx = 0.882947593;
    sinmaingridx = 0.469471563;
    cosmaingridy = smalltalk.send(0.130526192, "_negated", []);
    sinmaingridy = 0.991444861;
    cosothergridx = 0.4539905;
    sinothergridx = 0.891006524;
    cosothergridy = smalltalk.send(0.882947593, "_negated", []);
    sinothergridy = 0.469471563;
    mapX = smalltalk.send(aMap, "_mapX", []);
    mapY = smalltalk.send(aMap, "_mapY", []);

    function mod(n, mod) {
        return (mod + n % mod) % mod;
    }

    nb = Math.floor((y - cosmaingridx / sinmaingridx * x - (mapY + 0) + cosmaingridx / sinmaingridx * (mapX + 320)) / (55 * cosmaingridx));
    nb2 = Math.floor((y - cosmaingridy / sinmaingridy * x - (mapY + 480) + cosmaingridy / sinmaingridy * (mapX + 206)) / (173.2 * cosmaingridy));
    xConstante = 9 + mod(nb, 3);
    yConstante = 20 + mod(nb2, 2);
    if (nb2 % 2 == 0) {
        yConstante += mod(nb + 1, 2);
    }
    xHex = Math.floor((xConstante - nb) / 6 + (yConstante - nb2) / 2);
    yHex = Math.floor((nb - xConstante) / 4 + (yConstante - nb2) / 4);
    if (mod(nb, 6) == 1 && nb2 % 2 == 0) {
        xHex++;
        if (nb2 % 4 == 0 && mod(nb, 12) != 7) {
            yHex++;
        }
        if (mod(nb2, 4) == 2 && mod(nb, 12) == 7) {
            yHex++;
        }
    }
    if (nb % 3 == 0) {
        if (nb2 % 2 == 0 && nb % 6 == 0 ||
            mod(nb2, 2) == 1 && mod(nb, 6) == 3) {
            nb3 = Math.floor((y - cosothergridx / sinothergridx * x - (mapY + 0) + cosothergridx / sinothergridx * (mapX + 301)) / (68 * cosothergridx));
            nbCheck = 3 + 2 * yHex + xHex % 2;
            if (nb3 == nbCheck) {
                yHex--;
            }
        } else {
            nb4 = Math.floor((y - cosothergridy / sinothergridy * x - (mapY + 480) + cosothergridy / sinothergridy * (mapX + 212.5)) / (95.75 * cosothergridy));
            nbCheck = 7 - Math.floor(3 * xHex / 2) + yHex;
            if (nb4 == nbCheck) {
                if (xHex % 2 == 0) {
                    yHex--;
                }
                xHex++;
            }
        }
    }
    res = smalltalk.send(smalltalk.Array || Array, "_with_with_", [xHex, yHex]);
    return res;
    return self;
}
}),
smalltalk.HexMouse);

smalltalk.addMethod(
"_oldAlgoMouseCoodToHexCoodX_y_inMap_",
smalltalk.method({
selector: "oldAlgoMouseCoodToHexCoodX:y:inMap:",
fn: function (x, y, aMap) {
    var self = this;
    var xHex = nil;
    var yHex = nil;
    var cosmaingridx = nil;
    var sinmaingridx = nil;
    var cosmaingridy = nil;
    var sinmaingridy = nil;
    var cosothergridx = nil;
    var sinothergridx = nil;
    var cosothergridy = nil;
    var sinothergridy = nil;
    var nb = nil;
    var nb2 = nil;
    var nb3 = nil;
    var nb4 = nil;
    var nbCheck = nil;
    var xConstante = nil;
    var yConstante = nil;
    var mapX = nil;
    var mapY = nil;
    var res = nil;
    var temp1 = nil;
    var temp2 = nil;
    var k = nil;
    var m = nil;
    cosmaingridx = 0.882947593;
    sinmaingridx = 0.469471563;
    cosmaingridy = smalltalk.send(0.130526192, "_negated", []);
    sinmaingridy = 0.991444861;
    cosothergridx = 0.4539905;
    sinothergridx = 0.891006524;
    cosothergridy = smalltalk.send(0.882947593, "_negated", []);
    sinothergridy = 0.469471563;
    mapX = smalltalk.send(aMap, "_mapX", []);
    mapY = smalltalk.send(aMap, "_mapY", []);
    nb = smalltalk.send(($receiver = ($receiver = ($receiver = ($receiver = ($receiver = y).klass === smalltalk.Number ? $receiver - (($receiver = ($receiver = cosmaingridx).klass === smalltalk.Number ? $receiver / sinmaingridx : smalltalk.send($receiver, "__slash", [sinmaingridx])).klass === smalltalk.Number ? $receiver * x : smalltalk.send($receiver, "__star", [x])) : smalltalk.send($receiver, "__minus", [($receiver = ($receiver = cosmaingridx).klass === smalltalk.Number ? $receiver / sinmaingridx : smalltalk.send($receiver, "__slash", [sinmaingridx])).klass === smalltalk.Number ? $receiver * x : smalltalk.send($receiver, "__star", [x])])).klass === smalltalk.Number ? $receiver - mapY : smalltalk.send($receiver, "__minus", [mapY])).klass === smalltalk.Number ? $receiver + 0 : smalltalk.send($receiver, "__plus", [0])).klass === smalltalk.Number ? $receiver + (($receiver = ($receiver = cosmaingridx).klass === smalltalk.Number ? $receiver / sinmaingridx : smalltalk.send($receiver, "__slash", [sinmaingridx])).klass === smalltalk.Number ? $receiver * (($receiver = mapX).klass === smalltalk.Number ? $receiver + 320 : smalltalk.send($receiver, "__plus", [320])) : smalltalk.send($receiver, "__star", [($receiver = mapX).klass === smalltalk.Number ? $receiver + 320 : smalltalk.send($receiver, "__plus", [320])])) : smalltalk.send($receiver, "__plus", [($receiver = ($receiver = cosmaingridx).klass === smalltalk.Number ? $receiver / sinmaingridx : smalltalk.send($receiver, "__slash", [sinmaingridx])).klass === smalltalk.Number ? $receiver * (($receiver = mapX).klass === smalltalk.Number ? $receiver + 320 : smalltalk.send($receiver, "__plus", [320])) : smalltalk.send($receiver, "__star", [($receiver = mapX).klass === smalltalk.Number ? $receiver + 320 : smalltalk.send($receiver, "__plus", [320])])])).klass === smalltalk.Number ? $receiver / 55 * cosmaingridx : smalltalk.send($receiver, "__slash", [55 * cosmaingridx]), "_floor", []);
    nb2 = smalltalk.send(($receiver = ($receiver = ($receiver = ($receiver = ($receiver = y).klass === smalltalk.Number ? $receiver - (($receiver = ($receiver = cosmaingridy).klass === smalltalk.Number ? $receiver / sinmaingridy : smalltalk.send($receiver, "__slash", [sinmaingridy])).klass === smalltalk.Number ? $receiver * x : smalltalk.send($receiver, "__star", [x])) : smalltalk.send($receiver, "__minus", [($receiver = ($receiver = cosmaingridy).klass === smalltalk.Number ? $receiver / sinmaingridy : smalltalk.send($receiver, "__slash", [sinmaingridy])).klass === smalltalk.Number ? $receiver * x : smalltalk.send($receiver, "__star", [x])])).klass === smalltalk.Number ? $receiver - mapY : smalltalk.send($receiver, "__minus", [mapY])).klass === smalltalk.Number ? $receiver + 480 : smalltalk.send($receiver, "__plus", [480])).klass === smalltalk.Number ? $receiver + (($receiver = ($receiver = cosmaingridy).klass === smalltalk.Number ? $receiver / sinmaingridy : smalltalk.send($receiver, "__slash", [sinmaingridy])).klass === smalltalk.Number ? $receiver * (($receiver = mapX).klass === smalltalk.Number ? $receiver + 206 : smalltalk.send($receiver, "__plus", [206])) : smalltalk.send($receiver, "__star", [($receiver = mapX).klass === smalltalk.Number ? $receiver + 206 : smalltalk.send($receiver, "__plus", [206])])) : smalltalk.send($receiver, "__plus", [($receiver = ($receiver = cosmaingridy).klass === smalltalk.Number ? $receiver / sinmaingridy : smalltalk.send($receiver, "__slash", [sinmaingridy])).klass === smalltalk.Number ? $receiver * (($receiver = mapX).klass === smalltalk.Number ? $receiver + 206 : smalltalk.send($receiver, "__plus", [206])) : smalltalk.send($receiver, "__star", [($receiver = mapX).klass === smalltalk.Number ? $receiver + 206 : smalltalk.send($receiver, "__plus", [206])])])).klass === smalltalk.Number ? $receiver / 173.2 * cosmaingridy : smalltalk.send($receiver, "__slash", [173.2 * cosmaingridy]), "_floor", []);
    xConstante = 9 + smalltalk.send(nb, "_mod_", [3]);
    yConstante = 20 + smalltalk.send(nb2, "_mod_", [2]);
    ($receiver = smalltalk.send(smalltalk.send(nb2, "_\\\\", [2]), "__eq", [0])).klass === smalltalk.Boolean ? $receiver ? function () {return yConstante = ($receiver = yConstante).klass === smalltalk.Number ? $receiver + smalltalk.send(($receiver = nb).klass === smalltalk.Number ? $receiver + 1 : smalltalk.send($receiver, "__plus", [1]), "_mod_", [2]) : smalltalk.send($receiver, "__plus", [smalltalk.send(($receiver = nb).klass === smalltalk.Number ? $receiver + 1 : smalltalk.send($receiver, "__plus", [1]), "_mod_", [2])]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return yConstante = ($receiver = yConstante).klass === smalltalk.Number ? $receiver + smalltalk.send(($receiver = nb).klass === smalltalk.Number ? $receiver + 1 : smalltalk.send($receiver, "__plus", [1]), "_mod_", [2]) : smalltalk.send($receiver, "__plus", [smalltalk.send(($receiver = nb).klass === smalltalk.Number ? $receiver + 1 : smalltalk.send($receiver, "__plus", [1]), "_mod_", [2])]);}]);
    xHex = smalltalk.send(($receiver = ($receiver = ($receiver = xConstante).klass === smalltalk.Number ? $receiver - nb : smalltalk.send($receiver, "__minus", [nb])).klass === smalltalk.Number ? $receiver / 6 : smalltalk.send($receiver, "__slash", [6])).klass === smalltalk.Number ? $receiver + (($receiver = ($receiver = yConstante).klass === smalltalk.Number ? $receiver - nb2 : smalltalk.send($receiver, "__minus", [nb2])).klass === smalltalk.Number ? $receiver / 2 : smalltalk.send($receiver, "__slash", [2])) : smalltalk.send($receiver, "__plus", [($receiver = ($receiver = yConstante).klass === smalltalk.Number ? $receiver - nb2 : smalltalk.send($receiver, "__minus", [nb2])).klass === smalltalk.Number ? $receiver / 2 : smalltalk.send($receiver, "__slash", [2])]), "_floor", []);
    yHex = smalltalk.send(($receiver = ($receiver = ($receiver = nb).klass === smalltalk.Number ? $receiver - xConstante : smalltalk.send($receiver, "__minus", [xConstante])).klass === smalltalk.Number ? $receiver / 4 : smalltalk.send($receiver, "__slash", [4])).klass === smalltalk.Number ? $receiver + (($receiver = ($receiver = yConstante).klass === smalltalk.Number ? $receiver - nb2 : smalltalk.send($receiver, "__minus", [nb2])).klass === smalltalk.Number ? $receiver / 4 : smalltalk.send($receiver, "__slash", [4])) : smalltalk.send($receiver, "__plus", [($receiver = ($receiver = yConstante).klass === smalltalk.Number ? $receiver - nb2 : smalltalk.send($receiver, "__minus", [nb2])).klass === smalltalk.Number ? $receiver / 4 : smalltalk.send($receiver, "__slash", [4])]), "_floor", []);
    ($receiver = smalltalk.send(smalltalk.send(smalltalk.send(nb, "_mod_", [6]), "__eq", [1]), "_&", [smalltalk.send(smalltalk.send(nb2, "_\\\\", [2]), "__eq", [0])])).klass === smalltalk.Boolean ? $receiver ? function () {xHex = ($receiver = xHex).klass === smalltalk.Number ? $receiver + 1 : smalltalk.send($receiver, "__plus", [1]);($receiver = smalltalk.send(smalltalk.send(smalltalk.send(nb2, "_\\\\", [4]), "__eq", [0]), "_&", [smalltalk.send(smalltalk.send(smalltalk.send(nb, "_mod_", [12]), "__eq", [7]), "_not", [])])).klass === smalltalk.Boolean ? $receiver ? function () {return yHex = ($receiver = yHex).klass === smalltalk.Number ? $receiver + 1 : smalltalk.send($receiver, "__plus", [1]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return yHex = ($receiver = yHex).klass === smalltalk.Number ? $receiver + 1 : smalltalk.send($receiver, "__plus", [1]);}]);return ($receiver = smalltalk.send(smalltalk.send(smalltalk.send(nb2, "_mod_", [4]), "__eq", [2]), "_&", [smalltalk.send(smalltalk.send(nb, "_mod_", [12]), "__eq", [7])])).klass === smalltalk.Boolean ? $receiver ? function () {return yHex = ($receiver = yHex).klass === smalltalk.Number ? $receiver + 1 : smalltalk.send($receiver, "__plus", [1]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return yHex = ($receiver = yHex).klass === smalltalk.Number ? $receiver + 1 : smalltalk.send($receiver, "__plus", [1]);}]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {xHex = ($receiver = xHex).klass === smalltalk.Number ? $receiver + 1 : smalltalk.send($receiver, "__plus", [1]);($receiver = smalltalk.send(smalltalk.send(smalltalk.send(nb2, "_\\\\", [4]), "__eq", [0]), "_&", [smalltalk.send(smalltalk.send(smalltalk.send(nb, "_mod_", [12]), "__eq", [7]), "_not", [])])).klass === smalltalk.Boolean ? $receiver ? function () {return yHex = ($receiver = yHex).klass === smalltalk.Number ? $receiver + 1 : smalltalk.send($receiver, "__plus", [1]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return yHex = ($receiver = yHex).klass === smalltalk.Number ? $receiver + 1 : smalltalk.send($receiver, "__plus", [1]);}]);return ($receiver = smalltalk.send(smalltalk.send(smalltalk.send(nb2, "_mod_", [4]), "__eq", [2]), "_&", [smalltalk.send(smalltalk.send(nb, "_mod_", [12]), "__eq", [7])])).klass === smalltalk.Boolean ? $receiver ? function () {return yHex = ($receiver = yHex).klass === smalltalk.Number ? $receiver + 1 : smalltalk.send($receiver, "__plus", [1]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return yHex = ($receiver = yHex).klass === smalltalk.Number ? $receiver + 1 : smalltalk.send($receiver, "__plus", [1]);}]);}]);
    ($receiver = smalltalk.send(smalltalk.send(nb, "_\\\\", [3]), "__eq", [0])).klass === smalltalk.Boolean ? $receiver ? function () {return ($receiver = smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(nb2, "_\\\\", [2]), "__eq", [0]), "_&", [smalltalk.send(smalltalk.send(nb, "_\\\\", [6]), "__eq", [0])]), "_|", [smalltalk.send(smalltalk.send(smalltalk.send(nb2, "_mod_", [2]), "__eq", [1]), "_&", [smalltalk.send(smalltalk.send(nb, "_mod_", [6]), "__eq", [3])])])).klass === smalltalk.Boolean ? $receiver ? function () {nb3 = smalltalk.send(($receiver = ($receiver = ($receiver = ($receiver = ($receiver = ($receiver = y).klass === smalltalk.Number ? $receiver - (($receiver = cosothergridx).klass === smalltalk.Number ? $receiver / sinothergridx : smalltalk.send($receiver, "__slash", [sinothergridx])) : smalltalk.send($receiver, "__minus", [($receiver = cosothergridx).klass === smalltalk.Number ? $receiver / sinothergridx : smalltalk.send($receiver, "__slash", [sinothergridx])])).klass === smalltalk.Number ? $receiver * x : smalltalk.send($receiver, "__star", [x])).klass === smalltalk.Number ? $receiver - (($receiver = mapY).klass === smalltalk.Number ? $receiver + 0 : smalltalk.send($receiver, "__plus", [0])) : smalltalk.send($receiver, "__minus", [($receiver = mapY).klass === smalltalk.Number ? $receiver + 0 : smalltalk.send($receiver, "__plus", [0])])).klass === smalltalk.Number ? $receiver + (($receiver = cosothergridx).klass === smalltalk.Number ? $receiver / sinothergridx : smalltalk.send($receiver, "__slash", [sinothergridx])) : smalltalk.send($receiver, "__plus", [($receiver = cosothergridx).klass === smalltalk.Number ? $receiver / sinothergridx : smalltalk.send($receiver, "__slash", [sinothergridx])])).klass === smalltalk.Number ? $receiver * (($receiver = mapX).klass === smalltalk.Number ? $receiver + 301 : smalltalk.send($receiver, "__plus", [301])) : smalltalk.send($receiver, "__star", [($receiver = mapX).klass === smalltalk.Number ? $receiver + 301 : smalltalk.send($receiver, "__plus", [301])])).klass === smalltalk.Number ? $receiver / 68 * cosothergridx : smalltalk.send($receiver, "__slash", [68 * cosothergridx]), "_floor", []);nbCheck = ($receiver = 3 + 2 * yHex).klass === smalltalk.Number ? $receiver + smalltalk.send(xHex, "_\\\\", [2]) : smalltalk.send($receiver, "__plus", [smalltalk.send(xHex, "_\\\\", [2])]);return ($receiver = smalltalk.send(nb3, "__eq", [nbCheck])).klass === smalltalk.Boolean ? $receiver ? function () {return yHex = ($receiver = yHex).klass === smalltalk.Number ? $receiver - 1 : smalltalk.send($receiver, "__minus", [1]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return yHex = ($receiver = yHex).klass === smalltalk.Number ? $receiver - 1 : smalltalk.send($receiver, "__minus", [1]);}]);}() : function () {nb4 = smalltalk.send(($receiver = ($receiver = ($receiver = ($receiver = ($receiver = ($receiver = y).klass === smalltalk.Number ? $receiver - (($receiver = cosothergridy).klass === smalltalk.Number ? $receiver / sinothergridy : smalltalk.send($receiver, "__slash", [sinothergridy])) : smalltalk.send($receiver, "__minus", [($receiver = cosothergridy).klass === smalltalk.Number ? $receiver / sinothergridy : smalltalk.send($receiver, "__slash", [sinothergridy])])).klass === smalltalk.Number ? $receiver * x : smalltalk.send($receiver, "__star", [x])).klass === smalltalk.Number ? $receiver - (($receiver = mapY).klass === smalltalk.Number ? $receiver + 480 : smalltalk.send($receiver, "__plus", [480])) : smalltalk.send($receiver, "__minus", [($receiver = mapY).klass === smalltalk.Number ? $receiver + 480 : smalltalk.send($receiver, "__plus", [480])])).klass === smalltalk.Number ? $receiver + (($receiver = cosothergridy).klass === smalltalk.Number ? $receiver / sinothergridy : smalltalk.send($receiver, "__slash", [sinothergridy])) : smalltalk.send($receiver, "__plus", [($receiver = cosothergridy).klass === smalltalk.Number ? $receiver / sinothergridy : smalltalk.send($receiver, "__slash", [sinothergridy])])).klass === smalltalk.Number ? $receiver * (($receiver = mapX).klass === smalltalk.Number ? $receiver + 212.5 : smalltalk.send($receiver, "__plus", [212.5])) : smalltalk.send($receiver, "__star", [($receiver = mapX).klass === smalltalk.Number ? $receiver + 212.5 : smalltalk.send($receiver, "__plus", [212.5])])).klass === smalltalk.Number ? $receiver / 95.75 * cosothergridy : smalltalk.send($receiver, "__slash", [95.75 * cosothergridy]), "_floor", []);nbCheck = ($receiver = 7 - smalltalk.send(($receiver = 3 * xHex).klass === smalltalk.Number ? $receiver / 2 : smalltalk.send($receiver, "__slash", [2]), "_floor", [])).klass === smalltalk.Number ? $receiver + yHex : smalltalk.send($receiver, "__plus", [yHex]);return ($receiver = smalltalk.send(nb4, "__eq", [nbCheck])).klass === smalltalk.Boolean ? $receiver ? function () {($receiver = smalltalk.send(smalltalk.send(xHex, "_\\\\", [2]), "__eq", [0])).klass === smalltalk.Boolean ? $receiver ? function () {return yHex = ($receiver = yHex).klass === smalltalk.Number ? $receiver - 1 : smalltalk.send($receiver, "__minus", [1]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return yHex = ($receiver = yHex).klass === smalltalk.Number ? $receiver - 1 : smalltalk.send($receiver, "__minus", [1]);}]);return xHex = ($receiver = xHex).klass === smalltalk.Number ? $receiver + 1 : smalltalk.send($receiver, "__plus", [1]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {($receiver = smalltalk.send(smalltalk.send(xHex, "_\\\\", [2]), "__eq", [0])).klass === smalltalk.Boolean ? $receiver ? function () {return yHex = ($receiver = yHex).klass === smalltalk.Number ? $receiver - 1 : smalltalk.send($receiver, "__minus", [1]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return yHex = ($receiver = yHex).klass === smalltalk.Number ? $receiver - 1 : smalltalk.send($receiver, "__minus", [1]);}]);return xHex = ($receiver = xHex).klass === smalltalk.Number ? $receiver + 1 : smalltalk.send($receiver, "__plus", [1]);}]);}() : smalltalk.send($receiver, "_ifTrue_ifFalse_", [function () {nb3 = smalltalk.send(($receiver = ($receiver = ($receiver = ($receiver = ($receiver = ($receiver = y).klass === smalltalk.Number ? $receiver - (($receiver = cosothergridx).klass === smalltalk.Number ? $receiver / sinothergridx : smalltalk.send($receiver, "__slash", [sinothergridx])) : smalltalk.send($receiver, "__minus", [($receiver = cosothergridx).klass === smalltalk.Number ? $receiver / sinothergridx : smalltalk.send($receiver, "__slash", [sinothergridx])])).klass === smalltalk.Number ? $receiver * x : smalltalk.send($receiver, "__star", [x])).klass === smalltalk.Number ? $receiver - (($receiver = mapY).klass === smalltalk.Number ? $receiver + 0 : smalltalk.send($receiver, "__plus", [0])) : smalltalk.send($receiver, "__minus", [($receiver = mapY).klass === smalltalk.Number ? $receiver + 0 : smalltalk.send($receiver, "__plus", [0])])).klass === smalltalk.Number ? $receiver + (($receiver = cosothergridx).klass === smalltalk.Number ? $receiver / sinothergridx : smalltalk.send($receiver, "__slash", [sinothergridx])) : smalltalk.send($receiver, "__plus", [($receiver = cosothergridx).klass === smalltalk.Number ? $receiver / sinothergridx : smalltalk.send($receiver, "__slash", [sinothergridx])])).klass === smalltalk.Number ? $receiver * (($receiver = mapX).klass === smalltalk.Number ? $receiver + 301 : smalltalk.send($receiver, "__plus", [301])) : smalltalk.send($receiver, "__star", [($receiver = mapX).klass === smalltalk.Number ? $receiver + 301 : smalltalk.send($receiver, "__plus", [301])])).klass === smalltalk.Number ? $receiver / 68 * cosothergridx : smalltalk.send($receiver, "__slash", [68 * cosothergridx]), "_floor", []);nbCheck = ($receiver = 3 + 2 * yHex).klass === smalltalk.Number ? $receiver + smalltalk.send(xHex, "_\\\\", [2]) : smalltalk.send($receiver, "__plus", [smalltalk.send(xHex, "_\\\\", [2])]);return ($receiver = smalltalk.send(nb3, "__eq", [nbCheck])).klass === smalltalk.Boolean ? $receiver ? function () {return yHex = ($receiver = yHex).klass === smalltalk.Number ? $receiver - 1 : smalltalk.send($receiver, "__minus", [1]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return yHex = ($receiver = yHex).klass === smalltalk.Number ? $receiver - 1 : smalltalk.send($receiver, "__minus", [1]);}]);}, function () {nb4 = smalltalk.send(($receiver = ($receiver = ($receiver = ($receiver = ($receiver = ($receiver = y).klass === smalltalk.Number ? $receiver - (($receiver = cosothergridy).klass === smalltalk.Number ? $receiver / sinothergridy : smalltalk.send($receiver, "__slash", [sinothergridy])) : smalltalk.send($receiver, "__minus", [($receiver = cosothergridy).klass === smalltalk.Number ? $receiver / sinothergridy : smalltalk.send($receiver, "__slash", [sinothergridy])])).klass === smalltalk.Number ? $receiver * x : smalltalk.send($receiver, "__star", [x])).klass === smalltalk.Number ? $receiver - (($receiver = mapY).klass === smalltalk.Number ? $receiver + 480 : smalltalk.send($receiver, "__plus", [480])) : smalltalk.send($receiver, "__minus", [($receiver = mapY).klass === smalltalk.Number ? $receiver + 480 : smalltalk.send($receiver, "__plus", [480])])).klass === smalltalk.Number ? $receiver + (($receiver = cosothergridy).klass === smalltalk.Number ? $receiver / sinothergridy : smalltalk.send($receiver, "__slash", [sinothergridy])) : smalltalk.send($receiver, "__plus", [($receiver = cosothergridy).klass === smalltalk.Number ? $receiver / sinothergridy : smalltalk.send($receiver, "__slash", [sinothergridy])])).klass === smalltalk.Number ? $receiver * (($receiver = mapX).klass === smalltalk.Number ? $receiver + 212.5 : smalltalk.send($receiver, "__plus", [212.5])) : smalltalk.send($receiver, "__star", [($receiver = mapX).klass === smalltalk.Number ? $receiver + 212.5 : smalltalk.send($receiver, "__plus", [212.5])])).klass === smalltalk.Number ? $receiver / 95.75 * cosothergridy : smalltalk.send($receiver, "__slash", [95.75 * cosothergridy]), "_floor", []);nbCheck = ($receiver = 7 - smalltalk.send(($receiver = 3 * xHex).klass === smalltalk.Number ? $receiver / 2 : smalltalk.send($receiver, "__slash", [2]), "_floor", [])).klass === smalltalk.Number ? $receiver + yHex : smalltalk.send($receiver, "__plus", [yHex]);return ($receiver = smalltalk.send(nb4, "__eq", [nbCheck])).klass === smalltalk.Boolean ? $receiver ? function () {($receiver = smalltalk.send(smalltalk.send(xHex, "_\\\\", [2]), "__eq", [0])).klass === smalltalk.Boolean ? $receiver ? function () {return yHex = ($receiver = yHex).klass === smalltalk.Number ? $receiver - 1 : smalltalk.send($receiver, "__minus", [1]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return yHex = ($receiver = yHex).klass === smalltalk.Number ? $receiver - 1 : smalltalk.send($receiver, "__minus", [1]);}]);return xHex = ($receiver = xHex).klass === smalltalk.Number ? $receiver + 1 : smalltalk.send($receiver, "__plus", [1]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {($receiver = smalltalk.send(smalltalk.send(xHex, "_\\\\", [2]), "__eq", [0])).klass === smalltalk.Boolean ? $receiver ? function () {return yHex = ($receiver = yHex).klass === smalltalk.Number ? $receiver - 1 : smalltalk.send($receiver, "__minus", [1]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return yHex = ($receiver = yHex).klass === smalltalk.Number ? $receiver - 1 : smalltalk.send($receiver, "__minus", [1]);}]);return xHex = ($receiver = xHex).klass === smalltalk.Number ? $receiver + 1 : smalltalk.send($receiver, "__plus", [1]);}]);}]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return ($receiver = smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(nb2, "_\\\\", [2]), "__eq", [0]), "_&", [smalltalk.send(smalltalk.send(nb, "_\\\\", [6]), "__eq", [0])]), "_|", [smalltalk.send(smalltalk.send(smalltalk.send(nb2, "_mod_", [2]), "__eq", [1]), "_&", [smalltalk.send(smalltalk.send(nb, "_mod_", [6]), "__eq", [3])])])).klass === smalltalk.Boolean ? $receiver ? function () {nb3 = smalltalk.send(($receiver = ($receiver = ($receiver = ($receiver = ($receiver = ($receiver = y).klass === smalltalk.Number ? $receiver - (($receiver = cosothergridx).klass === smalltalk.Number ? $receiver / sinothergridx : smalltalk.send($receiver, "__slash", [sinothergridx])) : smalltalk.send($receiver, "__minus", [($receiver = cosothergridx).klass === smalltalk.Number ? $receiver / sinothergridx : smalltalk.send($receiver, "__slash", [sinothergridx])])).klass === smalltalk.Number ? $receiver * x : smalltalk.send($receiver, "__star", [x])).klass === smalltalk.Number ? $receiver - (($receiver = mapY).klass === smalltalk.Number ? $receiver + 0 : smalltalk.send($receiver, "__plus", [0])) : smalltalk.send($receiver, "__minus", [($receiver = mapY).klass === smalltalk.Number ? $receiver + 0 : smalltalk.send($receiver, "__plus", [0])])).klass === smalltalk.Number ? $receiver + (($receiver = cosothergridx).klass === smalltalk.Number ? $receiver / sinothergridx : smalltalk.send($receiver, "__slash", [sinothergridx])) : smalltalk.send($receiver, "__plus", [($receiver = cosothergridx).klass === smalltalk.Number ? $receiver / sinothergridx : smalltalk.send($receiver, "__slash", [sinothergridx])])).klass === smalltalk.Number ? $receiver * (($receiver = mapX).klass === smalltalk.Number ? $receiver + 301 : smalltalk.send($receiver, "__plus", [301])) : smalltalk.send($receiver, "__star", [($receiver = mapX).klass === smalltalk.Number ? $receiver + 301 : smalltalk.send($receiver, "__plus", [301])])).klass === smalltalk.Number ? $receiver / 68 * cosothergridx : smalltalk.send($receiver, "__slash", [68 * cosothergridx]), "_floor", []);nbCheck = ($receiver = 3 + 2 * yHex).klass === smalltalk.Number ? $receiver + smalltalk.send(xHex, "_\\\\", [2]) : smalltalk.send($receiver, "__plus", [smalltalk.send(xHex, "_\\\\", [2])]);return ($receiver = smalltalk.send(nb3, "__eq", [nbCheck])).klass === smalltalk.Boolean ? $receiver ? function () {return yHex = ($receiver = yHex).klass === smalltalk.Number ? $receiver - 1 : smalltalk.send($receiver, "__minus", [1]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return yHex = ($receiver = yHex).klass === smalltalk.Number ? $receiver - 1 : smalltalk.send($receiver, "__minus", [1]);}]);}() : function () {nb4 = smalltalk.send(($receiver = ($receiver = ($receiver = ($receiver = ($receiver = ($receiver = y).klass === smalltalk.Number ? $receiver - (($receiver = cosothergridy).klass === smalltalk.Number ? $receiver / sinothergridy : smalltalk.send($receiver, "__slash", [sinothergridy])) : smalltalk.send($receiver, "__minus", [($receiver = cosothergridy).klass === smalltalk.Number ? $receiver / sinothergridy : smalltalk.send($receiver, "__slash", [sinothergridy])])).klass === smalltalk.Number ? $receiver * x : smalltalk.send($receiver, "__star", [x])).klass === smalltalk.Number ? $receiver - (($receiver = mapY).klass === smalltalk.Number ? $receiver + 480 : smalltalk.send($receiver, "__plus", [480])) : smalltalk.send($receiver, "__minus", [($receiver = mapY).klass === smalltalk.Number ? $receiver + 480 : smalltalk.send($receiver, "__plus", [480])])).klass === smalltalk.Number ? $receiver + (($receiver = cosothergridy).klass === smalltalk.Number ? $receiver / sinothergridy : smalltalk.send($receiver, "__slash", [sinothergridy])) : smalltalk.send($receiver, "__plus", [($receiver = cosothergridy).klass === smalltalk.Number ? $receiver / sinothergridy : smalltalk.send($receiver, "__slash", [sinothergridy])])).klass === smalltalk.Number ? $receiver * (($receiver = mapX).klass === smalltalk.Number ? $receiver + 212.5 : smalltalk.send($receiver, "__plus", [212.5])) : smalltalk.send($receiver, "__star", [($receiver = mapX).klass === smalltalk.Number ? $receiver + 212.5 : smalltalk.send($receiver, "__plus", [212.5])])).klass === smalltalk.Number ? $receiver / 95.75 * cosothergridy : smalltalk.send($receiver, "__slash", [95.75 * cosothergridy]), "_floor", []);nbCheck = ($receiver = 7 - smalltalk.send(($receiver = 3 * xHex).klass === smalltalk.Number ? $receiver / 2 : smalltalk.send($receiver, "__slash", [2]), "_floor", [])).klass === smalltalk.Number ? $receiver + yHex : smalltalk.send($receiver, "__plus", [yHex]);return ($receiver = smalltalk.send(nb4, "__eq", [nbCheck])).klass === smalltalk.Boolean ? $receiver ? function () {($receiver = smalltalk.send(smalltalk.send(xHex, "_\\\\", [2]), "__eq", [0])).klass === smalltalk.Boolean ? $receiver ? function () {return yHex = ($receiver = yHex).klass === smalltalk.Number ? $receiver - 1 : smalltalk.send($receiver, "__minus", [1]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return yHex = ($receiver = yHex).klass === smalltalk.Number ? $receiver - 1 : smalltalk.send($receiver, "__minus", [1]);}]);return xHex = ($receiver = xHex).klass === smalltalk.Number ? $receiver + 1 : smalltalk.send($receiver, "__plus", [1]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {($receiver = smalltalk.send(smalltalk.send(xHex, "_\\\\", [2]), "__eq", [0])).klass === smalltalk.Boolean ? $receiver ? function () {return yHex = ($receiver = yHex).klass === smalltalk.Number ? $receiver - 1 : smalltalk.send($receiver, "__minus", [1]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return yHex = ($receiver = yHex).klass === smalltalk.Number ? $receiver - 1 : smalltalk.send($receiver, "__minus", [1]);}]);return xHex = ($receiver = xHex).klass === smalltalk.Number ? $receiver + 1 : smalltalk.send($receiver, "__plus", [1]);}]);}() : smalltalk.send($receiver, "_ifTrue_ifFalse_", [function () {nb3 = smalltalk.send(($receiver = ($receiver = ($receiver = ($receiver = ($receiver = ($receiver = y).klass === smalltalk.Number ? $receiver - (($receiver = cosothergridx).klass === smalltalk.Number ? $receiver / sinothergridx : smalltalk.send($receiver, "__slash", [sinothergridx])) : smalltalk.send($receiver, "__minus", [($receiver = cosothergridx).klass === smalltalk.Number ? $receiver / sinothergridx : smalltalk.send($receiver, "__slash", [sinothergridx])])).klass === smalltalk.Number ? $receiver * x : smalltalk.send($receiver, "__star", [x])).klass === smalltalk.Number ? $receiver - (($receiver = mapY).klass === smalltalk.Number ? $receiver + 0 : smalltalk.send($receiver, "__plus", [0])) : smalltalk.send($receiver, "__minus", [($receiver = mapY).klass === smalltalk.Number ? $receiver + 0 : smalltalk.send($receiver, "__plus", [0])])).klass === smalltalk.Number ? $receiver + (($receiver = cosothergridx).klass === smalltalk.Number ? $receiver / sinothergridx : smalltalk.send($receiver, "__slash", [sinothergridx])) : smalltalk.send($receiver, "__plus", [($receiver = cosothergridx).klass === smalltalk.Number ? $receiver / sinothergridx : smalltalk.send($receiver, "__slash", [sinothergridx])])).klass === smalltalk.Number ? $receiver * (($receiver = mapX).klass === smalltalk.Number ? $receiver + 301 : smalltalk.send($receiver, "__plus", [301])) : smalltalk.send($receiver, "__star", [($receiver = mapX).klass === smalltalk.Number ? $receiver + 301 : smalltalk.send($receiver, "__plus", [301])])).klass === smalltalk.Number ? $receiver / 68 * cosothergridx : smalltalk.send($receiver, "__slash", [68 * cosothergridx]), "_floor", []);nbCheck = ($receiver = 3 + 2 * yHex).klass === smalltalk.Number ? $receiver + smalltalk.send(xHex, "_\\\\", [2]) : smalltalk.send($receiver, "__plus", [smalltalk.send(xHex, "_\\\\", [2])]);return ($receiver = smalltalk.send(nb3, "__eq", [nbCheck])).klass === smalltalk.Boolean ? $receiver ? function () {return yHex = ($receiver = yHex).klass === smalltalk.Number ? $receiver - 1 : smalltalk.send($receiver, "__minus", [1]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return yHex = ($receiver = yHex).klass === smalltalk.Number ? $receiver - 1 : smalltalk.send($receiver, "__minus", [1]);}]);}, function () {nb4 = smalltalk.send(($receiver = ($receiver = ($receiver = ($receiver = ($receiver = ($receiver = y).klass === smalltalk.Number ? $receiver - (($receiver = cosothergridy).klass === smalltalk.Number ? $receiver / sinothergridy : smalltalk.send($receiver, "__slash", [sinothergridy])) : smalltalk.send($receiver, "__minus", [($receiver = cosothergridy).klass === smalltalk.Number ? $receiver / sinothergridy : smalltalk.send($receiver, "__slash", [sinothergridy])])).klass === smalltalk.Number ? $receiver * x : smalltalk.send($receiver, "__star", [x])).klass === smalltalk.Number ? $receiver - (($receiver = mapY).klass === smalltalk.Number ? $receiver + 480 : smalltalk.send($receiver, "__plus", [480])) : smalltalk.send($receiver, "__minus", [($receiver = mapY).klass === smalltalk.Number ? $receiver + 480 : smalltalk.send($receiver, "__plus", [480])])).klass === smalltalk.Number ? $receiver + (($receiver = cosothergridy).klass === smalltalk.Number ? $receiver / sinothergridy : smalltalk.send($receiver, "__slash", [sinothergridy])) : smalltalk.send($receiver, "__plus", [($receiver = cosothergridy).klass === smalltalk.Number ? $receiver / sinothergridy : smalltalk.send($receiver, "__slash", [sinothergridy])])).klass === smalltalk.Number ? $receiver * (($receiver = mapX).klass === smalltalk.Number ? $receiver + 212.5 : smalltalk.send($receiver, "__plus", [212.5])) : smalltalk.send($receiver, "__star", [($receiver = mapX).klass === smalltalk.Number ? $receiver + 212.5 : smalltalk.send($receiver, "__plus", [212.5])])).klass === smalltalk.Number ? $receiver / 95.75 * cosothergridy : smalltalk.send($receiver, "__slash", [95.75 * cosothergridy]), "_floor", []);nbCheck = ($receiver = 7 - smalltalk.send(($receiver = 3 * xHex).klass === smalltalk.Number ? $receiver / 2 : smalltalk.send($receiver, "__slash", [2]), "_floor", [])).klass === smalltalk.Number ? $receiver + yHex : smalltalk.send($receiver, "__plus", [yHex]);return ($receiver = smalltalk.send(nb4, "__eq", [nbCheck])).klass === smalltalk.Boolean ? $receiver ? function () {($receiver = smalltalk.send(smalltalk.send(xHex, "_\\\\", [2]), "__eq", [0])).klass === smalltalk.Boolean ? $receiver ? function () {return yHex = ($receiver = yHex).klass === smalltalk.Number ? $receiver - 1 : smalltalk.send($receiver, "__minus", [1]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return yHex = ($receiver = yHex).klass === smalltalk.Number ? $receiver - 1 : smalltalk.send($receiver, "__minus", [1]);}]);return xHex = ($receiver = xHex).klass === smalltalk.Number ? $receiver + 1 : smalltalk.send($receiver, "__plus", [1]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {($receiver = smalltalk.send(smalltalk.send(xHex, "_\\\\", [2]), "__eq", [0])).klass === smalltalk.Boolean ? $receiver ? function () {return yHex = ($receiver = yHex).klass === smalltalk.Number ? $receiver - 1 : smalltalk.send($receiver, "__minus", [1]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return yHex = ($receiver = yHex).klass === smalltalk.Number ? $receiver - 1 : smalltalk.send($receiver, "__minus", [1]);}]);return xHex = ($receiver = xHex).klass === smalltalk.Number ? $receiver + 1 : smalltalk.send($receiver, "__plus", [1]);}]);}]);}]);
    res = smalltalk.send(smalltalk.Array || Array, "_with_with_", [xHex, yHex]);
    return res;
    return self;
}
}),
smalltalk.HexMouse);

smalltalk.addMethod(
"_updateCoods_inMap_",
smalltalk.method({
selector: "updateCoods:inMap:",
fn: function (anEvent, aMap) {
    var self = this;
    var x = nil;
    var y = nil;
    var cood = nil;
    var canvas = nil;
    canvas = smalltalk.send(smalltalk.send(aMap, "_canvas", []), "_element", []);
    x = ($receiver = smalltalk.send(anEvent, "_pageX", [])).klass === smalltalk.Number ? $receiver - smalltalk.send(canvas, "_offsetLeft", []) : smalltalk.send($receiver, "__minus", [smalltalk.send(canvas, "_offsetLeft", [])]);
    y = ($receiver = smalltalk.send(anEvent, "_pageY", [])).klass === smalltalk.Number ? $receiver - smalltalk.send(canvas, "_offsetTop", []) : smalltalk.send($receiver, "__minus", [smalltalk.send(canvas, "_offsetTop", [])]);
    cood = smalltalk.send(self, "_mouseCoodToHexCoodX_y_inMap_", [x, y, aMap]);
    smalltalk.send(self, "_xCell_", [smalltalk.send(cood, "_at_", [1])]);
    smalltalk.send(self, "_yCell_", [smalltalk.send(cood, "_at_", [2])]);
    return self;
}
}),
smalltalk.HexMouse);

smalltalk.addMethod(
"_xCell",
smalltalk.method({
selector: "xCell",
fn: function () {
    var self = this;
    return self['@xCell'];
    return self;
}
}),
smalltalk.HexMouse);

smalltalk.addMethod(
"_xCell_",
smalltalk.method({
selector: "xCell:",
fn: function (anInt) {
    var self = this;
    self['@xCell'] = anInt;
    return self;
}
}),
smalltalk.HexMouse);

smalltalk.addMethod(
"_yCell",
smalltalk.method({
selector: "yCell",
fn: function () {
    var self = this;
    return self['@yCell'];
    return self;
}
}),
smalltalk.HexMouse);

smalltalk.addMethod(
"_yCell_",
smalltalk.method({
selector: "yCell:",
fn: function (anInt) {
    var self = this;
    self['@yCell'] = anInt;
    return self;
}
}),
smalltalk.HexMouse);


smalltalk.HexMouse.klass.iVarNames = ['hexMouse'];
smalltalk.addMethod(
"_getSingleton",
smalltalk.method({
selector: "getSingleton",
fn: function () {
    var self = this;
    return ($receiver = self['@hexMouse']) == nil || $receiver == undefined ? function () {return self['@hexMouse'] = smalltalk.send(self, "_new", []);}() : $receiver;
    return self;
}
}),
smalltalk.HexMouse.klass);


smalltalk.addClass('XMLhttpRequestProxy', smalltalk.Object, ['xmlhttpRequest'], 'Easnoth-Tools');
smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function () {
    var self = this;
    var xmlhttpRequestTemp = nil;
    smalltalk.send(self, "_initialize", [], smalltalk.XMLhttpRequestProxy.superclass || nil);
    xmlhttpRequestTemp = new XMLHttpRequest;
    smalltalk.send(self, "_xmlhttpRequest_", [xmlhttpRequestTemp]);
    return self;
}
}),
smalltalk.XMLhttpRequestProxy);

smalltalk.addMethod(
"_loadJSON_",
smalltalk.method({
selector: "loadJSON:",
fn: function (fileName) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_open_fileName_arg_", ["GET", fileName, false]);return smalltalk.send($rec, "_send", []);}(smalltalk.send(self, "_xmlhttpRequest", [])));
    return smalltalk.send(smalltalk.send(self, "_xmlhttpRequest", []), "_responseText", []);
    return self;
}
}),
smalltalk.XMLhttpRequestProxy);

smalltalk.addMethod(
"_xmlhttpRequest",
smalltalk.method({
selector: "xmlhttpRequest",
fn: function () {
    var self = this;
    return self['@xmlhttpRequest'];
    return self;
}
}),
smalltalk.XMLhttpRequestProxy);

smalltalk.addMethod(
"_xmlhttpRequest_",
smalltalk.method({
selector: "xmlhttpRequest:",
fn: function (anObject) {
    var self = this;
    self['@xmlhttpRequest'] = anObject;
    return self;
}
}),
smalltalk.XMLhttpRequestProxy);


smalltalk.XMLhttpRequestProxy.klass.iVarNames = ['xmlHttpRequest'];
smalltalk.addMethod(
"_getSingleton",
smalltalk.method({
selector: "getSingleton",
fn: function () {
    var self = this;
    return ($receiver = self['@xmlHttpRequest']) == nil ||
        $receiver == undefined ? function () {return self['@xmlHttpRequest'] = smalltalk.send(self, "_new", []);}() : $receiver;
    return self;
}
}),
smalltalk.XMLhttpRequestProxy.klass);


smalltalk.addMethod(
"_floor",
smalltalk.method({
selector: "floor",
fn: function () {
    var self = this;
    var result = nil;
    result = Math.floor(self);
    return result;
    return self;
}
}),
smalltalk.Number);

smalltalk.addMethod(
"_mod_",
smalltalk.method({
selector: "mod:",
fn: function (mod) {
    var self = this;
    return smalltalk.send(($receiver = mod).klass === smalltalk.Number ? $receiver + smalltalk.send(self, "_\\\\", [mod]) : smalltalk.send($receiver, "__plus", [smalltalk.send(self, "_\\\\", [mod])]), "_\\\\", [mod]);
    return self;
}
}),
smalltalk.Number);

