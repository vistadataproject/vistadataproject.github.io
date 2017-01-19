---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIRRPT1 RTYP REQUESTS BY TYPE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIRRPT1 RTYP REQUESTS BY TYPE{:/}
 tag | {::nomarkdown}RTYP{:/}
 routine | [DSIRRPT1](http://code.osehra.org/dox/Routine_DSIRRPT1_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Schedules areport to retrieve ROI requests for a given date range foruse in GUI reports.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}FRDATE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}7{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Date to begin pulling data in FileMan format with no time.{:/} | 
| {::nomarkdown}TODATE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}7{:/} | {::nomarkdown}true{:/} | {::nomarkdown}FileMan date to end retrieval process.{:/} | 
| {::nomarkdown}STATUS{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}7{:/} | {::nomarkdown}true{:/} | {::nomarkdown}\A\  : Get only the appealed requests  (-RV,-PR)\O\  : Get only the open\C\  : \          \ closed  (-D,-G,-P)\P\  : \          \ pending\N\  : \          \other nondisclosured (-NR,-RF,-ND,-NV,-RC)\E\  : \          \ entered in error\X\  : \          \ cancelled\ALL\: Gets all statuses This parameter may be any combination of the codes delimited by the '^'or the word 'ALL'.{:/} | 
| {::nomarkdown}DIVL{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}99{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This parameter is used by the routine if the person requesting thisreport holds the DSIR MDIV key.  It is a list of internal InstitutionFile entry numbers (File 4), delimited by '^'.{:/} | 
| {::nomarkdown}TYPS{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}99{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is an array of internal numbers to file 19620.61 DSIR TYPE OFREQUEST.  It is used for reporting criteria if no types are specifiedthen all types will be included in the report.{:/} | 
| {::nomarkdown}SCHED{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Boolean flag that determines whether a report is scheduled or runimmedieately. 0 - Immediate  1 - Schedule.{:/} | 
| {::nomarkdown}ESTART{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}14{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Earliest time to start the scheduled task.  Mmust be inFileMan date/timeformat.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:04:54 am</p>{:/}