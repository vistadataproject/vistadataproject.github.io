---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWOR RESULT HISTORY 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWOR RESULT HISTORY{:/}
 tag | {::nomarkdown}RESHIST{:/}
 routine | [ORWOR](http://code.osehra.org/dox/Routine_ORWOR_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Returns a result history of a CPRS order.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Return result history of associated tests identified by ID
 Input Parameters | {::nomarkdown}DFN<br/>ORID<br/>ID{:/}
 Lines | ```
 K ^TMP("ORXPND",$J)
 N ORESULTS,ORVP,LCNT
 S ORESULTS=1,LCNT=0,ORVP=DFN_";DPT("
 D ORDHIST^ORWOR2
 K ^TMP("ORXPND",$J,"VIDEO")
 S REF=$NA(^TMP("ORXPND",$J))```




 Generated on January 13th 2017, 6:55:29 am