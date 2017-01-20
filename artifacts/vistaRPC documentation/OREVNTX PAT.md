---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; OREVNTX PAT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}OREVNTX PAT{:/}
 tag | {::nomarkdown}PAT{:/}
 routine | [OREVNTX](http://code.osehra.org/dox/Routine_OREVNTX_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | PAT^[OREVNTX](http://code.osehra.org/dox/Routine_OREVNTX_source.html)
 Method comment | Returns currently delayed events for patient DFN
 Input parameters | {::nomarkdown}DFN{:/}
 Code | {::nomarkdown}  N EVT,CNT,X,Y S DFN=+$G(DFN),(EVT,CNT)=0<br> F  S EVT=+$O(^ORE(100.2,"AE",DFN,EVT)) Q:EVT<1  S Y=+$O(^(EVT,0)) D<br> . I $G(^ORE(100.2,Y,1)) K ^ORE(100.2,"AE",DFN,EVT,Y) Q<br> . Q:$$LAPSED(Y)  ;I $$EMPTY(Y) D CANCEL(Y) Q<br> . Q:$O(^ORE(100.2,"DAD",Y,0))  ;has children<br> . S X=$P($G(^ORD(100.5,EVT,0)),U,8),X="Delayed "_$$LOWER^VALM1(X)<br> . S CNT=CNT+1,ORY(CNT)=Y_U_X<br> S:CNT ORY(0)=CNT{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code |  [Orders/rOrders.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas)


{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 4:54:07 am</p>{:/}