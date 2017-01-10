---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; YTQ SET SCRATCH 

 property | value 
--- | --- 
 label | YTQ SET SCRATCH
 tag | SETSCR
 routine | [YTQPXRM8](http://code.osehra.org/dox/Routine_YTQPXRM8_source.html)
 return value type | ARRAY
 description | api to set data to a scratch file for the MHA3 DLL.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | DFN | LITERAL |  | true | IEN of patient in file 2. | 
| vs:Input_Parameter-8994_02 | CODE | LITERAL |  | true | Name of Instrument from file 601.71 | 
| vs:Input_Parameter-8994_02 | HANDLE | LITERAL |  | true | Unique identifer of the GUI session. | 