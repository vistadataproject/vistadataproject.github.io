---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; SPN OUTPATIENT ICNS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}SPN OUTPATIENT ICNS{:/}
 tag | {::nomarkdown}COL{:/}
 routine | [SPNJRPOP](http://code.osehra.org/dox/Routine_SPNJRPOP_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Returns list of ICNs of all outpatient visits during a given date range and clinic list.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}FDATE{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Date to begin Outpatients search{:/} | 
| {::nomarkdown}TDATE{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Date to end Outpatients search{:/} | 
| {::nomarkdown}CLINLST{:/} | {::nomarkdown}LIST{:/} |  |  | {::nomarkdown}List of Outpatient clinic stops {:/} | 
| {::nomarkdown}ICNLST{:/} | {::nomarkdown}LIST{:/} |  |  | {::nomarkdown}List of ICNs to search from{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 12:25:50 am</p>{:/}