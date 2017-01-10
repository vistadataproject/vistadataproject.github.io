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

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | ICNLST | LIST |  |  | Patient's ICN in string format (ICN^ICN^ICN^ICN)  | 
| vs:Input_Parameter-8994_02 | FDATE | LITERAL |  |  | Date to start search from.   | 
| vs:Input_Parameter-8994_02 | TDATE | LITERAL |  |  | Date to end search at.   | 
| vs:Input_Parameter-8994_02 | CLINSTP | LIST |  |  | List of Clinic Stops to search for. | 
| vs:Input_Parameter-8994_02 | SPECLTY | LIST |  |  | Type of Specialties to search for.  | 
| vs:Input_Parameter-8994_02 | HIUSERS | LITERAL |  |  | Type of data to return: 0 - clinic & specialty stats, 1 - patient usage data.  | 