---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MPIF EXT PDAT REMOTE 

 property | value 
--- | --- 
 label | MPIF EXT PDAT REMOTE
 tag | PATINFO
 routine | [MPIFEXT2](http://code.osehra.org/dox/Routine_MPIFEXT2_source.html)
 return value type | ARRAY
 description | Extended PDAT call remote.  ICN or SSN can be passed.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| ICN | LITERAL | 16 | true | ICN for patient requesting data on. | 
| SSN | LITERAL | 9 | true | SSN for patient data to be returned on. | 
| RPC | LITERAL | 1 | true |  | 
| EXIST | LITERAL | 1 | true | If there is no value or 0 is passed, then a new request for data should be made.  If there is a 1 passed, then if there is an existing request in the ^XTMP(\MPIF EXT PDAT\,ICN/SSN,SITE) global, then that request should be used to return the data -- request had already been made. | 




 Generated on January 11th 2017, 7:15:04 am