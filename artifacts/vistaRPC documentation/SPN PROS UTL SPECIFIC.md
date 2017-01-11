---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; SPN PROS UTL SPECIFIC 

 property | value 
--- | --- 
 label | SPN PROS UTL SPECIFIC
 tag | COL
 routine | [SPNJRPP2](http://code.osehra.org/dox/Routine_SPNJRPP2_source.html)
 return value type | GLOBAL ARRAY
 description | Returns detailed information for delivered prosthetics items for a list of given patients (based on the ICN) based on a date range, and prosthetic item list.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| ICNLIST | LIST |  |  | Patient's ICN in string format (ICN^ICN^ICN^ICN...) | 
| FDATE | LITERAL |  |  | Date to start search from.   | 
| TDATE | LITERAL |  |  | Date to end search at.   | 
| ITEMS | LIST |  |  | Array that has the prosthetic item names | 