---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; OREVNTX1 ODPTEVID 

 property | value 
--- | --- 
 label | {::nomarkdown}OREVNTX1 ODPTEVID{:/}
 tag | {::nomarkdown}ODPTEVID{:/}
 routine | [OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | Return PtEvtID based on the ORID
 Input Parameters | {::nomarkdown}ORID{:/}
 Lines | ```
 Q:'$D(^OR(100,+ORID,0))
 S ORY=$P($G(^OR(100,+ORID,0)),U,17)```




 Generated on January 13th 2017, 6:55:29 am