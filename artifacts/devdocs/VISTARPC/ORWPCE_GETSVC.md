---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWPCE GETSVC<br/>
# ORWPCE GETSVC

Calculates the correct service category.

## Properties

Property | Value
--- | ---
Label | GETSVC
MUMPS Implementation | [ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
SVC | LITERAL |  |  | Initial Service Connection Category.
LOC | LITERAL |  |  | Pointer to the hospital location.
INP | LITERAL |  |  | Patient Status0 &#x3D; Outpatient1 &#x3D; Inpatient



## MUMPS Method Description

Property | Value
--- | ---
Method | [GETSVC^ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
Method Comment | Returns the correct Service Connected Category
Input Parameters | SVC, LOC, INP
Code | {::nomarkdown}<pre><code> N DSS,ORWSVC<br/> S DSS=$P($G(^SC(+LOC,0)),U,7)<br/> Q:'+DSS<br/> M ORWSVC=SVC<br/> S NEWSVC=$$SVC^PXKCO(.ORWSVC,DSS,INP,LOC) ; DBIA #3225</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Encounter/rPCE.pas">Encounter/rPCE.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}