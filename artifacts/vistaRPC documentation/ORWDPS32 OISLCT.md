---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDPS32 OISLCT 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDPS32 OISLCT{:/}
 tag | {::nomarkdown}OISLCT{:/}
 routine | [ORWDPS32](http://code.osehra.org/dox/Routine_ORWDPS32_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns defaults for pharmacy orderable items.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | rtn for defaults for pharm OI
 Input Parameters | {::nomarkdown}OI<br/>PSTYPE<br/>ORVP{:/}
 Lines | ```
 N ILST S ILST=0
 K ^TMP("PSJINS",$J),^TMP("PSJMR",$J),^TMP("PSJNOUN",$J),^TMP("PSJSCH",$J)
 S LST($$NXT)="~Dispense" D DISPDRG
 S LST($$NXT)="~Instruct" D INSTRCT
 S LST($$NXT)="~Route"    D ROUTE
 S LST($$NXT)="~Message"  D MESSAGE
 I $L($G(^TMP("PSJSCH",$J))) S LST($$NXT)="~DefSched",LST($$NXT)="d"_^($J)
 K ^TMP("PSJINS",$J),^TMP("PSJMR",$J),^TMP("PSJNOUN",$J),^TMP("PSJSCH",$J)```




 Generated on January 13th 2017, 6:55:29 am