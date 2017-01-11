---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; RG REM ACTIVITY 

 property | value 
--- | --- 
 label | RG REM ACTIVITY
 tag | EN
 routine | [RGACTIV](http://code.osehra.org/dox/Routine_RGACTIV_source.html)
 return value type | ARRAY
 description | This remote procedure call (RPC) returns Health Level Seven (HL7) message information and exception information for a patient.  The HL7 data is fromthe ADT/HL7 PIVOT (#391.71) file and exception date is from the CIRN HL7 EXCEPTION LOG (#991.1) file.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| ICN | LITERAL | 16 | true | Integration Control Number (ICN) for patient on whom data is requested. | 
| SSN | LITERAL | 9 | true | Social Security Number (SSN) for patient on whom data is requested. | 




Generated on January 11th 2017, 6:34:23 am