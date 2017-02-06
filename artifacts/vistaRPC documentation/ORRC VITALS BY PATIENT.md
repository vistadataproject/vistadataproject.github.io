---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORRC VITALS BY PATIENT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORRC VITALS BY PATIENT{:/}
 tag | {::nomarkdown}LIST{:/}
 routine | [ORRCVIT](http://code.osehra.org/dox/Routine_ORRCVIT_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This call returns recent vitals measurements taken for the patient.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PATIENT{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the pointer to the patient in the Patient file #2.{:/} | 
| {::nomarkdown}START{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the date to start searching for vitals, in the form YYYYMMDDHHMMSS;if no date range is specified, up to 5 sets of measurements will be returned.{:/} | 
| {::nomarkdown}STOP{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the date to stop searching for vitals, in the form YYYYMMDDHHMMSS;if no date range is specified, up to 5 sets of measurements will bereturned.{:/} | 
| {::nomarkdown}DETAILS{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This flag indicates whether to return the details of each vital signtaken (true), or just the list of measurement set IDs (false).{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on February 3rd 2017, 7:02:04 am</p>{:/}