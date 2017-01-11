---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DG PATIENT TREATMENT DATA 

 property | value 
--- | --- 
 label | DG PATIENT TREATMENT DATA
 tag | RPC
 routine | [DGPTFAPI](http://code.osehra.org/dox/Routine_DGPTFAPI_source.html)
 return value type | ARRAY
 description | This RPC will return data from the Patient Treatment (#45) file. Input:  PTFNUMBR - The Patient Treatment IFN (.001 of the #45 file record)   RESULTS - Results array (passed by reference)     Output:     RESULTS - Results array (passed by reference) with the following               nodes.   RESULTS(0) - 1 (entry found) OR -1 (error)  RESULTS(1) - Type of Disposition (#72)^Place of Disposition (#75)^               Principal Diagnosis (#79)^Coding System Version (pointer to              ICD Coding Systems #80.4 file)  RESULTS(2) - DX 2^DX 3^...^DX 24 (Secondary Diagnosis 2 through Secondary              Diagnosis 24)  RESULTS(3) - POA 1^POA 2^...^POA 25 (Present on Admission indicators for              Principal Diagnosis and Secondary Diagnosis 2 through               Secondary Diagnosis 24) 

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| PTFNUMBER | LITERAL |  | true | The Patient Treatment IFN (.001 of the #45 file record)  | 




 ###### Generated on January 11th 2017, 6:39:42 am