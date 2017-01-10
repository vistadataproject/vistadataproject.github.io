---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; SPN ICD9 CODE SEARCH 

 property | value 
--- | --- 
 label | SPN ICD9 CODE SEARCH
 tag | COL
 routine | [SPNJRPC9](http://code.osehra.org/dox/Routine_SPNJRPC9_source.html)
 return value type | GLOBAL ARRAY
 description | Returns a patient's ICD9 Code history for a list of given patients (based on the ICN), date range, and a list of ICD codes desired to be searched.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | ICNLST | LIST |  |  | Patient's ICNs in list format (ICN^ICN^ICN^ICN^ICN...) | 
| vs:Input_Parameter-8994_02 | FDATE | LITERAL |  |  | The admission starting date | 
| vs:Input_Parameter-8994_02 | TDATE | LITERAL |  |  | The Admission ending date | 
| vs:Input_Parameter-8994_02 | PATTYP | LITERAL |  |  | (1) Patients in SCI Registry only (2) All Patients | 
| vs:Input_Parameter-8994_02 | SPNANS | LITERAL |  |  | (1) Range of Codes (2) Individual codes | 
| vs:Input_Parameter-8994_02 | CODES | LIST |  |  | The list or range of ICD codes | 