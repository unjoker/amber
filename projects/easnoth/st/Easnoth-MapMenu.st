Smalltalk current createPackage: 'Easnoth-MapMenu'!
Widget subclass: #CWWidget
	instanceVariableNames: 'parent'
	package: 'Easnoth-MapMenu'!

!CWWidget methodsFor: 'accessing'!

announcer
	^ CWEasnothAnnouncer current
!

children
	self subclassResponsibility
!

parent
	^ parent
!

parent: object
	parent := object
!

root
	self isRoot ifTrue: [ ^ self ].
	^ self parent root
! !

!CWWidget methodsFor: 'events'!

announce: anEvent
	self announcer announce: anEvent
! !

!CWWidget methodsFor: 'testing'!

isRoot
	^ false
! !

CWWidget subclass: #CWActionMenu
	instanceVariableNames: 'components'
	package: 'Easnoth-MapMenu'!

!CWActionMenu methodsFor: 'accessing'!

addComponent: aClass
	self components add: (self newChild: aClass)
!

children
	^ self components
!

components
	^ components
! !

!CWActionMenu methodsFor: 'factory'!

newChild: aClass
	^ aClass new parent: self
! !

!CWActionMenu methodsFor: 'initialize-release'!

initialize
	super initialize.
	components := Array new
!

initializeWithGame: aGame
	self subclassResponsibility
! !

!CWActionMenu methodsFor: 'rendering'!

renderOn: html
	self components do: [:each |
		each renderOn: html ].
! !

!CWActionMenu methodsFor: 'testing'!

isRoot
	^ true
! !

CWActionMenu subclass: #CWFightMenu
	instanceVariableNames: ''
	package: 'Easnoth-MapMenu'!

!CWFightMenu methodsFor: 'accessing'!

menuClass
	^ '.menuEditor'
! !

!CWFightMenu methodsFor: 'initialize-release'!

initialize
	super initialize.
	self addComponent: CWMonsterWatcher.
	self addComponent: CWDices.
	self addComponent: CWMapControls.
	self addComponent: CWTurnWatcher.
	self appendToJQuery: self menuClass asJQuery.
	self announcer
		on: CWEndGameEvent
		do: [ self menuClass asJQuery empty ]
! !

CWWidget subclass: #CWActionMenuComponent
	instanceVariableNames: ''
	package: 'Easnoth-MapMenu'!

!CWActionMenuComponent methodsFor: 'accessing'!

children
	^ #()
! !

CWActionMenuComponent subclass: #CWDices
	instanceVariableNames: 'box'
	package: 'Easnoth-MapMenu'!
!CWDices commentStamp!
SHOULD HAVE DICES AS IV AND THEN USE NORMAL TREE STUFF TO DRAW.!

!CWDices methodsFor: 'initialize-release'!

firstLoad
    box contents: [ :html | 
	html h4 with: 'Fight result'.
           CWDiceDeath new renderOn: html callback: [ ].
           CWDiceMiss new renderOn: html callback: [ ] ].
!

initialize
	super initialize.
	self announcer 
		on: CWDicesRolledEvent
		do: [ :event | self showDices: event ].
	self announcer 
		on: CWMonsterUpdateEvent
		do: [ :event | self showDicesNoAnimation: event monster ]
!

renderOn: html
	box := (html div 
		class: 'dices';
		yourself).
	self firstLoad
! !

!CWDices methodsFor: 'private'!

updateDices: dicesNb kills: kills callBack: cb
	"animate the dices and display them in random order"

	| tmp dices i callback |
	dices := Array new: dicesNb.
	i := 0.
	callback := [
		i := i + 1. 
		(i = dicesNb) 
			ifTrue: cb].

	1 to: kills do: [ :k | dices at: k put: (CWDiceDeath new parent: self) ].
	kills + 1 to: dicesNb do: [ :j | dices at: j put: (CWDiceMiss new parent: self) ].

    box contents: [:html | 
		html h4 with: 'Fight result'.
		1 to: dicesNb do: [
			tmp := dices atRandom.
			tmp renderOn: html callback: callback.
			dices remove: tmp ] ]
! !

!CWDices methodsFor: 'public'!

showDices: aResDices
	| cb |
	cb := [ aResDices callback value: aResDices ].
	self updateDices: aResDices dices kills: aResDices kills callBack: cb.
!

showDicesNoAnimation: monster
	"should change the number of dices without animation"
	"monster ifNotNil: [
		box contents: [:html | 
			html h4 with: 'Fight result'.
			1 to: monster dices do: [
				CWDiceDeath new renderOn: html ] ] ]"
! !

CWActionMenuComponent subclass: #CWMapControls
	instanceVariableNames: ''
	package: 'Easnoth-MapMenu'!

!CWMapControls methodsFor: 'actions'!

go: direction
	self announce: (CWMapMoveEvent new directionMethod: direction)
! !

!CWMapControls methodsFor: 'rendering'!

renderOn: html
	html div 
		class: 'mapWatcher';
		width: 500;
		with: [
                html h4
                        with: 'map controls'.
                html button
                        with: 'left';
                        onClick: [self go: 'left'].
                html button
                        with: 'right';
                        onClick: [self go: 'right'].
                html button
                        with: 'down';
                        onClick: [self go: 'down'].
                html button
                        with: 'up';
                        onClick: [self go: 'up'].
	].
! !

CWActionMenuComponent subclass: #CWMonsterWatcher
	instanceVariableNames: 'monster box imgBox'
	package: 'Easnoth-MapMenu'!

!CWMonsterWatcher methodsFor: 'accessing'!

emptyMonster
	^ CWMonster emptyMonster
!

monster
	^ monster ifNil: [self emptyMonster]
! !

!CWMonsterWatcher methodsFor: 'initialize-release'!

initialize
	super initialize.
	self announcer 
		on: CWMonsterUpdateEvent
		do: [ :event | self watchMonster: event monster ]
!

watchMonster: aMonster
	monster = aMonster
		ifFalse: [ 
			monster := aMonster.
			self update ]
! !

!CWMonsterWatcher methodsFor: 'rendering'!

renderOn: html
	box := (html div 
		class: 'monsterWatcher';
		yourself).
	self update
!

update
	"I hide some stuff for release"

        box contents: [:html | 
		html h4 with: 'selected monster'.
				"html img: (self monster image at: 'src')."
                html table
			class: 'tableStats';
			with: [
			html tr with: [
				html td with: [
                        		html tr with: 'hp : ', self monster hp.
                        		html tr with: 'move : ', self monster currentMove, '/', self monster move.
                        		html tr with: 'range : ', self monster range.
				].
				html td with: [
                       			html tr with: 'dices : ', self monster dices.
                        		html tr with: 'attack : ', self monster attack,' %'.
                       			html tr with: 'special : ', self monster special.
				]
			].
		].
		"html h5 with: 'debug'.
                html span with: 'state : ', self monster state class.
				html br.
                html span with: 'attackPot : ', self monster attackPotential.
				html br.
                html span with: 'cell : ', self monster parent printString."
        ].
! !

CWActionMenuComponent subclass: #CWTurnWatcher
	instanceVariableNames: 'box'
	package: 'Easnoth-MapMenu'!

!CWTurnWatcher methodsFor: 'rendering'!

renderOn: html
	html div class: 'stuff'; with: [
		box := html h5.
                html button with: 'next turn';
                        onClick: [self announce: CWNextTurnEvent new].
		"'body' asJQuery keyup:[:event | (event keyCode = 13) ifTrue: [self nextTurn]]."
                html button with: 'class browser';
                        onClick: [Browser open].
				   html button with: 'menu';
                        onClick: [
							self announce: CWEndGameEvent new].
				html br.
				html iframe
					src: '//www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2FEasnoth&amp;send=false&amp;layout=box_count&amp;width=450&amp;show_faces=true&amp;font&amp;colorscheme=light&amp;action=like&amp;height=90&amp;appId=97614502002';
					at: 'frameborder' put: 0;
					at: 'scrolling' put: 'no';
					style:'border:none; overflow:hidden; width:90px; height:21px;';
					at: 'allowTransparency' put: 'true'.
	].
!

update
	self turnDisplay contents: 'turn number : ', self turnNumber.
! !

CWWidget subclass: #CWDice
	instanceVariableNames: ''
	package: 'Easnoth-MapMenu'!

!CWDice methodsFor: 'accessing'!

backgroundPictureUrl
	^	self diceRepo, 'diceBackground.png'
!

diceRepo
	^ 'ressources/images/fight/'
!

url
	self subclassResponsiblity
!

urlRoll
	^ self diceRepo, 'diceRoll.png'
! !

!CWDice methodsFor: 'rendering'!

animate: dice callBack: animationFinished
	"This method calls the jquery animation that is implemented in javascript
	To refactor later"
	
	| random url |

	random := 2 + 7 atRandom.
	url := self url.

	self animate: dice callBack: animationFinished random: random url: url
!

animate: dice callBack: animationFinished random: random url: url
<var i = 0;
    function roll() {
		dice.animate({'border-spacing': -40},
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
                                        dice.css('background-image', 'url(' + url + ')').css('background-position','1px 40px').css('background-repeat','no-repeat').animate({'border-spacing': -40},
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
	roll();>
!

renderOn: html
	(html img: self backgroundPictureUrl) asJQuery css: 'background' put: 'url(',self url,') 1px 40px'
!

renderOn: html callback: cb
	 self animate: ((html img: self backgroundPictureUrl) asJQuery css: 'background' put: 'url(', self urlRoll, ') 1px 0') callBack: cb
! !

CWDice subclass: #CWDiceDeath
	instanceVariableNames: ''
	package: 'Easnoth-MapMenu'!

!CWDiceDeath methodsFor: 'accessing'!

url
	^ self diceRepo, 'diceDeath.png'
! !

CWDice subclass: #CWDiceMiss
	instanceVariableNames: ''
	package: 'Easnoth-MapMenu'!

!CWDiceMiss methodsFor: 'accessing'!

url
	^ self diceRepo, 'diceMiss.png'
! !

