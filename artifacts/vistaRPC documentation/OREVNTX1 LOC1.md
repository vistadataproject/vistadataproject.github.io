---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; OREVNTX1 LOC1 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}OREVNTX1 LOC1{:/}
 tag | {::nomarkdown}LOC1{:/}
 routine | [OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | LOC1^[OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
 Method comment | Return default hospital location ^SC( for EVT ptr #100.5
 Input parameters | {::nomarkdown}EVT{:/}
 Code | {::nomarkdown}  Q:'+EVT<br> S ORY=+$P($G(^ORD(100.5,+EVT,0)),U,9) S:ORY<1 ORY=+$G(ORL){:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 15th 2017, 12:59:50 am</p>{:/}