---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWDXA DCREQIEN<br/>
# ORWDXA DCREQIEN

Return the IEN for Requesting Physician Cancelled reason.

## Properties

Property | Value
--- | ---
Label | DCREQIEN
Routine | [ORWDXA](http://code.osehra.org/dox/Routine_ORWDXA_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [DCREQIEN^ORWDXA](http://code.osehra.org/dox/Routine_ORWDXA_source.html)
Method Comment | Return IEN for Req Phys Cancelled reason
Code | {::nomarkdown}<pre><code> S VAL=$O(^ORD(100.03,"S","REQ",0))</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}