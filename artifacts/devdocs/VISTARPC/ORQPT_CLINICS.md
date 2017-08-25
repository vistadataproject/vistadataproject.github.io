---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORQPT CLINICS<br/>
# ORQPT CLINICS

Function returns a list of clinics.

## Properties

Property | Value
--- | ---
Label | CLIN
MUMPS Implementation | [ORQPTQ2](http://code.osehra.org/dox/Routine_ORQPTQ2_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [CLIN^ORQPTQ2](http://code.osehra.org/dox/Routine_ORQPTQ2_source.html)
Method Comment | RETURN LIST OF CLINICS
Code | {::nomarkdown}<pre><code> N ORLST,IEN,I<br/> D GETLST^XPAR(.ORLST,"ALL","ORWD COMMON CLINIC")<br/> S I=0 F  S I=$O(ORLST(I)) Q:'I  D<br/> . S IEN=$P(ORLST(I),U,2) I $$ACTLOC^ORWU(IEN)=1 D<br/> .. S Y(I)=IEN_U_$P(^SC(IEN,0),U,1)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
NOT OSEHRA CPRS | {::nomarkdown}{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}