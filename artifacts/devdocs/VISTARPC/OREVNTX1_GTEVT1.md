---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; OREVNTX1 GTEVT1<br/>
# OREVNTX1 GTEVT1



## Properties

Property | Value
--- | ---
Label | GTEVT1
Routine | [OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [GTEVT1^OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
Method Comment | Return Event information based on EVT ptr #100.5
Input Parameters | EVT
First Comment | {::nomarkdown}<pre><code>EVT    ptr #100.5</code></pre>{:/}
Code | {::nomarkdown}<pre><code> Q:'+EVT<br/> N EVTTYPE,EVTNAME,EVTDISP,EVTDLG,PRTEVT<br/> S (EVTDLG,PRTEVT)=0<br/> S PRTEVT=$P(^ORD(100.5,+EVT,0),U,12)<br/> I PRTEVT>0 S EVTTYPE=$P(^ORD(100.5,PRTEVT,0),U,2)<br/> E  S EVTTYPE=$P(^ORD(100.5,+EVT,0),U,2)<br/> S EVTNAME=$P($G(^ORD(100.5,+EVT,0)),U,1)<br/> S EVTDISP=$P($G(^ORD(100.5,+EVT,0)),U,8)<br/> S EVTDLG=$P($G(^ORD(100.5,+EVT,0)),U,4)<br/> S ORY=EVTTYPE_U_EVT_U_EVTNAME_U_EVTDISP_U_EVTDLG</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}