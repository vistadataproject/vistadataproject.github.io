---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; SPN COMM DISCHARGES 

 property | value 
--- | --- 
 label | SPN COMM DISCHARGES
 tag | COL
 routine | [SPNJRPCD](http://code.osehra.org/dox/Routine_SPNJRPCD_source.html)
 return value type | GLOBAL ARRAY
 description | Returns Discharge to Community report information.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | ICNLIST | LIST |  |  | Patient's ICN in list format (ICN^ICN^ICN^ICN^ICN...) | 
| vs:Input_Parameter-8994_02 | FDATE | LITERAL |  |  | Date to begin search with. | 
| vs:Input_Parameter-8994_02 | TDATE | LITERAL |  |  | Date to end search at. | 