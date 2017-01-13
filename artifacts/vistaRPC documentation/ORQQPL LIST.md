---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORQQPL LIST 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPL LIST{:/}
 tag | {::nomarkdown}LIST{:/}
 routine | [ORQQPL](http://code.osehra.org/dox/Routine_ORQQPL_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Function returns a list of problems for a patient.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | return pt's problem list in format: ien^description^

 Leading comment lines | {::nomarkdown}ICD^onset^last modified^SC^SpExp
STATUS = status of problems to return: (A)CTIVE, (I)NACTIVE, ("")ALL{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PATIENT ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The record number of the patient from the Patient FIle (#2).{:/} | 
| {::nomarkdown}STATUS{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}2{:/} |  | {::nomarkdown}The status of the problems to retrieve. A = Active problems only, I = Inactive problems only, \\ or undefined = all problems regardless ofstatus.{:/} | 




 Generated on January 13th 2017, 6:15:57 am