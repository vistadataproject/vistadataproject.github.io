---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ANRV GET PTALL 

 property | value 
--- | --- 
 label | ANRV GET PTALL
 tag | LISTALL
 routine | [ANRVOA](http://code.osehra.org/dox/Routine_ANRVOA_source.html)
 return value type | ARRAY
 description | Returns a list of all patients beginning with(x), from(x), to(x)direction.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | RESULTS | LITERAL |  | true |  | 
| vs:Input_Parameter-8994_02 | FROM | LITERAL | 50 | true |  | 
| vs:Input_Parameter-8994_02 | DIR | LITERAL | 50 | true |  | 