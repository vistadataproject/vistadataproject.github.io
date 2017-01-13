---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGV GET SERIES 

 property | value 
--- | --- 
 label | {::nomarkdown}MAGV GET SERIES{:/}
 tag | {::nomarkdown}GETSER{:/}
 routine | [MAGVRS14](http://code.osehra.org/dox/Routine_MAGVRS14_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns patient attributes given the IEN on the IMAGE SERIESFile (#2005.63).{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}SERIEN{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}The internal entry number of the study in the IMAGE SERIESFile (#2005.63).{:/} | 
| {::nomarkdown}STUDYIEN{:/} |  |  |  | {::nomarkdown}The internal entry number of the related STUDY in the IMAGE STUDYfile (#2005.62).{:/} | 
| {::nomarkdown}OVERRIDE{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}This parameter overrides parent IEN checking.{:/} | 




 Generated on January 13th 2017, 6:24:32 am