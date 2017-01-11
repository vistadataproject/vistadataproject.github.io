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


### Method description

 property | value 
--- | --- 
 Method comment | Return procedures
 Leading comment lines | RPC: ORWMC PROCEDURES,See RPC definition for details on input and output parameters

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DFN | LITERAL | 20 | true | Internal entry number of patient in the Patient file [^DPT]. | 




 ###### Generated on January 11th 2017, 6:39:42 am