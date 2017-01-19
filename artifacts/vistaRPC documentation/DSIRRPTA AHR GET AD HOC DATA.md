---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIRRPTA AHR GET AD HOC DATA 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIRRPTA AHR GET AD HOC DATA{:/}
 tag | {::nomarkdown}AHR{:/}
 routine | [DSIRRPTA](http://code.osehra.org/dox/Routine_DSIRRPTA_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This calls schedules or runs an ad hoc report and returns the taskinformation or the report data.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}INARRAY{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}200{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Input Parameter(s) - ARRAY AS FOLLOWS:  \FIELD1_IEN^FIELD2_IEN^...^FIELDn_IEN       (REQUIRED-VARIABLE NUMBER OF FIELDS)  FILTER/SELECTION FIELDS (OPTIONAL)  \F1\^F1_IEN^F1_VALUE  \F2\^F2_IEN^F1_VALUE  \F3\^F3_IEN^F1_VALUE  DATE RANGE FIELDS (OPTIONAL)  \R1\^R1_IEN^F1_VALUE1^F1_VALUE2  \R2\^R2_IEN^R2_VALUE2^R2_VALUE2^[\A\\O\] (\A\=And \O\=Or)  SORT FIELDS (OPTIONAL)  \S1\^S1_IEN^[\A\\D\] (\A - ASCENDING IS THE DEFAULT, \D\ - DESCENDING)  \S2\^S2_IEN^[\A\\D\] (\A - ASCENDING IS THE DEFAULT, \D\ - DESCENDING)  \S3\^S3_IEN^[\A\\D\] (\A - ASCENDING IS THE DEFAULT, \D\ - DESCENDING){:/} | 
| {::nomarkdown}SCHED{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is an optional boolean field to indicate whether of not the reportshould be scheduled.{:/} | 
| {::nomarkdown}ESTART{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}15{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the earliest start time for a task to launch if the report isscheduled.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:21:34 am</p>{:/}