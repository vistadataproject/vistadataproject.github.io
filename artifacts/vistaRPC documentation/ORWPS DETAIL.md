---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPS DETAIL 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWPS DETAIL{:/}
 tag | {::nomarkdown}DETAIL{:/}
 routine | [ORWPS](http://code.osehra.org/dox/Routine_ORWPS_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Returns text of details for a specific mediction order.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | show details for a med order
 Input Parameters | {::nomarkdown}DFN<br/>ID{:/}
 Lines | ```
 K ^TMP("ORXPND",$J)
 N LCNT,ORVP
 S LCNT=0,ORVP=DFN_";DPT("
 D MEDS^ORCXPND1
 S ROOT=$NA(^TMP("ORXPND",$J))```




 Generated on January 13th 2017, 6:55:29 am