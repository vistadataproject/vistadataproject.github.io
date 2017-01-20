---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWU1 NAMECVT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWU1 NAMECVT{:/}
 tag | {::nomarkdown}NAMECVT{:/}
 routine | [ORWU1](http://code.osehra.org/dox/Routine_ORWU1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | NAMECVT^[ORWU1](http://code.osehra.org/dox/Routine_ORWU1_source.html)
 Method comment | Returns text name(mixed-case) derived from IEN xref.
 First comment | {::nomarkdown}<pre> GRE/2002<br/> PKS-12/20/2002 Tag not presently used.<br/> Y=Returned value, IEN=Internal number</pre>{:/}
 Input parameters | {::nomarkdown}IEN{:/}
 Code | {::nomarkdown}  N ORNAME<br> S IEN=IEN_","<br> S ORNAME=$$GET1^DIQ(200,IEN,20.2)<br> S Y=$$NAMEFMT^XLFNAME(.ORNAME,"F","DcMPC"){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code |  [rCore.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas)


{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 4:54:07 am</p>{:/}