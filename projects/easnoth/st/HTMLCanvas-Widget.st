Smalltalk current createPackage: 'HTMLCanvas-Widget'!
Object subclass: #CanvasWidget
	instanceVariableNames: 'parentNode'
	package: 'HTMLCanvas-Widget'!

!CanvasWidget methodsFor: 'rendering'!

draw
		self subclassResponsibility
! !

!CanvasWidget methodsFor: 'testing'!

isRootWidget
	^ parentNode isNil
! !

CanvasWidget subclass: #CWLeaf
	instanceVariableNames: ''
	package: 'HTMLCanvas-Widget'!

!CWLeaf methodsFor: 'rendering'!

draw
	self subclassResponsibility
! !

!CWLeaf methodsFor: 'visiting'!

accept: aVisitor
	self basicAccept: aVisitor
!

basicAccept: aVisitor
	aVisitor visitLeaf: self
! !

CWLeaf subclass: #CWImageLeaf
	instanceVariableNames: 'image'
	package: 'HTMLCanvas-Widget'!

CanvasWidget subclass: #CWNode
	instanceVariableNames: 'widgets coods'
	package: 'HTMLCanvas-Widget'!

!CWNode methodsFor: 'rendering'!

draw
	self widgets do: [ :each |
		each draw ].
! !

!CWNode methodsFor: 'visiting'!

accept: aVisitor
	self basicAccept: aVisitor
!

basicAccept: aVisitor
	aVisitor visitNode: self
! !

