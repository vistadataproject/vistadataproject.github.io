---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWOR1 CHKDIG<br/>
# ORWOR1 CHKDIG

Returns true if an order requires a digital signature.

## Properties

Property | Value
--- | ---
Label | CHKDIG
Routine | [ORWOR1](http://code.osehra.org/dox/Routine_ORWOR1_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [CHKDIG^ORWOR1](http://code.osehra.org/dox/Routine_ORWOR1_source.html)
Method Comment | Check if Digital Signature is required
Input Parameters | ORDER
Code | {::nomarkdown}<pre><code> N IFN,ACTION<br/> S REQ=0,IFN=+ORDER,ACTION=$P(ORDER,";",2)<br/> I +$P($G(^OR(100,+IFN,8,+ACTION,2)),U,5) S REQ=1</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}