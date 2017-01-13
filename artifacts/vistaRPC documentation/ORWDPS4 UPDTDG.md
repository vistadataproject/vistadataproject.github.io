---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDPS4 UPDTDG 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDPS4 UPDTDG{:/}
 tag | {::nomarkdown}UPDTDG{:/}
 routine | [ORWDPS4](http://code.osehra.org/dox/Routine_ORWDPS4_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | Update Inpt order for outpatient DG to Inpt DG
 Input Parameters | {::nomarkdown}ORID{:/}
 Lines | ```
 Q:'$D(^OR(100,+ORID,0))
 N UDDG
 S UDDG=$O(^ORD(100.98,"B","UD RX",0))
 S $P(^OR(100,+ORID,0),U,11)=UDDG```




 Generated on January 13th 2017, 6:55:29 am