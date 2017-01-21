---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; SPN LAB URINALYSIS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}SPN LAB URINALYSIS{:/}
 tag | {::nomarkdown}COL{:/}
 routine | [SPNRPCD](http://code.osehra.org/dox/Routine_SPNRPCD_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This RPC supports the following report(s):       Report Page Name              Subscreen      Urinary Tract Infections      Urinalysis  Notes:  Calling the line tag COL will generate all Lab Urinalysis testson file for the patient from the cut off date forward. DFN = Internal Entry Number of patient in the PATIENT file (#2)CUTDATE = Cut off date. Results are inclusive from cut off date to present  Tested at the Bay Pines FO account using DFN = 27 andCUTDATE=1-1-1990.  Of course, at other sites, DFN would vary.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ICN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Internal entry number of the patient in the PATIENT file (#2).{:/} | 
| {::nomarkdown}CUTDATE{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Data from the CUTDATE forward to the present date will be returned.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 4:20:10 am</p>{:/}