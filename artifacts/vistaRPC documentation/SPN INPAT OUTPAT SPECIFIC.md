---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; SPN INPAT OUTPAT SPECIFIC 

 property | value 
--- | --- 
 label | SPN INPAT OUTPAT SPECIFIC
 tag | COL
 routine | [SPNJRPC4](http://code.osehra.org/dox/Routine_SPNJRPC4_source.html)
 return value type | GLOBAL ARRAY
 description | Returns inpatient/outpatient activity information for a list of given patients (based on the ICN) based on a date range, minimum number of results, a list of Clinic names/numbers and Specialty names.  There are two types of returns for this RPC depending on the HIUSERS parameter that is passed, a '0' will return clinic & specialty stats only and a '1' will return patient usage data as well. 

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| ICNLST | LIST |  |  | Patient's ICN in string format (ICN^ICN^ICN^ICN)  | 
| FDATE | LITERAL |  |  | Date to start search from.   | 
| TDATE | LITERAL |  |  | Date to end search at.   | 
| CLINSTP | LIST |  |  | List of Clinic Stops to search for. | 
| SPECLTY | LIST |  |  | Type of Specialties to search for.  | 
| HIUSERS | LITERAL |  |  | Type of data to return: 0 - clinic & specialty stats, 1 - patient usage data.  | 