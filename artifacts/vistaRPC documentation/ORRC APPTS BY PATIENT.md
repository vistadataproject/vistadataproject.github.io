---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORRC APPTS BY PATIENT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORRC APPTS BY PATIENT{:/}
 tag | {::nomarkdown}APPT{:/}
 routine | [ORRCEVT](http://code.osehra.org/dox/Routine_ORRCEVT_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This call returns a list of the patient's appointments, includingscheduled procedures, within a given time frame.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PATIENT{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the pointer to the patient in the Patient file #2.{:/} | 
| {::nomarkdown}START{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the date to start searching for appointments, in the formYYYYMMDDHHMMSS.{:/} | 
| {::nomarkdown}STOP{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the date to stop searching for appointments, in the formYYYYMMDDHHMMSS.{:/} | 
| {::nomarkdown}DETAILS{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This flag indicates whether to return the details or note text with eachappointment (true) or just the list of appointment ID's (false).{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on February 3rd 2017, 7:02:04 am</p>{:/}