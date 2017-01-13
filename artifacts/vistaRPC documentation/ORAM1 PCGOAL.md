---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORAM1 PCGOAL 

 property | value 
--- | --- 
 label | {::nomarkdown}ORAM1 PCGOAL{:/}
 tag | {::nomarkdown}PCGOAL{:/}
 routine | [ORAM1](http://code.osehra.org/dox/Routine_ORAM1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Calculates percent in goal from filed INR entries for AnticoagulationManagement patients - can do either Stable or all patients (pass 1 as second parameter for stable).{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} |  |  |  | 
| {::nomarkdown}CMPLX{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}OPTIONAL,  IF MISSING, CLACULATES ON ALL VISITS; IF 1 ONLY CALCULATES ON NON-COMPLX VISITS{:/} | 




 Generated on January 13th 2017, 6:44:48 am