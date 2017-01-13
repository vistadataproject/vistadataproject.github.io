---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; OREVNTX1 LOC 

 property | value 
--- | --- 
 label | {::nomarkdown}OREVNTX1 LOC{:/}
 tag | {::nomarkdown}LOC{:/}
 routine | [OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | Return default hospital location ^SC( for PTEVT ptr #100.2
 Input Parameters | {::nomarkdown}PTEVT{:/}
 Lines | ```
 Q:'+PTEVT
 S ORY=$$LOC^OREVNTX(PTEVT)
 S ORY=+ORY```




 Generated on January 13th 2017, 6:55:29 am