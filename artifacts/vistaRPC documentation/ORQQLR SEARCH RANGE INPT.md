---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORQQLR SEARCH RANGE INPT 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQQLR SEARCH RANGE INPT{:/}
 tag | {::nomarkdown}SRIN{:/}
 routine | [ORQQLR](http://code.osehra.org/dox/Routine_ORQQLR_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns the date search range in number of days (e.g. 2) to begin the search before today. For example, a value of 2 would indicate to limit thesearch between two days and today. Limited to inpatients.{:/}


### Method description

 property | value 
--- | --- 
 Method comment | return lab results search date range for an inpatient

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PATIENT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}32{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Identifier from Patient file [#2].{:/} | 




 Generated on January 13th 2017, 5:52:13 am