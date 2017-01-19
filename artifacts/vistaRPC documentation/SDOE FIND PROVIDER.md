---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; SDOE FIND PROVIDER 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}SDOE FIND PROVIDER{:/}
 tag | {::nomarkdown}FINDPRV{:/}
 routine | [SDOERPC](http://code.osehra.org/dox/Routine_SDOERPC_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This Remote Procedure Call (RPC) returns a boolean indicatoron whether a specific provider is associated with an encounter.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ENCOUNTER IEN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the internal entry number of an entry in the OUTPATIENTENCOUNTER [#409.68 - ^SCE] file.{:/} | 
| {::nomarkdown}PRACTITIONER ID{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the internal entry number of an entry in the NEW PERSON[#200 - ^VA(200)] file for a practitioner.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 8:55:11 am</p>{:/}