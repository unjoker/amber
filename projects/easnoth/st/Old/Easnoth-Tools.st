Smalltalk current createPackage: 'Easnoth-Tools' properties: #{}!
Dictionary subclass: #Cache
	instanceVariableNames: 'onload'
	package: 'Easnoth-Tools'!
!Cache commentStamp!
"singleton cache for images"!

!Cache methodsFor: 'accessing'!

isLoaded
	|loaded|

	loaded := true.
	self collect:[ :each|
				loaded := loaded & (each at: 'complete')].
	loaded ifTrue:[self onload value.].
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
	package: 'Easnoth-Tools'!

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
	package: 'Easnoth-Tools'!

!MonsterCache methodsFor: 'caching'!

addStatsFromKey: aKey
	|statsNew|

	statsNew := JSON parse: (XMLhttpRequestProxy getSingleton loadJSON:  'ressources/json/monsters/',aKey,'.json').
       	self at: aKey put: statsNew.

	^statsNew
!

putStatsWithKey: aKey inMonster: aMonster
	aMonster stats: (self at: aKey ifAbsent:[self addStatsFromKey: aKey])
! !

Object subclass: #HexMouse
	instanceVariableNames: 'xCell yCell'
	package: 'Easnoth-Tools'!
!HexMouse commentStamp!
"representation of the mouse with its coods according to the tiles in the map"!

!HexMouse methodsFor: 'accessing'!

xCell
	^xCell
!

xCell: anInt
	xCell := anInt
!

yCell
	^yCell
!

yCell: anInt
	yCell := anInt
! !

!HexMouse methodsFor: 'calculs'!

mouseCoodToHexCoodX: x y: y inMap: aMap
	"function that take mouse cood in pixel and return the coods of the tile selected"
	
	"there are issues from Amber kernel : the order of operations sometimes goes wrong in long lines :  inline compiler issue"
	"so this algo is back to javascript"

	| xHex yHex cosmaingridx sinmaingridx cosmaingridy sinmaingridy cosothergridx sinothergridx cosothergridy sinothergridy nb nb2 nb3 nb4 nbCheck xConstante yConstante mapX mapY res|
	cosmaingridx := 0.882947593.
	sinmaingridx := 0.469471563.
	cosmaingridy := 0.130526192 negated.
	sinmaingridy := 0.991444861.

	cosothergridx := 0.4539905.
	sinothergridx := 0.891006524.
	cosothergridy := 0.882947593 negated.
	sinothergridy := 0.469471563.
                
	mapX := aMap mapX.
	mapY := aMap mapY.
	
		<function mod(n, mod) {
			return ((mod+(n%mod))%mod);
		}
		
		nb = Math.floor(((y-(cosmaingridx/sinmaingridx)*x-(mapY+0)+(cosmaingridx/sinmaingridx)*(mapX+320))/(55*cosmaingridx)));
		nb2 = Math.floor(((y-(cosmaingridy/sinmaingridy)*x-(mapY+480)+(cosmaingridy/sinmaingridy)*(mapX+206))/(173.2*cosmaingridy)));
		
		xConstante = 9 + (mod(nb,3));
		yConstante = 20 + (mod(nb2,2));
		if (nb2%2 == 0) {yConstante += mod(nb+1,2);}
		
		xHex = Math.floor(((xConstante-nb)/6)+((yConstante-nb2)/2));
		yHex = Math.floor(((nb-xConstante)/4)+((yConstante-nb2)/4));
		
		if (mod(nb,6)==1 && nb2%2==0){
			xHex++;
			if (nb2%4==0 && mod(nb,12)!!=7){yHex++;}
			if (mod(nb2,4)==2 && mod(nb,12)==7){yHex++;}
		}
		
		if (nb%3==0) {		
			if ((nb2%2==0 && nb%6==0) || (mod(nb2,2)==1 && mod(nb,6)==3)) {
				nb3 = Math.floor(((y-(cosothergridx/sinothergridx)*x-(mapY+0)+(cosothergridx/sinothergridx)*(mapX+301))/(68*cosothergridx)));
				nbCheck = 3+2*yHex+(xHex%2);
				if (nb3 == nbCheck) {yHex--;}
			}
			else {
				nb4 = Math.floor(((y-(cosothergridy/sinothergridy)*x-(mapY+480)+(cosothergridy/sinothergridy)*(mapX+212.5))/(95.75*cosothergridy)));
				nbCheck = 7-Math.floor(3*xHex/2)+yHex;
				if (nb4 == nbCheck) {
					if (xHex%2 == 0) {yHex--;}
					xHex++;
				}
			}
		}>.

	res := Array with: xHex with: yHex.
	
	^res
!

oldAlgoMouseCoodToHexCoodX: x y: y inMap: aMap
	"function that take mouse cood in pixel and return the coods of the tile selected"
	
	"there are issues from Amber kernel : the order of operations sometimes goes wrong in long lines"
	"so this algo is back to javascript"

	| xHex yHex cosmaingridx sinmaingridx cosmaingridy sinmaingridy cosothergridx sinothergridx cosothergridy sinothergridy nb nb2 nb3 nb4 nbCheck xConstante yConstante mapX mapY res temp1 temp2 k m|
	cosmaingridx := 0.882947593.
	sinmaingridx := 0.469471563.
	cosmaingridy := 0.130526192 negated.
	sinmaingridy := 0.991444861.

	cosothergridx := 0.4539905.
	sinothergridx := 0.891006524.
	cosothergridy := 0.882947593 negated.
	sinothergridy := 0.469471563.
                
	mapX := aMap mapX.
	mapY := aMap mapY.
	
	nb := (y-(cosmaingridx/sinmaingridx*x)-mapY+0+(cosmaingridx/sinmaingridx*(mapX+320))/((55*cosmaingridx))) floor.
	nb2 := (y-(cosmaingridy/sinmaingridy*x)-mapY+480+(cosmaingridy/sinmaingridy*(mapX+206))/(173.2*cosmaingridy)) floor.
	
	"temp1 := cosmaingridx/sinmaingridx.
	temp2 := cosmaingridy/sinmaingridy.
	
	k := 55*cosmaingridx.
	m := 173.2*cosmaingridy."

	"nb pb vient du denominateur a calculer avant"
	"nb2 probleme d'origine inconnu"
	"nb := (((y-(temp1*x)-mapY+(temp1*(mapX+320)))/(k))) floor.
	nb2 := (((y-(temp2*x)-mapY+480+(temp2*(mapX+206)))/(m))) floor.
	
	Transcript show: 'ST : nb',nb,'---nb2',nb2.
	Transcript show: 'ST : k',k,'---m',m.
	Transcript show: 'ST : t1',temp1,'---t2',temp2; cr."

	"<temp1 = cosmaingridx/sinmaingridx;
	temp2 = cosmaingridy/sinmaingridy;
	k = 55*cosmaingridx;
	m = 173.2*cosmaingridy;>"
	"<nb = Math.floor(((y-(temp1)*x-(mapY+0)+(temp1)*(mapX+320))/(k)));
	nb2 = Math.floor(((y-(temp2)*x-(mapY+480)+(temp2)*(mapX+206))/(m)));>."

	"Transcript show: 'JS : nb',nb,'---nb2',nb2.
	Transcript show: 'JS : k',k,'---m',m.
	Transcript show: 'JS : t1',temp1,'---t2',temp2; cr."

	xConstante := 9 + (nb mod: 3).
	yConstante := 20 + (nb2 mod: 2).
	(nb2\\2 = 0) ifTrue:[yConstante := yConstante + ((nb+1) mod: 2)].
	
	xHex := (xConstante-nb/6+(yConstante-nb2/2)) floor.
	yHex := (nb-xConstante/4+(yConstante-nb2/4)) floor.
	
	(((nb mod: 6)=1) & ((nb2 \\ 2)=0)) ifTrue:[
		xHex := xHex + 1.
		(((nb2 \\ 4)=0) & (((nb mod: 12)=7) not)) ifTrue:[yHex := yHex + 1].
		(((nb2 mod: 4)=2) & ((nb mod: 12)=7)) ifTrue:[yHex := yHex + 1].
	].
	
	((nb \\ 3) = 0) ifTrue:[       
		((((nb2 \\ 2) = 0) & ((nb \\ 6)=0)) | (((nb2 mod: 2)=1) & ((nb mod: 6)=3))) ifTrue:[
			nb3 := ((y-(cosothergridx/sinothergridx)*x-(mapY+0)+(cosothergridx/sinothergridx)*(mapX+301))/(68*cosothergridx)) floor.
			nbCheck := 3 + (2 * yHex) +(xHex \\ 2).
			(nb3 = nbCheck) ifTrue:[yHex := yHex - 1].
		]
		ifFalse:[
			nb4 :=((y-(cosothergridy/sinothergridy)*x-(mapY+480)+(cosothergridy/sinothergridy)*(mapX+212.5))/(95.75*cosothergridy)) floor.
			nbCheck := 7 -((3*xHex/2) floor) + yHex.
			(nb4 = nbCheck) ifTrue:[
				((xHex \\ 2) = 0) ifTrue:[yHex := yHex - 1].
				xHex := xHex + 1.
			].
		].
	].
	
	res := Array with: xHex with: yHex.
	
	^res
! !

!HexMouse methodsFor: 'coods'!

updateCoods: anEvent inMap: aMap
	|x y cood canvas|
	
	canvas := aMap canvas element.

        x := anEvent pageX - canvas offsetLeft.
        y := anEvent pageY - canvas offsetTop.

        cood := self mouseCoodToHexCoodX: x y: y inMap: aMap.
		
	self xCell: (cood at: 1).
	self yCell: (cood at: 2).
	
	"Transcript show: '[',x,'-',y,']'; cr.
	Transcript show: '[',xCell,'-',yCell,']'; cr."
! !

HexMouse class instanceVariableNames: 'hexMouse'!

!HexMouse class methodsFor: 'initialize-release'!

getSingleton
	^hexMouse ifNil:[hexMouse := self new.]
! !

Object subclass: #XMLhttpRequestProxy
	instanceVariableNames: 'xmlhttpRequest'
	package: 'Easnoth-Tools'!
!XMLhttpRequestProxy commentStamp!
"singleton that permits to get JSON files"!

!XMLhttpRequestProxy methodsFor: 'accessing'!

xmlhttpRequest
	^xmlhttpRequest
!

xmlhttpRequest: anObject
	xmlhttpRequest := anObject
! !

!XMLhttpRequestProxy methodsFor: 'initialize-release'!

initialize
	|xmlhttpRequestTemp|
	super initialize.
	xmlhttpRequestTemp := <new XMLHttpRequest()>. "if IE new ActiveXObject('Microsoft.XMLHTTP')"
	self xmlhttpRequest: xmlhttpRequestTemp.
!

loadJSON: fileName

	self xmlhttpRequest open: 'GET'
					fileName: fileName
					arg: false;
					send.
	^self xmlhttpRequest responseText
! !

XMLhttpRequestProxy class instanceVariableNames: 'xmlHttpRequest'!

!XMLhttpRequestProxy class methodsFor: 'initialize'!

getSingleton
	^xmlHttpRequest ifNil:[xmlHttpRequest := self new]
! !

!Number methodsFor: '*Easnoth-Tools'!

floor
|result|
<result = Math.floor(self);>.
    ^ result
!

mod: mod
	"function that return n%mod - hack for negative numbers --- Ex : mod(-5,6) return 1 instead of -5.
	It counter a bug when algo used %6 to mean <do it 1 tile out of 6> and coods were negative"
	^((mod+(self \\ mod)) \\ mod)
! !

