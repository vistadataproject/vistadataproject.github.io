---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; EC GETPXMODIFIER 

 property | value 
--- | --- 
 label | EC GETPXMODIFIER
 tag | ECPXMOD
 routine | [ECUERPC](http://code.osehra.org/dox/Routine_ECUERPC_source.html)
 return value type | GLOBAL ARRAY
 description | Returns CPT modifier entries for a CPT Procedure based on procedure date.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| ECARY | LITERAL |  | true | Input variable ECARY contains the following values separated by up-arrows.  1. ECCPT - CPT code ien (file #81)  2. ECDT  - Procedure date and time (fileman format) | 




Generated on January 11th 2017, 6:34:23 am