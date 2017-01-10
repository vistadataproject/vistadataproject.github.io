---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; RMPR PENDING APPOINTMENTS 

 property | value 
--- | --- 
 label | RMPR PENDING APPOINTMENTS
 tag | EN
 routine | [RMPR9PA](http://code.osehra.org/dox/Routine_RMPR9PA_source.html)
 return value type | ARRAY
 description | This procedure supplies the Pending Appointment data for TAB 2 of the GUI 2319. Pass IEN to Prosthetic Suspense (#668) Returned  RESULTS Array:RESULTS(0)=DATE/TIME^CLINIC^STATUS^TYPE

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | IEN | LITERAL | 180 | true |  | 