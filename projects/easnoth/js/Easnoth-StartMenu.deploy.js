smalltalk.addPackage('Easnoth-StartMenu');
smalltalk.addClass('CWGameSettings', smalltalk.Widget, ['players', 'mapNumber'], 'Easnoth-StartMenu');


smalltalk.addClass('CWStartMenu', smalltalk.Widget, ['box', 'gameSettings'], 'Easnoth-StartMenu');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
function $CWGameSettings(){return smalltalk.CWGameSettings||(typeof CWGameSettings=="undefined"?nil:CWGameSettings)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.Widget.fn.prototype._initialize.apply(_st(self), []);
self["@gameSettings"]=_st($CWGameSettings())._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.CWStartMenu)})},
messageSends: ["initialize", "new"]}),
smalltalk.CWStartMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$3,$14;
$1=_st(html)._div();
_st($1)._class_("intro");
_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
_st(_st(html)._h1())._with_("Easnoth : Battle Arena");
$2=_st(html)._ul();
_st($2)._class_("menu");
$3=_st($2)._with_((function(){
return smalltalk.withContext(function($ctx3) {
_st(_st(html)._li())._with_((function(){
return smalltalk.withContext(function($ctx4) {
$4=_st(html)._a();
_st($4)._href_("#");
_st($4)._style_("color: #aaa");
_st($4)._with_("Tutorial");
$5=_st($4)._onClick_((function(){
return smalltalk.withContext(function($ctx5) {
return _st(window)._alert_("for future use");
}, function($ctx5) {$ctx5.fillBlock({},$ctx1)})}));
return $5;
}, function($ctx4) {$ctx4.fillBlock({},$ctx1)})}));
_st(_st(html)._li())._with_((function(){
return smalltalk.withContext(function($ctx4) {
$6=_st(html)._a();
_st($6)._href_("#");
_st($6)._style_("color: #aaa");
_st($6)._with_("Campaign");
$7=_st($6)._onClick_((function(){
return smalltalk.withContext(function($ctx5) {
return _st(window)._alert_("for future use");
}, function($ctx5) {$ctx5.fillBlock({},$ctx1)})}));
return $7;
}, function($ctx4) {$ctx4.fillBlock({},$ctx1)})}));
_st(_st(html)._li())._with_((function(){
return smalltalk.withContext(function($ctx4) {
$8=_st(html)._a();
_st($8)._href_("#");
_st($8)._with_("Custom game");
$9=_st($8)._onClick_((function(){
return smalltalk.withContext(function($ctx5) {
return _st(self)._startBeta();
}, function($ctx5) {$ctx5.fillBlock({},$ctx1)})}));
return $9;
}, function($ctx4) {$ctx4.fillBlock({},$ctx1)})}));
_st(_st(html)._li())._with_((function(){
return smalltalk.withContext(function($ctx4) {
$10=_st(html)._a();
_st($10)._href_("#");
_st($10)._with_("Network game");
_st($10)._style_("color: #aaa");
$11=_st($10)._onClick_((function(){
return smalltalk.withContext(function($ctx5) {
return _st(window)._alert_("for future use");
}, function($ctx5) {$ctx5.fillBlock({},$ctx1)})}));
return $11;
}, function($ctx4) {$ctx4.fillBlock({},$ctx1)})}));
return _st(_st(html)._li())._with_((function(){
return smalltalk.withContext(function($ctx4) {
$12=_st(html)._a();
_st($12)._href_("#");
_st($12)._with_("Credits");
_st($12)._style_("color: #aaa");
$13=_st($12)._onClick_((function(){
return smalltalk.withContext(function($ctx5) {
return _st(window)._alert_("for future use");
}, function($ctx5) {$ctx5.fillBlock({},$ctx1)})}));
return $13;
}, function($ctx4) {$ctx4.fillBlock({},$ctx1)})}));
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
return $3;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$14=_st($1)._yourself();
self["@box"]=$14;
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.CWStartMenu)})},
messageSends: ["class:", "div", "with:", "h1", "ul", "href:", "a", "style:", "onClick:", "alert:", "li", "startBeta", "yourself"]}),
smalltalk.CWStartMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "startBeta",
fn: function (){
var self=this;
function $CWBootstrapper(){return smalltalk.CWBootstrapper||(typeof CWBootstrapper=="undefined"?nil:CWBootstrapper)}
return smalltalk.withContext(function($ctx1) { 
_st(self["@box"])._hidden();
_st($CWBootstrapper())._bootstrap_((7));
return self}, function($ctx1) {$ctx1.fill(self,"startBeta",{},smalltalk.CWStartMenu)})},
messageSends: ["hidden", "bootstrap:"]}),
smalltalk.CWStartMenu);


smalltalk.addMethod(
smalltalk.method({
selector: "example",
fn: function (){
var self=this;
function $CWStartMenu(){return smalltalk.CWStartMenu||(typeof CWStartMenu=="undefined"?nil:CWStartMenu)}
return smalltalk.withContext(function($ctx1) { 
_st(_st($CWStartMenu())._new())._appendToJQuery_(_st("body")._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"example",{},smalltalk.CWStartMenu.klass)})},
messageSends: ["appendToJQuery:", "asJQuery", "new"]}),
smalltalk.CWStartMenu.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "start",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._new())._appendToJQuery_(_st("body")._asJQuery());
return $1;
}, function($ctx1) {$ctx1.fill(self,"start",{},smalltalk.CWStartMenu.klass)})},
messageSends: ["appendToJQuery:", "asJQuery", "new"]}),
smalltalk.CWStartMenu.klass);


