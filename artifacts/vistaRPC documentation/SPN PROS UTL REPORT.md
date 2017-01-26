---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; SPN PROS UTL REPORT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}SPN PROS UTL REPORT{:/}
 tag | {::nomarkdown}COL{:/}
 routine | [SPNJRPP1](http://code.osehra.org/dox/Routine_SPNJRPP1_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Returns detailed information for delivered prosthetics items for a list of given patients (based on the ICN) based on a date range.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ICNLIST{:/} | {::nomarkdown}LIST{:/} |  |  | {::nomarkdown}Patient's ICN in string format (ICN^ICN^ICN^ICN...){:/} | 
| {::nomarkdown}FDATE{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Date to start collection from: (mm/dd/yyyy){:/} | 
| {::nomarkdown}TDATE{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Date to end collection: (mm/dd/yyyy)  {:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 8:30:46 pm</p>{:/}