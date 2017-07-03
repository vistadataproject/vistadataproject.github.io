---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWDX FORMID
# ORWDX FORMID

Returns the base dialog FormID for an order.

Property | Value
--- | ---
Label | FORMID
Routine | [ORWDX](http://code.osehra.org/dox/Routine_ORWDX_source.html)
Return Type | SINGLE VALUE




### MUMPS Method Description

Property | Value
--- | ---
Method | [FORMID^ORWDX](http://code.osehra.org/dox/Routine_ORWDX_source.html)
Method Comment | Base dlg FormID for an order
Input Parameters | ORIFN
Code | {::nomarkdown}<pre><code> N DLG<br/> S VAL=0,DLG=$P(^OR(100,+ORIFN,0),U,5)<br/> Q:$P(DLG,";",2)'="ORD(101.41,"<br/> D FORMID^ORWDXM(.VAL,+DLG)</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}