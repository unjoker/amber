smalltalk.addPackage('HTMLCanvas-Widget');
smalltalk.addClass('CanvasWidget', smalltalk.Object, ['parentNode'], 'HTMLCanvas-Widget');
smalltalk.addMethod(
smalltalk.method({
selector: "draw",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"draw",{},smalltalk.CanvasWidget)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.CanvasWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "isRootWidget",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@parentNode"])._isNil();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isRootWidget",{},smalltalk.CanvasWidget)})},
messageSends: ["isNil"]}),
smalltalk.CanvasWidget);



smalltalk.addClass('CWLeaf', smalltalk.CanvasWidget, [], 'HTMLCanvas-Widget');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._basicAccept_(aVisitor);
return self}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.CWLeaf)})},
messageSends: ["basicAccept:"]}),
smalltalk.CWLeaf);

smalltalk.addMethod(
smalltalk.method({
selector: "basicAccept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aVisitor)._visitLeaf_(self);
return self}, function($ctx1) {$ctx1.fill(self,"basicAccept:",{aVisitor:aVisitor},smalltalk.CWLeaf)})},
messageSends: ["visitLeaf:"]}),
smalltalk.CWLeaf);

smalltalk.addMethod(
smalltalk.method({
selector: "draw",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"draw",{},smalltalk.CWLeaf)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.CWLeaf);



smalltalk.addClass('CWImageLeaf', smalltalk.CWLeaf, ['image'], 'HTMLCanvas-Widget');


smalltalk.addClass('CWNode', smalltalk.CanvasWidget, ['widgets', 'coods'], 'HTMLCanvas-Widget');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._basicAccept_(aVisitor);
return self}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.CWNode)})},
messageSends: ["basicAccept:"]}),
smalltalk.CWNode);

smalltalk.addMethod(
smalltalk.method({
selector: "basicAccept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aVisitor)._visitNode_(self);
return self}, function($ctx1) {$ctx1.fill(self,"basicAccept:",{aVisitor:aVisitor},smalltalk.CWNode)})},
messageSends: ["visitNode:"]}),
smalltalk.CWNode);

smalltalk.addMethod(
smalltalk.method({
selector: "draw",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._widgets())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._draw();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"draw",{},smalltalk.CWNode)})},
messageSends: ["do:", "draw", "widgets"]}),
smalltalk.CWNode);



