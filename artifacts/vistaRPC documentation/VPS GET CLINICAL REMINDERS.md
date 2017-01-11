---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; VPS GET CLINICAL REMINDERS 

 property | value 
--- | --- 
 label | VPS GET CLINICAL REMINDERS
 tag | REMIND
 routine | [VPSPTCR](http://code.osehra.org/dox/Routine_VPSPTCR_source.html)
 return value type | ARRAY
 description | Called by the Vetlink Kiosk system. The RPC returns the DUE NOW Clinical Reminders for the patient.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DFN | LITERAL | 12 | true | Patient IEN. | 
| DIVISION | LITERAL | 12 | true | Division IEN. | 
| SERVICE | LITERAL | 12 | true | Service IEN. | 
| LOCATION | LITERAL | 12 | true | Location IEN. | 
| USERCLASS | LITERAL | 50 | true | User Class IENs separated by \^\. | 




Generated on January 11th 2017, 6:34:23 am