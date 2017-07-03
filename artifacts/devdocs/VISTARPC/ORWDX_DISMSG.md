---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWDX DISMSG
# ORWDX DISMSG

Returns disabled message for an ordering dialog.

Property | Value
--- | ---
Label | DISMSG
Routine | [ORWDX](http://code.osehra.org/dox/Routine_ORWDX_source.html)
Return Type | SINGLE VALUE




### MUMPS Method Description

Property | Value
--- | ---
Method | [DISMSG^ORWDX](http://code.osehra.org/dox/Routine_ORWDX_source.html)
Method Comment | Disabled mge for ordering dlg
Input Parameters | IEN
Code | {::nomarkdown}<pre><code> S VAL=$P($G(^ORD(101.41,+IEN,0)),U,3)</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}