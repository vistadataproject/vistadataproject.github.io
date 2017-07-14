---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORIMO IMOOD<br/>
# ORIMO IMOOD



## Properties

Property | Value
--- | ---
Label | IMOOD
Routine | [ORIMO](http://code.osehra.org/dox/Routine_ORIMO_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [IMOOD^ORIMO](http://code.osehra.org/dox/Routine_ORIMO_source.html)
Method Comment | Is it an IMO order?
Input Parameters | ORDERID
Code | {::nomarkdown}<pre><code> Q:'$D(^OR(100,+ORDERID,0))<br/> N PIMO,DGRP,CMGRP,CIGRP<br/> S (DGRP,CMGRP,CIGRP,ORY)=0<br/> S DGRP=$P($G(^OR(100,+ORDERID,0)),U,11)<br/> S CMGRP=$O(^ORD(100.98,"B","CLINIC MEDICATIONS",""))<br/> S CIGRP=$O(^ORD(100.98,"B","CLINIC INFUSIONS",""))<br/> I DGRP=CMGRP S ORY=1<br/> I DGRP=CIGRP S ORY=1</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}