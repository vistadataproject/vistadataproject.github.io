---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; SPN INPAT OUTPAT ACTIVITY 

 property | value 
--- | --- 
 label | SPN INPAT OUTPAT ACTIVITY
 tag | COL
 routine | [SPNJRPC3](http://code.osehra.org/dox/Routine_SPNJRPC3_source.html)
 return value type | GLOBAL ARRAY
 description | Returns inpatient/outpatient activity statistics for a list of given patients (based on the ICN) based on a date range, minimum number of results, and number of highest patients to identify. 

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | ICNLST | LIST |  |  | Patient's ICN in string format (ICN^ICN^ICN^ICN )  | 
| vs:Input_Parameter-8994_02 | FDATE | LITERAL |  |  | Date to start search from.   | 
| vs:Input_Parameter-8994_02 | TDATE | LITERAL |  |  | Date to end search at.   | 
| vs:Input_Parameter-8994_02 | HIUSERS | LITERAL |  |  | Number of patients with highest amount of orders to identify.  | 