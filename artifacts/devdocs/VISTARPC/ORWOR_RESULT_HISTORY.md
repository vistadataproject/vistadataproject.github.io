---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWOR RESULT HISTORY<br/>
# ORWOR RESULT HISTORY

Returns a result history of a CPRS order.

## Properties

Property | Value
--- | ---
Label | RESHIST
Routine | [ORWOR](http://code.osehra.org/dox/Routine_ORWOR_source.html)
Return Type | GLOBAL ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [RESHIST^ORWOR](http://code.osehra.org/dox/Routine_ORWOR_source.html)
Method Comment | Return result history of associated tests identified by ID
Input Parameters | DFN, ORID, ID
Code | {::nomarkdown}<pre><code> K ^TMP("ORXPND",$J)<br/> N ORESULTS,ORVP,LCNT<br/> S ORESULTS=1,LCNT=0,ORVP=DFN_";DPT("<br/> D ORDHIST^ORWOR2<br/> K ^TMP("ORXPND",$J,"VIDEO")<br/> S REF=$NA(^TMP("ORXPND",$J))</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}