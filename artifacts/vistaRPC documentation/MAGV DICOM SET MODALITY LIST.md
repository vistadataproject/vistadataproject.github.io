---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGV DICOM SET MODALITY LIST 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAGV DICOM SET MODALITY LIST{:/}
 tag | {::nomarkdown}SETMODAL{:/}
 routine | [MAGVDGWP](http://code.osehra.org/dox/Routine_MAGVDGWP_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Update DICOM GATEWAY MODALITY DICTIONARY file (#2006.912)from MODALITY TYPE DICTIONARY FILE (#2006.582){:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}HOSTNAME{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}DICOM Gateway host name{:/} | 
| {::nomarkdown}LOCATION{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Identifies the institution where this DICOM Gateway computer resides{:/} | 
| {::nomarkdown}MAGDATA{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Data in DICOM GATEWAY MODALITY DICTIONARY file (#2006.912){:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 4:25:14 am</p>{:/}