---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIRRPT1 RTYP REQUESTS BY TYPE 

 property | value 
--- | --- 
 label | DSIRRPT1 RTYP REQUESTS BY TYPE
 tag | RTYP
 routine | [DSIRRPT1](http://code.osehra.org/dox/Routine_DSIRRPT1_source.html)
 return value type | GLOBAL ARRAY
 description | Schedules areport to retrieve ROI requests for a given date range foruse in GUI reports.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| FRDATE | LITERAL | 7 | true | Date to begin pulling data in FileMan format with no time. | 
| TODATE | LITERAL | 7 | true | FileMan date to end retrieval process. | 
| STATUS | LITERAL | 7 | true | \A\  : Get only the appealed requests  (-RV,-PR)\O\  : Get only the open\C\  : \          \ closed  (-D,-G,-P)\P\  : \          \ pending\N\  : \          \other nondisclosured (-NR,-RF,-ND,-NV,-RC)\E\  : \          \ entered in error\X\  : \          \ cancelled\ALL\: Gets all statuses This parameter may be any combination of the codes delimited by the '^'or the word 'ALL'. | 
| DIVL | LITERAL | 99 | true | This parameter is used by the routine if the person requesting thisreport holds the DSIR MDIV key.  It is a list of internal InstitutionFile entry numbers (File 4), delimited by '^'. | 
| TYPS | LIST | 99 | true | This is an array of internal numbers to file 19620.61 DSIR TYPE OFREQUEST.  It is used for reporting criteria if no types are specifiedthen all types will be included in the report. | 
| SCHED | LITERAL | 1 | true | Boolean flag that determines whether a report is scheduled or runimmedieately. 0 - Immediate  1 - Schedule. | 
| ESTART | LITERAL | 14 | true | Earliest time to start the scheduled task.  Mmust be inFileMan date/timeformat. | 




 ###### Generated on January 11th 2017, 6:39:43 am