---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DVBAB HEALTH SUMMARY TEXT 

 property | value 
--- | --- 
 label | DVBAB HEALTH SUMMARY TEXT
 tag | RPT
 routine | [DVBAB1](http://code.osehra.org/dox/Routine_DVBAB1_source.html)
 return value type | GLOBAL ARRAY
 description | This rpc retrieves the report text for a report selected onthe Report tab.the report format on the roll 'n scroll version of CPRS.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DFN | LITERAL | 20 | true | Internal entry number of entry in the Patient file. | 
| REPORT ID | LITERAL | 20 | true | Identification number of the desired report. | 
| HEALTH SUMMARY TYPE | LITERAL | 20 | true | Internal entry number of entry in the HEALTH SUMMARY TYPE file.This parameter is only required for Health Summary reports. | 
| DATE RANGE | LITERAL | 5 | true | This parameter indicates the number of days from TODAYthat the report should search for information.This parameter is required for vital reports. | 
| REPORT SECTION | LITERAL | 2 | true | This parameter specifics which portion of the report should beretrieved.If REPORT SECTION equals 0 then the entire report is re-compiled and thefirst section is passed back. If the report is large then it isnecessary to divide it into sections. Currently, each section cannot be more than be more than 20,000 characters | 




 Generated on January 11th 2017, 7:15:04 am