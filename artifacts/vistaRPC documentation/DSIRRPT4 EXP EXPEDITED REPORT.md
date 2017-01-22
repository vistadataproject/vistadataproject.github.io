---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIRRPT4 EXP EXPEDITED REPORT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIRRPT4 EXP EXPEDITED REPORT{:/}
 tag | {::nomarkdown}EXP{:/}
 routine | [DSIRRPT4](http://code.osehra.org/dox/Routine_DSIRRPT4_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This procedure schedules or runs the Expedited Processing Report.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}FRDT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}15{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the field tht identifies the eariest received date for the report.{:/} | 
| {::nomarkdown}TODT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}15{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the field tht identifies the latest received date for the report.{:/} | 
| {::nomarkdown}DIV{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}12{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is an optional division number.  If not provided, DUZ(2) is used.{:/} | 
| {::nomarkdown}SCHED{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is an optional boolean field to indicate whether of not the report should be scheduled.{:/} | 
| {::nomarkdown}ESTART{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}15{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the earliest start time for a task to launch if the report isscheduled.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:23:03 am</p>{:/}