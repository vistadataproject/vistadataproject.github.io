---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; SPN GET VA STATUS 

 property | value 
--- | --- 
 label | SPN GET VA STATUS
 tag | COL
 routine | [SPNJRPCS](http://code.osehra.org/dox/Routine_SPNJRPCS_source.html)
 return value type | ARRAY
 description | Returns VA SCI Status based on patient's ICN.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | ICN | LITERAL |  |  | Individual patient's ICN. | 