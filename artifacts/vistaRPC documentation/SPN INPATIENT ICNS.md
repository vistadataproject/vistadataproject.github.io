---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; SPN INPATIENT ICNS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}SPN INPATIENT ICNS{:/}
 tag | {::nomarkdown}COL{:/}
 routine | [SPNJRPIP](http://code.osehra.org/dox/Routine_SPNJRPIP_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Returns list of ICNs of all Inpatients during a given date range...used as input for SCI filtered reports.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}FDATE{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Date to begin Inpatient search{:/} | 
| {::nomarkdown}TDATE{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Date to end Inpatient search{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:46:15 am</p>{:/}