---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; GMV DLL VERSION 

 property | value 
--- | --- 
 label | GMV DLL VERSION
 tag | DLL
 routine | [GMVUTL8](http://code.osehra.org/dox/Routine_GMVUTL8_source.html)
 return value type | SINGLE VALUE
 description | Returns a YES or NO response to indicate if the Dynamic Link Library (DLL)file should be used. This remote procedure call is documented in Integration Agreement 4420.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| GMVX | LITERAL | 50 | true | This value is the name of the file and the date/time associated with it (e.g., GMV_VITALSVIEWENTER.DLL:v. 07/21/05 10:34). | 