---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORQPT SPECIALTY PATIENTS<br/>
# ORQPT SPECIALTY PATIENTS

Function returns an array of patients linked to a treating specialty.

## Properties

Property | Value
--- | ---
Label | SPECPTS
MUMPS Implementation | [ORQPTQ2](http://code.osehra.org/dox/Routine_ORQPTQ2_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
SPECIALTY ID | LITERAL | 16 | true | The record number of the treating specialty from the Facility TreatingSpecialty File (#45.7).



## MUMPS Method Description

Property | Value
--- | ---
Method | [SPECPTS^ORQPTQ2](http://code.osehra.org/dox/Routine_ORQPTQ2_source.html)
Method Comment | RETURN LIST OF PATIENTS LINKED TO A TREATING SPECIALTY
Input Parameters | SPEC
Code | {::nomarkdown}<pre><code> I +$G(SPEC)<1 S Y(1)="^No specialty identified" Q <br/> N ORI,DFN<br/> S ORI=1,DFN=0<br/> F  S DFN=$O(^DPT("ATR",SPEC,DFN)) Q:DFN'>0  S Y(ORI)=+DFN_"^"_$P(^DPT(+DFN,0),"^"),ORI=ORI+1<br/> S:+$G(Y(1))<1 Y(1)="^No patients found."</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas">rCore.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}