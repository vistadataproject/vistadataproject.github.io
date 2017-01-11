---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORWPT FULLSSN RPL 

 property | value 
--- | --- 
 label | ORWPT FULLSSN RPL
 tag | FSSNRPL
 routine | [ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
 return value type | ARRAY
 description | Given an SSN in the format 999999999(P), return a list of matching patients based on Restricted Patient List.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| IEN | LITERAL | 15 | true | SSN in the format '999999999(P)'. | 