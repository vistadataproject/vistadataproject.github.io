---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; SDOE LIST ENCOUNTERS FOR VISIT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}SDOE LIST ENCOUNTERS FOR VISIT{:/}
 tag | {::nomarkdown}LISTVST{:/}
 routine | [SDOERPC](http://code.osehra.org/dox/Routine_SDOERPC_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This Remote Procedure Call (RPC) returns a list of OutpatientEncounters for a specified visit.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}VISIT IEN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the internal entry number of an entry in theVISIT [#9000010 - ^AUPNVSIT] file.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:10:56 am</p>{:/}