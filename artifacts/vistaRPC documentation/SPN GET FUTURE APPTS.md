---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; SPN GET FUTURE APPTS 

 property | value 
--- | --- 
 label | SPN GET FUTURE APPTS
 tag | COL
 routine | [SPNJRPC2](http://code.osehra.org/dox/Routine_SPNJRPC2_source.html)
 return value type | GLOBAL ARRAY
 description | Returns a listing of patients with appointment informationif they are scheduled for an appointment during the requested date range.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| ICNLST | LIST |  |  | A list of Integration Control Numbers of patients in the PATIENT file (#2)in the following format: (ICN^ICN^ICN^ICN^ICN...) | 
| SPNSEL | LITERAL |  |  | Specifies which patients to search through:                1 - Patients from SCI registry only (ICNLST)                2 - VistA patients with SCD indicator only                3 - Both 1 & 2 | 
| SPNSTRT | LITERAL |  |  | Starting date range. | 
| SPNEND | LITERAL |  |  | Ending date range. | 