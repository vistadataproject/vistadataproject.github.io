---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; PXRM REMINDER EVALUATION 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}PXRM REMINDER EVALUATION{:/}
 tag | {::nomarkdown}ALIST{:/}
 routine | [PXRMRPCA](http://code.osehra.org/dox/Routine_PXRMRPCA_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown} Allows evaluation of a list of reminders. Returns a list of clinical reminders due/applicable or not applicable to the patient.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PATIENT ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Patient identifier from the patient file [#2]{:/} | 
| {::nomarkdown}REMINDER ARRAY{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}List of reminders in format :           array(1) = reminder ien1 (from #811.9)         array(2) = reminder ien2         etc{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 7:40:09 am</p>{:/}