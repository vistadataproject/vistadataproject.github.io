---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGQ REQ 

 property | value 
--- | --- 
 label | MAGQ REQ
 tag | REQUE
 routine | [MAGQBTM](http://code.osehra.org/dox/Routine_MAGQBTM_source.html)
 return value type | SINGLE VALUE
 description | Requeues a process which failed.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | IEN | LITERAL |  | true | Internal Entry Number of the Vista Imaging Queue file (#2006.03) of theentry to be requeued. | 