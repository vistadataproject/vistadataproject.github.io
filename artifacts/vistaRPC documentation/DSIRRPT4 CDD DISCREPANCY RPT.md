---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIRRPT4 CDD DISCREPANCY RPT 

 property | value 
--- | --- 
 label | {::nomarkdown}DSIRRPT4 CDD DISCREPANCY RPT{:/}
 tag | {::nomarkdown}CDD{:/}
 routine | [DSIRRPT4](http://code.osehra.org/dox/Routine_DSIRRPT4_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This RPC returns data from the DSIR STATUS HISTORY file to review whichrequest are being entered as closed on one day yet the status date is aprevious date.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}FRDT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}7{:/} | {::nomarkdown}true{:/} | {::nomarkdown}FileMan format start date where report will begin looking at stauses. Based on status date.{:/} | 
| {::nomarkdown}TODT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}7{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Last status date to look at for report.{:/} | 
| {::nomarkdown}CLRK{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}99{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Array where each element is equal to the DUZ of selected clerks.Optional - no entries passed will return all clerks for time period.{:/} | 
| {::nomarkdown}SCHED{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Boolean flag that determines whether a report is scheduled or runimmedieately. 0 - Immediate  1 - Schedule.{:/} | 
| {::nomarkdown}ESTART{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}15{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Earliest time to start the scheduled task.  Mmust be inFileMan date/timeformat.{:/} | 




 Generated on January 13th 2017, 6:55:29 am