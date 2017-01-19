---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAG4 FILTER GET LIST 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAG4 FILTER GET LIST{:/}
 tag | {::nomarkdown}GETLIST{:/}
 routine | [MAGGSFLT](http://code.osehra.org/dox/Routine_MAGGSFLT_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list of Image FiltersEither for a specific user (Private filters)or Public filters.Some Public filters are distributed with the installation.Public filters can also be created by the Imaging site manager.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}USER{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}40{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is DUZ, if \\ is sent, then the RPC retrieves the Public filters.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:28:51 am</p>{:/}