---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORQQCN REMOVE MED RESULTS 

 property | value 
--- | --- 
 label | ORQQCN REMOVE MED RESULTS
 tag | REMOVE
 routine | [ORQQCN3](http://code.osehra.org/dox/Routine_ORQQCN3_source.html)
 return value type | SINGLE VALUE
 description | Allows removal of medicine results from a  procedure.


### Method description

 property | value 
--- | --- 
 Method comment | Remove a medicine result from a consult
 Leading comment lines | GMRCO - Internal file number of consult from File 123,GMRCRSLT - pointer to medicine result,GMRCAD - Date/Time medicine result was removed,GMRCORNP - Provider who removed the result from the consult

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| Consult IEN | LITERAL | 16 | true | Consult (procedure) IEN in file 123. | 
| Med Result | LITERAL | 24 | true | Variable pointer to medicine result. | 
| Date | LITERAL | 16 |  | Date the result was removed. | 
| Resp Person | LITERAL | 16 |  | Pointer to file 200 for the person removing the result. | 




Generated on January 11th 2017, 6:34:23 am