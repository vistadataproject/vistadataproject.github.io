---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; SDOE FIND DIAGNOSIS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}SDOE FIND DIAGNOSIS{:/}
 tag | {::nomarkdown}FINDDX{:/}
 routine | [SDOERPC](http://code.osehra.org/dox/Routine_SDOERPC_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This Remote Procedure Call (RPC) returns a boolean indicator onwhether a specific diagnosis is associated with an encounter.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ENCOUNTER IEN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the internal entry number of an entry in the OUTPATIENTENCOUNTER [#409.68 - ^SCE] file.{:/} | 
| {::nomarkdown}DIAGNOSIS IEN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the internal entry number of an entry in the ICDDIAGNOSIS (#80) file.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 4:20:09 am</p>{:/}