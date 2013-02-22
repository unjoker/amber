Smalltalk current createPackage: 'Easnoth-Core-Tools' properties: #{}!
Dictionary subclass: #Cache
	instanceVariableNames: 'onload'
	package: 'Easnoth-Core-Tools'!
!Cache commentStamp!
"singleton cache for images"!

!Cache methodsFor: 'accessing'!

isLoaded
	|loaded ic mc|
	
	ic := ImageCache getSingleton.
	mc := MonsterCache getSingleton.
	loaded := true.

	ic collect:[ :each|
				loaded := loaded & (each at: 'complete')].
	loaded := loaded & mc keys size even.
	loaded ifTrue:[ic onload value.].
!

onload
	^onload
!

onload: aBlock
	onload := aBlock
! !

Cache class instanceVariableNames: 'cache'!

!Cache class methodsFor: 'initialize'!

getSingleton
	^cache ifNil:[cache := self new.]
! !

Cache subclass: #ImageCache
	instanceVariableNames: ''
	package: 'Easnoth-Core-Tools'!

!ImageCache methodsFor: 'caching'!

addImageFromKey: aKey fromDrawedObject: aDrawedObject
	|imageNew|

	imageNew := <new Image()>.
       	self at: aKey put: imageNew.
        imageNew at: 'onload' put: [self isLoaded].
        imageNew at: 'src' put:  'ressources/images/', aDrawedObject folderName, '/', aKey, '.png'.

	^imageNew
!

putImageWithKey: aKey inDrawedObject: aDrawedObject
	aDrawedObject image: (self at: aKey ifAbsent:[
		self addImageFromKey: aKey fromDrawedObject: aDrawedObject])
! !

Cache subclass: #MonsterCache
	instanceVariableNames: ''
	package: 'Easnoth-Core-Tools'!

!MonsterCache methodsFor: 'caching'!

addStatsFromKey: aKey inMonster: aMonster
	|success keySuccess callBack|
	
        success := [:statsNew | 
		self at: aKey put: statsNew.
                aMonster stats: (self at: aKey).
                self isLoaded.
        ].
	
	keySuccess := aKey,'success'.
       	self at: keySuccess put: success.
	callBack := [:data | [self at: keySuccess] value value: data].

	<$.getJSON('ressources/json/monsters/' + aKey + '.json', callBack)>.
!

putStatsWithKey: aKey inMonster: aMonster
	(self includesKey: aKey,'success') ifTrue: [
		self updateStatsFromKey: aKey inMonster: aMonster.
	] ifFalse: [
		self addStatsFromKey: aKey inMonster: aMonster.
	]
!

updateStatsFromKey: aKey inMonster: aMonster
	|keySuccess oldCallBack|

	keySuccess := aKey,'success'.
	oldCallBack := self at: keySuccess.
	self at: keySuccess put: [:statsNew | 
			aMonster stats: statsNew. 
			oldCallBack value: statsNew. 
			self isLoaded].
	(self includesKey: aKey) ifTrue: [aMonster stats: (self at: aKey)].
! !

