---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; OREVNTX1 ISHDORD<br/>
# OREVNTX1 ISHDORD



## Properties

Property | Value
--- | ---
Label | ISHDORD
MUMPS Implementation | [OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [ISHDORD^OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
Method Comment | Return 1 if it&#x27;s on-hold med order
Input Parameters | ORID
Code | {::nomarkdown}<pre><code> Q:'+ORID<br/> Q:'$D(^OR(100,+ORID,0))<br/> N STS,HDSTS,ODGP,INPT,OUPT,MEDS,IVMD<br/> S HDSTS=$O(^ORD(100.01,"B","HOLD",0))<br/> S STS=$P($G(^OR(100,+ORID,3)),U,3)<br/> S INPT=$O(^ORD(100.98,"B","UD RX",0))<br/> S OUPT=$O(^ORD(100.98,"B","O RX",0))<br/> S MEDS=$O(^ORD(100.98,"B","RX",0))<br/> S IVMD=$O(^ORD(100.98,"B","IV RX",0))<br/> S ODGP=$P(^OR(100,+ORID,0),U,11)<br/> I (U_INPT_U_OUPT_U_MEDS_U_IVMD_U[U_ODGP_U),(HDSTS=STS) S ORY=1</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Executable Only | {::nomarkdown}{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}