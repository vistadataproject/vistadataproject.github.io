---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWD1 SIG4ONE
# ORWD1 SIG4ONE

Returns true if an order requires a signature.

Property | Value
--- | ---
Label | SIG4ONE
Routine | [ORWD1](http://code.osehra.org/dox/Routine_ORWD1_source.html)
Return Type | SINGLE VALUE




### MUMPS Method Description

Property | Value
--- | ---
Method | [SIG4ONE^ORWD1](http://code.osehra.org/dox/Routine_ORWD1_source.html)
Method Comment | Return 1 if order requires a signature
Input Parameters | ANORDER
Code | {::nomarkdown}<pre><code> S REQ=0<br/> I +$P($G(^OR(100,+ANORDER,0)),U,16) S REQ=1</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}