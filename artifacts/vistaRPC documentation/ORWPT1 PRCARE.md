---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORWPT1 PRCARE 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWPT1 PRCARE{:/}
 tag | {::nomarkdown}PRCARE{:/}
 routine | [ORWPT1](http://code.osehra.org/dox/Routine_ORWPT1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Return primary care information for a patient in the format:  VAL=Primary Care Team^Primary Care Provider^Attending^MH Treatment      Coordinator{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | return Primary Care info for CPRS Header
 Leading comment lines | {::nomarkdown}Input - PATIENT = Patient DFN<br/>Output - VAL = Primary Care Team^PCP^Attending^AP^MH Treatment Coordinator/MH Team^Inpatient Provider<br/>for PCMM Web VAL = Primary Care Team/PCP/AP^^Attending^^MH Treatment Coordinator/MH Team^Inpatient Provider<br/>Source of PACT/PCP data for CPRS is 404.41/.06 - 387<br/>Other callers will get original data format<br/>ICR #6042 - SCMC PCMM/R GET PRIMARY CARE SUMMARY {:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}dfn{:/} |  |  |  |  | 




 Generated on January 13th 2017, 6:24:32 am