---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWDX LOCK
# ORWDX LOCK

RPC to attempt to lock patient for ordering (returns 1 if successful or 0if unsuccessful).

Property | Value
--- | ---
Label | LOCK
Routine | [ORWDX](http://code.osehra.org/dox/Routine_ORWDX_source.html)
Return Type | SINGLE VALUE




### MUMPS Method Description

Property | Value
--- | ---
Method | [LOCK^ORWDX](http://code.osehra.org/dox/Routine_ORWDX_source.html)
Method Comment | Attempt to lock pt for ordering
Input Parameters | DFN
Code | {::nomarkdown}<pre><code> S OK=$$LOCK^ORX2(DFN)</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}