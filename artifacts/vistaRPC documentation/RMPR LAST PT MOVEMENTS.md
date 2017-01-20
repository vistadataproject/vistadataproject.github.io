---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; RMPR LAST PT MOVEMENTS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}RMPR LAST PT MOVEMENTS{:/}
 tag | {::nomarkdown}EN{:/}
 routine | [RMPR9LM](http://code.osehra.org/dox/Routine_RMPR9LM_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This procedure supplies the data for the Last 2 inpatient movements for TAB 2 of the GUI 2319.Pass IEN to Prosthetic Suspense (#668) Return RESULTS Array and Example: RESULTS(0)=NameRESULTS(1)=SSNRESULTS(2)=DOBRESULTS(3)=Claim #RESULTS(4)= if 1 Yes a movementRESULTS(5)=Transaction typeRESULTS(6)=Date of last MovementRESULTS(7)=Type of MovementRESULTS(8)=WardRESULTS(9)=PhysicianRESULTS(10)=DiagnosisRESULTS(11)= if 1 Yes Second to last MovementRESULTS(12)=2nd to last Transaction TypeRESULTS(13)=2nd to last Transaction dateRESULTS(14)=2nd to last Type of movementRESULTS(15)=2nd to last WardRESULTS(16)=PhysicianRESULTS(17)=Diagnosis{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}IEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}50{:/} | {::nomarkdown}true{:/} |  | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 7:40:09 am</p>{:/}