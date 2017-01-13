---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDPS2 CHKGRP 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDPS2 CHKGRP{:/}
 tag | {::nomarkdown}CHKGRP{:/}
 routine | [ORWDPS2](http://code.osehra.org/dox/Routine_ORWDPS2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Input Parameters | {::nomarkdown}ORIFN{:/}
 Lines | ```
 S VAL=0
 I '$L(ORIFN) Q
 N UDGRP,IPGRP,OPGRP,ODGRP,ODID,CLMED
 S ODID=+ORIFN
 Q:ODID<1
 S (UDGRP,IPGRP,OPGRP,ODGRP,CLMED)=0
 S UDGRP=$O(^ORD(100.98,"B","UD RX",UDGRP))
 S OPGRP=$O(^ORD(100.98,"B","OUTPATIENT MEDICATIONS",OPGRP))
 S IPGRP=$O(^ORD(100.98,"B","INPATIENT MEDICATIONS",IPGRP))
 S CLMED=$O(^ORD(100.98,"B","CLINIC ORDERS",CLMED))
 S:IPGRP=0 IPGRP=$O(^ORD(100.98,"B","I RX",IPGRP))
 I $L($G(^OR(100,ODID,0)))<1 Q
 S ODGRP=$P(^OR(100,ODID,0),U,11)
 I (UDGRP=ODGRP)!(CLMED=ODGRP) S VAL=1
 I IPGRP=ODGRP S VAL=1
 I OPGRP=ODGRP S VAL=2
 K UDGRP,ODGRP,OPGRP,IPGRP,ODID,CLMED```
 Leading comment lines | {::nomarkdown}Inpatient Med Order Group or Clin Meds Group: return 1<br/>If order belong to Outpatient Med Order Grpoup: return 2<br/>Otherwise, return 0{:/}




 Generated on January 13th 2017, 6:55:29 am