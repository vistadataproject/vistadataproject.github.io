---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWDPS1 HASROUTE 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWDPS1 HASROUTE{:/}
 tag | {::nomarkdown}HASROUTE{:/}
 routine | [ORWDPS1](http://code.osehra.org/dox/Routine_ORWDPS1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | HASROUTE^[ORWDPS1](http://code.osehra.org/dox/Routine_ORWDPS1_source.html)
 Method comment | Check if QO has a ROUTE defined
 Input parameters | {::nomarkdown}QOID{:/}
 Code | ```  N ROUTID
 S Y=0,ROUTID=0
 S ROUTID=$O(^ORD(101.41,"B","OR GTX ROUTING",0))
 Q:'ROUTID
 Q:'$D(^ORD(101.41,+QOID))
 I $D(^ORD(101.41,+QOID,6,"D",ROUTID)) S Y=1```




 Generated on January 14th 2017, 7:26:35 am