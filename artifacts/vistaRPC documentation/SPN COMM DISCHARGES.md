---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; SPN COMM DISCHARGES 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}SPN COMM DISCHARGES{:/}
 tag | {::nomarkdown}COL{:/}
 routine | [SPNJRPCD](http://code.osehra.org/dox/Routine_SPNJRPCD_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Returns Discharge to Community report information.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ICNLIST{:/} | {::nomarkdown}LIST{:/} |  |  | {::nomarkdown}Patient's ICN in list format (ICN^ICN^ICN^ICN^ICN...){:/} | 
| {::nomarkdown}FDATE{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Date to begin search with.{:/} | 
| {::nomarkdown}TDATE{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Date to end search at.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 2:53:15 am</p>{:/}