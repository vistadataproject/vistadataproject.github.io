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

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DCTYPES | LIST |  | true | List of IENs that are the \Discharge Types\that if found, will be included in the report | 
| BDATE | LITERAL |  | true | Beginning date in a date range to use for retrieving results for the report. | 
| EDATE | LITERAL |  | true | Ending date in a date range to use for retrieving results for the report. | 
| RONUM | LITERAL |  | true | Regional Office number should be passed if youwish to consider only one specific Regional Officein the report. | 
| REP | LITERAL | 1 | true | Pass 'A' for an A&A ReportPass 'P' for a Pension Report | 
| DVBADLMTR | LITERAL |  | true | This is an optional parameter, which when defined with the final end date selected in the GUI, will produce a delimited report. If this parameter is undefined, null or 0 then the standard report format will be generated. | 




 ###### Generated on January 11th 2017, 6:39:43 am