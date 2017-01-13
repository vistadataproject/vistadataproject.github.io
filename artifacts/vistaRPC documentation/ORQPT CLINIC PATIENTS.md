---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQPT CLINIC PATIENTS 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQPT CLINIC PATIENTS{:/}
 tag | {::nomarkdown}CLINPTS{:/}
 routine | [ORQPTQ2](http://code.osehra.org/dox/Routine_ORQPTQ2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns patients with appointments at a clinic between start and stop dates{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | RETURN LIST OF PTS W/CLINIC APPT W/IN BEGINNING AND END DATES
 Leading comment lines | {::nomarkdown}PKS-8/2003: Modified for new scheduling pkg APIs.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}CLINIC ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The record number of the clinic from the Hospital Location File (#44).{:/} | 
| {::nomarkdown}START DATE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} |  | {::nomarkdown}The start date of the clinic appointments to retrieve (not in FM format.){:/} | 
| {::nomarkdown}STOP DATE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} |  | {::nomarkdown}The stop date of the clinic appointments to retrieve (not in Fileman format.){:/} | 




 Generated on January 13th 2017, 6:44:47 am