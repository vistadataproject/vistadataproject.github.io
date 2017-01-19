---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWOR RESULT HISTORY 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWOR RESULT HISTORY{:/}
 tag | {::nomarkdown}RESHIST{:/}
 routine | [ORWOR](http://code.osehra.org/dox/Routine_ORWOR_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Returns a result history of a CPRS order.{:/}


### MUMPS Method description

 property | value 
 --- | --- 
 Method | RESHIST^[ORWOR](http://code.osehra.org/dox/Routine_ORWOR_source.html)
 Method comment | Return result history of associated tests identified by ID
 Input parameters | {::nomarkdown}DFN<br>ORID<br>ID{:/}
 Code | {::nomarkdown}  K ^TMP("ORXPND",$J)<br> N ORESULTS,ORVP,LCNT<br> S ORESULTS=1,LCNT=0,ORVP=DFN_";DPT("<br> D ORDHIST^ORWOR2<br> K ^TMP("ORXPND",$J,"VIDEO")<br> S REF=$NA(^TMP("ORXPND",$J)){:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:04:53 am</p>{:/}