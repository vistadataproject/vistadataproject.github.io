---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWTPD RSDFLT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWTPD RSDFLT{:/}
 tag | {::nomarkdown}RSDFLT{:/}
 routine | [ORWTPD](http://code.osehra.org/dox/Routine_ORWTPD_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}get system or package level default setting for all repors.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | RSDFLT^[ORWTPD](http://code.osehra.org/dox/Routine_ORWTPD_source.html)
 Method comment | Retrieve sys/pkg level default time/occ setting
 Code | {::nomarkdown}  N VALUE<br> S Y=$$GET^XPAR("DIV^SYS^PKG","ORWRP TIME/OCC LIMITS ALL",1,"I"){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code |  [Options/rOptions.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Options/rOptions.pas)


{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 4:54:07 am</p>{:/}