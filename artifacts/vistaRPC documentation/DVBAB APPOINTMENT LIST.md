---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DVBAB APPOINTMENT LIST 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DVBAB APPOINTMENT LIST{:/}
 tag | {::nomarkdown}DPA{:/}
 routine | [DVBAB1B](http://code.osehra.org/dox/Routine_DVBAB1B_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Returns a list of past, future or all appointments.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}VAL1{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}10{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the DFN - the ien for the patient selected{:/} | 
| {::nomarkdown}VAL2{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is CHOICE - valid input is A (for All appointments), F (for FutureAppointments, or P (for Past Appointments).{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 2:31:55 am</p>{:/}