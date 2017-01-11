---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; SPN READMISSIONS REPORT 

 property | value 
--- | --- 
 label | SPN READMISSIONS REPORT
 tag | COL
 routine | [SPNJRPRE](http://code.osehra.org/dox/Routine_SPNJRPRE_source.html)
 return value type | GLOBAL ARRAY
 description | Returns detailed information for SCI/SCD ADMISSIONS and DISCHARGES for a list of given patients (based on the ICN) based on a date range, so that numbers of Readmissions can be determined.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| ICNLIST | LIST |  |  | Patient's ICN in string format (ICN^ICN^ICN^ICN...) | 
| FDATE | LITERAL |  |  | Date to start search from.   | 
| TDATE | LITERAL |  |  | Date to end search at.   | 




Generated on January 11th 2017, 6:34:23 am