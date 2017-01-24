---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQPX NEW COVER SHEET REMS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPX NEW COVER SHEET REMS{:/}
 tag | {::nomarkdown}REMLIST{:/}
 routine | [ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list of reminders for cover sheet evaluation.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}LOC{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Location{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | REMLIST^[ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html)
 Method comment | Returns a list of all cover sheet reminders
 Input parameters | {::nomarkdown}LOC{:/}
 Code | {::nomarkdown}  N SRV,I,J,ORLST,CODE,IDX,IEN,NEWP<br> S SRV=$$GET1^DIQ(200,DUZ,29,"I")<br> D NEWCVOK(.NEWP)<br> I 'NEWP D GETLST^XPAR(.ORY,"USR^LOC.`"_$G(LOC)_"^SRV.`"_+$G(SRV)_"^DIV^SYS^PKG","ORQQPX SEARCH ITEMS","Q",.ORERR) Q<br> D REMACCUM(.ORLST,"PKG","Q",1000)<br> D REMACCUM(.ORLST,"SYS","Q",2000)<br> D REMACCUM(.ORLST,"DIV","Q",3000)<br> I +SRV D REMACCUM(.ORLST,"SRV.`"_+$G(SRV),"Q",4000)<br> I +LOC D REMACCUM(.ORLST,"LOC.`"_+$G(LOC),"Q",5000)<br> D REMACCUM(.ORLST,"CLASS","Q",6000)<br> D REMACCUM(.ORLST,"USR","Q",7000)<br> S I=0<br> F  S I=$O(ORLST(I)) Q:'I  D<br> .S IDX=$P(ORLST(I),U,1)<br> .F  Q:'$D(ORY(IDX))  S IDX=IDX+1<br> .S CODE=$E($P(ORLST(I),U,2),2)<br> .S IEN=$E($P(ORLST(I),U,2),3,999)<br> .I CODE="R" D ADDREM(.ORY,IDX,IEN)<br> .I CODE="C" D ADDCAT(.ORY,IDX,IEN)<br> K ORY("B"){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="">NOT OSEHRA CPRS</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:30:11 am</p>{:/}