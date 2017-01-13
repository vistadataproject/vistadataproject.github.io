---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORECS01 SAVPATH 

 property | value 
--- | --- 
 label | {::nomarkdown}ORECS01 SAVPATH{:/}
 tag | {::nomarkdown}SAVPATH{:/}
 routine | [ORECS01](http://code.osehra.org/dox/Routine_ORECS01_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | Save user's ECS path
 Input Parameters | {::nomarkdown}ECPATH{:/}
 Lines | ```
 N IX,VAL,NM,HADIT,LST,INST,LAST
 S (IX,HADIT,INST,LAST)=0,(VAL,NM)=""
 D GETLST^XPAR(.LST,DUZ_";VA(200,","ORWT TOOLS MENU")
 S LAST=+$G(LST(LST))
 F  S IX=$O(LST(IX)) Q:('IX)!HADIT  D
 . S NM=$P($P(LST(IX),U,2),"=",1)
 . I $$UP^XLFSTR(NM)="EVENT CAPTURE INTERFACE" S HADIT=$P(LST(IX),U)
 S $P(ECPATH,"=",2)=$C(34)_$P(ECPATH,"=",2)_$C(34)
 S ORY=$P(ECPATH,"=",2)
 D:HADIT CHG^XPAR(DUZ_";VA(200,","ORWT TOOLS MENU",HADIT,ECPATH)
 D:'HADIT ADD^XPAR(DUZ_";VA(200,","ORWT TOOLS MENU",LAST+1,ECPATH)
```




 Generated on January 13th 2017, 6:55:29 am