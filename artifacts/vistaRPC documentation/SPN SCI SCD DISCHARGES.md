---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; SPN SCI SCD DISCHARGES 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}SPN SCI SCD DISCHARGES{:/}
 tag | {::nomarkdown}COL{:/}
 routine | [SPNJRPSD](http://code.osehra.org/dox/Routine_SPNJRPSD_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Returns detailed information for SCI/SCD DISCHARGES for a list of given patients (based on the ICN) based on a date range.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ICNLIST{:/} | {::nomarkdown}LIST{:/} |  |  | {::nomarkdown}Patient's ICN in string format (ICN^ICN^ICN^ICN...){:/} | 
| {::nomarkdown}FDATE{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Date to start search from.  {:/} | 
| {::nomarkdown}TDATE{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Date to end search at.  {:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:21:34 am</p>{:/}