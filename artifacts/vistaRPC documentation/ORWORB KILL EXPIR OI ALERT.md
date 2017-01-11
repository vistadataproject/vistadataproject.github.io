---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORWORB KILL EXPIR OI ALERT 

 property | value 
--- | --- 
 label | ORWORB KILL EXPIR OI ALERT
 tag | KILEXOI
 routine | [ORWORB](http://code.osehra.org/dox/Routine_ORWORB_source.html)
 return value type | SINGLE VALUE
 description | Evaluate expiring flagged orderable item orders. If none remain, killcurrent alert for current user.  Kill for other users if alert so defined.


### Method description

 property | value 
--- | --- 
 Method comment | Delete expiring flagged OI notification if no flagged expiring OI remaining

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| Patient DFN | LITERAL | 32 | true | Patient DFN | 
| Alert type | LITERAL | 8 | true | Pointer to type of alert in the OE/RR NOTIFICATIONS file (100.9). This caneither be of type FLAGGED OI EXPIRING - INPT (#64) or FLAGGED OI EXPIRING- OUTPT (#65). | 




Generated on January 11th 2017, 6:34:23 am