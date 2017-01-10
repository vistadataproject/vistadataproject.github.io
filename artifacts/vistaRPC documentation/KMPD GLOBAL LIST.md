---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; KMPD GLOBAL LIST 

 property | value 
--- | --- 
 label | KMPD GLOBAL LIST
 tag | GBLLIST
 routine | [KMPDU1](http://code.osehra.org/dox/Routine_KMPDU1_source.html)
 return value type | ARRAY
 description | Global list.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | PARAM1 | LITERAL | 245 | true | Global to list.  This can be an entire global (^DPT) or subscript(^DPT(25,). | 
| vs:Input_Parameter-8994_02 | PARAM2 | LITERAL | 245 | true | Starting global node.  If this is a continuation of a global list, thenthis will be the starting point.  If the call is for the first time, thenthis should be set to null (\\). | 
| vs:Input_Parameter-8994_02 | PARAM3 | LITERAL | 245 | true | Number of lines to fill before quiting. | 
| vs:Input_Parameter-8994_02 | LINE LENGTH | LITERAL | 10 | true | Lenght of line before line-break. | 