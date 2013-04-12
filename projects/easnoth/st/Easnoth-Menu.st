Smalltalk current createPackage: 'Easnoth-Menu'!
Widget subclass: #CWDicesResult
	instanceVariableNames: 'dices kills'
	package: 'Easnoth-Menu'!

!CWDicesResult methodsFor: 'accessing'!

dices
	^ dices
!

dices: int
	dices := int
!

kills
	^ kills
!

kills: int
	kills := int
! !

Widget subclass: #CWWidget
	instanceVariableNames: 'parent'
	package: 'Easnoth-Menu'!

!CWWidget methodsFor: 'accessing'!

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

!CWWidget methodsFor: 'testing'!

isRoot
	^ false
! !

CWWidget subclass: #CWActionMenu
	instanceVariableNames: 'components'
	package: 'Easnoth-Menu'!

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

!CWActionMenu class methodsFor: 'instance creation'!

newFor: aGame
	^ self new
			initializeWithGame: aGame
			yourself
! !

CWActionMenu subclass: #CWFightMenu
	instanceVariableNames: ''
	package: 'Easnoth-Menu'!

!CWFightMenu methodsFor: 'accessing'!

menuClass
	^ '.menuEditor'
! !

!CWFightMenu methodsFor: 'initialize-release'!

initialize
	super initialize.
	self addComponent: CWMonsterWatcher.
	self addComponent: CWDices.
	self addComponent: CWTileWatcher.
	self addComponent: CWMapControls.
	self addComponent: CWTurnWatcher.
	self appendToJQuery: self menuClass asJQuery.
!

initializeWithGame: aGame
	self components last initializeWithGame: aGame.
	self appendToJQuery: self menuClass asJQuery.
! !

CWWidget subclass: #CWActionMenuComponent
	instanceVariableNames: ''
	package: 'Easnoth-Menu'!

!CWActionMenuComponent methodsFor: 'accessing'!

children
	^ #()
! !

CWActionMenuComponent subclass: #CWDices
	instanceVariableNames: 'box'
	package: 'Easnoth-Menu'!
!CWDices commentStamp!
SHOULD HAVE DICES AS IV AND THEN USE NORMAL TREE STUFF TO DRAW.!

!CWDices methodsFor: 'initialize-release'!

firstLoad
    box contents: [ :html | 
	html h4 with: 'Fight result'.
           CWDiceDeath new renderOn: html.
           CWDiceMiss new renderOn: html ].
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
	i := 1.
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

showDices: aResDices callback: cb
	|kill knockBack|

	kill := aResDices x.
	knockBack := aResDices y.

	self updateDices: aResDices dices kills: aResDices kill callBack: cb.
! !

CWActionMenuComponent subclass: #CWMapControls
	instanceVariableNames: ''
	package: 'Easnoth-Menu'!

!CWMapControls methodsFor: 'rendering'!

renderOn: html
	html div 
		class: 'mapWatcher';
		with: [
                "html h4
                        with: 'map controls'.
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
                        onClick: [self actionMenu map goUp]."
		"html span 
			with: '-'.
                html button
                        with: 'mh';
                        onClick: [self actionMenu map mirrorHorizontal].
                html button
                        with: 'vh';
                        onClick: [self actionMenu map mirrorVertical]."
	].
! !

CWActionMenuComponent subclass: #CWMonsterWatcher
	instanceVariableNames: 'monster box'
	package: 'Easnoth-Menu'!

CWActionMenuComponent subclass: #CWTileWatcher
	instanceVariableNames: 'tile box'
	package: 'Easnoth-Menu'!

CWActionMenuComponent subclass: #CWTurnWatcher
	instanceVariableNames: 'box nextTurn'
	package: 'Easnoth-Menu'!

!CWTurnWatcher methodsFor: 'rendering'!

initializeWithGame: aGame
	nextTurn := [ aGame nextTurn ].
!

renderOn: html
	html div class: 'stuff'; with: [
		box := html h5.
                html button with: 'next turn';
                        onClick: [nextTurn value].
		"'body' asJQuery keyup:[:event | (event keyCode = 13) ifTrue: [self nextTurn]]."
                html button with: 'class browser';
                        onClick: [Browser open].
	].
	"self update."
!

update
	self turnDisplay contents: 'turn number : ', self turnNumber.
! !

CWWidget subclass: #CWDice
	instanceVariableNames: ''
	package: 'Easnoth-Menu'!

!CWDice methodsFor: 'accessing'!

backgroundPictureUrl
	^	self diceRepo, 'diceBackground.png'
!

diceRepo
	^ 'ressources/images/fight/'
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
	roll();>
!

renderOn: html callback: cb
	 self animate: ((html img: self backgroundPictureUrl) asJQuery css: 'background' put: 'url("ressources/images/fight/diceRoll.png") 1px 0') callBack: cb
! !

CWDice subclass: #CWDiceDeath
	instanceVariableNames: ''
	package: 'Easnoth-Menu'!

!CWDiceDeath methodsFor: 'accessing'!

url
	^ self diceRepo, 'diceDeath.png'
! !

CWDice subclass: #CWDiceMiss
	instanceVariableNames: ''
	package: 'Easnoth-Menu'!

!CWDiceMiss methodsFor: 'accessing'!

url
	^ self diceRepo, 'diceMiss.png'
! !

