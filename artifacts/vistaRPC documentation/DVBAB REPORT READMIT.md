---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; DVBAB REPORT READMIT 


 ## VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DVBAB REPORT READMIT{:/}
 tag | {::nomarkdown}STRT{:/}
 routine | [DVBAB56](http://code.osehra.org/dox/Routine_DVBAB56_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Generates a re-admission report, in either standard or delimited format, for the specified date range.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}BDATE{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Beginning date in a date range to use for retrieving results for the report.{:/} | 
| {::nomarkdown}EDATE{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Ending date in a date range to use for retrieving results for the report.{:/} | 
| {::nomarkdown}DVBAH{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Defines the scope of the report:  'H' indicates HOSPITAL  'D' indicates DOM{:/} | 
| {::nomarkdown}DVBADLMTR{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is an optional parameter, which when defined with the final end date selected in the GUI, will produce a delimited report. If this parameter is undefined, null or 0 then the standard report format will be generated.{:/} | {::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:36:25 am</p>{:/}