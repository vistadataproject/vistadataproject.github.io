---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWOR1 GETDSCH
# ORWOR1 GETDSCH

Returns the schedule of the drug.

Property | Value
--- | ---
Label | GETDSCH
Routine | [ORWOR1](http://code.osehra.org/dox/Routine_ORWOR1_source.html)
Return Type | SINGLE VALUE




### MUMPS Method Description

Property | Value
--- | ---
Method | [GETDSCH^ORWOR1](http://code.osehra.org/dox/Routine_ORWOR1_source.html)
Method Comment | Check if Drug Schedule
Input Parameters | ORDER
Code | {::nomarkdown}<pre><code> N IFN,ACTION<br/> S IFN=+ORDER,ACTION=$P(ORDER,";",2)<br/> S Y=$P($G(^OR(100,+IFN,8,+ACTION,2)),U,4)</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}