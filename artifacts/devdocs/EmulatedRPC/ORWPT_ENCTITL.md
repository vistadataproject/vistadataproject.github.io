---
layout: default
title: VISTA Emulator Documentation
---

## [Emulated RPCs](TableOfContents) &#8594; ORWPT ENCTITL
# ORWPT ENCTITL

Returns external values to display for encounter in format: LOCNAME^LOCABBR^ROOMBED^PROVNAME

Property | Value
--- | ---
Domain | Patients
VISTA RPC Documentation | [ORWPT ENCTITL](../VISTARPC/ORWPT_ENCTITL)
MUMPS Implementation | [ENCTITL^ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
Type | Unknown
Complexity | Unknown
Uses | N/A
Return Type | SINGLE VALUE
Return Description | N/A
File Types Used | [2](../VDM/Patient-2), [44](../VDM/Hospital_Location-44), [200](../VDM/New_Person-200)
Parameters Used | DFN, LOC, PROV


### Input Parameters

Name | Type | Required | Description | Example
--- | --- | --- | --- | ---
DFN | LITERAL | true | Patient id (DFN) | 
LOC | LITERAL | true | Hospital location identifier | 
PROV | LITERAL | true | Provider/User identifier | 

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:06 pm</p>{:/}