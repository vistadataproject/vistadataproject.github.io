---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIRRPT3 RTR HOW RECEIVED RPT 

 property | value 
--- | --- 
 label | DSIRRPT3 RTR HOW RECEIVED RPT
 tag | RTR
 routine | [DSIRRPT3](http://code.osehra.org/dox/Routine_DSIRRPT3_source.html)
 return value type | GLOBAL ARRAY
 description | This proceedure schedules or runs the Received Method Summary Report

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | FRDT | LITERAL | 15 | true | This is the field tht identifies the eariest received date for the report. | 
| vs:Input_Parameter-8994_02 | TODT | LITERAL | 15 | true | This is the field tht identifies the latest received date for the report. | 
| vs:Input_Parameter-8994_02 | DIVL | LITERAL | 200 | true | This is an optional list of division numbers delimited with a ^. | 
| vs:Input_Parameter-8994_02 | SCHED | LITERAL | 1 | true | This is an optional boolean field to indicate whether of not the reportshould be scheduled. | 
| vs:Input_Parameter-8994_02 | ESTART | LITERAL | 15 | true | This is the earliest start time for a task to launch if the report isscheduled. | 