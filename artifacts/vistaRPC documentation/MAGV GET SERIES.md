---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGV GET SERIES 

 property | value 
--- | --- 
 label | MAGV GET SERIES
 tag | GETSER
 routine | [MAGVRS14](http://code.osehra.org/dox/Routine_MAGVRS14_source.html)
 return value type | ARRAY
 description | Returns patient attributes given the IEN on the IMAGE SERIESFile (#2005.63).

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | SERIEN | LITERAL |  |  | The internal entry number of the study in the IMAGE SERIESFile (#2005.63). | 
| vs:Input_Parameter-8994_02 | STUDYIEN |  |  |  | The internal entry number of the related STUDY in the IMAGE STUDYfile (#2005.62). | 
| vs:Input_Parameter-8994_02 | OVERRIDE | LITERAL |  |  | This parameter overrides parent IEN checking. | 