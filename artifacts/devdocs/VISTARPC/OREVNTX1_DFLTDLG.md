---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; OREVNTX1 DFLTDLG<br/>
# OREVNTX1 DFLTDLG



## Properties

Property | Value
--- | ---
Label | DFLTDLG
Routine | [OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [DFLTDLG^OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
Method Comment | Return event default dialog IEN
Input Parameters | EVTID
Code | {::nomarkdown}<pre><code> S ORY=0<br/> S:$P($G(^ORD(100.5,+EVTID,0)),U,12) EVTID=$P($G(^ORD(100.5,+EVTID,0)),U,12)<br/> Q:'$D(^ORD(100.5,+EVTID,0))<br/> S ORY=$P(^ORD(100.5,+EVTID,0),U,4)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}