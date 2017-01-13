---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQPXRM REMINDERS UNEVALUATED 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPXRM REMINDERS UNEVALUATED{:/}
 tag | {::nomarkdown}LIST{:/}
 routine | [ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns list of CPRS reminders for patient/location (no evaluation isdone){:/}


### Method description

 property | value 
 --- | --- 
 Input Parameters | {::nomarkdown}ORPT<br/>ORLOC{:/}
 Leading comment lines | {::nomarkdown}D LIST^PXRMRPCA(.ORY,ORPT,ORLOC) Q  ; DBIA 3078<br/>ORQQPXRM MENTAL HEALTH{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PATIENT ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Patient identifier from the patient file [#2]{:/} | 
| {::nomarkdown}HOSPITAL LOCATION{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} |  | {::nomarkdown}Patients location from HOSPITAL LOCATION [#44]. May be null{:/} | 




 Generated on January 13th 2017, 7:11:27 am