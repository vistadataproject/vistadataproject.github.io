---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORQQPXRM REMINDER DETAIL 

 property | value 
--- | --- 
 label | ORQQPXRM REMINDER DETAIL
 tag | REMDET
 routine | [ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html)
 return value type | ARRAY
 description | Returns the details of a clinical reminder


### Method description

 property | value 
--- | --- 
 Method comment | DBIA 3078
 Leading comment lines | ORQQPXRM REMINDER INQUIRY

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| PATIENT ID | LITERAL | 16 | true | Patient identifier from Patient file [#2] | 
| CLINICAL REMINDER ID | LITERAL | 16 | true | Clinical reminder (ien) from CLINICAL REMINDER DEFINITION file [#811.9] | 