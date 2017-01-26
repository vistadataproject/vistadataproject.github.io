---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQPXRM REMINDERS UNEVALUATED 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPXRM REMINDERS UNEVALUATED{:/}
 tag | {::nomarkdown}LIST{:/}
 routine | [ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns list of CPRS reminders for patient/location (no evaluation isdone){:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PATIENT ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Patient identifier from the patient file [#2]{:/} | 
| {::nomarkdown}HOSPITAL LOCATION{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} |  | {::nomarkdown}Patients location from HOSPITAL LOCATION [#44]. May be null{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | LIST^[ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html)
 Input parameters | {::nomarkdown}ORPT, ORLOC{:/}
 First comment | {::nomarkdown}<pre>D LIST^PXRMRPCA(.ORY,ORPT,ORLOC) Q  ; DBIA 3078<br/><br/>ORQQPXRM MENTAL HEALTH</pre>{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rReminders.pas">rReminders.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 2:53:14 am</p>{:/}