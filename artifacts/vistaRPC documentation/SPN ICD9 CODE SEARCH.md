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

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| ICNLST | LIST |  |  | Patient's ICNs in list format (ICN^ICN^ICN^ICN^ICN...) | 
| FDATE | LITERAL |  |  | The admission starting date | 
| TDATE | LITERAL |  |  | The Admission ending date | 
| PATTYP | LITERAL |  |  | (1) Patients in SCI Registry only (2) All Patients | 
| SPNANS | LITERAL |  |  | (1) Range of Codes (2) Individual codes | 
| CODES | LIST |  |  | The list or range of ICD codes | 




 ###### Generated on January 11th 2017, 6:39:43 am