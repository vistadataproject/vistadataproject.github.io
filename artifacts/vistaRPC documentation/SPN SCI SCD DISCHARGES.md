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

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | ICNLIST | LIST |  |  | Patient's ICN in string format (ICN^ICN^ICN^ICN...) | 
| vs:Input_Parameter-8994_02 | FDATE | LITERAL |  |  | Date to start search from.   | 
| vs:Input_Parameter-8994_02 | TDATE | LITERAL |  |  | Date to end search at.   | 