---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORWORB KILL EXPIR MED ALERT 

 property | value 
--- | --- 
 label | ORWORB KILL EXPIR MED ALERT
 tag | KILEXMED
 routine | [ORWORB](http://code.osehra.org/dox/Routine_ORWORB_source.html)
 return value type | SINGLE VALUE
 description | Evaluate expiring med orders.  If none remain, kill current alert forcurrent user.  Kill for other users if alert so defined.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| Patient DFN | LITERAL | 32 | true |  | 