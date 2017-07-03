---
layout: default
title: VISTA Emulator Documentation
---

## [Emulated RPCs](TableOfContents) &#8594; ORWPCE GETSVC
# ORWPCE GETSVC

Calculates the correct service category.

Property | Value
--- | ---
Domain | Non-Clinical: Files
VISTA RPC Documentation | [ORWPCE GETSVC](../VISTARPC/ORWPCE_GETSVC)
MUMPS Implementation | [GETSVC^ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
Type | UTILITY
Complexity | MODERATE
Uses | N/A
Return Type | SINGLE VALUE
Return Description | N/A
File Types Used | [40.7](../VDM/Clinic_Stop-40_7), [44](../VDM/Hospital_Location-44), 150.1
Parameters Used | None


### Input Parameters

Name | Type | Required | Description | Example
--- | --- | --- | --- | ---
SVC | LITERAL | false | Service Connection Category to start with | 
LOC | LITERAL | false | Pointer to the hospital location visited | 
INP | LITERAL | false | Patient Status 0 = Outpatient, 1 = Inpatient | 

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:06 pm</p>{:/}