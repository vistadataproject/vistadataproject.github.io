---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORQQVS DETAIL SUMMARY 

 property | value 
--- | --- 
 label | ORQQVS DETAIL SUMMARY
 tag | DETSUM
 routine | [ORQQVS](http://code.osehra.org/dox/Routine_ORQQVS_source.html)
 return value type | ARRAY
 description | Returns discharge summary for a visit.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | Patient | LITERAL | 16 | true | Patient identifier (DFN) from File #2 (Patient). | 
| vs:Input_Parameter-8994_02 | Visit | LITERAL | 16 | true | Visit identifier. | 