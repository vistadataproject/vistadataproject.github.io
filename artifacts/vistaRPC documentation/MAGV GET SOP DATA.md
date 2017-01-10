---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGV GET SOP DATA 

 property | value 
--- | --- 
 label | MAGV GET SOP DATA
 tag | GETSOP
 routine | [MAGVRS24](http://code.osehra.org/dox/Routine_MAGVRS24_source.html)
 return value type | ARRAY
 description | Returns SOP attributes given the IEN on the IMAGE SOP DATAFile (#2005.64).

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | SOPIEN | LITERAL |  |  | The internal entry number of the study in the IMAGE SOP INSTANCE File (#2005.64). | 
| vs:Input_Parameter-8994_02 | SERIEN | LITERAL |  |  | The internal entry number of the study in the IMAGE SERIES File (#2005.63). | 
| vs:Input_Parameter-8994_02 | OVERRIDE | LITERAL |  |  | This parameter overrides parent IEN checking. | 