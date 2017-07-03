---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORQOR DETAIL
# ORQOR DETAIL

Returns detailed information regarding an order.

Property | Value
--- | ---
Label | DETAIL
Routine | [ORWOR](http://code.osehra.org/dox/Routine_ORWOR_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ORDER | LITERAL | 16 | true | Order identifier/number from file #100.



### MUMPS Method Description

Property | Value
--- | ---
Method | [DETAIL^ORWOR](http://code.osehra.org/dox/Routine_ORWOR_source.html)
Method Comment | Return details of ORID (shell to kill VIDEO subs)
Input Parameters | ORID, DFN
Code | {::nomarkdown}<pre><code> Q:'+ORID<br/> I $G(DFN) N ORVP S ORVP=DFN_";DPT("<br/> S LST="^TMP(""ORTXT"",$J)"<br/> D DETAIL^ORQ2(.LST,ORID)<br/> K @LST@("VIDEO")<br/> S LST=$NA(^TMP("ORTXT",$J)),@LST=""</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}