---
layout: default
title: RPCL documentation
---



## [RPCL](TableOfContent.md) --> ORWPT ID INFO 

 property | value 
--- | --- 
 name | ORWPT ID INFO
 description | {::nomarkdown}Returns identifying information for a patient.{:/}
 VISTA (8994) description | [nodeVISTA 8994](http://localhost:9000/query?fmql=DESCRIBE%208994%20FILTER%20(.01%3DORWPT%20ID%20INFO)&format=HTML)
 MUMPS implementation | [IDINFO^ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
 type | READ_STRUCTURED
 complexity | 
 uses | 
 return type | SINGLE VALUE
 return description | Returns identifying information for a patient.

### Input Parameters

| id | parameterType | required | description | example | listMemberParameters | 
| --- | --- | --- | --- | --- | --- | 
| DFN | LITERAL | true | {::nomarkdown}Patient id (DFN){:/} |  |  | 