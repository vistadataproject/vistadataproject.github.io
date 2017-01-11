---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORWMC PATIENT PROCEDURES 

 property | value 
--- | --- 
 label | ORWMC PATIENT PROCEDURES
 tag | PROD
 routine | [ORWMC](http://code.osehra.org/dox/Routine_ORWMC_source.html)
 return value type | GLOBAL ARRAY
 description | This remote procedure call returns a list of patient procedures for a specific patient.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DFN | LITERAL | 20 | true | Internal entry number of patient in the Patient file [^DPT]. | 