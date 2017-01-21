---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; GMV CLINIC PT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}GMV CLINIC PT{:/}
 tag | {::nomarkdown}CLINPTS{:/}
 routine | [GMVCLIN](http://code.osehra.org/dox/Routine_GMVCLIN_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This procedure lists patients who have an appointment for a selectedclinic and a given period of time.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}CLIN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}CLIN contains the name of the selected clinic from the Hospital Locationfile (#44).{:/} | 
| {::nomarkdown}BDATE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}BDATE contains TODAY, TOMORROW, YESTERDAY, PAST WEEK or PAST MONTH.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 4:20:10 am</p>{:/}