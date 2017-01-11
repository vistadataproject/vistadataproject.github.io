---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; SPN INPAT CARE 

 property | value 
--- | --- 
 label | SPN INPAT CARE
 tag | COL
 routine | [SPNJRPIC](http://code.osehra.org/dox/Routine_SPNJRPIC_source.html)
 return value type | GLOBAL ARRAY
 description | Returns detailed information for Applications for Inpatient Care for a list of given patients (list of ICNs) based on a date range. 

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| ICNLIST | LIST |  |  | Patient's ICNs in string format (ICN^ICN^ICN^ICN^ICN...)  | 
| FDATE | LITERAL |  |  | Date to start search from.   | 
| TDATE | LITERAL |  |  | Date to end search at.   | 