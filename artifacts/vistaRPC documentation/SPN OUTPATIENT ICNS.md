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

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | FDATE | LITERAL |  |  | Date to begin Outpatients search | 
| vs:Input_Parameter-8994_02 | TDATE | LITERAL |  |  | Date to end Outpatients search | 
| vs:Input_Parameter-8994_02 | CLINLST | LIST |  |  | List of Outpatient clinic stops  | 
| vs:Input_Parameter-8994_02 | ICNLST | LIST |  |  | List of ICNs to search from | 