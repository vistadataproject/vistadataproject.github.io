---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWTPD GETDFLT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWTPD GETDFLT{:/}
 tag | {::nomarkdown}GETDFLT{:/}
 routine | [ORWTPD](http://code.osehra.org/dox/Routine_ORWTPD_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}get default setting for all reports(time/occ limits){:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | GETDFLT^[ORWTPD](http://code.osehra.org/dox/Routine_ORWTPD_source.html)
 Method comment | Get default time/occ limits for all reports
 Code | {::nomarkdown}  N VALUE<br> S Y=$$GET^XPAR("USR.`"_DUZ_"^DIV^SYS^PKG","ORWRP TIME/OCC LIMITS ALL",1,"I")<br> K VALUE{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Options/rOptions.pas">Options/rOptions.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on February 3rd 2017, 7:02:04 am</p>{:/}