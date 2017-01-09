---
layout: default
title: RPCL documentation
---



## [RPCL](TableOfContent.md) &#8594; ORWPT INPLOC 

 property | value 
--- | --- 
 name | ORWPT INPLOC
 domain | Patient
 description | {::nomarkdown}Returns the patient's current location if an inpatient.{:/}
 VISTA (8994) description | [nodeVISTA 8994](../vistaRPC documentation/ORWPT INPLOC)
 MUMPS implementation | [INPLOC^ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
 type | READ_STRUCTURED
 complexity | 
 uses | 
 return type | SINGLE VALUE
 return description | Returns the patient's current location if an inpatient.
 Method comment | Return a patient's current location

### Input Parameters

| id | parameterType | required | description | example | 
| --- | --- | --- | --- | --- | 
| DFN | LITERAL | true | {::nomarkdown}Patient id (DFN){:/} |  | 