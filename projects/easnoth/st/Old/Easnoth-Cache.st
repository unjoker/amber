Smalltalk current createPackage: 'Easnoth-Cache' properties: #{}!
Dictionary subclass: #Cache
	instanceVariableNames: 'onload images monsters'
	package: 'Easnoth-Cache'!
!Cache commentStamp!
"singleton cache"!

!Cache methodsFor: 'accessing'!

images
	^images
!

images: anImageCache
	images := anImageCache
!

initialize
	super initialize.
	self images: (ImageCache newFor: self).
	self monsters: (MonsterCache newFor: self).
!

isLoaded
	|loaded|
	
	loaded := true.

	self images collect:[ :each|
				loaded := loaded & (each at: 'complete')].
	loaded := loaded & self monsters keys size even.

	loaded ifTrue:[self onload value.].
!

monsters
	^monsters
!

monsters: aMonsterCache
	monsters := aMonsterCache
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

Dictionary subclass: #CacheComponent
	instanceVariableNames: 'cache'
	package: 'Easnoth-Cache'!

!CacheComponent methodsFor: 'accessing'!

cache 
	^cache
!

cache: aCache
	cache := aCache
! !

!CacheComponent class methodsFor: 'instance-creation'!

newFor: aCache
	^self new
		cache: aCache;
		yourself
! !

CacheComponent subclass: #ImageCache
	instanceVariableNames: ''
	package: 'Easnoth-Cache'!

!ImageCache methodsFor: 'caching'!

addImageFromKey: aKey fromDrawedObject: aDrawedObject
	|imageNew|

	imageNew := <new Image()>.
       	self at: aKey put: imageNew.
        imageNew at: 'onload' put: [self cache isLoaded].
        imageNew at: 'src' put:  'ressources/images/', aDrawedObject folderName, '/', aKey, '.png'.

	^imageNew
!

putImageWithKey: aKey inDrawedObject: aDrawedObject
	aDrawedObject image: (self at: aKey ifAbsent:[
		self addImageFromKey: aKey fromDrawedObject: aDrawedObject])
! !

CacheComponent subclass: #MonsterCache
	instanceVariableNames: ''
	package: 'Easnoth-Cache'!

!MonsterCache methodsFor: 'caching'!

addStatsFromKey: aKey inMonster: aMonster
	|success keySuccess callBack|
	
        success := [:statsNew | 
		self at: aKey put: statsNew.
                aMonster stats: (self at: aKey).
                self cache isLoaded.
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
			self cache isLoaded].
	(self includesKey: aKey) ifTrue: [aMonster stats: (self at: aKey)].
! !

