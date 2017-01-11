---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; EC GETDATE 

 property | value 
--- | --- 
 label | EC GETDATE
 tag | ECDATE
 routine | [ECUURPC](http://code.osehra.org/dox/Routine_ECUURPC_source.html)
 return value type | SINGLE VALUE
 description | Broker call returns the client date as a Fileman internal and external date format.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| ECARY | LITERAL |  | true | Client entered date and date flag passed in variable ECARY:-        DTSTR  - Date String, eg N, T@800, 4/15@1205        FLG    - Date Flag, eg R means time is required | 




 Generated on January 11th 2017, 7:15:04 am