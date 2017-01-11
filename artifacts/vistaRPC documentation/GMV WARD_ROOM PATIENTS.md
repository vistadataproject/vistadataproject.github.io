---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; GMV WARD_ROOM PATIENTS 

 property | value 
--- | --- 
 label | GMV WARD_ROOM PATIENTS
 tag | ROOMPT
 routine | [GMVUTL7](http://code.osehra.org/dox/Routine_GMVUTL7_source.html)
 return value type | ARRAY
 description | Returns a list of patients in the ward and rooms specified.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| GMVWRD | LITERAL | 60 | true | Name of the ward (e.g., 2EAST). | 
| GMVRLST | LITERAL | 150 | true | The room numbers of the ward separated by comma (e.g., 200,210,220). | 




 Generated on January 11th 2017, 7:15:04 am