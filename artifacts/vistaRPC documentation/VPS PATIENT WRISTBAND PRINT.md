---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; VPS PATIENT WRISTBAND PRINT 

 property | value 
--- | --- 
 label | VPS PATIENT WRISTBAND PRINT
 tag | PRINT
 routine | [VPSWRIST](http://code.osehra.org/dox/Routine_VPSWRIST_source.html)
 return value type | SINGLE VALUE
 description | This RPC prints patient wristband to VistA printer using VistA standard patPatient Wristband Print routine (DGPWB).

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| VPSIO | LITERAL | 50 | true | This is the device name where the wristband label to print on. | 
| VPSTYP | LITERAL | 7 | true | Patient ID Type. Valid Input parameter: DFN, SSN, ICN, VIC/CAC | 
| VPSNUM | LITERAL | 50 | true | Patient ID. This could be DFN, SSN, ICN, VIC/CAC | 




Generated on January 11th 2017, 6:34:23 am