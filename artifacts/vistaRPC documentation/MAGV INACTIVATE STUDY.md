---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGV INACTIVATE STUDY 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAGV INACTIVATE STUDY{:/}
 tag | {::nomarkdown}INSTUDY{:/}
 routine | [MAGVRS04](http://code.osehra.org/dox/Routine_MAGVRS04_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This RPC inactivates a study entry in the IMAGE STUDY file (#2005.62).{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}STUDYIEN{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}The IEN of the study entry to be inactivated.{:/} | 
| {::nomarkdown}PROCIEN{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}The IEN of the related procedure reference.{:/} | 
| {::nomarkdown}OVERRIDE{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}If set to 1 this flag prevents the checking of the parent procedurereference prior to inactivation.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 2:53:15 am</p>{:/}