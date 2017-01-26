---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPCE I10IMPDT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWPCE I10IMPDT{:/}
 tag | {::nomarkdown}I10IMPDT{:/}
 routine | [ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC returns the ICD-10 implementation date in FM Date/Time format.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | I10IMPDT^[ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
 Method comment | Get ICD-10 Implementation Date
 Code | {::nomarkdown}  S RESULT=""<br> G:'$L($T(IMPDATE^LEXU)) I10IMPX<br> S RESULT=$$IMPDATE^LEXU("10D"){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas">rCore.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 2:53:15 am</p>{:/}