---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGV INACTIVATE SERIES 

 property | value 
--- | --- 
 label | {::nomarkdown}MAGV INACTIVATE SERIES{:/}
 tag | {::nomarkdown}INSERIES{:/}
 routine | [MAGVRS14](http://code.osehra.org/dox/Routine_MAGVRS14_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This RPC inactivates a series entry in the IMAGE SERIES file (#2005.63).{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}SERIEN{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}If set to 1 this flag prevents the checking of the parent procedurereference prior to inactivation.{:/} | 
| {::nomarkdown}STUDYIEN{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}The IEN of the related study entry.{:/} | 
| {::nomarkdown}OVERRIDE{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}If set to 1 this flag prevents the checking of the parent procedurereference prior to inactivation.{:/} | 




 Generated on January 13th 2017, 5:52:13 am