---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DVBAB AMIS REPORT 

 property | value 
--- | --- 
 label | DVBAB AMIS REPORT
 tag | STRT
 routine | [DVBAB3](http://code.osehra.org/dox/Routine_DVBAB3_source.html)
 return value type | ARRAY
 description | Returns an AMIS report for specified search criteria.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| BDATE | LITERAL |  | true | Beginning date in a date range to use for retrieving results for the report. | 
| EDATE | LITERAL |  | true | Ending date in a date range to use for retrieving results for the report. | 
| RONUM | LITERAL |  | true | This is an optional parameter that has 2 optional pieces:      REGIONAL OFFICE^DIVISIONIf this parameter is defined, then the report logic will filter the results by the Regional Office number passed and/or Division. Regional Office should always be included in the 1st '^' delimited piece and the Division should always be included in the 2nd '^' delimited piece if values are to be passed. If the 1st '^' delimited piece is undefined, null or 0 then results for all Regional Offices (RO) will be returned. If Division is undefined, null or 0, then results for all Divisions will be returned. | 
| SBULL | LITERAL |  | true | A Y/N value which indicates whether a bulletin should be generated when the processing has completed. | 
| DUZ | LITERAL |  | true | Identifies the individual in the NEW PERSON File (#200) who should recieve the bulletin generated. | 
| DVBAPRTY | LITERAL | 4 | true | Priority of Exam code which inidicates which priorities to filter on.   AO   : Agent Orange   BDD  : Benefits Delivery at Discharge and Quick Start   IDES : Integrated Disability Evaluation System   ALL  : All Others (Original Report with all codes except those above) | 




 Generated on January 11th 2017, 7:15:04 am