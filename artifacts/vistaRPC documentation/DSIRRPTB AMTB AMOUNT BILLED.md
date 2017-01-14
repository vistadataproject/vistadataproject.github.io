---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; DSIRRPTB AMTB AMOUNT BILLED 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}DSIRRPTB AMTB AMOUNT BILLED{:/}
 tag | {::nomarkdown}AMTB{:/}
 routine | [DSIRRPTB](http://code.osehra.org/dox/Routine_DSIRRPTB_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This schedules or runs the Amount Billed Report.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}FRDT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}15{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the earliest date for this report based on the billing date.{:/} | 
| {::nomarkdown}TODT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}15{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the latest date for this report based on the billing date.  Ifnot specified, the current date is used.{:/} | 
| {::nomarkdown}DIVL{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}200{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This can be one or more division numbers delimeted by \^\. I not provided,the default division for the person requesting the report is used.{:/} | 
| {::nomarkdown}SCHED{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Boolean value to determine if the report is to be scheduled.  If notprovided a zero is assumed and the report will run immediately withoutgoing through the task manager.{:/} | 
| {::nomarkdown}ESTART{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}15{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the earliest date and time to start running the report task ifscheduled.  If not specified, the current date/time will be used.{:/} | 




 Generated on January 14th 2017, 7:26:36 am