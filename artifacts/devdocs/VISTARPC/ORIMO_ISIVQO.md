---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORIMO ISIVQO<br/>
# ORIMO ISIVQO



## Properties

Property | Value
--- | ---
Label | ISIVQO
MUMPS Implementation | [ORIMO](http://code.osehra.org/dox/Routine_ORIMO_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [ISIVQO^ORIMO](http://code.osehra.org/dox/Routine_ORIMO_source.html)
Method Comment | Is it an IV quick order
Input Parameters | DLGID
Code | {::nomarkdown}<pre><code> S ORY=0<br/> Q:'$D(^ORD(101.41,DLGID,0))<br/> N IVGRP,DLGTYP,DLGGRP<br/> S IVGRP=$O(^ORD(100.98,"B","IV RX",0))<br/> S DLGTYP=$P($G(^ORD(101.41,DLGID,0)),U,4)<br/> S DLGGRP=$P($G(^ORD(101.41,DLGID,0)),U,5)<br/> I (DLGTYP="Q"),(DLGGRP=IVGRP) S ORY=1<br/></code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}