---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAG4 POST PROCESS ACTIONS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAG4 POST PROCESS ACTIONS{:/}
 tag | {::nomarkdown}POSTACT{:/}
 routine | [MAGGSPP](http://code.osehra.org/dox/Routine_MAGGSPP_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown} This is call to perform any post processing action required on  a newly saved image of this type.  post processing (for now) is  determined by the IMAGE INDEX FOR TYPES file.  If this image  points to an entry in that file that has Action turned ON, then  the TAG^ROUTINE will be called with the Image IEN.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}MAGIEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Internal entry number in the Image File (^MAG(2005)){:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 5:08:32 am</p>{:/}