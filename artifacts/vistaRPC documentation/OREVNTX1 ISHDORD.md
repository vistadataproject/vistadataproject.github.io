---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; OREVNTX1 ISHDORD 

 property | value 
--- | --- 
 label | {::nomarkdown}OREVNTX1 ISHDORD{:/}
 tag | {::nomarkdown}ISHDORD{:/}
 routine | [OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | Return 1 if it's on-hold med order
 Input Parameters | {::nomarkdown}ORID{:/}
 Lines | ```
 Q:'+ORID
 Q:'$D(^OR(100,+ORID,0))
 N STS,HDSTS,ODGP,INPT,OUPT,MEDS,IVMD
 S HDSTS=$O(^ORD(100.01,"B","HOLD",0))
 S STS=$P($G(^OR(100,+ORID,3)),U,3)
 S INPT=$O(^ORD(100.98,"B","UD RX",0))
 S OUPT=$O(^ORD(100.98,"B","O RX",0))
 S MEDS=$O(^ORD(100.98,"B","RX",0))
 S IVMD=$O(^ORD(100.98,"B","IV RX",0))
 S ODGP=$P(^OR(100,+ORID,0),U,11)
 I (U_INPT_U_OUPT_U_MEDS_U_IVMD_U[U_ODGP_U),(HDSTS=STS) S ORY=1```




 Generated on January 13th 2017, 6:55:29 am