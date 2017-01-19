---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORRHCQ1 GETSLN 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORRHCQ1 GETSLN{:/}
 tag | {::nomarkdown}GETSLN{:/}
 routine | [ORRHCQ1](http://code.osehra.org/dox/Routine_ORRHCQ1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}When a query executes, the sensitive patients are saved off before theyare evaluated, along with the sensitive information gathered fromthe routine PTSEC^DGSEC4.  This RPC returns the sensitive message textfor the given patient when this query attempted to query their record.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}80{:/} | {::nomarkdown}true{:/} | {::nomarkdown}DFN of the sensitive patient.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:21:34 am</p>{:/}