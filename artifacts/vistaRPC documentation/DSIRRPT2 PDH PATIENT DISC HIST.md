---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIRRPT2 PDH PATIENT DISC HIST 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIRRPT2 PDH PATIENT DISC HIST{:/}
 tag | {::nomarkdown}PDH{:/}
 routine | [DSIRRPT2](http://code.osehra.org/dox/Routine_DSIRRPT2_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This routine returns the data nescessary for the patient disclosurehistory report.   Required fields for this report:   From 19620      FIELD   From 19620.1    FIELD  ---------------------   ---------------------  RequestIEN        .01   DocumentCaption   .05  DateReceived    10.06   DocumentDate      .07  Requestor         .11  Reason          10.02  RequestorType   10.04  Status          10.08  Comment           .31{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PAT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}PAT = fully qualified patient pointer   Examples:   \125325;DPT(\              \152;DSIR(19620.96,\,{:/} | 
| {::nomarkdown}FRDT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}7{:/} | {::nomarkdown}true{:/} | {::nomarkdown}FRDT is the starting date which will be reported on. FILEMAN date format - 3101225 = Dec 25,2010{:/} | 
| {::nomarkdown}TODT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}7{:/} | {::nomarkdown}true{:/} | {::nomarkdown}TODT is the ending date which will be reported on.This is an optional field and if not provided, the current date will beused. FILEMAN date format - 3101225 = Dec 25,2010{:/} | 
| {::nomarkdown}SCHED{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Schedule - Boolean for scheduled or immediate run           1 = Schedule / 0 or Null = Run Immediately{:/} | 
| {::nomarkdown}ESTART{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}15{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Earliet time to start the scheaduled task.{:/} | 
| {::nomarkdown}PNAME{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}150{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Patient name spelled out as in the PATIENT file.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:23:03 am</p>{:/}