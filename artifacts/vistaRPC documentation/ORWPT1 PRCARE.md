---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORWPT1 PRCARE 

 property | value 
--- | --- 
 label | ORWPT1 PRCARE
 tag | PRCARE
 routine | [ORWPT1](http://code.osehra.org/dox/Routine_ORWPT1_source.html)
 return value type | SINGLE VALUE
 description | Return primary care information for a patient in the format:  VAL=Primary Care Team^Primary Care Provider^Attending^MH Treatment      Coordinator


### Method description

 property | value 
--- | --- 
 Method comment | return Primary Care info for CPRS Header
 Leading comment lines | Input - PATIENT = Patient DFN,Output - VAL = Primary Care Team^PCP^Attending^AP^MH Treatment Coordinator/MH Team^Inpatient Provider,for PCMM Web VAL = Primary Care Team/PCP/AP^^Attending^^MH Treatment Coordinator/MH Team^Inpatient Provider,Source of PACT/PCP data for CPRS is 404.41/.06 - 387,Other callers will get original data format,ICR #6042 - SCMC PCMM/R GET PRIMARY CARE SUMMARY 

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| dfn |  |  |  |  | 




 ###### Generated on January 11th 2017, 6:39:42 am