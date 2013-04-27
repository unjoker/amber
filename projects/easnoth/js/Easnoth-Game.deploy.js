smalltalk.addPackage('Easnoth-Game');
smalltalk.addClass('CWEventDispatcher', smalltalk.Object, ['canvas', 'map', 'padding', 'game'], 'Easnoth-Game');
smalltalk.addMethod(
smalltalk.method({
selector: "announcer",
fn: function (){
var self=this;
function $CWEasnothAnnouncer(){return smalltalk.CWEasnothAnnouncer||(typeof CWEasnothAnnouncer=="undefined"?nil:CWEasnothAnnouncer)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($CWEasnothAnnouncer())._current();
return $1;
}, function($ctx1) {$ctx1.fill(self,"announcer",{},smalltalk.CWEventDispatcher)})},
messageSends: ["current"]}),
smalltalk.CWEventDispatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "canvas",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@canvas"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"canvas",{},smalltalk.CWEventDispatcher)})},
messageSends: []}),
smalltalk.CWEventDispatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "cellAt:y:",
fn: function (i,j){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._rowAt_(i))._childAt_(j);
return $1;
}, function($ctx1) {$ctx1.fill(self,"cellAt:y:",{i:i,j:j},smalltalk.CWEventDispatcher)})},
messageSends: ["childAt:", "rowAt:"]}),
smalltalk.CWEventDispatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "cellAt:y:ifAbsent:",
fn: function (i,j,aBlock){
var self=this;
function $Error(){return smalltalk.Error||(typeof Error=="undefined"?nil:Error)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(self)._rowAt_(i))._childAt_(j);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._on_do_($Error(),(function(){
return smalltalk.withContext(function($ctx2) {
return _st(aBlock)._value();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"cellAt:y:ifAbsent:",{i:i,j:j,aBlock:aBlock},smalltalk.CWEventDispatcher)})},
messageSends: ["on:do:", "value", "childAt:", "rowAt:"]}),
smalltalk.CWEventDispatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "currentCell:",
fn: function (anEvent){
var self=this;
var x,y,cood;
return smalltalk.withContext(function($ctx1) { 
var $1;
x=_st(_st(anEvent)._pageX()).__minus(_st(_st(_st(self)._canvas())._element())._offsetLeft());
y=_st(_st(anEvent)._pageY()).__minus(_st(_st(_st(self)._canvas())._element())._offsetTop());
cood=_st(self)._mouseCoodToHexCoodX_y_(x,y);
$1=_st(self)._cellAt_y_ifAbsent_(_st(cood)._x(),_st(cood)._y(),(function(){
return smalltalk.withContext(function($ctx2) {
return nil;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"currentCell:",{anEvent:anEvent,x:x,y:y,cood:cood},smalltalk.CWEventDispatcher)})},
messageSends: ["-", "offsetLeft", "element", "canvas", "pageX", "offsetTop", "pageY", "mouseCoodToHexCoodX:y:", "cellAt:y:ifAbsent:", "x", "y"]}),
smalltalk.CWEventDispatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "dispatchMouseClick:",
fn: function (event){
var self=this;
var cc;
return smalltalk.withContext(function($ctx1) { 
var $1;
cc=_st(self)._currentCell_(event);
$1=cc;
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
_st(cc)._mouseClick_(_st(self["@game"])._gameContext());
};
return self}, function($ctx1) {$ctx1.fill(self,"dispatchMouseClick:",{event:event,cc:cc},smalltalk.CWEventDispatcher)})},
messageSends: ["currentCell:", "ifNotNil:", "mouseClick:", "gameContext"]}),
smalltalk.CWEventDispatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "eventManagerLayerId",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "#eventManager";
}, function($ctx1) {$ctx1.fill(self,"eventManagerLayerId",{},smalltalk.CWEventDispatcher)})},
messageSends: []}),
smalltalk.CWEventDispatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
function $HTMLCanvas(){return smalltalk.HTMLCanvas||(typeof HTMLCanvas=="undefined"?nil:HTMLCanvas)}
function $TagBrush(){return smalltalk.TagBrush||(typeof TagBrush=="undefined"?nil:TagBrush)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.Object.fn.prototype._initialize.apply(_st(self), []);
self["@canvas"]=_st($TagBrush())._fromJQuery_canvas_(_st(_st(self)._eventManagerLayerId())._asJQuery(),_st($HTMLCanvas())._onJQuery_(_st("body")._asJQuery()));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.CWEventDispatcher)})},
messageSends: ["initialize", "fromJQuery:canvas:", "asJQuery", "eventManagerLayerId", "onJQuery:"]}),
smalltalk.CWEventDispatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeEventHandling",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._canvas())._onMouseUp_((function(e){
return smalltalk.withContext(function($ctx2) {
return _st(self)._dispatchMouseClick_(e);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initializeEventHandling",{},smalltalk.CWEventDispatcher)})},
messageSends: ["onMouseUp:", "dispatchMouseClick:", "canvas"]}),
smalltalk.CWEventDispatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeForMap:game:",
fn: function (aMap,aGame){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@game"]=aGame;
self["@map"]=aMap;
self["@padding"]=_st(_st(aMap)._drawer())._padding();
_st(self)._initializeEventHandling();
return self}, function($ctx1) {$ctx1.fill(self,"initializeForMap:game:",{aMap:aMap,aGame:aGame},smalltalk.CWEventDispatcher)})},
messageSends: ["padding", "drawer", "initializeEventHandling"]}),
smalltalk.CWEventDispatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "mouseCoodToHexCoodX:y:",
fn: function (x,y){
var self=this;
var xHex,yHex,array,mapDisplayX,mapDisplayY;
return smalltalk.withContext(function($ctx1) { 
var $1;
mapDisplayX=_st(self["@padding"])._x();
mapDisplayY=_st(self["@padding"])._y();
array=_st(self)._mouseCoodToHexCoodX_y_mapX_mapY_(x,y,mapDisplayX,mapDisplayY);
xHex=_st(array)._at_((1));
yHex=_st(array)._at_((2));
$1=_st(xHex).__at(yHex);
return $1;
}, function($ctx1) {$ctx1.fill(self,"mouseCoodToHexCoodX:y:",{x:x,y:y,xHex:xHex,yHex:yHex,array:array,mapDisplayX:mapDisplayX,mapDisplayY:mapDisplayY},smalltalk.CWEventDispatcher)})},
messageSends: ["x", "y", "mouseCoodToHexCoodX:y:mapX:mapY:", "at:", "@"]}),
smalltalk.CWEventDispatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "mouseCoodToHexCoodX:y:mapX:mapY:",
fn: function (x,y,mapDisplayX,mapDisplayY){
var self=this;
return smalltalk.withContext(function($ctx1) { 
function mod(n, mod) {
			return ((mod+(n%mod))%mod);
		}

		var cosmaingridx = 0.882947593;
		var sinmaingridx = 0.469471563;
		var cosmaingridy = -0.130526192;
		var sinmaingridy = 0.991444861;
		
		var cosothergridx = 0.4539905;
		var sinothergridx = 0.891006524;
		var cosothergridy = -0.882947593;
		var sinothergridy = 0.469471563;
		
		var nb = Math.floor(((y-(cosmaingridx/sinmaingridx)*x-(mapDisplayY+0)+(cosmaingridx/sinmaingridx)*(mapDisplayX+320))/(55*cosmaingridx)));
		var nb2 = Math.floor(((y-(cosmaingridy/sinmaingridy)*x-(mapDisplayY+480)+(cosmaingridy/sinmaingridy)*(mapDisplayX+206))/(173.2*cosmaingridy)));
		
		var xConstante = 9 + (mod(nb,3));
		var yConstante = 20 + (mod(nb2,2));
		if (nb2%2 == 0) {yConstante += mod(nb+1,2);}
		
		xHex = Math.floor(((xConstante-nb)/6)+((yConstante-nb2)/2));
		yHex = Math.floor(((nb-xConstante)/4)+((yConstante-nb2)/4));
		
		if (mod(nb,6)==1 && nb2%2==0){
			xHex++;
			if (nb2%4==0 && mod(nb,12)!=7){yHex++;}
			if (mod(nb2,4)==2 && mod(nb,12)==7){yHex++;}
		}
		
		if (nb%3==0) {		
			if ((nb2%2==0 && nb%6==0) || (mod(nb2,2)==1 && mod(nb,6)==3)) {
				var nb3 = Math.floor(((y-(cosothergridx/sinothergridx)*x-(mapDisplayY+0)+(cosothergridx/sinothergridx)*(mapDisplayX+301))/(68*cosothergridx)));
				var nbCheck = 3+2*yHex+(xHex%2);
				if (nb3 == nbCheck) {yHex--;}
			}
			else {
				var nb4 = Math.floor(((y-(cosothergridy/sinothergridy)*x-(mapDisplayY+480)+(cosothergridy/sinothergridy)*(mapDisplayX+212.5))/(95.75*cosothergridy)));
				var nbCheck = 7-Math.floor(3*xHex/2)+yHex;
				if (nb4 == nbCheck) {
					if (xHex%2 == 0) {yHex--;}
					xHex++;
				}
			}
		}
        var a = new Array(2);
        a[0] = xHex;
        a[1] = yHex;
        return a;
return self}, function($ctx1) {$ctx1.fill(self,"mouseCoodToHexCoodX:y:mapX:mapY:",{x:x,y:y,mapDisplayX:mapDisplayX,mapDisplayY:mapDisplayY},smalltalk.CWEventDispatcher)})},
messageSends: []}),
smalltalk.CWEventDispatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "rowAt:",
fn: function (index){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@map"])._childAt_(index);
return $1;
}, function($ctx1) {$ctx1.fill(self,"rowAt:",{index:index},smalltalk.CWEventDispatcher)})},
messageSends: ["childAt:"]}),
smalltalk.CWEventDispatcher);



smalltalk.addClass('CWExtendedCell', smalltalk.Object, ['cell', 'prevCell'], 'Easnoth-Game');


smalltalk.addClass('CWGame', smalltalk.Object, ['map', 'context', 'playerPool'], 'Easnoth-Game');
smalltalk.addMethod(
smalltalk.method({
selector: "announce:",
fn: function (event){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._announcer())._announce_(event);
return self}, function($ctx1) {$ctx1.fill(self,"announce:",{event:event},smalltalk.CWGame)})},
messageSends: ["announce:", "announcer"]}),
smalltalk.CWGame);

smalltalk.addMethod(
smalltalk.method({
selector: "announcer",
fn: function (){
var self=this;
function $CWEasnothAnnouncer(){return smalltalk.CWEasnothAnnouncer||(typeof CWEasnothAnnouncer=="undefined"?nil:CWEasnothAnnouncer)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($CWEasnothAnnouncer())._current();
return $1;
}, function($ctx1) {$ctx1.fill(self,"announcer",{},smalltalk.CWGame)})},
messageSends: ["current"]}),
smalltalk.CWGame);

smalltalk.addMethod(
smalltalk.method({
selector: "currentPlayer",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._gameContext())._currentPlayer();
return $1;
}, function($ctx1) {$ctx1.fill(self,"currentPlayer",{},smalltalk.CWGame)})},
messageSends: ["currentPlayer", "gameContext"]}),
smalltalk.CWGame);

smalltalk.addMethod(
smalltalk.method({
selector: "eventManagerLayerId",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "#eventManager";
}, function($ctx1) {$ctx1.fill(self,"eventManagerLayerId",{},smalltalk.CWGame)})},
messageSends: []}),
smalltalk.CWGame);

smalltalk.addMethod(
smalltalk.method({
selector: "firstTurn",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._gameContext())._nextTurn_(_st(self["@playerPool"])._at_(_st((2))._atRandom()));
_st(_st(self)._currentPlayer())._startTurn_(self["@map"]);
return self}, function($ctx1) {$ctx1.fill(self,"firstTurn",{},smalltalk.CWGame)})},
messageSends: ["nextTurn:", "at:", "atRandom", "gameContext", "startTurn:", "currentPlayer"]}),
smalltalk.CWGame);

smalltalk.addMethod(
smalltalk.method({
selector: "gameContext",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@context"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"gameContext",{},smalltalk.CWGame)})},
messageSends: []}),
smalltalk.CWGame);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
function $CWFightMenu(){return smalltalk.CWFightMenu||(typeof CWFightMenu=="undefined"?nil:CWFightMenu)}
function $CWGameContext(){return smalltalk.CWGameContext||(typeof CWGameContext=="undefined"?nil:CWGameContext)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.Object.fn.prototype._initialize.apply(_st(self), []);
_st($CWFightMenu())._new();
self["@context"]=_st($CWGameContext())._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.CWGame)})},
messageSends: ["initialize", "new"]}),
smalltalk.CWGame);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeEventHandling",
fn: function (){
var self=this;
function $CWGameStart(){return smalltalk.CWGameStart||(typeof CWGameStart=="undefined"?nil:CWGameStart)}
function $CWNextTurnEvent(){return smalltalk.CWNextTurnEvent||(typeof CWNextTurnEvent=="undefined"?nil:CWNextTurnEvent)}
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._announcer())._on_do_($CWGameStart(),(function(){
return smalltalk.withContext(function($ctx2) {
return _st(self)._startGame();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(_st(self)._announcer())._on_do_($CWNextTurnEvent(),(function(){
return smalltalk.withContext(function($ctx2) {
return _st(self)._nextTurn();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initializeEventHandling",{},smalltalk.CWGame)})},
messageSends: ["on:do:", "startGame", "announcer", "nextTurn"]}),
smalltalk.CWGame);

smalltalk.addMethod(
smalltalk.method({
selector: "initializePlayerMonsters",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@playerPool"])._do_((function(player){
return smalltalk.withContext(function($ctx2) {
return _st(player)._addMonstersToMap_(self["@map"]);
}, function($ctx2) {$ctx2.fillBlock({player:player},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initializePlayerMonsters",{},smalltalk.CWGame)})},
messageSends: ["do:", "addMonstersToMap:"]}),
smalltalk.CWGame);

smalltalk.addMethod(
smalltalk.method({
selector: "initializePlayers",
fn: function (){
var self=this;
function $CWAI(){return smalltalk.CWAI||(typeof CWAI=="undefined"?nil:CWAI)}
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(self["@playerPool"])._withIndexDo_((function(player,i){
return smalltalk.withContext(function($ctx2) {
_st(player)._side_(_st(_st(i).__minus((1.5))).__star((2)));
_st(player)._initializeWithMap_(self["@map"]);
$1=_st(player)._isKindOf_($CWAI());
if(smalltalk.assert($1)){
return _st(player)._gameContext_(_st(self)._gameContext());
};
}, function($ctx2) {$ctx2.fillBlock({player:player,i:i},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initializePlayers",{},smalltalk.CWGame)})},
messageSends: ["withIndexDo:", "side:", "*", "-", "initializeWithMap:", "ifTrue:", "gameContext:", "gameContext", "isKindOf:"]}),
smalltalk.CWGame);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeWithSettings:",
fn: function (gameSettings){
var self=this;
function $CWMap(){return smalltalk.CWMap||(typeof CWMap=="undefined"?nil:CWMap)}
return smalltalk.withContext(function($ctx1) { 
self["@map"]=_st($CWMap())._newWithMapIndex_(_st(gameSettings)._mapNumber());
self["@playerPool"]=_st(gameSettings)._players();
_st(self)._initializePlayers();
_st(self)._initializeEventHandling();
return self}, function($ctx1) {$ctx1.fill(self,"initializeWithSettings:",{gameSettings:gameSettings},smalltalk.CWGame)})},
messageSends: ["newWithMapIndex:", "mapNumber", "players", "initializePlayers", "initializeEventHandling"]}),
smalltalk.CWGame);

smalltalk.addMethod(
smalltalk.method({
selector: "nextPlayer",
fn: function (){
var self=this;
var index;
return smalltalk.withContext(function($ctx1) { 
var $1;
index=_st(self["@playerPool"])._indexOf_(_st(self)._currentPlayer());
$1=_st(self["@playerPool"])._at_ifAbsent_(_st(index).__plus((1)),(function(){
return smalltalk.withContext(function($ctx2) {
return _st(self["@playerPool"])._at_((1));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"nextPlayer",{index:index},smalltalk.CWGame)})},
messageSends: ["indexOf:", "currentPlayer", "at:ifAbsent:", "+", "at:"]}),
smalltalk.CWGame);

smalltalk.addMethod(
smalltalk.method({
selector: "nextTurn",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._currentPlayer())._endTurn_(self["@map"]);
_st(_st(self)._gameContext())._nextTurn_(_st(self)._nextPlayer());
_st(_st(self)._currentPlayer())._startTurn_(self["@map"]);
return self}, function($ctx1) {$ctx1.fill(self,"nextTurn",{},smalltalk.CWGame)})},
messageSends: ["endTurn:", "currentPlayer", "nextTurn:", "nextPlayer", "gameContext", "startTurn:"]}),
smalltalk.CWGame);

smalltalk.addMethod(
smalltalk.method({
selector: "startGame",
fn: function (){
var self=this;
function $CWEventDispatcher(){return smalltalk.CWEventDispatcher||(typeof CWEventDispatcher=="undefined"?nil:CWEventDispatcher)}
return smalltalk.withContext(function($ctx1) { 
_st(self)._initializePlayerMonsters();
_st(self["@map"])._initializeDrawer();
_st(_st($CWEventDispatcher())._new())._initializeForMap_game_(self["@map"],self);
_st(self["@map"])._updateMap();
_st(self)._firstTurn();
return self}, function($ctx1) {$ctx1.fill(self,"startGame",{},smalltalk.CWGame)})},
messageSends: ["initializePlayerMonsters", "initializeDrawer", "initializeForMap:game:", "new", "updateMap", "firstTurn"]}),
smalltalk.CWGame);



smalltalk.addClass('CWGameContext', smalltalk.Object, ['currentPlayer', 'currentCell'], 'Easnoth-Game');
smalltalk.addMethod(
smalltalk.method({
selector: "currentCell",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@currentCell"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"currentCell",{},smalltalk.CWGameContext)})},
messageSends: []}),
smalltalk.CWGameContext);

smalltalk.addMethod(
smalltalk.method({
selector: "currentCell:",
fn: function (aCurrentCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@currentCell"]=aCurrentCell;
return self}, function($ctx1) {$ctx1.fill(self,"currentCell:",{aCurrentCell:aCurrentCell},smalltalk.CWGameContext)})},
messageSends: []}),
smalltalk.CWGameContext);

smalltalk.addMethod(
smalltalk.method({
selector: "currentMonster",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@currentCell"])._monster();
return $1;
}, function($ctx1) {$ctx1.fill(self,"currentMonster",{},smalltalk.CWGameContext)})},
messageSends: ["monster"]}),
smalltalk.CWGameContext);

smalltalk.addMethod(
smalltalk.method({
selector: "currentMonster:",
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@currentCell"]=_st(aMonster)._parent();
return self}, function($ctx1) {$ctx1.fill(self,"currentMonster:",{aMonster:aMonster},smalltalk.CWGameContext)})},
messageSends: ["parent"]}),
smalltalk.CWGameContext);

smalltalk.addMethod(
smalltalk.method({
selector: "currentPlayer",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@currentPlayer"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"currentPlayer",{},smalltalk.CWGameContext)})},
messageSends: []}),
smalltalk.CWGameContext);

smalltalk.addMethod(
smalltalk.method({
selector: "currentPlayerSide",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@currentPlayer"])._side();
return $1;
}, function($ctx1) {$ctx1.fill(self,"currentPlayerSide",{},smalltalk.CWGameContext)})},
messageSends: ["side"]}),
smalltalk.CWGameContext);

smalltalk.addMethod(
smalltalk.method({
selector: "nextTurn:",
fn: function (nextPlayer){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@currentPlayer"]=nextPlayer;
self["@currentCell"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"nextTurn:",{nextPlayer:nextPlayer},smalltalk.CWGameContext)})},
messageSends: []}),
smalltalk.CWGameContext);



smalltalk.addClass('CWPathFinder', smalltalk.Object, ['studiedList', 'listToStudy'], 'Easnoth-Game');
smalltalk.addMethod(
smalltalk.method({
selector: "pathFrom:to:",
fn: function (cellStart,cellEnd){
var self=this;
var path,tempArray;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(self)._resetList();
_st(self["@listToStudy"])._add_(cellStart);
tempArray=_st($Array())._new();
_st(self["@listToStudy"])._do_((function(cell){
return smalltalk.withContext(function($ctx2) {
return _st(_st(cell)._neighbours())._do_((function(each){
return smalltalk.withContext(function($ctx3) {
$1=_st(_st(self["@studiedList"])._values())._includes_(each);
if(! smalltalk.assert($1)){
return _st(tempArray)._add_(each);
};
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({cell:cell},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"pathFrom:to:",{cellStart:cellStart,cellEnd:cellEnd,path:path,tempArray:tempArray},smalltalk.CWPathFinder)})},
messageSends: ["resetList", "add:", "new", "do:", "ifFalse:", "includes:", "values", "neighbours"]}),
smalltalk.CWPathFinder);

smalltalk.addMethod(
smalltalk.method({
selector: "resetList",
fn: function (){
var self=this;
function $Set(){return smalltalk.Set||(typeof Set=="undefined"?nil:Set)}
return smalltalk.withContext(function($ctx1) { 
self["@studiedList"]=_st($Set())._new();
self["@listToStudy"]=_st($Set())._new();
return self}, function($ctx1) {$ctx1.fill(self,"resetList",{},smalltalk.CWPathFinder)})},
messageSends: ["new"]}),
smalltalk.CWPathFinder);

smalltalk.addMethod(
smalltalk.method({
selector: "selectableTilesFor:",
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"selectableTilesFor:",{aMonster:aMonster},smalltalk.CWPathFinder)})},
messageSends: []}),
smalltalk.CWPathFinder);



smalltalk.addClass('CWPlayer', smalltalk.Object, ['side', 'team'], 'Easnoth-Game');
smalltalk.addMethod(
smalltalk.method({
selector: "addMonstersToMap:",
fn: function (aMap){
var self=this;
var positions;
return smalltalk.withContext(function($ctx1) { 
positions=_st(self)._monstersPositionArray();
_st(positions)._withIndexDo_((function(point,n){
return smalltalk.withContext(function($ctx2) {
return _st(_st(_st(aMap)._childAt_(_st(point)._x()))._childAt_(_st(point)._y()))._addMonster_(_st(self["@team"])._at_(n));
}, function($ctx2) {$ctx2.fillBlock({point:point,n:n},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"addMonstersToMap:",{aMap:aMap,positions:positions},smalltalk.CWPlayer)})},
messageSends: ["monstersPositionArray", "withIndexDo:", "addMonster:", "at:", "childAt:", "y", "x"]}),
smalltalk.CWPlayer);

smalltalk.addMethod(
smalltalk.method({
selector: "announce:",
fn: function (event){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._announcer())._announce_(event);
return self}, function($ctx1) {$ctx1.fill(self,"announce:",{event:event},smalltalk.CWPlayer)})},
messageSends: ["announce:", "announcer"]}),
smalltalk.CWPlayer);

smalltalk.addMethod(
smalltalk.method({
selector: "announcer",
fn: function (){
var self=this;
function $CWEasnothAnnouncer(){return smalltalk.CWEasnothAnnouncer||(typeof CWEasnothAnnouncer=="undefined"?nil:CWEasnothAnnouncer)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($CWEasnothAnnouncer())._current();
return $1;
}, function($ctx1) {$ctx1.fill(self,"announcer",{},smalltalk.CWPlayer)})},
messageSends: ["current"]}),
smalltalk.CWPlayer);

smalltalk.addMethod(
smalltalk.method({
selector: "endGame",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(window)._alert_(_st("Someone just won. Guess who ? loser : ").__comma(_st(self)._printString()));
return self}, function($ctx1) {$ctx1.fill(self,"endGame",{},smalltalk.CWPlayer)})},
messageSends: ["alert:", ",", "printString"]}),
smalltalk.CWPlayer);

smalltalk.addMethod(
smalltalk.method({
selector: "endTurn:",
fn: function (map){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(map)._desactivateMonsters();
_st(map)._removeSelection();
return self}, function($ctx1) {$ctx1.fill(self,"endTurn:",{map:map},smalltalk.CWPlayer)})},
messageSends: ["desactivateMonsters", "removeSelection"]}),
smalltalk.CWPlayer);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeWithMap:",
fn: function (aMap){
var self=this;
function $CWWaitForObject(){return smalltalk.CWWaitForObject||(typeof CWWaitForObject=="undefined"?nil:CWWaitForObject)}
function $CWObjectLoaded(){return smalltalk.CWObjectLoaded||(typeof CWObjectLoaded=="undefined"?nil:CWObjectLoaded)}
return smalltalk.withContext(function($ctx1) { 
_st(self)._announce_(_st($CWWaitForObject())._new());
_st(jQuery)._getJSON_onSuccess_(_st(_st("ressources/json/armies/").__comma(_st(self)._team())).__comma(".json"),(function(data){
return smalltalk.withContext(function($ctx2) {
_st(self)._initializeWithMap_army_(aMap,data);
return _st(self)._announce_(_st($CWObjectLoaded())._new());
}, function($ctx2) {$ctx2.fillBlock({data:data},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initializeWithMap:",{aMap:aMap},smalltalk.CWPlayer)})},
messageSends: ["announce:", "new", "getJSON:onSuccess:", ",", "team", "initializeWithMap:army:"]}),
smalltalk.CWPlayer);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeWithMap:army:",
fn: function (aMap,data){
var self=this;
var monsters;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
monsters=_st($Array())._new();
_st(monsters)._at_put_((1),_st(self)._newTroop_(_st(data)._troop()));
_st(monsters)._at_put_((2),_st(self)._newTroopHeros_(_st(data)._troopHeros()));
_st(monsters)._at_put_((3),_st(self)._newRange_(_st(data)._troop()));
_st(monsters)._at_put_((4),_st(self)._newCavalry_(_st(data)._cavalry()));
_st(monsters)._at_put_((5),_st(self)._newCavalryHeros_(_st(data)._cavalryHeros()));
_st(monsters)._at_put_((6),_st(self)._newRangeHeros_(_st(data)._troopHeros()));
self["@team"]=monsters;
return self}, function($ctx1) {$ctx1.fill(self,"initializeWithMap:army:",{aMap:aMap,data:data,monsters:monsters},smalltalk.CWPlayer)})},
messageSends: ["new", "at:put:", "newTroop:", "troop", "newTroopHeros:", "troopHeros", "newRange:", "newCavalry:", "cavalry", "newCavalryHeros:", "cavalryHeros", "newRangeHeros:"]}),
smalltalk.CWPlayer);

smalltalk.addMethod(
smalltalk.method({
selector: "monstersPositionArray",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=_st(_st(self)._side()).__eq((1));
if(smalltalk.assert($2)){
$1=[_st((1)).__at((4)),_st((1)).__at((6)),_st((2)).__at((6)),_st((3)).__at((6)),_st((4)).__at((6)),_st((1)).__at((3))];
} else {
$1=[_st((7)).__at((1)),_st((8)).__at((1)),_st((9)).__at((1)),_st((6)).__at((1)),_st((9)).__at((3)),_st((9)).__at((4))];
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"monstersPositionArray",{},smalltalk.CWPlayer)})},
messageSends: ["ifTrue:ifFalse:", "@", "=", "side"]}),
smalltalk.CWPlayer);

smalltalk.addMethod(
smalltalk.method({
selector: "newCavalry:",
fn: function (jsonStat){
var self=this;
function $CWUnitStrategy(){return smalltalk.CWUnitStrategy||(typeof CWUnitStrategy=="undefined"?nil:CWUnitStrategy)}
function $CWCavalryStrategy(){return smalltalk.CWCavalryStrategy||(typeof CWCavalryStrategy=="undefined"?nil:CWCavalryStrategy)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._newMonster_heros_type_(jsonStat,$CWUnitStrategy(),$CWCavalryStrategy());
return $1;
}, function($ctx1) {$ctx1.fill(self,"newCavalry:",{jsonStat:jsonStat},smalltalk.CWPlayer)})},
messageSends: ["newMonster:heros:type:"]}),
smalltalk.CWPlayer);

smalltalk.addMethod(
smalltalk.method({
selector: "newCavalryHeros:",
fn: function (jsonStat){
var self=this;
function $CWHerosStrategy(){return smalltalk.CWHerosStrategy||(typeof CWHerosStrategy=="undefined"?nil:CWHerosStrategy)}
function $CWCavalryStrategy(){return smalltalk.CWCavalryStrategy||(typeof CWCavalryStrategy=="undefined"?nil:CWCavalryStrategy)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._newMonster_heros_type_(jsonStat,$CWHerosStrategy(),$CWCavalryStrategy());
return $1;
}, function($ctx1) {$ctx1.fill(self,"newCavalryHeros:",{jsonStat:jsonStat},smalltalk.CWPlayer)})},
messageSends: ["newMonster:heros:type:"]}),
smalltalk.CWPlayer);

smalltalk.addMethod(
smalltalk.method({
selector: "newMonster:heros:type:",
fn: function (jsonStat,strat,aType){
var self=this;
function $CWMonster(){return smalltalk.CWMonster||(typeof CWMonster=="undefined"?nil:CWMonster)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st($CWMonster())._new())._initializeWithStat_army_player_heros_type_(jsonStat,_st(self)._team(),self,strat,aType);
return $1;
}, function($ctx1) {$ctx1.fill(self,"newMonster:heros:type:",{jsonStat:jsonStat,strat:strat,aType:aType},smalltalk.CWPlayer)})},
messageSends: ["initializeWithStat:army:player:heros:type:", "team", "new"]}),
smalltalk.CWPlayer);

smalltalk.addMethod(
smalltalk.method({
selector: "newRange:",
fn: function (jsonStat){
var self=this;
function $CWUnitStrategy(){return smalltalk.CWUnitStrategy||(typeof CWUnitStrategy=="undefined"?nil:CWUnitStrategy)}
function $CWRangeStrategy(){return smalltalk.CWRangeStrategy||(typeof CWRangeStrategy=="undefined"?nil:CWRangeStrategy)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._newMonster_heros_type_(jsonStat,$CWUnitStrategy(),$CWRangeStrategy());
return $1;
}, function($ctx1) {$ctx1.fill(self,"newRange:",{jsonStat:jsonStat},smalltalk.CWPlayer)})},
messageSends: ["newMonster:heros:type:"]}),
smalltalk.CWPlayer);

smalltalk.addMethod(
smalltalk.method({
selector: "newRangeHeros:",
fn: function (jsonStat){
var self=this;
function $CWHerosStrategy(){return smalltalk.CWHerosStrategy||(typeof CWHerosStrategy=="undefined"?nil:CWHerosStrategy)}
function $CWRangeStrategy(){return smalltalk.CWRangeStrategy||(typeof CWRangeStrategy=="undefined"?nil:CWRangeStrategy)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._newMonster_heros_type_(jsonStat,$CWHerosStrategy(),$CWRangeStrategy());
return $1;
}, function($ctx1) {$ctx1.fill(self,"newRangeHeros:",{jsonStat:jsonStat},smalltalk.CWPlayer)})},
messageSends: ["newMonster:heros:type:"]}),
smalltalk.CWPlayer);

smalltalk.addMethod(
smalltalk.method({
selector: "newTroop:",
fn: function (jsonStat){
var self=this;
function $CWUnitStrategy(){return smalltalk.CWUnitStrategy||(typeof CWUnitStrategy=="undefined"?nil:CWUnitStrategy)}
function $CWTroopStrategy(){return smalltalk.CWTroopStrategy||(typeof CWTroopStrategy=="undefined"?nil:CWTroopStrategy)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._newMonster_heros_type_(jsonStat,$CWUnitStrategy(),$CWTroopStrategy());
return $1;
}, function($ctx1) {$ctx1.fill(self,"newTroop:",{jsonStat:jsonStat},smalltalk.CWPlayer)})},
messageSends: ["newMonster:heros:type:"]}),
smalltalk.CWPlayer);

smalltalk.addMethod(
smalltalk.method({
selector: "newTroopHeros:",
fn: function (jsonStat){
var self=this;
function $CWHerosStrategy(){return smalltalk.CWHerosStrategy||(typeof CWHerosStrategy=="undefined"?nil:CWHerosStrategy)}
function $CWTroopStrategy(){return smalltalk.CWTroopStrategy||(typeof CWTroopStrategy=="undefined"?nil:CWTroopStrategy)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._newMonster_heros_type_(jsonStat,$CWHerosStrategy(),$CWTroopStrategy());
return $1;
}, function($ctx1) {$ctx1.fill(self,"newTroopHeros:",{jsonStat:jsonStat},smalltalk.CWPlayer)})},
messageSends: ["newMonster:heros:type:"]}),
smalltalk.CWPlayer);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=aStream;
_st($1)._nextPutAll_(_st(_st(self)._class())._name());
_st($1)._nextPutAll_("(");
_st($1)._nextPutAll_(_st(self["@side"])._printString());
_st($1)._nextPutAll_("-");
_st($1)._nextPutAll_(_st(self["@team"])._printString());
$2=_st($1)._nextPutAll_(")");
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},smalltalk.CWPlayer)})},
messageSends: ["nextPutAll:", "name", "class", "printString"]}),
smalltalk.CWPlayer);

smalltalk.addMethod(
smalltalk.method({
selector: "removeMonster:",
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(_st(self)._team())._remove_(aMonster);
_st(aMonster)._player_(nil);
$1=_st(_st(self)._team())._isEmpty();
if(smalltalk.assert($1)){
_st(self)._endGame();
};
return self}, function($ctx1) {$ctx1.fill(self,"removeMonster:",{aMonster:aMonster},smalltalk.CWPlayer)})},
messageSends: ["remove:", "team", "player:", "ifTrue:", "endGame", "isEmpty"]}),
smalltalk.CWPlayer);

smalltalk.addMethod(
smalltalk.method({
selector: "side",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@side"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"side",{},smalltalk.CWPlayer)})},
messageSends: []}),
smalltalk.CWPlayer);

smalltalk.addMethod(
smalltalk.method({
selector: "side:",
fn: function (int){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@side"]=int;
return self}, function($ctx1) {$ctx1.fill(self,"side:",{int:int},smalltalk.CWPlayer)})},
messageSends: []}),
smalltalk.CWPlayer);

smalltalk.addMethod(
smalltalk.method({
selector: "startTurn:",
fn: function (map){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(_st(self)._team())._isEmpty();
if(smalltalk.assert($1)){
$2=_st(self)._endGame();
return $2;
};
_st(_st(self)._team())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
_st(each)._readyToBePicked();
return _st(_st(each)._parent())._showActiveMonsters();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
_st(map)._updateGOTs();
return self}, function($ctx1) {$ctx1.fill(self,"startTurn:",{map:map},smalltalk.CWPlayer)})},
messageSends: ["ifTrue:", "endGame", "isEmpty", "team", "do:", "readyToBePicked", "showActiveMonsters", "parent", "updateGOTs"]}),
smalltalk.CWPlayer);

smalltalk.addMethod(
smalltalk.method({
selector: "team",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@team"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"team",{},smalltalk.CWPlayer)})},
messageSends: []}),
smalltalk.CWPlayer);

smalltalk.addMethod(
smalltalk.method({
selector: "team:",
fn: function (aTeam){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@team"]=aTeam;
return self}, function($ctx1) {$ctx1.fill(self,"team:",{aTeam:aTeam},smalltalk.CWPlayer)})},
messageSends: []}),
smalltalk.CWPlayer);



smalltalk.addClass('CWAI', smalltalk.CWPlayer, ['gameContext'], 'Easnoth-Game');
smalltalk.addMethod(
smalltalk.method({
selector: "gameContext",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@gameContext"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"gameContext",{},smalltalk.CWAI)})},
messageSends: []}),
smalltalk.CWAI);

smalltalk.addMethod(
smalltalk.method({
selector: "gameContext:",
fn: function (aCtx){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@gameContext"]=aCtx;
return self}, function($ctx1) {$ctx1.fill(self,"gameContext:",{aCtx:aCtx},smalltalk.CWAI)})},
messageSends: []}),
smalltalk.CWAI);



smalltalk.addClass('CWAggressWeakestAI', smalltalk.CWAI, ['monsterToPlay', 'cellToTarget'], 'Easnoth-Game');
smalltalk.addMethod(
smalltalk.method({
selector: "calculBestMove",
fn: function (){
var self=this;
var score,bestScore;
return smalltalk.withContext(function($ctx1) { 
var $1;
bestScore=_st((9999))._negated();
_st(_st(self)._team())._do_((function(monster){
return smalltalk.withContext(function($ctx2) {
_st(monster)._currentMove_(_st(monster)._move());
_st(_st(monster)._attackableTargets())._do_((function(target){
return smalltalk.withContext(function($ctx3) {
score=_st(_st(monster)._attackPotential()).__minus(_st(_st(target)._monster())._defensePotential());
score;
$1=_st(score).__gt(bestScore);
if(smalltalk.assert($1)){
bestScore=score;
bestScore;
self["@monsterToPlay"]=monster;
self["@monsterToPlay"];
self["@cellToTarget"]=target;
return self["@cellToTarget"];
};
}, function($ctx3) {$ctx3.fillBlock({target:target},$ctx1)})}));
return _st(monster)._currentMove_((0));
}, function($ctx2) {$ctx2.fillBlock({monster:monster},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"calculBestMove",{score:score,bestScore:bestScore},smalltalk.CWAggressWeakestAI)})},
messageSends: ["negated", "do:", "currentMove:", "move", "-", "defensePotential", "monster", "attackPotential", "ifTrue:", ">", "attackableTargets", "team"]}),
smalltalk.CWAggressWeakestAI);

smalltalk.addMethod(
smalltalk.method({
selector: "checkForNextTurn:",
fn: function (monster){
var self=this;
function $CWNextTurnEvent(){return smalltalk.CWNextTurnEvent||(typeof CWNextTurnEvent=="undefined"?nil:CWNextTurnEvent)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(monster)._isInactive();
if(! smalltalk.assert($1)){
_st(self)._announce_(_st($CWNextTurnEvent())._new());
};
return self}, function($ctx1) {$ctx1.fill(self,"checkForNextTurn:",{monster:monster},smalltalk.CWAggressWeakestAI)})},
messageSends: ["ifFalse:", "announce:", "new", "isInactive"]}),
smalltalk.CWAggressWeakestAI);

smalltalk.addMethod(
smalltalk.method({
selector: "executeAttack",
fn: function (){
var self=this;
var relatedTargetCell,duration;
return smalltalk.withContext(function($ctx1) { 
relatedTargetCell=_st(_st(self["@monsterToPlay"])._parent())._cellToMoveBeforeAttack_(self["@cellToTarget"]);
duration=_st(_st(_st(_st(_st(self["@monsterToPlay"])._parent())._pathTo_(relatedTargetCell))._size()).__minus((1))).__star((300));
_st(self["@cellToTarget"])._mouseClick_(_st(self)._gameContext());
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self)._checkForNextTurn_(self["@monsterToPlay"]);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._valueWithTimeout_(_st(_st(duration).__plus((2000))).__plus(_st(self)._time()));
return self}, function($ctx1) {$ctx1.fill(self,"executeAttack",{relatedTargetCell:relatedTargetCell,duration:duration},smalltalk.CWAggressWeakestAI)})},
messageSends: ["cellToMoveBeforeAttack:", "parent", "*", "-", "size", "pathTo:", "mouseClick:", "gameContext", "valueWithTimeout:", "+", "time", "checkForNextTurn:"]}),
smalltalk.CWAggressWeakestAI);

smalltalk.addMethod(
smalltalk.method({
selector: "executeBestMove",
fn: function (){
var self=this;
var duration,relatedTargetCell,hasAttack;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(_st(self["@monsterToPlay"])._parent())._mouseClick_(_st(self)._gameContext());
_st((function(){
return smalltalk.withContext(function($ctx2) {
$1=_st(self["@cellToTarget"])._hasMonster();
if(smalltalk.assert($1)){
return _st(self)._executeAttack();
} else {
return _st(self)._executeMove();
};
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._valueWithTimeout_(_st(self)._time());
return self}, function($ctx1) {$ctx1.fill(self,"executeBestMove",{duration:duration,relatedTargetCell:relatedTargetCell,hasAttack:hasAttack},smalltalk.CWAggressWeakestAI)})},
messageSends: ["mouseClick:", "gameContext", "parent", "valueWithTimeout:", "time", "ifTrue:ifFalse:", "executeAttack", "executeMove", "hasMonster"]}),
smalltalk.CWAggressWeakestAI);

smalltalk.addMethod(
smalltalk.method({
selector: "executeMove",
fn: function (){
var self=this;
var duration;
return smalltalk.withContext(function($ctx1) { 
duration=_st(_st(_st(_st(_st(self["@monsterToPlay"])._parent())._pathTo_(self["@cellToTarget"]))._size()).__minus((1))).__star((300));
_st(self["@cellToTarget"])._mouseClick_(_st(self)._gameContext());
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self)._checkForNextTurn_(self["@monsterToPlay"]);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._valueWithTimeout_(_st(duration).__plus(_st(self)._time()));
return self}, function($ctx1) {$ctx1.fill(self,"executeMove",{duration:duration},smalltalk.CWAggressWeakestAI)})},
messageSends: ["*", "-", "size", "pathTo:", "parent", "mouseClick:", "gameContext", "valueWithTimeout:", "+", "time", "checkForNextTurn:"]}),
smalltalk.CWAggressWeakestAI);

smalltalk.addMethod(
smalltalk.method({
selector: "randomMove",
fn: function (){
var self=this;
var cellsToGo;
return smalltalk.withContext(function($ctx1) { 
var $1;
var $early={};
try {
self["@monsterToPlay"]=_st(_st(self)._team())._at_(_st(_st(_st(self)._team())._size())._atRandom());
_st(_st(self["@monsterToPlay"])._root())._removeSelection();
cellsToGo=_st(_st(_st(self["@monsterToPlay"])._parent())._movableNeighboursCycle_(_st(self["@monsterToPlay"])._move()))._remove_(_st(self["@monsterToPlay"])._parent());
_st(cellsToGo)._ifEmpty_((function(){
return smalltalk.withContext(function($ctx2) {
$1=_st(self)._checkForNextTurn_(self["@monsterToPlay"]);
throw $early=[$1];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
self["@cellToTarget"]=_st(_st(cellsToGo)._asArray())._atRandom();
return self}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"randomMove",{cellsToGo:cellsToGo},smalltalk.CWAggressWeakestAI)})},
messageSends: ["at:", "atRandom", "size", "team", "removeSelection", "root", "remove:", "parent", "movableNeighboursCycle:", "move", "ifEmpty:", "checkForNextTurn:", "asArray"]}),
smalltalk.CWAggressWeakestAI);

smalltalk.addMethod(
smalltalk.method({
selector: "reinitialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@monsterToPlay"]=nil;
self["@cellToTarget"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"reinitialize",{},smalltalk.CWAggressWeakestAI)})},
messageSends: []}),
smalltalk.CWAggressWeakestAI);

smalltalk.addMethod(
smalltalk.method({
selector: "startTurn:",
fn: function (map){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=_st(_st(self)._team())._isEmpty();
if(smalltalk.assert($1)){
$2=self;
return $2;
};
smalltalk.CWAI.fn.prototype._startTurn_.apply(_st(self), [map]);
_st((function(){
return smalltalk.withContext(function($ctx2) {
_st(self)._reinitialize();
_st(self)._calculBestMove();
$3=self["@monsterToPlay"];
if(($receiver = $3) == nil || $receiver == undefined){
_st(self)._randomMove();
} else {
$3;
};
return _st(self)._executeBestMove();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._valueWithTimeout_(_st(self)._time());
return self}, function($ctx1) {$ctx1.fill(self,"startTurn:",{map:map},smalltalk.CWAggressWeakestAI)})},
messageSends: ["ifTrue:", "isEmpty", "team", "startTurn:", "valueWithTimeout:", "time", "reinitialize", "calculBestMove", "ifNil:", "randomMove", "executeBestMove"]}),
smalltalk.CWAggressWeakestAI);

smalltalk.addMethod(
smalltalk.method({
selector: "time",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(500);
return $1;
}, function($ctx1) {$ctx1.fill(self,"time",{},smalltalk.CWAggressWeakestAI)})},
messageSends: []}),
smalltalk.CWAggressWeakestAI);



smalltalk.addClass('CWHuman', smalltalk.CWPlayer, [], 'Easnoth-Game');


smalltalk.addMethod(
smalltalk.method({
selector: "at:ifPresent:ifAbsent:",
fn: function (index,aBlock,anotherBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=_st(_st(index).__lt_eq(_st(self)._size()))._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(index).__gt((0));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
if(smalltalk.assert($2)){
$1=_st(aBlock)._value_(_st(self)._at_(index));
} else {
$1=_st(anotherBlock)._value();
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"at:ifPresent:ifAbsent:",{index:index,aBlock:aBlock,anotherBlock:anotherBlock},smalltalk.SequenceableCollection)})},
messageSends: ["ifTrue:ifFalse:", "value:", "at:", "value", "and:", ">", "<=", "size"]}),
smalltalk.SequenceableCollection);

