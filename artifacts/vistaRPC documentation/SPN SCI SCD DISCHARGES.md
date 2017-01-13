---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; SPN SCI SCD DISCHARGES 

 property | value 
--- | --- 
 label | {::nomarkdown}SPN SCI SCD DISCHARGES{:/}
 tag | {::nomarkdown}COL{:/}
 routine | [SPNJRPSD](http://code.osehra.org/dox/Routine_SPNJRPSD_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Returns detailed information for SCI/SCD DISCHARGES for a list of given patients (based on the ICN) based on a date range.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ICNLIST{:/} | {::nomarkdown}LIST{:/} |  |  | {::nomarkdown}Patient's ICN in string format (ICN^ICN^ICN^ICN...){:/} | 
| {::nomarkdown}FDATE{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Date to start search from.  {:/} | 
| {::nomarkdown}TDATE{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Date to end search at.  {:/} | 




 Generated on January 13th 2017, 6:24:32 am