---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; SPN LAB COMPLETE BLOOD COUNT 

 property | value 
--- | --- 
 label | SPN LAB COMPLETE BLOOD COUNT
 tag | COL
 routine | [SPNRPCC](http://code.osehra.org/dox/Routine_SPNRPCC_source.html)
 return value type | GLOBAL ARRAY
 description | This RPC supports the following report(s):         Report Page Name                Subscreen        Urinary Tract Infection         Complete Blood Count  Notes:  Calling the line tag COL will generate all Lab Complete Blood Count testson file for the patient from the cut off date forward. DFN = Internal Entry Number of patient in the PATIENT file (#2)CUTDATE = Cut off date. Results are inclusive from cut off date to present  Tested at the Bay Pines FO account using DFN = 100005251 and CUTDATE=1-1-1900.  Of course, at other sites, DFN would vary.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| ICN | LITERAL |  | true |  | 
| CUTDATE | LITERAL |  | true |  | 