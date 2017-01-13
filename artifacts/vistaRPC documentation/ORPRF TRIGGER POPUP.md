---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORPRF TRIGGER POPUP 

 property | value 
--- | --- 
 label | {::nomarkdown}ORPRF TRIGGER POPUP{:/}
 tag | {::nomarkdown}TRIGRPOP{:/}
 routine | [ORPRF](http://code.osehra.org/dox/Routine_ORPRF_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns 1 if popup flag display should be triggered for given patient uponpatient selection. If not, returns 0. Does not require clean-up aftercalling it since it does not set arrays or globals.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Should the flag display pop up upon patient selection
 Input Parameters | {::nomarkdown}PTDFN{:/}
 Lines | ```{::nomarkdown} N PRFARR<br/> S POPUP=$S($$GETACT^DGPFAPI(PTDFN,"PRFARR"):1,1:0)```{:/}
 Leading comment lines | {::nomarkdown}for patient PTDFN?<br/>As of 1/10/06, returns POPUP as:<br/>1 if pt has any active flags, either Cat I or Cat II<br/>0 otherwise{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PTDFN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}IEN in Patient file of given patient.{:/} | 




 Generated on January 13th 2017, 7:11:27 am