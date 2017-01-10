---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGG PAT FIND 

 property | value 
--- | --- 
 label | MAGG PAT FIND
 tag | FIND
 routine | [MAGGTPT1](http://code.osehra.org/dox/Routine_MAGGTPT1_source.html)
 return value type | ARRAY
 description | Patient Lookup uses FIND^DIC

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | ZYx | LITERAL | 30 | true | '^' delimited string    FILE NUM ^ NUM TO RETURN ^ TEXT TO MATCH ^  ^ SCREEN ($P 5-99) | 
| vs:Input_Parameter-8994_02 | MAGGLKP |  |  |  |  | 