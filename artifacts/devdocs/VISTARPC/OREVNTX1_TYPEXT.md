---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; OREVNTX1 TYPEXT<br/>
# OREVNTX1 TYPEXT



## Properties

Property | Value
--- | ---
Label | TYPEXT
MUMPS Implementation | [OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [TYPEXT^OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
Method Comment | does EVT has delayed orders?
Input Parameters | DFN, EVT
First Comment | {::nomarkdown}<pre><code> 1 if Patient DFN has delayed orders for EVT<br/> 2 if Parent/Sibling event has delayed orders<br/> 0 if No delayed orders for EVT</code></pre>{:/}
Code | {::nomarkdown}<pre><code> Q:'+EVT<br/> S ORY=$$EXISTS^OREVNTX(DFN,EVT)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}