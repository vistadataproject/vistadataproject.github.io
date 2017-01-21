---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; PSB MEDS ON PATIENT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}PSB MEDS ON PATIENT{:/}
 tag | {::nomarkdown}MEDSONPT{:/}
 routine | [PSBRPC1](http://code.osehra.org/dox/Routine_PSBRPC1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This RPC returns indicators if medications are still on a patient.  The patient's DFN will be passed in and a RESULTS array returned with three flags set.  Flags set to 1 for meds are on patient or 0 none per thiscategory.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Patient DFN{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 7:57:53 am</p>{:/}