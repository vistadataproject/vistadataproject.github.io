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

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| RAOIEN | LITERAL |  | true | Pointer to Radiology Order File #75.1. | 
| RAMLC | LITERAL |  | true | Pointer to Radiology Imaging Location File #79.1. | 




Generated on January 11th 2017, 6:34:23 am