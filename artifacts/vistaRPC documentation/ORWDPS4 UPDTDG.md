---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWDPS4 UPDTDG 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWDPS4 UPDTDG{:/}
 tag | {::nomarkdown}UPDTDG{:/}
 routine | [ORWDPS4](http://code.osehra.org/dox/Routine_ORWDPS4_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | UPDTDG^[ORWDPS4](http://code.osehra.org/dox/Routine_ORWDPS4_source.html)
 Method comment | Update Inpt order for outpatient DG to Inpt DG
 Input parameters | {::nomarkdown}ORID{:/}
 Code | ```  Q:'$D(^OR(100,+ORID,0))
 N UDDG
 S UDDG=$O(^ORD(100.98,"B","UD RX",0))
 S $P(^OR(100,+ORID,0),U,11)=UDDG```




 Generated on January 14th 2017, 7:26:36 am