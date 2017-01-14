---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWDPS2 QOGRP 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWDPS2 QOGRP{:/}
 tag | {::nomarkdown}QOGRP{:/}
 routine | [ORWDPS2](http://code.osehra.org/dox/Routine_ORWDPS2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | QOGRP^[ORWDPS2](http://code.osehra.org/dox/Routine_ORWDPS2_source.html)
 First comment | {::nomarkdown}If quick order belong to Inpatient Med Order Group: return 1<br/>Otherwise, return 0{:/}
 Input parameters | {::nomarkdown}QOIFN{:/}
 Code | ```  S VAL=0
 I '$L(QOIFN) Q
 N UDGRP,IPGRP,QOGRP,QOID,CLMED
 S QOID=+QOIFN
 Q:QOID<1
 S (UDGRP,IPGRP,QOGRP,CLMED)=0
 S UDGRP=$O(^ORD(100.98,"B","UD RX",UDGRP))
 S IPGRP=$O(^ORD(100.98,"B","INPATIENT MEDICATIONS",IPGRP))
 S CLMED=$O(^ORD(100.98,"B","CLINIC ORDERS",CLMED))
 S:IPGRP=0 IPGRP=$O(^ORD(100.98,"B","I RX",IPGRP))
 I $L($G(^ORD(101.41,QOID,0)))<1 Q
 S QOGRP=$P(^ORD(101.41,QOID,0),U,5)
 I UDGRP=QOGRP S VAL=1
 I (IPGRP=QOGRP)!(CLMED=QOGRP) S VAL=1
 K UDGRP,QOGRP,QOID,IPGRP,CLMED
```




 Generated on January 14th 2017, 7:26:35 am