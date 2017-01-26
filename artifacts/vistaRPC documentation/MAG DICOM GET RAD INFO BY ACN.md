---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAG DICOM GET RAD INFO BY ACN 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAG DICOM GET RAD INFO BY ACN{:/}
 tag | {::nomarkdown}ACNUMB{:/}
 routine | [MAGDRPCA](http://code.osehra.org/dox/Routine_MAGDRPCA_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC takes the Accession Number and returns the first radiology study that matches it.  This RPC uses $$ACCFIND^RAAPI() to get this information.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ACNUMB{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The accession number in either a 'sss-mmddyy-xxxxx' or   'mmddyy-xxxxx' format{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 2:53:14 am</p>{:/}