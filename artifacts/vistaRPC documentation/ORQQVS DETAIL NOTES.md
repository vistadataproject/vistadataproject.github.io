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


### Method description

 property | value 
--- | --- 
 Method comment | return progress notes for a patient's visit

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| Patient DFN | LITERAL | 16 | true | Patient identifier (DFN) from File #2 (Patient). | 
| Visit | LITERAL | 16 | true | Visit identifier. | 




 ###### Generated on January 11th 2017, 6:39:42 am