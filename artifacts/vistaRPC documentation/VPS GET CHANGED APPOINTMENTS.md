---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; VPS GET CHANGED APPOINTMENTS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}VPS GET CHANGED APPOINTMENTS{:/}
 tag | {::nomarkdown}GETCHG{:/}
 routine | [VPSAPPT2](http://code.osehra.org/dox/Routine_VPSAPPT2_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This RPC will only return new, modified, or deleted appointments and should be called periodically by VetLink to update the appointment queue.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}VPSQUEUE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}3{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Unique Queue ID representing Vecna Appointment Queue.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:21:35 am</p>{:/}