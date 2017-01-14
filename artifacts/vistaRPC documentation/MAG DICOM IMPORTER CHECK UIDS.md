---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; MAG DICOM IMPORTER CHECK UIDS 


 ## VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAG DICOM IMPORTER CHECK UIDS{:/}
 tag | {::nomarkdown}CHECKUID{:/}
 routine | [MAGDRPCA](http://code.osehra.org/dox/Routine_MAGDRPCA_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This RPC is used to lookup DICOM UIDs before importing images.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}UIDLIST{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is a list of UIDs to be evaluated.{:/} | 
| {::nomarkdown}LEVEL{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}The value is either STUDY or SOP instance UID.{:/} | {::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:36:25 am</p>{:/}