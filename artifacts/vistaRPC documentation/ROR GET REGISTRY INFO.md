---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ROR GET REGISTRY INFO 

 property | value 
--- | --- 
 label | ROR GET REGISTRY INFO
 tag | REGINFO
 routine | [RORRP014](http://code.osehra.org/dox/Routine_RORRP014_source.html)
 return value type | ARRAY
 description | The ROR GET REGISTRY INFO remote procedure returns basic information aboutthe registry.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | REGISTRY | LITERAL |  | true | The REGISTRY parameter should contain either a registry IEN or a registry name. | 