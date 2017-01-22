---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DVBAB REPORT ADMISSIONS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DVBAB REPORT ADMISSIONS{:/}
 tag | {::nomarkdown}STRT{:/}
 routine | [DVBAB54](http://code.osehra.org/dox/Routine_DVBAB54_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Generates an admission report, in either standard or delimited format,for the specified date range.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}BDATE{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Beginning date in a date range to use for retrieving results for the report.{:/} | 
| {::nomarkdown}EDATE{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Ending date in a date range to use for retrieving results for the report.{:/} | 
| {::nomarkdown}DVBADLMTR{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is an optional parameter, which when defined with the final end date selected in the GUI, will produce a delimited report. If this parameter is undefined, null or 0 then the standard report format will be generated.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:30:11 am</p>{:/}