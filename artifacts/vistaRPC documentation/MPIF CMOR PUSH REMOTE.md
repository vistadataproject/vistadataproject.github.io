---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MPIF CMOR PUSH REMOTE 

 property | value 
--- | --- 
 label | MPIF CMOR PUSH REMOTE
 tag | EN
 routine | [MPIFRCMP](http://code.osehra.org/dox/Routine_MPIFRCMP_source.html)
 return value type | SINGLE VALUE
 description | This remote procedure call (RPC) allows the DQ team to remotely create a change of CMOR push.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| ICN | LITERAL | 10 | true | ICN - not including the checksum | 
| NCMOR | LITERAL | 3 | true | The station number of the site that is to become the CMOR. | 




 Generated on January 11th 2017, 7:15:04 am