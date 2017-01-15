---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; SPN READMISSIONS REPORT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}SPN READMISSIONS REPORT{:/}
 tag | {::nomarkdown}COL{:/}
 routine | [SPNJRPRE](http://code.osehra.org/dox/Routine_SPNJRPRE_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Returns detailed information for SCI/SCD ADMISSIONS and DISCHARGES for a list of given patients (based on the ICN) based on a date range, so that numbers of Readmissions can be determined.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ICNLIST{:/} | {::nomarkdown}LIST{:/} |  |  | {::nomarkdown}Patient's ICN in string format (ICN^ICN^ICN^ICN...){:/} | 
| {::nomarkdown}FDATE{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Date to start search from.  {:/} | 
| {::nomarkdown}TDATE{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Date to end search at.  {:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 15th 2017, 12:59:51 am</p>{:/}