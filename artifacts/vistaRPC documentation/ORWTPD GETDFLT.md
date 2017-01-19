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

 property | value 
 --- | --- 
 Method | GETDFLT^[ORWTPD](http://code.osehra.org/dox/Routine_ORWTPD_source.html)
 Method comment | Get default time/occ limits for all reports
 Code | {::nomarkdown}  N VALUE<br> S Y=$$GET^XPAR("USR.`"_DUZ_"^DIV^SYS^PKG","ORWRP TIME/OCC LIMITS ALL",1,"I")<br> K VALUE{:/}


### CPRS

[Options/rOptions.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Options/rOptions.pas)


{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:28:51 am</p>{:/}