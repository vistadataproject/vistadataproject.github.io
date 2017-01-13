---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWTPD1 PUTEDATS 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWTPD1 PUTEDATS{:/}
 tag | {::nomarkdown}PUTEDATS{:/}
 routine | [ORWTPD1](http://code.osehra.org/dox/Routine_ORWTPD1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | Save Encounter app't date range params at user level.
 Input Parameters | {::nomarkdown}Y{:/}
 Lines | ```
 N ORSTART,ORSTOP,ORUSER
 S OK=1,ORUSER=DUZ
 S ORSTART=$P(Y,U,1)
 S ORSTOP=$P(Y,U,2)
 I ORSTART="" S ORSTART=0
 I ORSTOP="" S ORSTOP=0
 I ORSTART>999 S ORSTART=999
 I ORSTOP>999 S ORSTART=999
 D EN^XPAR(ORUSER_";VA(200,","ORQQEAPT ENC APPT START",1,ORSTART)
 D EN^XPAR(ORUSER_";VA(200,","ORQQEAPT ENC APPT STOP",1,ORSTOP)```




 Generated on January 13th 2017, 6:55:29 am