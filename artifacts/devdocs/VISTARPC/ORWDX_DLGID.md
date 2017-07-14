---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWDX DLGID<br/>
# ORWDX DLGID

Returns the dialog IEN for an order.

## Properties

Property | Value
--- | ---
Label | DLGID
Routine | [ORWDX](http://code.osehra.org/dox/Routine_ORWDX_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [DLGID^ORWDX](http://code.osehra.org/dox/Routine_ORWDX_source.html)
Method Comment | return dlg IEN for order
Input Parameters | ORIFN
Code | {::nomarkdown}<pre><code> S VAL=$P(^OR(100,+ORIFN,0),U,5)<br/> S VAL=$S($P(VAL,";",2)="ORD(101.41,":+VAL,1:0)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}