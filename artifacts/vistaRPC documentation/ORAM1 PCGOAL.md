---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORAM1 PCGOAL 

 property | value 
--- | --- 
 label | ORAM1 PCGOAL
 tag | PCGOAL
 routine | [ORAM1](http://code.osehra.org/dox/Routine_ORAM1_source.html)
 return value type | SINGLE VALUE
 description | Calculates percent in goal from filed INR entries for AnticoagulationManagement patients - can do either Stable or all patients (pass 1 as second parameter for stable).

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | DFN | LITERAL |  |  |  | 
| vs:Input_Parameter-8994_02 | CMPLX | LITERAL |  |  | OPTIONAL,  IF MISSING, CLACULATES ON ALL VISITS; IF 1 ONLY CALCULATES ON NON-COMPLX VISITS | 