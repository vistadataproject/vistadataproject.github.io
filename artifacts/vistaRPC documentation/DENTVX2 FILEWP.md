---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DENTVX2 FILEWP 

 property | value 
--- | --- 
 label | DENTVX2 FILEWP
 tag | FILEWP
 routine | [DENTVX2](http://code.osehra.org/dox/Routine_DENTVX2_source.html)
 return value type | SINGLE VALUE
 description | This RPC takes in an entity, parameter name, instance number, and the data to be filed.  

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| ENT | LITERAL | 3 | true | Entity you wish to assign this Word Processing parameter to. | 
| PAR | LITERAL | 250 | true | The word processing parameter you wish to file. | 
| INST | LITERAL | 3 | true | Instance value of the filed parameter. | 
| DATA | LIST | 250 | true | This is an array which contains the data to be stored in the parameter. | 




 ###### Generated on January 11th 2017, 6:39:43 am