---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPCE GET EDUCATION TOPICS 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWPCE GET EDUCATION TOPICS{:/}
 tag | {::nomarkdown}EDTTYPE{:/}
 routine | [ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list of active education topics.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | get the list of active education topics
 Lines | ```
 N IEN,CNT,BINDEX S (IEN,CNT,BINDEX)=0
 F  S BINDEX=$O(^AUTTEDT("B",BINDEX)) Q:BINDEX']""  F  S IEN=$O(^(BINDEX,IEN)) Q:'+IEN  I $D(^AUTTEDT(IEN,0))#2,+$P(^(0),"^",3)=0 S CNT=CNT+1,ORWLST(CNT)=IEN_"^"_$P(^(0),"^")```




 Generated on January 13th 2017, 6:55:29 am