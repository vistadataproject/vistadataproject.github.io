---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DVBAB REPORT INCOMPVET 

 property | value 
--- | --- 
 label | DVBAB REPORT INCOMPVET
 tag | STRT
 routine | [DVBAB51](http://code.osehra.org/dox/Routine_DVBAB51_source.html)
 return value type | GLOBAL ARRAY
 description | Generates an incompetent veteran report, in either standard or delimited format, for the specificed date range.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | BDATE | LITERAL |  | true | Beginning date in a date range to use for retrieving results for the report. | 
| vs:Input_Parameter-8994_02 | EDATE | LITERAL |  | true | Ending date in a date range to use for retrieving results for the report. | 
| vs:Input_Parameter-8994_02 | DVBADLMTR | LITERAL |  | true | This is an optional parameter, which when defined with the final end date selected in the GUI, will produce a delimited report. If this parameter is undefined, null or 0 then the standard report format will be generated. | 