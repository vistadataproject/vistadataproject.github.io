---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGV IMPORT STUDY LOG REPORT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAGV IMPORT STUDY LOG REPORT{:/}
 tag | {::nomarkdown}IMPLOGEX{:/}
 routine | [MAGVIM03](http://code.osehra.org/dox/Routine_MAGVIM03_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Exports data from the MAGV IMPORT STUDY LOG file (#2006.9421) as formatted reports.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}REPORT{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}An index value for the report to be exported.{:/} | 
| {::nomarkdown}STARTDT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}8{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The date, as YYYYMMDD, from which to start the query. If null, defaults to date of the earliest record.{:/} | 
| {::nomarkdown}STOPDT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}8{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The date, as YYYYMMDD, bracketing the end of the query. If null, defaults to TODAY.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 2:53:15 am</p>{:/}