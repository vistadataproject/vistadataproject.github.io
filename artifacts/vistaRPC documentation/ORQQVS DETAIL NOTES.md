---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORQQVS DETAIL NOTES 

 property | value 
--- | --- 
 label | ORQQVS DETAIL NOTES
 tag | DETNOTE
 routine | [ORQQVS](http://code.osehra.org/dox/Routine_ORQQVS_source.html)
 return value type | ARRAY
 description | Returns the progress notes based on patient and visit identifier.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | Patient DFN | LITERAL | 16 | true | Patient identifier (DFN) from File #2 (Patient). | 
| vs:Input_Parameter-8994_02 | Visit | LITERAL | 16 | true | Visit identifier. | 