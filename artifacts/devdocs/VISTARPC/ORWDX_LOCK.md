---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWDX LOCK<br/>
# ORWDX LOCK

RPC to attempt to lock patient for ordering (returns 1 if successful or 0if unsuccessful).

## Properties

Property | Value
--- | ---
Label | LOCK
MUMPS Implementation | [ORWDX](http://code.osehra.org/dox/Routine_ORWDX_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [LOCK^ORWDX](http://code.osehra.org/dox/Routine_ORWDX_source.html)
Method Comment | Attempt to lock pt for ordering
Input Parameters | DFN
Code | {::nomarkdown}<pre><code> S OK=$$LOCK^ORX2(DFN)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}