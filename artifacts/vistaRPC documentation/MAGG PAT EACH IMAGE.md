---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGG PAT EACH IMAGE 

 property | value 
--- | --- 
 label | {::nomarkdown}MAGG PAT EACH IMAGE{:/}
 tag | {::nomarkdown}EACHIMG{:/}
 routine | [MAGGTIG](http://code.osehra.org/dox/Routine_MAGGTIG_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list of Images with Capture date/time, image description foreach patient image, and it will list all images of all groups and allsingle images.Called from capture application to list most recent images capturedfor a patient.  {:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}MAGDFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Patient's DFN.{:/} | 
| {::nomarkdown}MAX{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}4{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The maximum number of images to return.{:/} | 




 Generated on January 13th 2017, 6:55:29 am