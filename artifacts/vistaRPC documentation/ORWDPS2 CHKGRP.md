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
 Lines | {::nomarkdown} S VAL=0<br/> I '$L(ORIFN) Q<br/> N UDGRP,IPGRP,OPGRP,ODGRP,ODID,CLMED<br/> S ODID=+ORIFN<br/> Q:ODID<1<br/> S (UDGRP,IPGRP,OPGRP,ODGRP,CLMED)=0<br/> S UDGRP=$O(^ORD(100.98,"B","UD RX",UDGRP))<br/> S OPGRP=$O(^ORD(100.98,"B","OUTPATIENT MEDICATIONS",OPGRP))<br/> S IPGRP=$O(^ORD(100.98,"B","INPATIENT MEDICATIONS",IPGRP))<br/> S CLMED=$O(^ORD(100.98,"B","CLINIC ORDERS",CLMED))<br/> S:IPGRP=0 IPGRP=$O(^ORD(100.98,"B","I RX",IPGRP))<br/> I $L($G(^OR(100,ODID,0)))<1 Q<br/> S ODGRP=$P(^OR(100,ODID,0),U,11)<br/> I (UDGRP=ODGRP)!(CLMED=ODGRP) S VAL=1<br/> I IPGRP=ODGRP S VAL=1<br/> I OPGRP=ODGRP S VAL=2<br/> K UDGRP,ODGRP,OPGRP,IPGRP,ODID,CLMED{:/}
 Leading comment lines | {::nomarkdown}Inpatient Med Order Group or Clin Meds Group: return 1<br/>If order belong to Outpatient Med Order Grpoup: return 2<br/>Otherwise, return 0{:/}




 Generated on January 13th 2017, 7:15:28 am