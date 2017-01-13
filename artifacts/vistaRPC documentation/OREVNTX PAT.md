---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; OREVNTX PAT 

 property | value 
--- | --- 
 label | {::nomarkdown}OREVNTX PAT{:/}
 tag | {::nomarkdown}PAT{:/}
 routine | [OREVNTX](http://code.osehra.org/dox/Routine_OREVNTX_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | Returns currently delayed events for patient DFN
 Input Parameters | {::nomarkdown}DFN{:/}
 Lines | ```
 N EVT,CNT,X,Y S DFN=+$G(DFN),(EVT,CNT)=0
 F  S EVT=+$O(^ORE(100.2,"AE",DFN,EVT)) Q:EVT<1  S Y=+$O(^(EVT,0)) D
 . I $G(^ORE(100.2,Y,1)) K ^ORE(100.2,"AE",DFN,EVT,Y) Q
 . Q:$$LAPSED(Y)  ;I $$EMPTY(Y) D CANCEL(Y) Q
 . Q:$O(^ORE(100.2,"DAD",Y,0))  ;has children
 . S X=$P($G(^ORD(100.5,EVT,0)),U,8),X="Delayed "_$$LOWER^VALM1(X)
 . S CNT=CNT+1,ORY(CNT)=Y_U_X
 S:CNT ORY(0)=CNT```




 Generated on January 13th 2017, 6:55:29 am