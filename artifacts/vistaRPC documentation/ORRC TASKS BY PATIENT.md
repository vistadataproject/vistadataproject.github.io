---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORRC TASKS BY PATIENT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORRC TASKS BY PATIENT{:/}
 tag | {::nomarkdown}LIST{:/}
 routine | [ORRCTSK](http://code.osehra.org/dox/Routine_ORRCTSK_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This call returns a list of tasks for a patient that are not yetcompleted.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PATIENT{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the pointer to the patient in the Patient file #2.{:/} | 
| {::nomarkdown}USER{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the pointer to the user in the New Person file #200; if definedthen tasks will be returned that USER created or all incomplete tasks ifUSER is linked to the patient in some way.{:/} | 
| {::nomarkdown}DUE{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is a date in the format YYYYMMDD[HHMMSS]; if defined, then onlytasks that are past DUE (i.e. Due Date is prior to DUE) will be returned.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 8:55:11 am</p>{:/}