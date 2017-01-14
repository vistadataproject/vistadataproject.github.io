---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGV GET SERIES 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAGV GET SERIES{:/}
 tag | {::nomarkdown}GETSER{:/}
 routine | [MAGVRS14](http://code.osehra.org/dox/Routine_MAGVRS14_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns patient attributes given the IEN on the IMAGE SERIESFile (#2005.63).{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}SERIEN{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}The internal entry number of the study in the IMAGE SERIESFile (#2005.63).{:/} | 
| {::nomarkdown}STUDYIEN{:/} |  |  |  | {::nomarkdown}The internal entry number of the related STUDY in the IMAGE STUDYfile (#2005.62).{:/} | 
| {::nomarkdown}OVERRIDE{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}This parameter overrides parent IEN checking.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:46:15 am</p>{:/}