---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; SDOE LIST ENCOUNTERS FOR DATES 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}SDOE LIST ENCOUNTERS FOR DATES{:/}
 tag | {::nomarkdown}LIST{:/}
 routine | [SDOERPC](http://code.osehra.org/dox/Routine_SDOERPC_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This Remote Procedure Call (RPC) returns a list of OutpatientEncounters for a specified date range.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}BEGIN DATE/TIME{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Beginning date and time in VA FileMan format.Time is optional.{:/} | 
| {::nomarkdown}END DATE/TIME{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}End date and time in VA FileMan format.Time is optional.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:30:11 am</p>{:/}