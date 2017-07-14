---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; OREVNTX1 DEFLTS<br/>
# OREVNTX1 DEFLTS



## Properties

Property | Value
--- | ---
Label | DEFLTS
Routine | [OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [DEFLTS^OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
Method Comment | Return default specialty for EVTID(#100.5)
Input Parameters | EVTID
Code | {::nomarkdown}<pre><code> Q:'+EVTID<br/> N PRTEVT<br/> S PRTEVT=0<br/> S PRTEVT=$P(^ORD(100.5,+EVTID,0),U,12)<br/> I PRTEVT>0 S EVTID=PRTEVT<br/> S ORY=$$DEFTS^ORCDADT(EVTID)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}