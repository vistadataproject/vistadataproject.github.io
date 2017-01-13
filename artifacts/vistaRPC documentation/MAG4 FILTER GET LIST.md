---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAG4 FILTER GET LIST 

 property | value 
--- | --- 
 label | {::nomarkdown}MAG4 FILTER GET LIST{:/}
 tag | {::nomarkdown}GETLIST{:/}
 routine | [MAGGSFLT](http://code.osehra.org/dox/Routine_MAGGSFLT_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list of Image FiltersEither for a specific user (Private filters)or Public filters.Some Public filters are distributed with the installation.Public filters can also be created by the Imaging site manager.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}USER{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}40{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is DUZ, if \\ is sent, then the RPC retrieves the Public filters.{:/} | 




 Generated on January 13th 2017, 5:52:13 am