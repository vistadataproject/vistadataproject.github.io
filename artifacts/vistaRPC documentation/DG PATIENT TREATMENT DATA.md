---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DG PATIENT TREATMENT DATA 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DG PATIENT TREATMENT DATA{:/}
 tag | {::nomarkdown}RPC{:/}
 routine | [DGPTFAPI](http://code.osehra.org/dox/Routine_DGPTFAPI_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This RPC will return data from the Patient Treatment (#45) file. Input:  PTFNUMBR - The Patient Treatment IFN (.001 of the #45 file record)   RESULTS - Results array (passed by reference)     Output:     RESULTS - Results array (passed by reference) with the following               nodes.   RESULTS(0) - 1 (entry found) OR -1 (error)  RESULTS(1) - Type of Disposition (#72)^Place of Disposition (#75)^               Principal Diagnosis (#79)^Coding System Version (pointer to              ICD Coding Systems #80.4 file)  RESULTS(2) - DX 2^DX 3^...^DX 24 (Secondary Diagnosis 2 through Secondary              Diagnosis 24)  RESULTS(3) - POA 1^POA 2^...^POA 25 (Present on Admission indicators for              Principal Diagnosis and Secondary Diagnosis 2 through               Secondary Diagnosis 24) {:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PTFNUMBER{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}The Patient Treatment IFN (.001 of the #45 file record) {:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 8:30:44 pm</p>{:/}