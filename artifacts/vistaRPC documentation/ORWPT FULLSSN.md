---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORWPT FULLSSN 

 property | value 
--- | --- 
 label | ORWPT FULLSSN
 tag | FULLSSN
 routine | [ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
 return value type | ARRAY
 description | Given an SSN in the format 999999999(P), return a list of matchingpatients.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | IEN | LITERAL | 15 | true | SSN in the format '999999999(P)'. | 