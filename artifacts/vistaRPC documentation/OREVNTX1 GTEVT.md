---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; OREVNTX1 GTEVT 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}OREVNTX1 GTEVT{:/}
 tag | {::nomarkdown}GTEVT{:/}
 routine | [OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | GTEVT^[OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
 Method comment | Return Event infomation based on PTEVT ptr #100.2
 First comment | {::nomarkdown}EVTID     ptr #100.5{:/}
 Input parameters | {::nomarkdown}PTEVT{:/}
 Code | ```  Q:'+PTEVT
 N EVTID,EVTTYPE,EVTNAME,EVTDISP,EVTDLG,PRTEVT
 S (EVTTYPE,EVTNAME,EVTDISP,PRTEVT)=""
 S EVTDLG=0
 I '$P(^ORE(100.2,+$G(PTEVT),0),U,2) Q
 S EVTID=$$EVT^OREVNTX(PTEVT)
 S PRTEVT=$P(^ORD(100.5,EVTID,0),U,12)
 I PRTEVT S EVTTYPE=$P(^ORD(100.5,PRTEVT,0),U,2)
 E  S EVTTYPE=$P(^ORD(100.5,EVTID,0),U,2)
 I $D(^ORD(100.5,EVTID,0)) D
 . S EVTNAME=$P(^ORD(100.5,EVTID,0),U,1)
 . S EVTDISP=$P(^ORD(100.5,EVTID,0),U,8)
 . S EVTDLG=$P(^ORD(100.5,EVTID,0),U,4)
 S ORY=EVTTYPE_U_EVTID_U_EVTNAME_U_EVTDISP_U_EVTDLG```




 Generated on January 14th 2017, 7:26:35 am