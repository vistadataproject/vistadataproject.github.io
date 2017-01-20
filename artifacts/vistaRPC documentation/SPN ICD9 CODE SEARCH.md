---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; SPN ICD9 CODE SEARCH 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}SPN ICD9 CODE SEARCH{:/}
 tag | {::nomarkdown}COL{:/}
 routine | [SPNJRPC9](http://code.osehra.org/dox/Routine_SPNJRPC9_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Returns a patient's ICD9 Code history for a list of given patients (based on the ICN), date range, and a list of ICD codes desired to be searched.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ICNLST{:/} | {::nomarkdown}LIST{:/} |  |  | {::nomarkdown}Patient's ICNs in list format (ICN^ICN^ICN^ICN^ICN...){:/} | 
| {::nomarkdown}FDATE{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}The admission starting date{:/} | 
| {::nomarkdown}TDATE{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}The Admission ending date{:/} | 
| {::nomarkdown}PATTYP{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}(1) Patients in SCI Registry only (2) All Patients{:/} | 
| {::nomarkdown}SPNANS{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}(1) Range of Codes (2) Individual codes{:/} | 
| {::nomarkdown}CODES{:/} | {::nomarkdown}LIST{:/} |  |  | {::nomarkdown}The list or range of ICD codes{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 7:40:09 am</p>{:/}