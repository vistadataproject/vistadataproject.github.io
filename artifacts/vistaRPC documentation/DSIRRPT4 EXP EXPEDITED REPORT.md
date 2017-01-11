---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIRRPT4 EXP EXPEDITED REPORT 

 property | value 
--- | --- 
 label | DSIRRPT4 EXP EXPEDITED REPORT
 tag | EXP
 routine | [DSIRRPT4](http://code.osehra.org/dox/Routine_DSIRRPT4_source.html)
 return value type | GLOBAL ARRAY
 description | This procedure schedules or runs the Expedited Processing Report.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| FRDT | LITERAL | 15 | true | This is the field tht identifies the eariest received date for the report. | 
| TODT | LITERAL | 15 | true | This is the field tht identifies the latest received date for the report. | 
| DIV | LITERAL | 12 | true | This is an optional division number.  If not provided, DUZ(2) is used. | 
| SCHED | LITERAL | 1 | true | This is an optional boolean field to indicate whether of not the report should be scheduled. | 
| ESTART | LITERAL | 15 | true | This is the earliest start time for a task to launch if the report isscheduled. | 




Generated on January 11th 2017, 6:34:23 am