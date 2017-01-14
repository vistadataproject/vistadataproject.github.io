---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; SDOE LIST ENCOUNTERS FOR PAT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}SDOE LIST ENCOUNTERS FOR PAT{:/}
 tag | {::nomarkdown}LISTPAT{:/}
 routine | [SDOERPC](http://code.osehra.org/dox/Routine_SDOERPC_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This Remote Procedure Call (RPC) returns a list of OutpatientEncounters for a specified patient and specified date range.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}BEGIN DATE/TIME{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Beginning date and time in VA FileMan format.Time is optional.{:/} | 
| {::nomarkdown}END DATE/TIME{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}End date and time in VA FileMan format.Time is optional.{:/} | 
| {::nomarkdown}PATIENT ID{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the internal entry number of an entry in the PATIENT [#2 - ^DPT] file.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:46:15 am</p>{:/}