---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; VPS GET CLINIC 

 property | value 
--- | --- 
 label | VPS GET CLINIC
 tag | GETCLN
 routine | [VPSRPC1](http://code.osehra.org/dox/Routine_VPSRPC1_source.html)
 return value type | ARRAY
 description | Called by the Vetlink Kiosk system.  The RPC will accept a single inputvalue representing the name of the clinic (full or partial name); and theoutput produced will be an array that returns all the possible matches forthe clinic (one to many clinics).  Values returned will be the name of theclinic and the ien of the clinic.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| CLINICNAME | LITERAL | 70 | true | The input would represent a full or partial name of a given clinic. | 




 ###### Generated on January 11th 2017, 6:39:43 am