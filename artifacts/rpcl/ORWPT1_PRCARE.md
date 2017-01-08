---
layout: default
title: RPCL documentation
---



## [RPCL](TableOfContent.md) --> ORWPT1 PRCARE 

 property | value 
--- | --- 
 name | ORWPT1 PRCARE
 domain | Patient
 description | {::nomarkdown}Return primary care, inpatient, and mental health summary information.{:/}
 VISTA (8994) description | [nodeVISTA 8994](http://localhost:9000/query?fmql=DESCRIBE%208994%20FILTER%20(.01%3DORWPT1%20PRCARE)&format=HTML)
 MUMPS implementation | [PRCARE^ORWPT1](http://code.osehra.org/dox/Routine_ORWPT1_source.html)
 type | READ_STRUCTURED
 complexity | 
 uses | 
 return type | SINGLE VALUE
 return description | Return primary care, inpatient, and mental health summary information.

### Input Parameters

| id | parameterType | required | description | example | 
| --- | --- | --- | --- | --- | 
| DFN | LITERAL | true | {::nomarkdown}Patient id (DFN){:/} |  | 