---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; PSB MEDICATION HISTORY 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}PSB MEDICATION HISTORY{:/}
 tag | {::nomarkdown}HISTORY{:/}
 routine | [PSBMLHS](http://code.osehra.org/dox/Routine_PSBMLHS_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Returns the history of a medication for a patient from the orderable item.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Patient IEN number.{:/} | 
| {::nomarkdown}PSBOI{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Orderable Item #{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 5:08:31 am</p>{:/}