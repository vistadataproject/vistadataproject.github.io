---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORQPT WARD PATIENTS 

 property | value 
--- | --- 
 label | ORQPT WARD PATIENTS
 tag | WARDPTS
 routine | [ORQPTQ2](http://code.osehra.org/dox/Routine_ORQPTQ2_source.html)
 return value type | ARRAY
 description | Function returns a list of patients on a ward.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| WARD ID | LITERAL | 16 | true | The record number of the ward from the Ward Location File (#42). | 