---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; OREVNTX1 HAVEPRT 

 property | value 
--- | --- 
 label | {::nomarkdown}OREVNTX1 HAVEPRT{:/}
 tag | {::nomarkdown}HAVEPRT{:/}
 routine | [OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | return parent patient event from #100.2
 Input Parameters | {::nomarkdown}PTEVT{:/}
 Lines | ```
 Q:'+PTEVT
 S ORY=""
 S:$L($G(^ORE(100.2,PTEVT,1))) ORY=$P(^(1),U,5)```




 Generated on January 13th 2017, 6:55:29 am