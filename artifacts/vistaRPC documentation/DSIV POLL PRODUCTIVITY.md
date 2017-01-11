---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIV POLL PRODUCTIVITY 

 property | value 
--- | --- 
 label | DSIV POLL PRODUCTIVITY
 tag | POLL
 routine | [DSIVICR3](http://code.osehra.org/dox/Routine_DSIVICR3_source.html)
 return value type | GLOBAL ARRAY
 description | Used to check the status of the background job kicked off by the DSIV PRODUCTIVITY REPORT rpc and to return results from that report.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DSIVHNDL | LITERAL | 50 | true | Contains the Handle returned by the kick-off rpc (or sent by the GUI) to uniquely identify a report instance running in the background. | 
| CNT | LITERAL | 10 | true | The number of records to return for each call of the rpc.  This is used to avoid broker timeouts for reports with a lot of data. | 
| MORE | LITERAL | 1 | true | MORE=1 when subsequent calls are made to the rpc to return the next \CNT\ (count) of rows of report data.  The GUI may send MORE=9 to terminate the report and have the M code kill the ^XTMP global as it is no longer needed. | 




Generated on January 11th 2017, 6:34:23 am