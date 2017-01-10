---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; RMIM CONSULT LIST 

 property | value 
--- | --- 
 label | RMIM CONSULT LIST
 tag | CON
 routine | [RMIMV](http://code.osehra.org/dox/Routine_RMIMV_source.html)
 return value type | GLOBAL ARRAY
 description | Returns a list of consult requests for a patient within optional date rangeand optional service.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | PATIENT | LITERAL | 16 | true | Patient DFN from File #2 (Patient File.) | 
| vs:Input_Parameter-8994_02 | START DATE | LITERAL | 16 |  | Optional start date to begin the search. | 
| vs:Input_Parameter-8994_02 | STOP DATE | LITERAL | 16 |  | Optional stop date to end the search. | 
| vs:Input_Parameter-8994_02 | SERVICE | LITERAL | 16 |  | Optional consulting service from the Request Service file (#123.5). | 