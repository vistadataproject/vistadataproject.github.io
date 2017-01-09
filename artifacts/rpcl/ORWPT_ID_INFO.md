---
layout: default
title: RPCL documentation
---



## [RPCL](TableOfContent.md) &#8594; ORWPT ID INFO 

 property | value 
--- | --- 
 name | ORWPT ID INFO
 domain | Patient
 description | {::nomarkdown}Returns identifying information for a patient.{:/}
 VISTA (8994) description | [nodeVISTA 8994](../vistaRPC documentation/ORWPT ID INFO)
 MUMPS implementation | [IDINFO^ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
 type | READ_STRUCTURED
 complexity | 
 uses | 
 return type | SINGLE VALUE
 return description | Returns identifying information for a patient.
 Method comment | Return identifying information for a patient
 Leading comment lines | PID^DOB^SEX^VET^SC%^WARD^RM-BED^NAME

### Input Parameters

| id | parameterType | required | description | example | 
| --- | --- | --- | --- | --- | 
| DFN | LITERAL | true | {::nomarkdown}Patient id (DFN){:/} |  | 