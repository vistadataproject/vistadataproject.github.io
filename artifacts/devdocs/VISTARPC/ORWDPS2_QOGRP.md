---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWDPS2 QOGRP<br/>
# ORWDPS2 QOGRP



## Properties

Property | Value
--- | ---
Label | QOGRP
Routine | [ORWDPS2](http://code.osehra.org/dox/Routine_ORWDPS2_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [QOGRP^ORWDPS2](http://code.osehra.org/dox/Routine_ORWDPS2_source.html)
Input Parameters | QOIFN
First Comment | {::nomarkdown}<pre><code>If quick order belong to Inpatient Med Order Group: return 1<br/>Otherwise, return 0</code></pre>{:/}
Code | {::nomarkdown}<pre><code> S VAL=0<br/> I '$L(QOIFN) Q<br/> N UDGRP,IPGRP,QOGRP,QOID,CLMED<br/> S QOID=+QOIFN<br/> Q:QOID<1<br/> S (UDGRP,IPGRP,QOGRP,CLMED)=0<br/> S UDGRP=$O(^ORD(100.98,"B","UD RX",UDGRP))<br/> S IPGRP=$O(^ORD(100.98,"B","INPATIENT MEDICATIONS",IPGRP))<br/> S CLMED=$O(^ORD(100.98,"B","CLINIC ORDERS",CLMED))<br/> S:IPGRP=0 IPGRP=$O(^ORD(100.98,"B","I RX",IPGRP))<br/> I $L($G(^ORD(101.41,QOID,0)))<1 Q<br/> S QOGRP=$P(^ORD(101.41,QOID,0),U,5)<br/> I UDGRP=QOGRP S VAL=1<br/> I (IPGRP=QOGRP)!(CLMED=QOGRP) S VAL=1<br/> K UDGRP,QOGRP,QOID,IPGRP,CLMED<br/></code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}