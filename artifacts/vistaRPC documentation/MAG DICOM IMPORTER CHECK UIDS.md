---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAG DICOM IMPORTER CHECK UIDS 

 property | value 
--- | --- 
 label | MAG DICOM IMPORTER CHECK UIDS
 tag | CHECKUID
 routine | [MAGDRPCA](http://code.osehra.org/dox/Routine_MAGDRPCA_source.html)
 return value type | ARRAY
 description | This RPC is used to lookup DICOM UIDs before importing images.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| UIDLIST | LIST | 30 | true | This is a list of UIDs to be evaluated. | 
| LEVEL | LITERAL |  | true | The value is either STUDY or SOP instance UID. | 




 ###### Generated on January 11th 2017, 6:39:43 am