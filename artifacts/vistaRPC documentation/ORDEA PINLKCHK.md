---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORDEA PINLKCHK 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORDEA PINLKCHK{:/}
 tag | {::nomarkdown}PINLKCHK{:/}
 routine | [ORDEA](http://code.osehra.org/dox/Routine_ORDEA_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | PINLKCHK^[ORDEA](http://code.osehra.org/dox/Routine_ORDEA_source.html)
 Method comment | check if the current user has an active PIN lock
 First comment | {::nomarkdown}<pre>ORY=1 if there is an active lock and ORY=0 if no active lock</pre>{:/}
 Code | {::nomarkdown}  S ORY=0<br> Q:'$D(^XTMP("OR DEA PIN LOCK",DUZ))<br> N ORDIFF<br> S ORDIFF=$$FMDIFF^XLFDT($$NOW^XLFDT,$G(^XTMP("OR DEA PIN LOCK",DUZ)),2)<br> I ORDIFF<900 S ORY=1{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/fReview.pas">fReview.pas</a><br/> <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/fOrdersSign.pas">Orders/fOrdersSign.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 4:25:14 am</p>{:/}