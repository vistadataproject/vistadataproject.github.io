---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDPS32 ALLIVRTE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDPS32 ALLIVRTE{:/}
 tag | {::nomarkdown}ALLIVRTE{:/}
 routine | [ORWDPS32](http://code.osehra.org/dox/Routine_ORWDPS32_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | ALLIVRTE^[ORWDPS32](http://code.osehra.org/dox/Routine_ORWDPS32_source.html)
 Code | {::nomarkdown}  N ABB,CNT,EXP,IEN,RTE<br> K ^TMP($J,"ORWDPS32 ALLIVRTE")<br> S CNT=0<br> D ALL^PSS51P2(,"??",,1,"ORWDPS32 ALLIVRTE")<br> S RTE="" F  S RTE=$O(^TMP($J,"ORWDPS32 ALLIVRTE","B",RTE)) Q:RTE=""  D<br> .S IEN=$O(^TMP($J,"ORWDPS32 ALLIVRTE","IV",RTE,"")) Q:IEN'>0<br> .S ABB=$G(^TMP($J,"ORWDPS32 ALLIVRTE",IEN,1))<br> .S EXP=$G(^TMP($J,"ORWDPS32 ALLIVRTE",IEN,4))<br> .S CNT=CNT+1,LST(CNT)=IEN_U_RTE_U_ABB_U_U_U_U<br> K ^TMP($J,"ORWDPS32 IVROUTE"){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODMeds.pas">Orders/rODMeds.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:23:03 am</p>{:/}