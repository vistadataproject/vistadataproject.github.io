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


### Method description

 property | value 
--- | --- 
 Method comment | Return list matching Full SSN, but from RPL only.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| IEN | LITERAL | 15 | true | SSN in the format '999999999(P)'. | 




Generated on January 11th 2017, 6:34:23 am