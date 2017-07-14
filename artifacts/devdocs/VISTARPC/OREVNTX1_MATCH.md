---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; OREVNTX1 MATCH<br/>
# OREVNTX1 MATCH



## Properties

Property | Value
--- | ---
Label | MATCH
Routine | [OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [MATCH^OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
Method Comment | If Pt&#x27;s current data match selected event
Input Parameters | DFN, EVT
First Comment | {::nomarkdown}<pre><code>DFN: patient DFN<br/>EVT: ptr to #100.5</code></pre>{:/}
Code | {::nomarkdown}<pre><code> S ORY=0<br/> Q:('+DFN)!('+EVT)<br/> S ORY=$$MATCH^OREVNT(DFN,EVT)<br/> N TS,TSNM<br/> S TS=$S($G(ORTS):+ORTS,1:+$G(^DPT(DFN,.103)))<br/> S TSNM=$P($G(^DIC(45.7,TS,0)),U)<br/> S:ORY ORY=ORY_U_TSNM</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}