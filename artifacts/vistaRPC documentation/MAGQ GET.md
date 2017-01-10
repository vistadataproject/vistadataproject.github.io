---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGQ GET 

 property | value 
--- | --- 
 label | MAGQ GET
 tag | GETQUE
 routine | [MAGQBTM](http://code.osehra.org/dox/Routine_MAGQBTM_source.html)
 return value type | SINGLE VALUE
 description | Returns parameters for the next queue process for the specified type.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | ACTION | LITERAL |  | true | The background processor queue type(JBTOHD,JUKEBOX,DELETE,ABSTRACT,ROUTING). | 