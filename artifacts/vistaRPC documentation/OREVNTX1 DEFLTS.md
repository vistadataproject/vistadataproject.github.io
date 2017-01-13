---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; OREVNTX1 DEFLTS 

 property | value 
--- | --- 
 label | {::nomarkdown}OREVNTX1 DEFLTS{:/}
 tag | {::nomarkdown}DEFLTS{:/}
 routine | [OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | Return default specialty for EVTID(#100.5)
 Input Parameters | {::nomarkdown}EVTID{:/}
 Lines | ```{::nomarkdown} Q:'+EVTID<br/> N PRTEVT<br/> S PRTEVT=0<br/> S PRTEVT=$P(^ORD(100.5,+EVTID,0),U,12)<br/> I PRTEVT>0 S EVTID=PRTEVT<br/> S ORY=$$DEFTS^ORCDADT(EVTID)```{:/}




 Generated on January 13th 2017, 7:11:27 am