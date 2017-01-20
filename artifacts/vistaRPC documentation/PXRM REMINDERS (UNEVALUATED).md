---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; PXRM REMINDERS (UNEVALUATED) 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}PXRM REMINDERS (UNEVALUATED){:/}
 tag | {::nomarkdown}LIST{:/}
 routine | [PXRMRPCA](http://code.osehra.org/dox/Routine_PXRMRPCA_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns list of CPRS reminders for patient/location (no evaluation is done){:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PATIENT ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown} Patient identifier from the patient file [#2]{:/} | 
| {::nomarkdown}HOSPITAL LOCATION{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Patients location from HOSPITAL LOCATION [#44]. May be null{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 5:08:32 am</p>{:/}