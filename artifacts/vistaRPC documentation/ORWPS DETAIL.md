---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWPS DETAIL 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWPS DETAIL{:/}
 tag | {::nomarkdown}DETAIL{:/}
 routine | [ORWPS](http://code.osehra.org/dox/Routine_ORWPS_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Returns text of details for a specific mediction order.{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | DETAIL^[ORWPS](http://code.osehra.org/dox/Routine_ORWPS_source.html)
 Method comment | show details for a med order
 Input parameters | {::nomarkdown}DFN<br/>ID{:/}
 Code | ```  K ^TMP("ORXPND",$J)
 N LCNT,ORVP
 S LCNT=0,ORVP=DFN_";DPT("
 D MEDS^ORCXPND1
 S ROOT=$NA(^TMP("ORXPND",$J))```




 Generated on January 14th 2017, 7:26:35 am