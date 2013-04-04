smalltalk.addPackage('HTMLCanvas-Widget');
smalltalk.addClass('CanvasWidget', smalltalk.Object, ['parentNode'], 'HTMLCanvas-Widget');
smalltalk.addMethod(
smalltalk.method({
selector: "draw",
category: 'rendering',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"draw",{},smalltalk.CanvasWidget)})},
args: [],
source: "draw\x0a\x09\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.CanvasWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "isRootWidget",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@parentNode"])._isNil();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isRootWidget",{},smalltalk.CanvasWidget)})},
args: [],
source: "isRootWidget\x0a\x09^ parentNode isNil",
messageSends: ["isNil"],
referencedClasses: []
}),
smalltalk.CanvasWidget);



smalltalk.addClass('CWLeaf', smalltalk.CanvasWidget, [], 'HTMLCanvas-Widget');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._basicAccept_(aVisitor);
return self}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.CWLeaf)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09self basicAccept: aVisitor",
messageSends: ["basicAccept:"],
referencedClasses: []
}),
smalltalk.CWLeaf);

smalltalk.addMethod(
smalltalk.method({
selector: "basicAccept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aVisitor)._visitLeaf_(self);
return self}, function($ctx1) {$ctx1.fill(self,"basicAccept:",{aVisitor:aVisitor},smalltalk.CWLeaf)})},
args: ["aVisitor"],
source: "basicAccept: aVisitor\x0a\x09aVisitor visitLeaf: self",
messageSends: ["visitLeaf:"],
referencedClasses: []
}),
smalltalk.CWLeaf);

smalltalk.addMethod(
smalltalk.method({
selector: "draw",
category: 'rendering',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"draw",{},smalltalk.CWLeaf)})},
args: [],
source: "draw\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.CWLeaf);



smalltalk.addClass('CWImageLeaf', smalltalk.CWLeaf, ['image'], 'HTMLCanvas-Widget');


smalltalk.addClass('CWNode', smalltalk.CanvasWidget, ['widgets', 'coods'], 'HTMLCanvas-Widget');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._basicAccept_(aVisitor);
return self}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.CWNode)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09self basicAccept: aVisitor",
messageSends: ["basicAccept:"],
referencedClasses: []
}),
smalltalk.CWNode);

smalltalk.addMethod(
smalltalk.method({
selector: "basicAccept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aVisitor)._visitNode_(self);
return self}, function($ctx1) {$ctx1.fill(self,"basicAccept:",{aVisitor:aVisitor},smalltalk.CWNode)})},
args: ["aVisitor"],
source: "basicAccept: aVisitor\x0a\x09aVisitor visitNode: self",
messageSends: ["visitNode:"],
referencedClasses: []
}),
smalltalk.CWNode);

smalltalk.addMethod(
smalltalk.method({
selector: "draw",
category: 'rendering',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._widgets())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._draw();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"draw",{},smalltalk.CWNode)})},
args: [],
source: "draw\x0a\x09self widgets do: [ :each |\x0a\x09\x09each draw ].",
messageSends: ["do:", "draw", "widgets"],
referencedClasses: []
}),
smalltalk.CWNode);



