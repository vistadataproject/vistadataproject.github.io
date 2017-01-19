---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWTPD1 PUTEDATS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWTPD1 PUTEDATS{:/}
 tag | {::nomarkdown}PUTEDATS{:/}
 routine | [ORWTPD1](http://code.osehra.org/dox/Routine_ORWTPD1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | PUTEDATS^[ORWTPD1](http://code.osehra.org/dox/Routine_ORWTPD1_source.html)
 Method comment | Save Encounter app't date range params at user level.
 Input parameters | {::nomarkdown}Y{:/}
 Code | {::nomarkdown}  N ORSTART,ORSTOP,ORUSER<br> S OK=1,ORUSER=DUZ<br> S ORSTART=$P(Y,U,1)<br> S ORSTOP=$P(Y,U,2)<br> I ORSTART="" S ORSTART=0<br> I ORSTOP="" S ORSTOP=0<br> I ORSTART>999 S ORSTART=999<br> I ORSTOP>999 S ORSTART=999<br> D EN^XPAR(ORUSER_";VA(200,","ORQQEAPT ENC APPT START",1,ORSTART)<br> D EN^XPAR(ORUSER_";VA(200,","ORQQEAPT ENC APPT STOP",1,ORSTOP){:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:04:53 am</p>{:/}