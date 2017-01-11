---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIRRPTR STOP CANCEL REPORT 

 property | value 
--- | --- 
 label | DSIRRPTR STOP CANCEL REPORT
 tag | STOP
 routine | [DSIRRPTR](http://code.osehra.org/dox/Routine_DSIRRPTR_source.html)
 return value type | SINGLE VALUE
 description | Requests a specified task to stop running. No guarantee that this will always work, however, if a report is asked to stop while running and the report sees the request, the report will clean up the ^XTMP data, stop running and update the DSIR SCHEDULED REPORTS file.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| IEN | LITERAL | 20 | true | Internal entry number of the report to delete in file 19620.35 | 
| WEP | LITERAL | 1 | true | This is a flag to delete the report with extreme prejudice. 0 = No, 1 = Yes, Defaults to 0. | 




 ###### Generated on January 11th 2017, 6:39:43 am