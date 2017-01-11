---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIV GET EIV PATIENT REPORT 

 property | value 
--- | --- 
 label | DSIV GET EIV PATIENT REPORT
 tag | PIIV
 routine | [DSIVIC3](http://code.osehra.org/dox/Routine_DSIVIC3_source.html)
 return value type | GLOBAL ARRAY
 description | Returns one to many patient eIV reports from the Insurance Type multiple in the patient file.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DFN | LITERAL | 30 | true | Patient DFN (ien). | 
| DSIVPATP | LITERAL | 10 | true | Contains the pointer to the patient policy IEN from the Insurance Type multiple of the PATIENT file.  If sent, then the single eIV report for that policy will be returned, if not sent then all policy entries will be returned with any eIV report they might contain. | 




Generated on January 11th 2017, 6:34:23 am