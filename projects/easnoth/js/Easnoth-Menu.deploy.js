smalltalk.addPackage('Easnoth-Menu');
smalltalk.addClass('CWDicesResult', smalltalk.Widget, ['dices', 'kills'], 'Easnoth-Menu');
smalltalk.addMethod(
smalltalk.method({
selector: "dices",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@dices"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"dices",{},smalltalk.CWDicesResult)})},
messageSends: []}),
smalltalk.CWDicesResult);

smalltalk.addMethod(
smalltalk.method({
selector: "dices:",
fn: function (int){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@dices"]=int;
return self}, function($ctx1) {$ctx1.fill(self,"dices:",{int:int},smalltalk.CWDicesResult)})},
messageSends: []}),
smalltalk.CWDicesResult);

smalltalk.addMethod(
smalltalk.method({
selector: "kills",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@kills"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"kills",{},smalltalk.CWDicesResult)})},
messageSends: []}),
smalltalk.CWDicesResult);

smalltalk.addMethod(
smalltalk.method({
selector: "kills:",
fn: function (int){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@kills"]=int;
return self}, function($ctx1) {$ctx1.fill(self,"kills:",{int:int},smalltalk.CWDicesResult)})},
messageSends: []}),
smalltalk.CWDicesResult);



smalltalk.addClass('CWWidget', smalltalk.Widget, ['parent'], 'Easnoth-Menu');
smalltalk.addMethod(
smalltalk.method({
selector: "children",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"children",{},smalltalk.CWWidget)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.CWWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "isRoot",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isRoot",{},smalltalk.CWWidget)})},
messageSends: []}),
smalltalk.CWWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "parent",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@parent"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"parent",{},smalltalk.CWWidget)})},
messageSends: []}),
smalltalk.CWWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "parent:",
fn: function (object){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@parent"]=object;
return self}, function($ctx1) {$ctx1.fill(self,"parent:",{object:object},smalltalk.CWWidget)})},
messageSends: []}),
smalltalk.CWWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "root",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=_st(self)._isRoot();
if(smalltalk.assert($1)){
$2=self;
return $2;
};
$3=_st(_st(self)._parent())._root();
return $3;
}, function($ctx1) {$ctx1.fill(self,"root",{},smalltalk.CWWidget)})},
messageSends: ["ifTrue:", "isRoot", "root", "parent"]}),
smalltalk.CWWidget);



smalltalk.addClass('CWActionMenu', smalltalk.CWWidget, ['components'], 'Easnoth-Menu');
smalltalk.addMethod(
smalltalk.method({
selector: "addComponent:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._components())._add_(_st(self)._newChild_(aClass));
return self}, function($ctx1) {$ctx1.fill(self,"addComponent:",{aClass:aClass},smalltalk.CWActionMenu)})},
messageSends: ["add:", "newChild:", "components"]}),
smalltalk.CWActionMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "children",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._components();
return $1;
}, function($ctx1) {$ctx1.fill(self,"children",{},smalltalk.CWActionMenu)})},
messageSends: ["components"]}),
smalltalk.CWActionMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "components",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@components"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"components",{},smalltalk.CWActionMenu)})},
messageSends: []}),
smalltalk.CWActionMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.CWWidget.fn.prototype._initialize.apply(_st(self), []);
self["@components"]=_st($Array())._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.CWActionMenu)})},
messageSends: ["initialize", "new"]}),
smalltalk.CWActionMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeWithGame:",
fn: function (aGame){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"initializeWithGame:",{aGame:aGame},smalltalk.CWActionMenu)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.CWActionMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "isRoot",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isRoot",{},smalltalk.CWActionMenu)})},
messageSends: []}),
smalltalk.CWActionMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "newChild:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(aClass)._new())._parent_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"newChild:",{aClass:aClass},smalltalk.CWActionMenu)})},
messageSends: ["parent:", "new"]}),
smalltalk.CWActionMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._components())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._renderOn_(html);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.CWActionMenu)})},
messageSends: ["do:", "renderOn:", "components"]}),
smalltalk.CWActionMenu);


smalltalk.addMethod(
smalltalk.method({
selector: "newFor:",
fn: function (aGame){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._new())._initializeWithGame_(_st(aGame)._yourself());
return $1;
}, function($ctx1) {$ctx1.fill(self,"newFor:",{aGame:aGame},smalltalk.CWActionMenu.klass)})},
messageSends: ["initializeWithGame:", "yourself", "new"]}),
smalltalk.CWActionMenu.klass);


smalltalk.addClass('CWFightMenu', smalltalk.CWActionMenu, [], 'Easnoth-Menu');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
function $CWMonsterWatcher(){return smalltalk.CWMonsterWatcher||(typeof CWMonsterWatcher=="undefined"?nil:CWMonsterWatcher)}
function $CWDices(){return smalltalk.CWDices||(typeof CWDices=="undefined"?nil:CWDices)}
function $CWTileWatcher(){return smalltalk.CWTileWatcher||(typeof CWTileWatcher=="undefined"?nil:CWTileWatcher)}
function $CWMapControls(){return smalltalk.CWMapControls||(typeof CWMapControls=="undefined"?nil:CWMapControls)}
function $CWTurnWatcher(){return smalltalk.CWTurnWatcher||(typeof CWTurnWatcher=="undefined"?nil:CWTurnWatcher)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.CWActionMenu.fn.prototype._initialize.apply(_st(self), []);
_st(self)._addComponent_($CWMonsterWatcher());
_st(self)._addComponent_($CWDices());
_st(self)._addComponent_($CWTileWatcher());
_st(self)._addComponent_($CWMapControls());
_st(self)._addComponent_($CWTurnWatcher());
_st(self)._appendToJQuery_(_st(_st(self)._menuClass())._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.CWFightMenu)})},
messageSends: ["initialize", "addComponent:", "appendToJQuery:", "asJQuery", "menuClass"]}),
smalltalk.CWFightMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeWithGame:",
fn: function (aGame){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(_st(self)._components())._last())._initializeWithGame_(aGame);
_st(self)._appendToJQuery_(_st(_st(self)._menuClass())._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"initializeWithGame:",{aGame:aGame},smalltalk.CWFightMenu)})},
messageSends: ["initializeWithGame:", "last", "components", "appendToJQuery:", "asJQuery", "menuClass"]}),
smalltalk.CWFightMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "menuClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return ".menuEditor";
}, function($ctx1) {$ctx1.fill(self,"menuClass",{},smalltalk.CWFightMenu)})},
messageSends: []}),
smalltalk.CWFightMenu);



smalltalk.addClass('CWActionMenuComponent', smalltalk.CWWidget, [], 'Easnoth-Menu');
smalltalk.addMethod(
smalltalk.method({
selector: "children",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=[];
return $1;
}, function($ctx1) {$ctx1.fill(self,"children",{},smalltalk.CWActionMenuComponent)})},
messageSends: []}),
smalltalk.CWActionMenuComponent);



smalltalk.addClass('CWDices', smalltalk.CWActionMenuComponent, ['box'], 'Easnoth-Menu');
smalltalk.addMethod(
smalltalk.method({
selector: "firstLoad",
fn: function (){
var self=this;
function $CWDiceDeath(){return smalltalk.CWDiceDeath||(typeof CWDiceDeath=="undefined"?nil:CWDiceDeath)}
function $CWDiceMiss(){return smalltalk.CWDiceMiss||(typeof CWDiceMiss=="undefined"?nil:CWDiceMiss)}
return smalltalk.withContext(function($ctx1) { 
_st(self["@box"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) {
_st(_st(html)._h4())._with_("Fight result");
_st(_st($CWDiceDeath())._new())._renderOn_(html);
return _st(_st($CWDiceMiss())._new())._renderOn_(html);
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"firstLoad",{},smalltalk.CWDices)})},
messageSends: ["contents:", "with:", "h4", "renderOn:", "new"]}),
smalltalk.CWDices);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._div();
_st($1)._class_("dices");
$2=_st($1)._yourself();
self["@box"]=$2;
_st(self)._firstLoad();
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.CWDices)})},
messageSends: ["class:", "div", "yourself", "firstLoad"]}),
smalltalk.CWDices);

smalltalk.addMethod(
smalltalk.method({
selector: "showDices:callback:",
fn: function (aResDices,cb){
var self=this;
var kill,knockBack;
return smalltalk.withContext(function($ctx1) { 
kill=_st(aResDices)._x();
knockBack=_st(aResDices)._y();
_st(self)._updateDices_kills_callBack_(_st(aResDices)._dices(),_st(aResDices)._kill(),cb);
return self}, function($ctx1) {$ctx1.fill(self,"showDices:callback:",{aResDices:aResDices,cb:cb,kill:kill,knockBack:knockBack},smalltalk.CWDices)})},
messageSends: ["x", "y", "updateDices:kills:callBack:", "dices", "kill"]}),
smalltalk.CWDices);

smalltalk.addMethod(
smalltalk.method({
selector: "updateDices:kills:callBack:",
fn: function (dicesNb,kills,cb){
var self=this;
var tmp,dices,i,callback;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
function $CWDiceDeath(){return smalltalk.CWDiceDeath||(typeof CWDiceDeath=="undefined"?nil:CWDiceDeath)}
function $CWDiceMiss(){return smalltalk.CWDiceMiss||(typeof CWDiceMiss=="undefined"?nil:CWDiceMiss)}
return smalltalk.withContext(function($ctx1) { 
var $1;
dices=_st($Array())._new_(dicesNb);
i=(1);
callback=(function(){
return smalltalk.withContext(function($ctx2) {
i=_st(i).__plus((1));
i;
$1=_st(i).__eq(dicesNb);
return _st($1)._ifTrue_(cb);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})});
_st((1))._to_do_(kills,(function(k){
return smalltalk.withContext(function($ctx2) {
return _st(dices)._at_put_(k,_st(_st($CWDiceDeath())._new())._parent_(self));
}, function($ctx2) {$ctx2.fillBlock({k:k},$ctx1)})}));
_st(_st(kills).__plus((1)))._to_do_(dicesNb,(function(j){
return smalltalk.withContext(function($ctx2) {
return _st(dices)._at_put_(j,_st(_st($CWDiceMiss())._new())._parent_(self));
}, function($ctx2) {$ctx2.fillBlock({j:j},$ctx1)})}));
_st(self["@box"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) {
_st(_st(html)._h4())._with_("Fight result");
return _st((1))._to_do_(dicesNb,(function(){
return smalltalk.withContext(function($ctx3) {
tmp=_st(dices)._atRandom();
tmp;
_st(tmp)._renderOn_callback_(html,callback);
return _st(dices)._remove_(tmp);
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"updateDices:kills:callBack:",{dicesNb:dicesNb,kills:kills,cb:cb,tmp:tmp,dices:dices,i:i,callback:callback},smalltalk.CWDices)})},
messageSends: ["new:", "+", "ifTrue:", "=", "to:do:", "at:put:", "parent:", "new", "contents:", "with:", "h4", "atRandom", "renderOn:callback:", "remove:"]}),
smalltalk.CWDices);



smalltalk.addClass('CWMapControls', smalltalk.CWActionMenuComponent, [], 'Easnoth-Menu');
smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._div();
_st($1)._class_("mapWatcher");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.CWMapControls)})},
messageSends: ["class:", "div", "with:"]}),
smalltalk.CWMapControls);



smalltalk.addClass('CWMonsterWatcher', smalltalk.CWActionMenuComponent, ['monster', 'box'], 'Easnoth-Menu');


smalltalk.addClass('CWTileWatcher', smalltalk.CWActionMenuComponent, ['tile', 'box'], 'Easnoth-Menu');


smalltalk.addClass('CWTurnWatcher', smalltalk.CWActionMenuComponent, ['box', 'nextTurn'], 'Easnoth-Menu');
smalltalk.addMethod(
smalltalk.method({
selector: "initializeWithGame:",
fn: function (aGame){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@nextTurn"]=(function(){
return smalltalk.withContext(function($ctx2) {
return _st(aGame)._nextTurn();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})});
return self}, function($ctx1) {$ctx1.fill(self,"initializeWithGame:",{aGame:aGame},smalltalk.CWTurnWatcher)})},
messageSends: ["nextTurn"]}),
smalltalk.CWTurnWatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
fn: function (html){
var self=this;
function $Browser(){return smalltalk.Browser||(typeof Browser=="undefined"?nil:Browser)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$5,$6,$2;
$1=_st(html)._div();
_st($1)._class_("stuff");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
self["@box"]=_st(html)._h5();
self["@box"];
$3=_st(html)._button();
_st($3)._with_("next turn");
$4=_st($3)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(self["@nextTurn"])._value();
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
$4;
$5=_st(html)._button();
_st($5)._with_("class browser");
$6=_st($5)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return _st($Browser())._open();
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
return $6;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.CWTurnWatcher)})},
messageSends: ["class:", "div", "with:", "h5", "button", "onClick:", "value", "open"]}),
smalltalk.CWTurnWatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "update",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._turnDisplay())._contents_(_st("turn number : ").__comma(_st(self)._turnNumber()));
return self}, function($ctx1) {$ctx1.fill(self,"update",{},smalltalk.CWTurnWatcher)})},
messageSends: ["contents:", ",", "turnNumber", "turnDisplay"]}),
smalltalk.CWTurnWatcher);



smalltalk.addClass('CWDice', smalltalk.CWWidget, [], 'Easnoth-Menu');
smalltalk.addMethod(
smalltalk.method({
selector: "animate:callBack:",
fn: function (dice,animationFinished){
var self=this;
var random,url;
return smalltalk.withContext(function($ctx1) { 
random=_st((2)).__plus(_st((7))._atRandom());
url=_st(self)._url();
_st(self)._animate_callBack_random_url_(dice,animationFinished,random,url);
return self}, function($ctx1) {$ctx1.fill(self,"animate:callBack:",{dice:dice,animationFinished:animationFinished,random:random,url:url},smalltalk.CWDice)})},
messageSends: ["+", "atRandom", "url", "animate:callBack:random:url:"]}),
smalltalk.CWDice);

smalltalk.addMethod(
smalltalk.method({
selector: "animate:callBack:random:url:",
fn: function (dice,animationFinished,random,url){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var i = 0;
    function roll() {
		dice.animate({'border-spacing': -100},
                        {step: function(now, fx) {
                                $(fx.elem).css('background-position', '1px '+now+'px');
                        },
                        duration: 200,
                        easing: 'linear',
                        complete: function (){
                                i++;
                                if (i< random){
                                        roll();
                                } else {
                                        i = 0;
                                        dice.css('background-image', 'url(' + url + ')').css('background-position','1px 100px').css('background-repeat','no-repeat').animate({'border-spacing': -100},
                                                {step: function(now, fx) {
                                                        $(fx.elem).css('background-position', '1px '+now+'px');
                                                        },
                                                        duration: 200,
                                                        easing: 'linear',
							complete: function(){
								animationFinished();
							}
                                                })
                                }
                        }
		})
	}
	roll();;
return self}, function($ctx1) {$ctx1.fill(self,"animate:callBack:random:url:",{dice:dice,animationFinished:animationFinished,random:random,url:url},smalltalk.CWDice)})},
messageSends: []}),
smalltalk.CWDice);

smalltalk.addMethod(
smalltalk.method({
selector: "backgroundPictureUrl",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._diceRepo()).__comma("diceBackground.png");
return $1;
}, function($ctx1) {$ctx1.fill(self,"backgroundPictureUrl",{},smalltalk.CWDice)})},
messageSends: [",", "diceRepo"]}),
smalltalk.CWDice);

smalltalk.addMethod(
smalltalk.method({
selector: "diceRepo",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "ressources/images/fight/";
}, function($ctx1) {$ctx1.fill(self,"diceRepo",{},smalltalk.CWDice)})},
messageSends: []}),
smalltalk.CWDice);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:callback:",
fn: function (html,cb){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._animate_callBack_(_st(_st(_st(html)._img_(_st(self)._backgroundPictureUrl()))._asJQuery())._css_put_("background","url(\x22ressources/images/fight/diceRoll.png\x22) 1px 0"),cb);
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:callback:",{html:html,cb:cb},smalltalk.CWDice)})},
messageSends: ["animate:callBack:", "css:put:", "asJQuery", "img:", "backgroundPictureUrl"]}),
smalltalk.CWDice);



smalltalk.addClass('CWDiceDeath', smalltalk.CWDice, [], 'Easnoth-Menu');
smalltalk.addMethod(
smalltalk.method({
selector: "url",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._diceRepo()).__comma("diceDeath.png");
return $1;
}, function($ctx1) {$ctx1.fill(self,"url",{},smalltalk.CWDiceDeath)})},
messageSends: [",", "diceRepo"]}),
smalltalk.CWDiceDeath);



smalltalk.addClass('CWDiceMiss', smalltalk.CWDice, [], 'Easnoth-Menu');
smalltalk.addMethod(
smalltalk.method({
selector: "url",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._diceRepo()).__comma("diceMiss.png");
return $1;
}, function($ctx1) {$ctx1.fill(self,"url",{},smalltalk.CWDiceMiss)})},
messageSends: [",", "diceRepo"]}),
smalltalk.CWDiceMiss);



