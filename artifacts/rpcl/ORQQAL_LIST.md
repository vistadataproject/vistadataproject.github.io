---
layout: default
title: RPCL documentation
---



## [RPCL](TableOfContent.md) --> ORQQAL LIST 

 property | value 
--- | --- 
 name | ORQQAL LIST
 description | {::nomarkdown}Returns a list of allergies for a patient.{:/}
 VISTA (8994) description | [nodeVISTA 8994](http://localhost:9000/query?fmql=DESCRIBE%208994%20FILTER%20(.01%3DORQQAL%20LIST)&format=HTML)
 MUMPS implementation | [LIST^ORQQAL](http://code.osehra.org/dox/Routine_ORQQAL_source.html)
 type | READ_STRUCTURED
 complexity | LOW
 uses | 
 return type | ARRAY
 return description | 

### Input Parameters

| id | parameterType | required | description | example | listMemberParameters | 
| --- | --- | --- | --- | --- | --- | 
| PATIENT_ID | REFERENCE | true | {::nomarkdown}The record number of the patient (DFN) from the Patient file (#2).{:/} | 25 |  | 