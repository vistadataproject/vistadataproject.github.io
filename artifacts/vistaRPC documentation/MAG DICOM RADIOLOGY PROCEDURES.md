---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAG DICOM RADIOLOGY PROCEDURES 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAG DICOM RADIOLOGY PROCEDURES{:/}
 tag | {::nomarkdown}PROC{:/}
 routine | [MAGDRPCA](http://code.osehra.org/dox/Routine_MAGDRPCA_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This RPC returns a list of Radiology Procedures for 'no-credit' Imaginglocations within a given division.If the division does not have any 'no-credit' Imaging locations defined,the results will return an error message indicating the problem.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DIV{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the division used during the lookup process.{:/} | 
| {::nomarkdown}FILTER{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}If this parameter is set to \1\ procedure types of \B\road and \P\arent will be filtered from the return array.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 4:54:07 am</p>{:/}