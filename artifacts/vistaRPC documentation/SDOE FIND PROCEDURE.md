---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; SDOE FIND PROCEDURE 

 property | value 
--- | --- 
 label | {::nomarkdown}SDOE FIND PROCEDURE{:/}
 tag | {::nomarkdown}FINDCPT{:/}
 routine | [SDOERPC](http://code.osehra.org/dox/Routine_SDOERPC_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This Remote Procedure Call (RPC) returns a boolean indicator onwhether a specific procedure is associated with an encounter.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ENCOUNTER IEN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the internal entry number of an entry in the OUTPATIENTENCOUNTER [#409.68 - ^SCE] file.{:/} | 
| {::nomarkdown}CPT IEN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the internal entry number of an entry in the CPT [#81 - ^ICPT] file.{:/} | 




 Generated on January 13th 2017, 7:15:27 am