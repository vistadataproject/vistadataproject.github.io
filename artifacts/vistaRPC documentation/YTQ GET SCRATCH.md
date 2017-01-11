---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; YTQ GET SCRATCH 

 property | value 
--- | --- 
 label | YTQ GET SCRATCH
 tag | GETSCR
 routine | [YTQPXRM8](http://code.osehra.org/dox/Routine_YTQPXRM8_source.html)
 return value type | GLOBAL ARRAY
 description | Returns data from the scratch file for thr MHA3 Clinical reminders DLL.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DFN | LITERAL |  | true | Patient DFN | 
| CODE | LITERAL |  | true | Instrument Name from file 601.71 | 
| HANDLE | LITERAL |  | true | Unigue identifier of the GUI session. | 