---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWDXA VERIFY<br/>
# ORWDXA VERIFY

Verify an order via CPRS GUI.

## Properties

Property | Value
--- | ---
Label | VERIFY
MUMPS Implementation | [ORWDXA](http://code.osehra.org/dox/Routine_ORWDXA_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [VERIFY^ORWDXA](http://code.osehra.org/dox/Routine_ORWDXA_source.html)
Method Comment | Verify order
Input Parameters | ORID, ESCODE, ORVER
First Comment | {::nomarkdown}<pre><code> validate ESCode</code></pre>{:/}
Code | {::nomarkdown}<pre><code> S ORVER=$G(ORVER,$S($D(^XUSEC("ORELSE",DUZ)):"N",$D(^XUSEC("OREMAS",DUZ)):"C",1:U))<br/> I ORVER'=U D<br/> . N ORIFN,ORES,ORI<br/> . ; VERIFY any replaced orders:<br/> . S ORIFN=ORID,ORES(ORIFN)="" D REPLCD^ORCACT1<br/> . S ORI="" F  S ORI=$O(ORES(ORI)) Q:ORI=""  D EN^ORCSEND(ORI,"VR","",""),UNLK1^ORX2(+ORI):ORI'=ORID ;ORID locked prior<br/> D GETBYIFN^ORWORR(.REC,ORID)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}