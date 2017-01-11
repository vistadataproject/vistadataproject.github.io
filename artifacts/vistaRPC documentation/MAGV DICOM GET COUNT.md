---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGV DICOM GET COUNT 

 property | value 
--- | --- 
 label | MAGV DICOM GET COUNT
 tag | DCRCTCNT
 routine | [MAGVRS51](http://code.osehra.org/dox/Routine_MAGVRS51_source.html)
 return value type | SINGLE VALUE
 description | This RPC returns the count of entries in the DICOM FAILED IMAGES(#2006.575) file with machine IDs and service types provided to theRPC.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| MACHID | LITERAL | 24 |  | The machine ID to be matched to the machine ID in the DICOM FAILEDIMAGES (#2006.575) file. | 
| SERVTYPE | LITERAL | 20 |  | The service type to be matched to the service type in the DICOMFAILED IMAGES (#2006.575) file. | 