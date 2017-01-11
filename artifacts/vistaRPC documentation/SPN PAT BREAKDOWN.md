---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; SPN PAT BREAKDOWN 

 property | value 
--- | --- 
 label | SPN PAT BREAKDOWN
 tag | COL
 routine | [SPNJRPC5](http://code.osehra.org/dox/Routine_SPNJRPC5_source.html)
 return value type | GLOBAL ARRAY
 description | Returns breakdown of patient statistics for a list of given patients (based on the ICN) based on a date range, if provided.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| ICNLIST | LIST |  |  | Patient's ICN in string format (ICN^ICN^ICN^ICN)  | 
| FDATE | LITERAL |  |  | (Optional) Date to start search from.   | 
| TDATE | LITERAL |  |  | (Optional) Date to end search at.   | 