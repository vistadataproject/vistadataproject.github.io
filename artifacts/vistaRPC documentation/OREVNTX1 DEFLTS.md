---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; OREVNTX1 DEFLTS 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}OREVNTX1 DEFLTS{:/}
 tag | {::nomarkdown}DEFLTS{:/}
 routine | [OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | DEFLTS^[OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
 Method comment | Return default specialty for EVTID(#100.5)
 Input parameters | {::nomarkdown}EVTID{:/}
 Code | ```  Q:'+EVTID
 N PRTEVT
 S PRTEVT=0
 S PRTEVT=$P(^ORD(100.5,+EVTID,0),U,12)
 I PRTEVT>0 S EVTID=PRTEVT
 S ORY=$$DEFTS^ORCDADT(EVTID)```




 Generated on January 14th 2017, 7:26:35 am