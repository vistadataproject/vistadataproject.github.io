---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORRHCU BYREG 

 property | value 
--- | --- 
 label | ORRHCU BYREG
 tag | BYREG
 routine | [ORRHCU](http://code.osehra.org/dox/Routine_ORRHCU_source.html)
 return value type | ARRAY
 description | Returns a list of patients listed in a patient registry.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | NAM | LITERAL |  | true | The name of the registry. | 
| vs:Input_Parameter-8994_02 | MOD | LITERAL |  | true | The mode by which the registry should be accessed (active, inactive, both). | 