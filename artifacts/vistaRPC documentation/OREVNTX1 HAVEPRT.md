---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; OREVNTX1 HAVEPRT 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}OREVNTX1 HAVEPRT{:/}
 tag | {::nomarkdown}HAVEPRT{:/}
 routine | [OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | HAVEPRT^[OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
 Method comment | return parent patient event from #100.2
 Input parameters | {::nomarkdown}PTEVT{:/}
 Code | ```  Q:'+PTEVT
 S ORY=""
 S:$L($G(^ORE(100.2,PTEVT,1))) ORY=$P(^(1),U,5)```




 Generated on January 14th 2017, 7:26:35 am