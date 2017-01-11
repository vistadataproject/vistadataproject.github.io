---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORQQVI VITALS FOR DATE RANGE 

 property | value 
--- | --- 
 label | ORQQVI VITALS FOR DATE RANGE
 tag | VITALS
 routine | [ORQQVI](http://code.osehra.org/dox/Routine_ORQQVI_source.html)
 return value type | ARRAY
 description | Function returns a patient's vital measurements between start date and stop date.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| PATIENT ID | LITERAL | 16 | true | Patient id (DFN) from Patient File (#2). | 
| START DATE/TIME | LITERAL | 16 |  | Start date/time for vital retrieval in Fileman format. | 
| STOP DATE/TIME | LITERAL | 16 |  | Stop date/time for vital retrieval in Fileman format. | 