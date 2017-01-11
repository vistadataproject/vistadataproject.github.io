---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DVBAD CONTRACTED EXAM REPORTS 

 property | value 
--- | --- 
 label | DVBAD CONTRACTED EXAM REPORTS
 tag | CERPTS
 routine | [DVBACER1](http://code.osehra.org/dox/Routine_DVBACER1_source.html)
 return value type | GLOBAL ARRAY
 description | Allows demTRAN (GUI) to execute the Detailed, Summary and Timeliness contracted exam reports.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DVBARTYP | LITERAL | 1 | true | The type of contracted exam report to execute: D: Detailed, S: Summary, or T: Timeliness. | 
| DVBAFLTRS | LIST |  | true | Optional parameter that allows filtering the contracted exam results. The filters include DATE, a date range, CONTRACTOR, IEN of specific contractor, PENDING, referred exams only and SORT for grouping results by contractor or request date/time (Used for Detailed Reports Only). | 




 Generated on January 11th 2017, 7:15:04 am