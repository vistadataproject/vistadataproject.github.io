---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWU1 NAMECVT 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWU1 NAMECVT{:/}
 tag | {::nomarkdown}NAMECVT{:/}
 routine | [ORWU1](http://code.osehra.org/dox/Routine_ORWU1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | Returns text name(mixed-case) derived from IEN xref.
 Input Parameters | {::nomarkdown}IEN{:/}
 Lines | ```
 N ORNAME
 S IEN=IEN_","
 S ORNAME=$$GET1^DIQ(200,IEN,20.2)
 S Y=$$NAMEFMT^XLFNAME(.ORNAME,"F","DcMPC")```
 Leading comment lines | {::nomarkdown}GRE/2002<br/>PKS-12/20/2002 Tag not presently used.<br/>Y=Returned value, IEN=Internal number{:/}




 Generated on January 13th 2017, 6:55:29 am