---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWDPS2 CHKGRP<br/>
# ORWDPS2 CHKGRP



## Properties

Property | Value
--- | ---
Label | CHKGRP
Routine | [ORWDPS2](http://code.osehra.org/dox/Routine_ORWDPS2_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [CHKGRP^ORWDPS2](http://code.osehra.org/dox/Routine_ORWDPS2_source.html)
Input Parameters | ORIFN
First Comment | {::nomarkdown}<pre><code>Inpatient Med Order Group or Clin Meds Group: return 1<br/>If order belong to Outpatient Med Order Grpoup: return 2<br/>Otherwise, return 0</code></pre>{:/}
Code | {::nomarkdown}<pre><code> S VAL=0<br/> I '$L(ORIFN) Q<br/> N UDGRP,IPGRP,OPGRP,ODGRP,ODID,CLMED<br/> S ODID=+ORIFN<br/> Q:ODID<1<br/> S (UDGRP,IPGRP,OPGRP,ODGRP,CLMED)=0<br/> S UDGRP=$O(^ORD(100.98,"B","UD RX",UDGRP))<br/> S OPGRP=$O(^ORD(100.98,"B","OUTPATIENT MEDICATIONS",OPGRP))<br/> S IPGRP=$O(^ORD(100.98,"B","INPATIENT MEDICATIONS",IPGRP))<br/> S CLMED=$O(^ORD(100.98,"B","CLINIC ORDERS",CLMED))<br/> S:IPGRP=0 IPGRP=$O(^ORD(100.98,"B","I RX",IPGRP))<br/> I $L($G(^OR(100,ODID,0)))<1 Q<br/> S ODGRP=$P(^OR(100,ODID,0),U,11)<br/> I (UDGRP=ODGRP)!(CLMED=ODGRP) S VAL=1<br/> I IPGRP=ODGRP S VAL=1<br/> I OPGRP=ODGRP S VAL=2<br/> K UDGRP,ODGRP,OPGRP,IPGRP,ODID,CLMED</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}