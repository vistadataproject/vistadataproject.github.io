---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; OREVNTX1 MULTS 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}OREVNTX1 MULTS{:/}
 tag | {::nomarkdown}MULTS{:/}
 routine | [OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | MULTS^[OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
 Method comment | Return specialty list for the EVTID(#100.5)
 Input parameters | {::nomarkdown}EVTID{:/}
 Code | ```  Q:'+EVTID
 N I,CNT,X,Y S (I,CNT)=0
 N PRTEVT
 S PRTEVT=0
 S PRTEVT=$P(^ORD(100.5,+EVTID,0),U,12)
 I PRTEVT>0 S EVTID=PRTEVT
 F  S I=$O(^ORD(100.5,+$G(EVTID),"TS",I)) Q:I<1  S X=+$G(^(I,0)) D
 . S Y=$$GET1^DIQ(45.7,X_",",.01)
 . S CNT=CNT+1,ORY(CNT)=X_U_Y```




 Generated on January 14th 2017, 7:26:35 am