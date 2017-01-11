---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; EC GETLOC 

 property | value 
--- | --- 
 label | EC GETLOC
 tag | GLOC
 routine | [ECUMRPC2](http://code.osehra.org/dox/Routine_ECUMRPC2_source.html)
 return value type | GLOBAL ARRAY
 description | This broker entry point returns all active, inactive or both locations from file #4.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| ECARY | LITERAL |  |  | Input variable ECARY contains the following values:-   STAT   - Active, inactive or both (optional) | 