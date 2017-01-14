---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWOR RESULT 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWOR RESULT{:/}
 tag | {::nomarkdown}RESULT{:/}
 routine | [ORWOR](http://code.osehra.org/dox/Routine_ORWOR_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Returns results of a CPRS order.{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | RESULT^[ORWOR](http://code.osehra.org/dox/Routine_ORWOR_source.html)
 Method comment | Return results of order identified by ID
 Input parameters | {::nomarkdown}DFN<br/>ORID<br/>ID{:/}
 Code | ```  K ^TMP("ORXPND",$J)
 N ORESULTS,ORVP,LCNT S ORESULTS=1,LCNT=0,ORVP=DFN_";DPT("
 D ORDERS^ORCXPND1
 K ^TMP("ORXPND",$J,"VIDEO")
 S REF=$NA(^TMP("ORXPND",$J))```




 Generated on January 14th 2017, 7:26:35 am