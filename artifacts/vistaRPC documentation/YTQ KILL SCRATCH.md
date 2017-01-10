---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; YTQ KILL SCRATCH 

 property | value 
--- | --- 
 label | YTQ KILL SCRATCH
 tag | KILLSCR
 routine | [YTQPXRM8](http://code.osehra.org/dox/Routine_YTQPXRM8_source.html)
 return value type | ARRAY
 description | Delete entires from the scratch file when a clinical reminder is saved.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | DFN | LITERAL |  | true | Patient DFN | 
| vs:Input_Parameter-8994_02 | CODE | LITERAL |  | true | Name of instrument from file 601.71 | 
| vs:Input_Parameter-8994_02 | HANDLE | LITERAL |  | true | Unique identifer of GIU session | 