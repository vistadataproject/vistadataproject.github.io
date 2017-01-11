---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; SPN INPATIENT ICNS 

 property | value 
--- | --- 
 label | SPN INPATIENT ICNS
 tag | COL
 routine | [SPNJRPIP](http://code.osehra.org/dox/Routine_SPNJRPIP_source.html)
 return value type | GLOBAL ARRAY
 description | Returns list of ICNs of all Inpatients during a given date range...used as input for SCI filtered reports.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| FDATE | LITERAL |  |  | Date to begin Inpatient search | 
| TDATE | LITERAL |  |  | Date to end Inpatient search | 