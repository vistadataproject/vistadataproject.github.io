---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORQQPXRM REMINDERS APPLICABLE 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPXRM REMINDERS APPLICABLE{:/}
 tag | {::nomarkdown}APPL{:/}
 routine | [ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list of clinical reminders due/applicable or not applicable tothe patient.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PATIENT ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Patient identifier from the patient file [#2]{:/} | 
| {::nomarkdown}HOSPITAL LOCATION{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} |  | {::nomarkdown}Patients location from HOSPITAL LOCATION [#44]. May be null.{:/} | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | APPL^[ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html)
 First comment | {::nomarkdown}D APPL^PXRMRPCA(.ORY,ORPT,ORLOC) Q  ; DBIA 3078<br/>ORQQPXRM REMINDER CATEGORIES{:/}
 Input parameters | {::nomarkdown}ORPT<br/>ORLOC{:/}




 Generated on January 14th 2017, 7:26:35 am