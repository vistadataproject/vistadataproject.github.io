---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; YTRP INSTRUMENT REPORT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}YTRP INSTRUMENT REPORT{:/}
 tag | {::nomarkdown}INTRMNT{:/}
 routine | [YTRPWRP](http://code.osehra.org/dox/Routine_YTRPWRP_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This remote procedure allows staff to print out psychological tests andinterview reports.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}YSDFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}YSDFN is a pointer to the Patient file #2.{:/} | 
| {::nomarkdown}YSXT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}60{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This varible contains \Test Completion Date,Name of the test\, for example3000721,223.The Name of the test and Completion Date are field 0.1 and field 1 of thePsych Instrument Patient file #601.2.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 2:31:55 am</p>{:/}