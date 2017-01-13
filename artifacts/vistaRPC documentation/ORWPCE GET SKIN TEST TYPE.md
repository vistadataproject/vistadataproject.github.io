---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPCE GET SKIN TEST TYPE 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWPCE GET SKIN TEST TYPE{:/}
 tag | {::nomarkdown}SKTYPE{:/}
 routine | [ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list of the active skin test codes.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | get the list of active skin test
 Input Parameters | {::nomarkdown}ORDT{:/}
 Lines | ```{::nomarkdown} N IEN,CNT,BINDEX S (IEN,CNT,BINDEX)=0<br/> S:'$G(ORDT) ORDT=DT<br/> F  S BINDEX=$O(^AUTTSK("B",BINDEX)) Q:BINDEX']""  F  S IEN=$O(^(BINDEX,IEN)) Q:'+IEN  D<br/> . I $D(^AUTTSK(IEN,0))#2,+$P(^(0),"^",3)=0 S CNT=CNT+1,ORWLST(CNT)=IEN_"^"_$P(^(0),"^")<br/> . ;I $D(^AUTTSK(IEN,0))#2,+$$SCREEN^XTID(9999999.28,,IEN,ORDT)=0 S CNT=CNT+1,ORWLST(CNT)=IEN_"^"_$P(^(0),"^")```{:/}




 Generated on January 13th 2017, 7:11:26 am