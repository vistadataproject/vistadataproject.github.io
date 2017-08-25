---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWDPS32 ALLIVRTE<br/>
# ORWDPS32 ALLIVRTE



## Properties

Property | Value
--- | ---
Label | ALLIVRTE
MUMPS Implementation | [ORWDPS32](http://code.osehra.org/dox/Routine_ORWDPS32_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [ALLIVRTE^ORWDPS32](http://code.osehra.org/dox/Routine_ORWDPS32_source.html)
Code | {::nomarkdown}<pre><code> N ABB,CNT,EXP,IEN,RTE<br/> K ^TMP($J,"ORWDPS32 ALLIVRTE")<br/> S CNT=0<br/> D ALL^PSS51P2(,"??",,1,"ORWDPS32 ALLIVRTE")<br/> S RTE="" F  S RTE=$O(^TMP($J,"ORWDPS32 ALLIVRTE","B",RTE)) Q:RTE=""  D<br/> .S IEN=$O(^TMP($J,"ORWDPS32 ALLIVRTE","IV",RTE,"")) Q:IEN'>0<br/> .S ABB=$G(^TMP($J,"ORWDPS32 ALLIVRTE",IEN,1))<br/> .S EXP=$G(^TMP($J,"ORWDPS32 ALLIVRTE",IEN,4))<br/> .S CNT=CNT+1,LST(CNT)=IEN_U_RTE_U_ABB_U_U_U_U<br/> K ^TMP($J,"ORWDPS32 IVROUTE")</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODMeds.pas">Orders/rODMeds.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}