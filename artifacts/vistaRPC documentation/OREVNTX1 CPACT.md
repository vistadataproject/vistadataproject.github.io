---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; OREVNTX1 CPACT 

 property | value 
--- | --- 
 label | {::nomarkdown}OREVNTX1 CPACT{:/}
 tag | {::nomarkdown}CPACT{:/}
 routine | [OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | Return True/False to display active orders for copy
 Input Parameters | {::nomarkdown}EVT{:/}
 Lines | {::nomarkdown} Q:'EVT<br/> S ORY=0<br/> Q:'$D(^ORD(100.5,EVT,0))<br/> S ORY=$P(^ORD(100.5,EVT,0),U,11){:/}
 Leading comment lines | {::nomarkdown}EVT ptr to #100.5{:/}




 Generated on January 13th 2017, 7:15:28 am