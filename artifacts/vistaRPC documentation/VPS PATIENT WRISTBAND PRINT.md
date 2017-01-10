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

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | VPSIO | LITERAL | 50 | true | This is the device name where the wristband label to print on. | 
| vs:Input_Parameter-8994_02 | VPSTYP | LITERAL | 7 | true | Patient ID Type. Valid Input parameter: DFN, SSN, ICN, VIC/CAC | 
| vs:Input_Parameter-8994_02 | VPSNUM | LITERAL | 50 | true | Patient ID. This could be DFN, SSN, ICN, VIC/CAC | 