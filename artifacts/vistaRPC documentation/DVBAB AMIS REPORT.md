---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DVBAB AMIS REPORT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DVBAB AMIS REPORT{:/}
 tag | {::nomarkdown}STRT{:/}
 routine | [DVBAB3](http://code.osehra.org/dox/Routine_DVBAB3_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns an AMIS report for specified search criteria.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}BDATE{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Beginning date in a date range to use for retrieving results for the report.{:/} | 
| {::nomarkdown}EDATE{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Ending date in a date range to use for retrieving results for the report.{:/} | 
| {::nomarkdown}RONUM{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is an optional parameter that has 2 optional pieces:      REGIONAL OFFICE^DIVISIONIf this parameter is defined, then the report logic will filter the results by the Regional Office number passed and/or Division. Regional Office should always be included in the 1st '^' delimited piece and the Division should always be included in the 2nd '^' delimited piece if values are to be passed. If the 1st '^' delimited piece is undefined, null or 0 then results for all Regional Offices (RO) will be returned. If Division is undefined, null or 0, then results for all Divisions will be returned.{:/} | 
| {::nomarkdown}SBULL{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}A Y/N value which indicates whether a bulletin should be generated when the processing has completed.{:/} | 
| {::nomarkdown}DUZ{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Identifies the individual in the NEW PERSON File (#200) who should recieve the bulletin generated.{:/} | 
| {::nomarkdown}DVBAPRTY{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}4{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Priority of Exam code which inidicates which priorities to filter on.   AO   : Agent Orange   BDD  : Benefits Delivery at Discharge and Quick Start   IDES : Integrated Disability Evaluation System   ALL  : All Others (Original Report with all codes except those above){:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:23:03 am</p>{:/}