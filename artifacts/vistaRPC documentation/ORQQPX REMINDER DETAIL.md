---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORQQPX REMINDER DETAIL 

 property | value 
--- | --- 
 label | ORQQPX REMINDER DETAIL
 tag | REMDET
 routine | [ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html)
 return value type | ARRAY
 description | Returns the details of a clinical reminder.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | PATIENT ID | LITERAL | 16 | true | Patient identifier from Patient file [#2]. | 
| vs:Input_Parameter-8994_02 | CLINICAL REMINDER ID | LITERAL | 16 | true | Clinical reminder identifier (ien) from PCE REMINDER/MAINTENANCE ITEM file[#811.9]. | 