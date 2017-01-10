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

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | ICNLIST | LIST |  |  | Patient's ICN in string format (ICN^ICN^ICN^ICN...) | 
| vs:Input_Parameter-8994_02 | FDATE | LITERAL |  |  | Date to start search from.   | 
| vs:Input_Parameter-8994_02 | TDATE | LITERAL |  |  | Date to end search at.   | 