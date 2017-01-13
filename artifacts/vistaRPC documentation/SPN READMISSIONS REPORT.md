---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; SPN READMISSIONS REPORT 

 property | value 
--- | --- 
 label | {::nomarkdown}SPN READMISSIONS REPORT{:/}
 tag | {::nomarkdown}COL{:/}
 routine | [SPNJRPRE](http://code.osehra.org/dox/Routine_SPNJRPRE_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Returns detailed information for SCI/SCD ADMISSIONS and DISCHARGES for a list of given patients (based on the ICN) based on a date range, so that numbers of Readmissions can be determined.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ICNLIST{:/} | {::nomarkdown}LIST{:/} |  |  | {::nomarkdown}Patient's ICN in string format (ICN^ICN^ICN^ICN...){:/} | 
| {::nomarkdown}FDATE{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Date to start search from.  {:/} | 
| {::nomarkdown}TDATE{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Date to end search at.  {:/} | 




 Generated on January 13th 2017, 6:15:57 am