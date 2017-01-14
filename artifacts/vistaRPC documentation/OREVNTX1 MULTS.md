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
 Code | ```  Q:'+EVTID<br/> N I,CNT,X,Y S (I,CNT)=0<br/> N PRTEVT<br/> S PRTEVT=0<br/> S PRTEVT=$P(^ORD(100.5,+EVTID,0),U,12)<br/> I PRTEVT>0 S EVTID=PRTEVT<br/> F  S I=$O(^ORD(100.5,+$G(EVTID),"TS",I)) Q:I<1  S X=+$G(^(I,0)) D<br/> . S Y=$$GET1^DIQ(45.7,X_",",.01)<br/> . S CNT=CNT+1,ORY(CNT)=X_U_Y```{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:36:25 am</p>{:/}