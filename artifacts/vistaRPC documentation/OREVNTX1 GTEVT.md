---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; OREVNTX1 GTEVT 

 property | value 
--- | --- 
 label | {::nomarkdown}OREVNTX1 GTEVT{:/}
 tag | {::nomarkdown}GTEVT{:/}
 routine | [OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | Return Event infomation based on PTEVT ptr #100.2
 Input Parameters | {::nomarkdown}PTEVT{:/}
 Lines | ```{::nomarkdown} Q:'+PTEVT<br/> N EVTID,EVTTYPE,EVTNAME,EVTDISP,EVTDLG,PRTEVT<br/> S (EVTTYPE,EVTNAME,EVTDISP,PRTEVT)=""<br/> S EVTDLG=0<br/> I '$P(^ORE(100.2,+$G(PTEVT),0),U,2) Q<br/> S EVTID=$$EVT^OREVNTX(PTEVT)<br/> S PRTEVT=$P(^ORD(100.5,EVTID,0),U,12)<br/> I PRTEVT S EVTTYPE=$P(^ORD(100.5,PRTEVT,0),U,2)<br/> E  S EVTTYPE=$P(^ORD(100.5,EVTID,0),U,2)<br/> I $D(^ORD(100.5,EVTID,0)) D<br/> . S EVTNAME=$P(^ORD(100.5,EVTID,0),U,1)<br/> . S EVTDISP=$P(^ORD(100.5,EVTID,0),U,8)<br/> . S EVTDLG=$P(^ORD(100.5,EVTID,0),U,4)<br/> S ORY=EVTTYPE_U_EVTID_U_EVTNAME_U_EVTDISP_U_EVTDLG```{:/}
 Leading comment lines | {::nomarkdown}EVTID     ptr #100.5{:/}




 Generated on January 13th 2017, 7:11:27 am