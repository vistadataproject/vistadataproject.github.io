---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGV GET STUDY 

 property | value 
--- | --- 
 label | {::nomarkdown}MAGV GET STUDY{:/}
 tag | {::nomarkdown}GETSTUDY{:/}
 routine | [MAGVRS04](http://code.osehra.org/dox/Routine_MAGVRS04_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns study attributes given the IEN on the IMAGE STUDYFile (#2005.62).{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}STUDYIEN{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}The internal entry number of the study in the IMAGE STUDYFile (#2005.62).{:/} | 
| {::nomarkdown}OVERRIDE{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}This parameter overrides parent IEN checking.{:/} | 
| {::nomarkdown}PROCIEN{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}The internal entry number of the related procedure in the IMAGE PROCEDUREREFERENCE file (#2005.61).{:/} | 




 Generated on January 13th 2017, 6:24:32 am