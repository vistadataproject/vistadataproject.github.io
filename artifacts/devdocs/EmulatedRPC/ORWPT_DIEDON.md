---
layout: default
title: VISTA Emulator Documentation
---

## [Emulated RPCs](TableOfContents) &#8594; ORWPT DIEDON
# ORWPT DIEDON

Returns date of death if patient has expired.  Otherwise returns 0.

Property | Value
--- | ---
Domain | Patients
VISTA RPC Documentation | [ORWPT DIEDON](../VISTARPC/ORWPT_DIEDON)
MUMPS Implementation | [DIEDON^ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
Type | READ_STRUCTURED
Complexity | Unknown
Uses | N/A
Return Type | SINGLE VALUE
Return Description | N/A
File Types Used | [2](../VDM/Patient-2)
Parameters Used | DFN


### Input Parameters

Name | Type | Required | Description | Example
--- | --- | --- | --- | ---
DFN | LITERAL | true | Patient id (DFN) | 

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:06 pm</p>{:/}