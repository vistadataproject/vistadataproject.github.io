---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWU1 NAMECVT 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWU1 NAMECVT{:/}
 tag | {::nomarkdown}NAMECVT{:/}
 routine | [ORWU1](http://code.osehra.org/dox/Routine_ORWU1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | NAMECVT^[ORWU1](http://code.osehra.org/dox/Routine_ORWU1_source.html)
 Method comment | Returns text name(mixed-case) derived from IEN xref.
 First comment | {::nomarkdown}GRE/2002<br/>PKS-12/20/2002 Tag not presently used.<br/>Y=Returned value, IEN=Internal number{:/}
 Input parameters | {::nomarkdown}IEN{:/}
 Code | ```  N ORNAME
 S IEN=IEN_","
 S ORNAME=$$GET1^DIQ(200,IEN,20.2)
 S Y=$$NAMEFMT^XLFNAME(.ORNAME,"F","DcMPC")```




 Generated on January 14th 2017, 7:26:35 am