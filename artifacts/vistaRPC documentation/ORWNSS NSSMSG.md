---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWNSS NSSMSG 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWNSS NSSMSG{:/}
 tag | {::nomarkdown}NSSMSG{:/}
 routine | [ORWNSS](http://code.osehra.org/dox/Routine_ORWNSS_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | NSSMSG^[ORWNSS](http://code.osehra.org/dox/Routine_ORWNSS_source.html)
 Method comment | Retrieve site message for None-Standard Schedule
 Code | {::nomarkdown}  N ORSRV<br> S ORY=""<br> S ORSRV=$G(^VA(200,DUZ,5)) I +ORSRV>0 S ORSRV=$P(ORSRV,U)<br> S ORY=$$GET^XPAR("SRV.`"_+$G(ORSRV)_"^DIV^SYS","ORWIM NSS MESSAGE",1,"I"){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/fOtherSchedule.pas">Orders/fOtherSchedule.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 7:57:52 am</p>{:/}