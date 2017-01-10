---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; PSB MEDICATION HISTORY 

 property | value 
--- | --- 
 label | PSB MEDICATION HISTORY
 tag | HISTORY
 routine | [PSBMLHS](http://code.osehra.org/dox/Routine_PSBMLHS_source.html)
 return value type | GLOBAL ARRAY
 description | Returns the history of a medication for a patient from the orderable item.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | DFN | LITERAL |  | true | Patient IEN number. | 
| vs:Input_Parameter-8994_02 | PSBOI | LITERAL |  | true | Orderable Item # | 