---
layout: default
title: RPCL documentation
---



## [RPCL](TableOfContent.md) &#8594; ORWPT PTINQ 

 property | value 
--- | --- 
 name | ORWPT PTINQ
 domain | Patient
 description | {::nomarkdown}Returns formatted patient inquiry text for display in GUI environment.{:/}
 VISTA (8994) description | [nodeVISTA 8994](../vistaRPC documentation/ORWPT PTINQ)
 MUMPS implementation | [PTINQ^ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
 type | READ_UNSTRUCTURED
 complexity | 
 uses | 
 return type | GLOBAL ARRAY
 return description | Returns formatted patient inquiry text for display in GUI environment.
 Method comment | Return formatted pt inquiry report

### Input Parameters

| id | parameterType | required | description | example | 
| --- | --- | --- | --- | --- | 
| DFN | LITERAL | true | {::nomarkdown}Patient id (DFN){:/} |  | 