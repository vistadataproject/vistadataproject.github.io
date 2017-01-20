---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; SPN INPAT CARE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}SPN INPAT CARE{:/}
 tag | {::nomarkdown}COL{:/}
 routine | [SPNJRPIC](http://code.osehra.org/dox/Routine_SPNJRPIC_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Returns detailed information for Applications for Inpatient Care for a list of given patients (list of ICNs) based on a date range. {:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ICNLIST{:/} | {::nomarkdown}LIST{:/} |  |  | {::nomarkdown}Patient's ICNs in string format (ICN^ICN^ICN^ICN^ICN...) {:/} | 
| {::nomarkdown}FDATE{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Date to start search from.  {:/} | 
| {::nomarkdown}TDATE{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Date to end search at.  {:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 4:54:07 am</p>{:/}