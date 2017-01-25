---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORPRF TRIGGER POPUP 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORPRF TRIGGER POPUP{:/}
 tag | {::nomarkdown}TRIGRPOP{:/}
 routine | [ORPRF](http://code.osehra.org/dox/Routine_ORPRF_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns 1 if popup flag display should be triggered for given patient uponpatient selection. If not, returns 0. Does not require clean-up aftercalling it since it does not set arrays or globals.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PTDFN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}IEN in Patient file of given patient.{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | TRIGRPOP^[ORPRF](http://code.osehra.org/dox/Routine_ORPRF_source.html)
 Method comment | Should the flag display pop up upon patient selection
 Input parameters | {::nomarkdown}PTDFN{:/}
 First comment | {::nomarkdown}<pre> for patient PTDFN?<br/>As of 1/10/06, returns POPUP as:<br/>   1 if pt has any active flags, either Cat I or Cat II<br/>   0 otherwise</pre>{:/}
 Code | {::nomarkdown}  N PRFARR<br> S POPUP=$S($$GETACT^DGPFAPI(PTDFN,"PRFARR"):1,1:0){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/uOrPtf.pas">uOrPtf.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 2:31:55 am</p>{:/}