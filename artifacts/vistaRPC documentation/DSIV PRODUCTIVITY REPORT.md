---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIV PRODUCTIVITY REPORT 

 property | value 
--- | --- 
 label | DSIV PRODUCTIVITY REPORT
 tag | RPT
 routine | [DSIVICR3](http://code.osehra.org/dox/Routine_DSIVICR3_source.html)
 return value type | SINGLE VALUE
 description | Returns productivity report data which in a combination of the ICB Entered By User and Exception reports.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DSIVSDT | LITERAL | 20 | true | Start Date of the report | 
| DSIVEDT | LITERAL | 20 | true | End date of the report. | 
| DSIVRPT | LITERAL | 2 | true | Report type: C=Clinic, U=User, CU=Clinic and User, UC=User and Clinic | 
| DSIVHNDL | LITERAL | 30 | true | Handle for the background job and XTMP global that contains the report status and data. | 
| DSIVLOCS | LIST | 30 | true | Contains an optional list of locations to include or exclude from the report. | 




 Generated on January 11th 2017, 7:15:04 am