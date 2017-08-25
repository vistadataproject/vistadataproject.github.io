---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORQPT WARDRMBED<br/>
# ORQPT WARDRMBED

Returns the ward, room-bed for a patient.

## Properties

Property | Value
--- | ---
Label | WRB
MUMPS Implementation | [ORQPTQ3](http://code.osehra.org/dox/Routine_ORQPTQ3_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PATIENT ID | LITERAL | 16 | true | Patient identifier (DFN) from file #2



## MUMPS Method Description

Property | Value
--- | ---
Method | [WRB^ORQPTQ3](http://code.osehra.org/dox/Routine_ORQPTQ3_source.html)
Method Comment | return patient&#x27;s ward, room-bed: ward ien^ward name room-bed
Input Parameters | DFN
Code | {::nomarkdown}<pre><code> N WNAME,WIEN S WIEN="",Y=""<br/> S WNAME=$G(^DPT(DFN,.1)) I $L(WNAME) S WIEN=$O(^DIC(42,"B",WNAME,WIEN))<br/> I $L($G(WNAME)),$L($G(WIEN)) S Y=WIEN_U_WNAME_" "_$G(^DPT(DFN,.101))</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
NOT OSEHRA CPRS | {::nomarkdown}{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}