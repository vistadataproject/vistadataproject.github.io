---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIRRPTB FEER FEES REC RPT 

 property | value 
--- | --- 
 label | DSIRRPTB FEER FEES REC RPT
 tag | FEER
 routine | [DSIRRPTB](http://code.osehra.org/dox/Routine_DSIRRPTB_source.html)
 return value type | GLOBAL ARRAY
 description | This schedules or runs the Fees Received Report.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| FRDT | LITERAL | 15 | true | This is the earliest date for this report based on the billing date. | 
| TODT | LITERAL | 15 | true | This is the latest date for this report based on the billing date.  If not specified, the current date is used. | 
| DIVL | LITERAL | 200 | true | This can be one or more division numbers delimeted by \^\. I not provided,the default division for the person requesting the report is used. | 
| SCHED | LITERAL | 1 | true | Boolean value to determine if the report is to be scheduled.  If notprovided a zero is assumed and the report will run immediately withoutgoing through the task manager. | 
| ESTART | LITERAL | 15 | true | This is the earliest date and time to start running the report task ifscheduled.  If not specified, the current date/time will be used. | 




 ###### Generated on January 11th 2017, 6:39:43 am