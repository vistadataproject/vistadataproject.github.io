---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPCE GET TREATMENT TYPE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWPCE GET TREATMENT TYPE{:/}
 tag | {::nomarkdown}TRTTYPE{:/}
 routine | [ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns the list of active treatments.{:/}


### MUMPS Method description

 property | value 
 --- | --- 
 Method | TRTTYPE^[ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
 Method comment | get the list of active treatments
 Code | {::nomarkdown}  N IEN,CNT,BINDEX S (IEN,CNT,BINDEX)=0<br> F  S BINDEX=$O(^AUTTTRT("B",BINDEX)) Q:BINDEX']""  F  S IEN=$O(^(BINDEX,IEN)) Q:'+IEN  I $D(^AUTTTRT(IEN,0))#2,+$P(^(0),"^",4)=0 S CNT=CNT+1,ORWLST(CNT)=IEN_"^"_$P(^(0),"^"){:/}


### CPRS

[NOT OSEHRA CPRS]()

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:21:34 am</p>{:/}