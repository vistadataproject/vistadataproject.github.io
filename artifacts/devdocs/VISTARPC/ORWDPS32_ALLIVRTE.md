---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWDPS32 ALLIVRTE
# ORWDPS32 ALLIVRTE



Property | Value
--- | ---
Label | ALLIVRTE
Routine | [ORWDPS32](http://code.osehra.org/dox/Routine_ORWDPS32_source.html)
Return Type | ARRAY




### MUMPS Method Description

Property | Value
--- | ---
Method | [ALLIVRTE^ORWDPS32](http://code.osehra.org/dox/Routine_ORWDPS32_source.html)
Code | {::nomarkdown}<pre><code> N ABB,CNT,EXP,IEN,RTE<br/> K ^TMP($J,"ORWDPS32 ALLIVRTE")<br/> S CNT=0<br/> D ALL^PSS51P2(,"??",,1,"ORWDPS32 ALLIVRTE")<br/> S RTE="" F  S RTE=$O(^TMP($J,"ORWDPS32 ALLIVRTE","B",RTE)) Q:RTE=""  D<br/> .S IEN=$O(^TMP($J,"ORWDPS32 ALLIVRTE","IV",RTE,"")) Q:IEN'>0<br/> .S ABB=$G(^TMP($J,"ORWDPS32 ALLIVRTE",IEN,1))<br/> .S EXP=$G(^TMP($J,"ORWDPS32 ALLIVRTE",IEN,4))<br/> .S CNT=CNT+1,LST(CNT)=IEN_U_RTE_U_ABB_U_U_U_U<br/> K ^TMP($J,"ORWDPS32 IVROUTE")</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODMeds.pas">Orders/rODMeds.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}