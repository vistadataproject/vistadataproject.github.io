---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; EC GETNATPX 

 property | value 
--- | --- 
 label | EC GETNATPX
 tag | ECNATPX
 routine | [ECUMRPC](http://code.osehra.org/dox/Routine_ECUMRPC_source.html)
 return value type | GLOBAL ARRAY
 description | Returns an array of active, inactive or both of Event Capture national and local Procedures from file #725.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| ECARY | LITERAL |  |  | Input variable ECARY contains the following subscripted elements   ECPX - Procedures to output, L- local, N- National, B- Both   STAT - Active or inactive EC Nat Codes          A-ctive (default), I-nactive, B-othIf not valued is passed in defaults to Local and Active. | 




 ###### Generated on January 11th 2017, 6:39:42 am