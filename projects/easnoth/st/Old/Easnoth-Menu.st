Smalltalk current createPackage: 'Easnoth-Menu' properties: #{}!
Widget subclass: #ActionMenu
	instanceVariableNames: 'map components'
	package: 'Easnoth-Menu'!

!ActionMenu methodsFor: 'accessing'!

addComponent: aComponent
	self components add: aComponent
!

components
	^components
!

components: aCol
	components := aCol
!

map
	^map
!

map: aMap
	map := aMap
! !

!ActionMenu methodsFor: 'initialize-release'!

initialize
	self components: Array new
!

renderOn: html
	self components collect: [:each |
		each renderOn: html ].
! !

!ActionMenu class methodsFor: 'instance-creation'!

newFor: aMap
	^self new
		map: aMap;
		yourself.
! !

ActionMenu subclass: #FightMenu
	instanceVariableNames: 'actionCell'
	package: 'Easnoth-Menu'!

!FightMenu methodsFor: 'accessing'!

actionCell
	^actionCell
!

actionCell: aCell
	actionCell := aCell
! !

!FightMenu methodsFor: 'initialize-release'!

initialize
	super initialize.
	self addComponent: (MonsterWatcher newFor: self).
	self addComponent: (MapWatcher newFor: self).
! !

Widget subclass: #ActionMenuComponent
	instanceVariableNames: 'actionMenu'
	package: 'Easnoth-Menu'!

!ActionMenuComponent methodsFor: 'accessing'!

actionMenu
	^actionMenu
!

actionMenu: aMenu
	actionMenu := aMenu
! !

!ActionMenuComponent class methodsFor: 'instance-creation'!

newFor: aMenu
	^self new
		actionMenu: aMenu;
		yourself.
! !

ActionMenuComponent subclass: #MapWatcher
	instanceVariableNames: ''
	package: 'Easnoth-Menu'!

!MapWatcher methodsFor: 'displaying'!

renderOn: html
	html div 
		class: 'mapWatcher';
		with: [
	html button
		with: 'left';
		onClick: [self actionMenu map goLeft].
	html button
		with: 'right';
		onClick: [self actionMenu map goRight].
	html button
		with: 'down';
		onClick: [self actionMenu map goDown].
	html button
		with: 'up';
		onClick: [self actionMenu map goUp].
	html button
		with: 'mh';
		onClick: [self actionMenu map mirrorHorizontal].
	html button
		with: 'vh';
		onClick: [self actionMenu map mirrorVertical].
	].
! !

ActionMenuComponent subclass: #MonsterWatcher
	instanceVariableNames: 'monster box'
	package: 'Easnoth-Menu'!

!MonsterWatcher methodsFor: 'accessing'!

box
	^box
!

box: aBox
	box := aBox
!

monster
	^monster
!

monster: aMonster
	monster := aMonster.
	self update
! !

!MonsterWatcher methodsFor: 'displaying'!

renderOn: html
	self box: (html div 
		class: 'monsterWatcher';
		yourself).
	self update
!

update
	self monster ifNotNil: [
                self box contents: [:html | 
                        html img: (self monster image at: 'src').
                        html ul with: [
                                html li 
                                        with: 'knockBack',self monster knockback.
                        ].
                ].
	].
! !

