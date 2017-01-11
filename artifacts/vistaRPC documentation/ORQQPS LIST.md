---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORQQPS LIST 

 property | value 
--- | --- 
 label | ORQQPS LIST
 tag | LIST
 routine | [ORQQPS](http://code.osehra.org/dox/Routine_ORQQPS_source.html)
 return value type | ARRAY
 description | Function returns a list of a patient's medications.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| PATIENT ID | LITERAL | 16 | true | Patient id (DFN) from Patient File (#2). | 
| START DATE/TIME | LITERAL | 16 | true | Start date/time in FileMan format indicating what date/time to beginlisting medications. | 
| STOP DATE/TIME | LITERAL | 16 | true | Stop date/time in FileMan format indicating what date/time to end listingmedications. | 