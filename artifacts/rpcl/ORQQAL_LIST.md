---
layout: default
title: RPCL documentation
---



## [RPCL](TableOfContent.md) --> ORQQAL LIST 

 property | value 
--- | --- 
 name | ORQQAL LIST
 description | Returns a list of allergies for a patient.
 MUMPS implementation | LIST^ORQQAL
 type | READ_STRUCTURED
 complexity | LOW
 uses | 
 return type | ARRAY
 return description | 

### Input Parameters

| id | parameterType | required | description | example | listMemberParameters | 
| --- | --- | --- | --- | --- | --- | 
| PATIENT_ID | REFERENCE | true | The record number of the patient (DFN) from the Patient file (#2). | 25 |  | 