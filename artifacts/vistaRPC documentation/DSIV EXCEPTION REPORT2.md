---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIV EXCEPTION REPORT2 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIV EXCEPTION REPORT2{:/}
 tag | {::nomarkdown}RPTP{:/}
 routine | [DSIVICR1](http://code.osehra.org/dox/Routine_DSIVICR1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Kicks off a background job to run the ICB Exception report (users who did not enter buffer entries in a timely manner).{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}SDT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Contains the start date for the report.{:/} | 
| {::nomarkdown}EDT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Contains the end date of the report.{:/} | 
| {::nomarkdown}DSIVHNDL{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}50{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Contains the handle for the background job.  This is the ^XTMP global node where the report status and data will reside.{:/} | 
| {::nomarkdown}DSIVLOCS{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Contains a list of clinics to return for the report.  The exception report will still gather appointments for all locations (except inactive, and \ZZ\ locations), but will only return the selected ones.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:21:34 am</p>{:/}