---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGV DICOM SET INSTRUMENT LIST 

 property | value 
--- | --- 
 label | MAGV DICOM SET INSTRUMENT LIST
 tag | SETINSTR
 routine | [MAGVDGWP](http://code.osehra.org/dox/Routine_MAGVDGWP_source.html)
 return value type | SINGLE VALUE
 description | Update DICOM GATEWAY INSTRUMENT DICTIONARY file (#2006.911)

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| HOSTNAME | LITERAL |  | true | DICOM Gateway host name | 
| LOCATION | LITERAL |  | true | Identifies the institution where this DICOM Gateway computer resides | 
| MAGDATA | LIST |  | true | Data in DICOM GATEWAY INSTRUMENT DICTIONARY file (#2006.911) | 




Generated on January 11th 2017, 6:34:23 am