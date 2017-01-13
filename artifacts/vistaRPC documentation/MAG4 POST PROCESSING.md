---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAG4 POST PROCESSING 

 property | value 
--- | --- 
 label | {::nomarkdown}MAG4 POST PROCESSING{:/}
 tag | {::nomarkdown}ACTION{:/}
 routine | [MAGGSPP](http://code.osehra.org/dox/Routine_MAGGSPP_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This is call to perform any post processing action required on a newly saved image of this type.  post processing (for now) isdetermined by the MAG DESCRIPTIVE CAGETORIES file.  If this imagepoints to an entry in that file that has Action turned ON, thenthe TAG^ROUTINE will be called with the Image IEN.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}MAGIEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Internal entry number in the Image File (^MAG(2005)){:/} | 




 Generated on January 13th 2017, 7:11:27 am