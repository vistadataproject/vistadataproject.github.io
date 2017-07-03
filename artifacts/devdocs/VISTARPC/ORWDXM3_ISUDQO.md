---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWDXM3 ISUDQO
# ORWDXM3 ISUDQO



Property | Value
--- | ---
Label | ISUDQO
Routine | [ORWDXM3](http://code.osehra.org/dox/Routine_ORWDXM3_source.html)
Return Type | SINGLE VALUE




### MUMPS Method Description

Property | Value
--- | ---
Method | [ISUDQO^ORWDXM3](http://code.osehra.org/dox/Routine_ORWDXM3_source.html)
Method Comment | True: is unit dose quick order
Input Parameters | DLGID
Code | {::nomarkdown}<pre><code> S ORY=0<br/> Q:'$D(^ORD(101.41,DLGID,0))<br/> N CLODGRP,CLIVDGRP,UDGRP1,UDGRP2,DLGTYP,DLGGRP<br/> S UDGRP1=$O(^ORD(100.98,"B","UD RX",0))<br/> S UDGRP2=$O(^ORD(100.98,"B","I RX",0))<br/> S CLODGRP=$O(^ORD(100.98,"B","CLINIC MEDICATIONS",""))<br/> S CLIVDGRP=$O(^ORD(100.98,"B","CLINIC INFUSIONS",""))<br/> S DLGTYP=$P($G(^ORD(101.41,DLGID,0)),U,4)<br/> S DLGGRP=$P($G(^ORD(101.41,DLGID,0)),U,5)<br/> I (DLGTYP="Q"),((DLGGRP=UDGRP1)!(DLGGRP=UDGRP2)!(DLGGRP=CLODGRP)!(DLGGRP=CLIVDGRP)) S ORY=1<br/></code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}