---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIRRPT5 DEAD PATIENT REQUESTS 

 property | value 
--- | --- 
 label | DSIRRPT5 DEAD PATIENT REQUESTS
 tag | DEAD
 routine | [DSIRRPT5](http://code.osehra.org/dox/Routine_DSIRRPT5_source.html)
 return value type | GLOBAL ARRAY
 description | This RPC will look for any ROI Plus request that was entered after the patient died.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| STDT | LITERAL | 7 | true | This is the start date in FileMan format. | 
| ENDT | LITERAL | 7 | true | This is the end date of the report. | 
| DIVL | LITERAL | 99 | true | Divisions - String of selected divisions delimited by '^' or null for allif the user holds the DSIR MDIV key | 
| SORT | LITERAL | 1 | true | P = Patient Name, D = Request Date (P - Default) | 
| SCHED | LITERAL | 1 | true | Schedule - Boolean for scheduled or immediate run 1 = Schedule / 0 or Null= Run Immediately | 
| ESTART | LITERAL | 14 | true | Earliest time to start the scheduled task (FileMan Date/Time) | 




 ###### Generated on January 11th 2017, 6:39:43 am