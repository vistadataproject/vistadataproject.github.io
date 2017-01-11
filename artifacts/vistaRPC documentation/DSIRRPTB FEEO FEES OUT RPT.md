---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIRRPTB FEEO FEES OUT RPT 

 property | value 
--- | --- 
 label | DSIRRPTB FEEO FEES OUT RPT
 tag | FEEO
 routine | [DSIRRPTB](http://code.osehra.org/dox/Routine_DSIRRPTB_source.html)
 return value type | GLOBAL ARRAY
 description | This schedules or runs the Fees Outstanding Report.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DIVL | LITERAL | 200 | true | This can be one or more division numbers delimeted by \^\. I not provided,the default division for the person requesting the report is used. | 
| SCHED | LITERAL | 1 | true | Boolean value to determine if the report is to be scheduled.  If not provided a zero is assumed and the report will run immediately without going through the task manager. | 
| ESTART | LITERAL | 15 | true | This is the earliest date and time to start running the report task if scheduled.  If not specified, the current date/time will be used.  | 
| FRDT | LITERAL | 7 | true | Defines the low end of the billing dates to include in the report.  | 
| TODT | LITERAL | 7 | true | Defines the high end of the billing dates to include in the report. | 




 Generated on January 11th 2017, 7:15:04 am