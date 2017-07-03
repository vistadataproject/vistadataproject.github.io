---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWD1 RVPRINT
# ORWD1 RVPRINT

RPC used by CPRS GUI to print orders to a designated print device afterthe review or sign actions were used.

Property | Value
--- | ---
Label | RVPRINT
Routine | [ORWD1](http://code.osehra.org/dox/Routine_ORWD1_source.html)
Return Type | SINGLE VALUE




### MUMPS Method Description

Property | Value
--- | ---
Method | [RVPRINT^ORWD1](http://code.osehra.org/dox/Routine_ORWD1_source.html)
Method Comment | print orders from review/sign actions
Input Parameters | HLOC, ORWDEV, PRTLST
Code | {::nomarkdown}<pre><code> D PRINTS(.PRTLST,HLOC,ORWDEV) S OK=1</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}