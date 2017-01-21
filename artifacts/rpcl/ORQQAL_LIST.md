---
layout: default
title: RPCL documentation
---



## [RPCL](TableOfContent.md) &#8594; ORQQAL LIST 

 property | value 
--- | --- 
 name | ORQQAL LIST
 domain | Allergy
 description | {::nomarkdown}Returns a list of allergies for a patient.{:/}
 VA RPC Documentation | [see 8994 and method descriptions](../vistaRPC documentation/ORQQAL LIST)
 MUMPS implementation | [LIST^ORQQAL](http://code.osehra.org/dox/Routine_ORQQAL_source.html)
 type | READ_STRUCTURED
 complexity | LOW
 uses | 
 return type | ARRAY
 return description | 

### Input Parameters

| id | parameterType | required | description | example | 
| --- | --- | --- | --- | --- | 
| PATIENT_ID | REFERENCE | true | {::nomarkdown}The record number of the patient (DFN) from the Patient file (#2).{:/} | 25 | 

{::nomarkdown} <br/><p style="font-size: 11px">Generated on January 21st 2017, 4:22:40 am</p>{:/}