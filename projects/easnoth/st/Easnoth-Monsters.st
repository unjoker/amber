Smalltalk current createPackage: 'Easnoth-Monsters'!
Object subclass: #CWStrategy
	instanceVariableNames: ''
	package: 'Easnoth-Monsters'!
!CWStrategy commentStamp!
Just here for the sngleton pattern :)!

CWStrategy class instanceVariableNames: 'default'!

!CWStrategy class methodsFor: 'instance creation'!

default
	^ default ifNil: [ default := self new ]
! !

CWStrategy subclass: #CWMonsterStrategy
	instanceVariableNames: ''
	package: 'Easnoth-Monsters'!
!CWMonsterStrategy commentStamp!
Implements different strategies if the monster is a heros or a unit!

!CWMonsterStrategy methodsFor: 'monster strategy API'!

accept: aVisitor for: aMonster
	self subclassResponsibility
!

defaultHP
	self subclassResponsibility
!

key
	self subclassResponsibility
! !

CWMonsterStrategy subclass: #CWHerosStrategy
	instanceVariableNames: ''
	package: 'Easnoth-Monsters'!

!CWHerosStrategy methodsFor: 'monster strategy API'!

accept: aVisitor for: aMonster
	^ aVisitor visitHeros: aMonster
!

defaultHP
	^ 2
!

key
	^ '-heros'
! !

CWMonsterStrategy subclass: #CWUnitStrategy
	instanceVariableNames: ''
	package: 'Easnoth-Monsters'!

!CWUnitStrategy methodsFor: 'monster strategy API'!

accept: aVisitor for: aMonster
	^ aVisitor visitUnit: aMonster
!

defaultHP
	^ 4
!

key
	^ ''
! !

CWStrategy subclass: #CWMonsterTypeStrategy
	instanceVariableNames: ''
	package: 'Easnoth-Monsters'!
!CWMonsterTypeStrategy commentStamp!
Implements different strategies if the heros is archer, troop or cavalry!

!CWMonsterTypeStrategy methodsFor: 'type strategy API'!

key
	self subclassResponsibility
!

monster: aMonster attackNeighbour: anotherMonster inContext: gameContext
	self subclassResponsibility
!

monster: targetMonster isAttackedByCavalry: aMonster inContext: gameContext
	self subclassResponsibility
!

monster: targetMonster isAttackedByRange: aMonster inContext: gameContext
	self subclassResponsibility
!

monster: targetMonster isAttackedByTroop: aMonster inContext: gameContext
	self subclassResponsibility
! !

CWMonsterTypeStrategy subclass: #CWCavalryStrategy
	instanceVariableNames: ''
	package: 'Easnoth-Monsters'!

!CWCavalryStrategy methodsFor: 'type strategy API'!

key
	^ 'cavalry'
!

monster: aCavalry attackNeighbour: anotherMonster inContext: gameContext
	^ anotherMonster isAttackedByCavalry: aCavalry inContext: gameContext
!

monster: targetMonster isAttackedByCavalry: aMonster inContext: gameContext
	^ aMonster attack: targetMonster inContext: gameContext bonus: 0
!

monster: targetMonster isAttackedByRange: aMonster inContext: gameContext
	^ aMonster attack: targetMonster inContext: gameContext bonus: -1
!

monster: targetMonster isAttackedByTroop: aMonster inContext: gameContext
	^ aMonster attack: targetMonster inContext: gameContext bonus: 1
! !

CWMonsterTypeStrategy subclass: #CWRangeStrategy
	instanceVariableNames: ''
	package: 'Easnoth-Monsters'!

!CWRangeStrategy methodsFor: 'type strategy API'!

key
	^ 'range'
!

monster: aRange attackNeighbour: anotherMonster inContext: gameContext
	^ anotherMonster isAttackedByRange: aRange inContext: gameContext
!

monster: targetMonster isAttackedByCavalry: aMonster inContext: gameContext
	^ aMonster attack: targetMonster inContext: gameContext bonus: 1
!

monster: targetMonster isAttackedByRange: aMonster inContext: gameContext
	^ aMonster attack: targetMonster inContext: gameContext bonus: 0
!

monster: targetMonster isAttackedByTroop: aMonster inContext: gameContext
	^ aMonster attack: targetMonster inContext: gameContext bonus: -1
! !

CWMonsterTypeStrategy subclass: #CWTroopStrategy
	instanceVariableNames: ''
	package: 'Easnoth-Monsters'!

!CWTroopStrategy methodsFor: 'type strategy API'!

key
	^ 'troop'
!

monster: aTroop attackNeighbour: anotherMonster inContext: gameContext
	^ anotherMonster isAttackedByTroop: aTroop inContext: gameContext
!

monster: targetMonster isAttackedByCavalry: aMonster inContext: gameContext
	^ aMonster attack: targetMonster inContext: gameContext bonus: -1
!

monster: targetMonster isAttackedByRange: aMonster inContext: gameContext
	^ aMonster attack: targetMonster inContext: gameContext bonus: 1
!

monster: targetMonster isAttackedByTroop: aMonster inContext: gameContext
	^ aMonster attack: targetMonster inContext: gameContext bonus: 0
! !

