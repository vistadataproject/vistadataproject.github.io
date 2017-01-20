---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWRP2 GETLKUP 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWRP2 GETLKUP{:/}
 tag | {::nomarkdown}GETLKUP{:/}
 routine | [ORWRP2](http://code.osehra.org/dox/Routine_ORWRP2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This gets the last Adhoc Health Summary lookup used by a user in CPRS.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | GETLKUP^[ORWRP2](http://code.osehra.org/dox/Routine_ORWRP2_source.html)
 Method comment | Get Adhoc lookup selection
 Code | {::nomarkdown}  S ORY=$$GET^XPAR("ALL","ORWRP ADHOC LOOKUP",1,"I"){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code |  [rReports.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rReports.pas)


{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 4:54:07 am</p>{:/}