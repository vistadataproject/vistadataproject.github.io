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

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | PATIENT ID | LITERAL | 16 | true | Patient id (DFN) from Patient File (#2). | 
| vs:Input_Parameter-8994_02 | START DATE/TIME | LITERAL | 16 | true | Start date/time in FileMan format indicating what date/time to beginlisting medications. | 
| vs:Input_Parameter-8994_02 | STOP DATE/TIME | LITERAL | 16 | true | Stop date/time in FileMan format indicating what date/time to end listingmedications. | 