smalltalk.addPackage('Easnoth-Tools', {});
smalltalk.addClass('Cache', smalltalk.Dictionary, ['onload'], 'Easnoth-Tools');
smalltalk.Cache.comment="\x22singleton cache for images\x22"
smalltalk.addMethod(
"_isLoaded",
smalltalk.method({
selector: "isLoaded",
category: 'accessing',
fn: function () {
    var self = this;
    var loaded = nil;
    loaded = true;
    smalltalk.send(self, "_collect_", [function (each) {return loaded = smalltalk.send(loaded, "_&", [smalltalk.send(each, "_at_", ["complete"])]);}]);
    ($receiver = loaded).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(smalltalk.send(self, "_onload", []), "_value", []);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return smalltalk.send(smalltalk.send(self, "_onload", []), "_value", []);}]);
    return self;
},
args: [],
source: "isLoaded\x0a\x09|loaded|\x0a\x0a\x09loaded := true.\x0a\x09self collect:[ :each|\x0a\x09\x09\x09\x09loaded := loaded & (each at: 'complete')].\x0a\x09loaded ifTrue:[self onload value.].",
messageSends: ["collect:", "&", "at:", "ifTrue:", "value", "onload"],
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


smalltalk.addClass('ImageCache', smalltalk.Cache, [], 'Easnoth-Tools');
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



smalltalk.addClass('MonsterCache', smalltalk.Cache, [], 'Easnoth-Tools');
smalltalk.addMethod(
"_addStatsFromKey_",
smalltalk.method({
selector: "addStatsFromKey:",
category: 'caching',
fn: function (aKey) {
    var self = this;
    var statsNew = nil;
    statsNew = smalltalk.send(smalltalk.JSON || JSON, "_parse_", [smalltalk.send(smalltalk.send(smalltalk.XMLhttpRequestProxy || XMLhttpRequestProxy, "_getSingleton", []), "_loadJSON_", [smalltalk.send(smalltalk.send("ressources/json/monsters/", "__comma", [aKey]), "__comma", [".json"])])]);
    smalltalk.send(self, "_at_put_", [aKey, statsNew]);
    return statsNew;
    return self;
},
args: ["aKey"],
source: "addStatsFromKey: aKey\x0a\x09|statsNew|\x0a\x0a\x09statsNew := JSON parse: (XMLhttpRequestProxy getSingleton loadJSON:  'ressources/json/monsters/',aKey,'.json').\x0a       \x09self at: aKey put: statsNew.\x0a\x0a\x09^statsNew",
messageSends: ["parse:", "loadJSON:", "getSingleton", ",", "at:put:"],
referencedClasses: ["JSON", "XMLhttpRequestProxy"]
}),
smalltalk.MonsterCache);

smalltalk.addMethod(
"_putStatsWithKey_inMonster_",
smalltalk.method({
selector: "putStatsWithKey:inMonster:",
category: 'caching',
fn: function (aKey, aMonster) {
    var self = this;
    smalltalk.send(aMonster, "_stats_", [smalltalk.send(self, "_at_ifAbsent_", [aKey, function () {return smalltalk.send(self, "_addStatsFromKey_", [aKey]);}])]);
    return self;
},
args: ["aKey", "aMonster"],
source: "putStatsWithKey: aKey inMonster: aMonster\x0a\x09aMonster stats: (self at: aKey ifAbsent:[self addStatsFromKey: aKey])",
messageSends: ["stats:", "at:ifAbsent:", "addStatsFromKey:"],
referencedClasses: []
}),
smalltalk.MonsterCache);



smalltalk.addClass('HexMouse', smalltalk.Object, ['xCell', 'yCell'], 'Easnoth-Tools');
smalltalk.HexMouse.comment="\x22representation of the mouse with its coods according to the tiles in the map\x22"
smalltalk.addMethod(
"_mouseCoodToHexCoodX_y_inMap_",
smalltalk.method({
selector: "mouseCoodToHexCoodX:y:inMap:",
category: 'calculs',
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
},
args: ["x", "y", "aMap"],
source: "mouseCoodToHexCoodX: x y: y inMap: aMap\x0a\x09\x22function that take mouse cood in pixel and return the coods of the tile selected\x22\x0a\x09\x0a\x09\x22there are issues from Amber kernel : the order of operations sometimes goes wrong in long lines :  inline compiler issue\x22\x0a\x09\x22so this algo is back to javascript\x22\x0a\x0a\x09| xHex yHex cosmaingridx sinmaingridx cosmaingridy sinmaingridy cosothergridx sinothergridx cosothergridy sinothergridy nb nb2 nb3 nb4 nbCheck xConstante yConstante mapX mapY res|\x0a\x09cosmaingridx := 0.882947593.\x0a\x09sinmaingridx := 0.469471563.\x0a\x09cosmaingridy := 0.130526192 negated.\x0a\x09sinmaingridy := 0.991444861.\x0a\x0a\x09cosothergridx := 0.4539905.\x0a\x09sinothergridx := 0.891006524.\x0a\x09cosothergridy := 0.882947593 negated.\x0a\x09sinothergridy := 0.469471563.\x0a                \x0a\x09mapX := aMap mapX.\x0a\x09mapY := aMap mapY.\x0a\x09\x0a\x09\x09<function mod(n, mod) {\x0a\x09\x09\x09return ((mod+(n%mod))%mod);\x0a\x09\x09}\x0a\x09\x09\x0a\x09\x09nb = Math.floor(((y-(cosmaingridx/sinmaingridx)*x-(mapY+0)+(cosmaingridx/sinmaingridx)*(mapX+320))/(55*cosmaingridx)));\x0a\x09\x09nb2 = Math.floor(((y-(cosmaingridy/sinmaingridy)*x-(mapY+480)+(cosmaingridy/sinmaingridy)*(mapX+206))/(173.2*cosmaingridy)));\x0a\x09\x09\x0a\x09\x09xConstante = 9 + (mod(nb,3));\x0a\x09\x09yConstante = 20 + (mod(nb2,2));\x0a\x09\x09if (nb2%2 == 0) {yConstante += mod(nb+1,2);}\x0a\x09\x09\x0a\x09\x09xHex = Math.floor(((xConstante-nb)/6)+((yConstante-nb2)/2));\x0a\x09\x09yHex = Math.floor(((nb-xConstante)/4)+((yConstante-nb2)/4));\x0a\x09\x09\x0a\x09\x09if (mod(nb,6)==1 && nb2%2==0){\x0a\x09\x09\x09xHex++;\x0a\x09\x09\x09if (nb2%4==0 && mod(nb,12)!=7){yHex++;}\x0a\x09\x09\x09if (mod(nb2,4)==2 && mod(nb,12)==7){yHex++;}\x0a\x09\x09}\x0a\x09\x09\x0a\x09\x09if (nb%3==0) {\x09\x09\x0a\x09\x09\x09if ((nb2%2==0 && nb%6==0) || (mod(nb2,2)==1 && mod(nb,6)==3)) {\x0a\x09\x09\x09\x09nb3 = Math.floor(((y-(cosothergridx/sinothergridx)*x-(mapY+0)+(cosothergridx/sinothergridx)*(mapX+301))/(68*cosothergridx)));\x0a\x09\x09\x09\x09nbCheck = 3+2*yHex+(xHex%2);\x0a\x09\x09\x09\x09if (nb3 == nbCheck) {yHex--;}\x0a\x09\x09\x09}\x0a\x09\x09\x09else {\x0a\x09\x09\x09\x09nb4 = Math.floor(((y-(cosothergridy/sinothergridy)*x-(mapY+480)+(cosothergridy/sinothergridy)*(mapX+212.5))/(95.75*cosothergridy)));\x0a\x09\x09\x09\x09nbCheck = 7-Math.floor(3*xHex/2)+yHex;\x0a\x09\x09\x09\x09if (nb4 == nbCheck) {\x0a\x09\x09\x09\x09\x09if (xHex%2 == 0) {yHex--;}\x0a\x09\x09\x09\x09\x09xHex++;\x0a\x09\x09\x09\x09}\x0a\x09\x09\x09}\x0a\x09\x09}>.\x0a\x0a\x09res := Array with: xHex with: yHex.\x0a\x09\x0a\x09^res",
messageSends: ["negated", "mapX", "mapY", "with:with:"],
referencedClasses: ["Array"]
}),
smalltalk.HexMouse);

smalltalk.addMethod(
"_oldAlgoMouseCoodToHexCoodX_y_inMap_",
smalltalk.method({
selector: "oldAlgoMouseCoodToHexCoodX:y:inMap:",
category: 'calculs',
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
},
args: ["x", "y", "aMap"],
source: "oldAlgoMouseCoodToHexCoodX: x y: y inMap: aMap\x0a\x09\x22function that take mouse cood in pixel and return the coods of the tile selected\x22\x0a\x09\x0a\x09\x22there are issues from Amber kernel : the order of operations sometimes goes wrong in long lines\x22\x0a\x09\x22so this algo is back to javascript\x22\x0a\x0a\x09| xHex yHex cosmaingridx sinmaingridx cosmaingridy sinmaingridy cosothergridx sinothergridx cosothergridy sinothergridy nb nb2 nb3 nb4 nbCheck xConstante yConstante mapX mapY res temp1 temp2 k m|\x0a\x09cosmaingridx := 0.882947593.\x0a\x09sinmaingridx := 0.469471563.\x0a\x09cosmaingridy := 0.130526192 negated.\x0a\x09sinmaingridy := 0.991444861.\x0a\x0a\x09cosothergridx := 0.4539905.\x0a\x09sinothergridx := 0.891006524.\x0a\x09cosothergridy := 0.882947593 negated.\x0a\x09sinothergridy := 0.469471563.\x0a                \x0a\x09mapX := aMap mapX.\x0a\x09mapY := aMap mapY.\x0a\x09\x0a\x09nb := (y-(cosmaingridx/sinmaingridx*x)-mapY+0+(cosmaingridx/sinmaingridx*(mapX+320))/((55*cosmaingridx))) floor.\x0a\x09nb2 := (y-(cosmaingridy/sinmaingridy*x)-mapY+480+(cosmaingridy/sinmaingridy*(mapX+206))/(173.2*cosmaingridy)) floor.\x0a\x09\x0a\x09\x22temp1 := cosmaingridx/sinmaingridx.\x0a\x09temp2 := cosmaingridy/sinmaingridy.\x0a\x09\x0a\x09k := 55*cosmaingridx.\x0a\x09m := 173.2*cosmaingridy.\x22\x0a\x0a\x09\x22nb pb vient du denominateur a calculer avant\x22\x0a\x09\x22nb2 probleme d'origine inconnu\x22\x0a\x09\x22nb := (((y-(temp1*x)-mapY+(temp1*(mapX+320)))/(k))) floor.\x0a\x09nb2 := (((y-(temp2*x)-mapY+480+(temp2*(mapX+206)))/(m))) floor.\x0a\x09\x0a\x09Transcript show: 'ST : nb',nb,'---nb2',nb2.\x0a\x09Transcript show: 'ST : k',k,'---m',m.\x0a\x09Transcript show: 'ST : t1',temp1,'---t2',temp2; cr.\x22\x0a\x0a\x09\x22<temp1 = cosmaingridx/sinmaingridx;\x0a\x09temp2 = cosmaingridy/sinmaingridy;\x0a\x09k = 55*cosmaingridx;\x0a\x09m = 173.2*cosmaingridy;>\x22\x0a\x09\x22<nb = Math.floor(((y-(temp1)*x-(mapY+0)+(temp1)*(mapX+320))/(k)));\x0a\x09nb2 = Math.floor(((y-(temp2)*x-(mapY+480)+(temp2)*(mapX+206))/(m)));>.\x22\x0a\x0a\x09\x22Transcript show: 'JS : nb',nb,'---nb2',nb2.\x0a\x09Transcript show: 'JS : k',k,'---m',m.\x0a\x09Transcript show: 'JS : t1',temp1,'---t2',temp2; cr.\x22\x0a\x0a\x09xConstante := 9 + (nb mod: 3).\x0a\x09yConstante := 20 + (nb2 mod: 2).\x0a\x09(nb2\x5c\x5c2 = 0) ifTrue:[yConstante := yConstante + ((nb+1) mod: 2)].\x0a\x09\x0a\x09xHex := (xConstante-nb/6+(yConstante-nb2/2)) floor.\x0a\x09yHex := (nb-xConstante/4+(yConstante-nb2/4)) floor.\x0a\x09\x0a\x09(((nb mod: 6)=1) & ((nb2 \x5c\x5c 2)=0)) ifTrue:[\x0a\x09\x09xHex := xHex + 1.\x0a\x09\x09(((nb2 \x5c\x5c 4)=0) & (((nb mod: 12)=7) not)) ifTrue:[yHex := yHex + 1].\x0a\x09\x09(((nb2 mod: 4)=2) & ((nb mod: 12)=7)) ifTrue:[yHex := yHex + 1].\x0a\x09].\x0a\x09\x0a\x09((nb \x5c\x5c 3) = 0) ifTrue:[       \x0a\x09\x09((((nb2 \x5c\x5c 2) = 0) & ((nb \x5c\x5c 6)=0)) | (((nb2 mod: 2)=1) & ((nb mod: 6)=3))) ifTrue:[\x0a\x09\x09\x09nb3 := ((y-(cosothergridx/sinothergridx)*x-(mapY+0)+(cosothergridx/sinothergridx)*(mapX+301))/(68*cosothergridx)) floor.\x0a\x09\x09\x09nbCheck := 3 + (2 * yHex) +(xHex \x5c\x5c 2).\x0a\x09\x09\x09(nb3 = nbCheck) ifTrue:[yHex := yHex - 1].\x0a\x09\x09]\x0a\x09\x09ifFalse:[\x0a\x09\x09\x09nb4 :=((y-(cosothergridy/sinothergridy)*x-(mapY+480)+(cosothergridy/sinothergridy)*(mapX+212.5))/(95.75*cosothergridy)) floor.\x0a\x09\x09\x09nbCheck := 7 -((3*xHex/2) floor) + yHex.\x0a\x09\x09\x09(nb4 = nbCheck) ifTrue:[\x0a\x09\x09\x09\x09((xHex \x5c\x5c 2) = 0) ifTrue:[yHex := yHex - 1].\x0a\x09\x09\x09\x09xHex := xHex + 1.\x0a\x09\x09\x09].\x0a\x09\x09].\x0a\x09].\x0a\x09\x0a\x09res := Array with: xHex with: yHex.\x0a\x09\x0a\x09^res",
messageSends: ["negated", "mapX", "mapY", "floor", "/", "+", "-", "*", "mod:", "ifTrue:", "=", "\x5c\x5c\x5c\x5c", "&", "not", "ifTrue:ifFalse:", "|", "with:with:"],
referencedClasses: ["Array"]
}),
smalltalk.HexMouse);

smalltalk.addMethod(
"_updateCoods_inMap_",
smalltalk.method({
selector: "updateCoods:inMap:",
category: 'coods',
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
},
args: ["anEvent", "aMap"],
source: "updateCoods: anEvent inMap: aMap\x0a\x09|x y cood canvas|\x0a\x09\x0a\x09canvas := aMap canvas element.\x0a\x0a        x := anEvent pageX - canvas offsetLeft.\x0a        y := anEvent pageY - canvas offsetTop.\x0a\x0a        cood := self mouseCoodToHexCoodX: x y: y inMap: aMap.\x0a\x09\x09\x0a\x09self xCell: (cood at: 1).\x0a\x09self yCell: (cood at: 2).\x0a\x09\x0a\x09\x22Transcript show: '[',x,'-',y,']'; cr.\x0a\x09Transcript show: '[',xCell,'-',yCell,']'; cr.\x22",
messageSends: ["element", "canvas", "-", "pageX", "offsetLeft", "pageY", "offsetTop", "mouseCoodToHexCoodX:y:inMap:", "xCell:", "at:", "yCell:"],
referencedClasses: []
}),
smalltalk.HexMouse);

smalltalk.addMethod(
"_xCell",
smalltalk.method({
selector: "xCell",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@xCell'];
    return self;
},
args: [],
source: "xCell\x0a\x09^xCell",
messageSends: [],
referencedClasses: []
}),
smalltalk.HexMouse);

smalltalk.addMethod(
"_xCell_",
smalltalk.method({
selector: "xCell:",
category: 'accessing',
fn: function (anInt) {
    var self = this;
    self['@xCell'] = anInt;
    return self;
},
args: ["anInt"],
source: "xCell: anInt\x0a\x09xCell := anInt",
messageSends: [],
referencedClasses: []
}),
smalltalk.HexMouse);

smalltalk.addMethod(
"_yCell",
smalltalk.method({
selector: "yCell",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@yCell'];
    return self;
},
args: [],
source: "yCell\x0a\x09^yCell",
messageSends: [],
referencedClasses: []
}),
smalltalk.HexMouse);

smalltalk.addMethod(
"_yCell_",
smalltalk.method({
selector: "yCell:",
category: 'accessing',
fn: function (anInt) {
    var self = this;
    self['@yCell'] = anInt;
    return self;
},
args: ["anInt"],
source: "yCell: anInt\x0a\x09yCell := anInt",
messageSends: [],
referencedClasses: []
}),
smalltalk.HexMouse);


smalltalk.HexMouse.klass.iVarNames = ['hexMouse'];
smalltalk.addMethod(
"_getSingleton",
smalltalk.method({
selector: "getSingleton",
category: 'initialize-release',
fn: function () {
    var self = this;
    return ($receiver = self['@hexMouse']) == nil || $receiver == undefined ? function () {return self['@hexMouse'] = smalltalk.send(self, "_new", []);}() : $receiver;
    return self;
},
args: [],
source: "getSingleton\x0a\x09^hexMouse ifNil:[hexMouse := self new.]",
messageSends: ["ifNil:", "new"],
referencedClasses: []
}),
smalltalk.HexMouse.klass);


smalltalk.addClass('XMLhttpRequestProxy', smalltalk.Object, ['xmlhttpRequest'], 'Easnoth-Tools');
smalltalk.XMLhttpRequestProxy.comment="\x22singleton that permits to get JSON files\x22"
smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function () {
    var self = this;
    var xmlhttpRequestTemp = nil;
    smalltalk.send(self, "_initialize", [], smalltalk.XMLhttpRequestProxy.superclass || nil);
    xmlhttpRequestTemp = new XMLHttpRequest;
    smalltalk.send(self, "_xmlhttpRequest_", [xmlhttpRequestTemp]);
    return self;
},
args: [],
source: "initialize\x0a\x09|xmlhttpRequestTemp|\x0a\x09super initialize.\x0a\x09xmlhttpRequestTemp := <new XMLHttpRequest()>. \x22if IE new ActiveXObject('Microsoft.XMLHTTP')\x22\x0a\x09self xmlhttpRequest: xmlhttpRequestTemp.",
messageSends: ["initialize", "xmlhttpRequest:"],
referencedClasses: []
}),
smalltalk.XMLhttpRequestProxy);

smalltalk.addMethod(
"_loadJSON_",
smalltalk.method({
selector: "loadJSON:",
category: 'initialize-release',
fn: function (fileName) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_open_fileName_arg_", ["GET", fileName, false]);return smalltalk.send($rec, "_send", []);}(smalltalk.send(self, "_xmlhttpRequest", [])));
    return smalltalk.send(smalltalk.send(self, "_xmlhttpRequest", []), "_responseText", []);
    return self;
},
args: ["fileName"],
source: "loadJSON: fileName\x0a\x0a\x09self xmlhttpRequest open: 'GET'\x0a\x09\x09\x09\x09\x09fileName: fileName\x0a\x09\x09\x09\x09\x09arg: false;\x0a\x09\x09\x09\x09\x09send.\x0a\x09^self xmlhttpRequest responseText",
messageSends: ["open:fileName:arg:", "send", "xmlhttpRequest", "responseText"],
referencedClasses: []
}),
smalltalk.XMLhttpRequestProxy);

smalltalk.addMethod(
"_xmlhttpRequest",
smalltalk.method({
selector: "xmlhttpRequest",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@xmlhttpRequest'];
    return self;
},
args: [],
source: "xmlhttpRequest\x0a\x09^xmlhttpRequest",
messageSends: [],
referencedClasses: []
}),
smalltalk.XMLhttpRequestProxy);

smalltalk.addMethod(
"_xmlhttpRequest_",
smalltalk.method({
selector: "xmlhttpRequest:",
category: 'accessing',
fn: function (anObject) {
    var self = this;
    self['@xmlhttpRequest'] = anObject;
    return self;
},
args: ["anObject"],
source: "xmlhttpRequest: anObject\x0a\x09xmlhttpRequest := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.XMLhttpRequestProxy);


smalltalk.XMLhttpRequestProxy.klass.iVarNames = ['xmlHttpRequest'];
smalltalk.addMethod(
"_getSingleton",
smalltalk.method({
selector: "getSingleton",
category: 'initialize',
fn: function () {
    var self = this;
    return ($receiver = self['@xmlHttpRequest']) == nil ||
        $receiver == undefined ? function () {return self['@xmlHttpRequest'] = smalltalk.send(self, "_new", []);}() : $receiver;
    return self;
},
args: [],
source: "getSingleton\x0a\x09^xmlHttpRequest ifNil:[xmlHttpRequest := self new]",
messageSends: ["ifNil:", "new"],
referencedClasses: []
}),
smalltalk.XMLhttpRequestProxy.klass);


smalltalk.addMethod(
"_floor",
smalltalk.method({
selector: "floor",
category: '*Easnoth-Tools',
fn: function () {
    var self = this;
    var result = nil;
    result = Math.floor(self);
    return result;
    return self;
},
args: [],
source: "floor\x0a|result|\x0a<result = Math.floor(self);>.\x0a    ^ result",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
"_mod_",
smalltalk.method({
selector: "mod:",
category: '*Easnoth-Tools',
fn: function (mod) {
    var self = this;
    return smalltalk.send(($receiver = mod).klass === smalltalk.Number ? $receiver + smalltalk.send(self, "_\\\\", [mod]) : smalltalk.send($receiver, "__plus", [smalltalk.send(self, "_\\\\", [mod])]), "_\\\\", [mod]);
    return self;
},
args: ["mod"],
source: "mod: mod\x0a\x09\x22function that return n%mod - hack for negative numbers --- Ex : mod(-5,6) return 1 instead of -5.\x0a\x09It counter a bug when algo used %6 to mean <do it 1 tile out of 6> and coods were negative\x22\x0a\x09^((mod+(self \x5c\x5c mod)) \x5c\x5c mod)",
messageSends: ["\x5c\x5c\x5c\x5c", "+"],
referencedClasses: []
}),
smalltalk.Number);

