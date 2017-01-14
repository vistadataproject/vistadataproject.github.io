---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; OREVNTX1 CPACT 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}OREVNTX1 CPACT{:/}
 tag | {::nomarkdown}CPACT{:/}
 routine | [OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | CPACT^[OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
 Method comment | Return True/False to display active orders for copy
 First comment | {::nomarkdown}EVT ptr to #100.5{:/}
 Input parameters | {::nomarkdown}EVT{:/}
 Code | ```  Q:'EVT
 S ORY=0
 Q:'$D(^ORD(100.5,EVT,0))
 S ORY=$P(^ORD(100.5,EVT,0),U,11)```




 Generated on January 14th 2017, 7:26:35 am