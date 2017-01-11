---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIRPARM LISTPO LIST PR ORDERS 

 property | value 
--- | --- 
 label | DSIRPARM LISTPO LIST PR ORDERS
 tag | LISTPO
 routine | [DSIRPARM](http://code.osehra.org/dox/Routine_DSIRPARM_source.html)
 return value type | ARRAY
 description | This RPC will return a list of the print orders for a specified facility.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| INST | LITERAL | 99 | true | Facility IEN to DSIR FACILITY PARAMETERS File (#19620.701). | 