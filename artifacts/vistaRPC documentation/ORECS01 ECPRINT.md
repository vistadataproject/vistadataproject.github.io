---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORECS01 ECPRINT 

 property | value 
--- | --- 
 label | {::nomarkdown}ORECS01 ECPRINT{:/}
 tag | {::nomarkdown}ECPRINT{:/}
 routine | [ORECS01](http://code.osehra.org/dox/Routine_ORECS01_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | Print ECS report to Device
 Input Parameters | {::nomarkdown}ORECARY{:/}
 Lines | ```
 Q:'$D(ORECARY)
 D RPTEN^ECRRPC(.ORY,.ORECARY)```




 Generated on January 13th 2017, 6:55:29 am