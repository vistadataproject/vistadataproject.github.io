---
layout: default
title: VISTA Emulator Documentation
---

#### [Developer Documentation](../index) &#187; [Emulated RPCs](TableOfContents) &#187; ORWPT DIEDON<br/>
# ORWPT DIEDON

Returns date of death if patient has expired.  Otherwise returns 0.

**Native RPC Documentation:** [ORWPT DIEDON](../VISTARPC/ORWPT_DIEDON)

**MUMPS Implementation:** [DIEDON^ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)

## Properties

Property | Value
--- | ---
Type | Clinical
Domain | Patients
Class | READ_STRUCTURED
Complexity | Unknown
Uses | 
Return Type | SINGLE VALUE
Return Description | 
File Types Used | [2](../VDM/Patient-2)
Parameters Used | DFN


## Input Parameters

Name | Type | Required | Description | Example
--- | --- | --- | --- | ---
DFN | LITERAL | true | Patient id (DFN) | 

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:34 pm</p>{:/}