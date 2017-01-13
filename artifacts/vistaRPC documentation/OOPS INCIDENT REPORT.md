---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; OOPS INCIDENT REPORT 

 property | value 
--- | --- 
 label | {::nomarkdown}OOPS INCIDENT REPORT{:/}
 tag | {::nomarkdown}ENT{:/}
 routine | [OOPSGUIT](http://code.osehra.org/dox/Routine_OOPSGUIT_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This broker call returns the data for creating the Type of Incident reports.This report provides information on different Types of incidents. {:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}RPTTYP{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}256{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This will determine which report will be run.  Report types are Type of Incident,Occupation Code, Characterization of Injury, Service, Body Parts, Day of Week,and Time of Day.{:/} | 
| {::nomarkdown}CSTAT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}10{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This parameter determines which cases to include: Open, Closed, or Both Openand Closed.{:/} | 
| {::nomarkdown}STDT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This parameter contains the start date of the report.  Those cases whose Dateof Occurrence is greater than or equal to the Start date will be included.{:/} | 
| {::nomarkdown}ENDDT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This parameter contains the end date of the report.  Those cases whose Dateof Occurrence is less than or equal to the End date will be included.{:/} | 
| {::nomarkdown}LTNTT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This parameter will determine whether or not Lost Time claims should be included on the report.{:/} | 
| {::nomarkdown}STAT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}256{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This parameter will determine whether to run the report for all stations ora single station.{:/} | 




 Generated on January 13th 2017, 6:55:29 am