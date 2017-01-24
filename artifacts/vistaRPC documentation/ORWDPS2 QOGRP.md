---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDPS2 QOGRP 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDPS2 QOGRP{:/}
 tag | {::nomarkdown}QOGRP{:/}
 routine | [ORWDPS2](http://code.osehra.org/dox/Routine_ORWDPS2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | QOGRP^[ORWDPS2](http://code.osehra.org/dox/Routine_ORWDPS2_source.html)
 Input parameters | {::nomarkdown}QOIFN{:/}
 First comment | {::nomarkdown}<pre>If quick order belong to Inpatient Med Order Group: return 1<br/>Otherwise, return 0</pre>{:/}
 Code | {::nomarkdown}  S VAL=0<br> I '$L(QOIFN) Q<br> N UDGRP,IPGRP,QOGRP,QOID,CLMED<br> S QOID=+QOIFN<br> Q:QOID<1<br> S (UDGRP,IPGRP,QOGRP,CLMED)=0<br> S UDGRP=$O(^ORD(100.98,"B","UD RX",UDGRP))<br> S IPGRP=$O(^ORD(100.98,"B","INPATIENT MEDICATIONS",IPGRP))<br> S CLMED=$O(^ORD(100.98,"B","CLINIC ORDERS",CLMED))<br> S:IPGRP=0 IPGRP=$O(^ORD(100.98,"B","I RX",IPGRP))<br> I $L($G(^ORD(101.41,QOID,0)))<1 Q<br> S QOGRP=$P(^ORD(101.41,QOID,0),U,5)<br> I UDGRP=QOGRP S VAL=1<br> I (IPGRP=QOGRP)!(CLMED=QOGRP) S VAL=1<br> K UDGRP,QOGRP,QOID,IPGRP,CLMED<br>{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:30:12 am</p>{:/}