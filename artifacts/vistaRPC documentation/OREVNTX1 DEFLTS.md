---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; OREVNTX1 DEFLTS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}OREVNTX1 DEFLTS{:/}
 tag | {::nomarkdown}DEFLTS{:/}
 routine | [OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | DEFLTS^[OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
 Method comment | Return default specialty for EVTID(#100.5)
 Input parameters | {::nomarkdown}EVTID{:/}
 Code | {::nomarkdown}  Q:'+EVTID<br> N PRTEVT<br> S PRTEVT=0<br> S PRTEVT=$P(^ORD(100.5,+EVTID,0),U,12)<br> I PRTEVT>0 S EVTID=PRTEVT<br> S ORY=$$DEFTS^ORCDADT(EVTID){:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 8:55:11 am</p>{:/}