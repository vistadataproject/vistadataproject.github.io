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

 property | value 
 --- | --- 
 Method | NAMECVT^[ORWU1](http://code.osehra.org/dox/Routine_ORWU1_source.html)
 Method comment | Returns text name(mixed-case) derived from IEN xref.
 First comment | {::nomarkdown}<pre> GRE/2002<br/> PKS-12/20/2002 Tag not presently used.<br/> Y=Returned value, IEN=Internal number</pre>{:/}
 Input parameters | {::nomarkdown}IEN{:/}
 Code | {::nomarkdown}  N ORNAME<br> S IEN=IEN_","<br> S ORNAME=$$GET1^DIQ(200,IEN,20.2)<br> S Y=$$NAMEFMT^XLFNAME(.ORNAME,"F","DcMPC"){:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:04:53 am</p>{:/}