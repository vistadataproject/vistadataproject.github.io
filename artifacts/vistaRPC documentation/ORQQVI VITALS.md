---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORQQVI VITALS 

 property | value 
--- | --- 
 label | ORQQVI VITALS
 tag | FASTVIT
 routine | [ORQQVI](http://code.osehra.org/dox/Routine_ORQQVI_source.html)
 return value type | ARRAY
 description | Array of patient most recent vitals within start and stop date/times.  Ifno start and stop dates are indicated, the most recent are returned. If no start date is passed then the start date is 1 (i.e. before anydates). If no stop date is passed then the start date is also the stop date and ifthere is not start date then 9999999 is used as the stop date.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | PATIENT ID | LITERAL | 16 | true | Patient id (DFN) from Patient File (#2). | 
| vs:Input_Parameter-8994_02 | START DATE/TIME | LITERAL | 16 |  | Start date/time for vital retrieval in Fileman format.If none is passed then the start date is 1 (i.e. before any dates). | 
| vs:Input_Parameter-8994_02 | STOP DATE/TIME | LITERAL | 16 |  | Stop date/time for vital retrieval in Fileman format.If none is passed then the Start date is also the stop date and if thereis not start date then 9999999 is used as the stop date | 