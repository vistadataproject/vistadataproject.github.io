---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; MAGV DICOM SET INSTRUMENT LIST 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}MAGV DICOM SET INSTRUMENT LIST{:/}
 tag | {::nomarkdown}SETINSTR{:/}
 routine | [MAGVDGWP](http://code.osehra.org/dox/Routine_MAGVDGWP_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Update DICOM GATEWAY INSTRUMENT DICTIONARY file (#2006.911){:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}HOSTNAME{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}DICOM Gateway host name{:/} | 
| {::nomarkdown}LOCATION{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Identifies the institution where this DICOM Gateway computer resides{:/} | 
| {::nomarkdown}MAGDATA{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Data in DICOM GATEWAY INSTRUMENT DICTIONARY file (#2006.911){:/} | 




 Generated on January 14th 2017, 7:26:36 am