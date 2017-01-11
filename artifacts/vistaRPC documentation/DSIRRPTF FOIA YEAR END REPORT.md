---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIRRPTF FOIA YEAR END REPORT 

 property | value 
--- | --- 
 label | DSIRRPTF FOIA YEAR END REPORT
 tag | FOIA
 routine | [DSIRRPTF](http://code.osehra.org/dox/Routine_DSIRRPTF_source.html)
 return value type | GLOBAL ARRAY
 description | This RPC will collect the data for the year end FOIA report for VA Form0712

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| FRDT | LITERAL | 7 | true | The FileMan Format date to start the report.  Typically this will beOctober 1st of the previous year. | 
| TODT | LITERAL | 7 | true | This is the end date for the report period.  Typically this will beSeptember 30th of the current year. | 
| DIV | LITERAL | 20 | true | This is the list of internal division for the current user or another division that the current user has access to. | 
| QUICK | LITERAL | 1 | true | 0 - Calculate the report and save the results if report for a fiscal year1 - Return the stored results of the report for a fiscal year2 - Return the combined stored results and user add ins for a fiscal year | 
| SCHED | LITERAL | 1 | true | This is an optional boolean field to indicate whether of not the reportshould be scheduled. | 
| ESTART | LITERAL | 15 | true | This is the earliest start time for a task to launch if the report isscheduled. | 




 Generated on January 11th 2017, 7:15:04 am