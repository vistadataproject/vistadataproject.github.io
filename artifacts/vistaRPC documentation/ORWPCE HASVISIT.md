---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPCE HASVISIT 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWPCE HASVISIT{:/}
 tag | {::nomarkdown}HASVISIT{:/}
 routine | [ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns the visit status of the visit associated with a note:1 if the visit is being pointed to by an appointment0 if the visit is NOT being pointed to by an appointment-1 if the visit is invalid or could not be determined{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Has visit or is stand alone

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}IEN{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}IEN of the Note.{:/} | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Patient DFN.{:/} | 
| {::nomarkdown}ORLOC{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Hospital Location.{:/} | 
| {::nomarkdown}ORDTE{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Visit Date{:/} | 




 Generated on January 13th 2017, 6:44:47 am