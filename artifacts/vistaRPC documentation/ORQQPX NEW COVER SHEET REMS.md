---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQPX NEW COVER SHEET REMS 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPX NEW COVER SHEET REMS{:/}
 tag | {::nomarkdown}REMLIST{:/}
 routine | [ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list of reminders for cover sheet evaluation.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Returns a list of all cover sheet reminders
 Input Parameters | {::nomarkdown}LOC{:/}
 Lines | ```
 N SRV,I,J,ORLST,CODE,IDX,IEN,NEWP
 S SRV=$$GET1^DIQ(200,DUZ,29,"I")
 D NEWCVOK(.NEWP)
 I 'NEWP D GETLST^XPAR(.ORY,"USR^LOC.`"_$G(LOC)_"^SRV.`"_+$G(SRV)_"^DIV^SYS^PKG","ORQQPX SEARCH ITEMS","Q",.ORERR) Q
 D REMACCUM(.ORLST,"PKG","Q",1000)
 D REMACCUM(.ORLST,"SYS","Q",2000)
 D REMACCUM(.ORLST,"DIV","Q",3000)
 I +SRV D REMACCUM(.ORLST,"SRV.`"_+$G(SRV),"Q",4000)
 I +LOC D REMACCUM(.ORLST,"LOC.`"_+$G(LOC),"Q",5000)
 D REMACCUM(.ORLST,"CLASS","Q",6000)
 D REMACCUM(.ORLST,"USR","Q",7000)
 S I=0
 F  S I=$O(ORLST(I)) Q:'I  D
 .S IDX=$P(ORLST(I),U,1)
 .F  Q:'$D(ORY(IDX))  S IDX=IDX+1
 .S CODE=$E($P(ORLST(I),U,2),2)
 .S IEN=$E($P(ORLST(I),U,2),3,999)
 .I CODE="R" D ADDREM(.ORY,IDX,IEN)
 .I CODE="C" D ADDCAT(.ORY,IDX,IEN)
 K ORY("B")```

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}LOC{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Location{:/} | 




 Generated on January 13th 2017, 6:55:29 am