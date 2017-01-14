---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; OREVNTX1 NAME 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}OREVNTX1 NAME{:/}
 tag | {::nomarkdown}NAME{:/}
 routine | [OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | NAME^[OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
 Method comment | Return Event name from #100.5, given PTEVT ptr #100.2
 Input parameters | {::nomarkdown}PTEVT{:/}
 Code | ```  I PTEVT'>0 S ORY="" Q
 S ORY=$$NAME^OREVNTX(PTEVT)```




 Generated on January 14th 2017, 7:26:35 am