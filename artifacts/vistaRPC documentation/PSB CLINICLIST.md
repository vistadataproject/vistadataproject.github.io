---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; PSB CLINICLIST 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}PSB CLINICLIST{:/}
 tag | {::nomarkdown}GETLIST{:/}
 routine | [PSBRPC](http://code.osehra.org/dox/Routine_PSBRPC_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Returns Active Clinic names based on Search criteria.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PREFIX{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}First search criteria, which is used to find clinic names that begin with these characters to create a subset list.{:/} | 
| {::nomarkdown}CONTAINS{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Second search criteria, if populated, then this search text is used to search the previously created Subset list, for if Contains this text. Then this final list is sent back to the BCMA GUI Client.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 10:14:32 pm</p>{:/}