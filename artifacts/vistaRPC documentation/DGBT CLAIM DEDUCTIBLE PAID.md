---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DGBT CLAIM DEDUCTIBLE PAID 

 property | value 
--- | --- 
 label | {::nomarkdown}DGBT CLAIM DEDUCTIBLE PAID{:/}
 tag | {::nomarkdown}RPC{:/}
 routine | [DGBTRDV](http://code.osehra.org/dox/Routine_DGBTRDV_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}THIS RPC IS USED BY BENEFICIARY TRAVEL PACKAGE TO RETRIEVE TRAVEL CLAIM INFORMATION ABOUT ANY TRAVEL CLAIMS FOR PATIENT.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PATIENT ICN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}PATIENTS ICN NUMBER FROM ^DPT(DFN).{:/} | 
| {::nomarkdown}CLAIM DATE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}15{:/} | {::nomarkdown}true{:/} | {::nomarkdown}BENEFICIARY TRAVEL CLAIM DATE (NOT THE CURRENT DATE).{:/} | 
| {::nomarkdown}DGBTRET{:/} | {::nomarkdown}REFERENCE{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}THE ARRAY THE DATA WILL BE RETURNED IN.{:/} | 




 Generated on January 13th 2017, 5:52:13 am