---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAG DICOM IMPORTER DELETE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAG DICOM IMPORTER DELETE{:/}
 tag | {::nomarkdown}DELETE{:/}
 routine | [MAGDRPCA](http://code.osehra.org/dox/Routine_MAGDRPCA_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This RPC is used by the DICOM Gateway to delete an entry in file IMPORTABLEDICOM OBJECTS (#2006.5752).  The entry to be deleted must match the Hostname,OLDPATH (Gateway), and the image UID.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}MACHID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the hostname of the DICOM Imaging Gateway running the Importer application.{:/} | 
| {::nomarkdown}FILEPATH{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the path of the DICOM image file being deleted.{:/} | 
| {::nomarkdown}IMAGEUID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the image's SOP Instance UID.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 5:08:32 am</p>{:/}