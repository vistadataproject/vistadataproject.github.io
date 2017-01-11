---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; VAFC REMOTE PDAT 

 property | value 
--- | --- 
 label | VAFC REMOTE PDAT
 tag | PDAT
 routine | [VAFCRPC](http://code.osehra.org/dox/Routine_VAFCRPC_source.html)
 return value type | ARRAY
 description | This Remote Procedure Call will return the text Patient MPI/PD Data Inquiry report to a remote site.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| ICN | LITERAL | 16 | true | This should be the ICN without the 'V' or the checksum. | 
| SSN | LITERAL | 9 | true |  | 




 Generated on January 11th 2017, 7:15:04 am