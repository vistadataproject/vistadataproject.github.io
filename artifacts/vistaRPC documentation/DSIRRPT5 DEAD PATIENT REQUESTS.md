---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIRRPT5 DEAD PATIENT REQUESTS 

 property | value 
--- | --- 
 label | {::nomarkdown}DSIRRPT5 DEAD PATIENT REQUESTS{:/}
 tag | {::nomarkdown}DEAD{:/}
 routine | [DSIRRPT5](http://code.osehra.org/dox/Routine_DSIRRPT5_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This RPC will look for any ROI Plus request that was entered after the patient died.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}STDT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}7{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the start date in FileMan format.{:/} | 
| {::nomarkdown}ENDT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}7{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the end date of the report.{:/} | 
| {::nomarkdown}DIVL{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}99{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Divisions - String of selected divisions delimited by '^' or null for allif the user holds the DSIR MDIV key{:/} | 
| {::nomarkdown}SORT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}P = Patient Name, D = Request Date (P - Default){:/} | 
| {::nomarkdown}SCHED{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Schedule - Boolean for scheduled or immediate run 1 = Schedule / 0 or Null= Run Immediately{:/} | 
| {::nomarkdown}ESTART{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}14{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Earliest time to start the scheduled task (FileMan Date/Time){:/} | 




 Generated on January 13th 2017, 6:44:48 am