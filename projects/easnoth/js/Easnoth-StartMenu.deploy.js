smalltalk.addPackage('Easnoth-StartMenu');
smalltalk.addClass('CWStartMenu', smalltalk.Widget, ['box'], 'Easnoth-StartMenu');
smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$5,$6,$7,$3,$8;
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
_st($4)._with_("tutorial");
$5=_st($4)._onClick_((function(){
return smalltalk.withContext(function($ctx5) {
return _st(window)._alert_("for future use");
}, function($ctx5) {$ctx5.fillBlock({},$ctx1)})}));
return $5;
}, function($ctx4) {$ctx4.fillBlock({},$ctx1)})}));
return _st(_st(html)._li())._with_((function(){
return smalltalk.withContext(function($ctx4) {
$6=_st(html)._a();
_st($6)._href_("#");
_st($6)._with_("run beta");
$7=_st($6)._onClick_((function(){
return smalltalk.withContext(function($ctx5) {
return _st(self)._startBeta();
}, function($ctx5) {$ctx5.fillBlock({},$ctx1)})}));
return $7;
}, function($ctx4) {$ctx4.fillBlock({},$ctx1)})}));
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
return $3;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$8=_st($1)._yourself();
self["@box"]=$8;
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.CWStartMenu)})},
messageSends: ["class:", "div", "with:", "h1", "ul", "href:", "a", "onClick:", "alert:", "li", "startBeta", "yourself"]}),
smalltalk.CWStartMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "startBeta",
fn: function (){
var self=this;
function $CWBootstrapper(){return smalltalk.CWBootstrapper||(typeof CWBootstrapper=="undefined"?nil:CWBootstrapper)}
return smalltalk.withContext(function($ctx1) { 
_st(self["@box"])._hidden();
_st($CWBootstrapper())._bootstrap_((5));
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


