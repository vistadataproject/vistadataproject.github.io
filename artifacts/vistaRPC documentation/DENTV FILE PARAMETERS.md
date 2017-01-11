---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DENTV FILE PARAMETERS 

 property | value 
--- | --- 
 label | DENTV FILE PARAMETERS
 tag | PAR
 routine | [DENTVTP0](http://code.osehra.org/dox/Routine_DENTVTP0_source.html)
 return value type | SINGLE VALUE
 description | This RPC allows the Dental software to file word processing type parameters.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| ENT | LITERAL | 80 | true | Entity is the level where the parameter is stored (USR, PKG, SYS), etc. | 
| PAR | LITERAL | 80 | true | Parameter is the name of the parameter that values are stored under. | 
| INST | LITERAL | 80 | true | Instance is defaulted to 1 if not defined, otherwise it represents the next level where parameters are stored within the entity/parameter combination. | 
| DATA | LIST | 250 | true | DATA is the value of the parameter, passed as a list to allow setting of word processing parameter data. | 




 Generated on January 11th 2017, 7:15:04 am