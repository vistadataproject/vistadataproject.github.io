---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; OREVNTX1 GETSTS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}OREVNTX1 GETSTS{:/}
 tag | {::nomarkdown}GETSTS{:/}
 routine | [OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | GETSTS^[OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
 Method comment | Return Order status
 Input parameters | {::nomarkdown}ORDID{:/}
 Code | {::nomarkdown}  Q:'+ORDID<br> Q:'$D(^OR(100,+ORDID,0))<br> S ORY=$P($G(^OR(100,+ORDID,3)),U,3){:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 15th 2017, 12:59:50 am</p>{:/}