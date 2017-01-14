---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; DSIRRPTB FEEO FEES OUT RPT 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}DSIRRPTB FEEO FEES OUT RPT{:/}
 tag | {::nomarkdown}FEEO{:/}
 routine | [DSIRRPTB](http://code.osehra.org/dox/Routine_DSIRRPTB_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This schedules or runs the Fees Outstanding Report.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DIVL{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}200{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This can be one or more division numbers delimeted by \^\. I not provided,the default division for the person requesting the report is used.{:/} | 
| {::nomarkdown}SCHED{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Boolean value to determine if the report is to be scheduled.  If not provided a zero is assumed and the report will run immediately without going through the task manager.{:/} | 
| {::nomarkdown}ESTART{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}15{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the earliest date and time to start running the report task if scheduled.  If not specified, the current date/time will be used. {:/} | 
| {::nomarkdown}FRDT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}7{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Defines the low end of the billing dates to include in the report. {:/} | 
| {::nomarkdown}TODT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}7{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Defines the high end of the billing dates to include in the report.{:/} | 




 Generated on January 14th 2017, 7:26:36 am