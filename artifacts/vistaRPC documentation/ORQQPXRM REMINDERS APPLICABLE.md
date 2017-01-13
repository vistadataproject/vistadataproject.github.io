---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORQQPXRM REMINDERS APPLICABLE 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPXRM REMINDERS APPLICABLE{:/}
 tag | {::nomarkdown}APPL{:/}
 routine | [ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list of clinical reminders due/applicable or not applicable tothe patient.{:/}


### Method description

 property | value 
--- | --- 
 Leading comment lines | D APPL^PXRMRPCA(.ORY,ORPT,ORLOC) Q  ; DBIA 3078
ORQQPXRM REMINDER CATEGORIES

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PATIENT ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Patient identifier from the patient file [#2]{:/} | 
| {::nomarkdown}HOSPITAL LOCATION{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} |  | {::nomarkdown}Patients location from HOSPITAL LOCATION [#44]. May be null.{:/} | 




 Generated on January 13th 2017, 5:52:13 am