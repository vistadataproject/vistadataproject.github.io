---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQPXRM REMINDER EVALUATION 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPXRM REMINDER EVALUATION{:/}
 tag | {::nomarkdown}ALIST{:/}
 routine | [ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Allows evaluation of a list of reminders. Returns a list of clinicalreminders due/applicable or not applicable to the patient.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | DBIA 3078
 Input Parameters | {::nomarkdown}ORPT<br/>ORLIST{:/}
 Leading comment lines | {::nomarkdown}ORQQPXRM REMINDERS APPLICABLE{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PATIENT ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Patient identifier from the patient file [#2]{:/} | 
| {::nomarkdown}REMINDER ARRAY{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}List of reminders in format :             array(1) = reminder ien1 (from #811.9)          array(2) = reminder ien2          etc{:/} | 




 Generated on January 13th 2017, 6:55:29 am