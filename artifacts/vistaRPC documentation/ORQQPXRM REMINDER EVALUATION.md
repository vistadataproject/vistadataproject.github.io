---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQPXRM REMINDER EVALUATION 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPXRM REMINDER EVALUATION{:/}
 tag | {::nomarkdown}ALIST{:/}
 routine | [ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Allows evaluation of a list of reminders. Returns a list of clinicalreminders due/applicable or not applicable to the patient.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PATIENT ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Patient identifier from the patient file [#2]{:/} | 
| {::nomarkdown}REMINDER ARRAY{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}List of reminders in format :             array(1) = reminder ien1 (from #811.9)          array(2) = reminder ien2          etc{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | ALIST^[ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html)
 Method comment | DBIA 3078
 Input parameters | {::nomarkdown}ORPT, ORLIST{:/}
 First comment | {::nomarkdown}<pre><br/>ORQQPXRM REMINDERS APPLICABLE</pre>{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rReminders.pas">rReminders.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:10:56 am</p>{:/}