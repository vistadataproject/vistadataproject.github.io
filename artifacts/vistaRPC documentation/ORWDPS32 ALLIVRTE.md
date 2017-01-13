---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDPS32 ALLIVRTE 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDPS32 ALLIVRTE{:/}
 tag | {::nomarkdown}ALLIVRTE{:/}
 routine | [ORWDPS32](http://code.osehra.org/dox/Routine_ORWDPS32_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Lines | ```
 N ABB,CNT,EXP,IEN,RTE
 K ^TMP($J,"ORWDPS32 ALLIVRTE")
 S CNT=0
 D ALL^PSS51P2(,"??",,1,"ORWDPS32 ALLIVRTE")
 S RTE="" F  S RTE=$O(^TMP($J,"ORWDPS32 ALLIVRTE","B",RTE)) Q:RTE=""  D
 .S IEN=$O(^TMP($J,"ORWDPS32 ALLIVRTE","IV",RTE,"")) Q:IEN'>0
 .S ABB=$G(^TMP($J,"ORWDPS32 ALLIVRTE",IEN,1))
 .S EXP=$G(^TMP($J,"ORWDPS32 ALLIVRTE",IEN,4))
 .S CNT=CNT+1,LST(CNT)=IEN_U_RTE_U_ABB_U_U_U_U
 K ^TMP($J,"ORWDPS32 IVROUTE")```




 Generated on January 13th 2017, 6:55:29 am