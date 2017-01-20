---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; SPN INPAT OUTPAT ACTIVITY 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}SPN INPAT OUTPAT ACTIVITY{:/}
 tag | {::nomarkdown}COL{:/}
 routine | [SPNJRPC3](http://code.osehra.org/dox/Routine_SPNJRPC3_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Returns inpatient/outpatient activity statistics for a list of given patients (based on the ICN) based on a date range, minimum number of results, and number of highest patients to identify. {:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ICNLST{:/} | {::nomarkdown}LIST{:/} |  |  | {::nomarkdown}Patient's ICN in string format (ICN^ICN^ICN^ICN ) {:/} | 
| {::nomarkdown}FDATE{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Date to start search from.  {:/} | 
| {::nomarkdown}TDATE{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Date to end search at.  {:/} | 
| {::nomarkdown}HIUSERS{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Number of patients with highest amount of orders to identify. {:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 10:14:32 pm</p>{:/}