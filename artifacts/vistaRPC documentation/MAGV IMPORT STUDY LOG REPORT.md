---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGV IMPORT STUDY LOG REPORT 

 property | value 
--- | --- 
 label | MAGV IMPORT STUDY LOG REPORT
 tag | IMPLOGEX
 routine | [MAGVIM03](http://code.osehra.org/dox/Routine_MAGVIM03_source.html)
 return value type | GLOBAL ARRAY
 description | Exports data from the MAGV IMPORT STUDY LOG file (#2006.9421) as formatted reports.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| REPORT | LITERAL |  | true | An index value for the report to be exported. | 
| STARTDT | LITERAL | 8 | true | The date, as YYYYMMDD, from which to start the query. If null, defaults to date of the earliest record. | 
| STOPDT | LITERAL | 8 | true | The date, as YYYYMMDD, bracketing the end of the query. If null, defaults to TODAY. | 




 ###### Generated on January 11th 2017, 6:39:43 am