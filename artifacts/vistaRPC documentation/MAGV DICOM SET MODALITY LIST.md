---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGV DICOM SET MODALITY LIST 

 property | value 
--- | --- 
 label | MAGV DICOM SET MODALITY LIST
 tag | SETMODAL
 routine | [MAGVDGWP](http://code.osehra.org/dox/Routine_MAGVDGWP_source.html)
 return value type | SINGLE VALUE
 description | Update DICOM GATEWAY MODALITY DICTIONARY file (#2006.912)from MODALITY TYPE DICTIONARY FILE (#2006.582)

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| HOSTNAME | LITERAL |  | true | DICOM Gateway host name | 
| LOCATION | LITERAL |  | true | Identifies the institution where this DICOM Gateway computer resides | 
| MAGDATA | LIST |  | true | Data in DICOM GATEWAY MODALITY DICTIONARY file (#2006.912) | 