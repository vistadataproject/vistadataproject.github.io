---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DVBAB REPORT READMIT 

 property | value 
--- | --- 
 label | DVBAB REPORT READMIT
 tag | STRT
 routine | [DVBAB56](http://code.osehra.org/dox/Routine_DVBAB56_source.html)
 return value type | GLOBAL ARRAY
 description | Generates a re-admission report, in either standard or delimited format, for the specified date range.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| BDATE | LITERAL |  | true | Beginning date in a date range to use for retrieving results for the report. | 
| EDATE | LITERAL |  | true | Ending date in a date range to use for retrieving results for the report. | 
| DVBAH | LITERAL |  | true | Defines the scope of the report:  'H' indicates HOSPITAL  'D' indicates DOM | 
| DVBADLMTR | LITERAL |  | true | This is an optional parameter, which when defined with the final end date selected in the GUI, will produce a delimited report. If this parameter is undefined, null or 0 then the standard report format will be generated. | 