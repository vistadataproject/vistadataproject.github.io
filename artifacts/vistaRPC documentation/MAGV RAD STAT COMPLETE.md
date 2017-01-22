---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGV RAD STAT COMPLETE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAGV RAD STAT COMPLETE{:/}
 tag | {::nomarkdown}XMCOMPLT{:/}
 routine | [MAGVIM05](http://code.osehra.org/dox/Routine_MAGVIM05_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown} +---------------------------------------------------------------+  Property of the US Government.                                  No permission to copy or redistribute this software is given.   Use of unreleased versions of this software requires the user   to execute a written test agreement with the VistA Imaging      Development Office of the Department of Veterans Affairs,       telephone (301) 734-0100.                                                                                                       The Food and Drug Administration classifies this software as    a medical device.  As such, it may not be changed in any way.   Modifications to this software may result in an adulterated     medical device under 21CFR820, the use of which is considered   to be a violation of US Federal Statutes.                      +---------------------------------------------------------------+ Wrap call to code underlying RPC: RAMAG EXAM COMPLETE.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}RADPT{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}IEN of the patient in the RAD/NUC MED PATIENT File (#70).{:/} | 
| {::nomarkdown}RAEXAM1{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}IEN in the REGISTERED EXAMS multiple (sub-file #70.02).{:/} | 
| {::nomarkdown}RAEXAM2{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}IEN in the EXAMINATIONS multiple (sub-file #70.03).{:/} | 
| {::nomarkdown}MAGVUSR{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}DUZ of the person logged into the Importer II application.{:/} | 
| {::nomarkdown}MAGVUSRDV{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}User Logon Division of the person logged into the Importer II application.{:/} | 
| {::nomarkdown}RAIMTYP{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the radiology image type.{:/} | 
| {::nomarkdown}RASTDRPT{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}IEN of an entry in the STANDARD REPORTS file (#74.1).{:/} | 
| {::nomarkdown}RADXPRIM{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}IEN of an entry in the DIAGNOSTIC CODES file (#78.3). This will be theexam's Primary Diagnostic Code via the RAMISC parameter 'PRIMDXCODE'.{:/} | 
| {::nomarkdown}RADXSCND{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}One or more IENs of entries in the DIAGNOSTIC CODES file (#78.3). Thesewill be the exam's Secondary Diagnostic Codes via the RAMISC parameter'SECDXCODE'.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:23:03 am</p>{:/}