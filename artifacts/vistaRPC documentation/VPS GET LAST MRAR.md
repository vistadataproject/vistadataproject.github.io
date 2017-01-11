---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; VPS GET LAST MRAR 

 property | value 
--- | --- 
 label | VPS GET LAST MRAR
 tag | GET
 routine | [VPSMRAR9](http://code.osehra.org/dox/Routine_VPSMRAR9_source.html)
 return value type | ARRAY
 description | Given Patient ID (in ID/Type pair), this RPC return the last Medication and Allergy Review data for the patient.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| VPSNUM | LITERAL | 30 | true | This is the Patient ID based on Patient ID Type. The value could be the SSN, ICN or VIC/CAC number. ICN, DFN, or VIC/CAC | 
| VPSTYP | LITERAL | 7 | true | This is the Patient ID Type. Valid type is DFN, SSN, ICN, or VIC/CAC. | 




Generated on January 11th 2017, 6:34:23 am