---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; OREVNTX1 GETSTS 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}OREVNTX1 GETSTS{:/}
 tag | {::nomarkdown}GETSTS{:/}
 routine | [OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | GETSTS^[OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
 Method comment | Return Order status
 Input parameters | {::nomarkdown}ORDID{:/}
 Code | ```  Q:'+ORDID
 Q:'$D(^OR(100,+ORDID,0))
 S ORY=$P($G(^OR(100,+ORDID,3)),U,3)```




 Generated on January 14th 2017, 7:26:35 am