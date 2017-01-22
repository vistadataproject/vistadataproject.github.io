---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWTPD PUTOCM 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWTPD PUTOCM{:/}
 tag | {::nomarkdown}PUTOCM{:/}
 routine | [ORWTPD](http://code.osehra.org/dox/Routine_ORWTPD_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | PUTOCM^[ORWTPD](http://code.osehra.org/dox/Routine_ORWTPD_source.html)
 Method comment | Set value of "ORCH CONTEXT MEDS"
 Input parameters | {::nomarkdown}ORVAL{:/}
 Code | {::nomarkdown}  I '$L(ORVAL) D DEL^XPAR("USR.`"_DUZ,"ORCH CONTEXT MEDS",1) Q<br> N ORERR S ORERR=""<br> D EN^XPAR(DUZ_";VA(200,","ORCH CONTEXT MEDS",1,ORVAL,.ORERR)<br> S ORY=ORERR<br>{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Options/rOptions.pas">Options/rOptions.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:10:56 am</p>{:/}