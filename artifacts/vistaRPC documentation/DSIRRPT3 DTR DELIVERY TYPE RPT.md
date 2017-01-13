---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIRRPT3 DTR DELIVERY TYPE RPT 

 property | value 
--- | --- 
 label | {::nomarkdown}DSIRRPT3 DTR DELIVERY TYPE RPT{:/}
 tag | {::nomarkdown}DTR{:/}
 routine | [DSIRRPT3](http://code.osehra.org/dox/Routine_DSIRRPT3_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This proceedure schedules or runs the Delivery Type Summary Report,{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}FRDT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}15{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the field tht identifies the eariest received date for the report.{:/} | 
| {::nomarkdown}TODT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}15{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the field tht identifies the latest received date for the report.{:/} | 
| {::nomarkdown}DIVL{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}200{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is an optional list of division numbers delimited with a ^.{:/} | 
| {::nomarkdown}SCHED{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is an optional boolean field to indicate whether of not the report should be scheduled. {:/} | 
| {::nomarkdown}ESTART{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}15{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the earliest start time for a task to launch if the report isscheduled. {:/} | 




 Generated on January 13th 2017, 6:24:32 am