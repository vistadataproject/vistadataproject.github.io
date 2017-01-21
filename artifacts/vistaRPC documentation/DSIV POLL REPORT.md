---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIV POLL REPORT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIV POLL REPORT{:/}
 tag | {::nomarkdown}POLL{:/}
 routine | [DSIVICR1](http://code.osehra.org/dox/Routine_DSIVICR1_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Used to check the status of the background job kicked off by the DSIV EXCEPTION REPORT2 rpc, and to get the report data.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DSIVHNDL{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}50{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Contains the Handle returned by the kick-off rpc call DSIV EXCEPTION REPORT2.  This is the ^XTMP global node where the report status and data reside.{:/} | 
| {::nomarkdown}CNT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}10{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Contains the count (#) of records to return for each call to the rpc.{:/} | 
| {::nomarkdown}MORE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Contains a flag (MORE=1) when there were more records than parameter 2 (CNT) to supress the header for the subsequent calls to get data.The first call to the rpc should NOT include the MORE=1 parameter.  Send MORE=9 to kill the report data in ^XTMP global if the user no longer wants to get it.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 7:57:53 am</p>{:/}