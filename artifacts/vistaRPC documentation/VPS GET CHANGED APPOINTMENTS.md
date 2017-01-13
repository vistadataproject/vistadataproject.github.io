---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; VPS GET CHANGED APPOINTMENTS 

 property | value 
--- | --- 
 label | {::nomarkdown}VPS GET CHANGED APPOINTMENTS{:/}
 tag | {::nomarkdown}GETCHG{:/}
 routine | [VPSAPPT2](http://code.osehra.org/dox/Routine_VPSAPPT2_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This RPC will only return new, modified, or deleted appointments and should be called periodically by VetLink to update the appointment queue.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}VPSQUEUE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}3{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Unique Queue ID representing Vecna Appointment Queue.{:/} | 




 Generated on January 13th 2017, 6:44:48 am