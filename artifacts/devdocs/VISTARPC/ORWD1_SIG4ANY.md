---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWD1 SIG4ANY<br/>
# ORWD1 SIG4ANY

Returns true if any orders in the list require a signature.

## Properties

Property | Value
--- | ---
Label | SIG4ANY
MUMPS Implementation | [ORWD1](http://code.osehra.org/dox/Routine_ORWD1_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [SIG4ANY^ORWD1](http://code.osehra.org/dox/Routine_ORWD1_source.html)
Method Comment | Return 1 if any order requires a signature
Input Parameters | ORDERS
Code | {::nomarkdown}<pre><code> N I<br/> S I=0,REQ=0<br/> F  S I=$O(ORDERS(I)) Q:'I  D  Q:REQ<br/> . I +$P($G(^OR(100,+ORDERS(I),0)),U,16) S REQ=1</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}