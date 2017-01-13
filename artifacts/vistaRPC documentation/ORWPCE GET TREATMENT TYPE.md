---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPCE GET TREATMENT TYPE 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWPCE GET TREATMENT TYPE{:/}
 tag | {::nomarkdown}TRTTYPE{:/}
 routine | [ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns the list of active treatments.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | get the list of active treatments
 Lines | ```
 N IEN,CNT,BINDEX S (IEN,CNT,BINDEX)=0
 F  S BINDEX=$O(^AUTTTRT("B",BINDEX)) Q:BINDEX']""  F  S IEN=$O(^(BINDEX,IEN)) Q:'+IEN  I $D(^AUTTTRT(IEN,0))#2,+$P(^(0),"^",4)=0 S CNT=CNT+1,ORWLST(CNT)=IEN_"^"_$P(^(0),"^")```




 Generated on January 13th 2017, 6:55:29 am