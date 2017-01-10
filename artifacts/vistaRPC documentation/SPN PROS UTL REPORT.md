---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; SPN PROS UTL REPORT 

 property | value 
--- | --- 
 label | SPN PROS UTL REPORT
 tag | COL
 routine | [SPNJRPP1](http://code.osehra.org/dox/Routine_SPNJRPP1_source.html)
 return value type | GLOBAL ARRAY
 description | Returns detailed information for delivered prosthetics items for a list of given patients (based on the ICN) based on a date range.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | ICNLIST | LIST |  |  | Patient's ICN in string format (ICN^ICN^ICN^ICN...) | 
| vs:Input_Parameter-8994_02 | FDATE | LITERAL |  |  | Date to start collection from: (mm/dd/yyyy) | 
| vs:Input_Parameter-8994_02 | TDATE | LITERAL |  |  | Date to end collection: (mm/dd/yyyy)   | 