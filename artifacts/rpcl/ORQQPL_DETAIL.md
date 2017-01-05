---
layout: default
title: RPCL documentation
---



## [RPCL](TableOfContent.md) --> ORQQPL DETAIL 

 property | value 
--- | --- 
 name | ORQQPL DETAIL
 description | Function returns a string of detailed information for a problem.
 MUMPS implementation | DETAIL^ORQQPL
 type | UNSTRUCTURED READ
 complexity | HIGH
 uses | 
 return type | ARRAY
 return description | String of detailed problem information delimited by \^\.  String includes:\\r

### Input Parameters

| id | parameterType | required | description | example | listMemberParameters | 
| --- | --- | --- | --- | --- | --- | 
| DFN | REFERENCE | true | Patient IEN | 25 |  | 
| PROBLEM_ID | REFERENCE | true | The record number of the problem from the Problem File (#9000011). | 1 |  | 
| ID | LITERAL |  | undocumented parameter, source code marks this as ID but never used in M code |  |  | 