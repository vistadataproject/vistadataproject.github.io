---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIRRPT2 PDH PATIENT DISC HIST 

 property | value 
--- | --- 
 label | DSIRRPT2 PDH PATIENT DISC HIST
 tag | PDH
 routine | [DSIRRPT2](http://code.osehra.org/dox/Routine_DSIRRPT2_source.html)
 return value type | GLOBAL ARRAY
 description | This routine returns the data nescessary for the patient disclosurehistory report.   Required fields for this report:   From 19620      FIELD   From 19620.1    FIELD  ---------------------   ---------------------  RequestIEN        .01   DocumentCaption   .05  DateReceived    10.06   DocumentDate      .07  Requestor         .11  Reason          10.02  RequestorType   10.04  Status          10.08  Comment           .31

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| PAT | LITERAL | 20 | true | PAT = fully qualified patient pointer   Examples:   \125325;DPT(\              \152;DSIR(19620.96,\, | 
| FRDT | LITERAL | 7 | true | FRDT is the starting date which will be reported on. FILEMAN date format - 3101225 = Dec 25,2010 | 
| TODT | LITERAL | 7 | true | TODT is the ending date which will be reported on.This is an optional field and if not provided, the current date will beused. FILEMAN date format - 3101225 = Dec 25,2010 | 
| SCHED | LITERAL | 1 | true | Schedule - Boolean for scheduled or immediate run           1 = Schedule / 0 or Null = Run Immediately | 
| ESTART | LITERAL | 15 | true | Earliet time to start the scheaduled task. | 
| PNAME | LITERAL | 150 | true | Patient name spelled out as in the PATIENT file. | 




 ###### Generated on January 11th 2017, 6:39:43 am