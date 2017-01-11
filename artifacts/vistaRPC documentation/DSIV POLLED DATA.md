---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIV POLLED DATA 

 property | value 
--- | --- 
 label | DSIV POLLED DATA
 tag | POLL
 routine | [DSIVICR](http://code.osehra.org/dox/Routine_DSIVICR_source.html)
 return value type | GLOBAL ARRAY
 description | Used to check the status of the background job kicked off by the DSIV REPORT QUEUE rpc, and to get the report results.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DSIVHNDL | LITERAL | 50 | true | Contains the handle returned by the kick-off rpc called DSIV REPORT QUEUE.  This is the ^XTMP global node where the data resides. | 
| NUMS | LITERAL | 30 | true | Contains the number of records to return for each call to the rpc.  If there are no more records, then the data will be followed by \$END\. | 
| MORE | LITERAL | 1 | true | MORE=0 for the first call, MORE=1 for subsequent calls when there are more record that NUMS (param 2) to return and MORE=9 to kill the ^XTMP global where the report data is stored for retrieval.  MORE=9 would be used if the user wants to cancel getting all the data. | 




Generated on January 11th 2017, 6:34:23 am