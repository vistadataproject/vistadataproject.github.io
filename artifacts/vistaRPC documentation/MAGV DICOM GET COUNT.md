---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGV DICOM GET COUNT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAGV DICOM GET COUNT{:/}
 tag | {::nomarkdown}DCRCTCNT{:/}
 routine | [MAGVRS51](http://code.osehra.org/dox/Routine_MAGVRS51_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC returns the count of entries in the DICOM FAILED IMAGES(#2006.575) file with machine IDs and service types provided to theRPC.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}MACHID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}24{:/} |  | {::nomarkdown}The machine ID to be matched to the machine ID in the DICOM FAILEDIMAGES (#2006.575) file.{:/} | 
| {::nomarkdown}SERVTYPE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} |  | {::nomarkdown}The service type to be matched to the service type in the DICOMFAILED IMAGES (#2006.575) file.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 4:25:14 am</p>{:/}