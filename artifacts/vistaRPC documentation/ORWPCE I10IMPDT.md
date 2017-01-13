---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPCE I10IMPDT 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWPCE I10IMPDT{:/}
 tag | {::nomarkdown}I10IMPDT{:/}
 routine | [ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC returns the ICD-10 implementation date in FM Date/Time format.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Get ICD-10 Implementation Date
 Lines | ```
 S RESULT=""
 G:'$L($T(IMPDATE^LEXU)) I10IMPX
 S RESULT=$$IMPDATE^LEXU("10D")```




 Generated on January 13th 2017, 6:55:29 am