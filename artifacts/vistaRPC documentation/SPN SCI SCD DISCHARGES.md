---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; SPN SCI SCD DISCHARGES 

 property | value 
--- | --- 
 label | SPN SCI SCD DISCHARGES
 tag | COL
 routine | [SPNJRPSD](http://code.osehra.org/dox/Routine_SPNJRPSD_source.html)
 return value type | GLOBAL ARRAY
 description | Returns detailed information for SCI/SCD DISCHARGES for a list of given patients (based on the ICN) based on a date range.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| ICNLIST | LIST |  |  | Patient's ICN in string format (ICN^ICN^ICN^ICN...) | 
| FDATE | LITERAL |  |  | Date to start search from.   | 
| TDATE | LITERAL |  |  | Date to end search at.   | 




Generated on January 11th 2017, 6:34:23 am