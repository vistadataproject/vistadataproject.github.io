---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAG4 VALIDATE DATA 

 property | value 
--- | --- 
 label | MAG4 VALIDATE DATA
 tag | VAL
 routine | [MAGGSIV](http://code.osehra.org/dox/Routine_MAGGSIV_source.html)
 return value type | ARRAY
 description | Validates the Image Data Array

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| MAGARRAY | LIST |  | true | Each item in the Array is an '^' delimited piece of information.in the format Field^Value  OR  ActionCode^value | 
| ALL | LITERAL | 1 | true | All = 1 and All items in MAGARRAY will be validated.All = 0 and Validation stops after first item in MAGARRAY fails. | 




Generated on January 11th 2017, 6:34:23 am