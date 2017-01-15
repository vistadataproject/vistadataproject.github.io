---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; VAFCTFU CONVERT ICN TO DFN 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}VAFCTFU CONVERT ICN TO DFN{:/}
 tag | {::nomarkdown}GETDFN{:/}
 routine | [VAFCTFU1](http://code.osehra.org/dox/Routine_VAFCTFU1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Given a patient Integration Control Number (ICN), this will returnthe patient Internal Entry Number (IEN) from the PATIENT file (#2).{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PATIENT ICN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}255{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Patient Integration Control Number (ICN).{:/} | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | GETDFN^[VAFCTFU1](http://code.osehra.org/dox/Routine_VAFCTFU1_source.html)
 Input parameters | {::nomarkdown}ICN{:/}
 Code | {::nomarkdown}  S RESULT=$$GETDFN^MPIF001(ICN){:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 15th 2017, 12:59:50 am</p>{:/}