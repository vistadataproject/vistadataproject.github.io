---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIR CHANGE PRIMARY ADDRESS 

 property | value 
--- | --- 
 label | DSIR CHANGE PRIMARY ADDRESS
 tag | CHPRIADD
 routine | [DSIROI6](http://code.osehra.org/dox/Routine_DSIROI6_source.html)
 return value type | SINGLE VALUE
 description | This RPC updates the pointer to the primary address for a givenrequestor.  The addresS is stored in the 5 node of 19620.12.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| RQSTR | LITERAL |  | true | RQSTR - Pointer to the requestor file (19620.12) | 
| ADDRPTR | LITERAL |  | true | ADDRPTR - Pointer to the address file (19620.92) | 




 Generated on January 11th 2017, 7:15:04 am