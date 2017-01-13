---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDPS1 HASROUTE 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDPS1 HASROUTE{:/}
 tag | {::nomarkdown}HASROUTE{:/}
 routine | [ORWDPS1](http://code.osehra.org/dox/Routine_ORWDPS1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | Check if QO has a ROUTE defined
 Input Parameters | {::nomarkdown}QOID{:/}
 Lines | ```
 N ROUTID
 S Y=0,ROUTID=0
 S ROUTID=$O(^ORD(101.41,"B","OR GTX ROUTING",0))
 Q:'ROUTID
 Q:'$D(^ORD(101.41,+QOID))
 I $D(^ORD(101.41,+QOID,6,"D",ROUTID)) S Y=1```




 Generated on January 13th 2017, 6:55:29 am