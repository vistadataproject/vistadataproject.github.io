---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; VPS GET CHANGED APPOINTMENTS 

 property | value 
--- | --- 
 label | VPS GET CHANGED APPOINTMENTS
 tag | GETCHG
 routine | [VPSAPPT2](http://code.osehra.org/dox/Routine_VPSAPPT2_source.html)
 return value type | GLOBAL ARRAY
 description | This RPC will only return new, modified, or deleted appointments and should be called periodically by VetLink to update the appointment queue.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| VPSQUEUE | LITERAL | 3 | true | Unique Queue ID representing Vecna Appointment Queue. | 




 Generated on January 11th 2017, 7:15:04 am