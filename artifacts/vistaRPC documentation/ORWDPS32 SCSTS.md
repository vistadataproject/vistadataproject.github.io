---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWDPS32 SCSTS 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWDPS32 SCSTS{:/}
 tag | {::nomarkdown}SCSTS{:/}
 routine | [ORWDPS33](http://code.osehra.org/dox/Routine_ORWDPS33_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Return pharmacy-related service connected eligibility for a patient.{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | SCSTS^[ORWDPS33](http://code.osehra.org/dox/Routine_ORWDPS33_source.html)
 Method comment | return service connected eligibility for patient
 Input parameters | {::nomarkdown}ORVP<br/>ORDRUG{:/}
 Code | ```  N ORWP94 S ORWP94=$O(^ORD(101.41,"AB","PS MEDS",0))>0
 I $L($T(SC^PSOCP)),$$SC^PSOCP(+ORVP,+$G(ORDRUG)) S VAL=0 G XSCSTS
 I 'ORWP94,(+$$RXST^IBARXEU(+ORVP)>0) S VAL=0 G XSCSTS
 S VAL=1```




 Generated on January 14th 2017, 7:26:35 am