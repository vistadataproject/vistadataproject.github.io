---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIV POLL REPORT 

 property | value 
--- | --- 
 label | DSIV POLL REPORT
 tag | POLL
 routine | [DSIVICR1](http://code.osehra.org/dox/Routine_DSIVICR1_source.html)
 return value type | GLOBAL ARRAY
 description | Used to check the status of the background job kicked off by the DSIV EXCEPTION REPORT2 rpc, and to get the report data.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DSIVHNDL | LITERAL | 50 | true | Contains the Handle returned by the kick-off rpc call DSIV EXCEPTION REPORT2.  This is the ^XTMP global node where the report status and data reside. | 
| CNT | LITERAL | 10 | true | Contains the count (#) of records to return for each call to the rpc. | 
| MORE | LITERAL | 1 | true | Contains a flag (MORE=1) when there were more records than parameter 2 (CNT) to supress the header for the subsequent calls to get data.The first call to the rpc should NOT include the MORE=1 parameter.  Send MORE=9 to kill the report data in ^XTMP global if the user no longer wants to get it. | 




Generated on January 11th 2017, 6:34:23 am