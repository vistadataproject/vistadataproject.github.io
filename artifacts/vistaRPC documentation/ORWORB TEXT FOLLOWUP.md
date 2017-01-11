---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORWORB TEXT FOLLOWUP 

 property | value 
--- | --- 
 label | ORWORB TEXT FOLLOWUP
 tag | TXTFUP
 routine | [ORWORB](http://code.osehra.org/dox/Routine_ORWORB_source.html)
 return value type | GLOBAL ARRAY
 description | Returns text for notifications/alerts with a simple text message follow-upaction.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DFN | LITERAL | 20 | true | Internal entry number of patient in the Patient file [^DPT]. | 
| NOTIFICATION | LITERAL | 20 | true | Internal entry number of notification in the OE/RR Notification file[^OR(100.9]. | 
| XQADATA | LITERAL | 255 | true | Optional data used in some follow-up actions. | 