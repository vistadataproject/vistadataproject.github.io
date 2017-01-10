---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAG DICOM RADIOLOGY PROCEDURES 

 property | value 
--- | --- 
 label | MAG DICOM RADIOLOGY PROCEDURES
 tag | PROC
 routine | [MAGDRPCA](http://code.osehra.org/dox/Routine_MAGDRPCA_source.html)
 return value type | ARRAY
 description | This RPC returns a list of Radiology Procedures for 'no-credit' Imaginglocations within a given division.If the division does not have any 'no-credit' Imaging locations defined,the results will return an error message indicating the problem.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | DIV | LITERAL | 30 | true | This is the division used during the lookup process. | 
| vs:Input_Parameter-8994_02 | FILTER | LITERAL | 30 | true | If this parameter is set to \1\ procedure types of \B\road and \P\arent will be filtered from the return array. | 