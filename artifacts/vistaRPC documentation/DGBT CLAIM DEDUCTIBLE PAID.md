---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DGBT CLAIM DEDUCTIBLE PAID 

 property | value 
--- | --- 
 label | DGBT CLAIM DEDUCTIBLE PAID
 tag | RPC
 routine | [DGBTRDV](http://code.osehra.org/dox/Routine_DGBTRDV_source.html)
 return value type | ARRAY
 description | THIS RPC IS USED BY BENEFICIARY TRAVEL PACKAGE TO RETRIEVE TRAVEL CLAIM INFORMATION ABOUT ANY TRAVEL CLAIMS FOR PATIENT.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| PATIENT ICN | LITERAL | 30 | true | PATIENTS ICN NUMBER FROM ^DPT(DFN). | 
| CLAIM DATE | LITERAL | 15 | true | BENEFICIARY TRAVEL CLAIM DATE (NOT THE CURRENT DATE). | 
| DGBTRET | REFERENCE |  | true | THE ARRAY THE DATA WILL BE RETURNED IN. | 




Generated on January 11th 2017, 6:34:23 am