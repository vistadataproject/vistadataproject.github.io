---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWOR RESULT 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWOR RESULT{:/}
 tag | {::nomarkdown}RESULT{:/}
 routine | [ORWOR](http://code.osehra.org/dox/Routine_ORWOR_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Returns results of a CPRS order.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Return results of order identified by ID
 Input Parameters | {::nomarkdown}DFN<br/>ORID<br/>ID{:/}
 Lines | ```{::nomarkdown} K ^TMP("ORXPND",$J)<br/> N ORESULTS,ORVP,LCNT S ORESULTS=1,LCNT=0,ORVP=DFN_";DPT("<br/> D ORDERS^ORCXPND1<br/> K ^TMP("ORXPND",$J,"VIDEO")<br/> S REF=$NA(^TMP("ORXPND",$J))```{:/}




 Generated on January 13th 2017, 7:11:26 am