---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORWORB KILL EXPIR OI ALERT 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWORB KILL EXPIR OI ALERT{:/}
 tag | {::nomarkdown}KILEXOI{:/}
 routine | [ORWORB](http://code.osehra.org/dox/Routine_ORWORB_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Evaluate expiring flagged orderable item orders. If none remain, killcurrent alert for current user.  Kill for other users if alert so defined.{:/}


### Method description

 property | value 
--- | --- 
 Method comment | Delete expiring flagged OI notification if no flagged expiring OI remaining

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}Patient DFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}32{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Patient DFN{:/} | 
| {::nomarkdown}Alert type{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}8{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Pointer to type of alert in the OE/RR NOTIFICATIONS file (100.9). This caneither be of type FLAGGED OI EXPIRING - INPT (#64) or FLAGGED OI EXPIRING- OUTPT (#65).{:/} | 




 Generated on January 13th 2017, 5:52:13 am