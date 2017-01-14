---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; DSIV PRODUCTIVITY REPORT 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}DSIV PRODUCTIVITY REPORT{:/}
 tag | {::nomarkdown}RPT{:/}
 routine | [DSIVICR3](http://code.osehra.org/dox/Routine_DSIVICR3_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns productivity report data which in a combination of the ICB Entered By User and Exception reports.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DSIVSDT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Start Date of the report{:/} | 
| {::nomarkdown}DSIVEDT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}End date of the report.{:/} | 
| {::nomarkdown}DSIVRPT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}2{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Report type: C=Clinic, U=User, CU=Clinic and User, UC=User and Clinic{:/} | 
| {::nomarkdown}DSIVHNDL{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Handle for the background job and XTMP global that contains the report status and data.{:/} | 
| {::nomarkdown}DSIVLOCS{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Contains an optional list of locations to include or exclude from the report.{:/} | 




 Generated on January 14th 2017, 7:26:36 am