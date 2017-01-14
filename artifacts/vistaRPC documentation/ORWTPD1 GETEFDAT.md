---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWTPD1 GETEFDAT 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWTPD1 GETEFDAT{:/}
 tag | {::nomarkdown}GETEFDAT{:/}
 routine | [ORWTPD1](http://code.osehra.org/dox/Routine_ORWTPD1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | Get non-user level Encounter appointment date range params.
 Lines | {::nomarkdown} N ORSTART,ORSTOP<br/> S INFO=""<br/> S ORSTART=$$GET^XPAR("DIV^SYS^PKG","ORQQEAPT ENC APPT START",1,"I")<br/> I 'ORSTART S ORSTART=60<br/> S ORSTOP=$$GET^XPAR("DIV^SYS^PKG","ORQQEAPT ENC APPT STOP",1,"I")<br/> I 'ORSTOP S ORSTOP=0<br/> S INFO=ORSTART_U_ORSTOP{:/}




 Generated on January 13th 2017, 7:15:28 am