---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; SPN ICDS_CPTS & DESCRIPTIONS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}SPN ICDS_CPTS & DESCRIPTIONS{:/}
 tag | {::nomarkdown}COL{:/}
 routine | [SPNJRPCX](http://code.osehra.org/dox/Routine_SPNJRPCX_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Returns ICD/CPT Codes and Descriptions for a given patient based on the ICN and a cutoff date. {:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ICN{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Individual Patient's ICN {:/} | 
| {::nomarkdown}SPNCUTDT{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Date to start search from.  {:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 4:20:10 am</p>{:/}