---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DVBAB REPORT SPECIAL 

 property | value 
--- | --- 
 label | DVBAB REPORT SPECIAL
 tag | SPECRPT
 routine | [DVBASPD2](http://code.osehra.org/dox/Routine_DVBASPD2_source.html)
 return value type | GLOBAL ARRAY
 description | Generates a Special Report for Pension and A&A, in either standard or delimited format, for the specified parameters.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | DCTYPES | LIST |  | true | List of IENs that are the \Discharge Types\that if found, will be included in the report | 
| vs:Input_Parameter-8994_02 | BDATE | LITERAL |  | true | Beginning date in a date range to use for retrieving results for the report. | 
| vs:Input_Parameter-8994_02 | EDATE | LITERAL |  | true | Ending date in a date range to use for retrieving results for the report. | 
| vs:Input_Parameter-8994_02 | RONUM | LITERAL |  | true | Regional Office number should be passed if youwish to consider only one specific Regional Officein the report. | 
| vs:Input_Parameter-8994_02 | REP | LITERAL | 1 | true | Pass 'A' for an A&A ReportPass 'P' for a Pension Report | 
| vs:Input_Parameter-8994_02 | DVBADLMTR | LITERAL |  | true | This is an optional parameter, which when defined with the final end date selected in the GUI, will produce a delimited report. If this parameter is undefined, null or 0 then the standard report format will be generated. | 