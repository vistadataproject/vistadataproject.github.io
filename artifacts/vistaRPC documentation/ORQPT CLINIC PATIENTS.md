---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORQPT CLINIC PATIENTS 

 property | value 
--- | --- 
 label | ORQPT CLINIC PATIENTS
 tag | CLINPTS
 routine | [ORQPTQ2](http://code.osehra.org/dox/Routine_ORQPTQ2_source.html)
 return value type | ARRAY
 description | Returns patients with appointments at a clinic between start and stop dates


### Method description

 property | value 
--- | --- 
 Method comment | RETURN LIST OF PTS W/CLINIC APPT W/IN BEGINNING AND END DATES
 Leading comment lines | PKS-8/2003: Modified for new scheduling pkg APIs.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| CLINIC ID | LITERAL | 16 | true | The record number of the clinic from the Hospital Location File (#44). | 
| START DATE | LITERAL | 16 |  | The start date of the clinic appointments to retrieve (not in FM format.) | 
| STOP DATE | LITERAL | 16 |  | The stop date of the clinic appointments to retrieve (not in Fileman format.) | 




 ###### Generated on January 11th 2017, 6:39:42 am