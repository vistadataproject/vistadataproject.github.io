---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGGHS 

 property | value 
--- | --- 
 label | MAGGHS
 tag | HSUM
 routine | [MAGGTCPR](http://code.osehra.org/dox/Routine_MAGGTCPR_source.html)
 return value type | GLOBAL ARRAY
 description | Returns a health summary for a patient of the type requested.requested.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | MAGGZ | LITERAL | 30 | true | ; MAGGZ    ->   DFN  ^  HS Type (IEN)The patient's DFN and the health summary type's internal entry number(IEN). | 