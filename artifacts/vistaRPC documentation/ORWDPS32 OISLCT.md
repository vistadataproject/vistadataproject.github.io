---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDPS32 OISLCT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDPS32 OISLCT{:/}
 tag | {::nomarkdown}OISLCT{:/}
 routine | [ORWDPS32](http://code.osehra.org/dox/Routine_ORWDPS32_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns defaults for pharmacy orderable items.{:/}


### MUMPS Method description

 property | value 
 --- | --- 
 Method | OISLCT^[ORWDPS32](http://code.osehra.org/dox/Routine_ORWDPS32_source.html)
 Method comment | rtn for defaults for pharm OI
 Input parameters | {::nomarkdown}OI<br>PSTYPE<br>ORVP{:/}
 Code | {::nomarkdown}  N ILST S ILST=0<br> K ^TMP("PSJINS",$J),^TMP("PSJMR",$J),^TMP("PSJNOUN",$J),^TMP("PSJSCH",$J)<br> S LST($$NXT)="~Dispense" D DISPDRG<br> S LST($$NXT)="~Instruct" D INSTRCT<br> S LST($$NXT)="~Route"    D ROUTE<br> S LST($$NXT)="~Message"  D MESSAGE<br> I $L($G(^TMP("PSJSCH",$J))) S LST($$NXT)="~DefSched",LST($$NXT)="d"_^($J)<br> K ^TMP("PSJINS",$J),^TMP("PSJMR",$J),^TMP("PSJNOUN",$J),^TMP("PSJSCH",$J){:/}


### CPRS

[Orders/rODBase.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODBase.pas")

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:21:34 am</p>{:/}