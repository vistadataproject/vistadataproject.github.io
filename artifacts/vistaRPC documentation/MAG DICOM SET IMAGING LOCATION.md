---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAG DICOM SET IMAGING LOCATION 

 property | value 
--- | --- 
 label | MAG DICOM SET IMAGING LOCATION
 tag | IMAGELOC
 routine | [MAGDRPCB](http://code.osehra.org/dox/Routine_MAGDRPCB_source.html)
 return value type | SINGLE VALUE
 description | Set imaging location in radiology order file (#75.1).

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | RAOIEN | LITERAL |  | true | Pointer to Radiology Order File #75.1. | 
| vs:Input_Parameter-8994_02 | RAMLC | LITERAL |  | true | Pointer to Radiology Imaging Location File #79.1. | 