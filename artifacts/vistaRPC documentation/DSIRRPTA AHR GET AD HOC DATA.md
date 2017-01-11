---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIRRPTA AHR GET AD HOC DATA 

 property | value 
--- | --- 
 label | DSIRRPTA AHR GET AD HOC DATA
 tag | AHR
 routine | [DSIRRPTA](http://code.osehra.org/dox/Routine_DSIRRPTA_source.html)
 return value type | GLOBAL ARRAY
 description | This calls schedules or runs an ad hoc report and returns the taskinformation or the report data.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| INARRAY | LIST | 200 | true | Input Parameter(s) - ARRAY AS FOLLOWS:  \FIELD1_IEN^FIELD2_IEN^...^FIELDn_IEN       (REQUIRED-VARIABLE NUMBER OF FIELDS)  FILTER/SELECTION FIELDS (OPTIONAL)  \F1\^F1_IEN^F1_VALUE  \F2\^F2_IEN^F1_VALUE  \F3\^F3_IEN^F1_VALUE  DATE RANGE FIELDS (OPTIONAL)  \R1\^R1_IEN^F1_VALUE1^F1_VALUE2  \R2\^R2_IEN^R2_VALUE2^R2_VALUE2^[\A\|\O\] (\A\=And \O\=Or)  SORT FIELDS (OPTIONAL)  \S1\^S1_IEN^[\A\|\D\] (\A - ASCENDING IS THE DEFAULT, \D\ - DESCENDING)  \S2\^S2_IEN^[\A\|\D\] (\A - ASCENDING IS THE DEFAULT, \D\ - DESCENDING)  \S3\^S3_IEN^[\A\|\D\] (\A - ASCENDING IS THE DEFAULT, \D\ - DESCENDING) | 
| SCHED | LITERAL | 1 | true | This is an optional boolean field to indicate whether of not the reportshould be scheduled. | 
| ESTART | LITERAL | 15 | true | This is the earliest start time for a task to launch if the report isscheduled. | 




Generated on January 11th 2017, 6:34:23 am