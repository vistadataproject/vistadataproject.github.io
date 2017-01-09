---
layout: default
title: RPCL documentation
---



## [RPCL](TableOfContent.md) &#8594; ORQQPL DETAIL 

 property | value 
--- | --- 
 name | ORQQPL DETAIL
 domain | Problem
 description | {::nomarkdown}Function returns a string of detailed information for a problem.{:/}
 VISTA (8994) description | [nodeVISTA 8994](../vistaRPC documentation/ORQQPL DETAIL)
 MUMPS implementation | [DETAIL^ORQQPL](http://code.osehra.org/dox/Routine_ORQQPL_source.html)
 type | UNSTRUCTURED READ
 complexity | HIGH
 uses | 
 return type | ARRAY
 return description | String of detailed problem information delimited by \^\.  String includes:\\r
 Method comment | RETURN DETAILED PROBLEM DATA

### Input Parameters

| id | parameterType | required | description | example | 
| --- | --- | --- | --- | --- | 
| DFN | REFERENCE | true | {::nomarkdown}Patient IEN{:/} | 25 | 
| PROBLEM_ID | REFERENCE | true | {::nomarkdown}The record number of the problem from the Problem File (#9000011).{:/} | 1 | 
| ID | LITERAL |  | {::nomarkdown}undocumented parameter, source code marks this as ID but never used in M code{:/} |  | 