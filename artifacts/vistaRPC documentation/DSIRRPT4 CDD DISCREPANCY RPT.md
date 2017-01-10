---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIRRPT4 CDD DISCREPANCY RPT 

 property | value 
--- | --- 
 label | DSIRRPT4 CDD DISCREPANCY RPT
 tag | CDD
 routine | [DSIRRPT4](http://code.osehra.org/dox/Routine_DSIRRPT4_source.html)
 return value type | GLOBAL ARRAY
 description | This RPC returns data from the DSIR STATUS HISTORY file to review whichrequest are being entered as closed on one day yet the status date is aprevious date.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | FRDT | LITERAL | 7 | true | FileMan format start date where report will begin looking at stauses. Based on status date. | 
| vs:Input_Parameter-8994_02 | TODT | LITERAL | 7 | true | Last status date to look at for report. | 
| vs:Input_Parameter-8994_02 | CLRK | LIST | 99 | true | Array where each element is equal to the DUZ of selected clerks.Optional - no entries passed will return all clerks for time period. | 
| vs:Input_Parameter-8994_02 | SCHED | LITERAL | 1 | true | Boolean flag that determines whether a report is scheduled or runimmedieately. 0 - Immediate  1 - Schedule. | 
| vs:Input_Parameter-8994_02 | ESTART | LITERAL | 15 | true | Earliest time to start the scheduled task.  Mmust be inFileMan date/timeformat. | 