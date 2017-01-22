---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQCN ADMIN COMPLETE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQQCN ADMIN COMPLETE{:/}
 tag | {::nomarkdown}ADMCOMPL{:/}
 routine | [ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | ADMCOMPL^[ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html)
 Method comment | Admin users
 Input parameters | {::nomarkdown}ORIEN, ORFL, ORCOM, ORRESP, ORALRT, ORALTO, ORDATE{:/}
 First comment | {::nomarkdown}<pre> Administrative complete action</pre>{:/}
 Code | {::nomarkdown}  S Y=$$SFILE^GMRCGUIB(ORIEN,10,ORFL,ORRESP,DUZ,.ORCOM,ORALRT,ORALTO,ORDATE) ; "10"=Admin Complete{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Consults/rConsults.pas">Consults/rConsults.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:23:02 am</p>{:/}