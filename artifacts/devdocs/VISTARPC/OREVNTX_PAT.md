---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; OREVNTX PAT
# OREVNTX PAT



Property | Value
--- | ---
Label | PAT
Routine | [OREVNTX](http://code.osehra.org/dox/Routine_OREVNTX_source.html)
Return Type | ARRAY




### MUMPS Method Description

Property | Value
--- | ---
Method | [PAT^OREVNTX](http://code.osehra.org/dox/Routine_OREVNTX_source.html)
Method Comment | Returns currently delayed events for patient DFN
Input Parameters | DFN
Code | {::nomarkdown}<pre><code> N EVT,CNT,X,Y S DFN=+$G(DFN),(EVT,CNT)=0<br/> F  S EVT=+$O(^ORE(100.2,"AE",DFN,EVT)) Q:EVT<1  S Y=+$O(^(EVT,0)) D<br/> . I $G(^ORE(100.2,Y,1)) K ^ORE(100.2,"AE",DFN,EVT,Y) Q<br/> . Q:$$LAPSED(Y)  ;I $$EMPTY(Y) D CANCEL(Y) Q<br/> . Q:$O(^ORE(100.2,"DAD",Y,0))  ;has children<br/> . S X=$P($G(^ORD(100.5,EVT,0)),U,8),X="Delayed "_$$LOWER^VALM1(X)<br/> . S CNT=CNT+1,ORY(CNT)=Y_U_X<br/> S:CNT ORY(0)=CNT</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}