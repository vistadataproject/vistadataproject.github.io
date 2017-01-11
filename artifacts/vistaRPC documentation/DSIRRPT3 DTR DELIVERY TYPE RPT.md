---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIRRPT3 DTR DELIVERY TYPE RPT 

 property | value 
--- | --- 
 label | DSIRRPT3 DTR DELIVERY TYPE RPT
 tag | DTR
 routine | [DSIRRPT3](http://code.osehra.org/dox/Routine_DSIRRPT3_source.html)
 return value type | GLOBAL ARRAY
 description | This proceedure schedules or runs the Delivery Type Summary Report,

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| FRDT | LITERAL | 15 | true | This is the field tht identifies the eariest received date for the report. | 
| TODT | LITERAL | 15 | true | This is the field tht identifies the latest received date for the report. | 
| DIVL | LITERAL | 200 | true | This is an optional list of division numbers delimited with a ^. | 
| SCHED | LITERAL | 1 | true | This is an optional boolean field to indicate whether of not the report should be scheduled.  | 
| ESTART | LITERAL | 15 | true | This is the earliest start time for a task to launch if the report isscheduled.  | 




 ###### Generated on January 11th 2017, 6:39:43 am