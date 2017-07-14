---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; OREVNTX1 ISPASS<br/>
# OREVNTX1 ISPASS



## Properties

Property | Value
--- | ---
Label | ISPASS
Routine | [OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [ISPASS^OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
Method Comment | Return 1 if it&#x27;s a pass event
Input Parameters | PTEVTID, EVTTYPE
Code | {::nomarkdown}<pre><code> S ORY=$$EVT^OREVNTX(PTEVTID)<br/> S ORY=$P($G(^ORD(100.5,+ORY,0)),U,7)<br/> I EVTTYPE="T",ORY,ORY<4 S ORY=1<br/> E  S ORY=0</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}