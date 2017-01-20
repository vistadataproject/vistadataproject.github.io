---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGQ ELOGR 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAGQ ELOGR{:/}
 tag | {::nomarkdown}ELOGR{:/}
 routine | [MAGQBPRG](http://code.osehra.org/dox/Routine_MAGQBPRG_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This provides a method of capturing errors logged during the purgeprocess.  This function provides a list which can be examined at a laterdate and will be rolled into the purge log file on the BP Server which performed the purge.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}NULL{:/} |  |  | {::nomarkdown}true{:/} | {::nomarkdown}No input parameter is defined.{:/} | 
| {::nomarkdown}LIMIT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}5{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This value is used to control the array size.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 5:08:32 am</p>{:/}