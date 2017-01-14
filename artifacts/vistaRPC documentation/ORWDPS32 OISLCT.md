---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWDPS32 OISLCT 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWDPS32 OISLCT{:/}
 tag | {::nomarkdown}OISLCT{:/}
 routine | [ORWDPS32](http://code.osehra.org/dox/Routine_ORWDPS32_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns defaults for pharmacy orderable items.{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | OISLCT^[ORWDPS32](http://code.osehra.org/dox/Routine_ORWDPS32_source.html)
 Method comment | rtn for defaults for pharm OI
 Input parameters | {::nomarkdown}OI<br/>PSTYPE<br/>ORVP{:/}
 Code | ```  N ILST S ILST=0
 K ^TMP("PSJINS",$J),^TMP("PSJMR",$J),^TMP("PSJNOUN",$J),^TMP("PSJSCH",$J)
 S LST($$NXT)="~Dispense" D DISPDRG
 S LST($$NXT)="~Instruct" D INSTRCT
 S LST($$NXT)="~Route"    D ROUTE
 S LST($$NXT)="~Message"  D MESSAGE
 I $L($G(^TMP("PSJSCH",$J))) S LST($$NXT)="~DefSched",LST($$NXT)="d"_^($J)
 K ^TMP("PSJINS",$J),^TMP("PSJMR",$J),^TMP("PSJNOUN",$J),^TMP("PSJSCH",$J)```




 Generated on January 14th 2017, 7:26:35 am