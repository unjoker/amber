Smalltalk current createPackage: 'Easnoth-Monsters'!
Object subclass: #CWStrategy
	instanceVariableNames: ''
	package: 'Easnoth-Monsters'!

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
! !

CWMonsterTypeStrategy subclass: #CWCavalryStrategy
	instanceVariableNames: ''
	package: 'Easnoth-Monsters'!

!CWCavalryStrategy methodsFor: 'type strategy API'!

key
	^ 'cavalry'
! !

CWMonsterTypeStrategy subclass: #CWRangeStrategy
	instanceVariableNames: ''
	package: 'Easnoth-Monsters'!

!CWRangeStrategy methodsFor: 'type strategy API'!

key
	^ 'range'
! !

CWMonsterTypeStrategy subclass: #CWTroopStrategy
	instanceVariableNames: ''
	package: 'Easnoth-Monsters'!

!CWTroopStrategy methodsFor: 'type strategy API'!

key
	^ 'troop'
! !

