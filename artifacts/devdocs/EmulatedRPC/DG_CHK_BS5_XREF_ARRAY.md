---
layout: default
title: VISTA Emulator Documentation
---

## [Emulated RPCs](TableOfContents) &#8594; DG CHK BS5 XREF ARRAY
# DG CHK BS5 XREF ARRAY

CHECKS IF OTHER PATIENTS ON 'BS5' XREF WITH SAME LAST NAMERETURN 1 OR 0 IN 1ST STRING (-1 IF BAD DFN OR NO ZERO NODE).RETURNS ARRAY NODES WHERE TEXT IS PRECEEDED BY 0 AND PATIENT DATAIS PRECEEDED BY 1. PATIENT DATA WILL BE IN FOLLOWING FORMAT: 1^DFN^PATIENT NAME^DOB^SSN

Property | Value
--- | ---
Domain | Patients
VISTA RPC Documentation | [DG CHK BS5 XREF ARRAY](../VISTARPC/DG_CHK_BS5_XREF_ARRAY)
MUMPS Implementation | [GUIBS5A^DPTLK6](http://code.osehra.org/dox/Routine_DPTLK6_source.html)
Type | Unknown
Complexity | Unknown
Uses | N/A
Return Type | ARRAY
Return Description | N/A
File Types Used | [2](../VDM/Patient-2)
Parameters Used | DFN


### Input Parameters

Name | Type | Required | Description | Example
--- | --- | --- | --- | ---
DFN | LITERAL | true | PATIENT FILE IEN | 

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:06 pm</p>{:/}