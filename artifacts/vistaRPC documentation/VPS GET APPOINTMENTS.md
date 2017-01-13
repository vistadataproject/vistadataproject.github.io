---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; VPS GET APPOINTMENTS 

 property | value 
--- | --- 
 label | {::nomarkdown}VPS GET APPOINTMENTS{:/}
 tag | {::nomarkdown}GET{:/}
 routine | [VPSAPPT](http://code.osehra.org/dox/Routine_VPSAPPT_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This RPC will return appointments for a given data range for a specific Appointment Queue. This RPC will refresh an existing queue with the current appointments and typically need to be called only once a day.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}VPSQUEUE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}3{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Unique Queue ID representing Vecna Appointment Queue.{:/} | 
| {::nomarkdown}VPSFRDT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}14{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Appointment From Date{:/} | 
| {::nomarkdown}VPSTODT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}14{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Appointment Through Date{:/} | 




 Generated on January 13th 2017, 5:52:13 am