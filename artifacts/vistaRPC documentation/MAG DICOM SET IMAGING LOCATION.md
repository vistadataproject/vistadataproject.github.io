---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAG DICOM SET IMAGING LOCATION 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAG DICOM SET IMAGING LOCATION{:/}
 tag | {::nomarkdown}IMAGELOC{:/}
 routine | [MAGDRPCB](http://code.osehra.org/dox/Routine_MAGDRPCB_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Set imaging location in radiology order file (#75.1).{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}RAOIEN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Pointer to Radiology Order File #75.1.{:/} | 
| {::nomarkdown}RAMLC{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Pointer to Radiology Imaging Location File #79.1.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 4:54:07 am</p>{:/}