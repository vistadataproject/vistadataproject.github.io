---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORRHCO ORDITM 

 property | value 
--- | --- 
 label | ORRHCO ORDITM
 tag | ORDITM
 routine | [ORRHCO](http://code.osehra.org/dox/Routine_ORRHCO_source.html)
 return value type | ARRAY
 description | Returns a subset of orderable items for use in a long list box.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | FROM | LITERAL |  | true | Starting name for cross reference | 
| vs:Input_Parameter-8994_02 | DIR | LITERAL |  | true | Direction for $ORDER | 
| vs:Input_Parameter-8994_02 | XREF | LITERAL |  | true | Identifies the SET xref to use in the orderable item file. | 