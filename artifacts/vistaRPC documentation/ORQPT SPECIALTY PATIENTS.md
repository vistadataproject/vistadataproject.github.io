---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORQPT SPECIALTY PATIENTS 

 property | value 
--- | --- 
 label | ORQPT SPECIALTY PATIENTS
 tag | SPECPTS
 routine | [ORQPTQ2](http://code.osehra.org/dox/Routine_ORQPTQ2_source.html)
 return value type | ARRAY
 description | Function returns an array of patients linked to a treating specialty.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| SPECIALTY ID | LITERAL | 16 | true | The record number of the treating specialty from the Facility TreatingSpecialty File (#45.7). | 