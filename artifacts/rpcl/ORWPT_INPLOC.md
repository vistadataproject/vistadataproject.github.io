---
layout: default
title: RPCL documentation
---



## [RPCL](TableOfContent.md) --> ORWPT INPLOC 

 property | value 
--- | --- 
 name | ORWPT INPLOC
 description | {::nomarkdown}Returns the patient's current location if an inpatient.{:/}
 VISTA (8994) description | [nodeVISTA 8994](http://localhost:9000/query?fmql=DESCRIBE%208994%20FILTER%20(.01%3DORWPT%20INPLOC)&format=HTML)
 MUMPS implementation | [INPLOC^ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
 type | READ_STRUCTURED
 complexity | 
 uses | 
 return type | SINGLE VALUE
 return description | Returns the patient's current location if an inpatient.

### Input Parameters

| id | parameterType | required | description | example | listMemberParameters | 
| --- | --- | --- | --- | --- | --- | 
| DFN | LITERAL | true | {::nomarkdown}Patient id (DFN){:/} |  |  | 