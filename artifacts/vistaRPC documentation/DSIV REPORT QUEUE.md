---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIV REPORT QUEUE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIV REPORT QUEUE{:/}
 tag | {::nomarkdown}PRPT{:/}
 routine | [DSIVICR](http://code.osehra.org/dox/Routine_DSIVICR_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Queues up the report data from file 19625 for billing reports.  {:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DSIVHNDL{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}50{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Contains the handle to \find\ the report in the ^XTMP global after it has been queued and run by Taskman.{:/} | 
| {::nomarkdown}DSIVRPT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Contains the ICB report the user has requested.{:/} | 
| {::nomarkdown}DATA{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}250{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Contains the parameters to search for data:   DATA(\SDT\)=fileman start dt   DATA(\EDT\)=fileman end dt   DATA(\INDEX\)=index to use   \C\ or \D\ or \E\ or \F\ or \H\   DATA(\FIELDS\)=fields to return  \.01;.02;.03;.03I\ Note that \NUMS\ and \MORE\ are not used.  \NUMS\ will be used when polling and retrieving results. FIELDS are DD fields separated by semi-colons only (no colon \ranged\  fields), FIELDS may be suffixed with \I\ for internal data vs default of  external data format.  Data is returned in FIELDS order.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:46:15 am</p>{:/}