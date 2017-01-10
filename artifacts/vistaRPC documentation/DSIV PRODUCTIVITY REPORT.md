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

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | DSIVSDT | LITERAL | 20 | true | Start Date of the report | 
| vs:Input_Parameter-8994_02 | DSIVEDT | LITERAL | 20 | true | End date of the report. | 
| vs:Input_Parameter-8994_02 | DSIVRPT | LITERAL | 2 | true | Report type: C=Clinic, U=User, CU=Clinic and User, UC=User and Clinic | 
| vs:Input_Parameter-8994_02 | DSIVHNDL | LITERAL | 30 | true | Handle for the background job and XTMP global that contains the report status and data. | 
| vs:Input_Parameter-8994_02 | DSIVLOCS | LIST | 30 | true | Contains an optional list of locations to include or exclude from the report. | 