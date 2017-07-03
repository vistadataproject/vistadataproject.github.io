---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWDPS1 CHK94
# ORWDPS1 CHK94



Property | Value
--- | ---
Label | CHK94
Routine | [ORWDPS1](http://code.osehra.org/dox/Routine_ORWDPS1_source.html)
Return Type | SINGLE VALUE




### MUMPS Method Description

Property | Value
--- | ---
Method | [CHK94^ORWDPS1](http://code.osehra.org/dox/Routine_ORWDPS1_source.html)
Method Comment | return 1 if patch 94 has been installed
Code | {::nomarkdown}<pre><code> S VAL=0<br/> I $O(^ORD(101.41,"B","PS MEDS",0)) S VAL=1</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}