---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ANRV GET PT OUTCOMES 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ANRV GET PT OUTCOMES{:/}
 tag | {::nomarkdown}GETREC{:/}
 routine | [ANRVOB](http://code.osehra.org/dox/Routine_ANRVOB_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns top level IEN and sub record IEN plus statuses.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}RESULTS{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Results of inquiry, includes top record and sub record status and IEN.{:/} | 
| {::nomarkdown}PTDFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}50{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Patients internal entry number.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:28:51 am</p>{:/}