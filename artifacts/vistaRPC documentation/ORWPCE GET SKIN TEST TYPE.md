---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPCE GET SKIN TEST TYPE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWPCE GET SKIN TEST TYPE{:/}
 tag | {::nomarkdown}SKTYPE{:/}
 routine | [ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list of the active skin test codes.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | SKTYPE^[ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
 Method comment | get the list of active skin test
 Input parameters | {::nomarkdown}ORDT{:/}
 Code | {::nomarkdown}  N IEN,CNT,BINDEX S (IEN,CNT,BINDEX)=0<br> S:'$G(ORDT) ORDT=DT<br> F  S BINDEX=$O(^AUTTSK("B",BINDEX)) Q:BINDEX']""  F  S IEN=$O(^(BINDEX,IEN)) Q:'+IEN  D<br> . I $D(^AUTTSK(IEN,0))#2,+$P(^(0),"^",3)=0 S CNT=CNT+1,ORWLST(CNT)=IEN_"^"_$P(^(0),"^")<br> . ;I $D(^AUTTSK(IEN,0))#2,+$$SCREEN^XTID(9999999.28,,IEN,ORDT)=0 S CNT=CNT+1,ORWLST(CNT)=IEN_"^"_$P(^(0),"^"){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Encounter/rPCE.pas">Encounter/rPCE.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 7:57:52 am</p>{:/}