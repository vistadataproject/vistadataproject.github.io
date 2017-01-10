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

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | PATIENT ICN | LITERAL | 30 | true | PATIENTS ICN NUMBER FROM ^DPT(DFN). | 
| vs:Input_Parameter-8994_02 | CLAIM DATE | LITERAL | 15 | true | BENEFICIARY TRAVEL CLAIM DATE (NOT THE CURRENT DATE). | 
| vs:Input_Parameter-8994_02 | DGBTRET | REFERENCE |  | true | THE ARRAY THE DATA WILL BE RETURNED IN. | 