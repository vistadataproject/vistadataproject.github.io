---
layout: default
title: VISTA Emulator Documentation
---

#### [Developer Documentation](../index) &#187; [Emulated RPCs](TableOfContents) &#187; ORWPCE GETSVC<br/>
# ORWPCE GETSVC

Calculates the correct service category.

**Native RPC Documentation:** [ORWPCE GETSVC](../VISTARPC/ORWPCE_GETSVC)

**MUMPS Implementation:** [GETSVC^ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)

## Properties

Property | Value
--- | ---
Type | Non-Clinical
Domain | Files
Class | UTILITY
Complexity | MODERATE
Uses | 
Return Type | SINGLE VALUE
Return Description | 
File Types Used | [40.7](../VDM/Clinic_Stop-40_7), [44](../VDM/Hospital_Location-44), 150.1
Parameters Used | None


## Input Parameters

Name | Type | Required | Description | Example
--- | --- | --- | --- | ---
SVC | LITERAL | false | Service Connection Category to start with | 
LOC | LITERAL | false | Pointer to the hospital location visited | 
INP | LITERAL | false | Patient Status 0 = Outpatient, 1 = Inpatient | 

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:34 pm</p>{:/}