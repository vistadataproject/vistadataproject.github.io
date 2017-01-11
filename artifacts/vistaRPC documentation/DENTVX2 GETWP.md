---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DENTVX2 GETWP 

 property | value 
--- | --- 
 label | DENTVX2 GETWP
 tag | GETWP
 routine | [DENTVX2](http://code.osehra.org/dox/Routine_DENTVX2_source.html)
 return value type | ARRAY
 description | This RPC takes in an entity, parameter name, and instance number and returns the word processing information for the given instance of the parameter.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| ENT | LITERAL | 30 | true | Entity Name   SYS = System | 
| PAR | LITERAL | 30 | true | The name of the stored parameter from which you wish to obtain word processing fields. | 
| INST | LITERAL | 30 | true | This is the instance of the parameter you wish to return. If no value is passed, it will default to 1. | 




 ###### Generated on January 11th 2017, 6:39:43 am