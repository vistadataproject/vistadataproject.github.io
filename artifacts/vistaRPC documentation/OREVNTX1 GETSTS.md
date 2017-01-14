---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; OREVNTX1 GETSTS 

 property | value 
--- | --- 
 label | {::nomarkdown}OREVNTX1 GETSTS{:/}
 tag | {::nomarkdown}GETSTS{:/}
 routine | [OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | Return Order status
 Input Parameters | {::nomarkdown}ORDID{:/}
 Lines | {::nomarkdown} Q:'+ORDID<br/> Q:'$D(^OR(100,+ORDID,0))<br/> S ORY=$P($G(^OR(100,+ORDID,3)),U,3){:/}




 Generated on January 13th 2017, 7:15:28 am