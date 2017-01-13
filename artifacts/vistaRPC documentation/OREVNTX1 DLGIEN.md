---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; OREVNTX1 DLGIEN 

 property | value 
--- | --- 
 label | {::nomarkdown}OREVNTX1 DLGIEN{:/}
 tag | {::nomarkdown}DLGIEN{:/}
 routine | [OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | Return Order Dialog IEN based on name
 Input Parameters | {::nomarkdown}DLGNAME{:/}
 Lines | ```
 Q:'$D(^ORD(101.41,"B",DLGNAME))
 S ORY=$O(^ORD(101.41,"B",DLGNAME,0))```




 Generated on January 13th 2017, 6:55:29 am