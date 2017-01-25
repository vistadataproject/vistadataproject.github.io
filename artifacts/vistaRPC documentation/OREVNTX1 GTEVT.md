---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; OREVNTX1 GTEVT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}OREVNTX1 GTEVT{:/}
 tag | {::nomarkdown}GTEVT{:/}
 routine | [OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | GTEVT^[OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
 Method comment | Return Event infomation based on PTEVT ptr #100.2
 Input parameters | {::nomarkdown}PTEVT{:/}
 First comment | {::nomarkdown}<pre>EVTID     ptr #100.5</pre>{:/}
 Code | {::nomarkdown}  Q:'+PTEVT<br> N EVTID,EVTTYPE,EVTNAME,EVTDISP,EVTDLG,PRTEVT<br> S (EVTTYPE,EVTNAME,EVTDISP,PRTEVT)=""<br> S EVTDLG=0<br> I '$P(^ORE(100.2,+$G(PTEVT),0),U,2) Q<br> S EVTID=$$EVT^OREVNTX(PTEVT)<br> S PRTEVT=$P(^ORD(100.5,EVTID,0),U,12)<br> I PRTEVT S EVTTYPE=$P(^ORD(100.5,PRTEVT,0),U,2)<br> E  S EVTTYPE=$P(^ORD(100.5,EVTID,0),U,2)<br> I $D(^ORD(100.5,EVTID,0)) D<br> . S EVTNAME=$P(^ORD(100.5,EVTID,0),U,1)<br> . S EVTDISP=$P(^ORD(100.5,EVTID,0),U,8)<br> . S EVTDLG=$P(^ORD(100.5,EVTID,0),U,4)<br> S ORY=EVTTYPE_U_EVTID_U_EVTNAME_U_EVTDISP_U_EVTDLG{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 12:25:50 am</p>{:/}