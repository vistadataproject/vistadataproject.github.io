---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; VPS GET PATIENT DEMOGRAPHIC 

 property | value 
--- | --- 
 label | VPS GET PATIENT DEMOGRAPHIC
 tag | GETDATA
 routine | [VPSRPC1](http://code.osehra.org/dox/Routine_VPSRPC1_source.html)
 return value type | ARRAY
 description | Called by the Vetlink Kiosk system.  The RPC will accept a single inputvalue whic is the patient SSN.  The RPC returns the patient demographics,insurance, and up-coming appointments.returns the patient demographics, insurance, and up-coming appointments.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| SSN | LITERAL | 12 | true | Social Security Number | 




 Generated on January 11th 2017, 7:15:04 am