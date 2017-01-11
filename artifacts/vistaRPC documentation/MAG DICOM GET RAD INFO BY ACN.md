---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAG DICOM GET RAD INFO BY ACN 

 property | value 
--- | --- 
 label | MAG DICOM GET RAD INFO BY ACN
 tag | ACNUMB
 routine | [MAGDRPCA](http://code.osehra.org/dox/Routine_MAGDRPCA_source.html)
 return value type | SINGLE VALUE
 description | This RPC takes the Accession Number and returns the first radiology study that matches it.  This RPC uses $$ACCFIND^RAAPI() to get this information.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| ACNUMB | LITERAL | 30 | true | The accession number in either a 'sss-mmddyy-xxxxx' or   'mmddyy-xxxxx' format | 




Generated on January 11th 2017, 6:34:23 am