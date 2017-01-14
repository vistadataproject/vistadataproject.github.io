---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; OREVNTX1 GTEVT1 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}OREVNTX1 GTEVT1{:/}
 tag | {::nomarkdown}GTEVT1{:/}
 routine | [OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | GTEVT1^[OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
 Method comment | Return Event information based on EVT ptr #100.5
 First comment | {::nomarkdown}EVT    ptr #100.5{:/}
 Input parameters | {::nomarkdown}EVT{:/}
 Code | {::nomarkdown}  Q:'+EVT<br> N EVTTYPE,EVTNAME,EVTDISP,EVTDLG,PRTEVT<br> S (EVTDLG,PRTEVT)=0<br> S PRTEVT=$P(^ORD(100.5,+EVT,0),U,12)<br> I PRTEVT>0 S EVTTYPE=$P(^ORD(100.5,PRTEVT,0),U,2)<br> E  S EVTTYPE=$P(^ORD(100.5,+EVT,0),U,2)<br> S EVTNAME=$P($G(^ORD(100.5,+EVT,0)),U,1)<br> S EVTDISP=$P($G(^ORD(100.5,+EVT,0)),U,8)<br> S EVTDLG=$P($G(^ORD(100.5,+EVT,0)),U,4)<br> S ORY=EVTTYPE_U_EVT_U_EVTNAME_U_EVTDISP_U_EVTDLG{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:46:15 am</p>{:/}