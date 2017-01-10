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

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | REPORT | LITERAL |  | true | An index value for the report to be exported. | 
| vs:Input_Parameter-8994_02 | STARTDT | LITERAL | 8 | true | The date, as YYYYMMDD, from which to start the query. If null, defaults to date of the earliest record. | 
| vs:Input_Parameter-8994_02 | STOPDT | LITERAL | 8 | true | The date, as YYYYMMDD, bracketing the end of the query. If null, defaults to TODAY. | 