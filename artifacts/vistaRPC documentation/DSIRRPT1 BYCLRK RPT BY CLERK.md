---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIRRPT1 BYCLRK RPT BY CLERK 

 property | value 
--- | --- 
 label | DSIRRPT1 BYCLRK RPT BY CLERK
 tag | BYCLRK
 routine | [DSIRRPT1](http://code.osehra.org/dox/Routine_DSIRRPT1_source.html)
 return value type | GLOBAL ARRAY
 description | Schedules areport to retrieve ROI requests for a given date range foruse in GUI reports.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | FRDT | LITERAL | 7 | true | The FileMan Date to start retrieval process. | 
| vs:Input_Parameter-8994_02 | TODT | LITERAL | 7 | true | FileMan date to end retrieval process. | 
| vs:Input_Parameter-8994_02 | STATUS | LITERAL | 7 | true | \A\  : Get only the appealed requests  (-RV,-PR)\O\  : Get only the open\C\  : \          \ closed  (-D,-G,-P)\P\  : \          \ pending\N\  : \          \other nondisclosured (-NR,-RF,-ND,-NV,-RC)\E\  : \          \ entered in error\X\  : \          \ cancelled\ALL\: Gets all statuses This parameter may be any combination of the codes delimited by the '^'or the word 'ALL'. | 
| vs:Input_Parameter-8994_02 | DIVL | LITERAL | 99 | true | This parameter is used by the routine if the person requesting thisreport holds the DSIR MDIV key.  It is a list of internal InstitutionFile entry numbers (File 4), delimited by '^'. | 
| vs:Input_Parameter-8994_02 | REQS | LIST | 99 | true | This is an array of clerk IENs.        (1-n)=IEN to file 200 | 
| vs:Input_Parameter-8994_02 | SCHED | LITERAL | 1 | true | Boolean flag that determines whether a report is scheduled or run immedieately. 0 - Immediate  1 - Schedule. | 
| vs:Input_Parameter-8994_02 | ESTART | LITERAL | 14 | true | Earliest time to start the scheduled task.  Mmust be inFileMan date/time format.  | 