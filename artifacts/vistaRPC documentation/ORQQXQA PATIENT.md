---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORQQXQA PATIENT 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQQXQA PATIENT{:/}
 tag | {::nomarkdown}PATIENT{:/}
 routine | [ORQQXQA](http://code.osehra.org/dox/Routine_ORQQXQA_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Function returns a list of notifications for a patient for the current user.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | return current user's notifications for patient ORPT

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PATIENT ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The record number of the patient from the Patient File (#2).{:/} | 
| {::nomarkdown}START DATE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} |  | {::nomarkdown}Start date for retrieving patient notifications in Fileman format.{:/} | 
| {::nomarkdown}STOP DATE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} |  | {::nomarkdown}Stop date for retrieving patient notifications in Fileman format.{:/} | 




 Generated on January 13th 2017, 6:24:32 am