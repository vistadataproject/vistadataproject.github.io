---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; NUPA GET IVS 

 property | value 
--- | --- 
 label | NUPA GET IVS
 tag | IV
 routine | [NUPABCL2](http://code.osehra.org/dox/Routine_NUPABCL2_source.html)
 return value type | GLOBAL ARRAY
 description | Returns information on the patient's IVs for this care plan.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | IEN | LITERAL |  | true | IEN of the care plan in file 1927.4. | 