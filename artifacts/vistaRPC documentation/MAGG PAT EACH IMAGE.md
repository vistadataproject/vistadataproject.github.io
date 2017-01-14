---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; MAGG PAT EACH IMAGE 


 ## VISTA File 8994 


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
| {::nomarkdown}MAX{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}4{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The maximum number of images to return.{:/} | {::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:36:25 am</p>{:/}