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


### Method description

 property | value 
--- | --- 
 Method comment | return discharge summary for a patient's visit

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| Patient | LITERAL | 16 | true | Patient identifier (DFN) from File #2 (Patient). | 
| Visit | LITERAL | 16 | true | Visit identifier. | 