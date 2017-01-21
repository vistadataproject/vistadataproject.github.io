---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIRRPTV FOIAV FOIA VALIDATION 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIRRPTV FOIAV FOIA VALIDATION{:/}
 tag | {::nomarkdown}FOIAV{:/}
 routine | [DSIRRPTV](http://code.osehra.org/dox/Routine_DSIRRPTV_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This RPC will return a global array of all records thkat were looked atfor the year end FOIA report.  It will contain the internal requestnumber and patient name/FOIA indicator, and a one for any block on thereport that the given request was included on.  It also contains allrecord that, during the report period, were entered in error or of thetype of request/requestor type of an excluded state reporting agency.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}FRDT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}7{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Start date for report data.{:/} | 
| {::nomarkdown}TODT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}7{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Last date for reporting.{:/} | 
| {::nomarkdown}DIV{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}99{:/} | {::nomarkdown}true{:/} | {::nomarkdown}List of one or more divisions for which data will be reported.  I omitted, the clerk's DUZ(2) will be used.{:/} | 
| {::nomarkdown}SCHED{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Schedule - Boolean for scheduled or immediate run           1 = Schedule / 0 or Null = Run Immediately{:/} | 
| {::nomarkdown}ESTART{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}15{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Earliet time to start the scheaduled task.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 7:57:53 am</p>{:/}