---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIV EXCEPTION REPORT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIV EXCEPTION REPORT{:/}
 tag | {::nomarkdown}RRPT{:/}
 routine | [DSIVICR2](http://code.osehra.org/dox/Routine_DSIVICR2_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Retrieves ICB Exception data from 19625.1.  A nightly job queued from option DSIV NIGHTLY REPORT processes the report - this rpc now just returns the data.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}SDT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Contains the start date for the report.  This is the report date in file 19625.1.  Since reports are run each night, it is the same as the appointment date.{:/} | 
| {::nomarkdown}EDT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Contains the end date for the report.  Defaults to current date if not sent.{:/} | 
| {::nomarkdown}MORE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}3{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Contains a flag to denote recursive calls to get the Exception Report data.  MORE=0 is the starting condition (start at the start date in parameter 1), MORE=1 is to continue getting the records until the value ~END~ is received.  The number of records returned for each call is based on the DSIV MAX NUM ENTRIES parameter.  The MORE parameter and recursive calling to the rpc prevents network timeouts when a lot of data is being returned (e.g. one month of Exception data).{:/} | 
| {::nomarkdown}LOCS{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}50{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Contains an array of clinics to include or exclude from the report.  The array is in the format: LOCS(1)=\INCLUDE\   (or \EXCLUDE\ to exclude the clinics) LOCS(n)=228  (clinic IEN from file 44){:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:04:53 am</p>{:/}