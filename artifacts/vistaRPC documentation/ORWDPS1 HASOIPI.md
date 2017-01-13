---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDPS1 HASOIPI 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDPS1 HASOIPI{:/}
 tag | {::nomarkdown}HASOIPI{:/}
 routine | [ORWDPS1](http://code.osehra.org/dox/Routine_ORWDPS1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | Check if QO put orderable item's PI into Sig
 Input Parameters | {::nomarkdown}QOID{:/}
 Lines | ```
 N PIIEN,OIX
 S Y=0
 Q:'$D(^ORD(101.41,QOID,0))
 S PIIEN=$O(^ORD(101.41,"B","OR GTX PATIENT INSTRUCTIONS",0))
 Q:'PIIEN
 S OIX=0
 Q:'$D(^ORD(101.41,QOID,6,"D"))
 F  S OIX=$O(^ORD(101.41,+QOID,6,"D",OIX)) Q:'OIX  D
 . I OIX=PIIEN S Y=1 Q```




 Generated on January 13th 2017, 6:55:29 am