---
layout: default
title: RPCL documentation
---



## [RPCL](TableOfContent.md) &#8594; ORWPT1 PRCARE 

 property | value 
--- | --- 
 name | ORWPT1 PRCARE
 domain | Patient
 description | {::nomarkdown}Return primary care, inpatient, and mental health summary information.{:/}
 VISTA (8994) description | [nodeVISTA 8994](http://localhost:9000/query?fmql=DESCRIBE%208994%20FILTER%20(.01%3DORWPT1%20PRCARE)&format=HTML)
 MUMPS implementation | [PRCARE^ORWPT1](http://code.osehra.org/dox/Routine_ORWPT1_source.html)
 type | READ_STRUCTURED
 complexity | 
 uses | 
 return type | SINGLE VALUE
 return description | Return primary care, inpatient, and mental health summary information.
 Method comment | return Primary Care info for CPRS Header
 Leading comment lines | Input - PATIENT = Patient DFN,Output - VAL = Primary Care Team^PCP^Attending^AP^MH Treatment Coordinator/MH Team^Inpatient Provider,for PCMM Web VAL = Primary Care Team/PCP/AP^^Attending^^MH Treatment Coordinator/MH Team^Inpatient Provider,Source of PACT/PCP data for CPRS is 404.41/.06 - 387,Other callers will get original data format,ICR #6042 - SCMC PCMM/R GET PRIMARY CARE SUMMARY 

### Input Parameters

| id | parameterType | required | description | example | 
| --- | --- | --- | --- | --- | 
| DFN | LITERAL | true | {::nomarkdown}Patient id (DFN){:/} |  | 