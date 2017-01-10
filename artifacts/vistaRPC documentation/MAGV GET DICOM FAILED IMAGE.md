---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGV GET DICOM FAILED IMAGE 

 property | value 
--- | --- 
 label | MAGV GET DICOM FAILED IMAGE
 tag | DCRCTGET
 routine | [MAGVRS51](http://code.osehra.org/dox/Routine_MAGVRS51_source.html)
 return value type | ARRAY
 description | Returns image attributes given the IEN of the DICOM FAILED IMAGES File (#2006.575).

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | ATTS | LIST |  |  | This attribute identifies the Machine ID to use to look up entries. | 