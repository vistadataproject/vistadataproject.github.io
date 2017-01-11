---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; VPS GET APPOINTMENTS 

 property | value 
--- | --- 
 label | VPS GET APPOINTMENTS
 tag | GET
 routine | [VPSAPPT](http://code.osehra.org/dox/Routine_VPSAPPT_source.html)
 return value type | GLOBAL ARRAY
 description | This RPC will return appointments for a given data range for a specific Appointment Queue. This RPC will refresh an existing queue with the current appointments and typically need to be called only once a day.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| VPSQUEUE | LITERAL | 3 | true | Unique Queue ID representing Vecna Appointment Queue. | 
| VPSFRDT | LITERAL | 14 | true | Appointment From Date | 
| VPSTODT | LITERAL | 14 | true | Appointment Through Date | 