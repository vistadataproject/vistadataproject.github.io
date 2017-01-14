---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; SPN PROS UTL SPECIFIC 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}SPN PROS UTL SPECIFIC{:/}
 tag | {::nomarkdown}COL{:/}
 routine | [SPNJRPP2](http://code.osehra.org/dox/Routine_SPNJRPP2_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Returns detailed information for delivered prosthetics items for a list of given patients (based on the ICN) based on a date range, and prosthetic item list.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ICNLIST{:/} | {::nomarkdown}LIST{:/} |  |  | {::nomarkdown}Patient's ICN in string format (ICN^ICN^ICN^ICN...){:/} | 
| {::nomarkdown}FDATE{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Date to start search from.  {:/} | 
| {::nomarkdown}TDATE{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Date to end search at.  {:/} | 
| {::nomarkdown}ITEMS{:/} | {::nomarkdown}LIST{:/} |  |  | {::nomarkdown}Array that has the prosthetic item names{:/} | 




 Generated on January 14th 2017, 7:26:36 am