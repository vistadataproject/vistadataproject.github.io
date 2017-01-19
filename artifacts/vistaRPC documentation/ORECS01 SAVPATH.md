---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORECS01 SAVPATH 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORECS01 SAVPATH{:/}
 tag | {::nomarkdown}SAVPATH{:/}
 routine | [ORECS01](http://code.osehra.org/dox/Routine_ORECS01_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | SAVPATH^[ORECS01](http://code.osehra.org/dox/Routine_ORECS01_source.html)
 Method comment | Save user's ECS path
 Input parameters | {::nomarkdown}ECPATH{:/}
 Code | {::nomarkdown}  N IX,VAL,NM,HADIT,LST,INST,LAST<br> S (IX,HADIT,INST,LAST)=0,(VAL,NM)=""<br> D GETLST^XPAR(.LST,DUZ_";VA(200,","ORWT TOOLS MENU")<br> S LAST=+$G(LST(LST))<br> F  S IX=$O(LST(IX)) Q:('IX)!HADIT  D<br> . S NM=$P($P(LST(IX),U,2),"=",1)<br> . I $$UP^XLFSTR(NM)="EVENT CAPTURE INTERFACE" S HADIT=$P(LST(IX),U)<br> S $P(ECPATH,"=",2)=$C(34)_$P(ECPATH,"=",2)_$C(34)<br> S ORY=$P(ECPATH,"=",2)<br> D:HADIT CHG^XPAR(DUZ_";VA(200,","ORWT TOOLS MENU",HADIT,ECPATH)<br> D:'HADIT ADD^XPAR(DUZ_";VA(200,","ORWT TOOLS MENU",LAST+1,ECPATH)<br>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 8:55:11 am</p>{:/}