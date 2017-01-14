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
 Lines | {::nomarkdown} K ^TMP("ORXPND",$J)<br/> N ORESULTS,ORVP,LCNT<br/> S ORESULTS=1,LCNT=0,ORVP=DFN_";DPT("<br/> D ORDHIST^ORWOR2<br/> K ^TMP("ORXPND",$J,"VIDEO")<br/> S REF=$NA(^TMP("ORXPND",$J)){:/}




 Generated on January 13th 2017, 7:15:28 am