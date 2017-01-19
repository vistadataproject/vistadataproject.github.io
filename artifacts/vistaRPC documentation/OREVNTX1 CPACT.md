---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; OREVNTX1 CPACT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}OREVNTX1 CPACT{:/}
 tag | {::nomarkdown}CPACT{:/}
 routine | [OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | CPACT^[OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
 Method comment | Return True/False to display active orders for copy
 First comment | {::nomarkdown}<pre> EVT ptr to #100.5</pre>{:/}
 Input parameters | {::nomarkdown}EVT{:/}
 Code | {::nomarkdown}  Q:'EVT<br> S ORY=0<br> Q:'$D(^ORD(100.5,EVT,0))<br> S ORY=$P(^ORD(100.5,EVT,0),U,11){:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:04:53 am</p>{:/}