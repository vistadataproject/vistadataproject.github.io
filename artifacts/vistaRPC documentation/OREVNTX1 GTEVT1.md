---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; OREVNTX1 GTEVT1 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}OREVNTX1 GTEVT1{:/}
 tag | {::nomarkdown}GTEVT1{:/}
 routine | [OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | GTEVT1^[OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
 Method comment | Return Event information based on EVT ptr #100.5
 First comment | {::nomarkdown}EVT    ptr #100.5{:/}
 Input parameters | {::nomarkdown}EVT{:/}
 Code | ```  Q:'+EVT
 N EVTTYPE,EVTNAME,EVTDISP,EVTDLG,PRTEVT
 S (EVTDLG,PRTEVT)=0
 S PRTEVT=$P(^ORD(100.5,+EVT,0),U,12)
 I PRTEVT>0 S EVTTYPE=$P(^ORD(100.5,PRTEVT,0),U,2)
 E  S EVTTYPE=$P(^ORD(100.5,+EVT,0),U,2)
 S EVTNAME=$P($G(^ORD(100.5,+EVT,0)),U,1)
 S EVTDISP=$P($G(^ORD(100.5,+EVT,0)),U,8)
 S EVTDLG=$P($G(^ORD(100.5,+EVT,0)),U,4)
 S ORY=EVTTYPE_U_EVT_U_EVTNAME_U_EVTDISP_U_EVTDLG```




 Generated on January 14th 2017, 7:26:35 am