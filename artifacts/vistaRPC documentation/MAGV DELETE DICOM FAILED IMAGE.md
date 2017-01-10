---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGV DELETE DICOM FAILED IMAGE 

 property | value 
--- | --- 
 label | MAGV DELETE DICOM FAILED IMAGE
 tag | DCRCTDEL
 routine | [MAGVRS51](http://code.osehra.org/dox/Routine_MAGVRS51_source.html)
 return value type | SINGLE VALUE
 description | This routine will delete a single entry in the DICOM FAILED IMAGES File(#2006.575).

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | PATH | LITERAL |  |  | This parameter is the Filepath of the entry to be deleted. | 