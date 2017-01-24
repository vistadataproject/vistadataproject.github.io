---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; PSB IV ORDER HISTORY 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}PSB IV ORDER HISTORY{:/}
 tag | {::nomarkdown}GETOHIST{:/}
 routine | [PSBRPC2](http://code.osehra.org/dox/Routine_PSBRPC2_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Returns individual detailed bag history.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Patients IEN number{:/} | 
| {::nomarkdown}PSBORD{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Order number from Inpatient Medications{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:30:12 am</p>{:/}