---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; SPN PAT BREAKDOWN 


 ## VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}SPN PAT BREAKDOWN{:/}
 tag | {::nomarkdown}COL{:/}
 routine | [SPNJRPC5](http://code.osehra.org/dox/Routine_SPNJRPC5_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Returns breakdown of patient statistics for a list of given patients (based on the ICN) based on a date range, if provided.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ICNLIST{:/} | {::nomarkdown}LIST{:/} |  |  | {::nomarkdown}Patient's ICN in string format (ICN^ICN^ICN^ICN) {:/} | 
| {::nomarkdown}FDATE{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}(Optional) Date to start search from.  {:/} | 
| {::nomarkdown}TDATE{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}(Optional) Date to end search at.  {:/} | {::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:36:25 am</p>{:/}