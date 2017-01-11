---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGGPATPROC 

 property | value 
--- | --- 
 label | MAGGPATPROC
 tag | PRC
 routine | [MAGGTMC](http://code.osehra.org/dox/Routine_MAGGTMC_source.html)
 return value type | ARRAY
 description | Return a List of All Patient Procedures in subspeciality.For use when capturing Images and linking to a Medicine Procedure.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| MAGGZY | LITERAL | 245 | true | Input is '^' delimited string of info.Medicine SubSpecialty ^ Patient  ^ To Date ^ From DateIEN(^MCAR(697.2)  ^ DFN ^ TO DATE ^(FROM DATE def to TODAY) i.e.     \43^643^07/03/95\ | 