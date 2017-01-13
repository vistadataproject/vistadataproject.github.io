---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPCE GAFURL 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWPCE GAFURL{:/}
 tag | {::nomarkdown}GAFURL{:/}
 routine | [ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns the GAF Scale Rating Form URL{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Returns the MH GAF Web Page URL
 Lines | ```
 S URL=""
 I $T(GAFURL^YTAPI5)'="" D
 .N ORY
 .D GAFURL^YTAPI5(.ORY)
 .I $G(ORY(1))="[DATA]" S URL=$G(ORY(2))```




 Generated on January 13th 2017, 6:55:29 am