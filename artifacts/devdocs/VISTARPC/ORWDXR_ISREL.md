---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWDXR ISREL<br/>
# ORWDXR ISREL

Return 1 if an order has been released, otherwise return 0.

## Properties

Property | Value
--- | ---
Label | ISREL
Routine | [ORWDXR](http://code.osehra.org/dox/Routine_ORWDXR_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [ISREL^ORWDXR](http://code.osehra.org/dox/Routine_ORWDXR_source.html)
Method Comment | Return true if an order has been released
Input Parameters | ORIFN
Code | {::nomarkdown}<pre><code> N STS S STS=$P(^OR(100,+ORIFN,3),U,3)<br/> S VAL=$S(STS=10:0,STS=11:0,1:1)  ; false if delayed or unreleased order</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}