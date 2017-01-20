---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DVBAD CONTRACTED EXAM REPORTS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DVBAD CONTRACTED EXAM REPORTS{:/}
 tag | {::nomarkdown}CERPTS{:/}
 routine | [DVBACER1](http://code.osehra.org/dox/Routine_DVBACER1_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Allows demTRAN (GUI) to execute the Detailed, Summary and Timeliness contracted exam reports.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DVBARTYP{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The type of contracted exam report to execute: D: Detailed, S: Summary, or T: Timeliness.{:/} | 
| {::nomarkdown}DVBAFLTRS{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Optional parameter that allows filtering the contracted exam results. The filters include DATE, a date range, CONTRACTOR, IEN of specific contractor, PENDING, referred exams only and SORT for grouping results by contractor or request date/time (Used for Detailed Reports Only).{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 7:40:09 am</p>{:/}