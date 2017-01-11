---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIV EXCEPTION REPORT2 

 property | value 
--- | --- 
 label | DSIV EXCEPTION REPORT2
 tag | RPTP
 routine | [DSIVICR1](http://code.osehra.org/dox/Routine_DSIVICR1_source.html)
 return value type | SINGLE VALUE
 description | Kicks off a background job to run the ICB Exception report (users who did not enter buffer entries in a timely manner).

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| SDT | LITERAL | 30 | true | Contains the start date for the report. | 
| EDT | LITERAL | 30 | true | Contains the end date of the report. | 
| DSIVHNDL | LITERAL | 50 | true | Contains the handle for the background job.  This is the ^XTMP global node where the report status and data will reside. | 
| DSIVLOCS | LIST | 30 | true | Contains a list of clinics to return for the report.  The exception report will still gather appointments for all locations (except inactive, and \ZZ\ locations), but will only return the selected ones. | 