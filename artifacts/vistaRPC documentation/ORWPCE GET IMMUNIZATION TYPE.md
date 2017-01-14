---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWPCE GET IMMUNIZATION TYPE 


 ## VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWPCE GET IMMUNIZATION TYPE{:/}
 tag | {::nomarkdown}IMMTYPE{:/}
 routine | [ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list of active immunizations.{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | IMMTYPE^[ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
 Method comment | get the list of active immunizations
 Input parameters | {::nomarkdown}ORDT{:/}
 Code | ```  N IEN,CNT,BINDEX S (IEN,CNT,BINDEX)=0<br/> S:'$G(ORDT) ORDT=DT<br/> F  S BINDEX=$O(^AUTTIMM("B",BINDEX)) Q:BINDEX']""  F  S IEN=$O(^(BINDEX,IEN)) Q:'+IEN  D<br/> . I $D(^AUTTIMM(IEN,0))#2,+$P(^(0),"^",7)=0 S CNT=CNT+1,ORWLST(CNT)=IEN_"^"_$P(^(0),"^")<br/> . ;I $D(^AUTTIMM(IEN,0))#2,+$$SCREEN^XTID(9999999.14,,IEN,ORDT)=0 S CNT=CNT+1,ORWLST(CNT)=IEN_"^"_$P(^(0),"^")```{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:36:24 am</p>{:/}