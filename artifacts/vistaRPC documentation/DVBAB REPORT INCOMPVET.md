---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DVBAB REPORT INCOMPVET 

 property | value 
--- | --- 
 label | {::nomarkdown}DVBAB REPORT INCOMPVET{:/}
 tag | {::nomarkdown}STRT{:/}
 routine | [DVBAB51](http://code.osehra.org/dox/Routine_DVBAB51_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Generates an incompetent veteran report, in either standard or delimited format, for the specificed date range.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}BDATE{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Beginning date in a date range to use for retrieving results for the report.{:/} | 
| {::nomarkdown}EDATE{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Ending date in a date range to use for retrieving results for the report.{:/} | 
| {::nomarkdown}DVBADLMTR{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is an optional parameter, which when defined with the final end date selected in the GUI, will produce a delimited report. If this parameter is undefined, null or 0 then the standard report format will be generated.{:/} | 




 Generated on January 13th 2017, 7:15:28 am