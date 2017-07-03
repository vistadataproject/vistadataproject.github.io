---
layout: default
title: VISTA Emulator Documentation
---

## [Emulated RPCs](TableOfContents) &#8594; ORQQAL LIST
# ORQQAL LIST

Returns a list of allergies for a patient.

Property | Value
--- | ---
Domain | Allergies
VISTA RPC Documentation | [ORQQAL LIST](../VISTARPC/ORQQAL_LIST)
MUMPS Implementation | [LIST^ORQQAL](http://code.osehra.org/dox/Routine_ORQQAL_source.html)
Type | READ_STRUCTURED
Complexity | LOW
Uses | N/A
Return Type | ARRAY
Return Description | Array of patient allergies.  Returned data is delimited by "^" and includes: allergen/reactant, reactions/symptoms (multiple symptoms/reactions are possible - delimited by ";"), severity, allergy id (record number from the Patient Allergies file (#120.8).
File Types Used | [120.8](../VDM/Patient_Allergies-120_8), [120.86](../VDM/Adverse_Reaction_Assessment-120_86)
Parameters Used | PATIENT_ID


### Input Parameters

Name | Type | Required | Description | Example
--- | --- | --- | --- | ---
PATIENT_ID | REFERENCE | true | The record number of the patient (DFN) from the Patient file (#2). | 25

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:06 pm</p>{:/}