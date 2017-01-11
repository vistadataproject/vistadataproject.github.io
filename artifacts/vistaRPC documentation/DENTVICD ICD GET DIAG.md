---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DENTVICD ICD GET DIAG 

 property | value 
--- | --- 
 label | DENTVICD ICD GET DIAG
 tag | ICD
 routine | [DENTVICD](http://code.osehra.org/dox/Routine_DENTVICD_source.html)
 return value type | SINGLE VALUE
 description | This will return specific information for a diagnosis code

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| VICD | LITERAL | 7 | true | This is the IEN or .01 field value from the DIAGNOSIS file (#80) | 
| CDT | LITERAL | 14 | true | This is the date to be used to check if the code was active as of that date. The default value is TODAY. | 




 Generated on January 11th 2017, 7:15:04 am