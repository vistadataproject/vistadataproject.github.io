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

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | DFN | LITERAL | 12 | true | Patient IEN. | 
| vs:Input_Parameter-8994_02 | DIVISION | LITERAL | 12 | true | Division IEN. | 
| vs:Input_Parameter-8994_02 | SERVICE | LITERAL | 12 | true | Service IEN. | 
| vs:Input_Parameter-8994_02 | LOCATION | LITERAL | 12 | true | Location IEN. | 
| vs:Input_Parameter-8994_02 | USERCLASS | LITERAL | 50 | true | User Class IENs separated by \^\. | 