---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; SPN LAB COMPLETE BLOOD COUNT 

 property | value 
--- | --- 
 label | {::nomarkdown}SPN LAB COMPLETE BLOOD COUNT{:/}
 tag | {::nomarkdown}COL{:/}
 routine | [SPNRPCC](http://code.osehra.org/dox/Routine_SPNRPCC_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This RPC supports the following report(s):         Report Page Name                Subscreen        Urinary Tract Infection         Complete Blood Count  Notes:  Calling the line tag COL will generate all Lab Complete Blood Count testson file for the patient from the cut off date forward. DFN = Internal Entry Number of patient in the PATIENT file (#2)CUTDATE = Cut off date. Results are inclusive from cut off date to present  Tested at the Bay Pines FO account using DFN = 100005251 and CUTDATE=1-1-1900.  Of course, at other sites, DFN would vary.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ICN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} |  | 
| {::nomarkdown}CUTDATE{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} |  | 




 Generated on January 13th 2017, 6:44:48 am