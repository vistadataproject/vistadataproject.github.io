---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; SPN LAB URINALYSIS 

 property | value 
--- | --- 
 label | SPN LAB URINALYSIS
 tag | COL
 routine | [SPNRPCD](http://code.osehra.org/dox/Routine_SPNRPCD_source.html)
 return value type | GLOBAL ARRAY
 description | This RPC supports the following report(s):       Report Page Name              Subscreen      Urinary Tract Infections      Urinalysis  Notes:  Calling the line tag COL will generate all Lab Urinalysis testson file for the patient from the cut off date forward. DFN = Internal Entry Number of patient in the PATIENT file (#2)CUTDATE = Cut off date. Results are inclusive from cut off date to present  Tested at the Bay Pines FO account using DFN = 27 andCUTDATE=1-1-1990.  Of course, at other sites, DFN would vary.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| ICN | LITERAL |  | true | Internal entry number of the patient in the PATIENT file (#2). | 
| CUTDATE | LITERAL |  | true | Data from the CUTDATE forward to the present date will be returned. | 




Generated on January 11th 2017, 6:34:23 am