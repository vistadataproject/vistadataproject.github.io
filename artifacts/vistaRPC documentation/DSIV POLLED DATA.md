---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIV POLLED DATA 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIV POLLED DATA{:/}
 tag | {::nomarkdown}POLL{:/}
 routine | [DSIVICR](http://code.osehra.org/dox/Routine_DSIVICR_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Used to check the status of the background job kicked off by the DSIV REPORT QUEUE rpc, and to get the report results.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DSIVHNDL{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}50{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Contains the handle returned by the kick-off rpc called DSIV REPORT QUEUE.  This is the ^XTMP global node where the data resides.{:/} | 
| {::nomarkdown}NUMS{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Contains the number of records to return for each call to the rpc.  If there are no more records, then the data will be followed by \$END\.{:/} | 
| {::nomarkdown}MORE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}MORE=0 for the first call, MORE=1 for subsequent calls when there are more record that NUMS (param 2) to return and MORE=9 to kill the ^XTMP global where the report data is stored for retrieval.  MORE=9 would be used if the user wants to cancel getting all the data.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:23:03 am</p>{:/}