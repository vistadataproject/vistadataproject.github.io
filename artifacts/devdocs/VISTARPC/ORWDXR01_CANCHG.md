---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWDXR01 CANCHG<br/>
# ORWDXR01 CANCHG



## Properties

Property | Value
--- | ---
Label | CANCHG
Routine | [ORWDXR01](http://code.osehra.org/dox/Routine_ORWDXR01_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [CANCHG^ORWDXR01](http://code.osehra.org/dox/Routine_ORWDXR01_source.html)
Input Parameters | ORIFN, TXTOD
First Comment | {::nomarkdown}<pre><code>If it's an pending or unsigned unreleased renewed order, can edit=True</code></pre>{:/}
Code | {::nomarkdown}<pre><code> S ORY=0<br/> Q:'$D(^OR(100,+ORIFN,0))<br/> I TXTOD D TXTCAN(.ORY) Q<br/> N OUTGRP,URELSTS,USIGSTS,RNTYPE,PDSTS<br/> N ODGRP,ODREL,ODSIG,ODTYPE,LSTACT<br/> S OUTGRP=$O(^ORD(100.98,"B","O RX",0))<br/> S URELSTS=$O(^ORD(100.01,"B","UNRELEASED",0))<br/> S PDSTS=$O(^ORD(100.01,"B","PENDING",0))<br/> S USIGSTS=2 ; unsigned order<br/> S RNTYPE=2 ; renew action<br/> S LSTACT=$P($G(^OR(100,+ORIFN,3)),U,7)<br/> S ODGRP=$P($G(^OR(100,+ORIFN,0)),U,11)<br/> S ODREL=$P($G(^OR(100,+ORIFN,3)),U,3)<br/> S ODSIG=$P($G(^OR(100,+ORIFN,8,LSTACT,0)),U,4)<br/> S ODTYPE=$P($G(^OR(100,+ORIFN,3)),U,11)<br/> I (ODGRP=OUTGRP),(ODREL=URELSTS),(ODSIG=USIGSTS),(ODTYPE=RNTYPE) S ORY=1</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}