---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQVS VISITS_APPTS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQQVS VISITS_APPTS{:/}
 tag | {::nomarkdown}VSITAPPT{:/}
 routine | [ORQQVS](http://code.osehra.org/dox/Routine_ORQQVS_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list of patient appointments and visits for a date/time range.location.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PATIENT ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Patient ID (DFN) from Patient File [#2].{:/} | 
| {::nomarkdown}START DATE/TIME{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Start date/time to return visits and appointments.  In internal FileMan format.{:/} | 
| {::nomarkdown}STOP DATE/TIME{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Stop date/time to return visits and appointments. In internal FileMan format.{:/} | 
| {::nomarkdown}DUMMY{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is a dummy parameter so the Broker won't crash.appointments for this location only will be returned.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 7:57:52 am</p>{:/}