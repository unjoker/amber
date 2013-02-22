Smalltalk current createPackage: 'Easnoth-Tests' properties: #{}!
TestCase subclass: #EasnothTest
	instanceVariableNames: ''
	package: 'Easnoth-Tests'!

!EasnothTest methodsFor: 'testing-helper'!

emulateRessourceTest: aTest
	|image arr|

	image := <new Image()>.
	arr := (Array new: 1).
	arr at: 1 put: image.
	image at: 'onload' put: [Tile arrayImg: arr. aTest value].
	image at: 'src' put: 'specter.png'.
!

testBug
	self assert: true.
! !

EasnothTest subclass: #CellTest
	instanceVariableNames: ''
	package: 'Easnoth-Tests'!

!CellTest methodsFor: 'testing'!

testNew
	|cell cellArray coods|
	self emulateRessourceTest: [
                cellArray := #(#(1 1) #(1 1)).
                coods := #(5 12).
                cell := Cell newWithContext: 'aCtx' cellArray: cellArray coods: coods.
                self assert: cell x = 5.
                self assert: cell y = 12.
                self assert: cell tile class = Tile.
	].
! !

EasnothTest subclass: #MapTest
	instanceVariableNames: ''
	package: 'Easnoth-Tests'!

!MapTest methodsFor: 'testing'!

testNew
	|map|
	map := Map new.
	self assert: map canvas class = TagBrush.
!

testNewWithMapIndex
	|map cell|
	
self emulateRessourceTest: [
	map := Map newWithMapIndex: 1.

	"self assert: map mapX = 98.5."
	self assert: map mapY = 40.
	self assert: map cells size = 2.
	self assert: (map cells at: 1) size = 2.
	
	cell := (map cells at:1) at: 1.
	self assert: cell class = Cell.
	self assert: cell tile class = Tile.
].
! !

EasnothTest subclass: #TileTest
	instanceVariableNames: ''
	package: 'Easnoth-Tests'!

!TileTest methodsFor: 'testing'!

testNew
	|tile|
	self emulateRessourceTest: [
                tile := Tile newWithContext: 'aCtx' index: #(1 1).
                self assert: tile context = 'aCtx'.
		self assert: tile isWall = false.
	].
! !

