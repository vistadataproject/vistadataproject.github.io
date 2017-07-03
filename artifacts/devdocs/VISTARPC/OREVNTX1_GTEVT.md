---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; OREVNTX1 GTEVT
# OREVNTX1 GTEVT



Property | Value
--- | ---
Label | GTEVT
Routine | [OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
Return Type | SINGLE VALUE




### MUMPS Method Description

Property | Value
--- | ---
Method | [GTEVT^OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
Method Comment | Return Event infomation based on PTEVT ptr #100.2
Input Parameters | PTEVT
First Comment | {::nomarkdown}<pre><code>EVTID     ptr #100.5</code></pre>{:/}
Code | {::nomarkdown}<pre><code> Q:'+PTEVT<br/> N EVTID,EVTTYPE,EVTNAME,EVTDISP,EVTDLG,PRTEVT<br/> S (EVTTYPE,EVTNAME,EVTDISP,PRTEVT)=""<br/> S EVTDLG=0<br/> I '$P(^ORE(100.2,+$G(PTEVT),0),U,2) Q<br/> S EVTID=$$EVT^OREVNTX(PTEVT)<br/> S PRTEVT=$P(^ORD(100.5,EVTID,0),U,12)<br/> I PRTEVT S EVTTYPE=$P(^ORD(100.5,PRTEVT,0),U,2)<br/> E  S EVTTYPE=$P(^ORD(100.5,EVTID,0),U,2)<br/> I $D(^ORD(100.5,EVTID,0)) D<br/> . S EVTNAME=$P(^ORD(100.5,EVTID,0),U,1)<br/> . S EVTDISP=$P(^ORD(100.5,EVTID,0),U,8)<br/> . S EVTDLG=$P(^ORD(100.5,EVTID,0),U,4)<br/> S ORY=EVTTYPE_U_EVTID_U_EVTNAME_U_EVTDISP_U_EVTDLG</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}