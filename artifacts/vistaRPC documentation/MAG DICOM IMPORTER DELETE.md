---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAG DICOM IMPORTER DELETE 

 property | value 
--- | --- 
 label | MAG DICOM IMPORTER DELETE
 tag | DELETE
 routine | [MAGDRPCA](http://code.osehra.org/dox/Routine_MAGDRPCA_source.html)
 return value type | ARRAY
 description | This RPC is used by the DICOM Gateway to delete an entry in file IMPORTABLEDICOM OBJECTS (#2006.5752).  The entry to be deleted must match the Hostname,OLDPATH (Gateway), and the image UID.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| MACHID | LITERAL | 30 | true | This is the hostname of the DICOM Imaging Gateway running the Importer application. | 
| FILEPATH | LITERAL | 30 | true | This is the path of the DICOM image file being deleted. | 
| IMAGEUID | LITERAL | 30 | true | This is the image's SOP Instance UID. | 




Generated on January 11th 2017, 6:34:23 am