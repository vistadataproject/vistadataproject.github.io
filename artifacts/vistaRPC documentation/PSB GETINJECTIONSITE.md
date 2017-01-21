---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; PSB GETINJECTIONSITE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}PSB GETINJECTIONSITE{:/}
 tag | {::nomarkdown}RPC{:/}
 routine | [PSBINJEC](http://code.osehra.org/dox/Routine_PSBINJEC_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Get the last nn injections site info from the BCMA MEDICATION LOG file #53.9.   Get only of specific Orderable Items per patient in reversechronology date/time order or All Orderable Items per patient in reverse chronology date/time order.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Patient IEN number.{:/} | 
| {::nomarkdown}TIME{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}A time range, in hours, to search backwards through the BCMA MEDICATION LOG file #53.79 for injection site data. {:/} | 
| {::nomarkdown}MAX{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}The maximum number of injection site items to return within the Time Range specified.{:/} | 
| {::nomarkdown}PSBOI{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Orderable Item IEN.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 7:57:53 am</p>{:/}