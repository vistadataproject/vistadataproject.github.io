---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; EC GETPXREASON 

 property | value 
--- | --- 
 label | EC GETPXREASON
 tag | ECPXRS
 routine | [ECUMRPC](http://code.osehra.org/dox/Routine_ECUMRPC_source.html)
 return value type | GLOBAL ARRAY
 description | Return array entries with Procedure reasons linked to an Event Code screen.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | ECARY | LITERAL |  | true | The Event Code screen IEN from file #720.3. | 