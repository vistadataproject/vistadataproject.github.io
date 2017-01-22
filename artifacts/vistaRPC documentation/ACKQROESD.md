---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ACKQROESD 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ACKQROESD{:/}
 tag | {::nomarkdown}STARTD{:/}
 routine | [ACKQAG05](http://code.osehra.org/dox/Routine_ACKQAG05_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This is the RPC used to setup and send a deletion of an audiogram to the DDc when a deletion is processed on the home system for an audiogram that has been sent to the DDC.  It is triggered by the mDelete.OnClick action from the Enter/Edit program ACKQROES3E.EXE.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the internal number of the patient in the PATIENT file (#2).{:/} | 
| {::nomarkdown}IEN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the internal number of the record in the AUDIOMETRIC EXAM DATA file (#509850.9).{:/} | 
| {::nomarkdown}STANUM{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the Station Number of the sending clinic{:/} | 
| {::nomarkdown}USRNAM{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}32{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the name of the submitting user{:/} | 
| {::nomarkdown}USRSER{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the name of the submitting user's service.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:10:56 am</p>{:/}