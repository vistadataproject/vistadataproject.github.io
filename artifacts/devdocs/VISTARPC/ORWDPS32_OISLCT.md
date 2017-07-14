---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWDPS32 OISLCT<br/>
# ORWDPS32 OISLCT

Returns defaults for pharmacy orderable items.

## Properties

Property | Value
--- | ---
Label | OISLCT
Routine | [ORWDPS32](http://code.osehra.org/dox/Routine_ORWDPS32_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [OISLCT^ORWDPS32](http://code.osehra.org/dox/Routine_ORWDPS32_source.html)
Method Comment | rtn for defaults for pharm OI
Input Parameters | OI, PSTYPE, ORVP
Code | {::nomarkdown}<pre><code> N ILST S ILST=0<br/> K ^TMP("PSJINS",$J),^TMP("PSJMR",$J),^TMP("PSJNOUN",$J),^TMP("PSJSCH",$J)<br/> S LST($$NXT)="~Dispense" D DISPDRG<br/> S LST($$NXT)="~Instruct" D INSTRCT<br/> S LST($$NXT)="~Route"    D ROUTE<br/> S LST($$NXT)="~Message"  D MESSAGE<br/> I $L($G(^TMP("PSJSCH",$J))) S LST($$NXT)="~DefSched",LST($$NXT)="d"_^($J)<br/> K ^TMP("PSJINS",$J),^TMP("PSJMR",$J),^TMP("PSJNOUN",$J),^TMP("PSJSCH",$J)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODBase.pas">Orders/rODBase.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}