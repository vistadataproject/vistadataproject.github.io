---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPCE XAM 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWPCE XAM{:/}
 tag | {::nomarkdown}XAM{:/}
 routine | [ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list of exams for a clinic.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | get list of exams for clinic
 Input Parameters | {::nomarkdown}CLINIC{:/}
 Lines | ```
 D GETLST^IBDF18A(CLINIC,"PX SELECT EXAMS","LST")```




 Generated on January 13th 2017, 6:55:29 am