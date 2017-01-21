---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; SPN GET FUTURE APPTS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}SPN GET FUTURE APPTS{:/}
 tag | {::nomarkdown}COL{:/}
 routine | [SPNJRPC2](http://code.osehra.org/dox/Routine_SPNJRPC2_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Returns a listing of patients with appointment informationif they are scheduled for an appointment during the requested date range.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ICNLST{:/} | {::nomarkdown}LIST{:/} |  |  | {::nomarkdown}A list of Integration Control Numbers of patients in the PATIENT file (#2)in the following format: (ICN^ICN^ICN^ICN^ICN...){:/} | 
| {::nomarkdown}SPNSEL{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Specifies which patients to search through:                1 - Patients from SCI registry only (ICNLST)                2 - VistA patients with SCD indicator only                3 - Both 1 & 2{:/} | 
| {::nomarkdown}SPNSTRT{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Starting date range.{:/} | 
| {::nomarkdown}SPNEND{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Ending date range.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 7:57:53 am</p>{:/}