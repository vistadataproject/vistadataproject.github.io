---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; SPN OUTPATIENT ICNS 

 property | value 
--- | --- 
 label | SPN OUTPATIENT ICNS
 tag | COL
 routine | [SPNJRPOP](http://code.osehra.org/dox/Routine_SPNJRPOP_source.html)
 return value type | GLOBAL ARRAY
 description | Returns list of ICNs of all outpatient visits during a given date range and clinic list.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| FDATE | LITERAL |  |  | Date to begin Outpatients search | 
| TDATE | LITERAL |  |  | Date to end Outpatients search | 
| CLINLST | LIST |  |  | List of Outpatient clinic stops  | 
| ICNLST | LIST |  |  | List of ICNs to search from | 




Generated on January 11th 2017, 6:34:23 am