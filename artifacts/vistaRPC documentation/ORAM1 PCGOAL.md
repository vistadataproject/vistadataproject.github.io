---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORAM1 PCGOAL 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORAM1 PCGOAL{:/}
 tag | {::nomarkdown}PCGOAL{:/}
 routine | [ORAM1](http://code.osehra.org/dox/Routine_ORAM1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Calculates percent in goal from filed INR entries for AnticoagulationManagement patients - can do either Stable or all patients (pass 1 as second parameter for stable).{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} |  |  |  | 
| {::nomarkdown}CMPLX{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}OPTIONAL,  IF MISSING, CLACULATES ON ALL VISITS; IF 1 ONLY CALCULATES ON NON-COMPLX VISITS{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 15th 2017, 12:59:51 am</p>{:/}