---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWORB KILL EXPIR MED ALERT 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWORB KILL EXPIR MED ALERT{:/}
 tag | {::nomarkdown}KILEXMED{:/}
 routine | [ORWORB](http://code.osehra.org/dox/Routine_ORWORB_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Evaluate expiring med orders.  If none remain, kill current alert forcurrent user.  Kill for other users if alert so defined.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Delete expiring meds notification if no expiring meds remaining

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}Patient DFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}32{:/} | {::nomarkdown}true{:/} |  | 




 Generated on January 13th 2017, 6:44:47 am