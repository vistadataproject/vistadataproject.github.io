---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DVBAB REPORT ADMINQ 

 property | value 
--- | --- 
 label | {::nomarkdown}DVBAB REPORT ADMINQ{:/}
 tag | {::nomarkdown}ENBROKE2{:/}
 routine | [DVBAADRP](http://code.osehra.org/dox/Routine_DVBAADRP_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Generates an admission inquiry report, in either standard or delimited format, for the specified parameters.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}BDATE{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Beginning date in a date range to use for retrieving results for the report.{:/} | 
| {::nomarkdown}EDATE{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Ending date in a date range to use for retrieving results for the report.{:/} | 
| {::nomarkdown}ROYESNO{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}'Y' indicates to screen by RONUM.Note: In the M code, the variable is referenced as RO vs ROYESNO.{:/} | 
| {::nomarkdown}RONUM{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Screens RO number on report. Regional Office Station # when ROYESNO is 'Y', otherwise 0.{:/} | 
| {::nomarkdown}DVBADLMTR{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is an optional parameter, which when defined with the final end date selected in the GUI, will produce a delimited report. If this parameter is undefined, null or 0 then the standard report format will be generated.{:/} | 




 Generated on January 13th 2017, 6:15:57 am