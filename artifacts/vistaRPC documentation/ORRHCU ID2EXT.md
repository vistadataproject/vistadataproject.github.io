---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORRHCU ID2EXT 

 property | value 
--- | --- 
 label | ORRHCU ID2EXT
 tag | ID2EXT
 routine | [ORRHCU](http://code.osehra.org/dox/Routine_ORRHCU_source.html)
 return value type | ARRAY
 description | Returns the external name of an entry given the internal number.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | FNumber | LITERAL |  | true | File number for the entry. | 
| vs:Input_Parameter-8994_02 | IDLST | LIST |  | true | A list of internal entry numbers. | 