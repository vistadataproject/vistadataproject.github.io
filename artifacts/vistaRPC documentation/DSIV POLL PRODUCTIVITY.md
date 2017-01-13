---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIV POLL PRODUCTIVITY 

 property | value 
--- | --- 
 label | {::nomarkdown}DSIV POLL PRODUCTIVITY{:/}
 tag | {::nomarkdown}POLL{:/}
 routine | [DSIVICR3](http://code.osehra.org/dox/Routine_DSIVICR3_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Used to check the status of the background job kicked off by the DSIV PRODUCTIVITY REPORT rpc and to return results from that report.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DSIVHNDL{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}50{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Contains the Handle returned by the kick-off rpc (or sent by the GUI) to uniquely identify a report instance running in the background.{:/} | 
| {::nomarkdown}CNT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}10{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The number of records to return for each call of the rpc.  This is used to avoid broker timeouts for reports with a lot of data.{:/} | 
| {::nomarkdown}MORE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}MORE=1 when subsequent calls are made to the rpc to return the next \CNT\ (count) of rows of report data.  The GUI may send MORE=9 to terminate the report and have the M code kill the ^XTMP global as it is no longer needed.{:/} | 




 Generated on January 13th 2017, 7:11:27 am