---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DENTV GET CODE LIST 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DENTV GET CODE LIST{:/}
 tag | {::nomarkdown}LIST{:/}
 routine | [DENTVRP1](http://code.osehra.org/dox/Routine_DENTVRP1_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This call will return all ADA CPT codes which match the inputted string.You can pass the cpt code name or a string, like 'surf'.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}VAL{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the string of characters that will be used in a Fileman lookup onthe ADA code file (#228).  You may send either the ada code name or astring of characters, like 'surface'{:/} | 
| {::nomarkdown}DATE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}7{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the visit date for which you wish to retreive a list of ICD diagnosis codes.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on February 3rd 2017, 7:02:04 am</p>{:/}