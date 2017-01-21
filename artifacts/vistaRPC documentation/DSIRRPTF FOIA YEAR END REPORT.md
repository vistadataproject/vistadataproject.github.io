---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIRRPTF FOIA YEAR END REPORT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIRRPTF FOIA YEAR END REPORT{:/}
 tag | {::nomarkdown}FOIA{:/}
 routine | [DSIRRPTF](http://code.osehra.org/dox/Routine_DSIRRPTF_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This RPC will collect the data for the year end FOIA report for VA Form0712{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}FRDT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}7{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The FileMan Format date to start the report.  Typically this will beOctober 1st of the previous year.{:/} | 
| {::nomarkdown}TODT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}7{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the end date for the report period.  Typically this will beSeptember 30th of the current year.{:/} | 
| {::nomarkdown}DIV{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the list of internal division for the current user or another division that the current user has access to.{:/} | 
| {::nomarkdown}QUICK{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}0 - Calculate the report and save the results if report for a fiscal year1 - Return the stored results of the report for a fiscal year2 - Return the combined stored results and user add ins for a fiscal year{:/} | 
| {::nomarkdown}SCHED{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is an optional boolean field to indicate whether of not the reportshould be scheduled.{:/} | 
| {::nomarkdown}ESTART{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}15{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the earliest start time for a task to launch if the report isscheduled.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 4:20:10 am</p>{:/}