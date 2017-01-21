---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DVBAB EXAMS BY DATE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DVBAB EXAMS BY DATE{:/}
 tag | {::nomarkdown}EXAMBYDT{:/}
 routine | [DVBABEBD](http://code.osehra.org/dox/Routine_DVBABEBD_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Provides a report by date range of all AMIE/CAPRI exam requests.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}BEGDT{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} |  | 
| {::nomarkdown}ENDDT{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} |  | 
| {::nomarkdown}DVBADLMTR{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The delimiter indicates whether the report should be produced in a comma delimited format (.csv file) or not. DVBADLMTR=0 means report displays inplain text. DVBADLMTR=1 means report will be created as a .csv fileimportable to Excel.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 4:20:10 am</p>{:/}