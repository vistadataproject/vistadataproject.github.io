---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; OOPS INCIDENT REPORT 

 property | value 
--- | --- 
 label | OOPS INCIDENT REPORT
 tag | ENT
 routine | [OOPSGUIT](http://code.osehra.org/dox/Routine_OOPSGUIT_source.html)
 return value type | ARRAY
 description | This broker call returns the data for creating the Type of Incident reports.This report provides information on different Types of incidents. 

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| RPTTYP | LITERAL | 256 | true | This will determine which report will be run.  Report types are Type of Incident,Occupation Code, Characterization of Injury, Service, Body Parts, Day of Week,and Time of Day. | 
| CSTAT | LITERAL | 10 | true | This parameter determines which cases to include: Open, Closed, or Both Openand Closed. | 
| STDT | LITERAL | 30 | true | This parameter contains the start date of the report.  Those cases whose Dateof Occurrence is greater than or equal to the Start date will be included. | 
| ENDDT | LITERAL | 30 | true | This parameter contains the end date of the report.  Those cases whose Dateof Occurrence is less than or equal to the End date will be included. | 
| LTNTT | LITERAL | 30 | true | This parameter will determine whether or not Lost Time claims should be included on the report. | 
| STAT | LITERAL | 256 | true | This parameter will determine whether to run the report for all stations ora single station. | 




 ###### Generated on January 11th 2017, 6:39:43 am