---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DVBAB REPORT ADMINQ 

 property | value 
--- | --- 
 label | DVBAB REPORT ADMINQ
 tag | ENBROKE2
 routine | [DVBAADRP](http://code.osehra.org/dox/Routine_DVBAADRP_source.html)
 return value type | GLOBAL ARRAY
 description | Generates an admission inquiry report, in either standard or delimited format, for the specified parameters.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| BDATE | LITERAL |  | true | Beginning date in a date range to use for retrieving results for the report. | 
| EDATE | LITERAL |  | true | Ending date in a date range to use for retrieving results for the report. | 
| ROYESNO | LITERAL |  |  | 'Y' indicates to screen by RONUM.Note: In the M code, the variable is referenced as RO vs ROYESNO. | 
| RONUM | LITERAL |  |  | Screens RO number on report. Regional Office Station # when ROYESNO is 'Y', otherwise 0. | 
| DVBADLMTR | LITERAL |  | true | This is an optional parameter, which when defined with the final end date selected in the GUI, will produce a delimited report. If this parameter is undefined, null or 0 then the standard report format will be generated. | 




Generated on January 11th 2017, 6:34:23 am