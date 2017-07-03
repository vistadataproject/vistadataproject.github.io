---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; OREVNTX1 MULTS
# OREVNTX1 MULTS



Property | Value
--- | ---
Label | MULTS
Routine | [OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
Return Type | ARRAY




### MUMPS Method Description

Property | Value
--- | ---
Method | [MULTS^OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
Method Comment | Return specialty list for the EVTID(#100.5)
Input Parameters | EVTID
Code | {::nomarkdown}<pre><code> Q:'+EVTID<br/> N I,CNT,X,Y S (I,CNT)=0<br/> N PRTEVT<br/> S PRTEVT=0<br/> S PRTEVT=$P(^ORD(100.5,+EVTID,0),U,12)<br/> I PRTEVT>0 S EVTID=PRTEVT<br/> F  S I=$O(^ORD(100.5,+$G(EVTID),"TS",I)) Q:I<1  S X=+$G(^(I,0)) D<br/> . S Y=$$GET1^DIQ(45.7,X_",",.01)<br/> . S CNT=CNT+1,ORY(CNT)=X_U_Y</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}