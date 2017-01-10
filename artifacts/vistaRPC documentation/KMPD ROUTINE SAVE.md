---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; KMPD ROUTINE SAVE 

 property | value 
--- | --- 
 label | KMPD ROUTINE SAVE
 tag | ROUSAVE
 routine | [KMPDU3](http://code.osehra.org/dox/Routine_KMPDU3_source.html)
 return value type | ARRAY
 description | Save Routine.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | PARAM1 | LITERAL | 8 | true | Routine name (limited to 8 characters). | 
| vs:Input_Parameter-8994_02 | PARAM2 | LIST | 240 | true | Array containing routine code. | 