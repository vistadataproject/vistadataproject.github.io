---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; OREVNTX1 DIV1 

 property | value 
--- | --- 
 label | {::nomarkdown}OREVNTX1 DIV1{:/}
 tag | {::nomarkdown}DIV1{:/}
 routine | [OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | Return division for EVT ptr #100.5
 Input Parameters | {::nomarkdown}EVT{:/}
 Lines | ```{::nomarkdown} Q:'+EVT<br/> S ORY=+$P($G(^ORD(100.5,+EVT,0)),U,3) S:ORY<1 ORY=+$G(DUZ(2))```{:/}




 Generated on January 13th 2017, 7:11:27 am